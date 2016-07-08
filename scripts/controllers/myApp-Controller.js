app.controller('myApp-Controller', ['$scope', 'UserService','$http', '$q', function($scope, UserService) {
    $scope.myFunc = function () {
    	UserService.getJson($scope.username, $scope.password,$scope.passwordConf,$scope.email).then(
	        function(d) {
	        	var response = d.data;
	            $scope.fullName = response.username + " registered successfully";
	        },
	        function(errResponse){
	        	console.error('Error while fetching Currencies');
	        }
        );    	
	}
}]);