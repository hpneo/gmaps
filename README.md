# gmaps.js - A Javascript library that simplifies your life

gmaps.js allows you to use the potential of Google Maps in a simple way. No more extensive documentation or large amount of code.

Visit the examples in [hpneo.github.com/gmaps](https://hpneo.dev/gmaps/)
Go to the API Documentation [hpneo.github.io/gmaps/documentation.html](https://hpneo.dev/gmaps/docs/gmaps/1.0.0)

## Quick Start

1. Add a reference to Google Maps API
2. Add `gmaps.js` in your HTML
3. Enjoy!

```html
<!DOCTYPE html>
<html>
<head>
  <title></title>
  <script src="http://maps.google.com/maps/api/js"></script>
  <script src="gmaps.js"></script>
  <style type="text/css">
    #map {
      width: 400px;
      height: 400px;
    }
  </style>
</head>
<body>
  <div id="map"></div>
  <script>
    const map = new GMaps({
      element: document.querySelector('#map'),
      latitude: -12.043333,
      longitude: -77.028333
    });
  </script>
</body>
</html>
```

### Modular imports

If you use NPM to build front-end apps, you can import each module separately. Each module will import `lib/core.js` (and, in some cases, `lib/events.js` and/or `lib/polyfills.js`) as a dependency and will return a `GMaps` class.

For example:

```javascript
import GMaps from 'gmaps/lib/markers';

const map = new GMaps({
  element: document.querySelector('#map'),
  latitude: -12.043333,
  longitude: -77.028333
});

map.addMarker({
  position: map.getCenter(),
  title: 'Center'
});
```

### Use with AMD

With require.js, you need to load Google Maps JavaScript API first. For example, assuming you have a `googlemapsapi.js` file:

```javascript
define(['async!http://maps.google.com/maps/api/js?v=3&sensor=false'], function() {});
```

Next you have to define the dependency for gmaps.js:

```javascript
require.config({
  paths: {
    "googlemapsapi": "googlemapsapi",
  },
  shim: {
    gmaps: {
      deps: ["googlemapsapi"],
      exports: "GMaps"
    }
  }
});
```

Also, you can use the [googlemaps-amd](https://github.com/aerisweather/googlemaps-amd) plugin.

## Build

If you would like to build gmaps from source run the following at the terminal:

```sh
git clone https://github.com/hpneo/gmaps.git
cd gmaps
npm install
npm run build
```