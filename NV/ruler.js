/*
	javascript ruler for google maps V3

	by Giulio Pons. http://www.barattalo.it
	this function uses the label class from Marc Ridley Blog

	With minor adjustments by Bernhard Konrad

*/
function addruler(map) {

	var ruler1 = new google.maps.Marker({
		position: map.getCenter() ,
		map: map,
		draggable: true
	});

	var ruler2 = new google.maps.Marker({
		position: map.getCenter() ,
		map: map,
		draggable: true
	});
	var ruler1label = new Label({ map: map });
	var ruler2label = new Label({ map: map });
	ruler1label.bindTo('position', ruler1, 'position');
	ruler2label.bindTo('position', ruler2, 'position');

	var rulerpoly = new google.maps.Polyline({
		path: [ruler1.position, ruler2.position] ,
		strokeColor: "#FFFF00",
		strokeOpacity: .7,
		strokeWeight: 7
	});
	rulerpoly.setMap(map);

	ruler1label.set('text',distance( ruler1.getPosition().lat(), ruler1.getPosition().lng(), ruler2.getPosition().lat(), ruler2.getPosition().lng()));
	ruler2label.set('text',distance( ruler1.getPosition().lat(), ruler1.getPosition().lng(), ruler2.getPosition().lat(), ruler2.getPosition().lng()));


	google.maps.event.addListener(ruler1, 'drag', function() {
		rulerpoly.setPath([ruler1.getPosition(), ruler2.getPosition()]);
		ruler1label.set('text',distance( ruler1.getPosition().lat(), ruler1.getPosition().lng(), ruler2.getPosition().lat(), ruler2.getPosition().lng()));
		ruler2label.set('text',distance( ruler1.getPosition().lat(), ruler1.getPosition().lng(), ruler2.getPosition().lat(), ruler2.getPosition().lng()));
	});

	google.maps.event.addListener(ruler2, 'drag', function() {
		rulerpoly.setPath([ruler1.getPosition(), ruler2.getPosition()]);
		ruler1label.set('text',distance( ruler1.getPosition().lat(), ruler1.getPosition().lng(), ruler2.getPosition().lat(), ruler2.getPosition().lng()));
		ruler2label.set('text',distance( ruler1.getPosition().lat(), ruler1.getPosition().lng(), ruler2.getPosition().lat(), ruler2.getPosition().lng()));
	});

	google.maps.event.addListener(ruler1, 'dblclick', function() {
		ruler1.setMap(null);
		ruler2.setMap(null);
		ruler1label.setMap(null);
		ruler2label.setMap(null);
		rulerpoly.setMap(null);
	});

	google.maps.event.addListener(ruler2, 'dblclick', function() {
		ruler1.setMap(null);
		ruler2.setMap(null);
		ruler1label.setMap(null);
		ruler2label.setMap(null);
		rulerpoly.setMap(null);
	});

}


function distance(lat1,lon1,lat2,lon2) {
	var R = 6371; // km (change this constant to get miles)
	var dLat = (lat2-lat1) * Math.PI / 180;
	var dLon = (lon2-lon1) * Math.PI / 180;
	var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
		Math.cos(lat1 * Math.PI / 180 ) * Math.cos(lat2 * Math.PI / 180 ) *
		Math.sin(dLon/2) * Math.sin(dLon/2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	var d = R * c;
	return Math.round(d*1000)+"m";
//	if (d>1) return Math.round(d)+"km";
//	else if (d<=1) return Math.round(d*1000)+"m";
	return d;
}
