**Important**

If you're developer, I'm moving gmaps.js to NPM, you can give your opinion and check the migration progress in [Issue #404](https://github.com/hpneo/gmaps/issues/404)

---

gmaps.js - A Javascript library that simplifies your life
=========================================================

gmaps.js allows you to use the potential of Google Maps in a simple way. No more extensive documentation or large amount of code.

Visit the examples in [hpneo.github.com/gmaps](http://hpneo.github.com/gmaps/)
Go to the API Documentation [hpneo.github.io/gmaps/documentation.html](http://hpneo.github.io/gmaps/documentation.html)

Quick Start
-----

1. Add a reference to Google Maps API
2. Add gmaps.js in your HTML
3. Enjoy!

```html
<!DOCTYPE html>
<html>
<head>
  <title></title>
  <script src="http://maps.google.com/maps/api/js"></script>
  <script src="gmaps.js"></script>
  <style type="text/css">
    #map {
      width: 400px;
      height: 400px;
    }
  </style>
</head>
<body>
  <div id="map"></div>
  <script>
    var map = new GMaps({
      el: '#map',
      lat: -12.043333,
      lng: -77.028333
    });
  </script>
</body>
</html>
```

Use with AMD
-----

With require.js, you need to load Google Maps JavaScript API first. For example, assuming you have a `googlemapsapi.js` file:

```javascript
define(['async!http://maps.google.com/maps/api/js?v=3&sensor=false'], function() {});
```

Next you have to define the dependency for gmaps.js:

```javascript
require.config({
  paths: {
    "googlemapsapi": "googlemapsapi",
  },
  shim: {
    gmaps: {
      deps: ["googlemapsapi"],
      exports: "GMaps"
    }
  }
});
```

Also, you can use the [googlemaps-amd](https://github.com/aerisweather/googlemaps-amd) plugin.

Build
------

If you would like to build gmaps from source run the following at the terminal:

```sh
git clone https://github.com/HPNeo/gmaps.git
cd gmaps
npm install
grunt
```

Changelog
---------

0.4.25
-----------------------
* Change findAbsolutePosition (see #494)

0.4.24
-----------------------
* Fix bug in getRoutes (see #373)

0.4.23
-----------------------
* Fix bug at trying to remove a large amount of markers inside a marker cluster (see #473)
* Check for Google Maps library before creating a GMaps object (see #467)
* Check the Google Maps API at instantiation instead of declaration (see #467)
* Add polyfill for google.maps.Rectangle.prototype.containsLatLng

0.4.22
-----------------------
* Render directions
* Added missing function for registering addListenerOnce

0.4.21
-----------------------
* Better check for `console.error`

0.4.20
-----------------------
* Show an error in the console, instead throwing an error

0.4.19
-----------------------
* Fix bug at hiding markers' context menu when the map is zooming

0.4.18
-----------------------
* Fix bug in `array_map`

0.4.17
-----------------------
* Remove the http so the library (Google Maps call) will also work under SSL without warnings
* Update route drawing methods to allow 'icons' option for drawPolyline
* Remove dependency on 'grunt-cli' having to be installed globally

0.4.16
-----------------------
* Fix removeMarkers

0.4.15
-----------------------
* Add overlay to mouseTarget when click event is set
* addControl/createControl now accepts HTML elements or HTML strings
* Add containsLatLng to google.maps.Circle

0.4.14
-----------------------
* Fix bug in drawPolygon
* Hide context menu before the zoom is changed

0.4.13
-----------------------
* Allow unitSystem setting in travelRoute
* Add functionality to remove controls
* Delegates non custom events to google.map
* Convert featureType and elementType toLowerCase in static maps

0.4.12
-----------------------
* Adds ability to listen for clicks on overlays

0.4.11
-----------------------
* Add RadarSearch to the places layer
* Update default control styles to match new Google Maps release.

0.4.10
-----------------------
* Fix and optimize removeMarkers
* Fix bug in addMarker (issue #270)

0.4.9
-----------------------
* Add UMD support (AMD, CommonJS, browser globals)
* Add retina support
* FitZoom only use visible markers

0.4.8
-----------------------
* Fix getRoutes

0.4.7
-----------------------
* Add callback for failure in getRoutes
* Update marker clusterer after remove marker
* Add support for string arrays to arrayToLatLng

0.4.6
-----------------------
* Allow initialising GMaps without new
* Added styled map support for static maps
* Fixed name display for styled maps
* Allow no zoom for static map request

0.4.5
-----------------------
* Fix IE8 bug using array_map
* Add Grunt and Bower support

0.4.4
-----------------------
* Fix buildContextMenu reference in addMarker

0.4.3
-----------------------
* Fix removePolylines and removePolygons

0.4.2
-----------------------
* Fix drawSteppedRoute

0.4.1
-----------------------
* Fix fitZoom

0.4.0
-----------------------
* Split gmaps.js in modules

0.3.5
-----------------------
* Enable new Google Maps style

0.3.4
-----------------------
* Add support for context menu in multiple maps

0.3.3
-----------------------
* Fix destination as address in getRoutes

0.3.2
-----------------------
* Support for removing Fusion Tables and GeoRSS/KML layers with removeLayer

0.3.1
-----------------------
* Improve event binding at adding markers, polylines or polygons

0.3
-----------------------
* Add native events to google.maps objects and custom events to GMaps maps
* Check for Google Maps library and defined element when initialize
* Allow route origins to be a string or array

0.2.31
-----------------------
* Fix context menu position bug

0.2.30
-----------------------
* New feature: StreetView Panoramas

0.2.29
-----------------------
* New methods: removePolyline and removePolygon
* Tests for Styled MapTypes

0.2.28
-----------------------
* Test suite
* Fix double event firing bug

0.2.27
-----------------------
* Allow create context menus for markers

0.2.26
-----------------------
* Fix bug in getElevations
* Rename fitBounds to fitLatLngBounds

0.2.25
-----------------------
* Support for GeoJSON in drawPolygon
* Use 'complete' instead of 'always' in GMaps.geolocate

0.2.24
-----------------------
* New feature: **Overlay Map Types**

0.2.23
-----------------------
* Add full support to google.maps.PolylineOptions
* New method: removeMarker

0.2.22
-----------------------
* New feature: **Map Types**

0.2.21
-----------------------
* Support to add google.maps.Marker objects in addMarker and addMarkers methods.

0.2.20
-----------------------
* Add support for other HTML block elements instead "div" (like "section").

0.2.19
-----------------------
* Use MarkerClusterer to group markers

0.2.18
-----------------------
* Check if GMaps is defined before load extensions

0.2.17
-----------------------
* Fix bug with disableDefaultUI option in constructor

0.2.16
-----------------------
* Fix another bug in createMarker

0.2.15
-----------------------
* Fix bug in createMarker

0.2.14
-----------------------
* Adding IDs, classes and innerHTML to createControl. (**Note**: Use 'content' instead 'text' in createControl)

0.2.13
-----------------------
* Add support for Places library in addLayer

0.2.12
-----------------------
* Fix map events without MouseEvent object
* Fix bug in drawCircle and drawRectangle
* Fix bug in zoomIn and zoomOut
* New methods: removePolygon and removePolygons

0.2.11
-----------------------
* Add support to Panoramio in addLayer

0.2.10
-----------------------
* New method: toImage

0.2.9
-----------------------
* Extend the drawSteppedRoute and travelRoute functions

0.2.8
-----------------------
* New feature: **Layers**

0.2.7
-----------------------
* New method: removeRoutes
* Access all native methods of google.maps.Map class

0.2.6
-----------------------
* Support for multiple overlays

0.2.5
-----------------------
* Add support to all marker events
* Add support for animations at show and remove overlays

0.2.4.1
-----------------------
* Create GMaps class only when Google Maps API is loaded

0.2.4
-----------------------
* New feature: **Elevation service**

0.2.3
-----------------------
* New method: getZoom

0.2.2
-----------------------
* Minor improvements to support Backbone.js
* Fix controls position

0.2.1
-----------------------
* More default values in GMaps constructor.

0.2
-----------------------
* Remove jQuery dependency.

0.1.12.5
-----------------------
* New method "removePolylines" and alias "cleanRoute"

0.1.12.4
-----------------------
* New methods: fitZoom and fitBounds

0.1.12.3
-----------------------
* New method: refresh

0.1.12.2
-----------------------
* New options in GMaps constructor: width and height

0.1.12.1
-----------------------
* New methods: loadFromFusionTables and loadFromKML

0.1.12
-----------------------
* New feature: **KML and GeoRSS**
* Fix bug in getFromFusionTables

0.1.11
-----------------------
* New feature: **Fusion Tables**

0.1.10
-----------------------
* New feature: **Custom controls**

0.1.9
-----------------------
* New feature: **Static maps**

0.1.8.10
-----------------------
* Better GMaps.Route methods

0.1.8.9
-----------------------
* Fix typo in Polyline events
* Add InfoWindow events

0.1.8.8
-----------------------
* Add Polyline events

0.1.8.7
-----------------------
* Add drag and dragstart events to Marker

0.1.8.6
-----------------------
* Add avoidHighways, avoidTolls, optimizeWaypoints, unitSystem and waypoints options in getRoutes
* New method: createMarker

0.1.8.5
-----------------------
* geolocation and geocode methods are static now (using them with GMaps.geolocation and GMaps.geocode)

0.1.8.4
-----------------------
* Fix typo in geocode method
* Allow all MapOptions in constructor (see 'MapOptions' section in Google Maps API Reference)

0.1.8.3
-----------------------
* Add pane option ('floatPane', 'floatShadow', 'mapPane', 'overlayImage', 'overlayLayer', 'overlayMouseTarget', 'overlayShadow') in drawOverlay
* New methods: removeOverlay and removeOverlays

0.1.8.2
-----------------------
* Change pane ('floatPane' to 'overlayLayer') in drawOverlay

0.1.8.1
-----------------------
* Fix bug in drawCircle

0.1.8
-----------------------
* New feature: **Overlays**
* New method: drawCircle

0.1.7.1
-----------------------
* Bug fix: zoomIn/zoomOut can change zoom by argument
* New method: setZoom

0.1.7
-----------------------
* New class: **GMaps.Route**

0.1.6
-----------------------
* New feature: **Geofence** (with markers)
* New method: **drawPolygon**
* Bug fix: Change reserved word in Context menu

0.1.5
-----------------------
* New feature: **Geocoding**
* New method: **drawSteppedRoute** (similar to travelRoute)

0.1.4
-----------------------
* New events in **addMarker**
* Add step_number property in **travelRoute** method

0.1.3
-----------------------
* New feature: **Context menu** (for map and marker only)
* New method: **travelRoute**
* Change setCenter to panTo in GMaps **setCenter** method
* Save entire route data in routes array (instead saving only route path)
* Context menu and Route example (using **travelRoute**)

0.1.2
-----------------------
* **drawPolyline** can accept both an array of LatLng objets or an array of coordinates
* New methods: **getRoutes** and **drawRoute**
* Route example

0.1.1
-----------------------
* Rename **drawRoute** method to **drawPolyline** (more accurate)
* Marker example

0.1 - Initial release
-----------------------
* Map events
* Geolocation
* Add Markers
* Marker infoWindows
* Draw routes and circles
* Initial examples

License
---------
MIT License. Copyright 2014 Gustavo Leon. http://github.com/hpneo

Permission is hereby granted, free of charge, to any
person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the
Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the
Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice
shall be included in all copies or substantial portions of
the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
