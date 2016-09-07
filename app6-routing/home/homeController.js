angular.module('routingApp').controller('homeController', function($scope, routingService) {

  $scope.routeMessage = 'THE HOME PAGE';


  routingService.getChars().then(function(charsDataResults) {
    $scope.chars = charsDataResults;
  });



});
