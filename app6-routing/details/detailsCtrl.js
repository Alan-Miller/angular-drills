angular.module('app6').controller('detailsCtrl', function($scope, service6) {

  $scope.getChars = function() {
    service6.getChars().then(function(swChars) {
      $scope.data = swChars.data.results;
      $scope.allData = swChars;
      console.log(swChars);
    });
  }
  $scope.getChars();


});
