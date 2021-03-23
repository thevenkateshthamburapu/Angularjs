var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    /*With the $routeProvider you can define what page to display when a user clicks a link.*/
    /*Define the $routeProvider using the config method of your application. Work registered in the config method will be performed when the application is loading.*/
    $routeProvider
    .when("/", {
        templateUrl : "main.html"
    })
    .when("/red", {
        templateUrl : "red.html"
    })
    .when("/green", {
        templateUrl : "green.html"
    })
    .when("/blue", {
        templateUrl : "blue.html"
    });
});