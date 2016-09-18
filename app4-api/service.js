angular.module('app4').service('service', function($http) {

  this.getPokemon = function(pokename) {

    return $http({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon/' + pokename
    });

  };


});
