//create module and Controller in single line
var myApp=angular
				.module('myApp', [])
				.controller("myCtrl",function($scope,$location,$anchorScroll){
            		$scope.scrollTo=function(scrollLocation){
            			$location.hash(scrollLocation);
            			$anchorScroll();
            		}
});