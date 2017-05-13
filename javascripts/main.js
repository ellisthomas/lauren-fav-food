var app = angular.module("LauApp", []);

app.controller("ItemCtrl", ($scope) => {
	
	$scope.dog = "Woof!";
	$scope.showListView = true;
	$scope.items = [
        {
          id: 0,
          animal: "monkey",
        },
        {
          animal: "panda",
        },
        {
          animal: "koala",
          image: "http://image.blingee.com/images18/content/output/000/000/000/771/729955780_825984.gif"
        }
      ];

});