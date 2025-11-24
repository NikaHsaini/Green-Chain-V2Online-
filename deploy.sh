#!/bin/bash

# Script de déploiement automatique pour GitHub
# MyCrypto Energy - Green Chain™

set -e  # Arrêter en cas d'erreur

# Couleurs pour les messages
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}============================================================${NC}"
echo -e "${BLUE}  MyCrypto Energy - Green Chain™${NC}"
echo -e "${BLUE}  Script de Déploiement GitHub${NC}"
echo -e "${BLUE}============================================================${NC}\n"

# Vérifier si Git est installé
if ! command -v git &> /dev/null; then
    echo -e "${RED}✗ Git n'est pas installé${NC}"
    echo -e "${YELLOW}Veuillez installer Git depuis https://git-scm.com/${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Git trouvé${NC}\n"

# Vérifier si c'est déjà un dépôt Git
if [ ! -d .git ]; then
    echo -e "${BLUE}[Étape 1] Initialisation du dépôt Git...${NC}"
    git init
    git branch -M main
    echo -e "${GREEN}✓ Dépôt Git initialisé${NC}\n"
else
    echo -e "${GREEN}✓ Dépôt Git déjà initialisé${NC}\n"
fi

# Demander l'URL du dépôt distant si pas encore configuré
if ! git remote | grep -q origin; then
    echo -e "${BLUE}[Étape 2] Configuration du dépôt distant${NC}"
    echo -e "${YELLOW}Entrez l'URL de votre dépôt GitHub :${NC}"
    echo -e "${YELLOW}(Format : https://github.com/VOTRE-USERNAME/mcb-greencoin-v3.git)${NC}"
    read -p "URL : " REPO_URL
    
    if [ -z "$REPO_URL" ]; then
        echo -e "${RED}✗ URL vide, abandon${NC}"
        exit 1
    fi
    
    git remote add origin "$REPO_URL"
    echo -e "${GREEN}✓ Dépôt distant configuré${NC}\n"
else
    echo -e "${GREEN}✓ Dépôt distant déjà configuré${NC}"
    REPO_URL=$(git remote get-url origin)
    echo -e "${BLUE}URL : ${REPO_URL}${NC}\n"
fi

# Demander le message de commit
echo -e "${BLUE}[Étape 3] Préparation du commit${NC}"
echo -e "${YELLOW}Entrez un message de commit (ou appuyez sur Entrée pour le message par défaut) :${NC}"
read -p "Message : " COMMIT_MSG

if [ -z "$COMMIT_MSG" ]; then
    COMMIT_MSG="Update: $(date '+%Y-%m-%d %H:%M:%S')"
fi

# Ajouter tous les fichiers
echo -e "\n${BLUE}Ajout des fichiers...${NC}"
git add .

# Créer le commit
echo -e "${BLUE}Création du commit...${NC}"
git commit -m "$COMMIT_MSG" || echo -e "${YELLOW}⚠ Aucun changement à commiter${NC}"

echo -e "${GREEN}✓ Commit créé${NC}\n"

# Pousser vers GitHub
echo -e "${BLUE}[Étape 4] Push vers GitHub...${NC}"
echo -e "${YELLOW}Pushing to ${REPO_URL}...${NC}\n"

if git push -u origin main; then
    echo -e "\n${GREEN}✓ Code poussé avec succès !${NC}\n"
    
    # Extraire le nom d'utilisateur et le nom du dépôt
    if [[ $REPO_URL =~ github\.com[:/]([^/]+)/([^/.]+) ]]; then
        USERNAME="${BASH_REMATCH[1]}"
        REPONAME="${BASH_REMATCH[2]}"
        SITE_URL="https://${USERNAME}.github.io/${REPONAME}/"
        
        echo -e "${BLUE}============================================================${NC}"
        echo -e "${GREEN}  Déploiement en cours...${NC}"
        echo -e "${BLUE}============================================================${NC}\n"
        echo -e "${YELLOW}Le site sera disponible dans quelques minutes à :${NC}"
        echo -e "${GREEN}${SITE_URL}${NC}\n"
        echo -e "${YELLOW}Vérifiez le statut du déploiement sur :${NC}"
        echo -e "${BLUE}https://github.com/${USERNAME}/${REPONAME}/actions${NC}\n"
    fi
    
    echo -e "${GREEN}✓ Déploiement terminé avec succès !${NC}\n"
else
    echo -e "\n${RED}✗ Erreur lors du push${NC}"
    echo -e "${YELLOW}Vérifiez vos identifiants GitHub et réessayez${NC}"
    exit 1
fi
