angular.module('app4').controller('Ctrl4', function($scope, service4) {

  $scope.test = "YES, THERE YOU ARE"

  $scope.getChars = function() {

    service4.getChars().then(function() {
      
    });
    return chars.data;
  };
  $scope.getChars();

});
