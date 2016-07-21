app.controller('DraftPlayers-Controller', ['$scope', 'UserService', '$location', '$timeout', function($scope, UserService, $location, $timeout) {
	$scope.assignedPlayers = [];
	$scope.unassignedPlayers = [];
	$scope.leagues = [];
	$scope.seasons = [];
	$scope.divisions = [];
	$scope.teams = [];
	$scope.teamId = $location.search().teamId;
	$scope.teamName = $location.search().teamName;
	$scope.teamNumPlayers = $location.search().teamNumPlayers;
    $scope.addPlayers = function() {
		for(var i = $scope.unassignedPlayers.length - 1; i >= 0; i--){
		    if($scope.unassignedPlayers[i].selected){
		    	$scope.assignedPlayers.push({id:$scope.unassignedPlayers[i].id,name:$scope.unassignedPlayers[i].name});
		        $scope.unassignedPlayers.splice(i,1);
		    }
		}
    };
    $scope.removePlayers = function(index) {
    	for(var i = $scope.assignedPlayers.length - 1; i >= 0; i--){
		    if($scope.assignedPlayers[i].selected){
		    	$scope.unassignedPlayers.push({id:$scope.assignedPlayers[i].id,name:$scope.assignedPlayers[i].name});
		        $scope.assignedPlayers.splice(i,1);
		    }
		}
    };
    $scope.getSeasons = function() {
    	$scope.seasons = [];
    	UserService.getSeasons($scope.selectedLeague.id).then(
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
    	$scope.teams.push({id:'10000',name:'Team1',teamnumberofplayers:'10',divisionid:'10000',fieldid:''},
    					{id:'10001',name:'Team2',teamnumberofplayers:'10',divisionid:'10000',fieldid:''},
    					{id:'10002',name:'Team3',teamnumberofplayers:'10',divisionid:'10000',fieldid:''});
    };
    $scope.getLeague = function () {
    	UserService.getLeague().then(
	        function(d) {
	        	$scope.leagues = [];
	        	angular.forEach(d.data,function(league,index){
	        		$scope.leagues.push({id:league.leagueID,name:league.leagueName});
	             });
	        }
        );
    };
    $scope.getUnassignedPlayers = function () {
    	UserService.getUnassignedPlayers().then(
	        function(d) {
	        	$scope.unassignedPlayers = [];
	        	angular.forEach(d.data,function(player,index){
	        		$scope.unassignedPlayers.push({id:player.personID,name:player.firstName+" "+player.lastName});
	            });
	        }
        );
    };
    $scope.getAssignedPlayers = function() {
    	$scope.assignedPlayers = [];
    	UserService.getAssignedPlayers($scope.teamId).then(
	        function(d) {
	        	$scope.assignedPlayers = [];
	        	angular.forEach(d.data,function(player,index){
	        		$scope.assignedPlayers.push({id:player.personID,name:player.firstName+" "+player.lastName});
	            });
	        }
        );
    };
    $scope.modifyPlayers = function() {
    	if($scope.assignedPlayers.length > $scope.teamNumPlayers){
    		$scope.error = "Assigned players cannot be greater than :"+$scope.teamNumPlayers;	     
    		return;
    	}
    	
    	UserService.modifyPlayers($scope.teamId ,$scope.assignedPlayers).then(
	        function(d) {
	        	if(d.data === true){
	        		$scope.displayMessage('success','Players assigned successfully.');
	        	}
	        }
        );
    };
    
    //$scope.getLeague();
    $scope.getAssignedPlayers();
    $scope.getUnassignedPlayers();
}]);