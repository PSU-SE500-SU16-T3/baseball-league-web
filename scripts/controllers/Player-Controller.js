app.controller('Player-Controller',['$scope', 'UserService', '$cookies','$location','$uibModal', '$log',
                                             function($scope, UserService, $cookies, $location,$uibModal, $log) {
	var loggedInUserDetails = $cookies.getObject("loggedInUserDetails");
	$scope.seasons = [];
	$scope.divisions = [];
	$scope.teams = [];
	$scope.showerror=false;
	$scope.showgames=true;
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
    $scope.clicked = function(){
		$location.path ('/LeagueCreation.html');
	};
    $scope.getTeams = function() {
    	$scope.teams = [];
    	var divisionId = $scope.selectedDivision.id;
    	UserService.getTeams(personID).then(
	        function(d) {
	        	$scope.teams = [];
	        	if(d === null || d.data.length === 0){
	        		$scope.error =  "Not yet Assigned to a Team";
	        		return
	        	}
	        	angular.forEach(d.data,function(team,index){
	        		$scope.teams.push({id:team.teamID,name:team.teamTitle,teamNumPlayers:team.teamNumPlayers,divisionid:divisionId,fieldid:team.fieldID});
	            });
	        }
        );
    };
    $scope.getGames = function() {
    	$scope.games = [];
    	UserService.getGames(10017).then(
    			function(d) {
    	        	$scope.games = [];
    	        	if(d === null || d.data.length === 0){
    	        		$scope.showerror=true;
    	        		$scope.showgames=false;
    	        		$scope.error = "No Games Scheduled Yet";
    	        		return
    	        	}
    	        	angular.forEach(d.data,function(game,index){
    	        		$scope.games.push({id:game.GameID,gamedate:game.gamedate,filedname:game.fieldname});
    	            });
    	        }
    			);
    };
    $scope.getPersonInfo = function () {
    	UserService.getPerson(10017).then(
	        function(d) {
	        	var response = d.data;
	            
	        },
	        function(errResponse){
	        	console.error('Error while fetching Currencies');
	        }
        );    	
	};
    
}]);