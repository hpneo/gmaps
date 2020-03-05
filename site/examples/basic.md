---
layout: example
snippet: |
  const map = new GMaps({
    element: '#map',
    latitude: -12.043333,
    longitude: -77.028333
  });
---
# Basic map

With gmaps you can create a Google Maps map in 5 lines. [`GMaps`](/docs/GMaps.html) class requires at least `latitude`, `longitude` and `element` properties.

Also, it accepts any other property from the native `google.maps.Map` class.

> **Note:** You can use `center` too, instead of `latitude` and `longitude`.