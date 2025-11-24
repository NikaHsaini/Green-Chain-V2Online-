# MyCrypto Energy - Green Chain™

## 🚀 Lancement Rapide avec main.py

Ce projet inclut un script Python automatisé qui gère tout le processus d'installation et de lancement.

### Prérequis

- **Python 3.6+** (généralement préinstallé sur macOS/Linux, téléchargeable sur Windows)
- **Node.js 18+** (téléchargeable sur https://nodejs.org/)

### Instructions de Lancement

#### Sur Windows :

1. Ouvrez le terminal (CMD ou PowerShell) dans le dossier du projet
2. Exécutez :
```bash
python main.py
```

#### Sur macOS/Linux :

1. Ouvrez le terminal dans le dossier du projet
2. Exécutez :
```bash
python3 main.py
```

ou directement :
```bash
./main.py
```

### Ce que fait le script automatiquement :

1. ✅ Vérifie que Node.js est installé
2. ✅ Vérifie/installe pnpm (gestionnaire de paquets rapide)
3. ✅ Installe toutes les dépendances du projet
4. ✅ Démarre le serveur de développement
5. ✅ Ouvre automatiquement le site dans votre navigateur

### Le site sera accessible sur :

```
http://localhost:3000
```

### Arrêter le serveur :

Appuyez sur `Ctrl+C` dans le terminal

---

## 📦 Lancement Manuel (Alternative)

Si vous préférez lancer manuellement :

### 1. Installer les dépendances

```bash
# Avec pnpm (recommandé)
pnpm install

# Ou avec npm
npm install
```

### 2. Démarrer le serveur

```bash
# Avec pnpm
pnpm dev

# Ou avec npm
npm run dev
```

---

## 🌐 Build pour Production

Pour créer une version optimisée pour la production :

```bash
pnpm build
# ou
npm run build
```

Les fichiers optimisés seront dans le dossier `dist/`

---

## 🛠️ Technologies Utilisées

- **React 19** - Framework UI
- **TypeScript** - Typage statique
- **Tailwind CSS 4** - Styles modernes
- **Vite** - Build tool ultra-rapide
- **shadcn/ui** - Composants UI

---

## 📁 Structure du Projet

```
mcb-greencoin-v3/
├── client/              # Code frontend
│   ├── public/          # Assets statiques (images, CSS, JS)
│   └── src/
│       ├── components/  # Composants réutilisables
│       ├── pages/       # Pages/Sections du site
│       └── App.tsx      # Point d'entrée de l'application
├── main.py             # Script de lancement automatique
└── package.json        # Dépendances du projet
```

---

## 🎨 Sections du Site

1. **Hero** - Présentation de Green Chain™
2. **Vision et Conformité** - Stratégie 2030 et cadre MiCA 2
3. **Écosystème** - Tokens GRC et BioCoin + 10 verticales écologiques
4. **Tokenomics** - Distribution des tokens
5. **Roadmap** - Feuille de route 2025-2030
6. **Staking** - Calculateur de récompenses

---

## 🌍 Langues Disponibles

- 🇫🇷 Français
- 🇬🇧 English

Changez la langue via le sélecteur dans le header.

---

## 📞 Support

Pour toute question ou problème :
- Vérifiez que Node.js est bien installé : `node --version`
- Vérifiez que Python est installé : `python --version` ou `python3 --version`
- Supprimez le dossier `node_modules` et relancez `main.py`

---

## 📄 Licence

© 2025 MyCrypto Energy Holdings. Tous droits réservés.
