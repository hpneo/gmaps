import GMaps, { latLngFromArguments, flattenArray, arrayToLatLng } from './core';

/**
 * Extends GMaps to use routes.
 * @module Routes
 */

/**
 * Get routes between two coordinates.
 * @function getRoutes
 *
 * @param {object} options - The `options` object should contain:
 * @param {string|google.maps.LatLng|google.maps.Place|google.maps.LatLngLiteral} options.origin - Location of origin.
 * @param {string|google.maps.LatLng|google.maps.Place|google.maps.LatLngLiteral} options.destination - Location of destination.
 * @param {string} options.travelMode - Can be `bicycling`, `driving`, `transit` or `walking`.
 * @param {array} options.waypoints - Array of [google.maps.DirectionsWaypoint](https://developers.google.com/maps/documentation/javascript/reference#DirectionsWaypoint) objects.
 * @param {function} options.callback - Function that will be executed after the results are returned.
 *
 * `options` also accepts any option defined in the [official documentation](https://developers.google.com/maps/documentation/javascript/reference#DirectionsRequest).
 */
GMaps.prototype.getRoutes = function getRoutes(baseOptions) {
  const { origin, destination, travelMode = 'walking', unitSystem = 'metric', avoidHighways = false, avoidTolls = false, optimizeWaypoints = false, waypoints = [], callback, error, ...options } = baseOptions;

  const travelModeId = google.maps.TravelMode[travelMode.toUpperCase()];
  const unitSystemId = google.maps.TravelMode[unitSystem.toUpperCase()];

  const requestOptions = {
    ...options,
    travelMode: travelModeId,
    unitSystem: unitSystemId,
    avoidHighways,
    avoidTolls,
    optimizeWaypoints,
    waypoints,
    origin: typeof origin === 'string' ? origin : latLngFromArguments(...origin),
    destination: typeof destination === 'string' ? destination : latLngFromArguments(...destination),
  };

  const service = new google.maps.DirectionsService();

  service.route(requestOptions, (result, status) => {
    if (status === google.maps.DirectionsStatus.OK) {
      if (callback) {
        callback([...result.routes], result, status);
      }
    } else if (error) {
      error(result, status);
    }
  });
};

/**
 * Remove all routes stored in routes collection.
 * @function removeRoutes
 */
GMaps.prototype.removeRoutes = function removeRoutes() {
  this.routes = [];
};

/**
 * Get elevation information for locations or routes.
 * @function getElevations
 *
 * @param {array} locations - Bi-dimensional array of latitudes and longitudes.
 * @param {boolean} path - If is true, makes a request along a path. If is false, only get elevation information on discrete locations.
 * @param {function} callback - Native callback function defined in [google.maps.ElevationService ('Methods' section)](https://developers.google.com/maps/documentation/javascript/reference#ElevationService) (`getElevationAlongPath` if `path` is true, `getElevationForLocations` if `path` is false).
 */
GMaps.prototype.getElevations = function getElevations(baseOptions) {
  const { path = false, samples = 256, callback, ...options } = baseOptions;

  let locations = options.locations || [];

  if (locations.length > 0) {
    if (locations[0].length > 0) {
      locations = flattenArray([locations].map(location => arrayToLatLng(location, false)));
    }
  }

  const service = new google.maps.ElevationService();

  if (!path) {
    const requestOptions = {
      ...options,
      locations,
      path,
      samples,
    };

    service.getElevationForLocations(requestOptions, (result, status) => {
      if (typeof callback === 'function') {
        callback(result, status);
      }
    });
  } else {
    const requestOptions = {
      path: locations,
      samples,
    };

    service.getElevationAlongPath(requestOptions, (result, status) => {
      if (typeof callback === 'function') {
        callback(result, status);
      }
    });
  }
};

/**
 * Alias for {@link GMaps#removePolylines}.
 * @function cleanRoute
 */
GMaps.prototype.cleanRoute = GMaps.prototype.removePolylines;

GMaps.prototype.renderRoute = function renderRoute(options, baseRenderOptions) {
  const panel = ((typeof baseRenderOptions.panel === 'string') ? document.getElementById(baseRenderOptions.panel.replace('#', '')) : baseRenderOptions.panel);

  const renderOptions = {
    ...baseRenderOptions,
    panel,
    map: this.map,
  };

  const display = new google.maps.DirectionsRenderer(renderOptions);

  this.getRoutes({
    origin: options.origin,
    destination: options.destination,
    travelMode: options.travelMode,
    waypoints: options.waypoints,
    unitSystem: options.unitSystem,
    error: options.error,
    avoidHighways: options.avoidHighways,
    avoidTolls: options.avoidTolls,
    optimizeWaypoints: options.optimizeWaypoints,
    callback(_, response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        display.setDirections(response);
      }
    },
  });
};

/**
 * Draw a route using polylines. It uses the last route found by {@link GMaps#getRoutes}.
 * @function drawRoute
 *
 * @param {object} options - Accepts the same options as {@link GMaps#getRoutes}.
 * @param {string|google.maps.LatLng|google.maps.Place|google.maps.LatLngLiteral} options.origin - Location of origin.
 * @param {string|google.maps.LatLng|google.maps.Place|google.maps.LatLngLiteral} options.destination - Location of destination.
 * @param {string} options.strokeColor - Color of the polyline. Can be hexadecimal or CSS name.
 * @param {float} options.strokeOpacity - Opacity of the polyline from 0.0 to 1.0
 * @param {integer} options.strokeWeight - Polyline width in pixels.
 */
GMaps.prototype.drawRoute = function drawRoute(options) {
  const self = this;

  this.getRoutes({
    origin: options.origin,
    destination: options.destination,
    travelMode: options.travelMode,
    waypoints: options.waypoints,
    unitSystem: options.unitSystem,
    error: options.error,
    avoidHighways: options.avoidHighways,
    avoidTolls: options.avoidTolls,
    optimizeWaypoints: options.optimizeWaypoints,
    callback(routes) {
      if (routes.length > 0) {
        const lastRoute = routes[routes.length - 1];
        const polylineOptions = {
          path: lastRoute.overview_path,
          strokeColor: options.strokeColor,
          strokeOpacity: options.strokeOpacity,
          strokeWeight: options.strokeWeight,
        };

        if (options.icons) {
          polylineOptions.icons = options.icons;
        }

        self.drawPolyline(polylineOptions);

        if (options.callback) {
          options.callback(lastRoute);
        }
      }
    },
  });
};

/**
 * Travel a route automatically. It uses the last route found by {@link GMaps#getRoutes}.
 * @function travelRoute
 *
 * @param {object} options - Accepts the same options as {@link GMaps#getRoutes}.
 * @param {string|google.maps.LatLng|google.maps.Place|google.maps.LatLngLiteral} options.origin - Location of origin.
 * @param {string|google.maps.LatLng|google.maps.Place|google.maps.LatLngLiteral} options.destination - Location of destination.
 * @param {object} options.route - A [google.maps.DirectionsRoute](https://developers.google.com/maps/documentation/javascript/reference#DirectionsRoute) object. If set, `origin` and `destination` are ignored.
 * @param {function} options.start - Fired before the first step. It receives a single argument, which is a [DirectionsRoute](https://developers.google.com/maps/documentation/javascript/reference#DirectionsRoute) object.
 * @param {function} options.step - Fired each step in the route. It receives 2 arguments, which is a [DirectionsStep](https://developers.google.com/maps/documentation/javascript/reference#DirectionsStep) object and the total length of the steps.
 * @param {function} options.end - Fired after the last step. It receives a single argument, which is a [DirectionsRoute](https://developers.google.com/maps/documentation/javascript/reference#DirectionsRoute) object.
 */
GMaps.prototype.travelRoute = function travelRoute(options) {
  if (options.origin && options.destination) {
    this.getRoutes({
      origin: options.origin,
      destination: options.destination,
      travelMode: options.travelMode,
      waypoints: options.waypoints,
      unitSystem: options.unitSystem,
      error: options.error,
      callback(routes) {
        if (routes.length === 0) {
          return;
        }

        const lastRoute = routes[routes.length - 1];

        // start callback
        if (options.start) {
          options.start(lastRoute);
        }

        // step callback
        if (options.step) {
          if (lastRoute.legs.length > 0) {
            const { steps, } = lastRoute.legs[0];

            steps.forEach((step, index) => {
              // eslint-disable-next-line no-param-reassign
              step.step_number = index;
              // eslint-disable-next-line no-param-reassign
              step.stepNumber = index;

              options.step(step, steps.length - 1);
            });
          }
        }

        // end callback
        if (options.end) {
          options.end(lastRoute);
        }
      },
    });
  } else if (options.route) {
    if (options.route.legs.length > 0) {
      const { steps, } = options.route.legs[0];

      steps.forEach((step, index) => {
        // eslint-disable-next-line no-param-reassign
        step.step_number = index;
        // eslint-disable-next-line no-param-reassign
        step.stepNumber = index;

        options.step(step, steps.length - 1);
      });
    }
  }
};

/**
 * Draw and travel a route automatically step by step. It uses the last route found by {@link GMaps#getRoutes}.
 * @function drawSteppedRoute
 *
 * @param {object} options - Accepts the same options as {@link GMaps#travelRoute}.
 * @param {string|google.maps.LatLng|google.maps.Place|google.maps.LatLngLiteral} options.origin - Location of origin.
 * @param {string|google.maps.LatLng|google.maps.Place|google.maps.LatLngLiteral} options.destination - Location of destination.
 * @param {object} options.route - A [google.maps.DirectionsRoute](https://developers.google.com/maps/documentation/javascript/reference#DirectionsRoute) object. If set, `origin` and `destination` are ignored.
 * @param {string} options.strokeColor - Color of the polyline. Can be hexadecimal or CSS name.
 * @param {float} options.strokeOpacity - Opacity of the polyline from 0.0 to 1.0
 * @param {integer} options.strokeWeight - Polyline width in pixels.
 * @param {function} options.start - Fired before the first step. It receives a single argument, which is a [DirectionsRoute](https://developers.google.com/maps/documentation/javascript/reference#DirectionsRoute) object.
 * @param {function} options.step - Fired each step in the route. It receives 2 arguments, which is a [DirectionsStep](https://developers.google.com/maps/documentation/javascript/reference#DirectionsStep) object and the total length of the steps.
 * @param {function} options.end - Fired after the last step. It receives a single argument, which is a [DirectionsRoute](https://developers.google.com/maps/documentation/javascript/reference#DirectionsRoute) object.

 */
GMaps.prototype.drawSteppedRoute = function drawSteppedRoute(options) {
  const self = this;

  this.travelRoute({
    ...options,
    step: function step(routeStep, stepsCount) {
      const polylineOptions = {
        path: routeStep.path,
        strokeColor: options.strokeColor,
        strokeOpacity: options.strokeOpacity,
        strokeWeight: options.strokeWeight,
      };

      if (options.icons) {
        polylineOptions.icons = options.icons;
      }

      self.drawPolyline(polylineOptions);

      options.step(routeStep, stepsCount);
    },
  });

  // if (options.origin && options.destination) {
  //   this.getRoutes({
  //     origin: options.origin,
  //     destination: options.destination,
  //     travelMode: options.travelMode,
  //     waypoints: options.waypoints,
  //     error: options.error,
  //     callback(routes) {
  //       if (routes.length === 0) {
  //         return;
  //       }

  //       const route = routes[routes.length - 1];

  //       // start callback
  //       if (options.start) {
  //         options.start(route);
  //       }

  //       // step callback
  //       if (options.step) {
  //         if (route.legs.length > 0) {
  //           const { steps, } = route.legs[0];

  //           steps.forEach((step, index) => {
  //             // eslint-disable-next-line no-param-reassign
  //             step.step_number = index;
  //             // eslint-disable-next-line no-param-reassign
  //             step.stepNumber = index;

  //             const polylineOptions = {
  //               path: step.path,
  //               strokeColor: options.strokeColor,
  //               strokeOpacity: options.strokeOpacity,
  //               strokeWeight: options.strokeWeight,
  //             };

  //             if (options.icons) {
  //               polylineOptions.icons = options.icons;
  //             }

  //             self.drawPolyline(polylineOptions);
  //             options.step(step, (route.legs[0].steps.length - 1));
  //           });
  //         }
  //       }

  //       // end callback
  //       if (options.end) {
  //         options.end(route);
  //       }
  //     },
  //   });
  // } else if (options.route) {
  //   if (options.route.legs.length > 0) {
  //     const { steps, } = options.route.legs[0];

  //     steps.forEach((step, index) => {
  //       // eslint-disable-next-line no-param-reassign
  //       step.step_number = index;
  //       // eslint-disable-next-line no-param-reassign
  //       step.stepNumber = index;

  //       const polylineOptions = {
  //         path: step.path,
  //         strokeColor: options.strokeColor,
  //         strokeOpacity: options.strokeOpacity,
  //         strokeWeight: options.strokeWeight,
  //       };

  //       if (options.icons) {
  //         polylineOptions.icons = options.icons;
  //       }

  //       self.drawPolyline(polylineOptions);

  //       options.step(step);
  //     });
  //   }
  // }
};

class Route {
  constructor(options) {
    this.origin = options.origin;
    this.destination = options.destination;
    this.waypoints = options.waypoints;

    this.map = options.map;
    this.route = options.route;
    this.step_count = 0;
    this.steps = this.route.legs[0].steps;
    this.steps_length = this.steps.length;

    const polylineOptions = {
      path: new google.maps.MVCArray(),
      strokeColor: options.strokeColor,
      strokeOpacity: options.strokeOpacity,
      strokeWeight: options.strokeWeight,
    };

    if (options.icons) {
      polylineOptions.icons = options.icons;
    }

    this.polyline = this.map.drawPolyline(polylineOptions).getPath();
  }

  getRoute(options) {
    const self = this;

    this.map.getRoutes({
      origin: this.origin,
      destination: this.destination,
      travelMode: options.travelMode,
      waypoints: this.waypoints || [],
      error: options.error,
      callback(routes) {
        // eslint-disable-next-line prefer-destructuring
        self.route = routes[0];

        if (options.callback) {
          options.callback.call(self);
        }
      },
    });
  }

  back() {
    if (this.step_count > 0) {
      this.step_count -= 1;
      const { path, } = this.route.legs[0].steps[this.step_count];

      path.forEach(() => this.polyline.pop());
    }
  }

  forward() {
    if (this.step_count < this.steps_length) {
      const { path, } = this.route.legs[0].steps[this.step_count];

      path.forEach(coordinate => this.polyline.push(coordinate));

      this.step_count += 1;
    }
  }
}

GMaps.Route = Route;

export default GMaps;
