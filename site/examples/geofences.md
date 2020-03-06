---
layout: example
snippet: |
  const map = new GMaps({
    element: '#map',
    latitude: -12.043333,
    longitude: -77.028333
  });

  const path = [
    [-12.040397656836609,-77.03373871559225],
    [-12.040248585302038,-77.03993927003302],
    [-12.050047116528843,-77.02448169303511],
    [-12.044804866577001,-77.02154422636042]
  ];

  const polygon = map.drawPolygon({
    paths: path,
    strokeColor: '#BBD8E9',
    strokeOpacity: 1,
    strokeWeight: 3,
    fillColor: '#BBD8E9',
    fillOpacity: 0.6
  });

  const marker = map.addMarker({
    lat: -12.043333,
    lng: -77.028333,
    draggable: true,
    fences: [polygon],
    outside: function(marker, fence) {
      alert('This marker has been moved outside of its fence');
    }
  });
---
# Geofences

You can attach a geofence (which can be a polygon or a bounds) to a marker adding the `outside` property to [`GMaps#addMarker`](/docs/module-Markers.html#~addMarker).

> **Note:** You can also use [`GMaps#checkMarkerGeofence`](/docs/module-Geofences.html#~checkMarkerGeofence) or [`GMaps#checkGeofence`](/docs/module-Geofences.html#~checkGeofence).
