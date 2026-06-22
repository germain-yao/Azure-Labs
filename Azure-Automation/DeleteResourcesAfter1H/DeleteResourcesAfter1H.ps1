# ==========================================================
# Runbook : DeleteResourcesAfter1H.ps1
# Description :
#   - Se connecte avec la Managed Identity
#   - Recherche les Resource Groups tagués AutoDelete=True
#   - Ajoute le tag DeleteAfter si absent
#   - Supprime les Resource Groups expirés
# ==========================================================

# Authentification Azure
Connect-AzAccount -Identity

$now = (Get-Date).ToUniversalTime()

Write-Output "======================================="
Write-Output "Début du contrôle des Resource Groups"
Write-Output "Date UTC : $now"
Write-Output "======================================="

$resourceGroups = Get-AzResourceGroup

foreach ($rg in $resourceGroups)
{
    try
    {
        $rgName = $rg.ResourceGroupName

        Write-Output ""
        Write-Output "Analyse du Resource Group : $rgName"

        # ----------------------------------------------------
        # Exclusions
        # ----------------------------------------------------

        if ($rgName -like "AFNT-*")
        {
            Write-Output "Exclu (préfixe AFNT)"
            continue
        }

        if ($rgName -eq "NetworkWatcherRG")
        {
            Write-Output "Exclu (NetworkWatcherRG)"
            continue
        }

        # ----------------------------------------------------
        # Vérification du tag AutoDelete
        # ----------------------------------------------------

        if ($null -eq $rg.Tags)
        {
            Write-Output "Aucun tag."
            continue
        }

        if (-not $rg.Tags.ContainsKey("AutoDelete"))
        {
            Write-Output "Tag AutoDelete absent."
            continue
        }

        if ($rg.Tags["AutoDelete"] -ne "True")
        {
            Write-Output "AutoDelete=False"
            continue
        }

        # ----------------------------------------------------
        # DeleteAfter existe déjà ?
        # ----------------------------------------------------

        if ($rg.Tags.ContainsKey("DeleteAfter"))
        {
            $deleteAfter = ([datetime]::Parse($rg.Tags["DeleteAfter"])).ToUniversalTime()

            Write-Output "DeleteAfter : $deleteAfter"

            if ($now -ge $deleteAfter)
            {
                Write-Output "Suppression du Resource Group $rgName"

                Remove-AzResourceGroup `
                    -Name $rgName `
                    -Force `
                    -AsJob
            }
            else
            {
                Write-Output "Pas encore expiré."
            }

            continue
        }

        # ----------------------------------------------------
        # Recherche de la date de création
        # ----------------------------------------------------

        Write-Output "Recherche de la date de création..."

        $creationEvent = Get-AzLog `
            -ResourceGroupName $rgName `
            -StartTime $now.AddDays(-30) |
            Where-Object {
                $_.OperationName.Value -eq "Microsoft.Resources/subscriptions/resourcegroups/write"
            } |
            Sort-Object EventTimestamp |
            Select-Object -First 1

        if ($null -eq $creationEvent)
        {
            Write-Warning "Impossible de récupérer la date de création."
            continue
        }

        $creationTime = $creationEvent.EventTimestamp.ToUniversalTime()

        Write-Output "Créé le : $creationTime"

        # ----------------------------------------------------
        # Calcul DeleteAfter
        # ----------------------------------------------------

        $deleteAfter = $creationTime.AddHours(1)

        Write-Output "Expiration : $deleteAfter"

        # ----------------------------------------------------
        # Copie des tags existants
        # ----------------------------------------------------

        $newTags = @{}

        foreach ($tag in $rg.Tags.GetEnumerator())
        {
            $newTags[$tag.Key] = $tag.Value
        }

        $newTags["DeleteAfter"] = $deleteAfter.ToString("yyyy-MM-ddTHH:mm:ssZ")

        Set-AzResourceGroup `
            -Name $rgName `
            -Tag $newTags

        Write-Output "Tag DeleteAfter ajouté."

    }
    catch
    {
        Write-Error "Erreur sur $($rg.ResourceGroupName)"
        Write-Error $_
    }
}

Write-Output ""
Write-Output "======================================="
Write-Output "Fin du traitement"
Write-Output "======================================="