var app = angular.module('myApp', []);

app.controller('ManagerHomePage-Controller',['$scope', 'UserService', function($scope, UserService) {
	$scope.clicked = function(){
		$location.path ('/LeagueCreation.html');
	}
}]);
