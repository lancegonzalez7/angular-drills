angular.module('pokeApp').controller('pokeCtrl',function($scope, pokeService){

$scope.test = 'this is a test';
$scope.pokemon = {
  name: 'Unknown'
};

$scope.getPokemon = function(){
  pokeService.getPokemon().then(function(response){
    $scope.pokemon = response;
  })
}

console.log($scope);
 $scope.getPokemon();
})
