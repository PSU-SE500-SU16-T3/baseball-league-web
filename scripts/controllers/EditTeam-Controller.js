app.controller('EditTeam-Controller', ['$scope', 'UserService','$location','$cookies', function($scope, UserService, $location, $cookies) {
	$scope.getTeams = function() {
		if(!angular.isUndefined($location.search().teamId)){			
			UserService.getTeams($location.search().teamId, "team").then(
		        function(d) {
		        	$scope.teams = [];
		        	if(d === null || d.data.length === 0){
		        		$scope.error = "Not able to find team details. Please try again later.";
		        		return
		        	}else{
		        		angular.forEach(d.data,function(team,index){
		        			$scope.teamId = team.teamID;
			        		$scope.teamname = team.teamTitle;
			        		$scope.teamnoofplayers = team.teamNumPlayers;
		        		});
		        		
		        	}
		        }
		    );
		}
	};
	$scope.getTeams();
}]);
