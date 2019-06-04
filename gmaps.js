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
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./lib/core.js");
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
  var control = global.document.createElement('div');
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
    } else if (content instanceof global.HTMLElement) {
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./lib/core.js":
/*!*********************!*\
  !*** ./lib/core.js ***!
  \*********************/
/*! exports provided: latLngFromArguments, flattenArray, coordsToLatLngs, arrayToLatLng, getElementById, findAbsolutePosition, setupEventListener, setupEvents, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "latLngFromArguments", function() { return latLngFromArguments; });
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
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (typeof args[0][1] === 'number' && typeof args[0][1] === 'number') {
    return new google.maps.LatLng(args[0][0], args[0][1]);
  }

  return args[0];
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

  if (typeof global.$ === 'function') {
    return $(".".concat(sanitizedClassName), context)[0];
  }

  return global.document.getElementsByClassName(sanitizedClassName)[0];
};

var getElementById = function getElementById(id, context) {
  var sanitizedId = id.replace(/^#/, '');

  if (typeof global.$ === 'function') {
    var elements = $("#".concat(sanitizedId), context) || [];
    return elements[0];
  }

  return global.document.getElementById(sanitizedId);
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
   * * `latitude` (number): Latitude of the map's center
   * * `longitude` (number): Longitude of the map's center
   * * `element` (string or HTMLElement): container where the map will be rendered
   * * `markerClusterer` (function): A function to create a marker cluster. You can use MarkerClusterer or MarkerClustererPlus.
   */
  function GMaps() {
    var _this = this;

    var baseOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, GMaps);

    if (!window.google || !window.google.maps) {
      throw new Error('Google Maps JavaScript API is required. Check: https://developers.google.com/maps/documentation/javascript/tutorial');
    }

    var el = baseOptions.el,
        div = baseOptions.div,
        context = baseOptions.context,
        _baseOptions$element = baseOptions.element,
        element = _baseOptions$element === void 0 ? getElement(el || div, context) : _baseOptions$element,
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
        options = _objectWithoutProperties(baseOptions, ["el", "div", "context", "element", "lat", "latitude", "lng", "longitude", "center", "zoom", "mapType", "zoomControlOpt", "panControl", "zoomControl", "mapTypeControl", "scaleControl", "streetViewControl", "overviewMapControl", "width", "height", "markerClusterer", "enableNewStyle"]);

    if (!element) {
      throw new Error('No element defined. Pass an `element` option in GMaps.');
    }

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

    this.element = element;
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
          }, 500);
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
     * @param {number} lat - Latitude of the coordinate.
     * @param {number} lng - Longitude of the coordinate.
     * @param {function} [callback] - Callback that will be executed after the map is centered.
     */

  }, {
    key: "setCenter",
    value: function setCenter() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var latLng = latLngFromArguments(args);
      var callback = args.pop();
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
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return this.map[methodName].apply(this.map, args);
  };
});
/* harmony default export */ __webpack_exports__["default"] = (GMaps);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

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
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_1__);
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

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.drawPolyline = function drawPolyline(_ref) {
  var icons = _ref.icons,
      strokeColor = _ref.strokeColor,
      strokeOpacity = _ref.strokeOpacity,
      strokeWeight = _ref.strokeWeight,
      geodesic = _ref.geodesic,
      _ref$clickable = _ref.clickable,
      clickable = _ref$clickable === void 0 ? true : _ref$clickable,
      _ref$editable = _ref.editable,
      editable = _ref$editable === void 0 ? false : _ref$editable,
      _ref$visible = _ref.visible,
      visible = _ref$visible === void 0 ? true : _ref$visible,
      zIndex = _ref.zIndex,
      options = _objectWithoutProperties(_ref, ["icons", "strokeColor", "strokeOpacity", "strokeWeight", "geodesic", "clickable", "editable", "visible", "zIndex"]);

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

  var polylineOptions = {
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
  };
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
 * @param {number} options.latitude - Latitude of the center. If `latitude` and `longitude` are set, `center` is ignored.
 * @param {number} options.longitude - Longitude of the center. If `latitude` and `longitude` are set, `center` is ignored.
 * @param {google.maps.LatLng} options.center - A `google.maps.LatLng` coordinate indicate the center. If set, `latitude` and `longitude` are ignored.
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
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./lib/core.js");
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
        if (global.navigator.userAgent.toLowerCase().indexOf('msie') !== -1 && document.all) {
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

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
    origin: Object(_core__WEBPACK_IMPORTED_MODULE_0__["latLngFromArguments"])(origin),
    destination: Object(_core__WEBPACK_IMPORTED_MODULE_0__["latLngFromArguments"])(destination)
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
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./lib/core.js");
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

  var defaultRoot = "".concat(global.location.protocol === 'file:' ? 'http:' : global.location.protocol, "//maps.googleapis.com/maps/api/staticmap");
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./lib/streetview.js":
/*!***************************!*\
  !*** ./lib/streetview.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./lib/core.js");
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
      instance = _baseOptions$instance === void 0 ? global : _baseOptions$instance,
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

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
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./lib/core.js");
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

  if (global.navigator.geolocation) {
    global.navigator.geolocation.getCurrentPosition(function (position) {
      options.success(position);

      if (completeCallback) {
        completeCallback();
      }
    }, function (error) {
      options.error(error);

      if (completeCallback) {
        completeCallback();
      }
    }, options.options);
  } else {
    options.not_supported();

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = $getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    ReflectApply(this.listener, this.target, args);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ })["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HTWFwcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9HTWFwcy8uL2xpYi9jb250cm9scy5qcyIsIndlYnBhY2s6Ly9HTWFwcy8uL2xpYi9jb3JlLmpzIiwid2VicGFjazovL0dNYXBzLy4vbGliL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9HTWFwcy8uL2xpYi9nZW9mZW5jZXMuanMiLCJ3ZWJwYWNrOi8vR01hcHMvLi9saWIvZ2VvbWV0cnkuanMiLCJ3ZWJwYWNrOi8vR01hcHMvLi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vR01hcHMvLi9saWIvbGF5ZXJzLmpzIiwid2VicGFjazovL0dNYXBzLy4vbGliL21hcF90eXBlcy5qcyIsIndlYnBhY2s6Ly9HTWFwcy8uL2xpYi9tYXJrZXJzLmpzIiwid2VicGFjazovL0dNYXBzLy4vbGliL292ZXJsYXlzLmpzIiwid2VicGFjazovL0dNYXBzLy4vbGliL3BvbHlmaWxscy5qcyIsIndlYnBhY2s6Ly9HTWFwcy8uL2xpYi9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vR01hcHMvLi9saWIvc3RhdGljLmpzIiwid2VicGFjazovL0dNYXBzLy4vbGliL3N0cmVldHZpZXcuanMiLCJ3ZWJwYWNrOi8vR01hcHMvLi9saWIvc3R5bGVzLmpzIiwid2VicGFjazovL0dNYXBzLy4vbGliL3V0aWxzLmpzIiwid2VicGFjazovL0dNYXBzLy4vbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vR01hcHMvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRyb2wiLCJzdHlsZSIsImlkIiwidGl0bGUiLCJjbGFzc2VzIiwiY29udGVudCIsInBvc2l0aW9uIiwiZXZlbnRzIiwiZGlzYWJsZURlZmF1bHRTdHlsZXMiLCJjb250cm9sIiwiZ2xvYmFsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY3Vyc29yIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiYm94U2hhZG93IiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJwcm9wZXJ0eSIsImNsYXNzTmFtZSIsImlubmVySFRNTCIsIkhUTUxFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJnb29nbGUiLCJtYXBzIiwiQ29udHJvbFBvc2l0aW9uIiwidG9VcHBlckNhc2UiLCJldmVudE5hbWUiLCJldmVudCIsImFkZERvbUxpc3RlbmVyIiwiY2FsbCIsImluZGV4IiwiR01hcHMiLCJwcm90b3R5cGUiLCJhZGRDb250cm9sIiwib3B0aW9ucyIsImNvbnRyb2xzIiwicHVzaCIsIm1hcCIsInJlbW92ZUNvbnRyb2wiLCJjb250cm9sSW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiY29udHJvbHNGb3JQb3NpdGlvbiIsImNvbnRyb2xJbmRleEluQ29sbGVjdGlvbiIsInJlbW92ZUF0IiwibGF0TG5nRnJvbUFyZ3VtZW50cyIsImFyZ3MiLCJMYXRMbmciLCJmbGF0dGVuQXJyYXkiLCJhcnJheSIsInJlZHVjZSIsImNvbGxlY3Rpb24iLCJpdGVtIiwiY29uY2F0IiwiY29vcmRzVG9MYXRMbmdzIiwiY29vcmRpbmF0ZXMiLCJ1c2VHZW9KU09OIiwiZmlyc3RDb29yZGluYXRlIiwic2Vjb25kQ29vcmRpbmF0ZSIsImFycmF5VG9MYXRMbmciLCJjb29yZGluYXRlIiwibGVuZ3RoIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNvbnRleHQiLCJzYW5pdGl6ZWRDbGFzc05hbWUiLCJyZXBsYWNlIiwiJCIsImdldEVsZW1lbnRCeUlkIiwic2FuaXRpemVkSWQiLCJlbGVtZW50cyIsImdldEVsZW1lbnQiLCJzZWxlY3Rvck9yRWxlbWVudCIsIm1hdGNoIiwiZmluZEFic29sdXRlUG9zaXRpb24iLCJlbGVtZW50IiwibGVmdCIsInRvcCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJlY3RhbmdsZSIsIngiLCJ3aW5kb3ciLCJzY3JvbGxYIiwicGFnZVhPZmZzZXQiLCJ5Iiwic2Nyb2xsWSIsInBhZ2VZT2Zmc2V0Iiwib2Zmc2V0UGFyZW50IiwiaXRlcmF0b3IiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0VG9wIiwic2V0dXBFdmVudExpc3RlbmVyIiwib2JqZWN0IiwiaW5zdGFuY2UiLCJoYW5kbGVyIiwiYWRkTGlzdGVuZXIiLCJoaWRlQ29udGV4dE1lbnUiLCJzZXR1cEV2ZW50cyIsImhhbmRsZXJzIiwiTUFQX0VWRU5UUyIsIkdNQVBTX01FTlVfSUQiLCJiYXNlT3B0aW9ucyIsIkVycm9yIiwiZWwiLCJkaXYiLCJsYXQiLCJsYXRpdHVkZSIsImxuZyIsImxvbmdpdHVkZSIsImNlbnRlciIsInpvb20iLCJtYXBUeXBlIiwiem9vbUNvbnRyb2xPcHQiLCJwYW5Db250cm9sIiwiem9vbUNvbnRyb2wiLCJtYXBUeXBlQ29udHJvbCIsInNjYWxlQ29udHJvbCIsInN0cmVldFZpZXdDb250cm9sIiwib3ZlcnZpZXdNYXBDb250cm9sIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJrZXJDbHVzdGVyZXIiLCJlbmFibGVOZXdTdHlsZSIsIm1hcFR5cGVJZCIsIk1hcFR5cGVJZCIsIm1hcEJhc2VPcHRpb25zIiwibWFwQ29udHJvbHNPcHRpb25zIiwiem9vbUNvbnRyb2xPcHRpb25zIiwiWm9vbUNvbnRyb2xTdHlsZSIsImZpbHRlcmVkT3B0aW9ucyIsImhhc2giLCJrZXkiLCJpbmNsdWRlcyIsIk1hdGgiLCJjZWlsIiwicmFuZG9tIiwiRGF0ZSIsIm5vdyIsImNvbnRleHRNZW51cyIsInZpc3VhbFJlZnJlc2giLCJzY3JvbGxXaWR0aCIsIm9mZnNldFdpZHRoIiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwibWFwT3B0aW9ucyIsIk1hcCIsIm92ZXJsYXlzIiwibGF5ZXJzIiwic2luZ2xlTGF5ZXJzIiwibWFya2VycyIsInBvbHlsaW5lcyIsInJvdXRlcyIsInBvbHlnb25zIiwiaW5mb1dpbmRvdyIsIm92ZXJsYXlFbGVtZW50IiwicmVnaXN0ZXJlZEV2ZW50cyIsImFwcGx5IiwicmlnaHRjbGljayIsImJ1aWxkQ29udGV4dE1lbnUiLCJjb250ZXh0TWVudUVsZW1lbnQiLCJodG1sIiwiam9pbiIsImNvbnRleHRNZW51SXRlbXMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNvbnRleHRNZW51SXRlbSIsImNvbnRleHRNZW51SXRlbUxpc3RlbmVyIiwiY29udGV4dE1lbnVJdGVtTGlzdGVuZXJFdmVudCIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiYWN0aW9uIiwiY2xlYXJMaXN0ZW5lcnMiLCJhZGREb21MaXN0ZW5lck9uY2UiLCJwaXhlbCIsIm92ZXJsYXkiLCJPdmVybGF5VmlldyIsInNldE1hcCIsImRyYXciLCJwcm9qZWN0aW9uIiwiZ2V0UHJvamVjdGlvbiIsIm1hcmtlciIsImdldFBvc2l0aW9uIiwiZnJvbUxhdExuZ1RvQ29udGFpbmVyUGl4ZWwiLCJidWlsZENvbnRleHRNZW51SFRNTCIsInNldFRpbWVvdXQiLCJkaXNwbGF5Iiwib3B0aW9uIiwibmFtZSIsIm1pbldpZHRoIiwiYmFja2dyb3VuZCIsImxpc3RTdHlsZSIsInBhZGRpbmciLCJib2R5IiwicmVsYXRlZFRhcmdldCIsImNvbnRhaW5zIiwidHJpZ2dlciIsImxhdExuZ3MiLCJib3VuZHMiLCJMYXRMbmdCb3VuZHMiLCJsYXRMbmciLCJleHRlbmQiLCJmaXRCb3VuZHMiLCJmaWx0ZXIiLCJ2aXNpYmxlIiwiZml0TGF0TG5nQm91bmRzIiwiY2FsbGJhY2siLCJwb3AiLCJwYW5UbyIsIm1hZ25pdHVkZSIsImdldFpvb20iLCJzZXRab29tIiwiZ29vZ2xlTWFwc01hcE1ldGhvZHMiLCJtZXRob2ROYW1lIiwiY3VzdG9tRXZlbnRzIiwib24iLCJyZWdpc3RlcmVkRXZlbnQiLCJvZmYiLCJvbmNlIiwiYWRkTGlzdGVuZXJPbmNlIiwidW5kZWZpbmVkIiwiZmlyZSIsImV2ZW50QXJndW1lbnRzIiwiQXJyYXkiLCJzbGljZSIsImFyZ3VtZW50cyIsImNoZWNrR2VvZmVuY2UiLCJsYWdMbmciLCJmZW5jZSIsImNvbnRhaW5zTGF0TG5nIiwiY2hlY2tNYXJrZXJHZW9mZW5jZSIsIm91dHNpZGVDYWxsYmFjayIsImZlbmNlcyIsIkVWRU5UUyIsImRyYXdQb2x5bGluZSIsImljb25zIiwic3Ryb2tlQ29sb3IiLCJzdHJva2VPcGFjaXR5Iiwic3Ryb2tlV2VpZ2h0IiwiZ2VvZGVzaWMiLCJjbGlja2FibGUiLCJlZGl0YWJsZSIsInpJbmRleCIsInBhdGgiLCJwb2x5bGluZU9wdGlvbnMiLCJwb2x5bGluZSIsIlBvbHlsaW5lIiwicmVtb3ZlUG9seWxpbmUiLCJwb2x5bGluZUluZGV4IiwicmVtb3ZlUG9seWxpbmVzIiwiZHJhd0NpcmNsZSIsInBvbHlnb25PcHRpb25zIiwicG9seWdvbiIsIkNpcmNsZSIsImRyYXdSZWN0YW5nbGUiLCJsYXRMbmdCb3VuZHMiLCJSZWN0YW5nbGUiLCJkcmF3UG9seWdvbiIsImJhc2VQYXRocyIsInBhdGhzIiwiUG9seWdvbiIsInJlbW92ZVBvbHlnb24iLCJwb2x5Z29uSW5kZXgiLCJyZW1vdmVQb2x5Z29ucyIsImdldEZyb21GdXNpb25UYWJsZXMiLCJsYXllciIsIkZ1c2lvblRhYmxlc0xheWVyIiwibG9hZEZyb21GdXNpb25UYWJsZXMiLCJnZXRGcm9tS01MIiwidXJsIiwiS21sTGF5ZXIiLCJsb2FkRnJvbUtNTCIsImFkZExheWVyIiwibGF5ZXJOYW1lIiwiY2xpY2siLCJzZWFyY2giLCJuZWFyYnlTZWFyY2giLCJyYWRhclNlYXJjaCIsInRleHRTZWFyY2giLCJrZXl3b3JkIiwibG9jYXRpb24iLCJyYWRpdXMiLCJyYW5rQnkiLCJ0eXBlcyIsInF1ZXJ5IiwiVHJhZmZpY0xheWVyIiwidHJhZmZpYyIsIlRyYW5zaXRMYXllciIsInRyYW5zaXQiLCJCaWN5Y2xpbmdMYXllciIsImJpY3ljbGluZyIsInBsYWNlcyIsIlBsYWNlc1NlcnZpY2UiLCJwbGFjZVNlYXJjaFJlcXVlc3QiLCJ0ZXh0U2VhcmNoUmVxdWVzdCIsInNldE9wdGlvbnMiLCJyZW1vdmVMYXllciIsImxheWVySW5kZXgiLCJhZGRNYXBUeXBlIiwiZ2V0VGlsZVVybCIsInRpbGVTaXplIiwiU2l6ZSIsIkltYWdlTWFwVHlwZSIsIm1hcFR5cGVzIiwic2V0IiwiYWRkT3ZlcmxheU1hcFR5cGUiLCJnZXRUaWxlIiwib3ZlcmxheU1hcFR5cGVzIiwib3ZlcmxheU1hcFR5cGVPcHRpb25zIiwiaW5zZXJ0QXQiLCJyZW1vdmVPdmVybGF5TWFwVHlwZSIsIm92ZXJsYXlNYXBUeXBlIiwiSU5GT19XSU5ET1dfRVZFTlRTIiwiTUFSS0VSX0VWRU5UUyIsIk1BUktFUl9NT1VTRV9FVkVOVFMiLCJjcmVhdGVNYXJrZXIiLCJzZWxmIiwiZGV0YWlscyIsIm91dHNpZGUiLCJtYXJrZXJPcHRpb25zIiwiTWFya2VyIiwiSW5mb1dpbmRvdyIsImZyb21MYXRMbmdUb1BvaW50Iiwib25NYXJrZXJDbGljayIsImhpZGVJbmZvV2luZG93cyIsIm9wZW4iLCJvbk1hcmtlclJpZ2h0Q2xpY2siLCJvbk1hcmtlckRyYWdFbmQiLCJhZGRNYXJrZXIiLCJnbV9hY2Nlc3NvcnNfIiwiYWRkTWFya2VycyIsImNsb3NlIiwicmVtb3ZlTWFya2VyIiwiZmlyZUV2ZW50IiwibWFya2VySW5kZXgiLCJyZW1vdmVNYXJrZXJzIiwiU1RPUF9QUk9QQUdBVElPTl9FVkVOVFMiLCJkcmF3T3ZlcmxheSIsImF1dG9TaG93IiwiaG9yaXpvbnRhbE9mZnNldCIsInZlcnRpY2FsT2Zmc2V0IiwidmVydGljYWxBbGlnbiIsImhvcml6b250YWxBbGlnbiIsIm9uQWRkIiwiYm9yZGVyU3R5bGUiLCJib3JkZXJXaWR0aCIsInBhbmVzIiwiZ2V0UGFuZXMiLCJvdmVybGF5TGF5ZXIiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsImFsbCIsImNhbmNlbEJ1YmJsZSIsInJldHVyblZhbHVlIiwic3RvcFByb3BhZ2F0aW9uIiwib3ZlcmxheU1vdXNlVGFyZ2V0IiwiZnJvbUxhdExuZ1RvRGl2UGl4ZWwiLCJjaGlsZHJlbiIsImNvbnRlbnRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJjb250ZW50V2lkdGgiLCJjbGllbnRXaWR0aCIsInNob3ciLCJvblJlbW92ZSIsInJlbW92ZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInJlbW92ZU92ZXJsYXkiLCJvdmVybGF5SW5kZXgiLCJyZW1vdmVPdmVybGF5cyIsImdldEJvdW5kcyIsImdldFBhdGhzIiwicCIsImdldExlbmd0aCIsImdldEF0IiwiaSIsImluUG9seSIsIm51bVBhdGhzIiwibnVtUG9pbnRzIiwiaiIsInZlcnRleDEiLCJ2ZXJ0ZXgyIiwiZ2VvbWV0cnkiLCJzcGhlcmljYWwiLCJjb21wdXRlRGlzdGFuY2VCZXR3ZWVuIiwiZ2V0Q2VudGVyIiwiZ2V0UmFkaXVzIiwic2V0RmVuY2VzIiwiYWRkRmVuY2UiLCJnZXRJZCIsInNlYXJjaEVsZW1lbnQiLCJUeXBlRXJyb3IiLCJ0IiwibGVuIiwibiIsIk51bWJlciIsIkluZmluaXR5IiwiZmxvb3IiLCJhYnMiLCJrIiwibWF4IiwiZ2V0Um91dGVzIiwib3JpZ2luIiwiZGVzdGluYXRpb24iLCJ0cmF2ZWxNb2RlIiwidW5pdFN5c3RlbSIsImF2b2lkSGlnaHdheXMiLCJhdm9pZFRvbGxzIiwib3B0aW1pemVXYXlwb2ludHMiLCJ3YXlwb2ludHMiLCJlcnJvciIsInRyYXZlbE1vZGVJZCIsIlRyYXZlbE1vZGUiLCJ1bml0U3lzdGVtSWQiLCJyZXF1ZXN0T3B0aW9ucyIsInNlcnZpY2UiLCJEaXJlY3Rpb25zU2VydmljZSIsInJvdXRlIiwicmVzdWx0Iiwic3RhdHVzIiwiRGlyZWN0aW9uc1N0YXR1cyIsIk9LIiwicmVtb3ZlUm91dGVzIiwiZ2V0RWxldmF0aW9ucyIsInNhbXBsZXMiLCJsb2NhdGlvbnMiLCJFbGV2YXRpb25TZXJ2aWNlIiwiZ2V0RWxldmF0aW9uRm9yTG9jYXRpb25zIiwiZ2V0RWxldmF0aW9uQWxvbmdQYXRoIiwiY2xlYW5Sb3V0ZSIsInJlbmRlclJvdXRlIiwiYmFzZVJlbmRlck9wdGlvbnMiLCJwYW5lbCIsInJlbmRlck9wdGlvbnMiLCJEaXJlY3Rpb25zUmVuZGVyZXIiLCJfIiwicmVzcG9uc2UiLCJzZXREaXJlY3Rpb25zIiwiZHJhd1JvdXRlIiwibGFzdFJvdXRlIiwib3ZlcnZpZXdfcGF0aCIsInRyYXZlbFJvdXRlIiwic3RhcnQiLCJzdGVwIiwibGVncyIsInN0ZXBzIiwic3RlcF9udW1iZXIiLCJzdGVwTnVtYmVyIiwiZW5kIiwiZHJhd1N0ZXBwZWRSb3V0ZSIsInJvdXRlU3RlcCIsInN0ZXBzQ291bnQiLCJSb3V0ZSIsInN0ZXBfY291bnQiLCJzdGVwc19sZW5ndGgiLCJNVkNBcnJheSIsImdldFBhdGgiLCJwYXJzZUNvbG9yIiwiY29sb3IiLCJvcGFjaXR5IiwicGFyc2VkQ29sb3IiLCJtaW4iLCJwYXJzZUZsb2F0IiwidG9TdHJpbmciLCJ0b0ltYWdlIiwic2l6ZSIsInN0YXRpY01hcE9wdGlvbnMiLCJlbmNvZGluZyIsImVuY29kZVBhdGgiLCJzdGF0aWNNYXBVUkwiLCJidWlsZE1hcmtlclBhcmFtZXRlcnMiLCJtYXJrZXJQYXJhbWV0ZXJzIiwiYWRkcmVzcyIsImljb24iLCJsYWJlbCIsImVuY29kZVVSSSIsImJ1aWxkUGF0aFBhcmFtZXRlcnMiLCJwb2x5bGluZVBhcmFtZXRlcnMiLCJwYXJzZUludCIsImZpbGxDb2xvciIsImZpbGxPcGFjaXR5IiwiYnVpbGRTdHlsZVBhcmFtZXRlcnMiLCJzdHlsZVBhcmFtZXRlcnMiLCJmZWF0dXJlVHlwZSIsImVsZW1lbnRUeXBlIiwic3R5bGVycyIsInN0eWxlciIsInZhbHVlIiwic3R5bGVzIiwiZGVmYXVsdFJvb3QiLCJwcm90b2NvbCIsInJvb3QiLCJwYXJhbWV0ZXJzIiwiZHBpIiwiZGV2aWNlUGl4ZWxSYXRpbyIsIlNUUkVFVFZJRVdfRVZFTlRTIiwiY3JlYXRlUGFub3JhbWEiLCJzdHJlZXRWaWV3T3B0aW9ucyIsInBhbm9yYW1hIiwic2V0U3RyZWV0VmlldyIsImNvbnRhaW5lckVsZW1lbnQiLCJTdHJlZXRWaWV3UGFub3JhbWEiLCJhZGRTdHlsZSIsInN0eWxlZE1hcFR5cGUiLCJTdHlsZWRNYXBUeXBlIiwic3R5bGVkTWFwTmFtZSIsInNldFN0eWxlIiwic2V0TWFwVHlwZUlkIiwiZ2VvbG9jYXRlIiwiY29tcGxldGVDYWxsYmFjayIsImFsd2F5cyIsImNvbXBsZXRlIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJzdWNjZXNzIiwibm90X3N1cHBvcnRlZCIsImdlb2NvZGUiLCJnZW9jb2RlciIsIkdlb2NvZGVyIiwiZ2VvY29kZU9wdGlvbnMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUVBOzs7OztBQUtBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBK0Y7QUFBQSx3QkFBNUZDLEtBQTRGO0FBQUEsTUFBNUZBLEtBQTRGLDJCQUFwRixFQUFvRjtBQUFBLE1BQWhGQyxFQUFnRixRQUFoRkEsRUFBZ0Y7QUFBQSxNQUE1RUMsS0FBNEUsUUFBNUVBLEtBQTRFO0FBQUEsTUFBckVDLE9BQXFF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Y0FBdEIsRUFBc0MxVCxRQUF0QztBQUNELENBbkJEOztBQXFCZTVLLDRHQUFmLEU7Ozs7Ozs7Ozs7Ozs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxpQ0FBaUMsUUFBUTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLHlCQUF5QjtBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQy9iQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUMiLCJmaWxlIjoiZ21hcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2xpYi9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBHTWFwcyBmcm9tICcuL2NvcmUnO1xuXG4vKipcbiAqIEV4dGVuZHMgR01hcHMgdG8gdXNlIFVJIGNvbnRyb2xzLlxuICogQG1vZHVsZSBDb250cm9sc1xuICovXG5cbmNvbnN0IGNyZWF0ZUNvbnRyb2wgPSAoeyBzdHlsZSA9IHt9LCBpZCwgdGl0bGUsIGNsYXNzZXMsIGNvbnRlbnQsIHBvc2l0aW9uLCBldmVudHMgPSB7fSwgZGlzYWJsZURlZmF1bHRTdHlsZXMsIH0pID0+IHtcbiAgY29uc3QgY29udHJvbCA9IGdsb2JhbC5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBjb250cm9sLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcblxuICBpZiAoZGlzYWJsZURlZmF1bHRTdHlsZXMgIT09IHRydWUpIHtcbiAgICBjb250cm9sLnN0eWxlLmZvbnRGYW1pbHkgPSAnUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZic7XG4gICAgY29udHJvbC5zdHlsZS5mb250U2l6ZSA9ICcxMXB4JztcbiAgICBjb250cm9sLnN0eWxlLmJveFNoYWRvdyA9ICdyZ2JhKDAsIDAsIDAsIDAuMjk4MDM5KSAwcHggMXB4IDRweCAtMXB4JztcbiAgfVxuXG4gIE9iamVjdC5rZXlzKHN0eWxlKS5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgIGNvbnRyb2wuc3R5bGUgPSBzdHlsZVtwcm9wZXJ0eV07XG4gIH0pO1xuXG4gIGlmIChpZCkge1xuICAgIGNvbnRyb2wuaWQgPSBpZDtcbiAgfVxuXG4gIGlmICh0aXRsZSkge1xuICAgIGNvbnRyb2wudGl0bGUgPSB0aXRsZTtcbiAgfVxuXG4gIGlmIChjbGFzc2VzKSB7XG4gICAgY29udHJvbC5jbGFzc05hbWUgPSBjbGFzc2VzO1xuICB9XG5cbiAgaWYgKGNvbnRlbnQpIHtcbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250cm9sLmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgfSBlbHNlIGlmIChjb250ZW50IGluc3RhbmNlb2YgZ2xvYmFsLkhUTUxFbGVtZW50KSB7XG4gICAgICBjb250cm9sLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwb3NpdGlvbikge1xuICAgIGNvbnRyb2wucG9zaXRpb24gPSBnb29nbGUubWFwcy5Db250cm9sUG9zaXRpb25bcG9zaXRpb24udG9VcHBlckNhc2UoKV07XG4gIH1cblxuICBPYmplY3Qua2V5cyhldmVudHMpLmZvckVhY2goZXZlbnROYW1lID0+XG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIoY29udHJvbCwgZXZlbnROYW1lLCBldmVudCA9PlxuICAgICAgZXZlbnRzW2V2ZW50TmFtZV0uY2FsbCh0aGlzLCBldmVudClcbiAgICApXG4gICk7XG5cbiAgY29udHJvbC5pbmRleCA9IDE7XG5cbiAgcmV0dXJuIGNvbnRyb2w7XG59O1xuXG4vKipcbiAqIEFkZCBhIGN1c3RvbSBjb250cm9sIHRvIHRoZSBtYXAgVUkuXG4gKiBAZnVuY3Rpb24gYWRkQ29udHJvbFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBvYmplY3Qgc2hvdWxkIGNvbnRhaW46XG4gKiAqIGBzdHlsZWAgKG9iamVjdCk6IFRoZSBrZXlzIGFuZCB2YWx1ZXMgb2YgdGhpcyBvYmplY3Qgc2hvdWxkIGJlIHZhbGlkIENTUyBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXMuXG4gKiAqIGBpZGAgKHN0cmluZyk6IFRoZSBIVE1MIGlkIGZvciB0aGUgY3VzdG9tIGNvbnRyb2wuXG4gKiAqIGBjbGFzc2VzYCAoc3RyaW5nKTogQSBzdHJpbmcgY29udGFpbmluZyBhbGwgdGhlIEhUTUwgY2xhc3NlcyBmb3IgdGhlIGN1c3RvbSBjb250cm9sLlxuICogKiBgY29udGVudGAgKHN0cmluZyBvciBIVE1MIGVsZW1lbnQpOiBUaGUgY29udGVudCBvZiB0aGUgY3VzdG9tIGNvbnRyb2wuXG4gKiAqIGBwb3NpdGlvbmAgKHN0cmluZyk6IEFueSB2YWxpZCBbYGdvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvbmBdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L2NvbnRyb2xzI0NvbnRyb2xQb3NpdGlvbmluZykgdmFsdWUsIGluIGxvd2VyIG9yIHVwcGVyIGNhc2UuXG4gKiAqIGBldmVudHNgIChvYmplY3QpOiBUaGUga2V5cyBvZiB0aGlzIG9iamVjdCBzaG91bGQgYmUgdmFsaWQgRE9NIGV2ZW50cy4gVGhlIHZhbHVlcyBzaG91bGQgYmUgZnVuY3Rpb25zLlxuICogKiBgZGlzYWJsZURlZmF1bHRTdHlsZXNgIChib29sZWFuKTogSWYgZmFsc2UsIHJlbW92ZXMgdGhlIGRlZmF1bHQgc3R5bGVzIGZvciB0aGUgY29udHJvbHMgbGlrZSBmb250IChmYW1pbHkgYW5kIHNpemUpLCBhbmQgYm94IHNoYWRvdy5cbiAqXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gKi9cbkdNYXBzLnByb3RvdHlwZS5hZGRDb250cm9sID0gZnVuY3Rpb24gYWRkQ29udHJvbChvcHRpb25zKSB7XG4gIGNvbnN0IGNvbnRyb2wgPSBjcmVhdGVDb250cm9sKG9wdGlvbnMpO1xuXG4gIHRoaXMuY29udHJvbHMucHVzaChjb250cm9sKTtcbiAgdGhpcy5tYXAuY29udHJvbHNbY29udHJvbC5wb3NpdGlvbl0ucHVzaChjb250cm9sKTtcblxuICByZXR1cm4gY29udHJvbDtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGEgY29udHJvbCBmcm9tIHRoZSBtYXAuIGBjb250cm9sYCBzaG91bGQgYmUgYSBjb250cm9sIHJldHVybmVkIGJ5IGBhZGRDb250cm9sKClgLlxuICogQGZ1bmN0aW9uIHJlbW92ZUNvbnRyb2xcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250cm9sIC0gT25lIG9mIHRoZSBjb250cm9scyByZXR1cm5lZCBieSBgYWRkQ29udHJvbCgpYC5cbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gdGhlIHJlbW92ZWQgY29udHJvbC5cbiAqL1xuR01hcHMucHJvdG90eXBlLnJlbW92ZUNvbnRyb2wgPSBmdW5jdGlvbiByZW1vdmVDb250cm9sKGNvbnRyb2wpIHtcbiAgY29uc3QgY29udHJvbEluZGV4ID0gdGhpcy5jb250cm9scy5pbmRleE9mKGNvbnRyb2wpO1xuXG4gIHRoaXMuY29udHJvbHMuc3BsaWNlKGNvbnRyb2xJbmRleCwgMSk7XG5cbiAgaWYgKGNvbnRyb2wucG9zaXRpb24gPj0gMCAmJiBjb250cm9sSW5kZXggPj0gMCkge1xuICAgIGNvbnN0IGNvbnRyb2xzRm9yUG9zaXRpb24gPSB0aGlzLm1hcC5jb250cm9sc1tjb250cm9sLnBvc2l0aW9uXTtcbiAgICBjb25zdCBjb250cm9sSW5kZXhJbkNvbGxlY3Rpb24gPSBjb250cm9sc0ZvclBvc2l0aW9uLmluZGV4T2YoY29udHJvbCk7XG5cbiAgICBjb250cm9sc0ZvclBvc2l0aW9uLnJlbW92ZUF0KGNvbnRyb2xJbmRleEluQ29sbGVjdGlvbik7XG4gIH1cblxuICByZXR1cm4gY29udHJvbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXBzO1xuIiwiZXhwb3J0IGNvbnN0IGxhdExuZ0Zyb21Bcmd1bWVudHMgPSAoLi4uYXJncykgPT4ge1xuICBpZiAodHlwZW9mIGFyZ3NbMF1bMV0gPT09ICdudW1iZXInICYmIHR5cGVvZiBhcmdzWzBdWzFdID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGFyZ3NbMF1bMF0sIGFyZ3NbMF1bMV0pO1xuICB9XG5cbiAgcmV0dXJuIGFyZ3NbMF07XG59O1xuXG5leHBvcnQgY29uc3QgZmxhdHRlbkFycmF5ID0gYXJyYXkgPT5cbiAgYXJyYXkucmVkdWNlKChjb2xsZWN0aW9uLCBpdGVtKSA9PiBjb2xsZWN0aW9uLmNvbmNhdChpdGVtKSwgW10pO1xuXG5leHBvcnQgY29uc3QgY29vcmRzVG9MYXRMbmdzID0gKGNvb3JkaW5hdGVzLCB1c2VHZW9KU09OKSA9PiB7XG4gIGNvbnN0IGZpcnN0Q29vcmRpbmF0ZSA9IHVzZUdlb0pTT04gPyBjb29yZGluYXRlc1sxXSA6IGNvb3JkaW5hdGVzWzBdO1xuICBjb25zdCBzZWNvbmRDb29yZGluYXRlID0gdXNlR2VvSlNPTiA/IGNvb3JkaW5hdGVzWzBdIDogY29vcmRpbmF0ZXNbMV07XG5cbiAgcmV0dXJuIG5ldyBnb29nbGUubWFwcy5MYXRMbmcoZmlyc3RDb29yZGluYXRlLCBzZWNvbmRDb29yZGluYXRlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhcnJheVRvTGF0TG5nID0gKGNvb3JkaW5hdGVzLCB1c2VHZW9KU09OKSA9PlxuICBjb29yZGluYXRlcy5tYXAoKGNvb3JkaW5hdGUpID0+IHtcbiAgICBpZiAoIShjb29yZGluYXRlIGluc3RhbmNlb2YgZ29vZ2xlLm1hcHMuTGF0TG5nKSkge1xuICAgICAgaWYgKGNvb3JkaW5hdGUubGVuZ3RoICYmIHR5cGVvZiBjb29yZGluYXRlWzBdID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gYXJyYXlUb0xhdExuZyhjb29yZGluYXRlLCB1c2VHZW9KU09OKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvb3Jkc1RvTGF0TG5ncyhjb29yZGluYXRlLCB1c2VHZW9KU09OKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29vcmRpbmF0ZTtcbiAgfSk7XG5cbmNvbnN0IGdldEVsZW1lbnRzQnlDbGFzc05hbWUgPSAoY2xhc3NOYW1lLCBjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHNhbml0aXplZENsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKC9eXFwuLywgJycpO1xuXG4gIGlmICh0eXBlb2YgZ2xvYmFsLiQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gJChgLiR7c2FuaXRpemVkQ2xhc3NOYW1lfWAsIGNvbnRleHQpWzBdO1xuICB9XG5cbiAgcmV0dXJuIGdsb2JhbC5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHNhbml0aXplZENsYXNzTmFtZSlbMF07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RWxlbWVudEJ5SWQgPSAoaWQsIGNvbnRleHQpID0+IHtcbiAgY29uc3Qgc2FuaXRpemVkSWQgPSBpZC5yZXBsYWNlKC9eIy8sICcnKTtcblxuICBpZiAodHlwZW9mIGdsb2JhbC4kID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSAkKGAjJHtzYW5pdGl6ZWRJZH1gLCBjb250ZXh0KSB8fCBbXTtcblxuICAgIHJldHVybiBlbGVtZW50c1swXTtcbiAgfVxuXG4gIHJldHVybiBnbG9iYWwuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2FuaXRpemVkSWQpO1xufTtcblxuY29uc3QgZ2V0RWxlbWVudCA9IChzZWxlY3Rvck9yRWxlbWVudCwgY29udGV4dCkgPT4ge1xuICBpZiAodHlwZW9mIHNlbGVjdG9yT3JFbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBzZWxlY3Rvck9yRWxlbWVudC5tYXRjaCgvXiMvKSA/IGdldEVsZW1lbnRCeUlkKHNlbGVjdG9yT3JFbGVtZW50LCBjb250ZXh0KSA6IGdldEVsZW1lbnRzQnlDbGFzc05hbWUoc2VsZWN0b3JPckVsZW1lbnQsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGVjdG9yT3JFbGVtZW50O1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRBYnNvbHV0ZVBvc2l0aW9uID0gKGVsZW1lbnQpID0+IHtcbiAgbGV0IGxlZnQgPSAwO1xuICBsZXQgdG9wID0gMDtcblxuICBpZiAoZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcbiAgICBjb25zdCByZWN0YW5nbGUgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHggPSAtKHdpbmRvdy5zY3JvbGxYID8gd2luZG93LnNjcm9sbFggOiB3aW5kb3cucGFnZVhPZmZzZXQpO1xuICAgIGNvbnN0IHkgPSAtKHdpbmRvdy5zY3JvbGxZID8gd2luZG93LnNjcm9sbFkgOiB3aW5kb3cucGFnZVlPZmZzZXQpO1xuXG4gICAgcmV0dXJuIFtyZWN0YW5nbGUubGVmdCAtIHgsIHJlY3RhbmdsZS50b3AgLSB5XTtcbiAgfVxuXG4gIGlmIChlbGVtZW50Lm9mZnNldFBhcmVudCkge1xuICAgIGxldCBpdGVyYXRvciA9IGVsZW1lbnQ7XG5cbiAgICBkbyB7XG4gICAgICBsZWZ0ICs9IGl0ZXJhdG9yLm9mZnNldExlZnQ7XG4gICAgICB0b3AgKz0gaXRlcmF0b3Iub2Zmc2V0VG9wO1xuICAgIH0gd2hpbGUgKChpdGVyYXRvciA9IGl0ZXJhdG9yLm9mZnNldFBhcmVudCkpO1xuICB9XG5cbiAgcmV0dXJuIFtsZWZ0LCB0b3BdO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldHVwRXZlbnRMaXN0ZW5lciA9ICh7IG9iamVjdCwgZXZlbnROYW1lLCBpbnN0YW5jZSwgaGFuZGxlciwgfSkgPT4ge1xuICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihvYmplY3QsIGV2ZW50TmFtZSwgKGV2ZW50ID0gaW5zdGFuY2UpID0+IHtcbiAgICBoYW5kbGVyLmNhbGwoaW5zdGFuY2UsIGV2ZW50KTtcblxuICAgIGlmIChpbnN0YW5jZS5oaWRlQ29udGV4dE1lbnUpIHtcbiAgICAgIGluc3RhbmNlLmhpZGVDb250ZXh0TWVudSgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0dXBFdmVudHMgPSAoeyBldmVudHMsIG9iamVjdCwgaW5zdGFuY2UsIGhhbmRsZXJzLCB9KSA9PlxuICBldmVudHMuZm9yRWFjaCgoZXZlbnROYW1lKSA9PiB7XG4gICAgaWYgKGhhbmRsZXJzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHNldHVwRXZlbnRMaXN0ZW5lcih7XG4gICAgICAgIG9iamVjdCxcbiAgICAgICAgZXZlbnROYW1lLFxuICAgICAgICBpbnN0YW5jZSxcbiAgICAgICAgaGFuZGxlcjogaGFuZGxlcnNbZXZlbnROYW1lXSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbmNvbnN0IE1BUF9FVkVOVFMgPSBbXG4gICdib3VuZHNfY2hhbmdlZCcsICdjZW50ZXJfY2hhbmdlZCcsICdjbGljaycsICdkYmxjbGljaycsICdkcmFnJyxcbiAgJ2RyYWdlbmQnLCAnZHJhZ3N0YXJ0JywgJ2lkbGUnLCAnbWFwdHlwZWlkX2NoYW5nZWQnLFxuICAnbW91c2Vtb3ZlJywgJ21vdXNlb3V0JywgJ21vdXNlb3ZlcicsICdwcm9qZWN0aW9uX2NoYW5nZWQnLFxuICAncmVzaXplJywgJ3RpbGVzbG9hZGVkJywgJ3pvb21fY2hhbmdlZCdcbl07XG5jb25zdCBHTUFQU19NRU5VX0lEID0gJ2dtYXBzX2NvbnRleHRfbWVudSc7XG5cbi8qKlxuICogR01hcHMgaXMgYSB3cmFwcGVyIGZvciBHb29nbGUgTWFwcyBKYXZhU2NyaXB0IEFQSS4gSXRzIGdvYWwgaXMgdG8gc2ltcGxpZnkgR29vZ2xlIE1hcHMgdXNhZ2UgYnkgcGVyZm9ybWluZyBjb21wbGV4IHRhc2tzIHdpdGggZmV3ZXIgbGluZXMgb2YgY29kZS5cbiAqL1xuY2xhc3MgR01hcHMge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBHTWFwcyBpbnN0YW5jZSwgaW5jbHVkaW5nIGEgR29vZ2xlIE1hcHMgbWFwLlxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIGBvcHRpb25zYCBhY2NlcHRzIGFsbCB0aGUgW01hcE9wdGlvbnNdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNNYXBPcHRpb25zKSBhbmQgW2V2ZW50c10oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI01hcCkgbGlzdGVkIGluIHRoZSBHb29nbGUgTWFwcyBBUEkuIEFsc28gYWNjZXB0czpcbiAgICogKiBgbGF0aXR1ZGVgIChudW1iZXIpOiBMYXRpdHVkZSBvZiB0aGUgbWFwJ3MgY2VudGVyXG4gICAqICogYGxvbmdpdHVkZWAgKG51bWJlcik6IExvbmdpdHVkZSBvZiB0aGUgbWFwJ3MgY2VudGVyXG4gICAqICogYGVsZW1lbnRgIChzdHJpbmcgb3IgSFRNTEVsZW1lbnQpOiBjb250YWluZXIgd2hlcmUgdGhlIG1hcCB3aWxsIGJlIHJlbmRlcmVkXG4gICAqICogYG1hcmtlckNsdXN0ZXJlcmAgKGZ1bmN0aW9uKTogQSBmdW5jdGlvbiB0byBjcmVhdGUgYSBtYXJrZXIgY2x1c3Rlci4gWW91IGNhbiB1c2UgTWFya2VyQ2x1c3RlcmVyIG9yIE1hcmtlckNsdXN0ZXJlclBsdXMuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihiYXNlT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKCF3aW5kb3cuZ29vZ2xlIHx8ICF3aW5kb3cuZ29vZ2xlLm1hcHMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignR29vZ2xlIE1hcHMgSmF2YVNjcmlwdCBBUEkgaXMgcmVxdWlyZWQuIENoZWNrOiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC90dXRvcmlhbCcpO1xuICAgIH1cblxuICAgIGNvbnN0IHtcbiAgICAgIGVsLFxuICAgICAgZGl2LFxuICAgICAgY29udGV4dCxcbiAgICAgIGVsZW1lbnQgPSBnZXRFbGVtZW50KGVsIHx8IGRpdiwgY29udGV4dCksXG4gICAgICBsYXQsXG4gICAgICBsYXRpdHVkZSA9IGxhdCxcbiAgICAgIGxuZyxcbiAgICAgIGxvbmdpdHVkZSA9IGxuZyxcbiAgICAgIGNlbnRlciA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobGF0aXR1ZGUsIGxvbmdpdHVkZSksXG4gICAgICB6b29tID0gMTUsXG4gICAgICBtYXBUeXBlID0gJ3JvYWRtYXAnLFxuICAgICAgem9vbUNvbnRyb2xPcHQgPSB7XG4gICAgICAgIHN0eWxlOiAnREVGQVVMVCcsXG4gICAgICAgIHBvc2l0aW9uOiAnVE9QX0xFRlQnLFxuICAgICAgfSxcbiAgICAgIHBhbkNvbnRyb2wgPSB0cnVlLFxuICAgICAgem9vbUNvbnRyb2wgPSB0cnVlLFxuICAgICAgbWFwVHlwZUNvbnRyb2wgPSB0cnVlLFxuICAgICAgc2NhbGVDb250cm9sID0gdHJ1ZSxcbiAgICAgIHN0cmVldFZpZXdDb250cm9sID0gdHJ1ZSxcbiAgICAgIG92ZXJ2aWV3TWFwQ29udHJvbCA9IHRydWUsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIG1hcmtlckNsdXN0ZXJlcixcbiAgICAgIGVuYWJsZU5ld1N0eWxlLFxuICAgICAgLi4ub3B0aW9uc1xuICAgIH0gPSBiYXNlT3B0aW9ucztcblxuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBlbGVtZW50IGRlZmluZWQuIFBhc3MgYW4gYGVsZW1lbnRgIG9wdGlvbiBpbiBHTWFwcy4nKTtcbiAgICB9XG5cbiAgICBjb25zdCBtYXBUeXBlSWQgPSBnb29nbGUubWFwcy5NYXBUeXBlSWRbbWFwVHlwZS50b1VwcGVyQ2FzZSgpXTtcblxuICAgIGNvbnN0IG1hcEJhc2VPcHRpb25zID0ge1xuICAgICAgem9vbSxcbiAgICAgIGNlbnRlcixcbiAgICAgIG1hcFR5cGVJZCxcbiAgICB9O1xuXG4gICAgY29uc3QgbWFwQ29udHJvbHNPcHRpb25zID0ge1xuICAgICAgcGFuQ29udHJvbCxcbiAgICAgIHpvb21Db250cm9sLFxuICAgICAgem9vbUNvbnRyb2xPcHRpb25zOiB7XG4gICAgICAgIHN0eWxlOiBnb29nbGUubWFwcy5ab29tQ29udHJvbFN0eWxlW3pvb21Db250cm9sT3B0LnN0eWxlXSxcbiAgICAgICAgcG9zaXRpb246IGdvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvblt6b29tQ29udHJvbE9wdC5wb3NpdGlvbl0sXG4gICAgICB9LFxuICAgICAgbWFwVHlwZUNvbnRyb2wsXG4gICAgICBzY2FsZUNvbnRyb2wsXG4gICAgICBzdHJlZXRWaWV3Q29udHJvbCxcbiAgICAgIG92ZXJ2aWV3TWFwQ29udHJvbCxcbiAgICB9O1xuXG4gICAgY29uc3QgZmlsdGVyZWRPcHRpb25zID0gT2JqZWN0LmtleXMob3B0aW9ucykucmVkdWNlKChoYXNoLCBrZXkpID0+IHtcbiAgICAgIGlmIChNQVBfRVZFTlRTLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgcmV0dXJuIGhhc2g7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLmhhc2gsIFtrZXldOiBvcHRpb25zW2tleV0sIH07XG4gICAgfSwge30pO1xuXG4gICAgdGhpcy5pZCA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogRGF0ZS5ub3coKSk7XG5cbiAgICBHTWFwcy5jb250ZXh0TWVudXNbdGhpcy5pZF0gPSB7fTtcblxuICAgIGdvb2dsZS5tYXBzLnZpc3VhbFJlZnJlc2ggPSBlbmFibGVOZXdTdHlsZTtcblxuICAgIC8qKlxuICAgICAqIEhUTUwgZWxlbWVudCB3aGVyZSB0aGUgR29vZ2xlIE1hcHMgbWFwIGlzIHJlbmRlcmVkXG4gICAgICpcbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUud2lkdGggPSB3aWR0aCB8fCB0aGlzLmVsZW1lbnQuc2Nyb2xsV2lkdGggfHwgdGhpcy5lbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgfHwgdGhpcy5lbGVtZW50LnNjcm9sbEhlaWdodCB8fCB0aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgY29uc3QgbWFwT3B0aW9ucyA9IHtcbiAgICAgIC4uLmZpbHRlcmVkT3B0aW9ucyxcbiAgICAgIC4uLm1hcEJhc2VPcHRpb25zLFxuICAgICAgLi4ubWFwQ29udHJvbHNPcHRpb25zLFxuICAgIH07XG5cbiAgICB0aGlzLm1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAodGhpcy5lbGVtZW50LCBtYXBPcHRpb25zKTtcbiAgICAvKipcbiAgICAgKiBDb2xsZWN0aW9uIG9mIGN1c3RvbSBjb250cm9scyBpbiB0aGUgbWFwIFVJXG4gICAgICpcbiAgICAgKiBAdHlwZSB7YXJyYXl9XG4gICAgICovXG4gICAgdGhpcy5jb250cm9scyA9IFtdO1xuICAgIC8qKlxuICAgICAqIENvbGxlY3Rpb24gb2YgbWFwJ3Mgb3ZlcmxheXNcbiAgICAgKlxuICAgICAqIEB0eXBlIHthcnJheX1cbiAgICAgKi9cbiAgICB0aGlzLm92ZXJsYXlzID0gW107XG4gICAgLyoqXG4gICAgICogQ29sbGVjdGlvbiBvZiBLTUwvR2VvUlNTIGFuZCBGdXNpb25UYWJsZSBsYXllcnNcbiAgICAgKlxuICAgICAqIEB0eXBlIHthcnJheX1cbiAgICAgKi9cbiAgICB0aGlzLmxheWVycyA9IFtdO1xuICAgIC8qKlxuICAgICAqIENvbGxlY3Rpb24gb2YgZGF0YSBsYXllcnMgKFNlZSB7QGxpbmsgR01hcHMjYWRkTGF5ZXJ9KVxuICAgICAqXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLnNpbmdsZUxheWVycyA9IHt9O1xuICAgIC8qKlxuICAgICAqIENvbGxlY3Rpb24gb2YgbWFwJ3MgbWFya2Vyc1xuICAgICAqXG4gICAgICogQHR5cGUge2FycmF5fVxuICAgICAqL1xuICAgIHRoaXMubWFya2VycyA9IFtdO1xuICAgIC8qKlxuICAgICAqIENvbGxlY3Rpb24gb2YgbWFwJ3MgbGluZXNcbiAgICAgKlxuICAgICAqIEB0eXBlIHthcnJheX1cbiAgICAgKi9cbiAgICB0aGlzLnBvbHlsaW5lcyA9IFtdO1xuICAgIC8qKlxuICAgICAqIENvbGxlY3Rpb24gb2YgbWFwJ3Mgcm91dGVzIHJlcXVlc3RlZCBieSB7QGxpbmsgR01hcHMjZ2V0Um91dGVzfSwge0BsaW5rIEdNYXBzI3JlbmRlclJvdXRlfSwge0BsaW5rIEdNYXBzI2RyYXdSb3V0ZX0sIHtAbGluayBHTWFwcyN0cmF2ZWxSb3V0ZX0gb3Ige0BsaW5rIEdNYXBzI2RyYXdTdGVwcGVkUm91dGV9XG4gICAgICpcbiAgICAgKiBAdHlwZSB7YXJyYXl9XG4gICAgICovXG4gICAgdGhpcy5yb3V0ZXMgPSBbXTtcbiAgICAvKipcbiAgICAgKiBDb2xsZWN0aW9uIG9mIG1hcCdzIHBvbHlnb25zXG4gICAgICpcbiAgICAgKiBAdHlwZSB7YXJyYXl9XG4gICAgICovXG4gICAgdGhpcy5wb2x5Z29ucyA9IFtdO1xuICAgIHRoaXMuaW5mb1dpbmRvdyA9IG51bGw7XG4gICAgdGhpcy5vdmVybGF5RWxlbWVudCA9IG51bGw7XG4gICAgLyoqXG4gICAgICogQ3VycmVudCBtYXAncyB6b29tXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuem9vbSA9IHpvb207XG5cbiAgICB0aGlzLnJlZ2lzdGVyZWRFdmVudHMgPSB7fTtcblxuICAgIGlmIChtYXJrZXJDbHVzdGVyZXIpIHtcbiAgICAgIC8qKlxuICAgICAgICogTWFya2VyIENsdXN0ZXJlciBpbnN0YW5jZVxuICAgICAgICpcbiAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgKi9cbiAgICAgIHRoaXMubWFya2VyQ2x1c3RlcmVyID0gbWFya2VyQ2x1c3RlcmVyLmFwcGx5KHRoaXMsIFt0aGlzLm1hcF0pO1xuICAgIH1cblxuICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKHRoaXMubWFwLCAnem9vbV9jaGFuZ2VkJywgdGhpcy5oaWRlQ29udGV4dE1lbnUpO1xuXG4gICAgc2V0dXBFdmVudHMoeyBldmVudHM6IE1BUF9FVkVOVFMsIG9iamVjdDogdGhpcy5tYXAsIGluc3RhbmNlOiB0aGlzLCBoYW5kbGVyczogb3B0aW9ucywgfSk7XG5cbiAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcih0aGlzLm1hcCwgJ3JpZ2h0Y2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChvcHRpb25zLnJpZ2h0Y2xpY2spIHtcbiAgICAgICAgb3B0aW9ucy5yaWdodGNsaWNrLmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoR01hcHMuY29udGV4dE1lbnVzW3RoaXMuaWRdLm1hcCkge1xuICAgICAgICB0aGlzLmJ1aWxkQ29udGV4dE1lbnUoJ21hcCcsIGV2ZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGJ1aWxkQ29udGV4dE1lbnVIVE1MKGNvbnRyb2wsIGV2ZW50KSB7XG4gICAgaWYgKCFnZXRFbGVtZW50QnlJZChHTUFQU19NRU5VX0lEKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRleHRNZW51RWxlbWVudCA9IGdldEVsZW1lbnRCeUlkKEdNQVBTX01FTlVfSUQpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSBHTWFwcy5jb250ZXh0TWVudXNbdGhpcy5pZF1bY29udHJvbF07XG5cbiAgICBjb25zdCBodG1sID0gT2JqZWN0LmtleXMob3B0aW9ucykubWFwKGtleSA9PlxuICAgICAgYDxsaT48YSBpZD1cIiR7Y29udHJvbH1fJHtrZXl9XCIgaHJlZj1cIiNcIj4ke29wdGlvbnNba2V5XS50aXRsZX08L2E+PC9saT5gXG4gICAgKS5qb2luKCcnKTtcblxuICAgIGNvbnRleHRNZW51RWxlbWVudC5pbm5lckhUTUwgPSBodG1sO1xuXG4gICAgY29uc3QgY29udGV4dE1lbnVJdGVtcyA9IGNvbnRleHRNZW51RWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYScpO1xuXG4gICAgWy4uLmNvbnRleHRNZW51SXRlbXNdLmZvckVhY2goKGNvbnRleHRNZW51SXRlbSkgPT4ge1xuICAgICAgY29uc3QgY29udGV4dE1lbnVJdGVtTGlzdGVuZXIgPSAoY29udGV4dE1lbnVJdGVtTGlzdGVuZXJFdmVudCkgPT4ge1xuICAgICAgICBjb250ZXh0TWVudUl0ZW1MaXN0ZW5lckV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgb3B0aW9uc1tjb250ZXh0TWVudUl0ZW1MaXN0ZW5lckV2ZW50LnRhcmdldC5pZC5yZXBsYWNlKGAke2NvbnRyb2x9X2AsICcnKV0uYWN0aW9uLmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgICB0aGlzLmhpZGVDb250ZXh0TWVudSgpO1xuICAgICAgfTtcblxuICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuY2xlYXJMaXN0ZW5lcnMoY29udGV4dE1lbnVJdGVtLCAnY2xpY2snKTtcbiAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyT25jZShjb250ZXh0TWVudUl0ZW0sICdjbGljaycsIGNvbnRleHRNZW51SXRlbUxpc3RlbmVyLCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBwb3NpdGlvbiA9IGZpbmRBYnNvbHV0ZVBvc2l0aW9uKHRoaXMuZWxlbWVudCk7XG4gICAgY29uc3QgbGVmdCA9IHBvc2l0aW9uWzBdICsgZXZlbnQucGl4ZWwueCAtIDE1O1xuICAgIGNvbnN0IHRvcCA9IHBvc2l0aW9uWzFdICsgZXZlbnQucGl4ZWwueSAtIDE1O1xuXG4gICAgY29udGV4dE1lbnVFbGVtZW50LnN0eWxlLmxlZnQgPSBgJHtsZWZ0fXB4YDtcbiAgICBjb250ZXh0TWVudUVsZW1lbnQuc3R5bGUudG9wID0gYCR7dG9wfXB4YDtcbiAgfVxuXG4gIGJ1aWxkQ29udGV4dE1lbnUoY29udHJvbCwgZXZlbnQpIHtcbiAgICBpZiAoY29udHJvbCA9PT0gJ21hcmtlcicpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgZXZlbnQucGl4ZWwgPSB7fTtcblxuICAgICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBnb29nbGUubWFwcy5PdmVybGF5VmlldygpO1xuICAgICAgb3ZlcmxheS5zZXRNYXAodGhpcy5tYXApO1xuXG4gICAgICBvdmVybGF5LmRyYXcgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3Rpb24gPSBvdmVybGF5LmdldFByb2plY3Rpb24oKTtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBldmVudC5tYXJrZXIuZ2V0UG9zaXRpb24oKTtcblxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgZXZlbnQucGl4ZWwgPSBwcm9qZWN0aW9uLmZyb21MYXRMbmdUb0NvbnRhaW5lclBpeGVsKHBvc2l0aW9uKTtcblxuICAgICAgICB0aGlzLmJ1aWxkQ29udGV4dE1lbnVIVE1MKGNvbnRyb2wsIGV2ZW50KTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYnVpbGRDb250ZXh0TWVudUhUTUwoY29udHJvbCwgZXZlbnQpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRleHRNZW51RWxlbWVudCA9IGdldEVsZW1lbnRCeUlkKEdNQVBTX01FTlVfSUQpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb250ZXh0TWVudUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfSwgMCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgY29udGV4dCBtZW51IGZvciBhIG1hcCBvciBhIG1hcmtlci5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgYG9wdGlvbnNgIG9iamVjdCBzaG91bGQgY29udGFpbjpcbiAgICogKiBgY29udHJvbGAgKHN0cmluZyk6IEtpbmQgb2YgY29udHJvbCB0aGUgY29udGV4dCBtZW51IHdpbGwgYmUgYXR0YWNoZWQuIENhbiBiZSBcIm1hcFwiIG9yIFwibWFya2VyXCIuXG4gICAqICogYG9wdGlvbnNgIChhcnJheSk6IEEgY29sbGVjdGlvbiBvZiBjb250ZXh0IG1lbnUgaXRlbXM6XG4gICAqICAgKiBgdGl0bGVgIChzdHJpbmcpOiBJdGVtJ3MgdGl0bGUgc2hvd24gaW4gdGhlIGNvbnRleHQgbWVudS5cbiAgICogICAqIGBuYW1lYCAoc3RyaW5nKTogSXRlbSdzIGlkZW50aWZpZXIuXG4gICAqICAgKiBgYWN0aW9uYCAoZnVuY3Rpb24pOiBGdW5jdGlvbiB0cmlnZ2VyZWQgYWZ0ZXIgc2VsZWN0aW5nIHRoZSBjb250ZXh0IG1lbnUgaXRlbS5cbiAgICovXG4gIHNldENvbnRleHRNZW51KG9wdGlvbnMpIHtcbiAgICBHTWFwcy5jb250ZXh0TWVudXNbdGhpcy5pZF1bb3B0aW9ucy5jb250cm9sXSA9IHt9O1xuXG4gICAgT2JqZWN0LmtleXMob3B0aW9ucy5vcHRpb25zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IG9wdGlvbnMub3B0aW9uc1trZXldO1xuXG4gICAgICBHTWFwcy5jb250ZXh0TWVudXNbdGhpcy5pZF1bb3B0aW9ucy5jb250cm9sXVtvcHRpb24ubmFtZV0gPSB7XG4gICAgICAgIHRpdGxlOiBvcHRpb24udGl0bGUsXG4gICAgICAgIGFjdGlvbjogb3B0aW9uLmFjdGlvbixcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBsZXQgY29udGV4dE1lbnVFbGVtZW50ID0gZ2V0RWxlbWVudEJ5SWQoR01BUFNfTUVOVV9JRCk7XG5cbiAgICBpZiAoIWNvbnRleHRNZW51RWxlbWVudCkge1xuICAgICAgY29udGV4dE1lbnVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgICAgY29udGV4dE1lbnVFbGVtZW50LmlkID0gR01BUFNfTUVOVV9JRDtcbiAgICAgIGNvbnRleHRNZW51RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgY29udGV4dE1lbnVFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgIGNvbnRleHRNZW51RWxlbWVudC5zdHlsZS5taW5XaWR0aCA9ICcxMDBweCc7XG4gICAgICBjb250ZXh0TWVudUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9ICd3aGl0ZSc7XG4gICAgICBjb250ZXh0TWVudUVsZW1lbnQuc3R5bGUubGlzdFN0eWxlID0gJ25vbmUnO1xuICAgICAgY29udGV4dE1lbnVFbGVtZW50LnN0eWxlLnBhZGRpbmcgPSAnOHB4JztcbiAgICAgIGNvbnRleHRNZW51RWxlbWVudC5zdHlsZS5ib3hTaGFkb3cgPSAnMnB4IDJweCA2cHggI2NjYyc7XG5cbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGV4dE1lbnVFbGVtZW50KTtcbiAgICB9XG5cbiAgICBnb29nbGUubWFwcy5ldmVudC5hZGREb21MaXN0ZW5lcihjb250ZXh0TWVudUVsZW1lbnQsICdtb3VzZW91dCcsIChldmVudCkgPT4ge1xuICAgICAgaWYgKCFldmVudC5yZWxhdGVkVGFyZ2V0IHx8ICFldmVudC50YXJnZXQuY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldCkpIHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGNvbnRleHRNZW51RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9LCA1MDApO1xuICAgICAgfVxuICAgIH0sIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlIHRoZSBjdXJyZW50IGNvbnRleHQgbWVudVxuICAgKi9cbiAgaGlkZUNvbnRleHRNZW51KCkge1xuICAgIGNvbnN0IGNvbnRleHRNZW51RWxlbWVudCA9IGdldEVsZW1lbnRCeUlkKEdNQVBTX01FTlVfSUQpO1xuXG4gICAgaWYgKGNvbnRleHRNZW51RWxlbWVudCkge1xuICAgICAgY29udGV4dE1lbnVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgYSBgcmVzaXplYCBldmVudCwgdXNlZnVsIGlmIHlvdSBuZWVkIHRvIHJlcGFpbnQgdGhlIGN1cnJlbnQgbWFwIChmb3IgY2hhbmdlcyBpbiB0aGUgdmlld3BvcnQgb3IgZGlzcGxheSAvIGhpZGUgYWN0aW9ucykuXG4gICAqL1xuICByZWZyZXNoKCkge1xuICAgIGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIodGhpcy5tYXAsICdyZXNpemUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGp1c3QgdGhlIG1hcCB6b29tIHRvIGluY2x1ZGUgYWxsIHRoZSBjb29yZGluYXRlcyBpbiB0aGUgYGxhdExuZ3NgIGFycmF5LlxuICAgKlxuICAgKiBAcGFyYW0ge2FycmF5fSBsYXRMbmdzIC0gQ29sbGVjdGlvbiBvZiBgZ29vZ2xlLm1hcHMuTGF0TG5nYCBvYmplY3RzLlxuICAgKi9cbiAgZml0TGF0TG5nQm91bmRzKGxhdExuZ3MpIHtcbiAgICBjb25zdCBib3VuZHMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCk7XG5cbiAgICBsYXRMbmdzLmZvckVhY2gobGF0TG5nID0+IGJvdW5kcy5leHRlbmQobGF0TG5nKSk7XG5cbiAgICB0aGlzLm1hcC5maXRCb3VuZHMoYm91bmRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGp1c3QgdGhlIG1hcCB6b29tIHRvIGluY2x1ZGUgYWxsIHRoZSBtYXJrZXJzIGFkZGVkIGluIHRoZSBtYXAuXG4gICAqL1xuICBmaXRab29tKCkge1xuICAgIGNvbnN0IGxhdExuZ3MgPSB0aGlzLm1hcmtlcnNcbiAgICAgIC5maWx0ZXIobWFya2VyID0+IG1hcmtlci52aXNpYmxlKVxuICAgICAgLm1hcChtYXJrZXIgPT4gbWFya2VyLmdldFBvc2l0aW9uKCkpO1xuXG4gICAgdGhpcy5maXRMYXRMbmdCb3VuZHMobGF0TG5ncyk7XG4gIH1cblxuICAvKipcbiAgICogQ2VudGVyIHRoZSBtYXAgdXNpbmcgdGhlIGBsYXRgIGFuZCBgbG5nYCBjb29yZGluYXRlcy5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxhdCAtIExhdGl0dWRlIG9mIHRoZSBjb29yZGluYXRlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbG5nIC0gTG9uZ2l0dWRlIG9mIHRoZSBjb29yZGluYXRlLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbY2FsbGJhY2tdIC0gQ2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIGFmdGVyIHRoZSBtYXAgaXMgY2VudGVyZWQuXG4gICAqL1xuICBzZXRDZW50ZXIoLi4uYXJncykge1xuICAgIGNvbnN0IGxhdExuZyA9IGxhdExuZ0Zyb21Bcmd1bWVudHMoYXJncyk7XG4gICAgY29uc3QgY2FsbGJhY2sgPSBhcmdzLnBvcCgpO1xuXG4gICAgdGhpcy5tYXAucGFuVG8obGF0TG5nKTtcblxuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhbGxiYWNrLmNhbGwodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgSFRNTCBlbGVtZW50IGNvbnRhaW5lciBvZiB0aGUgbWFwLlxuICAgKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IHRoZSBlbGVtZW50IGNvbnRhaW5lci5cbiAgICovXG4gIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmNyZWFzZSB0aGUgbWFwJ3Mgem9vbS5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IFttYWduaXR1ZGVdIC0gVGhlIG51bWJlciBvZiB0aW1lcyB0aGUgbWFwIHdpbGwgYmUgem9vbWVkIGluLlxuICAgKi9cbiAgem9vbUluKG1hZ25pdHVkZSA9IDEpIHtcbiAgICB0aGlzLnpvb20gPSB0aGlzLm1hcC5nZXRab29tKCkgKyBtYWduaXR1ZGU7XG4gICAgdGhpcy5tYXAuc2V0Wm9vbSh0aGlzLnpvb20pO1xuICB9XG5cbiAgLyoqXG4gICAqIERlY3JlYXNlIHRoZSBtYXAncyB6b29tLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gW21hZ25pdHVkZV0gLSBUaGUgbnVtYmVyIG9mIHRpbWVzIHRoZSBtYXAgd2lsbCBiZSB6b29tZWQgb3V0LlxuICAgKi9cbiAgem9vbU91dChtYWduaXR1ZGUgPSAxKSB7XG4gICAgdGhpcy56b29tID0gdGhpcy5tYXAuZ2V0Wm9vbSgpIC0gbWFnbml0dWRlO1xuICAgIHRoaXMubWFwLnNldFpvb20odGhpcy56b29tKTtcbiAgfVxufVxuXG5HTWFwcy5jb250ZXh0TWVudXMgPSB7fTtcblxuY29uc3QgZ29vZ2xlTWFwc01hcE1ldGhvZHMgPSBPYmplY3Qua2V5cyhnb29nbGUubWFwcy5NYXAucHJvdG90eXBlKVxuICAuZmlsdGVyKGtleSA9PiAodHlwZW9mIGdvb2dsZS5tYXBzLk1hcC5wcm90b3R5cGVba2V5XSA9PT0gJ2Z1bmN0aW9uJyAmJiAhR01hcHMucHJvdG90eXBlW2tleV0pKTtcblxuZ29vZ2xlTWFwc01hcE1ldGhvZHMuZm9yRWFjaCgobWV0aG9kTmFtZSkgPT4ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICBHTWFwcy5wcm90b3R5cGVbbWV0aG9kTmFtZV0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIHJldHVybiB0aGlzLm1hcFttZXRob2ROYW1lXS5hcHBseSh0aGlzLm1hcCwgYXJncyk7XG4gIH07XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgR01hcHM7XG4iLCJpbXBvcnQgR01hcHMgZnJvbSAnLi9jb3JlJztcblxuLyoqXG4gKiBFeHRlbmRzIEdNYXBzIHRvIGJpbmQgYW5kIHRyaWdnZXIgZXZlbnRzLlxuICogQG1vZHVsZSBFdmVudHNcbiAqL1xuXG4vKipcbiAqIENvbGxlY3Rpb24gb2YgY3VzdG9tIGV2ZW50cyB0aGF0IGNhbiBiZSByZWdpc3RlcmVkIGFuZCBmaXJlZC5cbiAqXG4gKiBAdHlwZSB7YXJyYXl9XG4gKi9cbkdNYXBzLmN1c3RvbUV2ZW50cyA9IFsnbWFya2VyX2FkZGVkJywgJ21hcmtlcl9yZW1vdmVkJywgJ3BvbHlsaW5lX2FkZGVkJywgJ3BvbHlsaW5lX3JlbW92ZWQnLCAncG9seWdvbl9hZGRlZCcsICdwb2x5Z29uX3JlbW92ZWQnLCAnbGF5ZXJfYWRkZWQnLCAnbGF5ZXJfcmVtb3ZlZCcsICdvdmVybGF5X21hcF90eXBlX2FkZGVkJywgJ292ZXJsYXlfbWFwX3R5cGVfcmVtb3ZlZCcsICdvdmVybGF5X2FkZGVkJywgJ292ZXJsYXlfcmVtb3ZlZCcsICdnZW9sb2NhdGVkJywgJ2dlb2xvY2F0aW9uX2ZhaWxlZCddO1xuXG4vKipcbiAqIEFkZCBhbiBldmVudCAobmF0aXZlIG9yIGN1c3RvbSkgdG8gYW4gb2JqZWN0LlxuICogQGZ1bmN0aW9uIG9uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudC4gSXQgY2FuIGJlIGFueSBvZiB0aGUgbmF0aXZlIGV2ZW50cyBmcm9tIEdvb2dsZSBNYXBzLCBvciB0aGUgb25lcyBkZXNjcmliZWQgaW4gYEdNYXBzLmN1c3RvbUV2ZW50c2AuXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0IC0gVGhlIHRhcmdldCBvZiB0aGUgZXZlbnQuIEl0IGNhbiBiZSBhIG5hdGl2ZSBvYmplY3QgZnJvbSBHb29nbGUgTWFwcywgKHN1Y2ggYXMgYSBnb29nbGUubWFwcy5NYXAsIGdvb2dsZS5tYXBzLk1hcmtlciwgZXRjLiksIG9yIGEgR01hcHMgaW5zdGFuY2UuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyIC0gVGhlIGhhbmRsZXIgKG9mdGVuIGNhbGxlZCBsaXN0ZW5lcikgb2YgdGhlIGV2ZW50LiBJcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBldmVyeSB0aW1lIHRoZSBldmVudCBpcyBmaXJlZC5cbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5HTWFwcy5vbiA9IChldmVudE5hbWUsIG9iamVjdCwgaGFuZGxlcikgPT4ge1xuICBsZXQgdGFyZ2V0ID0gb2JqZWN0O1xuXG4gIGlmIChHTWFwcy5jdXN0b21FdmVudHMuaW5kZXhPZihldmVudE5hbWUpID09PSAtMSkge1xuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBHTWFwcykge1xuICAgICAgdGFyZ2V0ID0gdGFyZ2V0Lm1hcDtcbiAgICB9XG5cbiAgICByZXR1cm4gZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIodGFyZ2V0LCBldmVudE5hbWUsIGhhbmRsZXIpO1xuICB9XG5cbiAgY29uc3QgcmVnaXN0ZXJlZEV2ZW50ID0ge1xuICAgIGhhbmRsZXIsXG4gICAgZXZlbnROYW1lLFxuICB9O1xuXG4gIHRhcmdldC5yZWdpc3RlcmVkRXZlbnRzW2V2ZW50TmFtZV0gPSB0YXJnZXQucmVnaXN0ZXJlZEV2ZW50c1tldmVudE5hbWVdIHx8IFtdO1xuICB0YXJnZXQucmVnaXN0ZXJlZEV2ZW50c1tldmVudE5hbWVdLnB1c2gocmVnaXN0ZXJlZEV2ZW50KTtcblxuICByZXR1cm4gcmVnaXN0ZXJlZEV2ZW50O1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gZXZlbnQgKG5hdGl2ZSBvciBjdXN0b20pIHRvIGFuIG9iamVjdC5cbiAqIEBmdW5jdGlvbiBvZmZcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50LiBJdCBjYW4gYmUgYW55IG9mIHRoZSBuYXRpdmUgZXZlbnRzIGZyb20gR29vZ2xlIE1hcHMsIG9yIHRoZSBvbmVzIGRlc2NyaWJlZCBpbiBgR01hcHMuY3VzdG9tRXZlbnRzYC5cbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXQgLSBUaGUgdGFyZ2V0IG9mIHRoZSBldmVudC4gSXQgY2FuIGJlIGEgbmF0aXZlIG9iamVjdCBmcm9tIEdvb2dsZSBNYXBzLCAoc3VjaCBhcyBhIGdvb2dsZS5tYXBzLk1hcCwgZ29vZ2xlLm1hcHMuTWFya2VyLCBldGMuKSwgb3IgYSBHTWFwcyBpbnN0YW5jZS5cbiAqL1xuR01hcHMub2ZmID0gKGV2ZW50TmFtZSwgb2JqZWN0KSA9PiB7XG4gIGxldCB0YXJnZXQgPSBvYmplY3Q7XG5cbiAgaWYgKEdNYXBzLmN1c3RvbUV2ZW50cy5pbmRleE9mKGV2ZW50TmFtZSkgPT09IC0xKSB7XG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEdNYXBzKSB7XG4gICAgICB0YXJnZXQgPSB0YXJnZXQubWFwO1xuICAgIH1cblxuICAgIGdvb2dsZS5tYXBzLmV2ZW50LmNsZWFyTGlzdGVuZXJzKHRhcmdldCwgZXZlbnROYW1lKTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQucmVnaXN0ZXJlZEV2ZW50c1tldmVudE5hbWVdID0gW107XG4gIH1cbn07XG5cbi8qKlxuICogQWRkIGEgbmF0aXZlIGV2ZW50IHRoYXQgd2lsbCBiZSByZW1vdmVkIGZyb20gdGhlIHRhcmdldCBhZnRlciBpdCBoYXMgYmVlbiBleGVjdXRlZCBvbmNlLlxuICogQGZ1bmN0aW9uIG9uY2VcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50LiBJdCBoYXMgdG8gYmUgYW55IG9mIHRoZSBuYXRpdmUgZXZlbnRzIGZyb20gR29vZ2xlIE1hcHMuXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0IC0gVGhlIHRhcmdldCBvZiB0aGUgZXZlbnQuIEl0IGhhcyB0byBiZSBhIG5hdGl2ZSBvYmplY3QgZnJvbSBHb29nbGUgTWFwcywgc3VjaCBhcyBhIGdvb2dsZS5tYXBzLk1hcCwgZ29vZ2xlLm1hcHMuTWFya2VyLCBldGMuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyIC0gVGhlIGhhbmRsZXIgKG9mdGVuIGNhbGxlZCBsaXN0ZW5lcikgb2YgdGhlIGV2ZW50LiBJcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBleGVjdXRlZCB3aGVuIHRoZSBldmVudCBpcyBmaXJlZCB0aGUgZmlyc3QgdGltZS5cbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5HTWFwcy5vbmNlID0gKGV2ZW50TmFtZSwgb2JqZWN0LCBoYW5kbGVyKSA9PiB7XG4gIGxldCB0YXJnZXQgPSBvYmplY3Q7XG5cbiAgaWYgKEdNYXBzLmN1c3RvbUV2ZW50cy5pbmRleE9mKGV2ZW50TmFtZSkgPT09IC0xKSB7XG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEdNYXBzKSB7XG4gICAgICB0YXJnZXQgPSB0YXJnZXQubWFwO1xuICAgIH1cblxuICAgIHJldHVybiBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lck9uY2UodGFyZ2V0LCBldmVudE5hbWUsIGhhbmRsZXIpO1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbi8qKlxuICogVHJpZ2dlciBhbiBldmVudCAobmF0aXZlIG9yIGN1c3RvbSkgYW5kIGV4ZWN1dGUgYWxsIHRoZSBoYW5kbGVycyByZWdpc3RlcmVkIHByZXZpb3VzbHkuXG4gKiBAZnVuY3Rpb24gZmlyZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnQuIEl0IGNhbiBiZSBhbnkgb2YgdGhlIG5hdGl2ZSBldmVudHMgZnJvbSBHb29nbGUgTWFwcywgb3IgdGhlIG9uZXMgZGVzY3JpYmVkIGluIGBHTWFwcy5jdXN0b21FdmVudHNgLlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldCAtIFRoZSB0YXJnZXQgb2YgdGhlIGV2ZW50LiBJdCBjYW4gYmUgYSBuYXRpdmUgb2JqZWN0IGZyb20gR29vZ2xlIE1hcHMsIChzdWNoIGFzIGEgZ29vZ2xlLm1hcHMuTWFwLCBnb29nbGUubWFwcy5NYXJrZXIsIGV0Yy4pLCBvciBhIEdNYXBzIGluc3RhbmNlLlxuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgLSBUaGUgY29udGV4dCBmb3IgdGhlIGV2ZW50IGhhbmRsZXIgKHJlcHJlc2VudGVkIGJ5IGB0aGlzYCBrZXl3b3JkIGluc2lkZSB0aGUgaGFuZGxlcikuXG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xuR01hcHMuZmlyZSA9IChldmVudE5hbWUsIG9iamVjdCwgY29udGV4dCkgPT4ge1xuICBpZiAoR01hcHMuY3VzdG9tRXZlbnRzLmluZGV4T2YoZXZlbnROYW1lKSA9PT0gLTEpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBjb25zdCBldmVudEFyZ3VtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShhcmd1bWVudHMpLnNsaWNlKDIpO1xuICAgIGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIob2JqZWN0LCBldmVudE5hbWUsIGV2ZW50QXJndW1lbnRzKTtcbiAgfSBlbHNlIGlmIChldmVudE5hbWUgaW4gY29udGV4dC5yZWdpc3RlcmVkRXZlbnRzKSB7XG4gICAgY29udGV4dC5yZWdpc3RlcmVkRXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChyZWdpc3RlcmVkRXZlbnQgPT5cbiAgICAgIHJlZ2lzdGVyZWRFdmVudC5oYW5kbGVyLmNhbGwoY29udGV4dCwgb2JqZWN0KVxuICAgICk7XG4gIH1cbn07XG5cbkdNYXBzLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIG9uKGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICByZXR1cm4gR01hcHMub24oZXZlbnROYW1lLCB0aGlzLCBoYW5kbGVyKTtcbn07XG5cbkdNYXBzLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbiBvZmYoZXZlbnROYW1lKSB7XG4gIEdNYXBzLm9mZihldmVudE5hbWUsIHRoaXMpO1xufTtcblxuR01hcHMucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICByZXR1cm4gR01hcHMub25jZShldmVudE5hbWUsIHRoaXMsIGhhbmRsZXIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR01hcHM7XG4iLCJpbXBvcnQgR01hcHMsIHsgbGF0TG5nRnJvbUFyZ3VtZW50cyB9IGZyb20gJy4vY29yZSc7XG5pbXBvcnQgJy4vcG9seWZpbGxzJztcblxuLyoqXG4gKiBFeHRlbmRzIEdNYXBzIHRvIHVzZSBnZW9mZW5jZXMuXG4gKiBAbW9kdWxlIEdlb2ZlbmNlc1xuICovXG5cbi8qKlxuICogQ2hlY2sgaWYgYSBjb29yZGluYXRlIGlzIGluc2lkZSBvciBub3QgYSBnZW9mZW5jZS5cbiAqIEBmdW5jdGlvbiBjaGVja0dlb2ZlbmNlXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGxhdExuZyAtIEEgTGF0TG5nTGl0ZXJhbCBvYmplY3QgKGEgcGxhaW4gb2JqZWN0IHdpdGggYGxhdGAgYW5kIGBsbmdgIHByb3BlcnRpZXMpLlxuICogQHBhcmFtIHtvYmplY3R9IGZlbmNlIC0gQSBmZW5jZSBvYmplY3QsIHdoaWNoIGNhbiBiZSBhbiBpbnN0YW5jZSBvZiBgZ29vZ2xlLm1hcHMuUG9seWdvbmAsIGBnb29nbGUubWFwcy5DaXJjbGVgLCBgZ29vZ2xlLm1hcHMuUmVjdGFuZ2xlYCBvciBgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzYC5cbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gSXMgYHRydWVgIGlmIHRoZSBjb29yZGluYXRlIGlzIGluc2lkZSB0aGUgZmVuY2UsIGFuZCBgZmFsc2VgIGlmIGlzIG5vdC5cbiAqL1xuR01hcHMucHJvdG90eXBlLmNoZWNrR2VvZmVuY2UgPSBmdW5jdGlvbiBjaGVja0dlb2ZlbmNlKC4uLmFyZ3MpIHtcbiAgY29uc3QgbGFnTG5nID0gbGF0TG5nRnJvbUFyZ3VtZW50cyhhcmdzKTtcbiAgY29uc3QgZmVuY2UgPSBhcmdzLnBvcCgpO1xuXG4gIHJldHVybiBmZW5jZS5jb250YWluc0xhdExuZyhsYWdMbmcpO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBhIG1hcmtlcidzIHBvc2l0aW9uIGlzIGluc2lkZSBvciBub3QgYW55IG9mIGl0cyBnZW9mZW5jZXMuIEl0IHdpbGwgdHJpZ2dlciB0aGUgYG91dHNpZGVDYWxsYmFja2AgZnVuY3Rpb24gZm9yIGV2ZXJ5IGZlbmNlIHRoYXQgY29udGFpbnMgdGhlIG1hcmtlcidzIHBvc2l0aW9uLlxuICogQGZ1bmN0aW9uIGNoZWNrTWFya2VyR2VvZmVuY2VcbiAqXG4gKiBAcGFyYW0ge2dvb2dsZS5tYXBzLk1hcmtlcn0gbWFya2VyIC0gQSBtYXJrZXIgYWRkZWQgd2l0aCBgR01hcHMjYWRkTWFya2VyYC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG91dHNpZGVDYWxsYmFjayAtIEEgZnVuY3Rpb24gdGhhdCB3aWxsIHJlY2VpdmUgdHdvIGFyZ3VtZW50czogdGhlIGBtYXJrZXJgIGFuZCB0aGUgY3VycmVudCBmZW5jZS5cbiAqL1xuR01hcHMucHJvdG90eXBlLmNoZWNrTWFya2VyR2VvZmVuY2UgPSBmdW5jdGlvbiBjaGVja01hcmtlckdlb2ZlbmNlKG1hcmtlciwgb3V0c2lkZUNhbGxiYWNrKSB7XG4gIGlmIChtYXJrZXIuZmVuY2VzKSB7XG4gICAgbWFya2VyLmZlbmNlcy5mb3JFYWNoKChmZW5jZSkgPT4ge1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBtYXJrZXIuZ2V0UG9zaXRpb24oKTtcblxuICAgICAgaWYgKCF0aGlzLmNoZWNrR2VvZmVuY2UocG9zaXRpb24sIGZlbmNlKSkge1xuICAgICAgICBvdXRzaWRlQ2FsbGJhY2sobWFya2VyLCBmZW5jZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXBzO1xuIiwiaW1wb3J0IEdNYXBzLCB7IHNldHVwRXZlbnRzLCBhcnJheVRvTGF0TG5nLCBmbGF0dGVuQXJyYXkgfSBmcm9tICcuL2NvcmUnO1xuaW1wb3J0ICdldmVudHMnO1xuXG4vKipcbiAqIEV4dGVuZHMgR01hcHMgdG8gdXNlIHBvbHlsaW5lcyBhbmQgcG9seWdvbnMuXG4gKiBAbW9kdWxlIEdlb21ldHJ5XG4gKi9cblxuY29uc3QgRVZFTlRTID0gWydjbGljaycsICdkYmxjbGljaycsICdtb3VzZWRvd24nLCAnbW91c2Vtb3ZlJywgJ21vdXNlb3V0JywgJ21vdXNlb3ZlcicsICdtb3VzZXVwJywgJ3JpZ2h0Y2xpY2snXTtcblxuLyoqXG4gKiBEcmF3IGEgcG9seWxpbmUgaW4gdGhlIE1hcCBhbmQgYWRkIGl0IHRvIHRoZSBwb2x5bGluZXMgY29sbGVjdGlvbi4gVGhpcyBtZXRob2QgYWxzbyBmaXJlcyBhIGBwb2x5bGluZV9hZGRlZGAgZXZlbnQuXG4gKiBAZnVuY3Rpb24gZHJhd1BvbHlsaW5lXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgYG9wdGlvbnNgIG9iamVjdCBzaG91bGQgY29udGFpbjpcbiAqIEBwYXJhbSB7YXJyYXl9IG9wdGlvbnMucGF0aCAtIENvbGxlY3Rpb24gb2YgY29vcmRpbmF0ZXMgKHdoaWNoIGNhbiBiZSBlaXRoZXIgYW4gYXJyYXkgW2xhdCwgbG5nXSBvciBhIGdvb2dsZS5tYXBzLkxhdExuZyBvYmplY3QpLlxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc3Ryb2tlQ29sb3IgLSBDb2xvciBvZiB0aGUgcG9seWxpbmUuIENhbiBiZSBoZXhhZGVjaW1hbCBvciBDU1MgbmFtZS5cbiAqIEBwYXJhbSB7ZmxvYXR9IG9wdGlvbnMuc3Ryb2tlT3BhY2l0eSAtIE9wYWNpdHkgb2YgdGhlIHBvbHlsaW5lIGZyb20gMC4wIHRvIDEuMC5cbiAqIEBwYXJhbSB7aW50ZWdlcn0gb3B0aW9ucy5zdHJva2VXZWlnaHQgLSBQb2x5bGluZSB3aWR0aCBpbiBwaXhlbHMuXG4gKlxuICogYG9wdGlvbnNgIGFsc28gYWNjZXB0cyBhbnkgb3B0aW9uIGRlZmluZWQgaW4gdGhlIFtvZmZpY2lhbCBkb2N1bWVudGF0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjUG9seWxpbmVPcHRpb25zKSBhbmQgYW55IGV2ZW50IGRlZmluZWQgaW4gdGhlIFtcIkV2ZW50c1wiIHNlY3Rpb25dKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNQb2x5bGluZSkuXG4gKlxuICogQHJldHVybnMge2dvb2dsZS5tYXBzLlBvbHlsaW5lfVxuICovXG5HTWFwcy5wcm90b3R5cGUuZHJhd1BvbHlsaW5lID0gZnVuY3Rpb24gZHJhd1BvbHlsaW5lKHsgaWNvbnMsIHN0cm9rZUNvbG9yLCBzdHJva2VPcGFjaXR5LCBzdHJva2VXZWlnaHQsIGdlb2Rlc2ljLCBjbGlja2FibGUgPSB0cnVlLCBlZGl0YWJsZSA9IGZhbHNlLCB2aXNpYmxlID0gdHJ1ZSwgekluZGV4LCAuLi5vcHRpb25zIH0pIHtcbiAgbGV0IHBhdGggPSBbXTtcblxuICBpZiAob3B0aW9ucy5wYXRoLmxlbmd0aCkge1xuICAgIGlmIChvcHRpb25zLnBhdGhbMF1bMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcGF0aCA9IFsuLi5vcHRpb25zLnBhdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXRoID0gb3B0aW9ucy5wYXRoLm1hcChsYXRMbmcgPT5cbiAgICAgICAgbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsYXRMbmdbMF0sIGxhdExuZ1sxXSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcG9seWxpbmVPcHRpb25zID0ge1xuICAgIG1hcDogdGhpcy5tYXAsXG4gICAgcGF0aCxcbiAgICBzdHJva2VDb2xvcixcbiAgICBzdHJva2VPcGFjaXR5LFxuICAgIHN0cm9rZVdlaWdodCxcbiAgICBnZW9kZXNpYyxcbiAgICB2aXNpYmxlLFxuICAgIGNsaWNrYWJsZSxcbiAgICBlZGl0YWJsZSxcbiAgICBpY29ucyxcbiAgICB6SW5kZXgsXG4gIH07XG5cbiAgY29uc3QgcG9seWxpbmUgPSBuZXcgZ29vZ2xlLm1hcHMuUG9seWxpbmUocG9seWxpbmVPcHRpb25zKTtcblxuICBzZXR1cEV2ZW50cyh7IGV2ZW50czogRVZFTlRTLCBvYmplY3Q6IHBvbHlsaW5lLCBpbnN0YW5jZTogdGhpcywgaGFuZGxlcnM6IG9wdGlvbnMsIH0pO1xuXG4gIHRoaXMucG9seWxpbmVzLnB1c2gocG9seWxpbmUpO1xuXG4gIEdNYXBzLmZpcmUoJ3BvbHlsaW5lX2FkZGVkJywgcG9seWxpbmUsIHRoaXMpO1xuXG4gIHJldHVybiBwb2x5bGluZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGEgcG9seWxpbmUgZnJvbSB0aGUgbWFwIGFuZCBmcm9tIHRoZSBwb2x5bGluZXMgY29sbGVjdGlvbi4gVGhpcyBtZXRob2QgYWxzbyBmaXJlcyBhIGBwb2x5bGluZV9yZW1vdmVkYCBldmVudC5cbiAqIEBmdW5jdGlvbiByZW1vdmVQb2x5bGluZVxuICpcbiAqIEBwYXJhbSB7Z29vZ2xlLm1hcHMuUG9seWxpbmV9IHBvbHlsaW5lIC0gVGhlIHBvbHlsaW5lIHRvIGJlIHJlbW92ZWQuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5yZW1vdmVQb2x5bGluZSA9IGZ1bmN0aW9uIHJlbW92ZVBvbHlsaW5lKHBvbHlsaW5lKSB7XG4gIGNvbnN0IHBvbHlsaW5lSW5kZXggPSB0aGlzLnBvbHlsaW5lcy5pbmRleE9mKHBvbHlsaW5lKTtcblxuICBpZiAocG9seWxpbmVJbmRleCA+PSAwKSB7XG4gICAgcG9seWxpbmUuc2V0TWFwKG51bGwpO1xuICAgIHRoaXMucG9seWxpbmVzLnNwbGljZShwb2x5bGluZUluZGV4LCAxKTtcblxuICAgIEdNYXBzLmZpcmUoJ3BvbHlsaW5lX3JlbW92ZWQnLCBwb2x5bGluZSwgdGhpcyk7XG4gIH1cbn07XG5cbi8qKlxuICogUmVtb3ZlIGFsbCB0aGUgcG9seWxpbmVzIGZyb20gdGhlIG1hcCBhbmQgY2xlYXIgdGhlIHBvbHlsaW5lcyBjb2xsZWN0aW9uLiBUaGlzIG1ldGhvZCBkb2VzIG5vdCBmaXJlIGEgYHBvbHlsaW5lX3JlbW92ZWRgIGV2ZW50LlxuICogQGZ1bmN0aW9uIHJlbW92ZVBvbHlsaW5lc1xuICovXG5HTWFwcy5wcm90b3R5cGUucmVtb3ZlUG9seWxpbmVzID0gZnVuY3Rpb24gcmVtb3ZlUG9seWxpbmVzKCkge1xuICB0aGlzLnBvbHlsaW5lcy5mb3JFYWNoKHBvbHlsaW5lID0+IHBvbHlsaW5lLnNldE1hcChudWxsKSk7XG5cbiAgdGhpcy5wb2x5bGluZXMgPSBbXTtcbn07XG5cbi8qKlxuICogRHJhdyBhIGNpcmNsZSBpbiB0aGUgTWFwIGFuZCBpdCB0byB0aGUgcG9seWdvbnMgY29sbGVjdGlvbi5cbiAqIEBmdW5jdGlvbiBkcmF3Q2lyY2xlXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgYG9wdGlvbnNgIG9iamVjdCBzaG91bGQgY29udGFpbjpcbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLmxhdGl0dWRlIC0gTGF0aXR1ZGUgb2YgdGhlIGNlbnRlci4gSWYgYGxhdGl0dWRlYCBhbmQgYGxvbmdpdHVkZWAgYXJlIHNldCwgYGNlbnRlcmBpcyBpZ25vcmVkLlxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMubG9uZ2l0dWRlIC0gTG9uZ2l0dWRlIG9mIHRoZSBjZW50ZXIuIElmIGBsYXRpdHVkZWAgYW5kIGBsb25naXR1ZGVgIGFyZSBzZXQsIGBjZW50ZXJgaXMgaWdub3JlZC5cbiAqIEBwYXJhbSB7Z29vZ2xlLm1hcHMuTGF0TG5nfSBvcHRpb25zLmNlbnRlciAtIEEgYGdvb2dsZS5tYXBzLkxhdExuZ2AgY29vcmRpbmF0ZSBpbmRpY2F0ZSB0aGUgY2VudGVyLiBJZiBzZXQsIGBsYXRpdHVkZWAgYW5kIGBsb25naXR1ZGVgIGFyZSBpZ25vcmVkLlxuICpcbiAqIGBvcHRpb25zYCBhbHNvIGFjY2VwdHMgYW55IG9wdGlvbiBkZWZpbmVkIGluIHRoZSBbb2ZmaWNpYWwgZG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI0NpcmNsZU9wdGlvbnMpIGFuZCBhbnkgZXZlbnQgZGVmaW5lZCBpbiB0aGUgW1wiRXZlbnRzXCIgc2VjdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI0NpcmNsZSkuXG4gKlxuICogQHJldHVybnMge2dvb2dsZS5tYXBzLkNpcmNsZX1cbiAqL1xuR01hcHMucHJvdG90eXBlLmRyYXdDaXJjbGUgPSBmdW5jdGlvbiBkcmF3Q2lyY2xlKGJhc2VPcHRpb25zKSB7XG4gIGNvbnN0IHsgbGF0LCBsYXRpdHVkZSA9IGxhdCwgbG5nLCBsb25naXR1ZGUgPSBsbmcsIC4uLm9wdGlvbnMgfSA9IGJhc2VPcHRpb25zO1xuICBjb25zdCB7IGNlbnRlciA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobGF0aXR1ZGUsIGxvbmdpdHVkZSksIH0gPSBvcHRpb25zO1xuICBjb25zdCBwb2x5Z29uT3B0aW9ucyA9IHtcbiAgICAuLi5vcHRpb25zLFxuICAgIG1hcDogdGhpcy5tYXAsXG4gICAgY2VudGVyLFxuICB9O1xuXG4gIGNvbnN0IHBvbHlnb24gPSBuZXcgZ29vZ2xlLm1hcHMuQ2lyY2xlKHBvbHlnb25PcHRpb25zKTtcblxuICBzZXR1cEV2ZW50cyh7IGV2ZW50czogRVZFTlRTLCBvYmplY3Q6IHBvbHlnb24sIGluc3RhbmNlOiB0aGlzLCBoYW5kbGVyczogb3B0aW9ucywgfSk7XG5cbiAgdGhpcy5wb2x5Z29ucy5wdXNoKHBvbHlnb24pO1xuXG4gIHJldHVybiBwb2x5Z29uO1xufTtcblxuLyoqXG4gKiBEcmF3IGEgcmVjdGFuZ2xlIGluIHRoZSBNYXAgYW5kIGl0IHRvIHRoZSBwb2x5Z29ucyBjb2xsZWN0aW9uLlxuICogQGZ1bmN0aW9uIGRyYXdSZWN0YW5nbGVcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRoZSBgb3B0aW9uc2Agb2JqZWN0IHNob3VsZCBjb250YWluOlxuICogQHBhcmFtIHthcnJheX0gb3B0aW9ucy5ib3VuZHMgLSBCaS1kaW1lbnNpb25hbCBhcnJheSBvZiBsYXRpdHVkZXMgYW5kIGxvbmdpdHVkZXMuXG4gKlxuICogYG9wdGlvbnNgIGFsc28gYWNjZXB0cyBhbnkgb3B0aW9uIGRlZmluZWQgaW4gdGhlIFtvZmZpY2lhbCBkb2N1bWVudGF0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjUmVjdGFuZ2xlT3B0aW9ucykgYW5kIGFueSBldmVudCBkZWZpbmVkIGluIHRoZSBbXCJFdmVudHNcIiBzZWN0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjUmVjdGFuZ2xlKS5cbiAqXG4gKiBAcmV0dXJucyB7Z29vZ2xlLm1hcHMuUmVjdGFuZ2xlfVxuICovXG5HTWFwcy5wcm90b3R5cGUuZHJhd1JlY3RhbmdsZSA9IGZ1bmN0aW9uIGRyYXdSZWN0YW5nbGUoYmFzZU9wdGlvbnMpIHtcbiAgY29uc3QgeyBib3VuZHMsIC4uLm9wdGlvbnMgfSA9IGJhc2VPcHRpb25zO1xuXG4gIGNvbnN0IGxhdExuZ0JvdW5kcyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMoXG4gICAgbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhib3VuZHNbMF1bMF0sIGJvdW5kc1swXVsxXSksXG4gICAgbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhib3VuZHNbMV1bMF0sIGJvdW5kc1sxXVsxXSlcbiAgKTtcblxuICBjb25zdCBwb2x5Z29uT3B0aW9ucyA9IHtcbiAgICAuLi5vcHRpb25zLFxuICAgIGJvdW5kczogbGF0TG5nQm91bmRzLFxuICAgIG1hcDogdGhpcy5tYXAsXG4gIH07XG5cbiAgY29uc3QgcG9seWdvbiA9IG5ldyBnb29nbGUubWFwcy5SZWN0YW5nbGUocG9seWdvbk9wdGlvbnMpO1xuXG4gIHNldHVwRXZlbnRzKHsgZXZlbnRzOiBFVkVOVFMsIG9iamVjdDogcG9seWdvbiwgaW5zdGFuY2U6IHRoaXMsIGhhbmRsZXJzOiBvcHRpb25zLCB9KTtcblxuICB0aGlzLnBvbHlnb25zLnB1c2gocG9seWdvbik7XG5cbiAgcmV0dXJuIHBvbHlnb247XG59O1xuXG4vKipcbiAqIERyYXcgYSBwb2x5Z29uIGluIHRoZSBNYXAgYW5kIGl0IHRvIHRoZSBwb2x5Z29ucyBjb2xsZWN0aW9uLlxuICogQGZ1bmN0aW9uIGRyYXdQb2x5Z29uXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgYG9wdGlvbnNgIG9iamVjdCBzaG91bGQgY29udGFpbjpcbiAqIEBwYXJhbSB7YXJyYXl9IG9wdGlvbnMucGF0aHMgLSBCaS1kaW1lbnNpb25hbCBhcnJheSBvZiBsYXRpdHVkZXMgYW5kIGxvbmdpdHVkZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMudXNlR2VvSlNPTiAtIElmIHNldCwgYWxsb3dzIGBwYXRoc2AgdG8gdXNlIEdlb0pTT04gZm9ybWF0LlxuICpcbiAqIGBvcHRpb25zYCBhbHNvIGFjY2VwdHMgYW55IG9wdGlvbiBkZWZpbmVkIGluIHRoZSBbb2ZmaWNpYWwgZG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI1BvbHlnb25PcHRpb25zKSBhbmQgYW55IGV2ZW50IGRlZmluZWQgaW4gdGhlIFtcIkV2ZW50c1wiIHNlY3Rpb25dKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNQb2x5Z29uKS5cbiAqXG4gKiBAcmV0dXJucyB7Z29vZ2xlLm1hcHMuUG9seWdvbn1cbiAqL1xuR01hcHMucHJvdG90eXBlLmRyYXdQb2x5Z29uID0gZnVuY3Rpb24gZHJhd1BvbHlnb24oYmFzZU9wdGlvbnMpIHtcbiAgY29uc3QgeyB1c2VHZW9KU09OID0gZmFsc2UsIC4uLm9wdGlvbnMgfSA9IGJhc2VPcHRpb25zO1xuXG4gIGNvbnN0IGJhc2VQYXRocyA9IHVzZUdlb0pTT04gPyBvcHRpb25zLnBhdGhzIDogW29wdGlvbnMucGF0aHMuc2xpY2UoMCldO1xuICBsZXQgcGF0aHMgPSBbXTtcblxuICBpZiAoYmFzZVBhdGhzLmxlbmd0aCkge1xuICAgIGlmIChiYXNlUGF0aHNbMF0ubGVuZ3RoKSB7XG4gICAgICBwYXRocyA9IGZsYXR0ZW5BcnJheShcbiAgICAgICAgYmFzZVBhdGhzLm1hcChwYXRoID0+XG4gICAgICAgICAgYXJyYXlUb0xhdExuZyhwYXRoLCB1c2VHZW9KU09OKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHBvbHlnb25PcHRpb25zID0ge1xuICAgIC4uLm9wdGlvbnMsXG4gICAgbWFwOiB0aGlzLm1hcCxcbiAgICBwYXRocyxcbiAgfTtcblxuICBjb25zdCBwb2x5Z29uID0gbmV3IGdvb2dsZS5tYXBzLlBvbHlnb24ocG9seWdvbk9wdGlvbnMpO1xuXG4gIHNldHVwRXZlbnRzKHsgZXZlbnRzOiBFVkVOVFMsIG9iamVjdDogcG9seWdvbiwgaW5zdGFuY2U6IHRoaXMsIGhhbmRsZXJzOiBvcHRpb25zLCB9KTtcblxuICB0aGlzLnBvbHlnb25zLnB1c2gocG9seWdvbik7XG5cbiAgR01hcHMuZmlyZSgncG9seWdvbl9hZGRlZCcsIHBvbHlnb24sIHRoaXMpO1xuXG4gIHJldHVybiBwb2x5Z29uO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYSBwb2x5Z29uIGZyb20gdGhlIG1hcCBhbmQgZnJvbSB0aGUgcG9seWdvbnMgY29sbGVjdGlvbi4gVGhpcyBtZXRob2QgYWxzbyBmaXJlcyBhIGBwb2x5Z29uX3JlbW92ZWRgIGV2ZW50LlxuICogQGZ1bmN0aW9uIHJlbW92ZVBvbHlnb25cbiAqXG4gKiBAcGFyYW0ge2dvb2dsZS5tYXBzLlBvbHlnb259IHBvbHlnb24gLSBUaGUgcG9seWdvbiB0byBiZSByZW1vdmVkLlxuICovXG5HTWFwcy5wcm90b3R5cGUucmVtb3ZlUG9seWdvbiA9IGZ1bmN0aW9uIHJlbW92ZVBvbHlnb24ocG9seWdvbikge1xuICBjb25zdCBwb2x5Z29uSW5kZXggPSB0aGlzLnBvbHlnb25zLmluZGV4T2YocG9seWdvbik7XG5cbiAgaWYgKHBvbHlnb25JbmRleCA+PSAwKSB7XG4gICAgcG9seWdvbi5zZXRNYXAobnVsbCk7XG4gICAgdGhpcy5wb2x5Z29ucy5zcGxpY2UocG9seWdvbkluZGV4LCAxKTtcblxuICAgIEdNYXBzLmZpcmUoJ3BvbHlnb25fcmVtb3ZlZCcsIHBvbHlnb24sIHRoaXMpO1xuICB9XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbGwgdGhlIHBvbHlnb25zIGZyb20gdGhlIG1hcCBhbmQgY2xlYXIgdGhlIHBvbHlnb25zIGNvbGxlY3Rpb24uIFRoaXMgbWV0aG9kIGRvZXMgbm90IGZpcmUgYSBgcG9seWdvbl9yZW1vdmVkYCBldmVudC5cbiAqIEBmdW5jdGlvbiByZW1vdmVQb2x5Z29uc1xuICovXG5HTWFwcy5wcm90b3R5cGUucmVtb3ZlUG9seWdvbnMgPSBmdW5jdGlvbiByZW1vdmVQb2x5Z29ucygpIHtcbiAgdGhpcy5wb2x5Z29ucy5mb3JFYWNoKHBvbHlnb24gPT4gcG9seWdvbi5zZXRNYXAobnVsbCkpO1xuXG4gIHRoaXMucG9seWdvbnMgPSBbXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXBzO1xuIiwiaW1wb3J0IEdNYXBzIGZyb20gJy4vY29yZSc7XG5pbXBvcnQgJy4vZXZlbnRzJztcbmltcG9ydCAnLi9jb250cm9scyc7XG5pbXBvcnQgJy4vZ2VvZmVuY2VzJztcbmltcG9ydCAnLi9tYXJrZXJzJztcbmltcG9ydCAnLi9vdmVybGF5cyc7XG5pbXBvcnQgJy4vZ2VvbWV0cnknO1xuaW1wb3J0ICcuL2xheWVycyc7XG5pbXBvcnQgJy4vcm91dGVzJztcbmltcG9ydCAnLi9zdGF0aWMnO1xuaW1wb3J0ICcuL21hcF90eXBlcyc7XG5pbXBvcnQgJy4vc3R5bGVzJztcbmltcG9ydCAnLi9zdHJlZXR2aWV3JztcbmltcG9ydCAnLi9wb2x5ZmlsbHMnO1xuaW1wb3J0ICcuL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgR01hcHM7XG4iLCJpbXBvcnQgR01hcHMsIHsgc2V0dXBFdmVudExpc3RlbmVyIH0gZnJvbSAnLi9jb3JlJztcbmltcG9ydCAnLi9ldmVudHMnO1xuXG4vKipcbiAqIEV4dGVuZHMgR01hcHMgdG8gdXNlIHBvbHlsaW5lcyBhbmQgcG9seWdvbnMuXG4gKiBAbW9kdWxlIExheWVyc1xuICovXG5cbkdNYXBzLnByb3RvdHlwZS5nZXRGcm9tRnVzaW9uVGFibGVzID0gZnVuY3Rpb24gZ2V0RnJvbUZ1c2lvblRhYmxlcyhiYXNlT3B0aW9ucykge1xuICBjb25zdCB7IGV2ZW50cyA9IHt9LCAuLi5vcHRpb25zIH0gPSBiYXNlT3B0aW9ucztcblxuICBjb25zdCBsYXllciA9IG5ldyBnb29nbGUubWFwcy5GdXNpb25UYWJsZXNMYXllcihvcHRpb25zKTtcblxuICBPYmplY3Qua2V5cyhldmVudHMpLmZvckVhY2goZXZlbnROYW1lID0+XG4gICAgc2V0dXBFdmVudExpc3RlbmVyKHtcbiAgICAgIG9iamVjdDogbGF5ZXIsXG4gICAgICBldmVudE5hbWUsXG4gICAgICBpbnN0YW5jZTogdGhpcyxcbiAgICAgIGhhbmRsZXI6IGV2ZW50c1tldmVudE5hbWVdLFxuICAgIH0pXG4gICk7XG5cbiAgdGhpcy5sYXllcnMucHVzaChsYXllcik7XG5cbiAgcmV0dXJuIGxheWVyO1xufTtcblxuLyoqXG4gKiBEcmF3IGEgRnVzaW9uVGFibGVzIGxheWVyIGluIHRoZSBNYXAuXG4gKiBAZnVuY3Rpb24gbG9hZEZyb21GdXNpb25UYWJsZXNcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRoZSBgb3B0aW9uc2AgYWNjZXB0cyBhbnkgb3B0aW9uIGRlZmluZWQgaW4gdGhlIFtvZmZpY2lhbCBkb2N1bWVudGF0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjRnVzaW9uVGFibGVzTGF5ZXJPcHRpb25zKS5cbiAqXG4gKiBgb3B0aW9uc2AgYWxzbyBhY2NlcHRzIGFuIGBldmVudHNgIG9iamVjdCwgd2hpY2ggYWNjZXB0cyBvbmx5IGBjbGlja2AuXG4gKlxuICogQHJldHVybnMge2dvb2dsZS5tYXBzLkZ1c2lvblRhYmxlc0xheWVyfVxuICovXG5HTWFwcy5wcm90b3R5cGUubG9hZEZyb21GdXNpb25UYWJsZXMgPSBmdW5jdGlvbiBsb2FkRnJvbUZ1c2lvblRhYmxlcyhvcHRpb25zKSB7XG4gIGNvbnN0IGxheWVyID0gdGhpcy5nZXRGcm9tRnVzaW9uVGFibGVzKG9wdGlvbnMpO1xuICBsYXllci5zZXRNYXAodGhpcy5tYXApO1xuXG4gIHJldHVybiBsYXllcjtcbn07XG5cbkdNYXBzLnByb3RvdHlwZS5nZXRGcm9tS01MID0gZnVuY3Rpb24gZ2V0RnJvbUtNTChiYXNlT3B0aW9ucykge1xuICBjb25zdCB7IHVybCwgZXZlbnRzLCAuLi5vcHRpb25zIH0gPSBiYXNlT3B0aW9ucztcblxuICBjb25zdCBsYXllciA9IG5ldyBnb29nbGUubWFwcy5LbWxMYXllcih1cmwsIG9wdGlvbnMpO1xuXG4gIE9iamVjdC5rZXlzKGV2ZW50cykuZm9yRWFjaChldmVudE5hbWUgPT5cbiAgICBzZXR1cEV2ZW50TGlzdGVuZXIoe1xuICAgICAgb2JqZWN0OiBsYXllcixcbiAgICAgIGV2ZW50TmFtZSxcbiAgICAgIGluc3RhbmNlOiB0aGlzLFxuICAgICAgaGFuZGxlcjogZXZlbnRzW2V2ZW50TmFtZV0sXG4gICAgfSlcbiAgKTtcblxuICB0aGlzLmxheWVycy5wdXNoKGxheWVyKTtcblxuICByZXR1cm4gbGF5ZXI7XG59O1xuXG4vKipcbiAqIERyYXcgYSBLTUwgbGF5ZXIgaW4gdGhlIE1hcC5cbiAqIEBmdW5jdGlvbiBsb2FkRnJvbUtNTFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBhY2NlcHRzIGFueSBvcHRpb24gZGVmaW5lZCBpbiB0aGUgW29mZmljaWFsIGRvY3VtZW50YXRpb25dKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNLbWxMYXllck9wdGlvbnMpLlxuICpcbiAqIGBvcHRpb25zYCBhbHNvIGFjY2VwdHMgYW4gYGV2ZW50c2Agb2JqZWN0LCB3aGljaCBhY2NlcHRzIGFsbCBldmVudHMgZGVmaW5lZCBpbiB0aGUgW1wiRXZlbnRzXCIgc2VjdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI0ttbExheWVyKS5cbiAqXG4gKiBAcmV0dXJucyB7Z29vZ2xlLm1hcHMuS21sTGF5ZXJ9XG4gKi9cbkdNYXBzLnByb3RvdHlwZS5sb2FkRnJvbUtNTCA9IGZ1bmN0aW9uIGxvYWRGcm9tS01MKG9wdGlvbnMpIHtcbiAgY29uc3QgbGF5ZXIgPSB0aGlzLmdldEZyb21LTUwob3B0aW9ucyk7XG4gIGxheWVyLnNldE1hcCh0aGlzLm1hcCk7XG5cbiAgcmV0dXJuIGxheWVyO1xufTtcblxuLyoqXG4gKiBEcmF3IGEgbGF5ZXIgaW4gdGhlIE1hcC4gVGhpcyBtZXRob2QgYWxzbyBmaXJlcyBhIGBsYXllcl9hZGRlZGAgZXZlbnQuXG4gKiBAZnVuY3Rpb24gYWRkTGF5ZXJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbGF5ZXJOYW1lIC0gVGhlIG5hbWUgb2YgYSBHb29nbGUgTWFwcyBsYXllciwgd2hpY2ggY2FuIGJlOiBgdHJhZmZpY2AsIGB0cmFuc2l0YCBvciBgYmljeWNsaW5nYC5cbiAqXG4gKiBAcmV0dXJucyB7Z29vZ2xlLm1hcHMuVHJhZmZpY0xheWVyfGdvb2dsZS5tYXBzLlRyYW5zaXRMYXllcnxnb29nbGUubWFwcy5CaWN5Y2xpbmdMYXllcn1cbiAqL1xuR01hcHMucHJvdG90eXBlLmFkZExheWVyID0gZnVuY3Rpb24gYWRkTGF5ZXIobGF5ZXJOYW1lLCBiYXNlT3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHsgZmlsdGVyLCBjbGljaywgc2VhcmNoLCBuZWFyYnlTZWFyY2gsIHJhZGFyU2VhcmNoLCB0ZXh0U2VhcmNoLCAuLi5vcHRpb25zIH0gPSBiYXNlT3B0aW9ucztcbiAgY29uc3QgeyBib3VuZHMsIGtleXdvcmQsIGxvY2F0aW9uLCBuYW1lLCByYWRpdXMsIHJhbmtCeSwgdHlwZXMsIHF1ZXJ5LCB9ID0gb3B0aW9ucztcbiAgbGV0IGxheWVyO1xuXG4gIHN3aXRjaCAobGF5ZXJOYW1lKSB7XG4gICAgY2FzZSAndHJhZmZpYyc6XG4gICAgICBsYXllciA9IG5ldyBnb29nbGUubWFwcy5UcmFmZmljTGF5ZXIoKTtcbiAgICAgIHRoaXMuc2luZ2xlTGF5ZXJzLnRyYWZmaWMgPSBsYXllcjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3RyYW5zaXQnOlxuICAgICAgbGF5ZXIgPSBuZXcgZ29vZ2xlLm1hcHMuVHJhbnNpdExheWVyKCk7XG4gICAgICB0aGlzLnNpbmdsZUxheWVycy50cmFuc2l0ID0gbGF5ZXI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdiaWN5Y2xpbmcnOlxuICAgICAgbGF5ZXIgPSBuZXcgZ29vZ2xlLm1hcHMuQmljeWNsaW5nTGF5ZXIoKTtcbiAgICAgIHRoaXMuc2luZ2xlTGF5ZXJzLmJpY3ljbGluZyA9IGxheWVyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncGxhY2VzJzpcbiAgICAgIGxheWVyID0gbmV3IGdvb2dsZS5tYXBzLnBsYWNlcy5QbGFjZXNTZXJ2aWNlKHRoaXMubWFwKTtcbiAgICAgIHRoaXMuc2luZ2xlTGF5ZXJzLnBsYWNlcyA9IGxheWVyO1xuXG4gICAgICBpZiAoc2VhcmNoIHx8IG5lYXJieVNlYXJjaCB8fCByYWRhclNlYXJjaCkge1xuICAgICAgICBjb25zdCBwbGFjZVNlYXJjaFJlcXVlc3QgPSB7XG4gICAgICAgICAgYm91bmRzLFxuICAgICAgICAgIGtleXdvcmQsXG4gICAgICAgICAgbG9jYXRpb24sXG4gICAgICAgICAgbmFtZSxcbiAgICAgICAgICByYWRpdXMsXG4gICAgICAgICAgcmFua0J5LFxuICAgICAgICAgIHR5cGVzLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChyYWRhclNlYXJjaCkge1xuICAgICAgICAgIGxheWVyLnJhZGFyU2VhcmNoKHBsYWNlU2VhcmNoUmVxdWVzdCwgcmFkYXJTZWFyY2gpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlYXJjaCkge1xuICAgICAgICAgIGxheWVyLnNlYXJjaChwbGFjZVNlYXJjaFJlcXVlc3QsIHNlYXJjaCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmVhcmJ5U2VhcmNoKSB7XG4gICAgICAgICAgbGF5ZXIubmVhcmJ5U2VhcmNoKHBsYWNlU2VhcmNoUmVxdWVzdCwgbmVhcmJ5U2VhcmNoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGV4dFNlYXJjaCkge1xuICAgICAgICBjb25zdCB0ZXh0U2VhcmNoUmVxdWVzdCA9IHtcbiAgICAgICAgICBib3VuZHMsXG4gICAgICAgICAgbG9jYXRpb24sXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgcmFkaXVzLFxuICAgICAgICB9O1xuXG4gICAgICAgIGxheWVyLnRleHRTZWFyY2godGV4dFNlYXJjaFJlcXVlc3QsIHRleHRTZWFyY2gpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgaWYgKGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBsYXllci5zZXRPcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBsYXllci5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbGF5ZXIuc2V0TWFwID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBsYXllci5zZXRNYXAodGhpcy5tYXApO1xuICAgIH1cblxuICAgIEdNYXBzLmZpcmUoJ2xheWVyX2FkZGVkJywgbGF5ZXIsIHRoaXMpO1xuXG4gICAgcmV0dXJuIGxheWVyO1xuICB9XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhIGxheWVyIGZyb20gdGhlIG1hcC4gSWYgdGhlIGxheWVyIGlzIGEgRnVzaW9uVGFibGVzIGxheWVyIG9yIGEgS01MIGxheWVyLCBgcmVtb3ZlTGF5ZXJgIGFsc28gcmVtb3ZlcyB0aGUgbGF5ZXIgZnJvbSB0aGUgbGF5ZXJzIGNvbGxlY3Rpb24gYW5kIGZpcmVzIGEgYGxheWVyX3JlbW92ZWRgIGV2ZW50LlxuICogQGZ1bmN0aW9uIHJlbW92ZUxheWVyXG4gKlxuICogQHBhcmFtIHtnb29nbGUubWFwcy5Qb2x5Z29ufSBwb2x5Z29uIC0gVGhlIHBvbHlnb24gdG8gYmUgcmVtb3ZlZC5cbiAqL1xuR01hcHMucHJvdG90eXBlLnJlbW92ZUxheWVyID0gZnVuY3Rpb24gcmVtb3ZlTGF5ZXIobGF5ZXIpIHtcbiAgaWYgKHR5cGVvZiBsYXllciA9PT0gJ3N0cmluZycgJiYgdGhpcy5zaW5nbGVMYXllcnNbbGF5ZXJdICE9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLnNpbmdsZUxheWVyc1tsYXllcl0uc2V0TWFwKG51bGwpO1xuXG4gICAgZGVsZXRlIHRoaXMuc2luZ2xlTGF5ZXJzW2xheWVyXTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBsYXllckluZGV4ID0gdGhpcy5sYXllcnMuaW5kZXhPZihsYXllcik7XG5cbiAgICBpZiAobGF5ZXJJbmRleCA+PSAwKSB7XG4gICAgICBsYXllci5zZXRNYXAobnVsbCk7XG4gICAgICB0aGlzLmxheWVycy5zcGxpY2UobGF5ZXJJbmRleCwgMSk7XG5cbiAgICAgIEdNYXBzLmZpcmUoJ2xheWVyX3JlbW92ZWQnLCBsYXllciwgdGhpcyk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHTWFwcztcbiIsImltcG9ydCBHTWFwcyBmcm9tICcuL2NvcmUnO1xuaW1wb3J0ICcuL2V2ZW50cyc7XG5cbi8qKlxuICogRXh0ZW5kcyBHTWFwcyB0byB1c2UgY3VzdG9tIE1hcCBUeXBlcy5cbiAqIEBtb2R1bGUgTWFwVHlwZXNcbiAqL1xuXG4vKipcbiAqIERyYXcgYSBjdXN0b20gW3RpbGUtYmFzZWQgbWFwIHR5cGVdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L21hcHR5cGVzI0ltYWdlTWFwVHlwZXMpIGluIHRoZSBNYXAsIHdoaWNoIGNhbiBiZSB1c2VkIHdpdGggdGhlIGJhc2UgbWFwIHR5cGVzIChgaHlicmlkYCwgYHJvYWRtYXBgLCBgc2F0ZWxsaXRlYCBhbmQgYHRlcnJhaW5gKS5cbiAqIEBmdW5jdGlvbiBhZGRNYXBUeXBlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1hcFR5cGVJZCAtIEEgc2ltcGxlIGlkZW50aWZpZXIgZm9yIHRoZSBjdXN0b20gbWFwIHR5cGUuXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRoZSBgb3B0aW9uc2Agb2JqZWN0IHNob3VsZCBjb250YWluOlxuICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5nZXRUaWxlVXJsIC0gQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gVVJMIGZvciB0aWxlLWJhc2VkIGVuZHBvaW50cy4gSXQgcmVjZWl2ZXMgdHdvIGFyZ3VtZW50czpcbiAqICAgKiBgcG9pbnRzYCAoZ29vZ2xlLm1hcHMuUG9pbnQpOiBhIHBvaW50IHdpdGggYHhgIGFuZCBgeWAgKGlzIG5vdCBhIGNvb3JkaW5hdGUpLlxuICogICAqIGB6b29tYCAobnVtYmVyKTogYSB6b29tIGxldmVsLlxuICogQHBhcmFtIHtnb29nbGUubWFwcy5TaXplfSBvcHRpb25zLnRpbGVTaXplIC0gVGhlIHNpemUgb2YgdGhlIHRpbGUuXG4gKlxuICogQHJldHVybnMge2dvb2dsZS5tYXBzLkltYWdlTWFwVHlwZX1cbiAqL1xuR01hcHMucHJvdG90eXBlLmFkZE1hcFR5cGUgPSBmdW5jdGlvbiBhZGRNYXBUeXBlKG1hcFR5cGVJZCwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHsgZ2V0VGlsZVVybCwgdGlsZVNpemUgPSBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSgyNTYsIDI1NiksIH0gPSBvcHRpb25zO1xuXG4gIGlmICh0eXBlb2YgZ2V0VGlsZVVybCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIidnZXRUaWxlVXJsJyBmdW5jdGlvbiByZXF1aXJlZC5cIik7XG4gIH1cblxuICBjb25zdCBtYXBUeXBlID0gbmV3IGdvb2dsZS5tYXBzLkltYWdlTWFwVHlwZSh7IGdldFRpbGVVcmwsIHRpbGVTaXplLCB9KTtcblxuICB0aGlzLm1hcC5tYXBUeXBlcy5zZXQobWFwVHlwZUlkLCBtYXBUeXBlKTtcblxuICByZXR1cm4gbWFwVHlwZTtcbn07XG5cbi8qKlxuICogRHJhdyBhIGN1c3RvbSBbb3ZlcmxheSBtYXAgdHlwZV0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvbWFwdHlwZXMjT3ZlcmxheU1hcFR5cGVzKSBpbiB0aGUgTWFwLiBUaGlzIG1ldGhvZCBhbHNvIGZpcmVzIGFuIGBvdmVybGF5X21hcF90eXBlX2FkZGVkYCBldmVudC5cbiAqIEBmdW5jdGlvbiBhZGRPdmVybGF5TWFwVHlwZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtYXBUeXBlSWQgLSBBIHNpbXBsZSBpZGVudGlmaWVyIGZvciB0aGUgY3VzdG9tIG1hcCB0eXBlLlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgYG9wdGlvbnNgIG9iamVjdCBzaG91bGQgY29udGFpbjpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMuZ2V0VGlsZSAtIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgRE9NIE5vZGUuIEl0IHJlY2VpdmVzIHRocmVlIGFyZ3VtZW50czpcbiAqICAgKiBgcG9pbnRzYCAoZ29vZ2xlLm1hcHMuUG9pbnQpOiBhIHBvaW50IHdpdGggYHhgIGFuZCBgeWAgKGlzIG5vdCBhIGNvb3JkaW5hdGUpLlxuICogICAqIGB6b29tYCAobnVtYmVyKTogYSB6b29tIGxldmVsLlxuICogICAqIGBvd25lckRvY3VtZW50YCAoRG9jdW1lbnQpOiBUaGUgRE9NIGRvY3VtZW50IHRoYXQgd2lsbCBjcmVhdGUgdGhlIG5vZGUuXG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5pbmRleCAtIFRoZSBpbmRleCBmb3IgdGhlIG92ZXJsYXkgbWFwIHR5cGUuIFVzZWQgdG8gc2V0IGRpZmZlcmVudGUgeiBsZXZlbHMgb24gc3RhY2tlZCBvdmVybGF5IG1hcHMuXG4gKiBAcGFyYW0ge2dvb2dsZS5tYXBzLlNpemV9IG9wdGlvbnMudGlsZVNpemUgLSBUaGUgc2l6ZSBvZiB0aGUgdGlsZS5cbiAqXG4gKiBgb3B0aW9uc2AgYWxzbyBhY2NlcHRzIGFueSBvcHRpb24gZGVmaW5lZCBpbiB0aGUgW29mZmljaWFsIGRvY3VtZW50YXRpb25dKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNNYXBUeXBlKS5cbiAqL1xuR01hcHMucHJvdG90eXBlLmFkZE92ZXJsYXlNYXBUeXBlID0gZnVuY3Rpb24gYWRkT3ZlcmxheU1hcFR5cGUob3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHsgZ2V0VGlsZSwgaW5kZXggPSB0aGlzLm1hcC5vdmVybGF5TWFwVHlwZXMubGVuZ3RoLCAuLi5vdmVybGF5TWFwVHlwZU9wdGlvbnMgfSA9IG9wdGlvbnM7XG5cbiAgaWYgKHR5cGVvZiBnZXRUaWxlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiJ2dldFRpbGUnIGZ1bmN0aW9uIHJlcXVpcmVkLlwiKTtcbiAgfVxuXG4gIHRoaXMubWFwLm92ZXJsYXlNYXBUeXBlcy5pbnNlcnRBdChpbmRleCwgeyAuLi5vdmVybGF5TWFwVHlwZU9wdGlvbnMsIGdldFRpbGUsIH0pO1xuICBHTWFwcy5maXJlKCdvdmVybGF5X21hcF90eXBlX2FkZGVkJywgdGhpcy5tYXAub3ZlcmxheU1hcFR5cGVzW2luZGV4XSwgdGhpcyk7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhIG92ZXJsYXkgbWFwIHR5cGUgZnJvbSB0aGUgbWFwLiBUaGlzIG1ldGhvZCBhbHNvIGZpcmVzIGFuIGBvdmVybGF5X21hcF90eXBlX3JlbW92ZWRgIGV2ZW50LlxuICogQGZ1bmN0aW9uIHJlbW92ZU92ZXJsYXlNYXBUeXBlXG4gKlxuICogQHBhcmFtIHtnb29nbGUubWFwcy5Qb2x5bGluZX0gcG9seWxpbmUgLSBUaGUgcG9seWxpbmUgdG8gYmUgcmVtb3ZlZC5cbiAqL1xuR01hcHMucHJvdG90eXBlLnJlbW92ZU92ZXJsYXlNYXBUeXBlID0gZnVuY3Rpb24gcmVtb3ZlT3ZlcmxheU1hcFR5cGUoaW5kZXgpIHtcbiAgY29uc3Qgb3ZlcmxheU1hcFR5cGUgPSB0aGlzLm1hcC5vdmVybGF5TWFwVHlwZXNbaW5kZXhdO1xuXG4gIHRoaXMubWFwLm92ZXJsYXlNYXBUeXBlcy5yZW1vdmVBdChpbmRleCk7XG4gIEdNYXBzLmZpcmUoJ292ZXJsYXlfbWFwX3R5cGVfcmVtb3ZlZCcsIG92ZXJsYXlNYXBUeXBlLCB0aGlzKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXBzO1xuIiwiaW1wb3J0IEdNYXBzLCB7IHNldHVwRXZlbnRzIH0gZnJvbSAnLi9jb3JlJztcbmltcG9ydCAnLi9ldmVudHMnO1xuaW1wb3J0ICcuL2dlb2ZlbmNlcyc7XG5cbi8qKlxuICogRXh0ZW5kcyBHTWFwcyB0byB1c2UgbWFya2Vycy5cbiAqIEBtb2R1bGUgTWFya2Vyc1xuICovXG5cbmNvbnN0IElORk9fV0lORE9XX0VWRU5UUyA9IFsnY2xvc2VjbGljaycsICdjb250ZW50X2NoYW5nZWQnLCAnZG9tcmVhZHknLCAncG9zaXRpb25fY2hhbmdlZCcsICd6aW5kZXhfY2hhbmdlZCddO1xuY29uc3QgTUFSS0VSX0VWRU5UUyA9IFsnYW5pbWF0aW9uX2NoYW5nZWQnLCAnY2xpY2thYmxlX2NoYW5nZWQnLCAnY3Vyc29yX2NoYW5nZWQnLCAnZHJhZ2dhYmxlX2NoYW5nZWQnLCAnZmxhdF9jaGFuZ2VkJywgJ2ljb25fY2hhbmdlZCcsICdwb3NpdGlvbl9jaGFuZ2VkJywgJ3NoYWRvd19jaGFuZ2VkJywgJ3NoYXBlX2NoYW5nZWQnLCAndGl0bGVfY2hhbmdlZCcsICd2aXNpYmxlX2NoYW5nZWQnLCAnemluZGV4X2NoYW5nZWQnXTtcbmNvbnN0IE1BUktFUl9NT1VTRV9FVkVOVFMgPSBbJ2RibGNsaWNrJywgJ2RyYWcnLCAnZHJhZ2VuZCcsICdkcmFnc3RhcnQnLCAnbW91c2Vkb3duJywgJ21vdXNlb3V0JywgJ21vdXNlb3ZlcicsICdtb3VzZXVwJ107XG5cbkdNYXBzLnByb3RvdHlwZS5jcmVhdGVNYXJrZXIgPSBmdW5jdGlvbiBjcmVhdGVNYXJrZXIoYmFzZU9wdGlvbnMpIHtcbiAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gIGNvbnN0IHsgbGF0LCBsYXRpdHVkZSA9IGxhdCwgbG5nLCBsb25naXR1ZGUgPSBsbmcsIHBvc2l0aW9uLCBkZXRhaWxzLCBmZW5jZXMsIG91dHNpZGUsIGluZm9XaW5kb3csIC4uLm9wdGlvbnMgfSA9IGJhc2VPcHRpb25zO1xuXG4gIGlmIChsYXRpdHVkZSA9PT0gdW5kZWZpbmVkICYmIGxvbmdpdHVkZSA9PT0gdW5kZWZpbmVkICYmIHBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGxhdGl0dWRlIG9yIGxvbmdpdHVkZSBkZWZpbmVkLicpO1xuICB9XG5cbiAgY29uc3QgbWFya2VyT3B0aW9ucyA9IHtcbiAgICAuLi5vcHRpb25zLFxuICAgIHBvc2l0aW9uOiBwb3NpdGlvbiB8fCBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGxhdGl0dWRlLCBsb25naXR1ZGUpLFxuICAgIG1hcDogbnVsbCxcbiAgfTtcblxuICBjb25zdCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKG1hcmtlck9wdGlvbnMpO1xuXG4gIG1hcmtlci5mZW5jZXMgPSBmZW5jZXM7XG5cbiAgaWYgKGluZm9XaW5kb3cpIHtcbiAgICBtYXJrZXIuaW5mb1dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KGluZm9XaW5kb3cpO1xuXG4gICAgc2V0dXBFdmVudHMoeyBldmVudHM6IElORk9fV0lORE9XX0VWRU5UUywgb2JqZWN0OiBtYXJrZXIuaW5mb1dpbmRvdywgaW5zdGFuY2U6IHRoaXMsIGhhbmRsZXJzOiBpbmZvV2luZG93LCB9KTtcbiAgfVxuXG4gIHNldHVwRXZlbnRzKHsgZXZlbnRzOiBNQVJLRVJfRVZFTlRTLCBvYmplY3Q6IG1hcmtlciwgaW5zdGFuY2U6IHRoaXMsIGhhbmRsZXJzOiBvcHRpb25zLCB9KTtcblxuICBNQVJLRVJfTU9VU0VfRVZFTlRTLmZvckVhY2goKGV2ZW50TmFtZSkgPT4ge1xuICAgIGlmIChvcHRpb25zW2V2ZW50TmFtZV0pIHtcbiAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlciwgZXZlbnROYW1lLCAoZXZlbnQgPSB0aGlzKSA9PiB7XG4gICAgICAgIGlmICghZXZlbnQucGl4ZWwpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICBldmVudC5waXhlbCA9IHRoaXMubWFwLmdldFByb2plY3Rpb24oKS5mcm9tTGF0TG5nVG9Qb2ludChldmVudC5sYXRMbmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgb3B0aW9uc1tldmVudE5hbWVdLmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXJrZXIsICdjbGljaycsIGZ1bmN0aW9uIG9uTWFya2VyQ2xpY2soZXZlbnQpIHtcbiAgICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzO1xuXG4gICAgaWYgKG9wdGlvbnMuY2xpY2spIHtcbiAgICAgIG9wdGlvbnMuY2xpY2suY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfVxuXG4gICAgaWYgKG1hcmtlci5pbmZvV2luZG93KSB7XG4gICAgICBzZWxmLmhpZGVJbmZvV2luZG93cygpO1xuICAgICAgbWFya2VyLmluZm9XaW5kb3cub3BlbihzZWxmLm1hcCwgbWFya2VyKTtcbiAgICB9XG4gIH0pO1xuXG4gIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlciwgJ3JpZ2h0Y2xpY2snLCBmdW5jdGlvbiBvbk1hcmtlclJpZ2h0Q2xpY2soZXZlbnQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBldmVudC5tYXJrZXIgPSB0aGlzO1xuXG4gICAgaWYgKG9wdGlvbnMucmlnaHRjbGljaykge1xuICAgICAgb3B0aW9ucy5yaWdodGNsaWNrLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIH1cblxuICAgIGlmIChHTWFwcy5jb250ZXh0TWVudXNbc2VsZi5pZF0ubWFya2VyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNlbGYuYnVpbGRDb250ZXh0TWVudSgnbWFya2VyJywgZXZlbnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKG1hcmtlci5mZW5jZXMpIHtcbiAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXJrZXIsICdkcmFnZW5kJywgZnVuY3Rpb24gb25NYXJrZXJEcmFnRW5kKCkge1xuICAgICAgc2VsZi5jaGVja01hcmtlckdlb2ZlbmNlKHRoaXMsIG91dHNpZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG1hcmtlcjtcbn07XG5cbi8qKlxuICogRHJhdyBhIG1hcmtlciBpbiB0aGUgTWFwIGFuZCBhZGQgaXQgdG8gdGhlIG1hcmtlcnMgY29sbGVjdGlvbi4gVGhpcyBtZXRob2QgYWxzbyBmaXJlcyBhIGBtYXJrZXJfYWRkZWRgIGV2ZW50LlxuICogQGZ1bmN0aW9uIGFkZE1hcmtlclxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBvYmplY3Qgc2hvdWxkIGNvbnRhaW46XG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5sYXRpdHVkZSAtIExhdGl0dWRlIG9mIHRoZSBjZW50ZXIuIElmIGBsYXRpdHVkZWAgYW5kIGBsb25naXR1ZGVgIGFyZSBzZXQsIGBjZW50ZXJgIGlzIGlnbm9yZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5sb25naXR1ZGUgLSBMb25naXR1ZGUgb2YgdGhlIGNlbnRlci4gSWYgYGxhdGl0dWRlYCBhbmQgYGxvbmdpdHVkZWAgYXJlIHNldCwgYGNlbnRlcmAgaXMgaWdub3JlZC5cbiAqIEBwYXJhbSB7Z29vZ2xlLm1hcHMuTGF0TG5nfSBvcHRpb25zLmNlbnRlciAtIEEgYGdvb2dsZS5tYXBzLkxhdExuZ2AgY29vcmRpbmF0ZSBpbmRpY2F0ZSB0aGUgY2VudGVyLiBJZiBzZXQsIGBsYXRpdHVkZWAgYW5kIGBsb25naXR1ZGVgIGFyZSBpZ25vcmVkLlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMuZGV0YWlscyAtIEN1c3RvbSBvYmplY3Qgd2l0aCBleHRyYSBkYXRhLlxuICogQHBhcmFtIHthcnJheX0gb3B0aW9ucy5mZW5jZXMgLSBDb2xsZWN0aW9uIG9mIGBnb29nbGUubWFwcy5Qb2x5Z29uYCBvYmplY3RzIHRoYXQgZGVmaW5lcyBhIG1hcmtlcidzIGJvdW5kYXJpZXMgb3IgZ2VvZmVuY2VzLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5vdXRzaWRlIC0gQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgbWFya2VyIGlzIG91c3RpZGUgYW55IG9mIGl0cyBmZW5jZXMuXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucy5pbmZvV2luZG93IC0gT2JqZWN0IHdpdGggYWxsIG9wdGlvbnMgZGVmaW5lZCBpbiBbZ29vZ2xlLm1hcHMuSW5mb1dpbmRvd09wdGlvbnNdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNJbmZvV2luZG93T3B0aW9ucykuXG4gKlxuICogYG9wdGlvbnNgIGFsc28gYWNjZXB0cyBhbnkgb3B0aW9uIGRlZmluZWQgaW4gdGhlIFtvZmZpY2lhbCBkb2N1bWVudGF0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjTWFya2VyT3B0aW9ucykgYW5kIGFueSBldmVudCBkZWZpbmVkIGluIHRoZSBbXCJFdmVudHNcIiBzZWN0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjTWFya2VyKS5cbiAqXG4gKiBAcmV0dXJucyB7Z29vZ2xlLm1hcHMuTWFya2VyfVxuICovXG5HTWFwcy5wcm90b3R5cGUuYWRkTWFya2VyID0gZnVuY3Rpb24gYWRkTWFya2VyKG9wdGlvbnMpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuICBjb25zdCB7IGdtX2FjY2Vzc29yc18sIGxhdCwgbGF0aXR1ZGUgPSBsYXQsIGxuZywgbG9uZ2l0dWRlID0gbG5nLCBwb3NpdGlvbiwgfSA9IG9wdGlvbnM7XG5cbiAgbGV0IG1hcmtlcjtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG4gIGlmIChnbV9hY2Nlc3NvcnNfKSB7XG4gICAgLy8gTmF0aXZlIGdvb2dsZS5tYXBzLk1hcmtlciBvYmplY3RcbiAgICBtYXJrZXIgPSBvcHRpb25zO1xuICB9IGVsc2UgaWYgKChsYXRpdHVkZSAmJiBsb25naXR1ZGUpIHx8IHBvc2l0aW9uKSB7XG4gICAgbWFya2VyID0gdGhpcy5jcmVhdGVNYXJrZXIob3B0aW9ucyk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBsYXRpdHVkZSBvciBsb25naXR1ZGUgZGVmaW5lZC4nKTtcbiAgfVxuXG4gIG1hcmtlci5zZXRNYXAodGhpcy5tYXApO1xuXG4gIGlmICh0aGlzLm1hcmtlckNsdXN0ZXJlcikge1xuICAgIHRoaXMubWFya2VyQ2x1c3RlcmVyLmFkZE1hcmtlcihtYXJrZXIpO1xuICB9XG5cbiAgdGhpcy5tYXJrZXJzLnB1c2gobWFya2VyKTtcblxuICBHTWFwcy5maXJlKCdtYXJrZXJfYWRkZWQnLCBtYXJrZXIsIHRoaXMpO1xuXG4gIHJldHVybiBtYXJrZXI7XG59O1xuXG4vKipcbiAqIERyYXcgYSBjb2xsZWN0aW9uIG9mIG1hcmtlcnMgaW50byB0aGUgTWFwLiBUaGlzIG1ldGhvZCBmaXJlcyBhIGBtYXJrZXJfYWRkZWRgIGV2ZW50IGZvciBlYWNoIG1hcmtlciBhZGRlZC5cbiAqIEBmdW5jdGlvbiBhZGRNYXJrZXJzXG4gKlxuICogQHBhcmFtIHthcnJheX0gbWFya2VycyAtIEFuIGFycmF5IG9mIGBvcHRpb25zYCBvYmplY3RzLCB3aGljaCBhY2NlcHRzIHRoZSBzYW1lIG9wdGlvbnMgYXMgaW4ge0BsaW5rIEdNYXBzI2FkZE1hcmtlcn0uXG4gKlxuICogQHJldHVybnMge2FycmF5fVxuICovXG5HTWFwcy5wcm90b3R5cGUuYWRkTWFya2VycyA9IGZ1bmN0aW9uIGFkZE1hcmtlcnMobWFya2Vycykge1xuICBtYXJrZXJzLmZvckVhY2gobWFya2VyID0+IHRoaXMuYWRkTWFya2VyKG1hcmtlcikpO1xuXG4gIHJldHVybiB0aGlzLm1hcmtlcnM7XG59O1xuXG4vKipcbiAqIEhpZGUgYWxsIG1hcmtlcnMnIEluZm9XaW5kb3dzLlxuICogQGZ1bmN0aW9uIGhpZGVJbmZvV2luZG93c1xuICovXG5HTWFwcy5wcm90b3R5cGUuaGlkZUluZm9XaW5kb3dzID0gZnVuY3Rpb24gaGlkZUluZm9XaW5kb3dzKCkge1xuICB0aGlzLm1hcmtlcnMuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgaWYgKG1hcmtlci5pbmZvV2luZG93KSB7XG4gICAgICBtYXJrZXIuaW5mb1dpbmRvdy5jbG9zZSgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhIG1hcmtlciBmcm9tIHRoZSBtYXAgYW5kIGZyb20gdGhlIG1hcmtlcnMgY29sbGVjdGlvbi4gVGhpcyBtZXRob2QgYWxzbyBmaXJlcyBhIGBtYXJrZXJfcmVtb3ZlZGAgZXZlbnQuXG4gKiBAZnVuY3Rpb24gcmVtb3ZlTWFya2VyXG4gKlxuICogQHBhcmFtIHtnb29nbGUubWFwcy5Qb2x5Z29ufSBwb2x5Z29uIC0gVGhlIHBvbHlnb24gdG8gYmUgcmVtb3ZlZC5cbiAqL1xuR01hcHMucHJvdG90eXBlLnJlbW92ZU1hcmtlciA9IGZ1bmN0aW9uIHJlbW92ZU1hcmtlcihtYXJrZXIsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7IGZpcmVFdmVudCA9IHRydWUsIH0gPSBvcHRpb25zO1xuICBjb25zdCBtYXJrZXJJbmRleCA9IHRoaXMubWFya2Vycy5pbmRleE9mKG1hcmtlcik7XG5cbiAgaWYgKG1hcmtlckluZGV4ID49IDApIHtcbiAgICBtYXJrZXIuc2V0TWFwKG51bGwpO1xuICAgIHRoaXMubWFya2Vycy5zcGxpY2UobWFya2VySW5kZXgsIDEpO1xuXG4gICAgaWYgKHRoaXMubWFya2VyQ2x1c3RlcmVyKSB7XG4gICAgICB0aGlzLm1hcmtlckNsdXN0ZXJlci5yZW1vdmVNYXJrZXIobWFya2VyKTtcbiAgICB9XG5cbiAgICBpZiAoZmlyZUV2ZW50KSB7XG4gICAgICBHTWFwcy5maXJlKCdtYXJrZXJfcmVtb3ZlZCcsIG1hcmtlciwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1hcmtlcjtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGEgZ3JvdXAgb2YgbWFya2VycyAob3IgYWxsIG9mIHRoZW0pIGZyb20gdGhlIE1hcCBhbmQgZnJvbSB0aGUgbWFya2VycyBjb2xsZWN0aW9uLiBUaGlzIG1ldGhvZCBkb2VzIG5vdCBmaXJlIGEgYG1hcmtlcl9yZW1vdmVkYCBldmVudC5cbiAqIEBmdW5jdGlvbiByZW1vdmVNYXJrZXJzXG4gKlxuICogQHBhcmFtIHthcnJheX0gbWFya2VycyAtIFRoZSBtYXJrZXJzIHRvIGJlIHJlbW92ZWQuIElmIG5vdCBzZXQsIGl0IHJlbW92ZXMgYWxsIG1hcmtlcnMgaW4gdGhlIE1hcC5cbiAqL1xuR01hcHMucHJvdG90eXBlLnJlbW92ZU1hcmtlcnMgPSBmdW5jdGlvbiByZW1vdmVNYXJrZXJzKG1hcmtlcnMgPSB0aGlzLm1hcmtlcnMpIHtcbiAgbWFya2Vycy5mb3JFYWNoKG1hcmtlciA9PiB0aGlzLnJlbW92ZU1hcmtlcihtYXJrZXIsIHsgZmlyZUV2ZW50OiBmYWxzZSwgfSkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR01hcHM7XG4iLCJpbXBvcnQgR01hcHMgZnJvbSAnLi9jb3JlJztcbmltcG9ydCAnLi9ldmVudHMnO1xuXG4vKipcbiAqIEV4dGVuZHMgR01hcHMgdG8gdXNlIGN1c3RvbSBvdmVybGF5cy5cbiAqIEBtb2R1bGUgT3ZlcmxheXNcbiAqL1xuXG5jb25zdCBTVE9QX1BST1BBR0FUSU9OX0VWRU5UUyA9IFsnY29udGV4dG1lbnUnLCAnRE9NTW91c2VTY3JvbGwnLCAnZGJsY2xpY2snLCAnbW91c2Vkb3duJ107XG5cbi8qKlxuICogRHJhdyBhbiBvdmVybGF5IGluIHRoZSBNYXAgYW5kIGFkZCBpdCB0byB0aGUgb3ZlcmxheXMgY29sbGVjdGlvbi4gVGhpcyBtZXRob2QgYWxzbyBmaXJlcyBhIGBvdmVybGF5X2FkZGVkYCBldmVudC5cbiAqIEBmdW5jdGlvbiBkcmF3T3ZlcmxheVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBvYmplY3Qgc2hvdWxkIGNvbnRhaW46XG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuYXV0b1Nob3cgLSBTaG93IHRoZSBvdmVybGF5IGlubWVkaWF0bHkgYWZ0ZXIgYmVpbmcgY3JlYXRlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLmxhdGl0dWRlIC0gTGF0aXR1ZGUgb2YgdGhlIGNvb3JkaW5hdGUgd2hlcmUgdGhlIG92ZXJsYXkgaXMgcGxhY2VkLiBJZiBgbGF0aXR1ZGVgIGFuZCBgbG9uZ2l0dWRlYCBhcmUgc2V0LCBgcG9zaXRpb25gaXMgaWdub3JlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLmxvbmdpdHVkZSAtIExvbmdpdHVkZSBvZiB0aGUgY29vcmRpbmF0ZSB3aGVyZSB0aGUgb3ZlcmxheSBpcyBwbGFjZWQuIElmIGBsYXRpdHVkZWAgYW5kIGBsb25naXR1ZGVgIGFyZSBzZXQsIGBwb3NpdGlvbmBpcyBpZ25vcmVkLlxuICogQHBhcmFtIHtnb29nbGUubWFwcy5MYXRMbmd9IG9wdGlvbnMucG9zaXRpb24gLSBBIGBnb29nbGUubWFwcy5MYXRMbmdgIGNvb3JkaW5hdGUgd2hlcmUgdGhlIG92ZXJsYXkgaXMgcGxhY2VkLiBJZiBzZXQsIGBsYXRpdHVkZWAgYW5kIGBsb25naXR1ZGVgIGFyZSBpZ25vcmVkLlxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuY29udGVudCAtIEhUTUwgdGhhdCB3aWxsIGJlIGRyYXduIGluIHRoZSBvdmVybGF5LlxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubGF5ZXIgLSBJZCBvZiBhbnkgb2YgdGhlIGxheWVycyBkZWZpbmVkIGluIFtnb29nbGUubWFwcy5NYXBQYW5lc10oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI01hcFBhbmVzKTpcbiAqICAgKiBmbG9hdFBhbmVcbiAqICAgKiBmbG9hdFNoYWRvd1xuICogICAqIG1hcFBhbmVcbiAqICAgKiBvdmVybGF5SW1hZ2VcbiAqICAgKiBvdmVybGF5TGF5ZXJcbiAqICAgKiBvdmVybGF5TW91c2VUYXJnZXRcbiAqICAgKiBvdmVybGF5U2hhZG93XG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy52ZXJ0aWNhbEFsaWduIC0gVmVydGljYWwgYWxpZ24gb2YgdGhlIG92ZXJsYXkgKHdoZXJlIHRoZSBjZW50ZXIgaXMgdGhlIGNvb3JkaW5hdGUgYGxhdGl0dWRlYCwgYGxvbmdpdHVkZWApOlxuICogICAqIHRvcFxuICogICAqIG1pZGRsZVxuICogICAqIGJvdHRvbVxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuaG9yaXpvbnRhbEFsaWduIC0gSG9yaXpvbnRhbCBhbGlnbiBvZiB0aGUgb3ZlcmxheSAod2hlcmUgdGhlIGNlbnRlciBpcyB0aGUgY29vcmRpbmF0ZSBgbGF0aXR1ZGVgLCBgbG9uZ2l0dWRlYCk6XG4gKiAgICogbGVmdFxuICogICAqIGNlbnRlclxuICogICAqIHJpZ2h0XG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5ob3Jpem9udGFsT2Zmc2V0IC0gSG9yaXpvbnRhbCBvZmZzZXQgaW4gcGl4ZWxzIG9mIHRoZSBvdmVybGF5LlxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMudmVydGljYWxPZmZzZXQgLSBWZXJ0aWNhbCBvZmZzZXQgaW4gcGl4ZWxzIG9mIHRoZSBvdmVybGF5LlxuICpcbiAqIEByZXR1cm5zIHtnb29nbGUubWFwcy5PdmVybGF5Vmlld31cbiAqL1xuR01hcHMucHJvdG90eXBlLmRyYXdPdmVybGF5ID0gZnVuY3Rpb24gZHJhd092ZXJsYXkoYmFzZU9wdGlvbnMpIHtcbiAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gIGNvbnN0IG92ZXJsYXkgPSBuZXcgZ29vZ2xlLm1hcHMuT3ZlcmxheVZpZXcoKTtcbiAgY29uc3Qge1xuICAgIGF1dG9TaG93ID0gdHJ1ZSxcbiAgICBsYXQsXG4gICAgbGF0aXR1ZGUgPSBsYXQsXG4gICAgbG5nLFxuICAgIGxvbmdpdHVkZSA9IGxuZyxcbiAgICBwb3NpdGlvbiA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobGF0aXR1ZGUsIGxvbmdpdHVkZSksXG4gICAgbGF5ZXIgPSAnb3ZlcmxheUxheWVyJyxcbiAgICBob3Jpem9udGFsT2Zmc2V0ID0gMCxcbiAgICB2ZXJ0aWNhbE9mZnNldCA9IDAsXG4gICAgdmVydGljYWxBbGlnbixcbiAgICBob3Jpem9udGFsQWxpZ24sXG4gICAgLi4ub3B0aW9uc1xuICB9ID0gYmFzZU9wdGlvbnM7XG5cbiAgb3ZlcmxheS5zZXRNYXAodGhpcy5tYXApO1xuXG4gIG92ZXJsYXkub25BZGQgPSBmdW5jdGlvbiBvbkFkZCgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBlbGVtZW50LnN0eWxlLmJvcmRlclN0eWxlID0gJ25vbmUnO1xuICAgIGVsZW1lbnQuc3R5bGUuYm9yZGVyV2lkdGggPSAnMHB4JztcbiAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBlbGVtZW50LnN0eWxlLnpJbmRleCA9IDEwMDtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IG9wdGlvbnMuY29udGVudDtcblxuICAgIG92ZXJsYXkuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICBjb25zdCBwYW5lcyA9IHRoaXMuZ2V0UGFuZXMoKTtcbiAgICBjb25zdCBvdmVybGF5TGF5ZXIgPSBwYW5lc1tsYXllcl07XG5cbiAgICBvdmVybGF5TGF5ZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbiAgICBTVE9QX1BST1BBR0FUSU9OX0VWRU5UUy5mb3JFYWNoKGV2ZW50TmFtZSA9PlxuICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIoZWxlbWVudCwgZXZlbnROYW1lLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGdsb2JhbC5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignbXNpZScpICE9PSAtMSAmJiBkb2N1bWVudC5hbGwpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICBldmVudC5jYW5jZWxCdWJibGUgPSB0cnVlO1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIGlmIChvcHRpb25zLmNsaWNrKSB7XG4gICAgICBwYW5lcy5vdmVybGF5TW91c2VUYXJnZXQuYXBwZW5kQ2hpbGQob3ZlcmxheS5lbGVtZW50KTtcbiAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyKG92ZXJsYXkuZWxlbWVudCwgJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBvcHRpb25zLmNsaWNrLmNhbGwoc2VsZiwgb3ZlcmxheSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBnb29nbGUubWFwcy5ldmVudC50cmlnZ2VyKHRoaXMsICdyZWFkeScpO1xuICB9O1xuXG4gIG92ZXJsYXkuZHJhdyA9IGZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgY29uc3QgcHJvamVjdGlvbiA9IHRoaXMuZ2V0UHJvamVjdGlvbigpO1xuICAgIGNvbnN0IHBpeGVsID0gcHJvamVjdGlvbi5mcm9tTGF0TG5nVG9EaXZQaXhlbChwb3NpdGlvbik7XG5cbiAgICBjb25zdCB7IGVsZW1lbnQsIH0gPSBvdmVybGF5O1xuICAgIGNvbnN0IGNvbnRlbnQgPSBlbGVtZW50LmNoaWxkcmVuWzBdO1xuICAgIGNvbnN0IGNvbnRlbnRIZWlnaHQgPSBjb250ZW50LmNsaWVudEhlaWdodDtcbiAgICBjb25zdCBjb250ZW50V2lkdGggPSBjb250ZW50LmNsaWVudFdpZHRoO1xuXG4gICAgc3dpdGNoICh2ZXJ0aWNhbEFsaWduKSB7XG4gICAgICBjYXNlICd0b3AnOlxuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IGAke3BpeGVsLnkgLSBjb250ZW50SGVpZ2h0ICsgdmVydGljYWxPZmZzZXR9cHhgO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICBjYXNlICdtaWRkbGUnOlxuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IGAke3BpeGVsLnkgLSAoY29udGVudEhlaWdodCAvIDIpICsgdmVydGljYWxPZmZzZXR9cHhgO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gYCR7cGl4ZWwueSArIHZlcnRpY2FsT2Zmc2V0fXB4YDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgc3dpdGNoIChob3Jpem9udGFsQWxpZ24pIHtcbiAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSBgJHtwaXhlbC54IC0gY29udGVudFdpZHRoICsgaG9yaXpvbnRhbE9mZnNldH1weGA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IGAke3BpeGVsLnggLSAoY29udGVudFdpZHRoIC8gMikgKyBob3Jpem9udGFsT2Zmc2V0fXB4YDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IGAke3BpeGVsLnggKyBob3Jpem9udGFsT2Zmc2V0fXB4YDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gYXV0b1Nob3cgPyAnYmxvY2snIDogJ25vbmUnO1xuXG4gICAgaWYgKCFhdXRvU2hvdykge1xuICAgICAgb3B0aW9ucy5zaG93LmNhbGwodGhpcywgZWxlbWVudCk7XG4gICAgfVxuICB9O1xuXG4gIG92ZXJsYXkub25SZW1vdmUgPSBmdW5jdGlvbiBvblJlbW92ZSgpIHtcbiAgICBjb25zdCB7IGVsZW1lbnQsIH0gPSBvdmVybGF5O1xuXG4gICAgaWYgKG9wdGlvbnMucmVtb3ZlKSB7XG4gICAgICBvcHRpb25zLnJlbW92ZS5jYWxsKHRoaXMsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICBvdmVybGF5LmVsZW1lbnQgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLm92ZXJsYXlzLnB1c2gob3ZlcmxheSk7XG5cbiAgR01hcHMuZmlyZSgnb3ZlcmxheV9hZGRlZCcsIG92ZXJsYXksIHRoaXMpO1xuXG4gIHJldHVybiBvdmVybGF5O1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gb3ZlcmxheSBmcm9tIHRoZSBtYXAgYW5kIGZyb20gdGhlIG92ZXJsYXlzIGNvbGxlY3Rpb24uIFRoaXMgbWV0aG9kIGFsc28gZmlyZXMgYSBgb3ZlcmxheV9yZW1vdmVkYCBldmVudC5cbiAqIEBmdW5jdGlvbiByZW1vdmVPdmVybGF5XG4gKlxuICogQHBhcmFtIHtnb29nbGUubWFwcy5PdmVybGF5Vmlld30gb3ZlcmxheSAtIFRoZSBvdmVybGF5IHRvIGJlIHJlbW92ZWQuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5yZW1vdmVPdmVybGF5ID0gZnVuY3Rpb24gcmVtb3ZlT3ZlcmxheShvdmVybGF5KSB7XG4gIGNvbnN0IG92ZXJsYXlJbmRleCA9IHRoaXMub3ZlcmxheXMuaW5kZXhPZihvdmVybGF5KTtcblxuICBpZiAob3ZlcmxheUluZGV4ID49IDApIHtcbiAgICBvdmVybGF5LnNldE1hcChudWxsKTtcbiAgICB0aGlzLm92ZXJsYXlzLnNwbGljZShvdmVybGF5SW5kZXgsIDEpO1xuXG4gICAgR01hcHMuZmlyZSgnb3ZlcmxheV9yZW1vdmVkJywgb3ZlcmxheSwgdGhpcyk7XG4gIH1cbn07XG5cbi8qKlxuICogUmVtb3ZlIGFsbCB0aGUgb3ZlcmxheXMgZnJvbSB0aGUgbWFwIGFuZCBjbGVhciB0aGUgb3ZlcmxheXMgY29sbGVjdGlvbi4gVGhpcyBtZXRob2QgZG9lcyBub3QgZmlyZSBhIGBvdmVybGF5X3JlbW92ZWRgIGV2ZW50LlxuICogQGZ1bmN0aW9uIHJlbW92ZU92ZXJsYXlzXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5yZW1vdmVPdmVybGF5cyA9IGZ1bmN0aW9uIHJlbW92ZU92ZXJsYXlzKCkge1xuICB0aGlzLm92ZXJsYXlzLmZvckVhY2gob3ZlcmxheSA9PiBvdmVybGF5LnNldE1hcChudWxsKSk7XG5cbiAgdGhpcy5vdmVybGF5cyA9IFtdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR01hcHM7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaWYgKHR5cGVvZiB3aW5kb3cuZ29vZ2xlID09PSAnb2JqZWN0JyAmJiB3aW5kb3cuZ29vZ2xlLm1hcHMpIHtcbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBQb2x5Z29uIGNvbnRhaW5zTGF0TG5nXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90cGFya2luL0dvb2dsZS1NYXBzLVBvaW50LWluLVBvbHlnb25cbiAgLy8gUG95Z29uIGdldEJvdW5kcyBleHRlbnNpb24gLSBnb29nbGUtbWFwcy1leHRlbnNpb25zXG4gIC8vIGh0dHA6Ly9jb2RlLmdvb2dsZS5jb20vcC9nb29nbGUtbWFwcy1leHRlbnNpb25zL3NvdXJjZS9icm93c2UvZ29vZ2xlLm1hcHMuUG9seWdvbi5nZXRCb3VuZHMuanNcbiAgaWYgKCFnb29nbGUubWFwcy5Qb2x5Z29uLnByb3RvdHlwZS5nZXRCb3VuZHMpIHtcbiAgICBnb29nbGUubWFwcy5Qb2x5Z29uLnByb3RvdHlwZS5nZXRCb3VuZHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBib3VuZHMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCk7XG4gICAgICB2YXIgcGF0aHMgPSB0aGlzLmdldFBhdGhzKCk7XG4gICAgICB2YXIgcGF0aDtcblxuICAgICAgZm9yICh2YXIgcCA9IDA7IHAgPCBwYXRocy5nZXRMZW5ndGgoKTsgcCsrKSB7XG4gICAgICAgIHBhdGggPSBwYXRocy5nZXRBdChwKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgICBib3VuZHMuZXh0ZW5kKHBhdGguZ2V0QXQoaSkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBib3VuZHM7XG4gICAgfTtcbiAgfVxuXG4gIGlmICghZ29vZ2xlLm1hcHMuUG9seWdvbi5wcm90b3R5cGUuY29udGFpbnNMYXRMbmcpIHtcbiAgICAvLyBQb2x5Z29uIGNvbnRhaW5zTGF0TG5nIC0gbWV0aG9kIHRvIGRldGVybWluZSBpZiBhIGxhdExuZyBpcyB3aXRoaW4gYSBwb2x5Z29uXG4gICAgZ29vZ2xlLm1hcHMuUG9seWdvbi5wcm90b3R5cGUuY29udGFpbnNMYXRMbmcgPSBmdW5jdGlvbihsYXRMbmcpIHtcbiAgICAgIC8vIEV4Y2x1ZGUgcG9pbnRzIG91dHNpZGUgb2YgYm91bmRzIGFzIHRoZXJlIGlzIG5vIHdheSB0aGV5IGFyZSBpbiB0aGUgcG9seVxuICAgICAgdmFyIGJvdW5kcyA9IHRoaXMuZ2V0Qm91bmRzKCk7XG5cbiAgICAgIGlmIChib3VuZHMgIT09IG51bGwgJiYgIWJvdW5kcy5jb250YWlucyhsYXRMbmcpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gUmF5Y2FzdCBwb2ludCBpbiBwb2x5Z29uIG1ldGhvZFxuICAgICAgdmFyIGluUG9seSA9IGZhbHNlO1xuXG4gICAgICB2YXIgbnVtUGF0aHMgPSB0aGlzLmdldFBhdGhzKCkuZ2V0TGVuZ3RoKCk7XG4gICAgICBmb3IgKHZhciBwID0gMDsgcCA8IG51bVBhdGhzOyBwKyspIHtcbiAgICAgICAgdmFyIHBhdGggPSB0aGlzLmdldFBhdGhzKCkuZ2V0QXQocCk7XG4gICAgICAgIHZhciBudW1Qb2ludHMgPSBwYXRoLmdldExlbmd0aCgpO1xuICAgICAgICB2YXIgaiA9IG51bVBvaW50cyAtIDE7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1Qb2ludHM7IGkrKykge1xuICAgICAgICAgIHZhciB2ZXJ0ZXgxID0gcGF0aC5nZXRBdChpKTtcbiAgICAgICAgICB2YXIgdmVydGV4MiA9IHBhdGguZ2V0QXQoaik7XG5cbiAgICAgICAgICBpZiAodmVydGV4MS5sbmcoKSA8IGxhdExuZy5sbmcoKSAmJiB2ZXJ0ZXgyLmxuZygpID49IGxhdExuZy5sbmcoKSB8fCB2ZXJ0ZXgyLmxuZygpIDwgbGF0TG5nLmxuZygpICYmIHZlcnRleDEubG5nKCkgPj0gbGF0TG5nLmxuZygpKSB7XG4gICAgICAgICAgICBpZiAodmVydGV4MS5sYXQoKSArIChsYXRMbmcubG5nKCkgLSB2ZXJ0ZXgxLmxuZygpKSAvICh2ZXJ0ZXgyLmxuZygpIC0gdmVydGV4MS5sbmcoKSkgKiAodmVydGV4Mi5sYXQoKSAtIHZlcnRleDEubGF0KCkpIDwgbGF0TG5nLmxhdCgpKSB7XG4gICAgICAgICAgICAgIGluUG9seSA9ICFpblBvbHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaiA9IGk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluUG9seTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKCFnb29nbGUubWFwcy5DaXJjbGUucHJvdG90eXBlLmNvbnRhaW5zTGF0TG5nKSB7XG4gICAgZ29vZ2xlLm1hcHMuQ2lyY2xlLnByb3RvdHlwZS5jb250YWluc0xhdExuZyA9IGZ1bmN0aW9uKGxhdExuZykge1xuICAgICAgaWYgKGdvb2dsZS5tYXBzLmdlb21ldHJ5KSB7XG4gICAgICAgIHJldHVybiBnb29nbGUubWFwcy5nZW9tZXRyeS5zcGhlcmljYWwuY29tcHV0ZURpc3RhbmNlQmV0d2Vlbih0aGlzLmdldENlbnRlcigpLCBsYXRMbmcpIDw9IHRoaXMuZ2V0UmFkaXVzKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGdvb2dsZS5tYXBzLlJlY3RhbmdsZS5wcm90b3R5cGUuY29udGFpbnNMYXRMbmcgPSBmdW5jdGlvbihsYXRMbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb3VuZHMoKS5jb250YWlucyhsYXRMbmcpO1xuICB9O1xuXG4gIGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcy5wcm90b3R5cGUuY29udGFpbnNMYXRMbmcgPSBmdW5jdGlvbihsYXRMbmcpIHtcbiAgICByZXR1cm4gdGhpcy5jb250YWlucyhsYXRMbmcpO1xuICB9O1xuXG4gIGdvb2dsZS5tYXBzLk1hcmtlci5wcm90b3R5cGUuc2V0RmVuY2VzID0gZnVuY3Rpb24oZmVuY2VzKSB7XG4gICAgdGhpcy5mZW5jZXMgPSBmZW5jZXM7XG4gIH07XG5cbiAgZ29vZ2xlLm1hcHMuTWFya2VyLnByb3RvdHlwZS5hZGRGZW5jZSA9IGZ1bmN0aW9uKGZlbmNlKSB7XG4gICAgdGhpcy5mZW5jZXMucHVzaChmZW5jZSk7XG4gIH07XG5cbiAgZ29vZ2xlLm1hcHMuTWFya2VyLnByb3RvdHlwZS5nZXRJZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzWydfX2dtX2lkJ107XG4gIH07XG59XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEFycmF5IGluZGV4T2Zcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvaW5kZXhPZlxuaWYgKCFBcnJheS5wcm90b3R5cGUuaW5kZXhPZikge1xuICBBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIChzZWFyY2hFbGVtZW50IC8qLCBmcm9tSW5kZXggKi8gKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgIGlmICh0aGlzID09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICB9XG4gICAgICB2YXIgdCA9IE9iamVjdCh0aGlzKTtcbiAgICAgIHZhciBsZW4gPSB0Lmxlbmd0aCA+Pj4gMDtcbiAgICAgIGlmIChsZW4gPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICB2YXIgbiA9IDA7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBuID0gTnVtYmVyKGFyZ3VtZW50c1sxXSk7XG4gICAgICAgICAgaWYgKG4gIT0gbikgeyAvLyBzaG9ydGN1dCBmb3IgdmVyaWZ5aW5nIGlmIGl0J3MgTmFOXG4gICAgICAgICAgICAgIG4gPSAwO1xuICAgICAgICAgIH0gZWxzZSBpZiAobiAhPSAwICYmIG4gIT0gSW5maW5pdHkgJiYgbiAhPSAtSW5maW5pdHkpIHtcbiAgICAgICAgICAgICAgbiA9IChuID4gMCB8fCAtMSkgKiBNYXRoLmZsb29yKE1hdGguYWJzKG4pKTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobiA+PSBsZW4pIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICB2YXIgayA9IG4gPj0gMCA/IG4gOiBNYXRoLm1heChsZW4gLSBNYXRoLmFicyhuKSwgMCk7XG4gICAgICBmb3IgKDsgayA8IGxlbjsgaysrKSB7XG4gICAgICAgICAgaWYgKGsgaW4gdCAmJiB0W2tdID09PSBzZWFyY2hFbGVtZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBrO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAtMTtcbiAgfVxufSIsImltcG9ydCBHTWFwcywgeyBsYXRMbmdGcm9tQXJndW1lbnRzLCBmbGF0dGVuQXJyYXksIGFycmF5VG9MYXRMbmcgfSBmcm9tICcuL2NvcmUnO1xuXG4vKipcbiAqIEV4dGVuZHMgR01hcHMgdG8gdXNlIHJvdXRlcy5cbiAqIEBtb2R1bGUgUm91dGVzXG4gKi9cblxuLyoqXG4gKiBHZXQgcm91dGVzIGJldHdlZW4gdHdvIGNvb3JkaW5hdGVzLlxuICogQGZ1bmN0aW9uIGdldFJvdXRlc1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBvYmplY3Qgc2hvdWxkIGNvbnRhaW46XG4gKiBAcGFyYW0ge3N0cmluZ3xnb29nbGUubWFwcy5MYXRMbmd8Z29vZ2xlLm1hcHMuUGxhY2V8Z29vZ2xlLm1hcHMuTGF0TG5nTGl0ZXJhbH0gb3B0aW9ucy5vcmlnaW4gLSBMb2NhdGlvbiBvZiBvcmlnaW4uXG4gKiBAcGFyYW0ge3N0cmluZ3xnb29nbGUubWFwcy5MYXRMbmd8Z29vZ2xlLm1hcHMuUGxhY2V8Z29vZ2xlLm1hcHMuTGF0TG5nTGl0ZXJhbH0gb3B0aW9ucy5kZXN0aW5hdGlvbiAtIExvY2F0aW9uIG9mIGRlc3RpbmF0aW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudHJhdmVsTW9kZSAtIENhbiBiZSBgYmljeWNsaW5nYCwgYGRyaXZpbmdgLCBgdHJhbnNpdGAgb3IgYHdhbGtpbmdgLlxuICogQHBhcmFtIHthcnJheX0gb3B0aW9ucy53YXlwb2ludHMgLSBBcnJheSBvZiBbZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1dheXBvaW50XShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjRGlyZWN0aW9uc1dheXBvaW50KSBvYmplY3RzLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5jYWxsYmFjayAtIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBhZnRlciB0aGUgcmVzdWx0cyBhcmUgcmV0dXJuZWQuXG4gKlxuICogYG9wdGlvbnNgIGFsc28gYWNjZXB0cyBhbnkgb3B0aW9uIGRlZmluZWQgaW4gdGhlIFtvZmZpY2lhbCBkb2N1bWVudGF0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjRGlyZWN0aW9uc1JlcXVlc3QpLlxuICovXG5HTWFwcy5wcm90b3R5cGUuZ2V0Um91dGVzID0gZnVuY3Rpb24gZ2V0Um91dGVzKGJhc2VPcHRpb25zKSB7XG4gIGNvbnN0IHsgb3JpZ2luLCBkZXN0aW5hdGlvbiwgdHJhdmVsTW9kZSA9ICd3YWxraW5nJywgdW5pdFN5c3RlbSA9ICdtZXRyaWMnLCBhdm9pZEhpZ2h3YXlzID0gZmFsc2UsIGF2b2lkVG9sbHMgPSBmYWxzZSwgb3B0aW1pemVXYXlwb2ludHMgPSBmYWxzZSwgd2F5cG9pbnRzID0gW10sIGNhbGxiYWNrLCBlcnJvciwgLi4ub3B0aW9ucyB9ID0gYmFzZU9wdGlvbnM7XG5cbiAgY29uc3QgdHJhdmVsTW9kZUlkID0gZ29vZ2xlLm1hcHMuVHJhdmVsTW9kZVt0cmF2ZWxNb2RlLnRvVXBwZXJDYXNlKCldO1xuICBjb25zdCB1bml0U3lzdGVtSWQgPSBnb29nbGUubWFwcy5UcmF2ZWxNb2RlW3VuaXRTeXN0ZW0udG9VcHBlckNhc2UoKV07XG5cbiAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgLi4ub3B0aW9ucyxcbiAgICB0cmF2ZWxNb2RlOiB0cmF2ZWxNb2RlSWQsXG4gICAgdW5pdFN5c3RlbTogdW5pdFN5c3RlbUlkLFxuICAgIGF2b2lkSGlnaHdheXMsXG4gICAgYXZvaWRUb2xscyxcbiAgICBvcHRpbWl6ZVdheXBvaW50cyxcbiAgICB3YXlwb2ludHMsXG4gICAgb3JpZ2luOiBsYXRMbmdGcm9tQXJndW1lbnRzKG9yaWdpbiksXG4gICAgZGVzdGluYXRpb246IGxhdExuZ0Zyb21Bcmd1bWVudHMoZGVzdGluYXRpb24pLFxuICB9O1xuXG4gIGNvbnN0IHNlcnZpY2UgPSBuZXcgZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1NlcnZpY2UoKTtcblxuICBzZXJ2aWNlLnJvdXRlKHJlcXVlc3RPcHRpb25zLCAocmVzdWx0LCBzdGF0dXMpID0+IHtcbiAgICBpZiAoc3RhdHVzID09PSBnb29nbGUubWFwcy5EaXJlY3Rpb25zU3RhdHVzLk9LKSB7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soWy4uLnJlc3VsdC5yb3V0ZXNdLCByZXN1bHQsIHN0YXR1cyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlcnJvcikge1xuICAgICAgZXJyb3IocmVzdWx0LCBzdGF0dXMpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbGwgcm91dGVzIHN0b3JlZCBpbiByb3V0ZXMgY29sbGVjdGlvbi5cbiAqIEBmdW5jdGlvbiByZW1vdmVSb3V0ZXNcbiAqL1xuR01hcHMucHJvdG90eXBlLnJlbW92ZVJvdXRlcyA9IGZ1bmN0aW9uIHJlbW92ZVJvdXRlcygpIHtcbiAgdGhpcy5yb3V0ZXMgPSBbXTtcbn07XG5cbi8qKlxuICogR2V0IGVsZXZhdGlvbiBpbmZvcm1hdGlvbiBmb3IgbG9jYXRpb25zIG9yIHJvdXRlcy5cbiAqIEBmdW5jdGlvbiBnZXRFbGV2YXRpb25zXG4gKlxuICogQHBhcmFtIHthcnJheX0gbG9jYXRpb25zIC0gQmktZGltZW5zaW9uYWwgYXJyYXkgb2YgbGF0aXR1ZGVzIGFuZCBsb25naXR1ZGVzLlxuICogQHBhcmFtIHtib29sZWFufSBwYXRoIC0gSWYgaXMgdHJ1ZSwgbWFrZXMgYSByZXF1ZXN0IGFsb25nIGEgcGF0aC4gSWYgaXMgZmFsc2UsIG9ubHkgZ2V0IGVsZXZhdGlvbiBpbmZvcm1hdGlvbiBvbiBkaXNjcmV0ZSBsb2NhdGlvbnMuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIE5hdGl2ZSBjYWxsYmFjayBmdW5jdGlvbiBkZWZpbmVkIGluIFtnb29nbGUubWFwcy5FbGV2YXRpb25TZXJ2aWNlICgnTWV0aG9kcycgc2VjdGlvbildKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNFbGV2YXRpb25TZXJ2aWNlKSAoYGdldEVsZXZhdGlvbkFsb25nUGF0aGAgaWYgYHBhdGhgIGlzIHRydWUsIGBnZXRFbGV2YXRpb25Gb3JMb2NhdGlvbnNgIGlmIGBwYXRoYCBpcyBmYWxzZSkuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5nZXRFbGV2YXRpb25zID0gZnVuY3Rpb24gZ2V0RWxldmF0aW9ucyhiYXNlT3B0aW9ucykge1xuICBjb25zdCB7IHBhdGggPSBmYWxzZSwgc2FtcGxlcyA9IDI1NiwgY2FsbGJhY2ssIC4uLm9wdGlvbnMgfSA9IGJhc2VPcHRpb25zO1xuXG4gIGxldCBsb2NhdGlvbnMgPSBvcHRpb25zLmxvY2F0aW9ucyB8fCBbXTtcblxuICBpZiAobG9jYXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICBpZiAobG9jYXRpb25zWzBdLmxlbmd0aCA+IDApIHtcbiAgICAgIGxvY2F0aW9ucyA9IGZsYXR0ZW5BcnJheShbbG9jYXRpb25zXS5tYXAobG9jYXRpb24gPT4gYXJyYXlUb0xhdExuZyhsb2NhdGlvbiwgZmFsc2UpKSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5FbGV2YXRpb25TZXJ2aWNlKCk7XG5cbiAgaWYgKCFwYXRoKSB7XG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgbG9jYXRpb25zLFxuICAgICAgcGF0aCxcbiAgICAgIHNhbXBsZXMsXG4gICAgfTtcblxuICAgIHNlcnZpY2UuZ2V0RWxldmF0aW9uRm9yTG9jYXRpb25zKHJlcXVlc3RPcHRpb25zLCAocmVzdWx0LCBzdGF0dXMpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2FsbGJhY2socmVzdWx0LCBzdGF0dXMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgcGF0aDogbG9jYXRpb25zLFxuICAgICAgc2FtcGxlcyxcbiAgICB9O1xuXG4gICAgc2VydmljZS5nZXRFbGV2YXRpb25BbG9uZ1BhdGgocmVxdWVzdE9wdGlvbnMsIChyZXN1bHQsIHN0YXR1cykgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYWxsYmFjayhyZXN1bHQsIHN0YXR1cyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayBHTWFwcyNyZW1vdmVQb2x5bGluZXN9LlxuICogQGZ1bmN0aW9uIGNsZWFuUm91dGVcbiAqL1xuR01hcHMucHJvdG90eXBlLmNsZWFuUm91dGUgPSBHTWFwcy5wcm90b3R5cGUucmVtb3ZlUG9seWxpbmVzO1xuXG5HTWFwcy5wcm90b3R5cGUucmVuZGVyUm91dGUgPSBmdW5jdGlvbiByZW5kZXJSb3V0ZShvcHRpb25zLCBiYXNlUmVuZGVyT3B0aW9ucykge1xuICBjb25zdCBwYW5lbCA9ICgodHlwZW9mIGJhc2VSZW5kZXJPcHRpb25zLnBhbmVsID09PSAnc3RyaW5nJykgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChiYXNlUmVuZGVyT3B0aW9ucy5wYW5lbC5yZXBsYWNlKCcjJywgJycpKSA6IGJhc2VSZW5kZXJPcHRpb25zLnBhbmVsKTtcblxuICBjb25zdCByZW5kZXJPcHRpb25zID0ge1xuICAgIC4uLmJhc2VSZW5kZXJPcHRpb25zLFxuICAgIHBhbmVsLFxuICAgIG1hcDogdGhpcy5tYXAsXG4gIH07XG5cbiAgY29uc3QgZGlzcGxheSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zUmVuZGVyZXIocmVuZGVyT3B0aW9ucyk7XG5cbiAgdGhpcy5nZXRSb3V0ZXMoe1xuICAgIG9yaWdpbjogb3B0aW9ucy5vcmlnaW4sXG4gICAgZGVzdGluYXRpb246IG9wdGlvbnMuZGVzdGluYXRpb24sXG4gICAgdHJhdmVsTW9kZTogb3B0aW9ucy50cmF2ZWxNb2RlLFxuICAgIHdheXBvaW50czogb3B0aW9ucy53YXlwb2ludHMsXG4gICAgdW5pdFN5c3RlbTogb3B0aW9ucy51bml0U3lzdGVtLFxuICAgIGVycm9yOiBvcHRpb25zLmVycm9yLFxuICAgIGF2b2lkSGlnaHdheXM6IG9wdGlvbnMuYXZvaWRIaWdod2F5cyxcbiAgICBhdm9pZFRvbGxzOiBvcHRpb25zLmF2b2lkVG9sbHMsXG4gICAgb3B0aW1pemVXYXlwb2ludHM6IG9wdGlvbnMub3B0aW1pemVXYXlwb2ludHMsXG4gICAgY2FsbGJhY2soXywgcmVzcG9uc2UsIHN0YXR1cykge1xuICAgICAgaWYgKHN0YXR1cyA9PT0gZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1N0YXR1cy5PSykge1xuICAgICAgICBkaXNwbGF5LnNldERpcmVjdGlvbnMocmVzcG9uc2UpO1xuICAgICAgfVxuICAgIH0sXG4gIH0pO1xufTtcblxuLyoqXG4gKiBEcmF3IGEgcm91dGUgdXNpbmcgcG9seWxpbmVzLiBJdCB1c2VzIHRoZSBsYXN0IHJvdXRlIGZvdW5kIGJ5IHtAbGluayBHTWFwcyNnZXRSb3V0ZXN9LlxuICogQGZ1bmN0aW9uIGRyYXdSb3V0ZVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gQWNjZXB0cyB0aGUgc2FtZSBvcHRpb25zIGFzIHtAbGluayBHTWFwcyNnZXRSb3V0ZXN9LlxuICogQHBhcmFtIHtzdHJpbmd8Z29vZ2xlLm1hcHMuTGF0TG5nfGdvb2dsZS5tYXBzLlBsYWNlfGdvb2dsZS5tYXBzLkxhdExuZ0xpdGVyYWx9IG9wdGlvbnMub3JpZ2luIC0gTG9jYXRpb24gb2Ygb3JpZ2luLlxuICogQHBhcmFtIHtzdHJpbmd8Z29vZ2xlLm1hcHMuTGF0TG5nfGdvb2dsZS5tYXBzLlBsYWNlfGdvb2dsZS5tYXBzLkxhdExuZ0xpdGVyYWx9IG9wdGlvbnMuZGVzdGluYXRpb24gLSBMb2NhdGlvbiBvZiBkZXN0aW5hdGlvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnN0cm9rZUNvbG9yIC0gQ29sb3Igb2YgdGhlIHBvbHlsaW5lLiBDYW4gYmUgaGV4YWRlY2ltYWwgb3IgQ1NTIG5hbWUuXG4gKiBAcGFyYW0ge2Zsb2F0fSBvcHRpb25zLnN0cm9rZU9wYWNpdHkgLSBPcGFjaXR5IG9mIHRoZSBwb2x5bGluZSBmcm9tIDAuMCB0byAxLjBcbiAqIEBwYXJhbSB7aW50ZWdlcn0gb3B0aW9ucy5zdHJva2VXZWlnaHQgLSBQb2x5bGluZSB3aWR0aCBpbiBwaXhlbHMuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5kcmF3Um91dGUgPSBmdW5jdGlvbiBkcmF3Um91dGUob3B0aW9ucykge1xuICBjb25zdCBzZWxmID0gdGhpcztcblxuICB0aGlzLmdldFJvdXRlcyh7XG4gICAgb3JpZ2luOiBvcHRpb25zLm9yaWdpbixcbiAgICBkZXN0aW5hdGlvbjogb3B0aW9ucy5kZXN0aW5hdGlvbixcbiAgICB0cmF2ZWxNb2RlOiBvcHRpb25zLnRyYXZlbE1vZGUsXG4gICAgd2F5cG9pbnRzOiBvcHRpb25zLndheXBvaW50cyxcbiAgICB1bml0U3lzdGVtOiBvcHRpb25zLnVuaXRTeXN0ZW0sXG4gICAgZXJyb3I6IG9wdGlvbnMuZXJyb3IsXG4gICAgYXZvaWRIaWdod2F5czogb3B0aW9ucy5hdm9pZEhpZ2h3YXlzLFxuICAgIGF2b2lkVG9sbHM6IG9wdGlvbnMuYXZvaWRUb2xscyxcbiAgICBvcHRpbWl6ZVdheXBvaW50czogb3B0aW9ucy5vcHRpbWl6ZVdheXBvaW50cyxcbiAgICBjYWxsYmFjayhyb3V0ZXMpIHtcbiAgICAgIGlmIChyb3V0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBsYXN0Um91dGUgPSByb3V0ZXNbcm91dGVzLmxlbmd0aCAtIDFdO1xuICAgICAgICBjb25zdCBwb2x5bGluZU9wdGlvbnMgPSB7XG4gICAgICAgICAgcGF0aDogbGFzdFJvdXRlLm92ZXJ2aWV3X3BhdGgsXG4gICAgICAgICAgc3Ryb2tlQ29sb3I6IG9wdGlvbnMuc3Ryb2tlQ29sb3IsXG4gICAgICAgICAgc3Ryb2tlT3BhY2l0eTogb3B0aW9ucy5zdHJva2VPcGFjaXR5LFxuICAgICAgICAgIHN0cm9rZVdlaWdodDogb3B0aW9ucy5zdHJva2VXZWlnaHQsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuaWNvbnMpIHtcbiAgICAgICAgICBwb2x5bGluZU9wdGlvbnMuaWNvbnMgPSBvcHRpb25zLmljb25zO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5kcmF3UG9seWxpbmUocG9seWxpbmVPcHRpb25zKTtcblxuICAgICAgICBpZiAob3B0aW9ucy5jYWxsYmFjaykge1xuICAgICAgICAgIG9wdGlvbnMuY2FsbGJhY2sobGFzdFJvdXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gIH0pO1xufTtcblxuLyoqXG4gKiBUcmF2ZWwgYSByb3V0ZSBhdXRvbWF0aWNhbGx5LiBJdCB1c2VzIHRoZSBsYXN0IHJvdXRlIGZvdW5kIGJ5IHtAbGluayBHTWFwcyNnZXRSb3V0ZXN9LlxuICogQGZ1bmN0aW9uIHRyYXZlbFJvdXRlXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBBY2NlcHRzIHRoZSBzYW1lIG9wdGlvbnMgYXMge0BsaW5rIEdNYXBzI2dldFJvdXRlc30uXG4gKiBAcGFyYW0ge3N0cmluZ3xnb29nbGUubWFwcy5MYXRMbmd8Z29vZ2xlLm1hcHMuUGxhY2V8Z29vZ2xlLm1hcHMuTGF0TG5nTGl0ZXJhbH0gb3B0aW9ucy5vcmlnaW4gLSBMb2NhdGlvbiBvZiBvcmlnaW4uXG4gKiBAcGFyYW0ge3N0cmluZ3xnb29nbGUubWFwcy5MYXRMbmd8Z29vZ2xlLm1hcHMuUGxhY2V8Z29vZ2xlLm1hcHMuTGF0TG5nTGl0ZXJhbH0gb3B0aW9ucy5kZXN0aW5hdGlvbiAtIExvY2F0aW9uIG9mIGRlc3RpbmF0aW9uLlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMucm91dGUgLSBBIFtnb29nbGUubWFwcy5EaXJlY3Rpb25zUm91dGVdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNEaXJlY3Rpb25zUm91dGUpIG9iamVjdC4gSWYgc2V0LCBgb3JpZ2luYCBhbmQgYGRlc3RpbmF0aW9uYCBhcmUgaWdub3JlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMuc3RhcnQgLSBGaXJlZCBiZWZvcmUgdGhlIGZpcnN0IHN0ZXAuIEl0IHJlY2VpdmVzIGEgc2luZ2xlIGFyZ3VtZW50LCB3aGljaCBpcyBhIFtEaXJlY3Rpb25zUm91dGVdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNEaXJlY3Rpb25zUm91dGUpIG9iamVjdC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMuc3RlcCAtIEZpcmVkIGVhY2ggc3RlcCBpbiB0aGUgcm91dGUuIEl0IHJlY2VpdmVzIDIgYXJndW1lbnRzLCB3aGljaCBpcyBhIFtEaXJlY3Rpb25zU3RlcF0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI0RpcmVjdGlvbnNTdGVwKSBvYmplY3QgYW5kIHRoZSB0b3RhbCBsZW5ndGggb2YgdGhlIHN0ZXBzLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5lbmQgLSBGaXJlZCBhZnRlciB0aGUgbGFzdCBzdGVwLiBJdCByZWNlaXZlcyBhIHNpbmdsZSBhcmd1bWVudCwgd2hpY2ggaXMgYSBbRGlyZWN0aW9uc1JvdXRlXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjRGlyZWN0aW9uc1JvdXRlKSBvYmplY3QuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS50cmF2ZWxSb3V0ZSA9IGZ1bmN0aW9uIHRyYXZlbFJvdXRlKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMub3JpZ2luICYmIG9wdGlvbnMuZGVzdGluYXRpb24pIHtcbiAgICB0aGlzLmdldFJvdXRlcyh7XG4gICAgICBvcmlnaW46IG9wdGlvbnMub3JpZ2luLFxuICAgICAgZGVzdGluYXRpb246IG9wdGlvbnMuZGVzdGluYXRpb24sXG4gICAgICB0cmF2ZWxNb2RlOiBvcHRpb25zLnRyYXZlbE1vZGUsXG4gICAgICB3YXlwb2ludHM6IG9wdGlvbnMud2F5cG9pbnRzLFxuICAgICAgdW5pdFN5c3RlbTogb3B0aW9ucy51bml0U3lzdGVtLFxuICAgICAgZXJyb3I6IG9wdGlvbnMuZXJyb3IsXG4gICAgICBjYWxsYmFjayhyb3V0ZXMpIHtcbiAgICAgICAgaWYgKHJvdXRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsYXN0Um91dGUgPSByb3V0ZXNbcm91dGVzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgIC8vIHN0YXJ0IGNhbGxiYWNrXG4gICAgICAgIGlmIChvcHRpb25zLnN0YXJ0KSB7XG4gICAgICAgICAgb3B0aW9ucy5zdGFydChsYXN0Um91dGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3RlcCBjYWxsYmFja1xuICAgICAgICBpZiAob3B0aW9ucy5zdGVwKSB7XG4gICAgICAgICAgaWYgKGxhc3RSb3V0ZS5sZWdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHsgc3RlcHMsIH0gPSBsYXN0Um91dGUubGVnc1swXTtcblxuICAgICAgICAgICAgc3RlcHMuZm9yRWFjaCgoc3RlcCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgICAgIHN0ZXAuc3RlcF9udW1iZXIgPSBpbmRleDtcbiAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgICAgIHN0ZXAuc3RlcE51bWJlciA9IGluZGV4O1xuXG4gICAgICAgICAgICAgIG9wdGlvbnMuc3RlcChzdGVwLCBzdGVwcy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVuZCBjYWxsYmFja1xuICAgICAgICBpZiAob3B0aW9ucy5lbmQpIHtcbiAgICAgICAgICBvcHRpb25zLmVuZChsYXN0Um91dGUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pO1xuICB9IGVsc2UgaWYgKG9wdGlvbnMucm91dGUpIHtcbiAgICBpZiAob3B0aW9ucy5yb3V0ZS5sZWdzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHsgc3RlcHMsIH0gPSBvcHRpb25zLnJvdXRlLmxlZ3NbMF07XG5cbiAgICAgIHN0ZXBzLmZvckVhY2goKHN0ZXAsIGluZGV4KSA9PiB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICBzdGVwLnN0ZXBfbnVtYmVyID0gaW5kZXg7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICBzdGVwLnN0ZXBOdW1iZXIgPSBpbmRleDtcblxuICAgICAgICBvcHRpb25zLnN0ZXAoc3RlcCwgc3RlcHMubGVuZ3RoIC0gMSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogRHJhdyBhbmQgdHJhdmVsIGEgcm91dGUgYXV0b21hdGljYWxseSBzdGVwIGJ5IHN0ZXAuIEl0IHVzZXMgdGhlIGxhc3Qgcm91dGUgZm91bmQgYnkge0BsaW5rIEdNYXBzI2dldFJvdXRlc30uXG4gKiBAZnVuY3Rpb24gZHJhd1N0ZXBwZWRSb3V0ZVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gQWNjZXB0cyB0aGUgc2FtZSBvcHRpb25zIGFzIHtAbGluayBHTWFwcyN0cmF2ZWxSb3V0ZX0uXG4gKiBAcGFyYW0ge3N0cmluZ3xnb29nbGUubWFwcy5MYXRMbmd8Z29vZ2xlLm1hcHMuUGxhY2V8Z29vZ2xlLm1hcHMuTGF0TG5nTGl0ZXJhbH0gb3B0aW9ucy5vcmlnaW4gLSBMb2NhdGlvbiBvZiBvcmlnaW4uXG4gKiBAcGFyYW0ge3N0cmluZ3xnb29nbGUubWFwcy5MYXRMbmd8Z29vZ2xlLm1hcHMuUGxhY2V8Z29vZ2xlLm1hcHMuTGF0TG5nTGl0ZXJhbH0gb3B0aW9ucy5kZXN0aW5hdGlvbiAtIExvY2F0aW9uIG9mIGRlc3RpbmF0aW9uLlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMucm91dGUgLSBBIFtnb29nbGUubWFwcy5EaXJlY3Rpb25zUm91dGVdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNEaXJlY3Rpb25zUm91dGUpIG9iamVjdC4gSWYgc2V0LCBgb3JpZ2luYCBhbmQgYGRlc3RpbmF0aW9uYCBhcmUgaWdub3JlZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnN0cm9rZUNvbG9yIC0gQ29sb3Igb2YgdGhlIHBvbHlsaW5lLiBDYW4gYmUgaGV4YWRlY2ltYWwgb3IgQ1NTIG5hbWUuXG4gKiBAcGFyYW0ge2Zsb2F0fSBvcHRpb25zLnN0cm9rZU9wYWNpdHkgLSBPcGFjaXR5IG9mIHRoZSBwb2x5bGluZSBmcm9tIDAuMCB0byAxLjBcbiAqIEBwYXJhbSB7aW50ZWdlcn0gb3B0aW9ucy5zdHJva2VXZWlnaHQgLSBQb2x5bGluZSB3aWR0aCBpbiBwaXhlbHMuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLnN0YXJ0IC0gRmlyZWQgYmVmb3JlIHRoZSBmaXJzdCBzdGVwLiBJdCByZWNlaXZlcyBhIHNpbmdsZSBhcmd1bWVudCwgd2hpY2ggaXMgYSBbRGlyZWN0aW9uc1JvdXRlXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjRGlyZWN0aW9uc1JvdXRlKSBvYmplY3QuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLnN0ZXAgLSBGaXJlZCBlYWNoIHN0ZXAgaW4gdGhlIHJvdXRlLiBJdCByZWNlaXZlcyAyIGFyZ3VtZW50cywgd2hpY2ggaXMgYSBbRGlyZWN0aW9uc1N0ZXBdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNEaXJlY3Rpb25zU3RlcCkgb2JqZWN0IGFuZCB0aGUgdG90YWwgbGVuZ3RoIG9mIHRoZSBzdGVwcy5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMuZW5kIC0gRmlyZWQgYWZ0ZXIgdGhlIGxhc3Qgc3RlcC4gSXQgcmVjZWl2ZXMgYSBzaW5nbGUgYXJndW1lbnQsIHdoaWNoIGlzIGEgW0RpcmVjdGlvbnNSb3V0ZV0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI0RpcmVjdGlvbnNSb3V0ZSkgb2JqZWN0LlxuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5kcmF3U3RlcHBlZFJvdXRlID0gZnVuY3Rpb24gZHJhd1N0ZXBwZWRSb3V0ZShvcHRpb25zKSB7XG4gIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gIHRoaXMudHJhdmVsUm91dGUoe1xuICAgIC4uLm9wdGlvbnMsXG4gICAgc3RlcDogZnVuY3Rpb24gc3RlcChyb3V0ZVN0ZXAsIHN0ZXBzQ291bnQpIHtcbiAgICAgIGNvbnN0IHBvbHlsaW5lT3B0aW9ucyA9IHtcbiAgICAgICAgcGF0aDogcm91dGVTdGVwLnBhdGgsXG4gICAgICAgIHN0cm9rZUNvbG9yOiBvcHRpb25zLnN0cm9rZUNvbG9yLFxuICAgICAgICBzdHJva2VPcGFjaXR5OiBvcHRpb25zLnN0cm9rZU9wYWNpdHksXG4gICAgICAgIHN0cm9rZVdlaWdodDogb3B0aW9ucy5zdHJva2VXZWlnaHQsXG4gICAgICB9O1xuXG4gICAgICBpZiAob3B0aW9ucy5pY29ucykge1xuICAgICAgICBwb2x5bGluZU9wdGlvbnMuaWNvbnMgPSBvcHRpb25zLmljb25zO1xuICAgICAgfVxuXG4gICAgICBzZWxmLmRyYXdQb2x5bGluZShwb2x5bGluZU9wdGlvbnMpO1xuXG4gICAgICBvcHRpb25zLnN0ZXAocm91dGVTdGVwLCBzdGVwc0NvdW50KTtcbiAgICB9LFxuICB9KTtcblxuICAvLyBpZiAob3B0aW9ucy5vcmlnaW4gJiYgb3B0aW9ucy5kZXN0aW5hdGlvbikge1xuICAvLyAgIHRoaXMuZ2V0Um91dGVzKHtcbiAgLy8gICAgIG9yaWdpbjogb3B0aW9ucy5vcmlnaW4sXG4gIC8vICAgICBkZXN0aW5hdGlvbjogb3B0aW9ucy5kZXN0aW5hdGlvbixcbiAgLy8gICAgIHRyYXZlbE1vZGU6IG9wdGlvbnMudHJhdmVsTW9kZSxcbiAgLy8gICAgIHdheXBvaW50czogb3B0aW9ucy53YXlwb2ludHMsXG4gIC8vICAgICBlcnJvcjogb3B0aW9ucy5lcnJvcixcbiAgLy8gICAgIGNhbGxiYWNrKHJvdXRlcykge1xuICAvLyAgICAgICBpZiAocm91dGVzLmxlbmd0aCA9PT0gMCkge1xuICAvLyAgICAgICAgIHJldHVybjtcbiAgLy8gICAgICAgfVxuXG4gIC8vICAgICAgIGNvbnN0IHJvdXRlID0gcm91dGVzW3JvdXRlcy5sZW5ndGggLSAxXTtcblxuICAvLyAgICAgICAvLyBzdGFydCBjYWxsYmFja1xuICAvLyAgICAgICBpZiAob3B0aW9ucy5zdGFydCkge1xuICAvLyAgICAgICAgIG9wdGlvbnMuc3RhcnQocm91dGUpO1xuICAvLyAgICAgICB9XG5cbiAgLy8gICAgICAgLy8gc3RlcCBjYWxsYmFja1xuICAvLyAgICAgICBpZiAob3B0aW9ucy5zdGVwKSB7XG4gIC8vICAgICAgICAgaWYgKHJvdXRlLmxlZ3MubGVuZ3RoID4gMCkge1xuICAvLyAgICAgICAgICAgY29uc3QgeyBzdGVwcywgfSA9IHJvdXRlLmxlZ3NbMF07XG5cbiAgLy8gICAgICAgICAgIHN0ZXBzLmZvckVhY2goKHN0ZXAsIGluZGV4KSA9PiB7XG4gIC8vICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAvLyAgICAgICAgICAgICBzdGVwLnN0ZXBfbnVtYmVyID0gaW5kZXg7XG4gIC8vICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAvLyAgICAgICAgICAgICBzdGVwLnN0ZXBOdW1iZXIgPSBpbmRleDtcblxuICAvLyAgICAgICAgICAgICBjb25zdCBwb2x5bGluZU9wdGlvbnMgPSB7XG4gIC8vICAgICAgICAgICAgICAgcGF0aDogc3RlcC5wYXRoLFxuICAvLyAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiBvcHRpb25zLnN0cm9rZUNvbG9yLFxuICAvLyAgICAgICAgICAgICAgIHN0cm9rZU9wYWNpdHk6IG9wdGlvbnMuc3Ryb2tlT3BhY2l0eSxcbiAgLy8gICAgICAgICAgICAgICBzdHJva2VXZWlnaHQ6IG9wdGlvbnMuc3Ryb2tlV2VpZ2h0LFxuICAvLyAgICAgICAgICAgICB9O1xuXG4gIC8vICAgICAgICAgICAgIGlmIChvcHRpb25zLmljb25zKSB7XG4gIC8vICAgICAgICAgICAgICAgcG9seWxpbmVPcHRpb25zLmljb25zID0gb3B0aW9ucy5pY29ucztcbiAgLy8gICAgICAgICAgICAgfVxuXG4gIC8vICAgICAgICAgICAgIHNlbGYuZHJhd1BvbHlsaW5lKHBvbHlsaW5lT3B0aW9ucyk7XG4gIC8vICAgICAgICAgICAgIG9wdGlvbnMuc3RlcChzdGVwLCAocm91dGUubGVnc1swXS5zdGVwcy5sZW5ndGggLSAxKSk7XG4gIC8vICAgICAgICAgICB9KTtcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgIH1cblxuICAvLyAgICAgICAvLyBlbmQgY2FsbGJhY2tcbiAgLy8gICAgICAgaWYgKG9wdGlvbnMuZW5kKSB7XG4gIC8vICAgICAgICAgb3B0aW9ucy5lbmQocm91dGUpO1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9LFxuICAvLyAgIH0pO1xuICAvLyB9IGVsc2UgaWYgKG9wdGlvbnMucm91dGUpIHtcbiAgLy8gICBpZiAob3B0aW9ucy5yb3V0ZS5sZWdzLmxlbmd0aCA+IDApIHtcbiAgLy8gICAgIGNvbnN0IHsgc3RlcHMsIH0gPSBvcHRpb25zLnJvdXRlLmxlZ3NbMF07XG5cbiAgLy8gICAgIHN0ZXBzLmZvckVhY2goKHN0ZXAsIGluZGV4KSA9PiB7XG4gIC8vICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAvLyAgICAgICBzdGVwLnN0ZXBfbnVtYmVyID0gaW5kZXg7XG4gIC8vICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAvLyAgICAgICBzdGVwLnN0ZXBOdW1iZXIgPSBpbmRleDtcblxuICAvLyAgICAgICBjb25zdCBwb2x5bGluZU9wdGlvbnMgPSB7XG4gIC8vICAgICAgICAgcGF0aDogc3RlcC5wYXRoLFxuICAvLyAgICAgICAgIHN0cm9rZUNvbG9yOiBvcHRpb25zLnN0cm9rZUNvbG9yLFxuICAvLyAgICAgICAgIHN0cm9rZU9wYWNpdHk6IG9wdGlvbnMuc3Ryb2tlT3BhY2l0eSxcbiAgLy8gICAgICAgICBzdHJva2VXZWlnaHQ6IG9wdGlvbnMuc3Ryb2tlV2VpZ2h0LFxuICAvLyAgICAgICB9O1xuXG4gIC8vICAgICAgIGlmIChvcHRpb25zLmljb25zKSB7XG4gIC8vICAgICAgICAgcG9seWxpbmVPcHRpb25zLmljb25zID0gb3B0aW9ucy5pY29ucztcbiAgLy8gICAgICAgfVxuXG4gIC8vICAgICAgIHNlbGYuZHJhd1BvbHlsaW5lKHBvbHlsaW5lT3B0aW9ucyk7XG5cbiAgLy8gICAgICAgb3B0aW9ucy5zdGVwKHN0ZXApO1xuICAvLyAgICAgfSk7XG4gIC8vICAgfVxuICAvLyB9XG59O1xuXG5jbGFzcyBSb3V0ZSB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLm9yaWdpbiA9IG9wdGlvbnMub3JpZ2luO1xuICAgIHRoaXMuZGVzdGluYXRpb24gPSBvcHRpb25zLmRlc3RpbmF0aW9uO1xuICAgIHRoaXMud2F5cG9pbnRzID0gb3B0aW9ucy53YXlwb2ludHM7XG5cbiAgICB0aGlzLm1hcCA9IG9wdGlvbnMubWFwO1xuICAgIHRoaXMucm91dGUgPSBvcHRpb25zLnJvdXRlO1xuICAgIHRoaXMuc3RlcF9jb3VudCA9IDA7XG4gICAgdGhpcy5zdGVwcyA9IHRoaXMucm91dGUubGVnc1swXS5zdGVwcztcbiAgICB0aGlzLnN0ZXBzX2xlbmd0aCA9IHRoaXMuc3RlcHMubGVuZ3RoO1xuXG4gICAgY29uc3QgcG9seWxpbmVPcHRpb25zID0ge1xuICAgICAgcGF0aDogbmV3IGdvb2dsZS5tYXBzLk1WQ0FycmF5KCksXG4gICAgICBzdHJva2VDb2xvcjogb3B0aW9ucy5zdHJva2VDb2xvcixcbiAgICAgIHN0cm9rZU9wYWNpdHk6IG9wdGlvbnMuc3Ryb2tlT3BhY2l0eSxcbiAgICAgIHN0cm9rZVdlaWdodDogb3B0aW9ucy5zdHJva2VXZWlnaHQsXG4gICAgfTtcblxuICAgIGlmIChvcHRpb25zLmljb25zKSB7XG4gICAgICBwb2x5bGluZU9wdGlvbnMuaWNvbnMgPSBvcHRpb25zLmljb25zO1xuICAgIH1cblxuICAgIHRoaXMucG9seWxpbmUgPSB0aGlzLm1hcC5kcmF3UG9seWxpbmUocG9seWxpbmVPcHRpb25zKS5nZXRQYXRoKCk7XG4gIH1cblxuICBnZXRSb3V0ZShvcHRpb25zKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLm1hcC5nZXRSb3V0ZXMoe1xuICAgICAgb3JpZ2luOiB0aGlzLm9yaWdpbixcbiAgICAgIGRlc3RpbmF0aW9uOiB0aGlzLmRlc3RpbmF0aW9uLFxuICAgICAgdHJhdmVsTW9kZTogb3B0aW9ucy50cmF2ZWxNb2RlLFxuICAgICAgd2F5cG9pbnRzOiB0aGlzLndheXBvaW50cyB8fCBbXSxcbiAgICAgIGVycm9yOiBvcHRpb25zLmVycm9yLFxuICAgICAgY2FsbGJhY2socm91dGVzKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICBzZWxmLnJvdXRlID0gcm91dGVzWzBdO1xuXG4gICAgICAgIGlmIChvcHRpb25zLmNhbGxiYWNrKSB7XG4gICAgICAgICAgb3B0aW9ucy5jYWxsYmFjay5jYWxsKHNlbGYpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgYmFjaygpIHtcbiAgICBpZiAodGhpcy5zdGVwX2NvdW50ID4gMCkge1xuICAgICAgdGhpcy5zdGVwX2NvdW50IC09IDE7XG4gICAgICBjb25zdCB7IHBhdGgsIH0gPSB0aGlzLnJvdXRlLmxlZ3NbMF0uc3RlcHNbdGhpcy5zdGVwX2NvdW50XTtcblxuICAgICAgcGF0aC5mb3JFYWNoKCgpID0+IHRoaXMucG9seWxpbmUucG9wKCkpO1xuICAgIH1cbiAgfVxuXG4gIGZvcndhcmQoKSB7XG4gICAgaWYgKHRoaXMuc3RlcF9jb3VudCA8IHRoaXMuc3RlcHNfbGVuZ3RoKSB7XG4gICAgICBjb25zdCB7IHBhdGgsIH0gPSB0aGlzLnJvdXRlLmxlZ3NbMF0uc3RlcHNbdGhpcy5zdGVwX2NvdW50XTtcblxuICAgICAgcGF0aC5mb3JFYWNoKGNvb3JkaW5hdGUgPT4gdGhpcy5wb2x5bGluZS5wdXNoKGNvb3JkaW5hdGUpKTtcblxuICAgICAgdGhpcy5zdGVwX2NvdW50ICs9IDE7XG4gICAgfVxuICB9XG59XG5cbkdNYXBzLlJvdXRlID0gUm91dGU7XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXBzO1xuIiwiaW1wb3J0IEdNYXBzIGZyb20gJy4vY29yZSc7XG5cbmNvbnN0IHBhcnNlQ29sb3IgPSAoY29sb3IsIG9wYWNpdHkpID0+IHtcbiAgbGV0IHBhcnNlZENvbG9yO1xuXG4gIGlmIChjb2xvclswXSA9PT0gJyMnKSB7XG4gICAgcGFyc2VkQ29sb3IgPSBjb2xvci5yZXBsYWNlKCcjJywgJzB4Jyk7XG5cbiAgICBpZiAob3BhY2l0eSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBvcGFjaXR5ID0gTWF0aC5taW4oMSwgTWF0aC5tYXgocGFyc2VGbG9hdChvcGFjaXR5KSwgMCkpO1xuXG4gICAgICBpZiAob3BhY2l0eSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJzB4MDAwMDAwMDAnO1xuICAgICAgfVxuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG9wYWNpdHkgPSAob3BhY2l0eSAqIDI1NSkudG9TdHJpbmcoMTYpO1xuXG4gICAgICBpZiAob3BhY2l0eS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIG9wYWNpdHkgKz0gb3BhY2l0eTtcbiAgICAgIH1cblxuICAgICAgcGFyc2VkQ29sb3IgPSBwYXJzZWRDb2xvci5zbGljZSgwLCA4KSArIG9wYWNpdHk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnNlZENvbG9yO1xufTtcblxuLyoqXG4gKiBFeHRlbmRzIEdNYXBzIHRvIGdlbmVyYXRlIHN0YXRpYyBtYXBzLlxuICogQG1vZHVsZSBTdGF0aWNcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gVVJMIGZvciBhIHN0YXRpYyBtYXAgZnJvbSBjdXJyZW50IEdNYXBzIG1hcC5cbiAqIEBmdW5jdGlvbiB0b0ltYWdlXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgYG9wdGlvbnNgIG9iamVjdCBzaG91bGQgY29udGFpbjpcbiAqIEBwYXJhbSB7YXJyYXl9IG9wdGlvbnMuc2l6ZSAtIFdpZHRoIGFuZCBoZWlnaHQgb2YgdGhlIGltYWdlLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbiBHTWFwcy5wcm90b3R5cGUudG9JbWFnZSA9IGZ1bmN0aW9uIHRvSW1hZ2Uob3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHsgc2l6ZSA9IFt0aGlzLmVsZW1lbnQuY2xpZW50V2lkdGgsIHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHRdLCB6b29tID0gdGhpcy5nZXRab29tKCksIH0gPSBvcHRpb25zO1xuXG4gIGNvbnN0IHN0YXRpY01hcE9wdGlvbnMgPSB7XG4gICAgc2l6ZSxcbiAgICB6b29tLFxuICAgIGxhdGl0dWRlOiB0aGlzLmdldENlbnRlcigpLmxhdCgpLFxuICAgIGxvbmdpdHVkZTogdGhpcy5nZXRDZW50ZXIoKS5sbmcoKSxcbiAgICBtYXJrZXJzOiB0aGlzLm1hcmtlcnMubWFwKG1hcmtlciA9PiAoe1xuICAgICAgbGF0aXR1ZGU6IG1hcmtlci5nZXRQb3NpdGlvbigpLmxhdCgpLFxuICAgICAgbG9uZ2l0dWRlOiBtYXJrZXIuZ2V0UG9zaXRpb24oKS5sbmcoKSxcbiAgICB9KSksXG4gIH07XG5cbiAgaWYgKHRoaXMucG9seWxpbmVzLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBwb2x5bGluZSA9IHRoaXMucG9seWxpbmVzWzBdO1xuXG4gICAgc3RhdGljTWFwT3B0aW9ucy5wb2x5bGluZSA9IHtcbiAgICAgIHBhdGg6IGdvb2dsZS5tYXBzLmdlb21ldHJ5LmVuY29kaW5nLmVuY29kZVBhdGgocG9seWxpbmUuZ2V0UGF0aCgpKSxcbiAgICAgIHN0cm9rZUNvbG9yOiBwb2x5bGluZS5zdHJva2VDb2xvcixcbiAgICAgIHN0cm9rZU9wYWNpdHk6IHBvbHlsaW5lLnN0cm9rZU9wYWNpdHksXG4gICAgICBzdHJva2VXZWlnaHQ6IHBvbHlsaW5lLnN0cm9rZVdlaWdodCxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIEdNYXBzLnN0YXRpY01hcFVSTChzdGF0aWNNYXBPcHRpb25zKTtcbn07XG5cbmNvbnN0IGJ1aWxkTWFya2VyUGFyYW1ldGVycyA9IChtYXJrZXIpID0+IHtcbiAgY29uc3QgbWFya2VyUGFyYW1ldGVycyA9IFtdO1xuXG4gIGNvbnN0IHsgYWRkcmVzcywgbGF0LCBsYXRpdHVkZSA9IGxhdCwgbG5nLCBsb25naXR1ZGUgPSBsbmcsIHNpemUsIGljb24sIGNvbG9yLCBsYWJlbCwgLi4ubWFya2VyT3B0aW9ucyB9ID0gbWFya2VyO1xuXG4gIGNvbnN0IGxvY2F0aW9uID0gYWRkcmVzcyB8fCBgJHtsYXRpdHVkZX0sJHtsb25naXR1ZGV9YDtcblxuICBpZiAoc2l6ZSkge1xuICAgIG1hcmtlclBhcmFtZXRlcnMucHVzaChgc2l6ZToke3NpemV9YCk7XG4gIH1cblxuICBpZiAoaWNvbikge1xuICAgIG1hcmtlclBhcmFtZXRlcnMucHVzaChgaWNvbjoke2VuY29kZVVSSShpY29uKX1gKTtcbiAgfVxuXG4gIGlmIChjb2xvcikge1xuICAgIG1hcmtlclBhcmFtZXRlcnMucHVzaChgY29sb3I6JHtjb2xvci5yZXBsYWNlKCcjJywgJzB4Jyl9YCk7XG4gIH1cblxuICBpZiAobGFiZWwpIHtcbiAgICBtYXJrZXJQYXJhbWV0ZXJzLnB1c2goYGxhYmVsOiR7bGFiZWxbMF0udG9VcHBlckNhc2UoKX1gKTtcbiAgfVxuXG4gIE9iamVjdC5rZXlzKG1hcmtlck9wdGlvbnMpLmZvckVhY2goa2V5ID0+IG1hcmtlclBhcmFtZXRlcnMucHVzaChgJHtrZXl9OiR7bWFya2VyUGFyYW1ldGVyc1trZXldfWApKTtcblxuICBtYXJrZXJQYXJhbWV0ZXJzLnB1c2gobG9jYXRpb24pO1xuXG4gIHJldHVybiBtYXJrZXJQYXJhbWV0ZXJzO1xufTtcblxuY29uc3QgYnVpbGRQYXRoUGFyYW1ldGVycyA9IChwb2x5bGluZSkgPT4ge1xuICBjb25zdCB7IHBhdGgsIH0gPSBwb2x5bGluZTtcbiAgY29uc3QgcG9seWxpbmVQYXJhbWV0ZXJzID0gW107XG5cbiAgaWYgKHBvbHlsaW5lLnN0cm9rZVdlaWdodCkge1xuICAgIHBvbHlsaW5lUGFyYW1ldGVycy5wdXNoKGB3ZWlnaHQ6JHtwYXJzZUludChwb2x5bGluZS5zdHJva2VXZWlnaHQsIDEwKX1gKTtcbiAgfVxuXG4gIGlmIChwb2x5bGluZS5zdHJva2VDb2xvcikge1xuICAgIHBvbHlsaW5lUGFyYW1ldGVycy5wdXNoKGBjb2xvcjoke3BhcnNlQ29sb3IocG9seWxpbmUuc3Ryb2tlQ29sb3IsIHBvbHlsaW5lLnN0cm9rZU9wYWNpdHkpfWApO1xuICB9XG5cbiAgaWYgKHBvbHlsaW5lLmZpbGxDb2xvcikge1xuICAgIHBvbHlsaW5lUGFyYW1ldGVycy5wdXNoKGBmaWxsY29sb3I6JHtwYXJzZUNvbG9yKHBvbHlsaW5lLmZpbGxDb2xvciwgcG9seWxpbmUuZmlsbE9wYWNpdHkpfWApO1xuICB9XG5cbiAgaWYgKHBhdGguam9pbikge1xuICAgIHBhdGguZm9yRWFjaChjb29yZGluYXRlcyA9PiBwb2x5bGluZVBhcmFtZXRlcnMucHVzaChjb29yZGluYXRlcy5qb2luKCcsJykpKTtcbiAgfSBlbHNlIHtcbiAgICBwb2x5bGluZVBhcmFtZXRlcnMucHVzaChgZW5jOiR7cGF0aH1gKTtcbiAgfVxuXG4gIHJldHVybiBwb2x5bGluZVBhcmFtZXRlcnM7XG59O1xuXG5jb25zdCBidWlsZFN0eWxlUGFyYW1ldGVycyA9IChzdHlsZSkgPT4ge1xuICBjb25zdCBzdHlsZVBhcmFtZXRlcnMgPSBbXTtcblxuICBpZiAoc3R5bGUuZmVhdHVyZVR5cGUpIHtcbiAgICBzdHlsZVBhcmFtZXRlcnMucHVzaChgZmVhdHVyZToke3N0eWxlLmZlYXR1cmVUeXBlLnRvTG93ZXJDYXNlKCl9YCk7XG4gIH1cblxuICBpZiAoc3R5bGUuZWxlbWVudFR5cGUpIHtcbiAgICBzdHlsZVBhcmFtZXRlcnMucHVzaChgZWxlbWVudDoke3N0eWxlLmVsZW1lbnRUeXBlLnRvTG93ZXJDYXNlKCl9YCk7XG4gIH1cblxuICBpZiAoc3R5bGUuc3R5bGVycy5sZW5ndGgpIHtcbiAgICBzdHlsZS5zdHlsZXJzLmZvckVhY2goKHN0eWxlcikgPT4ge1xuICAgICAgT2JqZWN0LmtleXMoc3R5bGVyKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSAoa2V5ID09PSAnaHVlJyB8fCBrZXkgPT09ICdjb2xvcicpID8gc3R5bGVyW2tleV0ucmVwbGFjZSgnIycsICcweCcpIDogc3R5bGVyW2tleV07XG5cbiAgICAgICAgc3R5bGVQYXJhbWV0ZXJzLnB1c2goYCR7a2V5fToke3ZhbHVlfWApO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGVQYXJhbWV0ZXJzO1xufTtcblxuR01hcHMuc3RhdGljTWFwVVJMID0gZnVuY3Rpb24gc3RhdGljTWFwVVJMKGJhc2VPcHRpb25zKSB7XG4gIGNvbnN0IHsgdXJsLCBsYXQsIGxhdGl0dWRlID0gbGF0LCBsbmcsIGxvbmdpdHVkZSA9IGxuZywgY2VudGVyLCBhZGRyZXNzLCB6b29tID0gMTUsIG1hcmtlcnMgPSBbXSwgc3R5bGVzLCBwb2x5bGluZSwgdmlzaWJsZSwgc2l6ZSA9IFs2MzAsIDMwMF0sIC4uLm9wdGlvbnMgfSA9IGJhc2VPcHRpb25zO1xuICBjb25zdCBkZWZhdWx0Um9vdCA9IGAke2dsb2JhbC5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2ZpbGU6JyA/ICdodHRwOicgOiBnbG9iYWwubG9jYXRpb24ucHJvdG9jb2x9Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL3N0YXRpY21hcGA7XG5cbiAgbGV0IHJvb3QgPSB1cmwgfHwgZGVmYXVsdFJvb3Q7XG4gIGNvbnN0IHBhcmFtZXRlcnMgPSBbXTtcblxuICByb290ICs9ICc/JztcblxuICAvLyBNYXAgb3B0aW9uc1xuICBpZiAoY2VudGVyKSB7XG4gICAgcGFyYW1ldGVycy5wdXNoKGBjZW50ZXI9JHtjZW50ZXJ9YCk7XG4gIH0gZWxzZSBpZiAoYWRkcmVzcykge1xuICAgIHBhcmFtZXRlcnMucHVzaChgY2VudGVyPSR7YWRkcmVzc31gKTtcbiAgfSBlbHNlIGlmIChsYXRpdHVkZSAmJiBsb25naXR1ZGUpIHtcbiAgICBwYXJhbWV0ZXJzLnB1c2goYGNlbnRlcj0ke2xhdGl0dWRlfSwke2xvbmdpdHVkZX1gKTtcbiAgfSBlbHNlIGlmICh2aXNpYmxlKSB7XG4gICAgcGFyYW1ldGVycy5wdXNoKGB2aXNpYmxlPSR7ZW5jb2RlVVJJKHZpc2libGUuam9pbignfCcpKX1gKTtcbiAgfVxuXG4gIHBhcmFtZXRlcnMucHVzaChgc2l6ZT0ke3NpemUuam9pbigneCcpfWApO1xuICBwYXJhbWV0ZXJzLnB1c2goYHpvb209JHt6b29tfWApO1xuXG4gIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goa2V5ID0+IHBhcmFtZXRlcnMucHVzaChgJHtrZXl9PSR7b3B0aW9uc1trZXldfWApKTtcblxuICAvLyBNYXAgc3R5bGVcbiAgaWYgKHN0eWxlcykge1xuICAgIHN0eWxlcy5mb3JFYWNoKChzdHlsZSkgPT4ge1xuICAgICAgY29uc3Qgc3R5bGVQYXJhbWV0ZXJzID0gYnVpbGRTdHlsZVBhcmFtZXRlcnMoc3R5bGUpO1xuXG4gICAgICBwYXJhbWV0ZXJzLnB1c2goYHN0eWxlPSR7ZW5jb2RlVVJJKHN0eWxlUGFyYW1ldGVycy5qb2luKCd8JykpfWApO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gTWFya2Vyc1xuICBpZiAobWFya2Vycy5sZW5ndGgpIHtcbiAgICBtYXJrZXJzLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgY29uc3QgbWFya2VyUGFyYW1ldGVycyA9IGJ1aWxkTWFya2VyUGFyYW1ldGVycyhtYXJrZXIpO1xuICAgICAgcGFyYW1ldGVycy5wdXNoKGBtYXJrZXJzPSR7ZW5jb2RlVVJJKG1hcmtlclBhcmFtZXRlcnMuam9pbignfCcpKX1gKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFBvbHlsaW5lc1xuICBpZiAocG9seWxpbmUpIHtcbiAgICBjb25zdCBwb2x5bGluZVBhcmFtZXRlcnMgPSBidWlsZFBhdGhQYXJhbWV0ZXJzKHBvbHlsaW5lKTtcblxuICAgIHBhcmFtZXRlcnMucHVzaChgcGF0aD0ke2VuY29kZVVSSShwb2x5bGluZVBhcmFtZXRlcnMuam9pbignfCcpKX1gKTtcbiAgfVxuXG4gIC8vIFJldGluYSBzdXBwb3J0XG4gIGNvbnN0IGRwaSA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG4gIHBhcmFtZXRlcnMucHVzaChgc2NhbGU9JHtkcGl9YCk7XG5cbiAgcmV0dXJuIHJvb3QgKyBwYXJhbWV0ZXJzLmpvaW4oJyYnKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXBzO1xuIiwiaW1wb3J0IEdNYXBzLCB7IGdldEVsZW1lbnRCeUlkLCBzZXR1cEV2ZW50cyB9IGZyb20gJy4vY29yZSc7XG5cbi8qKlxuICogRXh0ZW5kcyBHTWFwcyB0byB1c2UgU3RyZWV0VmlldyBwYW5vcmFtYXNcbiAqIEBtb2R1bGUgU3RyZWV0Vmlld1xuICovXG5cbmNvbnN0IFNUUkVFVFZJRVdfRVZFTlRTID0gWydjbG9zZWNsaWNrJywgJ2xpbmtzX2NoYW5nZWQnLCAncGFub19jaGFuZ2VkJywgJ3Bvc2l0aW9uX2NoYW5nZWQnLCAncG92X2NoYW5nZWQnLCAncmVzaXplJywgJ3Zpc2libGVfY2hhbmdlZCddO1xuXG4vKipcbiAqIERpc3BsYXkgYSBTdHJlZXQgVmlldyBQYW5vcmFtYSBmb3IgYSBwb3NpdGlvbi5cbiAqIEBmdW5jdGlvbiBjcmVhdGVQYW5vcmFtYVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBvYmplY3Qgc2hvdWxkIGNvbnRhaW46XG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5sYXRpdHVkZSAtIExhdGl0dWRlIG9mIHRoZSBjb29yZGluYXRlIHdoZXJlIHRoZSBwYW5vcmFtYSBpcyBwbGFjZWQuIElmIG5vdCBzZXQsIGl0IHRha2VzIHRoZSBNYXAncyBjZW50ZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5sb25naXR1ZGUgLSBMb25naXR1ZGUgb2YgdGhlIGNvb3JkaW5hdGUgd2hlcmUgdGhlIHBhbm9yYW1hIGlzIHBsYWNlZC4gSWYgbm90IHNldCwgaXQgdGFrZXMgdGhlIE1hcCdzIGNlbnRlci5cbiAqIEBwYXJhbSB7Z29vZ2xlLm1hcHMuTGF0TG5nfSBvcHRpb25zLnBvc2l0aW9uIC0gQSBgZ29vZ2xlLm1hcHMuTGF0TG5nYCBjb29yZGluYXRlIHdoZXJlIHRoZSBwYW5vcmFtYSBpcyBwbGFjZWQuIElmIHNldCwgYGxhdGl0dWRlYCBhbmQgYGxvbmdpdHVkZWAgYXJlIGlnbm9yZWQuXG4gKlxuICogYG9wdGlvbnNgIGFsc28gYWNjZXB0cyBhbnkgb3B0aW9uIGRlZmluZWQgaW4gdGhlIFtvZmZpY2lhbCBkb2N1bWVudGF0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjU3RyZWV0Vmlld1Bhbm9yYW1hT3B0aW9ucykgYW5kIGFueSBldmVudCBkZWZpbmVkIGluIHRoZSBbXCJFdmVudHNcIiBzZWN0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjU3RyZWV0Vmlld1Bhbm9yYW1hKS5cbiAqXG4gKiBAcmV0dXJucyB7Z29vZ2xlLm1hcHMuU3RyZWV0Vmlld1Bhbm9yYW1hfVxuICovXG5HTWFwcy5wcm90b3R5cGUuY3JlYXRlUGFub3JhbWEgPSBmdW5jdGlvbiBjcmVhdGVQYW5vcmFtYShiYXNlT3B0aW9ucykge1xuICBjb25zdCB7IGxhdCA9IHRoaXMuZ2V0Q2VudGVyKCkubGF0KCksIGxhdGl0dWRlID0gbGF0LCBsbmcgPSB0aGlzLmdldENlbnRlcigpLmxuZygpLCBsb25naXR1ZGUgPSBsbmcsIC4uLm9wdGlvbnMgfSA9IGJhc2VPcHRpb25zO1xuXG4gIGNvbnN0IHN0cmVldFZpZXdPcHRpb25zID0ge1xuICAgIGxhdGl0dWRlLFxuICAgIGxvbmdpdHVkZSxcbiAgICBpbnN0YW5jZTogdGhpcyxcbiAgICAuLi5vcHRpb25zLFxuICB9O1xuXG4gIHRoaXMucGFub3JhbWEgPSBHTWFwcy5jcmVhdGVQYW5vcmFtYShzdHJlZXRWaWV3T3B0aW9ucyk7XG5cbiAgdGhpcy5tYXAuc2V0U3RyZWV0Vmlldyh0aGlzLnBhbm9yYW1hKTtcblxuICByZXR1cm4gdGhpcy5wYW5vcmFtYTtcbn07XG5cbkdNYXBzLmNyZWF0ZVBhbm9yYW1hID0gZnVuY3Rpb24gY3JlYXRlUGFub3JhbWEoYmFzZU9wdGlvbnMpIHtcbiAgY29uc3Qge1xuICAgIGVsLFxuICAgIGVsZW1lbnQgPSBlbCxcbiAgICBjb250ZXh0LFxuICAgIGxhdCxcbiAgICBsYXRpdHVkZSA9IGxhdCxcbiAgICBsbmcsXG4gICAgbG9uZ2l0dWRlID0gbG5nLFxuICAgIHBvc2l0aW9uID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsYXRpdHVkZSwgbG9uZ2l0dWRlKSxcbiAgICBpbnN0YW5jZSA9IGdsb2JhbCxcbiAgICAuLi5vcHRpb25zXG4gIH0gPSBiYXNlT3B0aW9ucztcblxuICBjb25zdCBjb250YWluZXJFbGVtZW50ID0gZ2V0RWxlbWVudEJ5SWQoZWxlbWVudCwgY29udGV4dCk7XG5cbiAgY29uc3QgZmlsdGVyZWRPcHRpb25zID0gT2JqZWN0LmtleXMob3B0aW9ucykucmVkdWNlKChoYXNoLCBrZXkpID0+IHtcbiAgICBpZiAoU1RSRUVUVklFV19FVkVOVFMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgcmV0dXJuIGhhc2g7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgLi4uaGFzaCwgW2tleV06IG9wdGlvbnNba2V5XSwgfTtcbiAgfSwge30pO1xuXG4gIGNvbnN0IHN0cmVldFZpZXdPcHRpb25zID0ge1xuICAgIC4uLmZpbHRlcmVkT3B0aW9ucyxcbiAgICBwb3NpdGlvbixcbiAgICB2aXNpYmxlOiB0cnVlLFxuICB9O1xuXG4gIGNvbnN0IHBhbm9yYW1hID0gbmV3IGdvb2dsZS5tYXBzLlN0cmVldFZpZXdQYW5vcmFtYShjb250YWluZXJFbGVtZW50LCBzdHJlZXRWaWV3T3B0aW9ucyk7XG5cbiAgc2V0dXBFdmVudHMoeyBldmVudHM6IFNUUkVFVFZJRVdfRVZFTlRTLCBvYmplY3Q6IHBhbm9yYW1hLCBpbnN0YW5jZSwgaGFuZGxlcnM6IG9wdGlvbnMsIH0pO1xuXG4gIHJldHVybiBwYW5vcmFtYTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXBzO1xuIiwiaW1wb3J0IEdNYXBzIGZyb20gJy4vY29yZSc7XG5cbi8qKlxuICogRXh0ZW5kcyBHTWFwcyB0byBhZGQgc3R5bGVkIG1hcCB0eXBlcy5cbiAqIEBtb2R1bGUgU3R5bGVzXG4gKi9cblxuLyoqXG4gKiBBZGQgYSBbc3R5bGVkIG1hcCB0eXBlXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9tYXB0eXBlcyNTdHlsZWRNYXBzKSBpbiB0aGUgTWFwLCB3aGljaCBjYW4gYmUgdXNlZCB3aXRoIHRoZSBiYXNlIG1hcCB0eXBlcyAoYGh5YnJpZGAsIGByb2FkbWFwYCwgYHNhdGVsbGl0ZWAgYW5kIGB0ZXJyYWluYCkuXG4gKiBAZnVuY3Rpb24gYWRkU3R5bGVcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRoZSBgb3B0aW9uc2Agb2JqZWN0IHNob3VsZCBjb250YWluOlxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubWFwVHlwZUlkIC0gQSBzaW1wbGUgaWRlbnRpZmllciBmb3IgdGhlIHN0eWxlZCBtYXAgdHlwZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnN0eWxlZE1hcE5hbWUgLSBBIG5hbWUgZm9yIHRoZSBzdHlsZWQgbWFwIHR5cGUuIEl0IHdpbGwgYmUgZGlzcGxheWVkIGluIHRoZSBtYXAgdHlwZSBjb250cm9sLlxuICogQHBhcmFtIHthcnJheX0gb3B0aW9ucy5zdHlsZXMgLSBBbiBhcnJheSBvZiAoYE1hcFR5cGVTdHlsZWApW2h0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNNYXBUeXBlU3R5bGVdIG9iamVjdHMuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5hZGRTdHlsZSA9IGZ1bmN0aW9uIGFkZFN0eWxlKG9wdGlvbnMpIHtcbiAgY29uc3Qgc3R5bGVkTWFwVHlwZSA9IG5ldyBnb29nbGUubWFwcy5TdHlsZWRNYXBUeXBlKG9wdGlvbnMuc3R5bGVzLCB7IG5hbWU6IG9wdGlvbnMuc3R5bGVkTWFwTmFtZSwgfSk7XG5cbiAgdGhpcy5tYXAubWFwVHlwZXMuc2V0KG9wdGlvbnMubWFwVHlwZUlkLCBzdHlsZWRNYXBUeXBlKTtcbn07XG5cbi8qKlxuICogU2V0IGEgW3N0eWxlZCBtYXAgdHlwZV0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvbWFwdHlwZXMjU3R5bGVkTWFwcykgdG8gdGhlIE1hcC4gVGhlIG1hcCB0eXBlIHNob3VsZCBiZSBkZWZpbmVkIGJlZm9yZSB3aXRoIHtAbGluayBHTWFwcyNhZGRTdHlsZX0uXG4gKiBAZnVuY3Rpb24gc2V0U3R5bGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWFwVHlwZUlkIC0gVGhlIHN0eWxlZCBtYXAgdHlwZSdzIGlkZW50aWZpZXIuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5zZXRTdHlsZSA9IGZ1bmN0aW9uIHNldFN0eWxlKG1hcFR5cGVJZCkge1xuICB0aGlzLm1hcC5zZXRNYXBUeXBlSWQobWFwVHlwZUlkKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXBzO1xuIiwiaW1wb3J0IEdNYXBzIGZyb20gJy4vY29yZSc7XG5cbi8qKlxuICogRXh0ZW5kcyBHTWFwcyB0byBhZGQgdXRpbHMgZnVuY3Rpb25zLlxuICogQG1vZHVsZSBVdGlsc1xuICovXG5cbi8qKlxuICogR2VvbG9jYXRlIHVzaW5nIGJyb3dzZXIncyBXZWIgQVBJLlxuICogQGZ1bmN0aW9uIGdlb2xvY2F0ZVxuICogQHN0YXRpY1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBvYmplY3Qgc2hvdWxkIGNvbnRhaW46XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLmFsd2F5cyAtIEEgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIGFmdGVyIHRoZSBgc3VjY2Vzc2AsIGBlcnJvcmAgYW5kIGBub3Rfc3VwcG9ydGVkYCBjYWxsYmFja3MuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLnN1Y2Nlc3MgLSBBIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBhZnRlciB0aGUgYnJvd3NlciBmaW5kIGl0cyBnZW9sb2NhdGlvbi5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMuZXJyb3IgLSBBIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBhZnRlciB0aGUgYnJvd3NlciBmYWlscyBhdCBmaW5kaW5nIGl0cyBnZW9sb2NhdGlvbi5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMubm90X3N1cHBvcnRlZCAtIEEgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIGlmIHRoZSBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBnZW9sb2NhdGlvbi5cbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zLm9wdGlvbnMgLSBPYmplY3Qgd2l0aCBhbGwgb3B0aW9ucyBkZWZpbmVkIGluIFtQb3NpdGlvbk9wdGlvbnNdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Qb3NpdGlvbk9wdGlvbnMpLlxuICovXG5HTWFwcy5nZW9sb2NhdGUgPSBmdW5jdGlvbiBnZW9sb2NhdGUob3B0aW9ucykge1xuICBjb25zdCBjb21wbGV0ZUNhbGxiYWNrID0gb3B0aW9ucy5hbHdheXMgfHwgb3B0aW9ucy5jb21wbGV0ZTtcblxuICBpZiAoZ2xvYmFsLm5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgIGdsb2JhbC5uYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKChwb3NpdGlvbikgPT4ge1xuICAgICAgb3B0aW9ucy5zdWNjZXNzKHBvc2l0aW9uKTtcblxuICAgICAgaWYgKGNvbXBsZXRlQ2FsbGJhY2spIHtcbiAgICAgICAgY29tcGxldGVDYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgb3B0aW9ucy5lcnJvcihlcnJvcik7XG5cbiAgICAgIGlmIChjb21wbGV0ZUNhbGxiYWNrKSB7XG4gICAgICAgIGNvbXBsZXRlQ2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9LCBvcHRpb25zLm9wdGlvbnMpO1xuICB9IGVsc2Uge1xuICAgIG9wdGlvbnMubm90X3N1cHBvcnRlZCgpO1xuXG4gICAgaWYgKGNvbXBsZXRlQ2FsbGJhY2spIHtcbiAgICAgIGNvbXBsZXRlQ2FsbGJhY2soKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogR2VvY29kZSB1c2luZyBHb29nbGUgTWFwcyBHZW9jb2Rpbmcgc2VydmljZS5cbiAqIEBmdW5jdGlvbiBnZW9sb2NhdGVcbiAqIEBzdGF0aWNcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRoZSBgb3B0aW9uc2Agb2JqZWN0IHNob3VsZCBjb250YWluOlxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMubGF0aXR1ZGUgLSBMYXRpdHVkZSBvZiB0aGUgY29vcmRpbmF0ZSB0byBnZW9jb2RlLiBJZiBgbGF0aXR1ZGVgIGFuZCBgbG9uZ2l0dWRlYCBhcmUgc2V0LCBgbG9jYXRpb25gIGlzIGlnbm9yZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5sb25naXR1ZGUgLSBMb25naXR1ZGUgb2YgdGhlIGNvb3JkaW5hdGUgdG8gZ2VvY29kZS4gSWYgYGxhdGl0dWRlYCBhbmQgYGxvbmdpdHVkZWAgYXJlIHNldCwgYGxvY2F0aW9uYCBpcyBpZ25vcmVkLlxuICogQHBhcmFtIHtnb29nbGUubWFwcy5MYXRMbmd9IG9wdGlvbnMubG9jYXRpb24gLSBBIGBnb29nbGUubWFwcy5MYXRMbmdgIGNvb3JkaW5hdGUgdG8gZ2VvY29kZS4gSWYgc2V0LCBgbGF0aXR1ZGVgIGFuZCBgbG9uZ2l0dWRlYCBhcmUgaWdub3JlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMuY2FsbGJhY2sgLSBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgYWZ0ZXIgdGhlIHJlc3VsdHMgYXJlIHJldHVybmVkLiBJdCByZWNlaXZlcyAyIGFyZ3VtZW50cywgd2hpY2ggaXMgYW4gYXJyYXkgb2YgW0dlb2NvZGVyUmVzdWx0XShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjR2VvY29kZXJSZXN1bHQpIG9iamVjdHMgYW5kIHRoZSBbcmVxdWVzdCdzIHN0YXR1c10oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI0dlb2NvZGVyU3RhdHVzKS5cbiAqXG4gKiBgb3B0aW9uc2AgYWxzbyBhY2NlcHRzIGFueSBvcHRpb24gZGVmaW5lZCBpbiB0aGUgW29mZmljaWFsIGRvY3VtZW50YXRpb25dKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNHZW9jb2RlclJlcXVlc3QpLlxuICpcbiAqL1xuR01hcHMuZ2VvY29kZSA9IGZ1bmN0aW9uIGdlb2NvZGUoYmFzZU9wdGlvbnMpIHtcbiAgY29uc3Qge1xuICAgIGNhbGxiYWNrLFxuICAgIGxhdCxcbiAgICBsYXRpdHVkZSA9IGxhdCxcbiAgICBsbmcsXG4gICAgbG9uZ2l0dWRlID0gbG5nLFxuICAgIGxvY2F0aW9uID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsYXRpdHVkZSwgbG9uZ2l0dWRlKSxcbiAgICAuLi5vcHRpb25zXG4gIH0gPSBiYXNlT3B0aW9ucztcblxuICB0aGlzLmdlb2NvZGVyID0gbmV3IGdvb2dsZS5tYXBzLkdlb2NvZGVyKCk7XG5cbiAgY29uc3QgZ2VvY29kZU9wdGlvbnMgPSB7XG4gICAgLi4ub3B0aW9ucyxcbiAgICBsb2NhdGlvbixcbiAgfTtcblxuICB0aGlzLmdlb2NvZGVyLmdlb2NvZGUoZ2VvY29kZU9wdGlvbnMsIGNhbGxiYWNrKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXBzO1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFIgPSB0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgPyBSZWZsZWN0IDogbnVsbFxudmFyIFJlZmxlY3RBcHBseSA9IFIgJiYgdHlwZW9mIFIuYXBwbHkgPT09ICdmdW5jdGlvbidcbiAgPyBSLmFwcGx5XG4gIDogZnVuY3Rpb24gUmVmbGVjdEFwcGx5KHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwodGFyZ2V0LCByZWNlaXZlciwgYXJncyk7XG4gIH1cblxudmFyIFJlZmxlY3RPd25LZXlzXG5pZiAoUiAmJiB0eXBlb2YgUi5vd25LZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gUi5vd25LZXlzXG59IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KVxuICAgICAgLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpO1xuICB9O1xufSBlbHNlIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gUHJvY2Vzc0VtaXRXYXJuaW5nKHdhcm5pbmcpIHtcbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS53YXJuKSBjb25zb2xlLndhcm4od2FybmluZyk7XG59XG5cbnZhciBOdW1iZXJJc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBOdW1iZXJJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIEV2ZW50RW1pdHRlci5pbml0LmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHNDb3VudCA9IDA7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbnZhciBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudEVtaXR0ZXIsICdkZWZhdWx0TWF4TGlzdGVuZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkZWZhdWx0TWF4TGlzdGVuZXJzO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnbnVtYmVyJyB8fCBhcmcgPCAwIHx8IE51bWJlcklzTmFOKGFyZykpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJkZWZhdWx0TWF4TGlzdGVuZXJzXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIGFyZyArICcuJyk7XG4gICAgfVxuICAgIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSBhcmc7XG4gIH1cbn0pO1xuXG5FdmVudEVtaXR0ZXIuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gIGlmICh0aGlzLl9ldmVudHMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5fZXZlbnRzID09PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuX2V2ZW50cykge1xuICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn07XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIHNldE1heExpc3RlbmVycyhuKSB7XG4gIGlmICh0eXBlb2YgbiAhPT0gJ251bWJlcicgfHwgbiA8IDAgfHwgTnVtYmVySXNOYU4obikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiblwiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBuICsgJy4nKTtcbiAgfVxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uICRnZXRNYXhMaXN0ZW5lcnModGhhdCkge1xuICBpZiAodGhhdC5fbWF4TGlzdGVuZXJzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICByZXR1cm4gdGhhdC5fbWF4TGlzdGVuZXJzO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmdldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIGdldE1heExpc3RlbmVycygpIHtcbiAgcmV0dXJuICRnZXRNYXhMaXN0ZW5lcnModGhpcyk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KHR5cGUpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICB2YXIgZG9FcnJvciA9ICh0eXBlID09PSAnZXJyb3InKTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpXG4gICAgZG9FcnJvciA9IChkb0Vycm9yICYmIGV2ZW50cy5lcnJvciA9PT0gdW5kZWZpbmVkKTtcbiAgZWxzZSBpZiAoIWRvRXJyb3IpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKGRvRXJyb3IpIHtcbiAgICB2YXIgZXI7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMClcbiAgICAgIGVyID0gYXJnc1swXTtcbiAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgLy8gTm90ZTogVGhlIGNvbW1lbnRzIG9uIHRoZSBgdGhyb3dgIGxpbmVzIGFyZSBpbnRlbnRpb25hbCwgdGhleSBzaG93XG4gICAgICAvLyB1cCBpbiBOb2RlJ3Mgb3V0cHV0IGlmIHRoaXMgcmVzdWx0cyBpbiBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgfVxuICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmhhbmRsZWQgZXJyb3IuJyArIChlciA/ICcgKCcgKyBlci5tZXNzYWdlICsgJyknIDogJycpKTtcbiAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgIHRocm93IGVycjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgfVxuXG4gIHZhciBoYW5kbGVyID0gZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFJlZmxlY3RBcHBseShoYW5kbGVyLCB0aGlzLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgdmFyIGxpc3RlbmVycyA9IGFycmF5Q2xvbmUoaGFuZGxlciwgbGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKVxuICAgICAgUmVmbGVjdEFwcGx5KGxpc3RlbmVyc1tpXSwgdGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmZ1bmN0aW9uIF9hZGRMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwcmVwZW5kKSB7XG4gIHZhciBtO1xuICB2YXIgZXZlbnRzO1xuICB2YXIgZXhpc3Rpbmc7XG5cbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICB9XG5cbiAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0YXJnZXQuX2V2ZW50c0NvdW50ID0gMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAgIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgICBpZiAoZXZlbnRzLm5ld0xpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldC5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA/IGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gICAgICAvLyBSZS1hc3NpZ24gYGV2ZW50c2AgYmVjYXVzZSBhIG5ld0xpc3RlbmVyIGhhbmRsZXIgY291bGQgaGF2ZSBjYXVzZWQgdGhlXG4gICAgICAvLyB0aGlzLl9ldmVudHMgdG8gYmUgYXNzaWduZWQgdG8gYSBuZXcgb2JqZWN0XG4gICAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgICB9XG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV07XG4gIH1cblxuICBpZiAoZXhpc3RpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gICAgKyt0YXJnZXQuX2V2ZW50c0NvdW50O1xuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgZXhpc3RpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPVxuICAgICAgICBwcmVwZW5kID8gW2xpc3RlbmVyLCBleGlzdGluZ10gOiBbZXhpc3RpbmcsIGxpc3RlbmVyXTtcbiAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB9IGVsc2UgaWYgKHByZXBlbmQpIHtcbiAgICAgIGV4aXN0aW5nLnVuc2hpZnQobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleGlzdGluZy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICAgIG0gPSAkZ2V0TWF4TGlzdGVuZXJzKHRhcmdldCk7XG4gICAgaWYgKG0gPiAwICYmIGV4aXN0aW5nLmxlbmd0aCA+IG0gJiYgIWV4aXN0aW5nLndhcm5lZCkge1xuICAgICAgZXhpc3Rpbmcud2FybmVkID0gdHJ1ZTtcbiAgICAgIC8vIE5vIGVycm9yIGNvZGUgZm9yIHRoaXMgc2luY2UgaXQgaXMgYSBXYXJuaW5nXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIHZhciB3ID0gbmV3IEVycm9yKCdQb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5IGxlYWsgZGV0ZWN0ZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5sZW5ndGggKyAnICcgKyBTdHJpbmcodHlwZSkgKyAnIGxpc3RlbmVycyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FkZGVkLiBVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2luY3JlYXNlIGxpbWl0Jyk7XG4gICAgICB3Lm5hbWUgPSAnTWF4TGlzdGVuZXJzRXhjZWVkZWRXYXJuaW5nJztcbiAgICAgIHcuZW1pdHRlciA9IHRhcmdldDtcbiAgICAgIHcudHlwZSA9IHR5cGU7XG4gICAgICB3LmNvdW50ID0gZXhpc3RpbmcubGVuZ3RoO1xuICAgICAgUHJvY2Vzc0VtaXRXYXJuaW5nKHcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfTtcblxuZnVuY3Rpb24gb25jZVdyYXBwZXIoKSB7XG4gIHZhciBhcmdzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgaWYgKCF0aGlzLmZpcmVkKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlTGlzdGVuZXIodGhpcy50eXBlLCB0aGlzLndyYXBGbik7XG4gICAgdGhpcy5maXJlZCA9IHRydWU7XG4gICAgUmVmbGVjdEFwcGx5KHRoaXMubGlzdGVuZXIsIHRoaXMudGFyZ2V0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb25jZVdyYXAodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgc3RhdGUgPSB7IGZpcmVkOiBmYWxzZSwgd3JhcEZuOiB1bmRlZmluZWQsIHRhcmdldDogdGFyZ2V0LCB0eXBlOiB0eXBlLCBsaXN0ZW5lcjogbGlzdGVuZXIgfTtcbiAgdmFyIHdyYXBwZWQgPSBvbmNlV3JhcHBlci5iaW5kKHN0YXRlKTtcbiAgd3JhcHBlZC5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICBzdGF0ZS53cmFwRm4gPSB3cmFwcGVkO1xuICByZXR1cm4gd3JhcHBlZDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSh0eXBlLCBsaXN0ZW5lcikge1xuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cbiAgdGhpcy5vbih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRPbmNlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRPbmNlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICB0aGlzLnByZXBlbmRMaXN0ZW5lcih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbi8vIEVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZiBhbmQgb25seSBpZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgdmFyIGxpc3QsIGV2ZW50cywgcG9zaXRpb24sIGksIG9yaWdpbmFsTGlzdGVuZXI7XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGxpc3QgPSBldmVudHNbdHlwZV07XG4gICAgICBpZiAobGlzdCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8IGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0Lmxpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwb3NpdGlvbiA9IC0xO1xuXG4gICAgICAgIGZvciAoaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHwgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsTGlzdGVuZXIgPSBsaXN0W2ldLmxpc3RlbmVyO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICBpZiAocG9zaXRpb24gPT09IDApXG4gICAgICAgICAgbGlzdC5zaGlmdCgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzcGxpY2VPbmUobGlzdCwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKVxuICAgICAgICAgIGV2ZW50c1t0eXBlXSA9IGxpc3RbMF07XG5cbiAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBvcmlnaW5hbExpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKHR5cGUpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMsIGV2ZW50cywgaTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRzW3R5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV2ZW50cyk7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBsaXN0ZW5lcnMgPSBldmVudHNbdHlwZV07XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gTElGTyBvcmRlclxuICAgICAgICBmb3IgKGkgPSBsaXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuZnVuY3Rpb24gX2xpc3RlbmVycyh0YXJnZXQsIHR5cGUsIHVud3JhcCkge1xuICB2YXIgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcbiAgaWYgKGV2bGlzdGVuZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKVxuICAgIHJldHVybiB1bndyYXAgPyBbZXZsaXN0ZW5lci5saXN0ZW5lciB8fCBldmxpc3RlbmVyXSA6IFtldmxpc3RlbmVyXTtcblxuICByZXR1cm4gdW53cmFwID9cbiAgICB1bndyYXBMaXN0ZW5lcnMoZXZsaXN0ZW5lcikgOiBhcnJheUNsb25lKGV2bGlzdGVuZXIsIGV2bGlzdGVuZXIubGVuZ3RoKTtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCB0cnVlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmF3TGlzdGVuZXJzID0gZnVuY3Rpb24gcmF3TGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5saXN0ZW5lckNvdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGlzdGVuZXJDb3VudC5jYWxsKGVtaXR0ZXIsIHR5cGUpO1xuICB9XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBsaXN0ZW5lckNvdW50O1xuZnVuY3Rpb24gbGlzdGVuZXJDb3VudCh0eXBlKSB7XG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG5cbiAgICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoZXZsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDA7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHJldHVybiB0aGlzLl9ldmVudHNDb3VudCA+IDAgPyBSZWZsZWN0T3duS2V5cyh0aGlzLl9ldmVudHMpIDogW107XG59O1xuXG5mdW5jdGlvbiBhcnJheUNsb25lKGFyciwgbikge1xuICB2YXIgY29weSA9IG5ldyBBcnJheShuKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpXG4gICAgY29weVtpXSA9IGFycltpXTtcbiAgcmV0dXJuIGNvcHk7XG59XG5cbmZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKDsgaW5kZXggKyAxIDwgbGlzdC5sZW5ndGg7IGluZGV4KyspXG4gICAgbGlzdFtpbmRleF0gPSBsaXN0W2luZGV4ICsgMV07XG4gIGxpc3QucG9wKCk7XG59XG5cbmZ1bmN0aW9uIHVud3JhcExpc3RlbmVycyhhcnIpIHtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyArK2kpIHtcbiAgICByZXRbaV0gPSBhcnJbaV0ubGlzdGVuZXIgfHwgYXJyW2ldO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iXSwic291cmNlUm9vdCI6IiJ9