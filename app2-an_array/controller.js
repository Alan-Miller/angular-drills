angular.module('app2').controller('controller', function($scope, service) {

  $scope.data = service.data;

});
