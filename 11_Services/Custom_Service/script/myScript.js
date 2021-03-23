//create module and Controller in single line
var app=angular
				.module('myApp', [])
				.controller("myCtrl",function($scope,stringService){
		            $scope.transformString=function(input){
		            $scope.outputText=stringService.uppercaseString(input);
            };
});