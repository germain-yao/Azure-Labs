param automationAccountName string
param location string

resource automation 'Microsoft.Automation/automationAccounts@2023-11-01' = {
  name: automationAccountName
  location: location

  identity: {
    type: 'SystemAssigned'
  }

  properties: {
    sku: {
      name: 'Basic'
    }
  }
}