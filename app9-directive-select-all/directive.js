angular.module('app9')
.directive('directive', function() {

  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.on('click', function() {
        this.select();
        // alert('select!');
      });
    }
  };

});
