angular.module('olympicApp', ['ngRoute']);

var currSport = '';

var canoe = [];
var judo = [];
var tableten = [];
var taekwondo = [];
var randomNum = 0;

// getSport('archery');

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

angular.module('olympicApp').controller('ArcheryController', function($scope, $http){
  getSport();
  function getSport(){
    $http({method: 'GET', url: '/olympics/archery'}).then(handleSuccess, handleFailure);
  }
  function handleSuccess(response){
    var num = genRanNum(response.data);
    $scope.athlete = response.data[num];
  }
  function handleFailure(response){
    console.log('Failure:', response);
  }
  function genRanNum(data){
    return Math.floor(Math.random() * data.length);
  }
});
angular.module('olympicApp').controller('CanoeController', function($scope, $http){
  getSport();
  function getSport(){
    $http({method: 'GET', url: '/olympics/canoe'}).then(handleSuccess, handleFailure);
  }
  function handleSuccess(response){
    var num = genRanNum(response.data);
    $scope.athlete = response.data[num];
  }
  function handleFailure(response){
    console.log('Failure:', response);
  }
  function genRanNum(data){
    return Math.floor(Math.random() * data.length);
  }
});
angular.module('olympicApp').controller('JudoController', function($scope, $http){
  getSport();
  function getSport(){
    $http({method: 'GET', url: '/olympics/judo'}).then(handleSuccess, handleFailure);
  }
  function handleSuccess(response){
    var num = genRanNum(response.data);
    $scope.athlete = response.data[num];
  }
  function handleFailure(response){
    console.log('Failure:', response);
  }
  function genRanNum(data){
    return Math.floor(Math.random() * data.length);
  }
});
angular.module('olympicApp').controller('TableTenController', function($scope, $http){
  getSport();
  function getSport(){
    $http({method: 'GET', url: '/olympics/tableten'}).then(handleSuccess, handleFailure);
  }
  function handleSuccess(response){
    var num = genRanNum(response.data);
    $scope.athlete = response.data[num];
  }
  function handleFailure(response){
    console.log('Failure:', response);
  }
  function genRanNum(data){
    return Math.floor(Math.random() * data.length);
  }
});
angular.module('olympicApp').controller('TaekwondoController', function($scope, $http){
  getSport();
  function getSport(){
    $http({method: 'GET', url: '/olympics/taekwondo'}).then(handleSuccess, handleFailure);
  }
  function handleSuccess(response){
    var num = genRanNum(response.data);
    $scope.athlete = response.data[num];
  }
  function handleFailure(response){
    console.log('Failure:', response);
  }
  function genRanNum(data){
    return Math.floor(Math.random() * data.length);
  }
});

angular.module('olympicApp').controller('AppController', function($scope, $http){

});
