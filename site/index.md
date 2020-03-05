---
title: gmaps.js
tagline: Google Maps API with less pain and more fun
description: gmaps.js allows you to use the potential of Google Maps in a simple way.<br/>No more extensive documentation or large amount of code.
snippet: |
  const map = new GMaps({
    element: '#map',
    latitude: -12.043333,
    longitude: -77.028333,
  });

  map.addMarker({
    position: map.getCenter(),
    title: 'Center',
  });
features:
  - Create basic maps with 5 lines of code (or less).
  - 1-1 parity with Google Maps JavaScript API.
  - Access all map's components from a GMaps instance.
  - Create markers, polylines and polygons with simple methods.
  - Load features from KML or GeoRSS feeds.
  - Add traffic, transit or bicycling layers to your map.
  - Search, draw or navigate through routes (requires Google Maps API key).
  - Draw overlays to create other components, such as Info Windows, custom controls, etc.
  - Apply style to your maps easily.
  - Embed StreetView easily.
  - Geocode and reverse-geocode locations (requires Google Maps API key).
  - Detect if a marker is inside our outside a geofence.
  - Access native <code>google.maps</code> objects to work directly with the low level Google Maps JavaScript API.
---
<section class="hero is-medium">
  <div class="hero-body">
    <div class="container">
      <div class="columns">
        <div class="column">
          <h1 class="title is-1">{{ title }}</h1>
          <h2 class="subtitle">{{ tagline }}</h2>
          <p>{{ description }}</p>
          <br />
          <div class="buttons">
            <a href="https://github.com/hpneo/gmaps" class="button is-primary has-text-weight-semibold">Install</a>
            <a href="/docs" class="button is-text" target="_blank">View docs</a>
          </div>
        </div>
        <div class="column">
          <article class="live-example">
            <aside class="live-example-editor">

```javascript
{{ snippet }}
```
</aside>
            <aside class="live-example-preview" id="map"></aside>
          </article>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="container with-margin">
  <div class="columns is-centered">
    <aside class="column">
      <h4 class="title is-4">Simple but powerful</h4>
      <p>Inspired in jQuery, gmaps.js allows you perform almost every operation available in Google Maps JavaScript API with less code.</p>
    </aside>
    <aside class="column">
      <h4 class="title is-4">Modular</h4>
      <p>Each group of features has its own module, so you can import only what you need and reduce your bundle size.</p>
    </aside>
    <aside class="column">
      <h4 class="title is-4">Organized</h4>
      <p>Each map's object is stored as a property in a GMaps instance. Iterate through your map's markers or polygons without missing anything.</p>
    </aside>
    <!-- <aside class="column">
      <h4 class="title is-4">Modular</h4>
      <p>Each group of features has its own module, so you can import only what you need and reduce your bundle size.</p>
    </aside> -->
  </div>
</section>

<section class="container  with-margin">
  <div class="columns">
    <div class="column">
      <article class="content">
        <h3 class="title is-3">Features</h3>
        <ul>
        {% for feature in features %}<li>{{ feature }}</li>{% endfor %}
        </ul>
      </article>
    </div>
  </div>
</section>

<script>{{ snippet }}</script>