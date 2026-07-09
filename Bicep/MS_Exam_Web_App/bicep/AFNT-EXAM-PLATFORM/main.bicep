targetScope = 'resourceGroup'

@description('Deployment location')
param location string = resourceGroup().location

@description('Resource name prefix')
param prefix string = 'afnt'

@secure()
@description('SQL Administrator Password')
param sqlPassword string

// ======================
// Storage
// ======================

module storage './modules/storage.bicep' = {
  name: 'storageDeployment'

  params: {
    location: location
    prefix: prefix
  }
}

// ======================
// SQL
// ======================

module sql './modules/sql.bicep' = {
  name: 'sqlDeployment'

  params: {
    location: location
    prefix: prefix
    sqlPassword: sqlPassword
  }
}

// ======================
// Key Vault
// ======================

module keyvault './modules/keyvault.bicep' = {
  name: 'keyVaultDeployment'

  params: {
    location: location
    prefix: prefix
  }
}

// ======================
// App Service Plan
// ======================

module appservice './modules/appserviceplan.bicep' = {
  name: 'appServicePlanDeployment'

  params: {
    location: location
    prefix: prefix
  }
}

// ======================
// Function App
// ======================

module function './modules/functionapp.bicep' = {
  name: 'functionDeployment'

  params: {
    location: location
    prefix: prefix

    appServicePlanId: appservice.outputs.appServicePlanId

    storageAccountName: storage.outputs.storageAccountName

    // Temporairement vide.
    // Nous remplacerons cela par Managed Identity + Key Vault.
    storageAccountKey: ''
  }
}

// ======================
// Static Web App
// ======================

module staticweb './modules/staticwebapp.bicep' = {
  name: 'staticWebDeployment'

  params: {
    location: location
    prefix: prefix
  }
}

// ======================
// Monitoring
// ======================

module monitoring './modules/monitoring.bicep' = {
  name: 'monitoringDeployment'

  params: {
    location: location
    prefix: prefix
  }
}

// ======================
// Networking
// ======================

module networking './modules/networking.bicep' = {
  name: 'networkDeployment'

  params: {
    location: location
    prefix: prefix
  }
}

// ======================
// Managed Identity
// ======================

module identities './modules/identities.bicep' = {
  name: 'identityDeployment'

  params: {
    location: location
    prefix: prefix
  }
}
