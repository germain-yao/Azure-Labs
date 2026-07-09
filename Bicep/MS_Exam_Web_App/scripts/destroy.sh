#!/bin/bash

RESOURCE_GROUP="rg-afnt-exam-dev"

az group delete \
    --name $RESOURCE_GROUP \
    --yes \
    --no-wait