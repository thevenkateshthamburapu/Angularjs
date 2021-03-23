/*//create module
var app=angular.module('myApp', []);
//create controller
app.controller("myCtrl",function($scope){
	var employee = {
            firstName: 'John',
            lastName: 'Cena',
            gender: 'Male'
        };
	$scope.emp=employee;
});*/
/*-------- or We can create like this ----------*/
var app=angular.module('myApp', [])
			.controller("myCtrl",function($scope){
				var employee = {
            		firstName: 'John',
            		lastName: 'Cena',
            		gender: 'Male'
        		};
				$scope.emp=employee;
			});