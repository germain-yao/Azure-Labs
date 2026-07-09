# Déploiement

## Connexion Azure

```bash
az login
```

## Sélection de l'abonnement

```bash
az account set --subscription "<SubscriptionID>"
```

## Validation

```bash
./scripts/validate.sh
```

## Simulation

```bash
./scripts/whatif.sh
```

## Déploiement

```bash
./scripts/deploy.sh
```