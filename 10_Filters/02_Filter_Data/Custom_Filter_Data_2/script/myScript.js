//create module and Controller in single line
var myApp=angular
				.module('myApp', [])
                //custom filter is moved to a separate file
				.controller("myCtrl",function($scope){
				  var employees = [
                            { name: "Ben", gender: 1, salary: 55000 },
                            { name: "Sara", gender: 2, salary: 68000 },
                            { name: "Mark", gender: 1, salary: 57000 },
                            { name: "Pam", gender: 2, salary: 53000 },
                            { name: "Todd", gender: 3, salary: 60000 }
                        ];

            $scope.employees = employees;
            
});