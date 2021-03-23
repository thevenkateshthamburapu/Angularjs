var myApp=angular
				.module('myApp', [])
				.controller("myCtrl",function($element,$animateCss, $scope){
				   var animator;
            $scope.startCss=function(){
              if(animator==undefined){
                animator = $animateCss($element.find('div'), {
                    from: { background:'red' },
                    to: { background:'blue' },
                    addClass: 'green large-text pulse-twice',
                    easing: 'ease-out',
                     duration: 5 
                    });
                }
              console.log(animator.start());
              animator.start();

            };
            $scope.stopCss=function(){
              console.log(animator.end());
              animator.end();
            };
          });