app.controller('Register-Controller', ['$scope', 'UserService', function($scope, UserService) {
	$scope.person =true;
	$scope.info =false;
	$scope.payment=false;
	$scope.league =false;
	
	 $scope.addperson = function () {
	    	UserService.addperson($scope.username, $scope.password, $scope.firstname, $scope.lastname, $scope.middlename,
	    			$scope.email, $scope.dob, $scope.role).then(
		        function(d) {
		        	$scope.person =false;
		        	$scope.info =true;
		        	$scope.payment=false;
		        	$scope.league =false;            
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
		        	$scope.person =false;
		        	$scope.info =false;
		        	$scope.payment=true;
		        	$scope.league =false;
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
		        	$scope.person =false;
		        	$scope.info =false;
		        	$scope.payment=false;
		        	$scope.league =true;
		        	var response = d.data;		            
		        },
		        function(errResponse){
		        	console.error('Error while fetching Currencies');
		        }
	        );    	
	 }
}]);