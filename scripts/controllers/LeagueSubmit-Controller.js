app.controller('LeagueSubmit-Controller', ['$scope', 'UserService', '$window', '$location', function($scope, UserService, $window, $location) {
	var map;
	var mycenter = new google.maps.LatLng(40.7982173, -77.8620971);
	var mapProp = {
			center: mycenter,
			zoom: 13,
			mapTypeId: google.maps.MapTypeId.ROADMAP};
	var request;
	var service;
	var placeInfo;
	var geocoder;
	var markers = [];
	
	var placename;
	var confirmOK;
	
	$scope.initialize = function () {
		map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
		request = {
			location: mycenter,
			radius: 8047,
			types: ['park']
			};
		geocoder = new google.maps.Geocoder();
		placeInfo = new google.maps.InfoWindow();
	    service = new google.maps.places.PlacesService(map);
		service.nearbySearch(request, $scope.callback);
		
		google.maps.event.addListener(map,'rightclick',function(event){
			map.setCenter(event.latLng)
			$scope.clearResults(markers)
			var request = {
					location: event.latLng,
					radius: 8047,
					types: ['park']
					};
			service.nearbySearch(request, $scope.callback());
			})
	};
	
	$scope.callback = function (results, status) {
		
		if(status == google.maps.places.PlacesServiceStatus.OK)
		{
			for(var i = 0; i < results.length; i++)
			{
				!$scope.createMarker(results[i]);
				markers.push($scope.createMarker(results[i]));
			}
		}
	};
	
	$scope.createMarker = function (place) {
		var placeLoc = place.geometry.location;
		var marker = new google.maps.Marker(
			{
				map: map,
				position: place.geometry.location
			});
		
		google.maps.event.addListener(marker,'click',function(){
			placeInfo.setContent(place.name);
			placeInfo.open(map,this);
			placename = placeInfo.getContent(place.name);
			
		});	
		return marker;
	};
	
	$scope.clearResults = function (markers) {
		for (var m in markers)
		{
			markers[m].setMap(null)
		}
		markers = []
	};
	
	$scope.codeAddress = function () {
		var address = document.getElementById('address').value;
		geocoder.geocode({'address': address}, function(results,status) 
		{
			if(status == google.maps.GeocoderStatus.OK)
			{
				map.setCenter(results[0].geometry.location);
				var marker = new google.maps.Marker({
					map: map,
					position: results[0].geometry.location});
					$scope.clearResults(markers)
				var request = {
						location: results[0].geometry.location,
						radius: 8047,
						types: ['park']
						};
				service.nearbySearch(request, $scope.callback);
			}
			else
			{
				alert('Geocode was not successful for the following reason: ' + status);
			}
		});
	};
	
    $scope.leagueLocation = $window.placename;
    $scope.currentState = 'Select';
    $scope.leagues = UserService.getLeague().then(
	        function(d) {
	        	$scope.leagues = [];
	        	angular.forEach(d.data,function(league,index){
	        		$scope.leagues.push({id:league.leagueID,name:league.leagueName});
	             });
	        });
	$scope.submitleague = function () {
    	UserService.submitLeague(placename).then(
	        function(d) {
	        	var response = d.data;
	        	$location.path("/");
	            $scope.confirmation = " You successfully registered to" + response.leagueName;
	        },
	        function(errResponse){
	        	console.error('Error while registering for league');
	        }
        );
	};
	$scope.submitleagueByName = function () {
    	UserService.submitleagueByName($scope.currentState.name).then(
	        function(d) {
	        	var response = d.data;
	        	$location.path("/");
	            $scope.confirmation2 = " You successfully registered to" + response.leagueName;
	        },
	        function(errResponse){
	        	console.error('Error while registering for league');
	        }
        );
	};
	$scope.initialize();
}]);