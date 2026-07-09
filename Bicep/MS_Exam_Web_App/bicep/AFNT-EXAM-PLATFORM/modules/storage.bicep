@description('Deployment location')
param location string

@description('Resource name prefix')
param prefix string

resource storage 'Microsoft.Storage/storageAccounts@2023-05-01' = {
  name: '${toLower(prefix)}exam${uniqueString(resourceGroup().id)}'
  location: location
  sku: {
    name: 'Standard_LRS'
  }

  kind: 'StorageV2'

  properties: {
    accessTier: 'Hot'
    minimumTlsVersion: 'TLS1_2'
    allowBlobPublicAccess: false
    supportsHttpsTrafficOnly: true
  }
}

output storageAccountName string = storage.name
output storageId string = storage.id