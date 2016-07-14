angular.module('olympicApp').controller('CanoeController', function($scope, DataService){
  DataService.getSport('canoe');
    $scope.data = DataService.data;
});
