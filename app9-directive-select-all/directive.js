angular.module('app9')
.directive('directive', function() {
  return {
    restrict: 'A',
    link: function(scope, elem, attr) {
      console.log(scope);
      console.log(elem);
      console.log(attr);
    }
  }
});
