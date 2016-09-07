angular.module('routingApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    controller: 'homeController',
    templateUrl: 'home/home.html'
  })
  .state('signup', {
    url: '/signup',
    controller: 'signupController',
    templateUrl: 'signup/signup.html'
  })
  .state('details', {
    url: '/details/:url',  // Here 'url' becomes property in $stateParams object, equal to what's assigned to attribute
    controller: 'detailsController',
    templateUrl: 'details/details.html'
  });

});


//CHANGE DETAILS STATE TO TAKE IN ID AND USE SERVICE TO GET DETAILS FOR THAT PERSON
