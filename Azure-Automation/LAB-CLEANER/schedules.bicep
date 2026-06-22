param automationAccountName string

resource automation 'Microsoft.Automation/automationAccounts@2023-11-01' existing = {
  name: automationAccountName
}

resource schedule 'Microsoft.Automation/automationAccounts/schedules@2023-11-01' = {
  parent: automation

  name: 'Every5Minutes'

  properties: {
    startTime: dateTimeAdd(utcNow(), 'PT5M')

    frequency: 'Minute'

    interval: 5

    timeZone: 'UTC'
  }
}