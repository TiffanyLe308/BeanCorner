var app = angular.module('beanCorner', ['ui.router', 'ui.bootstrap', 'ngMap', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '../html/home.html',
      // controller: 'HomeController'
    })
    .state('ourmenu', {
      url: '/ourmenu',
      templateUrl: '../html/ourmenu.html',
      // controller: 'MenuController'
    })
    .state('aboutus', {
      url: '/ourservices',
      templateUrl: '../html/aboutus.html',
      // controller: 'AboutUsController'
    })
    .state('contactus', {
      url: '/contactus',
      templateUrl: '../html/contactus.html',
      // controller: 'ContactUsController'
    });
});
