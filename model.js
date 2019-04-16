var mongoose = require('mongoose'); // charge le module mongoose

mongoose.connect('mongodb://localhost/bda5', { //établit une connexion entre le projet et mongoDB
    useNewUrlParser: true });

var Film = mongoose.model('movies', { //créé un objet Liste avec un constructeur
    _id : String,
    title : String,
    year : Number,
    genre : String,
    summary : String,
    country : String,
    director : Array,
    actors : Object


});

/*var Director = mongoose.model('Director', { //créé un objet Liste avec un constructeur
    _id : String,
    last_name : String,
    first_name : String,
    birth_date : String


});

var Actors = mongoose.model('Actors', { //créé un objet Liste avec un constructeur
    _id : String,
    last_name : String,
    first_name : String,
    birth_date : String,
    role : String


});*/

module.exports = Film;
