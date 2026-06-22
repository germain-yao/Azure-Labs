resource jobSchedule 'Microsoft.Automation/automationAccounts/jobSchedules@2023-11-01' = {
  parent: automation

  name: guid(schedule.id,'Remove-LabResourceGroups')

  properties: {
    runbook: {
      name: 'Remove-LabResourceGroups'
    }

    schedule: {
      name: schedule.name
    }
  }
}