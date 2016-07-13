app.controller('DraftPlayers-Controller', ['$scope', 'UserService', function($scope, UserService) {
    $scope.submit = function() {
    	UserService.AddPerson($scope.selectedTeam.id ,$scope.assignedPlayers).then(
	        function(d) {
	        	if(d.data === true)
	        		alert("Players added successfully.");
	        }
        );
    };
}]);