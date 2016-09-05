angular.module('arrayApp').controller('arrayController', function($scope, arrayService) {


  $scope.getPeeps = function() {

    $scope.peeps = arrayService.peeps;

  };
  $scope.getPeeps();






});
