var Film = require('./model.js');

var route = function(app) {

    app.get('/',function(req,res) {
        res.sendFile('./public/index.html'); //créé une route qui sera appellé si il y a une requête GET sur le fichier index.html
    });

    app.get('/api/film',function(req,res){ //créé une route GET qui si elle est appelé retourne le contenu de l'objet Liste parsé en json. Sinon il renvoit le message d'erreur associé
        Film.find(function(err,film) {
            if(err)
                res.send(err);
            res.json(film);
        });
    });

    app.get('/api/film/:genre/:year/:country',function(req,res){ //créé une route GET qui si elle est appelé retourne le contenu de l'objet Liste parsé en json. Sinon il renvoit le message d'erreur associé
        if(req.params.genre == "0" && req.params.year == "0"  && req.params.country == "0" ) {
            Film.find(function(err,film) {
                if(err)
                    res.send(err);
                res.json(film);
            });
        } else{
            if(req.params.genre != "0") {
                if(req.params.year != "0") {
                    if(req.params.country != "0") {
                        Film.find({
                            genre : req.params.genre,
                            year : req.params.year,
                            country : req.params.country
                        },function(err,film) {
                            if(err)
                                res.send(err);
                            res.json(film);
                        });
                    } else {
                        Film.find({
                            genre : req.params.genre,
                            year : req.params.year
                        },function(err,film) {
                            if(err)
                                res.send(err);
                            res.json(film);
                        });
                    }
                } else {
                    if(req.params.country != "0") {
                        Film.find({
                            genre : req.params.genre,
                            country : req.params.country
                        },function(err,film) {
                            if(err)
                                res.send(err);
                            res.json(film);
                        });
                    } else {
                        Film.find({
                            genre : req.params.genre
                        },function(err,film) {
                            if(err)
                                res.send(err);
                            res.json(film);
                        });
                    }
                }
            } else if(req.params.year != "0") {
                if(req.params.country != "0") {
                    Film.find({
                        year : req.params.year,
                        country : req.params.country
                    },function(err,film) {
                        if(err)
                            res.send(err);
                        res.json(film);
                    });
                } else {
                    Film.find({
                        year : req.params.year
                    },function(err,film) {
                        if(err)
                            res.send(err);
                        res.json(film);
                    });
                }
            } else if(req.params.country != "0" ) {
                Film.find({
                    country : req.params.country
                },function(err,film) {
                    if(err)
                        res.send(err);
                    res.json(film);
                });
            }
        }
    });


    app.delete('/api/film/:id',function(req,res){
        console.log(req.params.id);
        Film.deleteOne({
            _id : req.params.id
        },function(err,film){
            if(err)
                res.send(err);
            Film.find(function(err,film) {
                if(err)
                    res.send(err);
                res.json(film);
            });
        })
    })
}

module.exports = route;