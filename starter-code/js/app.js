/* setup your angular app here */
var app = angular.module('FruitVeggiesApp', []);
//debug stuff to show the app is loading and fruit / veggies are available
app.controller('FruitVeggiesCtrl',['$scope',function($scope) {
  $scope.fruit = [
    'Apple',
    'Apricot',
    'Banana'
    ];

  $scope.veggies = [
    'Artichoke',
    'Arugula',
    'Asparagus'
    ];

  $scope.fruitAndVeg = [
    'Artichoke',
    'Arugula',
    'Asparagus',
    'Apple',
    'Apricot',
    'Banana'
  ]

}])
console.log('App Started');
console.log('Fruit count', fruit.length);
console.log('Veggie count', vegetables.length);
