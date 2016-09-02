angular.module('app3').controller('controller3', function($scope, service3) {

  $scope.Something = 'tester';

  $scope.info = service3.info;



});
