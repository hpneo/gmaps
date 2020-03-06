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
---
# Polygons

[`GMaps#drawPolygon`](/docs/module-Geometry.html#~drawPolygon) accepts any property from the native `google.maps.Polygon` class.

The path of a polygon can be defined as an array of:
- `google.maps.LatLng` objects, or
- arrays of latitude and longitudes, as in the example

It also supports [events](https://developers.google.com/maps/documentation/javascript/reference#Polygon) as properties.

> **Note:** You can also add a GeoJSON Polygon or MultiPolygon path adding `useGeoJSON: true`.
