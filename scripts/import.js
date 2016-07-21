var app = angular.module('myApp', ['ngRoute','ngCookies','ngAnimate']);

app.config([ '$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.when('/admin/home', {
            templateUrl : 'ManagerDashboard.html',
            controller : 'ManagerHomePage-Controller'
        })
        $routeProvider.when('/admin/createnewseason', {
            templateUrl : 'CreateNewSeason.html',
            controller : 'Season-Controller'
        })
        $routeProvider.when('/admin/editseason', {
            templateUrl : 'EditSeason.html',
            controller : 'Season-Controller'
        })
        $routeProvider.when('/admin/createnewdivision', {
            templateUrl : 'CreateNewDivision.html',
            controller : 'Division-Controller'
        })
        $routeProvider.when('/admin/createnewteam', {
            templateUrl : 'CreateNewTeam.html',
            controller : 'Team-Controller'
        })
        $routeProvider.when('/admin/editteam', {
            templateUrl : 'EditTeam.html',
            controller : 'EditTeam-Controller'
        })
        $routeProvider.when('/admin/draftplayers', {
            templateUrl : 'DraftPlayers.html',
            controller : 'DraftPlayers-Controller'
        })
        $routeProvider.when('/player/home', {
            templateUrl : 'PlayerHomePage.html',
            controller : 'PlayerHomeController'
        })
        $routeProvider.when('/register', {
            templateUrl : 'Register.html',
            controller : 'Register-Controller'
        })
        $routeProvider.when('/', {
            templateUrl : 'login.html',
            controller : 'Login-Controller'
        }).otherwise({
            redirectTo : 'index.html'
        });
    }
]);