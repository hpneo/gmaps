import GMaps from './core';
import './events';

/**
 * Extends GMaps to use custom Map Types.
 * @module MapTypes
 */

/**
 * Draw a custom [tile-based map type](https://developers.google.com/maps/documentation/javascript/maptypes#ImageMapTypes) in the Map, which can be used with the base map types (`hybrid`, `roadmap`, `satellite` and `terrain`).
 * @function addMapType
 *
 * @param {string} mapTypeId - A simple identifier for the custom map type.
 * @param {object} options - The `options` object should contain:
 * @param {function} options.getTileUrl - A function that returns an URL for tile-based endpoints. It receives two arguments:
 *   * `points` (google.maps.Point): a point with `x` and `y` (is not a coordinate).
 *   * `zoom` (number): a zoom level.
 * @param {google.maps.Size} options.tileSize - The size of the tile.
 *
 * @returns {google.maps.ImageMapType}
 */
GMaps.prototype.addMapType = function addMapType(mapTypeId, options = {}) {
  const { getTileUrl, tileSize = new google.maps.Size(256, 256), } = options;

  if (typeof getTileUrl !== 'function') {
    throw new Error("'getTileUrl' function required.");
  }

  const mapType = new google.maps.ImageMapType({ getTileUrl, tileSize, });

  this.map.mapTypes.set(mapTypeId, mapType);

  return mapType;
};

/**
 * Draw a custom [overlay map type](https://developers.google.com/maps/documentation/javascript/maptypes#OverlayMapTypes) in the Map. This method also fires an `overlay_map_type_added` event.
 * @function addOverlayMapType
 *
 * @param {string} mapTypeId - A simple identifier for the custom map type.
 * @param {object} options - The `options` object should contain:
 * @param {function} options.getTile - A function that returns a DOM Node. It receives three arguments:
 *   * `points` (google.maps.Point): a point with `x` and `y` (is not a coordinate).
 *   * `zoom` (number): a zoom level.
 *   * `ownerDocument` (Document): The DOM document that will create the node.
 * @param {number} options.index - The index for the overlay map type. Used to set differente z levels on stacked overlay maps.
 * @param {google.maps.Size} options.tileSize - The size of the tile.
 *
 * @see `options` also accepts any option defined in the [official documentation](https://developers.google.com/maps/documentation/javascript/reference#MapType).
 */
GMaps.prototype.addOverlayMapType = function addOverlayMapType(options = {}) {
  const { getTile, index = this.map.overlayMapTypes.length, ...overlayMapTypeOptions } = options;

  if (typeof getTile !== 'function') {
    throw new Error("'getTile' function required.");
  }

  this.map.overlayMapTypes.insertAt(index, { ...overlayMapTypeOptions, getTile, });
  GMaps.fire('overlay_map_type_added', this.map.overlayMapTypes[index], this);
};

/**
 * Remove a overlay map type from the map. This method also fires an `overlay_map_type_removed` event.
 * @function removeOverlayMapType
 *
 * @param {google.maps.Polyline} polyline - The polyline to be removed.
 */
GMaps.prototype.removeOverlayMapType = function removeOverlayMapType(index) {
  const overlayMapType = this.map.overlayMapTypes[index];

  this.map.overlayMapTypes.removeAt(index);
  GMaps.fire('overlay_map_type_removed', overlayMapType, this);
};

export default GMaps;
