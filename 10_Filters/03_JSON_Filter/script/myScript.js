//create module and Controller in single line
var myApp=angular
				.module('myApp', [])
				.controller("myCtrl",function($scope){
				  $scope.customer = {
                            "name" : "Alfreds Futterkiste",
                            "city" : "Berlin",
                            "country" : "Germany"
                        };                  
            
});