//create module and Controller in single line
var app=angular
				.module('myApp', [])
				.controller("myCtrl",function($scope,$http,$log){
		              $http.get("http://localhost:8080/EmployeeService")
                      .then(function(response){
                        $scope.employees = response.data;  
                        //display the response in console log
                        $log.info(response);    
                      })
                      //display the error message in developer tools
                      .catch(function(error){
                        console.log(error, 'can not get data.');
                     });
});