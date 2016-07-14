angular.module('olympicApp').controller('TableTenController', function($scope, DataService){
  DataService.getSport('tableten');
    $scope.data = DataService.data;
});
