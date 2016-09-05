angular.module('apiApp').controller('apiController', function($scope, apiService) {


  $scope.getPeeps = function() {
    apiService.getPeeps().then(function(thePeeps) {
      $scope.peeps = thePeeps;
    });
  };



});
