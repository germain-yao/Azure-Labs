@description('Deployment location')
param location string

@description('Resource name prefix')
param prefix string

resource plan 'Microsoft.Web/serverfarms@2023-12-01' = {
  name: '${prefix}-plan'
  location: location

  sku: {
    name: 'Y1'
    tier: 'Dynamic'
  }

  kind: 'functionapp'

  properties: {
    reserved: false
  }
}

output appServicePlanId string = plan.id
output appServicePlanName string = plan.name