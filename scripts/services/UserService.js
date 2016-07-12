app.factory('UserService', ['$http', '$q', function($http, $q){ 
    return {         
        getJson: function(username, password,passwordConf, email) {        	
        	params = {
        			'username': username,
        			'password': password,
        			'passwordConf': passwordConf,
        			'email': email,
        			'callback': 'JSON_CALLBACK'
			};
            return $http({
            	url: '/baseball-league-web/getJson',
            	method: 'JSONP',
            	params: params
			}).
            success(function(response) {
            	return response.data;
            }).
            error(function (response) {
            	var dd = JSON.stringify(response);
            	console.error('Error while fetching users');
                return $q.reject(dd);
            });
        },
        setLeague: function(leagueName, leagueLocation) {        	
        	params = {
        			'leagueName': leagueName,
        			'leagueLocation': leagueLocation,
        			'callback': 'JSON_CALLBACK'
			};
            return $http({
            	url: '/baseball-league-web/setLeague',
            	method: 'JSONP',
            	params: params
			}).
            success(function(response) {
            	return response.data;
            }).
            error(function (response) {
            	var dd = JSON.stringify(response);
            	console.error('Error while creating league');
                return $q.reject(dd);
            });
        },
        getLeague: function(){
        	params = {
        			'callback': 'JSON_CALLBACK'
			};
        	return $http({
             	url: '/baseball-league-web/getLeague',
             	method: 'JSONP',
             	params: params
 			}).
             success(function(response) {
             	return response;
             }).
             error(function (response) {
             	var dd = JSON.stringify(response);
             	console.error('Error while fetching leagues');
                 return $q.reject(dd);
             });
        },
        getSeasons: function(leagueId){
        	params = {
        			'leagueId': leagueId,
        			'callback': 'JSON_CALLBACK'
			};
        	return $http({
             	url: '/baseball-league-web/getSeasons',
             	method: 'JSONP',
             	params: params
 			}).
             success(function(response) {
             	return response;
             }).
             error(function (response) {
             	var dd = JSON.stringify(response);
             	console.error('Error while fetching leagues');
                 return $q.reject(dd);
             });
        },
        getDivisions: function(seasonId){
        	params = {
        			'seasonId': seasonId,
        			'callback': 'JSON_CALLBACK'
			};
        	return $http({
             	url: '/baseball-league-web/getDivisions',
             	method: 'JSONP',
             	params: params
 			}).
             success(function(response) {
             	return response;
             }).
             error(function (response) {
             	var dd = JSON.stringify(response);
             	console.error('Error while fetching leagues');
                 return $q.reject(dd);
             });
        },
        getUnassignedPlayers: function(){
        	params = {
        			'callback': 'JSON_CALLBACK'
			};
        	return $http({
             	url: '/baseball-league-web/getUnassignedPlayers',
             	method: 'JSONP',
             	params: params
 			}).
             success(function(response) {
             	return response;
             }).
             error(function (response) {
             	var dd = JSON.stringify(response);
             	console.error('Error while fetching UnassignedPlayers');
                 return $q.reject(dd);
             });
        },
        getAssignedPlayers: function(teamId){
        	params = {
        			'teamId': teamId,
        			'callback': 'JSON_CALLBACK'
			};
        	return $http({
             	url: '/baseball-league-web/getAssignedPlayers',
             	method: 'JSONP',
             	params: params
 			}).
             success(function(response) {
             	return response;
             }).
             error(function (response) {
             	var dd = JSON.stringify(response);
             	console.error('Error while fetching AnassignedPlayers');
                 return $q.reject(dd);
             });
        },
        modifyPlayers: function(teamId, assignedPlayers){
        	var playerList = angular.toJson(assignedPlayers);
        	params = {
        			'teamId':teamId,
        			'assignedPlayers': playerList,
        			'callback': 'JSON_CALLBACK'
			};
        	return $http({
             	url: '/baseball-league-web/modifyPlayers',
             	method: 'JSONP',
             	params: params
 			}).
             success(function(response) {
             	return response;
             }).
             error(function (response) {
             	var dd = JSON.stringify(response);
             	console.error('Error while saving modifyPlayers');
                 return $q.reject(dd);
             });
        }
    }; 
}]);
