app.factory('UserService', ['$http', '$q', function($http, $q){ 
    return {         
        getJson: function(firstName, lastName, age) {        	
        	params = {
        			'firstName': firstName,
        			'lastName': lastName,
        			'age': age,
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
        }         
    }; 
}]);
