app.factory('UserService', ['$http', '$q', function($http, $q){ 
    return {         
        getJson: function(username, password, email) {        	
        	params = {
        			'username': username,
        			'password': password,
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
        }/*,
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
             	return response.data;
             }).
             error(function (response) {
             	var dd = JSON.stringify(response);
             	console.error('Error while fetching leagues');
                 return $q.reject(dd);
             });
        }*/
    }; 
}]);

app.factory('UserService', ['$http', '$q', function($http, $q){ 
    return {         
        getJson: function(leagueName, leagueLocation) {        	
        	params = {
        			'leagueName': leagueName,
        			'leagueLocation': leagueLocation,
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
            	console.error('Error while creating league');
                return $q.reject(dd);
            });
        }         
    }; 
}]);

app.factory('UserService', ['$http', '$q', function($http, $q){ 
    return {         
        getJson: function(leagueName, leagueLocation) {        	
        	params = {
        			'leagueName': leagueName,
        			'leagueLocation': leagueLocation,
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
            	console.error('Error while creating league');
                return $q.reject(dd);
            });
        }         
    }; 
}]);
