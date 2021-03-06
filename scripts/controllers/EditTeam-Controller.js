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
	$scope.updateTeam = function() {
		if($scope.teamname == null){
			$scope.error = "Please enter team name.";
		}
		UserService.updateTeam($scope.teamId,$scope.teamname,$scope.teamnoofplayers).then(
	        function(d) {
	        	if(d.data.status === "success"){
	        		$scope.success = d.data.body;
	        	} 
	        }
        );
	};
	$scope.draftPlayers = function() {
    	$location.path("/admin/draftplayers").search('teamId',$scope.teamId).search('teamName',$scope.teamname).search('teamNumPlayers',$scope.teamnoofplayers);
    };
	$scope.getTeams(); 
}]);
