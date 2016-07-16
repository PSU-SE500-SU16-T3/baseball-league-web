var app = angular.module('myApp', ['ngRoute']);

app.config([ '$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.when('/admin/home', {
            templateUrl : 'ManagerHomePage.html',
            controller : 'ManagerHomePage-Controller'
        })
        $routeProvider.when('/player/home', {
            templateUrl : 'PlayerHomePage.html',
            controller : 'PlayerHomeController'
        })
        $routeProvider.when('/', {
            templateUrl : 'login.html',
            controller : 'Login-Controller'
        }).otherwise({
            redirectTo : 'index.html'
        });
        //$locationProvider.html5Mode(true); //Remove the '#' from URL.
    }
]);