angular.module('apiApp').controller('apiController', function($scope, apiService) {


  // MY WAY (WORKS)

  // $scope.getShips = function() {
  //   apiService.getShips().then(function(response) {
  //     $scope.ships = response;
  //   });
  // };
  //
  // $scope.getShips();


  // JEREMY'S CODE

  $scope.getShips = function() {
    var prms = apiService.getShips();
    prms.then(function(starships) {
      $scope.ships = starships;
    });
  };
  $scope.getShips();


// Use response variable if you are expecting a web response (including .data). Use a more specific
// variable here because we are wanting something more specific.


});
