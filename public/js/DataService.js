angular.module('olympicApp').factory('DataService', function($http){

  var data = {};

  $scope.getSport = function getSport(sport){
    $http({method: 'GET', url: '/olympics/' + sport}).then(handleSuccess, handleFailure);
  }
  function handleSuccess(response){
    var num = genRanNum(response.data);
    data = response.data[num];
    console.log(data);
  }
  function handleFailure(response){
    console.log('Failure:', response);
  }
  function genRanNum(data){
    return Math.floor(Math.random() * data.length);
  }

  return{
    name: data.name,
    origin: data.origin
  }
})
