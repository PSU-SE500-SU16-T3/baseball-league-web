//var app = angular.module('myApp', []);

app.controller('LeagueCreation-Controller', ['$scope', 'UserService','$location', function($scope, UserService, $location) {
    $scope.myFunc = function () {
    	UserService.setLeague($scope.leagueName, $scope.leagueLocation).then(
	        function(d) {
	        	var response = d.data;
	        	
	        	$location.path("/");
	            $scope.confirmation = response.leagueName + " successfully created";
	        },
	        function(errResponse){
	        	console.error('Error while creating league');
	        }
        );    	
	}
}]);


