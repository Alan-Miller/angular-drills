angular.module('app4').controller('controller', function($scope, service) {

  $scope.showPokemon = function(pokename) {
    service.getPokemon(pokename).then(function(response) {
      $scope.pokemon = response.data;
    });
  };
  // $scope.showPokemon();

});
