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


app.controller('LeagueSubmit-Controller', ['$scope', 'UserService', '$window', function($scope, UserService, $window) {
    $scope.leagueLocation = $window.placename;
	$scope.submitleague = function () {
    	UserService.submitLeague($window.placename).then(
	        function(d) {
	        	var response = d.data;
	            $scope.confirmation = " You successfully registered to" + response.leagueName;
	        },
	        function(errResponse){
	        	console.error('Error while registering for league');
	        }
        );    	
	}
}]);