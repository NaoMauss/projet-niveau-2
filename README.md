# Projet Streamer Base

Ce projet est composé de deux parties principales : un backend (back) et un frontend (front). Voici les instructions pour installer et exécuter chaque partie, ainsi que les technologies utilisées.

## Backend (back)

### Technologies utilisées

- Node.js avec Bun comme runtime
- Fastify comme framework web (Express en mieux !)
- PostgreSQL comme base de données
- Drizzle ORM pour l'interaction avec la base de données
- TypeScript pour le typage statique

### Installation

1. Assurez-vous d'avoir Bun installé sur votre machine. Si ce n'est pas le cas, suivez les instructions sur [https://bun.sh/](https://bun.sh/)

2. Naviguez vers le dossier `back` :
   ```
   cd back
   ```

3. Installez les dépendances :
   ```
   bun install
   ```

4. Créez un fichier `.env` à la racine du dossier `back` et ajoutez les variables d'environnement nécessaires :
   ```
   VITE_RIOT_API_KEY=votre_clé_api_riot
   VITE_RIOT_REGION=votre_région_riot
   VITE_RIOT_REGION_V4=votre_région_riot_v4
   VITE_JWT_SECRET=votre_secret_jwt
   VITE_COOKIE_SECRET=votre_secret_cookie
   VITE_DB_URL=votre_url_de_base_de_données
   ```

5. Initialisez la base de données :
   ```
   bun run db:push
   ```

### Exécution

Pour lancer le serveur de développement :
   ```
   bun run start
   ```

Le serveur sera accessible à l'adresse `http://localhost:3000`.

## Frontend (front)

### Technologies utilisées

- Vue.js 3 comme framework frontend
- Vite comme outil de build
- TypeScript pour le typage statique
- Pinia pour la gestion d'état

### Installation

1. Naviguez vers le dossier `front` :
   ```
   cd front
   ```

2. Installez les dépendances :
   ```
   npm install
   ```

### Exécution

Pour lancer le serveur de développement :
   ```
   npm run dev
   ```

L'application sera accessible à l'adresse `http://localhost:5173`.

## Déploiement avec Docker

Le projet inclut des fichiers Docker pour faciliter le déploiement. Pour construire et exécuter les conteneurs :

1. Assurez-vous d'avoir Docker installé sur votre machine.

2. À la racine du projet back, exécutez :
   ```
   docker build -t streamer-base-back .
   docker run -d -p 3000:3000 --name streamer-base-back streamer-base-back
   ```

Cela construira et lancera les conteneurs pour le backend.

## Pipeline

Le projet utilise GitHub Actions sur la partie back pour vérifier que le container Docker fonctionne correctement.
Il execute également des tests unitaires pour vérifier que le code fonctionne correctement.

## Notes supplémentaires

- Assurez-vous que toutes les variables d'environnement nécessaires sont correctement configurées avant de lancer l'application.
- Pour les tests, utilisez la commande `bun run test` dans le dossier `back`.
- Pour plus d'informations sur la structure du projet et les fonctionnalités spécifiques, consultez les fichiers source et les commentaires dans le code.