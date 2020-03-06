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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HTWFwcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9HTWFwcy8uL2xpYi9jb250cm9scy5qcyIsIndlYnBhY2s6Ly9HTWFwcy8uL2xpYi9jb3JlLmpzIiwid2VicGFjazovL0dNYXBzLy4vbGliL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9HTWFwcy8uL2xpYi9nZW9mZW5jZXMuanMiLCJ3ZWJwYWNrOi8vR01hcHMvLi9saWIvZ2VvbWV0cnkuanMiLCJ3ZWJwYWNrOi8vR01hcHMvLi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vR01hcHMvLi9saWIvbGF5ZXJzLmpzIiwid2VicGFjazovL0dNYXBzLy4vbGliL21hcF90eXBlcy5qcyIsIndlYnBhY2s6Ly9HTWFwcy8uL2xpYi9tYXJrZXJzLmpzIiwid2VicGFjazovL0dNYXBzLy4vbGliL292ZXJsYXlzLmpzIiwid2VicGFjazovL0dNYXBzLy4vbGliL3BvbHlmaWxscy5qcyIsIndlYnBhY2s6Ly9HTWFwcy8uL2xpYi9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vR01hcHMvLi9saWIvc3RhdGljLmpzIiwid2VicGFjazovL0dNYXBzLy4vbGliL3N0cmVldHZpZXcuanMiLCJ3ZWJwYWNrOi8vR01hcHMvLi9saWIvc3R5bGVzLmpzIiwid2VicGFjazovL0dNYXBzLy4vbGliL3V0aWxzLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRyb2wiLCJzdHlsZSIsImlkIiwidGl0bGUiLCJjbGFzc2VzIiwiY29udGVudCIsInBvc2l0aW9uIiwiZXZlbnRzIiwiZGlzYWJsZURlZmF1bHRTdHlsZXMiLCJjb250cm9sIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY3Vyc29yIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJwcm9wZXJ0eSIsInNldFByb3BlcnR5IiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwid2luZG93IiwiSFRNTEVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImdvb2dsZSIsIm1hcHMiLCJDb250cm9sUG9zaXRpb24iLCJ0b1VwcGVyQ2FzZSIsImV2ZW50TmFtZSIsImV2ZW50IiwiYWRkRG9tTGlzdGVuZXIiLCJjYWxsIiwiaW5kZXgiLCJHTWFwcyIsInByb3RvdHlwZSIsImFkZENvbnRyb2wiLCJvcHRpb25zIiwiY29udHJvbHMiLCJwdXNoIiwibWFwIiwicmVtb3ZlQ29udHJvbCIsImNvbnRyb2xJbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJjb250cm9sc0ZvclBvc2l0aW9uIiwiY29udHJvbEluZGV4SW5Db2xsZWN0aW9uIiwicmVtb3ZlQXQiLCJsYXRMbmdGcm9tQXJndW1lbnRzIiwiTGF0TG5nIiwiZmxhdHRlbkFycmF5IiwiYXJyYXkiLCJyZWR1Y2UiLCJjb2xsZWN0aW9uIiwiaXRlbSIsImNvbmNhdCIsImNvb3Jkc1RvTGF0TG5ncyIsImNvb3JkaW5hdGVzIiwidXNlR2VvSlNPTiIsImZpcnN0Q29vcmRpbmF0ZSIsInNlY29uZENvb3JkaW5hdGUiLCJhcnJheVRvTGF0TG5nIiwiY29vcmRpbmF0ZSIsImxlbmd0aCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjb250ZXh0Iiwic2FuaXRpemVkQ2xhc3NOYW1lIiwicmVwbGFjZSIsIiQiLCJnZXRFbGVtZW50QnlJZCIsInNhbml0aXplZElkIiwiZWxlbWVudHMiLCJnZXRFbGVtZW50Iiwic2VsZWN0b3JPckVsZW1lbnQiLCJtYXRjaCIsImZpbmRBYnNvbHV0ZVBvc2l0aW9uIiwiZWxlbWVudCIsImxlZnQiLCJ0b3AiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJyZWN0YW5nbGUiLCJ4Iiwic2Nyb2xsWCIsInBhZ2VYT2Zmc2V0IiwieSIsInNjcm9sbFkiLCJwYWdlWU9mZnNldCIsIm9mZnNldFBhcmVudCIsIml0ZXJhdG9yIiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsInNldHVwRXZlbnRMaXN0ZW5lciIsIm9iamVjdCIsImluc3RhbmNlIiwiaGFuZGxlciIsImFkZExpc3RlbmVyIiwiaGlkZUNvbnRleHRNZW51Iiwic2V0dXBFdmVudHMiLCJoYW5kbGVycyIsIk1BUF9FVkVOVFMiLCJHTUFQU19NRU5VX0lEIiwiYmFzZU9wdGlvbnMiLCJFcnJvciIsImRpdiIsImVsIiwibGF0IiwibGF0aXR1ZGUiLCJsbmciLCJsb25naXR1ZGUiLCJjZW50ZXIiLCJ6b29tIiwibWFwVHlwZSIsInpvb21Db250cm9sT3B0IiwicGFuQ29udHJvbCIsInpvb21Db250cm9sIiwibWFwVHlwZUNvbnRyb2wiLCJzY2FsZUNvbnRyb2wiLCJzdHJlZXRWaWV3Q29udHJvbCIsIm92ZXJ2aWV3TWFwQ29udHJvbCIsIndpZHRoIiwiaGVpZ2h0IiwibWFya2VyQ2x1c3RlcmVyIiwiZW5hYmxlTmV3U3R5bGUiLCJtYXBUeXBlSWQiLCJNYXBUeXBlSWQiLCJtYXBCYXNlT3B0aW9ucyIsIm1hcENvbnRyb2xzT3B0aW9ucyIsInpvb21Db250cm9sT3B0aW9ucyIsIlpvb21Db250cm9sU3R5bGUiLCJmaWx0ZXJlZE9wdGlvbnMiLCJoYXNoIiwia2V5IiwiaW5jbHVkZXMiLCJNYXRoIiwiY2VpbCIsInJhbmRvbSIsIkRhdGUiLCJub3ciLCJjb250ZXh0TWVudXMiLCJ2aXN1YWxSZWZyZXNoIiwic2Nyb2xsV2lkdGgiLCJvZmZzZXRXaWR0aCIsInNjcm9sbEhlaWdodCIsIm9mZnNldEhlaWdodCIsIm1hcE9wdGlvbnMiLCJNYXAiLCJvdmVybGF5cyIsImxheWVycyIsInNpbmdsZUxheWVycyIsIm1hcmtlcnMiLCJwb2x5bGluZXMiLCJyb3V0ZXMiLCJwb2x5Z29ucyIsImluZm9XaW5kb3ciLCJvdmVybGF5RWxlbWVudCIsInJlZ2lzdGVyZWRFdmVudHMiLCJhcHBseSIsInJpZ2h0Y2xpY2siLCJidWlsZENvbnRleHRNZW51IiwiY29udGV4dE1lbnVFbGVtZW50IiwiaHRtbCIsImpvaW4iLCJjb250ZXh0TWVudUl0ZW1zIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjb250ZXh0TWVudUl0ZW0iLCJjb250ZXh0TWVudUl0ZW1MaXN0ZW5lciIsImNvbnRleHRNZW51SXRlbUxpc3RlbmVyRXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImFjdGlvbiIsImNsZWFyTGlzdGVuZXJzIiwiYWRkRG9tTGlzdGVuZXJPbmNlIiwicGl4ZWwiLCJvdmVybGF5IiwiT3ZlcmxheVZpZXciLCJzZXRNYXAiLCJkcmF3IiwicHJvamVjdGlvbiIsImdldFByb2plY3Rpb24iLCJtYXJrZXIiLCJnZXRQb3NpdGlvbiIsImZyb21MYXRMbmdUb0NvbnRhaW5lclBpeGVsIiwiYnVpbGRDb250ZXh0TWVudUhUTUwiLCJzZXRUaW1lb3V0IiwiZGlzcGxheSIsIm9wdGlvbiIsIm5hbWUiLCJtaW5XaWR0aCIsImJhY2tncm91bmQiLCJsaXN0U3R5bGUiLCJwYWRkaW5nIiwiYm9keSIsInJlbGF0ZWRUYXJnZXQiLCJjb250YWlucyIsInRyaWdnZXIiLCJsYXRMbmdzIiwiYm91bmRzIiwiTGF0TG5nQm91bmRzIiwibGF0TG5nIiwiZXh0ZW5kIiwiZml0Qm91bmRzIiwiZmlsdGVyIiwidmlzaWJsZSIsImZpdExhdExuZ0JvdW5kcyIsImFyZ3MiLCJjYWxsYmFjayIsInNsaWNlIiwicG9wIiwicGFuVG8iLCJtYWduaXR1ZGUiLCJnZXRab29tIiwic2V0Wm9vbSIsImdvb2dsZU1hcHNNYXBNZXRob2RzIiwibWV0aG9kTmFtZSIsImN1c3RvbUV2ZW50cyIsIm9uIiwicmVnaXN0ZXJlZEV2ZW50Iiwib2ZmIiwib25jZSIsImFkZExpc3RlbmVyT25jZSIsInVuZGVmaW5lZCIsImZpcmUiLCJldmVudEFyZ3VtZW50cyIsIkFycmF5IiwiYXJndW1lbnRzIiwiY2hlY2tHZW9mZW5jZSIsImxhZ0xuZyIsImZlbmNlIiwiY29udGFpbnNMYXRMbmciLCJjaGVja01hcmtlckdlb2ZlbmNlIiwib3V0c2lkZUNhbGxiYWNrIiwiZmVuY2VzIiwiRVZFTlRTIiwiZHJhd1BvbHlsaW5lIiwiaWNvbnMiLCJzdHJva2VDb2xvciIsInN0cm9rZU9wYWNpdHkiLCJzdHJva2VXZWlnaHQiLCJnZW9kZXNpYyIsImNsaWNrYWJsZSIsImVkaXRhYmxlIiwiekluZGV4IiwicGF0aCIsInBvbHlsaW5lT3B0aW9ucyIsInBvbHlsaW5lIiwiUG9seWxpbmUiLCJyZW1vdmVQb2x5bGluZSIsInBvbHlsaW5lSW5kZXgiLCJyZW1vdmVQb2x5bGluZXMiLCJkcmF3Q2lyY2xlIiwicG9seWdvbk9wdGlvbnMiLCJwb2x5Z29uIiwiQ2lyY2xlIiwiZHJhd1JlY3RhbmdsZSIsImxhdExuZ0JvdW5kcyIsIlJlY3RhbmdsZSIsImRyYXdQb2x5Z29uIiwiYmFzZVBhdGhzIiwicGF0aHMiLCJQb2x5Z29uIiwicmVtb3ZlUG9seWdvbiIsInBvbHlnb25JbmRleCIsInJlbW92ZVBvbHlnb25zIiwiZ2V0RnJvbUZ1c2lvblRhYmxlcyIsImxheWVyIiwiRnVzaW9uVGFibGVzTGF5ZXIiLCJsb2FkRnJvbUZ1c2lvblRhYmxlcyIsImdldEZyb21LTUwiLCJ1cmwiLCJLbWxMYXllciIsImxvYWRGcm9tS01MIiwiYWRkTGF5ZXIiLCJsYXllck5hbWUiLCJjbGljayIsInNlYXJjaCIsIm5lYXJieVNlYXJjaCIsInJhZGFyU2VhcmNoIiwidGV4dFNlYXJjaCIsImtleXdvcmQiLCJsb2NhdGlvbiIsInJhZGl1cyIsInJhbmtCeSIsInR5cGVzIiwicXVlcnkiLCJUcmFmZmljTGF5ZXIiLCJ0cmFmZmljIiwiVHJhbnNpdExheWVyIiwidHJhbnNpdCIsIkJpY3ljbGluZ0xheWVyIiwiYmljeWNsaW5nIiwicGxhY2VzIiwiUGxhY2VzU2VydmljZSIsInBsYWNlU2VhcmNoUmVxdWVzdCIsInRleHRTZWFyY2hSZXF1ZXN0Iiwic2V0T3B0aW9ucyIsInJlbW92ZUxheWVyIiwibGF5ZXJJbmRleCIsImFkZE1hcFR5cGUiLCJnZXRUaWxlVXJsIiwidGlsZVNpemUiLCJTaXplIiwiSW1hZ2VNYXBUeXBlIiwibWFwVHlwZXMiLCJzZXQiLCJhZGRPdmVybGF5TWFwVHlwZSIsImdldFRpbGUiLCJvdmVybGF5TWFwVHlwZXMiLCJvdmVybGF5TWFwVHlwZU9wdGlvbnMiLCJpbnNlcnRBdCIsInJlbW92ZU92ZXJsYXlNYXBUeXBlIiwib3ZlcmxheU1hcFR5cGUiLCJJTkZPX1dJTkRPV19FVkVOVFMiLCJNQVJLRVJfRVZFTlRTIiwiTUFSS0VSX01PVVNFX0VWRU5UUyIsImNyZWF0ZU1hcmtlciIsInNlbGYiLCJkZXRhaWxzIiwib3V0c2lkZSIsIm1hcmtlck9wdGlvbnMiLCJNYXJrZXIiLCJJbmZvV2luZG93IiwiZnJvbUxhdExuZ1RvUG9pbnQiLCJvbk1hcmtlckNsaWNrIiwiaGlkZUluZm9XaW5kb3dzIiwib3BlbiIsIm9uTWFya2VyUmlnaHRDbGljayIsIm9uTWFya2VyRHJhZ0VuZCIsImFkZE1hcmtlciIsImdtX2FjY2Vzc29yc18iLCJhZGRNYXJrZXJzIiwiY2xvc2UiLCJyZW1vdmVNYXJrZXIiLCJmaXJlRXZlbnQiLCJtYXJrZXJJbmRleCIsInJlbW92ZU1hcmtlcnMiLCJTVE9QX1BST1BBR0FUSU9OX0VWRU5UUyIsImRyYXdPdmVybGF5IiwiYXV0b1Nob3ciLCJob3Jpem9udGFsT2Zmc2V0IiwidmVydGljYWxPZmZzZXQiLCJ2ZXJ0aWNhbEFsaWduIiwiaG9yaXpvbnRhbEFsaWduIiwib25BZGQiLCJib3JkZXJTdHlsZSIsImJvcmRlcldpZHRoIiwicGFuZXMiLCJnZXRQYW5lcyIsIm92ZXJsYXlMYXllciIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInRvTG93ZXJDYXNlIiwiYWxsIiwiY2FuY2VsQnViYmxlIiwicmV0dXJuVmFsdWUiLCJzdG9wUHJvcGFnYXRpb24iLCJvdmVybGF5TW91c2VUYXJnZXQiLCJmcm9tTGF0TG5nVG9EaXZQaXhlbCIsImNoaWxkcmVuIiwiY29udGVudEhlaWdodCIsImNsaWVudEhlaWdodCIsImNvbnRlbnRXaWR0aCIsImNsaWVudFdpZHRoIiwic2hvdyIsIm9uUmVtb3ZlIiwicmVtb3ZlIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwicmVtb3ZlT3ZlcmxheSIsIm92ZXJsYXlJbmRleCIsInJlbW92ZU92ZXJsYXlzIiwiZ2V0Qm91bmRzIiwiZ2V0UGF0aHMiLCJwIiwiZ2V0TGVuZ3RoIiwiZ2V0QXQiLCJpIiwiaW5Qb2x5IiwibnVtUGF0aHMiLCJudW1Qb2ludHMiLCJqIiwidmVydGV4MSIsInZlcnRleDIiLCJnZW9tZXRyeSIsInNwaGVyaWNhbCIsImNvbXB1dGVEaXN0YW5jZUJldHdlZW4iLCJnZXRDZW50ZXIiLCJnZXRSYWRpdXMiLCJzZXRGZW5jZXMiLCJhZGRGZW5jZSIsImdldElkIiwic2VhcmNoRWxlbWVudCIsIlR5cGVFcnJvciIsInQiLCJsZW4iLCJuIiwiTnVtYmVyIiwiSW5maW5pdHkiLCJmbG9vciIsImFicyIsImsiLCJtYXgiLCJnZXRSb3V0ZXMiLCJvcmlnaW4iLCJkZXN0aW5hdGlvbiIsInRyYXZlbE1vZGUiLCJ1bml0U3lzdGVtIiwiYXZvaWRIaWdod2F5cyIsImF2b2lkVG9sbHMiLCJvcHRpbWl6ZVdheXBvaW50cyIsIndheXBvaW50cyIsImVycm9yIiwidHJhdmVsTW9kZUlkIiwiVHJhdmVsTW9kZSIsInVuaXRTeXN0ZW1JZCIsInJlcXVlc3RPcHRpb25zIiwic2VydmljZSIsIkRpcmVjdGlvbnNTZXJ2aWNlIiwicm91dGUiLCJyZXN1bHQiLCJzdGF0dXMiLCJEaXJlY3Rpb25zU3RhdHVzIiwiT0siLCJyZW1vdmVSb3V0ZXMiLCJnZXRFbGV2YXRpb25zIiwic2FtcGxlcyIsImxvY2F0aW9ucyIsIkVsZXZhdGlvblNlcnZpY2UiLCJnZXRFbGV2YXRpb25Gb3JMb2NhdGlvbnMiLCJnZXRFbGV2YXRpb25BbG9uZ1BhdGgiLCJjbGVhblJvdXRlIiwicmVuZGVyUm91dGUiLCJiYXNlUmVuZGVyT3B0aW9ucyIsInBhbmVsIiwicmVuZGVyT3B0aW9ucyIsIkRpcmVjdGlvbnNSZW5kZXJlciIsIl8iLCJyZXNwb25zZSIsInNldERpcmVjdGlvbnMiLCJkcmF3Um91dGUiLCJsYXN0Um91dGUiLCJvdmVydmlld19wYXRoIiwidHJhdmVsUm91dGUiLCJzdGFydCIsInN0ZXAiLCJsZWdzIiwic3RlcHMiLCJzdGVwX251bWJlciIsInN0ZXBOdW1iZXIiLCJlbmQiLCJkcmF3U3RlcHBlZFJvdXRlIiwicm91dGVTdGVwIiwic3RlcHNDb3VudCIsIlJvdXRlIiwic3RlcF9jb3VudCIsInN0ZXBzX2xlbmd0aCIsIk1WQ0FycmF5IiwiZ2V0UGF0aCIsInBhcnNlQ29sb3IiLCJjb2xvciIsIm9wYWNpdHkiLCJwYXJzZWRDb2xvciIsIm1pbiIsInBhcnNlRmxvYXQiLCJ0b1N0cmluZyIsInRvSW1hZ2UiLCJzaXplIiwic3RhdGljTWFwT3B0aW9ucyIsImVuY29kaW5nIiwiZW5jb2RlUGF0aCIsInN0YXRpY01hcFVSTCIsImJ1aWxkTWFya2VyUGFyYW1ldGVycyIsIm1hcmtlclBhcmFtZXRlcnMiLCJhZGRyZXNzIiwiaWNvbiIsImxhYmVsIiwiZW5jb2RlVVJJIiwiYnVpbGRQYXRoUGFyYW1ldGVycyIsInBvbHlsaW5lUGFyYW1ldGVycyIsInBhcnNlSW50IiwiZmlsbENvbG9yIiwiZmlsbE9wYWNpdHkiLCJidWlsZFN0eWxlUGFyYW1ldGVycyIsInN0eWxlUGFyYW1ldGVycyIsImZlYXR1cmVUeXBlIiwiZWxlbWVudFR5cGUiLCJzdHlsZXJzIiwic3R5bGVyIiwidmFsdWUiLCJzdHlsZXMiLCJkZWZhdWx0Um9vdCIsInByb3RvY29sIiwicm9vdCIsInBhcmFtZXRlcnMiLCJkcGkiLCJkZXZpY2VQaXhlbFJhdGlvIiwiU1RSRUVUVklFV19FVkVOVFMiLCJjcmVhdGVQYW5vcmFtYSIsInN0cmVldFZpZXdPcHRpb25zIiwicGFub3JhbWEiLCJzZXRTdHJlZXRWaWV3IiwiY29udGFpbmVyRWxlbWVudCIsIlN0cmVldFZpZXdQYW5vcmFtYSIsImFkZFN0eWxlIiwic3R5bGVkTWFwVHlwZSIsIlN0eWxlZE1hcFR5cGUiLCJzdHlsZWRNYXBOYW1lIiwic2V0U3R5bGUiLCJzZXRNYXBUeXBlSWQiLCJnZW9sb2NhdGUiLCJjb21wbGV0ZUNhbGxiYWNrIiwiYWx3YXlzIiwiY29tcGxldGUiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsInN1Y2Nlc3MiLCJub3Rfc3VwcG9ydGVkIiwiZ2VvY29kZSIsImdlb2NvZGVyIiwiR2VvY29kZXIiLCJnZW9jb2RlT3B0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBRUE7Ozs7O0FBS0EsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUErRjtBQUFBLHdCQUE1RkMsS0FBNEY7QUFBQSxNQUE1RkEsS0FBNEYsMkJBQXBGLEVBQW9GO0FBQUEsTUFBaEZDLEVBQWdGLFFBQWhGQSxFQUFnRjtBQUFBLE1BQTVFQyxLQUE0RSxRQUE1RUEsS0FBNEU7QUFBQSxNQUFyRUMsT0FBcUUsUUFBckVBLE9BQXFFO0FBQUEsTUFBNURDLE9BQTRELFFBQTVEQSxPQUE0RDtBQUFBLE1BQW5EQyxRQUFtRCxRQUFuREEsUUFBbUQ7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MEMsc0NBTy9CLElBQUk5UCxNQUFNLENBQUNDLElBQVAsQ0FBWXVCLE1BQWhCLENBQXVCeUQsUUFBdkIsRUFBaUNFLFNBQWpDLENBUCtCO0FBQUEsTUFRdkN2RSxPQVJ1Qyw0QkFTeENnRSxXQVR3Qzs7QUFXNUMsT0FBS2dhLFFBQUwsR0FBZ0IsSUFBSTVlLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZNGUsUUFBaEIsRUFBaEI7O0FBRUEsTUFBTUMsY0FBYyxxQkFDZmxlLE9BRGU7QUFFbEJrUCxZQUFRLEVBQVJBO0FBRmtCLElBQXBCOztBQUtBLE9BQUs4TyxRQUFMLENBQWNELE9BQWQsQ0FBc0JHLGNBQXRCLEVBQXNDMVQsUUFBdEM7QUFDRCxDQW5CRDs7QUFxQmUzSyw0R0FBZixFIiwiZmlsZSI6ImdtYXBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9saWIvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgR01hcHMgZnJvbSAnLi9jb3JlJztcblxuLyoqXG4gKiBFeHRlbmRzIEdNYXBzIHRvIHVzZSBVSSBjb250cm9scy5cbiAqIEBtb2R1bGUgQ29udHJvbHNcbiAqL1xuXG5jb25zdCBjcmVhdGVDb250cm9sID0gKHsgc3R5bGUgPSB7fSwgaWQsIHRpdGxlLCBjbGFzc2VzLCBjb250ZW50LCBwb3NpdGlvbiwgZXZlbnRzID0ge30sIGRpc2FibGVEZWZhdWx0U3R5bGVzLCB9KSA9PiB7XG4gIGNvbnN0IGNvbnRyb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBjb250cm9sLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcblxuICBpZiAoZGlzYWJsZURlZmF1bHRTdHlsZXMgIT09IHRydWUpIHtcbiAgICBjb250cm9sLnN0eWxlLmZvbnRGYW1pbHkgPSAnaW5oZXJpdCc7XG4gICAgY29udHJvbC5zdHlsZS5mb250U2l6ZSA9ICdpbmhlcml0JztcbiAgICBjb250cm9sLnN0eWxlLmJvcmRlclJhZGl1cyA9ICcycHgnO1xuICAgIGNvbnRyb2wuc3R5bGUuYm94U2hhZG93ID0gJ3JnYmEoMCwgMCwgMCwgMC4yOTgwMzkpIDBweCAxcHggNHB4IC0xcHgnO1xuICB9XG5cbiAgT2JqZWN0LmtleXMoc3R5bGUpLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XG4gICAgY29udHJvbC5zdHlsZVtwcm9wZXJ0eV0gPSBzdHlsZVtwcm9wZXJ0eV07XG4gICAgY29udHJvbC5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wZXJ0eSwgc3R5bGVbcHJvcGVydHldKTtcbiAgfSk7XG5cbiAgaWYgKGlkKSB7XG4gICAgY29udHJvbC5pZCA9IGlkO1xuICB9XG5cbiAgaWYgKHRpdGxlKSB7XG4gICAgY29udHJvbC50aXRsZSA9IHRpdGxlO1xuICB9XG5cbiAgaWYgKGNsYXNzZXMpIHtcbiAgICBjb250cm9sLmNsYXNzTmFtZSA9IGNsYXNzZXM7XG4gIH1cblxuICBpZiAoY29udGVudCkge1xuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRyb2wuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICB9IGVsc2UgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQpIHtcbiAgICAgIGNvbnRyb2wuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBvc2l0aW9uKSB7XG4gICAgY29udHJvbC5wb3NpdGlvbiA9IGdvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvbltwb3NpdGlvbi50b1VwcGVyQ2FzZSgpXTtcbiAgfVxuXG4gIE9iamVjdC5rZXlzKGV2ZW50cykuZm9yRWFjaChldmVudE5hbWUgPT5cbiAgICBnb29nbGUubWFwcy5ldmVudC5hZGREb21MaXN0ZW5lcihjb250cm9sLCBldmVudE5hbWUsIGV2ZW50ID0+XG4gICAgICBldmVudHNbZXZlbnROYW1lXS5jYWxsKHRoaXMsIGV2ZW50KVxuICAgIClcbiAgKTtcblxuICBjb250cm9sLmluZGV4ID0gMTtcblxuICByZXR1cm4gY29udHJvbDtcbn07XG5cbi8qKlxuICogQWRkIGEgY3VzdG9tIGNvbnRyb2wgdG8gdGhlIG1hcCBVSS5cbiAqIEBmdW5jdGlvbiBhZGRDb250cm9sXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgYG9wdGlvbnNgIG9iamVjdCBzaG91bGQgY29udGFpbjpcbiAqICogYHN0eWxlYCAob2JqZWN0KTogVGhlIGtleXMgYW5kIHZhbHVlcyBvZiB0aGlzIG9iamVjdCBzaG91bGQgYmUgdmFsaWQgQ1NTIHByb3BlcnRpZXMgYW5kIHZhbHVlcy5cbiAqICogYGlkYCAoc3RyaW5nKTogVGhlIEhUTUwgaWQgZm9yIHRoZSBjdXN0b20gY29udHJvbC5cbiAqICogYGNsYXNzZXNgIChzdHJpbmcpOiBBIHN0cmluZyBjb250YWluaW5nIGFsbCB0aGUgSFRNTCBjbGFzc2VzIGZvciB0aGUgY3VzdG9tIGNvbnRyb2wuXG4gKiAqIGBjb250ZW50YCAoc3RyaW5nIG9yIEhUTUwgZWxlbWVudCk6IFRoZSBjb250ZW50IG9mIHRoZSBjdXN0b20gY29udHJvbC5cbiAqICogYHBvc2l0aW9uYCAoc3RyaW5nKTogQW55IHZhbGlkIFtgZ29vZ2xlLm1hcHMuQ29udHJvbFBvc2l0aW9uYF0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvY29udHJvbHMjQ29udHJvbFBvc2l0aW9uaW5nKSB2YWx1ZSwgaW4gbG93ZXIgb3IgdXBwZXIgY2FzZS5cbiAqICogYGV2ZW50c2AgKG9iamVjdCk6IFRoZSBrZXlzIG9mIHRoaXMgb2JqZWN0IHNob3VsZCBiZSB2YWxpZCBET00gZXZlbnRzLiBUaGUgdmFsdWVzIHNob3VsZCBiZSBmdW5jdGlvbnMuXG4gKiAqIGBkaXNhYmxlRGVmYXVsdFN0eWxlc2AgKGJvb2xlYW4pOiBJZiBmYWxzZSwgcmVtb3ZlcyB0aGUgZGVmYXVsdCBzdHlsZXMgZm9yIHRoZSBjb250cm9scyBsaWtlIGZvbnQgKGZhbWlseSBhbmQgc2l6ZSksIGFuZCBib3ggc2hhZG93LlxuICpcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAqL1xuR01hcHMucHJvdG90eXBlLmFkZENvbnRyb2wgPSBmdW5jdGlvbiBhZGRDb250cm9sKG9wdGlvbnMpIHtcbiAgY29uc3QgY29udHJvbCA9IGNyZWF0ZUNvbnRyb2wob3B0aW9ucyk7XG5cbiAgdGhpcy5jb250cm9scy5wdXNoKGNvbnRyb2wpO1xuICB0aGlzLm1hcC5jb250cm9sc1tjb250cm9sLnBvc2l0aW9uXS5wdXNoKGNvbnRyb2wpO1xuXG4gIHJldHVybiBjb250cm9sO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYSBjb250cm9sIGZyb20gdGhlIG1hcC4gYGNvbnRyb2xgIHNob3VsZCBiZSBhIGNvbnRyb2wgcmV0dXJuZWQgYnkgYGFkZENvbnRyb2woKWAuXG4gKiBAZnVuY3Rpb24gcmVtb3ZlQ29udHJvbFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRyb2wgLSBPbmUgb2YgdGhlIGNvbnRyb2xzIHJldHVybmVkIGJ5IGBhZGRDb250cm9sKClgLlxuICogQHJldHVybnMge0hUTUxFbGVtZW50fSB0aGUgcmVtb3ZlZCBjb250cm9sLlxuICovXG5HTWFwcy5wcm90b3R5cGUucmVtb3ZlQ29udHJvbCA9IGZ1bmN0aW9uIHJlbW92ZUNvbnRyb2woY29udHJvbCkge1xuICBjb25zdCBjb250cm9sSW5kZXggPSB0aGlzLmNvbnRyb2xzLmluZGV4T2YoY29udHJvbCk7XG5cbiAgdGhpcy5jb250cm9scy5zcGxpY2UoY29udHJvbEluZGV4LCAxKTtcblxuICBpZiAoY29udHJvbC5wb3NpdGlvbiA+PSAwICYmIGNvbnRyb2xJbmRleCA+PSAwKSB7XG4gICAgY29uc3QgY29udHJvbHNGb3JQb3NpdGlvbiA9IHRoaXMubWFwLmNvbnRyb2xzW2NvbnRyb2wucG9zaXRpb25dO1xuICAgIGNvbnN0IGNvbnRyb2xJbmRleEluQ29sbGVjdGlvbiA9IGNvbnRyb2xzRm9yUG9zaXRpb24uaW5kZXhPZihjb250cm9sKTtcblxuICAgIGNvbnRyb2xzRm9yUG9zaXRpb24ucmVtb3ZlQXQoY29udHJvbEluZGV4SW5Db2xsZWN0aW9uKTtcbiAgfVxuXG4gIHJldHVybiBjb250cm9sO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR01hcHM7XG4iLCJleHBvcnQgY29uc3QgbGF0TG5nRnJvbUFyZ3VtZW50cyA9ICguLi5hcmdzKSA9PiB7XG4gIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGFyZ3NbMV0gPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIG5ldyBnb29nbGUubWFwcy5MYXRMbmcoYXJnc1swXSwgYXJnc1sxXSk7XG4gIH1cblxuICByZXR1cm4gYXJnc1swXTtcbn07XG5cbmV4cG9ydCBjb25zdCBmbGF0dGVuQXJyYXkgPSBhcnJheSA9PlxuICBhcnJheS5yZWR1Y2UoKGNvbGxlY3Rpb24sIGl0ZW0pID0+IGNvbGxlY3Rpb24uY29uY2F0KGl0ZW0pLCBbXSk7XG5cbmV4cG9ydCBjb25zdCBjb29yZHNUb0xhdExuZ3MgPSAoY29vcmRpbmF0ZXMsIHVzZUdlb0pTT04pID0+IHtcbiAgY29uc3QgZmlyc3RDb29yZGluYXRlID0gdXNlR2VvSlNPTiA/IGNvb3JkaW5hdGVzWzFdIDogY29vcmRpbmF0ZXNbMF07XG4gIGNvbnN0IHNlY29uZENvb3JkaW5hdGUgPSB1c2VHZW9KU09OID8gY29vcmRpbmF0ZXNbMF0gOiBjb29yZGluYXRlc1sxXTtcblxuICByZXR1cm4gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhmaXJzdENvb3JkaW5hdGUsIHNlY29uZENvb3JkaW5hdGUpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFycmF5VG9MYXRMbmcgPSAoY29vcmRpbmF0ZXMsIHVzZUdlb0pTT04pID0+XG4gIGNvb3JkaW5hdGVzLm1hcCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgIGlmICghKGNvb3JkaW5hdGUgaW5zdGFuY2VvZiBnb29nbGUubWFwcy5MYXRMbmcpKSB7XG4gICAgICBpZiAoY29vcmRpbmF0ZS5sZW5ndGggJiYgdHlwZW9mIGNvb3JkaW5hdGVbMF0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBhcnJheVRvTGF0TG5nKGNvb3JkaW5hdGUsIHVzZUdlb0pTT04pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29vcmRzVG9MYXRMbmdzKGNvb3JkaW5hdGUsIHVzZUdlb0pTT04pO1xuICAgIH1cblxuICAgIHJldHVybiBjb29yZGluYXRlO1xuICB9KTtcblxuY29uc3QgZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSA9IChjbGFzc05hbWUsIGNvbnRleHQpID0+IHtcbiAgY29uc3Qgc2FuaXRpemVkQ2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoL15cXC4vLCAnJyk7XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cuJCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiAkKGAuJHtzYW5pdGl6ZWRDbGFzc05hbWV9YCwgY29udGV4dClbMF07XG4gIH1cblxuICByZXR1cm4gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoc2FuaXRpemVkQ2xhc3NOYW1lKVswXTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRFbGVtZW50QnlJZCA9IChpZCwgY29udGV4dCkgPT4ge1xuICBjb25zdCBzYW5pdGl6ZWRJZCA9IGlkLnJlcGxhY2UoL14jLywgJycpO1xuXG4gIGlmICh0eXBlb2Ygd2luZG93LiQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9ICQoYCMke3Nhbml0aXplZElkfWAsIGNvbnRleHQpIHx8IFtdO1xuXG4gICAgcmV0dXJuIGVsZW1lbnRzWzBdO1xuICB9XG5cbiAgcmV0dXJuIHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChzYW5pdGl6ZWRJZCk7XG59O1xuXG5jb25zdCBnZXRFbGVtZW50ID0gKHNlbGVjdG9yT3JFbGVtZW50LCBjb250ZXh0KSA9PiB7XG4gIGlmICh0eXBlb2Ygc2VsZWN0b3JPckVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHNlbGVjdG9yT3JFbGVtZW50Lm1hdGNoKC9eIy8pID8gZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3JPckVsZW1lbnQsIGNvbnRleHQpIDogZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShzZWxlY3Rvck9yRWxlbWVudCwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc2VsZWN0b3JPckVsZW1lbnQ7XG59O1xuXG5leHBvcnQgY29uc3QgZmluZEFic29sdXRlUG9zaXRpb24gPSAoZWxlbWVudCkgPT4ge1xuICBsZXQgbGVmdCA9IDA7XG4gIGxldCB0b3AgPSAwO1xuXG4gIGlmIChlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgIGNvbnN0IHJlY3RhbmdsZSA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgeCA9IC0od2luZG93LnNjcm9sbFggPyB3aW5kb3cuc2Nyb2xsWCA6IHdpbmRvdy5wYWdlWE9mZnNldCk7XG4gICAgY29uc3QgeSA9IC0od2luZG93LnNjcm9sbFkgPyB3aW5kb3cuc2Nyb2xsWSA6IHdpbmRvdy5wYWdlWU9mZnNldCk7XG5cbiAgICByZXR1cm4gW3JlY3RhbmdsZS5sZWZ0IC0geCwgcmVjdGFuZ2xlLnRvcCAtIHldO1xuICB9XG5cbiAgaWYgKGVsZW1lbnQub2Zmc2V0UGFyZW50KSB7XG4gICAgbGV0IGl0ZXJhdG9yID0gZWxlbWVudDtcblxuICAgIGRvIHtcbiAgICAgIGxlZnQgKz0gaXRlcmF0b3Iub2Zmc2V0TGVmdDtcbiAgICAgIHRvcCArPSBpdGVyYXRvci5vZmZzZXRUb3A7XG4gICAgfSB3aGlsZSAoKGl0ZXJhdG9yID0gaXRlcmF0b3Iub2Zmc2V0UGFyZW50KSk7XG4gIH1cblxuICByZXR1cm4gW2xlZnQsIHRvcF07XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0dXBFdmVudExpc3RlbmVyID0gKHsgb2JqZWN0LCBldmVudE5hbWUsIGluc3RhbmNlLCBoYW5kbGVyLCB9KSA9PiB7XG4gIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG9iamVjdCwgZXZlbnROYW1lLCAoZXZlbnQgPSBpbnN0YW5jZSkgPT4ge1xuICAgIGhhbmRsZXIuY2FsbChpbnN0YW5jZSwgZXZlbnQpO1xuXG4gICAgaWYgKGluc3RhbmNlLmhpZGVDb250ZXh0TWVudSkge1xuICAgICAgaW5zdGFuY2UuaGlkZUNvbnRleHRNZW51KCk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXR1cEV2ZW50cyA9ICh7IGV2ZW50cywgb2JqZWN0LCBpbnN0YW5jZSwgaGFuZGxlcnMsIH0pID0+XG4gIGV2ZW50cy5mb3JFYWNoKChldmVudE5hbWUpID0+IHtcbiAgICBpZiAoaGFuZGxlcnNbZXZlbnROYW1lXSkge1xuICAgICAgc2V0dXBFdmVudExpc3RlbmVyKHtcbiAgICAgICAgb2JqZWN0LFxuICAgICAgICBldmVudE5hbWUsXG4gICAgICAgIGluc3RhbmNlLFxuICAgICAgICBoYW5kbGVyOiBoYW5kbGVyc1tldmVudE5hbWVdLFxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuY29uc3QgTUFQX0VWRU5UUyA9IFtcbiAgJ2JvdW5kc19jaGFuZ2VkJywgJ2NlbnRlcl9jaGFuZ2VkJywgJ2NsaWNrJywgJ2RibGNsaWNrJywgJ2RyYWcnLFxuICAnZHJhZ2VuZCcsICdkcmFnc3RhcnQnLCAnaWRsZScsICdtYXB0eXBlaWRfY2hhbmdlZCcsXG4gICdtb3VzZW1vdmUnLCAnbW91c2VvdXQnLCAnbW91c2VvdmVyJywgJ3Byb2plY3Rpb25fY2hhbmdlZCcsXG4gICdyZXNpemUnLCAndGlsZXNsb2FkZWQnLCAnem9vbV9jaGFuZ2VkJ1xuXTtcbmNvbnN0IEdNQVBTX01FTlVfSUQgPSAnZ21hcHNfY29udGV4dF9tZW51JztcblxuLyoqXG4gKiBHTWFwcyBpcyBhIHdyYXBwZXIgZm9yIEdvb2dsZSBNYXBzIEphdmFTY3JpcHQgQVBJLiBJdHMgZ29hbCBpcyB0byBzaW1wbGlmeSBHb29nbGUgTWFwcyB1c2FnZSBieSBwZXJmb3JtaW5nIGNvbXBsZXggdGFza3Mgd2l0aCBmZXdlciBsaW5lcyBvZiBjb2RlLlxuICovXG5jbGFzcyBHTWFwcyB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IEdNYXBzIGluc3RhbmNlLCBpbmNsdWRpbmcgYSBHb29nbGUgTWFwcyBtYXAuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gYG9wdGlvbnNgIGFjY2VwdHMgYWxsIHRoZSBbTWFwT3B0aW9uc10oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI01hcE9wdGlvbnMpIGFuZCBbZXZlbnRzXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjTWFwKSBsaXN0ZWQgaW4gdGhlIEdvb2dsZSBNYXBzIEFQSS4gQWxzbyBhY2NlcHRzOlxuICAgKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5sYXRpdHVkZSAtIExhdGl0dWRlIG9mIHRoZSBtYXAncyBjZW50ZXIuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLmxvbmdpdHVkZSAtIExvbmdpdHVkZSBvZiB0aGUgbWFwJ3MgY2VudGVyLlxuICAgKiBAcGFyYW0ge2dvb2dsZS5tYXBzLkxhdExuZ30gb3B0aW9ucy5jZW50ZXIgLSBBIGBnb29nbGUubWFwcy5MYXRMbmdgIGNvb3JkaW5hdGUgaW5kaWNhdGUgdGhlIGNlbnRlci4gSWYgc2V0LCBgbGF0aXR1ZGVgIGFuZCBgbG9uZ2l0dWRlYCBhcmUgaWdub3JlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd8SFRNTEVsZW1lbnR9IG9wdGlvbnMuZWxlbWVudCAtIGNvbnRhaW5lciB3aGVyZSB0aGUgbWFwIHdpbGwgYmUgcmVuZGVyZWQuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMubWFya2VyQ2x1c3RlcmVyIC0gQSBmdW5jdGlvbiB0byBjcmVhdGUgYSBtYXJrZXIgY2x1c3Rlci4gWW91IGNhbiB1c2UgTWFya2VyQ2x1c3RlcmVyIG9yIE1hcmtlckNsdXN0ZXJlclBsdXMuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihiYXNlT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKCF3aW5kb3cuZ29vZ2xlIHx8ICF3aW5kb3cuZ29vZ2xlLm1hcHMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignR29vZ2xlIE1hcHMgSmF2YVNjcmlwdCBBUEkgaXMgcmVxdWlyZWQuIENoZWNrOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC90dXRvcmlhbCcpO1xuICAgIH1cblxuICAgIGNvbnN0IHsgZGl2LFxuICAgICAgZWwgPSBkaXYsXG4gICAgICBjb250ZXh0LFxuICAgICAgZWxlbWVudCA9IGdldEVsZW1lbnQoZWwsIGNvbnRleHQpLFxuICAgICAgbGF0LFxuICAgICAgbGF0aXR1ZGUgPSBsYXQsXG4gICAgICBsbmcsXG4gICAgICBsb25naXR1ZGUgPSBsbmcsXG4gICAgICBjZW50ZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGxhdGl0dWRlLCBsb25naXR1ZGUpLFxuICAgICAgem9vbSA9IDE1LFxuICAgICAgbWFwVHlwZSA9ICdyb2FkbWFwJyxcbiAgICAgIHpvb21Db250cm9sT3B0ID0ge1xuICAgICAgICBzdHlsZTogJ0RFRkFVTFQnLFxuICAgICAgICBwb3NpdGlvbjogJ1RPUF9MRUZUJyxcbiAgICAgIH0sXG4gICAgICBwYW5Db250cm9sID0gdHJ1ZSxcbiAgICAgIHpvb21Db250cm9sID0gdHJ1ZSxcbiAgICAgIG1hcFR5cGVDb250cm9sID0gdHJ1ZSxcbiAgICAgIHNjYWxlQ29udHJvbCA9IHRydWUsXG4gICAgICBzdHJlZXRWaWV3Q29udHJvbCA9IHRydWUsXG4gICAgICBvdmVydmlld01hcENvbnRyb2wgPSB0cnVlLFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICBtYXJrZXJDbHVzdGVyZXIsXG4gICAgICBlbmFibGVOZXdTdHlsZSxcbiAgICAgIC4uLm9wdGlvbnMgfSA9IGJhc2VPcHRpb25zO1xuXG4gICAgY29uc3QgbWFwVHlwZUlkID0gZ29vZ2xlLm1hcHMuTWFwVHlwZUlkW21hcFR5cGUudG9VcHBlckNhc2UoKV07XG5cbiAgICBjb25zdCBtYXBCYXNlT3B0aW9ucyA9IHtcbiAgICAgIHpvb20sXG4gICAgICBjZW50ZXIsXG4gICAgICBtYXBUeXBlSWQsXG4gICAgfTtcblxuICAgIGNvbnN0IG1hcENvbnRyb2xzT3B0aW9ucyA9IHtcbiAgICAgIHBhbkNvbnRyb2wsXG4gICAgICB6b29tQ29udHJvbCxcbiAgICAgIHpvb21Db250cm9sT3B0aW9uczoge1xuICAgICAgICBzdHlsZTogZ29vZ2xlLm1hcHMuWm9vbUNvbnRyb2xTdHlsZVt6b29tQ29udHJvbE9wdC5zdHlsZV0sXG4gICAgICAgIHBvc2l0aW9uOiBnb29nbGUubWFwcy5Db250cm9sUG9zaXRpb25bem9vbUNvbnRyb2xPcHQucG9zaXRpb25dLFxuICAgICAgfSxcbiAgICAgIG1hcFR5cGVDb250cm9sLFxuICAgICAgc2NhbGVDb250cm9sLFxuICAgICAgc3RyZWV0Vmlld0NvbnRyb2wsXG4gICAgICBvdmVydmlld01hcENvbnRyb2wsXG4gICAgfTtcblxuICAgIGNvbnN0IGZpbHRlcmVkT3B0aW9ucyA9IE9iamVjdC5rZXlzKG9wdGlvbnMpLnJlZHVjZSgoaGFzaCwga2V5KSA9PiB7XG4gICAgICBpZiAoTUFQX0VWRU5UUy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgIHJldHVybiBoYXNoO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5oYXNoLCBba2V5XTogb3B0aW9uc1trZXldLCB9O1xuICAgIH0sIHt9KTtcblxuICAgIHRoaXMuaWQgPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIERhdGUubm93KCkpO1xuXG4gICAgR01hcHMuY29udGV4dE1lbnVzW3RoaXMuaWRdID0ge307XG5cbiAgICBnb29nbGUubWFwcy52aXN1YWxSZWZyZXNoID0gZW5hYmxlTmV3U3R5bGU7XG5cbiAgICAvKipcbiAgICAgKiBIVE1MIGVsZW1lbnQgd2hlcmUgdGhlIEdvb2dsZSBNYXBzIG1hcCBpcyByZW5kZXJlZFxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIHRoaXMuZWxlbWVudCA9IHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJyA/IGdldEVsZW1lbnQoZWxlbWVudCkgOiBlbGVtZW50O1xuXG4gICAgaWYgKCF0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gZWxlbWVudCBkZWZpbmVkLiBQYXNzIGFuIGBlbGVtZW50YCBvcHRpb24gaW4gR01hcHMuJyk7XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLndpZHRoID0gd2lkdGggfHwgdGhpcy5lbGVtZW50LnNjcm9sbFdpZHRoIHx8IHRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0IHx8IHRoaXMuZWxlbWVudC5zY3JvbGxIZWlnaHQgfHwgdGhpcy5lbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICAgIGNvbnN0IG1hcE9wdGlvbnMgPSB7XG4gICAgICAuLi5maWx0ZXJlZE9wdGlvbnMsXG4gICAgICAuLi5tYXBCYXNlT3B0aW9ucyxcbiAgICAgIC4uLm1hcENvbnRyb2xzT3B0aW9ucyxcbiAgICB9O1xuXG4gICAgdGhpcy5tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKHRoaXMuZWxlbWVudCwgbWFwT3B0aW9ucyk7XG4gICAgLyoqXG4gICAgICogQ29sbGVjdGlvbiBvZiBjdXN0b20gY29udHJvbHMgaW4gdGhlIG1hcCBVSVxuICAgICAqXG4gICAgICogQHR5cGUge2FycmF5fVxuICAgICAqL1xuICAgIHRoaXMuY29udHJvbHMgPSBbXTtcbiAgICAvKipcbiAgICAgKiBDb2xsZWN0aW9uIG9mIG1hcCdzIG92ZXJsYXlzXG4gICAgICpcbiAgICAgKiBAdHlwZSB7YXJyYXl9XG4gICAgICovXG4gICAgdGhpcy5vdmVybGF5cyA9IFtdO1xuICAgIC8qKlxuICAgICAqIENvbGxlY3Rpb24gb2YgS01ML0dlb1JTUyBhbmQgRnVzaW9uVGFibGUgbGF5ZXJzXG4gICAgICpcbiAgICAgKiBAdHlwZSB7YXJyYXl9XG4gICAgICovXG4gICAgdGhpcy5sYXllcnMgPSBbXTtcbiAgICAvKipcbiAgICAgKiBDb2xsZWN0aW9uIG9mIGRhdGEgbGF5ZXJzIChTZWUge0BsaW5rIEdNYXBzI2FkZExheWVyfSlcbiAgICAgKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5zaW5nbGVMYXllcnMgPSB7fTtcbiAgICAvKipcbiAgICAgKiBDb2xsZWN0aW9uIG9mIG1hcCdzIG1hcmtlcnNcbiAgICAgKlxuICAgICAqIEB0eXBlIHthcnJheX1cbiAgICAgKi9cbiAgICB0aGlzLm1hcmtlcnMgPSBbXTtcbiAgICAvKipcbiAgICAgKiBDb2xsZWN0aW9uIG9mIG1hcCdzIGxpbmVzXG4gICAgICpcbiAgICAgKiBAdHlwZSB7YXJyYXl9XG4gICAgICovXG4gICAgdGhpcy5wb2x5bGluZXMgPSBbXTtcbiAgICAvKipcbiAgICAgKiBDb2xsZWN0aW9uIG9mIG1hcCdzIHJvdXRlcyByZXF1ZXN0ZWQgYnkge0BsaW5rIEdNYXBzI2dldFJvdXRlc30sIHtAbGluayBHTWFwcyNyZW5kZXJSb3V0ZX0sIHtAbGluayBHTWFwcyNkcmF3Um91dGV9LCB7QGxpbmsgR01hcHMjdHJhdmVsUm91dGV9IG9yIHtAbGluayBHTWFwcyNkcmF3U3RlcHBlZFJvdXRlfVxuICAgICAqXG4gICAgICogQHR5cGUge2FycmF5fVxuICAgICAqL1xuICAgIHRoaXMucm91dGVzID0gW107XG4gICAgLyoqXG4gICAgICogQ29sbGVjdGlvbiBvZiBtYXAncyBwb2x5Z29uc1xuICAgICAqXG4gICAgICogQHR5cGUge2FycmF5fVxuICAgICAqL1xuICAgIHRoaXMucG9seWdvbnMgPSBbXTtcbiAgICB0aGlzLmluZm9XaW5kb3cgPSBudWxsO1xuICAgIHRoaXMub3ZlcmxheUVsZW1lbnQgPSBudWxsO1xuICAgIC8qKlxuICAgICAqIEN1cnJlbnQgbWFwJ3Mgem9vbVxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLnpvb20gPSB6b29tO1xuXG4gICAgdGhpcy5yZWdpc3RlcmVkRXZlbnRzID0ge307XG5cbiAgICBpZiAobWFya2VyQ2x1c3RlcmVyKSB7XG4gICAgICAvKipcbiAgICAgICAqIE1hcmtlciBDbHVzdGVyZXIgaW5zdGFuY2VcbiAgICAgICAqXG4gICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICovXG4gICAgICB0aGlzLm1hcmtlckNsdXN0ZXJlciA9IG1hcmtlckNsdXN0ZXJlci5hcHBseSh0aGlzLCBbdGhpcy5tYXBdKTtcbiAgICB9XG5cbiAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcih0aGlzLm1hcCwgJ3pvb21fY2hhbmdlZCcsIHRoaXMuaGlkZUNvbnRleHRNZW51KTtcblxuICAgIHNldHVwRXZlbnRzKHsgZXZlbnRzOiBNQVBfRVZFTlRTLCBvYmplY3Q6IHRoaXMubWFwLCBpbnN0YW5jZTogdGhpcywgaGFuZGxlcnM6IG9wdGlvbnMsIH0pO1xuXG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIodGhpcy5tYXAsICdyaWdodGNsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAob3B0aW9ucy5yaWdodGNsaWNrKSB7XG4gICAgICAgIG9wdGlvbnMucmlnaHRjbGljay5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgaWYgKEdNYXBzLmNvbnRleHRNZW51c1t0aGlzLmlkXS5tYXApIHtcbiAgICAgICAgdGhpcy5idWlsZENvbnRleHRNZW51KCdtYXAnLCBldmVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBidWlsZENvbnRleHRNZW51SFRNTChjb250cm9sLCBldmVudCkge1xuICAgIGlmICghZ2V0RWxlbWVudEJ5SWQoR01BUFNfTUVOVV9JRCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZXh0TWVudUVsZW1lbnQgPSBnZXRFbGVtZW50QnlJZChHTUFQU19NRU5VX0lEKTtcbiAgICBjb25zdCBvcHRpb25zID0gR01hcHMuY29udGV4dE1lbnVzW3RoaXMuaWRdW2NvbnRyb2xdO1xuXG4gICAgY29uc3QgaHRtbCA9IE9iamVjdC5rZXlzKG9wdGlvbnMpLm1hcChrZXkgPT5cbiAgICAgIGA8bGk+PGEgaWQ9XCIke2NvbnRyb2x9XyR7a2V5fVwiIGhyZWY9XCIjXCI+JHtvcHRpb25zW2tleV0udGl0bGV9PC9hPjwvbGk+YFxuICAgICkuam9pbignJyk7XG5cbiAgICBjb250ZXh0TWVudUVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDtcblxuICAgIGNvbnN0IGNvbnRleHRNZW51SXRlbXMgPSBjb250ZXh0TWVudUVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2EnKTtcblxuICAgIFsuLi5jb250ZXh0TWVudUl0ZW1zXS5mb3JFYWNoKChjb250ZXh0TWVudUl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGNvbnRleHRNZW51SXRlbUxpc3RlbmVyID0gKGNvbnRleHRNZW51SXRlbUxpc3RlbmVyRXZlbnQpID0+IHtcbiAgICAgICAgY29udGV4dE1lbnVJdGVtTGlzdGVuZXJFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIG9wdGlvbnNbY29udGV4dE1lbnVJdGVtTGlzdGVuZXJFdmVudC50YXJnZXQuaWQucmVwbGFjZShgJHtjb250cm9sfV9gLCAnJyldLmFjdGlvbi5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgdGhpcy5oaWRlQ29udGV4dE1lbnUoKTtcbiAgICAgIH07XG5cbiAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmNsZWFyTGlzdGVuZXJzKGNvbnRleHRNZW51SXRlbSwgJ2NsaWNrJyk7XG4gICAgICBnb29nbGUubWFwcy5ldmVudC5hZGREb21MaXN0ZW5lck9uY2UoY29udGV4dE1lbnVJdGVtLCAnY2xpY2snLCBjb250ZXh0TWVudUl0ZW1MaXN0ZW5lciwgZmFsc2UpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcG9zaXRpb24gPSBmaW5kQWJzb2x1dGVQb3NpdGlvbih0aGlzLmVsZW1lbnQpO1xuICAgIGNvbnN0IGxlZnQgPSBwb3NpdGlvblswXSArIGV2ZW50LnBpeGVsLnggLSAxNTtcbiAgICBjb25zdCB0b3AgPSBwb3NpdGlvblsxXSArIGV2ZW50LnBpeGVsLnkgLSAxNTtcblxuICAgIGNvbnRleHRNZW51RWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7bGVmdH1weGA7XG4gICAgY29udGV4dE1lbnVFbGVtZW50LnN0eWxlLnRvcCA9IGAke3RvcH1weGA7XG4gIH1cblxuICBidWlsZENvbnRleHRNZW51KGNvbnRyb2wsIGV2ZW50KSB7XG4gICAgaWYgKGNvbnRyb2wgPT09ICdtYXJrZXInKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIGV2ZW50LnBpeGVsID0ge307XG5cbiAgICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgZ29vZ2xlLm1hcHMuT3ZlcmxheVZpZXcoKTtcbiAgICAgIG92ZXJsYXkuc2V0TWFwKHRoaXMubWFwKTtcblxuICAgICAgb3ZlcmxheS5kcmF3ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0aW9uID0gb3ZlcmxheS5nZXRQcm9qZWN0aW9uKCk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gZXZlbnQubWFya2VyLmdldFBvc2l0aW9uKCk7XG5cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIGV2ZW50LnBpeGVsID0gcHJvamVjdGlvbi5mcm9tTGF0TG5nVG9Db250YWluZXJQaXhlbChwb3NpdGlvbik7XG5cbiAgICAgICAgdGhpcy5idWlsZENvbnRleHRNZW51SFRNTChjb250cm9sLCBldmVudCk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJ1aWxkQ29udGV4dE1lbnVIVE1MKGNvbnRyb2wsIGV2ZW50KTtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZXh0TWVudUVsZW1lbnQgPSBnZXRFbGVtZW50QnlJZChHTUFQU19NRU5VX0lEKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29udGV4dE1lbnVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0sIDApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIGNvbnRleHQgbWVudSBmb3IgYSBtYXAgb3IgYSBtYXJrZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBvYmplY3Qgc2hvdWxkIGNvbnRhaW46XG4gICAqICogYGNvbnRyb2xgIChzdHJpbmcpOiBLaW5kIG9mIGNvbnRyb2wgdGhlIGNvbnRleHQgbWVudSB3aWxsIGJlIGF0dGFjaGVkLiBDYW4gYmUgXCJtYXBcIiBvciBcIm1hcmtlclwiLlxuICAgKiAqIGBvcHRpb25zYCAoYXJyYXkpOiBBIGNvbGxlY3Rpb24gb2YgY29udGV4dCBtZW51IGl0ZW1zOlxuICAgKiAgICogYHRpdGxlYCAoc3RyaW5nKTogSXRlbSdzIHRpdGxlIHNob3duIGluIHRoZSBjb250ZXh0IG1lbnUuXG4gICAqICAgKiBgbmFtZWAgKHN0cmluZyk6IEl0ZW0ncyBpZGVudGlmaWVyLlxuICAgKiAgICogYGFjdGlvbmAgKGZ1bmN0aW9uKTogRnVuY3Rpb24gdHJpZ2dlcmVkIGFmdGVyIHNlbGVjdGluZyB0aGUgY29udGV4dCBtZW51IGl0ZW0uXG4gICAqL1xuICBzZXRDb250ZXh0TWVudShvcHRpb25zKSB7XG4gICAgR01hcHMuY29udGV4dE1lbnVzW3RoaXMuaWRdW29wdGlvbnMuY29udHJvbF0gPSB7fTtcblxuICAgIE9iamVjdC5rZXlzKG9wdGlvbnMub3B0aW9ucykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBvcHRpb25zLm9wdGlvbnNba2V5XTtcblxuICAgICAgR01hcHMuY29udGV4dE1lbnVzW3RoaXMuaWRdW29wdGlvbnMuY29udHJvbF1bb3B0aW9uLm5hbWVdID0ge1xuICAgICAgICB0aXRsZTogb3B0aW9uLnRpdGxlLFxuICAgICAgICBhY3Rpb246IG9wdGlvbi5hY3Rpb24sXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgbGV0IGNvbnRleHRNZW51RWxlbWVudCA9IGdldEVsZW1lbnRCeUlkKEdNQVBTX01FTlVfSUQpO1xuXG4gICAgaWYgKCFjb250ZXh0TWVudUVsZW1lbnQpIHtcbiAgICAgIGNvbnRleHRNZW51RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICAgIGNvbnRleHRNZW51RWxlbWVudC5pZCA9IEdNQVBTX01FTlVfSUQ7XG4gICAgICBjb250ZXh0TWVudUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGNvbnRleHRNZW51RWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICBjb250ZXh0TWVudUVsZW1lbnQuc3R5bGUubWluV2lkdGggPSAnMTAwcHgnO1xuICAgICAgY29udGV4dE1lbnVFbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSAnd2hpdGUnO1xuICAgICAgY29udGV4dE1lbnVFbGVtZW50LnN0eWxlLmxpc3RTdHlsZSA9ICdub25lJztcbiAgICAgIGNvbnRleHRNZW51RWxlbWVudC5zdHlsZS5wYWRkaW5nID0gJzhweCc7XG4gICAgICBjb250ZXh0TWVudUVsZW1lbnQuc3R5bGUuYm94U2hhZG93ID0gJzJweCAycHggNnB4ICNjY2MnO1xuXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRleHRNZW51RWxlbWVudCk7XG4gICAgfVxuXG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIoY29udGV4dE1lbnVFbGVtZW50LCAnbW91c2VvdXQnLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmICghZXZlbnQucmVsYXRlZFRhcmdldCB8fCAhZXZlbnQudGFyZ2V0LmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQpKSB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjb250ZXh0TWVudUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSwgNzAwKTtcbiAgICAgIH1cbiAgICB9LCBmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogSGlkZSB0aGUgY3VycmVudCBjb250ZXh0IG1lbnVcbiAgICovXG4gIGhpZGVDb250ZXh0TWVudSgpIHtcbiAgICBjb25zdCBjb250ZXh0TWVudUVsZW1lbnQgPSBnZXRFbGVtZW50QnlJZChHTUFQU19NRU5VX0lEKTtcblxuICAgIGlmIChjb250ZXh0TWVudUVsZW1lbnQpIHtcbiAgICAgIGNvbnRleHRNZW51RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIGEgYHJlc2l6ZWAgZXZlbnQsIHVzZWZ1bCBpZiB5b3UgbmVlZCB0byByZXBhaW50IHRoZSBjdXJyZW50IG1hcCAoZm9yIGNoYW5nZXMgaW4gdGhlIHZpZXdwb3J0IG9yIGRpc3BsYXkgLyBoaWRlIGFjdGlvbnMpLlxuICAgKi9cbiAgcmVmcmVzaCgpIHtcbiAgICBnb29nbGUubWFwcy5ldmVudC50cmlnZ2VyKHRoaXMubWFwLCAncmVzaXplJyk7XG4gIH1cblxuICAvKipcbiAgICogQWRqdXN0IHRoZSBtYXAgem9vbSB0byBpbmNsdWRlIGFsbCB0aGUgY29vcmRpbmF0ZXMgaW4gdGhlIGBsYXRMbmdzYCBhcnJheS5cbiAgICpcbiAgICogQHBhcmFtIHthcnJheX0gbGF0TG5ncyAtIENvbGxlY3Rpb24gb2YgYGdvb2dsZS5tYXBzLkxhdExuZ2Agb2JqZWN0cy5cbiAgICovXG4gIGZpdExhdExuZ0JvdW5kcyhsYXRMbmdzKSB7XG4gICAgY29uc3QgYm91bmRzID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcygpO1xuXG4gICAgbGF0TG5ncy5mb3JFYWNoKGxhdExuZyA9PiBib3VuZHMuZXh0ZW5kKGxhdExuZykpO1xuXG4gICAgdGhpcy5tYXAuZml0Qm91bmRzKGJvdW5kcyk7XG4gIH1cblxuICAvKipcbiAgICogQWRqdXN0IHRoZSBtYXAgem9vbSB0byBpbmNsdWRlIGFsbCB0aGUgbWFya2VycyBhZGRlZCBpbiB0aGUgbWFwLlxuICAgKi9cbiAgZml0Wm9vbSgpIHtcbiAgICBjb25zdCBsYXRMbmdzID0gdGhpcy5tYXJrZXJzXG4gICAgICAuZmlsdGVyKG1hcmtlciA9PiBtYXJrZXIudmlzaWJsZSlcbiAgICAgIC5tYXAobWFya2VyID0+IG1hcmtlci5nZXRQb3NpdGlvbigpKTtcblxuICAgIHRoaXMuZml0TGF0TG5nQm91bmRzKGxhdExuZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIENlbnRlciB0aGUgbWFwIHVzaW5nIHRoZSBgbGF0YCBhbmQgYGxuZ2AgY29vcmRpbmF0ZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsYXRpdHVkZSAtIExhdGl0dWRlIG9mIHRoZSBjb29yZGluYXRlLiBJZiBgbGF0aXR1ZGVgIGFuZCBgbG9uZ2l0dWRlYCBhcmUgc2V0LCBgcG9zaXRpb25gIGlzIGlnbm9yZWQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsb25naXR1ZGUgLSBMb25naXR1ZGUgb2YgdGhlIGNvb3JkaW5hdGUuIElmIGBsYXRpdHVkZWAgYW5kIGBsb25naXR1ZGVgIGFyZSBzZXQsIGBwb3NpdGlvbmAgaXMgaWdub3JlZC5cbiAgICogQHBhcmFtIHtnb29nbGUubWFwcy5MYXRMbmd9IHBvc2l0aW9uIC0gQSBgZ29vZ2xlLm1hcHMuTGF0TG5nYCBjb29yZGluYXRlIGluZGljYXRlIHRoZSBwb3NpdGlvbi4gSWYgc2V0LCBgbGF0aXR1ZGVgIGFuZCBgbG9uZ2l0dWRlYCBhcmUgaWdub3JlZC5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gW2NhbGxiYWNrXSAtIENhbGxiYWNrIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBhZnRlciB0aGUgbWFwIGlzIGNlbnRlcmVkLlxuICAgKi9cbiAgc2V0Q2VudGVyKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBsYXRMbmcgPSBsYXRMbmdGcm9tQXJndW1lbnRzKC4uLmFyZ3MpO1xuICAgIGNvbnN0IGNhbGxiYWNrID0gYXJncy5zbGljZSgpLnBvcCgpO1xuXG4gICAgdGhpcy5tYXAucGFuVG8obGF0TG5nKTtcblxuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhbGxiYWNrLmNhbGwodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgSFRNTCBlbGVtZW50IGNvbnRhaW5lciBvZiB0aGUgbWFwLlxuICAgKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IHRoZSBlbGVtZW50IGNvbnRhaW5lci5cbiAgICovXG4gIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmNyZWFzZSB0aGUgbWFwJ3Mgem9vbS5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IFttYWduaXR1ZGVdIC0gVGhlIG51bWJlciBvZiB0aW1lcyB0aGUgbWFwIHdpbGwgYmUgem9vbWVkIGluLlxuICAgKi9cbiAgem9vbUluKG1hZ25pdHVkZSA9IDEpIHtcbiAgICB0aGlzLnpvb20gPSB0aGlzLm1hcC5nZXRab29tKCkgKyBtYWduaXR1ZGU7XG4gICAgdGhpcy5tYXAuc2V0Wm9vbSh0aGlzLnpvb20pO1xuICB9XG5cbiAgLyoqXG4gICAqIERlY3JlYXNlIHRoZSBtYXAncyB6b29tLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gW21hZ25pdHVkZV0gLSBUaGUgbnVtYmVyIG9mIHRpbWVzIHRoZSBtYXAgd2lsbCBiZSB6b29tZWQgb3V0LlxuICAgKi9cbiAgem9vbU91dChtYWduaXR1ZGUgPSAxKSB7XG4gICAgdGhpcy56b29tID0gdGhpcy5tYXAuZ2V0Wm9vbSgpIC0gbWFnbml0dWRlO1xuICAgIHRoaXMubWFwLnNldFpvb20odGhpcy56b29tKTtcbiAgfVxufVxuXG5HTWFwcy5jb250ZXh0TWVudXMgPSB7fTtcblxuY29uc3QgZ29vZ2xlTWFwc01hcE1ldGhvZHMgPSBPYmplY3Qua2V5cyhnb29nbGUubWFwcy5NYXAucHJvdG90eXBlKVxuICAuZmlsdGVyKGtleSA9PiAodHlwZW9mIGdvb2dsZS5tYXBzLk1hcC5wcm90b3R5cGVba2V5XSA9PT0gJ2Z1bmN0aW9uJyAmJiAhR01hcHMucHJvdG90eXBlW2tleV0pKTtcblxuZ29vZ2xlTWFwc01hcE1ldGhvZHMuZm9yRWFjaCgobWV0aG9kTmFtZSkgPT4ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICBHTWFwcy5wcm90b3R5cGVbbWV0aG9kTmFtZV0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIHJldHVybiB0aGlzLm1hcFttZXRob2ROYW1lXS5hcHBseSh0aGlzLm1hcCwgYXJncyk7XG4gIH07XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgR01hcHM7XG4iLCJpbXBvcnQgR01hcHMgZnJvbSAnLi9jb3JlJztcblxuLyoqXG4gKiBFeHRlbmRzIEdNYXBzIHRvIGJpbmQgYW5kIHRyaWdnZXIgZXZlbnRzLlxuICogQG1vZHVsZSBFdmVudHNcbiAqL1xuXG4vKipcbiAqIENvbGxlY3Rpb24gb2YgY3VzdG9tIGV2ZW50cyB0aGF0IGNhbiBiZSByZWdpc3RlcmVkIGFuZCBmaXJlZC5cbiAqXG4gKiBAdHlwZSB7YXJyYXl9XG4gKi9cbkdNYXBzLmN1c3RvbUV2ZW50cyA9IFsnbWFya2VyX2FkZGVkJywgJ21hcmtlcl9yZW1vdmVkJywgJ3BvbHlsaW5lX2FkZGVkJywgJ3BvbHlsaW5lX3JlbW92ZWQnLCAncG9seWdvbl9hZGRlZCcsICdwb2x5Z29uX3JlbW92ZWQnLCAnbGF5ZXJfYWRkZWQnLCAnbGF5ZXJfcmVtb3ZlZCcsICdvdmVybGF5X21hcF90eXBlX2FkZGVkJywgJ292ZXJsYXlfbWFwX3R5cGVfcmVtb3ZlZCcsICdvdmVybGF5X2FkZGVkJywgJ292ZXJsYXlfcmVtb3ZlZCcsICdnZW9sb2NhdGVkJywgJ2dlb2xvY2F0aW9uX2ZhaWxlZCddO1xuXG4vKipcbiAqIEFkZCBhbiBldmVudCAobmF0aXZlIG9yIGN1c3RvbSkgdG8gYW4gb2JqZWN0LlxuICogQGZ1bmN0aW9uIG9uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudC4gSXQgY2FuIGJlIGFueSBvZiB0aGUgbmF0aXZlIGV2ZW50cyBmcm9tIEdvb2dsZSBNYXBzLCBvciB0aGUgb25lcyBkZXNjcmliZWQgaW4gYEdNYXBzLmN1c3RvbUV2ZW50c2AuXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0IC0gVGhlIHRhcmdldCBvZiB0aGUgZXZlbnQuIEl0IGNhbiBiZSBhIG5hdGl2ZSBvYmplY3QgZnJvbSBHb29nbGUgTWFwcywgKHN1Y2ggYXMgYSBnb29nbGUubWFwcy5NYXAsIGdvb2dsZS5tYXBzLk1hcmtlciwgZXRjLiksIG9yIGEgR01hcHMgaW5zdGFuY2UuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyIC0gVGhlIGhhbmRsZXIgKG9mdGVuIGNhbGxlZCBsaXN0ZW5lcikgb2YgdGhlIGV2ZW50LiBJcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBldmVyeSB0aW1lIHRoZSBldmVudCBpcyBmaXJlZC5cbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5HTWFwcy5vbiA9IChldmVudE5hbWUsIG9iamVjdCwgaGFuZGxlcikgPT4ge1xuICBsZXQgdGFyZ2V0ID0gb2JqZWN0O1xuXG4gIGlmIChHTWFwcy5jdXN0b21FdmVudHMuaW5kZXhPZihldmVudE5hbWUpID09PSAtMSkge1xuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBHTWFwcykge1xuICAgICAgdGFyZ2V0ID0gdGFyZ2V0Lm1hcDtcbiAgICB9XG5cbiAgICByZXR1cm4gZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIodGFyZ2V0LCBldmVudE5hbWUsIGhhbmRsZXIpO1xuICB9XG5cbiAgY29uc3QgcmVnaXN0ZXJlZEV2ZW50ID0ge1xuICAgIGhhbmRsZXIsXG4gICAgZXZlbnROYW1lLFxuICB9O1xuXG4gIHRhcmdldC5yZWdpc3RlcmVkRXZlbnRzW2V2ZW50TmFtZV0gPSB0YXJnZXQucmVnaXN0ZXJlZEV2ZW50c1tldmVudE5hbWVdIHx8IFtdO1xuICB0YXJnZXQucmVnaXN0ZXJlZEV2ZW50c1tldmVudE5hbWVdLnB1c2gocmVnaXN0ZXJlZEV2ZW50KTtcblxuICByZXR1cm4gcmVnaXN0ZXJlZEV2ZW50O1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gZXZlbnQgKG5hdGl2ZSBvciBjdXN0b20pIHRvIGFuIG9iamVjdC5cbiAqIEBmdW5jdGlvbiBvZmZcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50LiBJdCBjYW4gYmUgYW55IG9mIHRoZSBuYXRpdmUgZXZlbnRzIGZyb20gR29vZ2xlIE1hcHMsIG9yIHRoZSBvbmVzIGRlc2NyaWJlZCBpbiBgR01hcHMuY3VzdG9tRXZlbnRzYC5cbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXQgLSBUaGUgdGFyZ2V0IG9mIHRoZSBldmVudC4gSXQgY2FuIGJlIGEgbmF0aXZlIG9iamVjdCBmcm9tIEdvb2dsZSBNYXBzLCAoc3VjaCBhcyBhIGdvb2dsZS5tYXBzLk1hcCwgZ29vZ2xlLm1hcHMuTWFya2VyLCBldGMuKSwgb3IgYSBHTWFwcyBpbnN0YW5jZS5cbiAqL1xuR01hcHMub2ZmID0gKGV2ZW50TmFtZSwgb2JqZWN0KSA9PiB7XG4gIGxldCB0YXJnZXQgPSBvYmplY3Q7XG5cbiAgaWYgKEdNYXBzLmN1c3RvbUV2ZW50cy5pbmRleE9mKGV2ZW50TmFtZSkgPT09IC0xKSB7XG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEdNYXBzKSB7XG4gICAgICB0YXJnZXQgPSB0YXJnZXQubWFwO1xuICAgIH1cblxuICAgIGdvb2dsZS5tYXBzLmV2ZW50LmNsZWFyTGlzdGVuZXJzKHRhcmdldCwgZXZlbnROYW1lKTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQucmVnaXN0ZXJlZEV2ZW50c1tldmVudE5hbWVdID0gW107XG4gIH1cbn07XG5cbi8qKlxuICogQWRkIGEgbmF0aXZlIGV2ZW50IHRoYXQgd2lsbCBiZSByZW1vdmVkIGZyb20gdGhlIHRhcmdldCBhZnRlciBpdCBoYXMgYmVlbiBleGVjdXRlZCBvbmNlLlxuICogQGZ1bmN0aW9uIG9uY2VcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50LiBJdCBoYXMgdG8gYmUgYW55IG9mIHRoZSBuYXRpdmUgZXZlbnRzIGZyb20gR29vZ2xlIE1hcHMuXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0IC0gVGhlIHRhcmdldCBvZiB0aGUgZXZlbnQuIEl0IGhhcyB0byBiZSBhIG5hdGl2ZSBvYmplY3QgZnJvbSBHb29nbGUgTWFwcywgc3VjaCBhcyBhIGdvb2dsZS5tYXBzLk1hcCwgZ29vZ2xlLm1hcHMuTWFya2VyLCBldGMuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyIC0gVGhlIGhhbmRsZXIgKG9mdGVuIGNhbGxlZCBsaXN0ZW5lcikgb2YgdGhlIGV2ZW50LiBJcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBleGVjdXRlZCB3aGVuIHRoZSBldmVudCBpcyBmaXJlZCB0aGUgZmlyc3QgdGltZS5cbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5HTWFwcy5vbmNlID0gKGV2ZW50TmFtZSwgb2JqZWN0LCBoYW5kbGVyKSA9PiB7XG4gIGxldCB0YXJnZXQgPSBvYmplY3Q7XG5cbiAgaWYgKEdNYXBzLmN1c3RvbUV2ZW50cy5pbmRleE9mKGV2ZW50TmFtZSkgPT09IC0xKSB7XG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEdNYXBzKSB7XG4gICAgICB0YXJnZXQgPSB0YXJnZXQubWFwO1xuICAgIH1cblxuICAgIHJldHVybiBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lck9uY2UodGFyZ2V0LCBldmVudE5hbWUsIGhhbmRsZXIpO1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbi8qKlxuICogVHJpZ2dlciBhbiBldmVudCAobmF0aXZlIG9yIGN1c3RvbSkgYW5kIGV4ZWN1dGUgYWxsIHRoZSBoYW5kbGVycyByZWdpc3RlcmVkIHByZXZpb3VzbHkuXG4gKiBAZnVuY3Rpb24gZmlyZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnQuIEl0IGNhbiBiZSBhbnkgb2YgdGhlIG5hdGl2ZSBldmVudHMgZnJvbSBHb29nbGUgTWFwcywgb3IgdGhlIG9uZXMgZGVzY3JpYmVkIGluIGBHTWFwcy5jdXN0b21FdmVudHNgLlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldCAtIFRoZSB0YXJnZXQgb2YgdGhlIGV2ZW50LiBJdCBjYW4gYmUgYSBuYXRpdmUgb2JqZWN0IGZyb20gR29vZ2xlIE1hcHMsIChzdWNoIGFzIGEgZ29vZ2xlLm1hcHMuTWFwLCBnb29nbGUubWFwcy5NYXJrZXIsIGV0Yy4pLCBvciBhIEdNYXBzIGluc3RhbmNlLlxuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgLSBUaGUgY29udGV4dCBmb3IgdGhlIGV2ZW50IGhhbmRsZXIgKHJlcHJlc2VudGVkIGJ5IGB0aGlzYCBrZXl3b3JkIGluc2lkZSB0aGUgaGFuZGxlcikuXG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xuR01hcHMuZmlyZSA9IChldmVudE5hbWUsIG9iamVjdCwgY29udGV4dCkgPT4ge1xuICBpZiAoR01hcHMuY3VzdG9tRXZlbnRzLmluZGV4T2YoZXZlbnROYW1lKSA9PT0gLTEpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBjb25zdCBldmVudEFyZ3VtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShhcmd1bWVudHMpLnNsaWNlKDIpO1xuICAgIGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIob2JqZWN0LCBldmVudE5hbWUsIGV2ZW50QXJndW1lbnRzKTtcbiAgfSBlbHNlIGlmIChldmVudE5hbWUgaW4gY29udGV4dC5yZWdpc3RlcmVkRXZlbnRzKSB7XG4gICAgY29udGV4dC5yZWdpc3RlcmVkRXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChyZWdpc3RlcmVkRXZlbnQgPT5cbiAgICAgIHJlZ2lzdGVyZWRFdmVudC5oYW5kbGVyLmNhbGwoY29udGV4dCwgb2JqZWN0KVxuICAgICk7XG4gIH1cbn07XG5cbkdNYXBzLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIG9uKGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICByZXR1cm4gR01hcHMub24oZXZlbnROYW1lLCB0aGlzLCBoYW5kbGVyKTtcbn07XG5cbkdNYXBzLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbiBvZmYoZXZlbnROYW1lKSB7XG4gIEdNYXBzLm9mZihldmVudE5hbWUsIHRoaXMpO1xufTtcblxuR01hcHMucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICByZXR1cm4gR01hcHMub25jZShldmVudE5hbWUsIHRoaXMsIGhhbmRsZXIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR01hcHM7XG4iLCJpbXBvcnQgR01hcHMsIHsgbGF0TG5nRnJvbUFyZ3VtZW50cyB9IGZyb20gJy4vY29yZSc7XG5pbXBvcnQgJy4vcG9seWZpbGxzJztcblxuLyoqXG4gKiBFeHRlbmRzIEdNYXBzIHRvIHVzZSBnZW9mZW5jZXMuXG4gKiBAbW9kdWxlIEdlb2ZlbmNlc1xuICovXG5cbi8qKlxuICogQ2hlY2sgaWYgYSBjb29yZGluYXRlIGlzIGluc2lkZSBvciBub3QgYSBnZW9mZW5jZS5cbiAqIEBmdW5jdGlvbiBjaGVja0dlb2ZlbmNlXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGxhdExuZyAtIEEgTGF0TG5nTGl0ZXJhbCBvYmplY3QgKGEgcGxhaW4gb2JqZWN0IHdpdGggYGxhdGAgYW5kIGBsbmdgIHByb3BlcnRpZXMpLlxuICogQHBhcmFtIHtvYmplY3R9IGZlbmNlIC0gQSBmZW5jZSBvYmplY3QsIHdoaWNoIGNhbiBiZSBhbiBpbnN0YW5jZSBvZiBgZ29vZ2xlLm1hcHMuUG9seWdvbmAsIGBnb29nbGUubWFwcy5DaXJjbGVgLCBgZ29vZ2xlLm1hcHMuUmVjdGFuZ2xlYCBvciBgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzYC5cbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gSXMgYHRydWVgIGlmIHRoZSBjb29yZGluYXRlIGlzIGluc2lkZSB0aGUgZmVuY2UsIGFuZCBgZmFsc2VgIGlmIGlzIG5vdC5cbiAqL1xuR01hcHMucHJvdG90eXBlLmNoZWNrR2VvZmVuY2UgPSBmdW5jdGlvbiBjaGVja0dlb2ZlbmNlKC4uLmFyZ3MpIHtcbiAgY29uc3QgbGFnTG5nID0gbGF0TG5nRnJvbUFyZ3VtZW50cyguLi5hcmdzKTtcbiAgY29uc3QgZmVuY2UgPSBhcmdzLnBvcCgpO1xuXG4gIHJldHVybiBmZW5jZS5jb250YWluc0xhdExuZyhsYWdMbmcpO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBhIG1hcmtlcidzIHBvc2l0aW9uIGlzIGluc2lkZSBvciBub3QgYW55IG9mIGl0cyBnZW9mZW5jZXMuIEl0IHdpbGwgdHJpZ2dlciB0aGUgYG91dHNpZGVDYWxsYmFja2AgZnVuY3Rpb24gZm9yIGV2ZXJ5IGZlbmNlIHRoYXQgY29udGFpbnMgdGhlIG1hcmtlcidzIHBvc2l0aW9uLlxuICogQGZ1bmN0aW9uIGNoZWNrTWFya2VyR2VvZmVuY2VcbiAqXG4gKiBAcGFyYW0ge2dvb2dsZS5tYXBzLk1hcmtlcn0gbWFya2VyIC0gQSBtYXJrZXIgYWRkZWQgd2l0aCBgR01hcHMjYWRkTWFya2VyYC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG91dHNpZGVDYWxsYmFjayAtIEEgZnVuY3Rpb24gdGhhdCB3aWxsIHJlY2VpdmUgdHdvIGFyZ3VtZW50czogdGhlIGBtYXJrZXJgIGFuZCB0aGUgY3VycmVudCBmZW5jZS5cbiAqL1xuR01hcHMucHJvdG90eXBlLmNoZWNrTWFya2VyR2VvZmVuY2UgPSBmdW5jdGlvbiBjaGVja01hcmtlckdlb2ZlbmNlKG1hcmtlciwgb3V0c2lkZUNhbGxiYWNrKSB7XG4gIGlmIChtYXJrZXIuZmVuY2VzKSB7XG4gICAgbWFya2VyLmZlbmNlcy5mb3JFYWNoKChmZW5jZSkgPT4ge1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBtYXJrZXIuZ2V0UG9zaXRpb24oKTtcblxuICAgICAgaWYgKCF0aGlzLmNoZWNrR2VvZmVuY2UocG9zaXRpb24sIGZlbmNlKSkge1xuICAgICAgICBvdXRzaWRlQ2FsbGJhY2sobWFya2VyLCBmZW5jZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXBzO1xuIiwiaW1wb3J0IEdNYXBzLCB7IHNldHVwRXZlbnRzLCBhcnJheVRvTGF0TG5nLCBmbGF0dGVuQXJyYXkgfSBmcm9tICcuL2NvcmUnO1xuaW1wb3J0ICcuL2V2ZW50cyc7XG5cbi8qKlxuICogRXh0ZW5kcyBHTWFwcyB0byB1c2UgcG9seWxpbmVzIGFuZCBwb2x5Z29ucy5cbiAqIEBtb2R1bGUgR2VvbWV0cnlcbiAqL1xuXG5jb25zdCBFVkVOVFMgPSBbJ2NsaWNrJywgJ2RibGNsaWNrJywgJ21vdXNlZG93bicsICdtb3VzZW1vdmUnLCAnbW91c2VvdXQnLCAnbW91c2VvdmVyJywgJ21vdXNldXAnLCAncmlnaHRjbGljayddO1xuXG4vKipcbiAqIERyYXcgYSBwb2x5bGluZSBpbiB0aGUgTWFwIGFuZCBhZGQgaXQgdG8gdGhlIHBvbHlsaW5lcyBjb2xsZWN0aW9uLiBUaGlzIG1ldGhvZCBhbHNvIGZpcmVzIGEgYHBvbHlsaW5lX2FkZGVkYCBldmVudC5cbiAqIEBmdW5jdGlvbiBkcmF3UG9seWxpbmVcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRoZSBgb3B0aW9uc2Agb2JqZWN0IHNob3VsZCBjb250YWluOlxuICogQHBhcmFtIHthcnJheX0gb3B0aW9ucy5wYXRoIC0gQ29sbGVjdGlvbiBvZiBjb29yZGluYXRlcyAod2hpY2ggY2FuIGJlIGVpdGhlciBhbiBhcnJheSBbbGF0LCBsbmddIG9yIGEgZ29vZ2xlLm1hcHMuTGF0TG5nIG9iamVjdCkuXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zdHJva2VDb2xvciAtIENvbG9yIG9mIHRoZSBwb2x5bGluZS4gQ2FuIGJlIGhleGFkZWNpbWFsIG9yIENTUyBuYW1lLlxuICogQHBhcmFtIHtmbG9hdH0gb3B0aW9ucy5zdHJva2VPcGFjaXR5IC0gT3BhY2l0eSBvZiB0aGUgcG9seWxpbmUgZnJvbSAwLjAgdG8gMS4wLlxuICogQHBhcmFtIHtpbnRlZ2VyfSBvcHRpb25zLnN0cm9rZVdlaWdodCAtIFBvbHlsaW5lIHdpZHRoIGluIHBpeGVscy5cbiAqXG4gKiBAc2VlIGBvcHRpb25zYCBhbHNvIGFjY2VwdHMgYW55IG9wdGlvbiBkZWZpbmVkIGluIHRoZSBbb2ZmaWNpYWwgZG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI1BvbHlsaW5lT3B0aW9ucykgYW5kIGFueSBldmVudCBkZWZpbmVkIGluIHRoZSBbXCJFdmVudHNcIiBzZWN0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjUG9seWxpbmUpLlxuICpcbiAqIEByZXR1cm5zIHtnb29nbGUubWFwcy5Qb2x5bGluZX1cbiAqL1xuR01hcHMucHJvdG90eXBlLmRyYXdQb2x5bGluZSA9IGZ1bmN0aW9uIGRyYXdQb2x5bGluZShiYXNlT3B0aW9ucykge1xuICBjb25zdCB7IGljb25zLCBzdHJva2VDb2xvciwgc3Ryb2tlT3BhY2l0eSwgc3Ryb2tlV2VpZ2h0LCBnZW9kZXNpYywgY2xpY2thYmxlID0gdHJ1ZSwgZWRpdGFibGUgPSBmYWxzZSwgdmlzaWJsZSA9IHRydWUsIHpJbmRleCwgLi4ub3B0aW9ucyB9ID0gYmFzZU9wdGlvbnM7XG4gIGxldCBwYXRoID0gW107XG5cbiAgaWYgKG9wdGlvbnMucGF0aC5sZW5ndGgpIHtcbiAgICBpZiAob3B0aW9ucy5wYXRoWzBdWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHBhdGggPSBbLi4ub3B0aW9ucy5wYXRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGF0aCA9IG9wdGlvbnMucGF0aC5tYXAobGF0TG5nID0+XG4gICAgICAgIG5ldyBnb29nbGUubWFwcy5MYXRMbmcobGF0TG5nWzBdLCBsYXRMbmdbMV0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHBvbHlsaW5lT3B0aW9ucyA9IHtcbiAgICAuLi5vcHRpb25zLFxuICAgIG1hcDogdGhpcy5tYXAsXG4gICAgcGF0aCxcbiAgICBzdHJva2VDb2xvcixcbiAgICBzdHJva2VPcGFjaXR5LFxuICAgIHN0cm9rZVdlaWdodCxcbiAgICBnZW9kZXNpYyxcbiAgICB2aXNpYmxlLFxuICAgIGNsaWNrYWJsZSxcbiAgICBlZGl0YWJsZSxcbiAgICBpY29ucyxcbiAgICB6SW5kZXgsXG4gIH07XG5cbiAgY29uc3QgcG9seWxpbmUgPSBuZXcgZ29vZ2xlLm1hcHMuUG9seWxpbmUocG9seWxpbmVPcHRpb25zKTtcblxuICBzZXR1cEV2ZW50cyh7IGV2ZW50czogRVZFTlRTLCBvYmplY3Q6IHBvbHlsaW5lLCBpbnN0YW5jZTogdGhpcywgaGFuZGxlcnM6IG9wdGlvbnMsIH0pO1xuXG4gIHRoaXMucG9seWxpbmVzLnB1c2gocG9seWxpbmUpO1xuXG4gIEdNYXBzLmZpcmUoJ3BvbHlsaW5lX2FkZGVkJywgcG9seWxpbmUsIHRoaXMpO1xuXG4gIHJldHVybiBwb2x5bGluZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGEgcG9seWxpbmUgZnJvbSB0aGUgbWFwIGFuZCBmcm9tIHRoZSBwb2x5bGluZXMgY29sbGVjdGlvbi4gVGhpcyBtZXRob2QgYWxzbyBmaXJlcyBhIGBwb2x5bGluZV9yZW1vdmVkYCBldmVudC5cbiAqIEBmdW5jdGlvbiByZW1vdmVQb2x5bGluZVxuICpcbiAqIEBwYXJhbSB7Z29vZ2xlLm1hcHMuUG9seWxpbmV9IHBvbHlsaW5lIC0gVGhlIHBvbHlsaW5lIHRvIGJlIHJlbW92ZWQuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5yZW1vdmVQb2x5bGluZSA9IGZ1bmN0aW9uIHJlbW92ZVBvbHlsaW5lKHBvbHlsaW5lKSB7XG4gIGNvbnN0IHBvbHlsaW5lSW5kZXggPSB0aGlzLnBvbHlsaW5lcy5pbmRleE9mKHBvbHlsaW5lKTtcblxuICBpZiAocG9seWxpbmVJbmRleCA+PSAwKSB7XG4gICAgcG9seWxpbmUuc2V0TWFwKG51bGwpO1xuICAgIHRoaXMucG9seWxpbmVzLnNwbGljZShwb2x5bGluZUluZGV4LCAxKTtcblxuICAgIEdNYXBzLmZpcmUoJ3BvbHlsaW5lX3JlbW92ZWQnLCBwb2x5bGluZSwgdGhpcyk7XG4gIH1cbn07XG5cbi8qKlxuICogUmVtb3ZlIGFsbCB0aGUgcG9seWxpbmVzIGZyb20gdGhlIG1hcCBhbmQgY2xlYXIgdGhlIHBvbHlsaW5lcyBjb2xsZWN0aW9uLiBUaGlzIG1ldGhvZCBkb2VzIG5vdCBmaXJlIGEgYHBvbHlsaW5lX3JlbW92ZWRgIGV2ZW50LlxuICogQGZ1bmN0aW9uIHJlbW92ZVBvbHlsaW5lc1xuICovXG5HTWFwcy5wcm90b3R5cGUucmVtb3ZlUG9seWxpbmVzID0gZnVuY3Rpb24gcmVtb3ZlUG9seWxpbmVzKCkge1xuICB0aGlzLnBvbHlsaW5lcy5mb3JFYWNoKHBvbHlsaW5lID0+IHBvbHlsaW5lLnNldE1hcChudWxsKSk7XG5cbiAgdGhpcy5wb2x5bGluZXMgPSBbXTtcbn07XG5cbi8qKlxuICogRHJhdyBhIGNpcmNsZSBpbiB0aGUgTWFwIGFuZCBpdCB0byB0aGUgcG9seWdvbnMgY29sbGVjdGlvbi5cbiAqIEBmdW5jdGlvbiBkcmF3Q2lyY2xlXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgYG9wdGlvbnNgIG9iamVjdCBzaG91bGQgY29udGFpbjpcbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLmxhdGl0dWRlIC0gTGF0aXR1ZGUgb2YgdGhlIGNlbnRlci4gSWYgYGxhdGl0dWRlYCBhbmQgYGxvbmdpdHVkZWAgYXJlIHNldCwgYGNlbnRlcmBpcyBpZ25vcmVkLlxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMubG9uZ2l0dWRlIC0gTG9uZ2l0dWRlIG9mIHRoZSBjZW50ZXIuIElmIGBsYXRpdHVkZWAgYW5kIGBsb25naXR1ZGVgIGFyZSBzZXQsIGBjZW50ZXJgaXMgaWdub3JlZC5cbiAqIEBwYXJhbSB7Z29vZ2xlLm1hcHMuTGF0TG5nfSBvcHRpb25zLmNlbnRlciAtIEEgYGdvb2dsZS5tYXBzLkxhdExuZ2AgY29vcmRpbmF0ZSBpbmRpY2F0ZSB0aGUgY2VudGVyLiBJZiBzZXQsIGBsYXRpdHVkZWAgYW5kIGBsb25naXR1ZGVgIGFyZSBpZ25vcmVkLlxuICpcbiAqIEBzZWUgYG9wdGlvbnNgIGFsc28gYWNjZXB0cyBhbnkgb3B0aW9uIGRlZmluZWQgaW4gdGhlIFtvZmZpY2lhbCBkb2N1bWVudGF0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjQ2lyY2xlT3B0aW9ucykgYW5kIGFueSBldmVudCBkZWZpbmVkIGluIHRoZSBbXCJFdmVudHNcIiBzZWN0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjQ2lyY2xlKS5cbiAqXG4gKiBAcmV0dXJucyB7Z29vZ2xlLm1hcHMuQ2lyY2xlfVxuICovXG5HTWFwcy5wcm90b3R5cGUuZHJhd0NpcmNsZSA9IGZ1bmN0aW9uIGRyYXdDaXJjbGUoYmFzZU9wdGlvbnMpIHtcbiAgY29uc3QgeyBsYXQsIGxhdGl0dWRlID0gbGF0LCBsbmcsIGxvbmdpdHVkZSA9IGxuZywgLi4ub3B0aW9ucyB9ID0gYmFzZU9wdGlvbnM7XG4gIGNvbnN0IHsgY2VudGVyID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsYXRpdHVkZSwgbG9uZ2l0dWRlKSwgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHBvbHlnb25PcHRpb25zID0ge1xuICAgIC4uLm9wdGlvbnMsXG4gICAgbWFwOiB0aGlzLm1hcCxcbiAgICBjZW50ZXIsXG4gIH07XG5cbiAgY29uc3QgcG9seWdvbiA9IG5ldyBnb29nbGUubWFwcy5DaXJjbGUocG9seWdvbk9wdGlvbnMpO1xuXG4gIHNldHVwRXZlbnRzKHsgZXZlbnRzOiBFVkVOVFMsIG9iamVjdDogcG9seWdvbiwgaW5zdGFuY2U6IHRoaXMsIGhhbmRsZXJzOiBvcHRpb25zLCB9KTtcblxuICB0aGlzLnBvbHlnb25zLnB1c2gocG9seWdvbik7XG5cbiAgcmV0dXJuIHBvbHlnb247XG59O1xuXG4vKipcbiAqIERyYXcgYSByZWN0YW5nbGUgaW4gdGhlIE1hcCBhbmQgaXQgdG8gdGhlIHBvbHlnb25zIGNvbGxlY3Rpb24uXG4gKiBAZnVuY3Rpb24gZHJhd1JlY3RhbmdsZVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBvYmplY3Qgc2hvdWxkIGNvbnRhaW46XG4gKiBAcGFyYW0ge2FycmF5fSBvcHRpb25zLmJvdW5kcyAtIEJpLWRpbWVuc2lvbmFsIGFycmF5IG9mIGxhdGl0dWRlcyBhbmQgbG9uZ2l0dWRlcy5cbiAqXG4gKiBAc2VlIGBvcHRpb25zYCBhbHNvIGFjY2VwdHMgYW55IG9wdGlvbiBkZWZpbmVkIGluIHRoZSBbb2ZmaWNpYWwgZG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI1JlY3RhbmdsZU9wdGlvbnMpIGFuZCBhbnkgZXZlbnQgZGVmaW5lZCBpbiB0aGUgW1wiRXZlbnRzXCIgc2VjdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI1JlY3RhbmdsZSkuXG4gKlxuICogQHJldHVybnMge2dvb2dsZS5tYXBzLlJlY3RhbmdsZX1cbiAqL1xuR01hcHMucHJvdG90eXBlLmRyYXdSZWN0YW5nbGUgPSBmdW5jdGlvbiBkcmF3UmVjdGFuZ2xlKGJhc2VPcHRpb25zKSB7XG4gIGNvbnN0IHsgYm91bmRzLCAuLi5vcHRpb25zIH0gPSBiYXNlT3B0aW9ucztcblxuICBjb25zdCBsYXRMbmdCb3VuZHMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKFxuICAgIG5ldyBnb29nbGUubWFwcy5MYXRMbmcoYm91bmRzWzBdWzBdLCBib3VuZHNbMF1bMV0pLFxuICAgIG5ldyBnb29nbGUubWFwcy5MYXRMbmcoYm91bmRzWzFdWzBdLCBib3VuZHNbMV1bMV0pXG4gICk7XG5cbiAgY29uc3QgcG9seWdvbk9wdGlvbnMgPSB7XG4gICAgLi4ub3B0aW9ucyxcbiAgICBib3VuZHM6IGxhdExuZ0JvdW5kcyxcbiAgICBtYXA6IHRoaXMubWFwLFxuICB9O1xuXG4gIGNvbnN0IHBvbHlnb24gPSBuZXcgZ29vZ2xlLm1hcHMuUmVjdGFuZ2xlKHBvbHlnb25PcHRpb25zKTtcblxuICBzZXR1cEV2ZW50cyh7IGV2ZW50czogRVZFTlRTLCBvYmplY3Q6IHBvbHlnb24sIGluc3RhbmNlOiB0aGlzLCBoYW5kbGVyczogb3B0aW9ucywgfSk7XG5cbiAgdGhpcy5wb2x5Z29ucy5wdXNoKHBvbHlnb24pO1xuXG4gIHJldHVybiBwb2x5Z29uO1xufTtcblxuLyoqXG4gKiBEcmF3IGEgcG9seWdvbiBpbiB0aGUgTWFwIGFuZCBpdCB0byB0aGUgcG9seWdvbnMgY29sbGVjdGlvbi5cbiAqIEBmdW5jdGlvbiBkcmF3UG9seWdvblxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBvYmplY3Qgc2hvdWxkIGNvbnRhaW46XG4gKiBAcGFyYW0ge2FycmF5fSBvcHRpb25zLnBhdGhzIC0gQmktZGltZW5zaW9uYWwgYXJyYXkgb2YgbGF0aXR1ZGVzIGFuZCBsb25naXR1ZGVzLlxuICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLnVzZUdlb0pTT04gLSBJZiBzZXQsIGFsbG93cyBgcGF0aHNgIHRvIHVzZSBHZW9KU09OIGZvcm1hdC5cbiAqXG4gKiBAc2VlIGBvcHRpb25zYCBhbHNvIGFjY2VwdHMgYW55IG9wdGlvbiBkZWZpbmVkIGluIHRoZSBbb2ZmaWNpYWwgZG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI1BvbHlnb25PcHRpb25zKSBhbmQgYW55IGV2ZW50IGRlZmluZWQgaW4gdGhlIFtcIkV2ZW50c1wiIHNlY3Rpb25dKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNQb2x5Z29uKS5cbiAqXG4gKiBAcmV0dXJucyB7Z29vZ2xlLm1hcHMuUG9seWdvbn1cbiAqL1xuR01hcHMucHJvdG90eXBlLmRyYXdQb2x5Z29uID0gZnVuY3Rpb24gZHJhd1BvbHlnb24oYmFzZU9wdGlvbnMpIHtcbiAgY29uc3QgeyB1c2VHZW9KU09OID0gZmFsc2UsIC4uLm9wdGlvbnMgfSA9IGJhc2VPcHRpb25zO1xuXG4gIGNvbnN0IGJhc2VQYXRocyA9IHVzZUdlb0pTT04gPyBvcHRpb25zLnBhdGhzIDogW29wdGlvbnMucGF0aHMuc2xpY2UoMCldO1xuICBsZXQgcGF0aHMgPSBbXTtcblxuICBpZiAoYmFzZVBhdGhzLmxlbmd0aCkge1xuICAgIGlmIChiYXNlUGF0aHNbMF0ubGVuZ3RoKSB7XG4gICAgICBwYXRocyA9IGZsYXR0ZW5BcnJheShcbiAgICAgICAgYmFzZVBhdGhzLm1hcChwYXRoID0+XG4gICAgICAgICAgYXJyYXlUb0xhdExuZyhwYXRoLCB1c2VHZW9KU09OKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHBvbHlnb25PcHRpb25zID0ge1xuICAgIC4uLm9wdGlvbnMsXG4gICAgbWFwOiB0aGlzLm1hcCxcbiAgICBwYXRocyxcbiAgfTtcblxuICBjb25zdCBwb2x5Z29uID0gbmV3IGdvb2dsZS5tYXBzLlBvbHlnb24ocG9seWdvbk9wdGlvbnMpO1xuXG4gIHNldHVwRXZlbnRzKHsgZXZlbnRzOiBFVkVOVFMsIG9iamVjdDogcG9seWdvbiwgaW5zdGFuY2U6IHRoaXMsIGhhbmRsZXJzOiBvcHRpb25zLCB9KTtcblxuICB0aGlzLnBvbHlnb25zLnB1c2gocG9seWdvbik7XG5cbiAgR01hcHMuZmlyZSgncG9seWdvbl9hZGRlZCcsIHBvbHlnb24sIHRoaXMpO1xuXG4gIHJldHVybiBwb2x5Z29uO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYSBwb2x5Z29uIGZyb20gdGhlIG1hcCBhbmQgZnJvbSB0aGUgcG9seWdvbnMgY29sbGVjdGlvbi4gVGhpcyBtZXRob2QgYWxzbyBmaXJlcyBhIGBwb2x5Z29uX3JlbW92ZWRgIGV2ZW50LlxuICogQGZ1bmN0aW9uIHJlbW92ZVBvbHlnb25cbiAqXG4gKiBAcGFyYW0ge2dvb2dsZS5tYXBzLlBvbHlnb259IHBvbHlnb24gLSBUaGUgcG9seWdvbiB0byBiZSByZW1vdmVkLlxuICovXG5HTWFwcy5wcm90b3R5cGUucmVtb3ZlUG9seWdvbiA9IGZ1bmN0aW9uIHJlbW92ZVBvbHlnb24ocG9seWdvbikge1xuICBjb25zdCBwb2x5Z29uSW5kZXggPSB0aGlzLnBvbHlnb25zLmluZGV4T2YocG9seWdvbik7XG5cbiAgaWYgKHBvbHlnb25JbmRleCA+PSAwKSB7XG4gICAgcG9seWdvbi5zZXRNYXAobnVsbCk7XG4gICAgdGhpcy5wb2x5Z29ucy5zcGxpY2UocG9seWdvbkluZGV4LCAxKTtcblxuICAgIEdNYXBzLmZpcmUoJ3BvbHlnb25fcmVtb3ZlZCcsIHBvbHlnb24sIHRoaXMpO1xuICB9XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbGwgdGhlIHBvbHlnb25zIGZyb20gdGhlIG1hcCBhbmQgY2xlYXIgdGhlIHBvbHlnb25zIGNvbGxlY3Rpb24uIFRoaXMgbWV0aG9kIGRvZXMgbm90IGZpcmUgYSBgcG9seWdvbl9yZW1vdmVkYCBldmVudC5cbiAqIEBmdW5jdGlvbiByZW1vdmVQb2x5Z29uc1xuICovXG5HTWFwcy5wcm90b3R5cGUucmVtb3ZlUG9seWdvbnMgPSBmdW5jdGlvbiByZW1vdmVQb2x5Z29ucygpIHtcbiAgdGhpcy5wb2x5Z29ucy5mb3JFYWNoKHBvbHlnb24gPT4gcG9seWdvbi5zZXRNYXAobnVsbCkpO1xuXG4gIHRoaXMucG9seWdvbnMgPSBbXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXBzO1xuIiwiaW1wb3J0IEdNYXBzIGZyb20gJy4vY29yZSc7XG5pbXBvcnQgJy4vZXZlbnRzJztcbmltcG9ydCAnLi9jb250cm9scyc7XG5pbXBvcnQgJy4vZ2VvZmVuY2VzJztcbmltcG9ydCAnLi9tYXJrZXJzJztcbmltcG9ydCAnLi9vdmVybGF5cyc7XG5pbXBvcnQgJy4vZ2VvbWV0cnknO1xuaW1wb3J0ICcuL2xheWVycyc7XG5pbXBvcnQgJy4vcm91dGVzJztcbmltcG9ydCAnLi9zdGF0aWMnO1xuaW1wb3J0ICcuL21hcF90eXBlcyc7XG5pbXBvcnQgJy4vc3R5bGVzJztcbmltcG9ydCAnLi9zdHJlZXR2aWV3JztcbmltcG9ydCAnLi9wb2x5ZmlsbHMnO1xuaW1wb3J0ICcuL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgR01hcHM7XG4iLCJpbXBvcnQgR01hcHMsIHsgc2V0dXBFdmVudExpc3RlbmVyIH0gZnJvbSAnLi9jb3JlJztcbmltcG9ydCAnLi9ldmVudHMnO1xuXG4vKipcbiAqIEV4dGVuZHMgR01hcHMgdG8gdXNlIHBvbHlsaW5lcyBhbmQgcG9seWdvbnMuXG4gKiBAbW9kdWxlIExheWVyc1xuICovXG5cbkdNYXBzLnByb3RvdHlwZS5nZXRGcm9tRnVzaW9uVGFibGVzID0gZnVuY3Rpb24gZ2V0RnJvbUZ1c2lvblRhYmxlcyhiYXNlT3B0aW9ucykge1xuICBjb25zdCB7IGV2ZW50cyA9IHt9LCAuLi5vcHRpb25zIH0gPSBiYXNlT3B0aW9ucztcblxuICBjb25zdCBsYXllciA9IG5ldyBnb29nbGUubWFwcy5GdXNpb25UYWJsZXNMYXllcihvcHRpb25zKTtcblxuICBPYmplY3Qua2V5cyhldmVudHMpLmZvckVhY2goZXZlbnROYW1lID0+XG4gICAgc2V0dXBFdmVudExpc3RlbmVyKHtcbiAgICAgIG9iamVjdDogbGF5ZXIsXG4gICAgICBldmVudE5hbWUsXG4gICAgICBpbnN0YW5jZTogdGhpcyxcbiAgICAgIGhhbmRsZXI6IGV2ZW50c1tldmVudE5hbWVdLFxuICAgIH0pXG4gICk7XG5cbiAgdGhpcy5sYXllcnMucHVzaChsYXllcik7XG5cbiAgcmV0dXJuIGxheWVyO1xufTtcblxuLyoqXG4gKiBEcmF3IGEgRnVzaW9uVGFibGVzIGxheWVyIGluIHRoZSBNYXAuXG4gKiBAZnVuY3Rpb24gbG9hZEZyb21GdXNpb25UYWJsZXNcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRoZSBgb3B0aW9uc2AgYWNjZXB0cyBhbnkgb3B0aW9uIGRlZmluZWQgaW4gdGhlIFtvZmZpY2lhbCBkb2N1bWVudGF0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjRnVzaW9uVGFibGVzTGF5ZXJPcHRpb25zKS5cbiAqXG4gKiBAc2VlIGBvcHRpb25zYCBhbHNvIGFjY2VwdHMgYW4gYGV2ZW50c2Agb2JqZWN0LCB3aGljaCBhY2NlcHRzIG9ubHkgYGNsaWNrYC5cbiAqXG4gKiBAcmV0dXJucyB7Z29vZ2xlLm1hcHMuRnVzaW9uVGFibGVzTGF5ZXJ9XG4gKi9cbkdNYXBzLnByb3RvdHlwZS5sb2FkRnJvbUZ1c2lvblRhYmxlcyA9IGZ1bmN0aW9uIGxvYWRGcm9tRnVzaW9uVGFibGVzKG9wdGlvbnMpIHtcbiAgY29uc3QgbGF5ZXIgPSB0aGlzLmdldEZyb21GdXNpb25UYWJsZXMob3B0aW9ucyk7XG4gIGxheWVyLnNldE1hcCh0aGlzLm1hcCk7XG5cbiAgcmV0dXJuIGxheWVyO1xufTtcblxuR01hcHMucHJvdG90eXBlLmdldEZyb21LTUwgPSBmdW5jdGlvbiBnZXRGcm9tS01MKGJhc2VPcHRpb25zKSB7XG4gIGNvbnN0IHsgdXJsLCBldmVudHMsIC4uLm9wdGlvbnMgfSA9IGJhc2VPcHRpb25zO1xuXG4gIGNvbnN0IGxheWVyID0gbmV3IGdvb2dsZS5tYXBzLkttbExheWVyKHVybCwgb3B0aW9ucyk7XG5cbiAgT2JqZWN0LmtleXMoZXZlbnRzKS5mb3JFYWNoKGV2ZW50TmFtZSA9PlxuICAgIHNldHVwRXZlbnRMaXN0ZW5lcih7XG4gICAgICBvYmplY3Q6IGxheWVyLFxuICAgICAgZXZlbnROYW1lLFxuICAgICAgaW5zdGFuY2U6IHRoaXMsXG4gICAgICBoYW5kbGVyOiBldmVudHNbZXZlbnROYW1lXSxcbiAgICB9KVxuICApO1xuXG4gIHRoaXMubGF5ZXJzLnB1c2gobGF5ZXIpO1xuXG4gIHJldHVybiBsYXllcjtcbn07XG5cbi8qKlxuICogRHJhdyBhIEtNTCBsYXllciBpbiB0aGUgTWFwLlxuICogQGZ1bmN0aW9uIGxvYWRGcm9tS01MXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgYG9wdGlvbnNgIGFjY2VwdHMgYW55IG9wdGlvbiBkZWZpbmVkIGluIHRoZSBbb2ZmaWNpYWwgZG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI0ttbExheWVyT3B0aW9ucykuXG4gKlxuICogQHNlZSBgb3B0aW9uc2AgYWxzbyBhY2NlcHRzIGFuIGBldmVudHNgIG9iamVjdCwgd2hpY2ggYWNjZXB0cyBhbGwgZXZlbnRzIGRlZmluZWQgaW4gdGhlIFtcIkV2ZW50c1wiIHNlY3Rpb25dKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNLbWxMYXllcikuXG4gKlxuICogQHJldHVybnMge2dvb2dsZS5tYXBzLkttbExheWVyfVxuICovXG5HTWFwcy5wcm90b3R5cGUubG9hZEZyb21LTUwgPSBmdW5jdGlvbiBsb2FkRnJvbUtNTChvcHRpb25zKSB7XG4gIGNvbnN0IGxheWVyID0gdGhpcy5nZXRGcm9tS01MKG9wdGlvbnMpO1xuICBsYXllci5zZXRNYXAodGhpcy5tYXApO1xuXG4gIHJldHVybiBsYXllcjtcbn07XG5cbi8qKlxuICogRHJhdyBhIGxheWVyIGluIHRoZSBNYXAuIFRoaXMgbWV0aG9kIGFsc28gZmlyZXMgYSBgbGF5ZXJfYWRkZWRgIGV2ZW50LlxuICogQGZ1bmN0aW9uIGFkZExheWVyXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGxheWVyTmFtZSAtIFRoZSBuYW1lIG9mIGEgR29vZ2xlIE1hcHMgbGF5ZXIsIHdoaWNoIGNhbiBiZTogYHRyYWZmaWNgLCBgdHJhbnNpdGAgb3IgYGJpY3ljbGluZ2AuXG4gKlxuICogQHJldHVybnMge2dvb2dsZS5tYXBzLlRyYWZmaWNMYXllcnxnb29nbGUubWFwcy5UcmFuc2l0TGF5ZXJ8Z29vZ2xlLm1hcHMuQmljeWNsaW5nTGF5ZXJ9XG4gKi9cbkdNYXBzLnByb3RvdHlwZS5hZGRMYXllciA9IGZ1bmN0aW9uIGFkZExheWVyKGxheWVyTmFtZSwgYmFzZU9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7IGZpbHRlciwgY2xpY2ssIHNlYXJjaCwgbmVhcmJ5U2VhcmNoLCByYWRhclNlYXJjaCwgdGV4dFNlYXJjaCwgLi4ub3B0aW9ucyB9ID0gYmFzZU9wdGlvbnM7XG4gIGNvbnN0IHsgYm91bmRzLCBrZXl3b3JkLCBsb2NhdGlvbiwgbmFtZSwgcmFkaXVzLCByYW5rQnksIHR5cGVzLCBxdWVyeSwgfSA9IG9wdGlvbnM7XG4gIGxldCBsYXllcjtcblxuICBzd2l0Y2ggKGxheWVyTmFtZSkge1xuICAgIGNhc2UgJ3RyYWZmaWMnOlxuICAgICAgbGF5ZXIgPSBuZXcgZ29vZ2xlLm1hcHMuVHJhZmZpY0xheWVyKCk7XG4gICAgICB0aGlzLnNpbmdsZUxheWVycy50cmFmZmljID0gbGF5ZXI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd0cmFuc2l0JzpcbiAgICAgIGxheWVyID0gbmV3IGdvb2dsZS5tYXBzLlRyYW5zaXRMYXllcigpO1xuICAgICAgdGhpcy5zaW5nbGVMYXllcnMudHJhbnNpdCA9IGxheWVyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnYmljeWNsaW5nJzpcbiAgICAgIGxheWVyID0gbmV3IGdvb2dsZS5tYXBzLkJpY3ljbGluZ0xheWVyKCk7XG4gICAgICB0aGlzLnNpbmdsZUxheWVycy5iaWN5Y2xpbmcgPSBsYXllcjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3BsYWNlcyc6XG4gICAgICBsYXllciA9IG5ldyBnb29nbGUubWFwcy5wbGFjZXMuUGxhY2VzU2VydmljZSh0aGlzLm1hcCk7XG4gICAgICB0aGlzLnNpbmdsZUxheWVycy5wbGFjZXMgPSBsYXllcjtcblxuICAgICAgaWYgKHNlYXJjaCB8fCBuZWFyYnlTZWFyY2ggfHwgcmFkYXJTZWFyY2gpIHtcbiAgICAgICAgY29uc3QgcGxhY2VTZWFyY2hSZXF1ZXN0ID0ge1xuICAgICAgICAgIGJvdW5kcyxcbiAgICAgICAgICBrZXl3b3JkLFxuICAgICAgICAgIGxvY2F0aW9uLFxuICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgcmFkaXVzLFxuICAgICAgICAgIHJhbmtCeSxcbiAgICAgICAgICB0eXBlcyxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAocmFkYXJTZWFyY2gpIHtcbiAgICAgICAgICBsYXllci5yYWRhclNlYXJjaChwbGFjZVNlYXJjaFJlcXVlc3QsIHJhZGFyU2VhcmNoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWFyY2gpIHtcbiAgICAgICAgICBsYXllci5zZWFyY2gocGxhY2VTZWFyY2hSZXF1ZXN0LCBzZWFyY2gpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5lYXJieVNlYXJjaCkge1xuICAgICAgICAgIGxheWVyLm5lYXJieVNlYXJjaChwbGFjZVNlYXJjaFJlcXVlc3QsIG5lYXJieVNlYXJjaCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRleHRTZWFyY2gpIHtcbiAgICAgICAgY29uc3QgdGV4dFNlYXJjaFJlcXVlc3QgPSB7XG4gICAgICAgICAgYm91bmRzLFxuICAgICAgICAgIGxvY2F0aW9uLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHJhZGl1cyxcbiAgICAgICAgfTtcblxuICAgICAgICBsYXllci50ZXh0U2VhcmNoKHRleHRTZWFyY2hSZXF1ZXN0LCB0ZXh0U2VhcmNoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxuXG4gIGlmIChsYXllcikge1xuICAgIGlmICh0eXBlb2YgbGF5ZXIuc2V0T3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbGF5ZXIuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGxheWVyLnNldE1hcCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbGF5ZXIuc2V0TWFwKHRoaXMubWFwKTtcbiAgICB9XG5cbiAgICBHTWFwcy5maXJlKCdsYXllcl9hZGRlZCcsIGxheWVyLCB0aGlzKTtcblxuICAgIHJldHVybiBsYXllcjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZW1vdmUgYSBsYXllciBmcm9tIHRoZSBtYXAuIElmIHRoZSBsYXllciBpcyBhIEZ1c2lvblRhYmxlcyBsYXllciBvciBhIEtNTCBsYXllciwgYHJlbW92ZUxheWVyYCBhbHNvIHJlbW92ZXMgdGhlIGxheWVyIGZyb20gdGhlIGxheWVycyBjb2xsZWN0aW9uIGFuZCBmaXJlcyBhIGBsYXllcl9yZW1vdmVkYCBldmVudC5cbiAqIEBmdW5jdGlvbiByZW1vdmVMYXllclxuICpcbiAqIEBwYXJhbSB7Z29vZ2xlLm1hcHMuUG9seWdvbn0gcG9seWdvbiAtIFRoZSBwb2x5Z29uIHRvIGJlIHJlbW92ZWQuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5yZW1vdmVMYXllciA9IGZ1bmN0aW9uIHJlbW92ZUxheWVyKGxheWVyKSB7XG4gIGlmICh0eXBlb2YgbGF5ZXIgPT09ICdzdHJpbmcnICYmIHRoaXMuc2luZ2xlTGF5ZXJzW2xheWVyXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5zaW5nbGVMYXllcnNbbGF5ZXJdLnNldE1hcChudWxsKTtcblxuICAgIGRlbGV0ZSB0aGlzLnNpbmdsZUxheWVyc1tsYXllcl07XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbGF5ZXJJbmRleCA9IHRoaXMubGF5ZXJzLmluZGV4T2YobGF5ZXIpO1xuXG4gICAgaWYgKGxheWVySW5kZXggPj0gMCkge1xuICAgICAgbGF5ZXIuc2V0TWFwKG51bGwpO1xuICAgICAgdGhpcy5sYXllcnMuc3BsaWNlKGxheWVySW5kZXgsIDEpO1xuXG4gICAgICBHTWFwcy5maXJlKCdsYXllcl9yZW1vdmVkJywgbGF5ZXIsIHRoaXMpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgR01hcHM7XG4iLCJpbXBvcnQgR01hcHMgZnJvbSAnLi9jb3JlJztcbmltcG9ydCAnLi9ldmVudHMnO1xuXG4vKipcbiAqIEV4dGVuZHMgR01hcHMgdG8gdXNlIGN1c3RvbSBNYXAgVHlwZXMuXG4gKiBAbW9kdWxlIE1hcFR5cGVzXG4gKi9cblxuLyoqXG4gKiBEcmF3IGEgY3VzdG9tIFt0aWxlLWJhc2VkIG1hcCB0eXBlXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9tYXB0eXBlcyNJbWFnZU1hcFR5cGVzKSBpbiB0aGUgTWFwLCB3aGljaCBjYW4gYmUgdXNlZCB3aXRoIHRoZSBiYXNlIG1hcCB0eXBlcyAoYGh5YnJpZGAsIGByb2FkbWFwYCwgYHNhdGVsbGl0ZWAgYW5kIGB0ZXJyYWluYCkuXG4gKiBAZnVuY3Rpb24gYWRkTWFwVHlwZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtYXBUeXBlSWQgLSBBIHNpbXBsZSBpZGVudGlmaWVyIGZvciB0aGUgY3VzdG9tIG1hcCB0eXBlLlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgYG9wdGlvbnNgIG9iamVjdCBzaG91bGQgY29udGFpbjpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMuZ2V0VGlsZVVybCAtIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIFVSTCBmb3IgdGlsZS1iYXNlZCBlbmRwb2ludHMuIEl0IHJlY2VpdmVzIHR3byBhcmd1bWVudHM6XG4gKiAgICogYHBvaW50c2AgKGdvb2dsZS5tYXBzLlBvaW50KTogYSBwb2ludCB3aXRoIGB4YCBhbmQgYHlgIChpcyBub3QgYSBjb29yZGluYXRlKS5cbiAqICAgKiBgem9vbWAgKG51bWJlcik6IGEgem9vbSBsZXZlbC5cbiAqIEBwYXJhbSB7Z29vZ2xlLm1hcHMuU2l6ZX0gb3B0aW9ucy50aWxlU2l6ZSAtIFRoZSBzaXplIG9mIHRoZSB0aWxlLlxuICpcbiAqIEByZXR1cm5zIHtnb29nbGUubWFwcy5JbWFnZU1hcFR5cGV9XG4gKi9cbkdNYXBzLnByb3RvdHlwZS5hZGRNYXBUeXBlID0gZnVuY3Rpb24gYWRkTWFwVHlwZShtYXBUeXBlSWQsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7IGdldFRpbGVVcmwsIHRpbGVTaXplID0gbmV3IGdvb2dsZS5tYXBzLlNpemUoMjU2LCAyNTYpLCB9ID0gb3B0aW9ucztcblxuICBpZiAodHlwZW9mIGdldFRpbGVVcmwgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCInZ2V0VGlsZVVybCcgZnVuY3Rpb24gcmVxdWlyZWQuXCIpO1xuICB9XG5cbiAgY29uc3QgbWFwVHlwZSA9IG5ldyBnb29nbGUubWFwcy5JbWFnZU1hcFR5cGUoeyBnZXRUaWxlVXJsLCB0aWxlU2l6ZSwgfSk7XG5cbiAgdGhpcy5tYXAubWFwVHlwZXMuc2V0KG1hcFR5cGVJZCwgbWFwVHlwZSk7XG5cbiAgcmV0dXJuIG1hcFR5cGU7XG59O1xuXG4vKipcbiAqIERyYXcgYSBjdXN0b20gW292ZXJsYXkgbWFwIHR5cGVdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L21hcHR5cGVzI092ZXJsYXlNYXBUeXBlcykgaW4gdGhlIE1hcC4gVGhpcyBtZXRob2QgYWxzbyBmaXJlcyBhbiBgb3ZlcmxheV9tYXBfdHlwZV9hZGRlZGAgZXZlbnQuXG4gKiBAZnVuY3Rpb24gYWRkT3ZlcmxheU1hcFR5cGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWFwVHlwZUlkIC0gQSBzaW1wbGUgaWRlbnRpZmllciBmb3IgdGhlIGN1c3RvbSBtYXAgdHlwZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBvYmplY3Qgc2hvdWxkIGNvbnRhaW46XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLmdldFRpbGUgLSBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIERPTSBOb2RlLiBJdCByZWNlaXZlcyB0aHJlZSBhcmd1bWVudHM6XG4gKiAgICogYHBvaW50c2AgKGdvb2dsZS5tYXBzLlBvaW50KTogYSBwb2ludCB3aXRoIGB4YCBhbmQgYHlgIChpcyBub3QgYSBjb29yZGluYXRlKS5cbiAqICAgKiBgem9vbWAgKG51bWJlcik6IGEgem9vbSBsZXZlbC5cbiAqICAgKiBgb3duZXJEb2N1bWVudGAgKERvY3VtZW50KTogVGhlIERPTSBkb2N1bWVudCB0aGF0IHdpbGwgY3JlYXRlIHRoZSBub2RlLlxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMuaW5kZXggLSBUaGUgaW5kZXggZm9yIHRoZSBvdmVybGF5IG1hcCB0eXBlLiBVc2VkIHRvIHNldCBkaWZmZXJlbnRlIHogbGV2ZWxzIG9uIHN0YWNrZWQgb3ZlcmxheSBtYXBzLlxuICogQHBhcmFtIHtnb29nbGUubWFwcy5TaXplfSBvcHRpb25zLnRpbGVTaXplIC0gVGhlIHNpemUgb2YgdGhlIHRpbGUuXG4gKlxuICogQHNlZSBgb3B0aW9uc2AgYWxzbyBhY2NlcHRzIGFueSBvcHRpb24gZGVmaW5lZCBpbiB0aGUgW29mZmljaWFsIGRvY3VtZW50YXRpb25dKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNNYXBUeXBlKS5cbiAqL1xuR01hcHMucHJvdG90eXBlLmFkZE92ZXJsYXlNYXBUeXBlID0gZnVuY3Rpb24gYWRkT3ZlcmxheU1hcFR5cGUob3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHsgZ2V0VGlsZSwgaW5kZXggPSB0aGlzLm1hcC5vdmVybGF5TWFwVHlwZXMubGVuZ3RoLCAuLi5vdmVybGF5TWFwVHlwZU9wdGlvbnMgfSA9IG9wdGlvbnM7XG5cbiAgaWYgKHR5cGVvZiBnZXRUaWxlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiJ2dldFRpbGUnIGZ1bmN0aW9uIHJlcXVpcmVkLlwiKTtcbiAgfVxuXG4gIHRoaXMubWFwLm92ZXJsYXlNYXBUeXBlcy5pbnNlcnRBdChpbmRleCwgeyAuLi5vdmVybGF5TWFwVHlwZU9wdGlvbnMsIGdldFRpbGUsIH0pO1xuICBHTWFwcy5maXJlKCdvdmVybGF5X21hcF90eXBlX2FkZGVkJywgdGhpcy5tYXAub3ZlcmxheU1hcFR5cGVzW2luZGV4XSwgdGhpcyk7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhIG92ZXJsYXkgbWFwIHR5cGUgZnJvbSB0aGUgbWFwLiBUaGlzIG1ldGhvZCBhbHNvIGZpcmVzIGFuIGBvdmVybGF5X21hcF90eXBlX3JlbW92ZWRgIGV2ZW50LlxuICogQGZ1bmN0aW9uIHJlbW92ZU92ZXJsYXlNYXBUeXBlXG4gKlxuICogQHBhcmFtIHtnb29nbGUubWFwcy5Qb2x5bGluZX0gcG9seWxpbmUgLSBUaGUgcG9seWxpbmUgdG8gYmUgcmVtb3ZlZC5cbiAqL1xuR01hcHMucHJvdG90eXBlLnJlbW92ZU92ZXJsYXlNYXBUeXBlID0gZnVuY3Rpb24gcmVtb3ZlT3ZlcmxheU1hcFR5cGUoaW5kZXgpIHtcbiAgY29uc3Qgb3ZlcmxheU1hcFR5cGUgPSB0aGlzLm1hcC5vdmVybGF5TWFwVHlwZXNbaW5kZXhdO1xuXG4gIHRoaXMubWFwLm92ZXJsYXlNYXBUeXBlcy5yZW1vdmVBdChpbmRleCk7XG4gIEdNYXBzLmZpcmUoJ292ZXJsYXlfbWFwX3R5cGVfcmVtb3ZlZCcsIG92ZXJsYXlNYXBUeXBlLCB0aGlzKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXBzO1xuIiwiaW1wb3J0IEdNYXBzLCB7IHNldHVwRXZlbnRzIH0gZnJvbSAnLi9jb3JlJztcbmltcG9ydCAnLi9ldmVudHMnO1xuaW1wb3J0ICcuL2dlb2ZlbmNlcyc7XG5cbi8qKlxuICogRXh0ZW5kcyBHTWFwcyB0byB1c2UgbWFya2Vycy5cbiAqIEBtb2R1bGUgTWFya2Vyc1xuICovXG5cbmNvbnN0IElORk9fV0lORE9XX0VWRU5UUyA9IFsnY2xvc2VjbGljaycsICdjb250ZW50X2NoYW5nZWQnLCAnZG9tcmVhZHknLCAncG9zaXRpb25fY2hhbmdlZCcsICd6aW5kZXhfY2hhbmdlZCddO1xuY29uc3QgTUFSS0VSX0VWRU5UUyA9IFsnYW5pbWF0aW9uX2NoYW5nZWQnLCAnY2xpY2thYmxlX2NoYW5nZWQnLCAnY3Vyc29yX2NoYW5nZWQnLCAnZHJhZ2dhYmxlX2NoYW5nZWQnLCAnZmxhdF9jaGFuZ2VkJywgJ2ljb25fY2hhbmdlZCcsICdwb3NpdGlvbl9jaGFuZ2VkJywgJ3NoYWRvd19jaGFuZ2VkJywgJ3NoYXBlX2NoYW5nZWQnLCAndGl0bGVfY2hhbmdlZCcsICd2aXNpYmxlX2NoYW5nZWQnLCAnemluZGV4X2NoYW5nZWQnXTtcbmNvbnN0IE1BUktFUl9NT1VTRV9FVkVOVFMgPSBbJ2RibGNsaWNrJywgJ2RyYWcnLCAnZHJhZ2VuZCcsICdkcmFnc3RhcnQnLCAnbW91c2Vkb3duJywgJ21vdXNlb3V0JywgJ21vdXNlb3ZlcicsICdtb3VzZXVwJ107XG5cbkdNYXBzLnByb3RvdHlwZS5jcmVhdGVNYXJrZXIgPSBmdW5jdGlvbiBjcmVhdGVNYXJrZXIoYmFzZU9wdGlvbnMpIHtcbiAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gIGNvbnN0IHsgbGF0LCBsYXRpdHVkZSA9IGxhdCwgbG5nLCBsb25naXR1ZGUgPSBsbmcsIHBvc2l0aW9uLCBkZXRhaWxzLCBmZW5jZXMsIG91dHNpZGUsIGluZm9XaW5kb3csIC4uLm9wdGlvbnMgfSA9IGJhc2VPcHRpb25zO1xuXG4gIGlmIChsYXRpdHVkZSA9PT0gdW5kZWZpbmVkICYmIGxvbmdpdHVkZSA9PT0gdW5kZWZpbmVkICYmIHBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGxhdGl0dWRlIG9yIGxvbmdpdHVkZSBkZWZpbmVkLicpO1xuICB9XG5cbiAgY29uc3QgbWFya2VyT3B0aW9ucyA9IHtcbiAgICAuLi5vcHRpb25zLFxuICAgIHBvc2l0aW9uOiBwb3NpdGlvbiB8fCBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGxhdGl0dWRlLCBsb25naXR1ZGUpLFxuICAgIG1hcDogbnVsbCxcbiAgfTtcblxuICBjb25zdCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKG1hcmtlck9wdGlvbnMpO1xuXG4gIG1hcmtlci5mZW5jZXMgPSBmZW5jZXM7XG5cbiAgaWYgKGluZm9XaW5kb3cpIHtcbiAgICBtYXJrZXIuaW5mb1dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KGluZm9XaW5kb3cpO1xuXG4gICAgc2V0dXBFdmVudHMoeyBldmVudHM6IElORk9fV0lORE9XX0VWRU5UUywgb2JqZWN0OiBtYXJrZXIuaW5mb1dpbmRvdywgaW5zdGFuY2U6IHRoaXMsIGhhbmRsZXJzOiBpbmZvV2luZG93LCB9KTtcbiAgfVxuXG4gIHNldHVwRXZlbnRzKHsgZXZlbnRzOiBNQVJLRVJfRVZFTlRTLCBvYmplY3Q6IG1hcmtlciwgaW5zdGFuY2U6IHRoaXMsIGhhbmRsZXJzOiBvcHRpb25zLCB9KTtcblxuICBNQVJLRVJfTU9VU0VfRVZFTlRTLmZvckVhY2goKGV2ZW50TmFtZSkgPT4ge1xuICAgIGlmIChvcHRpb25zW2V2ZW50TmFtZV0pIHtcbiAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlciwgZXZlbnROYW1lLCAoZXZlbnQgPSB0aGlzKSA9PiB7XG4gICAgICAgIGlmICghZXZlbnQucGl4ZWwpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICBldmVudC5waXhlbCA9IHRoaXMubWFwLmdldFByb2plY3Rpb24oKS5mcm9tTGF0TG5nVG9Qb2ludChldmVudC5sYXRMbmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgb3B0aW9uc1tldmVudE5hbWVdLmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXJrZXIsICdjbGljaycsIGZ1bmN0aW9uIG9uTWFya2VyQ2xpY2soZXZlbnQpIHtcbiAgICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzO1xuXG4gICAgaWYgKG9wdGlvbnMuY2xpY2spIHtcbiAgICAgIG9wdGlvbnMuY2xpY2suY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfVxuXG4gICAgaWYgKG1hcmtlci5pbmZvV2luZG93KSB7XG4gICAgICBzZWxmLmhpZGVJbmZvV2luZG93cygpO1xuICAgICAgbWFya2VyLmluZm9XaW5kb3cub3BlbihzZWxmLm1hcCwgbWFya2VyKTtcbiAgICB9XG4gIH0pO1xuXG4gIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlciwgJ3JpZ2h0Y2xpY2snLCBmdW5jdGlvbiBvbk1hcmtlclJpZ2h0Q2xpY2soZXZlbnQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBldmVudC5tYXJrZXIgPSB0aGlzO1xuXG4gICAgaWYgKG9wdGlvbnMucmlnaHRjbGljaykge1xuICAgICAgb3B0aW9ucy5yaWdodGNsaWNrLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIH1cblxuICAgIGlmIChHTWFwcy5jb250ZXh0TWVudXNbc2VsZi5pZF0ubWFya2VyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNlbGYuYnVpbGRDb250ZXh0TWVudSgnbWFya2VyJywgZXZlbnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKG1hcmtlci5mZW5jZXMpIHtcbiAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXJrZXIsICdkcmFnZW5kJywgZnVuY3Rpb24gb25NYXJrZXJEcmFnRW5kKCkge1xuICAgICAgc2VsZi5jaGVja01hcmtlckdlb2ZlbmNlKHRoaXMsIG91dHNpZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG1hcmtlcjtcbn07XG5cbi8qKlxuICogRHJhdyBhIG1hcmtlciBpbiB0aGUgTWFwIGFuZCBhZGQgaXQgdG8gdGhlIG1hcmtlcnMgY29sbGVjdGlvbi4gVGhpcyBtZXRob2QgYWxzbyBmaXJlcyBhIGBtYXJrZXJfYWRkZWRgIGV2ZW50LlxuICogQGZ1bmN0aW9uIGFkZE1hcmtlclxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBvYmplY3Qgc2hvdWxkIGNvbnRhaW46XG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5sYXRpdHVkZSAtIExhdGl0dWRlIG9mIHRoZSBwb3NpdGlvbi4gSWYgYGxhdGl0dWRlYCBhbmQgYGxvbmdpdHVkZWAgYXJlIHNldCwgYHBvc2l0aW9uYCBpcyBpZ25vcmVkLlxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMubG9uZ2l0dWRlIC0gTG9uZ2l0dWRlIG9mIHRoZSBwb3NpdGlvbi4gSWYgYGxhdGl0dWRlYCBhbmQgYGxvbmdpdHVkZWAgYXJlIHNldCwgYHBvc2l0aW9uYCBpcyBpZ25vcmVkLlxuICogQHBhcmFtIHtnb29nbGUubWFwcy5MYXRMbmd9IG9wdGlvbnMucG9zaXRpb24gLSBBIGBnb29nbGUubWFwcy5MYXRMbmdgIGNvb3JkaW5hdGUgaW5kaWNhdGUgdGhlIHBvc2l0aW9uLiBJZiBzZXQsIGBsYXRpdHVkZWAgYW5kIGBsb25naXR1ZGVgIGFyZSBpZ25vcmVkLlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMuZGV0YWlscyAtIEN1c3RvbSBvYmplY3Qgd2l0aCBleHRyYSBkYXRhLlxuICogQHBhcmFtIHthcnJheX0gb3B0aW9ucy5mZW5jZXMgLSBDb2xsZWN0aW9uIG9mIGBnb29nbGUubWFwcy5Qb2x5Z29uYCBvYmplY3RzIHRoYXQgZGVmaW5lcyBhIG1hcmtlcidzIGJvdW5kYXJpZXMgb3IgZ2VvZmVuY2VzLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5vdXRzaWRlIC0gQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgbWFya2VyIGlzIG91c3RpZGUgYW55IG9mIGl0cyBmZW5jZXMuXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucy5pbmZvV2luZG93IC0gT2JqZWN0IHdpdGggYWxsIG9wdGlvbnMgZGVmaW5lZCBpbiBbZ29vZ2xlLm1hcHMuSW5mb1dpbmRvd09wdGlvbnNdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNJbmZvV2luZG93T3B0aW9ucykuXG4gKlxuICogQHNlZSBgb3B0aW9uc2AgYWxzbyBhY2NlcHRzIGFueSBvcHRpb24gZGVmaW5lZCBpbiB0aGUgW29mZmljaWFsIGRvY3VtZW50YXRpb25dKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNNYXJrZXJPcHRpb25zKSBhbmQgYW55IGV2ZW50IGRlZmluZWQgaW4gdGhlIFtcIkV2ZW50c1wiIHNlY3Rpb25dKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNNYXJrZXIpLlxuICpcbiAqIEByZXR1cm5zIHtnb29nbGUubWFwcy5NYXJrZXJ9XG4gKi9cbkdNYXBzLnByb3RvdHlwZS5hZGRNYXJrZXIgPSBmdW5jdGlvbiBhZGRNYXJrZXIob3B0aW9ucykge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG4gIGNvbnN0IHsgZ21fYWNjZXNzb3JzXywgbGF0LCBsYXRpdHVkZSA9IGxhdCwgbG5nLCBsb25naXR1ZGUgPSBsbmcsIHBvc2l0aW9uLCB9ID0gb3B0aW9ucztcblxuICBsZXQgbWFya2VyO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcbiAgaWYgKGdtX2FjY2Vzc29yc18pIHtcbiAgICAvLyBOYXRpdmUgZ29vZ2xlLm1hcHMuTWFya2VyIG9iamVjdFxuICAgIG1hcmtlciA9IG9wdGlvbnM7XG4gIH0gZWxzZSBpZiAoKGxhdGl0dWRlICYmIGxvbmdpdHVkZSkgfHwgcG9zaXRpb24pIHtcbiAgICBtYXJrZXIgPSB0aGlzLmNyZWF0ZU1hcmtlcihvcHRpb25zKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGxhdGl0dWRlIG9yIGxvbmdpdHVkZSBkZWZpbmVkLicpO1xuICB9XG5cbiAgbWFya2VyLnNldE1hcCh0aGlzLm1hcCk7XG5cbiAgaWYgKHRoaXMubWFya2VyQ2x1c3RlcmVyKSB7XG4gICAgdGhpcy5tYXJrZXJDbHVzdGVyZXIuYWRkTWFya2VyKG1hcmtlcik7XG4gIH1cblxuICB0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpO1xuXG4gIEdNYXBzLmZpcmUoJ21hcmtlcl9hZGRlZCcsIG1hcmtlciwgdGhpcyk7XG5cbiAgcmV0dXJuIG1hcmtlcjtcbn07XG5cbi8qKlxuICogRHJhdyBhIGNvbGxlY3Rpb24gb2YgbWFya2VycyBpbnRvIHRoZSBNYXAuIFRoaXMgbWV0aG9kIGZpcmVzIGEgYG1hcmtlcl9hZGRlZGAgZXZlbnQgZm9yIGVhY2ggbWFya2VyIGFkZGVkLlxuICogQGZ1bmN0aW9uIGFkZE1hcmtlcnNcbiAqXG4gKiBAcGFyYW0ge2FycmF5fSBtYXJrZXJzIC0gQW4gYXJyYXkgb2YgYG9wdGlvbnNgIG9iamVjdHMsIHdoaWNoIGFjY2VwdHMgdGhlIHNhbWUgb3B0aW9ucyBhcyBpbiB7QGxpbmsgR01hcHMjYWRkTWFya2VyfS5cbiAqXG4gKiBAcmV0dXJucyB7YXJyYXl9XG4gKi9cbkdNYXBzLnByb3RvdHlwZS5hZGRNYXJrZXJzID0gZnVuY3Rpb24gYWRkTWFya2VycyhtYXJrZXJzKSB7XG4gIG1hcmtlcnMuZm9yRWFjaChtYXJrZXIgPT4gdGhpcy5hZGRNYXJrZXIobWFya2VyKSk7XG5cbiAgcmV0dXJuIHRoaXMubWFya2Vycztcbn07XG5cbi8qKlxuICogSGlkZSBhbGwgbWFya2VycycgSW5mb1dpbmRvd3MuXG4gKiBAZnVuY3Rpb24gaGlkZUluZm9XaW5kb3dzXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5oaWRlSW5mb1dpbmRvd3MgPSBmdW5jdGlvbiBoaWRlSW5mb1dpbmRvd3MoKSB7XG4gIHRoaXMubWFya2Vycy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICBpZiAobWFya2VyLmluZm9XaW5kb3cpIHtcbiAgICAgIG1hcmtlci5pbmZvV2luZG93LmNsb3NlKCk7XG4gICAgfVxuICB9KTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGEgbWFya2VyIGZyb20gdGhlIG1hcCBhbmQgZnJvbSB0aGUgbWFya2VycyBjb2xsZWN0aW9uLiBUaGlzIG1ldGhvZCBhbHNvIGZpcmVzIGEgYG1hcmtlcl9yZW1vdmVkYCBldmVudC5cbiAqIEBmdW5jdGlvbiByZW1vdmVNYXJrZXJcbiAqXG4gKiBAcGFyYW0ge2dvb2dsZS5tYXBzLlBvbHlnb259IHBvbHlnb24gLSBUaGUgcG9seWdvbiB0byBiZSByZW1vdmVkLlxuICovXG5HTWFwcy5wcm90b3R5cGUucmVtb3ZlTWFya2VyID0gZnVuY3Rpb24gcmVtb3ZlTWFya2VyKG1hcmtlciwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHsgZmlyZUV2ZW50ID0gdHJ1ZSwgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IG1hcmtlckluZGV4ID0gdGhpcy5tYXJrZXJzLmluZGV4T2YobWFya2VyKTtcblxuICBpZiAobWFya2VySW5kZXggPj0gMCkge1xuICAgIG1hcmtlci5zZXRNYXAobnVsbCk7XG4gICAgdGhpcy5tYXJrZXJzLnNwbGljZShtYXJrZXJJbmRleCwgMSk7XG5cbiAgICBpZiAodGhpcy5tYXJrZXJDbHVzdGVyZXIpIHtcbiAgICAgIHRoaXMubWFya2VyQ2x1c3RlcmVyLnJlbW92ZU1hcmtlcihtYXJrZXIpO1xuICAgIH1cblxuICAgIGlmIChmaXJlRXZlbnQpIHtcbiAgICAgIEdNYXBzLmZpcmUoJ21hcmtlcl9yZW1vdmVkJywgbWFya2VyLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWFya2VyO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYSBncm91cCBvZiBtYXJrZXJzIChvciBhbGwgb2YgdGhlbSkgZnJvbSB0aGUgTWFwIGFuZCBmcm9tIHRoZSBtYXJrZXJzIGNvbGxlY3Rpb24uIFRoaXMgbWV0aG9kIGRvZXMgbm90IGZpcmUgYSBgbWFya2VyX3JlbW92ZWRgIGV2ZW50LlxuICogQGZ1bmN0aW9uIHJlbW92ZU1hcmtlcnNcbiAqXG4gKiBAcGFyYW0ge2FycmF5fSBtYXJrZXJzIC0gVGhlIG1hcmtlcnMgdG8gYmUgcmVtb3ZlZC4gSWYgbm90IHNldCwgaXQgcmVtb3ZlcyBhbGwgbWFya2VycyBpbiB0aGUgTWFwLlxuICovXG5HTWFwcy5wcm90b3R5cGUucmVtb3ZlTWFya2VycyA9IGZ1bmN0aW9uIHJlbW92ZU1hcmtlcnMobWFya2VycyA9IHRoaXMubWFya2Vycykge1xuICBtYXJrZXJzLmZvckVhY2gobWFya2VyID0+IHRoaXMucmVtb3ZlTWFya2VyKG1hcmtlciwgeyBmaXJlRXZlbnQ6IGZhbHNlLCB9KSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHTWFwcztcbiIsImltcG9ydCBHTWFwcyBmcm9tICcuL2NvcmUnO1xuaW1wb3J0ICcuL2V2ZW50cyc7XG5cbi8qKlxuICogRXh0ZW5kcyBHTWFwcyB0byB1c2UgY3VzdG9tIG92ZXJsYXlzLlxuICogQG1vZHVsZSBPdmVybGF5c1xuICovXG5cbmNvbnN0IFNUT1BfUFJPUEFHQVRJT05fRVZFTlRTID0gWydjb250ZXh0bWVudScsICdET01Nb3VzZVNjcm9sbCcsICdkYmxjbGljaycsICdtb3VzZWRvd24nXTtcblxuLyoqXG4gKiBEcmF3IGFuIG92ZXJsYXkgaW4gdGhlIE1hcCBhbmQgYWRkIGl0IHRvIHRoZSBvdmVybGF5cyBjb2xsZWN0aW9uLiBUaGlzIG1ldGhvZCBhbHNvIGZpcmVzIGEgYG92ZXJsYXlfYWRkZWRgIGV2ZW50LlxuICogQGZ1bmN0aW9uIGRyYXdPdmVybGF5XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgYG9wdGlvbnNgIG9iamVjdCBzaG91bGQgY29udGFpbjpcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5hdXRvU2hvdyAtIFNob3cgdGhlIG92ZXJsYXkgaW5tZWRpYXRseSBhZnRlciBiZWluZyBjcmVhdGVkLlxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMubGF0aXR1ZGUgLSBMYXRpdHVkZSBvZiB0aGUgY29vcmRpbmF0ZSB3aGVyZSB0aGUgb3ZlcmxheSBpcyBwbGFjZWQuIElmIGBsYXRpdHVkZWAgYW5kIGBsb25naXR1ZGVgIGFyZSBzZXQsIGBwb3NpdGlvbmBpcyBpZ25vcmVkLlxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMubG9uZ2l0dWRlIC0gTG9uZ2l0dWRlIG9mIHRoZSBjb29yZGluYXRlIHdoZXJlIHRoZSBvdmVybGF5IGlzIHBsYWNlZC4gSWYgYGxhdGl0dWRlYCBhbmQgYGxvbmdpdHVkZWAgYXJlIHNldCwgYHBvc2l0aW9uYGlzIGlnbm9yZWQuXG4gKiBAcGFyYW0ge2dvb2dsZS5tYXBzLkxhdExuZ30gb3B0aW9ucy5wb3NpdGlvbiAtIEEgYGdvb2dsZS5tYXBzLkxhdExuZ2AgY29vcmRpbmF0ZSB3aGVyZSB0aGUgb3ZlcmxheSBpcyBwbGFjZWQuIElmIHNldCwgYGxhdGl0dWRlYCBhbmQgYGxvbmdpdHVkZWAgYXJlIGlnbm9yZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5jb250ZW50IC0gSFRNTCB0aGF0IHdpbGwgYmUgZHJhd24gaW4gdGhlIG92ZXJsYXkuXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5sYXllciAtIElkIG9mIGFueSBvZiB0aGUgbGF5ZXJzIGRlZmluZWQgaW4gW2dvb2dsZS5tYXBzLk1hcFBhbmVzXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjTWFwUGFuZXMpOlxuICogICAqIGZsb2F0UGFuZVxuICogICAqIGZsb2F0U2hhZG93XG4gKiAgICogbWFwUGFuZVxuICogICAqIG92ZXJsYXlJbWFnZVxuICogICAqIG92ZXJsYXlMYXllclxuICogICAqIG92ZXJsYXlNb3VzZVRhcmdldFxuICogICAqIG92ZXJsYXlTaGFkb3dcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnZlcnRpY2FsQWxpZ24gLSBWZXJ0aWNhbCBhbGlnbiBvZiB0aGUgb3ZlcmxheSAod2hlcmUgdGhlIGNlbnRlciBpcyB0aGUgY29vcmRpbmF0ZSBgbGF0aXR1ZGVgLCBgbG9uZ2l0dWRlYCk6XG4gKiAgICogdG9wXG4gKiAgICogbWlkZGxlXG4gKiAgICogYm90dG9tXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5ob3Jpem9udGFsQWxpZ24gLSBIb3Jpem9udGFsIGFsaWduIG9mIHRoZSBvdmVybGF5ICh3aGVyZSB0aGUgY2VudGVyIGlzIHRoZSBjb29yZGluYXRlIGBsYXRpdHVkZWAsIGBsb25naXR1ZGVgKTpcbiAqICAgKiBsZWZ0XG4gKiAgICogY2VudGVyXG4gKiAgICogcmlnaHRcbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLmhvcml6b250YWxPZmZzZXQgLSBIb3Jpem9udGFsIG9mZnNldCBpbiBwaXhlbHMgb2YgdGhlIG92ZXJsYXkuXG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy52ZXJ0aWNhbE9mZnNldCAtIFZlcnRpY2FsIG9mZnNldCBpbiBwaXhlbHMgb2YgdGhlIG92ZXJsYXkuXG4gKlxuICogQHJldHVybnMge2dvb2dsZS5tYXBzLk92ZXJsYXlWaWV3fVxuICovXG5HTWFwcy5wcm90b3R5cGUuZHJhd092ZXJsYXkgPSBmdW5jdGlvbiBkcmF3T3ZlcmxheShiYXNlT3B0aW9ucykge1xuICBjb25zdCBzZWxmID0gdGhpcztcbiAgY29uc3Qgb3ZlcmxheSA9IG5ldyBnb29nbGUubWFwcy5PdmVybGF5VmlldygpO1xuICBjb25zdCB7XG4gICAgYXV0b1Nob3cgPSB0cnVlLFxuICAgIGxhdCxcbiAgICBsYXRpdHVkZSA9IGxhdCxcbiAgICBsbmcsXG4gICAgbG9uZ2l0dWRlID0gbG5nLFxuICAgIHBvc2l0aW9uID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsYXRpdHVkZSwgbG9uZ2l0dWRlKSxcbiAgICBsYXllciA9ICdvdmVybGF5TGF5ZXInLFxuICAgIGhvcml6b250YWxPZmZzZXQgPSAwLFxuICAgIHZlcnRpY2FsT2Zmc2V0ID0gMCxcbiAgICB2ZXJ0aWNhbEFsaWduLFxuICAgIGhvcml6b250YWxBbGlnbixcbiAgICAuLi5vcHRpb25zXG4gIH0gPSBiYXNlT3B0aW9ucztcblxuICBvdmVybGF5LnNldE1hcCh0aGlzLm1hcCk7XG5cbiAgb3ZlcmxheS5vbkFkZCA9IGZ1bmN0aW9uIG9uQWRkKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGVsZW1lbnQuc3R5bGUuYm9yZGVyU3R5bGUgPSAnbm9uZSc7XG4gICAgZWxlbWVudC5zdHlsZS5ib3JkZXJXaWR0aCA9ICcwcHgnO1xuICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIGVsZW1lbnQuc3R5bGUuekluZGV4ID0gMTAwO1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gb3B0aW9ucy5jb250ZW50O1xuXG4gICAgb3ZlcmxheS5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgIGNvbnN0IHBhbmVzID0gdGhpcy5nZXRQYW5lcygpO1xuICAgIGNvbnN0IG92ZXJsYXlMYXllciA9IHBhbmVzW2xheWVyXTtcblxuICAgIG92ZXJsYXlMYXllci5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICAgIFNUT1BfUFJPUEFHQVRJT05fRVZFTlRTLmZvckVhY2goZXZlbnROYW1lID0+XG4gICAgICBnb29nbGUubWFwcy5ldmVudC5hZGREb21MaXN0ZW5lcihlbGVtZW50LCBldmVudE5hbWUsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdtc2llJykgIT09IC0xICYmIGRvY3VtZW50LmFsbCkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgIGV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWU7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgaWYgKG9wdGlvbnMuY2xpY2spIHtcbiAgICAgIHBhbmVzLm92ZXJsYXlNb3VzZVRhcmdldC5hcHBlbmRDaGlsZChvdmVybGF5LmVsZW1lbnQpO1xuICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIob3ZlcmxheS5lbGVtZW50LCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG9wdGlvbnMuY2xpY2suY2FsbChzZWxmLCBvdmVybGF5KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIodGhpcywgJ3JlYWR5Jyk7XG4gIH07XG5cbiAgb3ZlcmxheS5kcmF3ID0gZnVuY3Rpb24gZHJhdygpIHtcbiAgICBjb25zdCBwcm9qZWN0aW9uID0gdGhpcy5nZXRQcm9qZWN0aW9uKCk7XG4gICAgY29uc3QgcGl4ZWwgPSBwcm9qZWN0aW9uLmZyb21MYXRMbmdUb0RpdlBpeGVsKHBvc2l0aW9uKTtcblxuICAgIGNvbnN0IHsgZWxlbWVudCwgfSA9IG92ZXJsYXk7XG4gICAgY29uc3QgY29udGVudCA9IGVsZW1lbnQuY2hpbGRyZW5bMF07XG4gICAgY29uc3QgY29udGVudEhlaWdodCA9IGNvbnRlbnQuY2xpZW50SGVpZ2h0O1xuICAgIGNvbnN0IGNvbnRlbnRXaWR0aCA9IGNvbnRlbnQuY2xpZW50V2lkdGg7XG5cbiAgICBzd2l0Y2ggKHZlcnRpY2FsQWxpZ24pIHtcbiAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gYCR7cGl4ZWwueSAtIGNvbnRlbnRIZWlnaHQgKyB2ZXJ0aWNhbE9mZnNldH1weGA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgIGNhc2UgJ21pZGRsZSc6XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gYCR7cGl4ZWwueSAtIChjb250ZW50SGVpZ2h0IC8gMikgKyB2ZXJ0aWNhbE9mZnNldH1weGA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBgJHtwaXhlbC55ICsgdmVydGljYWxPZmZzZXR9cHhgO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGhvcml6b250YWxBbGlnbikge1xuICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IGAke3BpeGVsLnggLSBjb250ZW50V2lkdGggKyBob3Jpem9udGFsT2Zmc2V0fXB4YDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgY2FzZSAnY2VudGVyJzpcbiAgICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7cGl4ZWwueCAtIChjb250ZW50V2lkdGggLyAyKSArIGhvcml6b250YWxPZmZzZXR9cHhgO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7cGl4ZWwueCArIGhvcml6b250YWxPZmZzZXR9cHhgO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBhdXRvU2hvdyA/ICdibG9jaycgOiAnbm9uZSc7XG5cbiAgICBpZiAoIWF1dG9TaG93KSB7XG4gICAgICBvcHRpb25zLnNob3cuY2FsbCh0aGlzLCBlbGVtZW50KTtcbiAgICB9XG4gIH07XG5cbiAgb3ZlcmxheS5vblJlbW92ZSA9IGZ1bmN0aW9uIG9uUmVtb3ZlKCkge1xuICAgIGNvbnN0IHsgZWxlbWVudCwgfSA9IG92ZXJsYXk7XG5cbiAgICBpZiAob3B0aW9ucy5yZW1vdmUpIHtcbiAgICAgIG9wdGlvbnMucmVtb3ZlLmNhbGwodGhpcywgZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgIG92ZXJsYXkuZWxlbWVudCA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMub3ZlcmxheXMucHVzaChvdmVybGF5KTtcblxuICBHTWFwcy5maXJlKCdvdmVybGF5X2FkZGVkJywgb3ZlcmxheSwgdGhpcyk7XG5cbiAgcmV0dXJuIG92ZXJsYXk7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBvdmVybGF5IGZyb20gdGhlIG1hcCBhbmQgZnJvbSB0aGUgb3ZlcmxheXMgY29sbGVjdGlvbi4gVGhpcyBtZXRob2QgYWxzbyBmaXJlcyBhIGBvdmVybGF5X3JlbW92ZWRgIGV2ZW50LlxuICogQGZ1bmN0aW9uIHJlbW92ZU92ZXJsYXlcbiAqXG4gKiBAcGFyYW0ge2dvb2dsZS5tYXBzLk92ZXJsYXlWaWV3fSBvdmVybGF5IC0gVGhlIG92ZXJsYXkgdG8gYmUgcmVtb3ZlZC5cbiAqL1xuR01hcHMucHJvdG90eXBlLnJlbW92ZU92ZXJsYXkgPSBmdW5jdGlvbiByZW1vdmVPdmVybGF5KG92ZXJsYXkpIHtcbiAgY29uc3Qgb3ZlcmxheUluZGV4ID0gdGhpcy5vdmVybGF5cy5pbmRleE9mKG92ZXJsYXkpO1xuXG4gIGlmIChvdmVybGF5SW5kZXggPj0gMCkge1xuICAgIG92ZXJsYXkuc2V0TWFwKG51bGwpO1xuICAgIHRoaXMub3ZlcmxheXMuc3BsaWNlKG92ZXJsYXlJbmRleCwgMSk7XG5cbiAgICBHTWFwcy5maXJlKCdvdmVybGF5X3JlbW92ZWQnLCBvdmVybGF5LCB0aGlzKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZW1vdmUgYWxsIHRoZSBvdmVybGF5cyBmcm9tIHRoZSBtYXAgYW5kIGNsZWFyIHRoZSBvdmVybGF5cyBjb2xsZWN0aW9uLiBUaGlzIG1ldGhvZCBkb2VzIG5vdCBmaXJlIGEgYG92ZXJsYXlfcmVtb3ZlZGAgZXZlbnQuXG4gKiBAZnVuY3Rpb24gcmVtb3ZlT3ZlcmxheXNcbiAqL1xuR01hcHMucHJvdG90eXBlLnJlbW92ZU92ZXJsYXlzID0gZnVuY3Rpb24gcmVtb3ZlT3ZlcmxheXMoKSB7XG4gIHRoaXMub3ZlcmxheXMuZm9yRWFjaChvdmVybGF5ID0+IG92ZXJsYXkuc2V0TWFwKG51bGwpKTtcblxuICB0aGlzLm92ZXJsYXlzID0gW107XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHTWFwcztcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5pZiAodHlwZW9mIHdpbmRvdy5nb29nbGUgPT09ICdvYmplY3QnICYmIHdpbmRvdy5nb29nbGUubWFwcykge1xuICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIFBvbHlnb24gY29udGFpbnNMYXRMbmdcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3RwYXJraW4vR29vZ2xlLU1hcHMtUG9pbnQtaW4tUG9seWdvblxuICAvLyBQb3lnb24gZ2V0Qm91bmRzIGV4dGVuc2lvbiAtIGdvb2dsZS1tYXBzLWV4dGVuc2lvbnNcbiAgLy8gaHR0cDovL2NvZGUuZ29vZ2xlLmNvbS9wL2dvb2dsZS1tYXBzLWV4dGVuc2lvbnMvc291cmNlL2Jyb3dzZS9nb29nbGUubWFwcy5Qb2x5Z29uLmdldEJvdW5kcy5qc1xuICBpZiAoIWdvb2dsZS5tYXBzLlBvbHlnb24ucHJvdG90eXBlLmdldEJvdW5kcykge1xuICAgIGdvb2dsZS5tYXBzLlBvbHlnb24ucHJvdG90eXBlLmdldEJvdW5kcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGJvdW5kcyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMoKTtcbiAgICAgIHZhciBwYXRocyA9IHRoaXMuZ2V0UGF0aHMoKTtcbiAgICAgIHZhciBwYXRoO1xuXG4gICAgICBmb3IgKHZhciBwID0gMDsgcCA8IHBhdGhzLmdldExlbmd0aCgpOyBwKyspIHtcbiAgICAgICAgcGF0aCA9IHBhdGhzLmdldEF0KHApO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGguZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgICAgIGJvdW5kcy5leHRlbmQocGF0aC5nZXRBdChpKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGJvdW5kcztcbiAgICB9O1xuICB9XG5cbiAgaWYgKCFnb29nbGUubWFwcy5Qb2x5Z29uLnByb3RvdHlwZS5jb250YWluc0xhdExuZykge1xuICAgIC8vIFBvbHlnb24gY29udGFpbnNMYXRMbmcgLSBtZXRob2QgdG8gZGV0ZXJtaW5lIGlmIGEgbGF0TG5nIGlzIHdpdGhpbiBhIHBvbHlnb25cbiAgICBnb29nbGUubWFwcy5Qb2x5Z29uLnByb3RvdHlwZS5jb250YWluc0xhdExuZyA9IGZ1bmN0aW9uKGxhdExuZykge1xuICAgICAgLy8gRXhjbHVkZSBwb2ludHMgb3V0c2lkZSBvZiBib3VuZHMgYXMgdGhlcmUgaXMgbm8gd2F5IHRoZXkgYXJlIGluIHRoZSBwb2x5XG4gICAgICB2YXIgYm91bmRzID0gdGhpcy5nZXRCb3VuZHMoKTtcblxuICAgICAgaWYgKGJvdW5kcyAhPT0gbnVsbCAmJiAhYm91bmRzLmNvbnRhaW5zKGxhdExuZykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBSYXljYXN0IHBvaW50IGluIHBvbHlnb24gbWV0aG9kXG4gICAgICB2YXIgaW5Qb2x5ID0gZmFsc2U7XG5cbiAgICAgIHZhciBudW1QYXRocyA9IHRoaXMuZ2V0UGF0aHMoKS5nZXRMZW5ndGgoKTtcbiAgICAgIGZvciAodmFyIHAgPSAwOyBwIDwgbnVtUGF0aHM7IHArKykge1xuICAgICAgICB2YXIgcGF0aCA9IHRoaXMuZ2V0UGF0aHMoKS5nZXRBdChwKTtcbiAgICAgICAgdmFyIG51bVBvaW50cyA9IHBhdGguZ2V0TGVuZ3RoKCk7XG4gICAgICAgIHZhciBqID0gbnVtUG9pbnRzIC0gMTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVBvaW50czsgaSsrKSB7XG4gICAgICAgICAgdmFyIHZlcnRleDEgPSBwYXRoLmdldEF0KGkpO1xuICAgICAgICAgIHZhciB2ZXJ0ZXgyID0gcGF0aC5nZXRBdChqKTtcblxuICAgICAgICAgIGlmICh2ZXJ0ZXgxLmxuZygpIDwgbGF0TG5nLmxuZygpICYmIHZlcnRleDIubG5nKCkgPj0gbGF0TG5nLmxuZygpIHx8IHZlcnRleDIubG5nKCkgPCBsYXRMbmcubG5nKCkgJiYgdmVydGV4MS5sbmcoKSA+PSBsYXRMbmcubG5nKCkpIHtcbiAgICAgICAgICAgIGlmICh2ZXJ0ZXgxLmxhdCgpICsgKGxhdExuZy5sbmcoKSAtIHZlcnRleDEubG5nKCkpIC8gKHZlcnRleDIubG5nKCkgLSB2ZXJ0ZXgxLmxuZygpKSAqICh2ZXJ0ZXgyLmxhdCgpIC0gdmVydGV4MS5sYXQoKSkgPCBsYXRMbmcubGF0KCkpIHtcbiAgICAgICAgICAgICAgaW5Qb2x5ID0gIWluUG9seTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBqID0gaTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5Qb2x5O1xuICAgIH07XG4gIH1cblxuICBpZiAoIWdvb2dsZS5tYXBzLkNpcmNsZS5wcm90b3R5cGUuY29udGFpbnNMYXRMbmcpIHtcbiAgICBnb29nbGUubWFwcy5DaXJjbGUucHJvdG90eXBlLmNvbnRhaW5zTGF0TG5nID0gZnVuY3Rpb24obGF0TG5nKSB7XG4gICAgICBpZiAoZ29vZ2xlLm1hcHMuZ2VvbWV0cnkpIHtcbiAgICAgICAgcmV0dXJuIGdvb2dsZS5tYXBzLmdlb21ldHJ5LnNwaGVyaWNhbC5jb21wdXRlRGlzdGFuY2VCZXR3ZWVuKHRoaXMuZ2V0Q2VudGVyKCksIGxhdExuZykgPD0gdGhpcy5nZXRSYWRpdXMoKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgZ29vZ2xlLm1hcHMuUmVjdGFuZ2xlLnByb3RvdHlwZS5jb250YWluc0xhdExuZyA9IGZ1bmN0aW9uKGxhdExuZykge1xuICAgIHJldHVybiB0aGlzLmdldEJvdW5kcygpLmNvbnRhaW5zKGxhdExuZyk7XG4gIH07XG5cbiAgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzLnByb3RvdHlwZS5jb250YWluc0xhdExuZyA9IGZ1bmN0aW9uKGxhdExuZykge1xuICAgIHJldHVybiB0aGlzLmNvbnRhaW5zKGxhdExuZyk7XG4gIH07XG5cbiAgZ29vZ2xlLm1hcHMuTWFya2VyLnByb3RvdHlwZS5zZXRGZW5jZXMgPSBmdW5jdGlvbihmZW5jZXMpIHtcbiAgICB0aGlzLmZlbmNlcyA9IGZlbmNlcztcbiAgfTtcblxuICBnb29nbGUubWFwcy5NYXJrZXIucHJvdG90eXBlLmFkZEZlbmNlID0gZnVuY3Rpb24oZmVuY2UpIHtcbiAgICB0aGlzLmZlbmNlcy5wdXNoKGZlbmNlKTtcbiAgfTtcblxuICBnb29nbGUubWFwcy5NYXJrZXIucHJvdG90eXBlLmdldElkID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXNbJ19fZ21faWQnXTtcbiAgfTtcbn1cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQXJyYXkgaW5kZXhPZlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9pbmRleE9mXG5pZiAoIUFycmF5LnByb3RvdHlwZS5pbmRleE9mKSB7XG4gIEFycmF5LnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24gKHNlYXJjaEVsZW1lbnQgLyosIGZyb21JbmRleCAqLyApIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgaWYgKHRoaXMgPT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgIH1cbiAgICAgIHZhciB0ID0gT2JqZWN0KHRoaXMpO1xuICAgICAgdmFyIGxlbiA9IHQubGVuZ3RoID4+PiAwO1xuICAgICAgaWYgKGxlbiA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIHZhciBuID0gMDtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIG4gPSBOdW1iZXIoYXJndW1lbnRzWzFdKTtcbiAgICAgICAgICBpZiAobiAhPSBuKSB7IC8vIHNob3J0Y3V0IGZvciB2ZXJpZnlpbmcgaWYgaXQncyBOYU5cbiAgICAgICAgICAgICAgbiA9IDA7XG4gICAgICAgICAgfSBlbHNlIGlmIChuICE9IDAgJiYgbiAhPSBJbmZpbml0eSAmJiBuICE9IC1JbmZpbml0eSkge1xuICAgICAgICAgICAgICBuID0gKG4gPiAwIHx8IC0xKSAqIE1hdGguZmxvb3IoTWF0aC5hYnMobikpO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChuID49IGxlbikge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIHZhciBrID0gbiA+PSAwID8gbiA6IE1hdGgubWF4KGxlbiAtIE1hdGguYWJzKG4pLCAwKTtcbiAgICAgIGZvciAoOyBrIDwgbGVuOyBrKyspIHtcbiAgICAgICAgICBpZiAoayBpbiB0ICYmIHRba10gPT09IHNlYXJjaEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGs7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIC0xO1xuICB9XG59IiwiaW1wb3J0IEdNYXBzLCB7IGxhdExuZ0Zyb21Bcmd1bWVudHMsIGZsYXR0ZW5BcnJheSwgYXJyYXlUb0xhdExuZyB9IGZyb20gJy4vY29yZSc7XG5cbi8qKlxuICogRXh0ZW5kcyBHTWFwcyB0byB1c2Ugcm91dGVzLlxuICogQG1vZHVsZSBSb3V0ZXNcbiAqL1xuXG4vKipcbiAqIEdldCByb3V0ZXMgYmV0d2VlbiB0d28gY29vcmRpbmF0ZXMuXG4gKiBAZnVuY3Rpb24gZ2V0Um91dGVzXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgYG9wdGlvbnNgIG9iamVjdCBzaG91bGQgY29udGFpbjpcbiAqIEBwYXJhbSB7c3RyaW5nfGdvb2dsZS5tYXBzLkxhdExuZ3xnb29nbGUubWFwcy5QbGFjZXxnb29nbGUubWFwcy5MYXRMbmdMaXRlcmFsfSBvcHRpb25zLm9yaWdpbiAtIExvY2F0aW9uIG9mIG9yaWdpbi5cbiAqIEBwYXJhbSB7c3RyaW5nfGdvb2dsZS5tYXBzLkxhdExuZ3xnb29nbGUubWFwcy5QbGFjZXxnb29nbGUubWFwcy5MYXRMbmdMaXRlcmFsfSBvcHRpb25zLmRlc3RpbmF0aW9uIC0gTG9jYXRpb24gb2YgZGVzdGluYXRpb24uXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50cmF2ZWxNb2RlIC0gQ2FuIGJlIGBiaWN5Y2xpbmdgLCBgZHJpdmluZ2AsIGB0cmFuc2l0YCBvciBgd2Fsa2luZ2AuXG4gKiBAcGFyYW0ge2FycmF5fSBvcHRpb25zLndheXBvaW50cyAtIEFycmF5IG9mIFtnb29nbGUubWFwcy5EaXJlY3Rpb25zV2F5cG9pbnRdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNEaXJlY3Rpb25zV2F5cG9pbnQpIG9iamVjdHMuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLmNhbGxiYWNrIC0gRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIGFmdGVyIHRoZSByZXN1bHRzIGFyZSByZXR1cm5lZC5cbiAqXG4gKiBAc2VlIGBvcHRpb25zYCBhbHNvIGFjY2VwdHMgYW55IG9wdGlvbiBkZWZpbmVkIGluIHRoZSBbb2ZmaWNpYWwgZG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI0RpcmVjdGlvbnNSZXF1ZXN0KS5cbiAqL1xuR01hcHMucHJvdG90eXBlLmdldFJvdXRlcyA9IGZ1bmN0aW9uIGdldFJvdXRlcyhiYXNlT3B0aW9ucykge1xuICBjb25zdCB7IG9yaWdpbiwgZGVzdGluYXRpb24sIHRyYXZlbE1vZGUgPSAnd2Fsa2luZycsIHVuaXRTeXN0ZW0gPSAnbWV0cmljJywgYXZvaWRIaWdod2F5cyA9IGZhbHNlLCBhdm9pZFRvbGxzID0gZmFsc2UsIG9wdGltaXplV2F5cG9pbnRzID0gZmFsc2UsIHdheXBvaW50cyA9IFtdLCBjYWxsYmFjaywgZXJyb3IsIC4uLm9wdGlvbnMgfSA9IGJhc2VPcHRpb25zO1xuXG4gIGNvbnN0IHRyYXZlbE1vZGVJZCA9IGdvb2dsZS5tYXBzLlRyYXZlbE1vZGVbdHJhdmVsTW9kZS50b1VwcGVyQ2FzZSgpXTtcbiAgY29uc3QgdW5pdFN5c3RlbUlkID0gZ29vZ2xlLm1hcHMuVHJhdmVsTW9kZVt1bml0U3lzdGVtLnRvVXBwZXJDYXNlKCldO1xuXG4gIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgIC4uLm9wdGlvbnMsXG4gICAgdHJhdmVsTW9kZTogdHJhdmVsTW9kZUlkLFxuICAgIHVuaXRTeXN0ZW06IHVuaXRTeXN0ZW1JZCxcbiAgICBhdm9pZEhpZ2h3YXlzLFxuICAgIGF2b2lkVG9sbHMsXG4gICAgb3B0aW1pemVXYXlwb2ludHMsXG4gICAgd2F5cG9pbnRzLFxuICAgIG9yaWdpbjogdHlwZW9mIG9yaWdpbiA9PT0gJ3N0cmluZycgPyBvcmlnaW4gOiBsYXRMbmdGcm9tQXJndW1lbnRzKC4uLm9yaWdpbiksXG4gICAgZGVzdGluYXRpb246IHR5cGVvZiBkZXN0aW5hdGlvbiA9PT0gJ3N0cmluZycgPyBkZXN0aW5hdGlvbiA6IGxhdExuZ0Zyb21Bcmd1bWVudHMoLi4uZGVzdGluYXRpb24pLFxuICB9O1xuXG4gIGNvbnN0IHNlcnZpY2UgPSBuZXcgZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1NlcnZpY2UoKTtcblxuICBzZXJ2aWNlLnJvdXRlKHJlcXVlc3RPcHRpb25zLCAocmVzdWx0LCBzdGF0dXMpID0+IHtcbiAgICBpZiAoc3RhdHVzID09PSBnb29nbGUubWFwcy5EaXJlY3Rpb25zU3RhdHVzLk9LKSB7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soWy4uLnJlc3VsdC5yb3V0ZXNdLCByZXN1bHQsIHN0YXR1cyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlcnJvcikge1xuICAgICAgZXJyb3IocmVzdWx0LCBzdGF0dXMpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbGwgcm91dGVzIHN0b3JlZCBpbiByb3V0ZXMgY29sbGVjdGlvbi5cbiAqIEBmdW5jdGlvbiByZW1vdmVSb3V0ZXNcbiAqL1xuR01hcHMucHJvdG90eXBlLnJlbW92ZVJvdXRlcyA9IGZ1bmN0aW9uIHJlbW92ZVJvdXRlcygpIHtcbiAgdGhpcy5yb3V0ZXMgPSBbXTtcbn07XG5cbi8qKlxuICogR2V0IGVsZXZhdGlvbiBpbmZvcm1hdGlvbiBmb3IgbG9jYXRpb25zIG9yIHJvdXRlcy5cbiAqIEBmdW5jdGlvbiBnZXRFbGV2YXRpb25zXG4gKlxuICogQHBhcmFtIHthcnJheX0gbG9jYXRpb25zIC0gQmktZGltZW5zaW9uYWwgYXJyYXkgb2YgbGF0aXR1ZGVzIGFuZCBsb25naXR1ZGVzLlxuICogQHBhcmFtIHtib29sZWFufSBwYXRoIC0gSWYgaXMgdHJ1ZSwgbWFrZXMgYSByZXF1ZXN0IGFsb25nIGEgcGF0aC4gSWYgaXMgZmFsc2UsIG9ubHkgZ2V0IGVsZXZhdGlvbiBpbmZvcm1hdGlvbiBvbiBkaXNjcmV0ZSBsb2NhdGlvbnMuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIE5hdGl2ZSBjYWxsYmFjayBmdW5jdGlvbiBkZWZpbmVkIGluIFtnb29nbGUubWFwcy5FbGV2YXRpb25TZXJ2aWNlICgnTWV0aG9kcycgc2VjdGlvbildKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNFbGV2YXRpb25TZXJ2aWNlKSAoYGdldEVsZXZhdGlvbkFsb25nUGF0aGAgaWYgYHBhdGhgIGlzIHRydWUsIGBnZXRFbGV2YXRpb25Gb3JMb2NhdGlvbnNgIGlmIGBwYXRoYCBpcyBmYWxzZSkuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5nZXRFbGV2YXRpb25zID0gZnVuY3Rpb24gZ2V0RWxldmF0aW9ucyhiYXNlT3B0aW9ucykge1xuICBjb25zdCB7IHBhdGggPSBmYWxzZSwgc2FtcGxlcyA9IDI1NiwgY2FsbGJhY2ssIC4uLm9wdGlvbnMgfSA9IGJhc2VPcHRpb25zO1xuXG4gIGxldCBsb2NhdGlvbnMgPSBvcHRpb25zLmxvY2F0aW9ucyB8fCBbXTtcblxuICBpZiAobG9jYXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICBpZiAobG9jYXRpb25zWzBdLmxlbmd0aCA+IDApIHtcbiAgICAgIGxvY2F0aW9ucyA9IGZsYXR0ZW5BcnJheShbbG9jYXRpb25zXS5tYXAobG9jYXRpb24gPT4gYXJyYXlUb0xhdExuZyhsb2NhdGlvbiwgZmFsc2UpKSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5FbGV2YXRpb25TZXJ2aWNlKCk7XG5cbiAgaWYgKCFwYXRoKSB7XG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgbG9jYXRpb25zLFxuICAgIH07XG5cbiAgICBkZWxldGUgcmVxdWVzdE9wdGlvbnMucGF0aDtcbiAgICBkZWxldGUgcmVxdWVzdE9wdGlvbnMuc2FtcGxlcztcblxuICAgIHNlcnZpY2UuZ2V0RWxldmF0aW9uRm9yTG9jYXRpb25zKHJlcXVlc3RPcHRpb25zLCAocmVzdWx0LCBzdGF0dXMpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2FsbGJhY2socmVzdWx0LCBzdGF0dXMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgcGF0aDogbG9jYXRpb25zLFxuICAgICAgc2FtcGxlcyxcbiAgICB9O1xuXG4gICAgc2VydmljZS5nZXRFbGV2YXRpb25BbG9uZ1BhdGgocmVxdWVzdE9wdGlvbnMsIChyZXN1bHQsIHN0YXR1cykgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYWxsYmFjayhyZXN1bHQsIHN0YXR1cyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayBHTWFwcyNyZW1vdmVQb2x5bGluZXN9LlxuICogQGZ1bmN0aW9uIGNsZWFuUm91dGVcbiAqL1xuR01hcHMucHJvdG90eXBlLmNsZWFuUm91dGUgPSBHTWFwcy5wcm90b3R5cGUucmVtb3ZlUG9seWxpbmVzO1xuXG5HTWFwcy5wcm90b3R5cGUucmVuZGVyUm91dGUgPSBmdW5jdGlvbiByZW5kZXJSb3V0ZShvcHRpb25zLCBiYXNlUmVuZGVyT3B0aW9ucykge1xuICBjb25zdCBwYW5lbCA9ICgodHlwZW9mIGJhc2VSZW5kZXJPcHRpb25zLnBhbmVsID09PSAnc3RyaW5nJykgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChiYXNlUmVuZGVyT3B0aW9ucy5wYW5lbC5yZXBsYWNlKCcjJywgJycpKSA6IGJhc2VSZW5kZXJPcHRpb25zLnBhbmVsKTtcblxuICBjb25zdCByZW5kZXJPcHRpb25zID0ge1xuICAgIC4uLmJhc2VSZW5kZXJPcHRpb25zLFxuICAgIHBhbmVsLFxuICAgIG1hcDogdGhpcy5tYXAsXG4gIH07XG5cbiAgY29uc3QgZGlzcGxheSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zUmVuZGVyZXIocmVuZGVyT3B0aW9ucyk7XG5cbiAgdGhpcy5nZXRSb3V0ZXMoe1xuICAgIG9yaWdpbjogb3B0aW9ucy5vcmlnaW4sXG4gICAgZGVzdGluYXRpb246IG9wdGlvbnMuZGVzdGluYXRpb24sXG4gICAgdHJhdmVsTW9kZTogb3B0aW9ucy50cmF2ZWxNb2RlLFxuICAgIHdheXBvaW50czogb3B0aW9ucy53YXlwb2ludHMsXG4gICAgdW5pdFN5c3RlbTogb3B0aW9ucy51bml0U3lzdGVtLFxuICAgIGVycm9yOiBvcHRpb25zLmVycm9yLFxuICAgIGF2b2lkSGlnaHdheXM6IG9wdGlvbnMuYXZvaWRIaWdod2F5cyxcbiAgICBhdm9pZFRvbGxzOiBvcHRpb25zLmF2b2lkVG9sbHMsXG4gICAgb3B0aW1pemVXYXlwb2ludHM6IG9wdGlvbnMub3B0aW1pemVXYXlwb2ludHMsXG4gICAgY2FsbGJhY2soXywgcmVzcG9uc2UsIHN0YXR1cykge1xuICAgICAgaWYgKHN0YXR1cyA9PT0gZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1N0YXR1cy5PSykge1xuICAgICAgICBkaXNwbGF5LnNldERpcmVjdGlvbnMocmVzcG9uc2UpO1xuICAgICAgfVxuICAgIH0sXG4gIH0pO1xufTtcblxuLyoqXG4gKiBEcmF3IGEgcm91dGUgdXNpbmcgcG9seWxpbmVzLiBJdCB1c2VzIHRoZSBsYXN0IHJvdXRlIGZvdW5kIGJ5IHtAbGluayBHTWFwcyNnZXRSb3V0ZXN9LlxuICogQGZ1bmN0aW9uIGRyYXdSb3V0ZVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gQWNjZXB0cyB0aGUgc2FtZSBvcHRpb25zIGFzIHtAbGluayBHTWFwcyNnZXRSb3V0ZXN9LlxuICogQHBhcmFtIHtzdHJpbmd8Z29vZ2xlLm1hcHMuTGF0TG5nfGdvb2dsZS5tYXBzLlBsYWNlfGdvb2dsZS5tYXBzLkxhdExuZ0xpdGVyYWx9IG9wdGlvbnMub3JpZ2luIC0gTG9jYXRpb24gb2Ygb3JpZ2luLlxuICogQHBhcmFtIHtzdHJpbmd8Z29vZ2xlLm1hcHMuTGF0TG5nfGdvb2dsZS5tYXBzLlBsYWNlfGdvb2dsZS5tYXBzLkxhdExuZ0xpdGVyYWx9IG9wdGlvbnMuZGVzdGluYXRpb24gLSBMb2NhdGlvbiBvZiBkZXN0aW5hdGlvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnN0cm9rZUNvbG9yIC0gQ29sb3Igb2YgdGhlIHBvbHlsaW5lLiBDYW4gYmUgaGV4YWRlY2ltYWwgb3IgQ1NTIG5hbWUuXG4gKiBAcGFyYW0ge2Zsb2F0fSBvcHRpb25zLnN0cm9rZU9wYWNpdHkgLSBPcGFjaXR5IG9mIHRoZSBwb2x5bGluZSBmcm9tIDAuMCB0byAxLjBcbiAqIEBwYXJhbSB7aW50ZWdlcn0gb3B0aW9ucy5zdHJva2VXZWlnaHQgLSBQb2x5bGluZSB3aWR0aCBpbiBwaXhlbHMuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5kcmF3Um91dGUgPSBmdW5jdGlvbiBkcmF3Um91dGUob3B0aW9ucykge1xuICBjb25zdCBzZWxmID0gdGhpcztcblxuICB0aGlzLmdldFJvdXRlcyh7XG4gICAgb3JpZ2luOiBvcHRpb25zLm9yaWdpbixcbiAgICBkZXN0aW5hdGlvbjogb3B0aW9ucy5kZXN0aW5hdGlvbixcbiAgICB0cmF2ZWxNb2RlOiBvcHRpb25zLnRyYXZlbE1vZGUsXG4gICAgd2F5cG9pbnRzOiBvcHRpb25zLndheXBvaW50cyxcbiAgICB1bml0U3lzdGVtOiBvcHRpb25zLnVuaXRTeXN0ZW0sXG4gICAgZXJyb3I6IG9wdGlvbnMuZXJyb3IsXG4gICAgYXZvaWRIaWdod2F5czogb3B0aW9ucy5hdm9pZEhpZ2h3YXlzLFxuICAgIGF2b2lkVG9sbHM6IG9wdGlvbnMuYXZvaWRUb2xscyxcbiAgICBvcHRpbWl6ZVdheXBvaW50czogb3B0aW9ucy5vcHRpbWl6ZVdheXBvaW50cyxcbiAgICBjYWxsYmFjayhyb3V0ZXMpIHtcbiAgICAgIGlmIChyb3V0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBsYXN0Um91dGUgPSByb3V0ZXNbcm91dGVzLmxlbmd0aCAtIDFdO1xuICAgICAgICBjb25zdCBwb2x5bGluZU9wdGlvbnMgPSB7XG4gICAgICAgICAgcGF0aDogbGFzdFJvdXRlLm92ZXJ2aWV3X3BhdGgsXG4gICAgICAgICAgc3Ryb2tlQ29sb3I6IG9wdGlvbnMuc3Ryb2tlQ29sb3IsXG4gICAgICAgICAgc3Ryb2tlT3BhY2l0eTogb3B0aW9ucy5zdHJva2VPcGFjaXR5LFxuICAgICAgICAgIHN0cm9rZVdlaWdodDogb3B0aW9ucy5zdHJva2VXZWlnaHQsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuaWNvbnMpIHtcbiAgICAgICAgICBwb2x5bGluZU9wdGlvbnMuaWNvbnMgPSBvcHRpb25zLmljb25zO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5kcmF3UG9seWxpbmUocG9seWxpbmVPcHRpb25zKTtcblxuICAgICAgICBpZiAob3B0aW9ucy5jYWxsYmFjaykge1xuICAgICAgICAgIG9wdGlvbnMuY2FsbGJhY2sobGFzdFJvdXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gIH0pO1xufTtcblxuLyoqXG4gKiBUcmF2ZWwgYSByb3V0ZSBhdXRvbWF0aWNhbGx5LiBJdCB1c2VzIHRoZSBsYXN0IHJvdXRlIGZvdW5kIGJ5IHtAbGluayBHTWFwcyNnZXRSb3V0ZXN9LlxuICogQGZ1bmN0aW9uIHRyYXZlbFJvdXRlXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBBY2NlcHRzIHRoZSBzYW1lIG9wdGlvbnMgYXMge0BsaW5rIEdNYXBzI2dldFJvdXRlc30uXG4gKiBAcGFyYW0ge3N0cmluZ3xnb29nbGUubWFwcy5MYXRMbmd8Z29vZ2xlLm1hcHMuUGxhY2V8Z29vZ2xlLm1hcHMuTGF0TG5nTGl0ZXJhbH0gb3B0aW9ucy5vcmlnaW4gLSBMb2NhdGlvbiBvZiBvcmlnaW4uXG4gKiBAcGFyYW0ge3N0cmluZ3xnb29nbGUubWFwcy5MYXRMbmd8Z29vZ2xlLm1hcHMuUGxhY2V8Z29vZ2xlLm1hcHMuTGF0TG5nTGl0ZXJhbH0gb3B0aW9ucy5kZXN0aW5hdGlvbiAtIExvY2F0aW9uIG9mIGRlc3RpbmF0aW9uLlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMucm91dGUgLSBBIFtnb29nbGUubWFwcy5EaXJlY3Rpb25zUm91dGVdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNEaXJlY3Rpb25zUm91dGUpIG9iamVjdC4gSWYgc2V0LCBgb3JpZ2luYCBhbmQgYGRlc3RpbmF0aW9uYCBhcmUgaWdub3JlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMuc3RhcnQgLSBGaXJlZCBiZWZvcmUgdGhlIGZpcnN0IHN0ZXAuIEl0IHJlY2VpdmVzIGEgc2luZ2xlIGFyZ3VtZW50LCB3aGljaCBpcyBhIFtEaXJlY3Rpb25zUm91dGVdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNEaXJlY3Rpb25zUm91dGUpIG9iamVjdC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMuc3RlcCAtIEZpcmVkIGVhY2ggc3RlcCBpbiB0aGUgcm91dGUuIEl0IHJlY2VpdmVzIDIgYXJndW1lbnRzLCB3aGljaCBpcyBhIFtEaXJlY3Rpb25zU3RlcF0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI0RpcmVjdGlvbnNTdGVwKSBvYmplY3QgYW5kIHRoZSB0b3RhbCBsZW5ndGggb2YgdGhlIHN0ZXBzLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5lbmQgLSBGaXJlZCBhZnRlciB0aGUgbGFzdCBzdGVwLiBJdCByZWNlaXZlcyBhIHNpbmdsZSBhcmd1bWVudCwgd2hpY2ggaXMgYSBbRGlyZWN0aW9uc1JvdXRlXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjRGlyZWN0aW9uc1JvdXRlKSBvYmplY3QuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS50cmF2ZWxSb3V0ZSA9IGZ1bmN0aW9uIHRyYXZlbFJvdXRlKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMub3JpZ2luICYmIG9wdGlvbnMuZGVzdGluYXRpb24pIHtcbiAgICB0aGlzLmdldFJvdXRlcyh7XG4gICAgICBvcmlnaW46IG9wdGlvbnMub3JpZ2luLFxuICAgICAgZGVzdGluYXRpb246IG9wdGlvbnMuZGVzdGluYXRpb24sXG4gICAgICB0cmF2ZWxNb2RlOiBvcHRpb25zLnRyYXZlbE1vZGUsXG4gICAgICB3YXlwb2ludHM6IG9wdGlvbnMud2F5cG9pbnRzLFxuICAgICAgdW5pdFN5c3RlbTogb3B0aW9ucy51bml0U3lzdGVtLFxuICAgICAgZXJyb3I6IG9wdGlvbnMuZXJyb3IsXG4gICAgICBjYWxsYmFjayhyb3V0ZXMpIHtcbiAgICAgICAgaWYgKHJvdXRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsYXN0Um91dGUgPSByb3V0ZXNbcm91dGVzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgIC8vIHN0YXJ0IGNhbGxiYWNrXG4gICAgICAgIGlmIChvcHRpb25zLnN0YXJ0KSB7XG4gICAgICAgICAgb3B0aW9ucy5zdGFydChsYXN0Um91dGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3RlcCBjYWxsYmFja1xuICAgICAgICBpZiAob3B0aW9ucy5zdGVwKSB7XG4gICAgICAgICAgaWYgKGxhc3RSb3V0ZS5sZWdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHsgc3RlcHMsIH0gPSBsYXN0Um91dGUubGVnc1swXTtcblxuICAgICAgICAgICAgc3RlcHMuZm9yRWFjaCgoc3RlcCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgICAgIHN0ZXAuc3RlcF9udW1iZXIgPSBpbmRleDtcbiAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgICAgIHN0ZXAuc3RlcE51bWJlciA9IGluZGV4O1xuXG4gICAgICAgICAgICAgIG9wdGlvbnMuc3RlcChzdGVwLCBzdGVwcy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVuZCBjYWxsYmFja1xuICAgICAgICBpZiAob3B0aW9ucy5lbmQpIHtcbiAgICAgICAgICBvcHRpb25zLmVuZChsYXN0Um91dGUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pO1xuICB9IGVsc2UgaWYgKG9wdGlvbnMucm91dGUpIHtcbiAgICBpZiAob3B0aW9ucy5yb3V0ZS5sZWdzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHsgc3RlcHMsIH0gPSBvcHRpb25zLnJvdXRlLmxlZ3NbMF07XG5cbiAgICAgIHN0ZXBzLmZvckVhY2goKHN0ZXAsIGluZGV4KSA9PiB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICBzdGVwLnN0ZXBfbnVtYmVyID0gaW5kZXg7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICBzdGVwLnN0ZXBOdW1iZXIgPSBpbmRleDtcblxuICAgICAgICBvcHRpb25zLnN0ZXAoc3RlcCwgc3RlcHMubGVuZ3RoIC0gMSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogRHJhdyBhbmQgdHJhdmVsIGEgcm91dGUgYXV0b21hdGljYWxseSBzdGVwIGJ5IHN0ZXAuIEl0IHVzZXMgdGhlIGxhc3Qgcm91dGUgZm91bmQgYnkge0BsaW5rIEdNYXBzI2dldFJvdXRlc30uXG4gKiBAZnVuY3Rpb24gZHJhd1N0ZXBwZWRSb3V0ZVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gQWNjZXB0cyB0aGUgc2FtZSBvcHRpb25zIGFzIHtAbGluayBHTWFwcyN0cmF2ZWxSb3V0ZX0uXG4gKiBAcGFyYW0ge3N0cmluZ3xnb29nbGUubWFwcy5MYXRMbmd8Z29vZ2xlLm1hcHMuUGxhY2V8Z29vZ2xlLm1hcHMuTGF0TG5nTGl0ZXJhbH0gb3B0aW9ucy5vcmlnaW4gLSBMb2NhdGlvbiBvZiBvcmlnaW4uXG4gKiBAcGFyYW0ge3N0cmluZ3xnb29nbGUubWFwcy5MYXRMbmd8Z29vZ2xlLm1hcHMuUGxhY2V8Z29vZ2xlLm1hcHMuTGF0TG5nTGl0ZXJhbH0gb3B0aW9ucy5kZXN0aW5hdGlvbiAtIExvY2F0aW9uIG9mIGRlc3RpbmF0aW9uLlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMucm91dGUgLSBBIFtnb29nbGUubWFwcy5EaXJlY3Rpb25zUm91dGVdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNEaXJlY3Rpb25zUm91dGUpIG9iamVjdC4gSWYgc2V0LCBgb3JpZ2luYCBhbmQgYGRlc3RpbmF0aW9uYCBhcmUgaWdub3JlZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnN0cm9rZUNvbG9yIC0gQ29sb3Igb2YgdGhlIHBvbHlsaW5lLiBDYW4gYmUgaGV4YWRlY2ltYWwgb3IgQ1NTIG5hbWUuXG4gKiBAcGFyYW0ge2Zsb2F0fSBvcHRpb25zLnN0cm9rZU9wYWNpdHkgLSBPcGFjaXR5IG9mIHRoZSBwb2x5bGluZSBmcm9tIDAuMCB0byAxLjBcbiAqIEBwYXJhbSB7aW50ZWdlcn0gb3B0aW9ucy5zdHJva2VXZWlnaHQgLSBQb2x5bGluZSB3aWR0aCBpbiBwaXhlbHMuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLnN0YXJ0IC0gRmlyZWQgYmVmb3JlIHRoZSBmaXJzdCBzdGVwLiBJdCByZWNlaXZlcyBhIHNpbmdsZSBhcmd1bWVudCwgd2hpY2ggaXMgYSBbRGlyZWN0aW9uc1JvdXRlXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjRGlyZWN0aW9uc1JvdXRlKSBvYmplY3QuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLnN0ZXAgLSBGaXJlZCBlYWNoIHN0ZXAgaW4gdGhlIHJvdXRlLiBJdCByZWNlaXZlcyAyIGFyZ3VtZW50cywgd2hpY2ggaXMgYSBbRGlyZWN0aW9uc1N0ZXBdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNEaXJlY3Rpb25zU3RlcCkgb2JqZWN0IGFuZCB0aGUgdG90YWwgbGVuZ3RoIG9mIHRoZSBzdGVwcy5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMuZW5kIC0gRmlyZWQgYWZ0ZXIgdGhlIGxhc3Qgc3RlcC4gSXQgcmVjZWl2ZXMgYSBzaW5nbGUgYXJndW1lbnQsIHdoaWNoIGlzIGEgW0RpcmVjdGlvbnNSb3V0ZV0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI0RpcmVjdGlvbnNSb3V0ZSkgb2JqZWN0LlxuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5kcmF3U3RlcHBlZFJvdXRlID0gZnVuY3Rpb24gZHJhd1N0ZXBwZWRSb3V0ZShvcHRpb25zKSB7XG4gIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gIHRoaXMudHJhdmVsUm91dGUoe1xuICAgIC4uLm9wdGlvbnMsXG4gICAgc3RlcDogZnVuY3Rpb24gc3RlcChyb3V0ZVN0ZXAsIHN0ZXBzQ291bnQpIHtcbiAgICAgIGNvbnN0IHBvbHlsaW5lT3B0aW9ucyA9IHtcbiAgICAgICAgcGF0aDogcm91dGVTdGVwLnBhdGgsXG4gICAgICAgIHN0cm9rZUNvbG9yOiBvcHRpb25zLnN0cm9rZUNvbG9yLFxuICAgICAgICBzdHJva2VPcGFjaXR5OiBvcHRpb25zLnN0cm9rZU9wYWNpdHksXG4gICAgICAgIHN0cm9rZVdlaWdodDogb3B0aW9ucy5zdHJva2VXZWlnaHQsXG4gICAgICB9O1xuXG4gICAgICBpZiAob3B0aW9ucy5pY29ucykge1xuICAgICAgICBwb2x5bGluZU9wdGlvbnMuaWNvbnMgPSBvcHRpb25zLmljb25zO1xuICAgICAgfVxuXG4gICAgICBzZWxmLmRyYXdQb2x5bGluZShwb2x5bGluZU9wdGlvbnMpO1xuXG4gICAgICBvcHRpb25zLnN0ZXAocm91dGVTdGVwLCBzdGVwc0NvdW50KTtcbiAgICB9LFxuICB9KTtcblxuICAvLyBpZiAob3B0aW9ucy5vcmlnaW4gJiYgb3B0aW9ucy5kZXN0aW5hdGlvbikge1xuICAvLyAgIHRoaXMuZ2V0Um91dGVzKHtcbiAgLy8gICAgIG9yaWdpbjogb3B0aW9ucy5vcmlnaW4sXG4gIC8vICAgICBkZXN0aW5hdGlvbjogb3B0aW9ucy5kZXN0aW5hdGlvbixcbiAgLy8gICAgIHRyYXZlbE1vZGU6IG9wdGlvbnMudHJhdmVsTW9kZSxcbiAgLy8gICAgIHdheXBvaW50czogb3B0aW9ucy53YXlwb2ludHMsXG4gIC8vICAgICBlcnJvcjogb3B0aW9ucy5lcnJvcixcbiAgLy8gICAgIGNhbGxiYWNrKHJvdXRlcykge1xuICAvLyAgICAgICBpZiAocm91dGVzLmxlbmd0aCA9PT0gMCkge1xuICAvLyAgICAgICAgIHJldHVybjtcbiAgLy8gICAgICAgfVxuXG4gIC8vICAgICAgIGNvbnN0IHJvdXRlID0gcm91dGVzW3JvdXRlcy5sZW5ndGggLSAxXTtcblxuICAvLyAgICAgICAvLyBzdGFydCBjYWxsYmFja1xuICAvLyAgICAgICBpZiAob3B0aW9ucy5zdGFydCkge1xuICAvLyAgICAgICAgIG9wdGlvbnMuc3RhcnQocm91dGUpO1xuICAvLyAgICAgICB9XG5cbiAgLy8gICAgICAgLy8gc3RlcCBjYWxsYmFja1xuICAvLyAgICAgICBpZiAob3B0aW9ucy5zdGVwKSB7XG4gIC8vICAgICAgICAgaWYgKHJvdXRlLmxlZ3MubGVuZ3RoID4gMCkge1xuICAvLyAgICAgICAgICAgY29uc3QgeyBzdGVwcywgfSA9IHJvdXRlLmxlZ3NbMF07XG5cbiAgLy8gICAgICAgICAgIHN0ZXBzLmZvckVhY2goKHN0ZXAsIGluZGV4KSA9PiB7XG4gIC8vICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAvLyAgICAgICAgICAgICBzdGVwLnN0ZXBfbnVtYmVyID0gaW5kZXg7XG4gIC8vICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAvLyAgICAgICAgICAgICBzdGVwLnN0ZXBOdW1iZXIgPSBpbmRleDtcblxuICAvLyAgICAgICAgICAgICBjb25zdCBwb2x5bGluZU9wdGlvbnMgPSB7XG4gIC8vICAgICAgICAgICAgICAgcGF0aDogc3RlcC5wYXRoLFxuICAvLyAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiBvcHRpb25zLnN0cm9rZUNvbG9yLFxuICAvLyAgICAgICAgICAgICAgIHN0cm9rZU9wYWNpdHk6IG9wdGlvbnMuc3Ryb2tlT3BhY2l0eSxcbiAgLy8gICAgICAgICAgICAgICBzdHJva2VXZWlnaHQ6IG9wdGlvbnMuc3Ryb2tlV2VpZ2h0LFxuICAvLyAgICAgICAgICAgICB9O1xuXG4gIC8vICAgICAgICAgICAgIGlmIChvcHRpb25zLmljb25zKSB7XG4gIC8vICAgICAgICAgICAgICAgcG9seWxpbmVPcHRpb25zLmljb25zID0gb3B0aW9ucy5pY29ucztcbiAgLy8gICAgICAgICAgICAgfVxuXG4gIC8vICAgICAgICAgICAgIHNlbGYuZHJhd1BvbHlsaW5lKHBvbHlsaW5lT3B0aW9ucyk7XG4gIC8vICAgICAgICAgICAgIG9wdGlvbnMuc3RlcChzdGVwLCAocm91dGUubGVnc1swXS5zdGVwcy5sZW5ndGggLSAxKSk7XG4gIC8vICAgICAgICAgICB9KTtcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgIH1cblxuICAvLyAgICAgICAvLyBlbmQgY2FsbGJhY2tcbiAgLy8gICAgICAgaWYgKG9wdGlvbnMuZW5kKSB7XG4gIC8vICAgICAgICAgb3B0aW9ucy5lbmQocm91dGUpO1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9LFxuICAvLyAgIH0pO1xuICAvLyB9IGVsc2UgaWYgKG9wdGlvbnMucm91dGUpIHtcbiAgLy8gICBpZiAob3B0aW9ucy5yb3V0ZS5sZWdzLmxlbmd0aCA+IDApIHtcbiAgLy8gICAgIGNvbnN0IHsgc3RlcHMsIH0gPSBvcHRpb25zLnJvdXRlLmxlZ3NbMF07XG5cbiAgLy8gICAgIHN0ZXBzLmZvckVhY2goKHN0ZXAsIGluZGV4KSA9PiB7XG4gIC8vICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAvLyAgICAgICBzdGVwLnN0ZXBfbnVtYmVyID0gaW5kZXg7XG4gIC8vICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAvLyAgICAgICBzdGVwLnN0ZXBOdW1iZXIgPSBpbmRleDtcblxuICAvLyAgICAgICBjb25zdCBwb2x5bGluZU9wdGlvbnMgPSB7XG4gIC8vICAgICAgICAgcGF0aDogc3RlcC5wYXRoLFxuICAvLyAgICAgICAgIHN0cm9rZUNvbG9yOiBvcHRpb25zLnN0cm9rZUNvbG9yLFxuICAvLyAgICAgICAgIHN0cm9rZU9wYWNpdHk6IG9wdGlvbnMuc3Ryb2tlT3BhY2l0eSxcbiAgLy8gICAgICAgICBzdHJva2VXZWlnaHQ6IG9wdGlvbnMuc3Ryb2tlV2VpZ2h0LFxuICAvLyAgICAgICB9O1xuXG4gIC8vICAgICAgIGlmIChvcHRpb25zLmljb25zKSB7XG4gIC8vICAgICAgICAgcG9seWxpbmVPcHRpb25zLmljb25zID0gb3B0aW9ucy5pY29ucztcbiAgLy8gICAgICAgfVxuXG4gIC8vICAgICAgIHNlbGYuZHJhd1BvbHlsaW5lKHBvbHlsaW5lT3B0aW9ucyk7XG5cbiAgLy8gICAgICAgb3B0aW9ucy5zdGVwKHN0ZXApO1xuICAvLyAgICAgfSk7XG4gIC8vICAgfVxuICAvLyB9XG59O1xuXG5jbGFzcyBSb3V0ZSB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLm9yaWdpbiA9IG9wdGlvbnMub3JpZ2luO1xuICAgIHRoaXMuZGVzdGluYXRpb24gPSBvcHRpb25zLmRlc3RpbmF0aW9uO1xuICAgIHRoaXMud2F5cG9pbnRzID0gb3B0aW9ucy53YXlwb2ludHM7XG5cbiAgICB0aGlzLm1hcCA9IG9wdGlvbnMubWFwO1xuICAgIHRoaXMucm91dGUgPSBvcHRpb25zLnJvdXRlO1xuICAgIHRoaXMuc3RlcF9jb3VudCA9IDA7XG4gICAgdGhpcy5zdGVwcyA9IHRoaXMucm91dGUubGVnc1swXS5zdGVwcztcbiAgICB0aGlzLnN0ZXBzX2xlbmd0aCA9IHRoaXMuc3RlcHMubGVuZ3RoO1xuXG4gICAgY29uc3QgcG9seWxpbmVPcHRpb25zID0ge1xuICAgICAgcGF0aDogbmV3IGdvb2dsZS5tYXBzLk1WQ0FycmF5KCksXG4gICAgICBzdHJva2VDb2xvcjogb3B0aW9ucy5zdHJva2VDb2xvcixcbiAgICAgIHN0cm9rZU9wYWNpdHk6IG9wdGlvbnMuc3Ryb2tlT3BhY2l0eSxcbiAgICAgIHN0cm9rZVdlaWdodDogb3B0aW9ucy5zdHJva2VXZWlnaHQsXG4gICAgfTtcblxuICAgIGlmIChvcHRpb25zLmljb25zKSB7XG4gICAgICBwb2x5bGluZU9wdGlvbnMuaWNvbnMgPSBvcHRpb25zLmljb25zO1xuICAgIH1cblxuICAgIHRoaXMucG9seWxpbmUgPSB0aGlzLm1hcC5kcmF3UG9seWxpbmUocG9seWxpbmVPcHRpb25zKS5nZXRQYXRoKCk7XG4gIH1cblxuICBnZXRSb3V0ZShvcHRpb25zKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLm1hcC5nZXRSb3V0ZXMoe1xuICAgICAgb3JpZ2luOiB0aGlzLm9yaWdpbixcbiAgICAgIGRlc3RpbmF0aW9uOiB0aGlzLmRlc3RpbmF0aW9uLFxuICAgICAgdHJhdmVsTW9kZTogb3B0aW9ucy50cmF2ZWxNb2RlLFxuICAgICAgd2F5cG9pbnRzOiB0aGlzLndheXBvaW50cyB8fCBbXSxcbiAgICAgIGVycm9yOiBvcHRpb25zLmVycm9yLFxuICAgICAgY2FsbGJhY2socm91dGVzKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICBzZWxmLnJvdXRlID0gcm91dGVzWzBdO1xuXG4gICAgICAgIGlmIChvcHRpb25zLmNhbGxiYWNrKSB7XG4gICAgICAgICAgb3B0aW9ucy5jYWxsYmFjay5jYWxsKHNlbGYpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgYmFjaygpIHtcbiAgICBpZiAodGhpcy5zdGVwX2NvdW50ID4gMCkge1xuICAgICAgdGhpcy5zdGVwX2NvdW50IC09IDE7XG4gICAgICBjb25zdCB7IHBhdGgsIH0gPSB0aGlzLnJvdXRlLmxlZ3NbMF0uc3RlcHNbdGhpcy5zdGVwX2NvdW50XTtcblxuICAgICAgcGF0aC5mb3JFYWNoKCgpID0+IHRoaXMucG9seWxpbmUucG9wKCkpO1xuICAgIH1cbiAgfVxuXG4gIGZvcndhcmQoKSB7XG4gICAgaWYgKHRoaXMuc3RlcF9jb3VudCA8IHRoaXMuc3RlcHNfbGVuZ3RoKSB7XG4gICAgICBjb25zdCB7IHBhdGgsIH0gPSB0aGlzLnJvdXRlLmxlZ3NbMF0uc3RlcHNbdGhpcy5zdGVwX2NvdW50XTtcblxuICAgICAgcGF0aC5mb3JFYWNoKGNvb3JkaW5hdGUgPT4gdGhpcy5wb2x5bGluZS5wdXNoKGNvb3JkaW5hdGUpKTtcblxuICAgICAgdGhpcy5zdGVwX2NvdW50ICs9IDE7XG4gICAgfVxuICB9XG59XG5cbkdNYXBzLlJvdXRlID0gUm91dGU7XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXBzO1xuIiwiaW1wb3J0IEdNYXBzIGZyb20gJy4vY29yZSc7XG5cbmNvbnN0IHBhcnNlQ29sb3IgPSAoY29sb3IsIG9wYWNpdHkpID0+IHtcbiAgbGV0IHBhcnNlZENvbG9yO1xuXG4gIGlmIChjb2xvclswXSA9PT0gJyMnKSB7XG4gICAgcGFyc2VkQ29sb3IgPSBjb2xvci5yZXBsYWNlKCcjJywgJzB4Jyk7XG5cbiAgICBpZiAob3BhY2l0eSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBvcGFjaXR5ID0gTWF0aC5taW4oMSwgTWF0aC5tYXgocGFyc2VGbG9hdChvcGFjaXR5KSwgMCkpO1xuXG4gICAgICBpZiAob3BhY2l0eSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJzB4MDAwMDAwMDAnO1xuICAgICAgfVxuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG9wYWNpdHkgPSAob3BhY2l0eSAqIDI1NSkudG9TdHJpbmcoMTYpO1xuXG4gICAgICBpZiAob3BhY2l0eS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIG9wYWNpdHkgKz0gb3BhY2l0eTtcbiAgICAgIH1cblxuICAgICAgcGFyc2VkQ29sb3IgPSBwYXJzZWRDb2xvci5zbGljZSgwLCA4KSArIG9wYWNpdHk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnNlZENvbG9yO1xufTtcblxuLyoqXG4gKiBFeHRlbmRzIEdNYXBzIHRvIGdlbmVyYXRlIHN0YXRpYyBtYXBzLlxuICogQG1vZHVsZSBTdGF0aWNcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gVVJMIGZvciBhIHN0YXRpYyBtYXAgZnJvbSBjdXJyZW50IEdNYXBzIG1hcC5cbiAqIEBmdW5jdGlvbiB0b0ltYWdlXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgYG9wdGlvbnNgIG9iamVjdCBzaG91bGQgY29udGFpbjpcbiAqIEBwYXJhbSB7YXJyYXl9IG9wdGlvbnMuc2l6ZSAtIFdpZHRoIGFuZCBoZWlnaHQgb2YgdGhlIGltYWdlLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbkdNYXBzLnByb3RvdHlwZS50b0ltYWdlID0gZnVuY3Rpb24gdG9JbWFnZShvcHRpb25zID0ge30pIHtcbiAgY29uc3QgeyBzaXplID0gW3RoaXMuZWxlbWVudC5jbGllbnRXaWR0aCwgdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodF0sIHpvb20gPSB0aGlzLmdldFpvb20oKSwgfSA9IG9wdGlvbnM7XG5cbiAgY29uc3Qgc3RhdGljTWFwT3B0aW9ucyA9IHtcbiAgICBzaXplLFxuICAgIHpvb20sXG4gICAgbGF0aXR1ZGU6IHRoaXMuZ2V0Q2VudGVyKCkubGF0KCksXG4gICAgbG9uZ2l0dWRlOiB0aGlzLmdldENlbnRlcigpLmxuZygpLFxuICAgIG1hcmtlcnM6IHRoaXMubWFya2Vycy5tYXAobWFya2VyID0+ICh7XG4gICAgICBsYXRpdHVkZTogbWFya2VyLmdldFBvc2l0aW9uKCkubGF0KCksXG4gICAgICBsb25naXR1ZGU6IG1hcmtlci5nZXRQb3NpdGlvbigpLmxuZygpLFxuICAgIH0pKSxcbiAgfTtcblxuICBpZiAodGhpcy5wb2x5bGluZXMubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHBvbHlsaW5lID0gdGhpcy5wb2x5bGluZXNbMF07XG5cbiAgICBzdGF0aWNNYXBPcHRpb25zLnBvbHlsaW5lID0ge1xuICAgICAgcGF0aDogZ29vZ2xlLm1hcHMuZ2VvbWV0cnkuZW5jb2RpbmcuZW5jb2RlUGF0aChwb2x5bGluZS5nZXRQYXRoKCkpLFxuICAgICAgc3Ryb2tlQ29sb3I6IHBvbHlsaW5lLnN0cm9rZUNvbG9yLFxuICAgICAgc3Ryb2tlT3BhY2l0eTogcG9seWxpbmUuc3Ryb2tlT3BhY2l0eSxcbiAgICAgIHN0cm9rZVdlaWdodDogcG9seWxpbmUuc3Ryb2tlV2VpZ2h0LFxuICAgIH07XG4gIH1cblxuICByZXR1cm4gR01hcHMuc3RhdGljTWFwVVJMKHN0YXRpY01hcE9wdGlvbnMpO1xufTtcblxuY29uc3QgYnVpbGRNYXJrZXJQYXJhbWV0ZXJzID0gKG1hcmtlcikgPT4ge1xuICBjb25zdCBtYXJrZXJQYXJhbWV0ZXJzID0gW107XG5cbiAgY29uc3QgeyBhZGRyZXNzLCBsYXQsIGxhdGl0dWRlID0gbGF0LCBsbmcsIGxvbmdpdHVkZSA9IGxuZywgc2l6ZSwgaWNvbiwgY29sb3IsIGxhYmVsLCAuLi5tYXJrZXJPcHRpb25zIH0gPSBtYXJrZXI7XG5cbiAgY29uc3QgbG9jYXRpb24gPSBhZGRyZXNzIHx8IGAke2xhdGl0dWRlfSwke2xvbmdpdHVkZX1gO1xuXG4gIGlmIChzaXplKSB7XG4gICAgbWFya2VyUGFyYW1ldGVycy5wdXNoKGBzaXplOiR7c2l6ZX1gKTtcbiAgfVxuXG4gIGlmIChpY29uKSB7XG4gICAgbWFya2VyUGFyYW1ldGVycy5wdXNoKGBpY29uOiR7ZW5jb2RlVVJJKGljb24pfWApO1xuICB9XG5cbiAgaWYgKGNvbG9yKSB7XG4gICAgbWFya2VyUGFyYW1ldGVycy5wdXNoKGBjb2xvcjoke2NvbG9yLnJlcGxhY2UoJyMnLCAnMHgnKX1gKTtcbiAgfVxuXG4gIGlmIChsYWJlbCkge1xuICAgIG1hcmtlclBhcmFtZXRlcnMucHVzaChgbGFiZWw6JHtsYWJlbFswXS50b1VwcGVyQ2FzZSgpfWApO1xuICB9XG5cbiAgT2JqZWN0LmtleXMobWFya2VyT3B0aW9ucykuZm9yRWFjaChrZXkgPT4gbWFya2VyUGFyYW1ldGVycy5wdXNoKGAke2tleX06JHttYXJrZXJQYXJhbWV0ZXJzW2tleV19YCkpO1xuXG4gIG1hcmtlclBhcmFtZXRlcnMucHVzaChsb2NhdGlvbik7XG5cbiAgcmV0dXJuIG1hcmtlclBhcmFtZXRlcnM7XG59O1xuXG5jb25zdCBidWlsZFBhdGhQYXJhbWV0ZXJzID0gKHBvbHlsaW5lKSA9PiB7XG4gIGNvbnN0IHsgcGF0aCwgfSA9IHBvbHlsaW5lO1xuICBjb25zdCBwb2x5bGluZVBhcmFtZXRlcnMgPSBbXTtcblxuICBpZiAocG9seWxpbmUuc3Ryb2tlV2VpZ2h0KSB7XG4gICAgcG9seWxpbmVQYXJhbWV0ZXJzLnB1c2goYHdlaWdodDoke3BhcnNlSW50KHBvbHlsaW5lLnN0cm9rZVdlaWdodCwgMTApfWApO1xuICB9XG5cbiAgaWYgKHBvbHlsaW5lLnN0cm9rZUNvbG9yKSB7XG4gICAgcG9seWxpbmVQYXJhbWV0ZXJzLnB1c2goYGNvbG9yOiR7cGFyc2VDb2xvcihwb2x5bGluZS5zdHJva2VDb2xvciwgcG9seWxpbmUuc3Ryb2tlT3BhY2l0eSl9YCk7XG4gIH1cblxuICBpZiAocG9seWxpbmUuZmlsbENvbG9yKSB7XG4gICAgcG9seWxpbmVQYXJhbWV0ZXJzLnB1c2goYGZpbGxjb2xvcjoke3BhcnNlQ29sb3IocG9seWxpbmUuZmlsbENvbG9yLCBwb2x5bGluZS5maWxsT3BhY2l0eSl9YCk7XG4gIH1cblxuICBpZiAocGF0aC5qb2luKSB7XG4gICAgcGF0aC5mb3JFYWNoKGNvb3JkaW5hdGVzID0+IHBvbHlsaW5lUGFyYW1ldGVycy5wdXNoKGNvb3JkaW5hdGVzLmpvaW4oJywnKSkpO1xuICB9IGVsc2Uge1xuICAgIHBvbHlsaW5lUGFyYW1ldGVycy5wdXNoKGBlbmM6JHtwYXRofWApO1xuICB9XG5cbiAgcmV0dXJuIHBvbHlsaW5lUGFyYW1ldGVycztcbn07XG5cbmNvbnN0IGJ1aWxkU3R5bGVQYXJhbWV0ZXJzID0gKHN0eWxlKSA9PiB7XG4gIGNvbnN0IHN0eWxlUGFyYW1ldGVycyA9IFtdO1xuXG4gIGlmIChzdHlsZS5mZWF0dXJlVHlwZSkge1xuICAgIHN0eWxlUGFyYW1ldGVycy5wdXNoKGBmZWF0dXJlOiR7c3R5bGUuZmVhdHVyZVR5cGUudG9Mb3dlckNhc2UoKX1gKTtcbiAgfVxuXG4gIGlmIChzdHlsZS5lbGVtZW50VHlwZSkge1xuICAgIHN0eWxlUGFyYW1ldGVycy5wdXNoKGBlbGVtZW50OiR7c3R5bGUuZWxlbWVudFR5cGUudG9Mb3dlckNhc2UoKX1gKTtcbiAgfVxuXG4gIGlmIChzdHlsZS5zdHlsZXJzLmxlbmd0aCkge1xuICAgIHN0eWxlLnN0eWxlcnMuZm9yRWFjaCgoc3R5bGVyKSA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhzdHlsZXIpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IChrZXkgPT09ICdodWUnIHx8IGtleSA9PT0gJ2NvbG9yJykgPyBzdHlsZXJba2V5XS5yZXBsYWNlKCcjJywgJzB4JykgOiBzdHlsZXJba2V5XTtcblxuICAgICAgICBzdHlsZVBhcmFtZXRlcnMucHVzaChgJHtrZXl9OiR7dmFsdWV9YCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZVBhcmFtZXRlcnM7XG59O1xuXG5HTWFwcy5zdGF0aWNNYXBVUkwgPSBmdW5jdGlvbiBzdGF0aWNNYXBVUkwoYmFzZU9wdGlvbnMpIHtcbiAgY29uc3QgeyB1cmwsIGxhdCwgbGF0aXR1ZGUgPSBsYXQsIGxuZywgbG9uZ2l0dWRlID0gbG5nLCBjZW50ZXIsIGFkZHJlc3MsIHpvb20gPSAxNSwgbWFya2VycyA9IFtdLCBzdHlsZXMsIHBvbHlsaW5lLCB2aXNpYmxlLCBzaXplID0gWzYzMCwgMzAwXSwgLi4ub3B0aW9ucyB9ID0gYmFzZU9wdGlvbnM7XG4gIGNvbnN0IGRlZmF1bHRSb290ID0gYCR7d2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSAnZmlsZTonID8gJ2h0dHA6JyA6IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbH0vL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvc3RhdGljbWFwYDtcblxuICBsZXQgcm9vdCA9IHVybCB8fCBkZWZhdWx0Um9vdDtcbiAgY29uc3QgcGFyYW1ldGVycyA9IFtdO1xuXG4gIHJvb3QgKz0gJz8nO1xuXG4gIC8vIE1hcCBvcHRpb25zXG4gIGlmIChjZW50ZXIpIHtcbiAgICBwYXJhbWV0ZXJzLnB1c2goYGNlbnRlcj0ke2NlbnRlcn1gKTtcbiAgfSBlbHNlIGlmIChhZGRyZXNzKSB7XG4gICAgcGFyYW1ldGVycy5wdXNoKGBjZW50ZXI9JHthZGRyZXNzfWApO1xuICB9IGVsc2UgaWYgKGxhdGl0dWRlICYmIGxvbmdpdHVkZSkge1xuICAgIHBhcmFtZXRlcnMucHVzaChgY2VudGVyPSR7bGF0aXR1ZGV9LCR7bG9uZ2l0dWRlfWApO1xuICB9IGVsc2UgaWYgKHZpc2libGUpIHtcbiAgICBwYXJhbWV0ZXJzLnB1c2goYHZpc2libGU9JHtlbmNvZGVVUkkodmlzaWJsZS5qb2luKCd8JykpfWApO1xuICB9XG5cbiAgcGFyYW1ldGVycy5wdXNoKGBzaXplPSR7c2l6ZS5qb2luKCd4Jyl9YCk7XG4gIHBhcmFtZXRlcnMucHVzaChgem9vbT0ke3pvb219YCk7XG5cbiAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChrZXkgPT4gcGFyYW1ldGVycy5wdXNoKGAke2tleX09JHtvcHRpb25zW2tleV19YCkpO1xuXG4gIC8vIE1hcCBzdHlsZVxuICBpZiAoc3R5bGVzKSB7XG4gICAgc3R5bGVzLmZvckVhY2goKHN0eWxlKSA9PiB7XG4gICAgICBjb25zdCBzdHlsZVBhcmFtZXRlcnMgPSBidWlsZFN0eWxlUGFyYW1ldGVycyhzdHlsZSk7XG5cbiAgICAgIHBhcmFtZXRlcnMucHVzaChgc3R5bGU9JHtlbmNvZGVVUkkoc3R5bGVQYXJhbWV0ZXJzLmpvaW4oJ3wnKSl9YCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBNYXJrZXJzXG4gIGlmIChtYXJrZXJzLmxlbmd0aCkge1xuICAgIG1hcmtlcnMuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICBjb25zdCBtYXJrZXJQYXJhbWV0ZXJzID0gYnVpbGRNYXJrZXJQYXJhbWV0ZXJzKG1hcmtlcik7XG4gICAgICBwYXJhbWV0ZXJzLnB1c2goYG1hcmtlcnM9JHtlbmNvZGVVUkkobWFya2VyUGFyYW1ldGVycy5qb2luKCd8JykpfWApO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gUG9seWxpbmVzXG4gIGlmIChwb2x5bGluZSkge1xuICAgIGNvbnN0IHBvbHlsaW5lUGFyYW1ldGVycyA9IGJ1aWxkUGF0aFBhcmFtZXRlcnMocG9seWxpbmUpO1xuXG4gICAgcGFyYW1ldGVycy5wdXNoKGBwYXRoPSR7ZW5jb2RlVVJJKHBvbHlsaW5lUGFyYW1ldGVycy5qb2luKCd8JykpfWApO1xuICB9XG5cbiAgLy8gUmV0aW5hIHN1cHBvcnRcbiAgY29uc3QgZHBpID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMTtcbiAgcGFyYW1ldGVycy5wdXNoKGBzY2FsZT0ke2RwaX1gKTtcblxuICByZXR1cm4gcm9vdCArIHBhcmFtZXRlcnMuam9pbignJicpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR01hcHM7XG4iLCJpbXBvcnQgR01hcHMsIHsgZ2V0RWxlbWVudEJ5SWQsIHNldHVwRXZlbnRzIH0gZnJvbSAnLi9jb3JlJztcblxuLyoqXG4gKiBFeHRlbmRzIEdNYXBzIHRvIHVzZSBTdHJlZXRWaWV3IHBhbm9yYW1hc1xuICogQG1vZHVsZSBTdHJlZXRWaWV3XG4gKi9cblxuY29uc3QgU1RSRUVUVklFV19FVkVOVFMgPSBbJ2Nsb3NlY2xpY2snLCAnbGlua3NfY2hhbmdlZCcsICdwYW5vX2NoYW5nZWQnLCAncG9zaXRpb25fY2hhbmdlZCcsICdwb3ZfY2hhbmdlZCcsICdyZXNpemUnLCAndmlzaWJsZV9jaGFuZ2VkJ107XG5cbi8qKlxuICogRGlzcGxheSBhIFN0cmVldCBWaWV3IFBhbm9yYW1hIGZvciBhIHBvc2l0aW9uLlxuICogQGZ1bmN0aW9uIGNyZWF0ZVBhbm9yYW1hXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgYG9wdGlvbnNgIG9iamVjdCBzaG91bGQgY29udGFpbjpcbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLmxhdGl0dWRlIC0gTGF0aXR1ZGUgb2YgdGhlIGNvb3JkaW5hdGUgd2hlcmUgdGhlIHBhbm9yYW1hIGlzIHBsYWNlZC4gSWYgbm90IHNldCwgaXQgdGFrZXMgdGhlIE1hcCdzIGNlbnRlci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLmxvbmdpdHVkZSAtIExvbmdpdHVkZSBvZiB0aGUgY29vcmRpbmF0ZSB3aGVyZSB0aGUgcGFub3JhbWEgaXMgcGxhY2VkLiBJZiBub3Qgc2V0LCBpdCB0YWtlcyB0aGUgTWFwJ3MgY2VudGVyLlxuICogQHBhcmFtIHtnb29nbGUubWFwcy5MYXRMbmd9IG9wdGlvbnMucG9zaXRpb24gLSBBIGBnb29nbGUubWFwcy5MYXRMbmdgIGNvb3JkaW5hdGUgd2hlcmUgdGhlIHBhbm9yYW1hIGlzIHBsYWNlZC4gSWYgc2V0LCBgbGF0aXR1ZGVgIGFuZCBgbG9uZ2l0dWRlYCBhcmUgaWdub3JlZC5cbiAqXG4gKiBAc2VlIGBvcHRpb25zYCBhbHNvIGFjY2VwdHMgYW55IG9wdGlvbiBkZWZpbmVkIGluIHRoZSBbb2ZmaWNpYWwgZG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI1N0cmVldFZpZXdQYW5vcmFtYU9wdGlvbnMpIGFuZCBhbnkgZXZlbnQgZGVmaW5lZCBpbiB0aGUgW1wiRXZlbnRzXCIgc2VjdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI1N0cmVldFZpZXdQYW5vcmFtYSkuXG4gKlxuICogQHJldHVybnMge2dvb2dsZS5tYXBzLlN0cmVldFZpZXdQYW5vcmFtYX1cbiAqL1xuR01hcHMucHJvdG90eXBlLmNyZWF0ZVBhbm9yYW1hID0gZnVuY3Rpb24gY3JlYXRlUGFub3JhbWEoYmFzZU9wdGlvbnMpIHtcbiAgY29uc3QgeyBsYXQgPSB0aGlzLmdldENlbnRlcigpLmxhdCgpLCBsYXRpdHVkZSA9IGxhdCwgbG5nID0gdGhpcy5nZXRDZW50ZXIoKS5sbmcoKSwgbG9uZ2l0dWRlID0gbG5nLCAuLi5vcHRpb25zIH0gPSBiYXNlT3B0aW9ucztcblxuICBjb25zdCBzdHJlZXRWaWV3T3B0aW9ucyA9IHtcbiAgICBsYXRpdHVkZSxcbiAgICBsb25naXR1ZGUsXG4gICAgaW5zdGFuY2U6IHRoaXMsXG4gICAgLi4ub3B0aW9ucyxcbiAgfTtcblxuICB0aGlzLnBhbm9yYW1hID0gR01hcHMuY3JlYXRlUGFub3JhbWEoc3RyZWV0Vmlld09wdGlvbnMpO1xuXG4gIHRoaXMubWFwLnNldFN0cmVldFZpZXcodGhpcy5wYW5vcmFtYSk7XG5cbiAgcmV0dXJuIHRoaXMucGFub3JhbWE7XG59O1xuXG5HTWFwcy5jcmVhdGVQYW5vcmFtYSA9IGZ1bmN0aW9uIGNyZWF0ZVBhbm9yYW1hKGJhc2VPcHRpb25zKSB7XG4gIGNvbnN0IHtcbiAgICBlbCxcbiAgICBlbGVtZW50ID0gZWwsXG4gICAgY29udGV4dCxcbiAgICBsYXQsXG4gICAgbGF0aXR1ZGUgPSBsYXQsXG4gICAgbG5nLFxuICAgIGxvbmdpdHVkZSA9IGxuZyxcbiAgICBwb3NpdGlvbiA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobGF0aXR1ZGUsIGxvbmdpdHVkZSksXG4gICAgaW5zdGFuY2UgPSB3aW5kb3csXG4gICAgLi4ub3B0aW9uc1xuICB9ID0gYmFzZU9wdGlvbnM7XG5cbiAgY29uc3QgY29udGFpbmVyRWxlbWVudCA9IGdldEVsZW1lbnRCeUlkKGVsZW1lbnQsIGNvbnRleHQpO1xuXG4gIGNvbnN0IGZpbHRlcmVkT3B0aW9ucyA9IE9iamVjdC5rZXlzKG9wdGlvbnMpLnJlZHVjZSgoaGFzaCwga2V5KSA9PiB7XG4gICAgaWYgKFNUUkVFVFZJRVdfRVZFTlRTLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIHJldHVybiBoYXNoO1xuICAgIH1cblxuICAgIHJldHVybiB7IC4uLmhhc2gsIFtrZXldOiBvcHRpb25zW2tleV0sIH07XG4gIH0sIHt9KTtcblxuICBjb25zdCBzdHJlZXRWaWV3T3B0aW9ucyA9IHtcbiAgICAuLi5maWx0ZXJlZE9wdGlvbnMsXG4gICAgcG9zaXRpb24sXG4gICAgdmlzaWJsZTogdHJ1ZSxcbiAgfTtcblxuICBjb25zdCBwYW5vcmFtYSA9IG5ldyBnb29nbGUubWFwcy5TdHJlZXRWaWV3UGFub3JhbWEoY29udGFpbmVyRWxlbWVudCwgc3RyZWV0Vmlld09wdGlvbnMpO1xuXG4gIHNldHVwRXZlbnRzKHsgZXZlbnRzOiBTVFJFRVRWSUVXX0VWRU5UUywgb2JqZWN0OiBwYW5vcmFtYSwgaW5zdGFuY2UsIGhhbmRsZXJzOiBvcHRpb25zLCB9KTtcblxuICByZXR1cm4gcGFub3JhbWE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHTWFwcztcbiIsImltcG9ydCBHTWFwcyBmcm9tICcuL2NvcmUnO1xuXG4vKipcbiAqIEV4dGVuZHMgR01hcHMgdG8gYWRkIHN0eWxlZCBtYXAgdHlwZXMuXG4gKiBAbW9kdWxlIFN0eWxlc1xuICovXG5cbi8qKlxuICogQWRkIGEgW3N0eWxlZCBtYXAgdHlwZV0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvbWFwdHlwZXMjU3R5bGVkTWFwcykgaW4gdGhlIE1hcCwgd2hpY2ggY2FuIGJlIHVzZWQgd2l0aCB0aGUgYmFzZSBtYXAgdHlwZXMgKGBoeWJyaWRgLCBgcm9hZG1hcGAsIGBzYXRlbGxpdGVgIGFuZCBgdGVycmFpbmApLlxuICogQGZ1bmN0aW9uIGFkZFN0eWxlXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgYG9wdGlvbnNgIG9iamVjdCBzaG91bGQgY29udGFpbjpcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm1hcFR5cGVJZCAtIEEgc2ltcGxlIGlkZW50aWZpZXIgZm9yIHRoZSBzdHlsZWQgbWFwIHR5cGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zdHlsZWRNYXBOYW1lIC0gQSBuYW1lIGZvciB0aGUgc3R5bGVkIG1hcCB0eXBlLiBJdCB3aWxsIGJlIGRpc3BsYXllZCBpbiB0aGUgbWFwIHR5cGUgY29udHJvbC5cbiAqIEBwYXJhbSB7YXJyYXl9IG9wdGlvbnMuc3R5bGVzIC0gQW4gYXJyYXkgb2YgW2BNYXBUeXBlU3R5bGVgXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjTWFwVHlwZVN0eWxlKSBvYmplY3RzLlxuICovXG5HTWFwcy5wcm90b3R5cGUuYWRkU3R5bGUgPSBmdW5jdGlvbiBhZGRTdHlsZShvcHRpb25zKSB7XG4gIGNvbnN0IHN0eWxlZE1hcFR5cGUgPSBuZXcgZ29vZ2xlLm1hcHMuU3R5bGVkTWFwVHlwZShvcHRpb25zLnN0eWxlcywgeyBuYW1lOiBvcHRpb25zLnN0eWxlZE1hcE5hbWUsIH0pO1xuXG4gIHRoaXMubWFwLm1hcFR5cGVzLnNldChvcHRpb25zLm1hcFR5cGVJZCwgc3R5bGVkTWFwVHlwZSk7XG59O1xuXG4vKipcbiAqIFNldCBhIFtzdHlsZWQgbWFwIHR5cGVdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L21hcHR5cGVzI1N0eWxlZE1hcHMpIHRvIHRoZSBNYXAuIFRoZSBtYXAgdHlwZSBzaG91bGQgYmUgZGVmaW5lZCBiZWZvcmUgd2l0aCB7QGxpbmsgR01hcHMjYWRkU3R5bGV9LlxuICogQGZ1bmN0aW9uIHNldFN0eWxlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1hcFR5cGVJZCAtIFRoZSBzdHlsZWQgbWFwIHR5cGUncyBpZGVudGlmaWVyLlxuICovXG5HTWFwcy5wcm90b3R5cGUuc2V0U3R5bGUgPSBmdW5jdGlvbiBzZXRTdHlsZShtYXBUeXBlSWQpIHtcbiAgdGhpcy5tYXAuc2V0TWFwVHlwZUlkKG1hcFR5cGVJZCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHTWFwcztcbiIsImltcG9ydCBHTWFwcyBmcm9tICcuL2NvcmUnO1xuXG4vKipcbiAqIEV4dGVuZHMgR01hcHMgdG8gYWRkIHV0aWxzIGZ1bmN0aW9ucy5cbiAqIEBtb2R1bGUgVXRpbHNcbiAqL1xuXG4vKipcbiAqIEdlb2xvY2F0ZSB1c2luZyBicm93c2VyJ3MgV2ViIEFQSS5cbiAqIEBmdW5jdGlvbiBnZW9sb2NhdGVcbiAqIEBzdGF0aWNcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRoZSBgb3B0aW9uc2Agb2JqZWN0IHNob3VsZCBjb250YWluOlxuICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5hbHdheXMgLSBBIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBhZnRlciB0aGUgYHN1Y2Nlc3NgLCBgZXJyb3JgIGFuZCBgbm90X3N1cHBvcnRlZGAgY2FsbGJhY2tzLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5zdWNjZXNzIC0gQSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgYWZ0ZXIgdGhlIGJyb3dzZXIgZmluZCBpdHMgZ2VvbG9jYXRpb24uXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLmVycm9yIC0gQSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgYWZ0ZXIgdGhlIGJyb3dzZXIgZmFpbHMgYXQgZmluZGluZyBpdHMgZ2VvbG9jYXRpb24uXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLm5vdF9zdXBwb3J0ZWQgLSBBIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBpZiB0aGUgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgZ2VvbG9jYXRpb24uXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucy5vcHRpb25zIC0gT2JqZWN0IHdpdGggYWxsIG9wdGlvbnMgZGVmaW5lZCBpbiBbUG9zaXRpb25PcHRpb25zXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvUG9zaXRpb25PcHRpb25zKS5cbiAqL1xuR01hcHMuZ2VvbG9jYXRlID0gZnVuY3Rpb24gZ2VvbG9jYXRlKG9wdGlvbnMpIHtcbiAgY29uc3QgY29tcGxldGVDYWxsYmFjayA9IG9wdGlvbnMuYWx3YXlzIHx8IG9wdGlvbnMuY29tcGxldGU7XG5cbiAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICB3aW5kb3cubmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigocG9zaXRpb24pID0+IHtcbiAgICAgIGlmIChvcHRpb25zLnN1Y2Nlc3MpIHtcbiAgICAgICAgb3B0aW9ucy5zdWNjZXNzKHBvc2l0aW9uKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbXBsZXRlQ2FsbGJhY2spIHtcbiAgICAgICAgY29tcGxldGVDYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgaWYgKG9wdGlvbnMuZXJyb3IpIHtcbiAgICAgICAgb3B0aW9ucy5lcnJvcihlcnJvcik7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb21wbGV0ZUNhbGxiYWNrKSB7XG4gICAgICAgIGNvbXBsZXRlQ2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9LCBvcHRpb25zLm9wdGlvbnMpO1xuICB9IGVsc2Uge1xuICAgIGlmIChvcHRpb25zLm5vdF9zdXBwb3J0ZWQpIHtcbiAgICAgIG9wdGlvbnMubm90X3N1cHBvcnRlZCgpO1xuICAgIH1cblxuICAgIGlmIChjb21wbGV0ZUNhbGxiYWNrKSB7XG4gICAgICBjb21wbGV0ZUNhbGxiYWNrKCk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEdlb2NvZGUgdXNpbmcgR29vZ2xlIE1hcHMgR2VvY29kaW5nIHNlcnZpY2UuXG4gKiBAZnVuY3Rpb24gZ2VvY29kZVxuICogQHN0YXRpY1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBvYmplY3Qgc2hvdWxkIGNvbnRhaW46XG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5sYXRpdHVkZSAtIExhdGl0dWRlIG9mIHRoZSBjb29yZGluYXRlIHRvIGdlb2NvZGUuIElmIGBsYXRpdHVkZWAgYW5kIGBsb25naXR1ZGVgIGFyZSBzZXQsIGBsb2NhdGlvbmAgaXMgaWdub3JlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLmxvbmdpdHVkZSAtIExvbmdpdHVkZSBvZiB0aGUgY29vcmRpbmF0ZSB0byBnZW9jb2RlLiBJZiBgbGF0aXR1ZGVgIGFuZCBgbG9uZ2l0dWRlYCBhcmUgc2V0LCBgbG9jYXRpb25gIGlzIGlnbm9yZWQuXG4gKiBAcGFyYW0ge2dvb2dsZS5tYXBzLkxhdExuZ30gb3B0aW9ucy5sb2NhdGlvbiAtIEEgYGdvb2dsZS5tYXBzLkxhdExuZ2AgY29vcmRpbmF0ZSB0byBnZW9jb2RlLiBJZiBzZXQsIGBsYXRpdHVkZWAgYW5kIGBsb25naXR1ZGVgIGFyZSBpZ25vcmVkLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5jYWxsYmFjayAtIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBhZnRlciB0aGUgcmVzdWx0cyBhcmUgcmV0dXJuZWQuIEl0IHJlY2VpdmVzIDIgYXJndW1lbnRzLCB3aGljaCBpcyBhbiBhcnJheSBvZiBbR2VvY29kZXJSZXN1bHRdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNHZW9jb2RlclJlc3VsdCkgb2JqZWN0cyBhbmQgdGhlIFtyZXF1ZXN0J3Mgc3RhdHVzXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjR2VvY29kZXJTdGF0dXMpLlxuICpcbiAqIEBzZWUgYG9wdGlvbnNgIGFsc28gYWNjZXB0cyBhbnkgb3B0aW9uIGRlZmluZWQgaW4gdGhlIFtvZmZpY2lhbCBkb2N1bWVudGF0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjR2VvY29kZXJSZXF1ZXN0KS5cbiAqXG4gKi9cbkdNYXBzLmdlb2NvZGUgPSBmdW5jdGlvbiBnZW9jb2RlKGJhc2VPcHRpb25zKSB7XG4gIGNvbnN0IHtcbiAgICBjYWxsYmFjayxcbiAgICBsYXQsXG4gICAgbGF0aXR1ZGUgPSBsYXQsXG4gICAgbG5nLFxuICAgIGxvbmdpdHVkZSA9IGxuZyxcbiAgICBsb2NhdGlvbiA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobGF0aXR1ZGUsIGxvbmdpdHVkZSksXG4gICAgLi4ub3B0aW9uc1xuICB9ID0gYmFzZU9wdGlvbnM7XG5cbiAgdGhpcy5nZW9jb2RlciA9IG5ldyBnb29nbGUubWFwcy5HZW9jb2RlcigpO1xuXG4gIGNvbnN0IGdlb2NvZGVPcHRpb25zID0ge1xuICAgIC4uLm9wdGlvbnMsXG4gICAgbG9jYXRpb24sXG4gIH07XG5cbiAgdGhpcy5nZW9jb2Rlci5nZW9jb2RlKGdlb2NvZGVPcHRpb25zLCBjYWxsYmFjayk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHTWFwcztcbiJdLCJzb3VyY2VSb290IjoiIn0=