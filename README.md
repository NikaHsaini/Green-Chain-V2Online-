# MyCrypto Energy - Green Chain™

[![Deploy to GitHub Pages](https://github.com/VOTRE-USERNAME/mcb-greencoin-v3/actions/workflows/deploy.yml/badge.svg)](https://github.com/VOTRE-USERNAME/mcb-greencoin-v3/actions/workflows/deploy.yml)

L'Infrastructure Crypto-Énergie-Carbone n°1 en Europe

## 🌟 À propos

Green Chain™ est une infrastructure décentralisée révolutionnaire, portée par MyCrypto Energy Holdings. Notre mission est de financer et d'exploiter des projets écologiques de grande échelle en Europe, en utilisant la blockchain, la tokenisation et une transparence énergétique totale.

## 🚀 Démarrage Rapide

### Option 1 : Lancement Automatique (Recommandé)

Utilisez le script Python pour tout automatiser :

```bash
python3 main.py
```

Le script va :
- ✅ Vérifier Node.js
- ✅ Installer les dépendances
- ✅ Démarrer le serveur
- ✅ Ouvrir le site dans votre navigateur

### Option 2 : Lancement Manuel

```bash
# Installer les dépendances
pnpm install
# ou
npm install --legacy-peer-deps

# Démarrer le serveur de développement
pnpm dev
# ou
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

## 📦 Déploiement sur GitHub Pages

### Méthode Automatique (Recommandé)

Utilisez le script de déploiement :

**Sur macOS/Linux :**
```bash
./deploy.sh
```

**Sur Windows :**
```bash
deploy.bat
```

### Méthode Manuelle

Suivez le guide détaillé dans [DEPLOIEMENT_GITHUB.md](./DEPLOIEMENT_GITHUB.md)

## 🏗️ Technologies

- **React 19** - Framework UI moderne
- **TypeScript** - Typage statique
- **Tailwind CSS 4** - Styles avec design tokens
- **Vite** - Build tool ultra-rapide
- **shadcn/ui** - Composants UI de qualité

## 📁 Structure du Projet

```
mcb-greencoin-v3/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions pour déploiement auto
├── client/
│   ├── public/                 # Assets statiques (images, CSS, JS)
│   └── src/
│       ├── components/         # Composants réutilisables
│       │   ├── ui/            # Composants shadcn/ui
│       │   ├── Header.tsx     # Navigation principale
│       │   ├── Footer.tsx     # Pied de page
│       │   └── ParticlesBackground.tsx
│       ├── pages/             # Sections du site
│       │   ├── HeroSection.tsx
│       │   ├── AboutSection.tsx
│       │   ├── EcosystemSection.tsx
│       │   ├── TokenomicsSection.tsx
│       │   ├── RoadmapSection.tsx
│       │   └── StakingSection.tsx
│       ├── App.tsx            # Point d'entrée
│       └── index.css          # Styles globaux
├── main.py                    # Script de lancement auto
├── deploy.sh                  # Script de déploiement (Unix)
├── deploy.bat                 # Script de déploiement (Windows)
├── DEPLOIEMENT_GITHUB.md      # Guide de déploiement détaillé
└── README_LANCEMENT.md        # Guide de lancement local

```

## 🎨 Sections du Site

1. **Hero** - Présentation de Green Chain™ avec statistiques clés
2. **Vision et Conformité** - Stratégie 2030 et cadre réglementaire MiCA 2
3. **Écosystème** - Tokens GRC et BioCoin + 10 verticales écologiques
4. **Tokenomics** - Distribution détaillée des tokens
5. **Roadmap** - Feuille de route 2025-2030
6. **Staking** - Calculateur de récompenses interactif

## 🌍 Langues

- 🇫🇷 Français
- 🇬🇧 English

Changez la langue via le sélecteur dans le header.

## 🛠️ Scripts Disponibles

```bash
# Développement
pnpm dev          # Démarrer le serveur de développement
pnpm build        # Build de production
pnpm preview      # Prévisualiser le build

# Avec npm
npm run dev
npm run build
npm run preview
```

## 📝 Personnalisation

### Modifier les couleurs

Éditez les variables CSS dans `client/src/index.css` :

```css
:root {
  --primary: oklch(0.55 0.18 145);  /* Vert principal */
  --background: oklch(1 0 0);        /* Fond blanc */
  /* ... autres couleurs ... */
}
```

### Modifier le contenu

Chaque section est un composant React dans `client/src/pages/`. Éditez le fichier correspondant pour modifier le contenu.

### Ajouter des images

Placez vos images dans `client/public/images/` et référencez-les avec `/images/votre-image.png`

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📄 Licence

© 2025 MyCrypto Energy Holdings. Tous droits réservés.

## 📞 Support

Pour toute question ou problème :
- Consultez [README_LANCEMENT.md](./README_LANCEMENT.md) pour le lancement local
- Consultez [DEPLOIEMENT_GITHUB.md](./DEPLOIEMENT_GITHUB.md) pour le déploiement
- Ouvrez une issue sur GitHub

## 🌐 Liens

- **Site Web** : [À venir]
- **Documentation** : [DEPLOIEMENT_GITHUB.md](./DEPLOIEMENT_GITHUB.md)
- **Whitepaper** : [À venir]

---

**Développé avec 💚 pour un avenir durable**
