var app = angular.module('myApp', []);

app.controller('myApp-Controller', ['$scope', 'UserService', function($scope, UserService) {
    $scope.myFunc = function () {
    	UserService.getJson($scope.username, $scope.password, $scope.email).then(
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