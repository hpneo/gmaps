import GMaps from './core';

/**
 * Extends GMaps to add styled map types.
 * @module Styles
 */

/**
 * Add a [styled map type](https://developers.google.com/maps/documentation/javascript/maptypes#StyledMaps) in the Map, which can be used with the base map types (`hybrid`, `roadmap`, `satellite` and `terrain`).
 * @function addStyle
 *
 * @param {object} options - The `options` object should contain:
 * @param {string} options.mapTypeId - A simple identifier for the styled map type.
 * @param {string} options.styledMapName - A name for the styled map type. It will be displayed in the map type control.
 * @param {array} options.styles - An array of [`MapTypeStyle`](https://developers.google.com/maps/documentation/javascript/reference#MapTypeStyle) objects.
 */
GMaps.prototype.addStyle = function addStyle(options) {
  const styledMapType = new google.maps.StyledMapType(options.styles, { name: options.styledMapName, });

  this.map.mapTypes.set(options.mapTypeId, styledMapType);
};

/**
 * Set a [styled map type](https://developers.google.com/maps/documentation/javascript/maptypes#StyledMaps) to the Map. The map type should be defined before with {@link GMaps#addStyle}.
 * @function setStyle
 *
 * @param {string} mapTypeId - The styled map type's identifier.
 */
GMaps.prototype.setStyle = function setStyle(mapTypeId) {
  this.map.setMapTypeId(mapTypeId);
};

export default GMaps;
