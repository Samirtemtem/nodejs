# Contact Manager Application

Une application web de gestion de contacts construite avec Node.js, Express, MongoDB et Bootstrap.

## 🌟 Fonctionnalités

- ✨ Création de contacts en temps réel
- 🔍 Recherche de contacts par nom, téléphone ou ID
- 📝 Modification des informations des contacts
- 🗑️ Suppression de contacts sans rechargement de page
- 💫 Interface utilisateur réactive et moderne
- 🎯 Validation des formulaires
- ⚡ Opérations AJAX pour une expérience fluide

## 🚀 Technologies Utilisées

### Backend
- **Node.js** (v14+)
  - Environnement d'exécution JavaScript
  - Gestion asynchrone des requêtes
  - Performance optimisée pour les opérations I/O

- **Express.js**
  - Middleware pour gestion des routes
  - Gestion des sessions
  - Parsing des requêtes avec body-parser
  - Gestion des erreurs personnalisée

- **MongoDB avec Mongoose**
  - Schéma de données structuré
  - Validation des données
  - Indexation pour optimisation des recherches
  - Gestion des relations entre documents

- **Twig (Template Engine)**
  - Héritage de templates
  - Rendu côté serveur
  - Échappement automatique des données

### Frontend
- **Bootstrap 5.3.2**
  - Grille responsive
  - Composants UI préconçus
  - Thème personnalisable
  - Classes utilitaires

- **JavaScript (Vanilla)**
  - Fetch API pour requêtes AJAX
  - Manipulation du DOM
  - Gestion des événements
  - Promises et Async/Await

## 📚 Documentation API

### Endpoints

#### 1. Récupérer tous les contacts
```http
GET /contact

# Réponse
Status: 200 OK
[
  {
    "_id": "60d3b41ef3f4d8c9a8f4f3d2",
    "FullName": "John Doe",
    "Phone": "0123456789",
    "createdAt": "2023-12-20T10:00:00.000Z"
  },
  // ...
]
```

#### 2. Créer un nouveau contact
```http
POST /contact
Content-Type: application/json

{
  "FullName": "John Doe",
  "Phone": "0123456789"
}

# Réponse Succès
Status: 201 Created
{
  "_id": "60d3b41ef3f4d8c9a8f4f3d2",
  "FullName": "John Doe",
  "Phone": "0123456789",
  "createdAt": "2023-12-20T10:00:00.000Z"
}

# Réponse Erreur
Status: 400 Bad Request
{
  "error": "Le numéro de téléphone doit contenir 10 chiffres"
}
```

#### 3. Récupérer un contact par ID
```http
GET /contact/:id

# Réponse Succès
Status: 200 OK
{
  "_id": "60d3b41ef3f4d8c9a8f4f3d2",
  "FullName": "John Doe",
  "Phone": "0123456789",
  "createdAt": "2023-12-20T10:00:00.000Z"
}

# Réponse Erreur
Status: 404 Not Found
{
  "message": "Contact non trouvé"
}
```

#### 4. Modifier un contact
```http
POST /contact/:id/edit
Content-Type: application/json

{
  "FullName": "John Doe Updated",
  "Phone": "9876543210"
}

# Réponse Succès
Status: 200 OK
{
  "_id": "60d3b41ef3f4d8c9a8f4f3d2",
  "FullName": "John Doe Updated",
  "Phone": "9876543210",
  "createdAt": "2023-12-20T10:00:00.000Z"
}

# Réponse Erreur
Status: 400 Bad Request
{
  "error": "Données invalides"
}
```

#### 5. Supprimer un contact
```http
POST /contact/:id/delete

# Réponse Succès
Status: 200 OK
{
  "message": "Contact supprimé avec succès"
}

# Réponse Erreur
Status: 400 Bad Request
{
  "error": "Erreur lors de la suppression"
}
```

## 🛠️ Architecture Technique

```
mongoexpressWS/
│
├── config/
│   ├── mongo.json         # Configuration MongoDB
│   └── express.js         # Configuration Express
│
├── models/
│   └── contact.js         # Modèle de données Contact
│
├── routes/
│   └── contact.js         # Routes de l'API
│
├── views/
│   ├── form.twig          # Page principale
│   ├── edit.twig          # Page d'édition
│   └── layouts/           # Templates de base
│
├── public/
│   ├── js/
│   │   └── form.js        # JavaScript côté client
│   └── css/
│       └── style.css      # Styles personnalisés
│
├── middleware/
│   └── error-handler.js   # Gestion des erreurs
│
├── app.js                 # Point d'entrée
├── package.json          # Dépendances
└── README.md             # Documentation
```

## 🚀 Technologies Utilisées

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB avec Mongoose
  - Twig (Template Engine)

- **Frontend:**
  - Bootstrap 5.3.2
  - JavaScript
  - HTML5
  - CSS3

## 📋 Prérequis

- Node.js (v14 ou supérieur)
- MongoDB (v4 ou supérieur)
- npm ou yarn

## ⚙️ Installation

1. Clonez le dépôt :
   ```bash
   git clone [votre-repo-url]
   cd mongoexpressWS
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Configurez MongoDB :
   - Créez un fichier `config/mongo.json` avec vos paramètres de connexion
   - Exemple de configuration :
     ```json
     {
       "hostname": "localhost",
       "port": "27017",
       "database": "contact_manager"
     }
     ```

4. Lancez l'application :
   ```bash
   npm start
   ```

5. Accédez à l'application dans votre navigateur :
   ```
   http://localhost:3000
   ```

