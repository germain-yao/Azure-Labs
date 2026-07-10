#!/bin/bash

RESOURCE_GROUP="AFNT-RG-EXAM"

az deployment group validate \
    --resource-group $RESOURCE_GROUP \
    --template-file ../bicep/main.bicep \
    --parameters ../bicep/parameters/dev.parameters.json