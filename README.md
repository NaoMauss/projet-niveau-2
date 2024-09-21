# Projet Streamer Base

Ce projet est composé de deux parties principales : un backend (back) et un frontend (front). 
Le concept est de pouvoir tracker des streamers ou joueurs de league of legends connu. Pour cela il suffit d'ajouter un joueur via son pseudo et on obtient
une multitude de statistiques sur le joueur. On peut également le comparer avec les autres et voir ceux qui sont en live. Cela inclut donc une authentification
pour s'identifier et un système d'embed twitch pour visionner le streamer en direct.

Voici les instructions pour installer et exécuter chaque partie, ainsi que les technologies utilisées.

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
- Vitest pour les tests unitaires
- Cypress pour les tests e2e

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

Cela construira et lancera les conteneurs pour le backend et le frontend.

## Pipeline

Le projet utilise GitHub Actions sur la partie back et frontpour vérifier que les containers Docker fonctionnent correctement.
Il execute également des tests unitaires et e2e pour vérifier que le code fonctionne correctement.

## Notes supplémentaires

- Assurez-vous que toutes les variables d'environnement nécessaires sont correctement configurées avant de lancer l'application.
- Pour plus d'informations sur la structure du projet et les fonctionnalités spécifiques, consultez les fichiers source et les commentaires dans le code.
- N'hésitez pas à contacter nao.mausservey@efrei.net si vous avez des questions.

## Quelques screenshots de l'application

![image](https://github.com/user-attachments/assets/37980e37-850d-4956-9227-3e4a80928633)

![image](https://github.com/user-attachments/assets/744db8b0-c5e8-4547-898c-54af53a6899a)

![image](https://github.com/user-attachments/assets/818aa02d-e878-4270-8f10-1edcb47bbdf8)



