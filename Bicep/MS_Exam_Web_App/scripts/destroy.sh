#!/bin/bash

RESOURCE_GROUP="AFNT-RG-EXAM"

az group delete \
    --name $RESOURCE_GROUP \
    --yes \
    --no-wait