app.controller('Division-Controller', ['$scope', 'UserService','$location','$cookies', function($scope, UserService, $location, $cookies) {
	var loggedInUserDetails = $cookies.getObject("loggedInUserDetails");
	var seasonId = $cookies.get('seasonId');
	$scope.registerDivision = function() {
		if($scope.division.name == null){
			$scope.error = "Please enter division name.";
		}
		UserService.registerDivision($scope.division, seasonId).then(
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
