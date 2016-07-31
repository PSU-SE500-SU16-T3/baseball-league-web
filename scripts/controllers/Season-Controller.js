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
	};
	$scope.getSeasonDetail = function() {
		if(!angular.isUndefined($location.search().seasonId)){
			UserService.getSeasonDetail($location.search().seasonId).then(
		        function(d) {
		        	$scope.teams = [];
		        	if(d === null || d.data.length === 0){
		        		$scope.error = "Not able to find season details. Please try again later.";
		        		return
		        	}else{
		        		$scope.seasonId = d.data.seasonID;
		        		$scope.seasonname = d.data.seasonName;
		        		$scope.seasonstartdt = new Date(d.data.startDate);
		        		$scope.seasonenddt = new Date(d.data.endDate);
		        	}
		        }
		    );
		}
	};
	$scope.updateSeason = function() {
		if($scope.seasonname == null){
			$scope.error = "Please enter season name.";
		}
		if($scope.seasonstartdt > $scope.seasonenddt){
			$scope.error = "Season start date cannot be greater than season end date. Please enter valid date.";
		}
		UserService.updateSeason($scope.seasonId,$scope.seasonname,$scope.seasonstartdt,$scope.seasonenddt).then(
	        function(d) {
	        	if(d.data.status === "success"){
	        		$scope.success = d.data.body;
	        	} 
	        }
        );
	};
	
	$scope.getSeasonDetail();
	
}]);