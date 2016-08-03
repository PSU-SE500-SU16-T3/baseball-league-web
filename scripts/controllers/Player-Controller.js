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
    	var months = [ "Jan", "Feb", "Mar", "Apr", "May", "June",
    	               "July", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    	$scope.games = [];
    	UserService.getGames(loggedInUserDetails.body.player.personID).then(
    			function(d) {
    	        	$scope.games = [];
    	        	if(d === null || d.data.length === 0){
    	        		$scope.showerror=true;
    	        		$scope.showgames=false;
    	        		$scope.error = "No Games Scheduled Yet";
    	        		return
    	        	}
    	        	
    	        	angular.forEach(d.data,function(game,index){
    	        		var arr = game.gameTime.split("-");
    	        		var month = months[parseInt(arr[1])-1];
    	        		var gameday = arr[2]
    	        		$scope.games.push({id:game.GameID,gamedate:game.gameTime, gameMonth: month, gameDay: gameday, fieldname:game.fieldName});
    	            });
    	        }
    			);
    };
    $scope.getPersonInfo = function () {
    	
    	UserService.getPerson(loggedInUserDetails.body.player.personID).then(
	        function(d) {
	        	var response = d.data;
	            $scope.firstname= response.firstName;
	            $scope.username = response.username;
	            $scope.lastname= response.lastName;
	            $scope.email = response.email;
	            $scope.dob= response.dateOfBirth;
	            $scope.mobilephone=response.mobilephoneNum;
	            $scope.homephone=response.homephoneNum;
	        },
	        function(errResponse){
	        	console.error('Error while fetching Currencies');
	        }
        );    	
	};
    
}]);