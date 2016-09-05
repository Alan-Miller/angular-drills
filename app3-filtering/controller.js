angular.module('app3').controller('controller3', function($scope, service3) {


  $scope.getPeeps = function() {

    $scope.peeps = service3.peeps;

  };
  $scope.getPeeps();





});
