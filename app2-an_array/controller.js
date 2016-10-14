angular.module('arrayApp').controller('arrayController', function ($scope, arrayService){

$scope.persons = arrayService.getPersons();

})
