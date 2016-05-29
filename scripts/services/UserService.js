app.factory('UserService', ['$http', '$q', function($http, $q){ 
    return {         
        getJson: function(firstName, lastName, age) {
            return $http.jsonp("http://localhost:8080/baseball-league/team3/getJson?callback=JSON_CALLBACK&firstName="+firstName+"&lastName="+lastName+"&age="+age).
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
