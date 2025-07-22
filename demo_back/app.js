// Importer le module express
const express = require('express');

// Instancier le serveur express
const app = express();

// Autoriser tout le monde à me requêter 
const cors = require('cors');
app.use(cors());

// Une URI get /articles
// Equivalent SpringBoot : @GetMapping(/articles)
app.get('/articles', async (request, response) => {
    const articles = ["Titre 1", "Titre 2", "Titre 3"];

    // On envoie les articles récupérés en JSON
    return response.json(articles);
});

// Lancer le serveur
app.listen(3000, () => {
    console.log("Le serveur a demarré");
});