angular.module('olympicApp').controller('TaekwondoController', function($scope, DataService){
  DataService.getSport('taekwondo');
    $scope.data = DataService.data;
});
