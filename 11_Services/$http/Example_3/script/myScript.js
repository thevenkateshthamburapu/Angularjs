//create module and Controller in single line
var app=angular
				.module('myApp', [])
				.controller("myCtrl",function($scope,$http,$log){

                    var successCall=function(response){
                      $scope.stations = response.data;  
                        //display the response in console log
                        $log.info(response);    
                    }
                    var errorCall=function(response){
                      $scope.error = response.data;  
                        //display the response in console log
                        $log.info(response);    
                    }
                  //we ca define $htt another way also i.e
                      $http({
                        url:"https://feeds.citibikenyc.com/stations/stations.json",
                        method:"GET"
                      })
                      .then(successCall,errorCall)

                      
});