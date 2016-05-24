/* setup your angular app here */
var app = angular.module('FruitVeggiesApp', []);
//debug stuff to show the app is loading and fruit / veggies are available
app.controller('FruitVeggiesCtrl',['$scope',function($scope) {

  $scope.toFruit = function(food) {
    var arrInd = $scope.fruitAndVeg.indexOf(food);
    var arrSpl = $scope.fruitAndVeg.splice(arrInd,1);
    $scope.fruitCol.push(food);
  }

  $scope.toPool = function(food) {
    var arrInd = $scope.fruitAndVeg.indexOf(food);
    var arrSpl = $scope.fruitAndVeg.splice(arrInd,1);
    $scope.fruitAndVeg.push(food);
  }

  $scope.toVeg = function(food) {
    var arrInd = $scope.fruitAndVeg.indexOf(food);
    var arrSpl = $scope.fruitAndVeg.splice(arrInd,1);
    $scope.vegCol.push(food);
  }

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

  $scope.fruitCol = [
  ];

  $scope.vegCol = [
  ]

}])
console.log('App Started');
console.log('Fruit count', fruit.length);
console.log('Veggie count', vegetables.length);
