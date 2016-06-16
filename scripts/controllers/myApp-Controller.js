var app = angular.module('myApp', []);

app.controller('myApp-Controller', ['$scope', 'UserService', function($scope, UserService) {
    $scope.myFunc = function () {
    	UserService.getJson($scope.firstName, $scope.lastName, $scope.age).then(
	        function(d) {
	        	var response = d.data;
	            $scope.fullName = response.firstName + " " + response.lastName + " saved successfully";
	        },
	        function(errResponse){
	        	console.error('Error while fetching Currencies');
	        }
        );    	
	}
}]);