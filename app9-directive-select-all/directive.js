angular.module('app9')
.directive('directive', function() {
  return {
    restrict: 'A',
    link: function(scope, elem, attr) {
      elem.on('click', function() {
        this.select();
      })
    }
  }
});
