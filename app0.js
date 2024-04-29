// Charge le module Express avec la directive `require`
var express = require('express')
var app = express()

// Définit la réponse à la racine de l'URL (/) avec le texte "Hello World!"
app.get('/', function (req, res) {
res.send('Hello World!')
})

// Lance un serveur d'écoute sur le port 8080 et affiche un journal.
app.listen(8080, function () {
console.log('Application en écoute sur le port 8080 !')
})
