var myApp=angular
				.module('myApp', [])
        .controller('myCtrl', function($scope){
              $scope.user = {
              username: "",
              password: "",
              confirmPassword: ""
            };
        })
				.directive("compareTo", function() {
           return {
      require: "ngModel",
      scope: {
        otherModelValue: "=compareTo"
      },
      link: function(scope, element, attributes, ngModel) {

        ngModel.$validators.compareTo = function(modelValue) {
          return modelValue == scope.otherModelValue;
        };

        scope.$watch("otherModelValue", function() {
          ngModel.$validate();
        });
      }
    };
          });