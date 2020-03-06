export const latLngFromArguments = (...args) => {
  if (typeof args[0] === 'number' && typeof args[1] === 'number') {
    return new google.maps.LatLng(args[0], args[1]);
  }

  return args[0];
};

export const flattenArray = array =>
  array.reduce((collection, item) => collection.concat(item), []);

export const coordsToLatLngs = (coordinates, useGeoJSON) => {
  const firstCoordinate = useGeoJSON ? coordinates[1] : coordinates[0];
  const secondCoordinate = useGeoJSON ? coordinates[0] : coordinates[1];

  return new google.maps.LatLng(firstCoordinate, secondCoordinate);
};

export const arrayToLatLng = (coordinates, useGeoJSON) =>
  coordinates.map((coordinate) => {
    if (!(coordinate instanceof google.maps.LatLng)) {
      if (coordinate.length && typeof coordinate[0] === 'object') {
        return arrayToLatLng(coordinate, useGeoJSON);
      }

      return coordsToLatLngs(coordinate, useGeoJSON);
    }

    return coordinate;
  });

const getElementsByClassName = (className, context) => {
  const sanitizedClassName = className.replace(/^\./, '');

  if (typeof window.$ === 'function') {
    return $(`.${sanitizedClassName}`, context)[0];
  }

  return window.document.getElementsByClassName(sanitizedClassName)[0];
};

export const getElementById = (id, context) => {
  const sanitizedId = id.replace(/^#/, '');

  if (typeof window.$ === 'function') {
    const elements = $(`#${sanitizedId}`, context) || [];

    return elements[0];
  }

  return window.document.getElementById(sanitizedId);
};

const getElement = (selectorOrElement, context) => {
  if (typeof selectorOrElement === 'string') {
    return selectorOrElement.match(/^#/) ? getElementById(selectorOrElement, context) : getElementsByClassName(selectorOrElement, context);
  }

  return selectorOrElement;
};

export const findAbsolutePosition = (element) => {
  let left = 0;
  let top = 0;

  if (element.getBoundingClientRect) {
    const rectangle = element.getBoundingClientRect();
    const x = -(window.scrollX ? window.scrollX : window.pageXOffset);
    const y = -(window.scrollY ? window.scrollY : window.pageYOffset);

    return [rectangle.left - x, rectangle.top - y];
  }

  if (element.offsetParent) {
    let iterator = element;

    do {
      left += iterator.offsetLeft;
      top += iterator.offsetTop;
    } while ((iterator = iterator.offsetParent));
  }

  return [left, top];
};

export const setupEventListener = ({ object, eventName, instance, handler, }) => {
  google.maps.event.addListener(object, eventName, (event = instance) => {
    handler.call(instance, event);

    if (instance.hideContextMenu) {
      instance.hideContextMenu();
    }
  });
};

export const setupEvents = ({ events, object, instance, handlers, }) =>
  events.forEach((eventName) => {
    if (handlers[eventName]) {
      setupEventListener({
        object,
        eventName,
        instance,
        handler: handlers[eventName],
      });
    }
  });

const MAP_EVENTS = [
  'bounds_changed', 'center_changed', 'click', 'dblclick', 'drag',
  'dragend', 'dragstart', 'idle', 'maptypeid_changed',
  'mousemove', 'mouseout', 'mouseover', 'projection_changed',
  'resize', 'tilesloaded', 'zoom_changed'
];
const GMAPS_MENU_ID = 'gmaps_context_menu';

/**
 * GMaps is a wrapper for Google Maps JavaScript API. Its goal is to simplify Google Maps usage by performing complex tasks with fewer lines of code.
 */
class GMaps {
  /**
   * Creates a new GMaps instance, including a Google Maps map.
   * @param {object} options - `options` accepts all the [MapOptions](https://developers.google.com/maps/documentation/javascript/reference#MapOptions) and [events](https://developers.google.com/maps/documentation/javascript/reference#Map) listed in the Google Maps API. Also accepts:
   * @param {number} options.latitude - Latitude of the map's center.
   * @param {number} options.longitude - Longitude of the map's center.
   * @param {google.maps.LatLng} options.center - A `google.maps.LatLng` coordinate indicate the center. If set, `latitude` and `longitude` are ignored.
   * @param {string|HTMLElement} options.element - container where the map will be rendered.
   * @param {function} options.markerClusterer - A function to create a marker cluster. You can use MarkerClusterer or MarkerClustererPlus.
   */
  constructor(baseOptions = {}) {
    if (!window.google || !window.google.maps) {
      throw new Error('Google Maps JavaScript API is required. Check: https://developers.google.com/maps/documentation/javascript/tutorial');
    }

    const { div,
      el = div,
      context,
      element = getElement(el, context),
      lat,
      latitude = lat,
      lng,
      longitude = lng,
      center = new google.maps.LatLng(latitude, longitude),
      zoom = 15,
      mapType = 'roadmap',
      zoomControlOpt = {
        style: 'DEFAULT',
        position: 'TOP_LEFT',
      },
      panControl = true,
      zoomControl = true,
      mapTypeControl = true,
      scaleControl = true,
      streetViewControl = true,
      overviewMapControl = true,
      width,
      height,
      markerClusterer,
      enableNewStyle,
      ...options } = baseOptions;

    const mapTypeId = google.maps.MapTypeId[mapType.toUpperCase()];

    const mapBaseOptions = {
      zoom,
      center,
      mapTypeId,
    };

    const mapControlsOptions = {
      panControl,
      zoomControl,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle[zoomControlOpt.style],
        position: google.maps.ControlPosition[zoomControlOpt.position],
      },
      mapTypeControl,
      scaleControl,
      streetViewControl,
      overviewMapControl,
    };

    const filteredOptions = Object.keys(options).reduce((hash, key) => {
      if (MAP_EVENTS.includes(key)) {
        return hash;
      }

      return { ...hash, [key]: options[key], };
    }, {});

    this.id = Math.ceil(Math.random() * Date.now());

    GMaps.contextMenus[this.id] = {};

    google.maps.visualRefresh = enableNewStyle;

    /**
     * HTML element where the Google Maps map is rendered
     *
     * @type {HTMLElement}
     */
    this.element = typeof element === 'string' ? getElement(element) : element;

    if (!this.element) {
      throw new Error('No element defined. Pass an `element` option in GMaps.');
    }

    this.element.style.width = width || this.element.scrollWidth || this.element.offsetWidth;
    this.element.style.height = height || this.element.scrollHeight || this.element.offsetHeight;

    const mapOptions = {
      ...filteredOptions,
      ...mapBaseOptions,
      ...mapControlsOptions,
    };

    this.map = new google.maps.Map(this.element, mapOptions);
    /**
     * Collection of custom controls in the map UI
     *
     * @type {array}
     */
    this.controls = [];
    /**
     * Collection of map's overlays
     *
     * @type {array}
     */
    this.overlays = [];
    /**
     * Collection of KML/GeoRSS and FusionTable layers
     *
     * @type {array}
     */
    this.layers = [];
    /**
     * Collection of data layers (See {@link GMaps#addLayer})
     *
     * @type {object}
     */
    this.singleLayers = {};
    /**
     * Collection of map's markers
     *
     * @type {array}
     */
    this.markers = [];
    /**
     * Collection of map's lines
     *
     * @type {array}
     */
    this.polylines = [];
    /**
     * Collection of map's routes requested by {@link GMaps#getRoutes}, {@link GMaps#renderRoute}, {@link GMaps#drawRoute}, {@link GMaps#travelRoute} or {@link GMaps#drawSteppedRoute}
     *
     * @type {array}
     */
    this.routes = [];
    /**
     * Collection of map's polygons
     *
     * @type {array}
     */
    this.polygons = [];
    this.infoWindow = null;
    this.overlayElement = null;
    /**
     * Current map's zoom
     *
     * @type {number}
     */
    this.zoom = zoom;

    this.registeredEvents = {};

    if (markerClusterer) {
      /**
       * Marker Clusterer instance
       *
       * @type {object}
       */
      this.markerClusterer = markerClusterer.apply(this, [this.map]);
    }

    google.maps.event.addListener(this.map, 'zoom_changed', this.hideContextMenu);

    setupEvents({ events: MAP_EVENTS, object: this.map, instance: this, handlers: options, });

    google.maps.event.addListener(this.map, 'rightclick', (event) => {
      if (options.rightclick) {
        options.rightclick.call(this, event);
      }

      if (GMaps.contextMenus[this.id].map) {
        this.buildContextMenu('map', event);
      }
    });
  }

  buildContextMenuHTML(control, event) {
    if (!getElementById(GMAPS_MENU_ID)) {
      return;
    }

    const contextMenuElement = getElementById(GMAPS_MENU_ID);
    const options = GMaps.contextMenus[this.id][control];

    const html = Object.keys(options).map(key =>
      `<li><a id="${control}_${key}" href="#">${options[key].title}</a></li>`
    ).join('');

    contextMenuElement.innerHTML = html;

    const contextMenuItems = contextMenuElement.getElementsByTagName('a');

    [...contextMenuItems].forEach((contextMenuItem) => {
      const contextMenuItemListener = (contextMenuItemListenerEvent) => {
        contextMenuItemListenerEvent.preventDefault();

        options[contextMenuItemListenerEvent.target.id.replace(`${control}_`, '')].action.call(this, event);
        this.hideContextMenu();
      };

      google.maps.event.clearListeners(contextMenuItem, 'click');
      google.maps.event.addDomListenerOnce(contextMenuItem, 'click', contextMenuItemListener, false);
    });

    const position = findAbsolutePosition(this.element);
    const left = position[0] + event.pixel.x - 15;
    const top = position[1] + event.pixel.y - 15;

    contextMenuElement.style.left = `${left}px`;
    contextMenuElement.style.top = `${top}px`;
  }

  buildContextMenu(control, event) {
    if (control === 'marker') {
      // eslint-disable-next-line no-param-reassign
      event.pixel = {};

      const overlay = new google.maps.OverlayView();
      overlay.setMap(this.map);

      overlay.draw = () => {
        const projection = overlay.getProjection();
        const position = event.marker.getPosition();

        // eslint-disable-next-line no-param-reassign
        event.pixel = projection.fromLatLngToContainerPixel(position);

        this.buildContextMenuHTML(control, event);
      };
    } else {
      this.buildContextMenuHTML(control, event);
    }

    const contextMenuElement = getElementById(GMAPS_MENU_ID);

    setTimeout(() => {
      contextMenuElement.style.display = 'block';
    }, 0);
  }

  /**
   * Add a context menu for a map or a marker.
   *
   * @param {object} options - The `options` object should contain:
   * * `control` (string): Kind of control the context menu will be attached. Can be "map" or "marker".
   * * `options` (array): A collection of context menu items:
   *   * `title` (string): Item's title shown in the context menu.
   *   * `name` (string): Item's identifier.
   *   * `action` (function): Function triggered after selecting the context menu item.
   */
  setContextMenu(options) {
    GMaps.contextMenus[this.id][options.control] = {};

    Object.keys(options.options).forEach((key) => {
      const option = options.options[key];

      GMaps.contextMenus[this.id][options.control][option.name] = {
        title: option.title,
        action: option.action,
      };
    });

    let contextMenuElement = getElementById(GMAPS_MENU_ID);

    if (!contextMenuElement) {
      contextMenuElement = document.createElement('ul');

      contextMenuElement.id = GMAPS_MENU_ID;
      contextMenuElement.style.display = 'none';
      contextMenuElement.style.position = 'absolute';
      contextMenuElement.style.minWidth = '100px';
      contextMenuElement.style.background = 'white';
      contextMenuElement.style.listStyle = 'none';
      contextMenuElement.style.padding = '8px';
      contextMenuElement.style.boxShadow = '2px 2px 6px #ccc';

      document.body.appendChild(contextMenuElement);
    }

    google.maps.event.addDomListener(contextMenuElement, 'mouseout', (event) => {
      if (!event.relatedTarget || !event.target.contains(event.relatedTarget)) {
        window.setTimeout(() => {
          contextMenuElement.style.display = 'none';
        }, 700);
      }
    }, false);
  }

  /**
   * Hide the current context menu
   */
  hideContextMenu() {
    const contextMenuElement = getElementById(GMAPS_MENU_ID);

    if (contextMenuElement) {
      contextMenuElement.style.display = 'none';
    }
  }

  /**
   * Trigger a `resize` event, useful if you need to repaint the current map (for changes in the viewport or display / hide actions).
   */
  refresh() {
    google.maps.event.trigger(this.map, 'resize');
  }

  /**
   * Adjust the map zoom to include all the coordinates in the `latLngs` array.
   *
   * @param {array} latLngs - Collection of `google.maps.LatLng` objects.
   */
  fitLatLngBounds(latLngs) {
    const bounds = new google.maps.LatLngBounds();

    latLngs.forEach(latLng => bounds.extend(latLng));

    this.map.fitBounds(bounds);
  }

  /**
   * Adjust the map zoom to include all the markers added in the map.
   */
  fitZoom() {
    const latLngs = this.markers
      .filter(marker => marker.visible)
      .map(marker => marker.getPosition());

    this.fitLatLngBounds(latLngs);
  }

  /**
   * Center the map using the `lat` and `lng` coordinates.
   *
   * @param {number} latitude - Latitude of the coordinate. If `latitude` and `longitude` are set, `position` is ignored.
   * @param {number} longitude - Longitude of the coordinate. If `latitude` and `longitude` are set, `position` is ignored.
   * @param {google.maps.LatLng} position - A `google.maps.LatLng` coordinate indicate the position. If set, `latitude` and `longitude` are ignored.
   * @param {function} [callback] - Callback that will be executed after the map is centered.
   */
  setCenter(...args) {
    const latLng = latLngFromArguments(...args);
    const callback = args.slice().pop();

    this.map.panTo(latLng);

    if (typeof callback === 'function') {
      callback.call(this);
    }
  }

  /**
   * Return the HTML element container of the map.
   *
   * @returns {HTMLElement} the element container.
   */
  getElement() {
    return this.element;
  }

  /**
   * Increase the map's zoom.
   *
   * @param {number} [magnitude] - The number of times the map will be zoomed in.
   */
  zoomIn(magnitude = 1) {
    this.zoom = this.map.getZoom() + magnitude;
    this.map.setZoom(this.zoom);
  }

  /**
   * Decrease the map's zoom.
   *
   * @param {number} [magnitude] - The number of times the map will be zoomed out.
   */
  zoomOut(magnitude = 1) {
    this.zoom = this.map.getZoom() - magnitude;
    this.map.setZoom(this.zoom);
  }
}

GMaps.contextMenus = {};

const googleMapsMapMethods = Object.keys(google.maps.Map.prototype)
  .filter(key => (typeof google.maps.Map.prototype[key] === 'function' && !GMaps.prototype[key]));

googleMapsMapMethods.forEach((methodName) => {
  // eslint-disable-next-line func-names
  GMaps.prototype[methodName] = function (...args) {
    return this.map[methodName].apply(this.map, args);
  };
});

export default GMaps;
