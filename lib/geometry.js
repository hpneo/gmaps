import GMaps, { setupEvents, arrayToLatLng, flattenArray } from './core';
import 'events';

/**
 * Extends GMaps to use polylines and polygons.
 * @module Geometry
 */

const EVENTS = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

/**
 * Draw a polyline in the Map and add it to the polylines collection. This method also fires a `polyline_added` event.
 * @function drawPolyline
 *
 * @param {object} options - The `options` object should contain:
 * @param {array} options.path - Collection of coordinates (which can be either an array [lat, lng] or a google.maps.LatLng object).
 * @param {string} options.strokeColor - Color of the polyline. Can be hexadecimal or CSS name.
 * @param {float} options.strokeOpacity - Opacity of the polyline from 0.0 to 1.0.
 * @param {integer} options.strokeWeight - Polyline width in pixels.
 *
 * `options` also accepts any option defined in the [official documentation](https://developers.google.com/maps/documentation/javascript/reference#PolylineOptions) and any event defined in the ["Events" section](https://developers.google.com/maps/documentation/javascript/reference#Polyline).
 *
 * @returns {google.maps.Polyline}
 */
GMaps.prototype.drawPolyline = function drawPolyline(baseOptions) {
  const { icons, strokeColor, strokeOpacity, strokeWeight, geodesic, clickable = true, editable = false, visible = true, zIndex, ...options } = baseOptions;
  let path = [];

  if (options.path.length) {
    if (options.path[0][0] === undefined) {
      path = [...options.path];
    } else {
      path = options.path.map(latLng =>
        new google.maps.LatLng(latLng[0], latLng[1])
      );
    }
  }

  const polylineOptions = {
    ...options,
    map: this.map,
    path,
    strokeColor,
    strokeOpacity,
    strokeWeight,
    geodesic,
    visible,
    clickable,
    editable,
    icons,
    zIndex,
  };

  const polyline = new google.maps.Polyline(polylineOptions);

  setupEvents({ events: EVENTS, object: polyline, instance: this, handlers: options, });

  this.polylines.push(polyline);

  GMaps.fire('polyline_added', polyline, this);

  return polyline;
};

/**
 * Remove a polyline from the map and from the polylines collection. This method also fires a `polyline_removed` event.
 * @function removePolyline
 *
 * @param {google.maps.Polyline} polyline - The polyline to be removed.
 */
GMaps.prototype.removePolyline = function removePolyline(polyline) {
  const polylineIndex = this.polylines.indexOf(polyline);

  if (polylineIndex >= 0) {
    polyline.setMap(null);
    this.polylines.splice(polylineIndex, 1);

    GMaps.fire('polyline_removed', polyline, this);
  }
};

/**
 * Remove all the polylines from the map and clear the polylines collection. This method does not fire a `polyline_removed` event.
 * @function removePolylines
 */
GMaps.prototype.removePolylines = function removePolylines() {
  this.polylines.forEach(polyline => polyline.setMap(null));

  this.polylines = [];
};

/**
 * Draw a circle in the Map and it to the polygons collection.
 * @function drawCircle
 *
 * @param {object} options - The `options` object should contain:
 * @param {number} options.latitude - Latitude of the center. If `latitude` and `longitude` are set, `center`is ignored.
 * @param {number} options.longitude - Longitude of the center. If `latitude` and `longitude` are set, `center`is ignored.
 * @param {google.maps.LatLng} options.center - A `google.maps.LatLng` coordinate indicate the center. If set, `latitude` and `longitude` are ignored.
 *
 * `options` also accepts any option defined in the [official documentation](https://developers.google.com/maps/documentation/javascript/reference#CircleOptions) and any event defined in the ["Events" section](https://developers.google.com/maps/documentation/javascript/reference#Circle).
 *
 * @returns {google.maps.Circle}
 */
GMaps.prototype.drawCircle = function drawCircle(baseOptions) {
  const { lat, latitude = lat, lng, longitude = lng, ...options } = baseOptions;
  const { center = new google.maps.LatLng(latitude, longitude), } = options;
  const polygonOptions = {
    ...options,
    map: this.map,
    center,
  };

  const polygon = new google.maps.Circle(polygonOptions);

  setupEvents({ events: EVENTS, object: polygon, instance: this, handlers: options, });

  this.polygons.push(polygon);

  return polygon;
};

/**
 * Draw a rectangle in the Map and it to the polygons collection.
 * @function drawRectangle
 *
 * @param {object} options - The `options` object should contain:
 * @param {array} options.bounds - Bi-dimensional array of latitudes and longitudes.
 *
 * `options` also accepts any option defined in the [official documentation](https://developers.google.com/maps/documentation/javascript/reference#RectangleOptions) and any event defined in the ["Events" section](https://developers.google.com/maps/documentation/javascript/reference#Rectangle).
 *
 * @returns {google.maps.Rectangle}
 */
GMaps.prototype.drawRectangle = function drawRectangle(baseOptions) {
  const { bounds, ...options } = baseOptions;

  const latLngBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(bounds[0][0], bounds[0][1]),
    new google.maps.LatLng(bounds[1][0], bounds[1][1])
  );

  const polygonOptions = {
    ...options,
    bounds: latLngBounds,
    map: this.map,
  };

  const polygon = new google.maps.Rectangle(polygonOptions);

  setupEvents({ events: EVENTS, object: polygon, instance: this, handlers: options, });

  this.polygons.push(polygon);

  return polygon;
};

/**
 * Draw a polygon in the Map and it to the polygons collection.
 * @function drawPolygon
 *
 * @param {object} options - The `options` object should contain:
 * @param {array} options.paths - Bi-dimensional array of latitudes and longitudes.
 * @param {boolean} options.useGeoJSON - If set, allows `paths` to use GeoJSON format.
 *
 * `options` also accepts any option defined in the [official documentation](https://developers.google.com/maps/documentation/javascript/reference#PolygonOptions) and any event defined in the ["Events" section](https://developers.google.com/maps/documentation/javascript/reference#Polygon).
 *
 * @returns {google.maps.Polygon}
 */
GMaps.prototype.drawPolygon = function drawPolygon(baseOptions) {
  const { useGeoJSON = false, ...options } = baseOptions;

  const basePaths = useGeoJSON ? options.paths : [options.paths.slice(0)];
  let paths = [];

  if (basePaths.length) {
    if (basePaths[0].length) {
      paths = flattenArray(
        basePaths.map(path =>
          arrayToLatLng(path, useGeoJSON)
        )
      );
    }
  }

  const polygonOptions = {
    ...options,
    map: this.map,
    paths,
  };

  const polygon = new google.maps.Polygon(polygonOptions);

  setupEvents({ events: EVENTS, object: polygon, instance: this, handlers: options, });

  this.polygons.push(polygon);

  GMaps.fire('polygon_added', polygon, this);

  return polygon;
};

/**
 * Remove a polygon from the map and from the polygons collection. This method also fires a `polygon_removed` event.
 * @function removePolygon
 *
 * @param {google.maps.Polygon} polygon - The polygon to be removed.
 */
GMaps.prototype.removePolygon = function removePolygon(polygon) {
  const polygonIndex = this.polygons.indexOf(polygon);

  if (polygonIndex >= 0) {
    polygon.setMap(null);
    this.polygons.splice(polygonIndex, 1);

    GMaps.fire('polygon_removed', polygon, this);
  }
};

/**
 * Remove all the polygons from the map and clear the polygons collection. This method does not fire a `polygon_removed` event.
 * @function removePolygons
 */
GMaps.prototype.removePolygons = function removePolygons() {
  this.polygons.forEach(polygon => polygon.setMap(null));

  this.polygons = [];
};

export default GMaps;
