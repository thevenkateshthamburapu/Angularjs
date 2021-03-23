var app=angular
				.module('myApp', [])
				.controller("myCtrl",function($scope, $log){
					$scope.$log = $log;
    				$scope.message = 'Hello World!';
          		});