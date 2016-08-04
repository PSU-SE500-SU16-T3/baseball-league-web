var app = angular.module('myApp', ['ngRoute','ngCookies','ngAnimate', 'ui.bootstrap']);

app.config([ '$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.when('/admin/home', {
            templateUrl : 'ManagerDashboard.html',
            controller : 'ManagerHomePage-Controller'
        })
        $routeProvider.when('/player/home', {
            templateUrl : 'PlayerHome.html',
            controller : 'Player-Controller' 
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
        $routeProvider.when('/admin/editdivision', {
            templateUrl : 'EditDivision.html',
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
        $routeProvider.when('/register', {
            templateUrl : 'Register.html',
            controller : 'Register-Controller'
        })
        $routeProvider.when('/register/LeagueCreation', {
            templateUrl : 'LeagueCreation.html',
            controller : 'LeagueCreation-Controller'
        })
        $routeProvider.when('/register/FindLeague', {
            templateUrl : 'FindLeague.html',
            controller : 'LeagueSubmit-Controller'
        })
        $routeProvider.when('/', {
            templateUrl : 'login.html',
            controller : 'Login-Controller'
        }).otherwise({
            redirectTo : 'index.html'
        });
    }
]);
app.run(function($rootScope,$location,$cookies) {
    $rootScope.takeMeTo = function(url) {
    	$location.path(url);
    };
    $rootScope.signOut = function() {
    	$cookies.remove("loggedInUserDetails");
    	$cookies.remove("seasonId");
    	$cookies.remove("divisionId");
    	$location.path("/");
    };
    $rootScope.showMe = function() {
    	return $location.path();
    };
});
