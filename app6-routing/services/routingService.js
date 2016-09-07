angular.module('routingApp').service('routingService', function($http) {

  this.getChars = function() {
    return $http({
      method: 'GET',
      url: 'http://swapi.co/api/people/'
    })
    .then(function(charsResponse) {
      return charsResponse.data.results;
    });
  };

  this.getPerson = function(charUrl) {
    return $http.get(charUrl)
    .then(function(response) {
      return response.data;
    });
  };


});





// Alternative (shorthand): return $http.get('http://swapi.co/api/people/');
