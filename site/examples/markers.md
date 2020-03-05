---
layout: example
snippet: |
  const map = new GMaps({
    element: '#map',
    latitude: -12.043333,
    longitude: -77.028333
  });

  map.addMarker({
    position: {
      lat: -12.043333,
      lng: -77.03,
    },
    title: 'Lima',
    details: {
      someNumber: 42,
      someUser: 'hpneo'
    },
    click: function(event) {
      alert('You clicked in this marker:\n' + JSON.stringify(this.details));
    },
    mouseover: function(event) {
      console.log(event);
    }
  });
  map.addMarker({
    position: {
      lat: -12.042,
      lng: -77.028333,
    },
    title: 'Marker with InfoWindow',
    infoWindow: {
      content: '<p>HTML Content</p>'
    }
  });
---
# Basic map

[`GMaps#addMarker`](/docs/module-Markers.html#~addMarker) accepts any property from the native `google.maps.Marker` class.

It also [events](https://developers.google.com/maps/documentation/javascript/reference#Marker) as properties.

> **Note:** If you want to show an Info Window, you must add:
> ```javascript
> infoWindow: {
>   content: '<p>HTML Content</p>'
> }
> ```