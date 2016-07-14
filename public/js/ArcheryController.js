angular.module('olympicApp').controller('ArcheryController', function($scope, DataService){
  DataService.getSport('archery');
    $scope.data = DataService.data;
});
