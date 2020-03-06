import GMaps, { getElementById, setupEvents } from './core';

/**
 * Extends GMaps to use StreetView panoramas
 * @module StreetView
 */

const STREETVIEW_EVENTS = ['closeclick', 'links_changed', 'pano_changed', 'position_changed', 'pov_changed', 'resize', 'visible_changed'];

/**
 * Display a Street View Panorama for a position.
 * @function createPanorama
 *
 * @param {object} options - The `options` object should contain:
 * @param {number} options.latitude - Latitude of the coordinate where the panorama is placed. If not set, it takes the Map's center.
 * @param {number} options.longitude - Longitude of the coordinate where the panorama is placed. If not set, it takes the Map's center.
 * @param {google.maps.LatLng} options.position - A `google.maps.LatLng` coordinate where the panorama is placed. If set, `latitude` and `longitude` are ignored.
 *
 * @see `options` also accepts any option defined in the [official documentation](https://developers.google.com/maps/documentation/javascript/reference#StreetViewPanoramaOptions) and any event defined in the ["Events" section](https://developers.google.com/maps/documentation/javascript/reference#StreetViewPanorama).
 *
 * @returns {google.maps.StreetViewPanorama}
 */
GMaps.prototype.createPanorama = function createPanorama(baseOptions) {
  const { lat = this.getCenter().lat(), latitude = lat, lng = this.getCenter().lng(), longitude = lng, ...options } = baseOptions;

  const streetViewOptions = {
    latitude,
    longitude,
    instance: this,
    ...options,
  };

  this.panorama = GMaps.createPanorama(streetViewOptions);

  this.map.setStreetView(this.panorama);

  return this.panorama;
};

GMaps.createPanorama = function createPanorama(baseOptions) {
  const {
    el,
    element = el,
    context,
    lat,
    latitude = lat,
    lng,
    longitude = lng,
    position = new google.maps.LatLng(latitude, longitude),
    instance = window,
    ...options
  } = baseOptions;

  const containerElement = getElementById(element, context);

  const filteredOptions = Object.keys(options).reduce((hash, key) => {
    if (STREETVIEW_EVENTS.includes(key)) {
      return hash;
    }

    return { ...hash, [key]: options[key], };
  }, {});

  const streetViewOptions = {
    ...filteredOptions,
    position,
    visible: true,
  };

  const panorama = new google.maps.StreetViewPanorama(containerElement, streetViewOptions);

  setupEvents({ events: STREETVIEW_EVENTS, object: panorama, instance, handlers: options, });

  return panorama;
};

export default GMaps;
