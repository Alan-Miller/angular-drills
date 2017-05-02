

angular.module('app3').controller('Ctrl3', function($scope, service3) {

  $scope.test="Something else."

  $scope.data = service3.data;


});
