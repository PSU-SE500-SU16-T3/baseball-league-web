//var app = angular.module('myApp', []);

app.controller('LeagueCreation-Controller', ['$scope', 'UserService', function($scope, UserService) {
    $scope.myFunc = function () {
    	UserService.setLeague($scope.leagueName, $scope.leagueLocation).then(
	        function(d) {
	        	var response = d.data;
	            $scope.confirmation = response.leagueName + " successfully created";
	        },
	        function(errResponse){
	        	console.error('Error while creating league');
	        }
        );    	
	}
}]);