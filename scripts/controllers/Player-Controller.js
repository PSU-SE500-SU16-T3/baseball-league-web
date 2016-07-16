app.controller('Player-Controller',['$scope', 'UserService', function($scope, UserService) {
	$scope.clicked = function(){
		$location.path ('/LeagueCreation.html');
	}
}]);
