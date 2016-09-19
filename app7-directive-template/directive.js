angular.module('app7')
.directive('headerDirective', function() {
    return {
      templateUrl: 'header.html',
      // template: 'HI',
      restrict: 'E'
    };
});
