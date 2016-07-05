var app = angular.module('myApp', []);

app.controller('myApp-Controller', ['$scope', 'UserService', function($scope, UserService) {
    $scope.myFunc = function () {
    	LeagueService.getJson($scope.player, $scope.league).then(
	        function(d) {
	        	var response = d.data;
	        },
	        function(errResponse){
	        	console.error('Error while fetching Currencies');
	        }
        );    	
	}
}]);