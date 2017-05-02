angular.module('app10')
.directive('directive', function() {

  return {

    restrict: 'AE',
    template: '<img ng-src="{{imgsrc}}">',
    link: function(scope, elem, attrs) {
      elem.on('mouseover', function() {
        elem.css('opacity', '0.5');
      });
      elem.on('mouseleave', function() {
        elem.css('opacity', '1');
      });
    },
    scope: {
      imgsrc: '='
    }
  };

});
