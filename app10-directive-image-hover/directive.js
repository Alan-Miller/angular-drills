angular.module('app10')
.directive('directive', function() {

  return {

    restrict: 'AE',
    // template: '<img ng-src="https://upload.wikimedia.org/wikipedia/en/f/ff/SuccessKid.jpg">',
    scope: {
      imgsrc: '='
    }
  };

});
