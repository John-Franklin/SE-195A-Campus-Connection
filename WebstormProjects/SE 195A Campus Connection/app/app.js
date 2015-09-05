'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]);

/*app.controller('MainController', ['$scope', function($scope){
  $scope.pizza = {name: "pizza", merit: "THE BETRAYER OF MANKIND"};

  $scope.corn = {name: "corn", merit: "THE ONE TRUE GOOD"};
  $scope.evil = "THE DARK ELDRICH SPIRE";
}]);*/
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);