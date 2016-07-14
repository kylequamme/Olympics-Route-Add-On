angular.module('olympicApp').controller('JudoController', function($scope, DataService){
  DataService.getSport('judo');
    $scope.data = DataService.data;
});
