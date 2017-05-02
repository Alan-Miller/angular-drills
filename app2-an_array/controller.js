angular.module('app2').controller('Ctrl', function($scope, service) {

  $scope.test="It\'s working!";

  $scope.data = service.data;

});
