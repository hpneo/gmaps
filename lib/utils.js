import GMaps from './core';

/**
 * Extends GMaps to add utils functions.
 * @module Utils
 */

/**
 * Geolocate using browser's Web API.
 * @function geolocate
 * @static
 *
 * @param {object} options - The `options` object should contain:
 * @param {function} options.always - A callback that will be executed after the `success`, `error` and `not_supported` callbacks.
 * @param {function} options.success - A callback that will be executed after the browser find its geolocation.
 * @param {function} options.error - A callback that will be executed after the browser fails at finding its geolocation.
 * @param {function} options.not_supported - A callback that will be executed if the browser doesn't support geolocation.
 * @param {object} options.options - Object with all options defined in [PositionOptions](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).
 */
GMaps.geolocate = function geolocate(options) {
  const completeCallback = options.always || options.complete;

  if (window.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition((position) => {
      if (options.success) {
        options.success(position);
      }

      if (completeCallback) {
        completeCallback();
      }
    }, (error) => {
      if (options.error) {
        options.error(error);
      }

      if (completeCallback) {
        completeCallback();
      }
    }, options.options);
  } else {
    if (options.not_supported) {
      options.not_supported();
    }

    if (completeCallback) {
      completeCallback();
    }
  }
};

/**
 * Geocode using Google Maps Geocoding service.
 * @function geolocate
 * @static
 *
 * @param {object} options - The `options` object should contain:
 * @param {number} options.latitude - Latitude of the coordinate to geocode. If `latitude` and `longitude` are set, `location` is ignored.
 * @param {number} options.longitude - Longitude of the coordinate to geocode. If `latitude` and `longitude` are set, `location` is ignored.
 * @param {google.maps.LatLng} options.location - A `google.maps.LatLng` coordinate to geocode. If set, `latitude` and `longitude` are ignored.
 * @param {function} options.callback - Function that will be executed after the results are returned. It receives 2 arguments, which is an array of [GeocoderResult](https://developers.google.com/maps/documentation/javascript/reference#GeocoderResult) objects and the [request's status](https://developers.google.com/maps/documentation/javascript/reference#GeocoderStatus).
 *
 * @see `options` also accepts any option defined in the [official documentation](https://developers.google.com/maps/documentation/javascript/reference#GeocoderRequest).
 *
 */
GMaps.geocode = function geocode(baseOptions) {
  const {
    callback,
    lat,
    latitude = lat,
    lng,
    longitude = lng,
    location = new google.maps.LatLng(latitude, longitude),
    ...options
  } = baseOptions;

  this.geocoder = new google.maps.Geocoder();

  const geocodeOptions = {
    ...options,
    location,
  };

  this.geocoder.geocode(geocodeOptions, callback);
};

export default GMaps;
