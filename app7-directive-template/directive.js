angular.module('app7')
.directive('directiveName', function() {
    return {
      template: 'Name: {{customer.name}} Address: {{customer.address}}'
    };
  });
});
