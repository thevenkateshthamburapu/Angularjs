//create module and Controller in single line
var myApp=angular
				.module('myApp', [])
                //custom filter is moved to a separate file
				.controller("myCtrl",function($scope){
        				$scope.names = [
                            'Jani',
                            'Carl',
                            'Margareth',
                            'Hege',
                            'Joe',
                            'Gustav',
                            'Birgit',
                            'Mary',
                            'Kai'
                            ];
            
                    })
                .filter('myFormat', function() {
                    return function(x) {
                        var i, c, txt = "";
                        for (i = 0; i < x.length; i++) {
                            c = x[i];
                            if (i % 2 == 0) {
                                c = c.toUpperCase();
                            }
                            txt += c;
                        }
                        return txt;
                    };
});