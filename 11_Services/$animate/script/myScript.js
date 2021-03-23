var myApp=angular
				.module('myApp', [])
				.controller("myCtrl",function($element, $animate, $scope){
				    $scope.runner=null;
            $scope.addClass = function() {
                $scope.runner = $animate.addClass($element.find('div'), 'red red-add');
                $scope.runner.finally(function() {
                  $scope.runner = null;
                });
              };
              $scope.removeClass = function() {
                $scope.runner = $animate.removeClass($element.find('div'), 'red');
                $scope.runner.finally(function() {
                  $scope.runner = null;
                });
              };
          });