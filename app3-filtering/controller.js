angular.module('filterApp').controller('filterController',function($scope, filterService){

$scope.persons = filterService.getPersons();


});
