app.controller('Register-Controller', ['$scope', 'UserService', function($scope, UserService) {
	$scope.person =true;
	$scope.info =false;
	$scope.payment=false;
	$scope.league =false;
	
	 $scope.addperson = function () {
	    	UserService.addperson($scope.username, $scope.password, $scope.firstname, $scope.lastname, $scope.middlename,
	    			$scope.email, $scope.dob, $scope.role).then(
		        function(d) {
		        	if($scope.role == "Referee"){
			        	$scope.person =false;
			        	$scope.info =true;
			        	$scope.payment=false;
			        	$scope.league =false;    
			        	$scope.infobutton ="Register";
		        	}
		        	else {
			        	$scope.person =false;
			        	$scope.info =true;
			        	$scope.payment=false;
			        	$scope.league =false;    
			        	$scope.infobutton ="Continue";
		        	}
		        },
		       function(errResponse){
		        	console.error('Error while fetching Currencies');
		        }
	        );    	
	 },
	 $scope.addaddress = function () {
	    	UserService.addaddress($scope.address, $scope.city, $scope.state, $scope.zip, $scope.homephone,
	    			$scope.mobilephone).then(
		        function(d) {
		        	if ($scope.role == "Player"){
		        		$scope.person =false;
		        		$scope.info =false;
		        		$scope.payment=true;
		        		$scope.league =false;
		        	} else if ($scope.role == "Manager"){
		        		$window.location.href = '/index.html';
		        	} else{
		        		$window.location.href = '/LeagueCreation.html';
		        	}
		        	var response = d.data;		            
		        },
		        function(errResponse){
		        	console.error('Error while fetching Currencies');
		        }
	        );    	
	 },
	 $scope.addpayment = function () {
	    	UserService.addpayment($scope.cardnumber, $scope.paymenttype, $scope.experation, $scope.cvc).then(
		        function(d) {
		        	$window.location.href = '/index.html';
		        	var response = d.data;		            
		        },
		        function(errResponse){
		        	console.error('Error while fetching Currencies');
		        }
	        );    	
	 }
}]);