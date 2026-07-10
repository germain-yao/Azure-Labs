@description('Deployment location')
param location string

@description('Resource name prefix')
param prefix string

@secure()
@description('SQL Server administrator password')
param sqlPassword string

resource sqlServer 'Microsoft.Sql/servers@2022-11-01-preview' = {
  name: '${toLower(prefix)}sql${uniqueString(resourceGroup().id)}'
  location: location

  properties: {
    administratorLogin: 'afntadmin'
    administratorLoginPassword: sqlPassword
  }
}

resource database 'Microsoft.Sql/servers/databases@2022-11-01-preview' = {
  parent: sqlServer
  name: 'AFNT-EXAM-DB'
  location: location

  sku: {
    name: 'Basic'
    tier: 'Basic'
  }
}

output sqlServerName string = sqlServer.name
output sqlServerId string = sqlServer.id
output sqlDatabaseName string = database.name
output sqlDatabaseId string = database.id
