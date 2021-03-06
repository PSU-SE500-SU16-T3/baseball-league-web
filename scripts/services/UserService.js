app.factory('UserService', ['$http', '$q', '$cookies', function($http, $q, $cookies){ 
	var loggedInUserDetails = {};
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
             	console.error('Error while fetching divisions');
                 return $q.reject(dd);
             });
        },
        getTeams: function(divisionId, retrieveBy){
        	params = {
        			'retrieveId': divisionId,
        			'retrieveBy': retrieveBy,
        			'callback': 'JSON_CALLBACK'
			};
        	return $http({
             	url: '/baseball-league-web/getTeams',
             	method: 'JSONP',
             	params: params
 			}).
             success(function(response) {
             	return response;
             }).
             error(function (response) {
             	var dd = JSON.stringify(response);
             	console.error('Error while fetching teams');
                 return $q.reject(dd);
             });
        },
        getGames: function(PersonID){
        	params = {
        			'personID': PersonID,
        			'callback': 'JSON_CALLBACK'
			};
        	return $http({
             	url: '/baseball-league-web/getGames',
             	method: 'JSONP',
             	params: params
 			}).
             success(function(response) {
             	return response;
             }).
             error(function (response) {
             	var dd = JSON.stringify(response);
             	console.error('Error while fetching games');
                 return $q.reject(dd);
             });
        },
        getFields: function(leagueID){
        	params = {
        			'leagueID': leagueID,
        			'callback': 'JSON_CALLBACK'
			};
        	return $http({
             	url: '/baseball-league-web/getFields',
             	method: 'JSONP',
             	params: params
 			}).
             success(function(response) {
             	return response;
             }).
             error(function (response) {
             	var dd = JSON.stringify(response);
             	console.error('Error while fetching Fields');
                 return $q.reject(dd);
             });
        },
        getRefs: function(leagueID){
        	params = {
        			'leagueID': leagueID,
        			'callback': 'JSON_CALLBACK'
			};
        	return $http({
             	url: '/baseball-league-web/getRefs',
             	method: 'JSONP',
             	params: params
 			}).
             success(function(response) {
             	return response;
             }).
             error(function (response) {
             	var dd = JSON.stringify(response);
             	console.error('Error while fetching Refs');
                 return $q.reject(dd);
             });
        },
        getUnassignedPlayers: function(leagueId){ 
        	params = {
        			'leagueId': leagueId,
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
        },
        addperson: function(username, password, firstname, lastname, middlename, email, dob, role) {        	
        	params = {
        			'username': username,
        			'password': password,
        			'email': email,
        			'firstname':firstname,
        			'lastname':lastname,
        			'middlename':middlename,
        			'dob':dob,
        			'role':role,
        			'callback': 'JSON_CALLBACK'
			};
            return $http({
            	url: '/baseball-league-web/addperson',
            	method: 'JSONP',
            	params: params
			}).
            success(function(response) {
            	return response;
            }).
            error(function (response) {
            	var dd = JSON.stringify(response);
            	console.error('Error adding Person');
                return $q.reject(dd);
             });
        },
        addaddress: function(address, city, state, zip, homephone, mobilephone) {        	
        	params = {
        			'address': address,
        			'city': city,
        			'state': state,
        			'zip':zip,
        			'homephone':homephone,
        			'mobilephone':mobilephone,
        			'callback': 'JSON_CALLBACK'
			};
            return $http({
            	url: '/baseball-league-web/addaddress',
            	method: 'JSONP',
            	params: params
			}).
            success(function(response) {
            	return response;
            }).
            error(function (response) {
            	var dd = JSON.stringify(response);
            	console.error('Error while adding Info');
                return $q.reject(dd);
             });
        },
        addpayment: function(cardnumber, paymenttype, experation, cvc) {        	
        	params = {
        			'cardnumber': cardnumber,
        			'experation': experation,
        			'cvc': cvc,
        			'paymenttype':paymenttype,
        			'callback': 'JSON_CALLBACK'
			};
            return $http({
            	url: '/baseball-league-web/addpayment',
            	method: 'JSONP',
            	params: params
			}).
            success(function(response) {
            	return response;
            }).
            error(function (response) {
            	var dd = JSON.stringify(response);
            	console.error('Error while adding Info');
                return $q.reject(dd);
             });
        },
        login: function(credentials){
        	var authdata = btoa(credentials.username + ':' + credentials.password);
        	params = {
        			'authdata':authdata,
        			'callback': 'JSON_CALLBACK'
			};
        	return $http({
             	url: '/baseball-league-web/login',
             	method: 'JSONP',
             	params: params
 			}).
 			success(function(response) {
 				$cookies.putObject("loggedInUserDetails", response);
 				loggedInUserDetails = response;
 				return response;
 			}).
 			error(function (response) {
 				var dd = JSON.stringify(response);
 				console.error('Error while saving modifyPlayers');
 				return $q.reject(dd);
 			});
        },
        getLoggedInUserDetails: function(){
        	return loggedInUserDetails;
        },
        registerSeason: function(season, leagueId){
        	params = {
        			'seasonName':season.name,
        			'seasonStartDate':season.startdt,
        			'seasonEndDate':season.enddt,
        			'leagueId':leagueId,
        			'callback': 'JSON_CALLBACK'
			};
        	return $http({
             	url: '/baseball-league-web/registerSeason',
             	method: 'JSONP',
             	params: params
 			}).
 			success(function(response) {
 				return response;
 			}).
 			error(function (response) {
 				var dd = JSON.stringify(response);
 				console.error('Error while registering new season. Please try again later.');
 				return $q.reject(dd);
 			});
        },
        registerDivision: function(division, seasonId){
        	params = {
        			'divisionName':division.name,
        			'minAge':division.minage,
        			'maxAge':division.maxage,
        			'maxNoOfPlayers':division.maxnoofplayers,
        			'seasonId':seasonId,
        			'callback': 'JSON_CALLBACK'
			};
        	return $http({
             	url: '/baseball-league-web/registerDivision',
             	method: 'JSONP',
             	params: params
 			}).
 			success(function(response) {
 				return response;
 			}).
 			error(function (response) {
 				var dd = JSON.stringify(response);
 				console.error('Error while registering new division. Please try again later.');
 				return $q.reject(dd);
 			});
        },
        registerTeam: function(team, divisionId){
        	params = {
        			'teamName':team.name,
        			'noOfPlayers':team.noofplayers,
        			'divisionId':divisionId,
        			'callback': 'JSON_CALLBACK'
			};
        	return $http({
             	url: '/baseball-league-web/registerTeam',
             	method: 'JSONP',
             	params: params
 			}).
 			success(function(response) {
 				return response;
 			}).
 			error(function (response) {
 				var dd = JSON.stringify(response);
 				console.error('Error while registering new team. Please try again later.');
 				return $q.reject(dd);
 			});
        },
        getSeasonDetail: function(seasonId){
        	params = {
        			'seasonId': seasonId,
        			'callback': 'JSON_CALLBACK'
			};
        	return $http({
             	url: '/baseball-league-web/getSeasonDetail',
             	method: 'JSONP',
             	params: params
 			}).
             success(function(response) {
             	return response;
             }).
             error(function (response) {
             	var dd = JSON.stringify(response);
             	console.error('Error while fetching season detail');
                 return $q.reject(dd);
             });
        },
        getDivisionDetail: function(divisionId){
        	params = {
        			'divisionId': divisionId,
        			'callback': 'JSON_CALLBACK'
			};
        	return $http({
             	url: '/baseball-league-web/getDivisionDetail',
             	method: 'JSONP',
             	params: params
 			}).
             success(function(response) {
             	return response;
             }).
             error(function (response) {
             	var dd = JSON.stringify(response);
             	console.error('Error while fetching division detail');
                 return $q.reject(dd);
             });
        },
        updateSeason: function(seasonId, seasonname, seasonstartdt, seasonenddt){
        	params = {
        			'seasonName':seasonname,
        			'seasonStartDate':seasonstartdt,
        			'seasonEndDate':seasonenddt,
        			'seasonId':seasonId,
        			'callback': 'JSON_CALLBACK'
			};
        	return $http({
             	url: '/baseball-league-web/updateSeason',
             	method: 'JSONP',
             	params: params
 			}).
 			success(function(response) {
 				return response;
 			}).
 			error(function (response) {
 				var dd = JSON.stringify(response);
 				console.error('Error while updating season. Please try again later.');
 				return $q.reject(dd);
 			});
        },
        updateDivision: function(divisionID, divisionname, divisionminage, divisionmaxage, divisionmaxnoofplayers){
        	params = {
        			'divisionID':divisionID,
        			'divisionName':divisionname,
        			'minAge':divisionminage,
        			'maxAge':divisionmaxage,
        			'maxNoOfPlayers':divisionmaxnoofplayers,
        			'callback': 'JSON_CALLBACK'
			};
        	return $http({
             	url: '/baseball-league-web/updateDivision',
             	method: 'JSONP',
             	params: params
 			}).
 			success(function(response) {
 				return response;
 			}).
 			error(function (response) {
 				var dd = JSON.stringify(response);
 				console.error('Error while updating division. Please try again later.');
 				return $q.reject(dd);
 			});
        },
        updateTeam: function(teamId, teamname, teamnoofplayers){
        	params = {
        			'teamId':teamId,
        			'teamName':teamname,
        			'noOfPlayers':teamnoofplayers,
        			'callback': 'JSON_CALLBACK'
			};
        	return $http({
             	url: '/baseball-league-web/updateTeam',
             	method: 'JSONP',
             	params: params
 			}).
 			success(function(response) {
 				return response;
 			}).
 			error(function (response) {
 				var dd = JSON.stringify(response);
 				console.error('Error while updating team. Please try again later.');
 				return $q.reject(dd);
 			});
        },
        postMessage: function(message, service){
        	params = {
        			'message': message,
        			'service': service,
        			'callback': 'JSON_CALLBACK'
			};
        	return $http({
             	url: '/baseball-league-web/postmessage',
             	method: 'JSONP',
             	params: params
 			}).
             success(function(response) {
             	return response;
             }).
             error(function (response) {
             	var dd = JSON.stringify(response);
             	console.error('Error while posting message');
                 return $q.reject(dd);
             });
        },
        EmailMessage: function(message, emails, service){
        	params = {
        			'message': message,
        			'emails':emails,
        			'service': service,
        			'callback': 'JSON_CALLBACK'
			};
        	return $http({
             	url: '/baseball-league-web/postmessage',
             	method: 'JSONP',
             	params: params
 			}).
             success(function(response) {
             	return response;
             }).
             error(function (response) {
             	var dd = JSON.stringify(response);
             	console.error('Error while emailing message');
                 return $q.reject(dd);
             });
        },
        postGame: function(fieldID, RefID, Team1ID, Team2ID, gamedate){
        	params = {
        			'fieldID': fieldID,
        			'team1':Team1ID,
        			'team2':Team2ID,
        			'gamedate':gamedate,
        			'refID': RefID,
        			'callback': 'JSON_CALLBACK'
			};
        	return $http({
             	url: '/baseball-league-web/postgame',
             	method: 'JSONP',
             	params: params
 			}).
             success(function(response) {
             	return response;
             }).
             error(function (response) {
             	var dd = JSON.stringify(response);
             	console.error('Error while posting Game');
                 return $q.reject(dd);
             });
        },
        getPerson: function(personID){
        	params = {
        			'personID': personID,
        			'callback': 'JSON_CALLBACK'
			};
        	return $http({
             	url: '/baseball-league-web/getPersonInfo',
             	method: 'JSONP',
             	params: params
 			}).
             success(function(response) {
             	return response;
             }).
             error(function (response) {
            	 
             	var dd = JSON.stringify(response);
             	console.error('Error Getting User Info');
                 return $q.reject(dd);
             });
        },
        submitLeague: function(leagueLocation) {        	
        	params = {
        			'leagueLocation': leagueLocation,
        			'callback': 'JSON_CALLBACK'
			};
            return $http({
            	url: '/baseball-league-web/submitLeague',
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
        submitleagueByName: function(leaguename) {        	
        	params = {
        			'leaguename': leaguename,
        			'callback': 'JSON_CALLBACK'
			};
            return $http({
            	url: '/baseball-league-web/submitleagueByName',
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
        }
    }; 
}]);
