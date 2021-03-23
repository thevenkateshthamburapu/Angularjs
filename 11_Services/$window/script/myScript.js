var app=angular
				.module('myApp', [])
				.controller("myCtrl",function($scope, $window){
						$scope.greeting = 'Hello, World!';
				    	$scope.doGreeting = function(greeting) {
				        $window.alert(greeting);
				      };
          		});