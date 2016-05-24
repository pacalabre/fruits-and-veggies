/* setup your angular app here */
var app = angular.module('FruitVeggiesApp', []);
//debug stuff to show the app is loading and fruit / veggies are available
app.controller('FruitVeggiesCtrl',['$scope',function($scope) {
  $scope.wrongVeg = [];
  $scope.wrongFruit = [];


  // Food Buttons
  $scope.toFruit = function(food) {
    var arrInd = $scope.fruitAndVeg.indexOf(food);
    var arrSpl = $scope.fruitAndVeg.splice(arrInd,1);
    $scope.fruitCol.push(food);
    console.log($scope.fruitAndVeg.length);
    checkMove();
  }

  $scope.vegToPool = function(food) {
    console.log(food);
    var arrInd = $scope.vegCol.indexOf(food);
    var arrSpl = $scope.vegCol.splice(arrInd,1);
    $scope.fruitAndVeg.push(food);
    compareVeg();
    $scope.wrongVeg = [];
    $scope.wrongFruit = [];
  }

  $scope.fruitToPool = function(food) {
    console.log(food);
    var arrInd = $scope.fruitCol.indexOf(food);
    var arrSpl = $scope.fruitCol.splice(arrInd,1);
    $scope.fruitAndVeg.push(food);
    compareFruit();
    $scope.wrongFruit = [];
    $scope.wrongVeg = [];
  }

  $scope.toVeg = function(food) {
    console.log(food);
    var arrInd = $scope.fruitAndVeg.indexOf(food);
    var arrSpl = $scope.fruitAndVeg.splice(arrInd,1);
    $scope.vegCol.push(food);
    checkMove();
    }

  //Pool Column
  $scope.fruitAndVeg = [
    'Artichoke',
    'Arugula',
    'Asparagus',
    'Apple',
    'Apricot',
    'Banana'
  ]

  //Fruit Column
  $scope.fruitCol = [
  ];

  //Veggie Column
  $scope.vegCol = [
  ]

  //Fruit
  $scope.fruit = [
    'Apple',
    'Apricot',
    'Banana'
  ];

  //Veggies
  $scope.veggies = [
    'Artichoke',
    'Arugula',
    'Asparagus'
  ];

  function compareFruit() {
    if($scope.fruitAndVeg.length === 0) {
      for(var i = 0; i < $scope.fruitCol.length; i++) {
        if($scope.fruit.indexOf($scope.fruitCol[i]) === -1 ) {
          console.log("hey");
          $scope.wrongFruit[i] = true;
        } else {
          $scope.wrongFruit[i] = false;

        }

      }
    }
  }

    function compareVeg() {
    if($scope.fruitAndVeg.length === 0) {
      for(var i = 0; i < $scope.vegCol.length; i++) {
        if($scope.veggies.indexOf($scope.vegCol[i]) === -1 ) {
          console.log("hey");
          $scope.wrongVeg[i] = true;
        }
      }
    }
  }

  function checkWin() {
    if($scope.fruitAndVeg.length !== 0) {
      return false;
    }
    for(var i = 0; i < $scope.wrongFruit.length;i++) {
      if($scope.wrongFruit[i] === true) {
        return false;
      }
    }
    for(var i = 0;i < $scope.wrongVeg.length; i++){
      if($scope.wrongVeg[i] === true) {
        return false;
      }
    }
    return true;
  }

  function checkMove() {
    compareFruit();
    compareVeg();
    if(checkWin()){
      alert("you won");
    }
  }

}])
console.log('App Started');
console.log('Fruit count', fruit.length);
console.log('Veggie count', vegetables.length);
