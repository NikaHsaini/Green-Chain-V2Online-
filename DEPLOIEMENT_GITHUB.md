# 🚀 Guide de Déploiement sur GitHub Pages

Ce guide vous explique comment publier votre site **MyCrypto Energy - Green Chain™** sur GitHub Pages.

---

## 📋 Prérequis

- Un compte GitHub (gratuit sur https://github.com)
- Git installé sur votre ordinateur (https://git-scm.com/)
- Node.js installé (https://nodejs.org/)

---

## ✅ Architecture du Projet

Ce projet est configuré pour GitHub Pages avec les fichiers buildés **à la racine** :

```
mcb-greencoin-v3/
├── index.html          ← Fichier principal à la racine
├── assets/             ← JS et CSS buildés
├── images/             ← Images du site
├── css/                ← Styles additionnels
├── js/                 ← Scripts additionnels
├── .nojekyll          ← Pour GitHub Pages
├── client/             ← Code source (non déployé)
├── build-for-github.sh ← Script de build
└── ...
```

---

## 🎯 Étape 1 : Builder le Projet

Avant de déployer, vous devez builder le projet pour générer les fichiers à la racine.

### Sur macOS/Linux :

```bash
./build-for-github.sh
```

### Sur Windows :

```bash
build-for-github.bat
```

### Ou manuellement :

```bash
npx vite build --config vite.config.github.ts
cp dist/index.html ./index.html
cp -r dist/assets ./assets
cp -r dist/images ./images
cp -r dist/css ./css
cp -r dist/js ./js
cp dist/.nojekyll ./.nojekyll
```

✅ Après cette étape, vous aurez `index.html` et tous les assets à la racine du projet.

---

## 🎯 Étape 2 : Créer un Dépôt GitHub

1. Allez sur https://github.com et connectez-vous
2. Cliquez sur le bouton **"New"** (ou **"+"** en haut à droite → **"New repository"**)
3. Remplissez les informations :
   - **Repository name** : `mcb-greencoin-v3` (ou le nom de votre choix)
   - **Description** : `MyCrypto Energy - Green Chain™ Website`
   - **Visibility** : Choisissez **Public** (pour GitHub Pages gratuit)
   - **Ne cochez PAS** "Initialize this repository with a README"
4. Cliquez sur **"Create repository"**

---

## 🔧 Étape 3 : Pousser le Code vers GitHub

Ouvrez un terminal dans le dossier `mcb-greencoin-v3` et exécutez :

```bash
# Initialiser Git
git init

# Ajouter tous les fichiers (y compris index.html à la racine)
git add .

# Créer le premier commit
git commit -m "Initial commit: MyCrypto Energy - Green Chain™"

# Renommer la branche en 'main'
git branch -M main

# Ajouter le dépôt distant (remplacez VOTRE-USERNAME par votre nom d'utilisateur GitHub)
git remote add origin https://github.com/VOTRE-USERNAME/mcb-greencoin-v3.git

# Pousser le code vers GitHub
git push -u origin main
```

**⚠️ Important** : Remplacez `VOTRE-USERNAME` par votre nom d'utilisateur GitHub réel !

---

## ⚙️ Étape 4 : Configurer GitHub Pages

1. Allez sur votre dépôt GitHub : `https://github.com/VOTRE-USERNAME/mcb-greencoin-v3`
2. Cliquez sur **"Settings"** (Paramètres) dans le menu du dépôt
3. Dans le menu de gauche, cliquez sur **"Pages"**
4. Sous **"Build and deployment"** :
   - **Source** : Sélectionnez **"Deploy from a branch"**
   - **Branch** : Sélectionnez **"main"** et **"/ (root)"**
5. Cliquez sur **"Save"**

---

## 🎉 Étape 5 : Accéder à Votre Site

Votre site sera automatiquement déployé en quelques minutes à :

```
https://VOTRE-USERNAME.github.io/mcb-greencoin-v3/
```

Attendez 2-3 minutes après la configuration, puis visitez l'URL !

---

## 🔄 Mettre à jour le site

Pour mettre à jour votre site après des modifications :

### 1. Modifier le code source dans `client/src/`

### 2. Rebuilder le projet

```bash
./build-for-github.sh
```

### 3. Pousser les modifications

```bash
git add .
git commit -m "Update: description de vos modifications"
git push
```

Le site sera automatiquement mis à jour en quelques minutes !

---

## 🌐 Utiliser un Domaine Personnalisé (Optionnel)

Si vous avez votre propre nom de domaine :

1. Allez dans **Settings → Pages** de votre dépôt
2. Sous **"Custom domain"**, entrez votre domaine (ex: `greenchain.com`)
3. Cliquez sur **"Save"**
4. Configurez votre DNS chez votre registrar :
   - Ajoutez un enregistrement **CNAME** pointant vers `VOTRE-USERNAME.github.io`
   - Ou ajoutez des enregistrements **A** pointant vers les IPs de GitHub :
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

---

## 🛠️ Scripts Disponibles

### `build-for-github.sh` (macOS/Linux)
Build le projet et copie les fichiers à la racine

### `build-for-github.bat` (Windows)
Version Windows du script de build

### `deploy.sh` / `deploy.bat`
Script complet qui build ET pousse vers GitHub automatiquement

---

## 🐛 Dépannage

### Le site affiche une page 404

- Vérifiez que `index.html` est bien à la racine du dépôt
- Vérifiez que GitHub Pages est configuré sur la branche `main` et le dossier `/ (root)`
- Attendez quelques minutes après la configuration

### Les styles ne s'affichent pas

- Vérifiez que les dossiers `assets/`, `css/`, `images/` sont bien à la racine
- Vérifiez que le fichier `.nojekyll` est présent à la racine
- Videz le cache de votre navigateur (Ctrl+F5 ou Cmd+Shift+R)

### Erreur lors du push

Si vous obtenez une erreur "permission denied" :

```bash
# Vérifiez votre configuration Git
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@example.com"

# Ou utilisez SSH au lieu de HTTPS
git remote set-url origin git@github.com:VOTRE-USERNAME/mcb-greencoin-v3.git
```

---

## 📞 Support

Pour plus d'aide :
- Documentation GitHub Pages : https://docs.github.com/pages
- Documentation Vite : https://vitejs.dev/guide/

---

## ✅ Checklist de Déploiement

- [ ] Projet buildé avec `build-for-github.sh`
- [ ] `index.html` présent à la racine
- [ ] Dossiers `assets/`, `images/`, `css/`, `js/` à la racine
- [ ] Compte GitHub créé
- [ ] Git installé localement
- [ ] Dépôt GitHub créé
- [ ] Code poussé sur GitHub
- [ ] GitHub Pages configuré (Branch: main, Folder: / root)
- [ ] Site accessible en ligne
- [ ] (Optionnel) Domaine personnalisé configuré

---

**Félicitations ! Votre site MyCrypto Energy - Green Chain™ est maintenant en ligne ! 🎉**
