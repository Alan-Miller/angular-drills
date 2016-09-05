angular.module('arrayApp').controller('arrayController', function($scope, arrayService) {


  $scope.peeps = arrayService.peeps;



});
