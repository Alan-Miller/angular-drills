angular.module('app6', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      // template: '<p>HOME</p>',
      templateUrl: 'home/home.html',
      controller: 'homeController'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'signup/signup.html',
      controller: 'signupController'
    })
    .state('details', {
      url: '/details',
      templateUrl: 'details/details.html',
      controller: 'detailsController'
    });


});
