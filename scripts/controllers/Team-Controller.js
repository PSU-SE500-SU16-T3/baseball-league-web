app.controller('Team-Controller', ['$scope', 'UserService','$location','$cookies', function($scope, UserService, $location, $cookies) {
	$scope.showDraftPlayers = false;
	$scope.hideDraftPlayers = true;
	var loggedInUserDetails = $cookies.getObject("loggedInUserDetails");
	var divisionId = $cookies.get('divisionId');
	$scope.registerTeam = function() {
		if($scope.team.name == null){
			$scope.error = "Please enter team name.";
		}
		UserService.registerTeam($scope.team, divisionId).then(
	        function(d) {
	        	if(d.data.status === "success"){
	        		$scope.showDraftPlayers = true;
	        		$scope.hideDraftPlayers = false;
	        		$scope.success = d.data.body;	        		
	        	} 
	        }
        );
	};
	$scope.draftPlayers = function() {
		$location.path("/admin/draftplayers");
	};
	$scope.takeMeTo = function(url){
		$location.path(url);
	}
}]);
