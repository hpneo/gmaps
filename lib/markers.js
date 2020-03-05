import GMaps, { setupEvents } from './core';
import './events';
import './geofences';

/**
 * Extends GMaps to use markers.
 * @module Markers
 */

const INFO_WINDOW_EVENTS = ['closeclick', 'content_changed', 'domready', 'position_changed', 'zindex_changed'];
const MARKER_EVENTS = ['animation_changed', 'clickable_changed', 'cursor_changed', 'draggable_changed', 'flat_changed', 'icon_changed', 'position_changed', 'shadow_changed', 'shape_changed', 'title_changed', 'visible_changed', 'zindex_changed'];
const MARKER_MOUSE_EVENTS = ['dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mouseout', 'mouseover', 'mouseup'];

GMaps.prototype.createMarker = function createMarker(baseOptions) {
  const self = this;
  const { lat, latitude = lat, lng, longitude = lng, position, details, fences, outside, infoWindow, ...options } = baseOptions;

  if (latitude === undefined && longitude === undefined && position === undefined) {
    throw new Error('No latitude or longitude defined.');
  }

  const markerOptions = {
    ...options,
    position: position || new google.maps.LatLng(latitude, longitude),
    map: null,
  };

  const marker = new google.maps.Marker(markerOptions);

  marker.fences = fences;

  if (infoWindow) {
    marker.infoWindow = new google.maps.InfoWindow(infoWindow);

    setupEvents({ events: INFO_WINDOW_EVENTS, object: marker.infoWindow, instance: this, handlers: infoWindow, });
  }

  setupEvents({ events: MARKER_EVENTS, object: marker, instance: this, handlers: options, });

  MARKER_MOUSE_EVENTS.forEach((eventName) => {
    if (options[eventName]) {
      google.maps.event.addListener(marker, eventName, (event = this) => {
        if (!event.pixel) {
          // eslint-disable-next-line no-param-reassign
          event.pixel = this.map.getProjection().fromLatLngToPoint(event.latLng);
        }

        options[eventName].call(this, event);
      });
    }
  });

  google.maps.event.addListener(marker, 'click', function onMarkerClick(event) {
    this.details = details;

    if (options.click) {
      options.click.call(this, event);
    }

    if (marker.infoWindow) {
      self.hideInfoWindows();
      marker.infoWindow.open(self.map, marker);
    }
  });

  google.maps.event.addListener(marker, 'rightclick', function onMarkerRightClick(event) {
    // eslint-disable-next-line no-param-reassign
    event.marker = this;

    if (options.rightclick) {
      options.rightclick.call(this, event);
    }

    if (GMaps.contextMenus[self.id].marker !== undefined) {
      self.buildContextMenu('marker', event);
    }
  });

  if (marker.fences) {
    google.maps.event.addListener(marker, 'dragend', function onMarkerDragEnd() {
      self.checkMarkerGeofence(this, outside);
    });
  }

  return marker;
};

/**
 * Draw a marker in the Map and add it to the markers collection. This method also fires a `marker_added` event.
 * @function addMarker
 *
 * @param {object} options - The `options` object should contain:
 * @param {number} options.latitude - Latitude of the position. If `latitude` and `longitude` are set, `position` is ignored.
 * @param {number} options.longitude - Longitude of the position. If `latitude` and `longitude` are set, `position` is ignored.
 * @param {google.maps.LatLng} options.position - A `google.maps.LatLng` coordinate indicate the position. If set, `latitude` and `longitude` are ignored.
 * @param {object} options.details - Custom object with extra data.
 * @param {array} options.fences - Collection of `google.maps.Polygon` objects that defines a marker's boundaries or geofences.
 * @param {function} options.outside - Callback fired when the marker is oustide any of its fences.
 * @param {object} options.infoWindow - Object with all options defined in [google.maps.InfoWindowOptions](https://developers.google.com/maps/documentation/javascript/reference#InfoWindowOptions).
 *
 * `options` also accepts any option defined in the [official documentation](https://developers.google.com/maps/documentation/javascript/reference#MarkerOptions) and any event defined in the ["Events" section](https://developers.google.com/maps/documentation/javascript/reference#Marker).
 *
 * @returns {google.maps.Marker}
 */
GMaps.prototype.addMarker = function addMarker(options) {
  // eslint-disable-next-line camelcase
  const { gm_accessors_, lat, latitude = lat, lng, longitude = lng, position, } = options;

  let marker;

  // eslint-disable-next-line camelcase
  if (gm_accessors_) {
    // Native google.maps.Marker object
    marker = options;
  } else if ((latitude && longitude) || position) {
    marker = this.createMarker(options);
  } else {
    throw new Error('No latitude or longitude defined.');
  }

  marker.setMap(this.map);

  if (this.markerClusterer) {
    this.markerClusterer.addMarker(marker);
  }

  this.markers.push(marker);

  GMaps.fire('marker_added', marker, this);

  return marker;
};

/**
 * Draw a collection of markers into the Map. This method fires a `marker_added` event for each marker added.
 * @function addMarkers
 *
 * @param {array} markers - An array of `options` objects, which accepts the same options as in {@link GMaps#addMarker}.
 *
 * @returns {array}
 */
GMaps.prototype.addMarkers = function addMarkers(markers) {
  markers.forEach(marker => this.addMarker(marker));

  return this.markers;
};

/**
 * Hide all markers' InfoWindows.
 * @function hideInfoWindows
 */
GMaps.prototype.hideInfoWindows = function hideInfoWindows() {
  this.markers.forEach((marker) => {
    if (marker.infoWindow) {
      marker.infoWindow.close();
    }
  });
};

/**
 * Remove a marker from the map and from the markers collection. This method also fires a `marker_removed` event.
 * @function removeMarker
 *
 * @param {google.maps.Polygon} polygon - The polygon to be removed.
 */
GMaps.prototype.removeMarker = function removeMarker(marker, options = {}) {
  const { fireEvent = true, } = options;
  const markerIndex = this.markers.indexOf(marker);

  if (markerIndex >= 0) {
    marker.setMap(null);
    this.markers.splice(markerIndex, 1);

    if (this.markerClusterer) {
      this.markerClusterer.removeMarker(marker);
    }

    if (fireEvent) {
      GMaps.fire('marker_removed', marker, this);
    }
  }

  return marker;
};

/**
 * Remove a group of markers (or all of them) from the Map and from the markers collection. This method does not fire a `marker_removed` event.
 * @function removeMarkers
 *
 * @param {array} markers - The markers to be removed. If not set, it removes all markers in the Map.
 */
GMaps.prototype.removeMarkers = function removeMarkers(markers = this.markers) {
  markers.forEach(marker => this.removeMarker(marker, { fireEvent: false, }));
};

export default GMaps;
