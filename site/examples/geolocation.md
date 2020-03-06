---
layout: example
snippet: |
  const map = new GMaps({
    element: '#map',
    latitude: -12.043333,
    longitude: -77.028333
  });

  GMaps.geolocate({
    success: function(position) {
      map.setCenter(position.coords.latitude, position.coords.longitude);
    },
    error: function(error) {
      alert('Geolocation failed: '+error.message);
    },
    not_supported: function() {
      alert("Your browser does not support geolocation");
    },
    always: function() {
      alert("Done!");
    }
  });
---
# Geolocation

[`GMaps.geolocate`](/docs/module-Utils.html#.geolocate) supports 4 functions:
- `success` (required): fires when geolocation has been successful
- `error` (required): fires when geolocation has not been done
- `not_supported` (required): fires when geolocation is not supported by the browser
- `always` (optional): fires always after every scenario described above.