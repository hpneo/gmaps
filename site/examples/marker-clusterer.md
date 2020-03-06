---
layout: example
snippet: |
  const map = new GMaps({
    element: '#map',
    latitude: -12.043333,
    longitude: -77.028333,
    markerClusterer: function(map) {
      return new MarkerClusterer(map, [], { imagePath: "/assets/images/m" });
    }
  });

  const lat_span = -12.035988012939503 - -12.050677786181573;
  const lng_span = -77.01528673535154 - -77.04137926464841;

  for(let i = 0; i < 100; i++) {
    let latitude = Math.random()*(lat_span) + -12.050677786181573;
    let longitude = Math.random()*(lng_span) + -77.04137926464841;

    map.addMarker({
      lat: latitude,
      lng: longitude,
      title: 'Marker #' + i
    });
  }
---
# Marker Clusterer

You can use [MarkerClusterer](https://github.com/googlemaps/v3-utility-library/tree/master/packages/markerclusterer) or [MarkerClustererPlus](https://github.com/googlemaps/v3-utility-library/tree/master/packages/markerclustererplus). If you want to use a custom marker clustering library, it has to define a `addMarker` method.

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@google/markerclusterer@2.0.6/dist/markerclusterer.min.js"></script>