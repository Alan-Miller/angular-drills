angular.module('directiveApp')
.directive('dmHeader', function() {

  function getColor() {
      var colors = ['red', 'green', 'skyblue', 'purple', 'indianred', 'orange', 'gray'];
      var index = Math.floor(Math.random() * colors.length);
      return colors[index];
  }

  return {
    restrict: 'E',
    scope: {        // This is the isolate scope.
      foo: '&',
      title: '=', // Does not look for string. Looks for variable called this value on the parent scope.
      // title: '@' // String binding.
      callback: '&' // Expression binding (including functions).
    },
    link: function(scope, element, attrs) { // element is made using jQLite, so element.on('click') is allowed (for example)
      element.on('click', function(event) {
        scope.foo({msg: 'Keep on fighting!'}); // Angular takes key value pairs and retrieves value
        var newColor = getColor();
        var targetElement = element.find('section');
        // console.log(targetElement);
        targetElement.css('background-color', newColor);
        scope.callback();
      });
    },
    templateUrl: 'dmHeader.html',// Alternatively, use 'template:' and put the HTML right there.
    controller: function($scope) {
      // $scope.test = 'CLICKED'; // Here, scope and $scope are the same, so this code should work
      // console.log($scope.title);
    }
  };

});
