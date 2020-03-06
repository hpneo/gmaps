import GMaps, { setupEventListener } from './core';
import './events';

/**
 * Extends GMaps to use polylines and polygons.
 * @module Layers
 */

GMaps.prototype.getFromFusionTables = function getFromFusionTables(baseOptions) {
  const { events = {}, ...options } = baseOptions;

  const layer = new google.maps.FusionTablesLayer(options);

  Object.keys(events).forEach(eventName =>
    setupEventListener({
      object: layer,
      eventName,
      instance: this,
      handler: events[eventName],
    })
  );

  this.layers.push(layer);

  return layer;
};

/**
 * Draw a FusionTables layer in the Map.
 * @function loadFromFusionTables
 *
 * @param {object} options - The `options` accepts any option defined in the [official documentation](https://developers.google.com/maps/documentation/javascript/reference#FusionTablesLayerOptions).
 *
 * @see `options` also accepts an `events` object, which accepts only `click`.
 *
 * @returns {google.maps.FusionTablesLayer}
 */
GMaps.prototype.loadFromFusionTables = function loadFromFusionTables(options) {
  const layer = this.getFromFusionTables(options);
  layer.setMap(this.map);

  return layer;
};

GMaps.prototype.getFromKML = function getFromKML(baseOptions) {
  const { url, events, ...options } = baseOptions;

  const layer = new google.maps.KmlLayer(url, options);

  Object.keys(events).forEach(eventName =>
    setupEventListener({
      object: layer,
      eventName,
      instance: this,
      handler: events[eventName],
    })
  );

  this.layers.push(layer);

  return layer;
};

/**
 * Draw a KML layer in the Map.
 * @function loadFromKML
 *
 * @param {object} options - The `options` accepts any option defined in the [official documentation](https://developers.google.com/maps/documentation/javascript/reference#KmlLayerOptions).
 *
 * @see `options` also accepts an `events` object, which accepts all events defined in the ["Events" section](https://developers.google.com/maps/documentation/javascript/reference#KmlLayer).
 *
 * @returns {google.maps.KmlLayer}
 */
GMaps.prototype.loadFromKML = function loadFromKML(options) {
  const layer = this.getFromKML(options);
  layer.setMap(this.map);

  return layer;
};

/**
 * Draw a layer in the Map. This method also fires a `layer_added` event.
 * @function addLayer
 *
 * @param {string} layerName - The name of a Google Maps layer, which can be: `traffic`, `transit` or `bicycling`.
 *
 * @returns {google.maps.TrafficLayer|google.maps.TransitLayer|google.maps.BicyclingLayer}
 */
GMaps.prototype.addLayer = function addLayer(layerName, baseOptions = {}) {
  const { filter, click, search, nearbySearch, radarSearch, textSearch, ...options } = baseOptions;
  const { bounds, keyword, location, name, radius, rankBy, types, query, } = options;
  let layer;

  switch (layerName) {
    case 'traffic':
      layer = new google.maps.TrafficLayer();
      this.singleLayers.traffic = layer;
      break;
    case 'transit':
      layer = new google.maps.TransitLayer();
      this.singleLayers.transit = layer;
      break;
    case 'bicycling':
      layer = new google.maps.BicyclingLayer();
      this.singleLayers.bicycling = layer;
      break;
    case 'places':
      layer = new google.maps.places.PlacesService(this.map);
      this.singleLayers.places = layer;

      if (search || nearbySearch || radarSearch) {
        const placeSearchRequest = {
          bounds,
          keyword,
          location,
          name,
          radius,
          rankBy,
          types,
        };

        if (radarSearch) {
          layer.radarSearch(placeSearchRequest, radarSearch);
        }

        if (search) {
          layer.search(placeSearchRequest, search);
        }

        if (nearbySearch) {
          layer.nearbySearch(placeSearchRequest, nearbySearch);
        }
      }

      if (textSearch) {
        const textSearchRequest = {
          bounds,
          location,
          query,
          radius,
        };

        layer.textSearch(textSearchRequest, textSearch);
      }
      break;
    default:
      break;
  }

  if (layer) {
    if (typeof layer.setOptions === 'function') {
      layer.setOptions(options);
    }

    if (typeof layer.setMap === 'function') {
      layer.setMap(this.map);
    }

    GMaps.fire('layer_added', layer, this);

    return layer;
  }
};

/**
 * Remove a layer from the map. If the layer is a FusionTables layer or a KML layer, `removeLayer` also removes the layer from the layers collection and fires a `layer_removed` event.
 * @function removeLayer
 *
 * @param {google.maps.Polygon} polygon - The polygon to be removed.
 */
GMaps.prototype.removeLayer = function removeLayer(layer) {
  if (typeof layer === 'string' && this.singleLayers[layer] !== undefined) {
    this.singleLayers[layer].setMap(null);

    delete this.singleLayers[layer];
  } else {
    const layerIndex = this.layers.indexOf(layer);

    if (layerIndex >= 0) {
      layer.setMap(null);
      this.layers.splice(layerIndex, 1);

      GMaps.fire('layer_removed', layer, this);
    }
  }
};

export default GMaps;
