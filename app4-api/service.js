angular.module('pokeApp').service('pokeService', function($http, $q) {

    this.getPokemon = function() {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'http://pokeapi.co/api/v2/pokemon/1'
        }).then(function(response) {
            console.log(response.data);
            deferred.resolve(response.data);
        })
        return deferred.promise;
    }

});
