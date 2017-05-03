angular.module('app6').service('service6', function($http) {

  this.getChars = function() {
    return $http({
      method: 'GET',
      url: 'http://swapi.co/api/people/'
    });
  }


});
