@description('Deployment location')
param location string

@description('Resource name prefix')
param prefix string

resource keyVault 'Microsoft.KeyVault/vaults@2023-07-01' = {
  name: '${toLower(prefix)}kv${uniqueString(resourceGroup().id)}'
  location: location

  properties: {

    tenantId: subscription().tenantId

    sku: {
      family: 'A'
      name: 'standard'
    }

    enableRbacAuthorization: true

    enableSoftDelete: true

    enablePurgeProtection: true
  }
}

output keyVaultName string = keyVault.name
output keyVaultId string = keyVault.id