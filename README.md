# Mini Application Nest.js - Gestion des Clients

Une application web backend développée avec Nest.js pour gérer une liste de clients avec une API REST et des pages HTML statiques.

## 🚀 Fonctionnalités

- **API REST complète** pour la gestion des clients (CRUD)
- **Pages HTML statiques** pour l'interface utilisateur
- **Base de données PostgreSQL** avec TypeORM
- **Validation des données** avec class-validator
- **Gestion des erreurs** appropriée
- **Interface web moderne** et responsive

## 📋 Prérequis

- `Node.js` (version 20.16.0)
- `PostgreSQL` (version 17.3)
- `npm` (version 10.8.1)

## 🛠️ Installation

1. **Cloner le projet**
```bash
git clone https://github.com/bayerane/miniAppNestjsPsql.git
cd miniAppNestjsPsql
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer la base de données**
   - Créer une base de données PostgreSQL nommée `clients_db`
   - Modifier les paramètres de connexion dans `src/app.module.ts` si nécessaire :
```typescript
TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password', // Modifier selon votre configuration
  database: 'clients_db',
  // ...
})
```

4. **Créer le dossier public**
```bash
mkdir public
```
   - Copier les fichiers HTML dans le dossier `public/`

## 🚀 Démarrage

### Mode développement
```bash
npm run start:dev
```

### Mode production
```bash
npm run build
npm run start:prod
```

L'application sera accessible sur `http://localhost:3000`

## 📁 Structure du projet

```
src/
├── app.module.ts          # Module principal
├── app.controller.ts      # Contrôleur pour les pages HTML
├── app.service.ts         # Service principal
├── main.ts               # Point d'entrée
└── clients/
    ├── clients.module.ts     # Module clients
    ├── clients.controller.ts # Contrôleur API clients
    ├── clients.service.ts    # Service clients
    ├── dto/
    │   └── create-client.dto.ts # DTOs pour validation
    |   └── update-client.dto.ts
    └── entities/
        └── client.entity.ts     # Entité client
public/
├── index.html            # Page d'accueil
├── clients.html          # Page de gestion des clients
├── about.html           # Page à propos
└── style.css            # Style css
```

## 🌐 Pages HTML

- **/** → Page d'accueil (`index.html`)
- **/clients** → Page de gestion des clients (`clients.html`)
- **/about** → Page à propos (`about.html`)

## 🔌 API REST Endpoints

### Récupérer tous les clients
```bash
curl http://localhost:3000/api/clients
```

### Récupérer un client par ID
```bash
curl http://localhost:3000/api/clients/1
```

### Créer un nouveau client
```bash
curl -X POST -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","phone":"+221777687255"}' \
  http://localhost:3000/api/clients
```

### Mettre à jour un client
```bash
curl -X PUT -H "Content-Type: application/json" \
  -d '{"name":"John Smith","email":"johnsmith@example.com"}' \
  http://localhost:3000/api/clients/1
```

### Supprimer un client
```bash
curl -X DELETE http://localhost:3000/api/clients/1
```

## 📊 Format des données

### Objet Client
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+221777687255"
}
```

### Création/Mise à jour
```json
{
  "name": "John Doe",        // Obligatoire
  "email": "john@example.com", // Obligatoire
  "phone": "+221777687255"   // Optionnel
}
```

## ⚠️ Gestion des erreurs

### 400 Bad Request
Retourné quand les données sont invalides (nom ou email manquant/invalide).

### 404 Not Found
Retourné quand un client avec l'ID spécifié n'existe pas.

### Exemple de réponse d'erreur
```json
{
  "statusCode": 400,
  "message": [
    "name should not be empty",
    "email must be an email"
  ],
  "error": "Bad Request"
}
```

## 🧪 Tests

### Tests unitaires
```bash
npm run test
```

### Tests e2e
```bash
npm run test:e2e
```

### Coverage
```bash
npm run test:cov
```

## 🏗️ Scripts disponibles

- `npm run start` - Démarre l'application
- `npm run start:dev` - Démarre en mode développement avec auto-reload
- `npm run start:prod` - Démarre en mode production
- `npm run build` - Compile le projet
- `npm run test` - Lance les tests
- `npm run lint` - Vérifie le code avec ESLint

## 📝 Exemples d'utilisation

### Test complet via curl

1. **Créer un client**
```bash
curl -X POST -H "Content-Type: application/json" \
  -d '{"name":"Alice Martin","email":"alice@example.com","phone":"+221777123456"}' \
  http://localhost:3000/api/clients
```

2. **Lister tous les clients**
```bash
curl http://localhost:3000/api/clients
```

3. **Récupérer un client spécifique**
```bash
curl http://localhost:3000/api/clients/1
```

4. **Mettre à jour un client**
```bash
curl -X PUT -H "Content-Type: application/json" \
  -d '{"name":"Alice Dupont","email":"alice.dupont@example.com"}' \
  http://localhost:3000/api/clients/1
```

5. **Supprimer un client**
```bash
curl -X DELETE http://localhost:3000/api/clients/1
```

## 🔧 Configuration

### Base de données
Modifier les paramètres de connexion dans `src/app.module.ts` :
```typescript
TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',        // Adresse du serveur
  port: 5432,              // Port PostgreSQL
  username: 'postgres',     // Nom d'utilisateur
  password: 'password',     // Mot de passe
  database: 'clientmg_db',   // Nom de la base
  synchronize: true,        // À désactiver en production
})
```

### Port d'écoute
Modifier le port dans `src/main.ts` :
```typescript
await app.listen(3000); // Changer le port ici
```

## 🐛 Dépannage

### Erreur de connexion à la base de données
- Vérifier que PostgreSQL est démarré
- Vérifier les paramètres de connexion
- Créer la base de données `clientmg_db`

### Port déjà utilisé
- Changer le port dans `src/main.ts`
- Ou arrêter le processus utilisant le port `3000`

## 📚 Technologies utilisées

- **Nest.js** - Framework Node.js
- **TypeScript** - Langage de programmation
- **PostgreSQL** - Base de données
- **TypeORM** - ORM pour TypeScript
- **Class Validator** - Validation des données
- **Express** - Serveur web sous-jacent

## 👥 Contribution

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push sur la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Support

Pour toute question ou problème, veuillez créer une issue sur le repository GitHub.