app.controller('Register-Controller', ['$scope', 'UserService', function($scope, UserService) {
    $scope.submit = function(){
		for(var i = $scope.unassignedPlayers.length - 1; i >= 0; i--){
		    if($scope.unassignedPlayers[i].selected){
		    	$scope..push({id:$scope.unassignedPlayers[i].id,name:$scope.unassignedPlayers[i].name});
		        $scope.unassignedPlayers.splice(i,1);
		    }
		}
    }; 
}]);