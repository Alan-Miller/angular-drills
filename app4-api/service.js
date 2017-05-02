angular.module('app4').service('service4', function($http) {

  this.getChars = function() {
    return $http({
      method: 'GET',
      url: 'https://swapi.co/api/people/'
    });
  };

});
