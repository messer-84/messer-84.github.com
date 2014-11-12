/**
 * map
 */
var mapOpts = {
	mapTypeId: google.maps.MapTypeId.ROADMAP,
	scaleControl: true,
	scrollwheel: false,
	styles: [{featureType: 'water', stylers: [{color: '#46bcec'}, {visibility: 'on'}]}, {
		featureType: 'landscape',
		stylers: [{color: '#f2f2f2'}]
	}, {featureType: 'road', stylers: [{saturation: -100}, {lightness: 45}]}, {
		featureType: 'road.highway',
		stylers: [{visibility: 'simplified'}]
	}, {
		featureType: 'road.arterial',
		elementType: 'labels.icon',
		stylers: [{visibility: 'off'}]
	}, {
		featureType: 'administrative',
		elementType: 'labels.text.fill',
		stylers: [{color: '#444444'}]
	}, {featureType: 'transit', stylers: [{visibility: 'off'}]}, {
		featureType: 'poi',
		stylers: [{visibility: 'off'}]
	}]
};
var map = new google.maps.Map(document.getElementById("map_hold"), mapOpts);
//  We set zoom and center later by fitBounds()


/**
 * makeMarker() ver 0.2
 * creates Marker and InfoWindow on a Map() named 'map'
 * creates sidebar row in a DIV 'sidebar'
 * saves marker to markerArray and markerBounds
 * @param options object for Marker, InfoWindow and SidebarItem
 * @author Esa 2009
 */
var infoWindow = new google.maps.InfoWindow();
var markerBounds = new google.maps.LatLngBounds();
var markerArray = [];

function makeMarker(options) {
	var pushPin = new google.maps.Marker({map: map});
	pushPin.setOptions(options);
	google.maps.event.addListener(pushPin, "click", function () {
		infoWindow.setOptions(options);
		infoWindow.open(map, pushPin);
		if (this.sidebarButton)this.sidebarButton.button.focus();
	});
	var idleIcon = pushPin.getIcon();
	if (options.sidebarItem) {
		pushPin.sidebarButton = new SidebarItem(pushPin, options);
		pushPin.sidebarButton.addIn("sidebar");
	}
	markerBounds.extend(options.position);
	markerArray.push(pushPin);
	return pushPin;
}

google.maps.event.addListener(map, "click", function () {
	infoWindow.close();
});


/**
 * Creates an sidebar item
 * @constructor
 * @author Esa 2009
 * @param marker
 * @param options object Supported properties: sidebarItem, sidebarItemClassName, sidebarItemWidth,
 */
function SidebarItem(marker, opts) {
	var tag = opts.sidebarItemType || "div";
	var row = document.createElement(tag);
	row.innerHTML = opts.sidebarItem;
	row.className = opts.sidebarItemClassName || "sidebar_item";
	//row.style.display = "block";
	//row.style.width = opts.sidebarItemWidth || "120px";
	row.onclick = function () {
		google.maps.event.trigger(marker, 'click');
	}
	row.onmouseover = function () {
		google.maps.event.trigger(marker, 'mouseover');
	}
	row.onmouseout = function () {
		google.maps.event.trigger(marker, 'mouseout');
	}
	this.button = row;
}
// adds a sidebar item to a <div>
SidebarItem.prototype.addIn = function (block) {
	if (block && block.nodeType == 1)this.div = block;
	else
		this.div = document.getElementById(block)
		|| document.getElementById("sidebar")
		|| document.getElementsByTagName("body")[0];
	this.div.appendChild(this.button);
}
// deletes a sidebar item
SidebarItem.prototype.remove = function () {
	if (!this.div) return false;
	this.div.removeChild(this.button);
	return true;
}


/**
 * markers and info window contents
 */

var markerImage = new google.maps.MarkerImage(
	'i/map_marker.png',
	new google.maps.Size(56, 67),
	new google.maps.Point(0, 0),
	new google.maps.Point(0, 0)
);

makeMarker({
	position: new google.maps.LatLng(55.755826, 37.6173),
	title: "Проспект Вернадского д. 32",
	sidebarItem: "Проспект Вернадского д. 32",
	content: "Проспект Вернадского д. 32, <br/> т. +7(495) 555-55-55",
	icon: markerImage

});


makeMarker({
	position: new google.maps.LatLng(55.68145586, 36.6069641),
	title: "Улица Вавилова, д. 13",
	sidebarItem: "Улица Вавилова, д. 13",
	content: "Улица Вавилова, д. 13 <br/> т. +7(495) 555-55-55",
	icon: markerImage

});


makeMarker({
	position: new google.maps.LatLng(55.91150325, 37.31425476),
	title: "Пролетарский проспект д. 23",
	sidebarItem: "Пролетарский проспект д. 23",
	content: "Пролетарский проспект д. 23 <br/> т. +7(495) 555-55-55",
	icon: markerImage

});
makeMarker({
	position: new google.maps.LatLng(55.955826, 37.6173),
	title: "Проспект Вернадского д. 32",
	sidebarItem: "Проспект Вернадского д. 32",
	content: "Проспект Вернадского д. 32, <br/> т. +7(495) 555-55-55",
	icon: markerImage

});


makeMarker({
	position: new google.maps.LatLng(55.44145586, 37.76069641),
	title: "Улица Вавилова, д. 13",
	sidebarItem: "Улица Вавилова, д. 13",
	content: "Улица Вавилова, д. 13 <br/> т. +7(495) 555-55-55",
	icon: markerImage

});


makeMarker({
	position: new google.maps.LatLng(55.81150325, 37.81425476),
	title: "Пролетарский проспект д. 23",
	sidebarItem: "Пролетарский проспект д. 23",
	content: "Пролетарский проспект д. 23 <br/> т. +7(495) 555-55-55",
	icon: markerImage

});
makeMarker({
	position: new google.maps.LatLng(55.51150325, 35.81425476),
	title: "Пролетарский проспект д.88",
	sidebarItem: "Пролетарский проспект д. 88",
	content: "Пролетарский проспект д. 23 <br/> т. +7(495) 555-55-55",
	icon: markerImage

});



/**
 *   fit viewport to markers
 */
map.fitBounds(markerBounds);




