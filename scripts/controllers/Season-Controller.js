app.controller('Season-Controller', ['$scope', 'UserService','$location','$cookies', function($scope, UserService, $location, $cookies) {
	var loggedInUserDetails = $cookies.getObject("loggedInUserDetails");
	$scope.registerSeason = function() {
		if($scope.season.name == null){
			$scope.error = "Please enter season name.";
		}
		if($scope.season.startdt > $scope.season.enddt){
			$scope.error = "Season start date cannot be greater than season end date. Please enter valid date.";
		}
		UserService.registerSeason($scope.season, loggedInUserDetails.body.leagueId).then(
	        function(d) {
	        	if(d.data.status === "success"){
	        		$scope.success = d.data.body;
	        	} 
	        }
        );
	}
	
	$scope.takeMeTo = function(url){		
		$location.path(url);
	}
}]);