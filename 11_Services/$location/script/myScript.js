var app=angular
				.module('myApp', [])
				.controller("myCtrl",function($scope, $location){
					$scope.absUrl = $location.absUrl();
					/*
					// given URL http://example.com/#/some/path?foo=bar&baz=xoxo
					var url = $location.url();
					// => "/some/path?foo=bar&baz=xoxo"
					*/
					$scope.url = $location.url();
					$scope.protocol = $location.protocol();
					$scope.host = $location.host();
					/*
					// given URL http://example.com/#/some/path?foo=bar&baz=xoxo
					var host = $location.host();
					// => "example.com"

					// given URL http://user:password@example.com:8080/#/some/path?foo=bar&baz=xoxo
					host = $location.host();
					// => "example.com"
					host = location.host;
					// => "example.com:8080"
					*/
					$scope.port = $location.port();
					$scope.path = $location.path();
					/*
					// given URL http://example.com/#/some/path?foo=bar&baz=xoxo
					var path = $location.path();
					// => "/some/path"
					*/
					$scope.searchObject = $location.search();
					/*
					// given URL http://example.com/#/some/path?foo=bar&baz=xoxo
					var searchObject = $location.search();
					// => {foo: 'bar', baz: 'xoxo'}

					// set foo to 'yipee'
					$location.search('foo', 'yipee');
					// $location.search() => {foo: 'yipee', baz: 'xoxo'}
					*/
					$scope.hash = $location.hash();
					/*
					// given URL http://example.com/#/some/path?foo=bar&baz=xoxo#hashValue
					var hash = $location.hash();
					// => "hashValue"
					*/
          		});