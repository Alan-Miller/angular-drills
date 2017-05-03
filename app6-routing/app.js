angular.module('app6', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('details', {
      url: '/details',
      templateUrl: 'details/details.html',
      controller: 'detailsController'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'signup/signup.html',
      controller: 'signupController'
    });

});
