//var app = angular.module('myApp', []);

app.controller('LeagueCreation-Controller', ['$scope', 'UserService', '$window', function($scope, UserService, $window) {
    $scope.myFunc = function () {
    	UserService.setLeague($scope.leagueName, $scope.leagueLocation).then(
	        function(d) {
	        	var response = d.data;
	        	$window.location.href = '/baseball-league-web/ManagerDashboard.html';
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
	        	$window.location.href = '/baseball-league-web/PlayerHome.html';
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
	        	$window.location.href = '/baseball-league-web/PlayerHome.html';
	            $scope.confirmation2 = " You successfully registered to" + response.leagueName;
	        },
	        function(errResponse){
	        	console.error('Error while registering for league');
	        }
        );
	};
}]);