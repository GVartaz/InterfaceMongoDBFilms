var express = require('express'); //charge le module express
var app = express();
var morgan = require('morgan'); //charge le module morgan
var bodyParser = require('body-parser'); //charge le module bodyParser

var route = require('./api-route.js');


app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

route(app);

app.listen(8080);
console.log("on utilise le port 8080");