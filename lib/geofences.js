import GMaps, { latLngFromArguments } from './core';
import './polyfills';

/**
 * Extends GMaps to use geofences.
 * @module Geofences
 */

/**
 * Check if a coordinate is inside or not a geofence.
 * @function checkGeofence
 *
 * @param {object} latLng - A LatLngLiteral object (a plain object with `lat` and `lng` properties).
 * @param {object} fence - A fence object, which can be an instance of `google.maps.Polygon`, `google.maps.Circle`, `google.maps.Rectangle` or `google.maps.LatLngBounds`.
 *
 * @returns {boolean} Is `true` if the coordinate is inside the fence, and `false` if is not.
 */
GMaps.prototype.checkGeofence = function checkGeofence(...args) {
  const lagLng = latLngFromArguments(...args);
  const fence = args.pop();

  return fence.containsLatLng(lagLng);
};

/**
 * Check if a marker's position is inside or not any of its geofences. It will trigger the `outsideCallback` function for every fence that contains the marker's position.
 * @function checkMarkerGeofence
 *
 * @param {google.maps.Marker} marker - A marker added with `GMaps#addMarker`.
 * @param {function} outsideCallback - A function that will receive two arguments: the `marker` and the current fence.
 */
GMaps.prototype.checkMarkerGeofence = function checkMarkerGeofence(marker, outsideCallback) {
  if (marker.fences) {
    marker.fences.forEach((fence) => {
      const position = marker.getPosition();

      if (!this.checkGeofence(position, fence)) {
        outsideCallback(marker, fence);
      }
    });
  }
};

export default GMaps;
