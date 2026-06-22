targetScope = 'resourceGroup'

@description('Nom du compte Automation')
param automationAccountName string

@description('Région')
param location string = resourceGroup().location

module automation './automation.bicep' = {
  name: 'automation'
  params: {
    automationAccountName: automationAccountName
    location: location
  }
}

module runbooks './runbooks.bicep' = {
  name: 'runbooks'
  dependsOn: [
    automation
  ]
  params: {
    automationAccountName: automationAccountName
  }
}

module schedules './schedules.bicep' = {
  name: 'schedule'
  dependsOn: [
    runbooks
  ]
  params: {
    automationAccountName: automationAccountName
  }
}