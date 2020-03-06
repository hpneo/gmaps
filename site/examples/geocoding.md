---
layout: example
snippet: |
  const map = new GMaps({
    element: '#map',
    latitude: -12.043333,
    longitude: -77.028333
  });

  GMaps.geocode({
    address: "Central Park",
    callback: function(results, status) {
      if (status === 'OK') {
        const latLng = results[0].geometry.location;

        map.setCenter(latLng);

        map.addMarker({
          position: latLng
        });
      }
      else {
        console.error(status);
      }
    }
  });
---
# Geocoding

You can define either `address` or `latitude` and `longitude`. Also, you must define a `callback` function to use `results` of geocoding and its `status`.

> **Note:** [You need to define an API_KEY to use this feature](https://github.com/hpneo/gmaps/issues/580).
