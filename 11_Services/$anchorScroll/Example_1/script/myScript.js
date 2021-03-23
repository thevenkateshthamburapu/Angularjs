var myApp=angular
				.module('myApp', [])
				.controller("myCtrl",function($anchorScroll, $location, $scope){
              $anchorScroll.yOffset=50;
				      $scope.gotoAnchor = function(x) {
                        var newHash = 'anchor' + x;
                        console.log("New Hash : "+newHash);
                        console.log("Location Hash : "+$location.hash());
                        /*$anchorScroll.yOffset=50;*/
                        if ($location.hash() !== newHash) {
                          // set the $location.hash to `newHash` and
                          // $anchorScroll will automatically scroll to it
                          $location.hash('anchor' + x);
                        } else {
                          // call $anchorScroll() explicitly,
                          // since $location.hash hasn't changed
                          $anchorScroll();
                        }
                      };
                });