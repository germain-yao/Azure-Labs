#!/bin/bash

RESOURCE_GROUP="rg-afnt-exam-dev"
LOCATION="francecentral"

echo "Connexion Azure..."
az login

echo "Création du Resource Group..."
az group create \
    --name $RESOURCE_GROUP \
    --location $LOCATION

echo "Déploiement..."

az deployment group create \
    --resource-group $RESOURCE_GROUP \
    --template-file ../bicep/main.bicep \
    --parameters ../bicep/parameters/dev.parameters.json

echo "Déploiement terminé."