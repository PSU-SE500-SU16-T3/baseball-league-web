var app = angular.module('myApp', []);

app.controller('myApp-Controller', ['$scope', 'UserService', function($scope, UserService) {
    $scope.myFunc = function () {
    	UserService.getJson($scope.username, $scope.password,$scope.passwordConf $scope.email).then(
	        function(d) {
	        	var response = d.data;
	            $scope.fullName = response.username + " registered successfully";
	        },
	        function(errResponse){
	        	console.error('Error while fetching Currencies');
	        }
        );    	
	}
    $scope.addPlayers = function() {
		for(var i = $scope.unassignedPlayers.length - 1; i >= 0; i--){
		    if($scope.unassignedPlayers[i].selected){
		    	$scope.assignedPlayers.push({id:$scope.unassignedPlayers[i].id,name:$scope.unassignedPlayers[i].name});
		        $scope.unassignedPlayers.splice(i,1);
		    }
		}
    };
    $scope.removePlayers = function(index) {
    	for(var i = $scope.assignedPlayers.length - 1; i >= 0; i--){
		    if($scope.assignedPlayers[i].selected){
		    	$scope.unassignedPlayers.push({id:$scope.assignedPlayers[i].id,name:$scope.assignedPlayers[i].name});
		        $scope.assignedPlayers.splice(i,1);
		    }
		}
    };
    $scope.getSeason = function() {
    	$scope.seasons = [];
    	$scope.seasons.push({
    		id:'10000',name:'Summer',seasonstartdt:'',seasonenddt:'',seasonnumberofplayers:'18',leagueid:'10000'});
    };
    $scope.getDivision = function() {
    	$scope.divisions = [];
    	$scope.divisions.push({
    		id:'10000',name:'Pony',divisionminage:'10',divisionmaxage:'14',divisionnumberofplayers:'18',seasonid:'10000'});
    };
    $scope.getTeams = function() {
    	$scope.teams = [];
    	$scope.teams.push({id:'10000',name:'Team1',teamnumberofplayers:'10',divisionid:'10000',fieldid:''},
    					{id:'10001',name:'Team2',teamnumberofplayers:'10',divisionid:'10000',fieldid:''},
    					{id:'10002',name:'Team3',teamnumberofplayers:'10',divisionid:'10000',fieldid:''});
    };
    /*angular.element(document).ready(function () {
    	UserService.getJson().then(
	        function(d) {
	        	var response = d.data;
	            alert()
	        },
	        function(errResponse){
	        	console.error('Error while fetching Currencies');
	        }
        );
    });*/
    /*$scope.init = function (){
    	UserService.getLeague().then(
	        function(d) {
	        	var response = d.data;
	            $scope.fullName = response.username + " registered successfully";
	        },
	        function(errResponse){
	        	console.error('Error while fetching Currencies');
	        }
        );
    };*/
   /* $scope.$on('$viewContentLoaded', function() {
    	UserService.getLeague().then(
    	        function(d) {
    	        	var response = d.data;
    	            $scope.fullName = response.username + " registered successfully";
    	        },
    	        function(errResponse){
    	        	console.error('Error while fetching Currencies');
    	        }
            );
    });*/
}]);