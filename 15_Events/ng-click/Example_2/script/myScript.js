//create module and Controller in single line
var myApp=angular
				.module('myApp', [])
				.controller("myCtrl",function($scope){
				var technologies = [
                        { name: "C", likes: 0, dislikes: 0 },
                        { name: "C++", likes: 0, dislikes: 0 },
                        { name: "Java", likes: 0, dislikes: 0 },
                        { name: "AngularJS", likes: 0, dislikes: 0 }
                	];
                $scope.technologies = technologies;
                $scope.increamentLikes=function(technology){
                    technology.likes++;
                };
                $scope.increamentDislikes=function(technology){
                    technology.dislikes++;
                };
});