var app=angular
				.module('myApp', [])
				.controller("myCtrl",function($scope, $document){
				  $scope.title = $document[0].title;
          		  $scope.windowTitle = angular.element(window.document)[0].title;
          });