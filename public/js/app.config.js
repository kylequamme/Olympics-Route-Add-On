angular.module('olympicApp').config(function($routeProvider, $locationProvider){
  $routeProvider.when('/archery', {
      templateUrl: 'views/archery.html',
      controller: 'ArcheryController'
    }).when('/canoe', {
      templateUrl: 'views/canoe.html',
      controller: 'CanoeController'
    }).when('/judo', {
      templateUrl: 'views/judo.html',
      controller: 'JudoController'
    }).when('/tableten', {
      templateUrl: 'views/tableten.html',
      controller: 'TableTenController'
    }).when('/taekwondo', {
      templateUrl: 'views/taekwondo.html',
      controller: 'TaekwondoController'
    });
    $locationProvider.html5Mode(true);
  });
