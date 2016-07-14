angular.module('olympicApp').factory('DataService', function($http){
  var data ={};
  var getSport = function(sport){
    $http({method: 'GET', url: '/olympics/' + sport}).then(handleSuccess, handleFailure);
  }
  function handleSuccess(response){
    var num = genRanNum(response.data);
    data.athlete = response.data[num];
  }
  function handleFailure(response){
    console.log('Failure:', response);
  }
  function genRanNum(data){
    return Math.floor(Math.random() * data.length);
  }
  return{
    data: data,
    getSport: getSport
  }
});
