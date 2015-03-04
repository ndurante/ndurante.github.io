
  var map,marker,infowindow;  
  var locationCoordinates;
  
  infowindow = new google.maps.InfoWindow({
      content: "<div id='content'><b>" + locationFriendlyName + "</b></div>" //locationFriendlyName is a global variable that must be set in the html prior to initialize() being called
  });
  
  function geocodeAddress(address) {
	var geocoder = new google.maps.Geocoder();		
	
	geocoder.geocode({ 'address': address }, function(results,status) {
		if(status == google.maps.GeocoderStatus.OK) {
			locationCoordinates = results[0].geometry.location;
			map.setCenter(locationCoordinates);
			marker = new google.maps.Marker({
				map: map,
				position: results[0].geometry.location,
				animation: google.maps.Animation.DROP,
				title: results[0].formatted_address
			});
			
			infowindow.open(map,marker); 
			google.maps.event.addListener(marker, 'click', function() { infowindow.open(map,marker); });
		} else {
			console.log("status: " + status);
		}
	});	
  }
  
  function initialize() {	
	var mapOptions = {
		center: new google.maps.LatLng(0,0),
		zoom: 15,
		disableDefaultUI: true,
		zoomControl: true,		
		streetViewControl: true
	};
	map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
		
	geocodeAddress(locationAddress);	//locationAddress is a global variable that must be set in the html prior to initialize() being called - kind of hacky for now...	
  }
  
  
  google.maps.event.addDomListener(window, 'load', initialize);
  google.maps.event.addDomListener(window, 'resize', function(){ map.setCenter(locationCoordinates); });