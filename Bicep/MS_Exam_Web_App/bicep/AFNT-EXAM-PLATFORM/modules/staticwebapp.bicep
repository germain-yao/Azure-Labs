@description('Deployment location')
param location string

@description('Resource name prefix')
param prefix string

resource staticWebApp 'Microsoft.Web/staticSites@2022-09-01' = {
  name: '${toLower(prefix)}-web'
  location: location

  sku: {
    name: 'Free'
    tier: 'Free'
  }

  properties: {
    stagingEnvironmentPolicy: 'Enabled'
  }
}

output staticWebAppName string = staticWebApp.name
output defaultHostname string = staticWebApp.properties.defaultHostname
