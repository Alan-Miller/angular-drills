angular.module('app6', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home/home.html',
      controller: 'homeCtrl'
    })
    .state('details', {
      url: '/details',
      templateUrl: 'details/details.html',
      controller: 'detailsCtrl'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'signup/signup.html',
      controller: 'signupCtrl'
    });

});
