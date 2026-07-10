@description('Deployment location')
param location string

@description('Resource name prefix')
param prefix string

resource workspace 'Microsoft.OperationalInsights/workspaces@2022-10-01' = {
  name: '${prefix}-law'
  location: location

  properties: {
    retentionInDays: 30
  }

  sku: {
    name: 'PerGB2018'
  }
}

resource appInsights 'Microsoft.Insights/components@2020-02-02' = {
  name: '${prefix}-appi'
  location: location
  kind: 'web'

  properties: {
    Application_Type: 'web'
    WorkspaceResourceId: workspace.id
  }
}

output workspaceName string = workspace.name
output workspaceId string = workspace.id

output applicationInsightsName string = appInsights.name
output applicationInsightsId string = appInsights.id

output applicationInsightsConnectionString string = appInsights.properties.ConnectionString
