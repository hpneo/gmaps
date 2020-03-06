---
layout: example
snippet: |
  const map = new GMaps({
    element: '#map',
    latitude: -12.043333,
    longitude: -77.028333
  });

  const path = [
    [-12.044012922866312, -77.02470665341184],
    [-12.05449279282314, -77.03024273281858],
    [-12.055122327623378, -77.03039293652341],
    [-12.075917129727586, -77.02764635449216],
    [-12.07635776902266, -77.02792530422971],
    [-12.076819390363665, -77.02893381481931],
    [-12.088527520066453, -77.0241058385925],
    [-12.090814532191756, -77.02271108990476]
  ];

  const polyline = map.drawPolyline({
    path: path,
    strokeColor: '#62b312',
    strokeOpacity: 0.6,
    strokeWeight: 6
  });
---
# Polylines

[`GMaps#drawPolyline`](/docs/module-Geometry.html#~drawPolyline) accepts any property from the native `google.maps.Polyline` class.

The path of the polyline is defined by an array of arrays of two elements (latitude and longitude).

It also supports [events](https://developers.google.com/maps/documentation/javascript/reference#Polyline) as properties.
