app.controller('ManagerHomePage-Controller',['$scope', 'UserService', '$cookies', function($scope, UserService, $cookies) {
	var loggedInUserDetails = $cookies.getObject("loggedInUserDetails");
	$scope.seasons = [];
	$scope.divisions = [];
	$scope.teams = [];
	$scope.getSeasons = function() {
    	$scope.seasons = [];
    	UserService.getSeasons(loggedInUserDetails.body.leagueId).then(
	        function(d) {
	        	$scope.seasons = [];
	        	angular.forEach(d.data,function(season,index){
	        		$scope.seasons.push({id:season.seasonID,name:season.seasonName});
	             });
	        }
        );
    };
    $scope.getDivisions = function() {
    	$scope.divisions = [];
    	UserService.getDivisions($scope.selectedSeason.id).then(
	        function(d) {
	        	$scope.divisions = [];
	        	angular.forEach(d.data,function(division,index){
	        		$scope.divisions.push({id:division.divisionID,name:division.divisionTitle,divisionminage:division.divisionMinAge,divisionmaxage:division.divisionMaxAge,divisionnumberofplayers:division.divisionNumPlayers});
	             });
	        }
        );
    };
    $scope.getTeams = function() {
    	$scope.teams = [];
    	var divisionId = $scope.selectedDivision.id;
    	UserService.getTeams(divisionId).then(
	        function(d) {
	        	$scope.teams = [];
	        	angular.forEach(d.data,function(team,index){
	        		$scope.teams.push({id:team.teamID,name:team.teamTitle,teamNumPlayers:team.teamNumPlayers,divisionid:divisionId,fieldid:team.fieldID});
	            });
	        }
        );
    };
    $scope.getSeasons();
}]);
