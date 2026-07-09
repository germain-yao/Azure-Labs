#!/bin/bash

RESOURCE_GROUP="rg-afnt-exam-dev"

az deployment group what-if \
    --resource-group $RESOURCE_GROUP \
    --template-file ../bicep/main.bicep \
    --parameters ../bicep/parameters/dev.parameters.json