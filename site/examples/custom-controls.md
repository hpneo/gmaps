---
layout: example
snippet: |
  const map = new GMaps({
    element: '#map',
    latitude: -12.043333,
    longitude: -77.028333
  });

  map.addControl({
    position: 'top_right',
    content: 'Geolocate',
    style: {
      margin: '10px',
      padding: '11px',
      fontFamily: 'inherit',
      fontSize: '14px',
      background: '#ffffff'
    },
    events: {
      click: function(){
        GMaps.geolocate({
          success: function(position){
            map.setCenter(position.coords.latitude, position.coords.longitude);
          },
          error: function(error){
            alert('Geolocation failed: ' + error.message);
          },
          not_supported: function(){
            alert("Your browser does not support geolocation");
          }
        });
      }
    }
  });
---
# Custom controls

Add a custom control to the map UI. See [`GMaps#addControl`](/docs/module-Controls.html#~addControl) for more options.