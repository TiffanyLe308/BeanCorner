var app = angular.module('beanCorner', ['ui.router', 'ui.bootstrap', 'ngMap', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '../html/home.html',
      controller: 'HomeController'
    })
    .state('ourmenu', {
      url: '/ourmenu',
      templateUrl: '../html/ourmenu.html',
      controller: 'MenuController'
    })
    .state('gallery', {
      url: '/gallery',
      templateUrl: '../html/gallery.html',
      controller: 'GalleryController'
    })
    .state('contactus', {
      url: '/contactus',
      templateUrl: '../html/contactus.html',
      controller: 'ContactUsController'
    });
});

app.directive('scrollOnClick', function() {
  return {
    restrict: 'A',
    link: function(scope, $elm, attrs) {
      var idToScroll = attrs.href;
      $elm.on('click', function() {
        var $target;
        if (idToScroll) {
          $target = $(idToScroll);
        } else {
          $target = $elm;
        }
        $("html, body").animate({scrollTop: 0}, "slow");
      });
    }
  }
});
