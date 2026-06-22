\# Azure Automation - Delete Resources After 1 Hour



\## Description



Ce laboratoire montre comment déployer automatiquement un Azure Automation Account capable de supprimer des Resource Groups temporaires après une heure.



L'objectif est d'éviter les coûts liés aux environnements de démonstration ou de formation.



\---



\## Technologies utilisées



\- Azure Automation

\- Managed Identity

\- PowerShell

\- Bicep

\- Azure Resource Manager



\---



\## Architecture



```

Utilisateur

&#x20;     │

&#x20;     ▼

Automation Schedule

&#x20;     │

&#x20;     ▼

Runbook PowerShell

&#x20;     │

&#x20;     ▼

Managed Identity

&#x20;     │

&#x20;     ▼

Azure Resource Manager

&#x20;     │

&#x20;     ▼

Suppression des Resource Groups

```



\---



\## Contenu



| Fichier | Description |

|----------|-------------|

| DeleteResourcesAfter1H.ps1 | Script PowerShell |

| main.bicep | Déploiement principal |

| automation.bicep | Création du compte Automation |

| runbooks.bicep | Déploiement du Runbook |

| schedules.bicep | Planification |

| parameters.json | Paramètres |



\---



\## Déploiement



```bash

az deployment sub create \\

&#x20;   --location francecentral \\

&#x20;   --template-file main.bicep \\

&#x20;   --parameters parameters.json

```



\---



\## Résultat



Les Resource Groups temporaires sont supprimés automatiquement après une heure si les critères du script sont remplis.



\---



\## Auteur



\*\*Germain Yao\*\*



Azure Cloud Architect

