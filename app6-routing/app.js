angular.module('routingApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvier) {

  $urlRouterProvier.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    controller: 'homeController',
    templateUrl: 'home/home.html'
  })
  .state('details', {
    url: '/details',
    controller: 'detailsController',
    templateUrl: 'details/details.html'
  }).state('signup', {
    url: '/signup',
    controller: 'signupController',
    templateUrl: 'signup/signup.html'
  });


});
