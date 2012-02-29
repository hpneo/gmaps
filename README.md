GMaps.js - A Javascript library that simplifies your life
=========================================================

GMaps.js allows you to use the potential of Google Maps in a simple way. No more extensive documentation or large amount of code.

Visit the examples in [hpneo.github.com/gmaps](http://hpneo.github.com/gmaps/)

Changelog
---------

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