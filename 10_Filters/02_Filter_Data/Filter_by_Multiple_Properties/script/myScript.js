//create module and Controller in single line
var myApp=angular
				.module('myApp', [])
				.controller("myCtrl",function($scope){
				  var employees = [
                            { name: "Ben", gender: "Male", salary: 55000, city: "London" },
                            { name: "Sara", gender: "Female", salary: 68000, city: "Chennai" },
                            { name: "Mark", gender: "Male", salary: 57000, city: "London" },
                            { name: "Pam", gender: "Female", salary: 53000, city: "Chennai" },
                            { name: "Todd", gender: "Male", salary: 60000, city: "London" },
                        ];

            $scope.employees = employees;
            //Search Name and City in Single Search field
             $scope.search = function (item) {
                if ($scope.searchText == undefined) {
                    return true;
                }
                else {
                    if (item.city.toLowerCase()
                                 .indexOf($scope.searchText.toLowerCase()) != -1 ||
                        item.name.toLowerCase()
                                 .indexOf($scope.searchText.toLowerCase()) != -1) {
                        return true;
                    }
                }

                return false;
            };
            
});