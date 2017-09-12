mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FsYXdhciIsImEiOiJjajJxMzZ3OHYwMmt4MndzM2g5d2ozcWl6In0.R48r1EdHNlK-V9awF_J5bg';

var map = new mapboxgl.Map({
  container: 'map',
  center: [-71.059786, 42.367128],
  zoom: 16,
  minZoom: 15,
  maxZoom: 17,
  style: 'mapbox://styles/galawar/cj2q4g9l200512soa0vysqfoy'
});

map.on('click', function (e) {
  console.log(map.getBounds());
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['boston-points'] // replace this with the name of the layer
  });

  if (!features.length) {
    return;
  }

  var feature = features[0];
  this.flyTo({center: feature.geometry.coordinates});

  var markerHeight = 20, markerRadius = 20, linearOffset = 25;
  var popupOffsets = {
    'top': [0, 4],
    'top-left': [0, 12],
    'top-right': [0, 12],
    'bottom': [0, -4],
    'bottom-left': [0, -12], //[linearOffset, (markerHeight - markerRadius + linearOffset) * -5],
    'bottom-right': [0, -12], //[-linearOffset, (markerHeight - markerRadius + linearOffset) * -5],
    'left': [4, 0],
    'right': [-4, 0]
  };

  var popup = new mapboxgl.Popup({offset: popupOffsets, closeButton: false})
    .setLngLat(feature.geometry.coordinates)
    .setHTML('<span class="feature_desc">' + feature.properties.desc + '</span>')
    .setLngLat(feature.geometry.coordinates)
    .addTo(map);
});

//Change the cursor to a pointer when the it enters a feature in the 'points' layer.
map.on('mouseenter', 'boston-points', function () {
  map.getCanvas().style.cursor = 'pointer';
});

// Change it back to a pointer when it leaves.
map.on('mouseleave', 'boston-points', function () {
  map.getCanvas().style.cursor = '';
});


var map = L.mapbox.map('map', 'mapbox.light') // update with your own map id
        .setView([38.909671288923, -77.034084142948], 16);

var listings = document.getElementById('listings');
var locations = L.mapbox.featureLayer().addTo(map);

locations.loadURL('https://raw.githubusercontent.com/messer-84/test/master/points.geojson'); // load in your own GeoJSON file here

function setActive(el) {
  var siblings = listings.getElementsByTagName('div');
  for (var i = 0; i < siblings.length; i++) {
    siblings[i].className = siblings[i].className
      .replace(/active/, '').replace(/\s\s*$/, '');
  }

  el.className += ' active';
}

locations.on('ready', function () {
  locations.eachLayer(function (locale) {

    // Shorten locale.feature.properties to just `prop` so we're not
    // writing this long form over and over again.
    var prop = feature.properties;

    // Each marker on the map.
    var popup = new mapboxgl.Popup({offset: popupOffsets, closeButton: false})
      .setLngLat(feature.geometry.coordinates)
      .setHTML('<span class="feature_desc">' + feature.properties.desc + '</span>')
      .setLngLat(feature.geometry.coordinates)
      .addTo(map);

    var listing = listings.appendChild(document.createElement('div'));
    listing.className = 'item';

    var link = listing.appendChild(document.createElement('a'));
    link.href = '#';
    link.className = 'title';

    link.innerHTML = prop.desc;

    link.onclick = function () {
      setActive(listing);

      // When a menu item is clicked, animate the map to center
      // its associated locale and open its popup.
      map.setView(locale.getLatLng(), 16);
      locale.openPopup();
      return false;
    };

    // Marker interaction
    locale.on('click', function (e) {
      // 1. center the map on the selected marker.
      map.panTo(locale.getLatLng());

      // 2. Set active the markers associated listing.
      setActive(listing);
    });

    popup += '</div>';
    locale.bindPopup(popup);
  });
});

locations.on('layeradd', function (e) {
  var marker = e.layer;
  marker.setIcon(L.icon({
    iconUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/6362/marker.png', // load your own custom marker image here
    iconSize: [56, 56],
    iconAnchor: [28, 28],
    popupAnchor: [0, -34]
  }));
});