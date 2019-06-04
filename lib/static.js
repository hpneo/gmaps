import GMaps from './core';

const parseColor = (color, opacity) => {
  let parsedColor;

  if (color[0] === '#') {
    parsedColor = color.replace('#', '0x');

    if (opacity) {
      // eslint-disable-next-line no-param-reassign
      opacity = Math.min(1, Math.max(parseFloat(opacity), 0));

      if (opacity === 0) {
        return '0x00000000';
      }

      // eslint-disable-next-line no-param-reassign
      opacity = (opacity * 255).toString(16);

      if (opacity.length === 1) {
        // eslint-disable-next-line no-param-reassign
        opacity += opacity;
      }

      parsedColor = parsedColor.slice(0, 8) + opacity;
    }
  }

  return parsedColor;
};

/**
 * Extends GMaps to generate static maps.
 * @module Static
 */

/**
 * Creates an URL for a static map from current GMaps map.
 * @function toImage
 *
 * @param {object} options - The `options` object should contain:
 * @param {array} options.size - Width and height of the image.
 *
 * @returns {string}
 */
 GMaps.prototype.toImage = function toImage(options) {
  const { size = [this.element.clientWidth, this.element.clientHeight], } = options;

  const staticMapOptions = {
    size,
    latitude: this.getCenter().lat(),
    longitude: this.getCenter().lng(),
    markers: this.markers.map(marker => ({
      latitude: marker.getPosition().lat(),
      longitude: marker.getPosition().lng(),
    })),
  };

  if (this.polylines.length > 0) {
    const polyline = this.polylines[0];

    staticMapOptions.polyline = {
      path: google.maps.geometry.encoding.encodePath(polyline.getPath()),
      strokeColor: polyline.strokeColor,
      strokeOpacity: polyline.strokeOpacity,
      strokeWeight: polyline.strokeWeight,
    };
  }

  return GMaps.staticMapURL(staticMapOptions);
};

const buildMarkerParameters = (marker) => {
  const markerParameters = [];

  const { address, lat, latitude = lat, lng, longitude = lng, size, icon, color, label, ...markerOptions } = marker;

  const location = address || `${latitude},${longitude}`;

  if (size) {
    markerParameters.push(`size:${size}`);
  }

  if (icon) {
    markerParameters.push(`icon:${encodeURI(icon)}`);
  }

  if (color) {
    markerParameters.push(`color:${color.replace('#', '0x')}`);
  }

  if (label) {
    markerParameters.push(`label:${label[0].toUpperCase()}`);
  }

  Object.keys(markerOptions).forEach(key => markerParameters.push(`${key}:${markerParameters[key]}`));

  markerParameters.push(location);

  return markerParameters;
};

const buildPathParameters = (polyline) => {
  const { path, } = polyline;
  const polylineParameters = [];

  if (polyline.strokeWeight) {
    polylineParameters.push(`weight:${parseInt(polyline.strokeWeight, 10)}`);
  }

  if (polyline.strokeColor) {
    polylineParameters.push(`color:${parseColor(polyline.strokeColor, polyline.strokeOpacity)}`);
  }

  if (polyline.fillColor) {
    polylineParameters.push(`fillcolor:${parseColor(polyline.fillColor, polyline.fillOpacity)}`);
  }

  if (path.join) {
    path.forEach(coordinates => polylineParameters.push(coordinates.join(',')));
  } else {
    polylineParameters.push(`enc:${path}`);
  }

  return polylineParameters;
};

const buildStyleParameters = (style) => {
  const styleParameters = [];

  if (style.featureType) {
    styleParameters.push(`feature:${style.featureType.toLowerCase()}`);
  }

  if (style.elementType) {
    styleParameters.push(`element:${style.elementType.toLowerCase()}`);
  }

  if (style.stylers.length) {
    style.stylers.forEach((styler) => {
      Object.keys(styler).forEach((key) => {
        const value = (key === 'hue' || key === 'color') ? styler[key].replace('#', '0x') : styler[key];

        styleParameters.push(`${key}:${value}`);
      });
    });
  }

  return styleParameters;
};

GMaps.staticMapURL = function staticMapURL(baseOptions) {
  const { url, lat, latitude = lat, lng, longitude = lng, center, address, zoom = 15, markers = [], styles, polyline, visible, size = [630, 300], ...options } = baseOptions;
  const defaultRoot = `${global.location.protocol === 'file:' ? 'http:' : global.location.protocol}//maps.googleapis.com/maps/api/staticmap`;

  let root = url || defaultRoot;
  const parameters = [];

  root += '?';

  // Map options
  if (center) {
    parameters.push(`center=${center}`);
  } else if (address) {
    parameters.push(`center=${address}`);
  } else if (latitude && longitude) {
    parameters.push(`center=${latitude},${longitude}`);
  } else if (visible) {
    parameters.push(`visible=${encodeURI(visible.join('|'))}`);
  }

  parameters.push(`size=${size.join('x')}`);
  parameters.push(`zoom=${zoom}`);

  Object.keys(options).forEach(key => parameters.push(`${key}=${options[key]}`));

  // Map style
  if (styles) {
    styles.forEach((style) => {
      const styleParameters = buildStyleParameters(style);

      parameters.push(`style=${encodeURI(styleParameters.join('|'))}`);
    });
  }

  // Markers
  if (markers.length) {
    markers.forEach((marker) => {
      const markerParameters = buildMarkerParameters(marker);
      parameters.push(`markers=${encodeURI(markerParameters.join('|'))}`);
    });
  }

  // Polylines
  if (polyline) {
    const polylineParameters = buildPathParameters(polyline);

    parameters.push(`path=${encodeURI(polylineParameters.join('|'))}`);
  }

  // Retina support
  const dpi = window.devicePixelRatio || 1;
  parameters.push(`scale=${dpi}`);

  return root + parameters.join('&');
};

export default GMaps;
