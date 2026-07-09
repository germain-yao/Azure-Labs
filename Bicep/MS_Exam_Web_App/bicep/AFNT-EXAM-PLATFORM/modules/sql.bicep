@description('Deployment location')
param location string

@description('Resource name prefix')
param prefix string

@secure()
param sqlPassword string

resource sqlServer 'Microsoft.Sql/servers@2023-08-01-preview' = {
  name: '${toLower(prefix)}sql${uniqueString(resourceGroup().id)}'
  location: location

  properties: {
    administratorLogin: 'afntadmin'
    administratorLoginPassword: sqlPassword
  }
}

resource database 'Microsoft.Sql/servers/databases@2023-08-01-preview' = {
  parent: sqlServer
  name: 'AFNT-EXAM-DB'

  sku: {
    name: 'Basic'
    tier: 'Basic'
  }
}

output sqlServerName string = sqlServer.name
output sqlDatabaseName string = database.name