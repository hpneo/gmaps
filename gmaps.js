window["GMaps"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/controls.js":
/*!*************************!*\
  !*** ./lib/controls.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./lib/core.js");
var _this = undefined;


/**
 * Extends GMaps to use UI controls.
 * @module Controls
 */

var createControl = function createControl(_ref) {
  var _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      id = _ref.id,
      title = _ref.title,
      classes = _ref.classes,
      content = _ref.content,
      position = _ref.position,
      _ref$events = _ref.events,
      events = _ref$events === void 0 ? {} : _ref$events,
      disableDefaultStyles = _ref.disableDefaultStyles;
  var control = document.createElement('div');
  control.style.cursor = 'pointer';

  if (disableDefaultStyles !== true) {
    control.style.fontFamily = 'Roboto, Arial, sans-serif';
    control.style.fontSize = '11px';
    control.style.boxShadow = 'rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px';
  }

  Object.keys(style).forEach(function (property) {
    control.style = style[property];
  });

  if (id) {
    control.id = id;
  }

  if (title) {
    control.title = title;
  }

  if (classes) {
    control.className = classes;
  }

  if (content) {
    if (typeof content === 'string') {
      control.innerHTML = content;
    } else if (content instanceof window.HTMLElement) {
      control.appendChild(content);
    }
  }

  if (position) {
    control.position = google.maps.ControlPosition[position.toUpperCase()];
  }

  Object.keys(events).forEach(function (eventName) {
    return google.maps.event.addDomListener(control, eventName, function (event) {
      return events[eventName].call(_this, event);
    });
  });
  control.index = 1;
  return control;
};
/**
 * Add a custom control to the map UI.
 * @function addControl
 *
 * @param {object} options - The `options` object should contain:
 * * `style` (object): The keys and values of this object should be valid CSS properties and values.
 * * `id` (string): The HTML id for the custom control.
 * * `classes` (string): A string containing all the HTML classes for the custom control.
 * * `content` (string or HTML element): The content of the custom control.
 * * `position` (string): Any valid [`google.maps.ControlPosition`](https://developers.google.com/maps/documentation/javascript/controls#ControlPositioning) value, in lower or upper case.
 * * `events` (object): The keys of this object should be valid DOM events. The values should be functions.
 * * `disableDefaultStyles` (boolean): If false, removes the default styles for the controls like font (family and size), and box shadow.
 *
 * @returns {HTMLElement}
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addControl = function addControl(options) {
  var control = createControl(options);
  this.controls.push(control);
  this.map.controls[control.position].push(control);
  return control;
};
/**
 * Remove a control from the map. `control` should be a control returned by `addControl()`.
 * @function removeControl
 *
 * @param {HTMLElement} control - One of the controls returned by `addControl()`.
 * @returns {HTMLElement} the removed control.
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeControl = function removeControl(control) {
  var controlIndex = this.controls.indexOf(control);
  this.controls.splice(controlIndex, 1);

  if (control.position >= 0 && controlIndex >= 0) {
    var controlsForPosition = this.map.controls[control.position];
    var controlIndexInCollection = controlsForPosition.indexOf(control);
    controlsForPosition.removeAt(controlIndexInCollection);
  }

  return control;
};

/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./lib/core.js":
/*!*********************!*\
  !*** ./lib/core.js ***!
  \*********************/
/*! exports provided: latLngFromArguments, flattenArray, coordsToLatLngs, arrayToLatLng, getElementById, findAbsolutePosition, setupEventListener, setupEvents, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "latLngFromArguments", function() { return latLngFromArguments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenArray", function() { return flattenArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coordsToLatLngs", function() { return coordsToLatLngs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayToLatLng", function() { return arrayToLatLng; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementById", function() { return getElementById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findAbsolutePosition", function() { return findAbsolutePosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupEventListener", function() { return setupEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupEvents", function() { return setupEvents; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var latLngFromArguments = function latLngFromArguments() {
  if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'number' && typeof (arguments.length <= 1 ? undefined : arguments[1]) === 'number') {
    return new google.maps.LatLng(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1]);
  }

  return arguments.length <= 0 ? undefined : arguments[0];
};
var flattenArray = function flattenArray(array) {
  return array.reduce(function (collection, item) {
    return collection.concat(item);
  }, []);
};
var coordsToLatLngs = function coordsToLatLngs(coordinates, useGeoJSON) {
  var firstCoordinate = useGeoJSON ? coordinates[1] : coordinates[0];
  var secondCoordinate = useGeoJSON ? coordinates[0] : coordinates[1];
  return new google.maps.LatLng(firstCoordinate, secondCoordinate);
};
var arrayToLatLng = function arrayToLatLng(coordinates, useGeoJSON) {
  return coordinates.map(function (coordinate) {
    if (!(coordinate instanceof google.maps.LatLng)) {
      if (coordinate.length && _typeof(coordinate[0]) === 'object') {
        return arrayToLatLng(coordinate, useGeoJSON);
      }

      return coordsToLatLngs(coordinate, useGeoJSON);
    }

    return coordinate;
  });
};

var getElementsByClassName = function getElementsByClassName(className, context) {
  var sanitizedClassName = className.replace(/^\./, '');

  if (typeof window.$ === 'function') {
    return $(".".concat(sanitizedClassName), context)[0];
  }

  return window.document.getElementsByClassName(sanitizedClassName)[0];
};

var getElementById = function getElementById(id, context) {
  var sanitizedId = id.replace(/^#/, '');

  if (typeof window.$ === 'function') {
    var elements = $("#".concat(sanitizedId), context) || [];
    return elements[0];
  }

  return window.document.getElementById(sanitizedId);
};

var getElement = function getElement(selectorOrElement, context) {
  if (typeof selectorOrElement === 'string') {
    return selectorOrElement.match(/^#/) ? getElementById(selectorOrElement, context) : getElementsByClassName(selectorOrElement, context);
  }

  return selectorOrElement;
};

var findAbsolutePosition = function findAbsolutePosition(element) {
  var left = 0;
  var top = 0;

  if (element.getBoundingClientRect) {
    var rectangle = element.getBoundingClientRect();
    var x = -(window.scrollX ? window.scrollX : window.pageXOffset);
    var y = -(window.scrollY ? window.scrollY : window.pageYOffset);
    return [rectangle.left - x, rectangle.top - y];
  }

  if (element.offsetParent) {
    var iterator = element;

    do {
      left += iterator.offsetLeft;
      top += iterator.offsetTop;
    } while (iterator = iterator.offsetParent);
  }

  return [left, top];
};
var setupEventListener = function setupEventListener(_ref) {
  var object = _ref.object,
      eventName = _ref.eventName,
      instance = _ref.instance,
      handler = _ref.handler;
  google.maps.event.addListener(object, eventName, function () {
    var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : instance;
    handler.call(instance, event);

    if (instance.hideContextMenu) {
      instance.hideContextMenu();
    }
  });
};
var setupEvents = function setupEvents(_ref2) {
  var events = _ref2.events,
      object = _ref2.object,
      instance = _ref2.instance,
      handlers = _ref2.handlers;
  return events.forEach(function (eventName) {
    if (handlers[eventName]) {
      setupEventListener({
        object: object,
        eventName: eventName,
        instance: instance,
        handler: handlers[eventName]
      });
    }
  });
};
var MAP_EVENTS = ['bounds_changed', 'center_changed', 'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'idle', 'maptypeid_changed', 'mousemove', 'mouseout', 'mouseover', 'projection_changed', 'resize', 'tilesloaded', 'zoom_changed'];
var GMAPS_MENU_ID = 'gmaps_context_menu';
/**
 * GMaps is a wrapper for Google Maps JavaScript API. Its goal is to simplify Google Maps usage by performing complex tasks with fewer lines of code.
 */

var GMaps =
/*#__PURE__*/
function () {
  /**
   * Creates a new GMaps instance, including a Google Maps map.
   * @param {object} options - `options` accepts all the [MapOptions](https://developers.google.com/maps/documentation/javascript/reference#MapOptions) and [events](https://developers.google.com/maps/documentation/javascript/reference#Map) listed in the Google Maps API. Also accepts:
   * @param {number} options.latitude - Latitude of the map's center.
   * @param {number} options.longitude - Longitude of the map's center.
   * @param {google.maps.LatLng} options.center - A `google.maps.LatLng` coordinate indicate the center. If set, `latitude` and `longitude` are ignored.
   * @param {string|HTMLElement} options.element - container where the map will be rendered.
   * @param {function} options.markerClusterer - A function to create a marker cluster. You can use MarkerClusterer or MarkerClustererPlus.
   */
  function GMaps() {
    var _this = this;

    var baseOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, GMaps);

    if (!window.google || !window.google.maps) {
      throw new Error('Google Maps JavaScript API is required. Check: https://developers.google.com/maps/documentation/javascript/tutorial');
    }

    var div = baseOptions.div,
        _baseOptions$el = baseOptions.el,
        el = _baseOptions$el === void 0 ? div : _baseOptions$el,
        context = baseOptions.context,
        _baseOptions$element = baseOptions.element,
        element = _baseOptions$element === void 0 ? getElement(el, context) : _baseOptions$element,
        lat = baseOptions.lat,
        _baseOptions$latitude = baseOptions.latitude,
        latitude = _baseOptions$latitude === void 0 ? lat : _baseOptions$latitude,
        lng = baseOptions.lng,
        _baseOptions$longitud = baseOptions.longitude,
        longitude = _baseOptions$longitud === void 0 ? lng : _baseOptions$longitud,
        _baseOptions$center = baseOptions.center,
        center = _baseOptions$center === void 0 ? new google.maps.LatLng(latitude, longitude) : _baseOptions$center,
        _baseOptions$zoom = baseOptions.zoom,
        zoom = _baseOptions$zoom === void 0 ? 15 : _baseOptions$zoom,
        _baseOptions$mapType = baseOptions.mapType,
        mapType = _baseOptions$mapType === void 0 ? 'roadmap' : _baseOptions$mapType,
        _baseOptions$zoomCont = baseOptions.zoomControlOpt,
        zoomControlOpt = _baseOptions$zoomCont === void 0 ? {
      style: 'DEFAULT',
      position: 'TOP_LEFT'
    } : _baseOptions$zoomCont,
        _baseOptions$panContr = baseOptions.panControl,
        panControl = _baseOptions$panContr === void 0 ? true : _baseOptions$panContr,
        _baseOptions$zoomCont2 = baseOptions.zoomControl,
        zoomControl = _baseOptions$zoomCont2 === void 0 ? true : _baseOptions$zoomCont2,
        _baseOptions$mapTypeC = baseOptions.mapTypeControl,
        mapTypeControl = _baseOptions$mapTypeC === void 0 ? true : _baseOptions$mapTypeC,
        _baseOptions$scaleCon = baseOptions.scaleControl,
        scaleControl = _baseOptions$scaleCon === void 0 ? true : _baseOptions$scaleCon,
        _baseOptions$streetVi = baseOptions.streetViewControl,
        streetViewControl = _baseOptions$streetVi === void 0 ? true : _baseOptions$streetVi,
        _baseOptions$overview = baseOptions.overviewMapControl,
        overviewMapControl = _baseOptions$overview === void 0 ? true : _baseOptions$overview,
        width = baseOptions.width,
        height = baseOptions.height,
        markerClusterer = baseOptions.markerClusterer,
        enableNewStyle = baseOptions.enableNewStyle,
        options = _objectWithoutProperties(baseOptions, ["div", "el", "context", "element", "lat", "latitude", "lng", "longitude", "center", "zoom", "mapType", "zoomControlOpt", "panControl", "zoomControl", "mapTypeControl", "scaleControl", "streetViewControl", "overviewMapControl", "width", "height", "markerClusterer", "enableNewStyle"]);

    var mapTypeId = google.maps.MapTypeId[mapType.toUpperCase()];
    var mapBaseOptions = {
      zoom: zoom,
      center: center,
      mapTypeId: mapTypeId
    };
    var mapControlsOptions = {
      panControl: panControl,
      zoomControl: zoomControl,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle[zoomControlOpt.style],
        position: google.maps.ControlPosition[zoomControlOpt.position]
      },
      mapTypeControl: mapTypeControl,
      scaleControl: scaleControl,
      streetViewControl: streetViewControl,
      overviewMapControl: overviewMapControl
    };
    var filteredOptions = Object.keys(options).reduce(function (hash, key) {
      if (MAP_EVENTS.includes(key)) {
        return hash;
      }

      return _objectSpread({}, hash, _defineProperty({}, key, options[key]));
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

    var mapOptions = _objectSpread({}, filteredOptions, mapBaseOptions, mapControlsOptions);

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
    setupEvents({
      events: MAP_EVENTS,
      object: this.map,
      instance: this,
      handlers: options
    });
    google.maps.event.addListener(this.map, 'rightclick', function (event) {
      if (options.rightclick) {
        options.rightclick.call(_this, event);
      }

      if (GMaps.contextMenus[_this.id].map) {
        _this.buildContextMenu('map', event);
      }
    });
  }

  _createClass(GMaps, [{
    key: "buildContextMenuHTML",
    value: function buildContextMenuHTML(control, event) {
      var _this2 = this;

      if (!getElementById(GMAPS_MENU_ID)) {
        return;
      }

      var contextMenuElement = getElementById(GMAPS_MENU_ID);
      var options = GMaps.contextMenus[this.id][control];
      var html = Object.keys(options).map(function (key) {
        return "<li><a id=\"".concat(control, "_").concat(key, "\" href=\"#\">").concat(options[key].title, "</a></li>");
      }).join('');
      contextMenuElement.innerHTML = html;
      var contextMenuItems = contextMenuElement.getElementsByTagName('a');

      _toConsumableArray(contextMenuItems).forEach(function (contextMenuItem) {
        var contextMenuItemListener = function contextMenuItemListener(contextMenuItemListenerEvent) {
          contextMenuItemListenerEvent.preventDefault();
          options[contextMenuItemListenerEvent.target.id.replace("".concat(control, "_"), '')].action.call(_this2, event);

          _this2.hideContextMenu();
        };

        google.maps.event.clearListeners(contextMenuItem, 'click');
        google.maps.event.addDomListenerOnce(contextMenuItem, 'click', contextMenuItemListener, false);
      });

      var position = findAbsolutePosition(this.element);
      var left = position[0] + event.pixel.x - 15;
      var top = position[1] + event.pixel.y - 15;
      contextMenuElement.style.left = "".concat(left, "px");
      contextMenuElement.style.top = "".concat(top, "px");
    }
  }, {
    key: "buildContextMenu",
    value: function buildContextMenu(control, event) {
      var _this3 = this;

      if (control === 'marker') {
        // eslint-disable-next-line no-param-reassign
        event.pixel = {};
        var overlay = new google.maps.OverlayView();
        overlay.setMap(this.map);

        overlay.draw = function () {
          var projection = overlay.getProjection();
          var position = event.marker.getPosition(); // eslint-disable-next-line no-param-reassign

          event.pixel = projection.fromLatLngToContainerPixel(position);

          _this3.buildContextMenuHTML(control, event);
        };
      } else {
        this.buildContextMenuHTML(control, event);
      }

      var contextMenuElement = getElementById(GMAPS_MENU_ID);
      setTimeout(function () {
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

  }, {
    key: "setContextMenu",
    value: function setContextMenu(options) {
      var _this4 = this;

      GMaps.contextMenus[this.id][options.control] = {};
      Object.keys(options.options).forEach(function (key) {
        var option = options.options[key];
        GMaps.contextMenus[_this4.id][options.control][option.name] = {
          title: option.title,
          action: option.action
        };
      });
      var contextMenuElement = getElementById(GMAPS_MENU_ID);

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

      google.maps.event.addDomListener(contextMenuElement, 'mouseout', function (event) {
        if (!event.relatedTarget || !event.target.contains(event.relatedTarget)) {
          window.setTimeout(function () {
            contextMenuElement.style.display = 'none';
          }, 700);
        }
      }, false);
    }
    /**
     * Hide the current context menu
     */

  }, {
    key: "hideContextMenu",
    value: function hideContextMenu() {
      var contextMenuElement = getElementById(GMAPS_MENU_ID);

      if (contextMenuElement) {
        contextMenuElement.style.display = 'none';
      }
    }
    /**
     * Trigger a `resize` event, useful if you need to repaint the current map (for changes in the viewport or display / hide actions).
     */

  }, {
    key: "refresh",
    value: function refresh() {
      google.maps.event.trigger(this.map, 'resize');
    }
    /**
     * Adjust the map zoom to include all the coordinates in the `latLngs` array.
     *
     * @param {array} latLngs - Collection of `google.maps.LatLng` objects.
     */

  }, {
    key: "fitLatLngBounds",
    value: function fitLatLngBounds(latLngs) {
      var bounds = new google.maps.LatLngBounds();
      latLngs.forEach(function (latLng) {
        return bounds.extend(latLng);
      });
      this.map.fitBounds(bounds);
    }
    /**
     * Adjust the map zoom to include all the markers added in the map.
     */

  }, {
    key: "fitZoom",
    value: function fitZoom() {
      var latLngs = this.markers.filter(function (marker) {
        return marker.visible;
      }).map(function (marker) {
        return marker.getPosition();
      });
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

  }, {
    key: "setCenter",
    value: function setCenter() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var latLng = latLngFromArguments.apply(void 0, args);
      var callback = args.slice().pop();
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

  }, {
    key: "getElement",
    value: function getElement() {
      return this.element;
    }
    /**
     * Increase the map's zoom.
     *
     * @param {number} [magnitude] - The number of times the map will be zoomed in.
     */

  }, {
    key: "zoomIn",
    value: function zoomIn() {
      var magnitude = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.zoom = this.map.getZoom() + magnitude;
      this.map.setZoom(this.zoom);
    }
    /**
     * Decrease the map's zoom.
     *
     * @param {number} [magnitude] - The number of times the map will be zoomed out.
     */

  }, {
    key: "zoomOut",
    value: function zoomOut() {
      var magnitude = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.zoom = this.map.getZoom() - magnitude;
      this.map.setZoom(this.zoom);
    }
  }]);

  return GMaps;
}();

GMaps.contextMenus = {};
var googleMapsMapMethods = Object.keys(google.maps.Map.prototype).filter(function (key) {
  return typeof google.maps.Map.prototype[key] === 'function' && !GMaps.prototype[key];
});
googleMapsMapMethods.forEach(function (methodName) {
  // eslint-disable-next-line func-names
  GMaps.prototype[methodName] = function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return this.map[methodName].apply(this.map, args);
  };
});
/* harmony default export */ __webpack_exports__["default"] = (GMaps);

/***/ }),

/***/ "./lib/events.js":
/*!***********************!*\
  !*** ./lib/events.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./lib/core.js");
var _arguments = arguments;

/**
 * Extends GMaps to bind and trigger events.
 * @module Events
 */

/**
 * Collection of custom events that can be registered and fired.
 *
 * @type {array}
 */

_core__WEBPACK_IMPORTED_MODULE_0__["default"].customEvents = ['marker_added', 'marker_removed', 'polyline_added', 'polyline_removed', 'polygon_added', 'polygon_removed', 'layer_added', 'layer_removed', 'overlay_map_type_added', 'overlay_map_type_removed', 'overlay_added', 'overlay_removed', 'geolocated', 'geolocation_failed'];
/**
 * Add an event (native or custom) to an object.
 * @function on
 *
 * @param {string} eventName - The name of the event. It can be any of the native events from Google Maps, or the ones described in `GMaps.customEvents`.
 * @param {object} target - The target of the event. It can be a native object from Google Maps, (such as a google.maps.Map, google.maps.Marker, etc.), or a GMaps instance.
 * @param {function} handler - The handler (often called listener) of the event. Is a function that will be executed every time the event is fired.
 *
 * @returns {object}
 */

_core__WEBPACK_IMPORTED_MODULE_0__["default"].on = function (eventName, object, handler) {
  var target = object;

  if (_core__WEBPACK_IMPORTED_MODULE_0__["default"].customEvents.indexOf(eventName) === -1) {
    if (target instanceof _core__WEBPACK_IMPORTED_MODULE_0__["default"]) {
      target = target.map;
    }

    return google.maps.event.addListener(target, eventName, handler);
  }

  var registeredEvent = {
    handler: handler,
    eventName: eventName
  };
  target.registeredEvents[eventName] = target.registeredEvents[eventName] || [];
  target.registeredEvents[eventName].push(registeredEvent);
  return registeredEvent;
};
/**
 * Remove an event (native or custom) to an object.
 * @function off
 *
 * @param {string} eventName - The name of the event. It can be any of the native events from Google Maps, or the ones described in `GMaps.customEvents`.
 * @param {object} target - The target of the event. It can be a native object from Google Maps, (such as a google.maps.Map, google.maps.Marker, etc.), or a GMaps instance.
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].off = function (eventName, object) {
  var target = object;

  if (_core__WEBPACK_IMPORTED_MODULE_0__["default"].customEvents.indexOf(eventName) === -1) {
    if (target instanceof _core__WEBPACK_IMPORTED_MODULE_0__["default"]) {
      target = target.map;
    }

    google.maps.event.clearListeners(target, eventName);
  } else {
    target.registeredEvents[eventName] = [];
  }
};
/**
 * Add a native event that will be removed from the target after it has been executed once.
 * @function once
 *
 * @param {string} eventName - The name of the event. It has to be any of the native events from Google Maps.
 * @param {object} target - The target of the event. It has to be a native object from Google Maps, such as a google.maps.Map, google.maps.Marker, etc.
 * @param {function} handler - The handler (often called listener) of the event. Is a function that will be executed when the event is fired the first time.
 *
 * @returns {object}
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].once = function (eventName, object, handler) {
  var target = object;

  if (_core__WEBPACK_IMPORTED_MODULE_0__["default"].customEvents.indexOf(eventName) === -1) {
    if (target instanceof _core__WEBPACK_IMPORTED_MODULE_0__["default"]) {
      target = target.map;
    }

    return google.maps.event.addListenerOnce(target, eventName, handler);
  }

  return undefined;
};
/**
 * Trigger an event (native or custom) and execute all the handlers registered previously.
 * @function fire
 *
 * @param {string} eventName - The name of the event. It can be any of the native events from Google Maps, or the ones described in `GMaps.customEvents`.
 * @param {object} target - The target of the event. It can be a native object from Google Maps, (such as a google.maps.Map, google.maps.Marker, etc.), or a GMaps instance.
 * @param {object} context - The context for the event handler (represented by `this` keyword inside the handler).
 *
 * @returns {object}
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].fire = function (eventName, object, context) {
  if (_core__WEBPACK_IMPORTED_MODULE_0__["default"].customEvents.indexOf(eventName) === -1) {
    // eslint-disable-next-line no-undef
    var eventArguments = Array.prototype.slice.apply(_arguments).slice(2);
    google.maps.event.trigger(object, eventName, eventArguments);
  } else if (eventName in context.registeredEvents) {
    context.registeredEvents[eventName].forEach(function (registeredEvent) {
      return registeredEvent.handler.call(context, object);
    });
  }
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.on = function on(eventName, handler) {
  return _core__WEBPACK_IMPORTED_MODULE_0__["default"].on(eventName, this, handler);
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.off = function off(eventName) {
  _core__WEBPACK_IMPORTED_MODULE_0__["default"].off(eventName, this);
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.once = function once(eventName, handler) {
  return _core__WEBPACK_IMPORTED_MODULE_0__["default"].once(eventName, this, handler);
};

/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./lib/geofences.js":
/*!**************************!*\
  !*** ./lib/geofences.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./lib/core.js");
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polyfills */ "./lib/polyfills.js");
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_polyfills__WEBPACK_IMPORTED_MODULE_1__);


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

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.checkGeofence = function checkGeofence() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var lagLng = _core__WEBPACK_IMPORTED_MODULE_0__["latLngFromArguments"].apply(void 0, args);
  var fence = args.pop();
  return fence.containsLatLng(lagLng);
};
/**
 * Check if a marker's position is inside or not any of its geofences. It will trigger the `outsideCallback` function for every fence that contains the marker's position.
 * @function checkMarkerGeofence
 *
 * @param {google.maps.Marker} marker - A marker added with `GMaps#addMarker`.
 * @param {function} outsideCallback - A function that will receive two arguments: the `marker` and the current fence.
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.checkMarkerGeofence = function checkMarkerGeofence(marker, outsideCallback) {
  var _this = this;

  if (marker.fences) {
    marker.fences.forEach(function (fence) {
      var position = marker.getPosition();

      if (!_this.checkGeofence(position, fence)) {
        outsideCallback(marker, fence);
      }
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./lib/geometry.js":
/*!*************************!*\
  !*** ./lib/geometry.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./lib/core.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./lib/events.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/**
 * Extends GMaps to use polylines and polygons.
 * @module Geometry
 */

var EVENTS = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];
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
 * @see `options` also accepts any option defined in the [official documentation](https://developers.google.com/maps/documentation/javascript/reference#PolylineOptions) and any event defined in the ["Events" section](https://developers.google.com/maps/documentation/javascript/reference#Polyline).
 *
 * @returns {google.maps.Polyline}
 */

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.drawPolyline = function drawPolyline(baseOptions) {
  var icons = baseOptions.icons,
      strokeColor = baseOptions.strokeColor,
      strokeOpacity = baseOptions.strokeOpacity,
      strokeWeight = baseOptions.strokeWeight,
      geodesic = baseOptions.geodesic,
      _baseOptions$clickabl = baseOptions.clickable,
      clickable = _baseOptions$clickabl === void 0 ? true : _baseOptions$clickabl,
      _baseOptions$editable = baseOptions.editable,
      editable = _baseOptions$editable === void 0 ? false : _baseOptions$editable,
      _baseOptions$visible = baseOptions.visible,
      visible = _baseOptions$visible === void 0 ? true : _baseOptions$visible,
      zIndex = baseOptions.zIndex,
      options = _objectWithoutProperties(baseOptions, ["icons", "strokeColor", "strokeOpacity", "strokeWeight", "geodesic", "clickable", "editable", "visible", "zIndex"]);

  var path = [];

  if (options.path.length) {
    if (options.path[0][0] === undefined) {
      path = _toConsumableArray(options.path);
    } else {
      path = options.path.map(function (latLng) {
        return new google.maps.LatLng(latLng[0], latLng[1]);
      });
    }
  }

  var polylineOptions = _objectSpread({}, options, {
    map: this.map,
    path: path,
    strokeColor: strokeColor,
    strokeOpacity: strokeOpacity,
    strokeWeight: strokeWeight,
    geodesic: geodesic,
    visible: visible,
    clickable: clickable,
    editable: editable,
    icons: icons,
    zIndex: zIndex
  });

  var polyline = new google.maps.Polyline(polylineOptions);
  Object(_core__WEBPACK_IMPORTED_MODULE_0__["setupEvents"])({
    events: EVENTS,
    object: polyline,
    instance: this,
    handlers: options
  });
  this.polylines.push(polyline);
  _core__WEBPACK_IMPORTED_MODULE_0__["default"].fire('polyline_added', polyline, this);
  return polyline;
};
/**
 * Remove a polyline from the map and from the polylines collection. This method also fires a `polyline_removed` event.
 * @function removePolyline
 *
 * @param {google.maps.Polyline} polyline - The polyline to be removed.
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removePolyline = function removePolyline(polyline) {
  var polylineIndex = this.polylines.indexOf(polyline);

  if (polylineIndex >= 0) {
    polyline.setMap(null);
    this.polylines.splice(polylineIndex, 1);
    _core__WEBPACK_IMPORTED_MODULE_0__["default"].fire('polyline_removed', polyline, this);
  }
};
/**
 * Remove all the polylines from the map and clear the polylines collection. This method does not fire a `polyline_removed` event.
 * @function removePolylines
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removePolylines = function removePolylines() {
  this.polylines.forEach(function (polyline) {
    return polyline.setMap(null);
  });
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
 * @see `options` also accepts any option defined in the [official documentation](https://developers.google.com/maps/documentation/javascript/reference#CircleOptions) and any event defined in the ["Events" section](https://developers.google.com/maps/documentation/javascript/reference#Circle).
 *
 * @returns {google.maps.Circle}
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.drawCircle = function drawCircle(baseOptions) {
  var lat = baseOptions.lat,
      _baseOptions$latitude = baseOptions.latitude,
      latitude = _baseOptions$latitude === void 0 ? lat : _baseOptions$latitude,
      lng = baseOptions.lng,
      _baseOptions$longitud = baseOptions.longitude,
      longitude = _baseOptions$longitud === void 0 ? lng : _baseOptions$longitud,
      options = _objectWithoutProperties(baseOptions, ["lat", "latitude", "lng", "longitude"]);

  var _options$center = options.center,
      center = _options$center === void 0 ? new google.maps.LatLng(latitude, longitude) : _options$center;

  var polygonOptions = _objectSpread({}, options, {
    map: this.map,
    center: center
  });

  var polygon = new google.maps.Circle(polygonOptions);
  Object(_core__WEBPACK_IMPORTED_MODULE_0__["setupEvents"])({
    events: EVENTS,
    object: polygon,
    instance: this,
    handlers: options
  });
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
 * @see `options` also accepts any option defined in the [official documentation](https://developers.google.com/maps/documentation/javascript/reference#RectangleOptions) and any event defined in the ["Events" section](https://developers.google.com/maps/documentation/javascript/reference#Rectangle).
 *
 * @returns {google.maps.Rectangle}
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.drawRectangle = function drawRectangle(baseOptions) {
  var bounds = baseOptions.bounds,
      options = _objectWithoutProperties(baseOptions, ["bounds"]);

  var latLngBounds = new google.maps.LatLngBounds(new google.maps.LatLng(bounds[0][0], bounds[0][1]), new google.maps.LatLng(bounds[1][0], bounds[1][1]));

  var polygonOptions = _objectSpread({}, options, {
    bounds: latLngBounds,
    map: this.map
  });

  var polygon = new google.maps.Rectangle(polygonOptions);
  Object(_core__WEBPACK_IMPORTED_MODULE_0__["setupEvents"])({
    events: EVENTS,
    object: polygon,
    instance: this,
    handlers: options
  });
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
 * @see `options` also accepts any option defined in the [official documentation](https://developers.google.com/maps/documentation/javascript/reference#PolygonOptions) and any event defined in the ["Events" section](https://developers.google.com/maps/documentation/javascript/reference#Polygon).
 *
 * @returns {google.maps.Polygon}
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.drawPolygon = function drawPolygon(baseOptions) {
  var _baseOptions$useGeoJS = baseOptions.useGeoJSON,
      useGeoJSON = _baseOptions$useGeoJS === void 0 ? false : _baseOptions$useGeoJS,
      options = _objectWithoutProperties(baseOptions, ["useGeoJSON"]);

  var basePaths = useGeoJSON ? options.paths : [options.paths.slice(0)];
  var paths = [];

  if (basePaths.length) {
    if (basePaths[0].length) {
      paths = Object(_core__WEBPACK_IMPORTED_MODULE_0__["flattenArray"])(basePaths.map(function (path) {
        return Object(_core__WEBPACK_IMPORTED_MODULE_0__["arrayToLatLng"])(path, useGeoJSON);
      }));
    }
  }

  var polygonOptions = _objectSpread({}, options, {
    map: this.map,
    paths: paths
  });

  var polygon = new google.maps.Polygon(polygonOptions);
  Object(_core__WEBPACK_IMPORTED_MODULE_0__["setupEvents"])({
    events: EVENTS,
    object: polygon,
    instance: this,
    handlers: options
  });
  this.polygons.push(polygon);
  _core__WEBPACK_IMPORTED_MODULE_0__["default"].fire('polygon_added', polygon, this);
  return polygon;
};
/**
 * Remove a polygon from the map and from the polygons collection. This method also fires a `polygon_removed` event.
 * @function removePolygon
 *
 * @param {google.maps.Polygon} polygon - The polygon to be removed.
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removePolygon = function removePolygon(polygon) {
  var polygonIndex = this.polygons.indexOf(polygon);

  if (polygonIndex >= 0) {
    polygon.setMap(null);
    this.polygons.splice(polygonIndex, 1);
    _core__WEBPACK_IMPORTED_MODULE_0__["default"].fire('polygon_removed', polygon, this);
  }
};
/**
 * Remove all the polygons from the map and clear the polygons collection. This method does not fire a `polygon_removed` event.
 * @function removePolygons
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removePolygons = function removePolygons() {
  this.polygons.forEach(function (polygon) {
    return polygon.setMap(null);
  });
  this.polygons = [];
};

/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./lib/core.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./lib/events.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls */ "./lib/controls.js");
/* harmony import */ var _geofences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./geofences */ "./lib/geofences.js");
/* harmony import */ var _markers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./markers */ "./lib/markers.js");
/* harmony import */ var _overlays__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overlays */ "./lib/overlays.js");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./geometry */ "./lib/geometry.js");
/* harmony import */ var _layers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layers */ "./lib/layers.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes */ "./lib/routes.js");
/* harmony import */ var _static__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./static */ "./lib/static.js");
/* harmony import */ var _map_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./map_types */ "./lib/map_types.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles */ "./lib/styles.js");
/* harmony import */ var _streetview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./streetview */ "./lib/streetview.js");
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./polyfills */ "./lib/polyfills.js");
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_polyfills__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils */ "./lib/utils.js");















/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./lib/layers.js":
/*!***********************!*\
  !*** ./lib/layers.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./lib/core.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./lib/events.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/**
 * Extends GMaps to use polylines and polygons.
 * @module Layers
 */

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.getFromFusionTables = function getFromFusionTables(baseOptions) {
  var _this = this;

  var _baseOptions$events = baseOptions.events,
      events = _baseOptions$events === void 0 ? {} : _baseOptions$events,
      options = _objectWithoutProperties(baseOptions, ["events"]);

  var layer = new google.maps.FusionTablesLayer(options);
  Object.keys(events).forEach(function (eventName) {
    return Object(_core__WEBPACK_IMPORTED_MODULE_0__["setupEventListener"])({
      object: layer,
      eventName: eventName,
      instance: _this,
      handler: events[eventName]
    });
  });
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


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.loadFromFusionTables = function loadFromFusionTables(options) {
  var layer = this.getFromFusionTables(options);
  layer.setMap(this.map);
  return layer;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.getFromKML = function getFromKML(baseOptions) {
  var _this2 = this;

  var url = baseOptions.url,
      events = baseOptions.events,
      options = _objectWithoutProperties(baseOptions, ["url", "events"]);

  var layer = new google.maps.KmlLayer(url, options);
  Object.keys(events).forEach(function (eventName) {
    return Object(_core__WEBPACK_IMPORTED_MODULE_0__["setupEventListener"])({
      object: layer,
      eventName: eventName,
      instance: _this2,
      handler: events[eventName]
    });
  });
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


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.loadFromKML = function loadFromKML(options) {
  var layer = this.getFromKML(options);
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


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addLayer = function addLayer(layerName) {
  var baseOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var filter = baseOptions.filter,
      click = baseOptions.click,
      search = baseOptions.search,
      nearbySearch = baseOptions.nearbySearch,
      radarSearch = baseOptions.radarSearch,
      textSearch = baseOptions.textSearch,
      options = _objectWithoutProperties(baseOptions, ["filter", "click", "search", "nearbySearch", "radarSearch", "textSearch"]);

  var bounds = options.bounds,
      keyword = options.keyword,
      location = options.location,
      name = options.name,
      radius = options.radius,
      rankBy = options.rankBy,
      types = options.types,
      query = options.query;
  var layer;

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
        var placeSearchRequest = {
          bounds: bounds,
          keyword: keyword,
          location: location,
          name: name,
          radius: radius,
          rankBy: rankBy,
          types: types
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
        var textSearchRequest = {
          bounds: bounds,
          location: location,
          query: query,
          radius: radius
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

    _core__WEBPACK_IMPORTED_MODULE_0__["default"].fire('layer_added', layer, this);
    return layer;
  }
};
/**
 * Remove a layer from the map. If the layer is a FusionTables layer or a KML layer, `removeLayer` also removes the layer from the layers collection and fires a `layer_removed` event.
 * @function removeLayer
 *
 * @param {google.maps.Polygon} polygon - The polygon to be removed.
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeLayer = function removeLayer(layer) {
  if (typeof layer === 'string' && this.singleLayers[layer] !== undefined) {
    this.singleLayers[layer].setMap(null);
    delete this.singleLayers[layer];
  } else {
    var layerIndex = this.layers.indexOf(layer);

    if (layerIndex >= 0) {
      layer.setMap(null);
      this.layers.splice(layerIndex, 1);
      _core__WEBPACK_IMPORTED_MODULE_0__["default"].fire('layer_removed', layer, this);
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./lib/map_types.js":
/*!**************************!*\
  !*** ./lib/map_types.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./lib/core.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./lib/events.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



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

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addMapType = function addMapType(mapTypeId) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var getTileUrl = options.getTileUrl,
      _options$tileSize = options.tileSize,
      tileSize = _options$tileSize === void 0 ? new google.maps.Size(256, 256) : _options$tileSize;

  if (typeof getTileUrl !== 'function') {
    throw new Error("'getTileUrl' function required.");
  }

  var mapType = new google.maps.ImageMapType({
    getTileUrl: getTileUrl,
    tileSize: tileSize
  });
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


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addOverlayMapType = function addOverlayMapType() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var getTile = options.getTile,
      _options$index = options.index,
      index = _options$index === void 0 ? this.map.overlayMapTypes.length : _options$index,
      overlayMapTypeOptions = _objectWithoutProperties(options, ["getTile", "index"]);

  if (typeof getTile !== 'function') {
    throw new Error("'getTile' function required.");
  }

  this.map.overlayMapTypes.insertAt(index, _objectSpread({}, overlayMapTypeOptions, {
    getTile: getTile
  }));
  _core__WEBPACK_IMPORTED_MODULE_0__["default"].fire('overlay_map_type_added', this.map.overlayMapTypes[index], this);
};
/**
 * Remove a overlay map type from the map. This method also fires an `overlay_map_type_removed` event.
 * @function removeOverlayMapType
 *
 * @param {google.maps.Polyline} polyline - The polyline to be removed.
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeOverlayMapType = function removeOverlayMapType(index) {
  var overlayMapType = this.map.overlayMapTypes[index];
  this.map.overlayMapTypes.removeAt(index);
  _core__WEBPACK_IMPORTED_MODULE_0__["default"].fire('overlay_map_type_removed', overlayMapType, this);
};

/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./lib/markers.js":
/*!************************!*\
  !*** ./lib/markers.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./lib/core.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./lib/events.js");
/* harmony import */ var _geofences__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geofences */ "./lib/geofences.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




/**
 * Extends GMaps to use markers.
 * @module Markers
 */

var INFO_WINDOW_EVENTS = ['closeclick', 'content_changed', 'domready', 'position_changed', 'zindex_changed'];
var MARKER_EVENTS = ['animation_changed', 'clickable_changed', 'cursor_changed', 'draggable_changed', 'flat_changed', 'icon_changed', 'position_changed', 'shadow_changed', 'shape_changed', 'title_changed', 'visible_changed', 'zindex_changed'];
var MARKER_MOUSE_EVENTS = ['dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mouseout', 'mouseover', 'mouseup'];

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.createMarker = function createMarker(baseOptions) {
  var _this = this;

  var self = this;

  var lat = baseOptions.lat,
      _baseOptions$latitude = baseOptions.latitude,
      latitude = _baseOptions$latitude === void 0 ? lat : _baseOptions$latitude,
      lng = baseOptions.lng,
      _baseOptions$longitud = baseOptions.longitude,
      longitude = _baseOptions$longitud === void 0 ? lng : _baseOptions$longitud,
      position = baseOptions.position,
      details = baseOptions.details,
      fences = baseOptions.fences,
      outside = baseOptions.outside,
      infoWindow = baseOptions.infoWindow,
      options = _objectWithoutProperties(baseOptions, ["lat", "latitude", "lng", "longitude", "position", "details", "fences", "outside", "infoWindow"]);

  if (latitude === undefined && longitude === undefined && position === undefined) {
    throw new Error('No latitude or longitude defined.');
  }

  var markerOptions = _objectSpread({}, options, {
    position: position || new google.maps.LatLng(latitude, longitude),
    map: null
  });

  var marker = new google.maps.Marker(markerOptions);
  marker.fences = fences;

  if (infoWindow) {
    marker.infoWindow = new google.maps.InfoWindow(infoWindow);
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["setupEvents"])({
      events: INFO_WINDOW_EVENTS,
      object: marker.infoWindow,
      instance: this,
      handlers: infoWindow
    });
  }

  Object(_core__WEBPACK_IMPORTED_MODULE_0__["setupEvents"])({
    events: MARKER_EVENTS,
    object: marker,
    instance: this,
    handlers: options
  });
  MARKER_MOUSE_EVENTS.forEach(function (eventName) {
    if (options[eventName]) {
      google.maps.event.addListener(marker, eventName, function () {
        var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this;

        if (!event.pixel) {
          // eslint-disable-next-line no-param-reassign
          event.pixel = _this.map.getProjection().fromLatLngToPoint(event.latLng);
        }

        options[eventName].call(_this, event);
      });
    }
  });
  google.maps.event.addListener(marker, 'click', function onMarkerClick(event) {
    this.details = details;

    if (options.click) {
      options.click.call(this, event);
    }

    if (marker.infoWindow) {
      self.hideInfoWindows();
      marker.infoWindow.open(self.map, marker);
    }
  });
  google.maps.event.addListener(marker, 'rightclick', function onMarkerRightClick(event) {
    // eslint-disable-next-line no-param-reassign
    event.marker = this;

    if (options.rightclick) {
      options.rightclick.call(this, event);
    }

    if (_core__WEBPACK_IMPORTED_MODULE_0__["default"].contextMenus[self.id].marker !== undefined) {
      self.buildContextMenu('marker', event);
    }
  });

  if (marker.fences) {
    google.maps.event.addListener(marker, 'dragend', function onMarkerDragEnd() {
      self.checkMarkerGeofence(this, outside);
    });
  }

  return marker;
};
/**
 * Draw a marker in the Map and add it to the markers collection. This method also fires a `marker_added` event.
 * @function addMarker
 *
 * @param {object} options - The `options` object should contain:
 * @param {number} options.latitude - Latitude of the position. If `latitude` and `longitude` are set, `position` is ignored.
 * @param {number} options.longitude - Longitude of the position. If `latitude` and `longitude` are set, `position` is ignored.
 * @param {google.maps.LatLng} options.position - A `google.maps.LatLng` coordinate indicate the position. If set, `latitude` and `longitude` are ignored.
 * @param {object} options.details - Custom object with extra data.
 * @param {array} options.fences - Collection of `google.maps.Polygon` objects that defines a marker's boundaries or geofences.
 * @param {function} options.outside - Callback fired when the marker is oustide any of its fences.
 * @param {object} options.infoWindow - Object with all options defined in [google.maps.InfoWindowOptions](https://developers.google.com/maps/documentation/javascript/reference#InfoWindowOptions).
 *
 * @see `options` also accepts any option defined in the [official documentation](https://developers.google.com/maps/documentation/javascript/reference#MarkerOptions) and any event defined in the ["Events" section](https://developers.google.com/maps/documentation/javascript/reference#Marker).
 *
 * @returns {google.maps.Marker}
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addMarker = function addMarker(options) {
  // eslint-disable-next-line camelcase
  var gm_accessors_ = options.gm_accessors_,
      lat = options.lat,
      _options$latitude = options.latitude,
      latitude = _options$latitude === void 0 ? lat : _options$latitude,
      lng = options.lng,
      _options$longitude = options.longitude,
      longitude = _options$longitude === void 0 ? lng : _options$longitude,
      position = options.position;
  var marker; // eslint-disable-next-line camelcase

  if (gm_accessors_) {
    // Native google.maps.Marker object
    marker = options;
  } else if (latitude && longitude || position) {
    marker = this.createMarker(options);
  } else {
    throw new Error('No latitude or longitude defined.');
  }

  marker.setMap(this.map);

  if (this.markerClusterer) {
    this.markerClusterer.addMarker(marker);
  }

  this.markers.push(marker);
  _core__WEBPACK_IMPORTED_MODULE_0__["default"].fire('marker_added', marker, this);
  return marker;
};
/**
 * Draw a collection of markers into the Map. This method fires a `marker_added` event for each marker added.
 * @function addMarkers
 *
 * @param {array} markers - An array of `options` objects, which accepts the same options as in {@link GMaps#addMarker}.
 *
 * @returns {array}
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addMarkers = function addMarkers(markers) {
  var _this2 = this;

  markers.forEach(function (marker) {
    return _this2.addMarker(marker);
  });
  return this.markers;
};
/**
 * Hide all markers' InfoWindows.
 * @function hideInfoWindows
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hideInfoWindows = function hideInfoWindows() {
  this.markers.forEach(function (marker) {
    if (marker.infoWindow) {
      marker.infoWindow.close();
    }
  });
};
/**
 * Remove a marker from the map and from the markers collection. This method also fires a `marker_removed` event.
 * @function removeMarker
 *
 * @param {google.maps.Polygon} polygon - The polygon to be removed.
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeMarker = function removeMarker(marker) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$fireEvent = options.fireEvent,
      fireEvent = _options$fireEvent === void 0 ? true : _options$fireEvent;
  var markerIndex = this.markers.indexOf(marker);

  if (markerIndex >= 0) {
    marker.setMap(null);
    this.markers.splice(markerIndex, 1);

    if (this.markerClusterer) {
      this.markerClusterer.removeMarker(marker);
    }

    if (fireEvent) {
      _core__WEBPACK_IMPORTED_MODULE_0__["default"].fire('marker_removed', marker, this);
    }
  }

  return marker;
};
/**
 * Remove a group of markers (or all of them) from the Map and from the markers collection. This method does not fire a `marker_removed` event.
 * @function removeMarkers
 *
 * @param {array} markers - The markers to be removed. If not set, it removes all markers in the Map.
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeMarkers = function removeMarkers() {
  var _this3 = this;

  var markers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.markers;
  markers.forEach(function (marker) {
    return _this3.removeMarker(marker, {
      fireEvent: false
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./lib/overlays.js":
/*!*************************!*\
  !*** ./lib/overlays.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./lib/core.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./lib/events.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/**
 * Extends GMaps to use custom overlays.
 * @module Overlays
 */

var STOP_PROPAGATION_EVENTS = ['contextmenu', 'DOMMouseScroll', 'dblclick', 'mousedown'];
/**
 * Draw an overlay in the Map and add it to the overlays collection. This method also fires a `overlay_added` event.
 * @function drawOverlay
 *
 * @param {object} options - The `options` object should contain:
 * @param {boolean} options.autoShow - Show the overlay inmediatly after being created.
 * @param {number} options.latitude - Latitude of the coordinate where the overlay is placed. If `latitude` and `longitude` are set, `position`is ignored.
 * @param {number} options.longitude - Longitude of the coordinate where the overlay is placed. If `latitude` and `longitude` are set, `position`is ignored.
 * @param {google.maps.LatLng} options.position - A `google.maps.LatLng` coordinate where the overlay is placed. If set, `latitude` and `longitude` are ignored.
 * @param {string} options.content - HTML that will be drawn in the overlay.
 * @param {string} options.layer - Id of any of the layers defined in [google.maps.MapPanes](https://developers.google.com/maps/documentation/javascript/reference#MapPanes):
 *   * floatPane
 *   * floatShadow
 *   * mapPane
 *   * overlayImage
 *   * overlayLayer
 *   * overlayMouseTarget
 *   * overlayShadow
 * @param {string} options.verticalAlign - Vertical align of the overlay (where the center is the coordinate `latitude`, `longitude`):
 *   * top
 *   * middle
 *   * bottom
 * @param {string} options.horizontalAlign - Horizontal align of the overlay (where the center is the coordinate `latitude`, `longitude`):
 *   * left
 *   * center
 *   * right
 * @param {number} options.horizontalOffset - Horizontal offset in pixels of the overlay.
 * @param {number} options.verticalOffset - Vertical offset in pixels of the overlay.
 *
 * @returns {google.maps.OverlayView}
 */

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.drawOverlay = function drawOverlay(baseOptions) {
  var self = this;
  var overlay = new google.maps.OverlayView();

  var _baseOptions$autoShow = baseOptions.autoShow,
      autoShow = _baseOptions$autoShow === void 0 ? true : _baseOptions$autoShow,
      lat = baseOptions.lat,
      _baseOptions$latitude = baseOptions.latitude,
      latitude = _baseOptions$latitude === void 0 ? lat : _baseOptions$latitude,
      lng = baseOptions.lng,
      _baseOptions$longitud = baseOptions.longitude,
      longitude = _baseOptions$longitud === void 0 ? lng : _baseOptions$longitud,
      _baseOptions$position = baseOptions.position,
      position = _baseOptions$position === void 0 ? new google.maps.LatLng(latitude, longitude) : _baseOptions$position,
      _baseOptions$layer = baseOptions.layer,
      layer = _baseOptions$layer === void 0 ? 'overlayLayer' : _baseOptions$layer,
      _baseOptions$horizont = baseOptions.horizontalOffset,
      horizontalOffset = _baseOptions$horizont === void 0 ? 0 : _baseOptions$horizont,
      _baseOptions$vertical = baseOptions.verticalOffset,
      verticalOffset = _baseOptions$vertical === void 0 ? 0 : _baseOptions$vertical,
      verticalAlign = baseOptions.verticalAlign,
      horizontalAlign = baseOptions.horizontalAlign,
      options = _objectWithoutProperties(baseOptions, ["autoShow", "lat", "latitude", "lng", "longitude", "position", "layer", "horizontalOffset", "verticalOffset", "verticalAlign", "horizontalAlign"]);

  overlay.setMap(this.map);

  overlay.onAdd = function onAdd() {
    var element = document.createElement('div');
    element.style.borderStyle = 'none';
    element.style.borderWidth = '0px';
    element.style.position = 'absolute';
    element.style.zIndex = 100;
    element.innerHTML = options.content;
    overlay.element = element;
    var panes = this.getPanes();
    var overlayLayer = panes[layer];
    overlayLayer.appendChild(element);
    STOP_PROPAGATION_EVENTS.forEach(function (eventName) {
      return google.maps.event.addDomListener(element, eventName, function (event) {
        if (window.navigator.userAgent.toLowerCase().indexOf('msie') !== -1 && document.all) {
          // eslint-disable-next-line no-param-reassign
          event.cancelBubble = true; // eslint-disable-next-line no-param-reassign

          event.returnValue = false;
        } else {
          event.stopPropagation();
        }
      });
    });

    if (options.click) {
      panes.overlayMouseTarget.appendChild(overlay.element);
      google.maps.event.addDomListener(overlay.element, 'click', function () {
        options.click.call(self, overlay);
      });
    }

    google.maps.event.trigger(this, 'ready');
  };

  overlay.draw = function draw() {
    var projection = this.getProjection();
    var pixel = projection.fromLatLngToDivPixel(position);
    var element = overlay.element;
    var content = element.children[0];
    var contentHeight = content.clientHeight;
    var contentWidth = content.clientWidth;

    switch (verticalAlign) {
      case 'top':
        element.style.top = "".concat(pixel.y - contentHeight + verticalOffset, "px");
        break;

      default:
      case 'middle':
        element.style.top = "".concat(pixel.y - contentHeight / 2 + verticalOffset, "px");
        break;

      case 'bottom':
        element.style.top = "".concat(pixel.y + verticalOffset, "px");
        break;
    }

    switch (horizontalAlign) {
      case 'left':
        element.style.left = "".concat(pixel.x - contentWidth + horizontalOffset, "px");
        break;

      default:
      case 'center':
        element.style.left = "".concat(pixel.x - contentWidth / 2 + horizontalOffset, "px");
        break;

      case 'right':
        element.style.left = "".concat(pixel.x + horizontalOffset, "px");
        break;
    }

    element.style.display = autoShow ? 'block' : 'none';

    if (!autoShow) {
      options.show.call(this, element);
    }
  };

  overlay.onRemove = function onRemove() {
    var element = overlay.element;

    if (options.remove) {
      options.remove.call(this, element);
    } else {
      element.parentNode.removeChild(element);
      overlay.element = null;
    }
  };

  this.overlays.push(overlay);
  _core__WEBPACK_IMPORTED_MODULE_0__["default"].fire('overlay_added', overlay, this);
  return overlay;
};
/**
 * Remove an overlay from the map and from the overlays collection. This method also fires a `overlay_removed` event.
 * @function removeOverlay
 *
 * @param {google.maps.OverlayView} overlay - The overlay to be removed.
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeOverlay = function removeOverlay(overlay) {
  var overlayIndex = this.overlays.indexOf(overlay);

  if (overlayIndex >= 0) {
    overlay.setMap(null);
    this.overlays.splice(overlayIndex, 1);
    _core__WEBPACK_IMPORTED_MODULE_0__["default"].fire('overlay_removed', overlay, this);
  }
};
/**
 * Remove all the overlays from the map and clear the overlays collection. This method does not fire a `overlay_removed` event.
 * @function removeOverlays
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeOverlays = function removeOverlays() {
  this.overlays.forEach(function (overlay) {
    return overlay.setMap(null);
  });
  this.overlays = [];
};

/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./lib/polyfills.js":
/*!**************************!*\
  !*** ./lib/polyfills.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable */
if (_typeof(window.google) === 'object' && window.google.maps) {
  //==========================
  // Polygon containsLatLng
  // https://github.com/tparkin/Google-Maps-Point-in-Polygon
  // Poygon getBounds extension - google-maps-extensions
  // http://code.google.com/p/google-maps-extensions/source/browse/google.maps.Polygon.getBounds.js
  if (!google.maps.Polygon.prototype.getBounds) {
    google.maps.Polygon.prototype.getBounds = function () {
      var bounds = new google.maps.LatLngBounds();
      var paths = this.getPaths();
      var path;

      for (var p = 0; p < paths.getLength(); p++) {
        path = paths.getAt(p);

        for (var i = 0; i < path.getLength(); i++) {
          bounds.extend(path.getAt(i));
        }
      }

      return bounds;
    };
  }

  if (!google.maps.Polygon.prototype.containsLatLng) {
    // Polygon containsLatLng - method to determine if a latLng is within a polygon
    google.maps.Polygon.prototype.containsLatLng = function (latLng) {
      // Exclude points outside of bounds as there is no way they are in the poly
      var bounds = this.getBounds();

      if (bounds !== null && !bounds.contains(latLng)) {
        return false;
      } // Raycast point in polygon method


      var inPoly = false;
      var numPaths = this.getPaths().getLength();

      for (var p = 0; p < numPaths; p++) {
        var path = this.getPaths().getAt(p);
        var numPoints = path.getLength();
        var j = numPoints - 1;

        for (var i = 0; i < numPoints; i++) {
          var vertex1 = path.getAt(i);
          var vertex2 = path.getAt(j);

          if (vertex1.lng() < latLng.lng() && vertex2.lng() >= latLng.lng() || vertex2.lng() < latLng.lng() && vertex1.lng() >= latLng.lng()) {
            if (vertex1.lat() + (latLng.lng() - vertex1.lng()) / (vertex2.lng() - vertex1.lng()) * (vertex2.lat() - vertex1.lat()) < latLng.lat()) {
              inPoly = !inPoly;
            }
          }

          j = i;
        }
      }

      return inPoly;
    };
  }

  if (!google.maps.Circle.prototype.containsLatLng) {
    google.maps.Circle.prototype.containsLatLng = function (latLng) {
      if (google.maps.geometry) {
        return google.maps.geometry.spherical.computeDistanceBetween(this.getCenter(), latLng) <= this.getRadius();
      } else {
        return true;
      }
    };
  }

  google.maps.Rectangle.prototype.containsLatLng = function (latLng) {
    return this.getBounds().contains(latLng);
  };

  google.maps.LatLngBounds.prototype.containsLatLng = function (latLng) {
    return this.contains(latLng);
  };

  google.maps.Marker.prototype.setFences = function (fences) {
    this.fences = fences;
  };

  google.maps.Marker.prototype.addFence = function (fence) {
    this.fences.push(fence);
  };

  google.maps.Marker.prototype.getId = function () {
    return this['__gm_id'];
  };
} //==========================
// Array indexOf
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/indexOf


if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement
  /*, fromIndex */
  ) {
    "use strict";

    if (this == null) {
      throw new TypeError();
    }

    var t = Object(this);
    var len = t.length >>> 0;

    if (len === 0) {
      return -1;
    }

    var n = 0;

    if (arguments.length > 1) {
      n = Number(arguments[1]);

      if (n != n) {
        // shortcut for verifying if it's NaN
        n = 0;
      } else if (n != 0 && n != Infinity && n != -Infinity) {
        n = (n > 0 || -1) * Math.floor(Math.abs(n));
      }
    }

    if (n >= len) {
      return -1;
    }

    var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);

    for (; k < len; k++) {
      if (k in t && t[k] === searchElement) {
        return k;
      }
    }

    return -1;
  };
}

/***/ }),

/***/ "./lib/routes.js":
/*!***********************!*\
  !*** ./lib/routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./lib/core.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


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
 * @see `options` also accepts any option defined in the [official documentation](https://developers.google.com/maps/documentation/javascript/reference#DirectionsRequest).
 */

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.getRoutes = function getRoutes(baseOptions) {
  var origin = baseOptions.origin,
      destination = baseOptions.destination,
      _baseOptions$travelMo = baseOptions.travelMode,
      travelMode = _baseOptions$travelMo === void 0 ? 'walking' : _baseOptions$travelMo,
      _baseOptions$unitSyst = baseOptions.unitSystem,
      unitSystem = _baseOptions$unitSyst === void 0 ? 'metric' : _baseOptions$unitSyst,
      _baseOptions$avoidHig = baseOptions.avoidHighways,
      avoidHighways = _baseOptions$avoidHig === void 0 ? false : _baseOptions$avoidHig,
      _baseOptions$avoidTol = baseOptions.avoidTolls,
      avoidTolls = _baseOptions$avoidTol === void 0 ? false : _baseOptions$avoidTol,
      _baseOptions$optimize = baseOptions.optimizeWaypoints,
      optimizeWaypoints = _baseOptions$optimize === void 0 ? false : _baseOptions$optimize,
      _baseOptions$waypoint = baseOptions.waypoints,
      waypoints = _baseOptions$waypoint === void 0 ? [] : _baseOptions$waypoint,
      callback = baseOptions.callback,
      error = baseOptions.error,
      options = _objectWithoutProperties(baseOptions, ["origin", "destination", "travelMode", "unitSystem", "avoidHighways", "avoidTolls", "optimizeWaypoints", "waypoints", "callback", "error"]);

  var travelModeId = google.maps.TravelMode[travelMode.toUpperCase()];
  var unitSystemId = google.maps.TravelMode[unitSystem.toUpperCase()];

  var requestOptions = _objectSpread({}, options, {
    travelMode: travelModeId,
    unitSystem: unitSystemId,
    avoidHighways: avoidHighways,
    avoidTolls: avoidTolls,
    optimizeWaypoints: optimizeWaypoints,
    waypoints: waypoints,
    origin: typeof origin === 'string' ? origin : _core__WEBPACK_IMPORTED_MODULE_0__["latLngFromArguments"].apply(void 0, _toConsumableArray(origin)),
    destination: typeof destination === 'string' ? destination : _core__WEBPACK_IMPORTED_MODULE_0__["latLngFromArguments"].apply(void 0, _toConsumableArray(destination))
  });

  var service = new google.maps.DirectionsService();
  service.route(requestOptions, function (result, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      if (callback) {
        callback(_toConsumableArray(result.routes), result, status);
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


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeRoutes = function removeRoutes() {
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


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.getElevations = function getElevations(baseOptions) {
  var _baseOptions$path = baseOptions.path,
      path = _baseOptions$path === void 0 ? false : _baseOptions$path,
      _baseOptions$samples = baseOptions.samples,
      samples = _baseOptions$samples === void 0 ? 256 : _baseOptions$samples,
      callback = baseOptions.callback,
      options = _objectWithoutProperties(baseOptions, ["path", "samples", "callback"]);

  var locations = options.locations || [];

  if (locations.length > 0) {
    if (locations[0].length > 0) {
      locations = Object(_core__WEBPACK_IMPORTED_MODULE_0__["flattenArray"])([locations].map(function (location) {
        return Object(_core__WEBPACK_IMPORTED_MODULE_0__["arrayToLatLng"])(location, false);
      }));
    }
  }

  var service = new google.maps.ElevationService();

  if (!path) {
    var requestOptions = _objectSpread({}, options, {
      locations: locations,
      path: path,
      samples: samples
    });

    service.getElevationForLocations(requestOptions, function (result, status) {
      if (typeof callback === 'function') {
        callback(result, status);
      }
    });
  } else {
    var _requestOptions = {
      path: locations,
      samples: samples
    };
    service.getElevationAlongPath(_requestOptions, function (result, status) {
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


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.cleanRoute = _core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removePolylines;

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.renderRoute = function renderRoute(options, baseRenderOptions) {
  var panel = typeof baseRenderOptions.panel === 'string' ? document.getElementById(baseRenderOptions.panel.replace('#', '')) : baseRenderOptions.panel;

  var renderOptions = _objectSpread({}, baseRenderOptions, {
    panel: panel,
    map: this.map
  });

  var display = new google.maps.DirectionsRenderer(renderOptions);
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
    callback: function callback(_, response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        display.setDirections(response);
      }
    }
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


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.drawRoute = function drawRoute(options) {
  var self = this;
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
    callback: function callback(routes) {
      if (routes.length > 0) {
        var lastRoute = routes[routes.length - 1];
        var polylineOptions = {
          path: lastRoute.overview_path,
          strokeColor: options.strokeColor,
          strokeOpacity: options.strokeOpacity,
          strokeWeight: options.strokeWeight
        };

        if (options.icons) {
          polylineOptions.icons = options.icons;
        }

        self.drawPolyline(polylineOptions);

        if (options.callback) {
          options.callback(lastRoute);
        }
      }
    }
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


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.travelRoute = function travelRoute(options) {
  if (options.origin && options.destination) {
    this.getRoutes({
      origin: options.origin,
      destination: options.destination,
      travelMode: options.travelMode,
      waypoints: options.waypoints,
      unitSystem: options.unitSystem,
      error: options.error,
      callback: function callback(routes) {
        if (routes.length === 0) {
          return;
        }

        var lastRoute = routes[routes.length - 1]; // start callback

        if (options.start) {
          options.start(lastRoute);
        } // step callback


        if (options.step) {
          if (lastRoute.legs.length > 0) {
            var steps = lastRoute.legs[0].steps;
            steps.forEach(function (step, index) {
              // eslint-disable-next-line no-param-reassign
              step.step_number = index; // eslint-disable-next-line no-param-reassign

              step.stepNumber = index;
              options.step(step, steps.length - 1);
            });
          }
        } // end callback


        if (options.end) {
          options.end(lastRoute);
        }
      }
    });
  } else if (options.route) {
    if (options.route.legs.length > 0) {
      var steps = options.route.legs[0].steps;
      steps.forEach(function (step, index) {
        // eslint-disable-next-line no-param-reassign
        step.step_number = index; // eslint-disable-next-line no-param-reassign

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


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.drawSteppedRoute = function drawSteppedRoute(options) {
  var self = this;
  this.travelRoute(_objectSpread({}, options, {
    step: function step(routeStep, stepsCount) {
      var polylineOptions = {
        path: routeStep.path,
        strokeColor: options.strokeColor,
        strokeOpacity: options.strokeOpacity,
        strokeWeight: options.strokeWeight
      };

      if (options.icons) {
        polylineOptions.icons = options.icons;
      }

      self.drawPolyline(polylineOptions);
      options.step(routeStep, stepsCount);
    }
  })); // if (options.origin && options.destination) {
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

var Route =
/*#__PURE__*/
function () {
  function Route(options) {
    _classCallCheck(this, Route);

    this.origin = options.origin;
    this.destination = options.destination;
    this.waypoints = options.waypoints;
    this.map = options.map;
    this.route = options.route;
    this.step_count = 0;
    this.steps = this.route.legs[0].steps;
    this.steps_length = this.steps.length;
    var polylineOptions = {
      path: new google.maps.MVCArray(),
      strokeColor: options.strokeColor,
      strokeOpacity: options.strokeOpacity,
      strokeWeight: options.strokeWeight
    };

    if (options.icons) {
      polylineOptions.icons = options.icons;
    }

    this.polyline = this.map.drawPolyline(polylineOptions).getPath();
  }

  _createClass(Route, [{
    key: "getRoute",
    value: function getRoute(options) {
      var self = this;
      this.map.getRoutes({
        origin: this.origin,
        destination: this.destination,
        travelMode: options.travelMode,
        waypoints: this.waypoints || [],
        error: options.error,
        callback: function callback(routes) {
          // eslint-disable-next-line prefer-destructuring
          self.route = routes[0];

          if (options.callback) {
            options.callback.call(self);
          }
        }
      });
    }
  }, {
    key: "back",
    value: function back() {
      var _this = this;

      if (this.step_count > 0) {
        this.step_count -= 1;
        var path = this.route.legs[0].steps[this.step_count].path;
        path.forEach(function () {
          return _this.polyline.pop();
        });
      }
    }
  }, {
    key: "forward",
    value: function forward() {
      var _this2 = this;

      if (this.step_count < this.steps_length) {
        var path = this.route.legs[0].steps[this.step_count].path;
        path.forEach(function (coordinate) {
          return _this2.polyline.push(coordinate);
        });
        this.step_count += 1;
      }
    }
  }]);

  return Route;
}();

_core__WEBPACK_IMPORTED_MODULE_0__["default"].Route = Route;
/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./lib/static.js":
/*!***********************!*\
  !*** ./lib/static.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./lib/core.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var parseColor = function parseColor(color, opacity) {
  var parsedColor;

  if (color[0] === '#') {
    parsedColor = color.replace('#', '0x');

    if (opacity) {
      // eslint-disable-next-line no-param-reassign
      opacity = Math.min(1, Math.max(parseFloat(opacity), 0));

      if (opacity === 0) {
        return '0x00000000';
      } // eslint-disable-next-line no-param-reassign


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


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toImage = function toImage() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$size = options.size,
      size = _options$size === void 0 ? [this.element.clientWidth, this.element.clientHeight] : _options$size,
      _options$zoom = options.zoom,
      zoom = _options$zoom === void 0 ? this.getZoom() : _options$zoom;
  var staticMapOptions = {
    size: size,
    zoom: zoom,
    latitude: this.getCenter().lat(),
    longitude: this.getCenter().lng(),
    markers: this.markers.map(function (marker) {
      return {
        latitude: marker.getPosition().lat(),
        longitude: marker.getPosition().lng()
      };
    })
  };

  if (this.polylines.length > 0) {
    var polyline = this.polylines[0];
    staticMapOptions.polyline = {
      path: google.maps.geometry.encoding.encodePath(polyline.getPath()),
      strokeColor: polyline.strokeColor,
      strokeOpacity: polyline.strokeOpacity,
      strokeWeight: polyline.strokeWeight
    };
  }

  return _core__WEBPACK_IMPORTED_MODULE_0__["default"].staticMapURL(staticMapOptions);
};

var buildMarkerParameters = function buildMarkerParameters(marker) {
  var markerParameters = [];

  var address = marker.address,
      lat = marker.lat,
      _marker$latitude = marker.latitude,
      latitude = _marker$latitude === void 0 ? lat : _marker$latitude,
      lng = marker.lng,
      _marker$longitude = marker.longitude,
      longitude = _marker$longitude === void 0 ? lng : _marker$longitude,
      size = marker.size,
      icon = marker.icon,
      color = marker.color,
      label = marker.label,
      markerOptions = _objectWithoutProperties(marker, ["address", "lat", "latitude", "lng", "longitude", "size", "icon", "color", "label"]);

  var location = address || "".concat(latitude, ",").concat(longitude);

  if (size) {
    markerParameters.push("size:".concat(size));
  }

  if (icon) {
    markerParameters.push("icon:".concat(encodeURI(icon)));
  }

  if (color) {
    markerParameters.push("color:".concat(color.replace('#', '0x')));
  }

  if (label) {
    markerParameters.push("label:".concat(label[0].toUpperCase()));
  }

  Object.keys(markerOptions).forEach(function (key) {
    return markerParameters.push("".concat(key, ":").concat(markerParameters[key]));
  });
  markerParameters.push(location);
  return markerParameters;
};

var buildPathParameters = function buildPathParameters(polyline) {
  var path = polyline.path;
  var polylineParameters = [];

  if (polyline.strokeWeight) {
    polylineParameters.push("weight:".concat(parseInt(polyline.strokeWeight, 10)));
  }

  if (polyline.strokeColor) {
    polylineParameters.push("color:".concat(parseColor(polyline.strokeColor, polyline.strokeOpacity)));
  }

  if (polyline.fillColor) {
    polylineParameters.push("fillcolor:".concat(parseColor(polyline.fillColor, polyline.fillOpacity)));
  }

  if (path.join) {
    path.forEach(function (coordinates) {
      return polylineParameters.push(coordinates.join(','));
    });
  } else {
    polylineParameters.push("enc:".concat(path));
  }

  return polylineParameters;
};

var buildStyleParameters = function buildStyleParameters(style) {
  var styleParameters = [];

  if (style.featureType) {
    styleParameters.push("feature:".concat(style.featureType.toLowerCase()));
  }

  if (style.elementType) {
    styleParameters.push("element:".concat(style.elementType.toLowerCase()));
  }

  if (style.stylers.length) {
    style.stylers.forEach(function (styler) {
      Object.keys(styler).forEach(function (key) {
        var value = key === 'hue' || key === 'color' ? styler[key].replace('#', '0x') : styler[key];
        styleParameters.push("".concat(key, ":").concat(value));
      });
    });
  }

  return styleParameters;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].staticMapURL = function staticMapURL(baseOptions) {
  var url = baseOptions.url,
      lat = baseOptions.lat,
      _baseOptions$latitude = baseOptions.latitude,
      latitude = _baseOptions$latitude === void 0 ? lat : _baseOptions$latitude,
      lng = baseOptions.lng,
      _baseOptions$longitud = baseOptions.longitude,
      longitude = _baseOptions$longitud === void 0 ? lng : _baseOptions$longitud,
      center = baseOptions.center,
      address = baseOptions.address,
      _baseOptions$zoom = baseOptions.zoom,
      zoom = _baseOptions$zoom === void 0 ? 15 : _baseOptions$zoom,
      _baseOptions$markers = baseOptions.markers,
      markers = _baseOptions$markers === void 0 ? [] : _baseOptions$markers,
      styles = baseOptions.styles,
      polyline = baseOptions.polyline,
      visible = baseOptions.visible,
      _baseOptions$size = baseOptions.size,
      size = _baseOptions$size === void 0 ? [630, 300] : _baseOptions$size,
      options = _objectWithoutProperties(baseOptions, ["url", "lat", "latitude", "lng", "longitude", "center", "address", "zoom", "markers", "styles", "polyline", "visible", "size"]);

  var defaultRoot = "".concat(window.location.protocol === 'file:' ? 'http:' : window.location.protocol, "//maps.googleapis.com/maps/api/staticmap");
  var root = url || defaultRoot;
  var parameters = [];
  root += '?'; // Map options

  if (center) {
    parameters.push("center=".concat(center));
  } else if (address) {
    parameters.push("center=".concat(address));
  } else if (latitude && longitude) {
    parameters.push("center=".concat(latitude, ",").concat(longitude));
  } else if (visible) {
    parameters.push("visible=".concat(encodeURI(visible.join('|'))));
  }

  parameters.push("size=".concat(size.join('x')));
  parameters.push("zoom=".concat(zoom));
  Object.keys(options).forEach(function (key) {
    return parameters.push("".concat(key, "=").concat(options[key]));
  }); // Map style

  if (styles) {
    styles.forEach(function (style) {
      var styleParameters = buildStyleParameters(style);
      parameters.push("style=".concat(encodeURI(styleParameters.join('|'))));
    });
  } // Markers


  if (markers.length) {
    markers.forEach(function (marker) {
      var markerParameters = buildMarkerParameters(marker);
      parameters.push("markers=".concat(encodeURI(markerParameters.join('|'))));
    });
  } // Polylines


  if (polyline) {
    var polylineParameters = buildPathParameters(polyline);
    parameters.push("path=".concat(encodeURI(polylineParameters.join('|'))));
  } // Retina support


  var dpi = window.devicePixelRatio || 1;
  parameters.push("scale=".concat(dpi));
  return root + parameters.join('&');
};

/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./lib/streetview.js":
/*!***************************!*\
  !*** ./lib/streetview.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./lib/core.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


/**
 * Extends GMaps to use StreetView panoramas
 * @module StreetView
 */

var STREETVIEW_EVENTS = ['closeclick', 'links_changed', 'pano_changed', 'position_changed', 'pov_changed', 'resize', 'visible_changed'];
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

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.createPanorama = function createPanorama(baseOptions) {
  var _baseOptions$lat = baseOptions.lat,
      lat = _baseOptions$lat === void 0 ? this.getCenter().lat() : _baseOptions$lat,
      _baseOptions$latitude = baseOptions.latitude,
      latitude = _baseOptions$latitude === void 0 ? lat : _baseOptions$latitude,
      _baseOptions$lng = baseOptions.lng,
      lng = _baseOptions$lng === void 0 ? this.getCenter().lng() : _baseOptions$lng,
      _baseOptions$longitud = baseOptions.longitude,
      longitude = _baseOptions$longitud === void 0 ? lng : _baseOptions$longitud,
      options = _objectWithoutProperties(baseOptions, ["lat", "latitude", "lng", "longitude"]);

  var streetViewOptions = _objectSpread({
    latitude: latitude,
    longitude: longitude,
    instance: this
  }, options);

  this.panorama = _core__WEBPACK_IMPORTED_MODULE_0__["default"].createPanorama(streetViewOptions);
  this.map.setStreetView(this.panorama);
  return this.panorama;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].createPanorama = function createPanorama(baseOptions) {
  var el = baseOptions.el,
      _baseOptions$element = baseOptions.element,
      element = _baseOptions$element === void 0 ? el : _baseOptions$element,
      context = baseOptions.context,
      lat = baseOptions.lat,
      _baseOptions$latitude2 = baseOptions.latitude,
      latitude = _baseOptions$latitude2 === void 0 ? lat : _baseOptions$latitude2,
      lng = baseOptions.lng,
      _baseOptions$longitud2 = baseOptions.longitude,
      longitude = _baseOptions$longitud2 === void 0 ? lng : _baseOptions$longitud2,
      _baseOptions$position = baseOptions.position,
      position = _baseOptions$position === void 0 ? new google.maps.LatLng(latitude, longitude) : _baseOptions$position,
      _baseOptions$instance = baseOptions.instance,
      instance = _baseOptions$instance === void 0 ? window : _baseOptions$instance,
      options = _objectWithoutProperties(baseOptions, ["el", "element", "context", "lat", "latitude", "lng", "longitude", "position", "instance"]);

  var containerElement = Object(_core__WEBPACK_IMPORTED_MODULE_0__["getElementById"])(element, context);
  var filteredOptions = Object.keys(options).reduce(function (hash, key) {
    if (STREETVIEW_EVENTS.includes(key)) {
      return hash;
    }

    return _objectSpread({}, hash, _defineProperty({}, key, options[key]));
  }, {});

  var streetViewOptions = _objectSpread({}, filteredOptions, {
    position: position,
    visible: true
  });

  var panorama = new google.maps.StreetViewPanorama(containerElement, streetViewOptions);
  Object(_core__WEBPACK_IMPORTED_MODULE_0__["setupEvents"])({
    events: STREETVIEW_EVENTS,
    object: panorama,
    instance: instance,
    handlers: options
  });
  return panorama;
};

/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./lib/styles.js":
/*!***********************!*\
  !*** ./lib/styles.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./lib/core.js");

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

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addStyle = function addStyle(options) {
  var styledMapType = new google.maps.StyledMapType(options.styles, {
    name: options.styledMapName
  });
  this.map.mapTypes.set(options.mapTypeId, styledMapType);
};
/**
 * Set a [styled map type](https://developers.google.com/maps/documentation/javascript/maptypes#StyledMaps) to the Map. The map type should be defined before with {@link GMaps#addStyle}.
 * @function setStyle
 *
 * @param {string} mapTypeId - The styled map type's identifier.
 */


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.setStyle = function setStyle(mapTypeId) {
  this.map.setMapTypeId(mapTypeId);
};

/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./lib/core.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


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

_core__WEBPACK_IMPORTED_MODULE_0__["default"].geolocate = function geolocate(options) {
  var completeCallback = options.always || options.complete;

  if (window.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(function (position) {
      if (options.success) {
        options.success(position);
      }

      if (completeCallback) {
        completeCallback();
      }
    }, function (error) {
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


_core__WEBPACK_IMPORTED_MODULE_0__["default"].geocode = function geocode(baseOptions) {
  var callback = baseOptions.callback,
      lat = baseOptions.lat,
      _baseOptions$latitude = baseOptions.latitude,
      latitude = _baseOptions$latitude === void 0 ? lat : _baseOptions$latitude,
      lng = baseOptions.lng,
      _baseOptions$longitud = baseOptions.longitude,
      longitude = _baseOptions$longitud === void 0 ? lng : _baseOptions$longitud,
      _baseOptions$location = baseOptions.location,
      location = _baseOptions$location === void 0 ? new google.maps.LatLng(latitude, longitude) : _baseOptions$location,
      options = _objectWithoutProperties(baseOptions, ["callback", "lat", "latitude", "lng", "longitude", "location"]);

  this.geocoder = new google.maps.Geocoder();

  var geocodeOptions = _objectSpread({}, options, {
    location: location
  });

  this.geocoder.geocode(geocodeOptions, callback);
};

/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ })

/******/ })["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HTWFwcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9HTWFwcy8uL2xpYi9jb250cm9scy5qcyIsIndlYnBhY2s6Ly9HTWFwcy8uL2xpYi9jb3JlLmpzIiwid2VicGFjazovL0dNYXBzLy4vbGliL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9HTWFwcy8uL2xpYi9nZW9mZW5jZXMuanMiLCJ3ZWJwYWNrOi8vR01hcHMvLi9saWIvZ2VvbWV0cnkuanMiLCJ3ZWJwYWNrOi8vR01hcHMvLi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vR01hcHMvLi9saWIvbGF5ZXJzLmpzIiwid2VicGFjazovL0dNYXBzLy4vbGliL21hcF90eXBlcy5qcyIsIndlYnBhY2s6Ly9HTWFwcy8uL2xpYi9tYXJrZXJzLmpzIiwid2VicGFjazovL0dNYXBzLy4vbGliL292ZXJsYXlzLmpzIiwid2VicGFjazovL0dNYXBzLy4vbGliL3BvbHlmaWxscy5qcyIsIndlYnBhY2s6Ly9HTWFwcy8uL2xpYi9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vR01hcHMvLi9saWIvc3RhdGljLmpzIiwid2VicGFjazovL0dNYXBzLy4vbGliL3N0cmVldHZpZXcuanMiLCJ3ZWJwYWNrOi8vR01hcHMvLi9saWIvc3R5bGVzLmpzIiwid2VicGFjazovL0dNYXBzLy4vbGliL3V0aWxzLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRyb2wiLCJzdHlsZSIsImlkIiwidGl0bGUiLCJjbGFzc2VzIiwiY29udGVudCIsInBvc2l0aW9uIiwiZXZlbnRzIiwiZGlzYWJsZURlZmF1bHRTdHlsZXMiLCJjb250cm9sIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY3Vyc29yIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiYm94U2hhZG93IiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJwcm9wZXJ0eSIsImNsYXNzTmFtZSIsImlubmVySFRNTCIsIndpbmRvdyIsIkhUTUxFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJnb29nbGUiLCJtYXBzIiwiQ29udHJvbFBvc2l0aW9uIiwidG9VcHBlckNhc2UiLCJldmVudE5hbWUiLCJldmVudCIsImFkZERvbUxpc3RlbmVyIiwiY2FsbCIsImluZGV4IiwiR01hcHMiLCJwcm90b3R5cGUiLCJhZGRDb250cm9sIiwib3B0aW9ucyIsImNvbnRyb2xzIiwicHVzaCIsIm1hcCIsInJlbW92ZUNvbnRyb2wiLCJjb250cm9sSW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiY29udHJvbHNGb3JQb3NpdGlvbiIsImNvbnRyb2xJbmRleEluQ29sbGVjdGlvbiIsInJlbW92ZUF0IiwibGF0TG5nRnJvbUFyZ3VtZW50cyIsIkxhdExuZyIsImZsYXR0ZW5BcnJheSIsImFycmF5IiwicmVkdWNlIiwiY29sbGVjdGlvbiIsIml0ZW0iLCJjb25jYXQiLCJjb29yZHNUb0xhdExuZ3MiLCJjb29yZGluYXRlcyIsInVzZUdlb0pTT04iLCJmaXJzdENvb3JkaW5hdGUiLCJzZWNvbmRDb29yZGluYXRlIiwiYXJyYXlUb0xhdExuZyIsImNvb3JkaW5hdGUiLCJsZW5ndGgiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY29udGV4dCIsInNhbml0aXplZENsYXNzTmFtZSIsInJlcGxhY2UiLCIkIiwiZ2V0RWxlbWVudEJ5SWQiLCJzYW5pdGl6ZWRJZCIsImVsZW1lbnRzIiwiZ2V0RWxlbWVudCIsInNlbGVjdG9yT3JFbGVtZW50IiwibWF0Y2giLCJmaW5kQWJzb2x1dGVQb3NpdGlvbiIsImVsZW1lbnQiLCJsZWZ0IiwidG9wIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicmVjdGFuZ2xlIiwieCIsInNjcm9sbFgiLCJwYWdlWE9mZnNldCIsInkiLCJzY3JvbGxZIiwicGFnZVlPZmZzZXQiLCJvZmZzZXRQYXJlbnQiLCJpdGVyYXRvciIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJzZXR1cEV2ZW50TGlzdGVuZXIiLCJvYmplY3QiLCJpbnN0YW5jZSIsImhhbmRsZXIiLCJhZGRMaXN0ZW5lciIsImhpZGVDb250ZXh0TWVudSIsInNldHVwRXZlbnRzIiwiaGFuZGxlcnMiLCJNQVBfRVZFTlRTIiwiR01BUFNfTUVOVV9JRCIsImJhc2VPcHRpb25zIiwiRXJyb3IiLCJkaXYiLCJlbCIsImxhdCIsImxhdGl0dWRlIiwibG5nIiwibG9uZ2l0dWRlIiwiY2VudGVyIiwiem9vbSIsIm1hcFR5cGUiLCJ6b29tQ29udHJvbE9wdCIsInBhbkNvbnRyb2wiLCJ6b29tQ29udHJvbCIsIm1hcFR5cGVDb250cm9sIiwic2NhbGVDb250cm9sIiwic3RyZWV0Vmlld0NvbnRyb2wiLCJvdmVydmlld01hcENvbnRyb2wiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmtlckNsdXN0ZXJlciIsImVuYWJsZU5ld1N0eWxlIiwibWFwVHlwZUlkIiwiTWFwVHlwZUlkIiwibWFwQmFzZU9wdGlvbnMiLCJtYXBDb250cm9sc09wdGlvbnMiLCJ6b29tQ29udHJvbE9wdGlvbnMiLCJab29tQ29udHJvbFN0eWxlIiwiZmlsdGVyZWRPcHRpb25zIiwiaGFzaCIsImtleSIsImluY2x1ZGVzIiwiTWF0aCIsImNlaWwiLCJyYW5kb20iLCJEYXRlIiwibm93IiwiY29udGV4dE1lbnVzIiwidmlzdWFsUmVmcmVzaCIsInNjcm9sbFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJtYXBPcHRpb25zIiwiTWFwIiwib3ZlcmxheXMiLCJsYXllcnMiLCJzaW5nbGVMYXllcnMiLCJtYXJrZXJzIiwicG9seWxpbmVzIiwicm91dGVzIiwicG9seWdvbnMiLCJpbmZvV2luZG93Iiwib3ZlcmxheUVsZW1lbnQiLCJyZWdpc3RlcmVkRXZlbnRzIiwiYXBwbHkiLCJyaWdodGNsaWNrIiwiYnVpbGRDb250ZXh0TWVudSIsImNvbnRleHRNZW51RWxlbWVudCIsImh0bWwiLCJqb2luIiwiY29udGV4dE1lbnVJdGVtcyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY29udGV4dE1lbnVJdGVtIiwiY29udGV4dE1lbnVJdGVtTGlzdGVuZXIiLCJjb250ZXh0TWVudUl0ZW1MaXN0ZW5lckV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJhY3Rpb24iLCJjbGVhckxpc3RlbmVycyIsImFkZERvbUxpc3RlbmVyT25jZSIsInBpeGVsIiwib3ZlcmxheSIsIk92ZXJsYXlWaWV3Iiwic2V0TWFwIiwiZHJhdyIsInByb2plY3Rpb24iLCJnZXRQcm9qZWN0aW9uIiwibWFya2VyIiwiZ2V0UG9zaXRpb24iLCJmcm9tTGF0TG5nVG9Db250YWluZXJQaXhlbCIsImJ1aWxkQ29udGV4dE1lbnVIVE1MIiwic2V0VGltZW91dCIsImRpc3BsYXkiLCJvcHRpb24iLCJuYW1lIiwibWluV2lkdGgiLCJiYWNrZ3JvdW5kIiwibGlzdFN0eWxlIiwicGFkZGluZyIsImJvZHkiLCJyZWxhdGVkVGFyZ2V0IiwiY29udGFpbnMiLCJ0cmlnZ2VyIiwibGF0TG5ncyIsImJvdW5kcyIsIkxhdExuZ0JvdW5kcyIsImxhdExuZyIsImV4dGVuZCIsImZpdEJvdW5kcyIsImZpbHRlciIsInZpc2libGUiLCJmaXRMYXRMbmdCb3VuZHMiLCJhcmdzIiwiY2FsbGJhY2siLCJzbGljZSIsInBvcCIsInBhblRvIiwibWFnbml0dWRlIiwiZ2V0Wm9vbSIsInNldFpvb20iLCJnb29nbGVNYXBzTWFwTWV0aG9kcyIsIm1ldGhvZE5hbWUiLCJjdXN0b21FdmVudHMiLCJvbiIsInJlZ2lzdGVyZWRFdmVudCIsIm9mZiIsIm9uY2UiLCJhZGRMaXN0ZW5lck9uY2UiLCJ1bmRlZmluZWQiLCJmaXJlIiwiZXZlbnRBcmd1bWVudHMiLCJBcnJheSIsImFyZ3VtZW50cyIsImNoZWNrR2VvZmVuY2UiLCJsYWdMbmciLCJmZW5jZSIsImNvbnRhaW5zTGF0TG5nIiwiY2hlY2tNYXJrZXJHZW9mZW5jZSIsIm91dHNpZGVDYWxsYmFjayIsImZlbmNlcyIsIkVWRU5UUyIsImRyYXdQb2x5bGluZSIsImljb25zIiwic3Ryb2tlQ29sb3IiLCJzdHJva2VPcGFjaXR5Iiwic3Ryb2tlV2VpZ2h0IiwiZ2VvZGVzaWMiLCJjbGlja2FibGUiLCJlZGl0YWJsZSIsInpJbmRleCIsInBhdGgiLCJwb2x5bGluZU9wdGlvbnMiLCJwb2x5bGluZSIsIlBvbHlsaW5lIiwicmVtb3ZlUG9seWxpbmUiLCJwb2x5bGluZUluZGV4IiwicmVtb3ZlUG9seWxpbmVzIiwiZHJhd0NpcmNsZSIsInBvbHlnb25PcHRpb25zIiwicG9seWdvbiIsIkNpcmNsZSIsImRyYXdSZWN0YW5nbGUiLCJsYXRMbmdCb3VuZHMiLCJSZWN0YW5nbGUiLCJkcmF3UG9seWdvbiIsImJhc2VQYXRocyIsInBhdGhzIiwiUG9seWdvbiIsInJlbW92ZVBvbHlnb24iLCJwb2x5Z29uSW5kZXgiLCJyZW1vdmVQb2x5Z29ucyIsImdldEZyb21GdXNpb25UYWJsZXMiLCJsYXllciIsIkZ1c2lvblRhYmxlc0xheWVyIiwibG9hZEZyb21GdXNpb25UYWJsZXMiLCJnZXRGcm9tS01MIiwidXJsIiwiS21sTGF5ZXIiLCJsb2FkRnJvbUtNTCIsImFkZExheWVyIiwibGF5ZXJOYW1lIiwiY2xpY2siLCJzZWFyY2giLCJuZWFyYnlTZWFyY2giLCJyYWRhclNlYXJjaCIsInRleHRTZWFyY2giLCJrZXl3b3JkIiwibG9jYXRpb24iLCJyYWRpdXMiLCJyYW5rQnkiLCJ0eXBlcyIsInF1ZXJ5IiwiVHJhZmZpY0xheWVyIiwidHJhZmZpYyIsIlRyYW5zaXRMYXllciIsInRyYW5zaXQiLCJCaWN5Y2xpbmdMYXllciIsImJpY3ljbGluZyIsInBsYWNlcyIsIlBsYWNlc1NlcnZpY2UiLCJwbGFjZVNlYXJjaFJlcXVlc3QiLCJ0ZXh0U2VhcmNoUmVxdWVzdCIsInNldE9wdGlvbnMiLCJyZW1vdmVMYXllciIsImxheWVySW5kZXgiLCJhZGRNYXBUeXBlIiwiZ2V0VGlsZVVybCIsInRpbGVTaXplIiwiU2l6ZSIsIkltYWdlTWFwVHlwZSIsIm1hcFR5cGVzIiwic2V0IiwiYWRkT3ZlcmxheU1hcFR5cGUiLCJnZXRUaWxlIiwib3ZlcmxheU1hcFR5cGVzIiwib3ZlcmxheU1hcFR5cGVPcHRpb25zIiwiaW5zZXJ0QXQiLCJyZW1vdmVPdmVybGF5TWFwVHlwZSIsIm92ZXJsYXlNYXBUeXBlIiwiSU5GT19XSU5ET1dfRVZFTlRTIiwiTUFSS0VSX0VWRU5UUyIsIk1BUktFUl9NT1VTRV9FVkVOVFMiLCJjcmVhdGVNYXJrZXIiLCJzZWxmIiwiZGV0YWlscyIsIm91dHNpZGUiLCJtYXJrZXJPcHRpb25zIiwiTWFya2VyIiwiSW5mb1dpbmRvdyIsImZyb21MYXRMbmdUb1BvaW50Iiwib25NYXJrZXJDbGljayIsImhpZGVJbmZvV2luZG93cyIsIm9wZW4iLCJvbk1hcmtlclJpZ2h0Q2xpY2siLCJvbk1hcmtlckRyYWdFbmQiLCJhZGRNYXJrZXIiLCJnbV9hY2Nlc3NvcnNfIiwiYWRkTWFya2VycyIsImNsb3NlIiwicmVtb3ZlTWFya2VyIiwiZmlyZUV2ZW50IiwibWFya2VySW5kZXgiLCJyZW1vdmVNYXJrZXJzIiwiU1RPUF9QUk9QQUdBVElPTl9FVkVOVFMiLCJkcmF3T3ZlcmxheSIsImF1dG9TaG93IiwiaG9yaXpvbnRhbE9mZnNldCIsInZlcnRpY2FsT2Zmc2V0IiwidmVydGljYWxBbGlnbiIsImhvcml6b250YWxBbGlnbiIsIm9uQWRkIiwiYm9yZGVyU3R5bGUiLCJib3JkZXJXaWR0aCIsInBhbmVzIiwiZ2V0UGFuZXMiLCJvdmVybGF5TGF5ZXIiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsImFsbCIsImNhbmNlbEJ1YmJsZSIsInJldHVyblZhbHVlIiwic3RvcFByb3BhZ2F0aW9uIiwib3ZlcmxheU1vdXNlVGFyZ2V0IiwiZnJvbUxhdExuZ1RvRGl2UGl4ZWwiLCJjaGlsZHJlbiIsImNvbnRlbnRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJjb250ZW50V2lkdGgiLCJjbGllbnRXaWR0aCIsInNob3ciLCJvblJlbW92ZSIsInJlbW92ZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInJlbW92ZU92ZXJsYXkiLCJvdmVybGF5SW5kZXgiLCJyZW1vdmVPdmVybGF5cyIsImdldEJvdW5kcyIsImdldFBhdGhzIiwicCIsImdldExlbmd0aCIsImdldEF0IiwiaSIsImluUG9seSIsIm51bVBhdGhzIiwibnVtUG9pbnRzIiwiaiIsInZlcnRleDEiLCJ2ZXJ0ZXgyIiwiZ2VvbWV0cnkiLCJzcGhlcmljYWwiLCJjb21wdXRlRGlzdGFuY2VCZXR3ZWVuIiwiZ2V0Q2VudGVyIiwiZ2V0UmFkaXVzIiwic2V0RmVuY2VzIiwiYWRkRmVuY2UiLCJnZXRJZCIsInNlYXJjaEVsZW1lbnQiLCJUeXBlRXJyb3IiLCJ0IiwibGVuIiwibiIsIk51bWJlciIsIkluZmluaXR5IiwiZmxvb3IiLCJhYnMiLCJrIiwibWF4IiwiZ2V0Um91dGVzIiwib3JpZ2luIiwiZGVzdGluYXRpb24iLCJ0cmF2ZWxNb2RlIiwidW5pdFN5c3RlbSIsImF2b2lkSGlnaHdheXMiLCJhdm9pZFRvbGxzIiwib3B0aW1pemVXYXlwb2ludHMiLCJ3YXlwb2ludHMiLCJlcnJvciIsInRyYXZlbE1vZGVJZCIsIlRyYXZlbE1vZGUiLCJ1bml0U3lzdGVtSWQiLCJyZXF1ZXN0T3B0aW9ucyIsInNlcnZpY2UiLCJEaXJlY3Rpb25zU2VydmljZSIsInJvdXRlIiwicmVzdWx0Iiwic3RhdHVzIiwiRGlyZWN0aW9uc1N0YXR1cyIsIk9LIiwicmVtb3ZlUm91dGVzIiwiZ2V0RWxldmF0aW9ucyIsInNhbXBsZXMiLCJsb2NhdGlvbnMiLCJFbGV2YXRpb25TZXJ2aWNlIiwiZ2V0RWxldmF0aW9uRm9yTG9jYXRpb25zIiwiZ2V0RWxldmF0aW9uQWxvbmdQYXRoIiwiY2xlYW5Sb3V0ZSIsInJlbmRlclJvdXRlIiwiYmFzZVJlbmRlck9wdGlvbnMiLCJwYW5lbCIsInJlbmRlck9wdGlvbnMiLCJEaXJlY3Rpb25zUmVuZGVyZXIiLCJfIiwicmVzcG9uc2UiLCJzZXREaXJlY3Rpb25zIiwiZHJhd1JvdXRlIiwibGFzdFJvdXRlIiwib3ZlcnZpZXdfcGF0aCIsInRyYXZlbFJvdXRlIiwic3RhcnQiLCJzdGVwIiwibGVncyIsInN0ZXBzIiwic3RlcF9udW1iZXIiLCJzdGVwTnVtYmVyIiwiZW5kIiwiZHJhd1N0ZXBwZWRSb3V0ZSIsInJvdXRlU3RlcCIsInN0ZXBzQ291bnQiLCJSb3V0ZSIsInN0ZXBfY291bnQiLCJzdGVwc19sZW5ndGgiLCJNVkNBcnJheSIsImdldFBhdGgiLCJwYXJzZUNvbG9yIiwiY29sb3IiLCJvcGFjaXR5IiwicGFyc2VkQ29sb3IiLCJtaW4iLCJwYXJzZUZsb2F0IiwidG9TdHJpbmciLCJ0b0ltYWdlIiwic2l6ZSIsInN0YXRpY01hcE9wdGlvbnMiLCJlbmNvZGluZyIsImVuY29kZVBhdGgiLCJzdGF0aWNNYXBVUkwiLCJidWlsZE1hcmtlclBhcmFtZXRlcnMiLCJtYXJrZXJQYXJhbWV0ZXJzIiwiYWRkcmVzcyIsImljb24iLCJsYWJlbCIsImVuY29kZVVSSSIsImJ1aWxkUGF0aFBhcmFtZXRlcnMiLCJwb2x5bGluZVBhcmFtZXRlcnMiLCJwYXJzZUludCIsImZpbGxDb2xvciIsImZpbGxPcGFjaXR5IiwiYnVpbGRTdHlsZVBhcmFtZXRlcnMiLCJzdHlsZVBhcmFtZXRlcnMiLCJmZWF0dXJlVHlwZSIsImVsZW1lbnRUeXBlIiwic3R5bGVycyIsInN0eWxlciIsInZhbHVlIiwic3R5bGVzIiwiZGVmYXVsdFJvb3QiLCJwcm90b2NvbCIsInJvb3QiLCJwYXJhbWV0ZXJzIiwiZHBpIiwiZGV2aWNlUGl4ZWxSYXRpbyIsIlNUUkVFVFZJRVdfRVZFTlRTIiwiY3JlYXRlUGFub3JhbWEiLCJzdHJlZXRWaWV3T3B0aW9ucyIsInBhbm9yYW1hIiwic2V0U3RyZWV0VmlldyIsImNvbnRhaW5lckVsZW1lbnQiLCJTdHJlZXRWaWV3UGFub3JhbWEiLCJhZGRTdHlsZSIsInN0eWxlZE1hcFR5cGUiLCJTdHlsZWRNYXBUeXBlIiwic3R5bGVkTWFwTmFtZSIsInNldFN0eWxlIiwic2V0TWFwVHlwZUlkIiwiZ2VvbG9jYXRlIiwiY29tcGxldGVDYWxsYmFjayIsImFsd2F5cyIsImNvbXBsZXRlIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJzdWNjZXNzIiwibm90X3N1cHBvcnRlZCIsImdlb2NvZGUiLCJnZW9jb2RlciIsIkdlb2NvZGVyIiwiZ2VvY29kZU9wdGlvbnMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUVBOzs7OztBQUtBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBK0Y7QUFBQSx3QkFBNUZDLEtBQTRGO0FBQUEsTUFBNUZBLEtBQTRGLDJCQUFwRixFQUFvRjtBQUFBLE1BQWhGQyxFQUFnRixRQUFoRkEsRUFBZ0Y7QUFBQSxNQUE1RUMsS0FBNEUsUUFBNUVBLEtBQTRFO0FBQUEsTUFBckVDLE9BQXFFLFFBQXJFQSxPQUFxRTtBQUFBLE1BQTVEQyxPQUE0RCxRQUE1REEsT0FBNEQ7QUFBQSxNQUFuREMsUUFBbUQsUUFBbkRBLFFBQW1EO0FBQUEseUJBQXpDQyxNQUF5QztBQUFBLE1BQXpD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RUFBaEI7O0FBRUEsTUFBTUMsY0FBYyxxQkFDZmxlLE9BRGU7QUFFbEJrUCxZQUFRLEVBQVJBO0FBRmtCLElBQXBCOztBQUtBLE9BQUs4TyxRQUFMLENBQWNELE9BQWQsQ0FBc0JHLGNBQXRCLEVBQXNDMVQsUUFBdEM7QUFDRCxDQW5CRDs7QUFxQmUzSyw0R0FBZixFIiwiZmlsZSI6ImdtYXBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9saWIvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgR01hcHMgZnJvbSAnLi9jb3JlJztcblxuLyoqXG4gKiBFeHRlbmRzIEdNYXBzIHRvIHVzZSBVSSBjb250cm9scy5cbiAqIEBtb2R1bGUgQ29udHJvbHNcbiAqL1xuXG5jb25zdCBjcmVhdGVDb250cm9sID0gKHsgc3R5bGUgPSB7fSwgaWQsIHRpdGxlLCBjbGFzc2VzLCBjb250ZW50LCBwb3NpdGlvbiwgZXZlbnRzID0ge30sIGRpc2FibGVEZWZhdWx0U3R5bGVzLCB9KSA9PiB7XG4gIGNvbnN0IGNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBjb250cm9sLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcblxuICBpZiAoZGlzYWJsZURlZmF1bHRTdHlsZXMgIT09IHRydWUpIHtcbiAgICBjb250cm9sLnN0eWxlLmZvbnRGYW1pbHkgPSAnUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZic7XG4gICAgY29udHJvbC5zdHlsZS5mb250U2l6ZSA9ICcxMXB4JztcbiAgICBjb250cm9sLnN0eWxlLmJveFNoYWRvdyA9ICdyZ2JhKDAsIDAsIDAsIDAuMjk4MDM5KSAwcHggMXB4IDRweCAtMXB4JztcbiAgfVxuXG4gIE9iamVjdC5rZXlzKHN0eWxlKS5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgIGNvbnRyb2wuc3R5bGUgPSBzdHlsZVtwcm9wZXJ0eV07XG4gIH0pO1xuXG4gIGlmIChpZCkge1xuICAgIGNvbnRyb2wuaWQgPSBpZDtcbiAgfVxuXG4gIGlmICh0aXRsZSkge1xuICAgIGNvbnRyb2wudGl0bGUgPSB0aXRsZTtcbiAgfVxuXG4gIGlmIChjbGFzc2VzKSB7XG4gICAgY29udHJvbC5jbGFzc05hbWUgPSBjbGFzc2VzO1xuICB9XG5cbiAgaWYgKGNvbnRlbnQpIHtcbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250cm9sLmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgfSBlbHNlIGlmIChjb250ZW50IGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50KSB7XG4gICAgICBjb250cm9sLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwb3NpdGlvbikge1xuICAgIGNvbnRyb2wucG9zaXRpb24gPSBnb29nbGUubWFwcy5Db250cm9sUG9zaXRpb25bcG9zaXRpb24udG9VcHBlckNhc2UoKV07XG4gIH1cblxuICBPYmplY3Qua2V5cyhldmVudHMpLmZvckVhY2goZXZlbnROYW1lID0+XG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIoY29udHJvbCwgZXZlbnROYW1lLCBldmVudCA9PlxuICAgICAgZXZlbnRzW2V2ZW50TmFtZV0uY2FsbCh0aGlzLCBldmVudClcbiAgICApXG4gICk7XG5cbiAgY29udHJvbC5pbmRleCA9IDE7XG5cbiAgcmV0dXJuIGNvbnRyb2w7XG59O1xuXG4vKipcbiAqIEFkZCBhIGN1c3RvbSBjb250cm9sIHRvIHRoZSBtYXAgVUkuXG4gKiBAZnVuY3Rpb24gYWRkQ29udHJvbFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBvYmplY3Qgc2hvdWxkIGNvbnRhaW46XG4gKiAqIGBzdHlsZWAgKG9iamVjdCk6IFRoZSBrZXlzIGFuZCB2YWx1ZXMgb2YgdGhpcyBvYmplY3Qgc2hvdWxkIGJlIHZhbGlkIENTUyBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXMuXG4gKiAqIGBpZGAgKHN0cmluZyk6IFRoZSBIVE1MIGlkIGZvciB0aGUgY3VzdG9tIGNvbnRyb2wuXG4gKiAqIGBjbGFzc2VzYCAoc3RyaW5nKTogQSBzdHJpbmcgY29udGFpbmluZyBhbGwgdGhlIEhUTUwgY2xhc3NlcyBmb3IgdGhlIGN1c3RvbSBjb250cm9sLlxuICogKiBgY29udGVudGAgKHN0cmluZyBvciBIVE1MIGVsZW1lbnQpOiBUaGUgY29udGVudCBvZiB0aGUgY3VzdG9tIGNvbnRyb2wuXG4gKiAqIGBwb3NpdGlvbmAgKHN0cmluZyk6IEFueSB2YWxpZCBbYGdvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvbmBdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L2NvbnRyb2xzI0NvbnRyb2xQb3NpdGlvbmluZykgdmFsdWUsIGluIGxvd2VyIG9yIHVwcGVyIGNhc2UuXG4gKiAqIGBldmVudHNgIChvYmplY3QpOiBUaGUga2V5cyBvZiB0aGlzIG9iamVjdCBzaG91bGQgYmUgdmFsaWQgRE9NIGV2ZW50cy4gVGhlIHZhbHVlcyBzaG91bGQgYmUgZnVuY3Rpb25zLlxuICogKiBgZGlzYWJsZURlZmF1bHRTdHlsZXNgIChib29sZWFuKTogSWYgZmFsc2UsIHJlbW92ZXMgdGhlIGRlZmF1bHQgc3R5bGVzIGZvciB0aGUgY29udHJvbHMgbGlrZSBmb250IChmYW1pbHkgYW5kIHNpemUpLCBhbmQgYm94IHNoYWRvdy5cbiAqXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gKi9cbkdNYXBzLnByb3RvdHlwZS5hZGRDb250cm9sID0gZnVuY3Rpb24gYWRkQ29udHJvbChvcHRpb25zKSB7XG4gIGNvbnN0IGNvbnRyb2wgPSBjcmVhdGVDb250cm9sKG9wdGlvbnMpO1xuXG4gIHRoaXMuY29udHJvbHMucHVzaChjb250cm9sKTtcbiAgdGhpcy5tYXAuY29udHJvbHNbY29udHJvbC5wb3NpdGlvbl0ucHVzaChjb250cm9sKTtcblxuICByZXR1cm4gY29udHJvbDtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGEgY29udHJvbCBmcm9tIHRoZSBtYXAuIGBjb250cm9sYCBzaG91bGQgYmUgYSBjb250cm9sIHJldHVybmVkIGJ5IGBhZGRDb250cm9sKClgLlxuICogQGZ1bmN0aW9uIHJlbW92ZUNvbnRyb2xcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250cm9sIC0gT25lIG9mIHRoZSBjb250cm9scyByZXR1cm5lZCBieSBgYWRkQ29udHJvbCgpYC5cbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gdGhlIHJlbW92ZWQgY29udHJvbC5cbiAqL1xuR01hcHMucHJvdG90eXBlLnJlbW92ZUNvbnRyb2wgPSBmdW5jdGlvbiByZW1vdmVDb250cm9sKGNvbnRyb2wpIHtcbiAgY29uc3QgY29udHJvbEluZGV4ID0gdGhpcy5jb250cm9scy5pbmRleE9mKGNvbnRyb2wpO1xuXG4gIHRoaXMuY29udHJvbHMuc3BsaWNlKGNvbnRyb2xJbmRleCwgMSk7XG5cbiAgaWYgKGNvbnRyb2wucG9zaXRpb24gPj0gMCAmJiBjb250cm9sSW5kZXggPj0gMCkge1xuICAgIGNvbnN0IGNvbnRyb2xzRm9yUG9zaXRpb24gPSB0aGlzLm1hcC5jb250cm9sc1tjb250cm9sLnBvc2l0aW9uXTtcbiAgICBjb25zdCBjb250cm9sSW5kZXhJbkNvbGxlY3Rpb24gPSBjb250cm9sc0ZvclBvc2l0aW9uLmluZGV4T2YoY29udHJvbCk7XG5cbiAgICBjb250cm9sc0ZvclBvc2l0aW9uLnJlbW92ZUF0KGNvbnRyb2xJbmRleEluQ29sbGVjdGlvbik7XG4gIH1cblxuICByZXR1cm4gY29udHJvbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXBzO1xuIiwiZXhwb3J0IGNvbnN0IGxhdExuZ0Zyb21Bcmd1bWVudHMgPSAoLi4uYXJncykgPT4ge1xuICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdudW1iZXInICYmIHR5cGVvZiBhcmdzWzFdID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICB9XG5cbiAgcmV0dXJuIGFyZ3NbMF07XG59O1xuXG5leHBvcnQgY29uc3QgZmxhdHRlbkFycmF5ID0gYXJyYXkgPT5cbiAgYXJyYXkucmVkdWNlKChjb2xsZWN0aW9uLCBpdGVtKSA9PiBjb2xsZWN0aW9uLmNvbmNhdChpdGVtKSwgW10pO1xuXG5leHBvcnQgY29uc3QgY29vcmRzVG9MYXRMbmdzID0gKGNvb3JkaW5hdGVzLCB1c2VHZW9KU09OKSA9PiB7XG4gIGNvbnN0IGZpcnN0Q29vcmRpbmF0ZSA9IHVzZUdlb0pTT04gPyBjb29yZGluYXRlc1sxXSA6IGNvb3JkaW5hdGVzWzBdO1xuICBjb25zdCBzZWNvbmRDb29yZGluYXRlID0gdXNlR2VvSlNPTiA/IGNvb3JkaW5hdGVzWzBdIDogY29vcmRpbmF0ZXNbMV07XG5cbiAgcmV0dXJuIG5ldyBnb29nbGUubWFwcy5MYXRMbmcoZmlyc3RDb29yZGluYXRlLCBzZWNvbmRDb29yZGluYXRlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhcnJheVRvTGF0TG5nID0gKGNvb3JkaW5hdGVzLCB1c2VHZW9KU09OKSA9PlxuICBjb29yZGluYXRlcy5tYXAoKGNvb3JkaW5hdGUpID0+IHtcbiAgICBpZiAoIShjb29yZGluYXRlIGluc3RhbmNlb2YgZ29vZ2xlLm1hcHMuTGF0TG5nKSkge1xuICAgICAgaWYgKGNvb3JkaW5hdGUubGVuZ3RoICYmIHR5cGVvZiBjb29yZGluYXRlWzBdID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gYXJyYXlUb0xhdExuZyhjb29yZGluYXRlLCB1c2VHZW9KU09OKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvb3Jkc1RvTGF0TG5ncyhjb29yZGluYXRlLCB1c2VHZW9KU09OKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29vcmRpbmF0ZTtcbiAgfSk7XG5cbmNvbnN0IGdldEVsZW1lbnRzQnlDbGFzc05hbWUgPSAoY2xhc3NOYW1lLCBjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHNhbml0aXplZENsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKC9eXFwuLywgJycpO1xuXG4gIGlmICh0eXBlb2Ygd2luZG93LiQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gJChgLiR7c2FuaXRpemVkQ2xhc3NOYW1lfWAsIGNvbnRleHQpWzBdO1xuICB9XG5cbiAgcmV0dXJuIHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHNhbml0aXplZENsYXNzTmFtZSlbMF07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RWxlbWVudEJ5SWQgPSAoaWQsIGNvbnRleHQpID0+IHtcbiAgY29uc3Qgc2FuaXRpemVkSWQgPSBpZC5yZXBsYWNlKC9eIy8sICcnKTtcblxuICBpZiAodHlwZW9mIHdpbmRvdy4kID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSAkKGAjJHtzYW5pdGl6ZWRJZH1gLCBjb250ZXh0KSB8fCBbXTtcblxuICAgIHJldHVybiBlbGVtZW50c1swXTtcbiAgfVxuXG4gIHJldHVybiB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2FuaXRpemVkSWQpO1xufTtcblxuY29uc3QgZ2V0RWxlbWVudCA9IChzZWxlY3Rvck9yRWxlbWVudCwgY29udGV4dCkgPT4ge1xuICBpZiAodHlwZW9mIHNlbGVjdG9yT3JFbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBzZWxlY3Rvck9yRWxlbWVudC5tYXRjaCgvXiMvKSA/IGdldEVsZW1lbnRCeUlkKHNlbGVjdG9yT3JFbGVtZW50LCBjb250ZXh0KSA6IGdldEVsZW1lbnRzQnlDbGFzc05hbWUoc2VsZWN0b3JPckVsZW1lbnQsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGVjdG9yT3JFbGVtZW50O1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRBYnNvbHV0ZVBvc2l0aW9uID0gKGVsZW1lbnQpID0+IHtcbiAgbGV0IGxlZnQgPSAwO1xuICBsZXQgdG9wID0gMDtcblxuICBpZiAoZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcbiAgICBjb25zdCByZWN0YW5nbGUgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHggPSAtKHdpbmRvdy5zY3JvbGxYID8gd2luZG93LnNjcm9sbFggOiB3aW5kb3cucGFnZVhPZmZzZXQpO1xuICAgIGNvbnN0IHkgPSAtKHdpbmRvdy5zY3JvbGxZID8gd2luZG93LnNjcm9sbFkgOiB3aW5kb3cucGFnZVlPZmZzZXQpO1xuXG4gICAgcmV0dXJuIFtyZWN0YW5nbGUubGVmdCAtIHgsIHJlY3RhbmdsZS50b3AgLSB5XTtcbiAgfVxuXG4gIGlmIChlbGVtZW50Lm9mZnNldFBhcmVudCkge1xuICAgIGxldCBpdGVyYXRvciA9IGVsZW1lbnQ7XG5cbiAgICBkbyB7XG4gICAgICBsZWZ0ICs9IGl0ZXJhdG9yLm9mZnNldExlZnQ7XG4gICAgICB0b3AgKz0gaXRlcmF0b3Iub2Zmc2V0VG9wO1xuICAgIH0gd2hpbGUgKChpdGVyYXRvciA9IGl0ZXJhdG9yLm9mZnNldFBhcmVudCkpO1xuICB9XG5cbiAgcmV0dXJuIFtsZWZ0LCB0b3BdO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldHVwRXZlbnRMaXN0ZW5lciA9ICh7IG9iamVjdCwgZXZlbnROYW1lLCBpbnN0YW5jZSwgaGFuZGxlciwgfSkgPT4ge1xuICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihvYmplY3QsIGV2ZW50TmFtZSwgKGV2ZW50ID0gaW5zdGFuY2UpID0+IHtcbiAgICBoYW5kbGVyLmNhbGwoaW5zdGFuY2UsIGV2ZW50KTtcblxuICAgIGlmIChpbnN0YW5jZS5oaWRlQ29udGV4dE1lbnUpIHtcbiAgICAgIGluc3RhbmNlLmhpZGVDb250ZXh0TWVudSgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0dXBFdmVudHMgPSAoeyBldmVudHMsIG9iamVjdCwgaW5zdGFuY2UsIGhhbmRsZXJzLCB9KSA9PlxuICBldmVudHMuZm9yRWFjaCgoZXZlbnROYW1lKSA9PiB7XG4gICAgaWYgKGhhbmRsZXJzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHNldHVwRXZlbnRMaXN0ZW5lcih7XG4gICAgICAgIG9iamVjdCxcbiAgICAgICAgZXZlbnROYW1lLFxuICAgICAgICBpbnN0YW5jZSxcbiAgICAgICAgaGFuZGxlcjogaGFuZGxlcnNbZXZlbnROYW1lXSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbmNvbnN0IE1BUF9FVkVOVFMgPSBbXG4gICdib3VuZHNfY2hhbmdlZCcsICdjZW50ZXJfY2hhbmdlZCcsICdjbGljaycsICdkYmxjbGljaycsICdkcmFnJyxcbiAgJ2RyYWdlbmQnLCAnZHJhZ3N0YXJ0JywgJ2lkbGUnLCAnbWFwdHlwZWlkX2NoYW5nZWQnLFxuICAnbW91c2Vtb3ZlJywgJ21vdXNlb3V0JywgJ21vdXNlb3ZlcicsICdwcm9qZWN0aW9uX2NoYW5nZWQnLFxuICAncmVzaXplJywgJ3RpbGVzbG9hZGVkJywgJ3pvb21fY2hhbmdlZCdcbl07XG5jb25zdCBHTUFQU19NRU5VX0lEID0gJ2dtYXBzX2NvbnRleHRfbWVudSc7XG5cbi8qKlxuICogR01hcHMgaXMgYSB3cmFwcGVyIGZvciBHb29nbGUgTWFwcyBKYXZhU2NyaXB0IEFQSS4gSXRzIGdvYWwgaXMgdG8gc2ltcGxpZnkgR29vZ2xlIE1hcHMgdXNhZ2UgYnkgcGVyZm9ybWluZyBjb21wbGV4IHRhc2tzIHdpdGggZmV3ZXIgbGluZXMgb2YgY29kZS5cbiAqL1xuY2xhc3MgR01hcHMge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBHTWFwcyBpbnN0YW5jZSwgaW5jbHVkaW5nIGEgR29vZ2xlIE1hcHMgbWFwLlxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIGBvcHRpb25zYCBhY2NlcHRzIGFsbCB0aGUgW01hcE9wdGlvbnNdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNNYXBPcHRpb25zKSBhbmQgW2V2ZW50c10oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI01hcCkgbGlzdGVkIGluIHRoZSBHb29nbGUgTWFwcyBBUEkuIEFsc28gYWNjZXB0czpcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMubGF0aXR1ZGUgLSBMYXRpdHVkZSBvZiB0aGUgbWFwJ3MgY2VudGVyLlxuICAgKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5sb25naXR1ZGUgLSBMb25naXR1ZGUgb2YgdGhlIG1hcCdzIGNlbnRlci5cbiAgICogQHBhcmFtIHtnb29nbGUubWFwcy5MYXRMbmd9IG9wdGlvbnMuY2VudGVyIC0gQSBgZ29vZ2xlLm1hcHMuTGF0TG5nYCBjb29yZGluYXRlIGluZGljYXRlIHRoZSBjZW50ZXIuIElmIHNldCwgYGxhdGl0dWRlYCBhbmQgYGxvbmdpdHVkZWAgYXJlIGlnbm9yZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfEhUTUxFbGVtZW50fSBvcHRpb25zLmVsZW1lbnQgLSBjb250YWluZXIgd2hlcmUgdGhlIG1hcCB3aWxsIGJlIHJlbmRlcmVkLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLm1hcmtlckNsdXN0ZXJlciAtIEEgZnVuY3Rpb24gdG8gY3JlYXRlIGEgbWFya2VyIGNsdXN0ZXIuIFlvdSBjYW4gdXNlIE1hcmtlckNsdXN0ZXJlciBvciBNYXJrZXJDbHVzdGVyZXJQbHVzLlxuICAgKi9cbiAgY29uc3RydWN0b3IoYmFzZU9wdGlvbnMgPSB7fSkge1xuICAgIGlmICghd2luZG93Lmdvb2dsZSB8fCAhd2luZG93Lmdvb2dsZS5tYXBzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0dvb2dsZSBNYXBzIEphdmFTY3JpcHQgQVBJIGlzIHJlcXVpcmVkLiBDaGVjazogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvdHV0b3JpYWwnKTtcbiAgICB9XG5cbiAgICBjb25zdCB7IGRpdixcbiAgICAgIGVsID0gZGl2LFxuICAgICAgY29udGV4dCxcbiAgICAgIGVsZW1lbnQgPSBnZXRFbGVtZW50KGVsLCBjb250ZXh0KSxcbiAgICAgIGxhdCxcbiAgICAgIGxhdGl0dWRlID0gbGF0LFxuICAgICAgbG5nLFxuICAgICAgbG9uZ2l0dWRlID0gbG5nLFxuICAgICAgY2VudGVyID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsYXRpdHVkZSwgbG9uZ2l0dWRlKSxcbiAgICAgIHpvb20gPSAxNSxcbiAgICAgIG1hcFR5cGUgPSAncm9hZG1hcCcsXG4gICAgICB6b29tQ29udHJvbE9wdCA9IHtcbiAgICAgICAgc3R5bGU6ICdERUZBVUxUJyxcbiAgICAgICAgcG9zaXRpb246ICdUT1BfTEVGVCcsXG4gICAgICB9LFxuICAgICAgcGFuQ29udHJvbCA9IHRydWUsXG4gICAgICB6b29tQ29udHJvbCA9IHRydWUsXG4gICAgICBtYXBUeXBlQ29udHJvbCA9IHRydWUsXG4gICAgICBzY2FsZUNvbnRyb2wgPSB0cnVlLFxuICAgICAgc3RyZWV0Vmlld0NvbnRyb2wgPSB0cnVlLFxuICAgICAgb3ZlcnZpZXdNYXBDb250cm9sID0gdHJ1ZSxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgbWFya2VyQ2x1c3RlcmVyLFxuICAgICAgZW5hYmxlTmV3U3R5bGUsXG4gICAgICAuLi5vcHRpb25zIH0gPSBiYXNlT3B0aW9ucztcblxuICAgIGNvbnN0IG1hcFR5cGVJZCA9IGdvb2dsZS5tYXBzLk1hcFR5cGVJZFttYXBUeXBlLnRvVXBwZXJDYXNlKCldO1xuXG4gICAgY29uc3QgbWFwQmFzZU9wdGlvbnMgPSB7XG4gICAgICB6b29tLFxuICAgICAgY2VudGVyLFxuICAgICAgbWFwVHlwZUlkLFxuICAgIH07XG5cbiAgICBjb25zdCBtYXBDb250cm9sc09wdGlvbnMgPSB7XG4gICAgICBwYW5Db250cm9sLFxuICAgICAgem9vbUNvbnRyb2wsXG4gICAgICB6b29tQ29udHJvbE9wdGlvbnM6IHtcbiAgICAgICAgc3R5bGU6IGdvb2dsZS5tYXBzLlpvb21Db250cm9sU3R5bGVbem9vbUNvbnRyb2xPcHQuc3R5bGVdLFxuICAgICAgICBwb3NpdGlvbjogZ29vZ2xlLm1hcHMuQ29udHJvbFBvc2l0aW9uW3pvb21Db250cm9sT3B0LnBvc2l0aW9uXSxcbiAgICAgIH0sXG4gICAgICBtYXBUeXBlQ29udHJvbCxcbiAgICAgIHNjYWxlQ29udHJvbCxcbiAgICAgIHN0cmVldFZpZXdDb250cm9sLFxuICAgICAgb3ZlcnZpZXdNYXBDb250cm9sLFxuICAgIH07XG5cbiAgICBjb25zdCBmaWx0ZXJlZE9wdGlvbnMgPSBPYmplY3Qua2V5cyhvcHRpb25zKS5yZWR1Y2UoKGhhc2gsIGtleSkgPT4ge1xuICAgICAgaWYgKE1BUF9FVkVOVFMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICByZXR1cm4gaGFzaDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4uaGFzaCwgW2tleV06IG9wdGlvbnNba2V5XSwgfTtcbiAgICB9LCB7fSk7XG5cbiAgICB0aGlzLmlkID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiBEYXRlLm5vdygpKTtcblxuICAgIEdNYXBzLmNvbnRleHRNZW51c1t0aGlzLmlkXSA9IHt9O1xuXG4gICAgZ29vZ2xlLm1hcHMudmlzdWFsUmVmcmVzaCA9IGVuYWJsZU5ld1N0eWxlO1xuXG4gICAgLyoqXG4gICAgICogSFRNTCBlbGVtZW50IHdoZXJlIHRoZSBHb29nbGUgTWFwcyBtYXAgaXMgcmVuZGVyZWRcbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICB0aGlzLmVsZW1lbnQgPSB0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycgPyBnZXRFbGVtZW50KGVsZW1lbnQpIDogZWxlbWVudDtcblxuICAgIGlmICghdGhpcy5lbGVtZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGVsZW1lbnQgZGVmaW5lZC4gUGFzcyBhbiBgZWxlbWVudGAgb3B0aW9uIGluIEdNYXBzLicpO1xuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS53aWR0aCA9IHdpZHRoIHx8IHRoaXMuZWxlbWVudC5zY3JvbGxXaWR0aCB8fCB0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmhlaWdodCA9IGhlaWdodCB8fCB0aGlzLmVsZW1lbnQuc2Nyb2xsSGVpZ2h0IHx8IHRoaXMuZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICBjb25zdCBtYXBPcHRpb25zID0ge1xuICAgICAgLi4uZmlsdGVyZWRPcHRpb25zLFxuICAgICAgLi4ubWFwQmFzZU9wdGlvbnMsXG4gICAgICAuLi5tYXBDb250cm9sc09wdGlvbnMsXG4gICAgfTtcblxuICAgIHRoaXMubWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcCh0aGlzLmVsZW1lbnQsIG1hcE9wdGlvbnMpO1xuICAgIC8qKlxuICAgICAqIENvbGxlY3Rpb24gb2YgY3VzdG9tIGNvbnRyb2xzIGluIHRoZSBtYXAgVUlcbiAgICAgKlxuICAgICAqIEB0eXBlIHthcnJheX1cbiAgICAgKi9cbiAgICB0aGlzLmNvbnRyb2xzID0gW107XG4gICAgLyoqXG4gICAgICogQ29sbGVjdGlvbiBvZiBtYXAncyBvdmVybGF5c1xuICAgICAqXG4gICAgICogQHR5cGUge2FycmF5fVxuICAgICAqL1xuICAgIHRoaXMub3ZlcmxheXMgPSBbXTtcbiAgICAvKipcbiAgICAgKiBDb2xsZWN0aW9uIG9mIEtNTC9HZW9SU1MgYW5kIEZ1c2lvblRhYmxlIGxheWVyc1xuICAgICAqXG4gICAgICogQHR5cGUge2FycmF5fVxuICAgICAqL1xuICAgIHRoaXMubGF5ZXJzID0gW107XG4gICAgLyoqXG4gICAgICogQ29sbGVjdGlvbiBvZiBkYXRhIGxheWVycyAoU2VlIHtAbGluayBHTWFwcyNhZGRMYXllcn0pXG4gICAgICpcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuc2luZ2xlTGF5ZXJzID0ge307XG4gICAgLyoqXG4gICAgICogQ29sbGVjdGlvbiBvZiBtYXAncyBtYXJrZXJzXG4gICAgICpcbiAgICAgKiBAdHlwZSB7YXJyYXl9XG4gICAgICovXG4gICAgdGhpcy5tYXJrZXJzID0gW107XG4gICAgLyoqXG4gICAgICogQ29sbGVjdGlvbiBvZiBtYXAncyBsaW5lc1xuICAgICAqXG4gICAgICogQHR5cGUge2FycmF5fVxuICAgICAqL1xuICAgIHRoaXMucG9seWxpbmVzID0gW107XG4gICAgLyoqXG4gICAgICogQ29sbGVjdGlvbiBvZiBtYXAncyByb3V0ZXMgcmVxdWVzdGVkIGJ5IHtAbGluayBHTWFwcyNnZXRSb3V0ZXN9LCB7QGxpbmsgR01hcHMjcmVuZGVyUm91dGV9LCB7QGxpbmsgR01hcHMjZHJhd1JvdXRlfSwge0BsaW5rIEdNYXBzI3RyYXZlbFJvdXRlfSBvciB7QGxpbmsgR01hcHMjZHJhd1N0ZXBwZWRSb3V0ZX1cbiAgICAgKlxuICAgICAqIEB0eXBlIHthcnJheX1cbiAgICAgKi9cbiAgICB0aGlzLnJvdXRlcyA9IFtdO1xuICAgIC8qKlxuICAgICAqIENvbGxlY3Rpb24gb2YgbWFwJ3MgcG9seWdvbnNcbiAgICAgKlxuICAgICAqIEB0eXBlIHthcnJheX1cbiAgICAgKi9cbiAgICB0aGlzLnBvbHlnb25zID0gW107XG4gICAgdGhpcy5pbmZvV2luZG93ID0gbnVsbDtcbiAgICB0aGlzLm92ZXJsYXlFbGVtZW50ID0gbnVsbDtcbiAgICAvKipcbiAgICAgKiBDdXJyZW50IG1hcCdzIHpvb21cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy56b29tID0gem9vbTtcblxuICAgIHRoaXMucmVnaXN0ZXJlZEV2ZW50cyA9IHt9O1xuXG4gICAgaWYgKG1hcmtlckNsdXN0ZXJlcikge1xuICAgICAgLyoqXG4gICAgICAgKiBNYXJrZXIgQ2x1c3RlcmVyIGluc3RhbmNlXG4gICAgICAgKlxuICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAqL1xuICAgICAgdGhpcy5tYXJrZXJDbHVzdGVyZXIgPSBtYXJrZXJDbHVzdGVyZXIuYXBwbHkodGhpcywgW3RoaXMubWFwXSk7XG4gICAgfVxuXG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIodGhpcy5tYXAsICd6b29tX2NoYW5nZWQnLCB0aGlzLmhpZGVDb250ZXh0TWVudSk7XG5cbiAgICBzZXR1cEV2ZW50cyh7IGV2ZW50czogTUFQX0VWRU5UUywgb2JqZWN0OiB0aGlzLm1hcCwgaW5zdGFuY2U6IHRoaXMsIGhhbmRsZXJzOiBvcHRpb25zLCB9KTtcblxuICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKHRoaXMubWFwLCAncmlnaHRjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgaWYgKG9wdGlvbnMucmlnaHRjbGljaykge1xuICAgICAgICBvcHRpb25zLnJpZ2h0Y2xpY2suY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChHTWFwcy5jb250ZXh0TWVudXNbdGhpcy5pZF0ubWFwKSB7XG4gICAgICAgIHRoaXMuYnVpbGRDb250ZXh0TWVudSgnbWFwJywgZXZlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYnVpbGRDb250ZXh0TWVudUhUTUwoY29udHJvbCwgZXZlbnQpIHtcbiAgICBpZiAoIWdldEVsZW1lbnRCeUlkKEdNQVBTX01FTlVfSUQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY29udGV4dE1lbnVFbGVtZW50ID0gZ2V0RWxlbWVudEJ5SWQoR01BUFNfTUVOVV9JRCk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IEdNYXBzLmNvbnRleHRNZW51c1t0aGlzLmlkXVtjb250cm9sXTtcblxuICAgIGNvbnN0IGh0bWwgPSBPYmplY3Qua2V5cyhvcHRpb25zKS5tYXAoa2V5ID0+XG4gICAgICBgPGxpPjxhIGlkPVwiJHtjb250cm9sfV8ke2tleX1cIiBocmVmPVwiI1wiPiR7b3B0aW9uc1trZXldLnRpdGxlfTwvYT48L2xpPmBcbiAgICApLmpvaW4oJycpO1xuXG4gICAgY29udGV4dE1lbnVFbGVtZW50LmlubmVySFRNTCA9IGh0bWw7XG5cbiAgICBjb25zdCBjb250ZXh0TWVudUl0ZW1zID0gY29udGV4dE1lbnVFbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdhJyk7XG5cbiAgICBbLi4uY29udGV4dE1lbnVJdGVtc10uZm9yRWFjaCgoY29udGV4dE1lbnVJdGVtKSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0TWVudUl0ZW1MaXN0ZW5lciA9IChjb250ZXh0TWVudUl0ZW1MaXN0ZW5lckV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnRleHRNZW51SXRlbUxpc3RlbmVyRXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBvcHRpb25zW2NvbnRleHRNZW51SXRlbUxpc3RlbmVyRXZlbnQudGFyZ2V0LmlkLnJlcGxhY2UoYCR7Y29udHJvbH1fYCwgJycpXS5hY3Rpb24uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICAgIHRoaXMuaGlkZUNvbnRleHRNZW51KCk7XG4gICAgICB9O1xuXG4gICAgICBnb29nbGUubWFwcy5ldmVudC5jbGVhckxpc3RlbmVycyhjb250ZXh0TWVudUl0ZW0sICdjbGljaycpO1xuICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXJPbmNlKGNvbnRleHRNZW51SXRlbSwgJ2NsaWNrJywgY29udGV4dE1lbnVJdGVtTGlzdGVuZXIsIGZhbHNlKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHBvc2l0aW9uID0gZmluZEFic29sdXRlUG9zaXRpb24odGhpcy5lbGVtZW50KTtcbiAgICBjb25zdCBsZWZ0ID0gcG9zaXRpb25bMF0gKyBldmVudC5waXhlbC54IC0gMTU7XG4gICAgY29uc3QgdG9wID0gcG9zaXRpb25bMV0gKyBldmVudC5waXhlbC55IC0gMTU7XG5cbiAgICBjb250ZXh0TWVudUVsZW1lbnQuc3R5bGUubGVmdCA9IGAke2xlZnR9cHhgO1xuICAgIGNvbnRleHRNZW51RWxlbWVudC5zdHlsZS50b3AgPSBgJHt0b3B9cHhgO1xuICB9XG5cbiAgYnVpbGRDb250ZXh0TWVudShjb250cm9sLCBldmVudCkge1xuICAgIGlmIChjb250cm9sID09PSAnbWFya2VyJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBldmVudC5waXhlbCA9IHt9O1xuXG4gICAgICBjb25zdCBvdmVybGF5ID0gbmV3IGdvb2dsZS5tYXBzLk92ZXJsYXlWaWV3KCk7XG4gICAgICBvdmVybGF5LnNldE1hcCh0aGlzLm1hcCk7XG5cbiAgICAgIG92ZXJsYXkuZHJhdyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdGlvbiA9IG92ZXJsYXkuZ2V0UHJvamVjdGlvbigpO1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGV2ZW50Lm1hcmtlci5nZXRQb3NpdGlvbigpO1xuXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICBldmVudC5waXhlbCA9IHByb2plY3Rpb24uZnJvbUxhdExuZ1RvQ29udGFpbmVyUGl4ZWwocG9zaXRpb24pO1xuXG4gICAgICAgIHRoaXMuYnVpbGRDb250ZXh0TWVudUhUTUwoY29udHJvbCwgZXZlbnQpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5idWlsZENvbnRleHRNZW51SFRNTChjb250cm9sLCBldmVudCk7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGV4dE1lbnVFbGVtZW50ID0gZ2V0RWxlbWVudEJ5SWQoR01BUFNfTUVOVV9JRCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnRleHRNZW51RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9LCAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBjb250ZXh0IG1lbnUgZm9yIGEgbWFwIG9yIGEgbWFya2VyLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRoZSBgb3B0aW9uc2Agb2JqZWN0IHNob3VsZCBjb250YWluOlxuICAgKiAqIGBjb250cm9sYCAoc3RyaW5nKTogS2luZCBvZiBjb250cm9sIHRoZSBjb250ZXh0IG1lbnUgd2lsbCBiZSBhdHRhY2hlZC4gQ2FuIGJlIFwibWFwXCIgb3IgXCJtYXJrZXJcIi5cbiAgICogKiBgb3B0aW9uc2AgKGFycmF5KTogQSBjb2xsZWN0aW9uIG9mIGNvbnRleHQgbWVudSBpdGVtczpcbiAgICogICAqIGB0aXRsZWAgKHN0cmluZyk6IEl0ZW0ncyB0aXRsZSBzaG93biBpbiB0aGUgY29udGV4dCBtZW51LlxuICAgKiAgICogYG5hbWVgIChzdHJpbmcpOiBJdGVtJ3MgaWRlbnRpZmllci5cbiAgICogICAqIGBhY3Rpb25gIChmdW5jdGlvbik6IEZ1bmN0aW9uIHRyaWdnZXJlZCBhZnRlciBzZWxlY3RpbmcgdGhlIGNvbnRleHQgbWVudSBpdGVtLlxuICAgKi9cbiAgc2V0Q29udGV4dE1lbnUob3B0aW9ucykge1xuICAgIEdNYXBzLmNvbnRleHRNZW51c1t0aGlzLmlkXVtvcHRpb25zLmNvbnRyb2xdID0ge307XG5cbiAgICBPYmplY3Qua2V5cyhvcHRpb25zLm9wdGlvbnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gb3B0aW9ucy5vcHRpb25zW2tleV07XG5cbiAgICAgIEdNYXBzLmNvbnRleHRNZW51c1t0aGlzLmlkXVtvcHRpb25zLmNvbnRyb2xdW29wdGlvbi5uYW1lXSA9IHtcbiAgICAgICAgdGl0bGU6IG9wdGlvbi50aXRsZSxcbiAgICAgICAgYWN0aW9uOiBvcHRpb24uYWN0aW9uLFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGxldCBjb250ZXh0TWVudUVsZW1lbnQgPSBnZXRFbGVtZW50QnlJZChHTUFQU19NRU5VX0lEKTtcblxuICAgIGlmICghY29udGV4dE1lbnVFbGVtZW50KSB7XG4gICAgICBjb250ZXh0TWVudUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gICAgICBjb250ZXh0TWVudUVsZW1lbnQuaWQgPSBHTUFQU19NRU5VX0lEO1xuICAgICAgY29udGV4dE1lbnVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBjb250ZXh0TWVudUVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgY29udGV4dE1lbnVFbGVtZW50LnN0eWxlLm1pbldpZHRoID0gJzEwMHB4JztcbiAgICAgIGNvbnRleHRNZW51RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3doaXRlJztcbiAgICAgIGNvbnRleHRNZW51RWxlbWVudC5zdHlsZS5saXN0U3R5bGUgPSAnbm9uZSc7XG4gICAgICBjb250ZXh0TWVudUVsZW1lbnQuc3R5bGUucGFkZGluZyA9ICc4cHgnO1xuICAgICAgY29udGV4dE1lbnVFbGVtZW50LnN0eWxlLmJveFNoYWRvdyA9ICcycHggMnB4IDZweCAjY2NjJztcblxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZXh0TWVudUVsZW1lbnQpO1xuICAgIH1cblxuICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyKGNvbnRleHRNZW51RWxlbWVudCwgJ21vdXNlb3V0JywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWV2ZW50LnJlbGF0ZWRUYXJnZXQgfHwgIWV2ZW50LnRhcmdldC5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0KSkge1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgY29udGV4dE1lbnVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0sIDcwMCk7XG4gICAgICB9XG4gICAgfSwgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGUgdGhlIGN1cnJlbnQgY29udGV4dCBtZW51XG4gICAqL1xuICBoaWRlQ29udGV4dE1lbnUoKSB7XG4gICAgY29uc3QgY29udGV4dE1lbnVFbGVtZW50ID0gZ2V0RWxlbWVudEJ5SWQoR01BUFNfTUVOVV9JRCk7XG5cbiAgICBpZiAoY29udGV4dE1lbnVFbGVtZW50KSB7XG4gICAgICBjb250ZXh0TWVudUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciBhIGByZXNpemVgIGV2ZW50LCB1c2VmdWwgaWYgeW91IG5lZWQgdG8gcmVwYWludCB0aGUgY3VycmVudCBtYXAgKGZvciBjaGFuZ2VzIGluIHRoZSB2aWV3cG9ydCBvciBkaXNwbGF5IC8gaGlkZSBhY3Rpb25zKS5cbiAgICovXG4gIHJlZnJlc2goKSB7XG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQudHJpZ2dlcih0aGlzLm1hcCwgJ3Jlc2l6ZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkanVzdCB0aGUgbWFwIHpvb20gdG8gaW5jbHVkZSBhbGwgdGhlIGNvb3JkaW5hdGVzIGluIHRoZSBgbGF0TG5nc2AgYXJyYXkuXG4gICAqXG4gICAqIEBwYXJhbSB7YXJyYXl9IGxhdExuZ3MgLSBDb2xsZWN0aW9uIG9mIGBnb29nbGUubWFwcy5MYXRMbmdgIG9iamVjdHMuXG4gICAqL1xuICBmaXRMYXRMbmdCb3VuZHMobGF0TG5ncykge1xuICAgIGNvbnN0IGJvdW5kcyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMoKTtcblxuICAgIGxhdExuZ3MuZm9yRWFjaChsYXRMbmcgPT4gYm91bmRzLmV4dGVuZChsYXRMbmcpKTtcblxuICAgIHRoaXMubWFwLmZpdEJvdW5kcyhib3VuZHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkanVzdCB0aGUgbWFwIHpvb20gdG8gaW5jbHVkZSBhbGwgdGhlIG1hcmtlcnMgYWRkZWQgaW4gdGhlIG1hcC5cbiAgICovXG4gIGZpdFpvb20oKSB7XG4gICAgY29uc3QgbGF0TG5ncyA9IHRoaXMubWFya2Vyc1xuICAgICAgLmZpbHRlcihtYXJrZXIgPT4gbWFya2VyLnZpc2libGUpXG4gICAgICAubWFwKG1hcmtlciA9PiBtYXJrZXIuZ2V0UG9zaXRpb24oKSk7XG5cbiAgICB0aGlzLmZpdExhdExuZ0JvdW5kcyhsYXRMbmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDZW50ZXIgdGhlIG1hcCB1c2luZyB0aGUgYGxhdGAgYW5kIGBsbmdgIGNvb3JkaW5hdGVzLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gbGF0aXR1ZGUgLSBMYXRpdHVkZSBvZiB0aGUgY29vcmRpbmF0ZS4gSWYgYGxhdGl0dWRlYCBhbmQgYGxvbmdpdHVkZWAgYXJlIHNldCwgYHBvc2l0aW9uYCBpcyBpZ25vcmVkLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbG9uZ2l0dWRlIC0gTG9uZ2l0dWRlIG9mIHRoZSBjb29yZGluYXRlLiBJZiBgbGF0aXR1ZGVgIGFuZCBgbG9uZ2l0dWRlYCBhcmUgc2V0LCBgcG9zaXRpb25gIGlzIGlnbm9yZWQuXG4gICAqIEBwYXJhbSB7Z29vZ2xlLm1hcHMuTGF0TG5nfSBwb3NpdGlvbiAtIEEgYGdvb2dsZS5tYXBzLkxhdExuZ2AgY29vcmRpbmF0ZSBpbmRpY2F0ZSB0aGUgcG9zaXRpb24uIElmIHNldCwgYGxhdGl0dWRlYCBhbmQgYGxvbmdpdHVkZWAgYXJlIGlnbm9yZWQuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtjYWxsYmFja10gLSBDYWxsYmFjayB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgYWZ0ZXIgdGhlIG1hcCBpcyBjZW50ZXJlZC5cbiAgICovXG4gIHNldENlbnRlciguLi5hcmdzKSB7XG4gICAgY29uc3QgbGF0TG5nID0gbGF0TG5nRnJvbUFyZ3VtZW50cyguLi5hcmdzKTtcbiAgICBjb25zdCBjYWxsYmFjayA9IGFyZ3Muc2xpY2UoKS5wb3AoKTtcblxuICAgIHRoaXMubWFwLnBhblRvKGxhdExuZyk7XG5cbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWxsYmFjay5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIEhUTUwgZWxlbWVudCBjb250YWluZXIgb2YgdGhlIG1hcC5cbiAgICpcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fSB0aGUgZWxlbWVudCBjb250YWluZXIuXG4gICAqL1xuICBnZXRFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogSW5jcmVhc2UgdGhlIG1hcCdzIHpvb20uXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbbWFnbml0dWRlXSAtIFRoZSBudW1iZXIgb2YgdGltZXMgdGhlIG1hcCB3aWxsIGJlIHpvb21lZCBpbi5cbiAgICovXG4gIHpvb21JbihtYWduaXR1ZGUgPSAxKSB7XG4gICAgdGhpcy56b29tID0gdGhpcy5tYXAuZ2V0Wm9vbSgpICsgbWFnbml0dWRlO1xuICAgIHRoaXMubWFwLnNldFpvb20odGhpcy56b29tKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWNyZWFzZSB0aGUgbWFwJ3Mgem9vbS5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IFttYWduaXR1ZGVdIC0gVGhlIG51bWJlciBvZiB0aW1lcyB0aGUgbWFwIHdpbGwgYmUgem9vbWVkIG91dC5cbiAgICovXG4gIHpvb21PdXQobWFnbml0dWRlID0gMSkge1xuICAgIHRoaXMuem9vbSA9IHRoaXMubWFwLmdldFpvb20oKSAtIG1hZ25pdHVkZTtcbiAgICB0aGlzLm1hcC5zZXRab29tKHRoaXMuem9vbSk7XG4gIH1cbn1cblxuR01hcHMuY29udGV4dE1lbnVzID0ge307XG5cbmNvbnN0IGdvb2dsZU1hcHNNYXBNZXRob2RzID0gT2JqZWN0LmtleXMoZ29vZ2xlLm1hcHMuTWFwLnByb3RvdHlwZSlcbiAgLmZpbHRlcihrZXkgPT4gKHR5cGVvZiBnb29nbGUubWFwcy5NYXAucHJvdG90eXBlW2tleV0gPT09ICdmdW5jdGlvbicgJiYgIUdNYXBzLnByb3RvdHlwZVtrZXldKSk7XG5cbmdvb2dsZU1hcHNNYXBNZXRob2RzLmZvckVhY2goKG1ldGhvZE5hbWUpID0+IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgR01hcHMucHJvdG90eXBlW21ldGhvZE5hbWVdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gdGhpcy5tYXBbbWV0aG9kTmFtZV0uYXBwbHkodGhpcy5tYXAsIGFyZ3MpO1xuICB9O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXBzO1xuIiwiaW1wb3J0IEdNYXBzIGZyb20gJy4vY29yZSc7XG5cbi8qKlxuICogRXh0ZW5kcyBHTWFwcyB0byBiaW5kIGFuZCB0cmlnZ2VyIGV2ZW50cy5cbiAqIEBtb2R1bGUgRXZlbnRzXG4gKi9cblxuLyoqXG4gKiBDb2xsZWN0aW9uIG9mIGN1c3RvbSBldmVudHMgdGhhdCBjYW4gYmUgcmVnaXN0ZXJlZCBhbmQgZmlyZWQuXG4gKlxuICogQHR5cGUge2FycmF5fVxuICovXG5HTWFwcy5jdXN0b21FdmVudHMgPSBbJ21hcmtlcl9hZGRlZCcsICdtYXJrZXJfcmVtb3ZlZCcsICdwb2x5bGluZV9hZGRlZCcsICdwb2x5bGluZV9yZW1vdmVkJywgJ3BvbHlnb25fYWRkZWQnLCAncG9seWdvbl9yZW1vdmVkJywgJ2xheWVyX2FkZGVkJywgJ2xheWVyX3JlbW92ZWQnLCAnb3ZlcmxheV9tYXBfdHlwZV9hZGRlZCcsICdvdmVybGF5X21hcF90eXBlX3JlbW92ZWQnLCAnb3ZlcmxheV9hZGRlZCcsICdvdmVybGF5X3JlbW92ZWQnLCAnZ2VvbG9jYXRlZCcsICdnZW9sb2NhdGlvbl9mYWlsZWQnXTtcblxuLyoqXG4gKiBBZGQgYW4gZXZlbnQgKG5hdGl2ZSBvciBjdXN0b20pIHRvIGFuIG9iamVjdC5cbiAqIEBmdW5jdGlvbiBvblxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnQuIEl0IGNhbiBiZSBhbnkgb2YgdGhlIG5hdGl2ZSBldmVudHMgZnJvbSBHb29nbGUgTWFwcywgb3IgdGhlIG9uZXMgZGVzY3JpYmVkIGluIGBHTWFwcy5jdXN0b21FdmVudHNgLlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldCAtIFRoZSB0YXJnZXQgb2YgdGhlIGV2ZW50LiBJdCBjYW4gYmUgYSBuYXRpdmUgb2JqZWN0IGZyb20gR29vZ2xlIE1hcHMsIChzdWNoIGFzIGEgZ29vZ2xlLm1hcHMuTWFwLCBnb29nbGUubWFwcy5NYXJrZXIsIGV0Yy4pLCBvciBhIEdNYXBzIGluc3RhbmNlLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlciAtIFRoZSBoYW5kbGVyIChvZnRlbiBjYWxsZWQgbGlzdGVuZXIpIG9mIHRoZSBldmVudC4gSXMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgZXZlcnkgdGltZSB0aGUgZXZlbnQgaXMgZmlyZWQuXG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xuR01hcHMub24gPSAoZXZlbnROYW1lLCBvYmplY3QsIGhhbmRsZXIpID0+IHtcbiAgbGV0IHRhcmdldCA9IG9iamVjdDtcblxuICBpZiAoR01hcHMuY3VzdG9tRXZlbnRzLmluZGV4T2YoZXZlbnROYW1lKSA9PT0gLTEpIHtcbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgR01hcHMpIHtcbiAgICAgIHRhcmdldCA9IHRhcmdldC5tYXA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKHRhcmdldCwgZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgfVxuXG4gIGNvbnN0IHJlZ2lzdGVyZWRFdmVudCA9IHtcbiAgICBoYW5kbGVyLFxuICAgIGV2ZW50TmFtZSxcbiAgfTtcblxuICB0YXJnZXQucmVnaXN0ZXJlZEV2ZW50c1tldmVudE5hbWVdID0gdGFyZ2V0LnJlZ2lzdGVyZWRFdmVudHNbZXZlbnROYW1lXSB8fCBbXTtcbiAgdGFyZ2V0LnJlZ2lzdGVyZWRFdmVudHNbZXZlbnROYW1lXS5wdXNoKHJlZ2lzdGVyZWRFdmVudCk7XG5cbiAgcmV0dXJuIHJlZ2lzdGVyZWRFdmVudDtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGV2ZW50IChuYXRpdmUgb3IgY3VzdG9tKSB0byBhbiBvYmplY3QuXG4gKiBAZnVuY3Rpb24gb2ZmXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudC4gSXQgY2FuIGJlIGFueSBvZiB0aGUgbmF0aXZlIGV2ZW50cyBmcm9tIEdvb2dsZSBNYXBzLCBvciB0aGUgb25lcyBkZXNjcmliZWQgaW4gYEdNYXBzLmN1c3RvbUV2ZW50c2AuXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0IC0gVGhlIHRhcmdldCBvZiB0aGUgZXZlbnQuIEl0IGNhbiBiZSBhIG5hdGl2ZSBvYmplY3QgZnJvbSBHb29nbGUgTWFwcywgKHN1Y2ggYXMgYSBnb29nbGUubWFwcy5NYXAsIGdvb2dsZS5tYXBzLk1hcmtlciwgZXRjLiksIG9yIGEgR01hcHMgaW5zdGFuY2UuXG4gKi9cbkdNYXBzLm9mZiA9IChldmVudE5hbWUsIG9iamVjdCkgPT4ge1xuICBsZXQgdGFyZ2V0ID0gb2JqZWN0O1xuXG4gIGlmIChHTWFwcy5jdXN0b21FdmVudHMuaW5kZXhPZihldmVudE5hbWUpID09PSAtMSkge1xuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBHTWFwcykge1xuICAgICAgdGFyZ2V0ID0gdGFyZ2V0Lm1hcDtcbiAgICB9XG5cbiAgICBnb29nbGUubWFwcy5ldmVudC5jbGVhckxpc3RlbmVycyh0YXJnZXQsIGV2ZW50TmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0LnJlZ2lzdGVyZWRFdmVudHNbZXZlbnROYW1lXSA9IFtdO1xuICB9XG59O1xuXG4vKipcbiAqIEFkZCBhIG5hdGl2ZSBldmVudCB0aGF0IHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoZSB0YXJnZXQgYWZ0ZXIgaXQgaGFzIGJlZW4gZXhlY3V0ZWQgb25jZS5cbiAqIEBmdW5jdGlvbiBvbmNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudC4gSXQgaGFzIHRvIGJlIGFueSBvZiB0aGUgbmF0aXZlIGV2ZW50cyBmcm9tIEdvb2dsZSBNYXBzLlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldCAtIFRoZSB0YXJnZXQgb2YgdGhlIGV2ZW50LiBJdCBoYXMgdG8gYmUgYSBuYXRpdmUgb2JqZWN0IGZyb20gR29vZ2xlIE1hcHMsIHN1Y2ggYXMgYSBnb29nbGUubWFwcy5NYXAsIGdvb2dsZS5tYXBzLk1hcmtlciwgZXRjLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlciAtIFRoZSBoYW5kbGVyIChvZnRlbiBjYWxsZWQgbGlzdGVuZXIpIG9mIHRoZSBldmVudC4gSXMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiB0aGUgZXZlbnQgaXMgZmlyZWQgdGhlIGZpcnN0IHRpbWUuXG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xuR01hcHMub25jZSA9IChldmVudE5hbWUsIG9iamVjdCwgaGFuZGxlcikgPT4ge1xuICBsZXQgdGFyZ2V0ID0gb2JqZWN0O1xuXG4gIGlmIChHTWFwcy5jdXN0b21FdmVudHMuaW5kZXhPZihldmVudE5hbWUpID09PSAtMSkge1xuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBHTWFwcykge1xuICAgICAgdGFyZ2V0ID0gdGFyZ2V0Lm1hcDtcbiAgICB9XG5cbiAgICByZXR1cm4gZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXJPbmNlKHRhcmdldCwgZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG4vKipcbiAqIFRyaWdnZXIgYW4gZXZlbnQgKG5hdGl2ZSBvciBjdXN0b20pIGFuZCBleGVjdXRlIGFsbCB0aGUgaGFuZGxlcnMgcmVnaXN0ZXJlZCBwcmV2aW91c2x5LlxuICogQGZ1bmN0aW9uIGZpcmVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50LiBJdCBjYW4gYmUgYW55IG9mIHRoZSBuYXRpdmUgZXZlbnRzIGZyb20gR29vZ2xlIE1hcHMsIG9yIHRoZSBvbmVzIGRlc2NyaWJlZCBpbiBgR01hcHMuY3VzdG9tRXZlbnRzYC5cbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXQgLSBUaGUgdGFyZ2V0IG9mIHRoZSBldmVudC4gSXQgY2FuIGJlIGEgbmF0aXZlIG9iamVjdCBmcm9tIEdvb2dsZSBNYXBzLCAoc3VjaCBhcyBhIGdvb2dsZS5tYXBzLk1hcCwgZ29vZ2xlLm1hcHMuTWFya2VyLCBldGMuKSwgb3IgYSBHTWFwcyBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IC0gVGhlIGNvbnRleHQgZm9yIHRoZSBldmVudCBoYW5kbGVyIChyZXByZXNlbnRlZCBieSBgdGhpc2Aga2V5d29yZCBpbnNpZGUgdGhlIGhhbmRsZXIpLlxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbkdNYXBzLmZpcmUgPSAoZXZlbnROYW1lLCBvYmplY3QsIGNvbnRleHQpID0+IHtcbiAgaWYgKEdNYXBzLmN1c3RvbUV2ZW50cy5pbmRleE9mKGV2ZW50TmFtZSkgPT09IC0xKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgY29uc3QgZXZlbnRBcmd1bWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoYXJndW1lbnRzKS5zbGljZSgyKTtcbiAgICBnb29nbGUubWFwcy5ldmVudC50cmlnZ2VyKG9iamVjdCwgZXZlbnROYW1lLCBldmVudEFyZ3VtZW50cyk7XG4gIH0gZWxzZSBpZiAoZXZlbnROYW1lIGluIGNvbnRleHQucmVnaXN0ZXJlZEV2ZW50cykge1xuICAgIGNvbnRleHQucmVnaXN0ZXJlZEV2ZW50c1tldmVudE5hbWVdLmZvckVhY2gocmVnaXN0ZXJlZEV2ZW50ID0+XG4gICAgICByZWdpc3RlcmVkRXZlbnQuaGFuZGxlci5jYWxsKGNvbnRleHQsIG9iamVjdClcbiAgICApO1xuICB9XG59O1xuXG5HTWFwcy5wcm90b3R5cGUub24gPSBmdW5jdGlvbiBvbihldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgcmV0dXJuIEdNYXBzLm9uKGV2ZW50TmFtZSwgdGhpcywgaGFuZGxlcik7XG59O1xuXG5HTWFwcy5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24gb2ZmKGV2ZW50TmFtZSkge1xuICBHTWFwcy5vZmYoZXZlbnROYW1lLCB0aGlzKTtcbn07XG5cbkdNYXBzLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZShldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgcmV0dXJuIEdNYXBzLm9uY2UoZXZlbnROYW1lLCB0aGlzLCBoYW5kbGVyKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXBzO1xuIiwiaW1wb3J0IEdNYXBzLCB7IGxhdExuZ0Zyb21Bcmd1bWVudHMgfSBmcm9tICcuL2NvcmUnO1xuaW1wb3J0ICcuL3BvbHlmaWxscyc7XG5cbi8qKlxuICogRXh0ZW5kcyBHTWFwcyB0byB1c2UgZ2VvZmVuY2VzLlxuICogQG1vZHVsZSBHZW9mZW5jZXNcbiAqL1xuXG4vKipcbiAqIENoZWNrIGlmIGEgY29vcmRpbmF0ZSBpcyBpbnNpZGUgb3Igbm90IGEgZ2VvZmVuY2UuXG4gKiBAZnVuY3Rpb24gY2hlY2tHZW9mZW5jZVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBsYXRMbmcgLSBBIExhdExuZ0xpdGVyYWwgb2JqZWN0IChhIHBsYWluIG9iamVjdCB3aXRoIGBsYXRgIGFuZCBgbG5nYCBwcm9wZXJ0aWVzKS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBmZW5jZSAtIEEgZmVuY2Ugb2JqZWN0LCB3aGljaCBjYW4gYmUgYW4gaW5zdGFuY2Ugb2YgYGdvb2dsZS5tYXBzLlBvbHlnb25gLCBgZ29vZ2xlLm1hcHMuQ2lyY2xlYCwgYGdvb2dsZS5tYXBzLlJlY3RhbmdsZWAgb3IgYGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kc2AuXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IElzIGB0cnVlYCBpZiB0aGUgY29vcmRpbmF0ZSBpcyBpbnNpZGUgdGhlIGZlbmNlLCBhbmQgYGZhbHNlYCBpZiBpcyBub3QuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5jaGVja0dlb2ZlbmNlID0gZnVuY3Rpb24gY2hlY2tHZW9mZW5jZSguLi5hcmdzKSB7XG4gIGNvbnN0IGxhZ0xuZyA9IGxhdExuZ0Zyb21Bcmd1bWVudHMoLi4uYXJncyk7XG4gIGNvbnN0IGZlbmNlID0gYXJncy5wb3AoKTtcblxuICByZXR1cm4gZmVuY2UuY29udGFpbnNMYXRMbmcobGFnTG5nKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBtYXJrZXIncyBwb3NpdGlvbiBpcyBpbnNpZGUgb3Igbm90IGFueSBvZiBpdHMgZ2VvZmVuY2VzLiBJdCB3aWxsIHRyaWdnZXIgdGhlIGBvdXRzaWRlQ2FsbGJhY2tgIGZ1bmN0aW9uIGZvciBldmVyeSBmZW5jZSB0aGF0IGNvbnRhaW5zIHRoZSBtYXJrZXIncyBwb3NpdGlvbi5cbiAqIEBmdW5jdGlvbiBjaGVja01hcmtlckdlb2ZlbmNlXG4gKlxuICogQHBhcmFtIHtnb29nbGUubWFwcy5NYXJrZXJ9IG1hcmtlciAtIEEgbWFya2VyIGFkZGVkIHdpdGggYEdNYXBzI2FkZE1hcmtlcmAuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvdXRzaWRlQ2FsbGJhY2sgLSBBIGZ1bmN0aW9uIHRoYXQgd2lsbCByZWNlaXZlIHR3byBhcmd1bWVudHM6IHRoZSBgbWFya2VyYCBhbmQgdGhlIGN1cnJlbnQgZmVuY2UuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5jaGVja01hcmtlckdlb2ZlbmNlID0gZnVuY3Rpb24gY2hlY2tNYXJrZXJHZW9mZW5jZShtYXJrZXIsIG91dHNpZGVDYWxsYmFjaykge1xuICBpZiAobWFya2VyLmZlbmNlcykge1xuICAgIG1hcmtlci5mZW5jZXMuZm9yRWFjaCgoZmVuY2UpID0+IHtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gbWFya2VyLmdldFBvc2l0aW9uKCk7XG5cbiAgICAgIGlmICghdGhpcy5jaGVja0dlb2ZlbmNlKHBvc2l0aW9uLCBmZW5jZSkpIHtcbiAgICAgICAgb3V0c2lkZUNhbGxiYWNrKG1hcmtlciwgZmVuY2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHTWFwcztcbiIsImltcG9ydCBHTWFwcywgeyBzZXR1cEV2ZW50cywgYXJyYXlUb0xhdExuZywgZmxhdHRlbkFycmF5IH0gZnJvbSAnLi9jb3JlJztcbmltcG9ydCAnLi9ldmVudHMnO1xuXG4vKipcbiAqIEV4dGVuZHMgR01hcHMgdG8gdXNlIHBvbHlsaW5lcyBhbmQgcG9seWdvbnMuXG4gKiBAbW9kdWxlIEdlb21ldHJ5XG4gKi9cblxuY29uc3QgRVZFTlRTID0gWydjbGljaycsICdkYmxjbGljaycsICdtb3VzZWRvd24nLCAnbW91c2Vtb3ZlJywgJ21vdXNlb3V0JywgJ21vdXNlb3ZlcicsICdtb3VzZXVwJywgJ3JpZ2h0Y2xpY2snXTtcblxuLyoqXG4gKiBEcmF3IGEgcG9seWxpbmUgaW4gdGhlIE1hcCBhbmQgYWRkIGl0IHRvIHRoZSBwb2x5bGluZXMgY29sbGVjdGlvbi4gVGhpcyBtZXRob2QgYWxzbyBmaXJlcyBhIGBwb2x5bGluZV9hZGRlZGAgZXZlbnQuXG4gKiBAZnVuY3Rpb24gZHJhd1BvbHlsaW5lXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgYG9wdGlvbnNgIG9iamVjdCBzaG91bGQgY29udGFpbjpcbiAqIEBwYXJhbSB7YXJyYXl9IG9wdGlvbnMucGF0aCAtIENvbGxlY3Rpb24gb2YgY29vcmRpbmF0ZXMgKHdoaWNoIGNhbiBiZSBlaXRoZXIgYW4gYXJyYXkgW2xhdCwgbG5nXSBvciBhIGdvb2dsZS5tYXBzLkxhdExuZyBvYmplY3QpLlxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc3Ryb2tlQ29sb3IgLSBDb2xvciBvZiB0aGUgcG9seWxpbmUuIENhbiBiZSBoZXhhZGVjaW1hbCBvciBDU1MgbmFtZS5cbiAqIEBwYXJhbSB7ZmxvYXR9IG9wdGlvbnMuc3Ryb2tlT3BhY2l0eSAtIE9wYWNpdHkgb2YgdGhlIHBvbHlsaW5lIGZyb20gMC4wIHRvIDEuMC5cbiAqIEBwYXJhbSB7aW50ZWdlcn0gb3B0aW9ucy5zdHJva2VXZWlnaHQgLSBQb2x5bGluZSB3aWR0aCBpbiBwaXhlbHMuXG4gKlxuICogQHNlZSBgb3B0aW9uc2AgYWxzbyBhY2NlcHRzIGFueSBvcHRpb24gZGVmaW5lZCBpbiB0aGUgW29mZmljaWFsIGRvY3VtZW50YXRpb25dKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNQb2x5bGluZU9wdGlvbnMpIGFuZCBhbnkgZXZlbnQgZGVmaW5lZCBpbiB0aGUgW1wiRXZlbnRzXCIgc2VjdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI1BvbHlsaW5lKS5cbiAqXG4gKiBAcmV0dXJucyB7Z29vZ2xlLm1hcHMuUG9seWxpbmV9XG4gKi9cbkdNYXBzLnByb3RvdHlwZS5kcmF3UG9seWxpbmUgPSBmdW5jdGlvbiBkcmF3UG9seWxpbmUoYmFzZU9wdGlvbnMpIHtcbiAgY29uc3QgeyBpY29ucywgc3Ryb2tlQ29sb3IsIHN0cm9rZU9wYWNpdHksIHN0cm9rZVdlaWdodCwgZ2VvZGVzaWMsIGNsaWNrYWJsZSA9IHRydWUsIGVkaXRhYmxlID0gZmFsc2UsIHZpc2libGUgPSB0cnVlLCB6SW5kZXgsIC4uLm9wdGlvbnMgfSA9IGJhc2VPcHRpb25zO1xuICBsZXQgcGF0aCA9IFtdO1xuXG4gIGlmIChvcHRpb25zLnBhdGgubGVuZ3RoKSB7XG4gICAgaWYgKG9wdGlvbnMucGF0aFswXVswXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXRoID0gWy4uLm9wdGlvbnMucGF0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhdGggPSBvcHRpb25zLnBhdGgubWFwKGxhdExuZyA9PlxuICAgICAgICBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGxhdExuZ1swXSwgbGF0TG5nWzFdKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBwb2x5bGluZU9wdGlvbnMgPSB7XG4gICAgLi4ub3B0aW9ucyxcbiAgICBtYXA6IHRoaXMubWFwLFxuICAgIHBhdGgsXG4gICAgc3Ryb2tlQ29sb3IsXG4gICAgc3Ryb2tlT3BhY2l0eSxcbiAgICBzdHJva2VXZWlnaHQsXG4gICAgZ2VvZGVzaWMsXG4gICAgdmlzaWJsZSxcbiAgICBjbGlja2FibGUsXG4gICAgZWRpdGFibGUsXG4gICAgaWNvbnMsXG4gICAgekluZGV4LFxuICB9O1xuXG4gIGNvbnN0IHBvbHlsaW5lID0gbmV3IGdvb2dsZS5tYXBzLlBvbHlsaW5lKHBvbHlsaW5lT3B0aW9ucyk7XG5cbiAgc2V0dXBFdmVudHMoeyBldmVudHM6IEVWRU5UUywgb2JqZWN0OiBwb2x5bGluZSwgaW5zdGFuY2U6IHRoaXMsIGhhbmRsZXJzOiBvcHRpb25zLCB9KTtcblxuICB0aGlzLnBvbHlsaW5lcy5wdXNoKHBvbHlsaW5lKTtcblxuICBHTWFwcy5maXJlKCdwb2x5bGluZV9hZGRlZCcsIHBvbHlsaW5lLCB0aGlzKTtcblxuICByZXR1cm4gcG9seWxpbmU7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhIHBvbHlsaW5lIGZyb20gdGhlIG1hcCBhbmQgZnJvbSB0aGUgcG9seWxpbmVzIGNvbGxlY3Rpb24uIFRoaXMgbWV0aG9kIGFsc28gZmlyZXMgYSBgcG9seWxpbmVfcmVtb3ZlZGAgZXZlbnQuXG4gKiBAZnVuY3Rpb24gcmVtb3ZlUG9seWxpbmVcbiAqXG4gKiBAcGFyYW0ge2dvb2dsZS5tYXBzLlBvbHlsaW5lfSBwb2x5bGluZSAtIFRoZSBwb2x5bGluZSB0byBiZSByZW1vdmVkLlxuICovXG5HTWFwcy5wcm90b3R5cGUucmVtb3ZlUG9seWxpbmUgPSBmdW5jdGlvbiByZW1vdmVQb2x5bGluZShwb2x5bGluZSkge1xuICBjb25zdCBwb2x5bGluZUluZGV4ID0gdGhpcy5wb2x5bGluZXMuaW5kZXhPZihwb2x5bGluZSk7XG5cbiAgaWYgKHBvbHlsaW5lSW5kZXggPj0gMCkge1xuICAgIHBvbHlsaW5lLnNldE1hcChudWxsKTtcbiAgICB0aGlzLnBvbHlsaW5lcy5zcGxpY2UocG9seWxpbmVJbmRleCwgMSk7XG5cbiAgICBHTWFwcy5maXJlKCdwb2x5bGluZV9yZW1vdmVkJywgcG9seWxpbmUsIHRoaXMpO1xuICB9XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbGwgdGhlIHBvbHlsaW5lcyBmcm9tIHRoZSBtYXAgYW5kIGNsZWFyIHRoZSBwb2x5bGluZXMgY29sbGVjdGlvbi4gVGhpcyBtZXRob2QgZG9lcyBub3QgZmlyZSBhIGBwb2x5bGluZV9yZW1vdmVkYCBldmVudC5cbiAqIEBmdW5jdGlvbiByZW1vdmVQb2x5bGluZXNcbiAqL1xuR01hcHMucHJvdG90eXBlLnJlbW92ZVBvbHlsaW5lcyA9IGZ1bmN0aW9uIHJlbW92ZVBvbHlsaW5lcygpIHtcbiAgdGhpcy5wb2x5bGluZXMuZm9yRWFjaChwb2x5bGluZSA9PiBwb2x5bGluZS5zZXRNYXAobnVsbCkpO1xuXG4gIHRoaXMucG9seWxpbmVzID0gW107XG59O1xuXG4vKipcbiAqIERyYXcgYSBjaXJjbGUgaW4gdGhlIE1hcCBhbmQgaXQgdG8gdGhlIHBvbHlnb25zIGNvbGxlY3Rpb24uXG4gKiBAZnVuY3Rpb24gZHJhd0NpcmNsZVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBvYmplY3Qgc2hvdWxkIGNvbnRhaW46XG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5sYXRpdHVkZSAtIExhdGl0dWRlIG9mIHRoZSBjZW50ZXIuIElmIGBsYXRpdHVkZWAgYW5kIGBsb25naXR1ZGVgIGFyZSBzZXQsIGBjZW50ZXJgaXMgaWdub3JlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLmxvbmdpdHVkZSAtIExvbmdpdHVkZSBvZiB0aGUgY2VudGVyLiBJZiBgbGF0aXR1ZGVgIGFuZCBgbG9uZ2l0dWRlYCBhcmUgc2V0LCBgY2VudGVyYGlzIGlnbm9yZWQuXG4gKiBAcGFyYW0ge2dvb2dsZS5tYXBzLkxhdExuZ30gb3B0aW9ucy5jZW50ZXIgLSBBIGBnb29nbGUubWFwcy5MYXRMbmdgIGNvb3JkaW5hdGUgaW5kaWNhdGUgdGhlIGNlbnRlci4gSWYgc2V0LCBgbGF0aXR1ZGVgIGFuZCBgbG9uZ2l0dWRlYCBhcmUgaWdub3JlZC5cbiAqXG4gKiBAc2VlIGBvcHRpb25zYCBhbHNvIGFjY2VwdHMgYW55IG9wdGlvbiBkZWZpbmVkIGluIHRoZSBbb2ZmaWNpYWwgZG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI0NpcmNsZU9wdGlvbnMpIGFuZCBhbnkgZXZlbnQgZGVmaW5lZCBpbiB0aGUgW1wiRXZlbnRzXCIgc2VjdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI0NpcmNsZSkuXG4gKlxuICogQHJldHVybnMge2dvb2dsZS5tYXBzLkNpcmNsZX1cbiAqL1xuR01hcHMucHJvdG90eXBlLmRyYXdDaXJjbGUgPSBmdW5jdGlvbiBkcmF3Q2lyY2xlKGJhc2VPcHRpb25zKSB7XG4gIGNvbnN0IHsgbGF0LCBsYXRpdHVkZSA9IGxhdCwgbG5nLCBsb25naXR1ZGUgPSBsbmcsIC4uLm9wdGlvbnMgfSA9IGJhc2VPcHRpb25zO1xuICBjb25zdCB7IGNlbnRlciA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobGF0aXR1ZGUsIGxvbmdpdHVkZSksIH0gPSBvcHRpb25zO1xuICBjb25zdCBwb2x5Z29uT3B0aW9ucyA9IHtcbiAgICAuLi5vcHRpb25zLFxuICAgIG1hcDogdGhpcy5tYXAsXG4gICAgY2VudGVyLFxuICB9O1xuXG4gIGNvbnN0IHBvbHlnb24gPSBuZXcgZ29vZ2xlLm1hcHMuQ2lyY2xlKHBvbHlnb25PcHRpb25zKTtcblxuICBzZXR1cEV2ZW50cyh7IGV2ZW50czogRVZFTlRTLCBvYmplY3Q6IHBvbHlnb24sIGluc3RhbmNlOiB0aGlzLCBoYW5kbGVyczogb3B0aW9ucywgfSk7XG5cbiAgdGhpcy5wb2x5Z29ucy5wdXNoKHBvbHlnb24pO1xuXG4gIHJldHVybiBwb2x5Z29uO1xufTtcblxuLyoqXG4gKiBEcmF3IGEgcmVjdGFuZ2xlIGluIHRoZSBNYXAgYW5kIGl0IHRvIHRoZSBwb2x5Z29ucyBjb2xsZWN0aW9uLlxuICogQGZ1bmN0aW9uIGRyYXdSZWN0YW5nbGVcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRoZSBgb3B0aW9uc2Agb2JqZWN0IHNob3VsZCBjb250YWluOlxuICogQHBhcmFtIHthcnJheX0gb3B0aW9ucy5ib3VuZHMgLSBCaS1kaW1lbnNpb25hbCBhcnJheSBvZiBsYXRpdHVkZXMgYW5kIGxvbmdpdHVkZXMuXG4gKlxuICogQHNlZSBgb3B0aW9uc2AgYWxzbyBhY2NlcHRzIGFueSBvcHRpb24gZGVmaW5lZCBpbiB0aGUgW29mZmljaWFsIGRvY3VtZW50YXRpb25dKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNSZWN0YW5nbGVPcHRpb25zKSBhbmQgYW55IGV2ZW50IGRlZmluZWQgaW4gdGhlIFtcIkV2ZW50c1wiIHNlY3Rpb25dKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNSZWN0YW5nbGUpLlxuICpcbiAqIEByZXR1cm5zIHtnb29nbGUubWFwcy5SZWN0YW5nbGV9XG4gKi9cbkdNYXBzLnByb3RvdHlwZS5kcmF3UmVjdGFuZ2xlID0gZnVuY3Rpb24gZHJhd1JlY3RhbmdsZShiYXNlT3B0aW9ucykge1xuICBjb25zdCB7IGJvdW5kcywgLi4ub3B0aW9ucyB9ID0gYmFzZU9wdGlvbnM7XG5cbiAgY29uc3QgbGF0TG5nQm91bmRzID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcyhcbiAgICBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGJvdW5kc1swXVswXSwgYm91bmRzWzBdWzFdKSxcbiAgICBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGJvdW5kc1sxXVswXSwgYm91bmRzWzFdWzFdKVxuICApO1xuXG4gIGNvbnN0IHBvbHlnb25PcHRpb25zID0ge1xuICAgIC4uLm9wdGlvbnMsXG4gICAgYm91bmRzOiBsYXRMbmdCb3VuZHMsXG4gICAgbWFwOiB0aGlzLm1hcCxcbiAgfTtcblxuICBjb25zdCBwb2x5Z29uID0gbmV3IGdvb2dsZS5tYXBzLlJlY3RhbmdsZShwb2x5Z29uT3B0aW9ucyk7XG5cbiAgc2V0dXBFdmVudHMoeyBldmVudHM6IEVWRU5UUywgb2JqZWN0OiBwb2x5Z29uLCBpbnN0YW5jZTogdGhpcywgaGFuZGxlcnM6IG9wdGlvbnMsIH0pO1xuXG4gIHRoaXMucG9seWdvbnMucHVzaChwb2x5Z29uKTtcblxuICByZXR1cm4gcG9seWdvbjtcbn07XG5cbi8qKlxuICogRHJhdyBhIHBvbHlnb24gaW4gdGhlIE1hcCBhbmQgaXQgdG8gdGhlIHBvbHlnb25zIGNvbGxlY3Rpb24uXG4gKiBAZnVuY3Rpb24gZHJhd1BvbHlnb25cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRoZSBgb3B0aW9uc2Agb2JqZWN0IHNob3VsZCBjb250YWluOlxuICogQHBhcmFtIHthcnJheX0gb3B0aW9ucy5wYXRocyAtIEJpLWRpbWVuc2lvbmFsIGFycmF5IG9mIGxhdGl0dWRlcyBhbmQgbG9uZ2l0dWRlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy51c2VHZW9KU09OIC0gSWYgc2V0LCBhbGxvd3MgYHBhdGhzYCB0byB1c2UgR2VvSlNPTiBmb3JtYXQuXG4gKlxuICogQHNlZSBgb3B0aW9uc2AgYWxzbyBhY2NlcHRzIGFueSBvcHRpb24gZGVmaW5lZCBpbiB0aGUgW29mZmljaWFsIGRvY3VtZW50YXRpb25dKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNQb2x5Z29uT3B0aW9ucykgYW5kIGFueSBldmVudCBkZWZpbmVkIGluIHRoZSBbXCJFdmVudHNcIiBzZWN0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjUG9seWdvbikuXG4gKlxuICogQHJldHVybnMge2dvb2dsZS5tYXBzLlBvbHlnb259XG4gKi9cbkdNYXBzLnByb3RvdHlwZS5kcmF3UG9seWdvbiA9IGZ1bmN0aW9uIGRyYXdQb2x5Z29uKGJhc2VPcHRpb25zKSB7XG4gIGNvbnN0IHsgdXNlR2VvSlNPTiA9IGZhbHNlLCAuLi5vcHRpb25zIH0gPSBiYXNlT3B0aW9ucztcblxuICBjb25zdCBiYXNlUGF0aHMgPSB1c2VHZW9KU09OID8gb3B0aW9ucy5wYXRocyA6IFtvcHRpb25zLnBhdGhzLnNsaWNlKDApXTtcbiAgbGV0IHBhdGhzID0gW107XG5cbiAgaWYgKGJhc2VQYXRocy5sZW5ndGgpIHtcbiAgICBpZiAoYmFzZVBhdGhzWzBdLmxlbmd0aCkge1xuICAgICAgcGF0aHMgPSBmbGF0dGVuQXJyYXkoXG4gICAgICAgIGJhc2VQYXRocy5tYXAocGF0aCA9PlxuICAgICAgICAgIGFycmF5VG9MYXRMbmcocGF0aCwgdXNlR2VvSlNPTilcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBwb2x5Z29uT3B0aW9ucyA9IHtcbiAgICAuLi5vcHRpb25zLFxuICAgIG1hcDogdGhpcy5tYXAsXG4gICAgcGF0aHMsXG4gIH07XG5cbiAgY29uc3QgcG9seWdvbiA9IG5ldyBnb29nbGUubWFwcy5Qb2x5Z29uKHBvbHlnb25PcHRpb25zKTtcblxuICBzZXR1cEV2ZW50cyh7IGV2ZW50czogRVZFTlRTLCBvYmplY3Q6IHBvbHlnb24sIGluc3RhbmNlOiB0aGlzLCBoYW5kbGVyczogb3B0aW9ucywgfSk7XG5cbiAgdGhpcy5wb2x5Z29ucy5wdXNoKHBvbHlnb24pO1xuXG4gIEdNYXBzLmZpcmUoJ3BvbHlnb25fYWRkZWQnLCBwb2x5Z29uLCB0aGlzKTtcblxuICByZXR1cm4gcG9seWdvbjtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGEgcG9seWdvbiBmcm9tIHRoZSBtYXAgYW5kIGZyb20gdGhlIHBvbHlnb25zIGNvbGxlY3Rpb24uIFRoaXMgbWV0aG9kIGFsc28gZmlyZXMgYSBgcG9seWdvbl9yZW1vdmVkYCBldmVudC5cbiAqIEBmdW5jdGlvbiByZW1vdmVQb2x5Z29uXG4gKlxuICogQHBhcmFtIHtnb29nbGUubWFwcy5Qb2x5Z29ufSBwb2x5Z29uIC0gVGhlIHBvbHlnb24gdG8gYmUgcmVtb3ZlZC5cbiAqL1xuR01hcHMucHJvdG90eXBlLnJlbW92ZVBvbHlnb24gPSBmdW5jdGlvbiByZW1vdmVQb2x5Z29uKHBvbHlnb24pIHtcbiAgY29uc3QgcG9seWdvbkluZGV4ID0gdGhpcy5wb2x5Z29ucy5pbmRleE9mKHBvbHlnb24pO1xuXG4gIGlmIChwb2x5Z29uSW5kZXggPj0gMCkge1xuICAgIHBvbHlnb24uc2V0TWFwKG51bGwpO1xuICAgIHRoaXMucG9seWdvbnMuc3BsaWNlKHBvbHlnb25JbmRleCwgMSk7XG5cbiAgICBHTWFwcy5maXJlKCdwb2x5Z29uX3JlbW92ZWQnLCBwb2x5Z29uLCB0aGlzKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZW1vdmUgYWxsIHRoZSBwb2x5Z29ucyBmcm9tIHRoZSBtYXAgYW5kIGNsZWFyIHRoZSBwb2x5Z29ucyBjb2xsZWN0aW9uLiBUaGlzIG1ldGhvZCBkb2VzIG5vdCBmaXJlIGEgYHBvbHlnb25fcmVtb3ZlZGAgZXZlbnQuXG4gKiBAZnVuY3Rpb24gcmVtb3ZlUG9seWdvbnNcbiAqL1xuR01hcHMucHJvdG90eXBlLnJlbW92ZVBvbHlnb25zID0gZnVuY3Rpb24gcmVtb3ZlUG9seWdvbnMoKSB7XG4gIHRoaXMucG9seWdvbnMuZm9yRWFjaChwb2x5Z29uID0+IHBvbHlnb24uc2V0TWFwKG51bGwpKTtcblxuICB0aGlzLnBvbHlnb25zID0gW107XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHTWFwcztcbiIsImltcG9ydCBHTWFwcyBmcm9tICcuL2NvcmUnO1xuaW1wb3J0ICcuL2V2ZW50cyc7XG5pbXBvcnQgJy4vY29udHJvbHMnO1xuaW1wb3J0ICcuL2dlb2ZlbmNlcyc7XG5pbXBvcnQgJy4vbWFya2Vycyc7XG5pbXBvcnQgJy4vb3ZlcmxheXMnO1xuaW1wb3J0ICcuL2dlb21ldHJ5JztcbmltcG9ydCAnLi9sYXllcnMnO1xuaW1wb3J0ICcuL3JvdXRlcyc7XG5pbXBvcnQgJy4vc3RhdGljJztcbmltcG9ydCAnLi9tYXBfdHlwZXMnO1xuaW1wb3J0ICcuL3N0eWxlcyc7XG5pbXBvcnQgJy4vc3RyZWV0dmlldyc7XG5pbXBvcnQgJy4vcG9seWZpbGxzJztcbmltcG9ydCAnLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXBzO1xuIiwiaW1wb3J0IEdNYXBzLCB7IHNldHVwRXZlbnRMaXN0ZW5lciB9IGZyb20gJy4vY29yZSc7XG5pbXBvcnQgJy4vZXZlbnRzJztcblxuLyoqXG4gKiBFeHRlbmRzIEdNYXBzIHRvIHVzZSBwb2x5bGluZXMgYW5kIHBvbHlnb25zLlxuICogQG1vZHVsZSBMYXllcnNcbiAqL1xuXG5HTWFwcy5wcm90b3R5cGUuZ2V0RnJvbUZ1c2lvblRhYmxlcyA9IGZ1bmN0aW9uIGdldEZyb21GdXNpb25UYWJsZXMoYmFzZU9wdGlvbnMpIHtcbiAgY29uc3QgeyBldmVudHMgPSB7fSwgLi4ub3B0aW9ucyB9ID0gYmFzZU9wdGlvbnM7XG5cbiAgY29uc3QgbGF5ZXIgPSBuZXcgZ29vZ2xlLm1hcHMuRnVzaW9uVGFibGVzTGF5ZXIob3B0aW9ucyk7XG5cbiAgT2JqZWN0LmtleXMoZXZlbnRzKS5mb3JFYWNoKGV2ZW50TmFtZSA9PlxuICAgIHNldHVwRXZlbnRMaXN0ZW5lcih7XG4gICAgICBvYmplY3Q6IGxheWVyLFxuICAgICAgZXZlbnROYW1lLFxuICAgICAgaW5zdGFuY2U6IHRoaXMsXG4gICAgICBoYW5kbGVyOiBldmVudHNbZXZlbnROYW1lXSxcbiAgICB9KVxuICApO1xuXG4gIHRoaXMubGF5ZXJzLnB1c2gobGF5ZXIpO1xuXG4gIHJldHVybiBsYXllcjtcbn07XG5cbi8qKlxuICogRHJhdyBhIEZ1c2lvblRhYmxlcyBsYXllciBpbiB0aGUgTWFwLlxuICogQGZ1bmN0aW9uIGxvYWRGcm9tRnVzaW9uVGFibGVzXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgYG9wdGlvbnNgIGFjY2VwdHMgYW55IG9wdGlvbiBkZWZpbmVkIGluIHRoZSBbb2ZmaWNpYWwgZG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI0Z1c2lvblRhYmxlc0xheWVyT3B0aW9ucykuXG4gKlxuICogQHNlZSBgb3B0aW9uc2AgYWxzbyBhY2NlcHRzIGFuIGBldmVudHNgIG9iamVjdCwgd2hpY2ggYWNjZXB0cyBvbmx5IGBjbGlja2AuXG4gKlxuICogQHJldHVybnMge2dvb2dsZS5tYXBzLkZ1c2lvblRhYmxlc0xheWVyfVxuICovXG5HTWFwcy5wcm90b3R5cGUubG9hZEZyb21GdXNpb25UYWJsZXMgPSBmdW5jdGlvbiBsb2FkRnJvbUZ1c2lvblRhYmxlcyhvcHRpb25zKSB7XG4gIGNvbnN0IGxheWVyID0gdGhpcy5nZXRGcm9tRnVzaW9uVGFibGVzKG9wdGlvbnMpO1xuICBsYXllci5zZXRNYXAodGhpcy5tYXApO1xuXG4gIHJldHVybiBsYXllcjtcbn07XG5cbkdNYXBzLnByb3RvdHlwZS5nZXRGcm9tS01MID0gZnVuY3Rpb24gZ2V0RnJvbUtNTChiYXNlT3B0aW9ucykge1xuICBjb25zdCB7IHVybCwgZXZlbnRzLCAuLi5vcHRpb25zIH0gPSBiYXNlT3B0aW9ucztcblxuICBjb25zdCBsYXllciA9IG5ldyBnb29nbGUubWFwcy5LbWxMYXllcih1cmwsIG9wdGlvbnMpO1xuXG4gIE9iamVjdC5rZXlzKGV2ZW50cykuZm9yRWFjaChldmVudE5hbWUgPT5cbiAgICBzZXR1cEV2ZW50TGlzdGVuZXIoe1xuICAgICAgb2JqZWN0OiBsYXllcixcbiAgICAgIGV2ZW50TmFtZSxcbiAgICAgIGluc3RhbmNlOiB0aGlzLFxuICAgICAgaGFuZGxlcjogZXZlbnRzW2V2ZW50TmFtZV0sXG4gICAgfSlcbiAgKTtcblxuICB0aGlzLmxheWVycy5wdXNoKGxheWVyKTtcblxuICByZXR1cm4gbGF5ZXI7XG59O1xuXG4vKipcbiAqIERyYXcgYSBLTUwgbGF5ZXIgaW4gdGhlIE1hcC5cbiAqIEBmdW5jdGlvbiBsb2FkRnJvbUtNTFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBhY2NlcHRzIGFueSBvcHRpb24gZGVmaW5lZCBpbiB0aGUgW29mZmljaWFsIGRvY3VtZW50YXRpb25dKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNLbWxMYXllck9wdGlvbnMpLlxuICpcbiAqIEBzZWUgYG9wdGlvbnNgIGFsc28gYWNjZXB0cyBhbiBgZXZlbnRzYCBvYmplY3QsIHdoaWNoIGFjY2VwdHMgYWxsIGV2ZW50cyBkZWZpbmVkIGluIHRoZSBbXCJFdmVudHNcIiBzZWN0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjS21sTGF5ZXIpLlxuICpcbiAqIEByZXR1cm5zIHtnb29nbGUubWFwcy5LbWxMYXllcn1cbiAqL1xuR01hcHMucHJvdG90eXBlLmxvYWRGcm9tS01MID0gZnVuY3Rpb24gbG9hZEZyb21LTUwob3B0aW9ucykge1xuICBjb25zdCBsYXllciA9IHRoaXMuZ2V0RnJvbUtNTChvcHRpb25zKTtcbiAgbGF5ZXIuc2V0TWFwKHRoaXMubWFwKTtcblxuICByZXR1cm4gbGF5ZXI7XG59O1xuXG4vKipcbiAqIERyYXcgYSBsYXllciBpbiB0aGUgTWFwLiBUaGlzIG1ldGhvZCBhbHNvIGZpcmVzIGEgYGxheWVyX2FkZGVkYCBldmVudC5cbiAqIEBmdW5jdGlvbiBhZGRMYXllclxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBsYXllck5hbWUgLSBUaGUgbmFtZSBvZiBhIEdvb2dsZSBNYXBzIGxheWVyLCB3aGljaCBjYW4gYmU6IGB0cmFmZmljYCwgYHRyYW5zaXRgIG9yIGBiaWN5Y2xpbmdgLlxuICpcbiAqIEByZXR1cm5zIHtnb29nbGUubWFwcy5UcmFmZmljTGF5ZXJ8Z29vZ2xlLm1hcHMuVHJhbnNpdExheWVyfGdvb2dsZS5tYXBzLkJpY3ljbGluZ0xheWVyfVxuICovXG5HTWFwcy5wcm90b3R5cGUuYWRkTGF5ZXIgPSBmdW5jdGlvbiBhZGRMYXllcihsYXllck5hbWUsIGJhc2VPcHRpb25zID0ge30pIHtcbiAgY29uc3QgeyBmaWx0ZXIsIGNsaWNrLCBzZWFyY2gsIG5lYXJieVNlYXJjaCwgcmFkYXJTZWFyY2gsIHRleHRTZWFyY2gsIC4uLm9wdGlvbnMgfSA9IGJhc2VPcHRpb25zO1xuICBjb25zdCB7IGJvdW5kcywga2V5d29yZCwgbG9jYXRpb24sIG5hbWUsIHJhZGl1cywgcmFua0J5LCB0eXBlcywgcXVlcnksIH0gPSBvcHRpb25zO1xuICBsZXQgbGF5ZXI7XG5cbiAgc3dpdGNoIChsYXllck5hbWUpIHtcbiAgICBjYXNlICd0cmFmZmljJzpcbiAgICAgIGxheWVyID0gbmV3IGdvb2dsZS5tYXBzLlRyYWZmaWNMYXllcigpO1xuICAgICAgdGhpcy5zaW5nbGVMYXllcnMudHJhZmZpYyA9IGxheWVyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAndHJhbnNpdCc6XG4gICAgICBsYXllciA9IG5ldyBnb29nbGUubWFwcy5UcmFuc2l0TGF5ZXIoKTtcbiAgICAgIHRoaXMuc2luZ2xlTGF5ZXJzLnRyYW5zaXQgPSBsYXllcjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2JpY3ljbGluZyc6XG4gICAgICBsYXllciA9IG5ldyBnb29nbGUubWFwcy5CaWN5Y2xpbmdMYXllcigpO1xuICAgICAgdGhpcy5zaW5nbGVMYXllcnMuYmljeWNsaW5nID0gbGF5ZXI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwbGFjZXMnOlxuICAgICAgbGF5ZXIgPSBuZXcgZ29vZ2xlLm1hcHMucGxhY2VzLlBsYWNlc1NlcnZpY2UodGhpcy5tYXApO1xuICAgICAgdGhpcy5zaW5nbGVMYXllcnMucGxhY2VzID0gbGF5ZXI7XG5cbiAgICAgIGlmIChzZWFyY2ggfHwgbmVhcmJ5U2VhcmNoIHx8IHJhZGFyU2VhcmNoKSB7XG4gICAgICAgIGNvbnN0IHBsYWNlU2VhcmNoUmVxdWVzdCA9IHtcbiAgICAgICAgICBib3VuZHMsXG4gICAgICAgICAga2V5d29yZCxcbiAgICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIHJhZGl1cyxcbiAgICAgICAgICByYW5rQnksXG4gICAgICAgICAgdHlwZXMsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHJhZGFyU2VhcmNoKSB7XG4gICAgICAgICAgbGF5ZXIucmFkYXJTZWFyY2gocGxhY2VTZWFyY2hSZXF1ZXN0LCByYWRhclNlYXJjaCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VhcmNoKSB7XG4gICAgICAgICAgbGF5ZXIuc2VhcmNoKHBsYWNlU2VhcmNoUmVxdWVzdCwgc2VhcmNoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZWFyYnlTZWFyY2gpIHtcbiAgICAgICAgICBsYXllci5uZWFyYnlTZWFyY2gocGxhY2VTZWFyY2hSZXF1ZXN0LCBuZWFyYnlTZWFyY2gpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0ZXh0U2VhcmNoKSB7XG4gICAgICAgIGNvbnN0IHRleHRTZWFyY2hSZXF1ZXN0ID0ge1xuICAgICAgICAgIGJvdW5kcyxcbiAgICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICByYWRpdXMsXG4gICAgICAgIH07XG5cbiAgICAgICAgbGF5ZXIudGV4dFNlYXJjaCh0ZXh0U2VhcmNoUmVxdWVzdCwgdGV4dFNlYXJjaCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cblxuICBpZiAobGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIGxheWVyLnNldE9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGxheWVyLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBsYXllci5zZXRNYXAgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGxheWVyLnNldE1hcCh0aGlzLm1hcCk7XG4gICAgfVxuXG4gICAgR01hcHMuZmlyZSgnbGF5ZXJfYWRkZWQnLCBsYXllciwgdGhpcyk7XG5cbiAgICByZXR1cm4gbGF5ZXI7XG4gIH1cbn07XG5cbi8qKlxuICogUmVtb3ZlIGEgbGF5ZXIgZnJvbSB0aGUgbWFwLiBJZiB0aGUgbGF5ZXIgaXMgYSBGdXNpb25UYWJsZXMgbGF5ZXIgb3IgYSBLTUwgbGF5ZXIsIGByZW1vdmVMYXllcmAgYWxzbyByZW1vdmVzIHRoZSBsYXllciBmcm9tIHRoZSBsYXllcnMgY29sbGVjdGlvbiBhbmQgZmlyZXMgYSBgbGF5ZXJfcmVtb3ZlZGAgZXZlbnQuXG4gKiBAZnVuY3Rpb24gcmVtb3ZlTGF5ZXJcbiAqXG4gKiBAcGFyYW0ge2dvb2dsZS5tYXBzLlBvbHlnb259IHBvbHlnb24gLSBUaGUgcG9seWdvbiB0byBiZSByZW1vdmVkLlxuICovXG5HTWFwcy5wcm90b3R5cGUucmVtb3ZlTGF5ZXIgPSBmdW5jdGlvbiByZW1vdmVMYXllcihsYXllcikge1xuICBpZiAodHlwZW9mIGxheWVyID09PSAnc3RyaW5nJyAmJiB0aGlzLnNpbmdsZUxheWVyc1tsYXllcl0gIT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuc2luZ2xlTGF5ZXJzW2xheWVyXS5zZXRNYXAobnVsbCk7XG5cbiAgICBkZWxldGUgdGhpcy5zaW5nbGVMYXllcnNbbGF5ZXJdO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGxheWVySW5kZXggPSB0aGlzLmxheWVycy5pbmRleE9mKGxheWVyKTtcblxuICAgIGlmIChsYXllckluZGV4ID49IDApIHtcbiAgICAgIGxheWVyLnNldE1hcChudWxsKTtcbiAgICAgIHRoaXMubGF5ZXJzLnNwbGljZShsYXllckluZGV4LCAxKTtcblxuICAgICAgR01hcHMuZmlyZSgnbGF5ZXJfcmVtb3ZlZCcsIGxheWVyLCB0aGlzKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXBzO1xuIiwiaW1wb3J0IEdNYXBzIGZyb20gJy4vY29yZSc7XG5pbXBvcnQgJy4vZXZlbnRzJztcblxuLyoqXG4gKiBFeHRlbmRzIEdNYXBzIHRvIHVzZSBjdXN0b20gTWFwIFR5cGVzLlxuICogQG1vZHVsZSBNYXBUeXBlc1xuICovXG5cbi8qKlxuICogRHJhdyBhIGN1c3RvbSBbdGlsZS1iYXNlZCBtYXAgdHlwZV0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvbWFwdHlwZXMjSW1hZ2VNYXBUeXBlcykgaW4gdGhlIE1hcCwgd2hpY2ggY2FuIGJlIHVzZWQgd2l0aCB0aGUgYmFzZSBtYXAgdHlwZXMgKGBoeWJyaWRgLCBgcm9hZG1hcGAsIGBzYXRlbGxpdGVgIGFuZCBgdGVycmFpbmApLlxuICogQGZ1bmN0aW9uIGFkZE1hcFR5cGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWFwVHlwZUlkIC0gQSBzaW1wbGUgaWRlbnRpZmllciBmb3IgdGhlIGN1c3RvbSBtYXAgdHlwZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBvYmplY3Qgc2hvdWxkIGNvbnRhaW46XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLmdldFRpbGVVcmwgLSBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBVUkwgZm9yIHRpbGUtYmFzZWQgZW5kcG9pbnRzLiBJdCByZWNlaXZlcyB0d28gYXJndW1lbnRzOlxuICogICAqIGBwb2ludHNgIChnb29nbGUubWFwcy5Qb2ludCk6IGEgcG9pbnQgd2l0aCBgeGAgYW5kIGB5YCAoaXMgbm90IGEgY29vcmRpbmF0ZSkuXG4gKiAgICogYHpvb21gIChudW1iZXIpOiBhIHpvb20gbGV2ZWwuXG4gKiBAcGFyYW0ge2dvb2dsZS5tYXBzLlNpemV9IG9wdGlvbnMudGlsZVNpemUgLSBUaGUgc2l6ZSBvZiB0aGUgdGlsZS5cbiAqXG4gKiBAcmV0dXJucyB7Z29vZ2xlLm1hcHMuSW1hZ2VNYXBUeXBlfVxuICovXG5HTWFwcy5wcm90b3R5cGUuYWRkTWFwVHlwZSA9IGZ1bmN0aW9uIGFkZE1hcFR5cGUobWFwVHlwZUlkLCBvcHRpb25zID0ge30pIHtcbiAgY29uc3QgeyBnZXRUaWxlVXJsLCB0aWxlU2l6ZSA9IG5ldyBnb29nbGUubWFwcy5TaXplKDI1NiwgMjU2KSwgfSA9IG9wdGlvbnM7XG5cbiAgaWYgKHR5cGVvZiBnZXRUaWxlVXJsICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiJ2dldFRpbGVVcmwnIGZ1bmN0aW9uIHJlcXVpcmVkLlwiKTtcbiAgfVxuXG4gIGNvbnN0IG1hcFR5cGUgPSBuZXcgZ29vZ2xlLm1hcHMuSW1hZ2VNYXBUeXBlKHsgZ2V0VGlsZVVybCwgdGlsZVNpemUsIH0pO1xuXG4gIHRoaXMubWFwLm1hcFR5cGVzLnNldChtYXBUeXBlSWQsIG1hcFR5cGUpO1xuXG4gIHJldHVybiBtYXBUeXBlO1xufTtcblxuLyoqXG4gKiBEcmF3IGEgY3VzdG9tIFtvdmVybGF5IG1hcCB0eXBlXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9tYXB0eXBlcyNPdmVybGF5TWFwVHlwZXMpIGluIHRoZSBNYXAuIFRoaXMgbWV0aG9kIGFsc28gZmlyZXMgYW4gYG92ZXJsYXlfbWFwX3R5cGVfYWRkZWRgIGV2ZW50LlxuICogQGZ1bmN0aW9uIGFkZE92ZXJsYXlNYXBUeXBlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1hcFR5cGVJZCAtIEEgc2ltcGxlIGlkZW50aWZpZXIgZm9yIHRoZSBjdXN0b20gbWFwIHR5cGUuXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRoZSBgb3B0aW9uc2Agb2JqZWN0IHNob3VsZCBjb250YWluOlxuICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5nZXRUaWxlIC0gQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBET00gTm9kZS4gSXQgcmVjZWl2ZXMgdGhyZWUgYXJndW1lbnRzOlxuICogICAqIGBwb2ludHNgIChnb29nbGUubWFwcy5Qb2ludCk6IGEgcG9pbnQgd2l0aCBgeGAgYW5kIGB5YCAoaXMgbm90IGEgY29vcmRpbmF0ZSkuXG4gKiAgICogYHpvb21gIChudW1iZXIpOiBhIHpvb20gbGV2ZWwuXG4gKiAgICogYG93bmVyRG9jdW1lbnRgIChEb2N1bWVudCk6IFRoZSBET00gZG9jdW1lbnQgdGhhdCB3aWxsIGNyZWF0ZSB0aGUgbm9kZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLmluZGV4IC0gVGhlIGluZGV4IGZvciB0aGUgb3ZlcmxheSBtYXAgdHlwZS4gVXNlZCB0byBzZXQgZGlmZmVyZW50ZSB6IGxldmVscyBvbiBzdGFja2VkIG92ZXJsYXkgbWFwcy5cbiAqIEBwYXJhbSB7Z29vZ2xlLm1hcHMuU2l6ZX0gb3B0aW9ucy50aWxlU2l6ZSAtIFRoZSBzaXplIG9mIHRoZSB0aWxlLlxuICpcbiAqIEBzZWUgYG9wdGlvbnNgIGFsc28gYWNjZXB0cyBhbnkgb3B0aW9uIGRlZmluZWQgaW4gdGhlIFtvZmZpY2lhbCBkb2N1bWVudGF0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjTWFwVHlwZSkuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5hZGRPdmVybGF5TWFwVHlwZSA9IGZ1bmN0aW9uIGFkZE92ZXJsYXlNYXBUeXBlKG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7IGdldFRpbGUsIGluZGV4ID0gdGhpcy5tYXAub3ZlcmxheU1hcFR5cGVzLmxlbmd0aCwgLi4ub3ZlcmxheU1hcFR5cGVPcHRpb25zIH0gPSBvcHRpb25zO1xuXG4gIGlmICh0eXBlb2YgZ2V0VGlsZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIidnZXRUaWxlJyBmdW5jdGlvbiByZXF1aXJlZC5cIik7XG4gIH1cblxuICB0aGlzLm1hcC5vdmVybGF5TWFwVHlwZXMuaW5zZXJ0QXQoaW5kZXgsIHsgLi4ub3ZlcmxheU1hcFR5cGVPcHRpb25zLCBnZXRUaWxlLCB9KTtcbiAgR01hcHMuZmlyZSgnb3ZlcmxheV9tYXBfdHlwZV9hZGRlZCcsIHRoaXMubWFwLm92ZXJsYXlNYXBUeXBlc1tpbmRleF0sIHRoaXMpO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYSBvdmVybGF5IG1hcCB0eXBlIGZyb20gdGhlIG1hcC4gVGhpcyBtZXRob2QgYWxzbyBmaXJlcyBhbiBgb3ZlcmxheV9tYXBfdHlwZV9yZW1vdmVkYCBldmVudC5cbiAqIEBmdW5jdGlvbiByZW1vdmVPdmVybGF5TWFwVHlwZVxuICpcbiAqIEBwYXJhbSB7Z29vZ2xlLm1hcHMuUG9seWxpbmV9IHBvbHlsaW5lIC0gVGhlIHBvbHlsaW5lIHRvIGJlIHJlbW92ZWQuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5yZW1vdmVPdmVybGF5TWFwVHlwZSA9IGZ1bmN0aW9uIHJlbW92ZU92ZXJsYXlNYXBUeXBlKGluZGV4KSB7XG4gIGNvbnN0IG92ZXJsYXlNYXBUeXBlID0gdGhpcy5tYXAub3ZlcmxheU1hcFR5cGVzW2luZGV4XTtcblxuICB0aGlzLm1hcC5vdmVybGF5TWFwVHlwZXMucmVtb3ZlQXQoaW5kZXgpO1xuICBHTWFwcy5maXJlKCdvdmVybGF5X21hcF90eXBlX3JlbW92ZWQnLCBvdmVybGF5TWFwVHlwZSwgdGhpcyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHTWFwcztcbiIsImltcG9ydCBHTWFwcywgeyBzZXR1cEV2ZW50cyB9IGZyb20gJy4vY29yZSc7XG5pbXBvcnQgJy4vZXZlbnRzJztcbmltcG9ydCAnLi9nZW9mZW5jZXMnO1xuXG4vKipcbiAqIEV4dGVuZHMgR01hcHMgdG8gdXNlIG1hcmtlcnMuXG4gKiBAbW9kdWxlIE1hcmtlcnNcbiAqL1xuXG5jb25zdCBJTkZPX1dJTkRPV19FVkVOVFMgPSBbJ2Nsb3NlY2xpY2snLCAnY29udGVudF9jaGFuZ2VkJywgJ2RvbXJlYWR5JywgJ3Bvc2l0aW9uX2NoYW5nZWQnLCAnemluZGV4X2NoYW5nZWQnXTtcbmNvbnN0IE1BUktFUl9FVkVOVFMgPSBbJ2FuaW1hdGlvbl9jaGFuZ2VkJywgJ2NsaWNrYWJsZV9jaGFuZ2VkJywgJ2N1cnNvcl9jaGFuZ2VkJywgJ2RyYWdnYWJsZV9jaGFuZ2VkJywgJ2ZsYXRfY2hhbmdlZCcsICdpY29uX2NoYW5nZWQnLCAncG9zaXRpb25fY2hhbmdlZCcsICdzaGFkb3dfY2hhbmdlZCcsICdzaGFwZV9jaGFuZ2VkJywgJ3RpdGxlX2NoYW5nZWQnLCAndmlzaWJsZV9jaGFuZ2VkJywgJ3ppbmRleF9jaGFuZ2VkJ107XG5jb25zdCBNQVJLRVJfTU9VU0VfRVZFTlRTID0gWydkYmxjbGljaycsICdkcmFnJywgJ2RyYWdlbmQnLCAnZHJhZ3N0YXJ0JywgJ21vdXNlZG93bicsICdtb3VzZW91dCcsICdtb3VzZW92ZXInLCAnbW91c2V1cCddO1xuXG5HTWFwcy5wcm90b3R5cGUuY3JlYXRlTWFya2VyID0gZnVuY3Rpb24gY3JlYXRlTWFya2VyKGJhc2VPcHRpb25zKSB7XG4gIGNvbnN0IHNlbGYgPSB0aGlzO1xuICBjb25zdCB7IGxhdCwgbGF0aXR1ZGUgPSBsYXQsIGxuZywgbG9uZ2l0dWRlID0gbG5nLCBwb3NpdGlvbiwgZGV0YWlscywgZmVuY2VzLCBvdXRzaWRlLCBpbmZvV2luZG93LCAuLi5vcHRpb25zIH0gPSBiYXNlT3B0aW9ucztcblxuICBpZiAobGF0aXR1ZGUgPT09IHVuZGVmaW5lZCAmJiBsb25naXR1ZGUgPT09IHVuZGVmaW5lZCAmJiBwb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBsYXRpdHVkZSBvciBsb25naXR1ZGUgZGVmaW5lZC4nKTtcbiAgfVxuXG4gIGNvbnN0IG1hcmtlck9wdGlvbnMgPSB7XG4gICAgLi4ub3B0aW9ucyxcbiAgICBwb3NpdGlvbjogcG9zaXRpb24gfHwgbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsYXRpdHVkZSwgbG9uZ2l0dWRlKSxcbiAgICBtYXA6IG51bGwsXG4gIH07XG5cbiAgY29uc3QgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcihtYXJrZXJPcHRpb25zKTtcblxuICBtYXJrZXIuZmVuY2VzID0gZmVuY2VzO1xuXG4gIGlmIChpbmZvV2luZG93KSB7XG4gICAgbWFya2VyLmluZm9XaW5kb3cgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyhpbmZvV2luZG93KTtcblxuICAgIHNldHVwRXZlbnRzKHsgZXZlbnRzOiBJTkZPX1dJTkRPV19FVkVOVFMsIG9iamVjdDogbWFya2VyLmluZm9XaW5kb3csIGluc3RhbmNlOiB0aGlzLCBoYW5kbGVyczogaW5mb1dpbmRvdywgfSk7XG4gIH1cblxuICBzZXR1cEV2ZW50cyh7IGV2ZW50czogTUFSS0VSX0VWRU5UUywgb2JqZWN0OiBtYXJrZXIsIGluc3RhbmNlOiB0aGlzLCBoYW5kbGVyczogb3B0aW9ucywgfSk7XG5cbiAgTUFSS0VSX01PVVNFX0VWRU5UUy5mb3JFYWNoKChldmVudE5hbWUpID0+IHtcbiAgICBpZiAob3B0aW9uc1tldmVudE5hbWVdKSB7XG4gICAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXJrZXIsIGV2ZW50TmFtZSwgKGV2ZW50ID0gdGhpcykgPT4ge1xuICAgICAgICBpZiAoIWV2ZW50LnBpeGVsKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgZXZlbnQucGl4ZWwgPSB0aGlzLm1hcC5nZXRQcm9qZWN0aW9uKCkuZnJvbUxhdExuZ1RvUG9pbnQoZXZlbnQubGF0TG5nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbnNbZXZlbnROYW1lXS5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyLCAnY2xpY2snLCBmdW5jdGlvbiBvbk1hcmtlckNsaWNrKGV2ZW50KSB7XG4gICAgdGhpcy5kZXRhaWxzID0gZGV0YWlscztcblxuICAgIGlmIChvcHRpb25zLmNsaWNrKSB7XG4gICAgICBvcHRpb25zLmNsaWNrLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIH1cblxuICAgIGlmIChtYXJrZXIuaW5mb1dpbmRvdykge1xuICAgICAgc2VsZi5oaWRlSW5mb1dpbmRvd3MoKTtcbiAgICAgIG1hcmtlci5pbmZvV2luZG93Lm9wZW4oc2VsZi5tYXAsIG1hcmtlcik7XG4gICAgfVxuICB9KTtcblxuICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXJrZXIsICdyaWdodGNsaWNrJywgZnVuY3Rpb24gb25NYXJrZXJSaWdodENsaWNrKGV2ZW50KSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgZXZlbnQubWFya2VyID0gdGhpcztcblxuICAgIGlmIChvcHRpb25zLnJpZ2h0Y2xpY2spIHtcbiAgICAgIG9wdGlvbnMucmlnaHRjbGljay5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAoR01hcHMuY29udGV4dE1lbnVzW3NlbGYuaWRdLm1hcmtlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZWxmLmJ1aWxkQ29udGV4dE1lbnUoJ21hcmtlcicsIGV2ZW50KTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChtYXJrZXIuZmVuY2VzKSB7XG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyLCAnZHJhZ2VuZCcsIGZ1bmN0aW9uIG9uTWFya2VyRHJhZ0VuZCgpIHtcbiAgICAgIHNlbGYuY2hlY2tNYXJrZXJHZW9mZW5jZSh0aGlzLCBvdXRzaWRlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBtYXJrZXI7XG59O1xuXG4vKipcbiAqIERyYXcgYSBtYXJrZXIgaW4gdGhlIE1hcCBhbmQgYWRkIGl0IHRvIHRoZSBtYXJrZXJzIGNvbGxlY3Rpb24uIFRoaXMgbWV0aG9kIGFsc28gZmlyZXMgYSBgbWFya2VyX2FkZGVkYCBldmVudC5cbiAqIEBmdW5jdGlvbiBhZGRNYXJrZXJcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRoZSBgb3B0aW9uc2Agb2JqZWN0IHNob3VsZCBjb250YWluOlxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMubGF0aXR1ZGUgLSBMYXRpdHVkZSBvZiB0aGUgcG9zaXRpb24uIElmIGBsYXRpdHVkZWAgYW5kIGBsb25naXR1ZGVgIGFyZSBzZXQsIGBwb3NpdGlvbmAgaXMgaWdub3JlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLmxvbmdpdHVkZSAtIExvbmdpdHVkZSBvZiB0aGUgcG9zaXRpb24uIElmIGBsYXRpdHVkZWAgYW5kIGBsb25naXR1ZGVgIGFyZSBzZXQsIGBwb3NpdGlvbmAgaXMgaWdub3JlZC5cbiAqIEBwYXJhbSB7Z29vZ2xlLm1hcHMuTGF0TG5nfSBvcHRpb25zLnBvc2l0aW9uIC0gQSBgZ29vZ2xlLm1hcHMuTGF0TG5nYCBjb29yZGluYXRlIGluZGljYXRlIHRoZSBwb3NpdGlvbi4gSWYgc2V0LCBgbGF0aXR1ZGVgIGFuZCBgbG9uZ2l0dWRlYCBhcmUgaWdub3JlZC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zLmRldGFpbHMgLSBDdXN0b20gb2JqZWN0IHdpdGggZXh0cmEgZGF0YS5cbiAqIEBwYXJhbSB7YXJyYXl9IG9wdGlvbnMuZmVuY2VzIC0gQ29sbGVjdGlvbiBvZiBgZ29vZ2xlLm1hcHMuUG9seWdvbmAgb2JqZWN0cyB0aGF0IGRlZmluZXMgYSBtYXJrZXIncyBib3VuZGFyaWVzIG9yIGdlb2ZlbmNlcy5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMub3V0c2lkZSAtIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIG1hcmtlciBpcyBvdXN0aWRlIGFueSBvZiBpdHMgZmVuY2VzLlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMuaW5mb1dpbmRvdyAtIE9iamVjdCB3aXRoIGFsbCBvcHRpb25zIGRlZmluZWQgaW4gW2dvb2dsZS5tYXBzLkluZm9XaW5kb3dPcHRpb25zXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjSW5mb1dpbmRvd09wdGlvbnMpLlxuICpcbiAqIEBzZWUgYG9wdGlvbnNgIGFsc28gYWNjZXB0cyBhbnkgb3B0aW9uIGRlZmluZWQgaW4gdGhlIFtvZmZpY2lhbCBkb2N1bWVudGF0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjTWFya2VyT3B0aW9ucykgYW5kIGFueSBldmVudCBkZWZpbmVkIGluIHRoZSBbXCJFdmVudHNcIiBzZWN0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjTWFya2VyKS5cbiAqXG4gKiBAcmV0dXJucyB7Z29vZ2xlLm1hcHMuTWFya2VyfVxuICovXG5HTWFwcy5wcm90b3R5cGUuYWRkTWFya2VyID0gZnVuY3Rpb24gYWRkTWFya2VyKG9wdGlvbnMpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuICBjb25zdCB7IGdtX2FjY2Vzc29yc18sIGxhdCwgbGF0aXR1ZGUgPSBsYXQsIGxuZywgbG9uZ2l0dWRlID0gbG5nLCBwb3NpdGlvbiwgfSA9IG9wdGlvbnM7XG5cbiAgbGV0IG1hcmtlcjtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG4gIGlmIChnbV9hY2Nlc3NvcnNfKSB7XG4gICAgLy8gTmF0aXZlIGdvb2dsZS5tYXBzLk1hcmtlciBvYmplY3RcbiAgICBtYXJrZXIgPSBvcHRpb25zO1xuICB9IGVsc2UgaWYgKChsYXRpdHVkZSAmJiBsb25naXR1ZGUpIHx8IHBvc2l0aW9uKSB7XG4gICAgbWFya2VyID0gdGhpcy5jcmVhdGVNYXJrZXIob3B0aW9ucyk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBsYXRpdHVkZSBvciBsb25naXR1ZGUgZGVmaW5lZC4nKTtcbiAgfVxuXG4gIG1hcmtlci5zZXRNYXAodGhpcy5tYXApO1xuXG4gIGlmICh0aGlzLm1hcmtlckNsdXN0ZXJlcikge1xuICAgIHRoaXMubWFya2VyQ2x1c3RlcmVyLmFkZE1hcmtlcihtYXJrZXIpO1xuICB9XG5cbiAgdGhpcy5tYXJrZXJzLnB1c2gobWFya2VyKTtcblxuICBHTWFwcy5maXJlKCdtYXJrZXJfYWRkZWQnLCBtYXJrZXIsIHRoaXMpO1xuXG4gIHJldHVybiBtYXJrZXI7XG59O1xuXG4vKipcbiAqIERyYXcgYSBjb2xsZWN0aW9uIG9mIG1hcmtlcnMgaW50byB0aGUgTWFwLiBUaGlzIG1ldGhvZCBmaXJlcyBhIGBtYXJrZXJfYWRkZWRgIGV2ZW50IGZvciBlYWNoIG1hcmtlciBhZGRlZC5cbiAqIEBmdW5jdGlvbiBhZGRNYXJrZXJzXG4gKlxuICogQHBhcmFtIHthcnJheX0gbWFya2VycyAtIEFuIGFycmF5IG9mIGBvcHRpb25zYCBvYmplY3RzLCB3aGljaCBhY2NlcHRzIHRoZSBzYW1lIG9wdGlvbnMgYXMgaW4ge0BsaW5rIEdNYXBzI2FkZE1hcmtlcn0uXG4gKlxuICogQHJldHVybnMge2FycmF5fVxuICovXG5HTWFwcy5wcm90b3R5cGUuYWRkTWFya2VycyA9IGZ1bmN0aW9uIGFkZE1hcmtlcnMobWFya2Vycykge1xuICBtYXJrZXJzLmZvckVhY2gobWFya2VyID0+IHRoaXMuYWRkTWFya2VyKG1hcmtlcikpO1xuXG4gIHJldHVybiB0aGlzLm1hcmtlcnM7XG59O1xuXG4vKipcbiAqIEhpZGUgYWxsIG1hcmtlcnMnIEluZm9XaW5kb3dzLlxuICogQGZ1bmN0aW9uIGhpZGVJbmZvV2luZG93c1xuICovXG5HTWFwcy5wcm90b3R5cGUuaGlkZUluZm9XaW5kb3dzID0gZnVuY3Rpb24gaGlkZUluZm9XaW5kb3dzKCkge1xuICB0aGlzLm1hcmtlcnMuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgaWYgKG1hcmtlci5pbmZvV2luZG93KSB7XG4gICAgICBtYXJrZXIuaW5mb1dpbmRvdy5jbG9zZSgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhIG1hcmtlciBmcm9tIHRoZSBtYXAgYW5kIGZyb20gdGhlIG1hcmtlcnMgY29sbGVjdGlvbi4gVGhpcyBtZXRob2QgYWxzbyBmaXJlcyBhIGBtYXJrZXJfcmVtb3ZlZGAgZXZlbnQuXG4gKiBAZnVuY3Rpb24gcmVtb3ZlTWFya2VyXG4gKlxuICogQHBhcmFtIHtnb29nbGUubWFwcy5Qb2x5Z29ufSBwb2x5Z29uIC0gVGhlIHBvbHlnb24gdG8gYmUgcmVtb3ZlZC5cbiAqL1xuR01hcHMucHJvdG90eXBlLnJlbW92ZU1hcmtlciA9IGZ1bmN0aW9uIHJlbW92ZU1hcmtlcihtYXJrZXIsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7IGZpcmVFdmVudCA9IHRydWUsIH0gPSBvcHRpb25zO1xuICBjb25zdCBtYXJrZXJJbmRleCA9IHRoaXMubWFya2Vycy5pbmRleE9mKG1hcmtlcik7XG5cbiAgaWYgKG1hcmtlckluZGV4ID49IDApIHtcbiAgICBtYXJrZXIuc2V0TWFwKG51bGwpO1xuICAgIHRoaXMubWFya2Vycy5zcGxpY2UobWFya2VySW5kZXgsIDEpO1xuXG4gICAgaWYgKHRoaXMubWFya2VyQ2x1c3RlcmVyKSB7XG4gICAgICB0aGlzLm1hcmtlckNsdXN0ZXJlci5yZW1vdmVNYXJrZXIobWFya2VyKTtcbiAgICB9XG5cbiAgICBpZiAoZmlyZUV2ZW50KSB7XG4gICAgICBHTWFwcy5maXJlKCdtYXJrZXJfcmVtb3ZlZCcsIG1hcmtlciwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1hcmtlcjtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGEgZ3JvdXAgb2YgbWFya2VycyAob3IgYWxsIG9mIHRoZW0pIGZyb20gdGhlIE1hcCBhbmQgZnJvbSB0aGUgbWFya2VycyBjb2xsZWN0aW9uLiBUaGlzIG1ldGhvZCBkb2VzIG5vdCBmaXJlIGEgYG1hcmtlcl9yZW1vdmVkYCBldmVudC5cbiAqIEBmdW5jdGlvbiByZW1vdmVNYXJrZXJzXG4gKlxuICogQHBhcmFtIHthcnJheX0gbWFya2VycyAtIFRoZSBtYXJrZXJzIHRvIGJlIHJlbW92ZWQuIElmIG5vdCBzZXQsIGl0IHJlbW92ZXMgYWxsIG1hcmtlcnMgaW4gdGhlIE1hcC5cbiAqL1xuR01hcHMucHJvdG90eXBlLnJlbW92ZU1hcmtlcnMgPSBmdW5jdGlvbiByZW1vdmVNYXJrZXJzKG1hcmtlcnMgPSB0aGlzLm1hcmtlcnMpIHtcbiAgbWFya2Vycy5mb3JFYWNoKG1hcmtlciA9PiB0aGlzLnJlbW92ZU1hcmtlcihtYXJrZXIsIHsgZmlyZUV2ZW50OiBmYWxzZSwgfSkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR01hcHM7XG4iLCJpbXBvcnQgR01hcHMgZnJvbSAnLi9jb3JlJztcbmltcG9ydCAnLi9ldmVudHMnO1xuXG4vKipcbiAqIEV4dGVuZHMgR01hcHMgdG8gdXNlIGN1c3RvbSBvdmVybGF5cy5cbiAqIEBtb2R1bGUgT3ZlcmxheXNcbiAqL1xuXG5jb25zdCBTVE9QX1BST1BBR0FUSU9OX0VWRU5UUyA9IFsnY29udGV4dG1lbnUnLCAnRE9NTW91c2VTY3JvbGwnLCAnZGJsY2xpY2snLCAnbW91c2Vkb3duJ107XG5cbi8qKlxuICogRHJhdyBhbiBvdmVybGF5IGluIHRoZSBNYXAgYW5kIGFkZCBpdCB0byB0aGUgb3ZlcmxheXMgY29sbGVjdGlvbi4gVGhpcyBtZXRob2QgYWxzbyBmaXJlcyBhIGBvdmVybGF5X2FkZGVkYCBldmVudC5cbiAqIEBmdW5jdGlvbiBkcmF3T3ZlcmxheVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBvYmplY3Qgc2hvdWxkIGNvbnRhaW46XG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuYXV0b1Nob3cgLSBTaG93IHRoZSBvdmVybGF5IGlubWVkaWF0bHkgYWZ0ZXIgYmVpbmcgY3JlYXRlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLmxhdGl0dWRlIC0gTGF0aXR1ZGUgb2YgdGhlIGNvb3JkaW5hdGUgd2hlcmUgdGhlIG92ZXJsYXkgaXMgcGxhY2VkLiBJZiBgbGF0aXR1ZGVgIGFuZCBgbG9uZ2l0dWRlYCBhcmUgc2V0LCBgcG9zaXRpb25gaXMgaWdub3JlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLmxvbmdpdHVkZSAtIExvbmdpdHVkZSBvZiB0aGUgY29vcmRpbmF0ZSB3aGVyZSB0aGUgb3ZlcmxheSBpcyBwbGFjZWQuIElmIGBsYXRpdHVkZWAgYW5kIGBsb25naXR1ZGVgIGFyZSBzZXQsIGBwb3NpdGlvbmBpcyBpZ25vcmVkLlxuICogQHBhcmFtIHtnb29nbGUubWFwcy5MYXRMbmd9IG9wdGlvbnMucG9zaXRpb24gLSBBIGBnb29nbGUubWFwcy5MYXRMbmdgIGNvb3JkaW5hdGUgd2hlcmUgdGhlIG92ZXJsYXkgaXMgcGxhY2VkLiBJZiBzZXQsIGBsYXRpdHVkZWAgYW5kIGBsb25naXR1ZGVgIGFyZSBpZ25vcmVkLlxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuY29udGVudCAtIEhUTUwgdGhhdCB3aWxsIGJlIGRyYXduIGluIHRoZSBvdmVybGF5LlxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubGF5ZXIgLSBJZCBvZiBhbnkgb2YgdGhlIGxheWVycyBkZWZpbmVkIGluIFtnb29nbGUubWFwcy5NYXBQYW5lc10oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI01hcFBhbmVzKTpcbiAqICAgKiBmbG9hdFBhbmVcbiAqICAgKiBmbG9hdFNoYWRvd1xuICogICAqIG1hcFBhbmVcbiAqICAgKiBvdmVybGF5SW1hZ2VcbiAqICAgKiBvdmVybGF5TGF5ZXJcbiAqICAgKiBvdmVybGF5TW91c2VUYXJnZXRcbiAqICAgKiBvdmVybGF5U2hhZG93XG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy52ZXJ0aWNhbEFsaWduIC0gVmVydGljYWwgYWxpZ24gb2YgdGhlIG92ZXJsYXkgKHdoZXJlIHRoZSBjZW50ZXIgaXMgdGhlIGNvb3JkaW5hdGUgYGxhdGl0dWRlYCwgYGxvbmdpdHVkZWApOlxuICogICAqIHRvcFxuICogICAqIG1pZGRsZVxuICogICAqIGJvdHRvbVxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuaG9yaXpvbnRhbEFsaWduIC0gSG9yaXpvbnRhbCBhbGlnbiBvZiB0aGUgb3ZlcmxheSAod2hlcmUgdGhlIGNlbnRlciBpcyB0aGUgY29vcmRpbmF0ZSBgbGF0aXR1ZGVgLCBgbG9uZ2l0dWRlYCk6XG4gKiAgICogbGVmdFxuICogICAqIGNlbnRlclxuICogICAqIHJpZ2h0XG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5ob3Jpem9udGFsT2Zmc2V0IC0gSG9yaXpvbnRhbCBvZmZzZXQgaW4gcGl4ZWxzIG9mIHRoZSBvdmVybGF5LlxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMudmVydGljYWxPZmZzZXQgLSBWZXJ0aWNhbCBvZmZzZXQgaW4gcGl4ZWxzIG9mIHRoZSBvdmVybGF5LlxuICpcbiAqIEByZXR1cm5zIHtnb29nbGUubWFwcy5PdmVybGF5Vmlld31cbiAqL1xuR01hcHMucHJvdG90eXBlLmRyYXdPdmVybGF5ID0gZnVuY3Rpb24gZHJhd092ZXJsYXkoYmFzZU9wdGlvbnMpIHtcbiAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gIGNvbnN0IG92ZXJsYXkgPSBuZXcgZ29vZ2xlLm1hcHMuT3ZlcmxheVZpZXcoKTtcbiAgY29uc3Qge1xuICAgIGF1dG9TaG93ID0gdHJ1ZSxcbiAgICBsYXQsXG4gICAgbGF0aXR1ZGUgPSBsYXQsXG4gICAgbG5nLFxuICAgIGxvbmdpdHVkZSA9IGxuZyxcbiAgICBwb3NpdGlvbiA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobGF0aXR1ZGUsIGxvbmdpdHVkZSksXG4gICAgbGF5ZXIgPSAnb3ZlcmxheUxheWVyJyxcbiAgICBob3Jpem9udGFsT2Zmc2V0ID0gMCxcbiAgICB2ZXJ0aWNhbE9mZnNldCA9IDAsXG4gICAgdmVydGljYWxBbGlnbixcbiAgICBob3Jpem9udGFsQWxpZ24sXG4gICAgLi4ub3B0aW9uc1xuICB9ID0gYmFzZU9wdGlvbnM7XG5cbiAgb3ZlcmxheS5zZXRNYXAodGhpcy5tYXApO1xuXG4gIG92ZXJsYXkub25BZGQgPSBmdW5jdGlvbiBvbkFkZCgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBlbGVtZW50LnN0eWxlLmJvcmRlclN0eWxlID0gJ25vbmUnO1xuICAgIGVsZW1lbnQuc3R5bGUuYm9yZGVyV2lkdGggPSAnMHB4JztcbiAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBlbGVtZW50LnN0eWxlLnpJbmRleCA9IDEwMDtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IG9wdGlvbnMuY29udGVudDtcblxuICAgIG92ZXJsYXkuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICBjb25zdCBwYW5lcyA9IHRoaXMuZ2V0UGFuZXMoKTtcbiAgICBjb25zdCBvdmVybGF5TGF5ZXIgPSBwYW5lc1tsYXllcl07XG5cbiAgICBvdmVybGF5TGF5ZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbiAgICBTVE9QX1BST1BBR0FUSU9OX0VWRU5UUy5mb3JFYWNoKGV2ZW50TmFtZSA9PlxuICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIoZWxlbWVudCwgZXZlbnROYW1lLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignbXNpZScpICE9PSAtMSAmJiBkb2N1bWVudC5hbGwpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICBldmVudC5jYW5jZWxCdWJibGUgPSB0cnVlO1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIGlmIChvcHRpb25zLmNsaWNrKSB7XG4gICAgICBwYW5lcy5vdmVybGF5TW91c2VUYXJnZXQuYXBwZW5kQ2hpbGQob3ZlcmxheS5lbGVtZW50KTtcbiAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyKG92ZXJsYXkuZWxlbWVudCwgJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBvcHRpb25zLmNsaWNrLmNhbGwoc2VsZiwgb3ZlcmxheSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBnb29nbGUubWFwcy5ldmVudC50cmlnZ2VyKHRoaXMsICdyZWFkeScpO1xuICB9O1xuXG4gIG92ZXJsYXkuZHJhdyA9IGZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgY29uc3QgcHJvamVjdGlvbiA9IHRoaXMuZ2V0UHJvamVjdGlvbigpO1xuICAgIGNvbnN0IHBpeGVsID0gcHJvamVjdGlvbi5mcm9tTGF0TG5nVG9EaXZQaXhlbChwb3NpdGlvbik7XG5cbiAgICBjb25zdCB7IGVsZW1lbnQsIH0gPSBvdmVybGF5O1xuICAgIGNvbnN0IGNvbnRlbnQgPSBlbGVtZW50LmNoaWxkcmVuWzBdO1xuICAgIGNvbnN0IGNvbnRlbnRIZWlnaHQgPSBjb250ZW50LmNsaWVudEhlaWdodDtcbiAgICBjb25zdCBjb250ZW50V2lkdGggPSBjb250ZW50LmNsaWVudFdpZHRoO1xuXG4gICAgc3dpdGNoICh2ZXJ0aWNhbEFsaWduKSB7XG4gICAgICBjYXNlICd0b3AnOlxuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IGAke3BpeGVsLnkgLSBjb250ZW50SGVpZ2h0ICsgdmVydGljYWxPZmZzZXR9cHhgO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICBjYXNlICdtaWRkbGUnOlxuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IGAke3BpeGVsLnkgLSAoY29udGVudEhlaWdodCAvIDIpICsgdmVydGljYWxPZmZzZXR9cHhgO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gYCR7cGl4ZWwueSArIHZlcnRpY2FsT2Zmc2V0fXB4YDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgc3dpdGNoIChob3Jpem9udGFsQWxpZ24pIHtcbiAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSBgJHtwaXhlbC54IC0gY29udGVudFdpZHRoICsgaG9yaXpvbnRhbE9mZnNldH1weGA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IGAke3BpeGVsLnggLSAoY29udGVudFdpZHRoIC8gMikgKyBob3Jpem9udGFsT2Zmc2V0fXB4YDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IGAke3BpeGVsLnggKyBob3Jpem9udGFsT2Zmc2V0fXB4YDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gYXV0b1Nob3cgPyAnYmxvY2snIDogJ25vbmUnO1xuXG4gICAgaWYgKCFhdXRvU2hvdykge1xuICAgICAgb3B0aW9ucy5zaG93LmNhbGwodGhpcywgZWxlbWVudCk7XG4gICAgfVxuICB9O1xuXG4gIG92ZXJsYXkub25SZW1vdmUgPSBmdW5jdGlvbiBvblJlbW92ZSgpIHtcbiAgICBjb25zdCB7IGVsZW1lbnQsIH0gPSBvdmVybGF5O1xuXG4gICAgaWYgKG9wdGlvbnMucmVtb3ZlKSB7XG4gICAgICBvcHRpb25zLnJlbW92ZS5jYWxsKHRoaXMsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICBvdmVybGF5LmVsZW1lbnQgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLm92ZXJsYXlzLnB1c2gob3ZlcmxheSk7XG5cbiAgR01hcHMuZmlyZSgnb3ZlcmxheV9hZGRlZCcsIG92ZXJsYXksIHRoaXMpO1xuXG4gIHJldHVybiBvdmVybGF5O1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gb3ZlcmxheSBmcm9tIHRoZSBtYXAgYW5kIGZyb20gdGhlIG92ZXJsYXlzIGNvbGxlY3Rpb24uIFRoaXMgbWV0aG9kIGFsc28gZmlyZXMgYSBgb3ZlcmxheV9yZW1vdmVkYCBldmVudC5cbiAqIEBmdW5jdGlvbiByZW1vdmVPdmVybGF5XG4gKlxuICogQHBhcmFtIHtnb29nbGUubWFwcy5PdmVybGF5Vmlld30gb3ZlcmxheSAtIFRoZSBvdmVybGF5IHRvIGJlIHJlbW92ZWQuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5yZW1vdmVPdmVybGF5ID0gZnVuY3Rpb24gcmVtb3ZlT3ZlcmxheShvdmVybGF5KSB7XG4gIGNvbnN0IG92ZXJsYXlJbmRleCA9IHRoaXMub3ZlcmxheXMuaW5kZXhPZihvdmVybGF5KTtcblxuICBpZiAob3ZlcmxheUluZGV4ID49IDApIHtcbiAgICBvdmVybGF5LnNldE1hcChudWxsKTtcbiAgICB0aGlzLm92ZXJsYXlzLnNwbGljZShvdmVybGF5SW5kZXgsIDEpO1xuXG4gICAgR01hcHMuZmlyZSgnb3ZlcmxheV9yZW1vdmVkJywgb3ZlcmxheSwgdGhpcyk7XG4gIH1cbn07XG5cbi8qKlxuICogUmVtb3ZlIGFsbCB0aGUgb3ZlcmxheXMgZnJvbSB0aGUgbWFwIGFuZCBjbGVhciB0aGUgb3ZlcmxheXMgY29sbGVjdGlvbi4gVGhpcyBtZXRob2QgZG9lcyBub3QgZmlyZSBhIGBvdmVybGF5X3JlbW92ZWRgIGV2ZW50LlxuICogQGZ1bmN0aW9uIHJlbW92ZU92ZXJsYXlzXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5yZW1vdmVPdmVybGF5cyA9IGZ1bmN0aW9uIHJlbW92ZU92ZXJsYXlzKCkge1xuICB0aGlzLm92ZXJsYXlzLmZvckVhY2gob3ZlcmxheSA9PiBvdmVybGF5LnNldE1hcChudWxsKSk7XG5cbiAgdGhpcy5vdmVybGF5cyA9IFtdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR01hcHM7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaWYgKHR5cGVvZiB3aW5kb3cuZ29vZ2xlID09PSAnb2JqZWN0JyAmJiB3aW5kb3cuZ29vZ2xlLm1hcHMpIHtcbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBQb2x5Z29uIGNvbnRhaW5zTGF0TG5nXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90cGFya2luL0dvb2dsZS1NYXBzLVBvaW50LWluLVBvbHlnb25cbiAgLy8gUG95Z29uIGdldEJvdW5kcyBleHRlbnNpb24gLSBnb29nbGUtbWFwcy1leHRlbnNpb25zXG4gIC8vIGh0dHA6Ly9jb2RlLmdvb2dsZS5jb20vcC9nb29nbGUtbWFwcy1leHRlbnNpb25zL3NvdXJjZS9icm93c2UvZ29vZ2xlLm1hcHMuUG9seWdvbi5nZXRCb3VuZHMuanNcbiAgaWYgKCFnb29nbGUubWFwcy5Qb2x5Z29uLnByb3RvdHlwZS5nZXRCb3VuZHMpIHtcbiAgICBnb29nbGUubWFwcy5Qb2x5Z29uLnByb3RvdHlwZS5nZXRCb3VuZHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBib3VuZHMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCk7XG4gICAgICB2YXIgcGF0aHMgPSB0aGlzLmdldFBhdGhzKCk7XG4gICAgICB2YXIgcGF0aDtcblxuICAgICAgZm9yICh2YXIgcCA9IDA7IHAgPCBwYXRocy5nZXRMZW5ndGgoKTsgcCsrKSB7XG4gICAgICAgIHBhdGggPSBwYXRocy5nZXRBdChwKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgICBib3VuZHMuZXh0ZW5kKHBhdGguZ2V0QXQoaSkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBib3VuZHM7XG4gICAgfTtcbiAgfVxuXG4gIGlmICghZ29vZ2xlLm1hcHMuUG9seWdvbi5wcm90b3R5cGUuY29udGFpbnNMYXRMbmcpIHtcbiAgICAvLyBQb2x5Z29uIGNvbnRhaW5zTGF0TG5nIC0gbWV0aG9kIHRvIGRldGVybWluZSBpZiBhIGxhdExuZyBpcyB3aXRoaW4gYSBwb2x5Z29uXG4gICAgZ29vZ2xlLm1hcHMuUG9seWdvbi5wcm90b3R5cGUuY29udGFpbnNMYXRMbmcgPSBmdW5jdGlvbihsYXRMbmcpIHtcbiAgICAgIC8vIEV4Y2x1ZGUgcG9pbnRzIG91dHNpZGUgb2YgYm91bmRzIGFzIHRoZXJlIGlzIG5vIHdheSB0aGV5IGFyZSBpbiB0aGUgcG9seVxuICAgICAgdmFyIGJvdW5kcyA9IHRoaXMuZ2V0Qm91bmRzKCk7XG5cbiAgICAgIGlmIChib3VuZHMgIT09IG51bGwgJiYgIWJvdW5kcy5jb250YWlucyhsYXRMbmcpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gUmF5Y2FzdCBwb2ludCBpbiBwb2x5Z29uIG1ldGhvZFxuICAgICAgdmFyIGluUG9seSA9IGZhbHNlO1xuXG4gICAgICB2YXIgbnVtUGF0aHMgPSB0aGlzLmdldFBhdGhzKCkuZ2V0TGVuZ3RoKCk7XG4gICAgICBmb3IgKHZhciBwID0gMDsgcCA8IG51bVBhdGhzOyBwKyspIHtcbiAgICAgICAgdmFyIHBhdGggPSB0aGlzLmdldFBhdGhzKCkuZ2V0QXQocCk7XG4gICAgICAgIHZhciBudW1Qb2ludHMgPSBwYXRoLmdldExlbmd0aCgpO1xuICAgICAgICB2YXIgaiA9IG51bVBvaW50cyAtIDE7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1Qb2ludHM7IGkrKykge1xuICAgICAgICAgIHZhciB2ZXJ0ZXgxID0gcGF0aC5nZXRBdChpKTtcbiAgICAgICAgICB2YXIgdmVydGV4MiA9IHBhdGguZ2V0QXQoaik7XG5cbiAgICAgICAgICBpZiAodmVydGV4MS5sbmcoKSA8IGxhdExuZy5sbmcoKSAmJiB2ZXJ0ZXgyLmxuZygpID49IGxhdExuZy5sbmcoKSB8fCB2ZXJ0ZXgyLmxuZygpIDwgbGF0TG5nLmxuZygpICYmIHZlcnRleDEubG5nKCkgPj0gbGF0TG5nLmxuZygpKSB7XG4gICAgICAgICAgICBpZiAodmVydGV4MS5sYXQoKSArIChsYXRMbmcubG5nKCkgLSB2ZXJ0ZXgxLmxuZygpKSAvICh2ZXJ0ZXgyLmxuZygpIC0gdmVydGV4MS5sbmcoKSkgKiAodmVydGV4Mi5sYXQoKSAtIHZlcnRleDEubGF0KCkpIDwgbGF0TG5nLmxhdCgpKSB7XG4gICAgICAgICAgICAgIGluUG9seSA9ICFpblBvbHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaiA9IGk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluUG9seTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKCFnb29nbGUubWFwcy5DaXJjbGUucHJvdG90eXBlLmNvbnRhaW5zTGF0TG5nKSB7XG4gICAgZ29vZ2xlLm1hcHMuQ2lyY2xlLnByb3RvdHlwZS5jb250YWluc0xhdExuZyA9IGZ1bmN0aW9uKGxhdExuZykge1xuICAgICAgaWYgKGdvb2dsZS5tYXBzLmdlb21ldHJ5KSB7XG4gICAgICAgIHJldHVybiBnb29nbGUubWFwcy5nZW9tZXRyeS5zcGhlcmljYWwuY29tcHV0ZURpc3RhbmNlQmV0d2Vlbih0aGlzLmdldENlbnRlcigpLCBsYXRMbmcpIDw9IHRoaXMuZ2V0UmFkaXVzKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGdvb2dsZS5tYXBzLlJlY3RhbmdsZS5wcm90b3R5cGUuY29udGFpbnNMYXRMbmcgPSBmdW5jdGlvbihsYXRMbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb3VuZHMoKS5jb250YWlucyhsYXRMbmcpO1xuICB9O1xuXG4gIGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcy5wcm90b3R5cGUuY29udGFpbnNMYXRMbmcgPSBmdW5jdGlvbihsYXRMbmcpIHtcbiAgICByZXR1cm4gdGhpcy5jb250YWlucyhsYXRMbmcpO1xuICB9O1xuXG4gIGdvb2dsZS5tYXBzLk1hcmtlci5wcm90b3R5cGUuc2V0RmVuY2VzID0gZnVuY3Rpb24oZmVuY2VzKSB7XG4gICAgdGhpcy5mZW5jZXMgPSBmZW5jZXM7XG4gIH07XG5cbiAgZ29vZ2xlLm1hcHMuTWFya2VyLnByb3RvdHlwZS5hZGRGZW5jZSA9IGZ1bmN0aW9uKGZlbmNlKSB7XG4gICAgdGhpcy5mZW5jZXMucHVzaChmZW5jZSk7XG4gIH07XG5cbiAgZ29vZ2xlLm1hcHMuTWFya2VyLnByb3RvdHlwZS5nZXRJZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzWydfX2dtX2lkJ107XG4gIH07XG59XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEFycmF5IGluZGV4T2Zcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvaW5kZXhPZlxuaWYgKCFBcnJheS5wcm90b3R5cGUuaW5kZXhPZikge1xuICBBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIChzZWFyY2hFbGVtZW50IC8qLCBmcm9tSW5kZXggKi8gKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgIGlmICh0aGlzID09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICB9XG4gICAgICB2YXIgdCA9IE9iamVjdCh0aGlzKTtcbiAgICAgIHZhciBsZW4gPSB0Lmxlbmd0aCA+Pj4gMDtcbiAgICAgIGlmIChsZW4gPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICB2YXIgbiA9IDA7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBuID0gTnVtYmVyKGFyZ3VtZW50c1sxXSk7XG4gICAgICAgICAgaWYgKG4gIT0gbikgeyAvLyBzaG9ydGN1dCBmb3IgdmVyaWZ5aW5nIGlmIGl0J3MgTmFOXG4gICAgICAgICAgICAgIG4gPSAwO1xuICAgICAgICAgIH0gZWxzZSBpZiAobiAhPSAwICYmIG4gIT0gSW5maW5pdHkgJiYgbiAhPSAtSW5maW5pdHkpIHtcbiAgICAgICAgICAgICAgbiA9IChuID4gMCB8fCAtMSkgKiBNYXRoLmZsb29yKE1hdGguYWJzKG4pKTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobiA+PSBsZW4pIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICB2YXIgayA9IG4gPj0gMCA/IG4gOiBNYXRoLm1heChsZW4gLSBNYXRoLmFicyhuKSwgMCk7XG4gICAgICBmb3IgKDsgayA8IGxlbjsgaysrKSB7XG4gICAgICAgICAgaWYgKGsgaW4gdCAmJiB0W2tdID09PSBzZWFyY2hFbGVtZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBrO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAtMTtcbiAgfVxufSIsImltcG9ydCBHTWFwcywgeyBsYXRMbmdGcm9tQXJndW1lbnRzLCBmbGF0dGVuQXJyYXksIGFycmF5VG9MYXRMbmcgfSBmcm9tICcuL2NvcmUnO1xuXG4vKipcbiAqIEV4dGVuZHMgR01hcHMgdG8gdXNlIHJvdXRlcy5cbiAqIEBtb2R1bGUgUm91dGVzXG4gKi9cblxuLyoqXG4gKiBHZXQgcm91dGVzIGJldHdlZW4gdHdvIGNvb3JkaW5hdGVzLlxuICogQGZ1bmN0aW9uIGdldFJvdXRlc1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBvYmplY3Qgc2hvdWxkIGNvbnRhaW46XG4gKiBAcGFyYW0ge3N0cmluZ3xnb29nbGUubWFwcy5MYXRMbmd8Z29vZ2xlLm1hcHMuUGxhY2V8Z29vZ2xlLm1hcHMuTGF0TG5nTGl0ZXJhbH0gb3B0aW9ucy5vcmlnaW4gLSBMb2NhdGlvbiBvZiBvcmlnaW4uXG4gKiBAcGFyYW0ge3N0cmluZ3xnb29nbGUubWFwcy5MYXRMbmd8Z29vZ2xlLm1hcHMuUGxhY2V8Z29vZ2xlLm1hcHMuTGF0TG5nTGl0ZXJhbH0gb3B0aW9ucy5kZXN0aW5hdGlvbiAtIExvY2F0aW9uIG9mIGRlc3RpbmF0aW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudHJhdmVsTW9kZSAtIENhbiBiZSBgYmljeWNsaW5nYCwgYGRyaXZpbmdgLCBgdHJhbnNpdGAgb3IgYHdhbGtpbmdgLlxuICogQHBhcmFtIHthcnJheX0gb3B0aW9ucy53YXlwb2ludHMgLSBBcnJheSBvZiBbZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1dheXBvaW50XShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjRGlyZWN0aW9uc1dheXBvaW50KSBvYmplY3RzLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5jYWxsYmFjayAtIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBhZnRlciB0aGUgcmVzdWx0cyBhcmUgcmV0dXJuZWQuXG4gKlxuICogQHNlZSBgb3B0aW9uc2AgYWxzbyBhY2NlcHRzIGFueSBvcHRpb24gZGVmaW5lZCBpbiB0aGUgW29mZmljaWFsIGRvY3VtZW50YXRpb25dKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNEaXJlY3Rpb25zUmVxdWVzdCkuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5nZXRSb3V0ZXMgPSBmdW5jdGlvbiBnZXRSb3V0ZXMoYmFzZU9wdGlvbnMpIHtcbiAgY29uc3QgeyBvcmlnaW4sIGRlc3RpbmF0aW9uLCB0cmF2ZWxNb2RlID0gJ3dhbGtpbmcnLCB1bml0U3lzdGVtID0gJ21ldHJpYycsIGF2b2lkSGlnaHdheXMgPSBmYWxzZSwgYXZvaWRUb2xscyA9IGZhbHNlLCBvcHRpbWl6ZVdheXBvaW50cyA9IGZhbHNlLCB3YXlwb2ludHMgPSBbXSwgY2FsbGJhY2ssIGVycm9yLCAuLi5vcHRpb25zIH0gPSBiYXNlT3B0aW9ucztcblxuICBjb25zdCB0cmF2ZWxNb2RlSWQgPSBnb29nbGUubWFwcy5UcmF2ZWxNb2RlW3RyYXZlbE1vZGUudG9VcHBlckNhc2UoKV07XG4gIGNvbnN0IHVuaXRTeXN0ZW1JZCA9IGdvb2dsZS5tYXBzLlRyYXZlbE1vZGVbdW5pdFN5c3RlbS50b1VwcGVyQ2FzZSgpXTtcblxuICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAuLi5vcHRpb25zLFxuICAgIHRyYXZlbE1vZGU6IHRyYXZlbE1vZGVJZCxcbiAgICB1bml0U3lzdGVtOiB1bml0U3lzdGVtSWQsXG4gICAgYXZvaWRIaWdod2F5cyxcbiAgICBhdm9pZFRvbGxzLFxuICAgIG9wdGltaXplV2F5cG9pbnRzLFxuICAgIHdheXBvaW50cyxcbiAgICBvcmlnaW46IHR5cGVvZiBvcmlnaW4gPT09ICdzdHJpbmcnID8gb3JpZ2luIDogbGF0TG5nRnJvbUFyZ3VtZW50cyguLi5vcmlnaW4pLFxuICAgIGRlc3RpbmF0aW9uOiB0eXBlb2YgZGVzdGluYXRpb24gPT09ICdzdHJpbmcnID8gZGVzdGluYXRpb24gOiBsYXRMbmdGcm9tQXJndW1lbnRzKC4uLmRlc3RpbmF0aW9uKSxcbiAgfTtcblxuICBjb25zdCBzZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTZXJ2aWNlKCk7XG5cbiAgc2VydmljZS5yb3V0ZShyZXF1ZXN0T3B0aW9ucywgKHJlc3VsdCwgc3RhdHVzKSA9PiB7XG4gICAgaWYgKHN0YXR1cyA9PT0gZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1N0YXR1cy5PSykge1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKFsuLi5yZXN1bHQucm91dGVzXSwgcmVzdWx0LCBzdGF0dXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZXJyb3IpIHtcbiAgICAgIGVycm9yKHJlc3VsdCwgc3RhdHVzKTtcbiAgICB9XG4gIH0pO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYWxsIHJvdXRlcyBzdG9yZWQgaW4gcm91dGVzIGNvbGxlY3Rpb24uXG4gKiBAZnVuY3Rpb24gcmVtb3ZlUm91dGVzXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5yZW1vdmVSb3V0ZXMgPSBmdW5jdGlvbiByZW1vdmVSb3V0ZXMoKSB7XG4gIHRoaXMucm91dGVzID0gW107XG59O1xuXG4vKipcbiAqIEdldCBlbGV2YXRpb24gaW5mb3JtYXRpb24gZm9yIGxvY2F0aW9ucyBvciByb3V0ZXMuXG4gKiBAZnVuY3Rpb24gZ2V0RWxldmF0aW9uc1xuICpcbiAqIEBwYXJhbSB7YXJyYXl9IGxvY2F0aW9ucyAtIEJpLWRpbWVuc2lvbmFsIGFycmF5IG9mIGxhdGl0dWRlcyBhbmQgbG9uZ2l0dWRlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcGF0aCAtIElmIGlzIHRydWUsIG1ha2VzIGEgcmVxdWVzdCBhbG9uZyBhIHBhdGguIElmIGlzIGZhbHNlLCBvbmx5IGdldCBlbGV2YXRpb24gaW5mb3JtYXRpb24gb24gZGlzY3JldGUgbG9jYXRpb25zLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBOYXRpdmUgY2FsbGJhY2sgZnVuY3Rpb24gZGVmaW5lZCBpbiBbZ29vZ2xlLm1hcHMuRWxldmF0aW9uU2VydmljZSAoJ01ldGhvZHMnIHNlY3Rpb24pXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjRWxldmF0aW9uU2VydmljZSkgKGBnZXRFbGV2YXRpb25BbG9uZ1BhdGhgIGlmIGBwYXRoYCBpcyB0cnVlLCBgZ2V0RWxldmF0aW9uRm9yTG9jYXRpb25zYCBpZiBgcGF0aGAgaXMgZmFsc2UpLlxuICovXG5HTWFwcy5wcm90b3R5cGUuZ2V0RWxldmF0aW9ucyA9IGZ1bmN0aW9uIGdldEVsZXZhdGlvbnMoYmFzZU9wdGlvbnMpIHtcbiAgY29uc3QgeyBwYXRoID0gZmFsc2UsIHNhbXBsZXMgPSAyNTYsIGNhbGxiYWNrLCAuLi5vcHRpb25zIH0gPSBiYXNlT3B0aW9ucztcblxuICBsZXQgbG9jYXRpb25zID0gb3B0aW9ucy5sb2NhdGlvbnMgfHwgW107XG5cbiAgaWYgKGxvY2F0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgaWYgKGxvY2F0aW9uc1swXS5sZW5ndGggPiAwKSB7XG4gICAgICBsb2NhdGlvbnMgPSBmbGF0dGVuQXJyYXkoW2xvY2F0aW9uc10ubWFwKGxvY2F0aW9uID0+IGFycmF5VG9MYXRMbmcobG9jYXRpb24sIGZhbHNlKSkpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNlcnZpY2UgPSBuZXcgZ29vZ2xlLm1hcHMuRWxldmF0aW9uU2VydmljZSgpO1xuXG4gIGlmICghcGF0aCkge1xuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIGxvY2F0aW9ucyxcbiAgICAgIHBhdGgsXG4gICAgICBzYW1wbGVzLFxuICAgIH07XG5cbiAgICBzZXJ2aWNlLmdldEVsZXZhdGlvbkZvckxvY2F0aW9ucyhyZXF1ZXN0T3B0aW9ucywgKHJlc3VsdCwgc3RhdHVzKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNhbGxiYWNrKHJlc3VsdCwgc3RhdHVzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgIHBhdGg6IGxvY2F0aW9ucyxcbiAgICAgIHNhbXBsZXMsXG4gICAgfTtcblxuICAgIHNlcnZpY2UuZ2V0RWxldmF0aW9uQWxvbmdQYXRoKHJlcXVlc3RPcHRpb25zLCAocmVzdWx0LCBzdGF0dXMpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2FsbGJhY2socmVzdWx0LCBzdGF0dXMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgR01hcHMjcmVtb3ZlUG9seWxpbmVzfS5cbiAqIEBmdW5jdGlvbiBjbGVhblJvdXRlXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5jbGVhblJvdXRlID0gR01hcHMucHJvdG90eXBlLnJlbW92ZVBvbHlsaW5lcztcblxuR01hcHMucHJvdG90eXBlLnJlbmRlclJvdXRlID0gZnVuY3Rpb24gcmVuZGVyUm91dGUob3B0aW9ucywgYmFzZVJlbmRlck9wdGlvbnMpIHtcbiAgY29uc3QgcGFuZWwgPSAoKHR5cGVvZiBiYXNlUmVuZGVyT3B0aW9ucy5wYW5lbCA9PT0gJ3N0cmluZycpID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYmFzZVJlbmRlck9wdGlvbnMucGFuZWwucmVwbGFjZSgnIycsICcnKSkgOiBiYXNlUmVuZGVyT3B0aW9ucy5wYW5lbCk7XG5cbiAgY29uc3QgcmVuZGVyT3B0aW9ucyA9IHtcbiAgICAuLi5iYXNlUmVuZGVyT3B0aW9ucyxcbiAgICBwYW5lbCxcbiAgICBtYXA6IHRoaXMubWFwLFxuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXkgPSBuZXcgZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1JlbmRlcmVyKHJlbmRlck9wdGlvbnMpO1xuXG4gIHRoaXMuZ2V0Um91dGVzKHtcbiAgICBvcmlnaW46IG9wdGlvbnMub3JpZ2luLFxuICAgIGRlc3RpbmF0aW9uOiBvcHRpb25zLmRlc3RpbmF0aW9uLFxuICAgIHRyYXZlbE1vZGU6IG9wdGlvbnMudHJhdmVsTW9kZSxcbiAgICB3YXlwb2ludHM6IG9wdGlvbnMud2F5cG9pbnRzLFxuICAgIHVuaXRTeXN0ZW06IG9wdGlvbnMudW5pdFN5c3RlbSxcbiAgICBlcnJvcjogb3B0aW9ucy5lcnJvcixcbiAgICBhdm9pZEhpZ2h3YXlzOiBvcHRpb25zLmF2b2lkSGlnaHdheXMsXG4gICAgYXZvaWRUb2xsczogb3B0aW9ucy5hdm9pZFRvbGxzLFxuICAgIG9wdGltaXplV2F5cG9pbnRzOiBvcHRpb25zLm9wdGltaXplV2F5cG9pbnRzLFxuICAgIGNhbGxiYWNrKF8sIHJlc3BvbnNlLCBzdGF0dXMpIHtcbiAgICAgIGlmIChzdGF0dXMgPT09IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTdGF0dXMuT0spIHtcbiAgICAgICAgZGlzcGxheS5zZXREaXJlY3Rpb25zKHJlc3BvbnNlKTtcbiAgICAgIH1cbiAgICB9LFxuICB9KTtcbn07XG5cbi8qKlxuICogRHJhdyBhIHJvdXRlIHVzaW5nIHBvbHlsaW5lcy4gSXQgdXNlcyB0aGUgbGFzdCByb3V0ZSBmb3VuZCBieSB7QGxpbmsgR01hcHMjZ2V0Um91dGVzfS5cbiAqIEBmdW5jdGlvbiBkcmF3Um91dGVcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIEFjY2VwdHMgdGhlIHNhbWUgb3B0aW9ucyBhcyB7QGxpbmsgR01hcHMjZ2V0Um91dGVzfS5cbiAqIEBwYXJhbSB7c3RyaW5nfGdvb2dsZS5tYXBzLkxhdExuZ3xnb29nbGUubWFwcy5QbGFjZXxnb29nbGUubWFwcy5MYXRMbmdMaXRlcmFsfSBvcHRpb25zLm9yaWdpbiAtIExvY2F0aW9uIG9mIG9yaWdpbi5cbiAqIEBwYXJhbSB7c3RyaW5nfGdvb2dsZS5tYXBzLkxhdExuZ3xnb29nbGUubWFwcy5QbGFjZXxnb29nbGUubWFwcy5MYXRMbmdMaXRlcmFsfSBvcHRpb25zLmRlc3RpbmF0aW9uIC0gTG9jYXRpb24gb2YgZGVzdGluYXRpb24uXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zdHJva2VDb2xvciAtIENvbG9yIG9mIHRoZSBwb2x5bGluZS4gQ2FuIGJlIGhleGFkZWNpbWFsIG9yIENTUyBuYW1lLlxuICogQHBhcmFtIHtmbG9hdH0gb3B0aW9ucy5zdHJva2VPcGFjaXR5IC0gT3BhY2l0eSBvZiB0aGUgcG9seWxpbmUgZnJvbSAwLjAgdG8gMS4wXG4gKiBAcGFyYW0ge2ludGVnZXJ9IG9wdGlvbnMuc3Ryb2tlV2VpZ2h0IC0gUG9seWxpbmUgd2lkdGggaW4gcGl4ZWxzLlxuICovXG5HTWFwcy5wcm90b3R5cGUuZHJhd1JvdXRlID0gZnVuY3Rpb24gZHJhd1JvdXRlKG9wdGlvbnMpIHtcbiAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgdGhpcy5nZXRSb3V0ZXMoe1xuICAgIG9yaWdpbjogb3B0aW9ucy5vcmlnaW4sXG4gICAgZGVzdGluYXRpb246IG9wdGlvbnMuZGVzdGluYXRpb24sXG4gICAgdHJhdmVsTW9kZTogb3B0aW9ucy50cmF2ZWxNb2RlLFxuICAgIHdheXBvaW50czogb3B0aW9ucy53YXlwb2ludHMsXG4gICAgdW5pdFN5c3RlbTogb3B0aW9ucy51bml0U3lzdGVtLFxuICAgIGVycm9yOiBvcHRpb25zLmVycm9yLFxuICAgIGF2b2lkSGlnaHdheXM6IG9wdGlvbnMuYXZvaWRIaWdod2F5cyxcbiAgICBhdm9pZFRvbGxzOiBvcHRpb25zLmF2b2lkVG9sbHMsXG4gICAgb3B0aW1pemVXYXlwb2ludHM6IG9wdGlvbnMub3B0aW1pemVXYXlwb2ludHMsXG4gICAgY2FsbGJhY2socm91dGVzKSB7XG4gICAgICBpZiAocm91dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgbGFzdFJvdXRlID0gcm91dGVzW3JvdXRlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgY29uc3QgcG9seWxpbmVPcHRpb25zID0ge1xuICAgICAgICAgIHBhdGg6IGxhc3RSb3V0ZS5vdmVydmlld19wYXRoLFxuICAgICAgICAgIHN0cm9rZUNvbG9yOiBvcHRpb25zLnN0cm9rZUNvbG9yLFxuICAgICAgICAgIHN0cm9rZU9wYWNpdHk6IG9wdGlvbnMuc3Ryb2tlT3BhY2l0eSxcbiAgICAgICAgICBzdHJva2VXZWlnaHQ6IG9wdGlvbnMuc3Ryb2tlV2VpZ2h0LFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChvcHRpb25zLmljb25zKSB7XG4gICAgICAgICAgcG9seWxpbmVPcHRpb25zLmljb25zID0gb3B0aW9ucy5pY29ucztcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuZHJhd1BvbHlsaW5lKHBvbHlsaW5lT3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuY2FsbGJhY2spIHtcbiAgICAgICAgICBvcHRpb25zLmNhbGxiYWNrKGxhc3RSb3V0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICB9KTtcbn07XG5cbi8qKlxuICogVHJhdmVsIGEgcm91dGUgYXV0b21hdGljYWxseS4gSXQgdXNlcyB0aGUgbGFzdCByb3V0ZSBmb3VuZCBieSB7QGxpbmsgR01hcHMjZ2V0Um91dGVzfS5cbiAqIEBmdW5jdGlvbiB0cmF2ZWxSb3V0ZVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gQWNjZXB0cyB0aGUgc2FtZSBvcHRpb25zIGFzIHtAbGluayBHTWFwcyNnZXRSb3V0ZXN9LlxuICogQHBhcmFtIHtzdHJpbmd8Z29vZ2xlLm1hcHMuTGF0TG5nfGdvb2dsZS5tYXBzLlBsYWNlfGdvb2dsZS5tYXBzLkxhdExuZ0xpdGVyYWx9IG9wdGlvbnMub3JpZ2luIC0gTG9jYXRpb24gb2Ygb3JpZ2luLlxuICogQHBhcmFtIHtzdHJpbmd8Z29vZ2xlLm1hcHMuTGF0TG5nfGdvb2dsZS5tYXBzLlBsYWNlfGdvb2dsZS5tYXBzLkxhdExuZ0xpdGVyYWx9IG9wdGlvbnMuZGVzdGluYXRpb24gLSBMb2NhdGlvbiBvZiBkZXN0aW5hdGlvbi5cbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zLnJvdXRlIC0gQSBbZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1JvdXRlXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjRGlyZWN0aW9uc1JvdXRlKSBvYmplY3QuIElmIHNldCwgYG9yaWdpbmAgYW5kIGBkZXN0aW5hdGlvbmAgYXJlIGlnbm9yZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLnN0YXJ0IC0gRmlyZWQgYmVmb3JlIHRoZSBmaXJzdCBzdGVwLiBJdCByZWNlaXZlcyBhIHNpbmdsZSBhcmd1bWVudCwgd2hpY2ggaXMgYSBbRGlyZWN0aW9uc1JvdXRlXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjRGlyZWN0aW9uc1JvdXRlKSBvYmplY3QuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLnN0ZXAgLSBGaXJlZCBlYWNoIHN0ZXAgaW4gdGhlIHJvdXRlLiBJdCByZWNlaXZlcyAyIGFyZ3VtZW50cywgd2hpY2ggaXMgYSBbRGlyZWN0aW9uc1N0ZXBdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNEaXJlY3Rpb25zU3RlcCkgb2JqZWN0IGFuZCB0aGUgdG90YWwgbGVuZ3RoIG9mIHRoZSBzdGVwcy5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMuZW5kIC0gRmlyZWQgYWZ0ZXIgdGhlIGxhc3Qgc3RlcC4gSXQgcmVjZWl2ZXMgYSBzaW5nbGUgYXJndW1lbnQsIHdoaWNoIGlzIGEgW0RpcmVjdGlvbnNSb3V0ZV0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI0RpcmVjdGlvbnNSb3V0ZSkgb2JqZWN0LlxuICovXG5HTWFwcy5wcm90b3R5cGUudHJhdmVsUm91dGUgPSBmdW5jdGlvbiB0cmF2ZWxSb3V0ZShvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zLm9yaWdpbiAmJiBvcHRpb25zLmRlc3RpbmF0aW9uKSB7XG4gICAgdGhpcy5nZXRSb3V0ZXMoe1xuICAgICAgb3JpZ2luOiBvcHRpb25zLm9yaWdpbixcbiAgICAgIGRlc3RpbmF0aW9uOiBvcHRpb25zLmRlc3RpbmF0aW9uLFxuICAgICAgdHJhdmVsTW9kZTogb3B0aW9ucy50cmF2ZWxNb2RlLFxuICAgICAgd2F5cG9pbnRzOiBvcHRpb25zLndheXBvaW50cyxcbiAgICAgIHVuaXRTeXN0ZW06IG9wdGlvbnMudW5pdFN5c3RlbSxcbiAgICAgIGVycm9yOiBvcHRpb25zLmVycm9yLFxuICAgICAgY2FsbGJhY2socm91dGVzKSB7XG4gICAgICAgIGlmIChyb3V0ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGFzdFJvdXRlID0gcm91dGVzW3JvdXRlcy5sZW5ndGggLSAxXTtcblxuICAgICAgICAvLyBzdGFydCBjYWxsYmFja1xuICAgICAgICBpZiAob3B0aW9ucy5zdGFydCkge1xuICAgICAgICAgIG9wdGlvbnMuc3RhcnQobGFzdFJvdXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN0ZXAgY2FsbGJhY2tcbiAgICAgICAgaWYgKG9wdGlvbnMuc3RlcCkge1xuICAgICAgICAgIGlmIChsYXN0Um91dGUubGVncy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCB7IHN0ZXBzLCB9ID0gbGFzdFJvdXRlLmxlZ3NbMF07XG5cbiAgICAgICAgICAgIHN0ZXBzLmZvckVhY2goKHN0ZXAsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgICAgICBzdGVwLnN0ZXBfbnVtYmVyID0gaW5kZXg7XG4gICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgICAgICBzdGVwLnN0ZXBOdW1iZXIgPSBpbmRleDtcblxuICAgICAgICAgICAgICBvcHRpb25zLnN0ZXAoc3RlcCwgc3RlcHMubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBlbmQgY2FsbGJhY2tcbiAgICAgICAgaWYgKG9wdGlvbnMuZW5kKSB7XG4gICAgICAgICAgb3B0aW9ucy5lbmQobGFzdFJvdXRlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChvcHRpb25zLnJvdXRlKSB7XG4gICAgaWYgKG9wdGlvbnMucm91dGUubGVncy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB7IHN0ZXBzLCB9ID0gb3B0aW9ucy5yb3V0ZS5sZWdzWzBdO1xuXG4gICAgICBzdGVwcy5mb3JFYWNoKChzdGVwLCBpbmRleCkgPT4ge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgc3RlcC5zdGVwX251bWJlciA9IGluZGV4O1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgc3RlcC5zdGVwTnVtYmVyID0gaW5kZXg7XG5cbiAgICAgICAgb3B0aW9ucy5zdGVwKHN0ZXAsIHN0ZXBzLmxlbmd0aCAtIDEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIERyYXcgYW5kIHRyYXZlbCBhIHJvdXRlIGF1dG9tYXRpY2FsbHkgc3RlcCBieSBzdGVwLiBJdCB1c2VzIHRoZSBsYXN0IHJvdXRlIGZvdW5kIGJ5IHtAbGluayBHTWFwcyNnZXRSb3V0ZXN9LlxuICogQGZ1bmN0aW9uIGRyYXdTdGVwcGVkUm91dGVcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIEFjY2VwdHMgdGhlIHNhbWUgb3B0aW9ucyBhcyB7QGxpbmsgR01hcHMjdHJhdmVsUm91dGV9LlxuICogQHBhcmFtIHtzdHJpbmd8Z29vZ2xlLm1hcHMuTGF0TG5nfGdvb2dsZS5tYXBzLlBsYWNlfGdvb2dsZS5tYXBzLkxhdExuZ0xpdGVyYWx9IG9wdGlvbnMub3JpZ2luIC0gTG9jYXRpb24gb2Ygb3JpZ2luLlxuICogQHBhcmFtIHtzdHJpbmd8Z29vZ2xlLm1hcHMuTGF0TG5nfGdvb2dsZS5tYXBzLlBsYWNlfGdvb2dsZS5tYXBzLkxhdExuZ0xpdGVyYWx9IG9wdGlvbnMuZGVzdGluYXRpb24gLSBMb2NhdGlvbiBvZiBkZXN0aW5hdGlvbi5cbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zLnJvdXRlIC0gQSBbZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1JvdXRlXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjRGlyZWN0aW9uc1JvdXRlKSBvYmplY3QuIElmIHNldCwgYG9yaWdpbmAgYW5kIGBkZXN0aW5hdGlvbmAgYXJlIGlnbm9yZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zdHJva2VDb2xvciAtIENvbG9yIG9mIHRoZSBwb2x5bGluZS4gQ2FuIGJlIGhleGFkZWNpbWFsIG9yIENTUyBuYW1lLlxuICogQHBhcmFtIHtmbG9hdH0gb3B0aW9ucy5zdHJva2VPcGFjaXR5IC0gT3BhY2l0eSBvZiB0aGUgcG9seWxpbmUgZnJvbSAwLjAgdG8gMS4wXG4gKiBAcGFyYW0ge2ludGVnZXJ9IG9wdGlvbnMuc3Ryb2tlV2VpZ2h0IC0gUG9seWxpbmUgd2lkdGggaW4gcGl4ZWxzLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5zdGFydCAtIEZpcmVkIGJlZm9yZSB0aGUgZmlyc3Qgc3RlcC4gSXQgcmVjZWl2ZXMgYSBzaW5nbGUgYXJndW1lbnQsIHdoaWNoIGlzIGEgW0RpcmVjdGlvbnNSb3V0ZV0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI0RpcmVjdGlvbnNSb3V0ZSkgb2JqZWN0LlxuICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5zdGVwIC0gRmlyZWQgZWFjaCBzdGVwIGluIHRoZSByb3V0ZS4gSXQgcmVjZWl2ZXMgMiBhcmd1bWVudHMsIHdoaWNoIGlzIGEgW0RpcmVjdGlvbnNTdGVwXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjRGlyZWN0aW9uc1N0ZXApIG9iamVjdCBhbmQgdGhlIHRvdGFsIGxlbmd0aCBvZiB0aGUgc3RlcHMuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLmVuZCAtIEZpcmVkIGFmdGVyIHRoZSBsYXN0IHN0ZXAuIEl0IHJlY2VpdmVzIGEgc2luZ2xlIGFyZ3VtZW50LCB3aGljaCBpcyBhIFtEaXJlY3Rpb25zUm91dGVdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNEaXJlY3Rpb25zUm91dGUpIG9iamVjdC5cblxuICovXG5HTWFwcy5wcm90b3R5cGUuZHJhd1N0ZXBwZWRSb3V0ZSA9IGZ1bmN0aW9uIGRyYXdTdGVwcGVkUm91dGUob3B0aW9ucykge1xuICBjb25zdCBzZWxmID0gdGhpcztcblxuICB0aGlzLnRyYXZlbFJvdXRlKHtcbiAgICAuLi5vcHRpb25zLFxuICAgIHN0ZXA6IGZ1bmN0aW9uIHN0ZXAocm91dGVTdGVwLCBzdGVwc0NvdW50KSB7XG4gICAgICBjb25zdCBwb2x5bGluZU9wdGlvbnMgPSB7XG4gICAgICAgIHBhdGg6IHJvdXRlU3RlcC5wYXRoLFxuICAgICAgICBzdHJva2VDb2xvcjogb3B0aW9ucy5zdHJva2VDb2xvcixcbiAgICAgICAgc3Ryb2tlT3BhY2l0eTogb3B0aW9ucy5zdHJva2VPcGFjaXR5LFxuICAgICAgICBzdHJva2VXZWlnaHQ6IG9wdGlvbnMuc3Ryb2tlV2VpZ2h0LFxuICAgICAgfTtcblxuICAgICAgaWYgKG9wdGlvbnMuaWNvbnMpIHtcbiAgICAgICAgcG9seWxpbmVPcHRpb25zLmljb25zID0gb3B0aW9ucy5pY29ucztcbiAgICAgIH1cblxuICAgICAgc2VsZi5kcmF3UG9seWxpbmUocG9seWxpbmVPcHRpb25zKTtcblxuICAgICAgb3B0aW9ucy5zdGVwKHJvdXRlU3RlcCwgc3RlcHNDb3VudCk7XG4gICAgfSxcbiAgfSk7XG5cbiAgLy8gaWYgKG9wdGlvbnMub3JpZ2luICYmIG9wdGlvbnMuZGVzdGluYXRpb24pIHtcbiAgLy8gICB0aGlzLmdldFJvdXRlcyh7XG4gIC8vICAgICBvcmlnaW46IG9wdGlvbnMub3JpZ2luLFxuICAvLyAgICAgZGVzdGluYXRpb246IG9wdGlvbnMuZGVzdGluYXRpb24sXG4gIC8vICAgICB0cmF2ZWxNb2RlOiBvcHRpb25zLnRyYXZlbE1vZGUsXG4gIC8vICAgICB3YXlwb2ludHM6IG9wdGlvbnMud2F5cG9pbnRzLFxuICAvLyAgICAgZXJyb3I6IG9wdGlvbnMuZXJyb3IsXG4gIC8vICAgICBjYWxsYmFjayhyb3V0ZXMpIHtcbiAgLy8gICAgICAgaWYgKHJvdXRlcy5sZW5ndGggPT09IDApIHtcbiAgLy8gICAgICAgICByZXR1cm47XG4gIC8vICAgICAgIH1cblxuICAvLyAgICAgICBjb25zdCByb3V0ZSA9IHJvdXRlc1tyb3V0ZXMubGVuZ3RoIC0gMV07XG5cbiAgLy8gICAgICAgLy8gc3RhcnQgY2FsbGJhY2tcbiAgLy8gICAgICAgaWYgKG9wdGlvbnMuc3RhcnQpIHtcbiAgLy8gICAgICAgICBvcHRpb25zLnN0YXJ0KHJvdXRlKTtcbiAgLy8gICAgICAgfVxuXG4gIC8vICAgICAgIC8vIHN0ZXAgY2FsbGJhY2tcbiAgLy8gICAgICAgaWYgKG9wdGlvbnMuc3RlcCkge1xuICAvLyAgICAgICAgIGlmIChyb3V0ZS5sZWdzLmxlbmd0aCA+IDApIHtcbiAgLy8gICAgICAgICAgIGNvbnN0IHsgc3RlcHMsIH0gPSByb3V0ZS5sZWdzWzBdO1xuXG4gIC8vICAgICAgICAgICBzdGVwcy5mb3JFYWNoKChzdGVwLCBpbmRleCkgPT4ge1xuICAvLyAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgLy8gICAgICAgICAgICAgc3RlcC5zdGVwX251bWJlciA9IGluZGV4O1xuICAvLyAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgLy8gICAgICAgICAgICAgc3RlcC5zdGVwTnVtYmVyID0gaW5kZXg7XG5cbiAgLy8gICAgICAgICAgICAgY29uc3QgcG9seWxpbmVPcHRpb25zID0ge1xuICAvLyAgICAgICAgICAgICAgIHBhdGg6IHN0ZXAucGF0aCxcbiAgLy8gICAgICAgICAgICAgICBzdHJva2VDb2xvcjogb3B0aW9ucy5zdHJva2VDb2xvcixcbiAgLy8gICAgICAgICAgICAgICBzdHJva2VPcGFjaXR5OiBvcHRpb25zLnN0cm9rZU9wYWNpdHksXG4gIC8vICAgICAgICAgICAgICAgc3Ryb2tlV2VpZ2h0OiBvcHRpb25zLnN0cm9rZVdlaWdodCxcbiAgLy8gICAgICAgICAgICAgfTtcblxuICAvLyAgICAgICAgICAgICBpZiAob3B0aW9ucy5pY29ucykge1xuICAvLyAgICAgICAgICAgICAgIHBvbHlsaW5lT3B0aW9ucy5pY29ucyA9IG9wdGlvbnMuaWNvbnM7XG4gIC8vICAgICAgICAgICAgIH1cblxuICAvLyAgICAgICAgICAgICBzZWxmLmRyYXdQb2x5bGluZShwb2x5bGluZU9wdGlvbnMpO1xuICAvLyAgICAgICAgICAgICBvcHRpb25zLnN0ZXAoc3RlcCwgKHJvdXRlLmxlZ3NbMF0uc3RlcHMubGVuZ3RoIC0gMSkpO1xuICAvLyAgICAgICAgICAgfSk7XG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICB9XG5cbiAgLy8gICAgICAgLy8gZW5kIGNhbGxiYWNrXG4gIC8vICAgICAgIGlmIChvcHRpb25zLmVuZCkge1xuICAvLyAgICAgICAgIG9wdGlvbnMuZW5kKHJvdXRlKTtcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfSxcbiAgLy8gICB9KTtcbiAgLy8gfSBlbHNlIGlmIChvcHRpb25zLnJvdXRlKSB7XG4gIC8vICAgaWYgKG9wdGlvbnMucm91dGUubGVncy5sZW5ndGggPiAwKSB7XG4gIC8vICAgICBjb25zdCB7IHN0ZXBzLCB9ID0gb3B0aW9ucy5yb3V0ZS5sZWdzWzBdO1xuXG4gIC8vICAgICBzdGVwcy5mb3JFYWNoKChzdGVwLCBpbmRleCkgPT4ge1xuICAvLyAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgLy8gICAgICAgc3RlcC5zdGVwX251bWJlciA9IGluZGV4O1xuICAvLyAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgLy8gICAgICAgc3RlcC5zdGVwTnVtYmVyID0gaW5kZXg7XG5cbiAgLy8gICAgICAgY29uc3QgcG9seWxpbmVPcHRpb25zID0ge1xuICAvLyAgICAgICAgIHBhdGg6IHN0ZXAucGF0aCxcbiAgLy8gICAgICAgICBzdHJva2VDb2xvcjogb3B0aW9ucy5zdHJva2VDb2xvcixcbiAgLy8gICAgICAgICBzdHJva2VPcGFjaXR5OiBvcHRpb25zLnN0cm9rZU9wYWNpdHksXG4gIC8vICAgICAgICAgc3Ryb2tlV2VpZ2h0OiBvcHRpb25zLnN0cm9rZVdlaWdodCxcbiAgLy8gICAgICAgfTtcblxuICAvLyAgICAgICBpZiAob3B0aW9ucy5pY29ucykge1xuICAvLyAgICAgICAgIHBvbHlsaW5lT3B0aW9ucy5pY29ucyA9IG9wdGlvbnMuaWNvbnM7XG4gIC8vICAgICAgIH1cblxuICAvLyAgICAgICBzZWxmLmRyYXdQb2x5bGluZShwb2x5bGluZU9wdGlvbnMpO1xuXG4gIC8vICAgICAgIG9wdGlvbnMuc3RlcChzdGVwKTtcbiAgLy8gICAgIH0pO1xuICAvLyAgIH1cbiAgLy8gfVxufTtcblxuY2xhc3MgUm91dGUge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5vcmlnaW4gPSBvcHRpb25zLm9yaWdpbjtcbiAgICB0aGlzLmRlc3RpbmF0aW9uID0gb3B0aW9ucy5kZXN0aW5hdGlvbjtcbiAgICB0aGlzLndheXBvaW50cyA9IG9wdGlvbnMud2F5cG9pbnRzO1xuXG4gICAgdGhpcy5tYXAgPSBvcHRpb25zLm1hcDtcbiAgICB0aGlzLnJvdXRlID0gb3B0aW9ucy5yb3V0ZTtcbiAgICB0aGlzLnN0ZXBfY291bnQgPSAwO1xuICAgIHRoaXMuc3RlcHMgPSB0aGlzLnJvdXRlLmxlZ3NbMF0uc3RlcHM7XG4gICAgdGhpcy5zdGVwc19sZW5ndGggPSB0aGlzLnN0ZXBzLmxlbmd0aDtcblxuICAgIGNvbnN0IHBvbHlsaW5lT3B0aW9ucyA9IHtcbiAgICAgIHBhdGg6IG5ldyBnb29nbGUubWFwcy5NVkNBcnJheSgpLFxuICAgICAgc3Ryb2tlQ29sb3I6IG9wdGlvbnMuc3Ryb2tlQ29sb3IsXG4gICAgICBzdHJva2VPcGFjaXR5OiBvcHRpb25zLnN0cm9rZU9wYWNpdHksXG4gICAgICBzdHJva2VXZWlnaHQ6IG9wdGlvbnMuc3Ryb2tlV2VpZ2h0LFxuICAgIH07XG5cbiAgICBpZiAob3B0aW9ucy5pY29ucykge1xuICAgICAgcG9seWxpbmVPcHRpb25zLmljb25zID0gb3B0aW9ucy5pY29ucztcbiAgICB9XG5cbiAgICB0aGlzLnBvbHlsaW5lID0gdGhpcy5tYXAuZHJhd1BvbHlsaW5lKHBvbHlsaW5lT3B0aW9ucykuZ2V0UGF0aCgpO1xuICB9XG5cbiAgZ2V0Um91dGUob3B0aW9ucykge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5tYXAuZ2V0Um91dGVzKHtcbiAgICAgIG9yaWdpbjogdGhpcy5vcmlnaW4sXG4gICAgICBkZXN0aW5hdGlvbjogdGhpcy5kZXN0aW5hdGlvbixcbiAgICAgIHRyYXZlbE1vZGU6IG9wdGlvbnMudHJhdmVsTW9kZSxcbiAgICAgIHdheXBvaW50czogdGhpcy53YXlwb2ludHMgfHwgW10sXG4gICAgICBlcnJvcjogb3B0aW9ucy5lcnJvcixcbiAgICAgIGNhbGxiYWNrKHJvdXRlcykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgc2VsZi5yb3V0ZSA9IHJvdXRlc1swXTtcblxuICAgICAgICBpZiAob3B0aW9ucy5jYWxsYmFjaykge1xuICAgICAgICAgIG9wdGlvbnMuY2FsbGJhY2suY2FsbChzZWxmKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGJhY2soKSB7XG4gICAgaWYgKHRoaXMuc3RlcF9jb3VudCA+IDApIHtcbiAgICAgIHRoaXMuc3RlcF9jb3VudCAtPSAxO1xuICAgICAgY29uc3QgeyBwYXRoLCB9ID0gdGhpcy5yb3V0ZS5sZWdzWzBdLnN0ZXBzW3RoaXMuc3RlcF9jb3VudF07XG5cbiAgICAgIHBhdGguZm9yRWFjaCgoKSA9PiB0aGlzLnBvbHlsaW5lLnBvcCgpKTtcbiAgICB9XG4gIH1cblxuICBmb3J3YXJkKCkge1xuICAgIGlmICh0aGlzLnN0ZXBfY291bnQgPCB0aGlzLnN0ZXBzX2xlbmd0aCkge1xuICAgICAgY29uc3QgeyBwYXRoLCB9ID0gdGhpcy5yb3V0ZS5sZWdzWzBdLnN0ZXBzW3RoaXMuc3RlcF9jb3VudF07XG5cbiAgICAgIHBhdGguZm9yRWFjaChjb29yZGluYXRlID0+IHRoaXMucG9seWxpbmUucHVzaChjb29yZGluYXRlKSk7XG5cbiAgICAgIHRoaXMuc3RlcF9jb3VudCArPSAxO1xuICAgIH1cbiAgfVxufVxuXG5HTWFwcy5Sb3V0ZSA9IFJvdXRlO1xuXG5leHBvcnQgZGVmYXVsdCBHTWFwcztcbiIsImltcG9ydCBHTWFwcyBmcm9tICcuL2NvcmUnO1xuXG5jb25zdCBwYXJzZUNvbG9yID0gKGNvbG9yLCBvcGFjaXR5KSA9PiB7XG4gIGxldCBwYXJzZWRDb2xvcjtcblxuICBpZiAoY29sb3JbMF0gPT09ICcjJykge1xuICAgIHBhcnNlZENvbG9yID0gY29sb3IucmVwbGFjZSgnIycsICcweCcpO1xuXG4gICAgaWYgKG9wYWNpdHkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgb3BhY2l0eSA9IE1hdGgubWluKDEsIE1hdGgubWF4KHBhcnNlRmxvYXQob3BhY2l0eSksIDApKTtcblxuICAgICAgaWYgKG9wYWNpdHkgPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcweDAwMDAwMDAwJztcbiAgICAgIH1cblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBvcGFjaXR5ID0gKG9wYWNpdHkgKiAyNTUpLnRvU3RyaW5nKDE2KTtcblxuICAgICAgaWYgKG9wYWNpdHkubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICBvcGFjaXR5ICs9IG9wYWNpdHk7XG4gICAgICB9XG5cbiAgICAgIHBhcnNlZENvbG9yID0gcGFyc2VkQ29sb3Iuc2xpY2UoMCwgOCkgKyBvcGFjaXR5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJzZWRDb2xvcjtcbn07XG5cbi8qKlxuICogRXh0ZW5kcyBHTWFwcyB0byBnZW5lcmF0ZSBzdGF0aWMgbWFwcy5cbiAqIEBtb2R1bGUgU3RhdGljXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGFuIFVSTCBmb3IgYSBzdGF0aWMgbWFwIGZyb20gY3VycmVudCBHTWFwcyBtYXAuXG4gKiBAZnVuY3Rpb24gdG9JbWFnZVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBvYmplY3Qgc2hvdWxkIGNvbnRhaW46XG4gKiBAcGFyYW0ge2FycmF5fSBvcHRpb25zLnNpemUgLSBXaWR0aCBhbmQgaGVpZ2h0IG9mIHRoZSBpbWFnZS5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5HTWFwcy5wcm90b3R5cGUudG9JbWFnZSA9IGZ1bmN0aW9uIHRvSW1hZ2Uob3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHsgc2l6ZSA9IFt0aGlzLmVsZW1lbnQuY2xpZW50V2lkdGgsIHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHRdLCB6b29tID0gdGhpcy5nZXRab29tKCksIH0gPSBvcHRpb25zO1xuXG4gIGNvbnN0IHN0YXRpY01hcE9wdGlvbnMgPSB7XG4gICAgc2l6ZSxcbiAgICB6b29tLFxuICAgIGxhdGl0dWRlOiB0aGlzLmdldENlbnRlcigpLmxhdCgpLFxuICAgIGxvbmdpdHVkZTogdGhpcy5nZXRDZW50ZXIoKS5sbmcoKSxcbiAgICBtYXJrZXJzOiB0aGlzLm1hcmtlcnMubWFwKG1hcmtlciA9PiAoe1xuICAgICAgbGF0aXR1ZGU6IG1hcmtlci5nZXRQb3NpdGlvbigpLmxhdCgpLFxuICAgICAgbG9uZ2l0dWRlOiBtYXJrZXIuZ2V0UG9zaXRpb24oKS5sbmcoKSxcbiAgICB9KSksXG4gIH07XG5cbiAgaWYgKHRoaXMucG9seWxpbmVzLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBwb2x5bGluZSA9IHRoaXMucG9seWxpbmVzWzBdO1xuXG4gICAgc3RhdGljTWFwT3B0aW9ucy5wb2x5bGluZSA9IHtcbiAgICAgIHBhdGg6IGdvb2dsZS5tYXBzLmdlb21ldHJ5LmVuY29kaW5nLmVuY29kZVBhdGgocG9seWxpbmUuZ2V0UGF0aCgpKSxcbiAgICAgIHN0cm9rZUNvbG9yOiBwb2x5bGluZS5zdHJva2VDb2xvcixcbiAgICAgIHN0cm9rZU9wYWNpdHk6IHBvbHlsaW5lLnN0cm9rZU9wYWNpdHksXG4gICAgICBzdHJva2VXZWlnaHQ6IHBvbHlsaW5lLnN0cm9rZVdlaWdodCxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIEdNYXBzLnN0YXRpY01hcFVSTChzdGF0aWNNYXBPcHRpb25zKTtcbn07XG5cbmNvbnN0IGJ1aWxkTWFya2VyUGFyYW1ldGVycyA9IChtYXJrZXIpID0+IHtcbiAgY29uc3QgbWFya2VyUGFyYW1ldGVycyA9IFtdO1xuXG4gIGNvbnN0IHsgYWRkcmVzcywgbGF0LCBsYXRpdHVkZSA9IGxhdCwgbG5nLCBsb25naXR1ZGUgPSBsbmcsIHNpemUsIGljb24sIGNvbG9yLCBsYWJlbCwgLi4ubWFya2VyT3B0aW9ucyB9ID0gbWFya2VyO1xuXG4gIGNvbnN0IGxvY2F0aW9uID0gYWRkcmVzcyB8fCBgJHtsYXRpdHVkZX0sJHtsb25naXR1ZGV9YDtcblxuICBpZiAoc2l6ZSkge1xuICAgIG1hcmtlclBhcmFtZXRlcnMucHVzaChgc2l6ZToke3NpemV9YCk7XG4gIH1cblxuICBpZiAoaWNvbikge1xuICAgIG1hcmtlclBhcmFtZXRlcnMucHVzaChgaWNvbjoke2VuY29kZVVSSShpY29uKX1gKTtcbiAgfVxuXG4gIGlmIChjb2xvcikge1xuICAgIG1hcmtlclBhcmFtZXRlcnMucHVzaChgY29sb3I6JHtjb2xvci5yZXBsYWNlKCcjJywgJzB4Jyl9YCk7XG4gIH1cblxuICBpZiAobGFiZWwpIHtcbiAgICBtYXJrZXJQYXJhbWV0ZXJzLnB1c2goYGxhYmVsOiR7bGFiZWxbMF0udG9VcHBlckNhc2UoKX1gKTtcbiAgfVxuXG4gIE9iamVjdC5rZXlzKG1hcmtlck9wdGlvbnMpLmZvckVhY2goa2V5ID0+IG1hcmtlclBhcmFtZXRlcnMucHVzaChgJHtrZXl9OiR7bWFya2VyUGFyYW1ldGVyc1trZXldfWApKTtcblxuICBtYXJrZXJQYXJhbWV0ZXJzLnB1c2gobG9jYXRpb24pO1xuXG4gIHJldHVybiBtYXJrZXJQYXJhbWV0ZXJzO1xufTtcblxuY29uc3QgYnVpbGRQYXRoUGFyYW1ldGVycyA9IChwb2x5bGluZSkgPT4ge1xuICBjb25zdCB7IHBhdGgsIH0gPSBwb2x5bGluZTtcbiAgY29uc3QgcG9seWxpbmVQYXJhbWV0ZXJzID0gW107XG5cbiAgaWYgKHBvbHlsaW5lLnN0cm9rZVdlaWdodCkge1xuICAgIHBvbHlsaW5lUGFyYW1ldGVycy5wdXNoKGB3ZWlnaHQ6JHtwYXJzZUludChwb2x5bGluZS5zdHJva2VXZWlnaHQsIDEwKX1gKTtcbiAgfVxuXG4gIGlmIChwb2x5bGluZS5zdHJva2VDb2xvcikge1xuICAgIHBvbHlsaW5lUGFyYW1ldGVycy5wdXNoKGBjb2xvcjoke3BhcnNlQ29sb3IocG9seWxpbmUuc3Ryb2tlQ29sb3IsIHBvbHlsaW5lLnN0cm9rZU9wYWNpdHkpfWApO1xuICB9XG5cbiAgaWYgKHBvbHlsaW5lLmZpbGxDb2xvcikge1xuICAgIHBvbHlsaW5lUGFyYW1ldGVycy5wdXNoKGBmaWxsY29sb3I6JHtwYXJzZUNvbG9yKHBvbHlsaW5lLmZpbGxDb2xvciwgcG9seWxpbmUuZmlsbE9wYWNpdHkpfWApO1xuICB9XG5cbiAgaWYgKHBhdGguam9pbikge1xuICAgIHBhdGguZm9yRWFjaChjb29yZGluYXRlcyA9PiBwb2x5bGluZVBhcmFtZXRlcnMucHVzaChjb29yZGluYXRlcy5qb2luKCcsJykpKTtcbiAgfSBlbHNlIHtcbiAgICBwb2x5bGluZVBhcmFtZXRlcnMucHVzaChgZW5jOiR7cGF0aH1gKTtcbiAgfVxuXG4gIHJldHVybiBwb2x5bGluZVBhcmFtZXRlcnM7XG59O1xuXG5jb25zdCBidWlsZFN0eWxlUGFyYW1ldGVycyA9IChzdHlsZSkgPT4ge1xuICBjb25zdCBzdHlsZVBhcmFtZXRlcnMgPSBbXTtcblxuICBpZiAoc3R5bGUuZmVhdHVyZVR5cGUpIHtcbiAgICBzdHlsZVBhcmFtZXRlcnMucHVzaChgZmVhdHVyZToke3N0eWxlLmZlYXR1cmVUeXBlLnRvTG93ZXJDYXNlKCl9YCk7XG4gIH1cblxuICBpZiAoc3R5bGUuZWxlbWVudFR5cGUpIHtcbiAgICBzdHlsZVBhcmFtZXRlcnMucHVzaChgZWxlbWVudDoke3N0eWxlLmVsZW1lbnRUeXBlLnRvTG93ZXJDYXNlKCl9YCk7XG4gIH1cblxuICBpZiAoc3R5bGUuc3R5bGVycy5sZW5ndGgpIHtcbiAgICBzdHlsZS5zdHlsZXJzLmZvckVhY2goKHN0eWxlcikgPT4ge1xuICAgICAgT2JqZWN0LmtleXMoc3R5bGVyKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSAoa2V5ID09PSAnaHVlJyB8fCBrZXkgPT09ICdjb2xvcicpID8gc3R5bGVyW2tleV0ucmVwbGFjZSgnIycsICcweCcpIDogc3R5bGVyW2tleV07XG5cbiAgICAgICAgc3R5bGVQYXJhbWV0ZXJzLnB1c2goYCR7a2V5fToke3ZhbHVlfWApO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGVQYXJhbWV0ZXJzO1xufTtcblxuR01hcHMuc3RhdGljTWFwVVJMID0gZnVuY3Rpb24gc3RhdGljTWFwVVJMKGJhc2VPcHRpb25zKSB7XG4gIGNvbnN0IHsgdXJsLCBsYXQsIGxhdGl0dWRlID0gbGF0LCBsbmcsIGxvbmdpdHVkZSA9IGxuZywgY2VudGVyLCBhZGRyZXNzLCB6b29tID0gMTUsIG1hcmtlcnMgPSBbXSwgc3R5bGVzLCBwb2x5bGluZSwgdmlzaWJsZSwgc2l6ZSA9IFs2MzAsIDMwMF0sIC4uLm9wdGlvbnMgfSA9IGJhc2VPcHRpb25zO1xuICBjb25zdCBkZWZhdWx0Um9vdCA9IGAke3dpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2ZpbGU6JyA/ICdodHRwOicgOiB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2x9Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL3N0YXRpY21hcGA7XG5cbiAgbGV0IHJvb3QgPSB1cmwgfHwgZGVmYXVsdFJvb3Q7XG4gIGNvbnN0IHBhcmFtZXRlcnMgPSBbXTtcblxuICByb290ICs9ICc/JztcblxuICAvLyBNYXAgb3B0aW9uc1xuICBpZiAoY2VudGVyKSB7XG4gICAgcGFyYW1ldGVycy5wdXNoKGBjZW50ZXI9JHtjZW50ZXJ9YCk7XG4gIH0gZWxzZSBpZiAoYWRkcmVzcykge1xuICAgIHBhcmFtZXRlcnMucHVzaChgY2VudGVyPSR7YWRkcmVzc31gKTtcbiAgfSBlbHNlIGlmIChsYXRpdHVkZSAmJiBsb25naXR1ZGUpIHtcbiAgICBwYXJhbWV0ZXJzLnB1c2goYGNlbnRlcj0ke2xhdGl0dWRlfSwke2xvbmdpdHVkZX1gKTtcbiAgfSBlbHNlIGlmICh2aXNpYmxlKSB7XG4gICAgcGFyYW1ldGVycy5wdXNoKGB2aXNpYmxlPSR7ZW5jb2RlVVJJKHZpc2libGUuam9pbignfCcpKX1gKTtcbiAgfVxuXG4gIHBhcmFtZXRlcnMucHVzaChgc2l6ZT0ke3NpemUuam9pbigneCcpfWApO1xuICBwYXJhbWV0ZXJzLnB1c2goYHpvb209JHt6b29tfWApO1xuXG4gIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goa2V5ID0+IHBhcmFtZXRlcnMucHVzaChgJHtrZXl9PSR7b3B0aW9uc1trZXldfWApKTtcblxuICAvLyBNYXAgc3R5bGVcbiAgaWYgKHN0eWxlcykge1xuICAgIHN0eWxlcy5mb3JFYWNoKChzdHlsZSkgPT4ge1xuICAgICAgY29uc3Qgc3R5bGVQYXJhbWV0ZXJzID0gYnVpbGRTdHlsZVBhcmFtZXRlcnMoc3R5bGUpO1xuXG4gICAgICBwYXJhbWV0ZXJzLnB1c2goYHN0eWxlPSR7ZW5jb2RlVVJJKHN0eWxlUGFyYW1ldGVycy5qb2luKCd8JykpfWApO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gTWFya2Vyc1xuICBpZiAobWFya2Vycy5sZW5ndGgpIHtcbiAgICBtYXJrZXJzLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgY29uc3QgbWFya2VyUGFyYW1ldGVycyA9IGJ1aWxkTWFya2VyUGFyYW1ldGVycyhtYXJrZXIpO1xuICAgICAgcGFyYW1ldGVycy5wdXNoKGBtYXJrZXJzPSR7ZW5jb2RlVVJJKG1hcmtlclBhcmFtZXRlcnMuam9pbignfCcpKX1gKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFBvbHlsaW5lc1xuICBpZiAocG9seWxpbmUpIHtcbiAgICBjb25zdCBwb2x5bGluZVBhcmFtZXRlcnMgPSBidWlsZFBhdGhQYXJhbWV0ZXJzKHBvbHlsaW5lKTtcblxuICAgIHBhcmFtZXRlcnMucHVzaChgcGF0aD0ke2VuY29kZVVSSShwb2x5bGluZVBhcmFtZXRlcnMuam9pbignfCcpKX1gKTtcbiAgfVxuXG4gIC8vIFJldGluYSBzdXBwb3J0XG4gIGNvbnN0IGRwaSA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG4gIHBhcmFtZXRlcnMucHVzaChgc2NhbGU9JHtkcGl9YCk7XG5cbiAgcmV0dXJuIHJvb3QgKyBwYXJhbWV0ZXJzLmpvaW4oJyYnKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXBzO1xuIiwiaW1wb3J0IEdNYXBzLCB7IGdldEVsZW1lbnRCeUlkLCBzZXR1cEV2ZW50cyB9IGZyb20gJy4vY29yZSc7XG5cbi8qKlxuICogRXh0ZW5kcyBHTWFwcyB0byB1c2UgU3RyZWV0VmlldyBwYW5vcmFtYXNcbiAqIEBtb2R1bGUgU3RyZWV0Vmlld1xuICovXG5cbmNvbnN0IFNUUkVFVFZJRVdfRVZFTlRTID0gWydjbG9zZWNsaWNrJywgJ2xpbmtzX2NoYW5nZWQnLCAncGFub19jaGFuZ2VkJywgJ3Bvc2l0aW9uX2NoYW5nZWQnLCAncG92X2NoYW5nZWQnLCAncmVzaXplJywgJ3Zpc2libGVfY2hhbmdlZCddO1xuXG4vKipcbiAqIERpc3BsYXkgYSBTdHJlZXQgVmlldyBQYW5vcmFtYSBmb3IgYSBwb3NpdGlvbi5cbiAqIEBmdW5jdGlvbiBjcmVhdGVQYW5vcmFtYVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBvYmplY3Qgc2hvdWxkIGNvbnRhaW46XG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5sYXRpdHVkZSAtIExhdGl0dWRlIG9mIHRoZSBjb29yZGluYXRlIHdoZXJlIHRoZSBwYW5vcmFtYSBpcyBwbGFjZWQuIElmIG5vdCBzZXQsIGl0IHRha2VzIHRoZSBNYXAncyBjZW50ZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5sb25naXR1ZGUgLSBMb25naXR1ZGUgb2YgdGhlIGNvb3JkaW5hdGUgd2hlcmUgdGhlIHBhbm9yYW1hIGlzIHBsYWNlZC4gSWYgbm90IHNldCwgaXQgdGFrZXMgdGhlIE1hcCdzIGNlbnRlci5cbiAqIEBwYXJhbSB7Z29vZ2xlLm1hcHMuTGF0TG5nfSBvcHRpb25zLnBvc2l0aW9uIC0gQSBgZ29vZ2xlLm1hcHMuTGF0TG5nYCBjb29yZGluYXRlIHdoZXJlIHRoZSBwYW5vcmFtYSBpcyBwbGFjZWQuIElmIHNldCwgYGxhdGl0dWRlYCBhbmQgYGxvbmdpdHVkZWAgYXJlIGlnbm9yZWQuXG4gKlxuICogQHNlZSBgb3B0aW9uc2AgYWxzbyBhY2NlcHRzIGFueSBvcHRpb24gZGVmaW5lZCBpbiB0aGUgW29mZmljaWFsIGRvY3VtZW50YXRpb25dKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNTdHJlZXRWaWV3UGFub3JhbWFPcHRpb25zKSBhbmQgYW55IGV2ZW50IGRlZmluZWQgaW4gdGhlIFtcIkV2ZW50c1wiIHNlY3Rpb25dKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNTdHJlZXRWaWV3UGFub3JhbWEpLlxuICpcbiAqIEByZXR1cm5zIHtnb29nbGUubWFwcy5TdHJlZXRWaWV3UGFub3JhbWF9XG4gKi9cbkdNYXBzLnByb3RvdHlwZS5jcmVhdGVQYW5vcmFtYSA9IGZ1bmN0aW9uIGNyZWF0ZVBhbm9yYW1hKGJhc2VPcHRpb25zKSB7XG4gIGNvbnN0IHsgbGF0ID0gdGhpcy5nZXRDZW50ZXIoKS5sYXQoKSwgbGF0aXR1ZGUgPSBsYXQsIGxuZyA9IHRoaXMuZ2V0Q2VudGVyKCkubG5nKCksIGxvbmdpdHVkZSA9IGxuZywgLi4ub3B0aW9ucyB9ID0gYmFzZU9wdGlvbnM7XG5cbiAgY29uc3Qgc3RyZWV0Vmlld09wdGlvbnMgPSB7XG4gICAgbGF0aXR1ZGUsXG4gICAgbG9uZ2l0dWRlLFxuICAgIGluc3RhbmNlOiB0aGlzLFxuICAgIC4uLm9wdGlvbnMsXG4gIH07XG5cbiAgdGhpcy5wYW5vcmFtYSA9IEdNYXBzLmNyZWF0ZVBhbm9yYW1hKHN0cmVldFZpZXdPcHRpb25zKTtcblxuICB0aGlzLm1hcC5zZXRTdHJlZXRWaWV3KHRoaXMucGFub3JhbWEpO1xuXG4gIHJldHVybiB0aGlzLnBhbm9yYW1hO1xufTtcblxuR01hcHMuY3JlYXRlUGFub3JhbWEgPSBmdW5jdGlvbiBjcmVhdGVQYW5vcmFtYShiYXNlT3B0aW9ucykge1xuICBjb25zdCB7XG4gICAgZWwsXG4gICAgZWxlbWVudCA9IGVsLFxuICAgIGNvbnRleHQsXG4gICAgbGF0LFxuICAgIGxhdGl0dWRlID0gbGF0LFxuICAgIGxuZyxcbiAgICBsb25naXR1ZGUgPSBsbmcsXG4gICAgcG9zaXRpb24gPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGxhdGl0dWRlLCBsb25naXR1ZGUpLFxuICAgIGluc3RhbmNlID0gd2luZG93LFxuICAgIC4uLm9wdGlvbnNcbiAgfSA9IGJhc2VPcHRpb25zO1xuXG4gIGNvbnN0IGNvbnRhaW5lckVsZW1lbnQgPSBnZXRFbGVtZW50QnlJZChlbGVtZW50LCBjb250ZXh0KTtcblxuICBjb25zdCBmaWx0ZXJlZE9wdGlvbnMgPSBPYmplY3Qua2V5cyhvcHRpb25zKS5yZWR1Y2UoKGhhc2gsIGtleSkgPT4ge1xuICAgIGlmIChTVFJFRVRWSUVXX0VWRU5UUy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICByZXR1cm4gaGFzaDtcbiAgICB9XG5cbiAgICByZXR1cm4geyAuLi5oYXNoLCBba2V5XTogb3B0aW9uc1trZXldLCB9O1xuICB9LCB7fSk7XG5cbiAgY29uc3Qgc3RyZWV0Vmlld09wdGlvbnMgPSB7XG4gICAgLi4uZmlsdGVyZWRPcHRpb25zLFxuICAgIHBvc2l0aW9uLFxuICAgIHZpc2libGU6IHRydWUsXG4gIH07XG5cbiAgY29uc3QgcGFub3JhbWEgPSBuZXcgZ29vZ2xlLm1hcHMuU3RyZWV0Vmlld1Bhbm9yYW1hKGNvbnRhaW5lckVsZW1lbnQsIHN0cmVldFZpZXdPcHRpb25zKTtcblxuICBzZXR1cEV2ZW50cyh7IGV2ZW50czogU1RSRUVUVklFV19FVkVOVFMsIG9iamVjdDogcGFub3JhbWEsIGluc3RhbmNlLCBoYW5kbGVyczogb3B0aW9ucywgfSk7XG5cbiAgcmV0dXJuIHBhbm9yYW1hO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR01hcHM7XG4iLCJpbXBvcnQgR01hcHMgZnJvbSAnLi9jb3JlJztcblxuLyoqXG4gKiBFeHRlbmRzIEdNYXBzIHRvIGFkZCBzdHlsZWQgbWFwIHR5cGVzLlxuICogQG1vZHVsZSBTdHlsZXNcbiAqL1xuXG4vKipcbiAqIEFkZCBhIFtzdHlsZWQgbWFwIHR5cGVdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L21hcHR5cGVzI1N0eWxlZE1hcHMpIGluIHRoZSBNYXAsIHdoaWNoIGNhbiBiZSB1c2VkIHdpdGggdGhlIGJhc2UgbWFwIHR5cGVzIChgaHlicmlkYCwgYHJvYWRtYXBgLCBgc2F0ZWxsaXRlYCBhbmQgYHRlcnJhaW5gKS5cbiAqIEBmdW5jdGlvbiBhZGRTdHlsZVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBvYmplY3Qgc2hvdWxkIGNvbnRhaW46XG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5tYXBUeXBlSWQgLSBBIHNpbXBsZSBpZGVudGlmaWVyIGZvciB0aGUgc3R5bGVkIG1hcCB0eXBlLlxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc3R5bGVkTWFwTmFtZSAtIEEgbmFtZSBmb3IgdGhlIHN0eWxlZCBtYXAgdHlwZS4gSXQgd2lsbCBiZSBkaXNwbGF5ZWQgaW4gdGhlIG1hcCB0eXBlIGNvbnRyb2wuXG4gKiBAcGFyYW0ge2FycmF5fSBvcHRpb25zLnN0eWxlcyAtIEFuIGFycmF5IG9mIFtgTWFwVHlwZVN0eWxlYF0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI01hcFR5cGVTdHlsZSkgb2JqZWN0cy5cbiAqL1xuR01hcHMucHJvdG90eXBlLmFkZFN0eWxlID0gZnVuY3Rpb24gYWRkU3R5bGUob3B0aW9ucykge1xuICBjb25zdCBzdHlsZWRNYXBUeXBlID0gbmV3IGdvb2dsZS5tYXBzLlN0eWxlZE1hcFR5cGUob3B0aW9ucy5zdHlsZXMsIHsgbmFtZTogb3B0aW9ucy5zdHlsZWRNYXBOYW1lLCB9KTtcblxuICB0aGlzLm1hcC5tYXBUeXBlcy5zZXQob3B0aW9ucy5tYXBUeXBlSWQsIHN0eWxlZE1hcFR5cGUpO1xufTtcblxuLyoqXG4gKiBTZXQgYSBbc3R5bGVkIG1hcCB0eXBlXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9tYXB0eXBlcyNTdHlsZWRNYXBzKSB0byB0aGUgTWFwLiBUaGUgbWFwIHR5cGUgc2hvdWxkIGJlIGRlZmluZWQgYmVmb3JlIHdpdGgge0BsaW5rIEdNYXBzI2FkZFN0eWxlfS5cbiAqIEBmdW5jdGlvbiBzZXRTdHlsZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtYXBUeXBlSWQgLSBUaGUgc3R5bGVkIG1hcCB0eXBlJ3MgaWRlbnRpZmllci5cbiAqL1xuR01hcHMucHJvdG90eXBlLnNldFN0eWxlID0gZnVuY3Rpb24gc2V0U3R5bGUobWFwVHlwZUlkKSB7XG4gIHRoaXMubWFwLnNldE1hcFR5cGVJZChtYXBUeXBlSWQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR01hcHM7XG4iLCJpbXBvcnQgR01hcHMgZnJvbSAnLi9jb3JlJztcblxuLyoqXG4gKiBFeHRlbmRzIEdNYXBzIHRvIGFkZCB1dGlscyBmdW5jdGlvbnMuXG4gKiBAbW9kdWxlIFV0aWxzXG4gKi9cblxuLyoqXG4gKiBHZW9sb2NhdGUgdXNpbmcgYnJvd3NlcidzIFdlYiBBUEkuXG4gKiBAZnVuY3Rpb24gZ2VvbG9jYXRlXG4gKiBAc3RhdGljXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgYG9wdGlvbnNgIG9iamVjdCBzaG91bGQgY29udGFpbjpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMuYWx3YXlzIC0gQSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgYWZ0ZXIgdGhlIGBzdWNjZXNzYCwgYGVycm9yYCBhbmQgYG5vdF9zdXBwb3J0ZWRgIGNhbGxiYWNrcy5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMuc3VjY2VzcyAtIEEgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIGFmdGVyIHRoZSBicm93c2VyIGZpbmQgaXRzIGdlb2xvY2F0aW9uLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5lcnJvciAtIEEgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIGFmdGVyIHRoZSBicm93c2VyIGZhaWxzIGF0IGZpbmRpbmcgaXRzIGdlb2xvY2F0aW9uLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5ub3Rfc3VwcG9ydGVkIC0gQSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgaWYgdGhlIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IGdlb2xvY2F0aW9uLlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMub3B0aW9ucyAtIE9iamVjdCB3aXRoIGFsbCBvcHRpb25zIGRlZmluZWQgaW4gW1Bvc2l0aW9uT3B0aW9uc10oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1Bvc2l0aW9uT3B0aW9ucykuXG4gKi9cbkdNYXBzLmdlb2xvY2F0ZSA9IGZ1bmN0aW9uIGdlb2xvY2F0ZShvcHRpb25zKSB7XG4gIGNvbnN0IGNvbXBsZXRlQ2FsbGJhY2sgPSBvcHRpb25zLmFsd2F5cyB8fCBvcHRpb25zLmNvbXBsZXRlO1xuXG4gIGlmICh3aW5kb3cubmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgd2luZG93Lm5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKHBvc2l0aW9uKSA9PiB7XG4gICAgICBpZiAob3B0aW9ucy5zdWNjZXNzKSB7XG4gICAgICAgIG9wdGlvbnMuc3VjY2Vzcyhwb3NpdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb21wbGV0ZUNhbGxiYWNrKSB7XG4gICAgICAgIGNvbXBsZXRlQ2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgIGlmIChvcHRpb25zLmVycm9yKSB7XG4gICAgICAgIG9wdGlvbnMuZXJyb3IoZXJyb3IpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29tcGxldGVDYWxsYmFjaykge1xuICAgICAgICBjb21wbGV0ZUNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfSwgb3B0aW9ucy5vcHRpb25zKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAob3B0aW9ucy5ub3Rfc3VwcG9ydGVkKSB7XG4gICAgICBvcHRpb25zLm5vdF9zdXBwb3J0ZWQoKTtcbiAgICB9XG5cbiAgICBpZiAoY29tcGxldGVDYWxsYmFjaykge1xuICAgICAgY29tcGxldGVDYWxsYmFjaygpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBHZW9jb2RlIHVzaW5nIEdvb2dsZSBNYXBzIEdlb2NvZGluZyBzZXJ2aWNlLlxuICogQGZ1bmN0aW9uIGdlb2xvY2F0ZVxuICogQHN0YXRpY1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBvYmplY3Qgc2hvdWxkIGNvbnRhaW46XG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5sYXRpdHVkZSAtIExhdGl0dWRlIG9mIHRoZSBjb29yZGluYXRlIHRvIGdlb2NvZGUuIElmIGBsYXRpdHVkZWAgYW5kIGBsb25naXR1ZGVgIGFyZSBzZXQsIGBsb2NhdGlvbmAgaXMgaWdub3JlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLmxvbmdpdHVkZSAtIExvbmdpdHVkZSBvZiB0aGUgY29vcmRpbmF0ZSB0byBnZW9jb2RlLiBJZiBgbGF0aXR1ZGVgIGFuZCBgbG9uZ2l0dWRlYCBhcmUgc2V0LCBgbG9jYXRpb25gIGlzIGlnbm9yZWQuXG4gKiBAcGFyYW0ge2dvb2dsZS5tYXBzLkxhdExuZ30gb3B0aW9ucy5sb2NhdGlvbiAtIEEgYGdvb2dsZS5tYXBzLkxhdExuZ2AgY29vcmRpbmF0ZSB0byBnZW9jb2RlLiBJZiBzZXQsIGBsYXRpdHVkZWAgYW5kIGBsb25naXR1ZGVgIGFyZSBpZ25vcmVkLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5jYWxsYmFjayAtIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBhZnRlciB0aGUgcmVzdWx0cyBhcmUgcmV0dXJuZWQuIEl0IHJlY2VpdmVzIDIgYXJndW1lbnRzLCB3aGljaCBpcyBhbiBhcnJheSBvZiBbR2VvY29kZXJSZXN1bHRdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNHZW9jb2RlclJlc3VsdCkgb2JqZWN0cyBhbmQgdGhlIFtyZXF1ZXN0J3Mgc3RhdHVzXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjR2VvY29kZXJTdGF0dXMpLlxuICpcbiAqIEBzZWUgYG9wdGlvbnNgIGFsc28gYWNjZXB0cyBhbnkgb3B0aW9uIGRlZmluZWQgaW4gdGhlIFtvZmZpY2lhbCBkb2N1bWVudGF0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjR2VvY29kZXJSZXF1ZXN0KS5cbiAqXG4gKi9cbkdNYXBzLmdlb2NvZGUgPSBmdW5jdGlvbiBnZW9jb2RlKGJhc2VPcHRpb25zKSB7XG4gIGNvbnN0IHtcbiAgICBjYWxsYmFjayxcbiAgICBsYXQsXG4gICAgbGF0aXR1ZGUgPSBsYXQsXG4gICAgbG5nLFxuICAgIGxvbmdpdHVkZSA9IGxuZyxcbiAgICBsb2NhdGlvbiA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobGF0aXR1ZGUsIGxvbmdpdHVkZSksXG4gICAgLi4ub3B0aW9uc1xuICB9ID0gYmFzZU9wdGlvbnM7XG5cbiAgdGhpcy5nZW9jb2RlciA9IG5ldyBnb29nbGUubWFwcy5HZW9jb2RlcigpO1xuXG4gIGNvbnN0IGdlb2NvZGVPcHRpb25zID0ge1xuICAgIC4uLm9wdGlvbnMsXG4gICAgbG9jYXRpb24sXG4gIH07XG5cbiAgdGhpcy5nZW9jb2Rlci5nZW9jb2RlKGdlb2NvZGVPcHRpb25zLCBjYWxsYmFjayk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHTWFwcztcbiJdLCJzb3VyY2VSb290IjoiIn0=