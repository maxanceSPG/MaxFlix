# CacaFlix

Une application de streaming de films et séries, inspirée de Netflix, construite avec Angular.

Ce projet a été généré avec [Angular CLI](https://github.com/angular/angular-cli) version 20.3.3.

## ⚠️ Important : Pas de Backend

Ce projet est une application **frontend uniquement**. Il n'y a pas de backend réel, toutes les données sont mockées :

- **Authentification** : Les identifiants de connexion sont hardcodés (`test@mail.com` / `password`)
- **Données utilisateur** : Les favoris et préférences sont simulés
- **API Films** : Les données proviennent de l'API The Movie Database (TMDB)

## Configuration de l'environnement

### Fichier `environment.ts`

Le projet utilise des variables d'environnement pour gérer les clés API et configurations. Ces fichiers sont **ignorés par Git** pour des raisons de sécurité.

**1. Créer votre fichier d'environnement :**

```bash
# Copiez le template
cp src/environments/environment.example.ts src/environments/environment.ts
cp src/environments/environment.example.ts src/environments/environment.prod.ts
```

**2. Ajoutez votre clé API TMDB :**

Ouvrez `src/environments/environment.ts` et remplacez `VOTRE_CLE_API_TMDB_ICI` par votre clé API :

```typescript
export const environment = {
  production: false,
  tmdbApiKey: 'votre_cle_api_ici',
  tmdbApiUrl: 'https://api.themoviedb.org/3',
};
```

**Obtenir une clé API TMDB :**

1. Créez un compte sur [The Movie Database](https://www.themoviedb.org/)
2. Allez dans Paramètres > API
3. Demandez une clé API (gratuite)

## Serveur de développement

Pour démarrer un serveur de développement local :

```bash
npm run start
```

Ouvrez votre navigateur et naviguez vers `http://localhost:4200/`. L'application se rechargera automatiquement à chaque modification des fichiers source.

## 🔐 Connexion

Utilisez les identifiants suivants pour vous connecter (données mockées) :

- **Email** : `test@mail.com`
- **Mot de passe** : `password`

## 📁 Structure du projet

```
src/
├── app/                    # Composants de pages (Home, Login, Favorites, etc.)
├── Components/            # Composants réutilisables (Card, Hero, CategoryList, etc.)
├── lib/
│   ├── api.ts            # Fonctions API (TMDB + mocks)
│   ├── types.ts          # Types TypeScript
│   └── mock.ts           # Données mockées (utilisateur, favoris)
└── environments/         # Configuration des variables d'environnement 
```

## 🛠️ Technologies utilisées

- **Angular 20.3.3** avec Standalone Components
- **TypeScript**
- **Signals** pour la gestion d'état réactive
- **Lucide Angular** pour les icônes
- **TMDB API** pour les données de films/séries

## 📦 Build

Pour compiler le projet :

```bash
ng build
```

Les artefacts de build seront stockés dans le répertoire `dist/`. Par défaut, le build de production optimise l'application pour les performances et la vitesse.

## 🚀 Fonctionnalités

- ✅ Navigation entre pages (Home, Films, Séries, Favoris)
- ✅ Authentification simulée
- ✅ Affichage des catégories de films par genre
- ✅ Gestion des favoris (simulée)
- ✅ Hero section avec film en vedette
- ✅ Design responsive inspiré de Netflix

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
