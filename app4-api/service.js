angular.module('apiApp').service('apiService', function($http) {

  this.getPlanets = function() {

    return $http({

      method: 'GET',
      url: 'http://swapi.co/api/planets/'

    });



  };








});
