//var app = angular.module('myApp', []);


app.controller('LeagueSubmit-Controller', ['$scope', 'UserService', '$window', '$location', function($scope, UserService, $window, $location) {
    $scope.leagueLocation = $window.placename;
    $scope.currentState = 'Select';
    //$scope.leagues = ["League1", "League2", "League3"];
    $scope.leagues = UserService.getLeague().then(
	        function(d) {
	        	$scope.leagues = [];
	        	angular.forEach(d.data,function(league,index){
	        		$scope.leagues.push({id:league.leagueID,name:league.leagueName});
	             });
	        });
	$scope.submitleague = function () {
    	UserService.submitLeague($window.placename).then(
	        function(d) {
	        	var response = d.data;
	        	$location.path("/");
	            $scope.confirmation = " You successfully registered to" + response.leagueName;
	        },
	        function(errResponse){
	        	console.error('Error while registering for league');
	        }
        );
	};
	$scope.submitleagueByName = function () {
    	UserService.submitleagueByName($scope.currentState.name).then(
	        function(d) {
	        	var response = d.data;
	        	$location.path("/");
	            $scope.confirmation2 = " You successfully registered to" + response.leagueName;
	        },
	        function(errResponse){
	        	console.error('Error while registering for league');
	        }
        );
	};
}]);