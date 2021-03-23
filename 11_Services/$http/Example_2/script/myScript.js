//create module and Controller in single line
var app=angular
				.module('myApp', [])
				.controller("myCtrl",function($scope,$http,$log){
                  //we ca define $htt another way also i.e
                      $http({
                        url:"https://api.github.com/users",
                        method:"GET"
                      })
                      .then(function(response){
                        $scope.users = response.data;  
                        //display the response in console log
                        $log.info(response);    
                      })
                      //display the error message in developer tools
                      .catch(function(error){
                        console.log(error, 'can not get data.');
                     });
});