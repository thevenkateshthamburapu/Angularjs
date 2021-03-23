var app=angular
				.module('myApp', [])
				.controller("myCtrl",function($scope, $timeout){
						$scope.myHeader = "Hello!";
						$timeout(function () {
						      $scope.myHeader = "How are you today?";
						  }, 2000);
          		});