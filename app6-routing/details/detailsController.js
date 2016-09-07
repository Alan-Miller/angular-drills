angular.module('routingApp').controller('detailsController', function($scope, routingService, $stateParams) {

  $scope.routeMessage = 'THE DETAILS PAGE';

  console.log($stateParams);

  routingService.getPerson($stateParams.url)
  .then(function(person) {
    $scope.chars = person;
  });


});
