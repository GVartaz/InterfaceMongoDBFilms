var ListeFilms =  angular.module('ListeFilms', ['ui.directives','ui.filters']);

function mainController($scope , $http){
    $http.get('/api/film')
        .success(function(data) {
            $scope.film=data;
        })
        .error(function(data){
            console.log('Error:'+ data);
        });

    $scope.raz = function() {
        $http.get('/api/film')
        .success(function(data) {
            $scope.film=data;
        })
        .error(function(data){
            console.log('Error:'+ data);
        });
    }

    $scope.search = function() {
        var genre = document.getElementById("film-genre").value;
        var year = document.getElementById("film-year").value;
        var country = document.getElementById("film-country").value;
        var url = "";
        if(genre != ""){
            url += "/"+genre;
        } else {
            url+="/0";
        }
        if(year != ""){
            url += "/"+year;
        } else {
            url+="/0";
        }
        if(country != ""){
            url += "/"+country;
        } else {
            url+="/0";
        }
        $http.get('/api/film'+url)
        .success(function(data) {
            $scope.film=data;
        })
        .error(function(data){
            console.log('Error:'+ data);
        });
    };

    $scope.delete = function(id){
        $http.delete('/api/film/'+id)
        .success(function(data){
            $scope.film = data;
        })
        .error(function(data){
            console.log('Error:'+ data);
        });
    };

}