---
layout: example
snippet: |
  const map = new GMaps({
    element: '#map',
    latitude: -12.043333,
    longitude: -77.028333
  });

  map.getElevations({
    locations : [
      [-12.040397656836609,-77.03373871559225],
      [-12.050047116528843,-77.02448169303511],
      [-12.044804866577001,-77.02154422636042]
    ],
    callback : function (result, status) {
      if (status === google.maps.ElevationStatus.OK) {
        for (var i in result) {
          map.addMarker({
            lat: result[i].location.lat(),
            lng: result[i].location.lng(),
            title: 'Marker with InfoWindow',
            infoWindow: {
              content: '<p>The elevation is '+result[i].elevation+' in meters</p>'
            }
          });
        }
      }
      else {
        console.error(status);
      }
    }
  });
---
# Elevation locations

Get elevation information for locations or routes. See [`GMaps#getElevations`](/docs/module-Routes.html#~getElevations) for more options.

> **Note:** [You need to define an API_KEY to use this feature](https://github.com/hpneo/gmaps/issues/580).