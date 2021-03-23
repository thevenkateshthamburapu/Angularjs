//create module and Controller in single line
var myApp=angular
				.module('myApp', [])
				.controller("myCtrl",function($scope,$http,$location,$anchorScroll){
            		var countries=[
					{
						name:"India",
						cities:[
							{name:"Hyderabad"},
							{name:"Bangalore"},
							{name:"Chennai"}
							]
					},
					{
						name:"UK",
						cities:[
							{name:"London"},
							{name:"Birmingham"},
							{name:"Manchester"}
							]
					},
					{
						name:"USA",
						cities:[
							{name:"Los Angeles"},
							{name:"Chicago"},
							{name:"Houston"}
							]
					}
				];

					$scope.countries=countries;
                    $scope.scrollTo = function (countryName) {
                             $location.hash(countryName);
                             $anchorScroll();
                         }
});