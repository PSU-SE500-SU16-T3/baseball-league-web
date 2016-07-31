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
	};
	$scope.getDivisionDetail = function() {
		if(!angular.isUndefined($location.search().divisionId)){
			UserService.getDivisionDetail($location.search().divisionId).then(
		        function(d) {
		        	$scope.divisions = [];
		        	if(d === null || d.data.length === 0){
		        		$scope.error = "Not able to find division details. Please try again later.";
		        		return
		        	}else{
		        		$scope.divisionId = d.data.divisionID;
		        		$scope.divisionname = d.data.divisionTitle;
		        		$scope.divisionminage = d.data.divisionMinAge;
		        		$scope.divisionmaxage = d.data.divisionMaxAge;
		        		$scope.divisionmaxnoofplayers = d.data.divisionNumPlayers;
		        	}
		        }
		    );
		}
	};
	$scope.updateDivision = function() {
		if($scope.divisionname == null){
			$scope.error = "Please enter division name.";
		}
		UserService.updateDivision($scope.divisionId,$scope.divisionname,$scope.divisionminage,$scope.divisionmaxage,$scope.divisionmaxnoofplayers).then(
	        function(d) {
	        	if(d.data.status === "success"){
	        		$scope.success = d.data.body;
	        	} 
	        }
        );
	};
	$scope.getDivisionDetail();
}]);
