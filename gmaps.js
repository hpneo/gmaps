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

      var latLng = latLngFromArguments(args);
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

  var lagLng = Object(_core__WEBPACK_IMPORTED_MODULE_0__["latLngFromArguments"])(args);
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
 * `options` also accepts any option defined in the [official documentation](https://developers.google.com/maps/documentation/javascript/reference#PolylineOptions) and any event defined in the ["Events" section](https://developers.google.com/maps/documentation/javascript/reference#Polyline).
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
 * `options` also accepts any option defined in the [official documentation](https://developers.google.com/maps/documentation/javascript/reference#CircleOptions) and any event defined in the ["Events" section](https://developers.google.com/maps/documentation/javascript/reference#Circle).
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
 * `options` also accepts any option defined in the [official documentation](https://developers.google.com/maps/documentation/javascript/reference#RectangleOptions) and any event defined in the ["Events" section](https://developers.google.com/maps/documentation/javascript/reference#Rectangle).
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
 * `options` also accepts any option defined in the [official documentation](https://developers.google.com/maps/documentation/javascript/reference#PolygonOptions) and any event defined in the ["Events" section](https://developers.google.com/maps/documentation/javascript/reference#Polygon).
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
 * `options` also accepts an `events` object, which accepts only `click`.
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
 * `options` also accepts an `events` object, which accepts all events defined in the ["Events" section](https://developers.google.com/maps/documentation/javascript/reference#KmlLayer).
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
 * `options` also accepts any option defined in the [official documentation](https://developers.google.com/maps/documentation/javascript/reference#MapType).
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
 * `options` also accepts any option defined in the [official documentation](https://developers.google.com/maps/documentation/javascript/reference#MarkerOptions) and any event defined in the ["Events" section](https://developers.google.com/maps/documentation/javascript/reference#Marker).
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
 * `options` also accepts any option defined in the [official documentation](https://developers.google.com/maps/documentation/javascript/reference#DirectionsRequest).
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
 * `options` also accepts any option defined in the [official documentation](https://developers.google.com/maps/documentation/javascript/reference#StreetViewPanoramaOptions) and any event defined in the ["Events" section](https://developers.google.com/maps/documentation/javascript/reference#StreetViewPanorama).
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
 * @param {array} options.styles - An array of (`MapTypeStyle`)[https://developers.google.com/maps/documentation/javascript/reference#MapTypeStyle] objects.
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
 * `options` also accepts any option defined in the [official documentation](https://developers.google.com/maps/documentation/javascript/reference#GeocoderRequest).
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HTWFwcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9HTWFwcy8uL2xpYi9jb250cm9scy5qcyIsIndlYnBhY2s6Ly9HTWFwcy8uL2xpYi9jb3JlLmpzIiwid2VicGFjazovL0dNYXBzLy4vbGliL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9HTWFwcy8uL2xpYi9nZW9mZW5jZXMuanMiLCJ3ZWJwYWNrOi8vR01hcHMvLi9saWIvZ2VvbWV0cnkuanMiLCJ3ZWJwYWNrOi8vR01hcHMvLi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vR01hcHMvLi9saWIvbGF5ZXJzLmpzIiwid2VicGFjazovL0dNYXBzLy4vbGliL21hcF90eXBlcy5qcyIsIndlYnBhY2s6Ly9HTWFwcy8uL2xpYi9tYXJrZXJzLmpzIiwid2VicGFjazovL0dNYXBzLy4vbGliL292ZXJsYXlzLmpzIiwid2VicGFjazovL0dNYXBzLy4vbGliL3BvbHlmaWxscy5qcyIsIndlYnBhY2s6Ly9HTWFwcy8uL2xpYi9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vR01hcHMvLi9saWIvc3RhdGljLmpzIiwid2VicGFjazovL0dNYXBzLy4vbGliL3N0cmVldHZpZXcuanMiLCJ3ZWJwYWNrOi8vR01hcHMvLi9saWIvc3R5bGVzLmpzIiwid2VicGFjazovL0dNYXBzLy4vbGliL3V0aWxzLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRyb2wiLCJzdHlsZSIsImlkIiwidGl0bGUiLCJjbGFzc2VzIiwiY29udGVudCIsInBvc2l0aW9uIiwiZXZlbnRzIiwiZGlzYWJsZURlZmF1bHRTdHlsZXMiLCJjb250cm9sIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY3Vyc29yIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiYm94U2hhZG93IiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJwcm9wZXJ0eSIsImNsYXNzTmFtZSIsImlubmVySFRNTCIsIndpbmRvdyIsIkhUTUxFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJnb29nbGUiLCJtYXBzIiwiQ29udHJvbFBvc2l0aW9uIiwidG9VcHBlckNhc2UiLCJldmVudE5hbWUiLCJldmVudCIsImFkZERvbUxpc3RlbmVyIiwiY2FsbCIsImluZGV4IiwiR01hcHMiLCJwcm90b3R5cGUiLCJhZGRDb250cm9sIiwib3B0aW9ucyIsImNvbnRyb2xzIiwicHVzaCIsIm1hcCIsInJlbW92ZUNvbnRyb2wiLCJjb250cm9sSW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiY29udHJvbHNGb3JQb3NpdGlvbiIsImNvbnRyb2xJbmRleEluQ29sbGVjdGlvbiIsInJlbW92ZUF0IiwibGF0TG5nRnJvbUFyZ3VtZW50cyIsIkxhdExuZyIsImZsYXR0ZW5BcnJheSIsImFycmF5IiwicmVkdWNlIiwiY29sbGVjdGlvbiIsIml0ZW0iLCJjb25jYXQiLCJjb29yZHNUb0xhdExuZ3MiLCJjb29yZGluYXRlcyIsInVzZUdlb0pTT04iLCJmaXJzdENvb3JkaW5hdGUiLCJzZWNvbmRDb29yZGluYXRlIiwiYXJyYXlUb0xhdExuZyIsImNvb3JkaW5hdGUiLCJsZW5ndGgiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY29udGV4dCIsInNhbml0aXplZENsYXNzTmFtZSIsInJlcGxhY2UiLCIkIiwiZ2V0RWxlbWVudEJ5SWQiLCJzYW5pdGl6ZWRJZCIsImVsZW1lbnRzIiwiZ2V0RWxlbWVudCIsInNlbGVjdG9yT3JFbGVtZW50IiwibWF0Y2giLCJmaW5kQWJzb2x1dGVQb3NpdGlvbiIsImVsZW1lbnQiLCJsZWZ0IiwidG9wIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicmVjdGFuZ2xlIiwieCIsInNjcm9sbFgiLCJwYWdlWE9mZnNldCIsInkiLCJzY3JvbGxZIiwicGFnZVlPZmZzZXQiLCJvZmZzZXRQYXJlbnQiLCJpdGVyYXRvciIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJzZXR1cEV2ZW50TGlzdGVuZXIiLCJvYmplY3QiLCJpbnN0YW5jZSIsImhhbmRsZXIiLCJhZGRMaXN0ZW5lciIsImhpZGVDb250ZXh0TWVudSIsInNldHVwRXZlbnRzIiwiaGFuZGxlcnMiLCJNQVBfRVZFTlRTIiwiR01BUFNfTUVOVV9JRCIsImJhc2VPcHRpb25zIiwiRXJyb3IiLCJkaXYiLCJlbCIsImxhdCIsImxhdGl0dWRlIiwibG5nIiwibG9uZ2l0dWRlIiwiY2VudGVyIiwiem9vbSIsIm1hcFR5cGUiLCJ6b29tQ29udHJvbE9wdCIsInBhbkNvbnRyb2wiLCJ6b29tQ29udHJvbCIsIm1hcFR5cGVDb250cm9sIiwic2NhbGVDb250cm9sIiwic3RyZWV0Vmlld0NvbnRyb2wiLCJvdmVydmlld01hcENvbnRyb2wiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmtlckNsdXN0ZXJlciIsImVuYWJsZU5ld1N0eWxlIiwibWFwVHlwZUlkIiwiTWFwVHlwZUlkIiwibWFwQmFzZU9wdGlvbnMiLCJtYXBDb250cm9sc09wdGlvbnMiLCJ6b29tQ29udHJvbE9wdGlvbnMiLCJab29tQ29udHJvbFN0eWxlIiwiZmlsdGVyZWRPcHRpb25zIiwiaGFzaCIsImtleSIsImluY2x1ZGVzIiwiTWF0aCIsImNlaWwiLCJyYW5kb20iLCJEYXRlIiwibm93IiwiY29udGV4dE1lbnVzIiwidmlzdWFsUmVmcmVzaCIsInNjcm9sbFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJtYXBPcHRpb25zIiwiTWFwIiwib3ZlcmxheXMiLCJsYXllcnMiLCJzaW5nbGVMYXllcnMiLCJtYXJrZXJzIiwicG9seWxpbmVzIiwicm91dGVzIiwicG9seWdvbnMiLCJpbmZvV2luZG93Iiwib3ZlcmxheUVsZW1lbnQiLCJyZWdpc3RlcmVkRXZlbnRzIiwiYXBwbHkiLCJyaWdodGNsaWNrIiwiYnVpbGRDb250ZXh0TWVudSIsImNvbnRleHRNZW51RWxlbWVudCIsImh0bWwiLCJqb2luIiwiY29udGV4dE1lbnVJdGVtcyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY29udGV4dE1lbnVJdGVtIiwiY29udGV4dE1lbnVJdGVtTGlzdGVuZXIiLCJjb250ZXh0TWVudUl0ZW1MaXN0ZW5lckV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJhY3Rpb24iLCJjbGVhckxpc3RlbmVycyIsImFkZERvbUxpc3RlbmVyT25jZSIsInBpeGVsIiwib3ZlcmxheSIsIk92ZXJsYXlWaWV3Iiwic2V0TWFwIiwiZHJhdyIsInByb2plY3Rpb24iLCJnZXRQcm9qZWN0aW9uIiwibWFya2VyIiwiZ2V0UG9zaXRpb24iLCJmcm9tTGF0TG5nVG9Db250YWluZXJQaXhlbCIsImJ1aWxkQ29udGV4dE1lbnVIVE1MIiwic2V0VGltZW91dCIsImRpc3BsYXkiLCJvcHRpb24iLCJuYW1lIiwibWluV2lkdGgiLCJiYWNrZ3JvdW5kIiwibGlzdFN0eWxlIiwicGFkZGluZyIsImJvZHkiLCJyZWxhdGVkVGFyZ2V0IiwiY29udGFpbnMiLCJ0cmlnZ2VyIiwibGF0TG5ncyIsImJvdW5kcyIsIkxhdExuZ0JvdW5kcyIsImxhdExuZyIsImV4dGVuZCIsImZpdEJvdW5kcyIsImZpbHRlciIsInZpc2libGUiLCJmaXRMYXRMbmdCb3VuZHMiLCJhcmdzIiwiY2FsbGJhY2siLCJzbGljZSIsInBvcCIsInBhblRvIiwibWFnbml0dWRlIiwiZ2V0Wm9vbSIsInNldFpvb20iLCJnb29nbGVNYXBzTWFwTWV0aG9kcyIsIm1ldGhvZE5hbWUiLCJjdXN0b21FdmVudHMiLCJvbiIsInJlZ2lzdGVyZWRFdmVudCIsIm9mZiIsIm9uY2UiLCJhZGRMaXN0ZW5lck9uY2UiLCJ1bmRlZmluZWQiLCJmaXJlIiwiZXZlbnRBcmd1bWVudHMiLCJBcnJheSIsImFyZ3VtZW50cyIsImNoZWNrR2VvZmVuY2UiLCJsYWdMbmciLCJmZW5jZSIsImNvbnRhaW5zTGF0TG5nIiwiY2hlY2tNYXJrZXJHZW9mZW5jZSIsIm91dHNpZGVDYWxsYmFjayIsImZlbmNlcyIsIkVWRU5UUyIsImRyYXdQb2x5bGluZSIsImljb25zIiwic3Ryb2tlQ29sb3IiLCJzdHJva2VPcGFjaXR5Iiwic3Ryb2tlV2VpZ2h0IiwiZ2VvZGVzaWMiLCJjbGlja2FibGUiLCJlZGl0YWJsZSIsInpJbmRleCIsInBhdGgiLCJwb2x5bGluZU9wdGlvbnMiLCJwb2x5bGluZSIsIlBvbHlsaW5lIiwicmVtb3ZlUG9seWxpbmUiLCJwb2x5bGluZUluZGV4IiwicmVtb3ZlUG9seWxpbmVzIiwiZHJhd0NpcmNsZSIsInBvbHlnb25PcHRpb25zIiwicG9seWdvbiIsIkNpcmNsZSIsImRyYXdSZWN0YW5nbGUiLCJsYXRMbmdCb3VuZHMiLCJSZWN0YW5nbGUiLCJkcmF3UG9seWdvbiIsImJhc2VQYXRocyIsInBhdGhzIiwiUG9seWdvbiIsInJlbW92ZVBvbHlnb24iLCJwb2x5Z29uSW5kZXgiLCJyZW1vdmVQb2x5Z29ucyIsImdldEZyb21GdXNpb25UYWJsZXMiLCJsYXllciIsIkZ1c2lvblRhYmxlc0xheWVyIiwibG9hZEZyb21GdXNpb25UYWJsZXMiLCJnZXRGcm9tS01MIiwidXJsIiwiS21sTGF5ZXIiLCJsb2FkRnJvbUtNTCIsImFkZExheWVyIiwibGF5ZXJOYW1lIiwiY2xpY2siLCJzZWFyY2giLCJuZWFyYnlTZWFyY2giLCJyYWRhclNlYXJjaCIsInRleHRTZWFyY2giLCJrZXl3b3JkIiwibG9jYXRpb24iLCJyYWRpdXMiLCJyYW5rQnkiLCJ0eXBlcyIsInF1ZXJ5IiwiVHJhZmZpY0xheWVyIiwidHJhZmZpYyIsIlRyYW5zaXRMYXllciIsInRyYW5zaXQiLCJCaWN5Y2xpbmdMYXllciIsImJpY3ljbGluZyIsInBsYWNlcyIsIlBsYWNlc1NlcnZpY2UiLCJwbGFjZVNlYXJjaFJlcXVlc3QiLCJ0ZXh0U2VhcmNoUmVxdWVzdCIsInNldE9wdGlvbnMiLCJyZW1vdmVMYXllciIsImxheWVySW5kZXgiLCJhZGRNYXBUeXBlIiwiZ2V0VGlsZVVybCIsInRpbGVTaXplIiwiU2l6ZSIsIkltYWdlTWFwVHlwZSIsIm1hcFR5cGVzIiwic2V0IiwiYWRkT3ZlcmxheU1hcFR5cGUiLCJnZXRUaWxlIiwib3ZlcmxheU1hcFR5cGVzIiwib3ZlcmxheU1hcFR5cGVPcHRpb25zIiwiaW5zZXJ0QXQiLCJyZW1vdmVPdmVybGF5TWFwVHlwZSIsIm92ZXJsYXlNYXBUeXBlIiwiSU5GT19XSU5ET1dfRVZFTlRTIiwiTUFSS0VSX0VWRU5UUyIsIk1BUktFUl9NT1VTRV9FVkVOVFMiLCJjcmVhdGVNYXJrZXIiLCJzZWxmIiwiZGV0YWlscyIsIm91dHNpZGUiLCJtYXJrZXJPcHRpb25zIiwiTWFya2VyIiwiSW5mb1dpbmRvdyIsImZyb21MYXRMbmdUb1BvaW50Iiwib25NYXJrZXJDbGljayIsImhpZGVJbmZvV2luZG93cyIsIm9wZW4iLCJvbk1hcmtlclJpZ2h0Q2xpY2siLCJvbk1hcmtlckRyYWdFbmQiLCJhZGRNYXJrZXIiLCJnbV9hY2Nlc3NvcnNfIiwiYWRkTWFya2VycyIsImNsb3NlIiwicmVtb3ZlTWFya2VyIiwiZmlyZUV2ZW50IiwibWFya2VySW5kZXgiLCJyZW1vdmVNYXJrZXJzIiwiU1RPUF9QUk9QQUdBVElPTl9FVkVOVFMiLCJkcmF3T3ZlcmxheSIsImF1dG9TaG93IiwiaG9yaXpvbnRhbE9mZnNldCIsInZlcnRpY2FsT2Zmc2V0IiwidmVydGljYWxBbGlnbiIsImhvcml6b250YWxBbGlnbiIsIm9uQWRkIiwiYm9yZGVyU3R5bGUiLCJib3JkZXJXaWR0aCIsInBhbmVzIiwiZ2V0UGFuZXMiLCJvdmVybGF5TGF5ZXIiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsImFsbCIsImNhbmNlbEJ1YmJsZSIsInJldHVyblZhbHVlIiwic3RvcFByb3BhZ2F0aW9uIiwib3ZlcmxheU1vdXNlVGFyZ2V0IiwiZnJvbUxhdExuZ1RvRGl2UGl4ZWwiLCJjaGlsZHJlbiIsImNvbnRlbnRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJjb250ZW50V2lkdGgiLCJjbGllbnRXaWR0aCIsInNob3ciLCJvblJlbW92ZSIsInJlbW92ZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInJlbW92ZU92ZXJsYXkiLCJvdmVybGF5SW5kZXgiLCJyZW1vdmVPdmVybGF5cyIsImdldEJvdW5kcyIsImdldFBhdGhzIiwicCIsImdldExlbmd0aCIsImdldEF0IiwiaSIsImluUG9seSIsIm51bVBhdGhzIiwibnVtUG9pbnRzIiwiaiIsInZlcnRleDEiLCJ2ZXJ0ZXgyIiwiZ2VvbWV0cnkiLCJzcGhlcmljYWwiLCJjb21wdXRlRGlzdGFuY2VCZXR3ZWVuIiwiZ2V0Q2VudGVyIiwiZ2V0UmFkaXVzIiwic2V0RmVuY2VzIiwiYWRkRmVuY2UiLCJnZXRJZCIsInNlYXJjaEVsZW1lbnQiLCJUeXBlRXJyb3IiLCJ0IiwibGVuIiwibiIsIk51bWJlciIsIkluZmluaXR5IiwiZmxvb3IiLCJhYnMiLCJrIiwibWF4IiwiZ2V0Um91dGVzIiwib3JpZ2luIiwiZGVzdGluYXRpb24iLCJ0cmF2ZWxNb2RlIiwidW5pdFN5c3RlbSIsImF2b2lkSGlnaHdheXMiLCJhdm9pZFRvbGxzIiwib3B0aW1pemVXYXlwb2ludHMiLCJ3YXlwb2ludHMiLCJlcnJvciIsInRyYXZlbE1vZGVJZCIsIlRyYXZlbE1vZGUiLCJ1bml0U3lzdGVtSWQiLCJyZXF1ZXN0T3B0aW9ucyIsInNlcnZpY2UiLCJEaXJlY3Rpb25zU2VydmljZSIsInJvdXRlIiwicmVzdWx0Iiwic3RhdHVzIiwiRGlyZWN0aW9uc1N0YXR1cyIsIk9LIiwicmVtb3ZlUm91dGVzIiwiZ2V0RWxldmF0aW9ucyIsInNhbXBsZXMiLCJsb2NhdGlvbnMiLCJFbGV2YXRpb25TZXJ2aWNlIiwiZ2V0RWxldmF0aW9uRm9yTG9jYXRpb25zIiwiZ2V0RWxldmF0aW9uQWxvbmdQYXRoIiwiY2xlYW5Sb3V0ZSIsInJlbmRlclJvdXRlIiwiYmFzZVJlbmRlck9wdGlvbnMiLCJwYW5lbCIsInJlbmRlck9wdGlvbnMiLCJEaXJlY3Rpb25zUmVuZGVyZXIiLCJfIiwicmVzcG9uc2UiLCJzZXREaXJlY3Rpb25zIiwiZHJhd1JvdXRlIiwibGFzdFJvdXRlIiwib3ZlcnZpZXdfcGF0aCIsInRyYXZlbFJvdXRlIiwic3RhcnQiLCJzdGVwIiwibGVncyIsInN0ZXBzIiwic3RlcF9udW1iZXIiLCJzdGVwTnVtYmVyIiwiZW5kIiwiZHJhd1N0ZXBwZWRSb3V0ZSIsInJvdXRlU3RlcCIsInN0ZXBzQ291bnQiLCJSb3V0ZSIsInN0ZXBfY291bnQiLCJzdGVwc19sZW5ndGgiLCJNVkNBcnJheSIsImdldFBhdGgiLCJwYXJzZUNvbG9yIiwiY29sb3IiLCJvcGFjaXR5IiwicGFyc2VkQ29sb3IiLCJtaW4iLCJwYXJzZUZsb2F0IiwidG9TdHJpbmciLCJ0b0ltYWdlIiwic2l6ZSIsInN0YXRpY01hcE9wdGlvbnMiLCJlbmNvZGluZyIsImVuY29kZVBhdGgiLCJzdGF0aWNNYXBVUkwiLCJidWlsZE1hcmtlclBhcmFtZXRlcnMiLCJtYXJrZXJQYXJhbWV0ZXJzIiwiYWRkcmVzcyIsImljb24iLCJsYWJlbCIsImVuY29kZVVSSSIsImJ1aWxkUGF0aFBhcmFtZXRlcnMiLCJwb2x5bGluZVBhcmFtZXRlcnMiLCJwYXJzZUludCIsImZpbGxDb2xvciIsImZpbGxPcGFjaXR5IiwiYnVpbGRTdHlsZVBhcmFtZXRlcnMiLCJzdHlsZVBhcmFtZXRlcnMiLCJmZWF0dXJlVHlwZSIsImVsZW1lbnRUeXBlIiwic3R5bGVycyIsInN0eWxlciIsInZhbHVlIiwic3R5bGVzIiwiZGVmYXVsdFJvb3QiLCJwcm90b2NvbCIsInJvb3QiLCJwYXJhbWV0ZXJzIiwiZHBpIiwiZGV2aWNlUGl4ZWxSYXRpbyIsIlNUUkVFVFZJRVdfRVZFTlRTIiwiY3JlYXRlUGFub3JhbWEiLCJzdHJlZXRWaWV3T3B0aW9ucyIsInBhbm9yYW1hIiwic2V0U3RyZWV0VmlldyIsImNvbnRhaW5lckVsZW1lbnQiLCJTdHJlZXRWaWV3UGFub3JhbWEiLCJhZGRTdHlsZSIsInN0eWxlZE1hcFR5cGUiLCJTdHlsZWRNYXBUeXBlIiwic3R5bGVkTWFwTmFtZSIsInNldFN0eWxlIiwic2V0TWFwVHlwZUlkIiwiZ2VvbG9jYXRlIiwiY29tcGxldGVDYWxsYmFjayIsImFsd2F5cyIsImNvbXBsZXRlIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJzdWNjZXNzIiwibm90X3N1cHBvcnRlZCIsImdlb2NvZGUiLCJnZW9jb2RlciIsIkdlb2NvZGVyIiwiZ2VvY29kZU9wdGlvbnMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUVBOzs7OztBQUtBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBK0Y7QUFBQSx3QkFBNUZDLEtBQTRGO0FBQUEsTUFBNUZBLEtBQTRGLDJCQUFwRixFQUFvRjtBQUFBLE1BQWhGQyxFQUFnRixRQUFoRkEsRUFBZ0Y7QUFBQSxNQUE1RUMsS0FBNEUsUUFBNUVBLEtBQTRFO0FBQUEsTUFBckVDLE9BQXFFLFFBQXJFQSxPQUFxRTtBQUFBLE1BQTVEQyxPQUE0RCxRQUE1REEsT0FBNEQ7QUFBQSxNQUFuREMsUUFBbUQsUUFBbkRBLFFBQW1EO0FBQUEseUJBQXpDQyxNQUF5QztBQUFBLE1BQXpD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QU1DLGNBQWMscUJBQ2ZsZSxPQURlO0FBRWxCa1AsWUFBUSxFQUFSQTtBQUZrQixJQUFwQjs7QUFLQSxPQUFLOE8sUUFBTCxDQUFjRCxPQUFkLENBQXNCRyxjQUF0QixFQUFzQzFULFFBQXRDO0FBQ0QsQ0FuQkQ7O0FBcUJlM0ssNEdBQWYsRSIsImZpbGUiOiJnbWFwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEdNYXBzIGZyb20gJy4vY29yZSc7XG5cbi8qKlxuICogRXh0ZW5kcyBHTWFwcyB0byB1c2UgVUkgY29udHJvbHMuXG4gKiBAbW9kdWxlIENvbnRyb2xzXG4gKi9cblxuY29uc3QgY3JlYXRlQ29udHJvbCA9ICh7IHN0eWxlID0ge30sIGlkLCB0aXRsZSwgY2xhc3NlcywgY29udGVudCwgcG9zaXRpb24sIGV2ZW50cyA9IHt9LCBkaXNhYmxlRGVmYXVsdFN0eWxlcywgfSkgPT4ge1xuICBjb25zdCBjb250cm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgY29udHJvbC5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG5cbiAgaWYgKGRpc2FibGVEZWZhdWx0U3R5bGVzICE9PSB0cnVlKSB7XG4gICAgY29udHJvbC5zdHlsZS5mb250RmFtaWx5ID0gJ1JvYm90bywgQXJpYWwsIHNhbnMtc2VyaWYnO1xuICAgIGNvbnRyb2wuc3R5bGUuZm9udFNpemUgPSAnMTFweCc7XG4gICAgY29udHJvbC5zdHlsZS5ib3hTaGFkb3cgPSAncmdiYSgwLCAwLCAwLCAwLjI5ODAzOSkgMHB4IDFweCA0cHggLTFweCc7XG4gIH1cblxuICBPYmplY3Qua2V5cyhzdHlsZSkuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgICBjb250cm9sLnN0eWxlID0gc3R5bGVbcHJvcGVydHldO1xuICB9KTtcblxuICBpZiAoaWQpIHtcbiAgICBjb250cm9sLmlkID0gaWQ7XG4gIH1cblxuICBpZiAodGl0bGUpIHtcbiAgICBjb250cm9sLnRpdGxlID0gdGl0bGU7XG4gIH1cblxuICBpZiAoY2xhc3Nlcykge1xuICAgIGNvbnRyb2wuY2xhc3NOYW1lID0gY2xhc3NlcztcbiAgfVxuXG4gIGlmIChjb250ZW50KSB7XG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udHJvbC5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgIH0gZWxzZSBpZiAoY29udGVudCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCkge1xuICAgICAgY29udHJvbC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICB9XG4gIH1cblxuICBpZiAocG9zaXRpb24pIHtcbiAgICBjb250cm9sLnBvc2l0aW9uID0gZ29vZ2xlLm1hcHMuQ29udHJvbFBvc2l0aW9uW3Bvc2l0aW9uLnRvVXBwZXJDYXNlKCldO1xuICB9XG5cbiAgT2JqZWN0LmtleXMoZXZlbnRzKS5mb3JFYWNoKGV2ZW50TmFtZSA9PlxuICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyKGNvbnRyb2wsIGV2ZW50TmFtZSwgZXZlbnQgPT5cbiAgICAgIGV2ZW50c1tldmVudE5hbWVdLmNhbGwodGhpcywgZXZlbnQpXG4gICAgKVxuICApO1xuXG4gIGNvbnRyb2wuaW5kZXggPSAxO1xuXG4gIHJldHVybiBjb250cm9sO1xufTtcblxuLyoqXG4gKiBBZGQgYSBjdXN0b20gY29udHJvbCB0byB0aGUgbWFwIFVJLlxuICogQGZ1bmN0aW9uIGFkZENvbnRyb2xcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRoZSBgb3B0aW9uc2Agb2JqZWN0IHNob3VsZCBjb250YWluOlxuICogKiBgc3R5bGVgIChvYmplY3QpOiBUaGUga2V5cyBhbmQgdmFsdWVzIG9mIHRoaXMgb2JqZWN0IHNob3VsZCBiZSB2YWxpZCBDU1MgcHJvcGVydGllcyBhbmQgdmFsdWVzLlxuICogKiBgaWRgIChzdHJpbmcpOiBUaGUgSFRNTCBpZCBmb3IgdGhlIGN1c3RvbSBjb250cm9sLlxuICogKiBgY2xhc3Nlc2AgKHN0cmluZyk6IEEgc3RyaW5nIGNvbnRhaW5pbmcgYWxsIHRoZSBIVE1MIGNsYXNzZXMgZm9yIHRoZSBjdXN0b20gY29udHJvbC5cbiAqICogYGNvbnRlbnRgIChzdHJpbmcgb3IgSFRNTCBlbGVtZW50KTogVGhlIGNvbnRlbnQgb2YgdGhlIGN1c3RvbSBjb250cm9sLlxuICogKiBgcG9zaXRpb25gIChzdHJpbmcpOiBBbnkgdmFsaWQgW2Bnb29nbGUubWFwcy5Db250cm9sUG9zaXRpb25gXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9jb250cm9scyNDb250cm9sUG9zaXRpb25pbmcpIHZhbHVlLCBpbiBsb3dlciBvciB1cHBlciBjYXNlLlxuICogKiBgZXZlbnRzYCAob2JqZWN0KTogVGhlIGtleXMgb2YgdGhpcyBvYmplY3Qgc2hvdWxkIGJlIHZhbGlkIERPTSBldmVudHMuIFRoZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bmN0aW9ucy5cbiAqICogYGRpc2FibGVEZWZhdWx0U3R5bGVzYCAoYm9vbGVhbik6IElmIGZhbHNlLCByZW1vdmVzIHRoZSBkZWZhdWx0IHN0eWxlcyBmb3IgdGhlIGNvbnRyb2xzIGxpa2UgZm9udCAoZmFtaWx5IGFuZCBzaXplKSwgYW5kIGJveCBzaGFkb3cuXG4gKlxuICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICovXG5HTWFwcy5wcm90b3R5cGUuYWRkQ29udHJvbCA9IGZ1bmN0aW9uIGFkZENvbnRyb2wob3B0aW9ucykge1xuICBjb25zdCBjb250cm9sID0gY3JlYXRlQ29udHJvbChvcHRpb25zKTtcblxuICB0aGlzLmNvbnRyb2xzLnB1c2goY29udHJvbCk7XG4gIHRoaXMubWFwLmNvbnRyb2xzW2NvbnRyb2wucG9zaXRpb25dLnB1c2goY29udHJvbCk7XG5cbiAgcmV0dXJuIGNvbnRyb2w7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhIGNvbnRyb2wgZnJvbSB0aGUgbWFwLiBgY29udHJvbGAgc2hvdWxkIGJlIGEgY29udHJvbCByZXR1cm5lZCBieSBgYWRkQ29udHJvbCgpYC5cbiAqIEBmdW5jdGlvbiByZW1vdmVDb250cm9sXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udHJvbCAtIE9uZSBvZiB0aGUgY29udHJvbHMgcmV0dXJuZWQgYnkgYGFkZENvbnRyb2woKWAuXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IHRoZSByZW1vdmVkIGNvbnRyb2wuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5yZW1vdmVDb250cm9sID0gZnVuY3Rpb24gcmVtb3ZlQ29udHJvbChjb250cm9sKSB7XG4gIGNvbnN0IGNvbnRyb2xJbmRleCA9IHRoaXMuY29udHJvbHMuaW5kZXhPZihjb250cm9sKTtcblxuICB0aGlzLmNvbnRyb2xzLnNwbGljZShjb250cm9sSW5kZXgsIDEpO1xuXG4gIGlmIChjb250cm9sLnBvc2l0aW9uID49IDAgJiYgY29udHJvbEluZGV4ID49IDApIHtcbiAgICBjb25zdCBjb250cm9sc0ZvclBvc2l0aW9uID0gdGhpcy5tYXAuY29udHJvbHNbY29udHJvbC5wb3NpdGlvbl07XG4gICAgY29uc3QgY29udHJvbEluZGV4SW5Db2xsZWN0aW9uID0gY29udHJvbHNGb3JQb3NpdGlvbi5pbmRleE9mKGNvbnRyb2wpO1xuXG4gICAgY29udHJvbHNGb3JQb3NpdGlvbi5yZW1vdmVBdChjb250cm9sSW5kZXhJbkNvbGxlY3Rpb24pO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRyb2w7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHTWFwcztcbiIsImV4cG9ydCBjb25zdCBsYXRMbmdGcm9tQXJndW1lbnRzID0gKC4uLmFyZ3MpID0+IHtcbiAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgYXJnc1sxXSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhhcmdzWzBdLCBhcmdzWzFdKTtcbiAgfVxuXG4gIHJldHVybiBhcmdzWzBdO1xufTtcblxuZXhwb3J0IGNvbnN0IGZsYXR0ZW5BcnJheSA9IGFycmF5ID0+XG4gIGFycmF5LnJlZHVjZSgoY29sbGVjdGlvbiwgaXRlbSkgPT4gY29sbGVjdGlvbi5jb25jYXQoaXRlbSksIFtdKTtcblxuZXhwb3J0IGNvbnN0IGNvb3Jkc1RvTGF0TG5ncyA9IChjb29yZGluYXRlcywgdXNlR2VvSlNPTikgPT4ge1xuICBjb25zdCBmaXJzdENvb3JkaW5hdGUgPSB1c2VHZW9KU09OID8gY29vcmRpbmF0ZXNbMV0gOiBjb29yZGluYXRlc1swXTtcbiAgY29uc3Qgc2Vjb25kQ29vcmRpbmF0ZSA9IHVzZUdlb0pTT04gPyBjb29yZGluYXRlc1swXSA6IGNvb3JkaW5hdGVzWzFdO1xuXG4gIHJldHVybiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGZpcnN0Q29vcmRpbmF0ZSwgc2Vjb25kQ29vcmRpbmF0ZSk7XG59O1xuXG5leHBvcnQgY29uc3QgYXJyYXlUb0xhdExuZyA9IChjb29yZGluYXRlcywgdXNlR2VvSlNPTikgPT5cbiAgY29vcmRpbmF0ZXMubWFwKChjb29yZGluYXRlKSA9PiB7XG4gICAgaWYgKCEoY29vcmRpbmF0ZSBpbnN0YW5jZW9mIGdvb2dsZS5tYXBzLkxhdExuZykpIHtcbiAgICAgIGlmIChjb29yZGluYXRlLmxlbmd0aCAmJiB0eXBlb2YgY29vcmRpbmF0ZVswXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5VG9MYXRMbmcoY29vcmRpbmF0ZSwgdXNlR2VvSlNPTik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb29yZHNUb0xhdExuZ3MoY29vcmRpbmF0ZSwgdXNlR2VvSlNPTik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvb3JkaW5hdGU7XG4gIH0pO1xuXG5jb25zdCBnZXRFbGVtZW50c0J5Q2xhc3NOYW1lID0gKGNsYXNzTmFtZSwgY29udGV4dCkgPT4ge1xuICBjb25zdCBzYW5pdGl6ZWRDbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZSgvXlxcLi8sICcnKTtcblxuICBpZiAodHlwZW9mIHdpbmRvdy4kID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuICQoYC4ke3Nhbml0aXplZENsYXNzTmFtZX1gLCBjb250ZXh0KVswXTtcbiAgfVxuXG4gIHJldHVybiB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShzYW5pdGl6ZWRDbGFzc05hbWUpWzBdO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEVsZW1lbnRCeUlkID0gKGlkLCBjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHNhbml0aXplZElkID0gaWQucmVwbGFjZSgvXiMvLCAnJyk7XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cuJCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gJChgIyR7c2FuaXRpemVkSWR9YCwgY29udGV4dCkgfHwgW107XG5cbiAgICByZXR1cm4gZWxlbWVudHNbMF07XG4gIH1cblxuICByZXR1cm4gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNhbml0aXplZElkKTtcbn07XG5cbmNvbnN0IGdldEVsZW1lbnQgPSAoc2VsZWN0b3JPckVsZW1lbnQsIGNvbnRleHQpID0+IHtcbiAgaWYgKHR5cGVvZiBzZWxlY3Rvck9yRWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gc2VsZWN0b3JPckVsZW1lbnQubWF0Y2goL14jLykgPyBnZXRFbGVtZW50QnlJZChzZWxlY3Rvck9yRWxlbWVudCwgY29udGV4dCkgOiBnZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHNlbGVjdG9yT3JFbGVtZW50LCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzZWxlY3Rvck9yRWxlbWVudDtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kQWJzb2x1dGVQb3NpdGlvbiA9IChlbGVtZW50KSA9PiB7XG4gIGxldCBsZWZ0ID0gMDtcbiAgbGV0IHRvcCA9IDA7XG5cbiAgaWYgKGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XG4gICAgY29uc3QgcmVjdGFuZ2xlID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB4ID0gLSh3aW5kb3cuc2Nyb2xsWCA/IHdpbmRvdy5zY3JvbGxYIDogd2luZG93LnBhZ2VYT2Zmc2V0KTtcbiAgICBjb25zdCB5ID0gLSh3aW5kb3cuc2Nyb2xsWSA/IHdpbmRvdy5zY3JvbGxZIDogd2luZG93LnBhZ2VZT2Zmc2V0KTtcblxuICAgIHJldHVybiBbcmVjdGFuZ2xlLmxlZnQgLSB4LCByZWN0YW5nbGUudG9wIC0geV07XG4gIH1cblxuICBpZiAoZWxlbWVudC5vZmZzZXRQYXJlbnQpIHtcbiAgICBsZXQgaXRlcmF0b3IgPSBlbGVtZW50O1xuXG4gICAgZG8ge1xuICAgICAgbGVmdCArPSBpdGVyYXRvci5vZmZzZXRMZWZ0O1xuICAgICAgdG9wICs9IGl0ZXJhdG9yLm9mZnNldFRvcDtcbiAgICB9IHdoaWxlICgoaXRlcmF0b3IgPSBpdGVyYXRvci5vZmZzZXRQYXJlbnQpKTtcbiAgfVxuXG4gIHJldHVybiBbbGVmdCwgdG9wXTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXR1cEV2ZW50TGlzdGVuZXIgPSAoeyBvYmplY3QsIGV2ZW50TmFtZSwgaW5zdGFuY2UsIGhhbmRsZXIsIH0pID0+IHtcbiAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIob2JqZWN0LCBldmVudE5hbWUsIChldmVudCA9IGluc3RhbmNlKSA9PiB7XG4gICAgaGFuZGxlci5jYWxsKGluc3RhbmNlLCBldmVudCk7XG5cbiAgICBpZiAoaW5zdGFuY2UuaGlkZUNvbnRleHRNZW51KSB7XG4gICAgICBpbnN0YW5jZS5oaWRlQ29udGV4dE1lbnUoKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldHVwRXZlbnRzID0gKHsgZXZlbnRzLCBvYmplY3QsIGluc3RhbmNlLCBoYW5kbGVycywgfSkgPT5cbiAgZXZlbnRzLmZvckVhY2goKGV2ZW50TmFtZSkgPT4ge1xuICAgIGlmIChoYW5kbGVyc1tldmVudE5hbWVdKSB7XG4gICAgICBzZXR1cEV2ZW50TGlzdGVuZXIoe1xuICAgICAgICBvYmplY3QsXG4gICAgICAgIGV2ZW50TmFtZSxcbiAgICAgICAgaW5zdGFuY2UsXG4gICAgICAgIGhhbmRsZXI6IGhhbmRsZXJzW2V2ZW50TmFtZV0sXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG5jb25zdCBNQVBfRVZFTlRTID0gW1xuICAnYm91bmRzX2NoYW5nZWQnLCAnY2VudGVyX2NoYW5nZWQnLCAnY2xpY2snLCAnZGJsY2xpY2snLCAnZHJhZycsXG4gICdkcmFnZW5kJywgJ2RyYWdzdGFydCcsICdpZGxlJywgJ21hcHR5cGVpZF9jaGFuZ2VkJyxcbiAgJ21vdXNlbW92ZScsICdtb3VzZW91dCcsICdtb3VzZW92ZXInLCAncHJvamVjdGlvbl9jaGFuZ2VkJyxcbiAgJ3Jlc2l6ZScsICd0aWxlc2xvYWRlZCcsICd6b29tX2NoYW5nZWQnXG5dO1xuY29uc3QgR01BUFNfTUVOVV9JRCA9ICdnbWFwc19jb250ZXh0X21lbnUnO1xuXG4vKipcbiAqIEdNYXBzIGlzIGEgd3JhcHBlciBmb3IgR29vZ2xlIE1hcHMgSmF2YVNjcmlwdCBBUEkuIEl0cyBnb2FsIGlzIHRvIHNpbXBsaWZ5IEdvb2dsZSBNYXBzIHVzYWdlIGJ5IHBlcmZvcm1pbmcgY29tcGxleCB0YXNrcyB3aXRoIGZld2VyIGxpbmVzIG9mIGNvZGUuXG4gKi9cbmNsYXNzIEdNYXBzIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgR01hcHMgaW5zdGFuY2UsIGluY2x1ZGluZyBhIEdvb2dsZSBNYXBzIG1hcC5cbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBgb3B0aW9uc2AgYWNjZXB0cyBhbGwgdGhlIFtNYXBPcHRpb25zXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjTWFwT3B0aW9ucykgYW5kIFtldmVudHNdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNNYXApIGxpc3RlZCBpbiB0aGUgR29vZ2xlIE1hcHMgQVBJLiBBbHNvIGFjY2VwdHM6XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLmxhdGl0dWRlIC0gTGF0aXR1ZGUgb2YgdGhlIG1hcCdzIGNlbnRlci5cbiAgICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMubG9uZ2l0dWRlIC0gTG9uZ2l0dWRlIG9mIHRoZSBtYXAncyBjZW50ZXIuXG4gICAqIEBwYXJhbSB7Z29vZ2xlLm1hcHMuTGF0TG5nfSBvcHRpb25zLmNlbnRlciAtIEEgYGdvb2dsZS5tYXBzLkxhdExuZ2AgY29vcmRpbmF0ZSBpbmRpY2F0ZSB0aGUgY2VudGVyLiBJZiBzZXQsIGBsYXRpdHVkZWAgYW5kIGBsb25naXR1ZGVgIGFyZSBpZ25vcmVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ3xIVE1MRWxlbWVudH0gb3B0aW9ucy5lbGVtZW50IC0gY29udGFpbmVyIHdoZXJlIHRoZSBtYXAgd2lsbCBiZSByZW5kZXJlZC5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5tYXJrZXJDbHVzdGVyZXIgLSBBIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIG1hcmtlciBjbHVzdGVyLiBZb3UgY2FuIHVzZSBNYXJrZXJDbHVzdGVyZXIgb3IgTWFya2VyQ2x1c3RlcmVyUGx1cy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGJhc2VPcHRpb25zID0ge30pIHtcbiAgICBpZiAoIXdpbmRvdy5nb29nbGUgfHwgIXdpbmRvdy5nb29nbGUubWFwcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdHb29nbGUgTWFwcyBKYXZhU2NyaXB0IEFQSSBpcyByZXF1aXJlZC4gQ2hlY2s6IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3R1dG9yaWFsJyk7XG4gICAgfVxuXG4gICAgY29uc3QgeyBkaXYsXG4gICAgICBlbCA9IGRpdixcbiAgICAgIGNvbnRleHQsXG4gICAgICBlbGVtZW50ID0gZ2V0RWxlbWVudChlbCwgY29udGV4dCksXG4gICAgICBsYXQsXG4gICAgICBsYXRpdHVkZSA9IGxhdCxcbiAgICAgIGxuZyxcbiAgICAgIGxvbmdpdHVkZSA9IGxuZyxcbiAgICAgIGNlbnRlciA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobGF0aXR1ZGUsIGxvbmdpdHVkZSksXG4gICAgICB6b29tID0gMTUsXG4gICAgICBtYXBUeXBlID0gJ3JvYWRtYXAnLFxuICAgICAgem9vbUNvbnRyb2xPcHQgPSB7XG4gICAgICAgIHN0eWxlOiAnREVGQVVMVCcsXG4gICAgICAgIHBvc2l0aW9uOiAnVE9QX0xFRlQnLFxuICAgICAgfSxcbiAgICAgIHBhbkNvbnRyb2wgPSB0cnVlLFxuICAgICAgem9vbUNvbnRyb2wgPSB0cnVlLFxuICAgICAgbWFwVHlwZUNvbnRyb2wgPSB0cnVlLFxuICAgICAgc2NhbGVDb250cm9sID0gdHJ1ZSxcbiAgICAgIHN0cmVldFZpZXdDb250cm9sID0gdHJ1ZSxcbiAgICAgIG92ZXJ2aWV3TWFwQ29udHJvbCA9IHRydWUsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIG1hcmtlckNsdXN0ZXJlcixcbiAgICAgIGVuYWJsZU5ld1N0eWxlLFxuICAgICAgLi4ub3B0aW9ucyB9ID0gYmFzZU9wdGlvbnM7XG5cbiAgICBjb25zdCBtYXBUeXBlSWQgPSBnb29nbGUubWFwcy5NYXBUeXBlSWRbbWFwVHlwZS50b1VwcGVyQ2FzZSgpXTtcblxuICAgIGNvbnN0IG1hcEJhc2VPcHRpb25zID0ge1xuICAgICAgem9vbSxcbiAgICAgIGNlbnRlcixcbiAgICAgIG1hcFR5cGVJZCxcbiAgICB9O1xuXG4gICAgY29uc3QgbWFwQ29udHJvbHNPcHRpb25zID0ge1xuICAgICAgcGFuQ29udHJvbCxcbiAgICAgIHpvb21Db250cm9sLFxuICAgICAgem9vbUNvbnRyb2xPcHRpb25zOiB7XG4gICAgICAgIHN0eWxlOiBnb29nbGUubWFwcy5ab29tQ29udHJvbFN0eWxlW3pvb21Db250cm9sT3B0LnN0eWxlXSxcbiAgICAgICAgcG9zaXRpb246IGdvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvblt6b29tQ29udHJvbE9wdC5wb3NpdGlvbl0sXG4gICAgICB9LFxuICAgICAgbWFwVHlwZUNvbnRyb2wsXG4gICAgICBzY2FsZUNvbnRyb2wsXG4gICAgICBzdHJlZXRWaWV3Q29udHJvbCxcbiAgICAgIG92ZXJ2aWV3TWFwQ29udHJvbCxcbiAgICB9O1xuXG4gICAgY29uc3QgZmlsdGVyZWRPcHRpb25zID0gT2JqZWN0LmtleXMob3B0aW9ucykucmVkdWNlKChoYXNoLCBrZXkpID0+IHtcbiAgICAgIGlmIChNQVBfRVZFTlRTLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgcmV0dXJuIGhhc2g7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLmhhc2gsIFtrZXldOiBvcHRpb25zW2tleV0sIH07XG4gICAgfSwge30pO1xuXG4gICAgdGhpcy5pZCA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogRGF0ZS5ub3coKSk7XG5cbiAgICBHTWFwcy5jb250ZXh0TWVudXNbdGhpcy5pZF0gPSB7fTtcblxuICAgIGdvb2dsZS5tYXBzLnZpc3VhbFJlZnJlc2ggPSBlbmFibGVOZXdTdHlsZTtcblxuICAgIC8qKlxuICAgICAqIEhUTUwgZWxlbWVudCB3aGVyZSB0aGUgR29vZ2xlIE1hcHMgbWFwIGlzIHJlbmRlcmVkXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgdGhpcy5lbGVtZW50ID0gdHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnID8gZ2V0RWxlbWVudChlbGVtZW50KSA6IGVsZW1lbnQ7XG5cbiAgICBpZiAoIXRoaXMuZWxlbWVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBlbGVtZW50IGRlZmluZWQuIFBhc3MgYW4gYGVsZW1lbnRgIG9wdGlvbiBpbiBHTWFwcy4nKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUud2lkdGggPSB3aWR0aCB8fCB0aGlzLmVsZW1lbnQuc2Nyb2xsV2lkdGggfHwgdGhpcy5lbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgfHwgdGhpcy5lbGVtZW50LnNjcm9sbEhlaWdodCB8fCB0aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgY29uc3QgbWFwT3B0aW9ucyA9IHtcbiAgICAgIC4uLmZpbHRlcmVkT3B0aW9ucyxcbiAgICAgIC4uLm1hcEJhc2VPcHRpb25zLFxuICAgICAgLi4ubWFwQ29udHJvbHNPcHRpb25zLFxuICAgIH07XG5cbiAgICB0aGlzLm1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAodGhpcy5lbGVtZW50LCBtYXBPcHRpb25zKTtcbiAgICAvKipcbiAgICAgKiBDb2xsZWN0aW9uIG9mIGN1c3RvbSBjb250cm9scyBpbiB0aGUgbWFwIFVJXG4gICAgICpcbiAgICAgKiBAdHlwZSB7YXJyYXl9XG4gICAgICovXG4gICAgdGhpcy5jb250cm9scyA9IFtdO1xuICAgIC8qKlxuICAgICAqIENvbGxlY3Rpb24gb2YgbWFwJ3Mgb3ZlcmxheXNcbiAgICAgKlxuICAgICAqIEB0eXBlIHthcnJheX1cbiAgICAgKi9cbiAgICB0aGlzLm92ZXJsYXlzID0gW107XG4gICAgLyoqXG4gICAgICogQ29sbGVjdGlvbiBvZiBLTUwvR2VvUlNTIGFuZCBGdXNpb25UYWJsZSBsYXllcnNcbiAgICAgKlxuICAgICAqIEB0eXBlIHthcnJheX1cbiAgICAgKi9cbiAgICB0aGlzLmxheWVycyA9IFtdO1xuICAgIC8qKlxuICAgICAqIENvbGxlY3Rpb24gb2YgZGF0YSBsYXllcnMgKFNlZSB7QGxpbmsgR01hcHMjYWRkTGF5ZXJ9KVxuICAgICAqXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLnNpbmdsZUxheWVycyA9IHt9O1xuICAgIC8qKlxuICAgICAqIENvbGxlY3Rpb24gb2YgbWFwJ3MgbWFya2Vyc1xuICAgICAqXG4gICAgICogQHR5cGUge2FycmF5fVxuICAgICAqL1xuICAgIHRoaXMubWFya2VycyA9IFtdO1xuICAgIC8qKlxuICAgICAqIENvbGxlY3Rpb24gb2YgbWFwJ3MgbGluZXNcbiAgICAgKlxuICAgICAqIEB0eXBlIHthcnJheX1cbiAgICAgKi9cbiAgICB0aGlzLnBvbHlsaW5lcyA9IFtdO1xuICAgIC8qKlxuICAgICAqIENvbGxlY3Rpb24gb2YgbWFwJ3Mgcm91dGVzIHJlcXVlc3RlZCBieSB7QGxpbmsgR01hcHMjZ2V0Um91dGVzfSwge0BsaW5rIEdNYXBzI3JlbmRlclJvdXRlfSwge0BsaW5rIEdNYXBzI2RyYXdSb3V0ZX0sIHtAbGluayBHTWFwcyN0cmF2ZWxSb3V0ZX0gb3Ige0BsaW5rIEdNYXBzI2RyYXdTdGVwcGVkUm91dGV9XG4gICAgICpcbiAgICAgKiBAdHlwZSB7YXJyYXl9XG4gICAgICovXG4gICAgdGhpcy5yb3V0ZXMgPSBbXTtcbiAgICAvKipcbiAgICAgKiBDb2xsZWN0aW9uIG9mIG1hcCdzIHBvbHlnb25zXG4gICAgICpcbiAgICAgKiBAdHlwZSB7YXJyYXl9XG4gICAgICovXG4gICAgdGhpcy5wb2x5Z29ucyA9IFtdO1xuICAgIHRoaXMuaW5mb1dpbmRvdyA9IG51bGw7XG4gICAgdGhpcy5vdmVybGF5RWxlbWVudCA9IG51bGw7XG4gICAgLyoqXG4gICAgICogQ3VycmVudCBtYXAncyB6b29tXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuem9vbSA9IHpvb207XG5cbiAgICB0aGlzLnJlZ2lzdGVyZWRFdmVudHMgPSB7fTtcblxuICAgIGlmIChtYXJrZXJDbHVzdGVyZXIpIHtcbiAgICAgIC8qKlxuICAgICAgICogTWFya2VyIENsdXN0ZXJlciBpbnN0YW5jZVxuICAgICAgICpcbiAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgKi9cbiAgICAgIHRoaXMubWFya2VyQ2x1c3RlcmVyID0gbWFya2VyQ2x1c3RlcmVyLmFwcGx5KHRoaXMsIFt0aGlzLm1hcF0pO1xuICAgIH1cblxuICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKHRoaXMubWFwLCAnem9vbV9jaGFuZ2VkJywgdGhpcy5oaWRlQ29udGV4dE1lbnUpO1xuXG4gICAgc2V0dXBFdmVudHMoeyBldmVudHM6IE1BUF9FVkVOVFMsIG9iamVjdDogdGhpcy5tYXAsIGluc3RhbmNlOiB0aGlzLCBoYW5kbGVyczogb3B0aW9ucywgfSk7XG5cbiAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcih0aGlzLm1hcCwgJ3JpZ2h0Y2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChvcHRpb25zLnJpZ2h0Y2xpY2spIHtcbiAgICAgICAgb3B0aW9ucy5yaWdodGNsaWNrLmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoR01hcHMuY29udGV4dE1lbnVzW3RoaXMuaWRdLm1hcCkge1xuICAgICAgICB0aGlzLmJ1aWxkQ29udGV4dE1lbnUoJ21hcCcsIGV2ZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGJ1aWxkQ29udGV4dE1lbnVIVE1MKGNvbnRyb2wsIGV2ZW50KSB7XG4gICAgaWYgKCFnZXRFbGVtZW50QnlJZChHTUFQU19NRU5VX0lEKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRleHRNZW51RWxlbWVudCA9IGdldEVsZW1lbnRCeUlkKEdNQVBTX01FTlVfSUQpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSBHTWFwcy5jb250ZXh0TWVudXNbdGhpcy5pZF1bY29udHJvbF07XG5cbiAgICBjb25zdCBodG1sID0gT2JqZWN0LmtleXMob3B0aW9ucykubWFwKGtleSA9PlxuICAgICAgYDxsaT48YSBpZD1cIiR7Y29udHJvbH1fJHtrZXl9XCIgaHJlZj1cIiNcIj4ke29wdGlvbnNba2V5XS50aXRsZX08L2E+PC9saT5gXG4gICAgKS5qb2luKCcnKTtcblxuICAgIGNvbnRleHRNZW51RWxlbWVudC5pbm5lckhUTUwgPSBodG1sO1xuXG4gICAgY29uc3QgY29udGV4dE1lbnVJdGVtcyA9IGNvbnRleHRNZW51RWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYScpO1xuXG4gICAgWy4uLmNvbnRleHRNZW51SXRlbXNdLmZvckVhY2goKGNvbnRleHRNZW51SXRlbSkgPT4ge1xuICAgICAgY29uc3QgY29udGV4dE1lbnVJdGVtTGlzdGVuZXIgPSAoY29udGV4dE1lbnVJdGVtTGlzdGVuZXJFdmVudCkgPT4ge1xuICAgICAgICBjb250ZXh0TWVudUl0ZW1MaXN0ZW5lckV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgb3B0aW9uc1tjb250ZXh0TWVudUl0ZW1MaXN0ZW5lckV2ZW50LnRhcmdldC5pZC5yZXBsYWNlKGAke2NvbnRyb2x9X2AsICcnKV0uYWN0aW9uLmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgICB0aGlzLmhpZGVDb250ZXh0TWVudSgpO1xuICAgICAgfTtcblxuICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuY2xlYXJMaXN0ZW5lcnMoY29udGV4dE1lbnVJdGVtLCAnY2xpY2snKTtcbiAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyT25jZShjb250ZXh0TWVudUl0ZW0sICdjbGljaycsIGNvbnRleHRNZW51SXRlbUxpc3RlbmVyLCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBwb3NpdGlvbiA9IGZpbmRBYnNvbHV0ZVBvc2l0aW9uKHRoaXMuZWxlbWVudCk7XG4gICAgY29uc3QgbGVmdCA9IHBvc2l0aW9uWzBdICsgZXZlbnQucGl4ZWwueCAtIDE1O1xuICAgIGNvbnN0IHRvcCA9IHBvc2l0aW9uWzFdICsgZXZlbnQucGl4ZWwueSAtIDE1O1xuXG4gICAgY29udGV4dE1lbnVFbGVtZW50LnN0eWxlLmxlZnQgPSBgJHtsZWZ0fXB4YDtcbiAgICBjb250ZXh0TWVudUVsZW1lbnQuc3R5bGUudG9wID0gYCR7dG9wfXB4YDtcbiAgfVxuXG4gIGJ1aWxkQ29udGV4dE1lbnUoY29udHJvbCwgZXZlbnQpIHtcbiAgICBpZiAoY29udHJvbCA9PT0gJ21hcmtlcicpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgZXZlbnQucGl4ZWwgPSB7fTtcblxuICAgICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBnb29nbGUubWFwcy5PdmVybGF5VmlldygpO1xuICAgICAgb3ZlcmxheS5zZXRNYXAodGhpcy5tYXApO1xuXG4gICAgICBvdmVybGF5LmRyYXcgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3Rpb24gPSBvdmVybGF5LmdldFByb2plY3Rpb24oKTtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBldmVudC5tYXJrZXIuZ2V0UG9zaXRpb24oKTtcblxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgZXZlbnQucGl4ZWwgPSBwcm9qZWN0aW9uLmZyb21MYXRMbmdUb0NvbnRhaW5lclBpeGVsKHBvc2l0aW9uKTtcblxuICAgICAgICB0aGlzLmJ1aWxkQ29udGV4dE1lbnVIVE1MKGNvbnRyb2wsIGV2ZW50KTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYnVpbGRDb250ZXh0TWVudUhUTUwoY29udHJvbCwgZXZlbnQpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRleHRNZW51RWxlbWVudCA9IGdldEVsZW1lbnRCeUlkKEdNQVBTX01FTlVfSUQpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb250ZXh0TWVudUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfSwgMCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgY29udGV4dCBtZW51IGZvciBhIG1hcCBvciBhIG1hcmtlci5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgYG9wdGlvbnNgIG9iamVjdCBzaG91bGQgY29udGFpbjpcbiAgICogKiBgY29udHJvbGAgKHN0cmluZyk6IEtpbmQgb2YgY29udHJvbCB0aGUgY29udGV4dCBtZW51IHdpbGwgYmUgYXR0YWNoZWQuIENhbiBiZSBcIm1hcFwiIG9yIFwibWFya2VyXCIuXG4gICAqICogYG9wdGlvbnNgIChhcnJheSk6IEEgY29sbGVjdGlvbiBvZiBjb250ZXh0IG1lbnUgaXRlbXM6XG4gICAqICAgKiBgdGl0bGVgIChzdHJpbmcpOiBJdGVtJ3MgdGl0bGUgc2hvd24gaW4gdGhlIGNvbnRleHQgbWVudS5cbiAgICogICAqIGBuYW1lYCAoc3RyaW5nKTogSXRlbSdzIGlkZW50aWZpZXIuXG4gICAqICAgKiBgYWN0aW9uYCAoZnVuY3Rpb24pOiBGdW5jdGlvbiB0cmlnZ2VyZWQgYWZ0ZXIgc2VsZWN0aW5nIHRoZSBjb250ZXh0IG1lbnUgaXRlbS5cbiAgICovXG4gIHNldENvbnRleHRNZW51KG9wdGlvbnMpIHtcbiAgICBHTWFwcy5jb250ZXh0TWVudXNbdGhpcy5pZF1bb3B0aW9ucy5jb250cm9sXSA9IHt9O1xuXG4gICAgT2JqZWN0LmtleXMob3B0aW9ucy5vcHRpb25zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IG9wdGlvbnMub3B0aW9uc1trZXldO1xuXG4gICAgICBHTWFwcy5jb250ZXh0TWVudXNbdGhpcy5pZF1bb3B0aW9ucy5jb250cm9sXVtvcHRpb24ubmFtZV0gPSB7XG4gICAgICAgIHRpdGxlOiBvcHRpb24udGl0bGUsXG4gICAgICAgIGFjdGlvbjogb3B0aW9uLmFjdGlvbixcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBsZXQgY29udGV4dE1lbnVFbGVtZW50ID0gZ2V0RWxlbWVudEJ5SWQoR01BUFNfTUVOVV9JRCk7XG5cbiAgICBpZiAoIWNvbnRleHRNZW51RWxlbWVudCkge1xuICAgICAgY29udGV4dE1lbnVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgICAgY29udGV4dE1lbnVFbGVtZW50LmlkID0gR01BUFNfTUVOVV9JRDtcbiAgICAgIGNvbnRleHRNZW51RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgY29udGV4dE1lbnVFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgIGNvbnRleHRNZW51RWxlbWVudC5zdHlsZS5taW5XaWR0aCA9ICcxMDBweCc7XG4gICAgICBjb250ZXh0TWVudUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9ICd3aGl0ZSc7XG4gICAgICBjb250ZXh0TWVudUVsZW1lbnQuc3R5bGUubGlzdFN0eWxlID0gJ25vbmUnO1xuICAgICAgY29udGV4dE1lbnVFbGVtZW50LnN0eWxlLnBhZGRpbmcgPSAnOHB4JztcbiAgICAgIGNvbnRleHRNZW51RWxlbWVudC5zdHlsZS5ib3hTaGFkb3cgPSAnMnB4IDJweCA2cHggI2NjYyc7XG5cbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGV4dE1lbnVFbGVtZW50KTtcbiAgICB9XG5cbiAgICBnb29nbGUubWFwcy5ldmVudC5hZGREb21MaXN0ZW5lcihjb250ZXh0TWVudUVsZW1lbnQsICdtb3VzZW91dCcsIChldmVudCkgPT4ge1xuICAgICAgaWYgKCFldmVudC5yZWxhdGVkVGFyZ2V0IHx8ICFldmVudC50YXJnZXQuY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldCkpIHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGNvbnRleHRNZW51RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9LCA3MDApO1xuICAgICAgfVxuICAgIH0sIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlIHRoZSBjdXJyZW50IGNvbnRleHQgbWVudVxuICAgKi9cbiAgaGlkZUNvbnRleHRNZW51KCkge1xuICAgIGNvbnN0IGNvbnRleHRNZW51RWxlbWVudCA9IGdldEVsZW1lbnRCeUlkKEdNQVBTX01FTlVfSUQpO1xuXG4gICAgaWYgKGNvbnRleHRNZW51RWxlbWVudCkge1xuICAgICAgY29udGV4dE1lbnVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgYSBgcmVzaXplYCBldmVudCwgdXNlZnVsIGlmIHlvdSBuZWVkIHRvIHJlcGFpbnQgdGhlIGN1cnJlbnQgbWFwIChmb3IgY2hhbmdlcyBpbiB0aGUgdmlld3BvcnQgb3IgZGlzcGxheSAvIGhpZGUgYWN0aW9ucykuXG4gICAqL1xuICByZWZyZXNoKCkge1xuICAgIGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIodGhpcy5tYXAsICdyZXNpemUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGp1c3QgdGhlIG1hcCB6b29tIHRvIGluY2x1ZGUgYWxsIHRoZSBjb29yZGluYXRlcyBpbiB0aGUgYGxhdExuZ3NgIGFycmF5LlxuICAgKlxuICAgKiBAcGFyYW0ge2FycmF5fSBsYXRMbmdzIC0gQ29sbGVjdGlvbiBvZiBgZ29vZ2xlLm1hcHMuTGF0TG5nYCBvYmplY3RzLlxuICAgKi9cbiAgZml0TGF0TG5nQm91bmRzKGxhdExuZ3MpIHtcbiAgICBjb25zdCBib3VuZHMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCk7XG5cbiAgICBsYXRMbmdzLmZvckVhY2gobGF0TG5nID0+IGJvdW5kcy5leHRlbmQobGF0TG5nKSk7XG5cbiAgICB0aGlzLm1hcC5maXRCb3VuZHMoYm91bmRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGp1c3QgdGhlIG1hcCB6b29tIHRvIGluY2x1ZGUgYWxsIHRoZSBtYXJrZXJzIGFkZGVkIGluIHRoZSBtYXAuXG4gICAqL1xuICBmaXRab29tKCkge1xuICAgIGNvbnN0IGxhdExuZ3MgPSB0aGlzLm1hcmtlcnNcbiAgICAgIC5maWx0ZXIobWFya2VyID0+IG1hcmtlci52aXNpYmxlKVxuICAgICAgLm1hcChtYXJrZXIgPT4gbWFya2VyLmdldFBvc2l0aW9uKCkpO1xuXG4gICAgdGhpcy5maXRMYXRMbmdCb3VuZHMobGF0TG5ncyk7XG4gIH1cblxuICAvKipcbiAgICogQ2VudGVyIHRoZSBtYXAgdXNpbmcgdGhlIGBsYXRgIGFuZCBgbG5nYCBjb29yZGluYXRlcy5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxhdGl0dWRlIC0gTGF0aXR1ZGUgb2YgdGhlIGNvb3JkaW5hdGUuIElmIGBsYXRpdHVkZWAgYW5kIGBsb25naXR1ZGVgIGFyZSBzZXQsIGBwb3NpdGlvbmAgaXMgaWdub3JlZC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGxvbmdpdHVkZSAtIExvbmdpdHVkZSBvZiB0aGUgY29vcmRpbmF0ZS4gSWYgYGxhdGl0dWRlYCBhbmQgYGxvbmdpdHVkZWAgYXJlIHNldCwgYHBvc2l0aW9uYCBpcyBpZ25vcmVkLlxuICAgKiBAcGFyYW0ge2dvb2dsZS5tYXBzLkxhdExuZ30gcG9zaXRpb24gLSBBIGBnb29nbGUubWFwcy5MYXRMbmdgIGNvb3JkaW5hdGUgaW5kaWNhdGUgdGhlIHBvc2l0aW9uLiBJZiBzZXQsIGBsYXRpdHVkZWAgYW5kIGBsb25naXR1ZGVgIGFyZSBpZ25vcmVkLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbY2FsbGJhY2tdIC0gQ2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIGFmdGVyIHRoZSBtYXAgaXMgY2VudGVyZWQuXG4gICAqL1xuICBzZXRDZW50ZXIoLi4uYXJncykge1xuICAgIGNvbnN0IGxhdExuZyA9IGxhdExuZ0Zyb21Bcmd1bWVudHMoYXJncyk7XG4gICAgY29uc3QgY2FsbGJhY2sgPSBhcmdzLnNsaWNlKCkucG9wKCk7XG5cblxuICAgIHRoaXMubWFwLnBhblRvKGxhdExuZyk7XG5cbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWxsYmFjay5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIEhUTUwgZWxlbWVudCBjb250YWluZXIgb2YgdGhlIG1hcC5cbiAgICpcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fSB0aGUgZWxlbWVudCBjb250YWluZXIuXG4gICAqL1xuICBnZXRFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogSW5jcmVhc2UgdGhlIG1hcCdzIHpvb20uXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbbWFnbml0dWRlXSAtIFRoZSBudW1iZXIgb2YgdGltZXMgdGhlIG1hcCB3aWxsIGJlIHpvb21lZCBpbi5cbiAgICovXG4gIHpvb21JbihtYWduaXR1ZGUgPSAxKSB7XG4gICAgdGhpcy56b29tID0gdGhpcy5tYXAuZ2V0Wm9vbSgpICsgbWFnbml0dWRlO1xuICAgIHRoaXMubWFwLnNldFpvb20odGhpcy56b29tKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWNyZWFzZSB0aGUgbWFwJ3Mgem9vbS5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IFttYWduaXR1ZGVdIC0gVGhlIG51bWJlciBvZiB0aW1lcyB0aGUgbWFwIHdpbGwgYmUgem9vbWVkIG91dC5cbiAgICovXG4gIHpvb21PdXQobWFnbml0dWRlID0gMSkge1xuICAgIHRoaXMuem9vbSA9IHRoaXMubWFwLmdldFpvb20oKSAtIG1hZ25pdHVkZTtcbiAgICB0aGlzLm1hcC5zZXRab29tKHRoaXMuem9vbSk7XG4gIH1cbn1cblxuR01hcHMuY29udGV4dE1lbnVzID0ge307XG5cbmNvbnN0IGdvb2dsZU1hcHNNYXBNZXRob2RzID0gT2JqZWN0LmtleXMoZ29vZ2xlLm1hcHMuTWFwLnByb3RvdHlwZSlcbiAgLmZpbHRlcihrZXkgPT4gKHR5cGVvZiBnb29nbGUubWFwcy5NYXAucHJvdG90eXBlW2tleV0gPT09ICdmdW5jdGlvbicgJiYgIUdNYXBzLnByb3RvdHlwZVtrZXldKSk7XG5cbmdvb2dsZU1hcHNNYXBNZXRob2RzLmZvckVhY2goKG1ldGhvZE5hbWUpID0+IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgR01hcHMucHJvdG90eXBlW21ldGhvZE5hbWVdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gdGhpcy5tYXBbbWV0aG9kTmFtZV0uYXBwbHkodGhpcy5tYXAsIGFyZ3MpO1xuICB9O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXBzO1xuIiwiaW1wb3J0IEdNYXBzIGZyb20gJy4vY29yZSc7XG5cbi8qKlxuICogRXh0ZW5kcyBHTWFwcyB0byBiaW5kIGFuZCB0cmlnZ2VyIGV2ZW50cy5cbiAqIEBtb2R1bGUgRXZlbnRzXG4gKi9cblxuLyoqXG4gKiBDb2xsZWN0aW9uIG9mIGN1c3RvbSBldmVudHMgdGhhdCBjYW4gYmUgcmVnaXN0ZXJlZCBhbmQgZmlyZWQuXG4gKlxuICogQHR5cGUge2FycmF5fVxuICovXG5HTWFwcy5jdXN0b21FdmVudHMgPSBbJ21hcmtlcl9hZGRlZCcsICdtYXJrZXJfcmVtb3ZlZCcsICdwb2x5bGluZV9hZGRlZCcsICdwb2x5bGluZV9yZW1vdmVkJywgJ3BvbHlnb25fYWRkZWQnLCAncG9seWdvbl9yZW1vdmVkJywgJ2xheWVyX2FkZGVkJywgJ2xheWVyX3JlbW92ZWQnLCAnb3ZlcmxheV9tYXBfdHlwZV9hZGRlZCcsICdvdmVybGF5X21hcF90eXBlX3JlbW92ZWQnLCAnb3ZlcmxheV9hZGRlZCcsICdvdmVybGF5X3JlbW92ZWQnLCAnZ2VvbG9jYXRlZCcsICdnZW9sb2NhdGlvbl9mYWlsZWQnXTtcblxuLyoqXG4gKiBBZGQgYW4gZXZlbnQgKG5hdGl2ZSBvciBjdXN0b20pIHRvIGFuIG9iamVjdC5cbiAqIEBmdW5jdGlvbiBvblxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnQuIEl0IGNhbiBiZSBhbnkgb2YgdGhlIG5hdGl2ZSBldmVudHMgZnJvbSBHb29nbGUgTWFwcywgb3IgdGhlIG9uZXMgZGVzY3JpYmVkIGluIGBHTWFwcy5jdXN0b21FdmVudHNgLlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldCAtIFRoZSB0YXJnZXQgb2YgdGhlIGV2ZW50LiBJdCBjYW4gYmUgYSBuYXRpdmUgb2JqZWN0IGZyb20gR29vZ2xlIE1hcHMsIChzdWNoIGFzIGEgZ29vZ2xlLm1hcHMuTWFwLCBnb29nbGUubWFwcy5NYXJrZXIsIGV0Yy4pLCBvciBhIEdNYXBzIGluc3RhbmNlLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlciAtIFRoZSBoYW5kbGVyIChvZnRlbiBjYWxsZWQgbGlzdGVuZXIpIG9mIHRoZSBldmVudC4gSXMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgZXZlcnkgdGltZSB0aGUgZXZlbnQgaXMgZmlyZWQuXG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xuR01hcHMub24gPSAoZXZlbnROYW1lLCBvYmplY3QsIGhhbmRsZXIpID0+IHtcbiAgbGV0IHRhcmdldCA9IG9iamVjdDtcblxuICBpZiAoR01hcHMuY3VzdG9tRXZlbnRzLmluZGV4T2YoZXZlbnROYW1lKSA9PT0gLTEpIHtcbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgR01hcHMpIHtcbiAgICAgIHRhcmdldCA9IHRhcmdldC5tYXA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKHRhcmdldCwgZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgfVxuXG4gIGNvbnN0IHJlZ2lzdGVyZWRFdmVudCA9IHtcbiAgICBoYW5kbGVyLFxuICAgIGV2ZW50TmFtZSxcbiAgfTtcblxuICB0YXJnZXQucmVnaXN0ZXJlZEV2ZW50c1tldmVudE5hbWVdID0gdGFyZ2V0LnJlZ2lzdGVyZWRFdmVudHNbZXZlbnROYW1lXSB8fCBbXTtcbiAgdGFyZ2V0LnJlZ2lzdGVyZWRFdmVudHNbZXZlbnROYW1lXS5wdXNoKHJlZ2lzdGVyZWRFdmVudCk7XG5cbiAgcmV0dXJuIHJlZ2lzdGVyZWRFdmVudDtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGV2ZW50IChuYXRpdmUgb3IgY3VzdG9tKSB0byBhbiBvYmplY3QuXG4gKiBAZnVuY3Rpb24gb2ZmXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudC4gSXQgY2FuIGJlIGFueSBvZiB0aGUgbmF0aXZlIGV2ZW50cyBmcm9tIEdvb2dsZSBNYXBzLCBvciB0aGUgb25lcyBkZXNjcmliZWQgaW4gYEdNYXBzLmN1c3RvbUV2ZW50c2AuXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0IC0gVGhlIHRhcmdldCBvZiB0aGUgZXZlbnQuIEl0IGNhbiBiZSBhIG5hdGl2ZSBvYmplY3QgZnJvbSBHb29nbGUgTWFwcywgKHN1Y2ggYXMgYSBnb29nbGUubWFwcy5NYXAsIGdvb2dsZS5tYXBzLk1hcmtlciwgZXRjLiksIG9yIGEgR01hcHMgaW5zdGFuY2UuXG4gKi9cbkdNYXBzLm9mZiA9IChldmVudE5hbWUsIG9iamVjdCkgPT4ge1xuICBsZXQgdGFyZ2V0ID0gb2JqZWN0O1xuXG4gIGlmIChHTWFwcy5jdXN0b21FdmVudHMuaW5kZXhPZihldmVudE5hbWUpID09PSAtMSkge1xuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBHTWFwcykge1xuICAgICAgdGFyZ2V0ID0gdGFyZ2V0Lm1hcDtcbiAgICB9XG5cbiAgICBnb29nbGUubWFwcy5ldmVudC5jbGVhckxpc3RlbmVycyh0YXJnZXQsIGV2ZW50TmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0LnJlZ2lzdGVyZWRFdmVudHNbZXZlbnROYW1lXSA9IFtdO1xuICB9XG59O1xuXG4vKipcbiAqIEFkZCBhIG5hdGl2ZSBldmVudCB0aGF0IHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoZSB0YXJnZXQgYWZ0ZXIgaXQgaGFzIGJlZW4gZXhlY3V0ZWQgb25jZS5cbiAqIEBmdW5jdGlvbiBvbmNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudC4gSXQgaGFzIHRvIGJlIGFueSBvZiB0aGUgbmF0aXZlIGV2ZW50cyBmcm9tIEdvb2dsZSBNYXBzLlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldCAtIFRoZSB0YXJnZXQgb2YgdGhlIGV2ZW50LiBJdCBoYXMgdG8gYmUgYSBuYXRpdmUgb2JqZWN0IGZyb20gR29vZ2xlIE1hcHMsIHN1Y2ggYXMgYSBnb29nbGUubWFwcy5NYXAsIGdvb2dsZS5tYXBzLk1hcmtlciwgZXRjLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlciAtIFRoZSBoYW5kbGVyIChvZnRlbiBjYWxsZWQgbGlzdGVuZXIpIG9mIHRoZSBldmVudC4gSXMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiB0aGUgZXZlbnQgaXMgZmlyZWQgdGhlIGZpcnN0IHRpbWUuXG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xuR01hcHMub25jZSA9IChldmVudE5hbWUsIG9iamVjdCwgaGFuZGxlcikgPT4ge1xuICBsZXQgdGFyZ2V0ID0gb2JqZWN0O1xuXG4gIGlmIChHTWFwcy5jdXN0b21FdmVudHMuaW5kZXhPZihldmVudE5hbWUpID09PSAtMSkge1xuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBHTWFwcykge1xuICAgICAgdGFyZ2V0ID0gdGFyZ2V0Lm1hcDtcbiAgICB9XG5cbiAgICByZXR1cm4gZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXJPbmNlKHRhcmdldCwgZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG4vKipcbiAqIFRyaWdnZXIgYW4gZXZlbnQgKG5hdGl2ZSBvciBjdXN0b20pIGFuZCBleGVjdXRlIGFsbCB0aGUgaGFuZGxlcnMgcmVnaXN0ZXJlZCBwcmV2aW91c2x5LlxuICogQGZ1bmN0aW9uIGZpcmVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50LiBJdCBjYW4gYmUgYW55IG9mIHRoZSBuYXRpdmUgZXZlbnRzIGZyb20gR29vZ2xlIE1hcHMsIG9yIHRoZSBvbmVzIGRlc2NyaWJlZCBpbiBgR01hcHMuY3VzdG9tRXZlbnRzYC5cbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXQgLSBUaGUgdGFyZ2V0IG9mIHRoZSBldmVudC4gSXQgY2FuIGJlIGEgbmF0aXZlIG9iamVjdCBmcm9tIEdvb2dsZSBNYXBzLCAoc3VjaCBhcyBhIGdvb2dsZS5tYXBzLk1hcCwgZ29vZ2xlLm1hcHMuTWFya2VyLCBldGMuKSwgb3IgYSBHTWFwcyBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IC0gVGhlIGNvbnRleHQgZm9yIHRoZSBldmVudCBoYW5kbGVyIChyZXByZXNlbnRlZCBieSBgdGhpc2Aga2V5d29yZCBpbnNpZGUgdGhlIGhhbmRsZXIpLlxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbkdNYXBzLmZpcmUgPSAoZXZlbnROYW1lLCBvYmplY3QsIGNvbnRleHQpID0+IHtcbiAgaWYgKEdNYXBzLmN1c3RvbUV2ZW50cy5pbmRleE9mKGV2ZW50TmFtZSkgPT09IC0xKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgY29uc3QgZXZlbnRBcmd1bWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoYXJndW1lbnRzKS5zbGljZSgyKTtcbiAgICBnb29nbGUubWFwcy5ldmVudC50cmlnZ2VyKG9iamVjdCwgZXZlbnROYW1lLCBldmVudEFyZ3VtZW50cyk7XG4gIH0gZWxzZSBpZiAoZXZlbnROYW1lIGluIGNvbnRleHQucmVnaXN0ZXJlZEV2ZW50cykge1xuICAgIGNvbnRleHQucmVnaXN0ZXJlZEV2ZW50c1tldmVudE5hbWVdLmZvckVhY2gocmVnaXN0ZXJlZEV2ZW50ID0+XG4gICAgICByZWdpc3RlcmVkRXZlbnQuaGFuZGxlci5jYWxsKGNvbnRleHQsIG9iamVjdClcbiAgICApO1xuICB9XG59O1xuXG5HTWFwcy5wcm90b3R5cGUub24gPSBmdW5jdGlvbiBvbihldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgcmV0dXJuIEdNYXBzLm9uKGV2ZW50TmFtZSwgdGhpcywgaGFuZGxlcik7XG59O1xuXG5HTWFwcy5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24gb2ZmKGV2ZW50TmFtZSkge1xuICBHTWFwcy5vZmYoZXZlbnROYW1lLCB0aGlzKTtcbn07XG5cbkdNYXBzLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZShldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgcmV0dXJuIEdNYXBzLm9uY2UoZXZlbnROYW1lLCB0aGlzLCBoYW5kbGVyKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXBzO1xuIiwiaW1wb3J0IEdNYXBzLCB7IGxhdExuZ0Zyb21Bcmd1bWVudHMgfSBmcm9tICcuL2NvcmUnO1xuaW1wb3J0ICcuL3BvbHlmaWxscyc7XG5cbi8qKlxuICogRXh0ZW5kcyBHTWFwcyB0byB1c2UgZ2VvZmVuY2VzLlxuICogQG1vZHVsZSBHZW9mZW5jZXNcbiAqL1xuXG4vKipcbiAqIENoZWNrIGlmIGEgY29vcmRpbmF0ZSBpcyBpbnNpZGUgb3Igbm90IGEgZ2VvZmVuY2UuXG4gKiBAZnVuY3Rpb24gY2hlY2tHZW9mZW5jZVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBsYXRMbmcgLSBBIExhdExuZ0xpdGVyYWwgb2JqZWN0IChhIHBsYWluIG9iamVjdCB3aXRoIGBsYXRgIGFuZCBgbG5nYCBwcm9wZXJ0aWVzKS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBmZW5jZSAtIEEgZmVuY2Ugb2JqZWN0LCB3aGljaCBjYW4gYmUgYW4gaW5zdGFuY2Ugb2YgYGdvb2dsZS5tYXBzLlBvbHlnb25gLCBgZ29vZ2xlLm1hcHMuQ2lyY2xlYCwgYGdvb2dsZS5tYXBzLlJlY3RhbmdsZWAgb3IgYGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kc2AuXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IElzIGB0cnVlYCBpZiB0aGUgY29vcmRpbmF0ZSBpcyBpbnNpZGUgdGhlIGZlbmNlLCBhbmQgYGZhbHNlYCBpZiBpcyBub3QuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5jaGVja0dlb2ZlbmNlID0gZnVuY3Rpb24gY2hlY2tHZW9mZW5jZSguLi5hcmdzKSB7XG4gIGNvbnN0IGxhZ0xuZyA9IGxhdExuZ0Zyb21Bcmd1bWVudHMoYXJncyk7XG4gIGNvbnN0IGZlbmNlID0gYXJncy5wb3AoKTtcblxuICByZXR1cm4gZmVuY2UuY29udGFpbnNMYXRMbmcobGFnTG5nKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBtYXJrZXIncyBwb3NpdGlvbiBpcyBpbnNpZGUgb3Igbm90IGFueSBvZiBpdHMgZ2VvZmVuY2VzLiBJdCB3aWxsIHRyaWdnZXIgdGhlIGBvdXRzaWRlQ2FsbGJhY2tgIGZ1bmN0aW9uIGZvciBldmVyeSBmZW5jZSB0aGF0IGNvbnRhaW5zIHRoZSBtYXJrZXIncyBwb3NpdGlvbi5cbiAqIEBmdW5jdGlvbiBjaGVja01hcmtlckdlb2ZlbmNlXG4gKlxuICogQHBhcmFtIHtnb29nbGUubWFwcy5NYXJrZXJ9IG1hcmtlciAtIEEgbWFya2VyIGFkZGVkIHdpdGggYEdNYXBzI2FkZE1hcmtlcmAuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvdXRzaWRlQ2FsbGJhY2sgLSBBIGZ1bmN0aW9uIHRoYXQgd2lsbCByZWNlaXZlIHR3byBhcmd1bWVudHM6IHRoZSBgbWFya2VyYCBhbmQgdGhlIGN1cnJlbnQgZmVuY2UuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5jaGVja01hcmtlckdlb2ZlbmNlID0gZnVuY3Rpb24gY2hlY2tNYXJrZXJHZW9mZW5jZShtYXJrZXIsIG91dHNpZGVDYWxsYmFjaykge1xuICBpZiAobWFya2VyLmZlbmNlcykge1xuICAgIG1hcmtlci5mZW5jZXMuZm9yRWFjaCgoZmVuY2UpID0+IHtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gbWFya2VyLmdldFBvc2l0aW9uKCk7XG5cbiAgICAgIGlmICghdGhpcy5jaGVja0dlb2ZlbmNlKHBvc2l0aW9uLCBmZW5jZSkpIHtcbiAgICAgICAgb3V0c2lkZUNhbGxiYWNrKG1hcmtlciwgZmVuY2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHTWFwcztcbiIsImltcG9ydCBHTWFwcywgeyBzZXR1cEV2ZW50cywgYXJyYXlUb0xhdExuZywgZmxhdHRlbkFycmF5IH0gZnJvbSAnLi9jb3JlJztcbmltcG9ydCAnLi9ldmVudHMnO1xuXG4vKipcbiAqIEV4dGVuZHMgR01hcHMgdG8gdXNlIHBvbHlsaW5lcyBhbmQgcG9seWdvbnMuXG4gKiBAbW9kdWxlIEdlb21ldHJ5XG4gKi9cblxuY29uc3QgRVZFTlRTID0gWydjbGljaycsICdkYmxjbGljaycsICdtb3VzZWRvd24nLCAnbW91c2Vtb3ZlJywgJ21vdXNlb3V0JywgJ21vdXNlb3ZlcicsICdtb3VzZXVwJywgJ3JpZ2h0Y2xpY2snXTtcblxuLyoqXG4gKiBEcmF3IGEgcG9seWxpbmUgaW4gdGhlIE1hcCBhbmQgYWRkIGl0IHRvIHRoZSBwb2x5bGluZXMgY29sbGVjdGlvbi4gVGhpcyBtZXRob2QgYWxzbyBmaXJlcyBhIGBwb2x5bGluZV9hZGRlZGAgZXZlbnQuXG4gKiBAZnVuY3Rpb24gZHJhd1BvbHlsaW5lXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgYG9wdGlvbnNgIG9iamVjdCBzaG91bGQgY29udGFpbjpcbiAqIEBwYXJhbSB7YXJyYXl9IG9wdGlvbnMucGF0aCAtIENvbGxlY3Rpb24gb2YgY29vcmRpbmF0ZXMgKHdoaWNoIGNhbiBiZSBlaXRoZXIgYW4gYXJyYXkgW2xhdCwgbG5nXSBvciBhIGdvb2dsZS5tYXBzLkxhdExuZyBvYmplY3QpLlxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc3Ryb2tlQ29sb3IgLSBDb2xvciBvZiB0aGUgcG9seWxpbmUuIENhbiBiZSBoZXhhZGVjaW1hbCBvciBDU1MgbmFtZS5cbiAqIEBwYXJhbSB7ZmxvYXR9IG9wdGlvbnMuc3Ryb2tlT3BhY2l0eSAtIE9wYWNpdHkgb2YgdGhlIHBvbHlsaW5lIGZyb20gMC4wIHRvIDEuMC5cbiAqIEBwYXJhbSB7aW50ZWdlcn0gb3B0aW9ucy5zdHJva2VXZWlnaHQgLSBQb2x5bGluZSB3aWR0aCBpbiBwaXhlbHMuXG4gKlxuICogYG9wdGlvbnNgIGFsc28gYWNjZXB0cyBhbnkgb3B0aW9uIGRlZmluZWQgaW4gdGhlIFtvZmZpY2lhbCBkb2N1bWVudGF0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjUG9seWxpbmVPcHRpb25zKSBhbmQgYW55IGV2ZW50IGRlZmluZWQgaW4gdGhlIFtcIkV2ZW50c1wiIHNlY3Rpb25dKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNQb2x5bGluZSkuXG4gKlxuICogQHJldHVybnMge2dvb2dsZS5tYXBzLlBvbHlsaW5lfVxuICovXG5HTWFwcy5wcm90b3R5cGUuZHJhd1BvbHlsaW5lID0gZnVuY3Rpb24gZHJhd1BvbHlsaW5lKGJhc2VPcHRpb25zKSB7XG4gIGNvbnN0IHsgaWNvbnMsIHN0cm9rZUNvbG9yLCBzdHJva2VPcGFjaXR5LCBzdHJva2VXZWlnaHQsIGdlb2Rlc2ljLCBjbGlja2FibGUgPSB0cnVlLCBlZGl0YWJsZSA9IGZhbHNlLCB2aXNpYmxlID0gdHJ1ZSwgekluZGV4LCAuLi5vcHRpb25zIH0gPSBiYXNlT3B0aW9ucztcbiAgbGV0IHBhdGggPSBbXTtcblxuICBpZiAob3B0aW9ucy5wYXRoLmxlbmd0aCkge1xuICAgIGlmIChvcHRpb25zLnBhdGhbMF1bMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcGF0aCA9IFsuLi5vcHRpb25zLnBhdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXRoID0gb3B0aW9ucy5wYXRoLm1hcChsYXRMbmcgPT5cbiAgICAgICAgbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsYXRMbmdbMF0sIGxhdExuZ1sxXSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcG9seWxpbmVPcHRpb25zID0ge1xuICAgIC4uLm9wdGlvbnMsXG4gICAgbWFwOiB0aGlzLm1hcCxcbiAgICBwYXRoLFxuICAgIHN0cm9rZUNvbG9yLFxuICAgIHN0cm9rZU9wYWNpdHksXG4gICAgc3Ryb2tlV2VpZ2h0LFxuICAgIGdlb2Rlc2ljLFxuICAgIHZpc2libGUsXG4gICAgY2xpY2thYmxlLFxuICAgIGVkaXRhYmxlLFxuICAgIGljb25zLFxuICAgIHpJbmRleCxcbiAgfTtcblxuICBjb25zdCBwb2x5bGluZSA9IG5ldyBnb29nbGUubWFwcy5Qb2x5bGluZShwb2x5bGluZU9wdGlvbnMpO1xuXG4gIHNldHVwRXZlbnRzKHsgZXZlbnRzOiBFVkVOVFMsIG9iamVjdDogcG9seWxpbmUsIGluc3RhbmNlOiB0aGlzLCBoYW5kbGVyczogb3B0aW9ucywgfSk7XG5cbiAgdGhpcy5wb2x5bGluZXMucHVzaChwb2x5bGluZSk7XG5cbiAgR01hcHMuZmlyZSgncG9seWxpbmVfYWRkZWQnLCBwb2x5bGluZSwgdGhpcyk7XG5cbiAgcmV0dXJuIHBvbHlsaW5lO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYSBwb2x5bGluZSBmcm9tIHRoZSBtYXAgYW5kIGZyb20gdGhlIHBvbHlsaW5lcyBjb2xsZWN0aW9uLiBUaGlzIG1ldGhvZCBhbHNvIGZpcmVzIGEgYHBvbHlsaW5lX3JlbW92ZWRgIGV2ZW50LlxuICogQGZ1bmN0aW9uIHJlbW92ZVBvbHlsaW5lXG4gKlxuICogQHBhcmFtIHtnb29nbGUubWFwcy5Qb2x5bGluZX0gcG9seWxpbmUgLSBUaGUgcG9seWxpbmUgdG8gYmUgcmVtb3ZlZC5cbiAqL1xuR01hcHMucHJvdG90eXBlLnJlbW92ZVBvbHlsaW5lID0gZnVuY3Rpb24gcmVtb3ZlUG9seWxpbmUocG9seWxpbmUpIHtcbiAgY29uc3QgcG9seWxpbmVJbmRleCA9IHRoaXMucG9seWxpbmVzLmluZGV4T2YocG9seWxpbmUpO1xuXG4gIGlmIChwb2x5bGluZUluZGV4ID49IDApIHtcbiAgICBwb2x5bGluZS5zZXRNYXAobnVsbCk7XG4gICAgdGhpcy5wb2x5bGluZXMuc3BsaWNlKHBvbHlsaW5lSW5kZXgsIDEpO1xuXG4gICAgR01hcHMuZmlyZSgncG9seWxpbmVfcmVtb3ZlZCcsIHBvbHlsaW5lLCB0aGlzKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZW1vdmUgYWxsIHRoZSBwb2x5bGluZXMgZnJvbSB0aGUgbWFwIGFuZCBjbGVhciB0aGUgcG9seWxpbmVzIGNvbGxlY3Rpb24uIFRoaXMgbWV0aG9kIGRvZXMgbm90IGZpcmUgYSBgcG9seWxpbmVfcmVtb3ZlZGAgZXZlbnQuXG4gKiBAZnVuY3Rpb24gcmVtb3ZlUG9seWxpbmVzXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5yZW1vdmVQb2x5bGluZXMgPSBmdW5jdGlvbiByZW1vdmVQb2x5bGluZXMoKSB7XG4gIHRoaXMucG9seWxpbmVzLmZvckVhY2gocG9seWxpbmUgPT4gcG9seWxpbmUuc2V0TWFwKG51bGwpKTtcblxuICB0aGlzLnBvbHlsaW5lcyA9IFtdO1xufTtcblxuLyoqXG4gKiBEcmF3IGEgY2lyY2xlIGluIHRoZSBNYXAgYW5kIGl0IHRvIHRoZSBwb2x5Z29ucyBjb2xsZWN0aW9uLlxuICogQGZ1bmN0aW9uIGRyYXdDaXJjbGVcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRoZSBgb3B0aW9uc2Agb2JqZWN0IHNob3VsZCBjb250YWluOlxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMubGF0aXR1ZGUgLSBMYXRpdHVkZSBvZiB0aGUgY2VudGVyLiBJZiBgbGF0aXR1ZGVgIGFuZCBgbG9uZ2l0dWRlYCBhcmUgc2V0LCBgY2VudGVyYGlzIGlnbm9yZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5sb25naXR1ZGUgLSBMb25naXR1ZGUgb2YgdGhlIGNlbnRlci4gSWYgYGxhdGl0dWRlYCBhbmQgYGxvbmdpdHVkZWAgYXJlIHNldCwgYGNlbnRlcmBpcyBpZ25vcmVkLlxuICogQHBhcmFtIHtnb29nbGUubWFwcy5MYXRMbmd9IG9wdGlvbnMuY2VudGVyIC0gQSBgZ29vZ2xlLm1hcHMuTGF0TG5nYCBjb29yZGluYXRlIGluZGljYXRlIHRoZSBjZW50ZXIuIElmIHNldCwgYGxhdGl0dWRlYCBhbmQgYGxvbmdpdHVkZWAgYXJlIGlnbm9yZWQuXG4gKlxuICogYG9wdGlvbnNgIGFsc28gYWNjZXB0cyBhbnkgb3B0aW9uIGRlZmluZWQgaW4gdGhlIFtvZmZpY2lhbCBkb2N1bWVudGF0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjQ2lyY2xlT3B0aW9ucykgYW5kIGFueSBldmVudCBkZWZpbmVkIGluIHRoZSBbXCJFdmVudHNcIiBzZWN0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjQ2lyY2xlKS5cbiAqXG4gKiBAcmV0dXJucyB7Z29vZ2xlLm1hcHMuQ2lyY2xlfVxuICovXG5HTWFwcy5wcm90b3R5cGUuZHJhd0NpcmNsZSA9IGZ1bmN0aW9uIGRyYXdDaXJjbGUoYmFzZU9wdGlvbnMpIHtcbiAgY29uc3QgeyBsYXQsIGxhdGl0dWRlID0gbGF0LCBsbmcsIGxvbmdpdHVkZSA9IGxuZywgLi4ub3B0aW9ucyB9ID0gYmFzZU9wdGlvbnM7XG4gIGNvbnN0IHsgY2VudGVyID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsYXRpdHVkZSwgbG9uZ2l0dWRlKSwgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHBvbHlnb25PcHRpb25zID0ge1xuICAgIC4uLm9wdGlvbnMsXG4gICAgbWFwOiB0aGlzLm1hcCxcbiAgICBjZW50ZXIsXG4gIH07XG5cbiAgY29uc3QgcG9seWdvbiA9IG5ldyBnb29nbGUubWFwcy5DaXJjbGUocG9seWdvbk9wdGlvbnMpO1xuXG4gIHNldHVwRXZlbnRzKHsgZXZlbnRzOiBFVkVOVFMsIG9iamVjdDogcG9seWdvbiwgaW5zdGFuY2U6IHRoaXMsIGhhbmRsZXJzOiBvcHRpb25zLCB9KTtcblxuICB0aGlzLnBvbHlnb25zLnB1c2gocG9seWdvbik7XG5cbiAgcmV0dXJuIHBvbHlnb247XG59O1xuXG4vKipcbiAqIERyYXcgYSByZWN0YW5nbGUgaW4gdGhlIE1hcCBhbmQgaXQgdG8gdGhlIHBvbHlnb25zIGNvbGxlY3Rpb24uXG4gKiBAZnVuY3Rpb24gZHJhd1JlY3RhbmdsZVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBvYmplY3Qgc2hvdWxkIGNvbnRhaW46XG4gKiBAcGFyYW0ge2FycmF5fSBvcHRpb25zLmJvdW5kcyAtIEJpLWRpbWVuc2lvbmFsIGFycmF5IG9mIGxhdGl0dWRlcyBhbmQgbG9uZ2l0dWRlcy5cbiAqXG4gKiBgb3B0aW9uc2AgYWxzbyBhY2NlcHRzIGFueSBvcHRpb24gZGVmaW5lZCBpbiB0aGUgW29mZmljaWFsIGRvY3VtZW50YXRpb25dKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNSZWN0YW5nbGVPcHRpb25zKSBhbmQgYW55IGV2ZW50IGRlZmluZWQgaW4gdGhlIFtcIkV2ZW50c1wiIHNlY3Rpb25dKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNSZWN0YW5nbGUpLlxuICpcbiAqIEByZXR1cm5zIHtnb29nbGUubWFwcy5SZWN0YW5nbGV9XG4gKi9cbkdNYXBzLnByb3RvdHlwZS5kcmF3UmVjdGFuZ2xlID0gZnVuY3Rpb24gZHJhd1JlY3RhbmdsZShiYXNlT3B0aW9ucykge1xuICBjb25zdCB7IGJvdW5kcywgLi4ub3B0aW9ucyB9ID0gYmFzZU9wdGlvbnM7XG5cbiAgY29uc3QgbGF0TG5nQm91bmRzID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcyhcbiAgICBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGJvdW5kc1swXVswXSwgYm91bmRzWzBdWzFdKSxcbiAgICBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGJvdW5kc1sxXVswXSwgYm91bmRzWzFdWzFdKVxuICApO1xuXG4gIGNvbnN0IHBvbHlnb25PcHRpb25zID0ge1xuICAgIC4uLm9wdGlvbnMsXG4gICAgYm91bmRzOiBsYXRMbmdCb3VuZHMsXG4gICAgbWFwOiB0aGlzLm1hcCxcbiAgfTtcblxuICBjb25zdCBwb2x5Z29uID0gbmV3IGdvb2dsZS5tYXBzLlJlY3RhbmdsZShwb2x5Z29uT3B0aW9ucyk7XG5cbiAgc2V0dXBFdmVudHMoeyBldmVudHM6IEVWRU5UUywgb2JqZWN0OiBwb2x5Z29uLCBpbnN0YW5jZTogdGhpcywgaGFuZGxlcnM6IG9wdGlvbnMsIH0pO1xuXG4gIHRoaXMucG9seWdvbnMucHVzaChwb2x5Z29uKTtcblxuICByZXR1cm4gcG9seWdvbjtcbn07XG5cbi8qKlxuICogRHJhdyBhIHBvbHlnb24gaW4gdGhlIE1hcCBhbmQgaXQgdG8gdGhlIHBvbHlnb25zIGNvbGxlY3Rpb24uXG4gKiBAZnVuY3Rpb24gZHJhd1BvbHlnb25cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRoZSBgb3B0aW9uc2Agb2JqZWN0IHNob3VsZCBjb250YWluOlxuICogQHBhcmFtIHthcnJheX0gb3B0aW9ucy5wYXRocyAtIEJpLWRpbWVuc2lvbmFsIGFycmF5IG9mIGxhdGl0dWRlcyBhbmQgbG9uZ2l0dWRlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy51c2VHZW9KU09OIC0gSWYgc2V0LCBhbGxvd3MgYHBhdGhzYCB0byB1c2UgR2VvSlNPTiBmb3JtYXQuXG4gKlxuICogYG9wdGlvbnNgIGFsc28gYWNjZXB0cyBhbnkgb3B0aW9uIGRlZmluZWQgaW4gdGhlIFtvZmZpY2lhbCBkb2N1bWVudGF0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjUG9seWdvbk9wdGlvbnMpIGFuZCBhbnkgZXZlbnQgZGVmaW5lZCBpbiB0aGUgW1wiRXZlbnRzXCIgc2VjdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI1BvbHlnb24pLlxuICpcbiAqIEByZXR1cm5zIHtnb29nbGUubWFwcy5Qb2x5Z29ufVxuICovXG5HTWFwcy5wcm90b3R5cGUuZHJhd1BvbHlnb24gPSBmdW5jdGlvbiBkcmF3UG9seWdvbihiYXNlT3B0aW9ucykge1xuICBjb25zdCB7IHVzZUdlb0pTT04gPSBmYWxzZSwgLi4ub3B0aW9ucyB9ID0gYmFzZU9wdGlvbnM7XG5cbiAgY29uc3QgYmFzZVBhdGhzID0gdXNlR2VvSlNPTiA/IG9wdGlvbnMucGF0aHMgOiBbb3B0aW9ucy5wYXRocy5zbGljZSgwKV07XG4gIGxldCBwYXRocyA9IFtdO1xuXG4gIGlmIChiYXNlUGF0aHMubGVuZ3RoKSB7XG4gICAgaWYgKGJhc2VQYXRoc1swXS5sZW5ndGgpIHtcbiAgICAgIHBhdGhzID0gZmxhdHRlbkFycmF5KFxuICAgICAgICBiYXNlUGF0aHMubWFwKHBhdGggPT5cbiAgICAgICAgICBhcnJheVRvTGF0TG5nKHBhdGgsIHVzZUdlb0pTT04pXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcG9seWdvbk9wdGlvbnMgPSB7XG4gICAgLi4ub3B0aW9ucyxcbiAgICBtYXA6IHRoaXMubWFwLFxuICAgIHBhdGhzLFxuICB9O1xuXG4gIGNvbnN0IHBvbHlnb24gPSBuZXcgZ29vZ2xlLm1hcHMuUG9seWdvbihwb2x5Z29uT3B0aW9ucyk7XG5cbiAgc2V0dXBFdmVudHMoeyBldmVudHM6IEVWRU5UUywgb2JqZWN0OiBwb2x5Z29uLCBpbnN0YW5jZTogdGhpcywgaGFuZGxlcnM6IG9wdGlvbnMsIH0pO1xuXG4gIHRoaXMucG9seWdvbnMucHVzaChwb2x5Z29uKTtcblxuICBHTWFwcy5maXJlKCdwb2x5Z29uX2FkZGVkJywgcG9seWdvbiwgdGhpcyk7XG5cbiAgcmV0dXJuIHBvbHlnb247XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhIHBvbHlnb24gZnJvbSB0aGUgbWFwIGFuZCBmcm9tIHRoZSBwb2x5Z29ucyBjb2xsZWN0aW9uLiBUaGlzIG1ldGhvZCBhbHNvIGZpcmVzIGEgYHBvbHlnb25fcmVtb3ZlZGAgZXZlbnQuXG4gKiBAZnVuY3Rpb24gcmVtb3ZlUG9seWdvblxuICpcbiAqIEBwYXJhbSB7Z29vZ2xlLm1hcHMuUG9seWdvbn0gcG9seWdvbiAtIFRoZSBwb2x5Z29uIHRvIGJlIHJlbW92ZWQuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5yZW1vdmVQb2x5Z29uID0gZnVuY3Rpb24gcmVtb3ZlUG9seWdvbihwb2x5Z29uKSB7XG4gIGNvbnN0IHBvbHlnb25JbmRleCA9IHRoaXMucG9seWdvbnMuaW5kZXhPZihwb2x5Z29uKTtcblxuICBpZiAocG9seWdvbkluZGV4ID49IDApIHtcbiAgICBwb2x5Z29uLnNldE1hcChudWxsKTtcbiAgICB0aGlzLnBvbHlnb25zLnNwbGljZShwb2x5Z29uSW5kZXgsIDEpO1xuXG4gICAgR01hcHMuZmlyZSgncG9seWdvbl9yZW1vdmVkJywgcG9seWdvbiwgdGhpcyk7XG4gIH1cbn07XG5cbi8qKlxuICogUmVtb3ZlIGFsbCB0aGUgcG9seWdvbnMgZnJvbSB0aGUgbWFwIGFuZCBjbGVhciB0aGUgcG9seWdvbnMgY29sbGVjdGlvbi4gVGhpcyBtZXRob2QgZG9lcyBub3QgZmlyZSBhIGBwb2x5Z29uX3JlbW92ZWRgIGV2ZW50LlxuICogQGZ1bmN0aW9uIHJlbW92ZVBvbHlnb25zXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5yZW1vdmVQb2x5Z29ucyA9IGZ1bmN0aW9uIHJlbW92ZVBvbHlnb25zKCkge1xuICB0aGlzLnBvbHlnb25zLmZvckVhY2gocG9seWdvbiA9PiBwb2x5Z29uLnNldE1hcChudWxsKSk7XG5cbiAgdGhpcy5wb2x5Z29ucyA9IFtdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR01hcHM7XG4iLCJpbXBvcnQgR01hcHMgZnJvbSAnLi9jb3JlJztcbmltcG9ydCAnLi9ldmVudHMnO1xuaW1wb3J0ICcuL2NvbnRyb2xzJztcbmltcG9ydCAnLi9nZW9mZW5jZXMnO1xuaW1wb3J0ICcuL21hcmtlcnMnO1xuaW1wb3J0ICcuL292ZXJsYXlzJztcbmltcG9ydCAnLi9nZW9tZXRyeSc7XG5pbXBvcnQgJy4vbGF5ZXJzJztcbmltcG9ydCAnLi9yb3V0ZXMnO1xuaW1wb3J0ICcuL3N0YXRpYyc7XG5pbXBvcnQgJy4vbWFwX3R5cGVzJztcbmltcG9ydCAnLi9zdHlsZXMnO1xuaW1wb3J0ICcuL3N0cmVldHZpZXcnO1xuaW1wb3J0ICcuL3BvbHlmaWxscyc7XG5pbXBvcnQgJy4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBHTWFwcztcbiIsImltcG9ydCBHTWFwcywgeyBzZXR1cEV2ZW50TGlzdGVuZXIgfSBmcm9tICcuL2NvcmUnO1xuaW1wb3J0ICcuL2V2ZW50cyc7XG5cbi8qKlxuICogRXh0ZW5kcyBHTWFwcyB0byB1c2UgcG9seWxpbmVzIGFuZCBwb2x5Z29ucy5cbiAqIEBtb2R1bGUgTGF5ZXJzXG4gKi9cblxuR01hcHMucHJvdG90eXBlLmdldEZyb21GdXNpb25UYWJsZXMgPSBmdW5jdGlvbiBnZXRGcm9tRnVzaW9uVGFibGVzKGJhc2VPcHRpb25zKSB7XG4gIGNvbnN0IHsgZXZlbnRzID0ge30sIC4uLm9wdGlvbnMgfSA9IGJhc2VPcHRpb25zO1xuXG4gIGNvbnN0IGxheWVyID0gbmV3IGdvb2dsZS5tYXBzLkZ1c2lvblRhYmxlc0xheWVyKG9wdGlvbnMpO1xuXG4gIE9iamVjdC5rZXlzKGV2ZW50cykuZm9yRWFjaChldmVudE5hbWUgPT5cbiAgICBzZXR1cEV2ZW50TGlzdGVuZXIoe1xuICAgICAgb2JqZWN0OiBsYXllcixcbiAgICAgIGV2ZW50TmFtZSxcbiAgICAgIGluc3RhbmNlOiB0aGlzLFxuICAgICAgaGFuZGxlcjogZXZlbnRzW2V2ZW50TmFtZV0sXG4gICAgfSlcbiAgKTtcblxuICB0aGlzLmxheWVycy5wdXNoKGxheWVyKTtcblxuICByZXR1cm4gbGF5ZXI7XG59O1xuXG4vKipcbiAqIERyYXcgYSBGdXNpb25UYWJsZXMgbGF5ZXIgaW4gdGhlIE1hcC5cbiAqIEBmdW5jdGlvbiBsb2FkRnJvbUZ1c2lvblRhYmxlc1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBhY2NlcHRzIGFueSBvcHRpb24gZGVmaW5lZCBpbiB0aGUgW29mZmljaWFsIGRvY3VtZW50YXRpb25dKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNGdXNpb25UYWJsZXNMYXllck9wdGlvbnMpLlxuICpcbiAqIGBvcHRpb25zYCBhbHNvIGFjY2VwdHMgYW4gYGV2ZW50c2Agb2JqZWN0LCB3aGljaCBhY2NlcHRzIG9ubHkgYGNsaWNrYC5cbiAqXG4gKiBAcmV0dXJucyB7Z29vZ2xlLm1hcHMuRnVzaW9uVGFibGVzTGF5ZXJ9XG4gKi9cbkdNYXBzLnByb3RvdHlwZS5sb2FkRnJvbUZ1c2lvblRhYmxlcyA9IGZ1bmN0aW9uIGxvYWRGcm9tRnVzaW9uVGFibGVzKG9wdGlvbnMpIHtcbiAgY29uc3QgbGF5ZXIgPSB0aGlzLmdldEZyb21GdXNpb25UYWJsZXMob3B0aW9ucyk7XG4gIGxheWVyLnNldE1hcCh0aGlzLm1hcCk7XG5cbiAgcmV0dXJuIGxheWVyO1xufTtcblxuR01hcHMucHJvdG90eXBlLmdldEZyb21LTUwgPSBmdW5jdGlvbiBnZXRGcm9tS01MKGJhc2VPcHRpb25zKSB7XG4gIGNvbnN0IHsgdXJsLCBldmVudHMsIC4uLm9wdGlvbnMgfSA9IGJhc2VPcHRpb25zO1xuXG4gIGNvbnN0IGxheWVyID0gbmV3IGdvb2dsZS5tYXBzLkttbExheWVyKHVybCwgb3B0aW9ucyk7XG5cbiAgT2JqZWN0LmtleXMoZXZlbnRzKS5mb3JFYWNoKGV2ZW50TmFtZSA9PlxuICAgIHNldHVwRXZlbnRMaXN0ZW5lcih7XG4gICAgICBvYmplY3Q6IGxheWVyLFxuICAgICAgZXZlbnROYW1lLFxuICAgICAgaW5zdGFuY2U6IHRoaXMsXG4gICAgICBoYW5kbGVyOiBldmVudHNbZXZlbnROYW1lXSxcbiAgICB9KVxuICApO1xuXG4gIHRoaXMubGF5ZXJzLnB1c2gobGF5ZXIpO1xuXG4gIHJldHVybiBsYXllcjtcbn07XG5cbi8qKlxuICogRHJhdyBhIEtNTCBsYXllciBpbiB0aGUgTWFwLlxuICogQGZ1bmN0aW9uIGxvYWRGcm9tS01MXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgYG9wdGlvbnNgIGFjY2VwdHMgYW55IG9wdGlvbiBkZWZpbmVkIGluIHRoZSBbb2ZmaWNpYWwgZG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI0ttbExheWVyT3B0aW9ucykuXG4gKlxuICogYG9wdGlvbnNgIGFsc28gYWNjZXB0cyBhbiBgZXZlbnRzYCBvYmplY3QsIHdoaWNoIGFjY2VwdHMgYWxsIGV2ZW50cyBkZWZpbmVkIGluIHRoZSBbXCJFdmVudHNcIiBzZWN0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjS21sTGF5ZXIpLlxuICpcbiAqIEByZXR1cm5zIHtnb29nbGUubWFwcy5LbWxMYXllcn1cbiAqL1xuR01hcHMucHJvdG90eXBlLmxvYWRGcm9tS01MID0gZnVuY3Rpb24gbG9hZEZyb21LTUwob3B0aW9ucykge1xuICBjb25zdCBsYXllciA9IHRoaXMuZ2V0RnJvbUtNTChvcHRpb25zKTtcbiAgbGF5ZXIuc2V0TWFwKHRoaXMubWFwKTtcblxuICByZXR1cm4gbGF5ZXI7XG59O1xuXG4vKipcbiAqIERyYXcgYSBsYXllciBpbiB0aGUgTWFwLiBUaGlzIG1ldGhvZCBhbHNvIGZpcmVzIGEgYGxheWVyX2FkZGVkYCBldmVudC5cbiAqIEBmdW5jdGlvbiBhZGRMYXllclxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBsYXllck5hbWUgLSBUaGUgbmFtZSBvZiBhIEdvb2dsZSBNYXBzIGxheWVyLCB3aGljaCBjYW4gYmU6IGB0cmFmZmljYCwgYHRyYW5zaXRgIG9yIGBiaWN5Y2xpbmdgLlxuICpcbiAqIEByZXR1cm5zIHtnb29nbGUubWFwcy5UcmFmZmljTGF5ZXJ8Z29vZ2xlLm1hcHMuVHJhbnNpdExheWVyfGdvb2dsZS5tYXBzLkJpY3ljbGluZ0xheWVyfVxuICovXG5HTWFwcy5wcm90b3R5cGUuYWRkTGF5ZXIgPSBmdW5jdGlvbiBhZGRMYXllcihsYXllck5hbWUsIGJhc2VPcHRpb25zID0ge30pIHtcbiAgY29uc3QgeyBmaWx0ZXIsIGNsaWNrLCBzZWFyY2gsIG5lYXJieVNlYXJjaCwgcmFkYXJTZWFyY2gsIHRleHRTZWFyY2gsIC4uLm9wdGlvbnMgfSA9IGJhc2VPcHRpb25zO1xuICBjb25zdCB7IGJvdW5kcywga2V5d29yZCwgbG9jYXRpb24sIG5hbWUsIHJhZGl1cywgcmFua0J5LCB0eXBlcywgcXVlcnksIH0gPSBvcHRpb25zO1xuICBsZXQgbGF5ZXI7XG5cbiAgc3dpdGNoIChsYXllck5hbWUpIHtcbiAgICBjYXNlICd0cmFmZmljJzpcbiAgICAgIGxheWVyID0gbmV3IGdvb2dsZS5tYXBzLlRyYWZmaWNMYXllcigpO1xuICAgICAgdGhpcy5zaW5nbGVMYXllcnMudHJhZmZpYyA9IGxheWVyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAndHJhbnNpdCc6XG4gICAgICBsYXllciA9IG5ldyBnb29nbGUubWFwcy5UcmFuc2l0TGF5ZXIoKTtcbiAgICAgIHRoaXMuc2luZ2xlTGF5ZXJzLnRyYW5zaXQgPSBsYXllcjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2JpY3ljbGluZyc6XG4gICAgICBsYXllciA9IG5ldyBnb29nbGUubWFwcy5CaWN5Y2xpbmdMYXllcigpO1xuICAgICAgdGhpcy5zaW5nbGVMYXllcnMuYmljeWNsaW5nID0gbGF5ZXI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwbGFjZXMnOlxuICAgICAgbGF5ZXIgPSBuZXcgZ29vZ2xlLm1hcHMucGxhY2VzLlBsYWNlc1NlcnZpY2UodGhpcy5tYXApO1xuICAgICAgdGhpcy5zaW5nbGVMYXllcnMucGxhY2VzID0gbGF5ZXI7XG5cbiAgICAgIGlmIChzZWFyY2ggfHwgbmVhcmJ5U2VhcmNoIHx8IHJhZGFyU2VhcmNoKSB7XG4gICAgICAgIGNvbnN0IHBsYWNlU2VhcmNoUmVxdWVzdCA9IHtcbiAgICAgICAgICBib3VuZHMsXG4gICAgICAgICAga2V5d29yZCxcbiAgICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIHJhZGl1cyxcbiAgICAgICAgICByYW5rQnksXG4gICAgICAgICAgdHlwZXMsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHJhZGFyU2VhcmNoKSB7XG4gICAgICAgICAgbGF5ZXIucmFkYXJTZWFyY2gocGxhY2VTZWFyY2hSZXF1ZXN0LCByYWRhclNlYXJjaCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VhcmNoKSB7XG4gICAgICAgICAgbGF5ZXIuc2VhcmNoKHBsYWNlU2VhcmNoUmVxdWVzdCwgc2VhcmNoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZWFyYnlTZWFyY2gpIHtcbiAgICAgICAgICBsYXllci5uZWFyYnlTZWFyY2gocGxhY2VTZWFyY2hSZXF1ZXN0LCBuZWFyYnlTZWFyY2gpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0ZXh0U2VhcmNoKSB7XG4gICAgICAgIGNvbnN0IHRleHRTZWFyY2hSZXF1ZXN0ID0ge1xuICAgICAgICAgIGJvdW5kcyxcbiAgICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICByYWRpdXMsXG4gICAgICAgIH07XG5cbiAgICAgICAgbGF5ZXIudGV4dFNlYXJjaCh0ZXh0U2VhcmNoUmVxdWVzdCwgdGV4dFNlYXJjaCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cblxuICBpZiAobGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIGxheWVyLnNldE9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGxheWVyLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBsYXllci5zZXRNYXAgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGxheWVyLnNldE1hcCh0aGlzLm1hcCk7XG4gICAgfVxuXG4gICAgR01hcHMuZmlyZSgnbGF5ZXJfYWRkZWQnLCBsYXllciwgdGhpcyk7XG5cbiAgICByZXR1cm4gbGF5ZXI7XG4gIH1cbn07XG5cbi8qKlxuICogUmVtb3ZlIGEgbGF5ZXIgZnJvbSB0aGUgbWFwLiBJZiB0aGUgbGF5ZXIgaXMgYSBGdXNpb25UYWJsZXMgbGF5ZXIgb3IgYSBLTUwgbGF5ZXIsIGByZW1vdmVMYXllcmAgYWxzbyByZW1vdmVzIHRoZSBsYXllciBmcm9tIHRoZSBsYXllcnMgY29sbGVjdGlvbiBhbmQgZmlyZXMgYSBgbGF5ZXJfcmVtb3ZlZGAgZXZlbnQuXG4gKiBAZnVuY3Rpb24gcmVtb3ZlTGF5ZXJcbiAqXG4gKiBAcGFyYW0ge2dvb2dsZS5tYXBzLlBvbHlnb259IHBvbHlnb24gLSBUaGUgcG9seWdvbiB0byBiZSByZW1vdmVkLlxuICovXG5HTWFwcy5wcm90b3R5cGUucmVtb3ZlTGF5ZXIgPSBmdW5jdGlvbiByZW1vdmVMYXllcihsYXllcikge1xuICBpZiAodHlwZW9mIGxheWVyID09PSAnc3RyaW5nJyAmJiB0aGlzLnNpbmdsZUxheWVyc1tsYXllcl0gIT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuc2luZ2xlTGF5ZXJzW2xheWVyXS5zZXRNYXAobnVsbCk7XG5cbiAgICBkZWxldGUgdGhpcy5zaW5nbGVMYXllcnNbbGF5ZXJdO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGxheWVySW5kZXggPSB0aGlzLmxheWVycy5pbmRleE9mKGxheWVyKTtcblxuICAgIGlmIChsYXllckluZGV4ID49IDApIHtcbiAgICAgIGxheWVyLnNldE1hcChudWxsKTtcbiAgICAgIHRoaXMubGF5ZXJzLnNwbGljZShsYXllckluZGV4LCAxKTtcblxuICAgICAgR01hcHMuZmlyZSgnbGF5ZXJfcmVtb3ZlZCcsIGxheWVyLCB0aGlzKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXBzO1xuIiwiaW1wb3J0IEdNYXBzIGZyb20gJy4vY29yZSc7XG5pbXBvcnQgJy4vZXZlbnRzJztcblxuLyoqXG4gKiBFeHRlbmRzIEdNYXBzIHRvIHVzZSBjdXN0b20gTWFwIFR5cGVzLlxuICogQG1vZHVsZSBNYXBUeXBlc1xuICovXG5cbi8qKlxuICogRHJhdyBhIGN1c3RvbSBbdGlsZS1iYXNlZCBtYXAgdHlwZV0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvbWFwdHlwZXMjSW1hZ2VNYXBUeXBlcykgaW4gdGhlIE1hcCwgd2hpY2ggY2FuIGJlIHVzZWQgd2l0aCB0aGUgYmFzZSBtYXAgdHlwZXMgKGBoeWJyaWRgLCBgcm9hZG1hcGAsIGBzYXRlbGxpdGVgIGFuZCBgdGVycmFpbmApLlxuICogQGZ1bmN0aW9uIGFkZE1hcFR5cGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWFwVHlwZUlkIC0gQSBzaW1wbGUgaWRlbnRpZmllciBmb3IgdGhlIGN1c3RvbSBtYXAgdHlwZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBvYmplY3Qgc2hvdWxkIGNvbnRhaW46XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLmdldFRpbGVVcmwgLSBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBVUkwgZm9yIHRpbGUtYmFzZWQgZW5kcG9pbnRzLiBJdCByZWNlaXZlcyB0d28gYXJndW1lbnRzOlxuICogICAqIGBwb2ludHNgIChnb29nbGUubWFwcy5Qb2ludCk6IGEgcG9pbnQgd2l0aCBgeGAgYW5kIGB5YCAoaXMgbm90IGEgY29vcmRpbmF0ZSkuXG4gKiAgICogYHpvb21gIChudW1iZXIpOiBhIHpvb20gbGV2ZWwuXG4gKiBAcGFyYW0ge2dvb2dsZS5tYXBzLlNpemV9IG9wdGlvbnMudGlsZVNpemUgLSBUaGUgc2l6ZSBvZiB0aGUgdGlsZS5cbiAqXG4gKiBAcmV0dXJucyB7Z29vZ2xlLm1hcHMuSW1hZ2VNYXBUeXBlfVxuICovXG5HTWFwcy5wcm90b3R5cGUuYWRkTWFwVHlwZSA9IGZ1bmN0aW9uIGFkZE1hcFR5cGUobWFwVHlwZUlkLCBvcHRpb25zID0ge30pIHtcbiAgY29uc3QgeyBnZXRUaWxlVXJsLCB0aWxlU2l6ZSA9IG5ldyBnb29nbGUubWFwcy5TaXplKDI1NiwgMjU2KSwgfSA9IG9wdGlvbnM7XG5cbiAgaWYgKHR5cGVvZiBnZXRUaWxlVXJsICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiJ2dldFRpbGVVcmwnIGZ1bmN0aW9uIHJlcXVpcmVkLlwiKTtcbiAgfVxuXG4gIGNvbnN0IG1hcFR5cGUgPSBuZXcgZ29vZ2xlLm1hcHMuSW1hZ2VNYXBUeXBlKHsgZ2V0VGlsZVVybCwgdGlsZVNpemUsIH0pO1xuXG4gIHRoaXMubWFwLm1hcFR5cGVzLnNldChtYXBUeXBlSWQsIG1hcFR5cGUpO1xuXG4gIHJldHVybiBtYXBUeXBlO1xufTtcblxuLyoqXG4gKiBEcmF3IGEgY3VzdG9tIFtvdmVybGF5IG1hcCB0eXBlXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9tYXB0eXBlcyNPdmVybGF5TWFwVHlwZXMpIGluIHRoZSBNYXAuIFRoaXMgbWV0aG9kIGFsc28gZmlyZXMgYW4gYG92ZXJsYXlfbWFwX3R5cGVfYWRkZWRgIGV2ZW50LlxuICogQGZ1bmN0aW9uIGFkZE92ZXJsYXlNYXBUeXBlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1hcFR5cGVJZCAtIEEgc2ltcGxlIGlkZW50aWZpZXIgZm9yIHRoZSBjdXN0b20gbWFwIHR5cGUuXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRoZSBgb3B0aW9uc2Agb2JqZWN0IHNob3VsZCBjb250YWluOlxuICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5nZXRUaWxlIC0gQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBET00gTm9kZS4gSXQgcmVjZWl2ZXMgdGhyZWUgYXJndW1lbnRzOlxuICogICAqIGBwb2ludHNgIChnb29nbGUubWFwcy5Qb2ludCk6IGEgcG9pbnQgd2l0aCBgeGAgYW5kIGB5YCAoaXMgbm90IGEgY29vcmRpbmF0ZSkuXG4gKiAgICogYHpvb21gIChudW1iZXIpOiBhIHpvb20gbGV2ZWwuXG4gKiAgICogYG93bmVyRG9jdW1lbnRgIChEb2N1bWVudCk6IFRoZSBET00gZG9jdW1lbnQgdGhhdCB3aWxsIGNyZWF0ZSB0aGUgbm9kZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLmluZGV4IC0gVGhlIGluZGV4IGZvciB0aGUgb3ZlcmxheSBtYXAgdHlwZS4gVXNlZCB0byBzZXQgZGlmZmVyZW50ZSB6IGxldmVscyBvbiBzdGFja2VkIG92ZXJsYXkgbWFwcy5cbiAqIEBwYXJhbSB7Z29vZ2xlLm1hcHMuU2l6ZX0gb3B0aW9ucy50aWxlU2l6ZSAtIFRoZSBzaXplIG9mIHRoZSB0aWxlLlxuICpcbiAqIGBvcHRpb25zYCBhbHNvIGFjY2VwdHMgYW55IG9wdGlvbiBkZWZpbmVkIGluIHRoZSBbb2ZmaWNpYWwgZG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI01hcFR5cGUpLlxuICovXG5HTWFwcy5wcm90b3R5cGUuYWRkT3ZlcmxheU1hcFR5cGUgPSBmdW5jdGlvbiBhZGRPdmVybGF5TWFwVHlwZShvcHRpb25zID0ge30pIHtcbiAgY29uc3QgeyBnZXRUaWxlLCBpbmRleCA9IHRoaXMubWFwLm92ZXJsYXlNYXBUeXBlcy5sZW5ndGgsIC4uLm92ZXJsYXlNYXBUeXBlT3B0aW9ucyB9ID0gb3B0aW9ucztcblxuICBpZiAodHlwZW9mIGdldFRpbGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCInZ2V0VGlsZScgZnVuY3Rpb24gcmVxdWlyZWQuXCIpO1xuICB9XG5cbiAgdGhpcy5tYXAub3ZlcmxheU1hcFR5cGVzLmluc2VydEF0KGluZGV4LCB7IC4uLm92ZXJsYXlNYXBUeXBlT3B0aW9ucywgZ2V0VGlsZSwgfSk7XG4gIEdNYXBzLmZpcmUoJ292ZXJsYXlfbWFwX3R5cGVfYWRkZWQnLCB0aGlzLm1hcC5vdmVybGF5TWFwVHlwZXNbaW5kZXhdLCB0aGlzKTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGEgb3ZlcmxheSBtYXAgdHlwZSBmcm9tIHRoZSBtYXAuIFRoaXMgbWV0aG9kIGFsc28gZmlyZXMgYW4gYG92ZXJsYXlfbWFwX3R5cGVfcmVtb3ZlZGAgZXZlbnQuXG4gKiBAZnVuY3Rpb24gcmVtb3ZlT3ZlcmxheU1hcFR5cGVcbiAqXG4gKiBAcGFyYW0ge2dvb2dsZS5tYXBzLlBvbHlsaW5lfSBwb2x5bGluZSAtIFRoZSBwb2x5bGluZSB0byBiZSByZW1vdmVkLlxuICovXG5HTWFwcy5wcm90b3R5cGUucmVtb3ZlT3ZlcmxheU1hcFR5cGUgPSBmdW5jdGlvbiByZW1vdmVPdmVybGF5TWFwVHlwZShpbmRleCkge1xuICBjb25zdCBvdmVybGF5TWFwVHlwZSA9IHRoaXMubWFwLm92ZXJsYXlNYXBUeXBlc1tpbmRleF07XG5cbiAgdGhpcy5tYXAub3ZlcmxheU1hcFR5cGVzLnJlbW92ZUF0KGluZGV4KTtcbiAgR01hcHMuZmlyZSgnb3ZlcmxheV9tYXBfdHlwZV9yZW1vdmVkJywgb3ZlcmxheU1hcFR5cGUsIHRoaXMpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR01hcHM7XG4iLCJpbXBvcnQgR01hcHMsIHsgc2V0dXBFdmVudHMgfSBmcm9tICcuL2NvcmUnO1xuaW1wb3J0ICcuL2V2ZW50cyc7XG5pbXBvcnQgJy4vZ2VvZmVuY2VzJztcblxuLyoqXG4gKiBFeHRlbmRzIEdNYXBzIHRvIHVzZSBtYXJrZXJzLlxuICogQG1vZHVsZSBNYXJrZXJzXG4gKi9cblxuY29uc3QgSU5GT19XSU5ET1dfRVZFTlRTID0gWydjbG9zZWNsaWNrJywgJ2NvbnRlbnRfY2hhbmdlZCcsICdkb21yZWFkeScsICdwb3NpdGlvbl9jaGFuZ2VkJywgJ3ppbmRleF9jaGFuZ2VkJ107XG5jb25zdCBNQVJLRVJfRVZFTlRTID0gWydhbmltYXRpb25fY2hhbmdlZCcsICdjbGlja2FibGVfY2hhbmdlZCcsICdjdXJzb3JfY2hhbmdlZCcsICdkcmFnZ2FibGVfY2hhbmdlZCcsICdmbGF0X2NoYW5nZWQnLCAnaWNvbl9jaGFuZ2VkJywgJ3Bvc2l0aW9uX2NoYW5nZWQnLCAnc2hhZG93X2NoYW5nZWQnLCAnc2hhcGVfY2hhbmdlZCcsICd0aXRsZV9jaGFuZ2VkJywgJ3Zpc2libGVfY2hhbmdlZCcsICd6aW5kZXhfY2hhbmdlZCddO1xuY29uc3QgTUFSS0VSX01PVVNFX0VWRU5UUyA9IFsnZGJsY2xpY2snLCAnZHJhZycsICdkcmFnZW5kJywgJ2RyYWdzdGFydCcsICdtb3VzZWRvd24nLCAnbW91c2VvdXQnLCAnbW91c2VvdmVyJywgJ21vdXNldXAnXTtcblxuR01hcHMucHJvdG90eXBlLmNyZWF0ZU1hcmtlciA9IGZ1bmN0aW9uIGNyZWF0ZU1hcmtlcihiYXNlT3B0aW9ucykge1xuICBjb25zdCBzZWxmID0gdGhpcztcbiAgY29uc3QgeyBsYXQsIGxhdGl0dWRlID0gbGF0LCBsbmcsIGxvbmdpdHVkZSA9IGxuZywgcG9zaXRpb24sIGRldGFpbHMsIGZlbmNlcywgb3V0c2lkZSwgaW5mb1dpbmRvdywgLi4ub3B0aW9ucyB9ID0gYmFzZU9wdGlvbnM7XG5cbiAgaWYgKGxhdGl0dWRlID09PSB1bmRlZmluZWQgJiYgbG9uZ2l0dWRlID09PSB1bmRlZmluZWQgJiYgcG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gbGF0aXR1ZGUgb3IgbG9uZ2l0dWRlIGRlZmluZWQuJyk7XG4gIH1cblxuICBjb25zdCBtYXJrZXJPcHRpb25zID0ge1xuICAgIC4uLm9wdGlvbnMsXG4gICAgcG9zaXRpb246IHBvc2l0aW9uIHx8IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobGF0aXR1ZGUsIGxvbmdpdHVkZSksXG4gICAgbWFwOiBudWxsLFxuICB9O1xuXG4gIGNvbnN0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIobWFya2VyT3B0aW9ucyk7XG5cbiAgbWFya2VyLmZlbmNlcyA9IGZlbmNlcztcblxuICBpZiAoaW5mb1dpbmRvdykge1xuICAgIG1hcmtlci5pbmZvV2luZG93ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coaW5mb1dpbmRvdyk7XG5cbiAgICBzZXR1cEV2ZW50cyh7IGV2ZW50czogSU5GT19XSU5ET1dfRVZFTlRTLCBvYmplY3Q6IG1hcmtlci5pbmZvV2luZG93LCBpbnN0YW5jZTogdGhpcywgaGFuZGxlcnM6IGluZm9XaW5kb3csIH0pO1xuICB9XG5cbiAgc2V0dXBFdmVudHMoeyBldmVudHM6IE1BUktFUl9FVkVOVFMsIG9iamVjdDogbWFya2VyLCBpbnN0YW5jZTogdGhpcywgaGFuZGxlcnM6IG9wdGlvbnMsIH0pO1xuXG4gIE1BUktFUl9NT1VTRV9FVkVOVFMuZm9yRWFjaCgoZXZlbnROYW1lKSA9PiB7XG4gICAgaWYgKG9wdGlvbnNbZXZlbnROYW1lXSkge1xuICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyLCBldmVudE5hbWUsIChldmVudCA9IHRoaXMpID0+IHtcbiAgICAgICAgaWYgKCFldmVudC5waXhlbCkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgIGV2ZW50LnBpeGVsID0gdGhpcy5tYXAuZ2V0UHJvamVjdGlvbigpLmZyb21MYXRMbmdUb1BvaW50KGV2ZW50LmxhdExuZyk7XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25zW2V2ZW50TmFtZV0uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlciwgJ2NsaWNrJywgZnVuY3Rpb24gb25NYXJrZXJDbGljayhldmVudCkge1xuICAgIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XG5cbiAgICBpZiAob3B0aW9ucy5jbGljaykge1xuICAgICAgb3B0aW9ucy5jbGljay5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAobWFya2VyLmluZm9XaW5kb3cpIHtcbiAgICAgIHNlbGYuaGlkZUluZm9XaW5kb3dzKCk7XG4gICAgICBtYXJrZXIuaW5mb1dpbmRvdy5vcGVuKHNlbGYubWFwLCBtYXJrZXIpO1xuICAgIH1cbiAgfSk7XG5cbiAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyLCAncmlnaHRjbGljaycsIGZ1bmN0aW9uIG9uTWFya2VyUmlnaHRDbGljayhldmVudCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIGV2ZW50Lm1hcmtlciA9IHRoaXM7XG5cbiAgICBpZiAob3B0aW9ucy5yaWdodGNsaWNrKSB7XG4gICAgICBvcHRpb25zLnJpZ2h0Y2xpY2suY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfVxuXG4gICAgaWYgKEdNYXBzLmNvbnRleHRNZW51c1tzZWxmLmlkXS5tYXJrZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2VsZi5idWlsZENvbnRleHRNZW51KCdtYXJrZXInLCBldmVudCk7XG4gICAgfVxuICB9KTtcblxuICBpZiAobWFya2VyLmZlbmNlcykge1xuICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlciwgJ2RyYWdlbmQnLCBmdW5jdGlvbiBvbk1hcmtlckRyYWdFbmQoKSB7XG4gICAgICBzZWxmLmNoZWNrTWFya2VyR2VvZmVuY2UodGhpcywgb3V0c2lkZSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbWFya2VyO1xufTtcblxuLyoqXG4gKiBEcmF3IGEgbWFya2VyIGluIHRoZSBNYXAgYW5kIGFkZCBpdCB0byB0aGUgbWFya2VycyBjb2xsZWN0aW9uLiBUaGlzIG1ldGhvZCBhbHNvIGZpcmVzIGEgYG1hcmtlcl9hZGRlZGAgZXZlbnQuXG4gKiBAZnVuY3Rpb24gYWRkTWFya2VyXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgYG9wdGlvbnNgIG9iamVjdCBzaG91bGQgY29udGFpbjpcbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLmxhdGl0dWRlIC0gTGF0aXR1ZGUgb2YgdGhlIHBvc2l0aW9uLiBJZiBgbGF0aXR1ZGVgIGFuZCBgbG9uZ2l0dWRlYCBhcmUgc2V0LCBgcG9zaXRpb25gIGlzIGlnbm9yZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5sb25naXR1ZGUgLSBMb25naXR1ZGUgb2YgdGhlIHBvc2l0aW9uLiBJZiBgbGF0aXR1ZGVgIGFuZCBgbG9uZ2l0dWRlYCBhcmUgc2V0LCBgcG9zaXRpb25gIGlzIGlnbm9yZWQuXG4gKiBAcGFyYW0ge2dvb2dsZS5tYXBzLkxhdExuZ30gb3B0aW9ucy5wb3NpdGlvbiAtIEEgYGdvb2dsZS5tYXBzLkxhdExuZ2AgY29vcmRpbmF0ZSBpbmRpY2F0ZSB0aGUgcG9zaXRpb24uIElmIHNldCwgYGxhdGl0dWRlYCBhbmQgYGxvbmdpdHVkZWAgYXJlIGlnbm9yZWQuXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucy5kZXRhaWxzIC0gQ3VzdG9tIG9iamVjdCB3aXRoIGV4dHJhIGRhdGEuXG4gKiBAcGFyYW0ge2FycmF5fSBvcHRpb25zLmZlbmNlcyAtIENvbGxlY3Rpb24gb2YgYGdvb2dsZS5tYXBzLlBvbHlnb25gIG9iamVjdHMgdGhhdCBkZWZpbmVzIGEgbWFya2VyJ3MgYm91bmRhcmllcyBvciBnZW9mZW5jZXMuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLm91dHNpZGUgLSBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBtYXJrZXIgaXMgb3VzdGlkZSBhbnkgb2YgaXRzIGZlbmNlcy5cbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zLmluZm9XaW5kb3cgLSBPYmplY3Qgd2l0aCBhbGwgb3B0aW9ucyBkZWZpbmVkIGluIFtnb29nbGUubWFwcy5JbmZvV2luZG93T3B0aW9uc10oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI0luZm9XaW5kb3dPcHRpb25zKS5cbiAqXG4gKiBgb3B0aW9uc2AgYWxzbyBhY2NlcHRzIGFueSBvcHRpb24gZGVmaW5lZCBpbiB0aGUgW29mZmljaWFsIGRvY3VtZW50YXRpb25dKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNNYXJrZXJPcHRpb25zKSBhbmQgYW55IGV2ZW50IGRlZmluZWQgaW4gdGhlIFtcIkV2ZW50c1wiIHNlY3Rpb25dKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNNYXJrZXIpLlxuICpcbiAqIEByZXR1cm5zIHtnb29nbGUubWFwcy5NYXJrZXJ9XG4gKi9cbkdNYXBzLnByb3RvdHlwZS5hZGRNYXJrZXIgPSBmdW5jdGlvbiBhZGRNYXJrZXIob3B0aW9ucykge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG4gIGNvbnN0IHsgZ21fYWNjZXNzb3JzXywgbGF0LCBsYXRpdHVkZSA9IGxhdCwgbG5nLCBsb25naXR1ZGUgPSBsbmcsIHBvc2l0aW9uLCB9ID0gb3B0aW9ucztcblxuICBsZXQgbWFya2VyO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcbiAgaWYgKGdtX2FjY2Vzc29yc18pIHtcbiAgICAvLyBOYXRpdmUgZ29vZ2xlLm1hcHMuTWFya2VyIG9iamVjdFxuICAgIG1hcmtlciA9IG9wdGlvbnM7XG4gIH0gZWxzZSBpZiAoKGxhdGl0dWRlICYmIGxvbmdpdHVkZSkgfHwgcG9zaXRpb24pIHtcbiAgICBtYXJrZXIgPSB0aGlzLmNyZWF0ZU1hcmtlcihvcHRpb25zKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGxhdGl0dWRlIG9yIGxvbmdpdHVkZSBkZWZpbmVkLicpO1xuICB9XG5cbiAgbWFya2VyLnNldE1hcCh0aGlzLm1hcCk7XG5cbiAgaWYgKHRoaXMubWFya2VyQ2x1c3RlcmVyKSB7XG4gICAgdGhpcy5tYXJrZXJDbHVzdGVyZXIuYWRkTWFya2VyKG1hcmtlcik7XG4gIH1cblxuICB0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpO1xuXG4gIEdNYXBzLmZpcmUoJ21hcmtlcl9hZGRlZCcsIG1hcmtlciwgdGhpcyk7XG5cbiAgcmV0dXJuIG1hcmtlcjtcbn07XG5cbi8qKlxuICogRHJhdyBhIGNvbGxlY3Rpb24gb2YgbWFya2VycyBpbnRvIHRoZSBNYXAuIFRoaXMgbWV0aG9kIGZpcmVzIGEgYG1hcmtlcl9hZGRlZGAgZXZlbnQgZm9yIGVhY2ggbWFya2VyIGFkZGVkLlxuICogQGZ1bmN0aW9uIGFkZE1hcmtlcnNcbiAqXG4gKiBAcGFyYW0ge2FycmF5fSBtYXJrZXJzIC0gQW4gYXJyYXkgb2YgYG9wdGlvbnNgIG9iamVjdHMsIHdoaWNoIGFjY2VwdHMgdGhlIHNhbWUgb3B0aW9ucyBhcyBpbiB7QGxpbmsgR01hcHMjYWRkTWFya2VyfS5cbiAqXG4gKiBAcmV0dXJucyB7YXJyYXl9XG4gKi9cbkdNYXBzLnByb3RvdHlwZS5hZGRNYXJrZXJzID0gZnVuY3Rpb24gYWRkTWFya2VycyhtYXJrZXJzKSB7XG4gIG1hcmtlcnMuZm9yRWFjaChtYXJrZXIgPT4gdGhpcy5hZGRNYXJrZXIobWFya2VyKSk7XG5cbiAgcmV0dXJuIHRoaXMubWFya2Vycztcbn07XG5cbi8qKlxuICogSGlkZSBhbGwgbWFya2VycycgSW5mb1dpbmRvd3MuXG4gKiBAZnVuY3Rpb24gaGlkZUluZm9XaW5kb3dzXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5oaWRlSW5mb1dpbmRvd3MgPSBmdW5jdGlvbiBoaWRlSW5mb1dpbmRvd3MoKSB7XG4gIHRoaXMubWFya2Vycy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICBpZiAobWFya2VyLmluZm9XaW5kb3cpIHtcbiAgICAgIG1hcmtlci5pbmZvV2luZG93LmNsb3NlKCk7XG4gICAgfVxuICB9KTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGEgbWFya2VyIGZyb20gdGhlIG1hcCBhbmQgZnJvbSB0aGUgbWFya2VycyBjb2xsZWN0aW9uLiBUaGlzIG1ldGhvZCBhbHNvIGZpcmVzIGEgYG1hcmtlcl9yZW1vdmVkYCBldmVudC5cbiAqIEBmdW5jdGlvbiByZW1vdmVNYXJrZXJcbiAqXG4gKiBAcGFyYW0ge2dvb2dsZS5tYXBzLlBvbHlnb259IHBvbHlnb24gLSBUaGUgcG9seWdvbiB0byBiZSByZW1vdmVkLlxuICovXG5HTWFwcy5wcm90b3R5cGUucmVtb3ZlTWFya2VyID0gZnVuY3Rpb24gcmVtb3ZlTWFya2VyKG1hcmtlciwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHsgZmlyZUV2ZW50ID0gdHJ1ZSwgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IG1hcmtlckluZGV4ID0gdGhpcy5tYXJrZXJzLmluZGV4T2YobWFya2VyKTtcblxuICBpZiAobWFya2VySW5kZXggPj0gMCkge1xuICAgIG1hcmtlci5zZXRNYXAobnVsbCk7XG4gICAgdGhpcy5tYXJrZXJzLnNwbGljZShtYXJrZXJJbmRleCwgMSk7XG5cbiAgICBpZiAodGhpcy5tYXJrZXJDbHVzdGVyZXIpIHtcbiAgICAgIHRoaXMubWFya2VyQ2x1c3RlcmVyLnJlbW92ZU1hcmtlcihtYXJrZXIpO1xuICAgIH1cblxuICAgIGlmIChmaXJlRXZlbnQpIHtcbiAgICAgIEdNYXBzLmZpcmUoJ21hcmtlcl9yZW1vdmVkJywgbWFya2VyLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWFya2VyO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYSBncm91cCBvZiBtYXJrZXJzIChvciBhbGwgb2YgdGhlbSkgZnJvbSB0aGUgTWFwIGFuZCBmcm9tIHRoZSBtYXJrZXJzIGNvbGxlY3Rpb24uIFRoaXMgbWV0aG9kIGRvZXMgbm90IGZpcmUgYSBgbWFya2VyX3JlbW92ZWRgIGV2ZW50LlxuICogQGZ1bmN0aW9uIHJlbW92ZU1hcmtlcnNcbiAqXG4gKiBAcGFyYW0ge2FycmF5fSBtYXJrZXJzIC0gVGhlIG1hcmtlcnMgdG8gYmUgcmVtb3ZlZC4gSWYgbm90IHNldCwgaXQgcmVtb3ZlcyBhbGwgbWFya2VycyBpbiB0aGUgTWFwLlxuICovXG5HTWFwcy5wcm90b3R5cGUucmVtb3ZlTWFya2VycyA9IGZ1bmN0aW9uIHJlbW92ZU1hcmtlcnMobWFya2VycyA9IHRoaXMubWFya2Vycykge1xuICBtYXJrZXJzLmZvckVhY2gobWFya2VyID0+IHRoaXMucmVtb3ZlTWFya2VyKG1hcmtlciwgeyBmaXJlRXZlbnQ6IGZhbHNlLCB9KSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHTWFwcztcbiIsImltcG9ydCBHTWFwcyBmcm9tICcuL2NvcmUnO1xuaW1wb3J0ICcuL2V2ZW50cyc7XG5cbi8qKlxuICogRXh0ZW5kcyBHTWFwcyB0byB1c2UgY3VzdG9tIG92ZXJsYXlzLlxuICogQG1vZHVsZSBPdmVybGF5c1xuICovXG5cbmNvbnN0IFNUT1BfUFJPUEFHQVRJT05fRVZFTlRTID0gWydjb250ZXh0bWVudScsICdET01Nb3VzZVNjcm9sbCcsICdkYmxjbGljaycsICdtb3VzZWRvd24nXTtcblxuLyoqXG4gKiBEcmF3IGFuIG92ZXJsYXkgaW4gdGhlIE1hcCBhbmQgYWRkIGl0IHRvIHRoZSBvdmVybGF5cyBjb2xsZWN0aW9uLiBUaGlzIG1ldGhvZCBhbHNvIGZpcmVzIGEgYG92ZXJsYXlfYWRkZWRgIGV2ZW50LlxuICogQGZ1bmN0aW9uIGRyYXdPdmVybGF5XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgYG9wdGlvbnNgIG9iamVjdCBzaG91bGQgY29udGFpbjpcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5hdXRvU2hvdyAtIFNob3cgdGhlIG92ZXJsYXkgaW5tZWRpYXRseSBhZnRlciBiZWluZyBjcmVhdGVkLlxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMubGF0aXR1ZGUgLSBMYXRpdHVkZSBvZiB0aGUgY29vcmRpbmF0ZSB3aGVyZSB0aGUgb3ZlcmxheSBpcyBwbGFjZWQuIElmIGBsYXRpdHVkZWAgYW5kIGBsb25naXR1ZGVgIGFyZSBzZXQsIGBwb3NpdGlvbmBpcyBpZ25vcmVkLlxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMubG9uZ2l0dWRlIC0gTG9uZ2l0dWRlIG9mIHRoZSBjb29yZGluYXRlIHdoZXJlIHRoZSBvdmVybGF5IGlzIHBsYWNlZC4gSWYgYGxhdGl0dWRlYCBhbmQgYGxvbmdpdHVkZWAgYXJlIHNldCwgYHBvc2l0aW9uYGlzIGlnbm9yZWQuXG4gKiBAcGFyYW0ge2dvb2dsZS5tYXBzLkxhdExuZ30gb3B0aW9ucy5wb3NpdGlvbiAtIEEgYGdvb2dsZS5tYXBzLkxhdExuZ2AgY29vcmRpbmF0ZSB3aGVyZSB0aGUgb3ZlcmxheSBpcyBwbGFjZWQuIElmIHNldCwgYGxhdGl0dWRlYCBhbmQgYGxvbmdpdHVkZWAgYXJlIGlnbm9yZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5jb250ZW50IC0gSFRNTCB0aGF0IHdpbGwgYmUgZHJhd24gaW4gdGhlIG92ZXJsYXkuXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5sYXllciAtIElkIG9mIGFueSBvZiB0aGUgbGF5ZXJzIGRlZmluZWQgaW4gW2dvb2dsZS5tYXBzLk1hcFBhbmVzXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjTWFwUGFuZXMpOlxuICogICAqIGZsb2F0UGFuZVxuICogICAqIGZsb2F0U2hhZG93XG4gKiAgICogbWFwUGFuZVxuICogICAqIG92ZXJsYXlJbWFnZVxuICogICAqIG92ZXJsYXlMYXllclxuICogICAqIG92ZXJsYXlNb3VzZVRhcmdldFxuICogICAqIG92ZXJsYXlTaGFkb3dcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnZlcnRpY2FsQWxpZ24gLSBWZXJ0aWNhbCBhbGlnbiBvZiB0aGUgb3ZlcmxheSAod2hlcmUgdGhlIGNlbnRlciBpcyB0aGUgY29vcmRpbmF0ZSBgbGF0aXR1ZGVgLCBgbG9uZ2l0dWRlYCk6XG4gKiAgICogdG9wXG4gKiAgICogbWlkZGxlXG4gKiAgICogYm90dG9tXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5ob3Jpem9udGFsQWxpZ24gLSBIb3Jpem9udGFsIGFsaWduIG9mIHRoZSBvdmVybGF5ICh3aGVyZSB0aGUgY2VudGVyIGlzIHRoZSBjb29yZGluYXRlIGBsYXRpdHVkZWAsIGBsb25naXR1ZGVgKTpcbiAqICAgKiBsZWZ0XG4gKiAgICogY2VudGVyXG4gKiAgICogcmlnaHRcbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLmhvcml6b250YWxPZmZzZXQgLSBIb3Jpem9udGFsIG9mZnNldCBpbiBwaXhlbHMgb2YgdGhlIG92ZXJsYXkuXG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy52ZXJ0aWNhbE9mZnNldCAtIFZlcnRpY2FsIG9mZnNldCBpbiBwaXhlbHMgb2YgdGhlIG92ZXJsYXkuXG4gKlxuICogQHJldHVybnMge2dvb2dsZS5tYXBzLk92ZXJsYXlWaWV3fVxuICovXG5HTWFwcy5wcm90b3R5cGUuZHJhd092ZXJsYXkgPSBmdW5jdGlvbiBkcmF3T3ZlcmxheShiYXNlT3B0aW9ucykge1xuICBjb25zdCBzZWxmID0gdGhpcztcbiAgY29uc3Qgb3ZlcmxheSA9IG5ldyBnb29nbGUubWFwcy5PdmVybGF5VmlldygpO1xuICBjb25zdCB7XG4gICAgYXV0b1Nob3cgPSB0cnVlLFxuICAgIGxhdCxcbiAgICBsYXRpdHVkZSA9IGxhdCxcbiAgICBsbmcsXG4gICAgbG9uZ2l0dWRlID0gbG5nLFxuICAgIHBvc2l0aW9uID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsYXRpdHVkZSwgbG9uZ2l0dWRlKSxcbiAgICBsYXllciA9ICdvdmVybGF5TGF5ZXInLFxuICAgIGhvcml6b250YWxPZmZzZXQgPSAwLFxuICAgIHZlcnRpY2FsT2Zmc2V0ID0gMCxcbiAgICB2ZXJ0aWNhbEFsaWduLFxuICAgIGhvcml6b250YWxBbGlnbixcbiAgICAuLi5vcHRpb25zXG4gIH0gPSBiYXNlT3B0aW9ucztcblxuICBvdmVybGF5LnNldE1hcCh0aGlzLm1hcCk7XG5cbiAgb3ZlcmxheS5vbkFkZCA9IGZ1bmN0aW9uIG9uQWRkKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGVsZW1lbnQuc3R5bGUuYm9yZGVyU3R5bGUgPSAnbm9uZSc7XG4gICAgZWxlbWVudC5zdHlsZS5ib3JkZXJXaWR0aCA9ICcwcHgnO1xuICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIGVsZW1lbnQuc3R5bGUuekluZGV4ID0gMTAwO1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gb3B0aW9ucy5jb250ZW50O1xuXG4gICAgb3ZlcmxheS5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgIGNvbnN0IHBhbmVzID0gdGhpcy5nZXRQYW5lcygpO1xuICAgIGNvbnN0IG92ZXJsYXlMYXllciA9IHBhbmVzW2xheWVyXTtcblxuICAgIG92ZXJsYXlMYXllci5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICAgIFNUT1BfUFJPUEFHQVRJT05fRVZFTlRTLmZvckVhY2goZXZlbnROYW1lID0+XG4gICAgICBnb29nbGUubWFwcy5ldmVudC5hZGREb21MaXN0ZW5lcihlbGVtZW50LCBldmVudE5hbWUsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdtc2llJykgIT09IC0xICYmIGRvY3VtZW50LmFsbCkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgIGV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWU7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgaWYgKG9wdGlvbnMuY2xpY2spIHtcbiAgICAgIHBhbmVzLm92ZXJsYXlNb3VzZVRhcmdldC5hcHBlbmRDaGlsZChvdmVybGF5LmVsZW1lbnQpO1xuICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIob3ZlcmxheS5lbGVtZW50LCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG9wdGlvbnMuY2xpY2suY2FsbChzZWxmLCBvdmVybGF5KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIodGhpcywgJ3JlYWR5Jyk7XG4gIH07XG5cbiAgb3ZlcmxheS5kcmF3ID0gZnVuY3Rpb24gZHJhdygpIHtcbiAgICBjb25zdCBwcm9qZWN0aW9uID0gdGhpcy5nZXRQcm9qZWN0aW9uKCk7XG4gICAgY29uc3QgcGl4ZWwgPSBwcm9qZWN0aW9uLmZyb21MYXRMbmdUb0RpdlBpeGVsKHBvc2l0aW9uKTtcblxuICAgIGNvbnN0IHsgZWxlbWVudCwgfSA9IG92ZXJsYXk7XG4gICAgY29uc3QgY29udGVudCA9IGVsZW1lbnQuY2hpbGRyZW5bMF07XG4gICAgY29uc3QgY29udGVudEhlaWdodCA9IGNvbnRlbnQuY2xpZW50SGVpZ2h0O1xuICAgIGNvbnN0IGNvbnRlbnRXaWR0aCA9IGNvbnRlbnQuY2xpZW50V2lkdGg7XG5cbiAgICBzd2l0Y2ggKHZlcnRpY2FsQWxpZ24pIHtcbiAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gYCR7cGl4ZWwueSAtIGNvbnRlbnRIZWlnaHQgKyB2ZXJ0aWNhbE9mZnNldH1weGA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgIGNhc2UgJ21pZGRsZSc6XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gYCR7cGl4ZWwueSAtIChjb250ZW50SGVpZ2h0IC8gMikgKyB2ZXJ0aWNhbE9mZnNldH1weGA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBgJHtwaXhlbC55ICsgdmVydGljYWxPZmZzZXR9cHhgO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGhvcml6b250YWxBbGlnbikge1xuICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IGAke3BpeGVsLnggLSBjb250ZW50V2lkdGggKyBob3Jpem9udGFsT2Zmc2V0fXB4YDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgY2FzZSAnY2VudGVyJzpcbiAgICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7cGl4ZWwueCAtIChjb250ZW50V2lkdGggLyAyKSArIGhvcml6b250YWxPZmZzZXR9cHhgO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7cGl4ZWwueCArIGhvcml6b250YWxPZmZzZXR9cHhgO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBhdXRvU2hvdyA/ICdibG9jaycgOiAnbm9uZSc7XG5cbiAgICBpZiAoIWF1dG9TaG93KSB7XG4gICAgICBvcHRpb25zLnNob3cuY2FsbCh0aGlzLCBlbGVtZW50KTtcbiAgICB9XG4gIH07XG5cbiAgb3ZlcmxheS5vblJlbW92ZSA9IGZ1bmN0aW9uIG9uUmVtb3ZlKCkge1xuICAgIGNvbnN0IHsgZWxlbWVudCwgfSA9IG92ZXJsYXk7XG5cbiAgICBpZiAob3B0aW9ucy5yZW1vdmUpIHtcbiAgICAgIG9wdGlvbnMucmVtb3ZlLmNhbGwodGhpcywgZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgIG92ZXJsYXkuZWxlbWVudCA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMub3ZlcmxheXMucHVzaChvdmVybGF5KTtcblxuICBHTWFwcy5maXJlKCdvdmVybGF5X2FkZGVkJywgb3ZlcmxheSwgdGhpcyk7XG5cbiAgcmV0dXJuIG92ZXJsYXk7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBvdmVybGF5IGZyb20gdGhlIG1hcCBhbmQgZnJvbSB0aGUgb3ZlcmxheXMgY29sbGVjdGlvbi4gVGhpcyBtZXRob2QgYWxzbyBmaXJlcyBhIGBvdmVybGF5X3JlbW92ZWRgIGV2ZW50LlxuICogQGZ1bmN0aW9uIHJlbW92ZU92ZXJsYXlcbiAqXG4gKiBAcGFyYW0ge2dvb2dsZS5tYXBzLk92ZXJsYXlWaWV3fSBvdmVybGF5IC0gVGhlIG92ZXJsYXkgdG8gYmUgcmVtb3ZlZC5cbiAqL1xuR01hcHMucHJvdG90eXBlLnJlbW92ZU92ZXJsYXkgPSBmdW5jdGlvbiByZW1vdmVPdmVybGF5KG92ZXJsYXkpIHtcbiAgY29uc3Qgb3ZlcmxheUluZGV4ID0gdGhpcy5vdmVybGF5cy5pbmRleE9mKG92ZXJsYXkpO1xuXG4gIGlmIChvdmVybGF5SW5kZXggPj0gMCkge1xuICAgIG92ZXJsYXkuc2V0TWFwKG51bGwpO1xuICAgIHRoaXMub3ZlcmxheXMuc3BsaWNlKG92ZXJsYXlJbmRleCwgMSk7XG5cbiAgICBHTWFwcy5maXJlKCdvdmVybGF5X3JlbW92ZWQnLCBvdmVybGF5LCB0aGlzKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZW1vdmUgYWxsIHRoZSBvdmVybGF5cyBmcm9tIHRoZSBtYXAgYW5kIGNsZWFyIHRoZSBvdmVybGF5cyBjb2xsZWN0aW9uLiBUaGlzIG1ldGhvZCBkb2VzIG5vdCBmaXJlIGEgYG92ZXJsYXlfcmVtb3ZlZGAgZXZlbnQuXG4gKiBAZnVuY3Rpb24gcmVtb3ZlT3ZlcmxheXNcbiAqL1xuR01hcHMucHJvdG90eXBlLnJlbW92ZU92ZXJsYXlzID0gZnVuY3Rpb24gcmVtb3ZlT3ZlcmxheXMoKSB7XG4gIHRoaXMub3ZlcmxheXMuZm9yRWFjaChvdmVybGF5ID0+IG92ZXJsYXkuc2V0TWFwKG51bGwpKTtcblxuICB0aGlzLm92ZXJsYXlzID0gW107XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHTWFwcztcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5pZiAodHlwZW9mIHdpbmRvdy5nb29nbGUgPT09ICdvYmplY3QnICYmIHdpbmRvdy5nb29nbGUubWFwcykge1xuICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIFBvbHlnb24gY29udGFpbnNMYXRMbmdcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3RwYXJraW4vR29vZ2xlLU1hcHMtUG9pbnQtaW4tUG9seWdvblxuICAvLyBQb3lnb24gZ2V0Qm91bmRzIGV4dGVuc2lvbiAtIGdvb2dsZS1tYXBzLWV4dGVuc2lvbnNcbiAgLy8gaHR0cDovL2NvZGUuZ29vZ2xlLmNvbS9wL2dvb2dsZS1tYXBzLWV4dGVuc2lvbnMvc291cmNlL2Jyb3dzZS9nb29nbGUubWFwcy5Qb2x5Z29uLmdldEJvdW5kcy5qc1xuICBpZiAoIWdvb2dsZS5tYXBzLlBvbHlnb24ucHJvdG90eXBlLmdldEJvdW5kcykge1xuICAgIGdvb2dsZS5tYXBzLlBvbHlnb24ucHJvdG90eXBlLmdldEJvdW5kcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGJvdW5kcyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMoKTtcbiAgICAgIHZhciBwYXRocyA9IHRoaXMuZ2V0UGF0aHMoKTtcbiAgICAgIHZhciBwYXRoO1xuXG4gICAgICBmb3IgKHZhciBwID0gMDsgcCA8IHBhdGhzLmdldExlbmd0aCgpOyBwKyspIHtcbiAgICAgICAgcGF0aCA9IHBhdGhzLmdldEF0KHApO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGguZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgICAgIGJvdW5kcy5leHRlbmQocGF0aC5nZXRBdChpKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGJvdW5kcztcbiAgICB9O1xuICB9XG5cbiAgaWYgKCFnb29nbGUubWFwcy5Qb2x5Z29uLnByb3RvdHlwZS5jb250YWluc0xhdExuZykge1xuICAgIC8vIFBvbHlnb24gY29udGFpbnNMYXRMbmcgLSBtZXRob2QgdG8gZGV0ZXJtaW5lIGlmIGEgbGF0TG5nIGlzIHdpdGhpbiBhIHBvbHlnb25cbiAgICBnb29nbGUubWFwcy5Qb2x5Z29uLnByb3RvdHlwZS5jb250YWluc0xhdExuZyA9IGZ1bmN0aW9uKGxhdExuZykge1xuICAgICAgLy8gRXhjbHVkZSBwb2ludHMgb3V0c2lkZSBvZiBib3VuZHMgYXMgdGhlcmUgaXMgbm8gd2F5IHRoZXkgYXJlIGluIHRoZSBwb2x5XG4gICAgICB2YXIgYm91bmRzID0gdGhpcy5nZXRCb3VuZHMoKTtcblxuICAgICAgaWYgKGJvdW5kcyAhPT0gbnVsbCAmJiAhYm91bmRzLmNvbnRhaW5zKGxhdExuZykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBSYXljYXN0IHBvaW50IGluIHBvbHlnb24gbWV0aG9kXG4gICAgICB2YXIgaW5Qb2x5ID0gZmFsc2U7XG5cbiAgICAgIHZhciBudW1QYXRocyA9IHRoaXMuZ2V0UGF0aHMoKS5nZXRMZW5ndGgoKTtcbiAgICAgIGZvciAodmFyIHAgPSAwOyBwIDwgbnVtUGF0aHM7IHArKykge1xuICAgICAgICB2YXIgcGF0aCA9IHRoaXMuZ2V0UGF0aHMoKS5nZXRBdChwKTtcbiAgICAgICAgdmFyIG51bVBvaW50cyA9IHBhdGguZ2V0TGVuZ3RoKCk7XG4gICAgICAgIHZhciBqID0gbnVtUG9pbnRzIC0gMTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVBvaW50czsgaSsrKSB7XG4gICAgICAgICAgdmFyIHZlcnRleDEgPSBwYXRoLmdldEF0KGkpO1xuICAgICAgICAgIHZhciB2ZXJ0ZXgyID0gcGF0aC5nZXRBdChqKTtcblxuICAgICAgICAgIGlmICh2ZXJ0ZXgxLmxuZygpIDwgbGF0TG5nLmxuZygpICYmIHZlcnRleDIubG5nKCkgPj0gbGF0TG5nLmxuZygpIHx8IHZlcnRleDIubG5nKCkgPCBsYXRMbmcubG5nKCkgJiYgdmVydGV4MS5sbmcoKSA+PSBsYXRMbmcubG5nKCkpIHtcbiAgICAgICAgICAgIGlmICh2ZXJ0ZXgxLmxhdCgpICsgKGxhdExuZy5sbmcoKSAtIHZlcnRleDEubG5nKCkpIC8gKHZlcnRleDIubG5nKCkgLSB2ZXJ0ZXgxLmxuZygpKSAqICh2ZXJ0ZXgyLmxhdCgpIC0gdmVydGV4MS5sYXQoKSkgPCBsYXRMbmcubGF0KCkpIHtcbiAgICAgICAgICAgICAgaW5Qb2x5ID0gIWluUG9seTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBqID0gaTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5Qb2x5O1xuICAgIH07XG4gIH1cblxuICBpZiAoIWdvb2dsZS5tYXBzLkNpcmNsZS5wcm90b3R5cGUuY29udGFpbnNMYXRMbmcpIHtcbiAgICBnb29nbGUubWFwcy5DaXJjbGUucHJvdG90eXBlLmNvbnRhaW5zTGF0TG5nID0gZnVuY3Rpb24obGF0TG5nKSB7XG4gICAgICBpZiAoZ29vZ2xlLm1hcHMuZ2VvbWV0cnkpIHtcbiAgICAgICAgcmV0dXJuIGdvb2dsZS5tYXBzLmdlb21ldHJ5LnNwaGVyaWNhbC5jb21wdXRlRGlzdGFuY2VCZXR3ZWVuKHRoaXMuZ2V0Q2VudGVyKCksIGxhdExuZykgPD0gdGhpcy5nZXRSYWRpdXMoKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgZ29vZ2xlLm1hcHMuUmVjdGFuZ2xlLnByb3RvdHlwZS5jb250YWluc0xhdExuZyA9IGZ1bmN0aW9uKGxhdExuZykge1xuICAgIHJldHVybiB0aGlzLmdldEJvdW5kcygpLmNvbnRhaW5zKGxhdExuZyk7XG4gIH07XG5cbiAgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzLnByb3RvdHlwZS5jb250YWluc0xhdExuZyA9IGZ1bmN0aW9uKGxhdExuZykge1xuICAgIHJldHVybiB0aGlzLmNvbnRhaW5zKGxhdExuZyk7XG4gIH07XG5cbiAgZ29vZ2xlLm1hcHMuTWFya2VyLnByb3RvdHlwZS5zZXRGZW5jZXMgPSBmdW5jdGlvbihmZW5jZXMpIHtcbiAgICB0aGlzLmZlbmNlcyA9IGZlbmNlcztcbiAgfTtcblxuICBnb29nbGUubWFwcy5NYXJrZXIucHJvdG90eXBlLmFkZEZlbmNlID0gZnVuY3Rpb24oZmVuY2UpIHtcbiAgICB0aGlzLmZlbmNlcy5wdXNoKGZlbmNlKTtcbiAgfTtcblxuICBnb29nbGUubWFwcy5NYXJrZXIucHJvdG90eXBlLmdldElkID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXNbJ19fZ21faWQnXTtcbiAgfTtcbn1cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQXJyYXkgaW5kZXhPZlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9pbmRleE9mXG5pZiAoIUFycmF5LnByb3RvdHlwZS5pbmRleE9mKSB7XG4gIEFycmF5LnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24gKHNlYXJjaEVsZW1lbnQgLyosIGZyb21JbmRleCAqLyApIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgaWYgKHRoaXMgPT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgIH1cbiAgICAgIHZhciB0ID0gT2JqZWN0KHRoaXMpO1xuICAgICAgdmFyIGxlbiA9IHQubGVuZ3RoID4+PiAwO1xuICAgICAgaWYgKGxlbiA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIHZhciBuID0gMDtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIG4gPSBOdW1iZXIoYXJndW1lbnRzWzFdKTtcbiAgICAgICAgICBpZiAobiAhPSBuKSB7IC8vIHNob3J0Y3V0IGZvciB2ZXJpZnlpbmcgaWYgaXQncyBOYU5cbiAgICAgICAgICAgICAgbiA9IDA7XG4gICAgICAgICAgfSBlbHNlIGlmIChuICE9IDAgJiYgbiAhPSBJbmZpbml0eSAmJiBuICE9IC1JbmZpbml0eSkge1xuICAgICAgICAgICAgICBuID0gKG4gPiAwIHx8IC0xKSAqIE1hdGguZmxvb3IoTWF0aC5hYnMobikpO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChuID49IGxlbikge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIHZhciBrID0gbiA+PSAwID8gbiA6IE1hdGgubWF4KGxlbiAtIE1hdGguYWJzKG4pLCAwKTtcbiAgICAgIGZvciAoOyBrIDwgbGVuOyBrKyspIHtcbiAgICAgICAgICBpZiAoayBpbiB0ICYmIHRba10gPT09IHNlYXJjaEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGs7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIC0xO1xuICB9XG59IiwiaW1wb3J0IEdNYXBzLCB7IGxhdExuZ0Zyb21Bcmd1bWVudHMsIGZsYXR0ZW5BcnJheSwgYXJyYXlUb0xhdExuZyB9IGZyb20gJy4vY29yZSc7XG5cbi8qKlxuICogRXh0ZW5kcyBHTWFwcyB0byB1c2Ugcm91dGVzLlxuICogQG1vZHVsZSBSb3V0ZXNcbiAqL1xuXG4vKipcbiAqIEdldCByb3V0ZXMgYmV0d2VlbiB0d28gY29vcmRpbmF0ZXMuXG4gKiBAZnVuY3Rpb24gZ2V0Um91dGVzXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgYG9wdGlvbnNgIG9iamVjdCBzaG91bGQgY29udGFpbjpcbiAqIEBwYXJhbSB7c3RyaW5nfGdvb2dsZS5tYXBzLkxhdExuZ3xnb29nbGUubWFwcy5QbGFjZXxnb29nbGUubWFwcy5MYXRMbmdMaXRlcmFsfSBvcHRpb25zLm9yaWdpbiAtIExvY2F0aW9uIG9mIG9yaWdpbi5cbiAqIEBwYXJhbSB7c3RyaW5nfGdvb2dsZS5tYXBzLkxhdExuZ3xnb29nbGUubWFwcy5QbGFjZXxnb29nbGUubWFwcy5MYXRMbmdMaXRlcmFsfSBvcHRpb25zLmRlc3RpbmF0aW9uIC0gTG9jYXRpb24gb2YgZGVzdGluYXRpb24uXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50cmF2ZWxNb2RlIC0gQ2FuIGJlIGBiaWN5Y2xpbmdgLCBgZHJpdmluZ2AsIGB0cmFuc2l0YCBvciBgd2Fsa2luZ2AuXG4gKiBAcGFyYW0ge2FycmF5fSBvcHRpb25zLndheXBvaW50cyAtIEFycmF5IG9mIFtnb29nbGUubWFwcy5EaXJlY3Rpb25zV2F5cG9pbnRdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNEaXJlY3Rpb25zV2F5cG9pbnQpIG9iamVjdHMuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLmNhbGxiYWNrIC0gRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIGFmdGVyIHRoZSByZXN1bHRzIGFyZSByZXR1cm5lZC5cbiAqXG4gKiBgb3B0aW9uc2AgYWxzbyBhY2NlcHRzIGFueSBvcHRpb24gZGVmaW5lZCBpbiB0aGUgW29mZmljaWFsIGRvY3VtZW50YXRpb25dKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNEaXJlY3Rpb25zUmVxdWVzdCkuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5nZXRSb3V0ZXMgPSBmdW5jdGlvbiBnZXRSb3V0ZXMoYmFzZU9wdGlvbnMpIHtcbiAgY29uc3QgeyBvcmlnaW4sIGRlc3RpbmF0aW9uLCB0cmF2ZWxNb2RlID0gJ3dhbGtpbmcnLCB1bml0U3lzdGVtID0gJ21ldHJpYycsIGF2b2lkSGlnaHdheXMgPSBmYWxzZSwgYXZvaWRUb2xscyA9IGZhbHNlLCBvcHRpbWl6ZVdheXBvaW50cyA9IGZhbHNlLCB3YXlwb2ludHMgPSBbXSwgY2FsbGJhY2ssIGVycm9yLCAuLi5vcHRpb25zIH0gPSBiYXNlT3B0aW9ucztcblxuICBjb25zdCB0cmF2ZWxNb2RlSWQgPSBnb29nbGUubWFwcy5UcmF2ZWxNb2RlW3RyYXZlbE1vZGUudG9VcHBlckNhc2UoKV07XG4gIGNvbnN0IHVuaXRTeXN0ZW1JZCA9IGdvb2dsZS5tYXBzLlRyYXZlbE1vZGVbdW5pdFN5c3RlbS50b1VwcGVyQ2FzZSgpXTtcblxuICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAuLi5vcHRpb25zLFxuICAgIHRyYXZlbE1vZGU6IHRyYXZlbE1vZGVJZCxcbiAgICB1bml0U3lzdGVtOiB1bml0U3lzdGVtSWQsXG4gICAgYXZvaWRIaWdod2F5cyxcbiAgICBhdm9pZFRvbGxzLFxuICAgIG9wdGltaXplV2F5cG9pbnRzLFxuICAgIHdheXBvaW50cyxcbiAgICBvcmlnaW46IHR5cGVvZiBvcmlnaW4gPT09ICdzdHJpbmcnID8gb3JpZ2luIDogbGF0TG5nRnJvbUFyZ3VtZW50cyguLi5vcmlnaW4pLFxuICAgIGRlc3RpbmF0aW9uOiB0eXBlb2YgZGVzdGluYXRpb24gPT09ICdzdHJpbmcnID8gZGVzdGluYXRpb24gOiBsYXRMbmdGcm9tQXJndW1lbnRzKC4uLmRlc3RpbmF0aW9uKSxcbiAgfTtcblxuICBjb25zdCBzZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTZXJ2aWNlKCk7XG5cbiAgc2VydmljZS5yb3V0ZShyZXF1ZXN0T3B0aW9ucywgKHJlc3VsdCwgc3RhdHVzKSA9PiB7XG4gICAgaWYgKHN0YXR1cyA9PT0gZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1N0YXR1cy5PSykge1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKFsuLi5yZXN1bHQucm91dGVzXSwgcmVzdWx0LCBzdGF0dXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZXJyb3IpIHtcbiAgICAgIGVycm9yKHJlc3VsdCwgc3RhdHVzKTtcbiAgICB9XG4gIH0pO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYWxsIHJvdXRlcyBzdG9yZWQgaW4gcm91dGVzIGNvbGxlY3Rpb24uXG4gKiBAZnVuY3Rpb24gcmVtb3ZlUm91dGVzXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5yZW1vdmVSb3V0ZXMgPSBmdW5jdGlvbiByZW1vdmVSb3V0ZXMoKSB7XG4gIHRoaXMucm91dGVzID0gW107XG59O1xuXG4vKipcbiAqIEdldCBlbGV2YXRpb24gaW5mb3JtYXRpb24gZm9yIGxvY2F0aW9ucyBvciByb3V0ZXMuXG4gKiBAZnVuY3Rpb24gZ2V0RWxldmF0aW9uc1xuICpcbiAqIEBwYXJhbSB7YXJyYXl9IGxvY2F0aW9ucyAtIEJpLWRpbWVuc2lvbmFsIGFycmF5IG9mIGxhdGl0dWRlcyBhbmQgbG9uZ2l0dWRlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcGF0aCAtIElmIGlzIHRydWUsIG1ha2VzIGEgcmVxdWVzdCBhbG9uZyBhIHBhdGguIElmIGlzIGZhbHNlLCBvbmx5IGdldCBlbGV2YXRpb24gaW5mb3JtYXRpb24gb24gZGlzY3JldGUgbG9jYXRpb25zLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBOYXRpdmUgY2FsbGJhY2sgZnVuY3Rpb24gZGVmaW5lZCBpbiBbZ29vZ2xlLm1hcHMuRWxldmF0aW9uU2VydmljZSAoJ01ldGhvZHMnIHNlY3Rpb24pXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjRWxldmF0aW9uU2VydmljZSkgKGBnZXRFbGV2YXRpb25BbG9uZ1BhdGhgIGlmIGBwYXRoYCBpcyB0cnVlLCBgZ2V0RWxldmF0aW9uRm9yTG9jYXRpb25zYCBpZiBgcGF0aGAgaXMgZmFsc2UpLlxuICovXG5HTWFwcy5wcm90b3R5cGUuZ2V0RWxldmF0aW9ucyA9IGZ1bmN0aW9uIGdldEVsZXZhdGlvbnMoYmFzZU9wdGlvbnMpIHtcbiAgY29uc3QgeyBwYXRoID0gZmFsc2UsIHNhbXBsZXMgPSAyNTYsIGNhbGxiYWNrLCAuLi5vcHRpb25zIH0gPSBiYXNlT3B0aW9ucztcblxuICBsZXQgbG9jYXRpb25zID0gb3B0aW9ucy5sb2NhdGlvbnMgfHwgW107XG5cbiAgaWYgKGxvY2F0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgaWYgKGxvY2F0aW9uc1swXS5sZW5ndGggPiAwKSB7XG4gICAgICBsb2NhdGlvbnMgPSBmbGF0dGVuQXJyYXkoW2xvY2F0aW9uc10ubWFwKGxvY2F0aW9uID0+IGFycmF5VG9MYXRMbmcobG9jYXRpb24sIGZhbHNlKSkpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNlcnZpY2UgPSBuZXcgZ29vZ2xlLm1hcHMuRWxldmF0aW9uU2VydmljZSgpO1xuXG4gIGlmICghcGF0aCkge1xuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIGxvY2F0aW9ucyxcbiAgICAgIHBhdGgsXG4gICAgICBzYW1wbGVzLFxuICAgIH07XG5cbiAgICBzZXJ2aWNlLmdldEVsZXZhdGlvbkZvckxvY2F0aW9ucyhyZXF1ZXN0T3B0aW9ucywgKHJlc3VsdCwgc3RhdHVzKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNhbGxiYWNrKHJlc3VsdCwgc3RhdHVzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgIHBhdGg6IGxvY2F0aW9ucyxcbiAgICAgIHNhbXBsZXMsXG4gICAgfTtcblxuICAgIHNlcnZpY2UuZ2V0RWxldmF0aW9uQWxvbmdQYXRoKHJlcXVlc3RPcHRpb25zLCAocmVzdWx0LCBzdGF0dXMpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2FsbGJhY2socmVzdWx0LCBzdGF0dXMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgR01hcHMjcmVtb3ZlUG9seWxpbmVzfS5cbiAqIEBmdW5jdGlvbiBjbGVhblJvdXRlXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5jbGVhblJvdXRlID0gR01hcHMucHJvdG90eXBlLnJlbW92ZVBvbHlsaW5lcztcblxuR01hcHMucHJvdG90eXBlLnJlbmRlclJvdXRlID0gZnVuY3Rpb24gcmVuZGVyUm91dGUob3B0aW9ucywgYmFzZVJlbmRlck9wdGlvbnMpIHtcbiAgY29uc3QgcGFuZWwgPSAoKHR5cGVvZiBiYXNlUmVuZGVyT3B0aW9ucy5wYW5lbCA9PT0gJ3N0cmluZycpID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYmFzZVJlbmRlck9wdGlvbnMucGFuZWwucmVwbGFjZSgnIycsICcnKSkgOiBiYXNlUmVuZGVyT3B0aW9ucy5wYW5lbCk7XG5cbiAgY29uc3QgcmVuZGVyT3B0aW9ucyA9IHtcbiAgICAuLi5iYXNlUmVuZGVyT3B0aW9ucyxcbiAgICBwYW5lbCxcbiAgICBtYXA6IHRoaXMubWFwLFxuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXkgPSBuZXcgZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1JlbmRlcmVyKHJlbmRlck9wdGlvbnMpO1xuXG4gIHRoaXMuZ2V0Um91dGVzKHtcbiAgICBvcmlnaW46IG9wdGlvbnMub3JpZ2luLFxuICAgIGRlc3RpbmF0aW9uOiBvcHRpb25zLmRlc3RpbmF0aW9uLFxuICAgIHRyYXZlbE1vZGU6IG9wdGlvbnMudHJhdmVsTW9kZSxcbiAgICB3YXlwb2ludHM6IG9wdGlvbnMud2F5cG9pbnRzLFxuICAgIHVuaXRTeXN0ZW06IG9wdGlvbnMudW5pdFN5c3RlbSxcbiAgICBlcnJvcjogb3B0aW9ucy5lcnJvcixcbiAgICBhdm9pZEhpZ2h3YXlzOiBvcHRpb25zLmF2b2lkSGlnaHdheXMsXG4gICAgYXZvaWRUb2xsczogb3B0aW9ucy5hdm9pZFRvbGxzLFxuICAgIG9wdGltaXplV2F5cG9pbnRzOiBvcHRpb25zLm9wdGltaXplV2F5cG9pbnRzLFxuICAgIGNhbGxiYWNrKF8sIHJlc3BvbnNlLCBzdGF0dXMpIHtcbiAgICAgIGlmIChzdGF0dXMgPT09IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTdGF0dXMuT0spIHtcbiAgICAgICAgZGlzcGxheS5zZXREaXJlY3Rpb25zKHJlc3BvbnNlKTtcbiAgICAgIH1cbiAgICB9LFxuICB9KTtcbn07XG5cbi8qKlxuICogRHJhdyBhIHJvdXRlIHVzaW5nIHBvbHlsaW5lcy4gSXQgdXNlcyB0aGUgbGFzdCByb3V0ZSBmb3VuZCBieSB7QGxpbmsgR01hcHMjZ2V0Um91dGVzfS5cbiAqIEBmdW5jdGlvbiBkcmF3Um91dGVcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIEFjY2VwdHMgdGhlIHNhbWUgb3B0aW9ucyBhcyB7QGxpbmsgR01hcHMjZ2V0Um91dGVzfS5cbiAqIEBwYXJhbSB7c3RyaW5nfGdvb2dsZS5tYXBzLkxhdExuZ3xnb29nbGUubWFwcy5QbGFjZXxnb29nbGUubWFwcy5MYXRMbmdMaXRlcmFsfSBvcHRpb25zLm9yaWdpbiAtIExvY2F0aW9uIG9mIG9yaWdpbi5cbiAqIEBwYXJhbSB7c3RyaW5nfGdvb2dsZS5tYXBzLkxhdExuZ3xnb29nbGUubWFwcy5QbGFjZXxnb29nbGUubWFwcy5MYXRMbmdMaXRlcmFsfSBvcHRpb25zLmRlc3RpbmF0aW9uIC0gTG9jYXRpb24gb2YgZGVzdGluYXRpb24uXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zdHJva2VDb2xvciAtIENvbG9yIG9mIHRoZSBwb2x5bGluZS4gQ2FuIGJlIGhleGFkZWNpbWFsIG9yIENTUyBuYW1lLlxuICogQHBhcmFtIHtmbG9hdH0gb3B0aW9ucy5zdHJva2VPcGFjaXR5IC0gT3BhY2l0eSBvZiB0aGUgcG9seWxpbmUgZnJvbSAwLjAgdG8gMS4wXG4gKiBAcGFyYW0ge2ludGVnZXJ9IG9wdGlvbnMuc3Ryb2tlV2VpZ2h0IC0gUG9seWxpbmUgd2lkdGggaW4gcGl4ZWxzLlxuICovXG5HTWFwcy5wcm90b3R5cGUuZHJhd1JvdXRlID0gZnVuY3Rpb24gZHJhd1JvdXRlKG9wdGlvbnMpIHtcbiAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgdGhpcy5nZXRSb3V0ZXMoe1xuICAgIG9yaWdpbjogb3B0aW9ucy5vcmlnaW4sXG4gICAgZGVzdGluYXRpb246IG9wdGlvbnMuZGVzdGluYXRpb24sXG4gICAgdHJhdmVsTW9kZTogb3B0aW9ucy50cmF2ZWxNb2RlLFxuICAgIHdheXBvaW50czogb3B0aW9ucy53YXlwb2ludHMsXG4gICAgdW5pdFN5c3RlbTogb3B0aW9ucy51bml0U3lzdGVtLFxuICAgIGVycm9yOiBvcHRpb25zLmVycm9yLFxuICAgIGF2b2lkSGlnaHdheXM6IG9wdGlvbnMuYXZvaWRIaWdod2F5cyxcbiAgICBhdm9pZFRvbGxzOiBvcHRpb25zLmF2b2lkVG9sbHMsXG4gICAgb3B0aW1pemVXYXlwb2ludHM6IG9wdGlvbnMub3B0aW1pemVXYXlwb2ludHMsXG4gICAgY2FsbGJhY2socm91dGVzKSB7XG4gICAgICBpZiAocm91dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgbGFzdFJvdXRlID0gcm91dGVzW3JvdXRlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgY29uc3QgcG9seWxpbmVPcHRpb25zID0ge1xuICAgICAgICAgIHBhdGg6IGxhc3RSb3V0ZS5vdmVydmlld19wYXRoLFxuICAgICAgICAgIHN0cm9rZUNvbG9yOiBvcHRpb25zLnN0cm9rZUNvbG9yLFxuICAgICAgICAgIHN0cm9rZU9wYWNpdHk6IG9wdGlvbnMuc3Ryb2tlT3BhY2l0eSxcbiAgICAgICAgICBzdHJva2VXZWlnaHQ6IG9wdGlvbnMuc3Ryb2tlV2VpZ2h0LFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChvcHRpb25zLmljb25zKSB7XG4gICAgICAgICAgcG9seWxpbmVPcHRpb25zLmljb25zID0gb3B0aW9ucy5pY29ucztcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuZHJhd1BvbHlsaW5lKHBvbHlsaW5lT3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuY2FsbGJhY2spIHtcbiAgICAgICAgICBvcHRpb25zLmNhbGxiYWNrKGxhc3RSb3V0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICB9KTtcbn07XG5cbi8qKlxuICogVHJhdmVsIGEgcm91dGUgYXV0b21hdGljYWxseS4gSXQgdXNlcyB0aGUgbGFzdCByb3V0ZSBmb3VuZCBieSB7QGxpbmsgR01hcHMjZ2V0Um91dGVzfS5cbiAqIEBmdW5jdGlvbiB0cmF2ZWxSb3V0ZVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gQWNjZXB0cyB0aGUgc2FtZSBvcHRpb25zIGFzIHtAbGluayBHTWFwcyNnZXRSb3V0ZXN9LlxuICogQHBhcmFtIHtzdHJpbmd8Z29vZ2xlLm1hcHMuTGF0TG5nfGdvb2dsZS5tYXBzLlBsYWNlfGdvb2dsZS5tYXBzLkxhdExuZ0xpdGVyYWx9IG9wdGlvbnMub3JpZ2luIC0gTG9jYXRpb24gb2Ygb3JpZ2luLlxuICogQHBhcmFtIHtzdHJpbmd8Z29vZ2xlLm1hcHMuTGF0TG5nfGdvb2dsZS5tYXBzLlBsYWNlfGdvb2dsZS5tYXBzLkxhdExuZ0xpdGVyYWx9IG9wdGlvbnMuZGVzdGluYXRpb24gLSBMb2NhdGlvbiBvZiBkZXN0aW5hdGlvbi5cbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zLnJvdXRlIC0gQSBbZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1JvdXRlXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjRGlyZWN0aW9uc1JvdXRlKSBvYmplY3QuIElmIHNldCwgYG9yaWdpbmAgYW5kIGBkZXN0aW5hdGlvbmAgYXJlIGlnbm9yZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLnN0YXJ0IC0gRmlyZWQgYmVmb3JlIHRoZSBmaXJzdCBzdGVwLiBJdCByZWNlaXZlcyBhIHNpbmdsZSBhcmd1bWVudCwgd2hpY2ggaXMgYSBbRGlyZWN0aW9uc1JvdXRlXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjRGlyZWN0aW9uc1JvdXRlKSBvYmplY3QuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLnN0ZXAgLSBGaXJlZCBlYWNoIHN0ZXAgaW4gdGhlIHJvdXRlLiBJdCByZWNlaXZlcyAyIGFyZ3VtZW50cywgd2hpY2ggaXMgYSBbRGlyZWN0aW9uc1N0ZXBdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNEaXJlY3Rpb25zU3RlcCkgb2JqZWN0IGFuZCB0aGUgdG90YWwgbGVuZ3RoIG9mIHRoZSBzdGVwcy5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMuZW5kIC0gRmlyZWQgYWZ0ZXIgdGhlIGxhc3Qgc3RlcC4gSXQgcmVjZWl2ZXMgYSBzaW5nbGUgYXJndW1lbnQsIHdoaWNoIGlzIGEgW0RpcmVjdGlvbnNSb3V0ZV0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI0RpcmVjdGlvbnNSb3V0ZSkgb2JqZWN0LlxuICovXG5HTWFwcy5wcm90b3R5cGUudHJhdmVsUm91dGUgPSBmdW5jdGlvbiB0cmF2ZWxSb3V0ZShvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zLm9yaWdpbiAmJiBvcHRpb25zLmRlc3RpbmF0aW9uKSB7XG4gICAgdGhpcy5nZXRSb3V0ZXMoe1xuICAgICAgb3JpZ2luOiBvcHRpb25zLm9yaWdpbixcbiAgICAgIGRlc3RpbmF0aW9uOiBvcHRpb25zLmRlc3RpbmF0aW9uLFxuICAgICAgdHJhdmVsTW9kZTogb3B0aW9ucy50cmF2ZWxNb2RlLFxuICAgICAgd2F5cG9pbnRzOiBvcHRpb25zLndheXBvaW50cyxcbiAgICAgIHVuaXRTeXN0ZW06IG9wdGlvbnMudW5pdFN5c3RlbSxcbiAgICAgIGVycm9yOiBvcHRpb25zLmVycm9yLFxuICAgICAgY2FsbGJhY2socm91dGVzKSB7XG4gICAgICAgIGlmIChyb3V0ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGFzdFJvdXRlID0gcm91dGVzW3JvdXRlcy5sZW5ndGggLSAxXTtcblxuICAgICAgICAvLyBzdGFydCBjYWxsYmFja1xuICAgICAgICBpZiAob3B0aW9ucy5zdGFydCkge1xuICAgICAgICAgIG9wdGlvbnMuc3RhcnQobGFzdFJvdXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN0ZXAgY2FsbGJhY2tcbiAgICAgICAgaWYgKG9wdGlvbnMuc3RlcCkge1xuICAgICAgICAgIGlmIChsYXN0Um91dGUubGVncy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCB7IHN0ZXBzLCB9ID0gbGFzdFJvdXRlLmxlZ3NbMF07XG5cbiAgICAgICAgICAgIHN0ZXBzLmZvckVhY2goKHN0ZXAsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgICAgICBzdGVwLnN0ZXBfbnVtYmVyID0gaW5kZXg7XG4gICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgICAgICBzdGVwLnN0ZXBOdW1iZXIgPSBpbmRleDtcblxuICAgICAgICAgICAgICBvcHRpb25zLnN0ZXAoc3RlcCwgc3RlcHMubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBlbmQgY2FsbGJhY2tcbiAgICAgICAgaWYgKG9wdGlvbnMuZW5kKSB7XG4gICAgICAgICAgb3B0aW9ucy5lbmQobGFzdFJvdXRlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChvcHRpb25zLnJvdXRlKSB7XG4gICAgaWYgKG9wdGlvbnMucm91dGUubGVncy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB7IHN0ZXBzLCB9ID0gb3B0aW9ucy5yb3V0ZS5sZWdzWzBdO1xuXG4gICAgICBzdGVwcy5mb3JFYWNoKChzdGVwLCBpbmRleCkgPT4ge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgc3RlcC5zdGVwX251bWJlciA9IGluZGV4O1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgc3RlcC5zdGVwTnVtYmVyID0gaW5kZXg7XG5cbiAgICAgICAgb3B0aW9ucy5zdGVwKHN0ZXAsIHN0ZXBzLmxlbmd0aCAtIDEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIERyYXcgYW5kIHRyYXZlbCBhIHJvdXRlIGF1dG9tYXRpY2FsbHkgc3RlcCBieSBzdGVwLiBJdCB1c2VzIHRoZSBsYXN0IHJvdXRlIGZvdW5kIGJ5IHtAbGluayBHTWFwcyNnZXRSb3V0ZXN9LlxuICogQGZ1bmN0aW9uIGRyYXdTdGVwcGVkUm91dGVcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIEFjY2VwdHMgdGhlIHNhbWUgb3B0aW9ucyBhcyB7QGxpbmsgR01hcHMjdHJhdmVsUm91dGV9LlxuICogQHBhcmFtIHtzdHJpbmd8Z29vZ2xlLm1hcHMuTGF0TG5nfGdvb2dsZS5tYXBzLlBsYWNlfGdvb2dsZS5tYXBzLkxhdExuZ0xpdGVyYWx9IG9wdGlvbnMub3JpZ2luIC0gTG9jYXRpb24gb2Ygb3JpZ2luLlxuICogQHBhcmFtIHtzdHJpbmd8Z29vZ2xlLm1hcHMuTGF0TG5nfGdvb2dsZS5tYXBzLlBsYWNlfGdvb2dsZS5tYXBzLkxhdExuZ0xpdGVyYWx9IG9wdGlvbnMuZGVzdGluYXRpb24gLSBMb2NhdGlvbiBvZiBkZXN0aW5hdGlvbi5cbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zLnJvdXRlIC0gQSBbZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1JvdXRlXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjRGlyZWN0aW9uc1JvdXRlKSBvYmplY3QuIElmIHNldCwgYG9yaWdpbmAgYW5kIGBkZXN0aW5hdGlvbmAgYXJlIGlnbm9yZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zdHJva2VDb2xvciAtIENvbG9yIG9mIHRoZSBwb2x5bGluZS4gQ2FuIGJlIGhleGFkZWNpbWFsIG9yIENTUyBuYW1lLlxuICogQHBhcmFtIHtmbG9hdH0gb3B0aW9ucy5zdHJva2VPcGFjaXR5IC0gT3BhY2l0eSBvZiB0aGUgcG9seWxpbmUgZnJvbSAwLjAgdG8gMS4wXG4gKiBAcGFyYW0ge2ludGVnZXJ9IG9wdGlvbnMuc3Ryb2tlV2VpZ2h0IC0gUG9seWxpbmUgd2lkdGggaW4gcGl4ZWxzLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5zdGFydCAtIEZpcmVkIGJlZm9yZSB0aGUgZmlyc3Qgc3RlcC4gSXQgcmVjZWl2ZXMgYSBzaW5nbGUgYXJndW1lbnQsIHdoaWNoIGlzIGEgW0RpcmVjdGlvbnNSb3V0ZV0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI0RpcmVjdGlvbnNSb3V0ZSkgb2JqZWN0LlxuICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5zdGVwIC0gRmlyZWQgZWFjaCBzdGVwIGluIHRoZSByb3V0ZS4gSXQgcmVjZWl2ZXMgMiBhcmd1bWVudHMsIHdoaWNoIGlzIGEgW0RpcmVjdGlvbnNTdGVwXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjRGlyZWN0aW9uc1N0ZXApIG9iamVjdCBhbmQgdGhlIHRvdGFsIGxlbmd0aCBvZiB0aGUgc3RlcHMuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLmVuZCAtIEZpcmVkIGFmdGVyIHRoZSBsYXN0IHN0ZXAuIEl0IHJlY2VpdmVzIGEgc2luZ2xlIGFyZ3VtZW50LCB3aGljaCBpcyBhIFtEaXJlY3Rpb25zUm91dGVdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNEaXJlY3Rpb25zUm91dGUpIG9iamVjdC5cblxuICovXG5HTWFwcy5wcm90b3R5cGUuZHJhd1N0ZXBwZWRSb3V0ZSA9IGZ1bmN0aW9uIGRyYXdTdGVwcGVkUm91dGUob3B0aW9ucykge1xuICBjb25zdCBzZWxmID0gdGhpcztcblxuICB0aGlzLnRyYXZlbFJvdXRlKHtcbiAgICAuLi5vcHRpb25zLFxuICAgIHN0ZXA6IGZ1bmN0aW9uIHN0ZXAocm91dGVTdGVwLCBzdGVwc0NvdW50KSB7XG4gICAgICBjb25zdCBwb2x5bGluZU9wdGlvbnMgPSB7XG4gICAgICAgIHBhdGg6IHJvdXRlU3RlcC5wYXRoLFxuICAgICAgICBzdHJva2VDb2xvcjogb3B0aW9ucy5zdHJva2VDb2xvcixcbiAgICAgICAgc3Ryb2tlT3BhY2l0eTogb3B0aW9ucy5zdHJva2VPcGFjaXR5LFxuICAgICAgICBzdHJva2VXZWlnaHQ6IG9wdGlvbnMuc3Ryb2tlV2VpZ2h0LFxuICAgICAgfTtcblxuICAgICAgaWYgKG9wdGlvbnMuaWNvbnMpIHtcbiAgICAgICAgcG9seWxpbmVPcHRpb25zLmljb25zID0gb3B0aW9ucy5pY29ucztcbiAgICAgIH1cblxuICAgICAgc2VsZi5kcmF3UG9seWxpbmUocG9seWxpbmVPcHRpb25zKTtcblxuICAgICAgb3B0aW9ucy5zdGVwKHJvdXRlU3RlcCwgc3RlcHNDb3VudCk7XG4gICAgfSxcbiAgfSk7XG5cbiAgLy8gaWYgKG9wdGlvbnMub3JpZ2luICYmIG9wdGlvbnMuZGVzdGluYXRpb24pIHtcbiAgLy8gICB0aGlzLmdldFJvdXRlcyh7XG4gIC8vICAgICBvcmlnaW46IG9wdGlvbnMub3JpZ2luLFxuICAvLyAgICAgZGVzdGluYXRpb246IG9wdGlvbnMuZGVzdGluYXRpb24sXG4gIC8vICAgICB0cmF2ZWxNb2RlOiBvcHRpb25zLnRyYXZlbE1vZGUsXG4gIC8vICAgICB3YXlwb2ludHM6IG9wdGlvbnMud2F5cG9pbnRzLFxuICAvLyAgICAgZXJyb3I6IG9wdGlvbnMuZXJyb3IsXG4gIC8vICAgICBjYWxsYmFjayhyb3V0ZXMpIHtcbiAgLy8gICAgICAgaWYgKHJvdXRlcy5sZW5ndGggPT09IDApIHtcbiAgLy8gICAgICAgICByZXR1cm47XG4gIC8vICAgICAgIH1cblxuICAvLyAgICAgICBjb25zdCByb3V0ZSA9IHJvdXRlc1tyb3V0ZXMubGVuZ3RoIC0gMV07XG5cbiAgLy8gICAgICAgLy8gc3RhcnQgY2FsbGJhY2tcbiAgLy8gICAgICAgaWYgKG9wdGlvbnMuc3RhcnQpIHtcbiAgLy8gICAgICAgICBvcHRpb25zLnN0YXJ0KHJvdXRlKTtcbiAgLy8gICAgICAgfVxuXG4gIC8vICAgICAgIC8vIHN0ZXAgY2FsbGJhY2tcbiAgLy8gICAgICAgaWYgKG9wdGlvbnMuc3RlcCkge1xuICAvLyAgICAgICAgIGlmIChyb3V0ZS5sZWdzLmxlbmd0aCA+IDApIHtcbiAgLy8gICAgICAgICAgIGNvbnN0IHsgc3RlcHMsIH0gPSByb3V0ZS5sZWdzWzBdO1xuXG4gIC8vICAgICAgICAgICBzdGVwcy5mb3JFYWNoKChzdGVwLCBpbmRleCkgPT4ge1xuICAvLyAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgLy8gICAgICAgICAgICAgc3RlcC5zdGVwX251bWJlciA9IGluZGV4O1xuICAvLyAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgLy8gICAgICAgICAgICAgc3RlcC5zdGVwTnVtYmVyID0gaW5kZXg7XG5cbiAgLy8gICAgICAgICAgICAgY29uc3QgcG9seWxpbmVPcHRpb25zID0ge1xuICAvLyAgICAgICAgICAgICAgIHBhdGg6IHN0ZXAucGF0aCxcbiAgLy8gICAgICAgICAgICAgICBzdHJva2VDb2xvcjogb3B0aW9ucy5zdHJva2VDb2xvcixcbiAgLy8gICAgICAgICAgICAgICBzdHJva2VPcGFjaXR5OiBvcHRpb25zLnN0cm9rZU9wYWNpdHksXG4gIC8vICAgICAgICAgICAgICAgc3Ryb2tlV2VpZ2h0OiBvcHRpb25zLnN0cm9rZVdlaWdodCxcbiAgLy8gICAgICAgICAgICAgfTtcblxuICAvLyAgICAgICAgICAgICBpZiAob3B0aW9ucy5pY29ucykge1xuICAvLyAgICAgICAgICAgICAgIHBvbHlsaW5lT3B0aW9ucy5pY29ucyA9IG9wdGlvbnMuaWNvbnM7XG4gIC8vICAgICAgICAgICAgIH1cblxuICAvLyAgICAgICAgICAgICBzZWxmLmRyYXdQb2x5bGluZShwb2x5bGluZU9wdGlvbnMpO1xuICAvLyAgICAgICAgICAgICBvcHRpb25zLnN0ZXAoc3RlcCwgKHJvdXRlLmxlZ3NbMF0uc3RlcHMubGVuZ3RoIC0gMSkpO1xuICAvLyAgICAgICAgICAgfSk7XG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICB9XG5cbiAgLy8gICAgICAgLy8gZW5kIGNhbGxiYWNrXG4gIC8vICAgICAgIGlmIChvcHRpb25zLmVuZCkge1xuICAvLyAgICAgICAgIG9wdGlvbnMuZW5kKHJvdXRlKTtcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfSxcbiAgLy8gICB9KTtcbiAgLy8gfSBlbHNlIGlmIChvcHRpb25zLnJvdXRlKSB7XG4gIC8vICAgaWYgKG9wdGlvbnMucm91dGUubGVncy5sZW5ndGggPiAwKSB7XG4gIC8vICAgICBjb25zdCB7IHN0ZXBzLCB9ID0gb3B0aW9ucy5yb3V0ZS5sZWdzWzBdO1xuXG4gIC8vICAgICBzdGVwcy5mb3JFYWNoKChzdGVwLCBpbmRleCkgPT4ge1xuICAvLyAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgLy8gICAgICAgc3RlcC5zdGVwX251bWJlciA9IGluZGV4O1xuICAvLyAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgLy8gICAgICAgc3RlcC5zdGVwTnVtYmVyID0gaW5kZXg7XG5cbiAgLy8gICAgICAgY29uc3QgcG9seWxpbmVPcHRpb25zID0ge1xuICAvLyAgICAgICAgIHBhdGg6IHN0ZXAucGF0aCxcbiAgLy8gICAgICAgICBzdHJva2VDb2xvcjogb3B0aW9ucy5zdHJva2VDb2xvcixcbiAgLy8gICAgICAgICBzdHJva2VPcGFjaXR5OiBvcHRpb25zLnN0cm9rZU9wYWNpdHksXG4gIC8vICAgICAgICAgc3Ryb2tlV2VpZ2h0OiBvcHRpb25zLnN0cm9rZVdlaWdodCxcbiAgLy8gICAgICAgfTtcblxuICAvLyAgICAgICBpZiAob3B0aW9ucy5pY29ucykge1xuICAvLyAgICAgICAgIHBvbHlsaW5lT3B0aW9ucy5pY29ucyA9IG9wdGlvbnMuaWNvbnM7XG4gIC8vICAgICAgIH1cblxuICAvLyAgICAgICBzZWxmLmRyYXdQb2x5bGluZShwb2x5bGluZU9wdGlvbnMpO1xuXG4gIC8vICAgICAgIG9wdGlvbnMuc3RlcChzdGVwKTtcbiAgLy8gICAgIH0pO1xuICAvLyAgIH1cbiAgLy8gfVxufTtcblxuY2xhc3MgUm91dGUge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5vcmlnaW4gPSBvcHRpb25zLm9yaWdpbjtcbiAgICB0aGlzLmRlc3RpbmF0aW9uID0gb3B0aW9ucy5kZXN0aW5hdGlvbjtcbiAgICB0aGlzLndheXBvaW50cyA9IG9wdGlvbnMud2F5cG9pbnRzO1xuXG4gICAgdGhpcy5tYXAgPSBvcHRpb25zLm1hcDtcbiAgICB0aGlzLnJvdXRlID0gb3B0aW9ucy5yb3V0ZTtcbiAgICB0aGlzLnN0ZXBfY291bnQgPSAwO1xuICAgIHRoaXMuc3RlcHMgPSB0aGlzLnJvdXRlLmxlZ3NbMF0uc3RlcHM7XG4gICAgdGhpcy5zdGVwc19sZW5ndGggPSB0aGlzLnN0ZXBzLmxlbmd0aDtcblxuICAgIGNvbnN0IHBvbHlsaW5lT3B0aW9ucyA9IHtcbiAgICAgIHBhdGg6IG5ldyBnb29nbGUubWFwcy5NVkNBcnJheSgpLFxuICAgICAgc3Ryb2tlQ29sb3I6IG9wdGlvbnMuc3Ryb2tlQ29sb3IsXG4gICAgICBzdHJva2VPcGFjaXR5OiBvcHRpb25zLnN0cm9rZU9wYWNpdHksXG4gICAgICBzdHJva2VXZWlnaHQ6IG9wdGlvbnMuc3Ryb2tlV2VpZ2h0LFxuICAgIH07XG5cbiAgICBpZiAob3B0aW9ucy5pY29ucykge1xuICAgICAgcG9seWxpbmVPcHRpb25zLmljb25zID0gb3B0aW9ucy5pY29ucztcbiAgICB9XG5cbiAgICB0aGlzLnBvbHlsaW5lID0gdGhpcy5tYXAuZHJhd1BvbHlsaW5lKHBvbHlsaW5lT3B0aW9ucykuZ2V0UGF0aCgpO1xuICB9XG5cbiAgZ2V0Um91dGUob3B0aW9ucykge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5tYXAuZ2V0Um91dGVzKHtcbiAgICAgIG9yaWdpbjogdGhpcy5vcmlnaW4sXG4gICAgICBkZXN0aW5hdGlvbjogdGhpcy5kZXN0aW5hdGlvbixcbiAgICAgIHRyYXZlbE1vZGU6IG9wdGlvbnMudHJhdmVsTW9kZSxcbiAgICAgIHdheXBvaW50czogdGhpcy53YXlwb2ludHMgfHwgW10sXG4gICAgICBlcnJvcjogb3B0aW9ucy5lcnJvcixcbiAgICAgIGNhbGxiYWNrKHJvdXRlcykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgc2VsZi5yb3V0ZSA9IHJvdXRlc1swXTtcblxuICAgICAgICBpZiAob3B0aW9ucy5jYWxsYmFjaykge1xuICAgICAgICAgIG9wdGlvbnMuY2FsbGJhY2suY2FsbChzZWxmKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGJhY2soKSB7XG4gICAgaWYgKHRoaXMuc3RlcF9jb3VudCA+IDApIHtcbiAgICAgIHRoaXMuc3RlcF9jb3VudCAtPSAxO1xuICAgICAgY29uc3QgeyBwYXRoLCB9ID0gdGhpcy5yb3V0ZS5sZWdzWzBdLnN0ZXBzW3RoaXMuc3RlcF9jb3VudF07XG5cbiAgICAgIHBhdGguZm9yRWFjaCgoKSA9PiB0aGlzLnBvbHlsaW5lLnBvcCgpKTtcbiAgICB9XG4gIH1cblxuICBmb3J3YXJkKCkge1xuICAgIGlmICh0aGlzLnN0ZXBfY291bnQgPCB0aGlzLnN0ZXBzX2xlbmd0aCkge1xuICAgICAgY29uc3QgeyBwYXRoLCB9ID0gdGhpcy5yb3V0ZS5sZWdzWzBdLnN0ZXBzW3RoaXMuc3RlcF9jb3VudF07XG5cbiAgICAgIHBhdGguZm9yRWFjaChjb29yZGluYXRlID0+IHRoaXMucG9seWxpbmUucHVzaChjb29yZGluYXRlKSk7XG5cbiAgICAgIHRoaXMuc3RlcF9jb3VudCArPSAxO1xuICAgIH1cbiAgfVxufVxuXG5HTWFwcy5Sb3V0ZSA9IFJvdXRlO1xuXG5leHBvcnQgZGVmYXVsdCBHTWFwcztcbiIsImltcG9ydCBHTWFwcyBmcm9tICcuL2NvcmUnO1xuXG5jb25zdCBwYXJzZUNvbG9yID0gKGNvbG9yLCBvcGFjaXR5KSA9PiB7XG4gIGxldCBwYXJzZWRDb2xvcjtcblxuICBpZiAoY29sb3JbMF0gPT09ICcjJykge1xuICAgIHBhcnNlZENvbG9yID0gY29sb3IucmVwbGFjZSgnIycsICcweCcpO1xuXG4gICAgaWYgKG9wYWNpdHkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgb3BhY2l0eSA9IE1hdGgubWluKDEsIE1hdGgubWF4KHBhcnNlRmxvYXQob3BhY2l0eSksIDApKTtcblxuICAgICAgaWYgKG9wYWNpdHkgPT09IDApIHtcbiAgICAgICAgcmV0dXJuICcweDAwMDAwMDAwJztcbiAgICAgIH1cblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBvcGFjaXR5ID0gKG9wYWNpdHkgKiAyNTUpLnRvU3RyaW5nKDE2KTtcblxuICAgICAgaWYgKG9wYWNpdHkubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICBvcGFjaXR5ICs9IG9wYWNpdHk7XG4gICAgICB9XG5cbiAgICAgIHBhcnNlZENvbG9yID0gcGFyc2VkQ29sb3Iuc2xpY2UoMCwgOCkgKyBvcGFjaXR5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJzZWRDb2xvcjtcbn07XG5cbi8qKlxuICogRXh0ZW5kcyBHTWFwcyB0byBnZW5lcmF0ZSBzdGF0aWMgbWFwcy5cbiAqIEBtb2R1bGUgU3RhdGljXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGFuIFVSTCBmb3IgYSBzdGF0aWMgbWFwIGZyb20gY3VycmVudCBHTWFwcyBtYXAuXG4gKiBAZnVuY3Rpb24gdG9JbWFnZVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBvYmplY3Qgc2hvdWxkIGNvbnRhaW46XG4gKiBAcGFyYW0ge2FycmF5fSBvcHRpb25zLnNpemUgLSBXaWR0aCBhbmQgaGVpZ2h0IG9mIHRoZSBpbWFnZS5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5HTWFwcy5wcm90b3R5cGUudG9JbWFnZSA9IGZ1bmN0aW9uIHRvSW1hZ2Uob3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHsgc2l6ZSA9IFt0aGlzLmVsZW1lbnQuY2xpZW50V2lkdGgsIHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHRdLCB6b29tID0gdGhpcy5nZXRab29tKCksIH0gPSBvcHRpb25zO1xuXG4gIGNvbnN0IHN0YXRpY01hcE9wdGlvbnMgPSB7XG4gICAgc2l6ZSxcbiAgICB6b29tLFxuICAgIGxhdGl0dWRlOiB0aGlzLmdldENlbnRlcigpLmxhdCgpLFxuICAgIGxvbmdpdHVkZTogdGhpcy5nZXRDZW50ZXIoKS5sbmcoKSxcbiAgICBtYXJrZXJzOiB0aGlzLm1hcmtlcnMubWFwKG1hcmtlciA9PiAoe1xuICAgICAgbGF0aXR1ZGU6IG1hcmtlci5nZXRQb3NpdGlvbigpLmxhdCgpLFxuICAgICAgbG9uZ2l0dWRlOiBtYXJrZXIuZ2V0UG9zaXRpb24oKS5sbmcoKSxcbiAgICB9KSksXG4gIH07XG5cbiAgaWYgKHRoaXMucG9seWxpbmVzLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBwb2x5bGluZSA9IHRoaXMucG9seWxpbmVzWzBdO1xuXG4gICAgc3RhdGljTWFwT3B0aW9ucy5wb2x5bGluZSA9IHtcbiAgICAgIHBhdGg6IGdvb2dsZS5tYXBzLmdlb21ldHJ5LmVuY29kaW5nLmVuY29kZVBhdGgocG9seWxpbmUuZ2V0UGF0aCgpKSxcbiAgICAgIHN0cm9rZUNvbG9yOiBwb2x5bGluZS5zdHJva2VDb2xvcixcbiAgICAgIHN0cm9rZU9wYWNpdHk6IHBvbHlsaW5lLnN0cm9rZU9wYWNpdHksXG4gICAgICBzdHJva2VXZWlnaHQ6IHBvbHlsaW5lLnN0cm9rZVdlaWdodCxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIEdNYXBzLnN0YXRpY01hcFVSTChzdGF0aWNNYXBPcHRpb25zKTtcbn07XG5cbmNvbnN0IGJ1aWxkTWFya2VyUGFyYW1ldGVycyA9IChtYXJrZXIpID0+IHtcbiAgY29uc3QgbWFya2VyUGFyYW1ldGVycyA9IFtdO1xuXG4gIGNvbnN0IHsgYWRkcmVzcywgbGF0LCBsYXRpdHVkZSA9IGxhdCwgbG5nLCBsb25naXR1ZGUgPSBsbmcsIHNpemUsIGljb24sIGNvbG9yLCBsYWJlbCwgLi4ubWFya2VyT3B0aW9ucyB9ID0gbWFya2VyO1xuXG4gIGNvbnN0IGxvY2F0aW9uID0gYWRkcmVzcyB8fCBgJHtsYXRpdHVkZX0sJHtsb25naXR1ZGV9YDtcblxuICBpZiAoc2l6ZSkge1xuICAgIG1hcmtlclBhcmFtZXRlcnMucHVzaChgc2l6ZToke3NpemV9YCk7XG4gIH1cblxuICBpZiAoaWNvbikge1xuICAgIG1hcmtlclBhcmFtZXRlcnMucHVzaChgaWNvbjoke2VuY29kZVVSSShpY29uKX1gKTtcbiAgfVxuXG4gIGlmIChjb2xvcikge1xuICAgIG1hcmtlclBhcmFtZXRlcnMucHVzaChgY29sb3I6JHtjb2xvci5yZXBsYWNlKCcjJywgJzB4Jyl9YCk7XG4gIH1cblxuICBpZiAobGFiZWwpIHtcbiAgICBtYXJrZXJQYXJhbWV0ZXJzLnB1c2goYGxhYmVsOiR7bGFiZWxbMF0udG9VcHBlckNhc2UoKX1gKTtcbiAgfVxuXG4gIE9iamVjdC5rZXlzKG1hcmtlck9wdGlvbnMpLmZvckVhY2goa2V5ID0+IG1hcmtlclBhcmFtZXRlcnMucHVzaChgJHtrZXl9OiR7bWFya2VyUGFyYW1ldGVyc1trZXldfWApKTtcblxuICBtYXJrZXJQYXJhbWV0ZXJzLnB1c2gobG9jYXRpb24pO1xuXG4gIHJldHVybiBtYXJrZXJQYXJhbWV0ZXJzO1xufTtcblxuY29uc3QgYnVpbGRQYXRoUGFyYW1ldGVycyA9IChwb2x5bGluZSkgPT4ge1xuICBjb25zdCB7IHBhdGgsIH0gPSBwb2x5bGluZTtcbiAgY29uc3QgcG9seWxpbmVQYXJhbWV0ZXJzID0gW107XG5cbiAgaWYgKHBvbHlsaW5lLnN0cm9rZVdlaWdodCkge1xuICAgIHBvbHlsaW5lUGFyYW1ldGVycy5wdXNoKGB3ZWlnaHQ6JHtwYXJzZUludChwb2x5bGluZS5zdHJva2VXZWlnaHQsIDEwKX1gKTtcbiAgfVxuXG4gIGlmIChwb2x5bGluZS5zdHJva2VDb2xvcikge1xuICAgIHBvbHlsaW5lUGFyYW1ldGVycy5wdXNoKGBjb2xvcjoke3BhcnNlQ29sb3IocG9seWxpbmUuc3Ryb2tlQ29sb3IsIHBvbHlsaW5lLnN0cm9rZU9wYWNpdHkpfWApO1xuICB9XG5cbiAgaWYgKHBvbHlsaW5lLmZpbGxDb2xvcikge1xuICAgIHBvbHlsaW5lUGFyYW1ldGVycy5wdXNoKGBmaWxsY29sb3I6JHtwYXJzZUNvbG9yKHBvbHlsaW5lLmZpbGxDb2xvciwgcG9seWxpbmUuZmlsbE9wYWNpdHkpfWApO1xuICB9XG5cbiAgaWYgKHBhdGguam9pbikge1xuICAgIHBhdGguZm9yRWFjaChjb29yZGluYXRlcyA9PiBwb2x5bGluZVBhcmFtZXRlcnMucHVzaChjb29yZGluYXRlcy5qb2luKCcsJykpKTtcbiAgfSBlbHNlIHtcbiAgICBwb2x5bGluZVBhcmFtZXRlcnMucHVzaChgZW5jOiR7cGF0aH1gKTtcbiAgfVxuXG4gIHJldHVybiBwb2x5bGluZVBhcmFtZXRlcnM7XG59O1xuXG5jb25zdCBidWlsZFN0eWxlUGFyYW1ldGVycyA9IChzdHlsZSkgPT4ge1xuICBjb25zdCBzdHlsZVBhcmFtZXRlcnMgPSBbXTtcblxuICBpZiAoc3R5bGUuZmVhdHVyZVR5cGUpIHtcbiAgICBzdHlsZVBhcmFtZXRlcnMucHVzaChgZmVhdHVyZToke3N0eWxlLmZlYXR1cmVUeXBlLnRvTG93ZXJDYXNlKCl9YCk7XG4gIH1cblxuICBpZiAoc3R5bGUuZWxlbWVudFR5cGUpIHtcbiAgICBzdHlsZVBhcmFtZXRlcnMucHVzaChgZWxlbWVudDoke3N0eWxlLmVsZW1lbnRUeXBlLnRvTG93ZXJDYXNlKCl9YCk7XG4gIH1cblxuICBpZiAoc3R5bGUuc3R5bGVycy5sZW5ndGgpIHtcbiAgICBzdHlsZS5zdHlsZXJzLmZvckVhY2goKHN0eWxlcikgPT4ge1xuICAgICAgT2JqZWN0LmtleXMoc3R5bGVyKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSAoa2V5ID09PSAnaHVlJyB8fCBrZXkgPT09ICdjb2xvcicpID8gc3R5bGVyW2tleV0ucmVwbGFjZSgnIycsICcweCcpIDogc3R5bGVyW2tleV07XG5cbiAgICAgICAgc3R5bGVQYXJhbWV0ZXJzLnB1c2goYCR7a2V5fToke3ZhbHVlfWApO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGVQYXJhbWV0ZXJzO1xufTtcblxuR01hcHMuc3RhdGljTWFwVVJMID0gZnVuY3Rpb24gc3RhdGljTWFwVVJMKGJhc2VPcHRpb25zKSB7XG4gIGNvbnN0IHsgdXJsLCBsYXQsIGxhdGl0dWRlID0gbGF0LCBsbmcsIGxvbmdpdHVkZSA9IGxuZywgY2VudGVyLCBhZGRyZXNzLCB6b29tID0gMTUsIG1hcmtlcnMgPSBbXSwgc3R5bGVzLCBwb2x5bGluZSwgdmlzaWJsZSwgc2l6ZSA9IFs2MzAsIDMwMF0sIC4uLm9wdGlvbnMgfSA9IGJhc2VPcHRpb25zO1xuICBjb25zdCBkZWZhdWx0Um9vdCA9IGAke3dpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2ZpbGU6JyA/ICdodHRwOicgOiB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2x9Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL3N0YXRpY21hcGA7XG5cbiAgbGV0IHJvb3QgPSB1cmwgfHwgZGVmYXVsdFJvb3Q7XG4gIGNvbnN0IHBhcmFtZXRlcnMgPSBbXTtcblxuICByb290ICs9ICc/JztcblxuICAvLyBNYXAgb3B0aW9uc1xuICBpZiAoY2VudGVyKSB7XG4gICAgcGFyYW1ldGVycy5wdXNoKGBjZW50ZXI9JHtjZW50ZXJ9YCk7XG4gIH0gZWxzZSBpZiAoYWRkcmVzcykge1xuICAgIHBhcmFtZXRlcnMucHVzaChgY2VudGVyPSR7YWRkcmVzc31gKTtcbiAgfSBlbHNlIGlmIChsYXRpdHVkZSAmJiBsb25naXR1ZGUpIHtcbiAgICBwYXJhbWV0ZXJzLnB1c2goYGNlbnRlcj0ke2xhdGl0dWRlfSwke2xvbmdpdHVkZX1gKTtcbiAgfSBlbHNlIGlmICh2aXNpYmxlKSB7XG4gICAgcGFyYW1ldGVycy5wdXNoKGB2aXNpYmxlPSR7ZW5jb2RlVVJJKHZpc2libGUuam9pbignfCcpKX1gKTtcbiAgfVxuXG4gIHBhcmFtZXRlcnMucHVzaChgc2l6ZT0ke3NpemUuam9pbigneCcpfWApO1xuICBwYXJhbWV0ZXJzLnB1c2goYHpvb209JHt6b29tfWApO1xuXG4gIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goa2V5ID0+IHBhcmFtZXRlcnMucHVzaChgJHtrZXl9PSR7b3B0aW9uc1trZXldfWApKTtcblxuICAvLyBNYXAgc3R5bGVcbiAgaWYgKHN0eWxlcykge1xuICAgIHN0eWxlcy5mb3JFYWNoKChzdHlsZSkgPT4ge1xuICAgICAgY29uc3Qgc3R5bGVQYXJhbWV0ZXJzID0gYnVpbGRTdHlsZVBhcmFtZXRlcnMoc3R5bGUpO1xuXG4gICAgICBwYXJhbWV0ZXJzLnB1c2goYHN0eWxlPSR7ZW5jb2RlVVJJKHN0eWxlUGFyYW1ldGVycy5qb2luKCd8JykpfWApO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gTWFya2Vyc1xuICBpZiAobWFya2Vycy5sZW5ndGgpIHtcbiAgICBtYXJrZXJzLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgY29uc3QgbWFya2VyUGFyYW1ldGVycyA9IGJ1aWxkTWFya2VyUGFyYW1ldGVycyhtYXJrZXIpO1xuICAgICAgcGFyYW1ldGVycy5wdXNoKGBtYXJrZXJzPSR7ZW5jb2RlVVJJKG1hcmtlclBhcmFtZXRlcnMuam9pbignfCcpKX1gKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFBvbHlsaW5lc1xuICBpZiAocG9seWxpbmUpIHtcbiAgICBjb25zdCBwb2x5bGluZVBhcmFtZXRlcnMgPSBidWlsZFBhdGhQYXJhbWV0ZXJzKHBvbHlsaW5lKTtcblxuICAgIHBhcmFtZXRlcnMucHVzaChgcGF0aD0ke2VuY29kZVVSSShwb2x5bGluZVBhcmFtZXRlcnMuam9pbignfCcpKX1gKTtcbiAgfVxuXG4gIC8vIFJldGluYSBzdXBwb3J0XG4gIGNvbnN0IGRwaSA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG4gIHBhcmFtZXRlcnMucHVzaChgc2NhbGU9JHtkcGl9YCk7XG5cbiAgcmV0dXJuIHJvb3QgKyBwYXJhbWV0ZXJzLmpvaW4oJyYnKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXBzO1xuIiwiaW1wb3J0IEdNYXBzLCB7IGdldEVsZW1lbnRCeUlkLCBzZXR1cEV2ZW50cyB9IGZyb20gJy4vY29yZSc7XG5cbi8qKlxuICogRXh0ZW5kcyBHTWFwcyB0byB1c2UgU3RyZWV0VmlldyBwYW5vcmFtYXNcbiAqIEBtb2R1bGUgU3RyZWV0Vmlld1xuICovXG5cbmNvbnN0IFNUUkVFVFZJRVdfRVZFTlRTID0gWydjbG9zZWNsaWNrJywgJ2xpbmtzX2NoYW5nZWQnLCAncGFub19jaGFuZ2VkJywgJ3Bvc2l0aW9uX2NoYW5nZWQnLCAncG92X2NoYW5nZWQnLCAncmVzaXplJywgJ3Zpc2libGVfY2hhbmdlZCddO1xuXG4vKipcbiAqIERpc3BsYXkgYSBTdHJlZXQgVmlldyBQYW5vcmFtYSBmb3IgYSBwb3NpdGlvbi5cbiAqIEBmdW5jdGlvbiBjcmVhdGVQYW5vcmFtYVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBvYmplY3Qgc2hvdWxkIGNvbnRhaW46XG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5sYXRpdHVkZSAtIExhdGl0dWRlIG9mIHRoZSBjb29yZGluYXRlIHdoZXJlIHRoZSBwYW5vcmFtYSBpcyBwbGFjZWQuIElmIG5vdCBzZXQsIGl0IHRha2VzIHRoZSBNYXAncyBjZW50ZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5sb25naXR1ZGUgLSBMb25naXR1ZGUgb2YgdGhlIGNvb3JkaW5hdGUgd2hlcmUgdGhlIHBhbm9yYW1hIGlzIHBsYWNlZC4gSWYgbm90IHNldCwgaXQgdGFrZXMgdGhlIE1hcCdzIGNlbnRlci5cbiAqIEBwYXJhbSB7Z29vZ2xlLm1hcHMuTGF0TG5nfSBvcHRpb25zLnBvc2l0aW9uIC0gQSBgZ29vZ2xlLm1hcHMuTGF0TG5nYCBjb29yZGluYXRlIHdoZXJlIHRoZSBwYW5vcmFtYSBpcyBwbGFjZWQuIElmIHNldCwgYGxhdGl0dWRlYCBhbmQgYGxvbmdpdHVkZWAgYXJlIGlnbm9yZWQuXG4gKlxuICogYG9wdGlvbnNgIGFsc28gYWNjZXB0cyBhbnkgb3B0aW9uIGRlZmluZWQgaW4gdGhlIFtvZmZpY2lhbCBkb2N1bWVudGF0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjU3RyZWV0Vmlld1Bhbm9yYW1hT3B0aW9ucykgYW5kIGFueSBldmVudCBkZWZpbmVkIGluIHRoZSBbXCJFdmVudHNcIiBzZWN0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjU3RyZWV0Vmlld1Bhbm9yYW1hKS5cbiAqXG4gKiBAcmV0dXJucyB7Z29vZ2xlLm1hcHMuU3RyZWV0Vmlld1Bhbm9yYW1hfVxuICovXG5HTWFwcy5wcm90b3R5cGUuY3JlYXRlUGFub3JhbWEgPSBmdW5jdGlvbiBjcmVhdGVQYW5vcmFtYShiYXNlT3B0aW9ucykge1xuICBjb25zdCB7IGxhdCA9IHRoaXMuZ2V0Q2VudGVyKCkubGF0KCksIGxhdGl0dWRlID0gbGF0LCBsbmcgPSB0aGlzLmdldENlbnRlcigpLmxuZygpLCBsb25naXR1ZGUgPSBsbmcsIC4uLm9wdGlvbnMgfSA9IGJhc2VPcHRpb25zO1xuXG4gIGNvbnN0IHN0cmVldFZpZXdPcHRpb25zID0ge1xuICAgIGxhdGl0dWRlLFxuICAgIGxvbmdpdHVkZSxcbiAgICBpbnN0YW5jZTogdGhpcyxcbiAgICAuLi5vcHRpb25zLFxuICB9O1xuXG4gIHRoaXMucGFub3JhbWEgPSBHTWFwcy5jcmVhdGVQYW5vcmFtYShzdHJlZXRWaWV3T3B0aW9ucyk7XG5cbiAgdGhpcy5tYXAuc2V0U3RyZWV0Vmlldyh0aGlzLnBhbm9yYW1hKTtcblxuICByZXR1cm4gdGhpcy5wYW5vcmFtYTtcbn07XG5cbkdNYXBzLmNyZWF0ZVBhbm9yYW1hID0gZnVuY3Rpb24gY3JlYXRlUGFub3JhbWEoYmFzZU9wdGlvbnMpIHtcbiAgY29uc3Qge1xuICAgIGVsLFxuICAgIGVsZW1lbnQgPSBlbCxcbiAgICBjb250ZXh0LFxuICAgIGxhdCxcbiAgICBsYXRpdHVkZSA9IGxhdCxcbiAgICBsbmcsXG4gICAgbG9uZ2l0dWRlID0gbG5nLFxuICAgIHBvc2l0aW9uID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsYXRpdHVkZSwgbG9uZ2l0dWRlKSxcbiAgICBpbnN0YW5jZSA9IHdpbmRvdyxcbiAgICAuLi5vcHRpb25zXG4gIH0gPSBiYXNlT3B0aW9ucztcblxuICBjb25zdCBjb250YWluZXJFbGVtZW50ID0gZ2V0RWxlbWVudEJ5SWQoZWxlbWVudCwgY29udGV4dCk7XG5cbiAgY29uc3QgZmlsdGVyZWRPcHRpb25zID0gT2JqZWN0LmtleXMob3B0aW9ucykucmVkdWNlKChoYXNoLCBrZXkpID0+IHtcbiAgICBpZiAoU1RSRUVUVklFV19FVkVOVFMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgcmV0dXJuIGhhc2g7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgLi4uaGFzaCwgW2tleV06IG9wdGlvbnNba2V5XSwgfTtcbiAgfSwge30pO1xuXG4gIGNvbnN0IHN0cmVldFZpZXdPcHRpb25zID0ge1xuICAgIC4uLmZpbHRlcmVkT3B0aW9ucyxcbiAgICBwb3NpdGlvbixcbiAgICB2aXNpYmxlOiB0cnVlLFxuICB9O1xuXG4gIGNvbnN0IHBhbm9yYW1hID0gbmV3IGdvb2dsZS5tYXBzLlN0cmVldFZpZXdQYW5vcmFtYShjb250YWluZXJFbGVtZW50LCBzdHJlZXRWaWV3T3B0aW9ucyk7XG5cbiAgc2V0dXBFdmVudHMoeyBldmVudHM6IFNUUkVFVFZJRVdfRVZFTlRTLCBvYmplY3Q6IHBhbm9yYW1hLCBpbnN0YW5jZSwgaGFuZGxlcnM6IG9wdGlvbnMsIH0pO1xuXG4gIHJldHVybiBwYW5vcmFtYTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXBzO1xuIiwiaW1wb3J0IEdNYXBzIGZyb20gJy4vY29yZSc7XG5cbi8qKlxuICogRXh0ZW5kcyBHTWFwcyB0byBhZGQgc3R5bGVkIG1hcCB0eXBlcy5cbiAqIEBtb2R1bGUgU3R5bGVzXG4gKi9cblxuLyoqXG4gKiBBZGQgYSBbc3R5bGVkIG1hcCB0eXBlXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9tYXB0eXBlcyNTdHlsZWRNYXBzKSBpbiB0aGUgTWFwLCB3aGljaCBjYW4gYmUgdXNlZCB3aXRoIHRoZSBiYXNlIG1hcCB0eXBlcyAoYGh5YnJpZGAsIGByb2FkbWFwYCwgYHNhdGVsbGl0ZWAgYW5kIGB0ZXJyYWluYCkuXG4gKiBAZnVuY3Rpb24gYWRkU3R5bGVcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRoZSBgb3B0aW9uc2Agb2JqZWN0IHNob3VsZCBjb250YWluOlxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubWFwVHlwZUlkIC0gQSBzaW1wbGUgaWRlbnRpZmllciBmb3IgdGhlIHN0eWxlZCBtYXAgdHlwZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnN0eWxlZE1hcE5hbWUgLSBBIG5hbWUgZm9yIHRoZSBzdHlsZWQgbWFwIHR5cGUuIEl0IHdpbGwgYmUgZGlzcGxheWVkIGluIHRoZSBtYXAgdHlwZSBjb250cm9sLlxuICogQHBhcmFtIHthcnJheX0gb3B0aW9ucy5zdHlsZXMgLSBBbiBhcnJheSBvZiAoYE1hcFR5cGVTdHlsZWApW2h0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNNYXBUeXBlU3R5bGVdIG9iamVjdHMuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5hZGRTdHlsZSA9IGZ1bmN0aW9uIGFkZFN0eWxlKG9wdGlvbnMpIHtcbiAgY29uc3Qgc3R5bGVkTWFwVHlwZSA9IG5ldyBnb29nbGUubWFwcy5TdHlsZWRNYXBUeXBlKG9wdGlvbnMuc3R5bGVzLCB7IG5hbWU6IG9wdGlvbnMuc3R5bGVkTWFwTmFtZSwgfSk7XG5cbiAgdGhpcy5tYXAubWFwVHlwZXMuc2V0KG9wdGlvbnMubWFwVHlwZUlkLCBzdHlsZWRNYXBUeXBlKTtcbn07XG5cbi8qKlxuICogU2V0IGEgW3N0eWxlZCBtYXAgdHlwZV0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvbWFwdHlwZXMjU3R5bGVkTWFwcykgdG8gdGhlIE1hcC4gVGhlIG1hcCB0eXBlIHNob3VsZCBiZSBkZWZpbmVkIGJlZm9yZSB3aXRoIHtAbGluayBHTWFwcyNhZGRTdHlsZX0uXG4gKiBAZnVuY3Rpb24gc2V0U3R5bGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWFwVHlwZUlkIC0gVGhlIHN0eWxlZCBtYXAgdHlwZSdzIGlkZW50aWZpZXIuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5zZXRTdHlsZSA9IGZ1bmN0aW9uIHNldFN0eWxlKG1hcFR5cGVJZCkge1xuICB0aGlzLm1hcC5zZXRNYXBUeXBlSWQobWFwVHlwZUlkKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXBzO1xuIiwiaW1wb3J0IEdNYXBzIGZyb20gJy4vY29yZSc7XG5cbi8qKlxuICogRXh0ZW5kcyBHTWFwcyB0byBhZGQgdXRpbHMgZnVuY3Rpb25zLlxuICogQG1vZHVsZSBVdGlsc1xuICovXG5cbi8qKlxuICogR2VvbG9jYXRlIHVzaW5nIGJyb3dzZXIncyBXZWIgQVBJLlxuICogQGZ1bmN0aW9uIGdlb2xvY2F0ZVxuICogQHN0YXRpY1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBvYmplY3Qgc2hvdWxkIGNvbnRhaW46XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLmFsd2F5cyAtIEEgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIGFmdGVyIHRoZSBgc3VjY2Vzc2AsIGBlcnJvcmAgYW5kIGBub3Rfc3VwcG9ydGVkYCBjYWxsYmFja3MuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLnN1Y2Nlc3MgLSBBIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBhZnRlciB0aGUgYnJvd3NlciBmaW5kIGl0cyBnZW9sb2NhdGlvbi5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMuZXJyb3IgLSBBIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBhZnRlciB0aGUgYnJvd3NlciBmYWlscyBhdCBmaW5kaW5nIGl0cyBnZW9sb2NhdGlvbi5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMubm90X3N1cHBvcnRlZCAtIEEgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIGlmIHRoZSBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBnZW9sb2NhdGlvbi5cbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zLm9wdGlvbnMgLSBPYmplY3Qgd2l0aCBhbGwgb3B0aW9ucyBkZWZpbmVkIGluIFtQb3NpdGlvbk9wdGlvbnNdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Qb3NpdGlvbk9wdGlvbnMpLlxuICovXG5HTWFwcy5nZW9sb2NhdGUgPSBmdW5jdGlvbiBnZW9sb2NhdGUob3B0aW9ucykge1xuICBjb25zdCBjb21wbGV0ZUNhbGxiYWNrID0gb3B0aW9ucy5hbHdheXMgfHwgb3B0aW9ucy5jb21wbGV0ZTtcblxuICBpZiAod2luZG93Lm5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgIHdpbmRvdy5uYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKChwb3NpdGlvbikgPT4ge1xuICAgICAgaWYgKG9wdGlvbnMuc3VjY2Vzcykge1xuICAgICAgICBvcHRpb25zLnN1Y2Nlc3MocG9zaXRpb24pO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29tcGxldGVDYWxsYmFjaykge1xuICAgICAgICBjb21wbGV0ZUNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICBpZiAob3B0aW9ucy5lcnJvcikge1xuICAgICAgICBvcHRpb25zLmVycm9yKGVycm9yKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbXBsZXRlQ2FsbGJhY2spIHtcbiAgICAgICAgY29tcGxldGVDYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH0sIG9wdGlvbnMub3B0aW9ucyk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKG9wdGlvbnMubm90X3N1cHBvcnRlZCkge1xuICAgICAgb3B0aW9ucy5ub3Rfc3VwcG9ydGVkKCk7XG4gICAgfVxuXG4gICAgaWYgKGNvbXBsZXRlQ2FsbGJhY2spIHtcbiAgICAgIGNvbXBsZXRlQ2FsbGJhY2soKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogR2VvY29kZSB1c2luZyBHb29nbGUgTWFwcyBHZW9jb2Rpbmcgc2VydmljZS5cbiAqIEBmdW5jdGlvbiBnZW9sb2NhdGVcbiAqIEBzdGF0aWNcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRoZSBgb3B0aW9uc2Agb2JqZWN0IHNob3VsZCBjb250YWluOlxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMubGF0aXR1ZGUgLSBMYXRpdHVkZSBvZiB0aGUgY29vcmRpbmF0ZSB0byBnZW9jb2RlLiBJZiBgbGF0aXR1ZGVgIGFuZCBgbG9uZ2l0dWRlYCBhcmUgc2V0LCBgbG9jYXRpb25gIGlzIGlnbm9yZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5sb25naXR1ZGUgLSBMb25naXR1ZGUgb2YgdGhlIGNvb3JkaW5hdGUgdG8gZ2VvY29kZS4gSWYgYGxhdGl0dWRlYCBhbmQgYGxvbmdpdHVkZWAgYXJlIHNldCwgYGxvY2F0aW9uYCBpcyBpZ25vcmVkLlxuICogQHBhcmFtIHtnb29nbGUubWFwcy5MYXRMbmd9IG9wdGlvbnMubG9jYXRpb24gLSBBIGBnb29nbGUubWFwcy5MYXRMbmdgIGNvb3JkaW5hdGUgdG8gZ2VvY29kZS4gSWYgc2V0LCBgbGF0aXR1ZGVgIGFuZCBgbG9uZ2l0dWRlYCBhcmUgaWdub3JlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMuY2FsbGJhY2sgLSBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgYWZ0ZXIgdGhlIHJlc3VsdHMgYXJlIHJldHVybmVkLiBJdCByZWNlaXZlcyAyIGFyZ3VtZW50cywgd2hpY2ggaXMgYW4gYXJyYXkgb2YgW0dlb2NvZGVyUmVzdWx0XShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjR2VvY29kZXJSZXN1bHQpIG9iamVjdHMgYW5kIHRoZSBbcmVxdWVzdCdzIHN0YXR1c10oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI0dlb2NvZGVyU3RhdHVzKS5cbiAqXG4gKiBgb3B0aW9uc2AgYWxzbyBhY2NlcHRzIGFueSBvcHRpb24gZGVmaW5lZCBpbiB0aGUgW29mZmljaWFsIGRvY3VtZW50YXRpb25dKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNHZW9jb2RlclJlcXVlc3QpLlxuICpcbiAqL1xuR01hcHMuZ2VvY29kZSA9IGZ1bmN0aW9uIGdlb2NvZGUoYmFzZU9wdGlvbnMpIHtcbiAgY29uc3Qge1xuICAgIGNhbGxiYWNrLFxuICAgIGxhdCxcbiAgICBsYXRpdHVkZSA9IGxhdCxcbiAgICBsbmcsXG4gICAgbG9uZ2l0dWRlID0gbG5nLFxuICAgIGxvY2F0aW9uID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsYXRpdHVkZSwgbG9uZ2l0dWRlKSxcbiAgICAuLi5vcHRpb25zXG4gIH0gPSBiYXNlT3B0aW9ucztcblxuICB0aGlzLmdlb2NvZGVyID0gbmV3IGdvb2dsZS5tYXBzLkdlb2NvZGVyKCk7XG5cbiAgY29uc3QgZ2VvY29kZU9wdGlvbnMgPSB7XG4gICAgLi4ub3B0aW9ucyxcbiAgICBsb2NhdGlvbixcbiAgfTtcblxuICB0aGlzLmdlb2NvZGVyLmdlb2NvZGUoZ2VvY29kZU9wdGlvbnMsIGNhbGxiYWNrKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXBzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==