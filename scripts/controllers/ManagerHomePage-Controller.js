
app.controller('ManagerHomePage-Controller',['$scope', 'UserService', '$cookies','$location','$uibModal', '$log',
                                             function($scope, UserService, $cookies, $location,$uibModal, $log) {
	var loggedInUserDetails = $cookies.getObject("loggedInUserDetails");
	$scope.seasons = [];
	$scope.divisions = [];
	$scope.teams = [];

	$scope.getSeasons = function() {
    	$scope.seasons = [];
    	UserService.getSeasons(loggedInUserDetails.body.leagueId).then(
	        function(d) {
	        	$scope.seasons = [];
	        	if(d === null || d.data.length === 0){
	        		$scope.error = "Season not created, please create a new season.";
	        		return;
	        	}else{
	        		$scope.error = "";
	        	}
	        	angular.forEach(d.data,function(season,index){
	        		$scope.seasons.push({id:season.seasonID,name:season.seasonName});
	             });
	        }
        );
    	
    	/*if(!angular.isUndefined($location.search().seasonId)){
    		$scope.selectedSeason.id = $location.search().seasonId;
    	}*/
    };
    $scope.getDivisions = function() {
    	$scope.divisions = [];
    	UserService.getDivisions($scope.selectedSeason.id).then(
	        function(d) {
	        	$scope.divisions = [];
	        	if(d === null || d.data.length === 0){
	        		$scope.error = "Division not created, please create a new division.";
	        		return
	        	}
	        	angular.forEach(d.data,function(division,index){
	        		$scope.divisions.push({id:division.divisionID,name:division.divisionTitle,divisionminage:division.divisionMinAge,divisionmaxage:division.divisionMaxAge,divisionnumberofplayers:division.divisionNumPlayers});
	             });
	        }
        );
    };
    $scope.getTeams = function() {
    	$scope.teams = [];
    	var divisionId = $scope.selectedDivision.id;
    	UserService.getTeams(divisionId, "division").then(
	        function(d) {
	        	$scope.teams = [];
	        	if(d === null || d.data.length === 0){
	        		$scope.error = "Team not created, please create a new team.";
	        		return
	        	}
	        	angular.forEach(d.data,function(team,index){
	        		$scope.teams.push({id:team.teamID,name:team.teamTitle,teamNumPlayers:team.teamNumPlayers,divisionid:divisionId,fieldid:team.fieldID});
	            });
	        }
        );
    };
    
    $scope.getFields = function() {
    	$scope.fields = [];
    	UserService.getFields(loggedInUserDetails.body.leagueId).then(
	        function(d) {
	        	$scope.fields = [];

	        	if(d === null || d.data.length === 0){
	        		$scope.error = "Issue Fetching Fields";
	        		return
	        	}
	        	angular.forEach(d.data,function(field,index){
	        		$scope.fields.push({id:field.fieldID,name:field.fieldName,location:field.fieldLocation});
	            });
	        }
        );
    };
    
    $scope.getRefs = function() {
    	$scope.refs = [];
    	UserService.getRefs(loggedInUserDetails.body.leagueId).then(
	        function(d) {
	        	$scope.refs = [];
	        	if(d === null || d.data.length === 0){
	        		$scope.error = "Issue Fetching Referees";
	        		return
	        	}
	        	angular.forEach(d.data,function(ref,index){
	        		$scope.refs.push({id:ref.refereePlayerID,name:ref.firstName});
	            });
	        }
        );
    };
    
    $scope.createNewSeason = function() {
		$location.path("/admin/createnewseason");
    };
    $scope.editSeason = function() {    	
		$location.path("/admin/editseason").search('seasonId',$scope.selectedSeason.id);
    };
    $scope.editDivision = function() {    	
		$location.path("/admin/editdivision").search('divisionId',$scope.selectedDivision.id);
    };
    $scope.editTeam = function() {    
    	if(angular.isUndefined($scope.selectedDivision)){
    		$scope.error = "Please select division to proceed.";
    		return;
    	}
		$location.path("/admin/editteam").search('teamId',$scope.selectedTeam.id);
    };
    $scope.createNewDivision = function() {
    	if(angular.isUndefined($scope.selectedSeason)){
    		$scope.error = "Please select season to proceed.";
    		return;
    	}
    	$cookies.put('seasonId', $scope.selectedSeason.id);
		$location.path("/admin/createnewdivision");
    }; 
    $scope.createNewTeam = function() {
    	if(angular.isUndefined($scope.selectedSeason)){
    		$scope.error = "Please select season to proceed.";
    		return;
    	}
    	if(angular.isUndefined($scope.selectedDivision)){
    		$scope.error = "Please select division to proceed.";
    		return;
    	}
    	$cookies.put('seasonId', $scope.selectedSeason.id);
    	$cookies.put('divisionId', $scope.selectedDivision.id);
		$location.path("/admin/createnewteam");
    }; 
    
    $scope.getSeasons();
    $scope.GameSchedule = function(){
    	var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'Game.html',
            controller:'ModalGame-Controller' ,
          	resolve: {
          	    data: function () {
          	      return $scope; // deep copy
          	    }
          	  }
            
          });

          modalInstance.result.then(function () {
          }, function () {
            $log.info('Modal dismissed at: ' + new Date());
          });
    };
    $scope.open = function (service) {
    	var serv=service;
        var modalInstance = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'Social.html',
          controller: function ($scope, $uibModalInstance) {
        	  $scope.ok = function () {
        		  UserService.postMessage($scope.message, serv).then(
        				  function(d) {
        					  $log.info($scope.message, serv)
        					  $uibModalInstance.close();
        					  }
      		        ,
      		       function(errResponse){
      		        	$uibModalInstance.close();
      		        	console.error('Error while Posting Message');
      		        }
      	        );    	
        	    
        	  };

        	  $scope.cancel = function () {
        	    $uibModalInstance.dismiss('cancel');
        	  }},
          
          resolve: {
            
          }
        });

        modalInstance.result.then(function () {
        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });
      };
    
      $scope.openemail = function (service) {
      	var serv=service;
          var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'Contact.html',
            controller: function ($scope, $uibModalInstance) {
          	  $scope.ok = function () {
          		  UserService.EmailMessage($scope.message, $scope.emails, serv).then(
          				  function(d) {
          					  $log.info($scope.message, $scope.emails, serv)
          					  $uibModalInstance.close();
          					  }
        		        ,
        		       function(errResponse){
        		        	$uibModalInstance.close();
        		        	console.error('Error while Posting Message');
        		        }
        	        );    	
          	    
          	  };

          	  $scope.cancel = function () {
          	    $uibModalInstance.dismiss('cancel');
          	  }},
            
            resolve: {
              
            }
          });

          modalInstance.result.then(function () {
          }, function () {
            $log.info('Modal dismissed at: ' + new Date());
          });
        };
}]);
app.controller('ModalGame-Controller',['$scope', 'UserService', '$cookies','$location','$uibModalInstance', '$log',
                                             function($scope, UserService, $cookies, $location,$uibModalInstance, $log) {
	var loggedInUserDetails = $cookies.getObject("loggedInUserDetails");
	$scope.seasons = [];
	$scope.divisions = [];
	$scope.teams = [];
	$scope.selectedField={};
	$scope.selectedRef={};
	$scope.selectedTeam1={};
	$scope.selectedTeam2={};
	$scope.getSeasons = function() {
    	$scope.seasons = [];
    	UserService.getSeasons(loggedInUserDetails.body.leagueId).then(
	        function(d) {
	        	$scope.seasons = [];
	        	if(d === null || d.data.length === 0){
	        		$scope.error = "Season not created, please create a new season.";
	        		return;
	        	}else{
	        		$scope.error = "";
	        	}
	        	angular.forEach(d.data,function(season,index){
	        		$scope.seasons.push({id:season.seasonID,name:season.seasonName});
	             });
	        }
        );
    	
    	/*if(!angular.isUndefined($location.search().seasonId)){
    		$scope.selectedSeason.id = $location.search().seasonId;
    	}*/
    };
    $scope.init = function () {
    	$scope.getSeasons();
    };
    $scope.init();
    $scope.getDivisions = function() {
    	$scope.divisions = [];
    	UserService.getDivisions($scope.selectedSeason.id).then(
	        function(d) {
	        	$scope.divisions = [];
	        	if(d === null || d.data.length === 0){
	        		$scope.error = "Division not created, please create a new division.";
	        		return
	        	}
	        	angular.forEach(d.data,function(division,index){
	        		$scope.divisions.push({id:division.divisionID,name:division.divisionTitle,divisionminage:division.divisionMinAge,divisionmaxage:division.divisionMaxAge,divisionnumberofplayers:division.divisionNumPlayers});
	             });
	        }
        );
    };
    $scope.getTeams = function() {
    	$scope.teams = [];
    	var divisionId = $scope.selectedDivision.id;
    	UserService.getTeams(divisionId, "division").then(
	        function(d) {
	        	$scope.teams = [];
	        	if(d === null || d.data.length === 0){
	        		$scope.error = "Team not created, please create a new team.";
	        		return
	        	}
	        	angular.forEach(d.data,function(team,index){
	        		$scope.teams.push({id:team.teamID,name:team.teamTitle,teamNumPlayers:team.teamNumPlayers,divisionid:divisionId,fieldid:team.fieldID});
	            });
	        }
        );
    };
    
    $scope.getFields = function() {
    	$scope.fields = [];
    	UserService.getFields(loggedInUserDetails.body.leagueId).then(
	        function(d) {
	        	$scope.fields = [];

	        	if(d === null || d.data.length === 0){
	        		$scope.error = "Issue Fetching Fields";
	        		return
	        	}
	        	angular.forEach(d.data,function(field,index){
	        		$scope.fields.push({id:field.fieldID,name:field.fieldName,location:field.fieldLocation});
	            });
	        }
        );
    };
    
    $scope.getRefs = function() {
    	$scope.refs = [];
    	UserService.getRefs(loggedInUserDetails.body.leagueId).then(
	        function(d) {
	        	$scope.refs = [];
	        	if(d === null || d.data.length === 0){
	        		$scope.error = "Issue Fetching Referees";
	        		return
	        	}
	        	angular.forEach(d.data,function(ref,index){
	        		$scope.refs.push({id:ref.refereePlayerID,name:ref.firstName});
	            });
	        }
        );
    };
	  $scope.Game_ok = function () {
		  UserService.postGame($scope.selectedField.id, $scope.selectedRef.id,$scope.selectedTeam1.id,$scope.selectedTeam2.id,$scope.gamedate ).then(
				  function(d) {
					  $uibModalInstance.close();
					  }
		        ,
		       function(errResponse){
		        	$uibModalInstance.close();
		        	console.error('Error while Adding Game');
		        }
	        );    	
	    
	  };

	  $scope.Game_cancel = function () {
	    $uibModalInstance.dismiss('cancel');
	  }}]);

