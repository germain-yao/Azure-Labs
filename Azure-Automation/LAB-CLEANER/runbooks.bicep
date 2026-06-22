param automationAccountName string

resource automation 'Microsoft.Automation/automationAccounts@2023-11-01' existing = {
  name: automationAccountName
}

resource runbook 'Microsoft.Automation/automationAccounts/runbooks@2023-11-01' = {
  parent: automation

  name: 'Remove-LabResourceGroups'

  properties: {
    runbookType: 'PowerShell72'
    logProgress: true
    logVerbose: true

    publishContentLink: {
      uri: 'https://.../DeleteResourcesAfter1H.ps1'
    }
  }
}