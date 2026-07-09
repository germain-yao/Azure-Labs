targetScope = 'resourceGroup'


@description('Azure region')
param location string = 'westeurope'


@description('Environment')
param environment string = 'LAB'


var prefix = 'AFNT'


module monitoring './modules/monitoring.bicep' = {

  name: 'monitoringDeployment'

  params: {
    location: location
    prefix: prefix
  }

}


module storage './modules/storage.bicep' = {

  name: 'storageDeployment'

  params: {
    location: location
    prefix: prefix
  }

}


module keyvault './modules/keyvault.bicep' = {

  name: 'keyvaultDeployment'

  params: {
    location: location
    prefix: prefix
  }

}


module sql './modules/sql.bicep' = {

  name: 'sqlDeployment'

  params: {

    location: location
    prefix: prefix

  }

}


module function './modules/functionapp.bicep' = {

  name:'functionDeployment'

  params: {

    location:location

    prefix:prefix

    storageName:storage.outputs.storageName

    keyVaultName:keyvault.outputs.keyVaultName

    appInsightsName:monitoring.outputs.appInsightsName

  }

}


module web './modules/staticweb.bicep' = {

 name:'webDeployment'

 params:{
   location:location
   prefix:prefix
 }

}