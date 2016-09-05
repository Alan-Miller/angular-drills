angular.module('apiApp').controller('apiController', function($scope, apiService) {


  $scope.getPlanets = function() {

    apiService.getPlanets().then(function(planets) {

      $scope.planets = planets.data.results;

    });

  };
  $scope.getPlanets();





});
