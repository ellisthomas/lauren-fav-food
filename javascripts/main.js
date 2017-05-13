var app = angular.module("LauApp", []);

app.controller("ItemCtrl", ($scope) => {
	
	$scope.dog = "Woof!";
	$scope.showListView = true;
	$scope.items = [
        {
          id: 0,
          food: "pizza",
        },
        {
          food: "steak",
        },
        {
          food: "cheese wiz",
        }
      ];

});