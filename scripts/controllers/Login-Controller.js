app.controller('Login-Controller', ['$scope','$location', 'UserService', function($scope, $location, UserService) {
	  $scope.credentials = {};
	  
	  $scope.login = function() {
			if($scope.credentials.username === null || $scope.credentials.password ===null){
				$scope.error = "Please enter valid credentials.";
			}
			UserService.login($scope.credentials).then(
		        function(d) {
		        	$location.path(d.data.redirectTo);
		        }
	        );
	  };
	  $scope.register = function() {
		  $location.path("/register");
	  };
}]);