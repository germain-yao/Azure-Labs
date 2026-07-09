@description('Deployment location')
param location string

@description('Resource name prefix')
param prefix string

@description('App Service Plan resource ID')
param appServicePlanId string

@description('Storage Account name')
param storageAccountName string

@secure()
@description('Storage Account access key')
param storageAccountKey string

resource functionApp 'Microsoft.Web/sites@2023-12-01' = {
  name: '${prefix}-func'
  location: location
  kind: 'functionapp'

  properties: {
    serverFarmId: appServicePlanId

    siteConfig: {
      appSettings: [
        {
          name: 'AzureWebJobsStorage'
          value: 'DefaultEndpointsProtocol=https;AccountName=${storageAccountName};AccountKey=${storageAccountKey};EndpointSuffix=core.windows.net'
        }
        {
          name: 'FUNCTIONS_WORKER_RUNTIME'
          value: 'dotnet-isolated'
        }
      ]
    }

    httpsOnly: true
  }

  identity: {
    type: 'SystemAssigned'
  }
}

output functionAppName string = functionApp.name
output functionPrincipalId string = functionApp.identity.principalId