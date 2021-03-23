var myApp=angular
				.module('myApp', [])
				.controller("myCtrl",function($scope, $filter){
					$scope.originalText = 'hello';
					$scope.filteredText = $filter('uppercase')($scope.originalText);
          });