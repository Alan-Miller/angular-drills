angular.module('directiveApp').controller('directiveController', function($scope) {

  $scope.titleOfPage = 'Brett\'s cool web page';

  $scope.myFn = function(msg) {
      console.log(msg);
  };

});
