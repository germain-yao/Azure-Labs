targetScope = 'subscription'

resource autoDeletePolicy 'Microsoft.Authorization/policyDefinitions@2023-04-01' = {
  name: 'AutoDelete-Lab-ResourceGroups'

  properties: {
    displayName: 'AutoDelete - Lab Resource Groups'

    description: 'Ajoute automatiquement le tag AutoDelete=True aux Resource Groups temporaires.'

    mode: 'All'

    metadata: {
      category: 'Tags'
      version: '1.0.0'
    }

    policyRule: {
      if: {
        allOf: [
          {
            field: 'type'
            equals: 'Microsoft.Resources/subscriptions/resourceGroups'
          }
          {
            field: 'name'
            notLike: 'AFNT-*'
          }
          {
            field: 'name'
            notEquals: 'NetworkWatcherRG'
          }
        ]
      }

      then: {
        effect: 'modify'

        details: {
          roleDefinitionIds: [
            '/providers/Microsoft.Authorization/roleDefinitions/b24988ac-6180-42a0-ab88-20f7382dd24c'
          ]

          operations: [
            {
              operation: 'addOrReplace'
              field: 'tags.AutoDelete'
              value: 'True'
            }
          ]
        }
      }
    }
  }
}