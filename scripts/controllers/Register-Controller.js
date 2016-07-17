app.controller('Register-Controller', ['$scope', 'UserService', function($scope, UserService) {
	 $scope.addperson = function () {
	    	UserService.addperson($scope.username, $scope.password, $scope.firstname, $scope.lastname, $scope.middlename,
	    			$scope.email, $scope.dob, $scope.role).then(
		        function(d) {
		        	var response = d.data;		            
		        },
		        function(errResponse){
		        	console.error('Error while fetching Currencies');
		        }
	        );    	
	 },
	 $scope.addaddress = function () {
	    	UserService.addperson($scope.address, $scope.city, $scope.state, $scope.zip, $scope.homephone,
	    			$scope.mobilephone).then(
		        function(d) {
		        	var response = d.data;		            
		        },
		        function(errResponse){
		        	console.error('Error while fetching Currencies');
		        }
	        );    	
	 },
	 $scope.addpayment = function () {
	    	UserService.addperson($scope.cardnumber, $scope.experation, $scope.cvc).then(
		        function(d) {
		        	var response = d.data;		            
		        },
		        function(errResponse){
		        	console.error('Error while fetching Currencies');
		        }
	        );    	
	 }
}]);