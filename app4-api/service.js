angular.module('apiApp').service('apiService', function($http, $q) {

  var baseURL = 'http://swapi.co/api/starships';


// MY WAY (WHICH ALSO WORKS)

  // this.getShips = function() {
  //   var defObj = $q.defer();
  //
  //   $http({
  //     method: 'GET',
  //     url: baseURL
  //   }).then(function(response) {
  //     defObj.resolve(response);
  //   });
  //
  //   return defObj.promise;
  // };


// JEREMY'S WAY BELOW

  this.getShips = function() {
    var promise = $http({
      method: 'GET',
      url: baseURL
    }).then(function(response) {
      if(response.status === 200) {
        return response.data.results;
      } else {
        return 'Error getting data';
      }
    });

    return promise;
  };

  this.getDef = function() {
    return $http({
      method: 'GET',
      url: 'https://wordsapiv1.p.mashape.com/words/skullduggery'
    }).then(function(stuff) {
      return stuff.data;
    });
  };


});


//http://swapi.co/api/starships/
