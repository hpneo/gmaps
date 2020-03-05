---
layout: example
snippet: |
  const map = new GMaps({
    element: '#map',
    latitude: -12.043333,
    longitude: -77.028333
  });

  map.setContextMenu({
    control: 'map',
    options: [{
      title: 'Add marker',
      name: 'add_marker',
      action: function(event) {
        this.addMarker({
          position: event.latLng,
          title: 'New marker'
        });

        this.hideContextMenu();
      }
    }, {
      title: 'Center here',
      name: 'center_here',
      action: function(event) {
        this.setCenter(event.latLng);
      }
    }]
  });

  map.setContextMenu({
    control: 'marker',
    options: [{
      title: 'Center here',
      name: 'center_here',
      action: function(event) {
        this.setCenter(event.latLng);
      }
    }]
  });
---
# Context menu

You can define a context menu, which will show on right click.

> **Note:** You can use `center` too, instead of `latitude` and `longitude`.