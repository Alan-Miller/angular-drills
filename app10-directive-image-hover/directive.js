angular.module('app10')
.directive('directive', function() {
  return {
    restrict: 'E',
    scope: {
      imgsrc: '='
    },
    template: '<img ng-src={{imgsrc}}>'
  };
});
