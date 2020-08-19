(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["GMaps"] = factory();
	else
		root["GMaps"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
    control.style.fontFamily = 'inherit';
    control.style.fontSize = 'inherit';
    control.style.borderRadius = '2px';
    control.style.boxShadow = 'rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px';
  }

  Object.keys(style).forEach(function (property) {
    control.style[property] = style[property];
    control.style.setProperty(property, style[property]);
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
    var googleMapsMapMethods = Object.keys(google.maps.Map.prototype).filter(function (key) {
      return typeof google.maps.Map.prototype[key] === 'function' && !GMaps.prototype[key];
    });
    googleMapsMapMethods.forEach(function (methodName) {
      // eslint-disable-next-line func-names
      GMaps.prototype[methodName] = function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return this.map[methodName].apply(this.map, args);
      };
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
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
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
      locations: locations
    });

    delete requestOptions.path;
    delete requestOptions.samples;
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
 * @function geocode
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
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HTWFwcy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vR01hcHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vR01hcHMvLi9saWIvY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vR01hcHMvLi9saWIvY29yZS5qcyIsIndlYnBhY2s6Ly9HTWFwcy8uL2xpYi9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vR01hcHMvLi9saWIvZ2VvZmVuY2VzLmpzIiwid2VicGFjazovL0dNYXBzLy4vbGliL2dlb21ldHJ5LmpzIiwid2VicGFjazovL0dNYXBzLy4vbGliL2luZGV4LmpzIiwid2VicGFjazovL0dNYXBzLy4vbGliL2xheWVycy5qcyIsIndlYnBhY2s6Ly9HTWFwcy8uL2xpYi9tYXBfdHlwZXMuanMiLCJ3ZWJwYWNrOi8vR01hcHMvLi9saWIvbWFya2Vycy5qcyIsIndlYnBhY2s6Ly9HTWFwcy8uL2xpYi9vdmVybGF5cy5qcyIsIndlYnBhY2s6Ly9HTWFwcy8uL2xpYi9wb2x5ZmlsbHMuanMiLCJ3ZWJwYWNrOi8vR01hcHMvLi9saWIvcm91dGVzLmpzIiwid2VicGFjazovL0dNYXBzLy4vbGliL3N0YXRpYy5qcyIsIndlYnBhY2s6Ly9HTWFwcy8uL2xpYi9zdHJlZXR2aWV3LmpzIiwid2VicGFjazovL0dNYXBzLy4vbGliL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly9HTWFwcy8uL2xpYi91dGlscy5qcyJdLCJuYW1lcyI6WyJjcmVhdGVDb250cm9sIiwic3R5bGUiLCJpZCIsInRpdGxlIiwiY2xhc3NlcyIsImNvbnRlbnQiLCJwb3NpdGlvbiIsImV2ZW50cyIsImRpc2FibGVEZWZhdWx0U3R5bGVzIiwiY29udHJvbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImN1cnNvciIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJzZXRQcm9wZXJ0eSIsImNsYXNzTmFtZSIsImlubmVySFRNTCIsIndpbmRvdyIsIkhUTUxFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJnb29nbGUiLCJtYXBzIiwiQ29udHJvbFBvc2l0aW9uIiwidG9VcHBlckNhc2UiLCJldmVudE5hbWUiLCJldmVudCIsImFkZERvbUxpc3RlbmVyIiwiY2FsbCIsImluZGV4IiwiR01hcHMiLCJwcm90b3R5cGUiLCJhZGRDb250cm9sIiwib3B0aW9ucyIsImNvbnRyb2xzIiwicHVzaCIsIm1hcCIsInJlbW92ZUNvbnRyb2wiLCJjb250cm9sSW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiY29udHJvbHNGb3JQb3NpdGlvbiIsImNvbnRyb2xJbmRleEluQ29sbGVjdGlvbiIsInJlbW92ZUF0IiwibGF0TG5nRnJvbUFyZ3VtZW50cyIsIkxhdExuZyIsImZsYXR0ZW5BcnJheSIsImFycmF5IiwicmVkdWNlIiwiY29sbGVjdGlvbiIsIml0ZW0iLCJjb25jYXQiLCJjb29yZHNUb0xhdExuZ3MiLCJjb29yZGluYXRlcyIsInVzZUdlb0pTT04iLCJmaXJzdENvb3JkaW5hdGUiLCJzZWNvbmRDb29yZGluYXRlIiwiYXJyYXlUb0xhdExuZyIsImNvb3JkaW5hdGUiLCJsZW5ndGgiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY29udGV4dCIsInNhbml0aXplZENsYXNzTmFtZSIsInJlcGxhY2UiLCIkIiwiZ2V0RWxlbWVudEJ5SWQiLCJzYW5pdGl6ZWRJZCIsImVsZW1lbnRzIiwiZ2V0RWxlbWVudCIsInNlbGVjdG9yT3JFbGVtZW50IiwibWF0Y2giLCJmaW5kQWJzb2x1dGVQb3NpdGlvbiIsImVsZW1lbnQiLCJsZWZ0IiwidG9wIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicmVjdGFuZ2xlIiwieCIsInNjcm9sbFgiLCJwYWdlWE9mZnNldCIsInkiLCJzY3JvbGxZIiwicGFnZVlPZmZzZXQiLCJvZmZzZXRQYXJlbnQiLCJpdGVyYXRvciIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJzZXR1cEV2ZW50TGlzdGVuZXIiLCJvYmplY3QiLCJpbnN0YW5jZSIsImhhbmRsZXIiLCJhZGRMaXN0ZW5lciIsImhpZGVDb250ZXh0TWVudSIsInNldHVwRXZlbnRzIiwiaGFuZGxlcnMiLCJNQVBfRVZFTlRTIiwiR01BUFNfTUVOVV9JRCIsImJhc2VPcHRpb25zIiwiRXJyb3IiLCJkaXYiLCJlbCIsImxhdCIsImxhdGl0dWRlIiwibG5nIiwibG9uZ2l0dWRlIiwiY2VudGVyIiwiem9vbSIsIm1hcFR5cGUiLCJ6b29tQ29udHJvbE9wdCIsInBhbkNvbnRyb2wiLCJ6b29tQ29udHJvbCIsIm1hcFR5cGVDb250cm9sIiwic2NhbGVDb250cm9sIiwic3RyZWV0Vmlld0NvbnRyb2wiLCJvdmVydmlld01hcENvbnRyb2wiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmtlckNsdXN0ZXJlciIsImVuYWJsZU5ld1N0eWxlIiwibWFwVHlwZUlkIiwiTWFwVHlwZUlkIiwibWFwQmFzZU9wdGlvbnMiLCJtYXBDb250cm9sc09wdGlvbnMiLCJ6b29tQ29udHJvbE9wdGlvbnMiLCJab29tQ29udHJvbFN0eWxlIiwiZmlsdGVyZWRPcHRpb25zIiwiaGFzaCIsImtleSIsImluY2x1ZGVzIiwiTWF0aCIsImNlaWwiLCJyYW5kb20iLCJEYXRlIiwibm93IiwiY29udGV4dE1lbnVzIiwidmlzdWFsUmVmcmVzaCIsInNjcm9sbFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJtYXBPcHRpb25zIiwiTWFwIiwib3ZlcmxheXMiLCJsYXllcnMiLCJzaW5nbGVMYXllcnMiLCJtYXJrZXJzIiwicG9seWxpbmVzIiwicm91dGVzIiwicG9seWdvbnMiLCJpbmZvV2luZG93Iiwib3ZlcmxheUVsZW1lbnQiLCJyZWdpc3RlcmVkRXZlbnRzIiwiYXBwbHkiLCJyaWdodGNsaWNrIiwiYnVpbGRDb250ZXh0TWVudSIsImdvb2dsZU1hcHNNYXBNZXRob2RzIiwiZmlsdGVyIiwibWV0aG9kTmFtZSIsImFyZ3MiLCJjb250ZXh0TWVudUVsZW1lbnQiLCJodG1sIiwiam9pbiIsImNvbnRleHRNZW51SXRlbXMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNvbnRleHRNZW51SXRlbSIsImNvbnRleHRNZW51SXRlbUxpc3RlbmVyIiwiY29udGV4dE1lbnVJdGVtTGlzdGVuZXJFdmVudCIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiYWN0aW9uIiwiY2xlYXJMaXN0ZW5lcnMiLCJhZGREb21MaXN0ZW5lck9uY2UiLCJwaXhlbCIsIm92ZXJsYXkiLCJPdmVybGF5VmlldyIsInNldE1hcCIsImRyYXciLCJwcm9qZWN0aW9uIiwiZ2V0UHJvamVjdGlvbiIsIm1hcmtlciIsImdldFBvc2l0aW9uIiwiZnJvbUxhdExuZ1RvQ29udGFpbmVyUGl4ZWwiLCJidWlsZENvbnRleHRNZW51SFRNTCIsInNldFRpbWVvdXQiLCJkaXNwbGF5Iiwib3B0aW9uIiwibmFtZSIsIm1pbldpZHRoIiwiYmFja2dyb3VuZCIsImxpc3RTdHlsZSIsInBhZGRpbmciLCJib2R5IiwicmVsYXRlZFRhcmdldCIsImNvbnRhaW5zIiwidHJpZ2dlciIsImxhdExuZ3MiLCJib3VuZHMiLCJMYXRMbmdCb3VuZHMiLCJsYXRMbmciLCJleHRlbmQiLCJmaXRCb3VuZHMiLCJ2aXNpYmxlIiwiZml0TGF0TG5nQm91bmRzIiwiY2FsbGJhY2siLCJzbGljZSIsInBvcCIsInBhblRvIiwibWFnbml0dWRlIiwiZ2V0Wm9vbSIsInNldFpvb20iLCJjdXN0b21FdmVudHMiLCJvbiIsInJlZ2lzdGVyZWRFdmVudCIsIm9mZiIsIm9uY2UiLCJhZGRMaXN0ZW5lck9uY2UiLCJ1bmRlZmluZWQiLCJmaXJlIiwiZXZlbnRBcmd1bWVudHMiLCJBcnJheSIsImFyZ3VtZW50cyIsImNoZWNrR2VvZmVuY2UiLCJsYWdMbmciLCJmZW5jZSIsImNvbnRhaW5zTGF0TG5nIiwiY2hlY2tNYXJrZXJHZW9mZW5jZSIsIm91dHNpZGVDYWxsYmFjayIsImZlbmNlcyIsIkVWRU5UUyIsImRyYXdQb2x5bGluZSIsImljb25zIiwic3Ryb2tlQ29sb3IiLCJzdHJva2VPcGFjaXR5Iiwic3Ryb2tlV2VpZ2h0IiwiZ2VvZGVzaWMiLCJjbGlja2FibGUiLCJlZGl0YWJsZSIsInpJbmRleCIsInBhdGgiLCJwb2x5bGluZU9wdGlvbnMiLCJwb2x5bGluZSIsIlBvbHlsaW5lIiwicmVtb3ZlUG9seWxpbmUiLCJwb2x5bGluZUluZGV4IiwicmVtb3ZlUG9seWxpbmVzIiwiZHJhd0NpcmNsZSIsInBvbHlnb25PcHRpb25zIiwicG9seWdvbiIsIkNpcmNsZSIsImRyYXdSZWN0YW5nbGUiLCJsYXRMbmdCb3VuZHMiLCJSZWN0YW5nbGUiLCJkcmF3UG9seWdvbiIsImJhc2VQYXRocyIsInBhdGhzIiwiUG9seWdvbiIsInJlbW92ZVBvbHlnb24iLCJwb2x5Z29uSW5kZXgiLCJyZW1vdmVQb2x5Z29ucyIsImdldEZyb21GdXNpb25UYWJsZXMiLCJsYXllciIsIkZ1c2lvblRhYmxlc0xheWVyIiwibG9hZEZyb21GdXNpb25UYWJsZXMiLCJnZXRGcm9tS01MIiwidXJsIiwiS21sTGF5ZXIiLCJsb2FkRnJvbUtNTCIsImFkZExheWVyIiwibGF5ZXJOYW1lIiwiY2xpY2siLCJzZWFyY2giLCJuZWFyYnlTZWFyY2giLCJyYWRhclNlYXJjaCIsInRleHRTZWFyY2giLCJrZXl3b3JkIiwibG9jYXRpb24iLCJyYWRpdXMiLCJyYW5rQnkiLCJ0eXBlcyIsInF1ZXJ5IiwiVHJhZmZpY0xheWVyIiwidHJhZmZpYyIsIlRyYW5zaXRMYXllciIsInRyYW5zaXQiLCJCaWN5Y2xpbmdMYXllciIsImJpY3ljbGluZyIsInBsYWNlcyIsIlBsYWNlc1NlcnZpY2UiLCJwbGFjZVNlYXJjaFJlcXVlc3QiLCJ0ZXh0U2VhcmNoUmVxdWVzdCIsInNldE9wdGlvbnMiLCJyZW1vdmVMYXllciIsImxheWVySW5kZXgiLCJhZGRNYXBUeXBlIiwiZ2V0VGlsZVVybCIsInRpbGVTaXplIiwiU2l6ZSIsIkltYWdlTWFwVHlwZSIsIm1hcFR5cGVzIiwic2V0IiwiYWRkT3ZlcmxheU1hcFR5cGUiLCJnZXRUaWxlIiwib3ZlcmxheU1hcFR5cGVzIiwib3ZlcmxheU1hcFR5cGVPcHRpb25zIiwiaW5zZXJ0QXQiLCJyZW1vdmVPdmVybGF5TWFwVHlwZSIsIm92ZXJsYXlNYXBUeXBlIiwiSU5GT19XSU5ET1dfRVZFTlRTIiwiTUFSS0VSX0VWRU5UUyIsIk1BUktFUl9NT1VTRV9FVkVOVFMiLCJjcmVhdGVNYXJrZXIiLCJzZWxmIiwiZGV0YWlscyIsIm91dHNpZGUiLCJtYXJrZXJPcHRpb25zIiwiTWFya2VyIiwiSW5mb1dpbmRvdyIsImZyb21MYXRMbmdUb1BvaW50Iiwib25NYXJrZXJDbGljayIsImhpZGVJbmZvV2luZG93cyIsIm9wZW4iLCJvbk1hcmtlclJpZ2h0Q2xpY2siLCJvbk1hcmtlckRyYWdFbmQiLCJhZGRNYXJrZXIiLCJnbV9hY2Nlc3NvcnNfIiwiYWRkTWFya2VycyIsImNsb3NlIiwicmVtb3ZlTWFya2VyIiwiZmlyZUV2ZW50IiwibWFya2VySW5kZXgiLCJyZW1vdmVNYXJrZXJzIiwiU1RPUF9QUk9QQUdBVElPTl9FVkVOVFMiLCJkcmF3T3ZlcmxheSIsImF1dG9TaG93IiwiaG9yaXpvbnRhbE9mZnNldCIsInZlcnRpY2FsT2Zmc2V0IiwidmVydGljYWxBbGlnbiIsImhvcml6b250YWxBbGlnbiIsIm9uQWRkIiwiYm9yZGVyU3R5bGUiLCJib3JkZXJXaWR0aCIsInBhbmVzIiwiZ2V0UGFuZXMiLCJvdmVybGF5TGF5ZXIiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsImFsbCIsImNhbmNlbEJ1YmJsZSIsInJldHVyblZhbHVlIiwic3RvcFByb3BhZ2F0aW9uIiwib3ZlcmxheU1vdXNlVGFyZ2V0IiwiZnJvbUxhdExuZ1RvRGl2UGl4ZWwiLCJjaGlsZHJlbiIsImNvbnRlbnRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJjb250ZW50V2lkdGgiLCJjbGllbnRXaWR0aCIsInNob3ciLCJvblJlbW92ZSIsInJlbW92ZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInJlbW92ZU92ZXJsYXkiLCJvdmVybGF5SW5kZXgiLCJyZW1vdmVPdmVybGF5cyIsImdldEJvdW5kcyIsImdldFBhdGhzIiwicCIsImdldExlbmd0aCIsImdldEF0IiwiaSIsImluUG9seSIsIm51bVBhdGhzIiwibnVtUG9pbnRzIiwiaiIsInZlcnRleDEiLCJ2ZXJ0ZXgyIiwiZ2VvbWV0cnkiLCJzcGhlcmljYWwiLCJjb21wdXRlRGlzdGFuY2VCZXR3ZWVuIiwiZ2V0Q2VudGVyIiwiZ2V0UmFkaXVzIiwic2V0RmVuY2VzIiwiYWRkRmVuY2UiLCJnZXRJZCIsInNlYXJjaEVsZW1lbnQiLCJUeXBlRXJyb3IiLCJ0IiwibGVuIiwibiIsIk51bWJlciIsIkluZmluaXR5IiwiZmxvb3IiLCJhYnMiLCJrIiwibWF4IiwiZ2V0Um91dGVzIiwib3JpZ2luIiwiZGVzdGluYXRpb24iLCJ0cmF2ZWxNb2RlIiwidW5pdFN5c3RlbSIsImF2b2lkSGlnaHdheXMiLCJhdm9pZFRvbGxzIiwib3B0aW1pemVXYXlwb2ludHMiLCJ3YXlwb2ludHMiLCJlcnJvciIsInRyYXZlbE1vZGVJZCIsIlRyYXZlbE1vZGUiLCJ1bml0U3lzdGVtSWQiLCJyZXF1ZXN0T3B0aW9ucyIsInNlcnZpY2UiLCJEaXJlY3Rpb25zU2VydmljZSIsInJvdXRlIiwicmVzdWx0Iiwic3RhdHVzIiwiRGlyZWN0aW9uc1N0YXR1cyIsIk9LIiwicmVtb3ZlUm91dGVzIiwiZ2V0RWxldmF0aW9ucyIsInNhbXBsZXMiLCJsb2NhdGlvbnMiLCJFbGV2YXRpb25TZXJ2aWNlIiwiZ2V0RWxldmF0aW9uRm9yTG9jYXRpb25zIiwiZ2V0RWxldmF0aW9uQWxvbmdQYXRoIiwiY2xlYW5Sb3V0ZSIsInJlbmRlclJvdXRlIiwiYmFzZVJlbmRlck9wdGlvbnMiLCJwYW5lbCIsInJlbmRlck9wdGlvbnMiLCJEaXJlY3Rpb25zUmVuZGVyZXIiLCJfIiwicmVzcG9uc2UiLCJzZXREaXJlY3Rpb25zIiwiZHJhd1JvdXRlIiwibGFzdFJvdXRlIiwib3ZlcnZpZXdfcGF0aCIsInRyYXZlbFJvdXRlIiwic3RhcnQiLCJzdGVwIiwibGVncyIsInN0ZXBzIiwic3RlcF9udW1iZXIiLCJzdGVwTnVtYmVyIiwiZW5kIiwiZHJhd1N0ZXBwZWRSb3V0ZSIsInJvdXRlU3RlcCIsInN0ZXBzQ291bnQiLCJSb3V0ZSIsInN0ZXBfY291bnQiLCJzdGVwc19sZW5ndGgiLCJNVkNBcnJheSIsImdldFBhdGgiLCJwYXJzZUNvbG9yIiwiY29sb3IiLCJvcGFjaXR5IiwicGFyc2VkQ29sb3IiLCJtaW4iLCJwYXJzZUZsb2F0IiwidG9TdHJpbmciLCJ0b0ltYWdlIiwic2l6ZSIsInN0YXRpY01hcE9wdGlvbnMiLCJlbmNvZGluZyIsImVuY29kZVBhdGgiLCJzdGF0aWNNYXBVUkwiLCJidWlsZE1hcmtlclBhcmFtZXRlcnMiLCJtYXJrZXJQYXJhbWV0ZXJzIiwiYWRkcmVzcyIsImljb24iLCJsYWJlbCIsImVuY29kZVVSSSIsImJ1aWxkUGF0aFBhcmFtZXRlcnMiLCJwb2x5bGluZVBhcmFtZXRlcnMiLCJwYXJzZUludCIsImZpbGxDb2xvciIsImZpbGxPcGFjaXR5IiwiYnVpbGRTdHlsZVBhcmFtZXRlcnMiLCJzdHlsZVBhcmFtZXRlcnMiLCJmZWF0dXJlVHlwZSIsImVsZW1lbnRUeXBlIiwic3R5bGVycyIsInN0eWxlciIsInZhbHVlIiwic3R5bGVzIiwiZGVmYXVsdFJvb3QiLCJwcm90b2NvbCIsInJvb3QiLCJwYXJhbWV0ZXJzIiwiZHBpIiwiZGV2aWNlUGl4ZWxSYXRpbyIsIlNUUkVFVFZJRVdfRVZFTlRTIiwiY3JlYXRlUGFub3JhbWEiLCJzdHJlZXRWaWV3T3B0aW9ucyIsInBhbm9yYW1hIiwic2V0U3RyZWV0VmlldyIsImNvbnRhaW5lckVsZW1lbnQiLCJTdHJlZXRWaWV3UGFub3JhbWEiLCJhZGRTdHlsZSIsInN0eWxlZE1hcFR5cGUiLCJTdHlsZWRNYXBUeXBlIiwic3R5bGVkTWFwTmFtZSIsInNldFN0eWxlIiwic2V0TWFwVHlwZUlkIiwiZ2VvbG9jYXRlIiwiY29tcGxldGVDYWxsYmFjayIsImFsd2F5cyIsImNvbXBsZXRlIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJzdWNjZXNzIiwibm90X3N1cHBvcnRlZCIsImdlb2NvZGUiLCJnZW9jb2RlciIsIkdlb2NvZGVyIiwiZ2VvY29kZU9wdGlvbnMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUVBOzs7OztBQUtBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBK0Y7QUFBQSx3QkFBNUZDLEtBQTRGO0FBQUEsTUFBNUZBLEtBQTRGLDJCQUFwRixFQUFvRjtBQUFBLE1BQWhGQyxFQUFnRixRQUFoRkEsRUFBZ0Y7QUFBQSxNQUE1RUMs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TSxHQUwwQztBQUFBLDhCQVN4Q04sV0FUd0MsQ0FNMUNPLFNBTjBDO0FBQUEsTUFNMUNBLFNBTjBDLHNDQU05QkQsR0FOOEI7QUFBQSw4QkFTeENOLFdBVHdDLENBTzFDa0wsUUFQMEM7QUFBQSxNQU8xQ0EsUUFQMEMsc0NBTy9CLElBQUk5UCxNQUFNLENBQUNDLElBQVAsQ0FBWXVCLE1BQWhCLENBQXVCeUQsUUFBdkIsRUFBaUNFLFNBQWpDLENBUCtCO0FBQUEsTUFRdkN2RSxPQVJ1Qyw0QkFTeENnRSxXQVR3Qzs7QUFXNUMsT0FBS2dhLFFBQUwsR0FBZ0IsSUFBSTVlLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZNGUsUUFBaEIsRUFBaEI7O0FBRUEsTUFBTUMsY0FBYyxxQkFDZmxlLE9BRGU7QUFFbEJrUCxZQUFRLEVBQVJBO0FBRmtCLElBQXBCOztBQUtBLE9BQUs4TyxRQUFMLENBQWNELE9BQWQsQ0FBc0JHLGNBQXRCLEVBQXNDeFQsUUFBdEM7QUFDRCxDQW5CRDs7QUFxQmU3Syw0R0FBZixFIiwiZmlsZSI6ImdtYXBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiR01hcHNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiR01hcHNcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEdNYXBzIGZyb20gJy4vY29yZSc7XG5cbi8qKlxuICogRXh0ZW5kcyBHTWFwcyB0byB1c2UgVUkgY29udHJvbHMuXG4gKiBAbW9kdWxlIENvbnRyb2xzXG4gKi9cblxuY29uc3QgY3JlYXRlQ29udHJvbCA9ICh7IHN0eWxlID0ge30sIGlkLCB0aXRsZSwgY2xhc3NlcywgY29udGVudCwgcG9zaXRpb24sIGV2ZW50cyA9IHt9LCBkaXNhYmxlRGVmYXVsdFN0eWxlcywgfSkgPT4ge1xuICBjb25zdCBjb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgY29udHJvbC5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG5cbiAgaWYgKGRpc2FibGVEZWZhdWx0U3R5bGVzICE9PSB0cnVlKSB7XG4gICAgY29udHJvbC5zdHlsZS5mb250RmFtaWx5ID0gJ2luaGVyaXQnO1xuICAgIGNvbnRyb2wuc3R5bGUuZm9udFNpemUgPSAnaW5oZXJpdCc7XG4gICAgY29udHJvbC5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnMnB4JztcbiAgICBjb250cm9sLnN0eWxlLmJveFNoYWRvdyA9ICdyZ2JhKDAsIDAsIDAsIDAuMjk4MDM5KSAwcHggMXB4IDRweCAtMXB4JztcbiAgfVxuXG4gIE9iamVjdC5rZXlzKHN0eWxlKS5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgIGNvbnRyb2wuc3R5bGVbcHJvcGVydHldID0gc3R5bGVbcHJvcGVydHldO1xuICAgIGNvbnRyb2wuc3R5bGUuc2V0UHJvcGVydHkocHJvcGVydHksIHN0eWxlW3Byb3BlcnR5XSk7XG4gIH0pO1xuXG4gIGlmIChpZCkge1xuICAgIGNvbnRyb2wuaWQgPSBpZDtcbiAgfVxuXG4gIGlmICh0aXRsZSkge1xuICAgIGNvbnRyb2wudGl0bGUgPSB0aXRsZTtcbiAgfVxuXG4gIGlmIChjbGFzc2VzKSB7XG4gICAgY29udHJvbC5jbGFzc05hbWUgPSBjbGFzc2VzO1xuICB9XG5cbiAgaWYgKGNvbnRlbnQpIHtcbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250cm9sLmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgfSBlbHNlIGlmIChjb250ZW50IGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50KSB7XG4gICAgICBjb250cm9sLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwb3NpdGlvbikge1xuICAgIGNvbnRyb2wucG9zaXRpb24gPSBnb29nbGUubWFwcy5Db250cm9sUG9zaXRpb25bcG9zaXRpb24udG9VcHBlckNhc2UoKV07XG4gIH1cblxuICBPYmplY3Qua2V5cyhldmVudHMpLmZvckVhY2goZXZlbnROYW1lID0+XG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIoY29udHJvbCwgZXZlbnROYW1lLCBldmVudCA9PlxuICAgICAgZXZlbnRzW2V2ZW50TmFtZV0uY2FsbCh0aGlzLCBldmVudClcbiAgICApXG4gICk7XG5cbiAgY29udHJvbC5pbmRleCA9IDE7XG5cbiAgcmV0dXJuIGNvbnRyb2w7XG59O1xuXG4vKipcbiAqIEFkZCBhIGN1c3RvbSBjb250cm9sIHRvIHRoZSBtYXAgVUkuXG4gKiBAZnVuY3Rpb24gYWRkQ29udHJvbFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBvYmplY3Qgc2hvdWxkIGNvbnRhaW46XG4gKiAqIGBzdHlsZWAgKG9iamVjdCk6IFRoZSBrZXlzIGFuZCB2YWx1ZXMgb2YgdGhpcyBvYmplY3Qgc2hvdWxkIGJlIHZhbGlkIENTUyBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXMuXG4gKiAqIGBpZGAgKHN0cmluZyk6IFRoZSBIVE1MIGlkIGZvciB0aGUgY3VzdG9tIGNvbnRyb2wuXG4gKiAqIGBjbGFzc2VzYCAoc3RyaW5nKTogQSBzdHJpbmcgY29udGFpbmluZyBhbGwgdGhlIEhUTUwgY2xhc3NlcyBmb3IgdGhlIGN1c3RvbSBjb250cm9sLlxuICogKiBgY29udGVudGAgKHN0cmluZyBvciBIVE1MIGVsZW1lbnQpOiBUaGUgY29udGVudCBvZiB0aGUgY3VzdG9tIGNvbnRyb2wuXG4gKiAqIGBwb3NpdGlvbmAgKHN0cmluZyk6IEFueSB2YWxpZCBbYGdvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvbmBdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L2NvbnRyb2xzI0NvbnRyb2xQb3NpdGlvbmluZykgdmFsdWUsIGluIGxvd2VyIG9yIHVwcGVyIGNhc2UuXG4gKiAqIGBldmVudHNgIChvYmplY3QpOiBUaGUga2V5cyBvZiB0aGlzIG9iamVjdCBzaG91bGQgYmUgdmFsaWQgRE9NIGV2ZW50cy4gVGhlIHZhbHVlcyBzaG91bGQgYmUgZnVuY3Rpb25zLlxuICogKiBgZGlzYWJsZURlZmF1bHRTdHlsZXNgIChib29sZWFuKTogSWYgZmFsc2UsIHJlbW92ZXMgdGhlIGRlZmF1bHQgc3R5bGVzIGZvciB0aGUgY29udHJvbHMgbGlrZSBmb250IChmYW1pbHkgYW5kIHNpemUpLCBhbmQgYm94IHNoYWRvdy5cbiAqXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gKi9cbkdNYXBzLnByb3RvdHlwZS5hZGRDb250cm9sID0gZnVuY3Rpb24gYWRkQ29udHJvbChvcHRpb25zKSB7XG4gIGNvbnN0IGNvbnRyb2wgPSBjcmVhdGVDb250cm9sKG9wdGlvbnMpO1xuXG4gIHRoaXMuY29udHJvbHMucHVzaChjb250cm9sKTtcbiAgdGhpcy5tYXAuY29udHJvbHNbY29udHJvbC5wb3NpdGlvbl0ucHVzaChjb250cm9sKTtcblxuICByZXR1cm4gY29udHJvbDtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGEgY29udHJvbCBmcm9tIHRoZSBtYXAuIGBjb250cm9sYCBzaG91bGQgYmUgYSBjb250cm9sIHJldHVybmVkIGJ5IGBhZGRDb250cm9sKClgLlxuICogQGZ1bmN0aW9uIHJlbW92ZUNvbnRyb2xcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250cm9sIC0gT25lIG9mIHRoZSBjb250cm9scyByZXR1cm5lZCBieSBgYWRkQ29udHJvbCgpYC5cbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gdGhlIHJlbW92ZWQgY29udHJvbC5cbiAqL1xuR01hcHMucHJvdG90eXBlLnJlbW92ZUNvbnRyb2wgPSBmdW5jdGlvbiByZW1vdmVDb250cm9sKGNvbnRyb2wpIHtcbiAgY29uc3QgY29udHJvbEluZGV4ID0gdGhpcy5jb250cm9scy5pbmRleE9mKGNvbnRyb2wpO1xuXG4gIHRoaXMuY29udHJvbHMuc3BsaWNlKGNvbnRyb2xJbmRleCwgMSk7XG5cbiAgaWYgKGNvbnRyb2wucG9zaXRpb24gPj0gMCAmJiBjb250cm9sSW5kZXggPj0gMCkge1xuICAgIGNvbnN0IGNvbnRyb2xzRm9yUG9zaXRpb24gPSB0aGlzLm1hcC5jb250cm9sc1tjb250cm9sLnBvc2l0aW9uXTtcbiAgICBjb25zdCBjb250cm9sSW5kZXhJbkNvbGxlY3Rpb24gPSBjb250cm9sc0ZvclBvc2l0aW9uLmluZGV4T2YoY29udHJvbCk7XG5cbiAgICBjb250cm9sc0ZvclBvc2l0aW9uLnJlbW92ZUF0KGNvbnRyb2xJbmRleEluQ29sbGVjdGlvbik7XG4gIH1cblxuICByZXR1cm4gY29udHJvbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXBzO1xuIiwiZXhwb3J0IGNvbnN0IGxhdExuZ0Zyb21Bcmd1bWVudHMgPSAoLi4uYXJncykgPT4ge1xuICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdudW1iZXInICYmIHR5cGVvZiBhcmdzWzFdID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICB9XG5cbiAgcmV0dXJuIGFyZ3NbMF07XG59O1xuXG5leHBvcnQgY29uc3QgZmxhdHRlbkFycmF5ID0gYXJyYXkgPT5cbiAgYXJyYXkucmVkdWNlKChjb2xsZWN0aW9uLCBpdGVtKSA9PiBjb2xsZWN0aW9uLmNvbmNhdChpdGVtKSwgW10pO1xuXG5leHBvcnQgY29uc3QgY29vcmRzVG9MYXRMbmdzID0gKGNvb3JkaW5hdGVzLCB1c2VHZW9KU09OKSA9PiB7XG4gIGNvbnN0IGZpcnN0Q29vcmRpbmF0ZSA9IHVzZUdlb0pTT04gPyBjb29yZGluYXRlc1sxXSA6IGNvb3JkaW5hdGVzWzBdO1xuICBjb25zdCBzZWNvbmRDb29yZGluYXRlID0gdXNlR2VvSlNPTiA/IGNvb3JkaW5hdGVzWzBdIDogY29vcmRpbmF0ZXNbMV07XG5cbiAgcmV0dXJuIG5ldyBnb29nbGUubWFwcy5MYXRMbmcoZmlyc3RDb29yZGluYXRlLCBzZWNvbmRDb29yZGluYXRlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhcnJheVRvTGF0TG5nID0gKGNvb3JkaW5hdGVzLCB1c2VHZW9KU09OKSA9PlxuICBjb29yZGluYXRlcy5tYXAoKGNvb3JkaW5hdGUpID0+IHtcbiAgICBpZiAoIShjb29yZGluYXRlIGluc3RhbmNlb2YgZ29vZ2xlLm1hcHMuTGF0TG5nKSkge1xuICAgICAgaWYgKGNvb3JkaW5hdGUubGVuZ3RoICYmIHR5cGVvZiBjb29yZGluYXRlWzBdID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gYXJyYXlUb0xhdExuZyhjb29yZGluYXRlLCB1c2VHZW9KU09OKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvb3Jkc1RvTGF0TG5ncyhjb29yZGluYXRlLCB1c2VHZW9KU09OKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29vcmRpbmF0ZTtcbiAgfSk7XG5cbmNvbnN0IGdldEVsZW1lbnRzQnlDbGFzc05hbWUgPSAoY2xhc3NOYW1lLCBjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHNhbml0aXplZENsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKC9eXFwuLywgJycpO1xuXG4gIGlmICh0eXBlb2Ygd2luZG93LiQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gJChgLiR7c2FuaXRpemVkQ2xhc3NOYW1lfWAsIGNvbnRleHQpWzBdO1xuICB9XG5cbiAgcmV0dXJuIHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHNhbml0aXplZENsYXNzTmFtZSlbMF07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RWxlbWVudEJ5SWQgPSAoaWQsIGNvbnRleHQpID0+IHtcbiAgY29uc3Qgc2FuaXRpemVkSWQgPSBpZC5yZXBsYWNlKC9eIy8sICcnKTtcblxuICBpZiAodHlwZW9mIHdpbmRvdy4kID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSAkKGAjJHtzYW5pdGl6ZWRJZH1gLCBjb250ZXh0KSB8fCBbXTtcblxuICAgIHJldHVybiBlbGVtZW50c1swXTtcbiAgfVxuXG4gIHJldHVybiB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2FuaXRpemVkSWQpO1xufTtcblxuY29uc3QgZ2V0RWxlbWVudCA9IChzZWxlY3Rvck9yRWxlbWVudCwgY29udGV4dCkgPT4ge1xuICBpZiAodHlwZW9mIHNlbGVjdG9yT3JFbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBzZWxlY3Rvck9yRWxlbWVudC5tYXRjaCgvXiMvKSA/IGdldEVsZW1lbnRCeUlkKHNlbGVjdG9yT3JFbGVtZW50LCBjb250ZXh0KSA6IGdldEVsZW1lbnRzQnlDbGFzc05hbWUoc2VsZWN0b3JPckVsZW1lbnQsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGVjdG9yT3JFbGVtZW50O1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRBYnNvbHV0ZVBvc2l0aW9uID0gKGVsZW1lbnQpID0+IHtcbiAgbGV0IGxlZnQgPSAwO1xuICBsZXQgdG9wID0gMDtcblxuICBpZiAoZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcbiAgICBjb25zdCByZWN0YW5nbGUgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHggPSAtKHdpbmRvdy5zY3JvbGxYID8gd2luZG93LnNjcm9sbFggOiB3aW5kb3cucGFnZVhPZmZzZXQpO1xuICAgIGNvbnN0IHkgPSAtKHdpbmRvdy5zY3JvbGxZID8gd2luZG93LnNjcm9sbFkgOiB3aW5kb3cucGFnZVlPZmZzZXQpO1xuXG4gICAgcmV0dXJuIFtyZWN0YW5nbGUubGVmdCAtIHgsIHJlY3RhbmdsZS50b3AgLSB5XTtcbiAgfVxuXG4gIGlmIChlbGVtZW50Lm9mZnNldFBhcmVudCkge1xuICAgIGxldCBpdGVyYXRvciA9IGVsZW1lbnQ7XG5cbiAgICBkbyB7XG4gICAgICBsZWZ0ICs9IGl0ZXJhdG9yLm9mZnNldExlZnQ7XG4gICAgICB0b3AgKz0gaXRlcmF0b3Iub2Zmc2V0VG9wO1xuICAgIH0gd2hpbGUgKChpdGVyYXRvciA9IGl0ZXJhdG9yLm9mZnNldFBhcmVudCkpO1xuICB9XG5cbiAgcmV0dXJuIFtsZWZ0LCB0b3BdO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldHVwRXZlbnRMaXN0ZW5lciA9ICh7IG9iamVjdCwgZXZlbnROYW1lLCBpbnN0YW5jZSwgaGFuZGxlciwgfSkgPT4ge1xuICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihvYmplY3QsIGV2ZW50TmFtZSwgKGV2ZW50ID0gaW5zdGFuY2UpID0+IHtcbiAgICBoYW5kbGVyLmNhbGwoaW5zdGFuY2UsIGV2ZW50KTtcblxuICAgIGlmIChpbnN0YW5jZS5oaWRlQ29udGV4dE1lbnUpIHtcbiAgICAgIGluc3RhbmNlLmhpZGVDb250ZXh0TWVudSgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0dXBFdmVudHMgPSAoeyBldmVudHMsIG9iamVjdCwgaW5zdGFuY2UsIGhhbmRsZXJzLCB9KSA9PlxuICBldmVudHMuZm9yRWFjaCgoZXZlbnROYW1lKSA9PiB7XG4gICAgaWYgKGhhbmRsZXJzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHNldHVwRXZlbnRMaXN0ZW5lcih7XG4gICAgICAgIG9iamVjdCxcbiAgICAgICAgZXZlbnROYW1lLFxuICAgICAgICBpbnN0YW5jZSxcbiAgICAgICAgaGFuZGxlcjogaGFuZGxlcnNbZXZlbnROYW1lXSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbmNvbnN0IE1BUF9FVkVOVFMgPSBbXG4gICdib3VuZHNfY2hhbmdlZCcsICdjZW50ZXJfY2hhbmdlZCcsICdjbGljaycsICdkYmxjbGljaycsICdkcmFnJyxcbiAgJ2RyYWdlbmQnLCAnZHJhZ3N0YXJ0JywgJ2lkbGUnLCAnbWFwdHlwZWlkX2NoYW5nZWQnLFxuICAnbW91c2Vtb3ZlJywgJ21vdXNlb3V0JywgJ21vdXNlb3ZlcicsICdwcm9qZWN0aW9uX2NoYW5nZWQnLFxuICAncmVzaXplJywgJ3RpbGVzbG9hZGVkJywgJ3pvb21fY2hhbmdlZCdcbl07XG5jb25zdCBHTUFQU19NRU5VX0lEID0gJ2dtYXBzX2NvbnRleHRfbWVudSc7XG5cbi8qKlxuICogR01hcHMgaXMgYSB3cmFwcGVyIGZvciBHb29nbGUgTWFwcyBKYXZhU2NyaXB0IEFQSS4gSXRzIGdvYWwgaXMgdG8gc2ltcGxpZnkgR29vZ2xlIE1hcHMgdXNhZ2UgYnkgcGVyZm9ybWluZyBjb21wbGV4IHRhc2tzIHdpdGggZmV3ZXIgbGluZXMgb2YgY29kZS5cbiAqL1xuY2xhc3MgR01hcHMge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBHTWFwcyBpbnN0YW5jZSwgaW5jbHVkaW5nIGEgR29vZ2xlIE1hcHMgbWFwLlxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIGBvcHRpb25zYCBhY2NlcHRzIGFsbCB0aGUgW01hcE9wdGlvbnNdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNNYXBPcHRpb25zKSBhbmQgW2V2ZW50c10oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI01hcCkgbGlzdGVkIGluIHRoZSBHb29nbGUgTWFwcyBBUEkuIEFsc28gYWNjZXB0czpcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMubGF0aXR1ZGUgLSBMYXRpdHVkZSBvZiB0aGUgbWFwJ3MgY2VudGVyLlxuICAgKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5sb25naXR1ZGUgLSBMb25naXR1ZGUgb2YgdGhlIG1hcCdzIGNlbnRlci5cbiAgICogQHBhcmFtIHtnb29nbGUubWFwcy5MYXRMbmd9IG9wdGlvbnMuY2VudGVyIC0gQSBgZ29vZ2xlLm1hcHMuTGF0TG5nYCBjb29yZGluYXRlIGluZGljYXRlIHRoZSBjZW50ZXIuIElmIHNldCwgYGxhdGl0dWRlYCBhbmQgYGxvbmdpdHVkZWAgYXJlIGlnbm9yZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfEhUTUxFbGVtZW50fSBvcHRpb25zLmVsZW1lbnQgLSBjb250YWluZXIgd2hlcmUgdGhlIG1hcCB3aWxsIGJlIHJlbmRlcmVkLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLm1hcmtlckNsdXN0ZXJlciAtIEEgZnVuY3Rpb24gdG8gY3JlYXRlIGEgbWFya2VyIGNsdXN0ZXIuIFlvdSBjYW4gdXNlIE1hcmtlckNsdXN0ZXJlciBvciBNYXJrZXJDbHVzdGVyZXJQbHVzLlxuICAgKi9cbiAgY29uc3RydWN0b3IoYmFzZU9wdGlvbnMgPSB7fSkge1xuICAgIGlmICghd2luZG93Lmdvb2dsZSB8fCAhd2luZG93Lmdvb2dsZS5tYXBzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0dvb2dsZSBNYXBzIEphdmFTY3JpcHQgQVBJIGlzIHJlcXVpcmVkLiBDaGVjazogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvdHV0b3JpYWwnKTtcbiAgICB9XG5cbiAgICBjb25zdCB7IGRpdixcbiAgICAgIGVsID0gZGl2LFxuICAgICAgY29udGV4dCxcbiAgICAgIGVsZW1lbnQgPSBnZXRFbGVtZW50KGVsLCBjb250ZXh0KSxcbiAgICAgIGxhdCxcbiAgICAgIGxhdGl0dWRlID0gbGF0LFxuICAgICAgbG5nLFxuICAgICAgbG9uZ2l0dWRlID0gbG5nLFxuICAgICAgY2VudGVyID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsYXRpdHVkZSwgbG9uZ2l0dWRlKSxcbiAgICAgIHpvb20gPSAxNSxcbiAgICAgIG1hcFR5cGUgPSAncm9hZG1hcCcsXG4gICAgICB6b29tQ29udHJvbE9wdCA9IHtcbiAgICAgICAgc3R5bGU6ICdERUZBVUxUJyxcbiAgICAgICAgcG9zaXRpb246ICdUT1BfTEVGVCcsXG4gICAgICB9LFxuICAgICAgcGFuQ29udHJvbCA9IHRydWUsXG4gICAgICB6b29tQ29udHJvbCA9IHRydWUsXG4gICAgICBtYXBUeXBlQ29udHJvbCA9IHRydWUsXG4gICAgICBzY2FsZUNvbnRyb2wgPSB0cnVlLFxuICAgICAgc3RyZWV0Vmlld0NvbnRyb2wgPSB0cnVlLFxuICAgICAgb3ZlcnZpZXdNYXBDb250cm9sID0gdHJ1ZSxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgbWFya2VyQ2x1c3RlcmVyLFxuICAgICAgZW5hYmxlTmV3U3R5bGUsXG4gICAgICAuLi5vcHRpb25zIH0gPSBiYXNlT3B0aW9ucztcblxuICAgIGNvbnN0IG1hcFR5cGVJZCA9IGdvb2dsZS5tYXBzLk1hcFR5cGVJZFttYXBUeXBlLnRvVXBwZXJDYXNlKCldO1xuXG4gICAgY29uc3QgbWFwQmFzZU9wdGlvbnMgPSB7XG4gICAgICB6b29tLFxuICAgICAgY2VudGVyLFxuICAgICAgbWFwVHlwZUlkLFxuICAgIH07XG5cbiAgICBjb25zdCBtYXBDb250cm9sc09wdGlvbnMgPSB7XG4gICAgICBwYW5Db250cm9sLFxuICAgICAgem9vbUNvbnRyb2wsXG4gICAgICB6b29tQ29udHJvbE9wdGlvbnM6IHtcbiAgICAgICAgc3R5bGU6IGdvb2dsZS5tYXBzLlpvb21Db250cm9sU3R5bGVbem9vbUNvbnRyb2xPcHQuc3R5bGVdLFxuICAgICAgICBwb3NpdGlvbjogZ29vZ2xlLm1hcHMuQ29udHJvbFBvc2l0aW9uW3pvb21Db250cm9sT3B0LnBvc2l0aW9uXSxcbiAgICAgIH0sXG4gICAgICBtYXBUeXBlQ29udHJvbCxcbiAgICAgIHNjYWxlQ29udHJvbCxcbiAgICAgIHN0cmVldFZpZXdDb250cm9sLFxuICAgICAgb3ZlcnZpZXdNYXBDb250cm9sLFxuICAgIH07XG5cbiAgICBjb25zdCBmaWx0ZXJlZE9wdGlvbnMgPSBPYmplY3Qua2V5cyhvcHRpb25zKS5yZWR1Y2UoKGhhc2gsIGtleSkgPT4ge1xuICAgICAgaWYgKE1BUF9FVkVOVFMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICByZXR1cm4gaGFzaDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4uaGFzaCwgW2tleV06IG9wdGlvbnNba2V5XSwgfTtcbiAgICB9LCB7fSk7XG5cbiAgICB0aGlzLmlkID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiBEYXRlLm5vdygpKTtcblxuICAgIEdNYXBzLmNvbnRleHRNZW51c1t0aGlzLmlkXSA9IHt9O1xuXG4gICAgZ29vZ2xlLm1hcHMudmlzdWFsUmVmcmVzaCA9IGVuYWJsZU5ld1N0eWxlO1xuXG4gICAgLyoqXG4gICAgICogSFRNTCBlbGVtZW50IHdoZXJlIHRoZSBHb29nbGUgTWFwcyBtYXAgaXMgcmVuZGVyZWRcbiAgICAgKlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICB0aGlzLmVsZW1lbnQgPSB0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycgPyBnZXRFbGVtZW50KGVsZW1lbnQpIDogZWxlbWVudDtcblxuICAgIGlmICghdGhpcy5lbGVtZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGVsZW1lbnQgZGVmaW5lZC4gUGFzcyBhbiBgZWxlbWVudGAgb3B0aW9uIGluIEdNYXBzLicpO1xuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS53aWR0aCA9IHdpZHRoIHx8IHRoaXMuZWxlbWVudC5zY3JvbGxXaWR0aCB8fCB0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmhlaWdodCA9IGhlaWdodCB8fCB0aGlzLmVsZW1lbnQuc2Nyb2xsSGVpZ2h0IHx8IHRoaXMuZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICBjb25zdCBtYXBPcHRpb25zID0ge1xuICAgICAgLi4uZmlsdGVyZWRPcHRpb25zLFxuICAgICAgLi4ubWFwQmFzZU9wdGlvbnMsXG4gICAgICAuLi5tYXBDb250cm9sc09wdGlvbnMsXG4gICAgfTtcblxuICAgIHRoaXMubWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcCh0aGlzLmVsZW1lbnQsIG1hcE9wdGlvbnMpO1xuICAgIC8qKlxuICAgICAqIENvbGxlY3Rpb24gb2YgY3VzdG9tIGNvbnRyb2xzIGluIHRoZSBtYXAgVUlcbiAgICAgKlxuICAgICAqIEB0eXBlIHthcnJheX1cbiAgICAgKi9cbiAgICB0aGlzLmNvbnRyb2xzID0gW107XG4gICAgLyoqXG4gICAgICogQ29sbGVjdGlvbiBvZiBtYXAncyBvdmVybGF5c1xuICAgICAqXG4gICAgICogQHR5cGUge2FycmF5fVxuICAgICAqL1xuICAgIHRoaXMub3ZlcmxheXMgPSBbXTtcbiAgICAvKipcbiAgICAgKiBDb2xsZWN0aW9uIG9mIEtNTC9HZW9SU1MgYW5kIEZ1c2lvblRhYmxlIGxheWVyc1xuICAgICAqXG4gICAgICogQHR5cGUge2FycmF5fVxuICAgICAqL1xuICAgIHRoaXMubGF5ZXJzID0gW107XG4gICAgLyoqXG4gICAgICogQ29sbGVjdGlvbiBvZiBkYXRhIGxheWVycyAoU2VlIHtAbGluayBHTWFwcyNhZGRMYXllcn0pXG4gICAgICpcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuc2luZ2xlTGF5ZXJzID0ge307XG4gICAgLyoqXG4gICAgICogQ29sbGVjdGlvbiBvZiBtYXAncyBtYXJrZXJzXG4gICAgICpcbiAgICAgKiBAdHlwZSB7YXJyYXl9XG4gICAgICovXG4gICAgdGhpcy5tYXJrZXJzID0gW107XG4gICAgLyoqXG4gICAgICogQ29sbGVjdGlvbiBvZiBtYXAncyBsaW5lc1xuICAgICAqXG4gICAgICogQHR5cGUge2FycmF5fVxuICAgICAqL1xuICAgIHRoaXMucG9seWxpbmVzID0gW107XG4gICAgLyoqXG4gICAgICogQ29sbGVjdGlvbiBvZiBtYXAncyByb3V0ZXMgcmVxdWVzdGVkIGJ5IHtAbGluayBHTWFwcyNnZXRSb3V0ZXN9LCB7QGxpbmsgR01hcHMjcmVuZGVyUm91dGV9LCB7QGxpbmsgR01hcHMjZHJhd1JvdXRlfSwge0BsaW5rIEdNYXBzI3RyYXZlbFJvdXRlfSBvciB7QGxpbmsgR01hcHMjZHJhd1N0ZXBwZWRSb3V0ZX1cbiAgICAgKlxuICAgICAqIEB0eXBlIHthcnJheX1cbiAgICAgKi9cbiAgICB0aGlzLnJvdXRlcyA9IFtdO1xuICAgIC8qKlxuICAgICAqIENvbGxlY3Rpb24gb2YgbWFwJ3MgcG9seWdvbnNcbiAgICAgKlxuICAgICAqIEB0eXBlIHthcnJheX1cbiAgICAgKi9cbiAgICB0aGlzLnBvbHlnb25zID0gW107XG4gICAgdGhpcy5pbmZvV2luZG93ID0gbnVsbDtcbiAgICB0aGlzLm92ZXJsYXlFbGVtZW50ID0gbnVsbDtcbiAgICAvKipcbiAgICAgKiBDdXJyZW50IG1hcCdzIHpvb21cbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy56b29tID0gem9vbTtcblxuICAgIHRoaXMucmVnaXN0ZXJlZEV2ZW50cyA9IHt9O1xuXG4gICAgaWYgKG1hcmtlckNsdXN0ZXJlcikge1xuICAgICAgLyoqXG4gICAgICAgKiBNYXJrZXIgQ2x1c3RlcmVyIGluc3RhbmNlXG4gICAgICAgKlxuICAgICAgICogQHR5cGUge29iamVjdH1cbiAgICAgICAqL1xuICAgICAgdGhpcy5tYXJrZXJDbHVzdGVyZXIgPSBtYXJrZXJDbHVzdGVyZXIuYXBwbHkodGhpcywgW3RoaXMubWFwXSk7XG4gICAgfVxuXG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIodGhpcy5tYXAsICd6b29tX2NoYW5nZWQnLCB0aGlzLmhpZGVDb250ZXh0TWVudSk7XG5cbiAgICBzZXR1cEV2ZW50cyh7IGV2ZW50czogTUFQX0VWRU5UUywgb2JqZWN0OiB0aGlzLm1hcCwgaW5zdGFuY2U6IHRoaXMsIGhhbmRsZXJzOiBvcHRpb25zLCB9KTtcblxuICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKHRoaXMubWFwLCAncmlnaHRjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgaWYgKG9wdGlvbnMucmlnaHRjbGljaykge1xuICAgICAgICBvcHRpb25zLnJpZ2h0Y2xpY2suY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChHTWFwcy5jb250ZXh0TWVudXNbdGhpcy5pZF0ubWFwKSB7XG4gICAgICAgIHRoaXMuYnVpbGRDb250ZXh0TWVudSgnbWFwJywgZXZlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZ29vZ2xlTWFwc01hcE1ldGhvZHMgPSBPYmplY3Qua2V5cyhnb29nbGUubWFwcy5NYXAucHJvdG90eXBlKVxuICAgICAgICAuZmlsdGVyKGtleSA9PiAodHlwZW9mIGdvb2dsZS5tYXBzLk1hcC5wcm90b3R5cGVba2V5XSA9PT0gJ2Z1bmN0aW9uJyAmJiAhR01hcHMucHJvdG90eXBlW2tleV0pKTtcblxuICAgIGdvb2dsZU1hcHNNYXBNZXRob2RzLmZvckVhY2goKG1ldGhvZE5hbWUpID0+IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gICAgICBHTWFwcy5wcm90b3R5cGVbbWV0aG9kTmFtZV0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXBbbWV0aG9kTmFtZV0uYXBwbHkodGhpcy5tYXAsIGFyZ3MpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGJ1aWxkQ29udGV4dE1lbnVIVE1MKGNvbnRyb2wsIGV2ZW50KSB7XG4gICAgaWYgKCFnZXRFbGVtZW50QnlJZChHTUFQU19NRU5VX0lEKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRleHRNZW51RWxlbWVudCA9IGdldEVsZW1lbnRCeUlkKEdNQVBTX01FTlVfSUQpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSBHTWFwcy5jb250ZXh0TWVudXNbdGhpcy5pZF1bY29udHJvbF07XG5cbiAgICBjb25zdCBodG1sID0gT2JqZWN0LmtleXMob3B0aW9ucykubWFwKGtleSA9PlxuICAgICAgYDxsaT48YSBpZD1cIiR7Y29udHJvbH1fJHtrZXl9XCIgaHJlZj1cIiNcIj4ke29wdGlvbnNba2V5XS50aXRsZX08L2E+PC9saT5gXG4gICAgKS5qb2luKCcnKTtcblxuICAgIGNvbnRleHRNZW51RWxlbWVudC5pbm5lckhUTUwgPSBodG1sO1xuXG4gICAgY29uc3QgY29udGV4dE1lbnVJdGVtcyA9IGNvbnRleHRNZW51RWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYScpO1xuXG4gICAgWy4uLmNvbnRleHRNZW51SXRlbXNdLmZvckVhY2goKGNvbnRleHRNZW51SXRlbSkgPT4ge1xuICAgICAgY29uc3QgY29udGV4dE1lbnVJdGVtTGlzdGVuZXIgPSAoY29udGV4dE1lbnVJdGVtTGlzdGVuZXJFdmVudCkgPT4ge1xuICAgICAgICBjb250ZXh0TWVudUl0ZW1MaXN0ZW5lckV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgb3B0aW9uc1tjb250ZXh0TWVudUl0ZW1MaXN0ZW5lckV2ZW50LnRhcmdldC5pZC5yZXBsYWNlKGAke2NvbnRyb2x9X2AsICcnKV0uYWN0aW9uLmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgICB0aGlzLmhpZGVDb250ZXh0TWVudSgpO1xuICAgICAgfTtcblxuICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuY2xlYXJMaXN0ZW5lcnMoY29udGV4dE1lbnVJdGVtLCAnY2xpY2snKTtcbiAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyT25jZShjb250ZXh0TWVudUl0ZW0sICdjbGljaycsIGNvbnRleHRNZW51SXRlbUxpc3RlbmVyLCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBwb3NpdGlvbiA9IGZpbmRBYnNvbHV0ZVBvc2l0aW9uKHRoaXMuZWxlbWVudCk7XG4gICAgY29uc3QgbGVmdCA9IHBvc2l0aW9uWzBdICsgZXZlbnQucGl4ZWwueCAtIDE1O1xuICAgIGNvbnN0IHRvcCA9IHBvc2l0aW9uWzFdICsgZXZlbnQucGl4ZWwueSAtIDE1O1xuXG4gICAgY29udGV4dE1lbnVFbGVtZW50LnN0eWxlLmxlZnQgPSBgJHtsZWZ0fXB4YDtcbiAgICBjb250ZXh0TWVudUVsZW1lbnQuc3R5bGUudG9wID0gYCR7dG9wfXB4YDtcbiAgfVxuXG4gIGJ1aWxkQ29udGV4dE1lbnUoY29udHJvbCwgZXZlbnQpIHtcbiAgICBpZiAoY29udHJvbCA9PT0gJ21hcmtlcicpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgZXZlbnQucGl4ZWwgPSB7fTtcblxuICAgICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBnb29nbGUubWFwcy5PdmVybGF5VmlldygpO1xuICAgICAgb3ZlcmxheS5zZXRNYXAodGhpcy5tYXApO1xuXG4gICAgICBvdmVybGF5LmRyYXcgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3Rpb24gPSBvdmVybGF5LmdldFByb2plY3Rpb24oKTtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBldmVudC5tYXJrZXIuZ2V0UG9zaXRpb24oKTtcblxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgZXZlbnQucGl4ZWwgPSBwcm9qZWN0aW9uLmZyb21MYXRMbmdUb0NvbnRhaW5lclBpeGVsKHBvc2l0aW9uKTtcblxuICAgICAgICB0aGlzLmJ1aWxkQ29udGV4dE1lbnVIVE1MKGNvbnRyb2wsIGV2ZW50KTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYnVpbGRDb250ZXh0TWVudUhUTUwoY29udHJvbCwgZXZlbnQpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRleHRNZW51RWxlbWVudCA9IGdldEVsZW1lbnRCeUlkKEdNQVBTX01FTlVfSUQpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb250ZXh0TWVudUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfSwgMCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgY29udGV4dCBtZW51IGZvciBhIG1hcCBvciBhIG1hcmtlci5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgYG9wdGlvbnNgIG9iamVjdCBzaG91bGQgY29udGFpbjpcbiAgICogKiBgY29udHJvbGAgKHN0cmluZyk6IEtpbmQgb2YgY29udHJvbCB0aGUgY29udGV4dCBtZW51IHdpbGwgYmUgYXR0YWNoZWQuIENhbiBiZSBcIm1hcFwiIG9yIFwibWFya2VyXCIuXG4gICAqICogYG9wdGlvbnNgIChhcnJheSk6IEEgY29sbGVjdGlvbiBvZiBjb250ZXh0IG1lbnUgaXRlbXM6XG4gICAqICAgKiBgdGl0bGVgIChzdHJpbmcpOiBJdGVtJ3MgdGl0bGUgc2hvd24gaW4gdGhlIGNvbnRleHQgbWVudS5cbiAgICogICAqIGBuYW1lYCAoc3RyaW5nKTogSXRlbSdzIGlkZW50aWZpZXIuXG4gICAqICAgKiBgYWN0aW9uYCAoZnVuY3Rpb24pOiBGdW5jdGlvbiB0cmlnZ2VyZWQgYWZ0ZXIgc2VsZWN0aW5nIHRoZSBjb250ZXh0IG1lbnUgaXRlbS5cbiAgICovXG4gIHNldENvbnRleHRNZW51KG9wdGlvbnMpIHtcbiAgICBHTWFwcy5jb250ZXh0TWVudXNbdGhpcy5pZF1bb3B0aW9ucy5jb250cm9sXSA9IHt9O1xuXG4gICAgT2JqZWN0LmtleXMob3B0aW9ucy5vcHRpb25zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IG9wdGlvbnMub3B0aW9uc1trZXldO1xuXG4gICAgICBHTWFwcy5jb250ZXh0TWVudXNbdGhpcy5pZF1bb3B0aW9ucy5jb250cm9sXVtvcHRpb24ubmFtZV0gPSB7XG4gICAgICAgIHRpdGxlOiBvcHRpb24udGl0bGUsXG4gICAgICAgIGFjdGlvbjogb3B0aW9uLmFjdGlvbixcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBsZXQgY29udGV4dE1lbnVFbGVtZW50ID0gZ2V0RWxlbWVudEJ5SWQoR01BUFNfTUVOVV9JRCk7XG5cbiAgICBpZiAoIWNvbnRleHRNZW51RWxlbWVudCkge1xuICAgICAgY29udGV4dE1lbnVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgICAgY29udGV4dE1lbnVFbGVtZW50LmlkID0gR01BUFNfTUVOVV9JRDtcbiAgICAgIGNvbnRleHRNZW51RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgY29udGV4dE1lbnVFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgIGNvbnRleHRNZW51RWxlbWVudC5zdHlsZS5taW5XaWR0aCA9ICcxMDBweCc7XG4gICAgICBjb250ZXh0TWVudUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9ICd3aGl0ZSc7XG4gICAgICBjb250ZXh0TWVudUVsZW1lbnQuc3R5bGUubGlzdFN0eWxlID0gJ25vbmUnO1xuICAgICAgY29udGV4dE1lbnVFbGVtZW50LnN0eWxlLnBhZGRpbmcgPSAnOHB4JztcbiAgICAgIGNvbnRleHRNZW51RWxlbWVudC5zdHlsZS5ib3hTaGFkb3cgPSAnMnB4IDJweCA2cHggI2NjYyc7XG5cbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGV4dE1lbnVFbGVtZW50KTtcbiAgICB9XG5cbiAgICBnb29nbGUubWFwcy5ldmVudC5hZGREb21MaXN0ZW5lcihjb250ZXh0TWVudUVsZW1lbnQsICdtb3VzZW91dCcsIChldmVudCkgPT4ge1xuICAgICAgaWYgKCFldmVudC5yZWxhdGVkVGFyZ2V0IHx8ICFldmVudC50YXJnZXQuY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldCkpIHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGNvbnRleHRNZW51RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9LCA3MDApO1xuICAgICAgfVxuICAgIH0sIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlIHRoZSBjdXJyZW50IGNvbnRleHQgbWVudVxuICAgKi9cbiAgaGlkZUNvbnRleHRNZW51KCkge1xuICAgIGNvbnN0IGNvbnRleHRNZW51RWxlbWVudCA9IGdldEVsZW1lbnRCeUlkKEdNQVBTX01FTlVfSUQpO1xuXG4gICAgaWYgKGNvbnRleHRNZW51RWxlbWVudCkge1xuICAgICAgY29udGV4dE1lbnVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgYSBgcmVzaXplYCBldmVudCwgdXNlZnVsIGlmIHlvdSBuZWVkIHRvIHJlcGFpbnQgdGhlIGN1cnJlbnQgbWFwIChmb3IgY2hhbmdlcyBpbiB0aGUgdmlld3BvcnQgb3IgZGlzcGxheSAvIGhpZGUgYWN0aW9ucykuXG4gICAqL1xuICByZWZyZXNoKCkge1xuICAgIGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIodGhpcy5tYXAsICdyZXNpemUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGp1c3QgdGhlIG1hcCB6b29tIHRvIGluY2x1ZGUgYWxsIHRoZSBjb29yZGluYXRlcyBpbiB0aGUgYGxhdExuZ3NgIGFycmF5LlxuICAgKlxuICAgKiBAcGFyYW0ge2FycmF5fSBsYXRMbmdzIC0gQ29sbGVjdGlvbiBvZiBgZ29vZ2xlLm1hcHMuTGF0TG5nYCBvYmplY3RzLlxuICAgKi9cbiAgZml0TGF0TG5nQm91bmRzKGxhdExuZ3MpIHtcbiAgICBjb25zdCBib3VuZHMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCk7XG5cbiAgICBsYXRMbmdzLmZvckVhY2gobGF0TG5nID0+IGJvdW5kcy5leHRlbmQobGF0TG5nKSk7XG5cbiAgICB0aGlzLm1hcC5maXRCb3VuZHMoYm91bmRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGp1c3QgdGhlIG1hcCB6b29tIHRvIGluY2x1ZGUgYWxsIHRoZSBtYXJrZXJzIGFkZGVkIGluIHRoZSBtYXAuXG4gICAqL1xuICBmaXRab29tKCkge1xuICAgIGNvbnN0IGxhdExuZ3MgPSB0aGlzLm1hcmtlcnNcbiAgICAgIC5maWx0ZXIobWFya2VyID0+IG1hcmtlci52aXNpYmxlKVxuICAgICAgLm1hcChtYXJrZXIgPT4gbWFya2VyLmdldFBvc2l0aW9uKCkpO1xuXG4gICAgdGhpcy5maXRMYXRMbmdCb3VuZHMobGF0TG5ncyk7XG4gIH1cblxuICAvKipcbiAgICogQ2VudGVyIHRoZSBtYXAgdXNpbmcgdGhlIGBsYXRgIGFuZCBgbG5nYCBjb29yZGluYXRlcy5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxhdGl0dWRlIC0gTGF0aXR1ZGUgb2YgdGhlIGNvb3JkaW5hdGUuIElmIGBsYXRpdHVkZWAgYW5kIGBsb25naXR1ZGVgIGFyZSBzZXQsIGBwb3NpdGlvbmAgaXMgaWdub3JlZC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGxvbmdpdHVkZSAtIExvbmdpdHVkZSBvZiB0aGUgY29vcmRpbmF0ZS4gSWYgYGxhdGl0dWRlYCBhbmQgYGxvbmdpdHVkZWAgYXJlIHNldCwgYHBvc2l0aW9uYCBpcyBpZ25vcmVkLlxuICAgKiBAcGFyYW0ge2dvb2dsZS5tYXBzLkxhdExuZ30gcG9zaXRpb24gLSBBIGBnb29nbGUubWFwcy5MYXRMbmdgIGNvb3JkaW5hdGUgaW5kaWNhdGUgdGhlIHBvc2l0aW9uLiBJZiBzZXQsIGBsYXRpdHVkZWAgYW5kIGBsb25naXR1ZGVgIGFyZSBpZ25vcmVkLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbY2FsbGJhY2tdIC0gQ2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIGFmdGVyIHRoZSBtYXAgaXMgY2VudGVyZWQuXG4gICAqL1xuICBzZXRDZW50ZXIoLi4uYXJncykge1xuICAgIGNvbnN0IGxhdExuZyA9IGxhdExuZ0Zyb21Bcmd1bWVudHMoLi4uYXJncyk7XG4gICAgY29uc3QgY2FsbGJhY2sgPSBhcmdzLnNsaWNlKCkucG9wKCk7XG5cbiAgICB0aGlzLm1hcC5wYW5UbyhsYXRMbmcpO1xuXG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2suY2FsbCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBIVE1MIGVsZW1lbnQgY29udGFpbmVyIG9mIHRoZSBtYXAuXG4gICAqXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gdGhlIGVsZW1lbnQgY29udGFpbmVyLlxuICAgKi9cbiAgZ2V0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEluY3JlYXNlIHRoZSBtYXAncyB6b29tLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gW21hZ25pdHVkZV0gLSBUaGUgbnVtYmVyIG9mIHRpbWVzIHRoZSBtYXAgd2lsbCBiZSB6b29tZWQgaW4uXG4gICAqL1xuICB6b29tSW4obWFnbml0dWRlID0gMSkge1xuICAgIHRoaXMuem9vbSA9IHRoaXMubWFwLmdldFpvb20oKSArIG1hZ25pdHVkZTtcbiAgICB0aGlzLm1hcC5zZXRab29tKHRoaXMuem9vbSk7XG4gIH1cblxuICAvKipcbiAgICogRGVjcmVhc2UgdGhlIG1hcCdzIHpvb20uXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbbWFnbml0dWRlXSAtIFRoZSBudW1iZXIgb2YgdGltZXMgdGhlIG1hcCB3aWxsIGJlIHpvb21lZCBvdXQuXG4gICAqL1xuICB6b29tT3V0KG1hZ25pdHVkZSA9IDEpIHtcbiAgICB0aGlzLnpvb20gPSB0aGlzLm1hcC5nZXRab29tKCkgLSBtYWduaXR1ZGU7XG4gICAgdGhpcy5tYXAuc2V0Wm9vbSh0aGlzLnpvb20pO1xuICB9XG59XG5cbkdNYXBzLmNvbnRleHRNZW51cyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBHTWFwcztcbiIsImltcG9ydCBHTWFwcyBmcm9tICcuL2NvcmUnO1xuXG4vKipcbiAqIEV4dGVuZHMgR01hcHMgdG8gYmluZCBhbmQgdHJpZ2dlciBldmVudHMuXG4gKiBAbW9kdWxlIEV2ZW50c1xuICovXG5cbi8qKlxuICogQ29sbGVjdGlvbiBvZiBjdXN0b20gZXZlbnRzIHRoYXQgY2FuIGJlIHJlZ2lzdGVyZWQgYW5kIGZpcmVkLlxuICpcbiAqIEB0eXBlIHthcnJheX1cbiAqL1xuR01hcHMuY3VzdG9tRXZlbnRzID0gWydtYXJrZXJfYWRkZWQnLCAnbWFya2VyX3JlbW92ZWQnLCAncG9seWxpbmVfYWRkZWQnLCAncG9seWxpbmVfcmVtb3ZlZCcsICdwb2x5Z29uX2FkZGVkJywgJ3BvbHlnb25fcmVtb3ZlZCcsICdsYXllcl9hZGRlZCcsICdsYXllcl9yZW1vdmVkJywgJ292ZXJsYXlfbWFwX3R5cGVfYWRkZWQnLCAnb3ZlcmxheV9tYXBfdHlwZV9yZW1vdmVkJywgJ292ZXJsYXlfYWRkZWQnLCAnb3ZlcmxheV9yZW1vdmVkJywgJ2dlb2xvY2F0ZWQnLCAnZ2VvbG9jYXRpb25fZmFpbGVkJ107XG5cbi8qKlxuICogQWRkIGFuIGV2ZW50IChuYXRpdmUgb3IgY3VzdG9tKSB0byBhbiBvYmplY3QuXG4gKiBAZnVuY3Rpb24gb25cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50LiBJdCBjYW4gYmUgYW55IG9mIHRoZSBuYXRpdmUgZXZlbnRzIGZyb20gR29vZ2xlIE1hcHMsIG9yIHRoZSBvbmVzIGRlc2NyaWJlZCBpbiBgR01hcHMuY3VzdG9tRXZlbnRzYC5cbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXQgLSBUaGUgdGFyZ2V0IG9mIHRoZSBldmVudC4gSXQgY2FuIGJlIGEgbmF0aXZlIG9iamVjdCBmcm9tIEdvb2dsZSBNYXBzLCAoc3VjaCBhcyBhIGdvb2dsZS5tYXBzLk1hcCwgZ29vZ2xlLm1hcHMuTWFya2VyLCBldGMuKSwgb3IgYSBHTWFwcyBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXIgLSBUaGUgaGFuZGxlciAob2Z0ZW4gY2FsbGVkIGxpc3RlbmVyKSBvZiB0aGUgZXZlbnQuIElzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIGV2ZXJ5IHRpbWUgdGhlIGV2ZW50IGlzIGZpcmVkLlxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbkdNYXBzLm9uID0gKGV2ZW50TmFtZSwgb2JqZWN0LCBoYW5kbGVyKSA9PiB7XG4gIGxldCB0YXJnZXQgPSBvYmplY3Q7XG5cbiAgaWYgKEdNYXBzLmN1c3RvbUV2ZW50cy5pbmRleE9mKGV2ZW50TmFtZSkgPT09IC0xKSB7XG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEdNYXBzKSB7XG4gICAgICB0YXJnZXQgPSB0YXJnZXQubWFwO1xuICAgIH1cblxuICAgIHJldHVybiBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcih0YXJnZXQsIGV2ZW50TmFtZSwgaGFuZGxlcik7XG4gIH1cblxuICBjb25zdCByZWdpc3RlcmVkRXZlbnQgPSB7XG4gICAgaGFuZGxlcixcbiAgICBldmVudE5hbWUsXG4gIH07XG5cbiAgdGFyZ2V0LnJlZ2lzdGVyZWRFdmVudHNbZXZlbnROYW1lXSA9IHRhcmdldC5yZWdpc3RlcmVkRXZlbnRzW2V2ZW50TmFtZV0gfHwgW107XG4gIHRhcmdldC5yZWdpc3RlcmVkRXZlbnRzW2V2ZW50TmFtZV0ucHVzaChyZWdpc3RlcmVkRXZlbnQpO1xuXG4gIHJldHVybiByZWdpc3RlcmVkRXZlbnQ7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBldmVudCAobmF0aXZlIG9yIGN1c3RvbSkgdG8gYW4gb2JqZWN0LlxuICogQGZ1bmN0aW9uIG9mZlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnQuIEl0IGNhbiBiZSBhbnkgb2YgdGhlIG5hdGl2ZSBldmVudHMgZnJvbSBHb29nbGUgTWFwcywgb3IgdGhlIG9uZXMgZGVzY3JpYmVkIGluIGBHTWFwcy5jdXN0b21FdmVudHNgLlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldCAtIFRoZSB0YXJnZXQgb2YgdGhlIGV2ZW50LiBJdCBjYW4gYmUgYSBuYXRpdmUgb2JqZWN0IGZyb20gR29vZ2xlIE1hcHMsIChzdWNoIGFzIGEgZ29vZ2xlLm1hcHMuTWFwLCBnb29nbGUubWFwcy5NYXJrZXIsIGV0Yy4pLCBvciBhIEdNYXBzIGluc3RhbmNlLlxuICovXG5HTWFwcy5vZmYgPSAoZXZlbnROYW1lLCBvYmplY3QpID0+IHtcbiAgbGV0IHRhcmdldCA9IG9iamVjdDtcblxuICBpZiAoR01hcHMuY3VzdG9tRXZlbnRzLmluZGV4T2YoZXZlbnROYW1lKSA9PT0gLTEpIHtcbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgR01hcHMpIHtcbiAgICAgIHRhcmdldCA9IHRhcmdldC5tYXA7XG4gICAgfVxuXG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQuY2xlYXJMaXN0ZW5lcnModGFyZ2V0LCBldmVudE5hbWUpO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldC5yZWdpc3RlcmVkRXZlbnRzW2V2ZW50TmFtZV0gPSBbXTtcbiAgfVxufTtcblxuLyoqXG4gKiBBZGQgYSBuYXRpdmUgZXZlbnQgdGhhdCB3aWxsIGJlIHJlbW92ZWQgZnJvbSB0aGUgdGFyZ2V0IGFmdGVyIGl0IGhhcyBiZWVuIGV4ZWN1dGVkIG9uY2UuXG4gKiBAZnVuY3Rpb24gb25jZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnQuIEl0IGhhcyB0byBiZSBhbnkgb2YgdGhlIG5hdGl2ZSBldmVudHMgZnJvbSBHb29nbGUgTWFwcy5cbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXQgLSBUaGUgdGFyZ2V0IG9mIHRoZSBldmVudC4gSXQgaGFzIHRvIGJlIGEgbmF0aXZlIG9iamVjdCBmcm9tIEdvb2dsZSBNYXBzLCBzdWNoIGFzIGEgZ29vZ2xlLm1hcHMuTWFwLCBnb29nbGUubWFwcy5NYXJrZXIsIGV0Yy5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXIgLSBUaGUgaGFuZGxlciAob2Z0ZW4gY2FsbGVkIGxpc3RlbmVyKSBvZiB0aGUgZXZlbnQuIElzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGV2ZW50IGlzIGZpcmVkIHRoZSBmaXJzdCB0aW1lLlxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbkdNYXBzLm9uY2UgPSAoZXZlbnROYW1lLCBvYmplY3QsIGhhbmRsZXIpID0+IHtcbiAgbGV0IHRhcmdldCA9IG9iamVjdDtcblxuICBpZiAoR01hcHMuY3VzdG9tRXZlbnRzLmluZGV4T2YoZXZlbnROYW1lKSA9PT0gLTEpIHtcbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgR01hcHMpIHtcbiAgICAgIHRhcmdldCA9IHRhcmdldC5tYXA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyT25jZSh0YXJnZXQsIGV2ZW50TmFtZSwgaGFuZGxlcik7XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufTtcblxuLyoqXG4gKiBUcmlnZ2VyIGFuIGV2ZW50IChuYXRpdmUgb3IgY3VzdG9tKSBhbmQgZXhlY3V0ZSBhbGwgdGhlIGhhbmRsZXJzIHJlZ2lzdGVyZWQgcHJldmlvdXNseS5cbiAqIEBmdW5jdGlvbiBmaXJlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudC4gSXQgY2FuIGJlIGFueSBvZiB0aGUgbmF0aXZlIGV2ZW50cyBmcm9tIEdvb2dsZSBNYXBzLCBvciB0aGUgb25lcyBkZXNjcmliZWQgaW4gYEdNYXBzLmN1c3RvbUV2ZW50c2AuXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0IC0gVGhlIHRhcmdldCBvZiB0aGUgZXZlbnQuIEl0IGNhbiBiZSBhIG5hdGl2ZSBvYmplY3QgZnJvbSBHb29nbGUgTWFwcywgKHN1Y2ggYXMgYSBnb29nbGUubWFwcy5NYXAsIGdvb2dsZS5tYXBzLk1hcmtlciwgZXRjLiksIG9yIGEgR01hcHMgaW5zdGFuY2UuXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCAtIFRoZSBjb250ZXh0IGZvciB0aGUgZXZlbnQgaGFuZGxlciAocmVwcmVzZW50ZWQgYnkgYHRoaXNgIGtleXdvcmQgaW5zaWRlIHRoZSBoYW5kbGVyKS5cbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5HTWFwcy5maXJlID0gKGV2ZW50TmFtZSwgb2JqZWN0LCBjb250ZXh0KSA9PiB7XG4gIGlmIChHTWFwcy5jdXN0b21FdmVudHMuaW5kZXhPZihldmVudE5hbWUpID09PSAtMSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGNvbnN0IGV2ZW50QXJndW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGFyZ3VtZW50cykuc2xpY2UoMik7XG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQudHJpZ2dlcihvYmplY3QsIGV2ZW50TmFtZSwgZXZlbnRBcmd1bWVudHMpO1xuICB9IGVsc2UgaWYgKGV2ZW50TmFtZSBpbiBjb250ZXh0LnJlZ2lzdGVyZWRFdmVudHMpIHtcbiAgICBjb250ZXh0LnJlZ2lzdGVyZWRFdmVudHNbZXZlbnROYW1lXS5mb3JFYWNoKHJlZ2lzdGVyZWRFdmVudCA9PlxuICAgICAgcmVnaXN0ZXJlZEV2ZW50LmhhbmRsZXIuY2FsbChjb250ZXh0LCBvYmplY3QpXG4gICAgKTtcbiAgfVxufTtcblxuR01hcHMucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gb24oZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gIHJldHVybiBHTWFwcy5vbihldmVudE5hbWUsIHRoaXMsIGhhbmRsZXIpO1xufTtcblxuR01hcHMucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uIG9mZihldmVudE5hbWUpIHtcbiAgR01hcHMub2ZmKGV2ZW50TmFtZSwgdGhpcyk7XG59O1xuXG5HTWFwcy5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UoZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gIHJldHVybiBHTWFwcy5vbmNlKGV2ZW50TmFtZSwgdGhpcywgaGFuZGxlcik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHTWFwcztcbiIsImltcG9ydCBHTWFwcywgeyBsYXRMbmdGcm9tQXJndW1lbnRzIH0gZnJvbSAnLi9jb3JlJztcbmltcG9ydCAnLi9wb2x5ZmlsbHMnO1xuXG4vKipcbiAqIEV4dGVuZHMgR01hcHMgdG8gdXNlIGdlb2ZlbmNlcy5cbiAqIEBtb2R1bGUgR2VvZmVuY2VzXG4gKi9cblxuLyoqXG4gKiBDaGVjayBpZiBhIGNvb3JkaW5hdGUgaXMgaW5zaWRlIG9yIG5vdCBhIGdlb2ZlbmNlLlxuICogQGZ1bmN0aW9uIGNoZWNrR2VvZmVuY2VcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gbGF0TG5nIC0gQSBMYXRMbmdMaXRlcmFsIG9iamVjdCAoYSBwbGFpbiBvYmplY3Qgd2l0aCBgbGF0YCBhbmQgYGxuZ2AgcHJvcGVydGllcykuXG4gKiBAcGFyYW0ge29iamVjdH0gZmVuY2UgLSBBIGZlbmNlIG9iamVjdCwgd2hpY2ggY2FuIGJlIGFuIGluc3RhbmNlIG9mIGBnb29nbGUubWFwcy5Qb2x5Z29uYCwgYGdvb2dsZS5tYXBzLkNpcmNsZWAsIGBnb29nbGUubWFwcy5SZWN0YW5nbGVgIG9yIGBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHNgLlxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBJcyBgdHJ1ZWAgaWYgdGhlIGNvb3JkaW5hdGUgaXMgaW5zaWRlIHRoZSBmZW5jZSwgYW5kIGBmYWxzZWAgaWYgaXMgbm90LlxuICovXG5HTWFwcy5wcm90b3R5cGUuY2hlY2tHZW9mZW5jZSA9IGZ1bmN0aW9uIGNoZWNrR2VvZmVuY2UoLi4uYXJncykge1xuICBjb25zdCBsYWdMbmcgPSBsYXRMbmdGcm9tQXJndW1lbnRzKC4uLmFyZ3MpO1xuICBjb25zdCBmZW5jZSA9IGFyZ3MucG9wKCk7XG5cbiAgcmV0dXJuIGZlbmNlLmNvbnRhaW5zTGF0TG5nKGxhZ0xuZyk7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGEgbWFya2VyJ3MgcG9zaXRpb24gaXMgaW5zaWRlIG9yIG5vdCBhbnkgb2YgaXRzIGdlb2ZlbmNlcy4gSXQgd2lsbCB0cmlnZ2VyIHRoZSBgb3V0c2lkZUNhbGxiYWNrYCBmdW5jdGlvbiBmb3IgZXZlcnkgZmVuY2UgdGhhdCBjb250YWlucyB0aGUgbWFya2VyJ3MgcG9zaXRpb24uXG4gKiBAZnVuY3Rpb24gY2hlY2tNYXJrZXJHZW9mZW5jZVxuICpcbiAqIEBwYXJhbSB7Z29vZ2xlLm1hcHMuTWFya2VyfSBtYXJrZXIgLSBBIG1hcmtlciBhZGRlZCB3aXRoIGBHTWFwcyNhZGRNYXJrZXJgLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gb3V0c2lkZUNhbGxiYWNrIC0gQSBmdW5jdGlvbiB0aGF0IHdpbGwgcmVjZWl2ZSB0d28gYXJndW1lbnRzOiB0aGUgYG1hcmtlcmAgYW5kIHRoZSBjdXJyZW50IGZlbmNlLlxuICovXG5HTWFwcy5wcm90b3R5cGUuY2hlY2tNYXJrZXJHZW9mZW5jZSA9IGZ1bmN0aW9uIGNoZWNrTWFya2VyR2VvZmVuY2UobWFya2VyLCBvdXRzaWRlQ2FsbGJhY2spIHtcbiAgaWYgKG1hcmtlci5mZW5jZXMpIHtcbiAgICBtYXJrZXIuZmVuY2VzLmZvckVhY2goKGZlbmNlKSA9PiB7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IG1hcmtlci5nZXRQb3NpdGlvbigpO1xuXG4gICAgICBpZiAoIXRoaXMuY2hlY2tHZW9mZW5jZShwb3NpdGlvbiwgZmVuY2UpKSB7XG4gICAgICAgIG91dHNpZGVDYWxsYmFjayhtYXJrZXIsIGZlbmNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgR01hcHM7XG4iLCJpbXBvcnQgR01hcHMsIHsgc2V0dXBFdmVudHMsIGFycmF5VG9MYXRMbmcsIGZsYXR0ZW5BcnJheSB9IGZyb20gJy4vY29yZSc7XG5pbXBvcnQgJy4vZXZlbnRzJztcblxuLyoqXG4gKiBFeHRlbmRzIEdNYXBzIHRvIHVzZSBwb2x5bGluZXMgYW5kIHBvbHlnb25zLlxuICogQG1vZHVsZSBHZW9tZXRyeVxuICovXG5cbmNvbnN0IEVWRU5UUyA9IFsnY2xpY2snLCAnZGJsY2xpY2snLCAnbW91c2Vkb3duJywgJ21vdXNlbW92ZScsICdtb3VzZW91dCcsICdtb3VzZW92ZXInLCAnbW91c2V1cCcsICdyaWdodGNsaWNrJ107XG5cbi8qKlxuICogRHJhdyBhIHBvbHlsaW5lIGluIHRoZSBNYXAgYW5kIGFkZCBpdCB0byB0aGUgcG9seWxpbmVzIGNvbGxlY3Rpb24uIFRoaXMgbWV0aG9kIGFsc28gZmlyZXMgYSBgcG9seWxpbmVfYWRkZWRgIGV2ZW50LlxuICogQGZ1bmN0aW9uIGRyYXdQb2x5bGluZVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBvYmplY3Qgc2hvdWxkIGNvbnRhaW46XG4gKiBAcGFyYW0ge2FycmF5fSBvcHRpb25zLnBhdGggLSBDb2xsZWN0aW9uIG9mIGNvb3JkaW5hdGVzICh3aGljaCBjYW4gYmUgZWl0aGVyIGFuIGFycmF5IFtsYXQsIGxuZ10gb3IgYSBnb29nbGUubWFwcy5MYXRMbmcgb2JqZWN0KS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnN0cm9rZUNvbG9yIC0gQ29sb3Igb2YgdGhlIHBvbHlsaW5lLiBDYW4gYmUgaGV4YWRlY2ltYWwgb3IgQ1NTIG5hbWUuXG4gKiBAcGFyYW0ge2Zsb2F0fSBvcHRpb25zLnN0cm9rZU9wYWNpdHkgLSBPcGFjaXR5IG9mIHRoZSBwb2x5bGluZSBmcm9tIDAuMCB0byAxLjAuXG4gKiBAcGFyYW0ge2ludGVnZXJ9IG9wdGlvbnMuc3Ryb2tlV2VpZ2h0IC0gUG9seWxpbmUgd2lkdGggaW4gcGl4ZWxzLlxuICpcbiAqIEBzZWUgYG9wdGlvbnNgIGFsc28gYWNjZXB0cyBhbnkgb3B0aW9uIGRlZmluZWQgaW4gdGhlIFtvZmZpY2lhbCBkb2N1bWVudGF0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjUG9seWxpbmVPcHRpb25zKSBhbmQgYW55IGV2ZW50IGRlZmluZWQgaW4gdGhlIFtcIkV2ZW50c1wiIHNlY3Rpb25dKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNQb2x5bGluZSkuXG4gKlxuICogQHJldHVybnMge2dvb2dsZS5tYXBzLlBvbHlsaW5lfVxuICovXG5HTWFwcy5wcm90b3R5cGUuZHJhd1BvbHlsaW5lID0gZnVuY3Rpb24gZHJhd1BvbHlsaW5lKGJhc2VPcHRpb25zKSB7XG4gIGNvbnN0IHsgaWNvbnMsIHN0cm9rZUNvbG9yLCBzdHJva2VPcGFjaXR5LCBzdHJva2VXZWlnaHQsIGdlb2Rlc2ljLCBjbGlja2FibGUgPSB0cnVlLCBlZGl0YWJsZSA9IGZhbHNlLCB2aXNpYmxlID0gdHJ1ZSwgekluZGV4LCAuLi5vcHRpb25zIH0gPSBiYXNlT3B0aW9ucztcbiAgbGV0IHBhdGggPSBbXTtcblxuICBpZiAob3B0aW9ucy5wYXRoLmxlbmd0aCkge1xuICAgIGlmIChvcHRpb25zLnBhdGhbMF1bMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcGF0aCA9IFsuLi5vcHRpb25zLnBhdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXRoID0gb3B0aW9ucy5wYXRoLm1hcChsYXRMbmcgPT5cbiAgICAgICAgbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsYXRMbmdbMF0sIGxhdExuZ1sxXSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcG9seWxpbmVPcHRpb25zID0ge1xuICAgIC4uLm9wdGlvbnMsXG4gICAgbWFwOiB0aGlzLm1hcCxcbiAgICBwYXRoLFxuICAgIHN0cm9rZUNvbG9yLFxuICAgIHN0cm9rZU9wYWNpdHksXG4gICAgc3Ryb2tlV2VpZ2h0LFxuICAgIGdlb2Rlc2ljLFxuICAgIHZpc2libGUsXG4gICAgY2xpY2thYmxlLFxuICAgIGVkaXRhYmxlLFxuICAgIGljb25zLFxuICAgIHpJbmRleCxcbiAgfTtcblxuICBjb25zdCBwb2x5bGluZSA9IG5ldyBnb29nbGUubWFwcy5Qb2x5bGluZShwb2x5bGluZU9wdGlvbnMpO1xuXG4gIHNldHVwRXZlbnRzKHsgZXZlbnRzOiBFVkVOVFMsIG9iamVjdDogcG9seWxpbmUsIGluc3RhbmNlOiB0aGlzLCBoYW5kbGVyczogb3B0aW9ucywgfSk7XG5cbiAgdGhpcy5wb2x5bGluZXMucHVzaChwb2x5bGluZSk7XG5cbiAgR01hcHMuZmlyZSgncG9seWxpbmVfYWRkZWQnLCBwb2x5bGluZSwgdGhpcyk7XG5cbiAgcmV0dXJuIHBvbHlsaW5lO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYSBwb2x5bGluZSBmcm9tIHRoZSBtYXAgYW5kIGZyb20gdGhlIHBvbHlsaW5lcyBjb2xsZWN0aW9uLiBUaGlzIG1ldGhvZCBhbHNvIGZpcmVzIGEgYHBvbHlsaW5lX3JlbW92ZWRgIGV2ZW50LlxuICogQGZ1bmN0aW9uIHJlbW92ZVBvbHlsaW5lXG4gKlxuICogQHBhcmFtIHtnb29nbGUubWFwcy5Qb2x5bGluZX0gcG9seWxpbmUgLSBUaGUgcG9seWxpbmUgdG8gYmUgcmVtb3ZlZC5cbiAqL1xuR01hcHMucHJvdG90eXBlLnJlbW92ZVBvbHlsaW5lID0gZnVuY3Rpb24gcmVtb3ZlUG9seWxpbmUocG9seWxpbmUpIHtcbiAgY29uc3QgcG9seWxpbmVJbmRleCA9IHRoaXMucG9seWxpbmVzLmluZGV4T2YocG9seWxpbmUpO1xuXG4gIGlmIChwb2x5bGluZUluZGV4ID49IDApIHtcbiAgICBwb2x5bGluZS5zZXRNYXAobnVsbCk7XG4gICAgdGhpcy5wb2x5bGluZXMuc3BsaWNlKHBvbHlsaW5lSW5kZXgsIDEpO1xuXG4gICAgR01hcHMuZmlyZSgncG9seWxpbmVfcmVtb3ZlZCcsIHBvbHlsaW5lLCB0aGlzKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZW1vdmUgYWxsIHRoZSBwb2x5bGluZXMgZnJvbSB0aGUgbWFwIGFuZCBjbGVhciB0aGUgcG9seWxpbmVzIGNvbGxlY3Rpb24uIFRoaXMgbWV0aG9kIGRvZXMgbm90IGZpcmUgYSBgcG9seWxpbmVfcmVtb3ZlZGAgZXZlbnQuXG4gKiBAZnVuY3Rpb24gcmVtb3ZlUG9seWxpbmVzXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5yZW1vdmVQb2x5bGluZXMgPSBmdW5jdGlvbiByZW1vdmVQb2x5bGluZXMoKSB7XG4gIHRoaXMucG9seWxpbmVzLmZvckVhY2gocG9seWxpbmUgPT4gcG9seWxpbmUuc2V0TWFwKG51bGwpKTtcblxuICB0aGlzLnBvbHlsaW5lcyA9IFtdO1xufTtcblxuLyoqXG4gKiBEcmF3IGEgY2lyY2xlIGluIHRoZSBNYXAgYW5kIGl0IHRvIHRoZSBwb2x5Z29ucyBjb2xsZWN0aW9uLlxuICogQGZ1bmN0aW9uIGRyYXdDaXJjbGVcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRoZSBgb3B0aW9uc2Agb2JqZWN0IHNob3VsZCBjb250YWluOlxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMubGF0aXR1ZGUgLSBMYXRpdHVkZSBvZiB0aGUgY2VudGVyLiBJZiBgbGF0aXR1ZGVgIGFuZCBgbG9uZ2l0dWRlYCBhcmUgc2V0LCBgY2VudGVyYGlzIGlnbm9yZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5sb25naXR1ZGUgLSBMb25naXR1ZGUgb2YgdGhlIGNlbnRlci4gSWYgYGxhdGl0dWRlYCBhbmQgYGxvbmdpdHVkZWAgYXJlIHNldCwgYGNlbnRlcmBpcyBpZ25vcmVkLlxuICogQHBhcmFtIHtnb29nbGUubWFwcy5MYXRMbmd9IG9wdGlvbnMuY2VudGVyIC0gQSBgZ29vZ2xlLm1hcHMuTGF0TG5nYCBjb29yZGluYXRlIGluZGljYXRlIHRoZSBjZW50ZXIuIElmIHNldCwgYGxhdGl0dWRlYCBhbmQgYGxvbmdpdHVkZWAgYXJlIGlnbm9yZWQuXG4gKlxuICogQHNlZSBgb3B0aW9uc2AgYWxzbyBhY2NlcHRzIGFueSBvcHRpb24gZGVmaW5lZCBpbiB0aGUgW29mZmljaWFsIGRvY3VtZW50YXRpb25dKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNDaXJjbGVPcHRpb25zKSBhbmQgYW55IGV2ZW50IGRlZmluZWQgaW4gdGhlIFtcIkV2ZW50c1wiIHNlY3Rpb25dKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNDaXJjbGUpLlxuICpcbiAqIEByZXR1cm5zIHtnb29nbGUubWFwcy5DaXJjbGV9XG4gKi9cbkdNYXBzLnByb3RvdHlwZS5kcmF3Q2lyY2xlID0gZnVuY3Rpb24gZHJhd0NpcmNsZShiYXNlT3B0aW9ucykge1xuICBjb25zdCB7IGxhdCwgbGF0aXR1ZGUgPSBsYXQsIGxuZywgbG9uZ2l0dWRlID0gbG5nLCAuLi5vcHRpb25zIH0gPSBiYXNlT3B0aW9ucztcbiAgY29uc3QgeyBjZW50ZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGxhdGl0dWRlLCBsb25naXR1ZGUpLCB9ID0gb3B0aW9ucztcbiAgY29uc3QgcG9seWdvbk9wdGlvbnMgPSB7XG4gICAgLi4ub3B0aW9ucyxcbiAgICBtYXA6IHRoaXMubWFwLFxuICAgIGNlbnRlcixcbiAgfTtcblxuICBjb25zdCBwb2x5Z29uID0gbmV3IGdvb2dsZS5tYXBzLkNpcmNsZShwb2x5Z29uT3B0aW9ucyk7XG5cbiAgc2V0dXBFdmVudHMoeyBldmVudHM6IEVWRU5UUywgb2JqZWN0OiBwb2x5Z29uLCBpbnN0YW5jZTogdGhpcywgaGFuZGxlcnM6IG9wdGlvbnMsIH0pO1xuXG4gIHRoaXMucG9seWdvbnMucHVzaChwb2x5Z29uKTtcblxuICByZXR1cm4gcG9seWdvbjtcbn07XG5cbi8qKlxuICogRHJhdyBhIHJlY3RhbmdsZSBpbiB0aGUgTWFwIGFuZCBpdCB0byB0aGUgcG9seWdvbnMgY29sbGVjdGlvbi5cbiAqIEBmdW5jdGlvbiBkcmF3UmVjdGFuZ2xlXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgYG9wdGlvbnNgIG9iamVjdCBzaG91bGQgY29udGFpbjpcbiAqIEBwYXJhbSB7YXJyYXl9IG9wdGlvbnMuYm91bmRzIC0gQmktZGltZW5zaW9uYWwgYXJyYXkgb2YgbGF0aXR1ZGVzIGFuZCBsb25naXR1ZGVzLlxuICpcbiAqIEBzZWUgYG9wdGlvbnNgIGFsc28gYWNjZXB0cyBhbnkgb3B0aW9uIGRlZmluZWQgaW4gdGhlIFtvZmZpY2lhbCBkb2N1bWVudGF0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjUmVjdGFuZ2xlT3B0aW9ucykgYW5kIGFueSBldmVudCBkZWZpbmVkIGluIHRoZSBbXCJFdmVudHNcIiBzZWN0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjUmVjdGFuZ2xlKS5cbiAqXG4gKiBAcmV0dXJucyB7Z29vZ2xlLm1hcHMuUmVjdGFuZ2xlfVxuICovXG5HTWFwcy5wcm90b3R5cGUuZHJhd1JlY3RhbmdsZSA9IGZ1bmN0aW9uIGRyYXdSZWN0YW5nbGUoYmFzZU9wdGlvbnMpIHtcbiAgY29uc3QgeyBib3VuZHMsIC4uLm9wdGlvbnMgfSA9IGJhc2VPcHRpb25zO1xuXG4gIGNvbnN0IGxhdExuZ0JvdW5kcyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMoXG4gICAgbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhib3VuZHNbMF1bMF0sIGJvdW5kc1swXVsxXSksXG4gICAgbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhib3VuZHNbMV1bMF0sIGJvdW5kc1sxXVsxXSlcbiAgKTtcblxuICBjb25zdCBwb2x5Z29uT3B0aW9ucyA9IHtcbiAgICAuLi5vcHRpb25zLFxuICAgIGJvdW5kczogbGF0TG5nQm91bmRzLFxuICAgIG1hcDogdGhpcy5tYXAsXG4gIH07XG5cbiAgY29uc3QgcG9seWdvbiA9IG5ldyBnb29nbGUubWFwcy5SZWN0YW5nbGUocG9seWdvbk9wdGlvbnMpO1xuXG4gIHNldHVwRXZlbnRzKHsgZXZlbnRzOiBFVkVOVFMsIG9iamVjdDogcG9seWdvbiwgaW5zdGFuY2U6IHRoaXMsIGhhbmRsZXJzOiBvcHRpb25zLCB9KTtcblxuICB0aGlzLnBvbHlnb25zLnB1c2gocG9seWdvbik7XG5cbiAgcmV0dXJuIHBvbHlnb247XG59O1xuXG4vKipcbiAqIERyYXcgYSBwb2x5Z29uIGluIHRoZSBNYXAgYW5kIGl0IHRvIHRoZSBwb2x5Z29ucyBjb2xsZWN0aW9uLlxuICogQGZ1bmN0aW9uIGRyYXdQb2x5Z29uXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgYG9wdGlvbnNgIG9iamVjdCBzaG91bGQgY29udGFpbjpcbiAqIEBwYXJhbSB7YXJyYXl9IG9wdGlvbnMucGF0aHMgLSBCaS1kaW1lbnNpb25hbCBhcnJheSBvZiBsYXRpdHVkZXMgYW5kIGxvbmdpdHVkZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMudXNlR2VvSlNPTiAtIElmIHNldCwgYWxsb3dzIGBwYXRoc2AgdG8gdXNlIEdlb0pTT04gZm9ybWF0LlxuICpcbiAqIEBzZWUgYG9wdGlvbnNgIGFsc28gYWNjZXB0cyBhbnkgb3B0aW9uIGRlZmluZWQgaW4gdGhlIFtvZmZpY2lhbCBkb2N1bWVudGF0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjUG9seWdvbk9wdGlvbnMpIGFuZCBhbnkgZXZlbnQgZGVmaW5lZCBpbiB0aGUgW1wiRXZlbnRzXCIgc2VjdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI1BvbHlnb24pLlxuICpcbiAqIEByZXR1cm5zIHtnb29nbGUubWFwcy5Qb2x5Z29ufVxuICovXG5HTWFwcy5wcm90b3R5cGUuZHJhd1BvbHlnb24gPSBmdW5jdGlvbiBkcmF3UG9seWdvbihiYXNlT3B0aW9ucykge1xuICBjb25zdCB7IHVzZUdlb0pTT04gPSBmYWxzZSwgLi4ub3B0aW9ucyB9ID0gYmFzZU9wdGlvbnM7XG5cbiAgY29uc3QgYmFzZVBhdGhzID0gdXNlR2VvSlNPTiA/IG9wdGlvbnMucGF0aHMgOiBbb3B0aW9ucy5wYXRocy5zbGljZSgwKV07XG4gIGxldCBwYXRocyA9IFtdO1xuXG4gIGlmIChiYXNlUGF0aHMubGVuZ3RoKSB7XG4gICAgaWYgKGJhc2VQYXRoc1swXS5sZW5ndGgpIHtcbiAgICAgIHBhdGhzID0gZmxhdHRlbkFycmF5KFxuICAgICAgICBiYXNlUGF0aHMubWFwKHBhdGggPT5cbiAgICAgICAgICBhcnJheVRvTGF0TG5nKHBhdGgsIHVzZUdlb0pTT04pXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcG9seWdvbk9wdGlvbnMgPSB7XG4gICAgLi4ub3B0aW9ucyxcbiAgICBtYXA6IHRoaXMubWFwLFxuICAgIHBhdGhzLFxuICB9O1xuXG4gIGNvbnN0IHBvbHlnb24gPSBuZXcgZ29vZ2xlLm1hcHMuUG9seWdvbihwb2x5Z29uT3B0aW9ucyk7XG5cbiAgc2V0dXBFdmVudHMoeyBldmVudHM6IEVWRU5UUywgb2JqZWN0OiBwb2x5Z29uLCBpbnN0YW5jZTogdGhpcywgaGFuZGxlcnM6IG9wdGlvbnMsIH0pO1xuXG4gIHRoaXMucG9seWdvbnMucHVzaChwb2x5Z29uKTtcblxuICBHTWFwcy5maXJlKCdwb2x5Z29uX2FkZGVkJywgcG9seWdvbiwgdGhpcyk7XG5cbiAgcmV0dXJuIHBvbHlnb247XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhIHBvbHlnb24gZnJvbSB0aGUgbWFwIGFuZCBmcm9tIHRoZSBwb2x5Z29ucyBjb2xsZWN0aW9uLiBUaGlzIG1ldGhvZCBhbHNvIGZpcmVzIGEgYHBvbHlnb25fcmVtb3ZlZGAgZXZlbnQuXG4gKiBAZnVuY3Rpb24gcmVtb3ZlUG9seWdvblxuICpcbiAqIEBwYXJhbSB7Z29vZ2xlLm1hcHMuUG9seWdvbn0gcG9seWdvbiAtIFRoZSBwb2x5Z29uIHRvIGJlIHJlbW92ZWQuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5yZW1vdmVQb2x5Z29uID0gZnVuY3Rpb24gcmVtb3ZlUG9seWdvbihwb2x5Z29uKSB7XG4gIGNvbnN0IHBvbHlnb25JbmRleCA9IHRoaXMucG9seWdvbnMuaW5kZXhPZihwb2x5Z29uKTtcblxuICBpZiAocG9seWdvbkluZGV4ID49IDApIHtcbiAgICBwb2x5Z29uLnNldE1hcChudWxsKTtcbiAgICB0aGlzLnBvbHlnb25zLnNwbGljZShwb2x5Z29uSW5kZXgsIDEpO1xuXG4gICAgR01hcHMuZmlyZSgncG9seWdvbl9yZW1vdmVkJywgcG9seWdvbiwgdGhpcyk7XG4gIH1cbn07XG5cbi8qKlxuICogUmVtb3ZlIGFsbCB0aGUgcG9seWdvbnMgZnJvbSB0aGUgbWFwIGFuZCBjbGVhciB0aGUgcG9seWdvbnMgY29sbGVjdGlvbi4gVGhpcyBtZXRob2QgZG9lcyBub3QgZmlyZSBhIGBwb2x5Z29uX3JlbW92ZWRgIGV2ZW50LlxuICogQGZ1bmN0aW9uIHJlbW92ZVBvbHlnb25zXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5yZW1vdmVQb2x5Z29ucyA9IGZ1bmN0aW9uIHJlbW92ZVBvbHlnb25zKCkge1xuICB0aGlzLnBvbHlnb25zLmZvckVhY2gocG9seWdvbiA9PiBwb2x5Z29uLnNldE1hcChudWxsKSk7XG5cbiAgdGhpcy5wb2x5Z29ucyA9IFtdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR01hcHM7XG4iLCJpbXBvcnQgR01hcHMgZnJvbSAnLi9jb3JlJztcbmltcG9ydCAnLi9ldmVudHMnO1xuaW1wb3J0ICcuL2NvbnRyb2xzJztcbmltcG9ydCAnLi9nZW9mZW5jZXMnO1xuaW1wb3J0ICcuL21hcmtlcnMnO1xuaW1wb3J0ICcuL292ZXJsYXlzJztcbmltcG9ydCAnLi9nZW9tZXRyeSc7XG5pbXBvcnQgJy4vbGF5ZXJzJztcbmltcG9ydCAnLi9yb3V0ZXMnO1xuaW1wb3J0ICcuL3N0YXRpYyc7XG5pbXBvcnQgJy4vbWFwX3R5cGVzJztcbmltcG9ydCAnLi9zdHlsZXMnO1xuaW1wb3J0ICcuL3N0cmVldHZpZXcnO1xuaW1wb3J0ICcuL3BvbHlmaWxscyc7XG5pbXBvcnQgJy4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBHTWFwcztcbiIsImltcG9ydCBHTWFwcywgeyBzZXR1cEV2ZW50TGlzdGVuZXIgfSBmcm9tICcuL2NvcmUnO1xuaW1wb3J0ICcuL2V2ZW50cyc7XG5cbi8qKlxuICogRXh0ZW5kcyBHTWFwcyB0byB1c2UgcG9seWxpbmVzIGFuZCBwb2x5Z29ucy5cbiAqIEBtb2R1bGUgTGF5ZXJzXG4gKi9cblxuR01hcHMucHJvdG90eXBlLmdldEZyb21GdXNpb25UYWJsZXMgPSBmdW5jdGlvbiBnZXRGcm9tRnVzaW9uVGFibGVzKGJhc2VPcHRpb25zKSB7XG4gIGNvbnN0IHsgZXZlbnRzID0ge30sIC4uLm9wdGlvbnMgfSA9IGJhc2VPcHRpb25zO1xuXG4gIGNvbnN0IGxheWVyID0gbmV3IGdvb2dsZS5tYXBzLkZ1c2lvblRhYmxlc0xheWVyKG9wdGlvbnMpO1xuXG4gIE9iamVjdC5rZXlzKGV2ZW50cykuZm9yRWFjaChldmVudE5hbWUgPT5cbiAgICBzZXR1cEV2ZW50TGlzdGVuZXIoe1xuICAgICAgb2JqZWN0OiBsYXllcixcbiAgICAgIGV2ZW50TmFtZSxcbiAgICAgIGluc3RhbmNlOiB0aGlzLFxuICAgICAgaGFuZGxlcjogZXZlbnRzW2V2ZW50TmFtZV0sXG4gICAgfSlcbiAgKTtcblxuICB0aGlzLmxheWVycy5wdXNoKGxheWVyKTtcblxuICByZXR1cm4gbGF5ZXI7XG59O1xuXG4vKipcbiAqIERyYXcgYSBGdXNpb25UYWJsZXMgbGF5ZXIgaW4gdGhlIE1hcC5cbiAqIEBmdW5jdGlvbiBsb2FkRnJvbUZ1c2lvblRhYmxlc1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBhY2NlcHRzIGFueSBvcHRpb24gZGVmaW5lZCBpbiB0aGUgW29mZmljaWFsIGRvY3VtZW50YXRpb25dKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNGdXNpb25UYWJsZXNMYXllck9wdGlvbnMpLlxuICpcbiAqIEBzZWUgYG9wdGlvbnNgIGFsc28gYWNjZXB0cyBhbiBgZXZlbnRzYCBvYmplY3QsIHdoaWNoIGFjY2VwdHMgb25seSBgY2xpY2tgLlxuICpcbiAqIEByZXR1cm5zIHtnb29nbGUubWFwcy5GdXNpb25UYWJsZXNMYXllcn1cbiAqL1xuR01hcHMucHJvdG90eXBlLmxvYWRGcm9tRnVzaW9uVGFibGVzID0gZnVuY3Rpb24gbG9hZEZyb21GdXNpb25UYWJsZXMob3B0aW9ucykge1xuICBjb25zdCBsYXllciA9IHRoaXMuZ2V0RnJvbUZ1c2lvblRhYmxlcyhvcHRpb25zKTtcbiAgbGF5ZXIuc2V0TWFwKHRoaXMubWFwKTtcblxuICByZXR1cm4gbGF5ZXI7XG59O1xuXG5HTWFwcy5wcm90b3R5cGUuZ2V0RnJvbUtNTCA9IGZ1bmN0aW9uIGdldEZyb21LTUwoYmFzZU9wdGlvbnMpIHtcbiAgY29uc3QgeyB1cmwsIGV2ZW50cywgLi4ub3B0aW9ucyB9ID0gYmFzZU9wdGlvbnM7XG5cbiAgY29uc3QgbGF5ZXIgPSBuZXcgZ29vZ2xlLm1hcHMuS21sTGF5ZXIodXJsLCBvcHRpb25zKTtcblxuICBPYmplY3Qua2V5cyhldmVudHMpLmZvckVhY2goZXZlbnROYW1lID0+XG4gICAgc2V0dXBFdmVudExpc3RlbmVyKHtcbiAgICAgIG9iamVjdDogbGF5ZXIsXG4gICAgICBldmVudE5hbWUsXG4gICAgICBpbnN0YW5jZTogdGhpcyxcbiAgICAgIGhhbmRsZXI6IGV2ZW50c1tldmVudE5hbWVdLFxuICAgIH0pXG4gICk7XG5cbiAgdGhpcy5sYXllcnMucHVzaChsYXllcik7XG5cbiAgcmV0dXJuIGxheWVyO1xufTtcblxuLyoqXG4gKiBEcmF3IGEgS01MIGxheWVyIGluIHRoZSBNYXAuXG4gKiBAZnVuY3Rpb24gbG9hZEZyb21LTUxcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRoZSBgb3B0aW9uc2AgYWNjZXB0cyBhbnkgb3B0aW9uIGRlZmluZWQgaW4gdGhlIFtvZmZpY2lhbCBkb2N1bWVudGF0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjS21sTGF5ZXJPcHRpb25zKS5cbiAqXG4gKiBAc2VlIGBvcHRpb25zYCBhbHNvIGFjY2VwdHMgYW4gYGV2ZW50c2Agb2JqZWN0LCB3aGljaCBhY2NlcHRzIGFsbCBldmVudHMgZGVmaW5lZCBpbiB0aGUgW1wiRXZlbnRzXCIgc2VjdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI0ttbExheWVyKS5cbiAqXG4gKiBAcmV0dXJucyB7Z29vZ2xlLm1hcHMuS21sTGF5ZXJ9XG4gKi9cbkdNYXBzLnByb3RvdHlwZS5sb2FkRnJvbUtNTCA9IGZ1bmN0aW9uIGxvYWRGcm9tS01MKG9wdGlvbnMpIHtcbiAgY29uc3QgbGF5ZXIgPSB0aGlzLmdldEZyb21LTUwob3B0aW9ucyk7XG4gIGxheWVyLnNldE1hcCh0aGlzLm1hcCk7XG5cbiAgcmV0dXJuIGxheWVyO1xufTtcblxuLyoqXG4gKiBEcmF3IGEgbGF5ZXIgaW4gdGhlIE1hcC4gVGhpcyBtZXRob2QgYWxzbyBmaXJlcyBhIGBsYXllcl9hZGRlZGAgZXZlbnQuXG4gKiBAZnVuY3Rpb24gYWRkTGF5ZXJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbGF5ZXJOYW1lIC0gVGhlIG5hbWUgb2YgYSBHb29nbGUgTWFwcyBsYXllciwgd2hpY2ggY2FuIGJlOiBgdHJhZmZpY2AsIGB0cmFuc2l0YCBvciBgYmljeWNsaW5nYC5cbiAqXG4gKiBAcmV0dXJucyB7Z29vZ2xlLm1hcHMuVHJhZmZpY0xheWVyfGdvb2dsZS5tYXBzLlRyYW5zaXRMYXllcnxnb29nbGUubWFwcy5CaWN5Y2xpbmdMYXllcn1cbiAqL1xuR01hcHMucHJvdG90eXBlLmFkZExheWVyID0gZnVuY3Rpb24gYWRkTGF5ZXIobGF5ZXJOYW1lLCBiYXNlT3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHsgZmlsdGVyLCBjbGljaywgc2VhcmNoLCBuZWFyYnlTZWFyY2gsIHJhZGFyU2VhcmNoLCB0ZXh0U2VhcmNoLCAuLi5vcHRpb25zIH0gPSBiYXNlT3B0aW9ucztcbiAgY29uc3QgeyBib3VuZHMsIGtleXdvcmQsIGxvY2F0aW9uLCBuYW1lLCByYWRpdXMsIHJhbmtCeSwgdHlwZXMsIHF1ZXJ5LCB9ID0gb3B0aW9ucztcbiAgbGV0IGxheWVyO1xuXG4gIHN3aXRjaCAobGF5ZXJOYW1lKSB7XG4gICAgY2FzZSAndHJhZmZpYyc6XG4gICAgICBsYXllciA9IG5ldyBnb29nbGUubWFwcy5UcmFmZmljTGF5ZXIoKTtcbiAgICAgIHRoaXMuc2luZ2xlTGF5ZXJzLnRyYWZmaWMgPSBsYXllcjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3RyYW5zaXQnOlxuICAgICAgbGF5ZXIgPSBuZXcgZ29vZ2xlLm1hcHMuVHJhbnNpdExheWVyKCk7XG4gICAgICB0aGlzLnNpbmdsZUxheWVycy50cmFuc2l0ID0gbGF5ZXI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdiaWN5Y2xpbmcnOlxuICAgICAgbGF5ZXIgPSBuZXcgZ29vZ2xlLm1hcHMuQmljeWNsaW5nTGF5ZXIoKTtcbiAgICAgIHRoaXMuc2luZ2xlTGF5ZXJzLmJpY3ljbGluZyA9IGxheWVyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncGxhY2VzJzpcbiAgICAgIGxheWVyID0gbmV3IGdvb2dsZS5tYXBzLnBsYWNlcy5QbGFjZXNTZXJ2aWNlKHRoaXMubWFwKTtcbiAgICAgIHRoaXMuc2luZ2xlTGF5ZXJzLnBsYWNlcyA9IGxheWVyO1xuXG4gICAgICBpZiAoc2VhcmNoIHx8IG5lYXJieVNlYXJjaCB8fCByYWRhclNlYXJjaCkge1xuICAgICAgICBjb25zdCBwbGFjZVNlYXJjaFJlcXVlc3QgPSB7XG4gICAgICAgICAgYm91bmRzLFxuICAgICAgICAgIGtleXdvcmQsXG4gICAgICAgICAgbG9jYXRpb24sXG4gICAgICAgICAgbmFtZSxcbiAgICAgICAgICByYWRpdXMsXG4gICAgICAgICAgcmFua0J5LFxuICAgICAgICAgIHR5cGVzLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChyYWRhclNlYXJjaCkge1xuICAgICAgICAgIGxheWVyLnJhZGFyU2VhcmNoKHBsYWNlU2VhcmNoUmVxdWVzdCwgcmFkYXJTZWFyY2gpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlYXJjaCkge1xuICAgICAgICAgIGxheWVyLnNlYXJjaChwbGFjZVNlYXJjaFJlcXVlc3QsIHNlYXJjaCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmVhcmJ5U2VhcmNoKSB7XG4gICAgICAgICAgbGF5ZXIubmVhcmJ5U2VhcmNoKHBsYWNlU2VhcmNoUmVxdWVzdCwgbmVhcmJ5U2VhcmNoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGV4dFNlYXJjaCkge1xuICAgICAgICBjb25zdCB0ZXh0U2VhcmNoUmVxdWVzdCA9IHtcbiAgICAgICAgICBib3VuZHMsXG4gICAgICAgICAgbG9jYXRpb24sXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgcmFkaXVzLFxuICAgICAgICB9O1xuXG4gICAgICAgIGxheWVyLnRleHRTZWFyY2godGV4dFNlYXJjaFJlcXVlc3QsIHRleHRTZWFyY2gpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgaWYgKGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBsYXllci5zZXRPcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBsYXllci5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbGF5ZXIuc2V0TWFwID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBsYXllci5zZXRNYXAodGhpcy5tYXApO1xuICAgIH1cblxuICAgIEdNYXBzLmZpcmUoJ2xheWVyX2FkZGVkJywgbGF5ZXIsIHRoaXMpO1xuXG4gICAgcmV0dXJuIGxheWVyO1xuICB9XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhIGxheWVyIGZyb20gdGhlIG1hcC4gSWYgdGhlIGxheWVyIGlzIGEgRnVzaW9uVGFibGVzIGxheWVyIG9yIGEgS01MIGxheWVyLCBgcmVtb3ZlTGF5ZXJgIGFsc28gcmVtb3ZlcyB0aGUgbGF5ZXIgZnJvbSB0aGUgbGF5ZXJzIGNvbGxlY3Rpb24gYW5kIGZpcmVzIGEgYGxheWVyX3JlbW92ZWRgIGV2ZW50LlxuICogQGZ1bmN0aW9uIHJlbW92ZUxheWVyXG4gKlxuICogQHBhcmFtIHtnb29nbGUubWFwcy5Qb2x5Z29ufSBwb2x5Z29uIC0gVGhlIHBvbHlnb24gdG8gYmUgcmVtb3ZlZC5cbiAqL1xuR01hcHMucHJvdG90eXBlLnJlbW92ZUxheWVyID0gZnVuY3Rpb24gcmVtb3ZlTGF5ZXIobGF5ZXIpIHtcbiAgaWYgKHR5cGVvZiBsYXllciA9PT0gJ3N0cmluZycgJiYgdGhpcy5zaW5nbGVMYXllcnNbbGF5ZXJdICE9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLnNpbmdsZUxheWVyc1tsYXllcl0uc2V0TWFwKG51bGwpO1xuXG4gICAgZGVsZXRlIHRoaXMuc2luZ2xlTGF5ZXJzW2xheWVyXTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBsYXllckluZGV4ID0gdGhpcy5sYXllcnMuaW5kZXhPZihsYXllcik7XG5cbiAgICBpZiAobGF5ZXJJbmRleCA+PSAwKSB7XG4gICAgICBsYXllci5zZXRNYXAobnVsbCk7XG4gICAgICB0aGlzLmxheWVycy5zcGxpY2UobGF5ZXJJbmRleCwgMSk7XG5cbiAgICAgIEdNYXBzLmZpcmUoJ2xheWVyX3JlbW92ZWQnLCBsYXllciwgdGhpcyk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHTWFwcztcbiIsImltcG9ydCBHTWFwcyBmcm9tICcuL2NvcmUnO1xuaW1wb3J0ICcuL2V2ZW50cyc7XG5cbi8qKlxuICogRXh0ZW5kcyBHTWFwcyB0byB1c2UgY3VzdG9tIE1hcCBUeXBlcy5cbiAqIEBtb2R1bGUgTWFwVHlwZXNcbiAqL1xuXG4vKipcbiAqIERyYXcgYSBjdXN0b20gW3RpbGUtYmFzZWQgbWFwIHR5cGVdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L21hcHR5cGVzI0ltYWdlTWFwVHlwZXMpIGluIHRoZSBNYXAsIHdoaWNoIGNhbiBiZSB1c2VkIHdpdGggdGhlIGJhc2UgbWFwIHR5cGVzIChgaHlicmlkYCwgYHJvYWRtYXBgLCBgc2F0ZWxsaXRlYCBhbmQgYHRlcnJhaW5gKS5cbiAqIEBmdW5jdGlvbiBhZGRNYXBUeXBlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1hcFR5cGVJZCAtIEEgc2ltcGxlIGlkZW50aWZpZXIgZm9yIHRoZSBjdXN0b20gbWFwIHR5cGUuXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRoZSBgb3B0aW9uc2Agb2JqZWN0IHNob3VsZCBjb250YWluOlxuICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5nZXRUaWxlVXJsIC0gQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gVVJMIGZvciB0aWxlLWJhc2VkIGVuZHBvaW50cy4gSXQgcmVjZWl2ZXMgdHdvIGFyZ3VtZW50czpcbiAqICAgKiBgcG9pbnRzYCAoZ29vZ2xlLm1hcHMuUG9pbnQpOiBhIHBvaW50IHdpdGggYHhgIGFuZCBgeWAgKGlzIG5vdCBhIGNvb3JkaW5hdGUpLlxuICogICAqIGB6b29tYCAobnVtYmVyKTogYSB6b29tIGxldmVsLlxuICogQHBhcmFtIHtnb29nbGUubWFwcy5TaXplfSBvcHRpb25zLnRpbGVTaXplIC0gVGhlIHNpemUgb2YgdGhlIHRpbGUuXG4gKlxuICogQHJldHVybnMge2dvb2dsZS5tYXBzLkltYWdlTWFwVHlwZX1cbiAqL1xuR01hcHMucHJvdG90eXBlLmFkZE1hcFR5cGUgPSBmdW5jdGlvbiBhZGRNYXBUeXBlKG1hcFR5cGVJZCwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHsgZ2V0VGlsZVVybCwgdGlsZVNpemUgPSBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSgyNTYsIDI1NiksIH0gPSBvcHRpb25zO1xuXG4gIGlmICh0eXBlb2YgZ2V0VGlsZVVybCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIidnZXRUaWxlVXJsJyBmdW5jdGlvbiByZXF1aXJlZC5cIik7XG4gIH1cblxuICBjb25zdCBtYXBUeXBlID0gbmV3IGdvb2dsZS5tYXBzLkltYWdlTWFwVHlwZSh7IGdldFRpbGVVcmwsIHRpbGVTaXplLCB9KTtcblxuICB0aGlzLm1hcC5tYXBUeXBlcy5zZXQobWFwVHlwZUlkLCBtYXBUeXBlKTtcblxuICByZXR1cm4gbWFwVHlwZTtcbn07XG5cbi8qKlxuICogRHJhdyBhIGN1c3RvbSBbb3ZlcmxheSBtYXAgdHlwZV0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvbWFwdHlwZXMjT3ZlcmxheU1hcFR5cGVzKSBpbiB0aGUgTWFwLiBUaGlzIG1ldGhvZCBhbHNvIGZpcmVzIGFuIGBvdmVybGF5X21hcF90eXBlX2FkZGVkYCBldmVudC5cbiAqIEBmdW5jdGlvbiBhZGRPdmVybGF5TWFwVHlwZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtYXBUeXBlSWQgLSBBIHNpbXBsZSBpZGVudGlmaWVyIGZvciB0aGUgY3VzdG9tIG1hcCB0eXBlLlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgYG9wdGlvbnNgIG9iamVjdCBzaG91bGQgY29udGFpbjpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMuZ2V0VGlsZSAtIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgRE9NIE5vZGUuIEl0IHJlY2VpdmVzIHRocmVlIGFyZ3VtZW50czpcbiAqICAgKiBgcG9pbnRzYCAoZ29vZ2xlLm1hcHMuUG9pbnQpOiBhIHBvaW50IHdpdGggYHhgIGFuZCBgeWAgKGlzIG5vdCBhIGNvb3JkaW5hdGUpLlxuICogICAqIGB6b29tYCAobnVtYmVyKTogYSB6b29tIGxldmVsLlxuICogICAqIGBvd25lckRvY3VtZW50YCAoRG9jdW1lbnQpOiBUaGUgRE9NIGRvY3VtZW50IHRoYXQgd2lsbCBjcmVhdGUgdGhlIG5vZGUuXG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5pbmRleCAtIFRoZSBpbmRleCBmb3IgdGhlIG92ZXJsYXkgbWFwIHR5cGUuIFVzZWQgdG8gc2V0IGRpZmZlcmVudGUgeiBsZXZlbHMgb24gc3RhY2tlZCBvdmVybGF5IG1hcHMuXG4gKiBAcGFyYW0ge2dvb2dsZS5tYXBzLlNpemV9IG9wdGlvbnMudGlsZVNpemUgLSBUaGUgc2l6ZSBvZiB0aGUgdGlsZS5cbiAqXG4gKiBAc2VlIGBvcHRpb25zYCBhbHNvIGFjY2VwdHMgYW55IG9wdGlvbiBkZWZpbmVkIGluIHRoZSBbb2ZmaWNpYWwgZG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI01hcFR5cGUpLlxuICovXG5HTWFwcy5wcm90b3R5cGUuYWRkT3ZlcmxheU1hcFR5cGUgPSBmdW5jdGlvbiBhZGRPdmVybGF5TWFwVHlwZShvcHRpb25zID0ge30pIHtcbiAgY29uc3QgeyBnZXRUaWxlLCBpbmRleCA9IHRoaXMubWFwLm92ZXJsYXlNYXBUeXBlcy5sZW5ndGgsIC4uLm92ZXJsYXlNYXBUeXBlT3B0aW9ucyB9ID0gb3B0aW9ucztcblxuICBpZiAodHlwZW9mIGdldFRpbGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCInZ2V0VGlsZScgZnVuY3Rpb24gcmVxdWlyZWQuXCIpO1xuICB9XG5cbiAgdGhpcy5tYXAub3ZlcmxheU1hcFR5cGVzLmluc2VydEF0KGluZGV4LCB7IC4uLm92ZXJsYXlNYXBUeXBlT3B0aW9ucywgZ2V0VGlsZSwgfSk7XG4gIEdNYXBzLmZpcmUoJ292ZXJsYXlfbWFwX3R5cGVfYWRkZWQnLCB0aGlzLm1hcC5vdmVybGF5TWFwVHlwZXNbaW5kZXhdLCB0aGlzKTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGEgb3ZlcmxheSBtYXAgdHlwZSBmcm9tIHRoZSBtYXAuIFRoaXMgbWV0aG9kIGFsc28gZmlyZXMgYW4gYG92ZXJsYXlfbWFwX3R5cGVfcmVtb3ZlZGAgZXZlbnQuXG4gKiBAZnVuY3Rpb24gcmVtb3ZlT3ZlcmxheU1hcFR5cGVcbiAqXG4gKiBAcGFyYW0ge2dvb2dsZS5tYXBzLlBvbHlsaW5lfSBwb2x5bGluZSAtIFRoZSBwb2x5bGluZSB0byBiZSByZW1vdmVkLlxuICovXG5HTWFwcy5wcm90b3R5cGUucmVtb3ZlT3ZlcmxheU1hcFR5cGUgPSBmdW5jdGlvbiByZW1vdmVPdmVybGF5TWFwVHlwZShpbmRleCkge1xuICBjb25zdCBvdmVybGF5TWFwVHlwZSA9IHRoaXMubWFwLm92ZXJsYXlNYXBUeXBlc1tpbmRleF07XG5cbiAgdGhpcy5tYXAub3ZlcmxheU1hcFR5cGVzLnJlbW92ZUF0KGluZGV4KTtcbiAgR01hcHMuZmlyZSgnb3ZlcmxheV9tYXBfdHlwZV9yZW1vdmVkJywgb3ZlcmxheU1hcFR5cGUsIHRoaXMpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR01hcHM7XG4iLCJpbXBvcnQgR01hcHMsIHsgc2V0dXBFdmVudHMgfSBmcm9tICcuL2NvcmUnO1xuaW1wb3J0ICcuL2V2ZW50cyc7XG5pbXBvcnQgJy4vZ2VvZmVuY2VzJztcblxuLyoqXG4gKiBFeHRlbmRzIEdNYXBzIHRvIHVzZSBtYXJrZXJzLlxuICogQG1vZHVsZSBNYXJrZXJzXG4gKi9cblxuY29uc3QgSU5GT19XSU5ET1dfRVZFTlRTID0gWydjbG9zZWNsaWNrJywgJ2NvbnRlbnRfY2hhbmdlZCcsICdkb21yZWFkeScsICdwb3NpdGlvbl9jaGFuZ2VkJywgJ3ppbmRleF9jaGFuZ2VkJ107XG5jb25zdCBNQVJLRVJfRVZFTlRTID0gWydhbmltYXRpb25fY2hhbmdlZCcsICdjbGlja2FibGVfY2hhbmdlZCcsICdjdXJzb3JfY2hhbmdlZCcsICdkcmFnZ2FibGVfY2hhbmdlZCcsICdmbGF0X2NoYW5nZWQnLCAnaWNvbl9jaGFuZ2VkJywgJ3Bvc2l0aW9uX2NoYW5nZWQnLCAnc2hhZG93X2NoYW5nZWQnLCAnc2hhcGVfY2hhbmdlZCcsICd0aXRsZV9jaGFuZ2VkJywgJ3Zpc2libGVfY2hhbmdlZCcsICd6aW5kZXhfY2hhbmdlZCddO1xuY29uc3QgTUFSS0VSX01PVVNFX0VWRU5UUyA9IFsnZGJsY2xpY2snLCAnZHJhZycsICdkcmFnZW5kJywgJ2RyYWdzdGFydCcsICdtb3VzZWRvd24nLCAnbW91c2VvdXQnLCAnbW91c2VvdmVyJywgJ21vdXNldXAnXTtcblxuR01hcHMucHJvdG90eXBlLmNyZWF0ZU1hcmtlciA9IGZ1bmN0aW9uIGNyZWF0ZU1hcmtlcihiYXNlT3B0aW9ucykge1xuICBjb25zdCBzZWxmID0gdGhpcztcbiAgY29uc3QgeyBsYXQsIGxhdGl0dWRlID0gbGF0LCBsbmcsIGxvbmdpdHVkZSA9IGxuZywgcG9zaXRpb24sIGRldGFpbHMsIGZlbmNlcywgb3V0c2lkZSwgaW5mb1dpbmRvdywgLi4ub3B0aW9ucyB9ID0gYmFzZU9wdGlvbnM7XG5cbiAgaWYgKGxhdGl0dWRlID09PSB1bmRlZmluZWQgJiYgbG9uZ2l0dWRlID09PSB1bmRlZmluZWQgJiYgcG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gbGF0aXR1ZGUgb3IgbG9uZ2l0dWRlIGRlZmluZWQuJyk7XG4gIH1cblxuICBjb25zdCBtYXJrZXJPcHRpb25zID0ge1xuICAgIC4uLm9wdGlvbnMsXG4gICAgcG9zaXRpb246IHBvc2l0aW9uIHx8IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobGF0aXR1ZGUsIGxvbmdpdHVkZSksXG4gICAgbWFwOiBudWxsLFxuICB9O1xuXG4gIGNvbnN0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIobWFya2VyT3B0aW9ucyk7XG5cbiAgbWFya2VyLmZlbmNlcyA9IGZlbmNlcztcblxuICBpZiAoaW5mb1dpbmRvdykge1xuICAgIG1hcmtlci5pbmZvV2luZG93ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coaW5mb1dpbmRvdyk7XG5cbiAgICBzZXR1cEV2ZW50cyh7IGV2ZW50czogSU5GT19XSU5ET1dfRVZFTlRTLCBvYmplY3Q6IG1hcmtlci5pbmZvV2luZG93LCBpbnN0YW5jZTogdGhpcywgaGFuZGxlcnM6IGluZm9XaW5kb3csIH0pO1xuICB9XG5cbiAgc2V0dXBFdmVudHMoeyBldmVudHM6IE1BUktFUl9FVkVOVFMsIG9iamVjdDogbWFya2VyLCBpbnN0YW5jZTogdGhpcywgaGFuZGxlcnM6IG9wdGlvbnMsIH0pO1xuXG4gIE1BUktFUl9NT1VTRV9FVkVOVFMuZm9yRWFjaCgoZXZlbnROYW1lKSA9PiB7XG4gICAgaWYgKG9wdGlvbnNbZXZlbnROYW1lXSkge1xuICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyLCBldmVudE5hbWUsIChldmVudCA9IHRoaXMpID0+IHtcbiAgICAgICAgaWYgKCFldmVudC5waXhlbCkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgIGV2ZW50LnBpeGVsID0gdGhpcy5tYXAuZ2V0UHJvamVjdGlvbigpLmZyb21MYXRMbmdUb1BvaW50KGV2ZW50LmxhdExuZyk7XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25zW2V2ZW50TmFtZV0uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlciwgJ2NsaWNrJywgZnVuY3Rpb24gb25NYXJrZXJDbGljayhldmVudCkge1xuICAgIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XG5cbiAgICBpZiAob3B0aW9ucy5jbGljaykge1xuICAgICAgb3B0aW9ucy5jbGljay5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAobWFya2VyLmluZm9XaW5kb3cpIHtcbiAgICAgIHNlbGYuaGlkZUluZm9XaW5kb3dzKCk7XG4gICAgICBtYXJrZXIuaW5mb1dpbmRvdy5vcGVuKHNlbGYubWFwLCBtYXJrZXIpO1xuICAgIH1cbiAgfSk7XG5cbiAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyLCAncmlnaHRjbGljaycsIGZ1bmN0aW9uIG9uTWFya2VyUmlnaHRDbGljayhldmVudCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIGV2ZW50Lm1hcmtlciA9IHRoaXM7XG5cbiAgICBpZiAob3B0aW9ucy5yaWdodGNsaWNrKSB7XG4gICAgICBvcHRpb25zLnJpZ2h0Y2xpY2suY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfVxuXG4gICAgaWYgKEdNYXBzLmNvbnRleHRNZW51c1tzZWxmLmlkXS5tYXJrZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2VsZi5idWlsZENvbnRleHRNZW51KCdtYXJrZXInLCBldmVudCk7XG4gICAgfVxuICB9KTtcblxuICBpZiAobWFya2VyLmZlbmNlcykge1xuICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlciwgJ2RyYWdlbmQnLCBmdW5jdGlvbiBvbk1hcmtlckRyYWdFbmQoKSB7XG4gICAgICBzZWxmLmNoZWNrTWFya2VyR2VvZmVuY2UodGhpcywgb3V0c2lkZSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbWFya2VyO1xufTtcblxuLyoqXG4gKiBEcmF3IGEgbWFya2VyIGluIHRoZSBNYXAgYW5kIGFkZCBpdCB0byB0aGUgbWFya2VycyBjb2xsZWN0aW9uLiBUaGlzIG1ldGhvZCBhbHNvIGZpcmVzIGEgYG1hcmtlcl9hZGRlZGAgZXZlbnQuXG4gKiBAZnVuY3Rpb24gYWRkTWFya2VyXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgYG9wdGlvbnNgIG9iamVjdCBzaG91bGQgY29udGFpbjpcbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLmxhdGl0dWRlIC0gTGF0aXR1ZGUgb2YgdGhlIHBvc2l0aW9uLiBJZiBgbGF0aXR1ZGVgIGFuZCBgbG9uZ2l0dWRlYCBhcmUgc2V0LCBgcG9zaXRpb25gIGlzIGlnbm9yZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5sb25naXR1ZGUgLSBMb25naXR1ZGUgb2YgdGhlIHBvc2l0aW9uLiBJZiBgbGF0aXR1ZGVgIGFuZCBgbG9uZ2l0dWRlYCBhcmUgc2V0LCBgcG9zaXRpb25gIGlzIGlnbm9yZWQuXG4gKiBAcGFyYW0ge2dvb2dsZS5tYXBzLkxhdExuZ30gb3B0aW9ucy5wb3NpdGlvbiAtIEEgYGdvb2dsZS5tYXBzLkxhdExuZ2AgY29vcmRpbmF0ZSBpbmRpY2F0ZSB0aGUgcG9zaXRpb24uIElmIHNldCwgYGxhdGl0dWRlYCBhbmQgYGxvbmdpdHVkZWAgYXJlIGlnbm9yZWQuXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucy5kZXRhaWxzIC0gQ3VzdG9tIG9iamVjdCB3aXRoIGV4dHJhIGRhdGEuXG4gKiBAcGFyYW0ge2FycmF5fSBvcHRpb25zLmZlbmNlcyAtIENvbGxlY3Rpb24gb2YgYGdvb2dsZS5tYXBzLlBvbHlnb25gIG9iamVjdHMgdGhhdCBkZWZpbmVzIGEgbWFya2VyJ3MgYm91bmRhcmllcyBvciBnZW9mZW5jZXMuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLm91dHNpZGUgLSBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBtYXJrZXIgaXMgb3VzdGlkZSBhbnkgb2YgaXRzIGZlbmNlcy5cbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zLmluZm9XaW5kb3cgLSBPYmplY3Qgd2l0aCBhbGwgb3B0aW9ucyBkZWZpbmVkIGluIFtnb29nbGUubWFwcy5JbmZvV2luZG93T3B0aW9uc10oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI0luZm9XaW5kb3dPcHRpb25zKS5cbiAqXG4gKiBAc2VlIGBvcHRpb25zYCBhbHNvIGFjY2VwdHMgYW55IG9wdGlvbiBkZWZpbmVkIGluIHRoZSBbb2ZmaWNpYWwgZG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI01hcmtlck9wdGlvbnMpIGFuZCBhbnkgZXZlbnQgZGVmaW5lZCBpbiB0aGUgW1wiRXZlbnRzXCIgc2VjdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI01hcmtlcikuXG4gKlxuICogQHJldHVybnMge2dvb2dsZS5tYXBzLk1hcmtlcn1cbiAqL1xuR01hcHMucHJvdG90eXBlLmFkZE1hcmtlciA9IGZ1bmN0aW9uIGFkZE1hcmtlcihvcHRpb25zKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcbiAgY29uc3QgeyBnbV9hY2Nlc3NvcnNfLCBsYXQsIGxhdGl0dWRlID0gbGF0LCBsbmcsIGxvbmdpdHVkZSA9IGxuZywgcG9zaXRpb24sIH0gPSBvcHRpb25zO1xuXG4gIGxldCBtYXJrZXI7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuICBpZiAoZ21fYWNjZXNzb3JzXykge1xuICAgIC8vIE5hdGl2ZSBnb29nbGUubWFwcy5NYXJrZXIgb2JqZWN0XG4gICAgbWFya2VyID0gb3B0aW9ucztcbiAgfSBlbHNlIGlmICgobGF0aXR1ZGUgJiYgbG9uZ2l0dWRlKSB8fCBwb3NpdGlvbikge1xuICAgIG1hcmtlciA9IHRoaXMuY3JlYXRlTWFya2VyKG9wdGlvbnMpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gbGF0aXR1ZGUgb3IgbG9uZ2l0dWRlIGRlZmluZWQuJyk7XG4gIH1cblxuICBtYXJrZXIuc2V0TWFwKHRoaXMubWFwKTtcblxuICBpZiAodGhpcy5tYXJrZXJDbHVzdGVyZXIpIHtcbiAgICB0aGlzLm1hcmtlckNsdXN0ZXJlci5hZGRNYXJrZXIobWFya2VyKTtcbiAgfVxuXG4gIHRoaXMubWFya2Vycy5wdXNoKG1hcmtlcik7XG5cbiAgR01hcHMuZmlyZSgnbWFya2VyX2FkZGVkJywgbWFya2VyLCB0aGlzKTtcblxuICByZXR1cm4gbWFya2VyO1xufTtcblxuLyoqXG4gKiBEcmF3IGEgY29sbGVjdGlvbiBvZiBtYXJrZXJzIGludG8gdGhlIE1hcC4gVGhpcyBtZXRob2QgZmlyZXMgYSBgbWFya2VyX2FkZGVkYCBldmVudCBmb3IgZWFjaCBtYXJrZXIgYWRkZWQuXG4gKiBAZnVuY3Rpb24gYWRkTWFya2Vyc1xuICpcbiAqIEBwYXJhbSB7YXJyYXl9IG1hcmtlcnMgLSBBbiBhcnJheSBvZiBgb3B0aW9uc2Agb2JqZWN0cywgd2hpY2ggYWNjZXB0cyB0aGUgc2FtZSBvcHRpb25zIGFzIGluIHtAbGluayBHTWFwcyNhZGRNYXJrZXJ9LlxuICpcbiAqIEByZXR1cm5zIHthcnJheX1cbiAqL1xuR01hcHMucHJvdG90eXBlLmFkZE1hcmtlcnMgPSBmdW5jdGlvbiBhZGRNYXJrZXJzKG1hcmtlcnMpIHtcbiAgbWFya2Vycy5mb3JFYWNoKG1hcmtlciA9PiB0aGlzLmFkZE1hcmtlcihtYXJrZXIpKTtcblxuICByZXR1cm4gdGhpcy5tYXJrZXJzO1xufTtcblxuLyoqXG4gKiBIaWRlIGFsbCBtYXJrZXJzJyBJbmZvV2luZG93cy5cbiAqIEBmdW5jdGlvbiBoaWRlSW5mb1dpbmRvd3NcbiAqL1xuR01hcHMucHJvdG90eXBlLmhpZGVJbmZvV2luZG93cyA9IGZ1bmN0aW9uIGhpZGVJbmZvV2luZG93cygpIHtcbiAgdGhpcy5tYXJrZXJzLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgIGlmIChtYXJrZXIuaW5mb1dpbmRvdykge1xuICAgICAgbWFya2VyLmluZm9XaW5kb3cuY2xvc2UoKTtcbiAgICB9XG4gIH0pO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYSBtYXJrZXIgZnJvbSB0aGUgbWFwIGFuZCBmcm9tIHRoZSBtYXJrZXJzIGNvbGxlY3Rpb24uIFRoaXMgbWV0aG9kIGFsc28gZmlyZXMgYSBgbWFya2VyX3JlbW92ZWRgIGV2ZW50LlxuICogQGZ1bmN0aW9uIHJlbW92ZU1hcmtlclxuICpcbiAqIEBwYXJhbSB7Z29vZ2xlLm1hcHMuUG9seWdvbn0gcG9seWdvbiAtIFRoZSBwb2x5Z29uIHRvIGJlIHJlbW92ZWQuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5yZW1vdmVNYXJrZXIgPSBmdW5jdGlvbiByZW1vdmVNYXJrZXIobWFya2VyLCBvcHRpb25zID0ge30pIHtcbiAgY29uc3QgeyBmaXJlRXZlbnQgPSB0cnVlLCB9ID0gb3B0aW9ucztcbiAgY29uc3QgbWFya2VySW5kZXggPSB0aGlzLm1hcmtlcnMuaW5kZXhPZihtYXJrZXIpO1xuXG4gIGlmIChtYXJrZXJJbmRleCA+PSAwKSB7XG4gICAgbWFya2VyLnNldE1hcChudWxsKTtcbiAgICB0aGlzLm1hcmtlcnMuc3BsaWNlKG1hcmtlckluZGV4LCAxKTtcblxuICAgIGlmICh0aGlzLm1hcmtlckNsdXN0ZXJlcikge1xuICAgICAgdGhpcy5tYXJrZXJDbHVzdGVyZXIucmVtb3ZlTWFya2VyKG1hcmtlcik7XG4gICAgfVxuXG4gICAgaWYgKGZpcmVFdmVudCkge1xuICAgICAgR01hcHMuZmlyZSgnbWFya2VyX3JlbW92ZWQnLCBtYXJrZXIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtYXJrZXI7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhIGdyb3VwIG9mIG1hcmtlcnMgKG9yIGFsbCBvZiB0aGVtKSBmcm9tIHRoZSBNYXAgYW5kIGZyb20gdGhlIG1hcmtlcnMgY29sbGVjdGlvbi4gVGhpcyBtZXRob2QgZG9lcyBub3QgZmlyZSBhIGBtYXJrZXJfcmVtb3ZlZGAgZXZlbnQuXG4gKiBAZnVuY3Rpb24gcmVtb3ZlTWFya2Vyc1xuICpcbiAqIEBwYXJhbSB7YXJyYXl9IG1hcmtlcnMgLSBUaGUgbWFya2VycyB0byBiZSByZW1vdmVkLiBJZiBub3Qgc2V0LCBpdCByZW1vdmVzIGFsbCBtYXJrZXJzIGluIHRoZSBNYXAuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5yZW1vdmVNYXJrZXJzID0gZnVuY3Rpb24gcmVtb3ZlTWFya2VycyhtYXJrZXJzID0gdGhpcy5tYXJrZXJzKSB7XG4gIG1hcmtlcnMuZm9yRWFjaChtYXJrZXIgPT4gdGhpcy5yZW1vdmVNYXJrZXIobWFya2VyLCB7IGZpcmVFdmVudDogZmFsc2UsIH0pKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXBzO1xuIiwiaW1wb3J0IEdNYXBzIGZyb20gJy4vY29yZSc7XG5pbXBvcnQgJy4vZXZlbnRzJztcblxuLyoqXG4gKiBFeHRlbmRzIEdNYXBzIHRvIHVzZSBjdXN0b20gb3ZlcmxheXMuXG4gKiBAbW9kdWxlIE92ZXJsYXlzXG4gKi9cblxuY29uc3QgU1RPUF9QUk9QQUdBVElPTl9FVkVOVFMgPSBbJ2NvbnRleHRtZW51JywgJ0RPTU1vdXNlU2Nyb2xsJywgJ2RibGNsaWNrJywgJ21vdXNlZG93biddO1xuXG4vKipcbiAqIERyYXcgYW4gb3ZlcmxheSBpbiB0aGUgTWFwIGFuZCBhZGQgaXQgdG8gdGhlIG92ZXJsYXlzIGNvbGxlY3Rpb24uIFRoaXMgbWV0aG9kIGFsc28gZmlyZXMgYSBgb3ZlcmxheV9hZGRlZGAgZXZlbnQuXG4gKiBAZnVuY3Rpb24gZHJhd092ZXJsYXlcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRoZSBgb3B0aW9uc2Agb2JqZWN0IHNob3VsZCBjb250YWluOlxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLmF1dG9TaG93IC0gU2hvdyB0aGUgb3ZlcmxheSBpbm1lZGlhdGx5IGFmdGVyIGJlaW5nIGNyZWF0ZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5sYXRpdHVkZSAtIExhdGl0dWRlIG9mIHRoZSBjb29yZGluYXRlIHdoZXJlIHRoZSBvdmVybGF5IGlzIHBsYWNlZC4gSWYgYGxhdGl0dWRlYCBhbmQgYGxvbmdpdHVkZWAgYXJlIHNldCwgYHBvc2l0aW9uYGlzIGlnbm9yZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5sb25naXR1ZGUgLSBMb25naXR1ZGUgb2YgdGhlIGNvb3JkaW5hdGUgd2hlcmUgdGhlIG92ZXJsYXkgaXMgcGxhY2VkLiBJZiBgbGF0aXR1ZGVgIGFuZCBgbG9uZ2l0dWRlYCBhcmUgc2V0LCBgcG9zaXRpb25gaXMgaWdub3JlZC5cbiAqIEBwYXJhbSB7Z29vZ2xlLm1hcHMuTGF0TG5nfSBvcHRpb25zLnBvc2l0aW9uIC0gQSBgZ29vZ2xlLm1hcHMuTGF0TG5nYCBjb29yZGluYXRlIHdoZXJlIHRoZSBvdmVybGF5IGlzIHBsYWNlZC4gSWYgc2V0LCBgbGF0aXR1ZGVgIGFuZCBgbG9uZ2l0dWRlYCBhcmUgaWdub3JlZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmNvbnRlbnQgLSBIVE1MIHRoYXQgd2lsbCBiZSBkcmF3biBpbiB0aGUgb3ZlcmxheS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmxheWVyIC0gSWQgb2YgYW55IG9mIHRoZSBsYXllcnMgZGVmaW5lZCBpbiBbZ29vZ2xlLm1hcHMuTWFwUGFuZXNdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNNYXBQYW5lcyk6XG4gKiAgICogZmxvYXRQYW5lXG4gKiAgICogZmxvYXRTaGFkb3dcbiAqICAgKiBtYXBQYW5lXG4gKiAgICogb3ZlcmxheUltYWdlXG4gKiAgICogb3ZlcmxheUxheWVyXG4gKiAgICogb3ZlcmxheU1vdXNlVGFyZ2V0XG4gKiAgICogb3ZlcmxheVNoYWRvd1xuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudmVydGljYWxBbGlnbiAtIFZlcnRpY2FsIGFsaWduIG9mIHRoZSBvdmVybGF5ICh3aGVyZSB0aGUgY2VudGVyIGlzIHRoZSBjb29yZGluYXRlIGBsYXRpdHVkZWAsIGBsb25naXR1ZGVgKTpcbiAqICAgKiB0b3BcbiAqICAgKiBtaWRkbGVcbiAqICAgKiBib3R0b21cbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmhvcml6b250YWxBbGlnbiAtIEhvcml6b250YWwgYWxpZ24gb2YgdGhlIG92ZXJsYXkgKHdoZXJlIHRoZSBjZW50ZXIgaXMgdGhlIGNvb3JkaW5hdGUgYGxhdGl0dWRlYCwgYGxvbmdpdHVkZWApOlxuICogICAqIGxlZnRcbiAqICAgKiBjZW50ZXJcbiAqICAgKiByaWdodFxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMuaG9yaXpvbnRhbE9mZnNldCAtIEhvcml6b250YWwgb2Zmc2V0IGluIHBpeGVscyBvZiB0aGUgb3ZlcmxheS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLnZlcnRpY2FsT2Zmc2V0IC0gVmVydGljYWwgb2Zmc2V0IGluIHBpeGVscyBvZiB0aGUgb3ZlcmxheS5cbiAqXG4gKiBAcmV0dXJucyB7Z29vZ2xlLm1hcHMuT3ZlcmxheVZpZXd9XG4gKi9cbkdNYXBzLnByb3RvdHlwZS5kcmF3T3ZlcmxheSA9IGZ1bmN0aW9uIGRyYXdPdmVybGF5KGJhc2VPcHRpb25zKSB7XG4gIGNvbnN0IHNlbGYgPSB0aGlzO1xuICBjb25zdCBvdmVybGF5ID0gbmV3IGdvb2dsZS5tYXBzLk92ZXJsYXlWaWV3KCk7XG4gIGNvbnN0IHtcbiAgICBhdXRvU2hvdyA9IHRydWUsXG4gICAgbGF0LFxuICAgIGxhdGl0dWRlID0gbGF0LFxuICAgIGxuZyxcbiAgICBsb25naXR1ZGUgPSBsbmcsXG4gICAgcG9zaXRpb24gPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGxhdGl0dWRlLCBsb25naXR1ZGUpLFxuICAgIGxheWVyID0gJ292ZXJsYXlMYXllcicsXG4gICAgaG9yaXpvbnRhbE9mZnNldCA9IDAsXG4gICAgdmVydGljYWxPZmZzZXQgPSAwLFxuICAgIHZlcnRpY2FsQWxpZ24sXG4gICAgaG9yaXpvbnRhbEFsaWduLFxuICAgIC4uLm9wdGlvbnNcbiAgfSA9IGJhc2VPcHRpb25zO1xuXG4gIG92ZXJsYXkuc2V0TWFwKHRoaXMubWFwKTtcblxuICBvdmVybGF5Lm9uQWRkID0gZnVuY3Rpb24gb25BZGQoKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZWxlbWVudC5zdHlsZS5ib3JkZXJTdHlsZSA9ICdub25lJztcbiAgICBlbGVtZW50LnN0eWxlLmJvcmRlcldpZHRoID0gJzBweCc7XG4gICAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgZWxlbWVudC5zdHlsZS56SW5kZXggPSAxMDA7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBvcHRpb25zLmNvbnRlbnQ7XG5cbiAgICBvdmVybGF5LmVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgY29uc3QgcGFuZXMgPSB0aGlzLmdldFBhbmVzKCk7XG4gICAgY29uc3Qgb3ZlcmxheUxheWVyID0gcGFuZXNbbGF5ZXJdO1xuXG4gICAgb3ZlcmxheUxheWVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gICAgU1RPUF9QUk9QQUdBVElPTl9FVkVOVFMuZm9yRWFjaChldmVudE5hbWUgPT5cbiAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyKGVsZW1lbnQsIGV2ZW50TmFtZSwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ21zaWUnKSAhPT0gLTEgJiYgZG9jdW1lbnQuYWxsKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgZXZlbnQuY2FuY2VsQnViYmxlID0gdHJ1ZTtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICBpZiAob3B0aW9ucy5jbGljaykge1xuICAgICAgcGFuZXMub3ZlcmxheU1vdXNlVGFyZ2V0LmFwcGVuZENoaWxkKG92ZXJsYXkuZWxlbWVudCk7XG4gICAgICBnb29nbGUubWFwcy5ldmVudC5hZGREb21MaXN0ZW5lcihvdmVybGF5LmVsZW1lbnQsICdjbGljaycsICgpID0+IHtcbiAgICAgICAgb3B0aW9ucy5jbGljay5jYWxsKHNlbGYsIG92ZXJsYXkpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQudHJpZ2dlcih0aGlzLCAncmVhZHknKTtcbiAgfTtcblxuICBvdmVybGF5LmRyYXcgPSBmdW5jdGlvbiBkcmF3KCkge1xuICAgIGNvbnN0IHByb2plY3Rpb24gPSB0aGlzLmdldFByb2plY3Rpb24oKTtcbiAgICBjb25zdCBwaXhlbCA9IHByb2plY3Rpb24uZnJvbUxhdExuZ1RvRGl2UGl4ZWwocG9zaXRpb24pO1xuXG4gICAgY29uc3QgeyBlbGVtZW50LCB9ID0gb3ZlcmxheTtcbiAgICBjb25zdCBjb250ZW50ID0gZWxlbWVudC5jaGlsZHJlblswXTtcbiAgICBjb25zdCBjb250ZW50SGVpZ2h0ID0gY29udGVudC5jbGllbnRIZWlnaHQ7XG4gICAgY29uc3QgY29udGVudFdpZHRoID0gY29udGVudC5jbGllbnRXaWR0aDtcblxuICAgIHN3aXRjaCAodmVydGljYWxBbGlnbikge1xuICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBgJHtwaXhlbC55IC0gY29udGVudEhlaWdodCArIHZlcnRpY2FsT2Zmc2V0fXB4YDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgY2FzZSAnbWlkZGxlJzpcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBgJHtwaXhlbC55IC0gKGNvbnRlbnRIZWlnaHQgLyAyKSArIHZlcnRpY2FsT2Zmc2V0fXB4YDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IGAke3BpeGVsLnkgKyB2ZXJ0aWNhbE9mZnNldH1weGA7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHN3aXRjaCAoaG9yaXpvbnRhbEFsaWduKSB7XG4gICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7cGl4ZWwueCAtIGNvbnRlbnRXaWR0aCArIGhvcml6b250YWxPZmZzZXR9cHhgO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICBjYXNlICdjZW50ZXInOlxuICAgICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSBgJHtwaXhlbC54IC0gKGNvbnRlbnRXaWR0aCAvIDIpICsgaG9yaXpvbnRhbE9mZnNldH1weGA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSBgJHtwaXhlbC54ICsgaG9yaXpvbnRhbE9mZnNldH1weGA7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGF1dG9TaG93ID8gJ2Jsb2NrJyA6ICdub25lJztcblxuICAgIGlmICghYXV0b1Nob3cpIHtcbiAgICAgIG9wdGlvbnMuc2hvdy5jYWxsKHRoaXMsIGVsZW1lbnQpO1xuICAgIH1cbiAgfTtcblxuICBvdmVybGF5Lm9uUmVtb3ZlID0gZnVuY3Rpb24gb25SZW1vdmUoKSB7XG4gICAgY29uc3QgeyBlbGVtZW50LCB9ID0gb3ZlcmxheTtcblxuICAgIGlmIChvcHRpb25zLnJlbW92ZSkge1xuICAgICAgb3B0aW9ucy5yZW1vdmUuY2FsbCh0aGlzLCBlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgb3ZlcmxheS5lbGVtZW50ID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5vdmVybGF5cy5wdXNoKG92ZXJsYXkpO1xuXG4gIEdNYXBzLmZpcmUoJ292ZXJsYXlfYWRkZWQnLCBvdmVybGF5LCB0aGlzKTtcblxuICByZXR1cm4gb3ZlcmxheTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIG92ZXJsYXkgZnJvbSB0aGUgbWFwIGFuZCBmcm9tIHRoZSBvdmVybGF5cyBjb2xsZWN0aW9uLiBUaGlzIG1ldGhvZCBhbHNvIGZpcmVzIGEgYG92ZXJsYXlfcmVtb3ZlZGAgZXZlbnQuXG4gKiBAZnVuY3Rpb24gcmVtb3ZlT3ZlcmxheVxuICpcbiAqIEBwYXJhbSB7Z29vZ2xlLm1hcHMuT3ZlcmxheVZpZXd9IG92ZXJsYXkgLSBUaGUgb3ZlcmxheSB0byBiZSByZW1vdmVkLlxuICovXG5HTWFwcy5wcm90b3R5cGUucmVtb3ZlT3ZlcmxheSA9IGZ1bmN0aW9uIHJlbW92ZU92ZXJsYXkob3ZlcmxheSkge1xuICBjb25zdCBvdmVybGF5SW5kZXggPSB0aGlzLm92ZXJsYXlzLmluZGV4T2Yob3ZlcmxheSk7XG5cbiAgaWYgKG92ZXJsYXlJbmRleCA+PSAwKSB7XG4gICAgb3ZlcmxheS5zZXRNYXAobnVsbCk7XG4gICAgdGhpcy5vdmVybGF5cy5zcGxpY2Uob3ZlcmxheUluZGV4LCAxKTtcblxuICAgIEdNYXBzLmZpcmUoJ292ZXJsYXlfcmVtb3ZlZCcsIG92ZXJsYXksIHRoaXMpO1xuICB9XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbGwgdGhlIG92ZXJsYXlzIGZyb20gdGhlIG1hcCBhbmQgY2xlYXIgdGhlIG92ZXJsYXlzIGNvbGxlY3Rpb24uIFRoaXMgbWV0aG9kIGRvZXMgbm90IGZpcmUgYSBgb3ZlcmxheV9yZW1vdmVkYCBldmVudC5cbiAqIEBmdW5jdGlvbiByZW1vdmVPdmVybGF5c1xuICovXG5HTWFwcy5wcm90b3R5cGUucmVtb3ZlT3ZlcmxheXMgPSBmdW5jdGlvbiByZW1vdmVPdmVybGF5cygpIHtcbiAgdGhpcy5vdmVybGF5cy5mb3JFYWNoKG92ZXJsYXkgPT4gb3ZlcmxheS5zZXRNYXAobnVsbCkpO1xuXG4gIHRoaXMub3ZlcmxheXMgPSBbXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXBzO1xuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbmlmICh0eXBlb2Ygd2luZG93Lmdvb2dsZSA9PT0gJ29iamVjdCcgJiYgd2luZG93Lmdvb2dsZS5tYXBzKSB7XG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gUG9seWdvbiBjb250YWluc0xhdExuZ1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20vdHBhcmtpbi9Hb29nbGUtTWFwcy1Qb2ludC1pbi1Qb2x5Z29uXG4gIC8vIFBveWdvbiBnZXRCb3VuZHMgZXh0ZW5zaW9uIC0gZ29vZ2xlLW1hcHMtZXh0ZW5zaW9uc1xuICAvLyBodHRwOi8vY29kZS5nb29nbGUuY29tL3AvZ29vZ2xlLW1hcHMtZXh0ZW5zaW9ucy9zb3VyY2UvYnJvd3NlL2dvb2dsZS5tYXBzLlBvbHlnb24uZ2V0Qm91bmRzLmpzXG4gIGlmICghZ29vZ2xlLm1hcHMuUG9seWdvbi5wcm90b3R5cGUuZ2V0Qm91bmRzKSB7XG4gICAgZ29vZ2xlLm1hcHMuUG9seWdvbi5wcm90b3R5cGUuZ2V0Qm91bmRzID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYm91bmRzID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcygpO1xuICAgICAgdmFyIHBhdGhzID0gdGhpcy5nZXRQYXRocygpO1xuICAgICAgdmFyIHBhdGg7XG5cbiAgICAgIGZvciAodmFyIHAgPSAwOyBwIDwgcGF0aHMuZ2V0TGVuZ3RoKCk7IHArKykge1xuICAgICAgICBwYXRoID0gcGF0aHMuZ2V0QXQocCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5nZXRMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgICAgYm91bmRzLmV4dGVuZChwYXRoLmdldEF0KGkpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYm91bmRzO1xuICAgIH07XG4gIH1cblxuICBpZiAoIWdvb2dsZS5tYXBzLlBvbHlnb24ucHJvdG90eXBlLmNvbnRhaW5zTGF0TG5nKSB7XG4gICAgLy8gUG9seWdvbiBjb250YWluc0xhdExuZyAtIG1ldGhvZCB0byBkZXRlcm1pbmUgaWYgYSBsYXRMbmcgaXMgd2l0aGluIGEgcG9seWdvblxuICAgIGdvb2dsZS5tYXBzLlBvbHlnb24ucHJvdG90eXBlLmNvbnRhaW5zTGF0TG5nID0gZnVuY3Rpb24obGF0TG5nKSB7XG4gICAgICAvLyBFeGNsdWRlIHBvaW50cyBvdXRzaWRlIG9mIGJvdW5kcyBhcyB0aGVyZSBpcyBubyB3YXkgdGhleSBhcmUgaW4gdGhlIHBvbHlcbiAgICAgIHZhciBib3VuZHMgPSB0aGlzLmdldEJvdW5kcygpO1xuXG4gICAgICBpZiAoYm91bmRzICE9PSBudWxsICYmICFib3VuZHMuY29udGFpbnMobGF0TG5nKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIFJheWNhc3QgcG9pbnQgaW4gcG9seWdvbiBtZXRob2RcbiAgICAgIHZhciBpblBvbHkgPSBmYWxzZTtcblxuICAgICAgdmFyIG51bVBhdGhzID0gdGhpcy5nZXRQYXRocygpLmdldExlbmd0aCgpO1xuICAgICAgZm9yICh2YXIgcCA9IDA7IHAgPCBudW1QYXRoczsgcCsrKSB7XG4gICAgICAgIHZhciBwYXRoID0gdGhpcy5nZXRQYXRocygpLmdldEF0KHApO1xuICAgICAgICB2YXIgbnVtUG9pbnRzID0gcGF0aC5nZXRMZW5ndGgoKTtcbiAgICAgICAgdmFyIGogPSBudW1Qb2ludHMgLSAxO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtUG9pbnRzOyBpKyspIHtcbiAgICAgICAgICB2YXIgdmVydGV4MSA9IHBhdGguZ2V0QXQoaSk7XG4gICAgICAgICAgdmFyIHZlcnRleDIgPSBwYXRoLmdldEF0KGopO1xuXG4gICAgICAgICAgaWYgKHZlcnRleDEubG5nKCkgPCBsYXRMbmcubG5nKCkgJiYgdmVydGV4Mi5sbmcoKSA+PSBsYXRMbmcubG5nKCkgfHwgdmVydGV4Mi5sbmcoKSA8IGxhdExuZy5sbmcoKSAmJiB2ZXJ0ZXgxLmxuZygpID49IGxhdExuZy5sbmcoKSkge1xuICAgICAgICAgICAgaWYgKHZlcnRleDEubGF0KCkgKyAobGF0TG5nLmxuZygpIC0gdmVydGV4MS5sbmcoKSkgLyAodmVydGV4Mi5sbmcoKSAtIHZlcnRleDEubG5nKCkpICogKHZlcnRleDIubGF0KCkgLSB2ZXJ0ZXgxLmxhdCgpKSA8IGxhdExuZy5sYXQoKSkge1xuICAgICAgICAgICAgICBpblBvbHkgPSAhaW5Qb2x5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGogPSBpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpblBvbHk7XG4gICAgfTtcbiAgfVxuXG4gIGlmICghZ29vZ2xlLm1hcHMuQ2lyY2xlLnByb3RvdHlwZS5jb250YWluc0xhdExuZykge1xuICAgIGdvb2dsZS5tYXBzLkNpcmNsZS5wcm90b3R5cGUuY29udGFpbnNMYXRMbmcgPSBmdW5jdGlvbihsYXRMbmcpIHtcbiAgICAgIGlmIChnb29nbGUubWFwcy5nZW9tZXRyeSkge1xuICAgICAgICByZXR1cm4gZ29vZ2xlLm1hcHMuZ2VvbWV0cnkuc3BoZXJpY2FsLmNvbXB1dGVEaXN0YW5jZUJldHdlZW4odGhpcy5nZXRDZW50ZXIoKSwgbGF0TG5nKSA8PSB0aGlzLmdldFJhZGl1cygpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBnb29nbGUubWFwcy5SZWN0YW5nbGUucHJvdG90eXBlLmNvbnRhaW5zTGF0TG5nID0gZnVuY3Rpb24obGF0TG5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm91bmRzKCkuY29udGFpbnMobGF0TG5nKTtcbiAgfTtcblxuICBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMucHJvdG90eXBlLmNvbnRhaW5zTGF0TG5nID0gZnVuY3Rpb24obGF0TG5nKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGFpbnMobGF0TG5nKTtcbiAgfTtcblxuICBnb29nbGUubWFwcy5NYXJrZXIucHJvdG90eXBlLnNldEZlbmNlcyA9IGZ1bmN0aW9uKGZlbmNlcykge1xuICAgIHRoaXMuZmVuY2VzID0gZmVuY2VzO1xuICB9O1xuXG4gIGdvb2dsZS5tYXBzLk1hcmtlci5wcm90b3R5cGUuYWRkRmVuY2UgPSBmdW5jdGlvbihmZW5jZSkge1xuICAgIHRoaXMuZmVuY2VzLnB1c2goZmVuY2UpO1xuICB9O1xuXG4gIGdvb2dsZS5tYXBzLk1hcmtlci5wcm90b3R5cGUuZ2V0SWQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpc1snX19nbV9pZCddO1xuICB9O1xufVxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBBcnJheSBpbmRleE9mXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L2luZGV4T2ZcbmlmICghQXJyYXkucHJvdG90eXBlLmluZGV4T2YpIHtcbiAgQXJyYXkucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiAoc2VhcmNoRWxlbWVudCAvKiwgZnJvbUluZGV4ICovICkge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICBpZiAodGhpcyA9PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgfVxuICAgICAgdmFyIHQgPSBPYmplY3QodGhpcyk7XG4gICAgICB2YXIgbGVuID0gdC5sZW5ndGggPj4+IDA7XG4gICAgICBpZiAobGVuID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgdmFyIG4gPSAwO1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgbiA9IE51bWJlcihhcmd1bWVudHNbMV0pO1xuICAgICAgICAgIGlmIChuICE9IG4pIHsgLy8gc2hvcnRjdXQgZm9yIHZlcmlmeWluZyBpZiBpdCdzIE5hTlxuICAgICAgICAgICAgICBuID0gMDtcbiAgICAgICAgICB9IGVsc2UgaWYgKG4gIT0gMCAmJiBuICE9IEluZmluaXR5ICYmIG4gIT0gLUluZmluaXR5KSB7XG4gICAgICAgICAgICAgIG4gPSAobiA+IDAgfHwgLTEpICogTWF0aC5mbG9vcihNYXRoLmFicyhuKSk7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG4gPj0gbGVuKSB7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgdmFyIGsgPSBuID49IDAgPyBuIDogTWF0aC5tYXgobGVuIC0gTWF0aC5hYnMobiksIDApO1xuICAgICAgZm9yICg7IGsgPCBsZW47IGsrKykge1xuICAgICAgICAgIGlmIChrIGluIHQgJiYgdFtrXSA9PT0gc2VhcmNoRWxlbWVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gaztcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gLTE7XG4gIH1cbn0iLCJpbXBvcnQgR01hcHMsIHsgbGF0TG5nRnJvbUFyZ3VtZW50cywgZmxhdHRlbkFycmF5LCBhcnJheVRvTGF0TG5nIH0gZnJvbSAnLi9jb3JlJztcblxuLyoqXG4gKiBFeHRlbmRzIEdNYXBzIHRvIHVzZSByb3V0ZXMuXG4gKiBAbW9kdWxlIFJvdXRlc1xuICovXG5cbi8qKlxuICogR2V0IHJvdXRlcyBiZXR3ZWVuIHR3byBjb29yZGluYXRlcy5cbiAqIEBmdW5jdGlvbiBnZXRSb3V0ZXNcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRoZSBgb3B0aW9uc2Agb2JqZWN0IHNob3VsZCBjb250YWluOlxuICogQHBhcmFtIHtzdHJpbmd8Z29vZ2xlLm1hcHMuTGF0TG5nfGdvb2dsZS5tYXBzLlBsYWNlfGdvb2dsZS5tYXBzLkxhdExuZ0xpdGVyYWx9IG9wdGlvbnMub3JpZ2luIC0gTG9jYXRpb24gb2Ygb3JpZ2luLlxuICogQHBhcmFtIHtzdHJpbmd8Z29vZ2xlLm1hcHMuTGF0TG5nfGdvb2dsZS5tYXBzLlBsYWNlfGdvb2dsZS5tYXBzLkxhdExuZ0xpdGVyYWx9IG9wdGlvbnMuZGVzdGluYXRpb24gLSBMb2NhdGlvbiBvZiBkZXN0aW5hdGlvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRyYXZlbE1vZGUgLSBDYW4gYmUgYGJpY3ljbGluZ2AsIGBkcml2aW5nYCwgYHRyYW5zaXRgIG9yIGB3YWxraW5nYC5cbiAqIEBwYXJhbSB7YXJyYXl9IG9wdGlvbnMud2F5cG9pbnRzIC0gQXJyYXkgb2YgW2dvb2dsZS5tYXBzLkRpcmVjdGlvbnNXYXlwb2ludF0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI0RpcmVjdGlvbnNXYXlwb2ludCkgb2JqZWN0cy5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMuY2FsbGJhY2sgLSBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgYWZ0ZXIgdGhlIHJlc3VsdHMgYXJlIHJldHVybmVkLlxuICpcbiAqIEBzZWUgYG9wdGlvbnNgIGFsc28gYWNjZXB0cyBhbnkgb3B0aW9uIGRlZmluZWQgaW4gdGhlIFtvZmZpY2lhbCBkb2N1bWVudGF0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjRGlyZWN0aW9uc1JlcXVlc3QpLlxuICovXG5HTWFwcy5wcm90b3R5cGUuZ2V0Um91dGVzID0gZnVuY3Rpb24gZ2V0Um91dGVzKGJhc2VPcHRpb25zKSB7XG4gIGNvbnN0IHsgb3JpZ2luLCBkZXN0aW5hdGlvbiwgdHJhdmVsTW9kZSA9ICd3YWxraW5nJywgdW5pdFN5c3RlbSA9ICdtZXRyaWMnLCBhdm9pZEhpZ2h3YXlzID0gZmFsc2UsIGF2b2lkVG9sbHMgPSBmYWxzZSwgb3B0aW1pemVXYXlwb2ludHMgPSBmYWxzZSwgd2F5cG9pbnRzID0gW10sIGNhbGxiYWNrLCBlcnJvciwgLi4ub3B0aW9ucyB9ID0gYmFzZU9wdGlvbnM7XG5cbiAgY29uc3QgdHJhdmVsTW9kZUlkID0gZ29vZ2xlLm1hcHMuVHJhdmVsTW9kZVt0cmF2ZWxNb2RlLnRvVXBwZXJDYXNlKCldO1xuICBjb25zdCB1bml0U3lzdGVtSWQgPSBnb29nbGUubWFwcy5UcmF2ZWxNb2RlW3VuaXRTeXN0ZW0udG9VcHBlckNhc2UoKV07XG5cbiAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgLi4ub3B0aW9ucyxcbiAgICB0cmF2ZWxNb2RlOiB0cmF2ZWxNb2RlSWQsXG4gICAgdW5pdFN5c3RlbTogdW5pdFN5c3RlbUlkLFxuICAgIGF2b2lkSGlnaHdheXMsXG4gICAgYXZvaWRUb2xscyxcbiAgICBvcHRpbWl6ZVdheXBvaW50cyxcbiAgICB3YXlwb2ludHMsXG4gICAgb3JpZ2luOiB0eXBlb2Ygb3JpZ2luID09PSAnc3RyaW5nJyA/IG9yaWdpbiA6IGxhdExuZ0Zyb21Bcmd1bWVudHMoLi4ub3JpZ2luKSxcbiAgICBkZXN0aW5hdGlvbjogdHlwZW9mIGRlc3RpbmF0aW9uID09PSAnc3RyaW5nJyA/IGRlc3RpbmF0aW9uIDogbGF0TG5nRnJvbUFyZ3VtZW50cyguLi5kZXN0aW5hdGlvbiksXG4gIH07XG5cbiAgY29uc3Qgc2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zU2VydmljZSgpO1xuXG4gIHNlcnZpY2Uucm91dGUocmVxdWVzdE9wdGlvbnMsIChyZXN1bHQsIHN0YXR1cykgPT4ge1xuICAgIGlmIChzdGF0dXMgPT09IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTdGF0dXMuT0spIHtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayhbLi4ucmVzdWx0LnJvdXRlc10sIHJlc3VsdCwgc3RhdHVzKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVycm9yKSB7XG4gICAgICBlcnJvcihyZXN1bHQsIHN0YXR1cyk7XG4gICAgfVxuICB9KTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFsbCByb3V0ZXMgc3RvcmVkIGluIHJvdXRlcyBjb2xsZWN0aW9uLlxuICogQGZ1bmN0aW9uIHJlbW92ZVJvdXRlc1xuICovXG5HTWFwcy5wcm90b3R5cGUucmVtb3ZlUm91dGVzID0gZnVuY3Rpb24gcmVtb3ZlUm91dGVzKCkge1xuICB0aGlzLnJvdXRlcyA9IFtdO1xufTtcblxuLyoqXG4gKiBHZXQgZWxldmF0aW9uIGluZm9ybWF0aW9uIGZvciBsb2NhdGlvbnMgb3Igcm91dGVzLlxuICogQGZ1bmN0aW9uIGdldEVsZXZhdGlvbnNcbiAqXG4gKiBAcGFyYW0ge2FycmF5fSBsb2NhdGlvbnMgLSBCaS1kaW1lbnNpb25hbCBhcnJheSBvZiBsYXRpdHVkZXMgYW5kIGxvbmdpdHVkZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHBhdGggLSBJZiBpcyB0cnVlLCBtYWtlcyBhIHJlcXVlc3QgYWxvbmcgYSBwYXRoLiBJZiBpcyBmYWxzZSwgb25seSBnZXQgZWxldmF0aW9uIGluZm9ybWF0aW9uIG9uIGRpc2NyZXRlIGxvY2F0aW9ucy5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gTmF0aXZlIGNhbGxiYWNrIGZ1bmN0aW9uIGRlZmluZWQgaW4gW2dvb2dsZS5tYXBzLkVsZXZhdGlvblNlcnZpY2UgKCdNZXRob2RzJyBzZWN0aW9uKV0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI0VsZXZhdGlvblNlcnZpY2UpIChgZ2V0RWxldmF0aW9uQWxvbmdQYXRoYCBpZiBgcGF0aGAgaXMgdHJ1ZSwgYGdldEVsZXZhdGlvbkZvckxvY2F0aW9uc2AgaWYgYHBhdGhgIGlzIGZhbHNlKS5cbiAqL1xuR01hcHMucHJvdG90eXBlLmdldEVsZXZhdGlvbnMgPSBmdW5jdGlvbiBnZXRFbGV2YXRpb25zKGJhc2VPcHRpb25zKSB7XG4gIGNvbnN0IHsgcGF0aCA9IGZhbHNlLCBzYW1wbGVzID0gMjU2LCBjYWxsYmFjaywgLi4ub3B0aW9ucyB9ID0gYmFzZU9wdGlvbnM7XG5cbiAgbGV0IGxvY2F0aW9ucyA9IG9wdGlvbnMubG9jYXRpb25zIHx8IFtdO1xuXG4gIGlmIChsb2NhdGlvbnMubGVuZ3RoID4gMCkge1xuICAgIGlmIChsb2NhdGlvbnNbMF0ubGVuZ3RoID4gMCkge1xuICAgICAgbG9jYXRpb25zID0gZmxhdHRlbkFycmF5KFtsb2NhdGlvbnNdLm1hcChsb2NhdGlvbiA9PiBhcnJheVRvTGF0TG5nKGxvY2F0aW9uLCBmYWxzZSkpKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBzZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkVsZXZhdGlvblNlcnZpY2UoKTtcblxuICBpZiAoIXBhdGgpIHtcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBsb2NhdGlvbnMsXG4gICAgfTtcblxuICAgIGRlbGV0ZSByZXF1ZXN0T3B0aW9ucy5wYXRoO1xuICAgIGRlbGV0ZSByZXF1ZXN0T3B0aW9ucy5zYW1wbGVzO1xuXG4gICAgc2VydmljZS5nZXRFbGV2YXRpb25Gb3JMb2NhdGlvbnMocmVxdWVzdE9wdGlvbnMsIChyZXN1bHQsIHN0YXR1cykgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYWxsYmFjayhyZXN1bHQsIHN0YXR1cyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICBwYXRoOiBsb2NhdGlvbnMsXG4gICAgICBzYW1wbGVzLFxuICAgIH07XG5cbiAgICBzZXJ2aWNlLmdldEVsZXZhdGlvbkFsb25nUGF0aChyZXF1ZXN0T3B0aW9ucywgKHJlc3VsdCwgc3RhdHVzKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNhbGxiYWNrKHJlc3VsdCwgc3RhdHVzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIEdNYXBzI3JlbW92ZVBvbHlsaW5lc30uXG4gKiBAZnVuY3Rpb24gY2xlYW5Sb3V0ZVxuICovXG5HTWFwcy5wcm90b3R5cGUuY2xlYW5Sb3V0ZSA9IEdNYXBzLnByb3RvdHlwZS5yZW1vdmVQb2x5bGluZXM7XG5cbkdNYXBzLnByb3RvdHlwZS5yZW5kZXJSb3V0ZSA9IGZ1bmN0aW9uIHJlbmRlclJvdXRlKG9wdGlvbnMsIGJhc2VSZW5kZXJPcHRpb25zKSB7XG4gIGNvbnN0IHBhbmVsID0gKCh0eXBlb2YgYmFzZVJlbmRlck9wdGlvbnMucGFuZWwgPT09ICdzdHJpbmcnKSA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJhc2VSZW5kZXJPcHRpb25zLnBhbmVsLnJlcGxhY2UoJyMnLCAnJykpIDogYmFzZVJlbmRlck9wdGlvbnMucGFuZWwpO1xuXG4gIGNvbnN0IHJlbmRlck9wdGlvbnMgPSB7XG4gICAgLi4uYmFzZVJlbmRlck9wdGlvbnMsXG4gICAgcGFuZWwsXG4gICAgbWFwOiB0aGlzLm1hcCxcbiAgfTtcblxuICBjb25zdCBkaXNwbGF5ID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNSZW5kZXJlcihyZW5kZXJPcHRpb25zKTtcblxuICB0aGlzLmdldFJvdXRlcyh7XG4gICAgb3JpZ2luOiBvcHRpb25zLm9yaWdpbixcbiAgICBkZXN0aW5hdGlvbjogb3B0aW9ucy5kZXN0aW5hdGlvbixcbiAgICB0cmF2ZWxNb2RlOiBvcHRpb25zLnRyYXZlbE1vZGUsXG4gICAgd2F5cG9pbnRzOiBvcHRpb25zLndheXBvaW50cyxcbiAgICB1bml0U3lzdGVtOiBvcHRpb25zLnVuaXRTeXN0ZW0sXG4gICAgZXJyb3I6IG9wdGlvbnMuZXJyb3IsXG4gICAgYXZvaWRIaWdod2F5czogb3B0aW9ucy5hdm9pZEhpZ2h3YXlzLFxuICAgIGF2b2lkVG9sbHM6IG9wdGlvbnMuYXZvaWRUb2xscyxcbiAgICBvcHRpbWl6ZVdheXBvaW50czogb3B0aW9ucy5vcHRpbWl6ZVdheXBvaW50cyxcbiAgICBjYWxsYmFjayhfLCByZXNwb25zZSwgc3RhdHVzKSB7XG4gICAgICBpZiAoc3RhdHVzID09PSBnb29nbGUubWFwcy5EaXJlY3Rpb25zU3RhdHVzLk9LKSB7XG4gICAgICAgIGRpc3BsYXkuc2V0RGlyZWN0aW9ucyhyZXNwb25zZSk7XG4gICAgICB9XG4gICAgfSxcbiAgfSk7XG59O1xuXG4vKipcbiAqIERyYXcgYSByb3V0ZSB1c2luZyBwb2x5bGluZXMuIEl0IHVzZXMgdGhlIGxhc3Qgcm91dGUgZm91bmQgYnkge0BsaW5rIEdNYXBzI2dldFJvdXRlc30uXG4gKiBAZnVuY3Rpb24gZHJhd1JvdXRlXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBBY2NlcHRzIHRoZSBzYW1lIG9wdGlvbnMgYXMge0BsaW5rIEdNYXBzI2dldFJvdXRlc30uXG4gKiBAcGFyYW0ge3N0cmluZ3xnb29nbGUubWFwcy5MYXRMbmd8Z29vZ2xlLm1hcHMuUGxhY2V8Z29vZ2xlLm1hcHMuTGF0TG5nTGl0ZXJhbH0gb3B0aW9ucy5vcmlnaW4gLSBMb2NhdGlvbiBvZiBvcmlnaW4uXG4gKiBAcGFyYW0ge3N0cmluZ3xnb29nbGUubWFwcy5MYXRMbmd8Z29vZ2xlLm1hcHMuUGxhY2V8Z29vZ2xlLm1hcHMuTGF0TG5nTGl0ZXJhbH0gb3B0aW9ucy5kZXN0aW5hdGlvbiAtIExvY2F0aW9uIG9mIGRlc3RpbmF0aW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc3Ryb2tlQ29sb3IgLSBDb2xvciBvZiB0aGUgcG9seWxpbmUuIENhbiBiZSBoZXhhZGVjaW1hbCBvciBDU1MgbmFtZS5cbiAqIEBwYXJhbSB7ZmxvYXR9IG9wdGlvbnMuc3Ryb2tlT3BhY2l0eSAtIE9wYWNpdHkgb2YgdGhlIHBvbHlsaW5lIGZyb20gMC4wIHRvIDEuMFxuICogQHBhcmFtIHtpbnRlZ2VyfSBvcHRpb25zLnN0cm9rZVdlaWdodCAtIFBvbHlsaW5lIHdpZHRoIGluIHBpeGVscy5cbiAqL1xuR01hcHMucHJvdG90eXBlLmRyYXdSb3V0ZSA9IGZ1bmN0aW9uIGRyYXdSb3V0ZShvcHRpb25zKSB7XG4gIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gIHRoaXMuZ2V0Um91dGVzKHtcbiAgICBvcmlnaW46IG9wdGlvbnMub3JpZ2luLFxuICAgIGRlc3RpbmF0aW9uOiBvcHRpb25zLmRlc3RpbmF0aW9uLFxuICAgIHRyYXZlbE1vZGU6IG9wdGlvbnMudHJhdmVsTW9kZSxcbiAgICB3YXlwb2ludHM6IG9wdGlvbnMud2F5cG9pbnRzLFxuICAgIHVuaXRTeXN0ZW06IG9wdGlvbnMudW5pdFN5c3RlbSxcbiAgICBlcnJvcjogb3B0aW9ucy5lcnJvcixcbiAgICBhdm9pZEhpZ2h3YXlzOiBvcHRpb25zLmF2b2lkSGlnaHdheXMsXG4gICAgYXZvaWRUb2xsczogb3B0aW9ucy5hdm9pZFRvbGxzLFxuICAgIG9wdGltaXplV2F5cG9pbnRzOiBvcHRpb25zLm9wdGltaXplV2F5cG9pbnRzLFxuICAgIGNhbGxiYWNrKHJvdXRlcykge1xuICAgICAgaWYgKHJvdXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGxhc3RSb3V0ZSA9IHJvdXRlc1tyb3V0ZXMubGVuZ3RoIC0gMV07XG4gICAgICAgIGNvbnN0IHBvbHlsaW5lT3B0aW9ucyA9IHtcbiAgICAgICAgICBwYXRoOiBsYXN0Um91dGUub3ZlcnZpZXdfcGF0aCxcbiAgICAgICAgICBzdHJva2VDb2xvcjogb3B0aW9ucy5zdHJva2VDb2xvcixcbiAgICAgICAgICBzdHJva2VPcGFjaXR5OiBvcHRpb25zLnN0cm9rZU9wYWNpdHksXG4gICAgICAgICAgc3Ryb2tlV2VpZ2h0OiBvcHRpb25zLnN0cm9rZVdlaWdodCxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAob3B0aW9ucy5pY29ucykge1xuICAgICAgICAgIHBvbHlsaW5lT3B0aW9ucy5pY29ucyA9IG9wdGlvbnMuaWNvbnM7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLmRyYXdQb2x5bGluZShwb2x5bGluZU9wdGlvbnMpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLmNhbGxiYWNrKSB7XG4gICAgICAgICAgb3B0aW9ucy5jYWxsYmFjayhsYXN0Um91dGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgfSk7XG59O1xuXG4vKipcbiAqIFRyYXZlbCBhIHJvdXRlIGF1dG9tYXRpY2FsbHkuIEl0IHVzZXMgdGhlIGxhc3Qgcm91dGUgZm91bmQgYnkge0BsaW5rIEdNYXBzI2dldFJvdXRlc30uXG4gKiBAZnVuY3Rpb24gdHJhdmVsUm91dGVcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIEFjY2VwdHMgdGhlIHNhbWUgb3B0aW9ucyBhcyB7QGxpbmsgR01hcHMjZ2V0Um91dGVzfS5cbiAqIEBwYXJhbSB7c3RyaW5nfGdvb2dsZS5tYXBzLkxhdExuZ3xnb29nbGUubWFwcy5QbGFjZXxnb29nbGUubWFwcy5MYXRMbmdMaXRlcmFsfSBvcHRpb25zLm9yaWdpbiAtIExvY2F0aW9uIG9mIG9yaWdpbi5cbiAqIEBwYXJhbSB7c3RyaW5nfGdvb2dsZS5tYXBzLkxhdExuZ3xnb29nbGUubWFwcy5QbGFjZXxnb29nbGUubWFwcy5MYXRMbmdMaXRlcmFsfSBvcHRpb25zLmRlc3RpbmF0aW9uIC0gTG9jYXRpb24gb2YgZGVzdGluYXRpb24uXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucy5yb3V0ZSAtIEEgW2dvb2dsZS5tYXBzLkRpcmVjdGlvbnNSb3V0ZV0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI0RpcmVjdGlvbnNSb3V0ZSkgb2JqZWN0LiBJZiBzZXQsIGBvcmlnaW5gIGFuZCBgZGVzdGluYXRpb25gIGFyZSBpZ25vcmVkLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5zdGFydCAtIEZpcmVkIGJlZm9yZSB0aGUgZmlyc3Qgc3RlcC4gSXQgcmVjZWl2ZXMgYSBzaW5nbGUgYXJndW1lbnQsIHdoaWNoIGlzIGEgW0RpcmVjdGlvbnNSb3V0ZV0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI0RpcmVjdGlvbnNSb3V0ZSkgb2JqZWN0LlxuICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5zdGVwIC0gRmlyZWQgZWFjaCBzdGVwIGluIHRoZSByb3V0ZS4gSXQgcmVjZWl2ZXMgMiBhcmd1bWVudHMsIHdoaWNoIGlzIGEgW0RpcmVjdGlvbnNTdGVwXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjRGlyZWN0aW9uc1N0ZXApIG9iamVjdCBhbmQgdGhlIHRvdGFsIGxlbmd0aCBvZiB0aGUgc3RlcHMuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLmVuZCAtIEZpcmVkIGFmdGVyIHRoZSBsYXN0IHN0ZXAuIEl0IHJlY2VpdmVzIGEgc2luZ2xlIGFyZ3VtZW50LCB3aGljaCBpcyBhIFtEaXJlY3Rpb25zUm91dGVdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNEaXJlY3Rpb25zUm91dGUpIG9iamVjdC5cbiAqL1xuR01hcHMucHJvdG90eXBlLnRyYXZlbFJvdXRlID0gZnVuY3Rpb24gdHJhdmVsUm91dGUob3B0aW9ucykge1xuICBpZiAob3B0aW9ucy5vcmlnaW4gJiYgb3B0aW9ucy5kZXN0aW5hdGlvbikge1xuICAgIHRoaXMuZ2V0Um91dGVzKHtcbiAgICAgIG9yaWdpbjogb3B0aW9ucy5vcmlnaW4sXG4gICAgICBkZXN0aW5hdGlvbjogb3B0aW9ucy5kZXN0aW5hdGlvbixcbiAgICAgIHRyYXZlbE1vZGU6IG9wdGlvbnMudHJhdmVsTW9kZSxcbiAgICAgIHdheXBvaW50czogb3B0aW9ucy53YXlwb2ludHMsXG4gICAgICB1bml0U3lzdGVtOiBvcHRpb25zLnVuaXRTeXN0ZW0sXG4gICAgICBlcnJvcjogb3B0aW9ucy5lcnJvcixcbiAgICAgIGNhbGxiYWNrKHJvdXRlcykge1xuICAgICAgICBpZiAocm91dGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxhc3RSb3V0ZSA9IHJvdXRlc1tyb3V0ZXMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgLy8gc3RhcnQgY2FsbGJhY2tcbiAgICAgICAgaWYgKG9wdGlvbnMuc3RhcnQpIHtcbiAgICAgICAgICBvcHRpb25zLnN0YXJ0KGxhc3RSb3V0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdGVwIGNhbGxiYWNrXG4gICAgICAgIGlmIChvcHRpb25zLnN0ZXApIHtcbiAgICAgICAgICBpZiAobGFzdFJvdXRlLmxlZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgeyBzdGVwcywgfSA9IGxhc3RSb3V0ZS5sZWdzWzBdO1xuXG4gICAgICAgICAgICBzdGVwcy5mb3JFYWNoKChzdGVwLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICAgICAgc3RlcC5zdGVwX251bWJlciA9IGluZGV4O1xuICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICAgICAgc3RlcC5zdGVwTnVtYmVyID0gaW5kZXg7XG5cbiAgICAgICAgICAgICAgb3B0aW9ucy5zdGVwKHN0ZXAsIHN0ZXBzLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZW5kIGNhbGxiYWNrXG4gICAgICAgIGlmIChvcHRpb25zLmVuZCkge1xuICAgICAgICAgIG9wdGlvbnMuZW5kKGxhc3RSb3V0ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSk7XG4gIH0gZWxzZSBpZiAob3B0aW9ucy5yb3V0ZSkge1xuICAgIGlmIChvcHRpb25zLnJvdXRlLmxlZ3MubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgeyBzdGVwcywgfSA9IG9wdGlvbnMucm91dGUubGVnc1swXTtcblxuICAgICAgc3RlcHMuZm9yRWFjaCgoc3RlcCwgaW5kZXgpID0+IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIHN0ZXAuc3RlcF9udW1iZXIgPSBpbmRleDtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIHN0ZXAuc3RlcE51bWJlciA9IGluZGV4O1xuXG4gICAgICAgIG9wdGlvbnMuc3RlcChzdGVwLCBzdGVwcy5sZW5ndGggLSAxKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBEcmF3IGFuZCB0cmF2ZWwgYSByb3V0ZSBhdXRvbWF0aWNhbGx5IHN0ZXAgYnkgc3RlcC4gSXQgdXNlcyB0aGUgbGFzdCByb3V0ZSBmb3VuZCBieSB7QGxpbmsgR01hcHMjZ2V0Um91dGVzfS5cbiAqIEBmdW5jdGlvbiBkcmF3U3RlcHBlZFJvdXRlXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBBY2NlcHRzIHRoZSBzYW1lIG9wdGlvbnMgYXMge0BsaW5rIEdNYXBzI3RyYXZlbFJvdXRlfS5cbiAqIEBwYXJhbSB7c3RyaW5nfGdvb2dsZS5tYXBzLkxhdExuZ3xnb29nbGUubWFwcy5QbGFjZXxnb29nbGUubWFwcy5MYXRMbmdMaXRlcmFsfSBvcHRpb25zLm9yaWdpbiAtIExvY2F0aW9uIG9mIG9yaWdpbi5cbiAqIEBwYXJhbSB7c3RyaW5nfGdvb2dsZS5tYXBzLkxhdExuZ3xnb29nbGUubWFwcy5QbGFjZXxnb29nbGUubWFwcy5MYXRMbmdMaXRlcmFsfSBvcHRpb25zLmRlc3RpbmF0aW9uIC0gTG9jYXRpb24gb2YgZGVzdGluYXRpb24uXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucy5yb3V0ZSAtIEEgW2dvb2dsZS5tYXBzLkRpcmVjdGlvbnNSb3V0ZV0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI0RpcmVjdGlvbnNSb3V0ZSkgb2JqZWN0LiBJZiBzZXQsIGBvcmlnaW5gIGFuZCBgZGVzdGluYXRpb25gIGFyZSBpZ25vcmVkLlxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc3Ryb2tlQ29sb3IgLSBDb2xvciBvZiB0aGUgcG9seWxpbmUuIENhbiBiZSBoZXhhZGVjaW1hbCBvciBDU1MgbmFtZS5cbiAqIEBwYXJhbSB7ZmxvYXR9IG9wdGlvbnMuc3Ryb2tlT3BhY2l0eSAtIE9wYWNpdHkgb2YgdGhlIHBvbHlsaW5lIGZyb20gMC4wIHRvIDEuMFxuICogQHBhcmFtIHtpbnRlZ2VyfSBvcHRpb25zLnN0cm9rZVdlaWdodCAtIFBvbHlsaW5lIHdpZHRoIGluIHBpeGVscy5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMuc3RhcnQgLSBGaXJlZCBiZWZvcmUgdGhlIGZpcnN0IHN0ZXAuIEl0IHJlY2VpdmVzIGEgc2luZ2xlIGFyZ3VtZW50LCB3aGljaCBpcyBhIFtEaXJlY3Rpb25zUm91dGVdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNEaXJlY3Rpb25zUm91dGUpIG9iamVjdC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMuc3RlcCAtIEZpcmVkIGVhY2ggc3RlcCBpbiB0aGUgcm91dGUuIEl0IHJlY2VpdmVzIDIgYXJndW1lbnRzLCB3aGljaCBpcyBhIFtEaXJlY3Rpb25zU3RlcF0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI0RpcmVjdGlvbnNTdGVwKSBvYmplY3QgYW5kIHRoZSB0b3RhbCBsZW5ndGggb2YgdGhlIHN0ZXBzLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5lbmQgLSBGaXJlZCBhZnRlciB0aGUgbGFzdCBzdGVwLiBJdCByZWNlaXZlcyBhIHNpbmdsZSBhcmd1bWVudCwgd2hpY2ggaXMgYSBbRGlyZWN0aW9uc1JvdXRlXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjRGlyZWN0aW9uc1JvdXRlKSBvYmplY3QuXG5cbiAqL1xuR01hcHMucHJvdG90eXBlLmRyYXdTdGVwcGVkUm91dGUgPSBmdW5jdGlvbiBkcmF3U3RlcHBlZFJvdXRlKG9wdGlvbnMpIHtcbiAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgdGhpcy50cmF2ZWxSb3V0ZSh7XG4gICAgLi4ub3B0aW9ucyxcbiAgICBzdGVwOiBmdW5jdGlvbiBzdGVwKHJvdXRlU3RlcCwgc3RlcHNDb3VudCkge1xuICAgICAgY29uc3QgcG9seWxpbmVPcHRpb25zID0ge1xuICAgICAgICBwYXRoOiByb3V0ZVN0ZXAucGF0aCxcbiAgICAgICAgc3Ryb2tlQ29sb3I6IG9wdGlvbnMuc3Ryb2tlQ29sb3IsXG4gICAgICAgIHN0cm9rZU9wYWNpdHk6IG9wdGlvbnMuc3Ryb2tlT3BhY2l0eSxcbiAgICAgICAgc3Ryb2tlV2VpZ2h0OiBvcHRpb25zLnN0cm9rZVdlaWdodCxcbiAgICAgIH07XG5cbiAgICAgIGlmIChvcHRpb25zLmljb25zKSB7XG4gICAgICAgIHBvbHlsaW5lT3B0aW9ucy5pY29ucyA9IG9wdGlvbnMuaWNvbnM7XG4gICAgICB9XG5cbiAgICAgIHNlbGYuZHJhd1BvbHlsaW5lKHBvbHlsaW5lT3B0aW9ucyk7XG5cbiAgICAgIG9wdGlvbnMuc3RlcChyb3V0ZVN0ZXAsIHN0ZXBzQ291bnQpO1xuICAgIH0sXG4gIH0pO1xuXG4gIC8vIGlmIChvcHRpb25zLm9yaWdpbiAmJiBvcHRpb25zLmRlc3RpbmF0aW9uKSB7XG4gIC8vICAgdGhpcy5nZXRSb3V0ZXMoe1xuICAvLyAgICAgb3JpZ2luOiBvcHRpb25zLm9yaWdpbixcbiAgLy8gICAgIGRlc3RpbmF0aW9uOiBvcHRpb25zLmRlc3RpbmF0aW9uLFxuICAvLyAgICAgdHJhdmVsTW9kZTogb3B0aW9ucy50cmF2ZWxNb2RlLFxuICAvLyAgICAgd2F5cG9pbnRzOiBvcHRpb25zLndheXBvaW50cyxcbiAgLy8gICAgIGVycm9yOiBvcHRpb25zLmVycm9yLFxuICAvLyAgICAgY2FsbGJhY2socm91dGVzKSB7XG4gIC8vICAgICAgIGlmIChyb3V0ZXMubGVuZ3RoID09PSAwKSB7XG4gIC8vICAgICAgICAgcmV0dXJuO1xuICAvLyAgICAgICB9XG5cbiAgLy8gICAgICAgY29uc3Qgcm91dGUgPSByb3V0ZXNbcm91dGVzLmxlbmd0aCAtIDFdO1xuXG4gIC8vICAgICAgIC8vIHN0YXJ0IGNhbGxiYWNrXG4gIC8vICAgICAgIGlmIChvcHRpb25zLnN0YXJ0KSB7XG4gIC8vICAgICAgICAgb3B0aW9ucy5zdGFydChyb3V0ZSk7XG4gIC8vICAgICAgIH1cblxuICAvLyAgICAgICAvLyBzdGVwIGNhbGxiYWNrXG4gIC8vICAgICAgIGlmIChvcHRpb25zLnN0ZXApIHtcbiAgLy8gICAgICAgICBpZiAocm91dGUubGVncy5sZW5ndGggPiAwKSB7XG4gIC8vICAgICAgICAgICBjb25zdCB7IHN0ZXBzLCB9ID0gcm91dGUubGVnc1swXTtcblxuICAvLyAgICAgICAgICAgc3RlcHMuZm9yRWFjaCgoc3RlcCwgaW5kZXgpID0+IHtcbiAgLy8gICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIC8vICAgICAgICAgICAgIHN0ZXAuc3RlcF9udW1iZXIgPSBpbmRleDtcbiAgLy8gICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIC8vICAgICAgICAgICAgIHN0ZXAuc3RlcE51bWJlciA9IGluZGV4O1xuXG4gIC8vICAgICAgICAgICAgIGNvbnN0IHBvbHlsaW5lT3B0aW9ucyA9IHtcbiAgLy8gICAgICAgICAgICAgICBwYXRoOiBzdGVwLnBhdGgsXG4gIC8vICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6IG9wdGlvbnMuc3Ryb2tlQ29sb3IsXG4gIC8vICAgICAgICAgICAgICAgc3Ryb2tlT3BhY2l0eTogb3B0aW9ucy5zdHJva2VPcGFjaXR5LFxuICAvLyAgICAgICAgICAgICAgIHN0cm9rZVdlaWdodDogb3B0aW9ucy5zdHJva2VXZWlnaHQsXG4gIC8vICAgICAgICAgICAgIH07XG5cbiAgLy8gICAgICAgICAgICAgaWYgKG9wdGlvbnMuaWNvbnMpIHtcbiAgLy8gICAgICAgICAgICAgICBwb2x5bGluZU9wdGlvbnMuaWNvbnMgPSBvcHRpb25zLmljb25zO1xuICAvLyAgICAgICAgICAgICB9XG5cbiAgLy8gICAgICAgICAgICAgc2VsZi5kcmF3UG9seWxpbmUocG9seWxpbmVPcHRpb25zKTtcbiAgLy8gICAgICAgICAgICAgb3B0aW9ucy5zdGVwKHN0ZXAsIChyb3V0ZS5sZWdzWzBdLnN0ZXBzLmxlbmd0aCAtIDEpKTtcbiAgLy8gICAgICAgICAgIH0pO1xuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgfVxuXG4gIC8vICAgICAgIC8vIGVuZCBjYWxsYmFja1xuICAvLyAgICAgICBpZiAob3B0aW9ucy5lbmQpIHtcbiAgLy8gICAgICAgICBvcHRpb25zLmVuZChyb3V0ZSk7XG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH0sXG4gIC8vICAgfSk7XG4gIC8vIH0gZWxzZSBpZiAob3B0aW9ucy5yb3V0ZSkge1xuICAvLyAgIGlmIChvcHRpb25zLnJvdXRlLmxlZ3MubGVuZ3RoID4gMCkge1xuICAvLyAgICAgY29uc3QgeyBzdGVwcywgfSA9IG9wdGlvbnMucm91dGUubGVnc1swXTtcblxuICAvLyAgICAgc3RlcHMuZm9yRWFjaCgoc3RlcCwgaW5kZXgpID0+IHtcbiAgLy8gICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIC8vICAgICAgIHN0ZXAuc3RlcF9udW1iZXIgPSBpbmRleDtcbiAgLy8gICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIC8vICAgICAgIHN0ZXAuc3RlcE51bWJlciA9IGluZGV4O1xuXG4gIC8vICAgICAgIGNvbnN0IHBvbHlsaW5lT3B0aW9ucyA9IHtcbiAgLy8gICAgICAgICBwYXRoOiBzdGVwLnBhdGgsXG4gIC8vICAgICAgICAgc3Ryb2tlQ29sb3I6IG9wdGlvbnMuc3Ryb2tlQ29sb3IsXG4gIC8vICAgICAgICAgc3Ryb2tlT3BhY2l0eTogb3B0aW9ucy5zdHJva2VPcGFjaXR5LFxuICAvLyAgICAgICAgIHN0cm9rZVdlaWdodDogb3B0aW9ucy5zdHJva2VXZWlnaHQsXG4gIC8vICAgICAgIH07XG5cbiAgLy8gICAgICAgaWYgKG9wdGlvbnMuaWNvbnMpIHtcbiAgLy8gICAgICAgICBwb2x5bGluZU9wdGlvbnMuaWNvbnMgPSBvcHRpb25zLmljb25zO1xuICAvLyAgICAgICB9XG5cbiAgLy8gICAgICAgc2VsZi5kcmF3UG9seWxpbmUocG9seWxpbmVPcHRpb25zKTtcblxuICAvLyAgICAgICBvcHRpb25zLnN0ZXAoc3RlcCk7XG4gIC8vICAgICB9KTtcbiAgLy8gICB9XG4gIC8vIH1cbn07XG5cbmNsYXNzIFJvdXRlIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMub3JpZ2luID0gb3B0aW9ucy5vcmlnaW47XG4gICAgdGhpcy5kZXN0aW5hdGlvbiA9IG9wdGlvbnMuZGVzdGluYXRpb247XG4gICAgdGhpcy53YXlwb2ludHMgPSBvcHRpb25zLndheXBvaW50cztcblxuICAgIHRoaXMubWFwID0gb3B0aW9ucy5tYXA7XG4gICAgdGhpcy5yb3V0ZSA9IG9wdGlvbnMucm91dGU7XG4gICAgdGhpcy5zdGVwX2NvdW50ID0gMDtcbiAgICB0aGlzLnN0ZXBzID0gdGhpcy5yb3V0ZS5sZWdzWzBdLnN0ZXBzO1xuICAgIHRoaXMuc3RlcHNfbGVuZ3RoID0gdGhpcy5zdGVwcy5sZW5ndGg7XG5cbiAgICBjb25zdCBwb2x5bGluZU9wdGlvbnMgPSB7XG4gICAgICBwYXRoOiBuZXcgZ29vZ2xlLm1hcHMuTVZDQXJyYXkoKSxcbiAgICAgIHN0cm9rZUNvbG9yOiBvcHRpb25zLnN0cm9rZUNvbG9yLFxuICAgICAgc3Ryb2tlT3BhY2l0eTogb3B0aW9ucy5zdHJva2VPcGFjaXR5LFxuICAgICAgc3Ryb2tlV2VpZ2h0OiBvcHRpb25zLnN0cm9rZVdlaWdodCxcbiAgICB9O1xuXG4gICAgaWYgKG9wdGlvbnMuaWNvbnMpIHtcbiAgICAgIHBvbHlsaW5lT3B0aW9ucy5pY29ucyA9IG9wdGlvbnMuaWNvbnM7XG4gICAgfVxuXG4gICAgdGhpcy5wb2x5bGluZSA9IHRoaXMubWFwLmRyYXdQb2x5bGluZShwb2x5bGluZU9wdGlvbnMpLmdldFBhdGgoKTtcbiAgfVxuXG4gIGdldFJvdXRlKG9wdGlvbnMpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIHRoaXMubWFwLmdldFJvdXRlcyh7XG4gICAgICBvcmlnaW46IHRoaXMub3JpZ2luLFxuICAgICAgZGVzdGluYXRpb246IHRoaXMuZGVzdGluYXRpb24sXG4gICAgICB0cmF2ZWxNb2RlOiBvcHRpb25zLnRyYXZlbE1vZGUsXG4gICAgICB3YXlwb2ludHM6IHRoaXMud2F5cG9pbnRzIHx8IFtdLFxuICAgICAgZXJyb3I6IG9wdGlvbnMuZXJyb3IsXG4gICAgICBjYWxsYmFjayhyb3V0ZXMpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHNlbGYucm91dGUgPSByb3V0ZXNbMF07XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuY2FsbGJhY2spIHtcbiAgICAgICAgICBvcHRpb25zLmNhbGxiYWNrLmNhbGwoc2VsZik7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBiYWNrKCkge1xuICAgIGlmICh0aGlzLnN0ZXBfY291bnQgPiAwKSB7XG4gICAgICB0aGlzLnN0ZXBfY291bnQgLT0gMTtcbiAgICAgIGNvbnN0IHsgcGF0aCwgfSA9IHRoaXMucm91dGUubGVnc1swXS5zdGVwc1t0aGlzLnN0ZXBfY291bnRdO1xuXG4gICAgICBwYXRoLmZvckVhY2goKCkgPT4gdGhpcy5wb2x5bGluZS5wb3AoKSk7XG4gICAgfVxuICB9XG5cbiAgZm9yd2FyZCgpIHtcbiAgICBpZiAodGhpcy5zdGVwX2NvdW50IDwgdGhpcy5zdGVwc19sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHsgcGF0aCwgfSA9IHRoaXMucm91dGUubGVnc1swXS5zdGVwc1t0aGlzLnN0ZXBfY291bnRdO1xuXG4gICAgICBwYXRoLmZvckVhY2goY29vcmRpbmF0ZSA9PiB0aGlzLnBvbHlsaW5lLnB1c2goY29vcmRpbmF0ZSkpO1xuXG4gICAgICB0aGlzLnN0ZXBfY291bnQgKz0gMTtcbiAgICB9XG4gIH1cbn1cblxuR01hcHMuUm91dGUgPSBSb3V0ZTtcblxuZXhwb3J0IGRlZmF1bHQgR01hcHM7XG4iLCJpbXBvcnQgR01hcHMgZnJvbSAnLi9jb3JlJztcblxuY29uc3QgcGFyc2VDb2xvciA9IChjb2xvciwgb3BhY2l0eSkgPT4ge1xuICBsZXQgcGFyc2VkQ29sb3I7XG5cbiAgaWYgKGNvbG9yWzBdID09PSAnIycpIHtcbiAgICBwYXJzZWRDb2xvciA9IGNvbG9yLnJlcGxhY2UoJyMnLCAnMHgnKTtcblxuICAgIGlmIChvcGFjaXR5KSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG9wYWNpdHkgPSBNYXRoLm1pbigxLCBNYXRoLm1heChwYXJzZUZsb2F0KG9wYWNpdHkpLCAwKSk7XG5cbiAgICAgIGlmIChvcGFjaXR5ID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnMHgwMDAwMDAwMCc7XG4gICAgICB9XG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgb3BhY2l0eSA9IChvcGFjaXR5ICogMjU1KS50b1N0cmluZygxNik7XG5cbiAgICAgIGlmIChvcGFjaXR5Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgb3BhY2l0eSArPSBvcGFjaXR5O1xuICAgICAgfVxuXG4gICAgICBwYXJzZWRDb2xvciA9IHBhcnNlZENvbG9yLnNsaWNlKDAsIDgpICsgb3BhY2l0eTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFyc2VkQ29sb3I7XG59O1xuXG4vKipcbiAqIEV4dGVuZHMgR01hcHMgdG8gZ2VuZXJhdGUgc3RhdGljIG1hcHMuXG4gKiBAbW9kdWxlIFN0YXRpY1xuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhbiBVUkwgZm9yIGEgc3RhdGljIG1hcCBmcm9tIGN1cnJlbnQgR01hcHMgbWFwLlxuICogQGZ1bmN0aW9uIHRvSW1hZ2VcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRoZSBgb3B0aW9uc2Agb2JqZWN0IHNob3VsZCBjb250YWluOlxuICogQHBhcmFtIHthcnJheX0gb3B0aW9ucy5zaXplIC0gV2lkdGggYW5kIGhlaWdodCBvZiB0aGUgaW1hZ2UuXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuR01hcHMucHJvdG90eXBlLnRvSW1hZ2UgPSBmdW5jdGlvbiB0b0ltYWdlKG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7IHNpemUgPSBbdGhpcy5lbGVtZW50LmNsaWVudFdpZHRoLCB0aGlzLmVsZW1lbnQuY2xpZW50SGVpZ2h0XSwgem9vbSA9IHRoaXMuZ2V0Wm9vbSgpLCB9ID0gb3B0aW9ucztcblxuICBjb25zdCBzdGF0aWNNYXBPcHRpb25zID0ge1xuICAgIHNpemUsXG4gICAgem9vbSxcbiAgICBsYXRpdHVkZTogdGhpcy5nZXRDZW50ZXIoKS5sYXQoKSxcbiAgICBsb25naXR1ZGU6IHRoaXMuZ2V0Q2VudGVyKCkubG5nKCksXG4gICAgbWFya2VyczogdGhpcy5tYXJrZXJzLm1hcChtYXJrZXIgPT4gKHtcbiAgICAgIGxhdGl0dWRlOiBtYXJrZXIuZ2V0UG9zaXRpb24oKS5sYXQoKSxcbiAgICAgIGxvbmdpdHVkZTogbWFya2VyLmdldFBvc2l0aW9uKCkubG5nKCksXG4gICAgfSkpLFxuICB9O1xuXG4gIGlmICh0aGlzLnBvbHlsaW5lcy5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgcG9seWxpbmUgPSB0aGlzLnBvbHlsaW5lc1swXTtcblxuICAgIHN0YXRpY01hcE9wdGlvbnMucG9seWxpbmUgPSB7XG4gICAgICBwYXRoOiBnb29nbGUubWFwcy5nZW9tZXRyeS5lbmNvZGluZy5lbmNvZGVQYXRoKHBvbHlsaW5lLmdldFBhdGgoKSksXG4gICAgICBzdHJva2VDb2xvcjogcG9seWxpbmUuc3Ryb2tlQ29sb3IsXG4gICAgICBzdHJva2VPcGFjaXR5OiBwb2x5bGluZS5zdHJva2VPcGFjaXR5LFxuICAgICAgc3Ryb2tlV2VpZ2h0OiBwb2x5bGluZS5zdHJva2VXZWlnaHQsXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBHTWFwcy5zdGF0aWNNYXBVUkwoc3RhdGljTWFwT3B0aW9ucyk7XG59O1xuXG5jb25zdCBidWlsZE1hcmtlclBhcmFtZXRlcnMgPSAobWFya2VyKSA9PiB7XG4gIGNvbnN0IG1hcmtlclBhcmFtZXRlcnMgPSBbXTtcblxuICBjb25zdCB7IGFkZHJlc3MsIGxhdCwgbGF0aXR1ZGUgPSBsYXQsIGxuZywgbG9uZ2l0dWRlID0gbG5nLCBzaXplLCBpY29uLCBjb2xvciwgbGFiZWwsIC4uLm1hcmtlck9wdGlvbnMgfSA9IG1hcmtlcjtcblxuICBjb25zdCBsb2NhdGlvbiA9IGFkZHJlc3MgfHwgYCR7bGF0aXR1ZGV9LCR7bG9uZ2l0dWRlfWA7XG5cbiAgaWYgKHNpemUpIHtcbiAgICBtYXJrZXJQYXJhbWV0ZXJzLnB1c2goYHNpemU6JHtzaXplfWApO1xuICB9XG5cbiAgaWYgKGljb24pIHtcbiAgICBtYXJrZXJQYXJhbWV0ZXJzLnB1c2goYGljb246JHtlbmNvZGVVUkkoaWNvbil9YCk7XG4gIH1cblxuICBpZiAoY29sb3IpIHtcbiAgICBtYXJrZXJQYXJhbWV0ZXJzLnB1c2goYGNvbG9yOiR7Y29sb3IucmVwbGFjZSgnIycsICcweCcpfWApO1xuICB9XG5cbiAgaWYgKGxhYmVsKSB7XG4gICAgbWFya2VyUGFyYW1ldGVycy5wdXNoKGBsYWJlbDoke2xhYmVsWzBdLnRvVXBwZXJDYXNlKCl9YCk7XG4gIH1cblxuICBPYmplY3Qua2V5cyhtYXJrZXJPcHRpb25zKS5mb3JFYWNoKGtleSA9PiBtYXJrZXJQYXJhbWV0ZXJzLnB1c2goYCR7a2V5fToke21hcmtlclBhcmFtZXRlcnNba2V5XX1gKSk7XG5cbiAgbWFya2VyUGFyYW1ldGVycy5wdXNoKGxvY2F0aW9uKTtcblxuICByZXR1cm4gbWFya2VyUGFyYW1ldGVycztcbn07XG5cbmNvbnN0IGJ1aWxkUGF0aFBhcmFtZXRlcnMgPSAocG9seWxpbmUpID0+IHtcbiAgY29uc3QgeyBwYXRoLCB9ID0gcG9seWxpbmU7XG4gIGNvbnN0IHBvbHlsaW5lUGFyYW1ldGVycyA9IFtdO1xuXG4gIGlmIChwb2x5bGluZS5zdHJva2VXZWlnaHQpIHtcbiAgICBwb2x5bGluZVBhcmFtZXRlcnMucHVzaChgd2VpZ2h0OiR7cGFyc2VJbnQocG9seWxpbmUuc3Ryb2tlV2VpZ2h0LCAxMCl9YCk7XG4gIH1cblxuICBpZiAocG9seWxpbmUuc3Ryb2tlQ29sb3IpIHtcbiAgICBwb2x5bGluZVBhcmFtZXRlcnMucHVzaChgY29sb3I6JHtwYXJzZUNvbG9yKHBvbHlsaW5lLnN0cm9rZUNvbG9yLCBwb2x5bGluZS5zdHJva2VPcGFjaXR5KX1gKTtcbiAgfVxuXG4gIGlmIChwb2x5bGluZS5maWxsQ29sb3IpIHtcbiAgICBwb2x5bGluZVBhcmFtZXRlcnMucHVzaChgZmlsbGNvbG9yOiR7cGFyc2VDb2xvcihwb2x5bGluZS5maWxsQ29sb3IsIHBvbHlsaW5lLmZpbGxPcGFjaXR5KX1gKTtcbiAgfVxuXG4gIGlmIChwYXRoLmpvaW4pIHtcbiAgICBwYXRoLmZvckVhY2goY29vcmRpbmF0ZXMgPT4gcG9seWxpbmVQYXJhbWV0ZXJzLnB1c2goY29vcmRpbmF0ZXMuam9pbignLCcpKSk7XG4gIH0gZWxzZSB7XG4gICAgcG9seWxpbmVQYXJhbWV0ZXJzLnB1c2goYGVuYzoke3BhdGh9YCk7XG4gIH1cblxuICByZXR1cm4gcG9seWxpbmVQYXJhbWV0ZXJzO1xufTtcblxuY29uc3QgYnVpbGRTdHlsZVBhcmFtZXRlcnMgPSAoc3R5bGUpID0+IHtcbiAgY29uc3Qgc3R5bGVQYXJhbWV0ZXJzID0gW107XG5cbiAgaWYgKHN0eWxlLmZlYXR1cmVUeXBlKSB7XG4gICAgc3R5bGVQYXJhbWV0ZXJzLnB1c2goYGZlYXR1cmU6JHtzdHlsZS5mZWF0dXJlVHlwZS50b0xvd2VyQ2FzZSgpfWApO1xuICB9XG5cbiAgaWYgKHN0eWxlLmVsZW1lbnRUeXBlKSB7XG4gICAgc3R5bGVQYXJhbWV0ZXJzLnB1c2goYGVsZW1lbnQ6JHtzdHlsZS5lbGVtZW50VHlwZS50b0xvd2VyQ2FzZSgpfWApO1xuICB9XG5cbiAgaWYgKHN0eWxlLnN0eWxlcnMubGVuZ3RoKSB7XG4gICAgc3R5bGUuc3R5bGVycy5mb3JFYWNoKChzdHlsZXIpID0+IHtcbiAgICAgIE9iamVjdC5rZXlzKHN0eWxlcikuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gKGtleSA9PT0gJ2h1ZScgfHwga2V5ID09PSAnY29sb3InKSA/IHN0eWxlcltrZXldLnJlcGxhY2UoJyMnLCAnMHgnKSA6IHN0eWxlcltrZXldO1xuXG4gICAgICAgIHN0eWxlUGFyYW1ldGVycy5wdXNoKGAke2tleX06JHt2YWx1ZX1gKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlUGFyYW1ldGVycztcbn07XG5cbkdNYXBzLnN0YXRpY01hcFVSTCA9IGZ1bmN0aW9uIHN0YXRpY01hcFVSTChiYXNlT3B0aW9ucykge1xuICBjb25zdCB7IHVybCwgbGF0LCBsYXRpdHVkZSA9IGxhdCwgbG5nLCBsb25naXR1ZGUgPSBsbmcsIGNlbnRlciwgYWRkcmVzcywgem9vbSA9IDE1LCBtYXJrZXJzID0gW10sIHN0eWxlcywgcG9seWxpbmUsIHZpc2libGUsIHNpemUgPSBbNjMwLCAzMDBdLCAuLi5vcHRpb25zIH0gPSBiYXNlT3B0aW9ucztcbiAgY29uc3QgZGVmYXVsdFJvb3QgPSBgJHt3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09ICdmaWxlOicgPyAnaHR0cDonIDogd2luZG93LmxvY2F0aW9uLnByb3RvY29sfS8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9zdGF0aWNtYXBgO1xuXG4gIGxldCByb290ID0gdXJsIHx8IGRlZmF1bHRSb290O1xuICBjb25zdCBwYXJhbWV0ZXJzID0gW107XG5cbiAgcm9vdCArPSAnPyc7XG5cbiAgLy8gTWFwIG9wdGlvbnNcbiAgaWYgKGNlbnRlcikge1xuICAgIHBhcmFtZXRlcnMucHVzaChgY2VudGVyPSR7Y2VudGVyfWApO1xuICB9IGVsc2UgaWYgKGFkZHJlc3MpIHtcbiAgICBwYXJhbWV0ZXJzLnB1c2goYGNlbnRlcj0ke2FkZHJlc3N9YCk7XG4gIH0gZWxzZSBpZiAobGF0aXR1ZGUgJiYgbG9uZ2l0dWRlKSB7XG4gICAgcGFyYW1ldGVycy5wdXNoKGBjZW50ZXI9JHtsYXRpdHVkZX0sJHtsb25naXR1ZGV9YCk7XG4gIH0gZWxzZSBpZiAodmlzaWJsZSkge1xuICAgIHBhcmFtZXRlcnMucHVzaChgdmlzaWJsZT0ke2VuY29kZVVSSSh2aXNpYmxlLmpvaW4oJ3wnKSl9YCk7XG4gIH1cblxuICBwYXJhbWV0ZXJzLnB1c2goYHNpemU9JHtzaXplLmpvaW4oJ3gnKX1gKTtcbiAgcGFyYW1ldGVycy5wdXNoKGB6b29tPSR7em9vbX1gKTtcblxuICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKGtleSA9PiBwYXJhbWV0ZXJzLnB1c2goYCR7a2V5fT0ke29wdGlvbnNba2V5XX1gKSk7XG5cbiAgLy8gTWFwIHN0eWxlXG4gIGlmIChzdHlsZXMpIHtcbiAgICBzdHlsZXMuZm9yRWFjaCgoc3R5bGUpID0+IHtcbiAgICAgIGNvbnN0IHN0eWxlUGFyYW1ldGVycyA9IGJ1aWxkU3R5bGVQYXJhbWV0ZXJzKHN0eWxlKTtcblxuICAgICAgcGFyYW1ldGVycy5wdXNoKGBzdHlsZT0ke2VuY29kZVVSSShzdHlsZVBhcmFtZXRlcnMuam9pbignfCcpKX1gKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIE1hcmtlcnNcbiAgaWYgKG1hcmtlcnMubGVuZ3RoKSB7XG4gICAgbWFya2Vycy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgIGNvbnN0IG1hcmtlclBhcmFtZXRlcnMgPSBidWlsZE1hcmtlclBhcmFtZXRlcnMobWFya2VyKTtcbiAgICAgIHBhcmFtZXRlcnMucHVzaChgbWFya2Vycz0ke2VuY29kZVVSSShtYXJrZXJQYXJhbWV0ZXJzLmpvaW4oJ3wnKSl9YCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBQb2x5bGluZXNcbiAgaWYgKHBvbHlsaW5lKSB7XG4gICAgY29uc3QgcG9seWxpbmVQYXJhbWV0ZXJzID0gYnVpbGRQYXRoUGFyYW1ldGVycyhwb2x5bGluZSk7XG5cbiAgICBwYXJhbWV0ZXJzLnB1c2goYHBhdGg9JHtlbmNvZGVVUkkocG9seWxpbmVQYXJhbWV0ZXJzLmpvaW4oJ3wnKSl9YCk7XG4gIH1cblxuICAvLyBSZXRpbmEgc3VwcG9ydFxuICBjb25zdCBkcGkgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuICBwYXJhbWV0ZXJzLnB1c2goYHNjYWxlPSR7ZHBpfWApO1xuXG4gIHJldHVybiByb290ICsgcGFyYW1ldGVycy5qb2luKCcmJyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHTWFwcztcbiIsImltcG9ydCBHTWFwcywgeyBnZXRFbGVtZW50QnlJZCwgc2V0dXBFdmVudHMgfSBmcm9tICcuL2NvcmUnO1xuXG4vKipcbiAqIEV4dGVuZHMgR01hcHMgdG8gdXNlIFN0cmVldFZpZXcgcGFub3JhbWFzXG4gKiBAbW9kdWxlIFN0cmVldFZpZXdcbiAqL1xuXG5jb25zdCBTVFJFRVRWSUVXX0VWRU5UUyA9IFsnY2xvc2VjbGljaycsICdsaW5rc19jaGFuZ2VkJywgJ3Bhbm9fY2hhbmdlZCcsICdwb3NpdGlvbl9jaGFuZ2VkJywgJ3Bvdl9jaGFuZ2VkJywgJ3Jlc2l6ZScsICd2aXNpYmxlX2NoYW5nZWQnXTtcblxuLyoqXG4gKiBEaXNwbGF5IGEgU3RyZWV0IFZpZXcgUGFub3JhbWEgZm9yIGEgcG9zaXRpb24uXG4gKiBAZnVuY3Rpb24gY3JlYXRlUGFub3JhbWFcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRoZSBgb3B0aW9uc2Agb2JqZWN0IHNob3VsZCBjb250YWluOlxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMubGF0aXR1ZGUgLSBMYXRpdHVkZSBvZiB0aGUgY29vcmRpbmF0ZSB3aGVyZSB0aGUgcGFub3JhbWEgaXMgcGxhY2VkLiBJZiBub3Qgc2V0LCBpdCB0YWtlcyB0aGUgTWFwJ3MgY2VudGVyLlxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMubG9uZ2l0dWRlIC0gTG9uZ2l0dWRlIG9mIHRoZSBjb29yZGluYXRlIHdoZXJlIHRoZSBwYW5vcmFtYSBpcyBwbGFjZWQuIElmIG5vdCBzZXQsIGl0IHRha2VzIHRoZSBNYXAncyBjZW50ZXIuXG4gKiBAcGFyYW0ge2dvb2dsZS5tYXBzLkxhdExuZ30gb3B0aW9ucy5wb3NpdGlvbiAtIEEgYGdvb2dsZS5tYXBzLkxhdExuZ2AgY29vcmRpbmF0ZSB3aGVyZSB0aGUgcGFub3JhbWEgaXMgcGxhY2VkLiBJZiBzZXQsIGBsYXRpdHVkZWAgYW5kIGBsb25naXR1ZGVgIGFyZSBpZ25vcmVkLlxuICpcbiAqIEBzZWUgYG9wdGlvbnNgIGFsc28gYWNjZXB0cyBhbnkgb3B0aW9uIGRlZmluZWQgaW4gdGhlIFtvZmZpY2lhbCBkb2N1bWVudGF0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjU3RyZWV0Vmlld1Bhbm9yYW1hT3B0aW9ucykgYW5kIGFueSBldmVudCBkZWZpbmVkIGluIHRoZSBbXCJFdmVudHNcIiBzZWN0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjU3RyZWV0Vmlld1Bhbm9yYW1hKS5cbiAqXG4gKiBAcmV0dXJucyB7Z29vZ2xlLm1hcHMuU3RyZWV0Vmlld1Bhbm9yYW1hfVxuICovXG5HTWFwcy5wcm90b3R5cGUuY3JlYXRlUGFub3JhbWEgPSBmdW5jdGlvbiBjcmVhdGVQYW5vcmFtYShiYXNlT3B0aW9ucykge1xuICBjb25zdCB7IGxhdCA9IHRoaXMuZ2V0Q2VudGVyKCkubGF0KCksIGxhdGl0dWRlID0gbGF0LCBsbmcgPSB0aGlzLmdldENlbnRlcigpLmxuZygpLCBsb25naXR1ZGUgPSBsbmcsIC4uLm9wdGlvbnMgfSA9IGJhc2VPcHRpb25zO1xuXG4gIGNvbnN0IHN0cmVldFZpZXdPcHRpb25zID0ge1xuICAgIGxhdGl0dWRlLFxuICAgIGxvbmdpdHVkZSxcbiAgICBpbnN0YW5jZTogdGhpcyxcbiAgICAuLi5vcHRpb25zLFxuICB9O1xuXG4gIHRoaXMucGFub3JhbWEgPSBHTWFwcy5jcmVhdGVQYW5vcmFtYShzdHJlZXRWaWV3T3B0aW9ucyk7XG5cbiAgdGhpcy5tYXAuc2V0U3RyZWV0Vmlldyh0aGlzLnBhbm9yYW1hKTtcblxuICByZXR1cm4gdGhpcy5wYW5vcmFtYTtcbn07XG5cbkdNYXBzLmNyZWF0ZVBhbm9yYW1hID0gZnVuY3Rpb24gY3JlYXRlUGFub3JhbWEoYmFzZU9wdGlvbnMpIHtcbiAgY29uc3Qge1xuICAgIGVsLFxuICAgIGVsZW1lbnQgPSBlbCxcbiAgICBjb250ZXh0LFxuICAgIGxhdCxcbiAgICBsYXRpdHVkZSA9IGxhdCxcbiAgICBsbmcsXG4gICAgbG9uZ2l0dWRlID0gbG5nLFxuICAgIHBvc2l0aW9uID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsYXRpdHVkZSwgbG9uZ2l0dWRlKSxcbiAgICBpbnN0YW5jZSA9IHdpbmRvdyxcbiAgICAuLi5vcHRpb25zXG4gIH0gPSBiYXNlT3B0aW9ucztcblxuICBjb25zdCBjb250YWluZXJFbGVtZW50ID0gZ2V0RWxlbWVudEJ5SWQoZWxlbWVudCwgY29udGV4dCk7XG5cbiAgY29uc3QgZmlsdGVyZWRPcHRpb25zID0gT2JqZWN0LmtleXMob3B0aW9ucykucmVkdWNlKChoYXNoLCBrZXkpID0+IHtcbiAgICBpZiAoU1RSRUVUVklFV19FVkVOVFMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgcmV0dXJuIGhhc2g7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgLi4uaGFzaCwgW2tleV06IG9wdGlvbnNba2V5XSwgfTtcbiAgfSwge30pO1xuXG4gIGNvbnN0IHN0cmVldFZpZXdPcHRpb25zID0ge1xuICAgIC4uLmZpbHRlcmVkT3B0aW9ucyxcbiAgICBwb3NpdGlvbixcbiAgICB2aXNpYmxlOiB0cnVlLFxuICB9O1xuXG4gIGNvbnN0IHBhbm9yYW1hID0gbmV3IGdvb2dsZS5tYXBzLlN0cmVldFZpZXdQYW5vcmFtYShjb250YWluZXJFbGVtZW50LCBzdHJlZXRWaWV3T3B0aW9ucyk7XG5cbiAgc2V0dXBFdmVudHMoeyBldmVudHM6IFNUUkVFVFZJRVdfRVZFTlRTLCBvYmplY3Q6IHBhbm9yYW1hLCBpbnN0YW5jZSwgaGFuZGxlcnM6IG9wdGlvbnMsIH0pO1xuXG4gIHJldHVybiBwYW5vcmFtYTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXBzO1xuIiwiaW1wb3J0IEdNYXBzIGZyb20gJy4vY29yZSc7XG5cbi8qKlxuICogRXh0ZW5kcyBHTWFwcyB0byBhZGQgc3R5bGVkIG1hcCB0eXBlcy5cbiAqIEBtb2R1bGUgU3R5bGVzXG4gKi9cblxuLyoqXG4gKiBBZGQgYSBbc3R5bGVkIG1hcCB0eXBlXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9tYXB0eXBlcyNTdHlsZWRNYXBzKSBpbiB0aGUgTWFwLCB3aGljaCBjYW4gYmUgdXNlZCB3aXRoIHRoZSBiYXNlIG1hcCB0eXBlcyAoYGh5YnJpZGAsIGByb2FkbWFwYCwgYHNhdGVsbGl0ZWAgYW5kIGB0ZXJyYWluYCkuXG4gKiBAZnVuY3Rpb24gYWRkU3R5bGVcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRoZSBgb3B0aW9uc2Agb2JqZWN0IHNob3VsZCBjb250YWluOlxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubWFwVHlwZUlkIC0gQSBzaW1wbGUgaWRlbnRpZmllciBmb3IgdGhlIHN0eWxlZCBtYXAgdHlwZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnN0eWxlZE1hcE5hbWUgLSBBIG5hbWUgZm9yIHRoZSBzdHlsZWQgbWFwIHR5cGUuIEl0IHdpbGwgYmUgZGlzcGxheWVkIGluIHRoZSBtYXAgdHlwZSBjb250cm9sLlxuICogQHBhcmFtIHthcnJheX0gb3B0aW9ucy5zdHlsZXMgLSBBbiBhcnJheSBvZiBbYE1hcFR5cGVTdHlsZWBdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNNYXBUeXBlU3R5bGUpIG9iamVjdHMuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5hZGRTdHlsZSA9IGZ1bmN0aW9uIGFkZFN0eWxlKG9wdGlvbnMpIHtcbiAgY29uc3Qgc3R5bGVkTWFwVHlwZSA9IG5ldyBnb29nbGUubWFwcy5TdHlsZWRNYXBUeXBlKG9wdGlvbnMuc3R5bGVzLCB7IG5hbWU6IG9wdGlvbnMuc3R5bGVkTWFwTmFtZSwgfSk7XG5cbiAgdGhpcy5tYXAubWFwVHlwZXMuc2V0KG9wdGlvbnMubWFwVHlwZUlkLCBzdHlsZWRNYXBUeXBlKTtcbn07XG5cbi8qKlxuICogU2V0IGEgW3N0eWxlZCBtYXAgdHlwZV0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvbWFwdHlwZXMjU3R5bGVkTWFwcykgdG8gdGhlIE1hcC4gVGhlIG1hcCB0eXBlIHNob3VsZCBiZSBkZWZpbmVkIGJlZm9yZSB3aXRoIHtAbGluayBHTWFwcyNhZGRTdHlsZX0uXG4gKiBAZnVuY3Rpb24gc2V0U3R5bGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWFwVHlwZUlkIC0gVGhlIHN0eWxlZCBtYXAgdHlwZSdzIGlkZW50aWZpZXIuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5zZXRTdHlsZSA9IGZ1bmN0aW9uIHNldFN0eWxlKG1hcFR5cGVJZCkge1xuICB0aGlzLm1hcC5zZXRNYXBUeXBlSWQobWFwVHlwZUlkKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXBzO1xuIiwiaW1wb3J0IEdNYXBzIGZyb20gJy4vY29yZSc7XG5cbi8qKlxuICogRXh0ZW5kcyBHTWFwcyB0byBhZGQgdXRpbHMgZnVuY3Rpb25zLlxuICogQG1vZHVsZSBVdGlsc1xuICovXG5cbi8qKlxuICogR2VvbG9jYXRlIHVzaW5nIGJyb3dzZXIncyBXZWIgQVBJLlxuICogQGZ1bmN0aW9uIGdlb2xvY2F0ZVxuICogQHN0YXRpY1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBvYmplY3Qgc2hvdWxkIGNvbnRhaW46XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLmFsd2F5cyAtIEEgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIGFmdGVyIHRoZSBgc3VjY2Vzc2AsIGBlcnJvcmAgYW5kIGBub3Rfc3VwcG9ydGVkYCBjYWxsYmFja3MuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLnN1Y2Nlc3MgLSBBIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBhZnRlciB0aGUgYnJvd3NlciBmaW5kIGl0cyBnZW9sb2NhdGlvbi5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMuZXJyb3IgLSBBIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBhZnRlciB0aGUgYnJvd3NlciBmYWlscyBhdCBmaW5kaW5nIGl0cyBnZW9sb2NhdGlvbi5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMubm90X3N1cHBvcnRlZCAtIEEgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIGlmIHRoZSBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBnZW9sb2NhdGlvbi5cbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zLm9wdGlvbnMgLSBPYmplY3Qgd2l0aCBhbGwgb3B0aW9ucyBkZWZpbmVkIGluIFtQb3NpdGlvbk9wdGlvbnNdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Qb3NpdGlvbk9wdGlvbnMpLlxuICovXG5HTWFwcy5nZW9sb2NhdGUgPSBmdW5jdGlvbiBnZW9sb2NhdGUob3B0aW9ucykge1xuICBjb25zdCBjb21wbGV0ZUNhbGxiYWNrID0gb3B0aW9ucy5hbHdheXMgfHwgb3B0aW9ucy5jb21wbGV0ZTtcblxuICBpZiAod2luZG93Lm5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgIHdpbmRvdy5uYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKChwb3NpdGlvbikgPT4ge1xuICAgICAgaWYgKG9wdGlvbnMuc3VjY2Vzcykge1xuICAgICAgICBvcHRpb25zLnN1Y2Nlc3MocG9zaXRpb24pO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29tcGxldGVDYWxsYmFjaykge1xuICAgICAgICBjb21wbGV0ZUNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICBpZiAob3B0aW9ucy5lcnJvcikge1xuICAgICAgICBvcHRpb25zLmVycm9yKGVycm9yKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbXBsZXRlQ2FsbGJhY2spIHtcbiAgICAgICAgY29tcGxldGVDYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH0sIG9wdGlvbnMub3B0aW9ucyk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKG9wdGlvbnMubm90X3N1cHBvcnRlZCkge1xuICAgICAgb3B0aW9ucy5ub3Rfc3VwcG9ydGVkKCk7XG4gICAgfVxuXG4gICAgaWYgKGNvbXBsZXRlQ2FsbGJhY2spIHtcbiAgICAgIGNvbXBsZXRlQ2FsbGJhY2soKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogR2VvY29kZSB1c2luZyBHb29nbGUgTWFwcyBHZW9jb2Rpbmcgc2VydmljZS5cbiAqIEBmdW5jdGlvbiBnZW9jb2RlXG4gKiBAc3RhdGljXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgYG9wdGlvbnNgIG9iamVjdCBzaG91bGQgY29udGFpbjpcbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLmxhdGl0dWRlIC0gTGF0aXR1ZGUgb2YgdGhlIGNvb3JkaW5hdGUgdG8gZ2VvY29kZS4gSWYgYGxhdGl0dWRlYCBhbmQgYGxvbmdpdHVkZWAgYXJlIHNldCwgYGxvY2F0aW9uYCBpcyBpZ25vcmVkLlxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMubG9uZ2l0dWRlIC0gTG9uZ2l0dWRlIG9mIHRoZSBjb29yZGluYXRlIHRvIGdlb2NvZGUuIElmIGBsYXRpdHVkZWAgYW5kIGBsb25naXR1ZGVgIGFyZSBzZXQsIGBsb2NhdGlvbmAgaXMgaWdub3JlZC5cbiAqIEBwYXJhbSB7Z29vZ2xlLm1hcHMuTGF0TG5nfSBvcHRpb25zLmxvY2F0aW9uIC0gQSBgZ29vZ2xlLm1hcHMuTGF0TG5nYCBjb29yZGluYXRlIHRvIGdlb2NvZGUuIElmIHNldCwgYGxhdGl0dWRlYCBhbmQgYGxvbmdpdHVkZWAgYXJlIGlnbm9yZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLmNhbGxiYWNrIC0gRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIGFmdGVyIHRoZSByZXN1bHRzIGFyZSByZXR1cm5lZC4gSXQgcmVjZWl2ZXMgMiBhcmd1bWVudHMsIHdoaWNoIGlzIGFuIGFycmF5IG9mIFtHZW9jb2RlclJlc3VsdF0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI0dlb2NvZGVyUmVzdWx0KSBvYmplY3RzIGFuZCB0aGUgW3JlcXVlc3QncyBzdGF0dXNdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNHZW9jb2RlclN0YXR1cykuXG4gKlxuICogQHNlZSBgb3B0aW9uc2AgYWxzbyBhY2NlcHRzIGFueSBvcHRpb24gZGVmaW5lZCBpbiB0aGUgW29mZmljaWFsIGRvY3VtZW50YXRpb25dKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNHZW9jb2RlclJlcXVlc3QpLlxuICpcbiAqL1xuR01hcHMuZ2VvY29kZSA9IGZ1bmN0aW9uIGdlb2NvZGUoYmFzZU9wdGlvbnMpIHtcbiAgY29uc3Qge1xuICAgIGNhbGxiYWNrLFxuICAgIGxhdCxcbiAgICBsYXRpdHVkZSA9IGxhdCxcbiAgICBsbmcsXG4gICAgbG9uZ2l0dWRlID0gbG5nLFxuICAgIGxvY2F0aW9uID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsYXRpdHVkZSwgbG9uZ2l0dWRlKSxcbiAgICAuLi5vcHRpb25zXG4gIH0gPSBiYXNlT3B0aW9ucztcblxuICB0aGlzLmdlb2NvZGVyID0gbmV3IGdvb2dsZS5tYXBzLkdlb2NvZGVyKCk7XG5cbiAgY29uc3QgZ2VvY29kZU9wdGlvbnMgPSB7XG4gICAgLi4ub3B0aW9ucyxcbiAgICBsb2NhdGlvbixcbiAgfTtcblxuICB0aGlzLmdlb2NvZGVyLmdlb2NvZGUoZ2VvY29kZU9wdGlvbnMsIGNhbGxiYWNrKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXBzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==