angular.module('apiApp').service('apiService', function($http) {


  this.getPeeps = function() {
    return $http({
      method: 'GET',
      url: 'http://swapi.co/api/people/'
    }).then(function(thePeeps) {
      return thePeeps.data.results;
    });
  };

  this.getSpecies = function(speciesUrl) {
    return $http({
      method: 'GET',
      url: speciesUrl
    }).then(function(speciesObj) {
      return speciesObj.data;
    });
  };

  this.getHomeworld = function(homeworldUrl) {
    return $http({
      method: 'GET',
      url: homeworldUrl
    }).then(function(homeworldObj) {
      return homeworldObj.data;
    });
  };

  this.getFilm = function(filmUrl) {
    return $http({
      method: 'GET',
      url: filmUrl
    }).then(function(filmObj) {
      return filmObj.data;
    });
  };


  // this.getWorlds = function() {
  //   return $http({
  //     method: 'GET',
  //     url: 'http://swapi.co/api/planets/'
  //   }).then(function(theWorlds) {
  //     return theWorlds.data.results;
  //   });
  // };



});
