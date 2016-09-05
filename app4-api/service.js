angular.module('apiApp').service('service3', function($http) {


  this.getPeeps = function() {
    return $http({
      method: 'GET',
      url: 'http://swapi.co/api/people/'
    });
  };



});
