angular.module('olympicApp').controller('ArcheryController', function($scope){
$scope.athlete = DataService.getSport('archery');
});
