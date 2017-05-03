angular.module('app8')
.directive('directive', function() {
  return {
    restrict: 'E',
    templateUrl: 'login.html',
    controller: function($scope) {
      $scope.showAlert = function() {
        alert('This web site is note secure!');
      }
    }
  };
});
