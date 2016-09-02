angular.module('arrayApp').controller('arrayController', function($scope, arrayService) {

  $scope.tCats = 'ThunderCats';

      $scope.people = arrayService.data;
      // return angular.copyTo(myData, []); // This is what Jeremy would do





});
