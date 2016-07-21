app.controller('ManagerHomePage-Controller',['$scope', 'UserService', '$cookies','$location', function($scope, UserService, $cookies, $location) {
	var loggedInUserDetails = $cookies.getObject("loggedInUserDetails");
	$scope.seasons = [];
	$scope.divisions = [];
	$scope.teams = [];
	$scope.getSeasons = function() {
    	$scope.seasons = [];
    	UserService.getSeasons(loggedInUserDetails.body.leagueId).then(
	        function(d) {
	        	$scope.seasons = [];
	        	if(d === null || d.data.length === 0){
	        		$scope.error = "Season not created, please create a new season.";
	        		return;
	        	}else{
	        		$scope.error = "";
	        	}
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
	        	if(d === null || d.data.length === 0){
	        		$scope.error = "Division not created, please create a new division.";
	        		return
	        	}
	        	angular.forEach(d.data,function(division,index){
	        		$scope.divisions.push({id:division.divisionID,name:division.divisionTitle,divisionminage:division.divisionMinAge,divisionmaxage:division.divisionMaxAge,divisionnumberofplayers:division.divisionNumPlayers});
	             });
	        }
        );
    };
    $scope.getTeams = function() {
    	$scope.teams = [];
    	var divisionId = $scope.selectedDivision.id;
    	UserService.getTeams(divisionId, "division").then(
	        function(d) {
	        	$scope.teams = [];
	        	if(d === null || d.data.length === 0){
	        		$scope.error = "Team not created, please create a new team.";
	        		return
	        	}
	        	angular.forEach(d.data,function(team,index){
	        		$scope.teams.push({id:team.teamID,name:team.teamTitle,teamNumPlayers:team.teamNumPlayers,divisionid:divisionId,fieldid:team.fieldID});
	            });
	        }
        );
    };
    $scope.createNewSeason = function() {
		$location.path("/admin/createnewseason");
    };
    $scope.editSeason = function() {    	
		$location.path("/admin/editseason").search('seasonId',$scope.selectedSeason.id);
    };
    $scope.editTeam = function() {    
    	if(angular.isUndefined($scope.selectedDivision)){
    		$scope.error = "Please select division to proceed.";
    		return;
    	}
		$location.path("/admin/editteam").search('teamId',$scope.selectedTeam.id);
    };
    $scope.createNewDivision = function() {
    	if(angular.isUndefined($scope.selectedSeason)){
    		$scope.error = "Please select season to proceed.";
    		return;
    	}
    	$cookies.put('seasonId', $scope.selectedSeason.id);
		$location.path("/admin/createnewdivision");
    }; 
    $scope.createNewTeam = function() {
    	if(angular.isUndefined($scope.selectedSeason)){
    		$scope.error = "Please select season to proceed.";
    		return;
    	}
    	if(angular.isUndefined($scope.selectedDivision)){
    		$scope.error = "Please select division to proceed.";
    		return;
    	}
    	$cookies.put('seasonId', $scope.selectedSeason.id);
    	$cookies.put('divisionId', $scope.selectedDivision.id);
		$location.path("/admin/createnewteam");
    }; 
    
    
    $scope.getSeasons();
}]);
