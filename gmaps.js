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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HTWFwcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9HTWFwcy8uL2xpYi9jb250cm9scy5qcyIsIndlYnBhY2s6Ly9HTWFwcy8uL2xpYi9jb3JlLmpzIiwid2VicGFjazovL0dNYXBzLy4vbGliL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9HTWFwcy8uL2xpYi9nZW9mZW5jZXMuanMiLCJ3ZWJwYWNrOi8vR01hcHMvLi9saWIvZ2VvbWV0cnkuanMiLCJ3ZWJwYWNrOi8vR01hcHMvLi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vR01hcHMvLi9saWIvbGF5ZXJzLmpzIiwid2VicGFjazovL0dNYXBzLy4vbGliL21hcF90eXBlcy5qcyIsIndlYnBhY2s6Ly9HTWFwcy8uL2xpYi9tYXJrZXJzLmpzIiwid2VicGFjazovL0dNYXBzLy4vbGliL292ZXJsYXlzLmpzIiwid2VicGFjazovL0dNYXBzLy4vbGliL3BvbHlmaWxscy5qcyIsIndlYnBhY2s6Ly9HTWFwcy8uL2xpYi9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vR01hcHMvLi9saWIvc3RhdGljLmpzIiwid2VicGFjazovL0dNYXBzLy4vbGliL3N0cmVldHZpZXcuanMiLCJ3ZWJwYWNrOi8vR01hcHMvLi9saWIvc3R5bGVzLmpzIiwid2VicGFjazovL0dNYXBzLy4vbGliL3V0aWxzLmpzIiwid2VicGFjazovL0dNYXBzLy4vbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vR01hcHMvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRyb2wiLCJzdHlsZSIsImlkIiwidGl0bGUiLCJjbGFzc2VzIiwiY29udGVudCIsInBvc2l0aW9uIiwiZXZlbnRzIiwiZGlzYWJsZURlZmF1bHRTdHlsZXMiLCJjb250cm9sIiwiZ2xvYmFsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY3Vyc29yIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiYm94U2hhZG93IiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJwcm9wZXJ0eSIsImNsYXNzTmFtZSIsImlubmVySFRNTCIsIkhUTUxFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJnb29nbGUiLCJtYXBzIiwiQ29udHJvbFBvc2l0aW9uIiwidG9VcHBlckNhc2UiLCJldmVudE5hbWUiLCJldmVudCIsImFkZERvbUxpc3RlbmVyIiwiY2FsbCIsImluZGV4IiwiR01hcHMiLCJwcm90b3R5cGUiLCJhZGRDb250cm9sIiwib3B0aW9ucyIsImNvbnRyb2xzIiwicHVzaCIsIm1hcCIsInJlbW92ZUNvbnRyb2wiLCJjb250cm9sSW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiY29udHJvbHNGb3JQb3NpdGlvbiIsImNvbnRyb2xJbmRleEluQ29sbGVjdGlvbiIsInJlbW92ZUF0IiwibGF0TG5nRnJvbUFyZ3VtZW50cyIsImFyZ3MiLCJMYXRMbmciLCJmbGF0dGVuQXJyYXkiLCJhcnJheSIsInJlZHVjZSIsImNvbGxlY3Rpb24iLCJpdGVtIiwiY29uY2F0IiwiY29vcmRzVG9MYXRMbmdzIiwiY29vcmRpbmF0ZXMiLCJ1c2VHZW9KU09OIiwiZmlyc3RDb29yZGluYXRlIiwic2Vjb25kQ29vcmRpbmF0ZSIsImFycmF5VG9MYXRMbmciLCJjb29yZGluYXRlIiwibGVuZ3RoIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNvbnRleHQiLCJzYW5pdGl6ZWRDbGFzc05hbWUiLCJyZXBsYWNlIiwiJCIsImdldEVsZW1lbnRCeUlkIiwic2FuaXRpemVkSWQiLCJlbGVtZW50cyIsImdldEVsZW1lbnQiLCJzZWxlY3Rvck9yRWxlbWVudCIsIm1hdGNoIiwiZmluZEFic29sdXRlUG9zaXRpb24iLCJlbGVtZW50IiwibGVmdCIsInRvcCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJlY3RhbmdsZSIsIngiLCJ3aW5kb3ciLCJzY3JvbGxYIiwicGFnZVhPZmZzZXQiLCJ5Iiwic2Nyb2xsWSIsInBhZ2VZT2Zmc2V0Iiwib2Zmc2V0UGFyZW50IiwiaXRlcmF0b3IiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0VG9wIiwic2V0dXBFdmVudExpc3RlbmVyIiwib2JqZWN0IiwiaW5zdGFuY2UiLCJoYW5kbGVyIiwiYWRkTGlzdGVuZXIiLCJoaWRlQ29udGV4dE1lbnUiLCJzZXR1cEV2ZW50cyIsImhhbmRsZXJzIiwiTUFQX0VWRU5UUyIsIkdNQVBTX01FTlVfSUQiLCJiYXNlT3B0aW9ucyIsIkVycm9yIiwiZWwiLCJkaXYiLCJsYXQiLCJsYXRpdHVkZSIsImxuZyIsImxvbmdpdHVkZSIsImNlbnRlciIsInpvb20iLCJtYXBUeXBlIiwiem9vbUNvbnRyb2xPcHQiLCJwYW5Db250cm9sIiwiem9vbUNvbnRyb2wiLCJtYXBUeXBlQ29udHJvbCIsInNjYWxlQ29udHJvbCIsInN0cmVldFZpZXdDb250cm9sIiwib3ZlcnZpZXdNYXBDb250cm9sIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJrZXJDbHVzdGVyZXIiLCJlbmFibGVOZXdTdHlsZSIsIm1hcFR5cGVJZCIsIk1hcFR5cGVJZCIsIm1hcEJhc2VPcHRpb25zIiwibWFwQ29udHJvbHNPcHRpb25zIiwiem9vbUNvbnRyb2xPcHRpb25zIiwiWm9vbUNvbnRyb2xTdHlsZSIsImZpbHRlcmVkT3B0aW9ucyIsImhhc2giLCJrZXkiLCJpbmNsdWRlcyIsIk1hdGgiLCJjZWlsIiwicmFuZG9tIiwiRGF0ZSIsIm5vdyIsImNvbnRleHRNZW51cyIsInZpc3VhbFJlZnJlc2giLCJzY3JvbGxXaWR0aCIsIm9mZnNldFdpZHRoIiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwibWFwT3B0aW9ucyIsIk1hcCIsIm92ZXJsYXlzIiwibGF5ZXJzIiwic2luZ2xlTGF5ZXJzIiwibWFya2VycyIsInBvbHlsaW5lcyIsInJvdXRlcyIsInBvbHlnb25zIiwiaW5mb1dpbmRvdyIsIm92ZXJsYXlFbGVtZW50IiwicmVnaXN0ZXJlZEV2ZW50cyIsImFwcGx5IiwicmlnaHRjbGljayIsImJ1aWxkQ29udGV4dE1lbnUiLCJjb250ZXh0TWVudUVsZW1lbnQiLCJodG1sIiwiam9pbiIsImNvbnRleHRNZW51SXRlbXMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNvbnRleHRNZW51SXRlbSIsImNvbnRleHRNZW51SXRlbUxpc3RlbmVyIiwiY29udGV4dE1lbnVJdGVtTGlzdGVuZXJFdmVudCIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiYWN0aW9uIiwiY2xlYXJMaXN0ZW5lcnMiLCJhZGREb21MaXN0ZW5lck9uY2UiLCJwaXhlbCIsIm92ZXJsYXkiLCJPdmVybGF5VmlldyIsInNldE1hcCIsImRyYXciLCJwcm9qZWN0aW9uIiwiZ2V0UHJvamVjdGlvbiIsIm1hcmtlciIsImdldFBvc2l0aW9uIiwiZnJvbUxhdExuZ1RvQ29udGFpbmVyUGl4ZWwiLCJidWlsZENvbnRleHRNZW51SFRNTCIsInNldFRpbWVvdXQiLCJkaXNwbGF5Iiwib3B0aW9uIiwibmFtZSIsIm1pbldpZHRoIiwiYmFja2dyb3VuZCIsImxpc3RTdHlsZSIsInBhZGRpbmciLCJib2R5IiwicmVsYXRlZFRhcmdldCIsImNvbnRhaW5zIiwidHJpZ2dlciIsImxhdExuZ3MiLCJib3VuZHMiLCJMYXRMbmdCb3VuZHMiLCJsYXRMbmciLCJleHRlbmQiLCJmaXRCb3VuZHMiLCJmaWx0ZXIiLCJ2aXNpYmxlIiwiZml0TGF0TG5nQm91bmRzIiwiY2FsbGJhY2siLCJwb3AiLCJwYW5UbyIsIm1hZ25pdHVkZSIsImdldFpvb20iLCJzZXRab29tIiwiZ29vZ2xlTWFwc01hcE1ldGhvZHMiLCJtZXRob2ROYW1lIiwiY3VzdG9tRXZlbnRzIiwib24iLCJyZWdpc3RlcmVkRXZlbnQiLCJvZmYiLCJvbmNlIiwiYWRkTGlzdGVuZXJPbmNlIiwidW5kZWZpbmVkIiwiZmlyZSIsImV2ZW50QXJndW1lbnRzIiwiQXJyYXkiLCJzbGljZSIsImFyZ3VtZW50cyIsImNoZWNrR2VvZmVuY2UiLCJsYWdMbmciLCJmZW5jZSIsImNvbnRhaW5zTGF0TG5nIiwiY2hlY2tNYXJrZXJHZW9mZW5jZSIsIm91dHNpZGVDYWxsYmFjayIsImZlbmNlcyIsIkVWRU5UUyIsImRyYXdQb2x5bGluZSIsImljb25zIiwic3Ryb2tlQ29sb3IiLCJzdHJva2VPcGFjaXR5Iiwic3Ryb2tlV2VpZ2h0IiwiZ2VvZGVzaWMiLCJjbGlja2FibGUiLCJlZGl0YWJsZSIsInpJbmRleCIsInBhdGgiLCJwb2x5bGluZU9wdGlvbnMiLCJwb2x5bGluZSIsIlBvbHlsaW5lIiwicmVtb3ZlUG9seWxpbmUiLCJwb2x5bGluZUluZGV4IiwicmVtb3ZlUG9seWxpbmVzIiwiZHJhd0NpcmNsZSIsInBvbHlnb25PcHRpb25zIiwicG9seWdvbiIsIkNpcmNsZSIsImRyYXdSZWN0YW5nbGUiLCJsYXRMbmdCb3VuZHMiLCJSZWN0YW5nbGUiLCJkcmF3UG9seWdvbiIsImJhc2VQYXRocyIsInBhdGhzIiwiUG9seWdvbiIsInJlbW92ZVBvbHlnb24iLCJwb2x5Z29uSW5kZXgiLCJyZW1vdmVQb2x5Z29ucyIsImdldEZyb21GdXNpb25UYWJsZXMiLCJsYXllciIsIkZ1c2lvblRhYmxlc0xheWVyIiwibG9hZEZyb21GdXNpb25UYWJsZXMiLCJnZXRGcm9tS01MIiwidXJsIiwiS21sTGF5ZXIiLCJsb2FkRnJvbUtNTCIsImFkZExheWVyIiwibGF5ZXJOYW1lIiwiY2xpY2siLCJzZWFyY2giLCJuZWFyYnlTZWFyY2giLCJyYWRhclNlYXJjaCIsInRleHRTZWFyY2giLCJrZXl3b3JkIiwibG9jYXRpb24iLCJyYWRpdXMiLCJyYW5rQnkiLCJ0eXBlcyIsInF1ZXJ5IiwiVHJhZmZpY0xheWVyIiwidHJhZmZpYyIsIlRyYW5zaXRMYXllciIsInRyYW5zaXQiLCJCaWN5Y2xpbmdMYXllciIsImJpY3ljbGluZyIsInBsYWNlcyIsIlBsYWNlc1NlcnZpY2UiLCJwbGFjZVNlYXJjaFJlcXVlc3QiLCJ0ZXh0U2VhcmNoUmVxdWVzdCIsInNldE9wdGlvbnMiLCJyZW1vdmVMYXllciIsImxheWVySW5kZXgiLCJhZGRNYXBUeXBlIiwiZ2V0VGlsZVVybCIsInRpbGVTaXplIiwiU2l6ZSIsIkltYWdlTWFwVHlwZSIsIm1hcFR5cGVzIiwic2V0IiwiYWRkT3ZlcmxheU1hcFR5cGUiLCJnZXRUaWxlIiwib3ZlcmxheU1hcFR5cGVzIiwib3ZlcmxheU1hcFR5cGVPcHRpb25zIiwiaW5zZXJ0QXQiLCJyZW1vdmVPdmVybGF5TWFwVHlwZSIsIm92ZXJsYXlNYXBUeXBlIiwiSU5GT19XSU5ET1dfRVZFTlRTIiwiTUFSS0VSX0VWRU5UUyIsIk1BUktFUl9NT1VTRV9FVkVOVFMiLCJjcmVhdGVNYXJrZXIiLCJzZWxmIiwiZGV0YWlscyIsIm91dHNpZGUiLCJtYXJrZXJPcHRpb25zIiwiTWFya2VyIiwiSW5mb1dpbmRvdyIsImZyb21MYXRMbmdUb1BvaW50Iiwib25NYXJrZXJDbGljayIsImhpZGVJbmZvV2luZG93cyIsIm9wZW4iLCJvbk1hcmtlclJpZ2h0Q2xpY2siLCJvbk1hcmtlckRyYWdFbmQiLCJhZGRNYXJrZXIiLCJnbV9hY2Nlc3NvcnNfIiwiYWRkTWFya2VycyIsImNsb3NlIiwicmVtb3ZlTWFya2VyIiwiZmlyZUV2ZW50IiwibWFya2VySW5kZXgiLCJyZW1vdmVNYXJrZXJzIiwiU1RPUF9QUk9QQUdBVElPTl9FVkVOVFMiLCJkcmF3T3ZlcmxheSIsImF1dG9TaG93IiwiaG9yaXpvbnRhbE9mZnNldCIsInZlcnRpY2FsT2Zmc2V0IiwidmVydGljYWxBbGlnbiIsImhvcml6b250YWxBbGlnbiIsIm9uQWRkIiwiYm9yZGVyU3R5bGUiLCJib3JkZXJXaWR0aCIsInBhbmVzIiwiZ2V0UGFuZXMiLCJvdmVybGF5TGF5ZXIiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsImFsbCIsImNhbmNlbEJ1YmJsZSIsInJldHVyblZhbHVlIiwic3RvcFByb3BhZ2F0aW9uIiwib3ZlcmxheU1vdXNlVGFyZ2V0IiwiZnJvbUxhdExuZ1RvRGl2UGl4ZWwiLCJjaGlsZHJlbiIsImNvbnRlbnRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJjb250ZW50V2lkdGgiLCJjbGllbnRXaWR0aCIsInNob3ciLCJvblJlbW92ZSIsInJlbW92ZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInJlbW92ZU92ZXJsYXkiLCJvdmVybGF5SW5kZXgiLCJyZW1vdmVPdmVybGF5cyIsImdldEJvdW5kcyIsImdldFBhdGhzIiwicCIsImdldExlbmd0aCIsImdldEF0IiwiaSIsImluUG9seSIsIm51bVBhdGhzIiwibnVtUG9pbnRzIiwiaiIsInZlcnRleDEiLCJ2ZXJ0ZXgyIiwiZ2VvbWV0cnkiLCJzcGhlcmljYWwiLCJjb21wdXRlRGlzdGFuY2VCZXR3ZWVuIiwiZ2V0Q2VudGVyIiwiZ2V0UmFkaXVzIiwic2V0RmVuY2VzIiwiYWRkRmVuY2UiLCJnZXRJZCIsInNlYXJjaEVsZW1lbnQiLCJUeXBlRXJyb3IiLCJ0IiwibGVuIiwibiIsIk51bWJlciIsIkluZmluaXR5IiwiZmxvb3IiLCJhYnMiLCJrIiwibWF4IiwiZ2V0Um91dGVzIiwib3JpZ2luIiwiZGVzdGluYXRpb24iLCJ0cmF2ZWxNb2RlIiwidW5pdFN5c3RlbSIsImF2b2lkSGlnaHdheXMiLCJhdm9pZFRvbGxzIiwib3B0aW1pemVXYXlwb2ludHMiLCJ3YXlwb2ludHMiLCJlcnJvciIsInRyYXZlbE1vZGVJZCIsIlRyYXZlbE1vZGUiLCJ1bml0U3lzdGVtSWQiLCJyZXF1ZXN0T3B0aW9ucyIsInNlcnZpY2UiLCJEaXJlY3Rpb25zU2VydmljZSIsInJvdXRlIiwicmVzdWx0Iiwic3RhdHVzIiwiRGlyZWN0aW9uc1N0YXR1cyIsIk9LIiwicmVtb3ZlUm91dGVzIiwiZ2V0RWxldmF0aW9ucyIsInNhbXBsZXMiLCJsb2NhdGlvbnMiLCJFbGV2YXRpb25TZXJ2aWNlIiwiZ2V0RWxldmF0aW9uRm9yTG9jYXRpb25zIiwiZ2V0RWxldmF0aW9uQWxvbmdQYXRoIiwiY2xlYW5Sb3V0ZSIsInJlbmRlclJvdXRlIiwiYmFzZVJlbmRlck9wdGlvbnMiLCJwYW5lbCIsInJlbmRlck9wdGlvbnMiLCJEaXJlY3Rpb25zUmVuZGVyZXIiLCJfIiwicmVzcG9uc2UiLCJzZXREaXJlY3Rpb25zIiwiZHJhd1JvdXRlIiwibGFzdFJvdXRlIiwib3ZlcnZpZXdfcGF0aCIsInRyYXZlbFJvdXRlIiwic3RhcnQiLCJzdGVwIiwibGVncyIsInN0ZXBzIiwic3RlcF9udW1iZXIiLCJzdGVwTnVtYmVyIiwiZW5kIiwiZHJhd1N0ZXBwZWRSb3V0ZSIsInJvdXRlU3RlcCIsInN0ZXBzQ291bnQiLCJSb3V0ZSIsInN0ZXBfY291bnQiLCJzdGVwc19sZW5ndGgiLCJNVkNBcnJheSIsImdldFBhdGgiLCJwYXJzZUNvbG9yIiwiY29sb3IiLCJvcGFjaXR5IiwicGFyc2VkQ29sb3IiLCJtaW4iLCJwYXJzZUZsb2F0IiwidG9TdHJpbmciLCJ0b0ltYWdlIiwic2l6ZSIsInN0YXRpY01hcE9wdGlvbnMiLCJlbmNvZGluZyIsImVuY29kZVBhdGgiLCJzdGF0aWNNYXBVUkwiLCJidWlsZE1hcmtlclBhcmFtZXRlcnMiLCJtYXJrZXJQYXJhbWV0ZXJzIiwiYWRkcmVzcyIsImljb24iLCJsYWJlbCIsImVuY29kZVVSSSIsImJ1aWxkUGF0aFBhcmFtZXRlcnMiLCJwb2x5bGluZVBhcmFtZXRlcnMiLCJwYXJzZUludCIsImZpbGxDb2xvciIsImZpbGxPcGFjaXR5IiwiYnVpbGRTdHlsZVBhcmFtZXRlcnMiLCJzdHlsZVBhcmFtZXRlcnMiLCJmZWF0dXJlVHlwZSIsImVsZW1lbnRUeXBlIiwic3R5bGVycyIsInN0eWxlciIsInZhbHVlIiwic3R5bGVzIiwiZGVmYXVsdFJvb3QiLCJwcm90b2NvbCIsInJvb3QiLCJwYXJhbWV0ZXJzIiwiZHBpIiwiZGV2aWNlUGl4ZWxSYXRpbyIsIlNUUkVFVFZJRVdfRVZFTlRTIiwiY3JlYXRlUGFub3JhbWEiLCJzdHJlZXRWaWV3T3B0aW9ucyIsInBhbm9yYW1hIiwic2V0U3RyZWV0VmlldyIsImNvbnRhaW5lckVsZW1lbnQiLCJTdHJlZXRWaWV3UGFub3JhbWEiLCJhZGRTdHlsZSIsInN0eWxlZE1hcFR5cGUiLCJTdHlsZWRNYXBUeXBlIiwic3R5bGVkTWFwTmFtZSIsInNldFN0eWxlIiwic2V0TWFwVHlwZUlkIiwiZ2VvbG9jYXRlIiwiY29tcGxldGVDYWxsYmFjayIsImFsd2F5cyIsImNvbXBsZXRlIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJzdWNjZXNzIiwibm90X3N1cHBvcnRlZCIsImdlb2NvZGUiLCJnZW9jb2RlciIsIkdlb2NvZGVyIiwiZ2VvY29kZU9wdGlvbnMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUVBOzs7OztBQUtBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBK0Y7QUFBQSx3QkFBNUZDLEtBQTRGO0FBQUEsTUFBNUZBLEtBQTRGLDJCQUFwRixFQUFvRjtBQUFBLE1BQWhGQyxFQUFnRixRQUFoRkEsRUFBZ0Y7QUFBQSxNQUE1RUMsS0FBNEUsUUFBNUVBLEtBQTRFO0FBQUEsTUFBckVDLE9BQXFF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QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSx5QkFBeUI7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMvYkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDIiwiZmlsZSI6ImdtYXBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9saWIvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgR01hcHMgZnJvbSAnLi9jb3JlJztcblxuLyoqXG4gKiBFeHRlbmRzIEdNYXBzIHRvIHVzZSBVSSBjb250cm9scy5cbiAqIEBtb2R1bGUgQ29udHJvbHNcbiAqL1xuXG5jb25zdCBjcmVhdGVDb250cm9sID0gKHsgc3R5bGUgPSB7fSwgaWQsIHRpdGxlLCBjbGFzc2VzLCBjb250ZW50LCBwb3NpdGlvbiwgZXZlbnRzID0ge30sIGRpc2FibGVEZWZhdWx0U3R5bGVzLCB9KSA9PiB7XG4gIGNvbnN0IGNvbnRyb2wgPSBnbG9iYWwuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgY29udHJvbC5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG5cbiAgaWYgKGRpc2FibGVEZWZhdWx0U3R5bGVzICE9PSB0cnVlKSB7XG4gICAgY29udHJvbC5zdHlsZS5mb250RmFtaWx5ID0gJ1JvYm90bywgQXJpYWwsIHNhbnMtc2VyaWYnO1xuICAgIGNvbnRyb2wuc3R5bGUuZm9udFNpemUgPSAnMTFweCc7XG4gICAgY29udHJvbC5zdHlsZS5ib3hTaGFkb3cgPSAncmdiYSgwLCAwLCAwLCAwLjI5ODAzOSkgMHB4IDFweCA0cHggLTFweCc7XG4gIH1cblxuICBPYmplY3Qua2V5cyhzdHlsZSkuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgICBjb250cm9sLnN0eWxlID0gc3R5bGVbcHJvcGVydHldO1xuICB9KTtcblxuICBpZiAoaWQpIHtcbiAgICBjb250cm9sLmlkID0gaWQ7XG4gIH1cblxuICBpZiAodGl0bGUpIHtcbiAgICBjb250cm9sLnRpdGxlID0gdGl0bGU7XG4gIH1cblxuICBpZiAoY2xhc3Nlcykge1xuICAgIGNvbnRyb2wuY2xhc3NOYW1lID0gY2xhc3NlcztcbiAgfVxuXG4gIGlmIChjb250ZW50KSB7XG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udHJvbC5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgIH0gZWxzZSBpZiAoY29udGVudCBpbnN0YW5jZW9mIGdsb2JhbC5IVE1MRWxlbWVudCkge1xuICAgICAgY29udHJvbC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICB9XG4gIH1cblxuICBpZiAocG9zaXRpb24pIHtcbiAgICBjb250cm9sLnBvc2l0aW9uID0gZ29vZ2xlLm1hcHMuQ29udHJvbFBvc2l0aW9uW3Bvc2l0aW9uLnRvVXBwZXJDYXNlKCldO1xuICB9XG5cbiAgT2JqZWN0LmtleXMoZXZlbnRzKS5mb3JFYWNoKGV2ZW50TmFtZSA9PlxuICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyKGNvbnRyb2wsIGV2ZW50TmFtZSwgZXZlbnQgPT5cbiAgICAgIGV2ZW50c1tldmVudE5hbWVdLmNhbGwodGhpcywgZXZlbnQpXG4gICAgKVxuICApO1xuXG4gIGNvbnRyb2wuaW5kZXggPSAxO1xuXG4gIHJldHVybiBjb250cm9sO1xufTtcblxuLyoqXG4gKiBBZGQgYSBjdXN0b20gY29udHJvbCB0byB0aGUgbWFwIFVJLlxuICogQGZ1bmN0aW9uIGFkZENvbnRyb2xcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRoZSBgb3B0aW9uc2Agb2JqZWN0IHNob3VsZCBjb250YWluOlxuICogKiBgc3R5bGVgIChvYmplY3QpOiBUaGUga2V5cyBhbmQgdmFsdWVzIG9mIHRoaXMgb2JqZWN0IHNob3VsZCBiZSB2YWxpZCBDU1MgcHJvcGVydGllcyBhbmQgdmFsdWVzLlxuICogKiBgaWRgIChzdHJpbmcpOiBUaGUgSFRNTCBpZCBmb3IgdGhlIGN1c3RvbSBjb250cm9sLlxuICogKiBgY2xhc3Nlc2AgKHN0cmluZyk6IEEgc3RyaW5nIGNvbnRhaW5pbmcgYWxsIHRoZSBIVE1MIGNsYXNzZXMgZm9yIHRoZSBjdXN0b20gY29udHJvbC5cbiAqICogYGNvbnRlbnRgIChzdHJpbmcgb3IgSFRNTCBlbGVtZW50KTogVGhlIGNvbnRlbnQgb2YgdGhlIGN1c3RvbSBjb250cm9sLlxuICogKiBgcG9zaXRpb25gIChzdHJpbmcpOiBBbnkgdmFsaWQgW2Bnb29nbGUubWFwcy5Db250cm9sUG9zaXRpb25gXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9jb250cm9scyNDb250cm9sUG9zaXRpb25pbmcpIHZhbHVlLCBpbiBsb3dlciBvciB1cHBlciBjYXNlLlxuICogKiBgZXZlbnRzYCAob2JqZWN0KTogVGhlIGtleXMgb2YgdGhpcyBvYmplY3Qgc2hvdWxkIGJlIHZhbGlkIERPTSBldmVudHMuIFRoZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bmN0aW9ucy5cbiAqICogYGRpc2FibGVEZWZhdWx0U3R5bGVzYCAoYm9vbGVhbik6IElmIGZhbHNlLCByZW1vdmVzIHRoZSBkZWZhdWx0IHN0eWxlcyBmb3IgdGhlIGNvbnRyb2xzIGxpa2UgZm9udCAoZmFtaWx5IGFuZCBzaXplKSwgYW5kIGJveCBzaGFkb3cuXG4gKlxuICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICovXG5HTWFwcy5wcm90b3R5cGUuYWRkQ29udHJvbCA9IGZ1bmN0aW9uIGFkZENvbnRyb2wob3B0aW9ucykge1xuICBjb25zdCBjb250cm9sID0gY3JlYXRlQ29udHJvbChvcHRpb25zKTtcblxuICB0aGlzLmNvbnRyb2xzLnB1c2goY29udHJvbCk7XG4gIHRoaXMubWFwLmNvbnRyb2xzW2NvbnRyb2wucG9zaXRpb25dLnB1c2goY29udHJvbCk7XG5cbiAgcmV0dXJuIGNvbnRyb2w7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhIGNvbnRyb2wgZnJvbSB0aGUgbWFwLiBgY29udHJvbGAgc2hvdWxkIGJlIGEgY29udHJvbCByZXR1cm5lZCBieSBgYWRkQ29udHJvbCgpYC5cbiAqIEBmdW5jdGlvbiByZW1vdmVDb250cm9sXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udHJvbCAtIE9uZSBvZiB0aGUgY29udHJvbHMgcmV0dXJuZWQgYnkgYGFkZENvbnRyb2woKWAuXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IHRoZSByZW1vdmVkIGNvbnRyb2wuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5yZW1vdmVDb250cm9sID0gZnVuY3Rpb24gcmVtb3ZlQ29udHJvbChjb250cm9sKSB7XG4gIGNvbnN0IGNvbnRyb2xJbmRleCA9IHRoaXMuY29udHJvbHMuaW5kZXhPZihjb250cm9sKTtcblxuICB0aGlzLmNvbnRyb2xzLnNwbGljZShjb250cm9sSW5kZXgsIDEpO1xuXG4gIGlmIChjb250cm9sLnBvc2l0aW9uID49IDAgJiYgY29udHJvbEluZGV4ID49IDApIHtcbiAgICBjb25zdCBjb250cm9sc0ZvclBvc2l0aW9uID0gdGhpcy5tYXAuY29udHJvbHNbY29udHJvbC5wb3NpdGlvbl07XG4gICAgY29uc3QgY29udHJvbEluZGV4SW5Db2xsZWN0aW9uID0gY29udHJvbHNGb3JQb3NpdGlvbi5pbmRleE9mKGNvbnRyb2wpO1xuXG4gICAgY29udHJvbHNGb3JQb3NpdGlvbi5yZW1vdmVBdChjb250cm9sSW5kZXhJbkNvbGxlY3Rpb24pO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRyb2w7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHTWFwcztcbiIsImV4cG9ydCBjb25zdCBsYXRMbmdGcm9tQXJndW1lbnRzID0gKC4uLmFyZ3MpID0+IHtcbiAgaWYgKHR5cGVvZiBhcmdzWzBdWzFdID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgYXJnc1swXVsxXSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhhcmdzWzBdWzBdLCBhcmdzWzBdWzFdKTtcbiAgfVxuXG4gIHJldHVybiBhcmdzWzBdO1xufTtcblxuZXhwb3J0IGNvbnN0IGZsYXR0ZW5BcnJheSA9IGFycmF5ID0+XG4gIGFycmF5LnJlZHVjZSgoY29sbGVjdGlvbiwgaXRlbSkgPT4gY29sbGVjdGlvbi5jb25jYXQoaXRlbSksIFtdKTtcblxuZXhwb3J0IGNvbnN0IGNvb3Jkc1RvTGF0TG5ncyA9IChjb29yZGluYXRlcywgdXNlR2VvSlNPTikgPT4ge1xuICBjb25zdCBmaXJzdENvb3JkaW5hdGUgPSB1c2VHZW9KU09OID8gY29vcmRpbmF0ZXNbMV0gOiBjb29yZGluYXRlc1swXTtcbiAgY29uc3Qgc2Vjb25kQ29vcmRpbmF0ZSA9IHVzZUdlb0pTT04gPyBjb29yZGluYXRlc1swXSA6IGNvb3JkaW5hdGVzWzFdO1xuXG4gIHJldHVybiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGZpcnN0Q29vcmRpbmF0ZSwgc2Vjb25kQ29vcmRpbmF0ZSk7XG59O1xuXG5leHBvcnQgY29uc3QgYXJyYXlUb0xhdExuZyA9IChjb29yZGluYXRlcywgdXNlR2VvSlNPTikgPT5cbiAgY29vcmRpbmF0ZXMubWFwKChjb29yZGluYXRlKSA9PiB7XG4gICAgaWYgKCEoY29vcmRpbmF0ZSBpbnN0YW5jZW9mIGdvb2dsZS5tYXBzLkxhdExuZykpIHtcbiAgICAgIGlmIChjb29yZGluYXRlLmxlbmd0aCAmJiB0eXBlb2YgY29vcmRpbmF0ZVswXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5VG9MYXRMbmcoY29vcmRpbmF0ZSwgdXNlR2VvSlNPTik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb29yZHNUb0xhdExuZ3MoY29vcmRpbmF0ZSwgdXNlR2VvSlNPTik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvb3JkaW5hdGU7XG4gIH0pO1xuXG5jb25zdCBnZXRFbGVtZW50c0J5Q2xhc3NOYW1lID0gKGNsYXNzTmFtZSwgY29udGV4dCkgPT4ge1xuICBjb25zdCBzYW5pdGl6ZWRDbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZSgvXlxcLi8sICcnKTtcblxuICBpZiAodHlwZW9mIGdsb2JhbC4kID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuICQoYC4ke3Nhbml0aXplZENsYXNzTmFtZX1gLCBjb250ZXh0KVswXTtcbiAgfVxuXG4gIHJldHVybiBnbG9iYWwuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShzYW5pdGl6ZWRDbGFzc05hbWUpWzBdO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEVsZW1lbnRCeUlkID0gKGlkLCBjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHNhbml0aXplZElkID0gaWQucmVwbGFjZSgvXiMvLCAnJyk7XG5cbiAgaWYgKHR5cGVvZiBnbG9iYWwuJCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gJChgIyR7c2FuaXRpemVkSWR9YCwgY29udGV4dCkgfHwgW107XG5cbiAgICByZXR1cm4gZWxlbWVudHNbMF07XG4gIH1cblxuICByZXR1cm4gZ2xvYmFsLmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNhbml0aXplZElkKTtcbn07XG5cbmNvbnN0IGdldEVsZW1lbnQgPSAoc2VsZWN0b3JPckVsZW1lbnQsIGNvbnRleHQpID0+IHtcbiAgaWYgKHR5cGVvZiBzZWxlY3Rvck9yRWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gc2VsZWN0b3JPckVsZW1lbnQubWF0Y2goL14jLykgPyBnZXRFbGVtZW50QnlJZChzZWxlY3Rvck9yRWxlbWVudCwgY29udGV4dCkgOiBnZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHNlbGVjdG9yT3JFbGVtZW50LCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzZWxlY3Rvck9yRWxlbWVudDtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kQWJzb2x1dGVQb3NpdGlvbiA9IChlbGVtZW50KSA9PiB7XG4gIGxldCBsZWZ0ID0gMDtcbiAgbGV0IHRvcCA9IDA7XG5cbiAgaWYgKGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XG4gICAgY29uc3QgcmVjdGFuZ2xlID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB4ID0gLSh3aW5kb3cuc2Nyb2xsWCA/IHdpbmRvdy5zY3JvbGxYIDogd2luZG93LnBhZ2VYT2Zmc2V0KTtcbiAgICBjb25zdCB5ID0gLSh3aW5kb3cuc2Nyb2xsWSA/IHdpbmRvdy5zY3JvbGxZIDogd2luZG93LnBhZ2VZT2Zmc2V0KTtcblxuICAgIHJldHVybiBbcmVjdGFuZ2xlLmxlZnQgLSB4LCByZWN0YW5nbGUudG9wIC0geV07XG4gIH1cblxuICBpZiAoZWxlbWVudC5vZmZzZXRQYXJlbnQpIHtcbiAgICBsZXQgaXRlcmF0b3IgPSBlbGVtZW50O1xuXG4gICAgZG8ge1xuICAgICAgbGVmdCArPSBpdGVyYXRvci5vZmZzZXRMZWZ0O1xuICAgICAgdG9wICs9IGl0ZXJhdG9yLm9mZnNldFRvcDtcbiAgICB9IHdoaWxlICgoaXRlcmF0b3IgPSBpdGVyYXRvci5vZmZzZXRQYXJlbnQpKTtcbiAgfVxuXG4gIHJldHVybiBbbGVmdCwgdG9wXTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXR1cEV2ZW50TGlzdGVuZXIgPSAoeyBvYmplY3QsIGV2ZW50TmFtZSwgaW5zdGFuY2UsIGhhbmRsZXIsIH0pID0+IHtcbiAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIob2JqZWN0LCBldmVudE5hbWUsIChldmVudCA9IGluc3RhbmNlKSA9PiB7XG4gICAgaGFuZGxlci5jYWxsKGluc3RhbmNlLCBldmVudCk7XG5cbiAgICBpZiAoaW5zdGFuY2UuaGlkZUNvbnRleHRNZW51KSB7XG4gICAgICBpbnN0YW5jZS5oaWRlQ29udGV4dE1lbnUoKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldHVwRXZlbnRzID0gKHsgZXZlbnRzLCBvYmplY3QsIGluc3RhbmNlLCBoYW5kbGVycywgfSkgPT5cbiAgZXZlbnRzLmZvckVhY2goKGV2ZW50TmFtZSkgPT4ge1xuICAgIGlmIChoYW5kbGVyc1tldmVudE5hbWVdKSB7XG4gICAgICBzZXR1cEV2ZW50TGlzdGVuZXIoe1xuICAgICAgICBvYmplY3QsXG4gICAgICAgIGV2ZW50TmFtZSxcbiAgICAgICAgaW5zdGFuY2UsXG4gICAgICAgIGhhbmRsZXI6IGhhbmRsZXJzW2V2ZW50TmFtZV0sXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG5jb25zdCBNQVBfRVZFTlRTID0gW1xuICAnYm91bmRzX2NoYW5nZWQnLCAnY2VudGVyX2NoYW5nZWQnLCAnY2xpY2snLCAnZGJsY2xpY2snLCAnZHJhZycsXG4gICdkcmFnZW5kJywgJ2RyYWdzdGFydCcsICdpZGxlJywgJ21hcHR5cGVpZF9jaGFuZ2VkJyxcbiAgJ21vdXNlbW92ZScsICdtb3VzZW91dCcsICdtb3VzZW92ZXInLCAncHJvamVjdGlvbl9jaGFuZ2VkJyxcbiAgJ3Jlc2l6ZScsICd0aWxlc2xvYWRlZCcsICd6b29tX2NoYW5nZWQnXG5dO1xuY29uc3QgR01BUFNfTUVOVV9JRCA9ICdnbWFwc19jb250ZXh0X21lbnUnO1xuXG4vKipcbiAqIEdNYXBzIGlzIGEgd3JhcHBlciBmb3IgR29vZ2xlIE1hcHMgSmF2YVNjcmlwdCBBUEkuIEl0cyBnb2FsIGlzIHRvIHNpbXBsaWZ5IEdvb2dsZSBNYXBzIHVzYWdlIGJ5IHBlcmZvcm1pbmcgY29tcGxleCB0YXNrcyB3aXRoIGZld2VyIGxpbmVzIG9mIGNvZGUuXG4gKi9cbmNsYXNzIEdNYXBzIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgR01hcHMgaW5zdGFuY2UsIGluY2x1ZGluZyBhIEdvb2dsZSBNYXBzIG1hcC5cbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBgb3B0aW9uc2AgYWNjZXB0cyBhbGwgdGhlIFtNYXBPcHRpb25zXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjTWFwT3B0aW9ucykgYW5kIFtldmVudHNdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNNYXApIGxpc3RlZCBpbiB0aGUgR29vZ2xlIE1hcHMgQVBJLiBBbHNvIGFjY2VwdHM6XG4gICAqICogYGxhdGl0dWRlYCAobnVtYmVyKTogTGF0aXR1ZGUgb2YgdGhlIG1hcCdzIGNlbnRlclxuICAgKiAqIGBsb25naXR1ZGVgIChudW1iZXIpOiBMb25naXR1ZGUgb2YgdGhlIG1hcCdzIGNlbnRlclxuICAgKiAqIGBlbGVtZW50YCAoc3RyaW5nIG9yIEhUTUxFbGVtZW50KTogY29udGFpbmVyIHdoZXJlIHRoZSBtYXAgd2lsbCBiZSByZW5kZXJlZFxuICAgKiAqIGBtYXJrZXJDbHVzdGVyZXJgIChmdW5jdGlvbik6IEEgZnVuY3Rpb24gdG8gY3JlYXRlIGEgbWFya2VyIGNsdXN0ZXIuIFlvdSBjYW4gdXNlIE1hcmtlckNsdXN0ZXJlciBvciBNYXJrZXJDbHVzdGVyZXJQbHVzLlxuICAgKi9cbiAgY29uc3RydWN0b3IoYmFzZU9wdGlvbnMgPSB7fSkge1xuICAgIGlmICghd2luZG93Lmdvb2dsZSB8fCAhd2luZG93Lmdvb2dsZS5tYXBzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0dvb2dsZSBNYXBzIEphdmFTY3JpcHQgQVBJIGlzIHJlcXVpcmVkLiBDaGVjazogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvdHV0b3JpYWwnKTtcbiAgICB9XG5cbiAgICBjb25zdCB7XG4gICAgICBlbCxcbiAgICAgIGRpdixcbiAgICAgIGNvbnRleHQsXG4gICAgICBlbGVtZW50ID0gZ2V0RWxlbWVudChlbCB8fCBkaXYsIGNvbnRleHQpLFxuICAgICAgbGF0LFxuICAgICAgbGF0aXR1ZGUgPSBsYXQsXG4gICAgICBsbmcsXG4gICAgICBsb25naXR1ZGUgPSBsbmcsXG4gICAgICBjZW50ZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGxhdGl0dWRlLCBsb25naXR1ZGUpLFxuICAgICAgem9vbSA9IDE1LFxuICAgICAgbWFwVHlwZSA9ICdyb2FkbWFwJyxcbiAgICAgIHpvb21Db250cm9sT3B0ID0ge1xuICAgICAgICBzdHlsZTogJ0RFRkFVTFQnLFxuICAgICAgICBwb3NpdGlvbjogJ1RPUF9MRUZUJyxcbiAgICAgIH0sXG4gICAgICBwYW5Db250cm9sID0gdHJ1ZSxcbiAgICAgIHpvb21Db250cm9sID0gdHJ1ZSxcbiAgICAgIG1hcFR5cGVDb250cm9sID0gdHJ1ZSxcbiAgICAgIHNjYWxlQ29udHJvbCA9IHRydWUsXG4gICAgICBzdHJlZXRWaWV3Q29udHJvbCA9IHRydWUsXG4gICAgICBvdmVydmlld01hcENvbnRyb2wgPSB0cnVlLFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICBtYXJrZXJDbHVzdGVyZXIsXG4gICAgICBlbmFibGVOZXdTdHlsZSxcbiAgICAgIC4uLm9wdGlvbnNcbiAgICB9ID0gYmFzZU9wdGlvbnM7XG5cbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gZWxlbWVudCBkZWZpbmVkLiBQYXNzIGFuIGBlbGVtZW50YCBvcHRpb24gaW4gR01hcHMuJyk7XG4gICAgfVxuXG4gICAgY29uc3QgbWFwVHlwZUlkID0gZ29vZ2xlLm1hcHMuTWFwVHlwZUlkW21hcFR5cGUudG9VcHBlckNhc2UoKV07XG5cbiAgICBjb25zdCBtYXBCYXNlT3B0aW9ucyA9IHtcbiAgICAgIHpvb20sXG4gICAgICBjZW50ZXIsXG4gICAgICBtYXBUeXBlSWQsXG4gICAgfTtcblxuICAgIGNvbnN0IG1hcENvbnRyb2xzT3B0aW9ucyA9IHtcbiAgICAgIHBhbkNvbnRyb2wsXG4gICAgICB6b29tQ29udHJvbCxcbiAgICAgIHpvb21Db250cm9sT3B0aW9uczoge1xuICAgICAgICBzdHlsZTogZ29vZ2xlLm1hcHMuWm9vbUNvbnRyb2xTdHlsZVt6b29tQ29udHJvbE9wdC5zdHlsZV0sXG4gICAgICAgIHBvc2l0aW9uOiBnb29nbGUubWFwcy5Db250cm9sUG9zaXRpb25bem9vbUNvbnRyb2xPcHQucG9zaXRpb25dLFxuICAgICAgfSxcbiAgICAgIG1hcFR5cGVDb250cm9sLFxuICAgICAgc2NhbGVDb250cm9sLFxuICAgICAgc3RyZWV0Vmlld0NvbnRyb2wsXG4gICAgICBvdmVydmlld01hcENvbnRyb2wsXG4gICAgfTtcblxuICAgIGNvbnN0IGZpbHRlcmVkT3B0aW9ucyA9IE9iamVjdC5rZXlzKG9wdGlvbnMpLnJlZHVjZSgoaGFzaCwga2V5KSA9PiB7XG4gICAgICBpZiAoTUFQX0VWRU5UUy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgIHJldHVybiBoYXNoO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5oYXNoLCBba2V5XTogb3B0aW9uc1trZXldLCB9O1xuICAgIH0sIHt9KTtcblxuICAgIHRoaXMuaWQgPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIERhdGUubm93KCkpO1xuXG4gICAgR01hcHMuY29udGV4dE1lbnVzW3RoaXMuaWRdID0ge307XG5cbiAgICBnb29nbGUubWFwcy52aXN1YWxSZWZyZXNoID0gZW5hYmxlTmV3U3R5bGU7XG5cbiAgICAvKipcbiAgICAgKiBIVE1MIGVsZW1lbnQgd2hlcmUgdGhlIEdvb2dsZSBNYXBzIG1hcCBpcyByZW5kZXJlZFxuICAgICAqXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLndpZHRoID0gd2lkdGggfHwgdGhpcy5lbGVtZW50LnNjcm9sbFdpZHRoIHx8IHRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0IHx8IHRoaXMuZWxlbWVudC5zY3JvbGxIZWlnaHQgfHwgdGhpcy5lbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICAgIGNvbnN0IG1hcE9wdGlvbnMgPSB7XG4gICAgICAuLi5maWx0ZXJlZE9wdGlvbnMsXG4gICAgICAuLi5tYXBCYXNlT3B0aW9ucyxcbiAgICAgIC4uLm1hcENvbnRyb2xzT3B0aW9ucyxcbiAgICB9O1xuXG4gICAgdGhpcy5tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKHRoaXMuZWxlbWVudCwgbWFwT3B0aW9ucyk7XG4gICAgLyoqXG4gICAgICogQ29sbGVjdGlvbiBvZiBjdXN0b20gY29udHJvbHMgaW4gdGhlIG1hcCBVSVxuICAgICAqXG4gICAgICogQHR5cGUge2FycmF5fVxuICAgICAqL1xuICAgIHRoaXMuY29udHJvbHMgPSBbXTtcbiAgICAvKipcbiAgICAgKiBDb2xsZWN0aW9uIG9mIG1hcCdzIG92ZXJsYXlzXG4gICAgICpcbiAgICAgKiBAdHlwZSB7YXJyYXl9XG4gICAgICovXG4gICAgdGhpcy5vdmVybGF5cyA9IFtdO1xuICAgIC8qKlxuICAgICAqIENvbGxlY3Rpb24gb2YgS01ML0dlb1JTUyBhbmQgRnVzaW9uVGFibGUgbGF5ZXJzXG4gICAgICpcbiAgICAgKiBAdHlwZSB7YXJyYXl9XG4gICAgICovXG4gICAgdGhpcy5sYXllcnMgPSBbXTtcbiAgICAvKipcbiAgICAgKiBDb2xsZWN0aW9uIG9mIGRhdGEgbGF5ZXJzIChTZWUge0BsaW5rIEdNYXBzI2FkZExheWVyfSlcbiAgICAgKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5zaW5nbGVMYXllcnMgPSB7fTtcbiAgICAvKipcbiAgICAgKiBDb2xsZWN0aW9uIG9mIG1hcCdzIG1hcmtlcnNcbiAgICAgKlxuICAgICAqIEB0eXBlIHthcnJheX1cbiAgICAgKi9cbiAgICB0aGlzLm1hcmtlcnMgPSBbXTtcbiAgICAvKipcbiAgICAgKiBDb2xsZWN0aW9uIG9mIG1hcCdzIGxpbmVzXG4gICAgICpcbiAgICAgKiBAdHlwZSB7YXJyYXl9XG4gICAgICovXG4gICAgdGhpcy5wb2x5bGluZXMgPSBbXTtcbiAgICAvKipcbiAgICAgKiBDb2xsZWN0aW9uIG9mIG1hcCdzIHJvdXRlcyByZXF1ZXN0ZWQgYnkge0BsaW5rIEdNYXBzI2dldFJvdXRlc30sIHtAbGluayBHTWFwcyNyZW5kZXJSb3V0ZX0sIHtAbGluayBHTWFwcyNkcmF3Um91dGV9LCB7QGxpbmsgR01hcHMjdHJhdmVsUm91dGV9IG9yIHtAbGluayBHTWFwcyNkcmF3U3RlcHBlZFJvdXRlfVxuICAgICAqXG4gICAgICogQHR5cGUge2FycmF5fVxuICAgICAqL1xuICAgIHRoaXMucm91dGVzID0gW107XG4gICAgLyoqXG4gICAgICogQ29sbGVjdGlvbiBvZiBtYXAncyBwb2x5Z29uc1xuICAgICAqXG4gICAgICogQHR5cGUge2FycmF5fVxuICAgICAqL1xuICAgIHRoaXMucG9seWdvbnMgPSBbXTtcbiAgICB0aGlzLmluZm9XaW5kb3cgPSBudWxsO1xuICAgIHRoaXMub3ZlcmxheUVsZW1lbnQgPSBudWxsO1xuICAgIC8qKlxuICAgICAqIEN1cnJlbnQgbWFwJ3Mgem9vbVxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLnpvb20gPSB6b29tO1xuXG4gICAgdGhpcy5yZWdpc3RlcmVkRXZlbnRzID0ge307XG5cbiAgICBpZiAobWFya2VyQ2x1c3RlcmVyKSB7XG4gICAgICAvKipcbiAgICAgICAqIE1hcmtlciBDbHVzdGVyZXIgaW5zdGFuY2VcbiAgICAgICAqXG4gICAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAgICovXG4gICAgICB0aGlzLm1hcmtlckNsdXN0ZXJlciA9IG1hcmtlckNsdXN0ZXJlci5hcHBseSh0aGlzLCBbdGhpcy5tYXBdKTtcbiAgICB9XG5cbiAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcih0aGlzLm1hcCwgJ3pvb21fY2hhbmdlZCcsIHRoaXMuaGlkZUNvbnRleHRNZW51KTtcblxuICAgIHNldHVwRXZlbnRzKHsgZXZlbnRzOiBNQVBfRVZFTlRTLCBvYmplY3Q6IHRoaXMubWFwLCBpbnN0YW5jZTogdGhpcywgaGFuZGxlcnM6IG9wdGlvbnMsIH0pO1xuXG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIodGhpcy5tYXAsICdyaWdodGNsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAob3B0aW9ucy5yaWdodGNsaWNrKSB7XG4gICAgICAgIG9wdGlvbnMucmlnaHRjbGljay5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgaWYgKEdNYXBzLmNvbnRleHRNZW51c1t0aGlzLmlkXS5tYXApIHtcbiAgICAgICAgdGhpcy5idWlsZENvbnRleHRNZW51KCdtYXAnLCBldmVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBidWlsZENvbnRleHRNZW51SFRNTChjb250cm9sLCBldmVudCkge1xuICAgIGlmICghZ2V0RWxlbWVudEJ5SWQoR01BUFNfTUVOVV9JRCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZXh0TWVudUVsZW1lbnQgPSBnZXRFbGVtZW50QnlJZChHTUFQU19NRU5VX0lEKTtcbiAgICBjb25zdCBvcHRpb25zID0gR01hcHMuY29udGV4dE1lbnVzW3RoaXMuaWRdW2NvbnRyb2xdO1xuXG4gICAgY29uc3QgaHRtbCA9IE9iamVjdC5rZXlzKG9wdGlvbnMpLm1hcChrZXkgPT5cbiAgICAgIGA8bGk+PGEgaWQ9XCIke2NvbnRyb2x9XyR7a2V5fVwiIGhyZWY9XCIjXCI+JHtvcHRpb25zW2tleV0udGl0bGV9PC9hPjwvbGk+YFxuICAgICkuam9pbignJyk7XG5cbiAgICBjb250ZXh0TWVudUVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDtcblxuICAgIGNvbnN0IGNvbnRleHRNZW51SXRlbXMgPSBjb250ZXh0TWVudUVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2EnKTtcblxuICAgIFsuLi5jb250ZXh0TWVudUl0ZW1zXS5mb3JFYWNoKChjb250ZXh0TWVudUl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGNvbnRleHRNZW51SXRlbUxpc3RlbmVyID0gKGNvbnRleHRNZW51SXRlbUxpc3RlbmVyRXZlbnQpID0+IHtcbiAgICAgICAgY29udGV4dE1lbnVJdGVtTGlzdGVuZXJFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIG9wdGlvbnNbY29udGV4dE1lbnVJdGVtTGlzdGVuZXJFdmVudC50YXJnZXQuaWQucmVwbGFjZShgJHtjb250cm9sfV9gLCAnJyldLmFjdGlvbi5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgdGhpcy5oaWRlQ29udGV4dE1lbnUoKTtcbiAgICAgIH07XG5cbiAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmNsZWFyTGlzdGVuZXJzKGNvbnRleHRNZW51SXRlbSwgJ2NsaWNrJyk7XG4gICAgICBnb29nbGUubWFwcy5ldmVudC5hZGREb21MaXN0ZW5lck9uY2UoY29udGV4dE1lbnVJdGVtLCAnY2xpY2snLCBjb250ZXh0TWVudUl0ZW1MaXN0ZW5lciwgZmFsc2UpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcG9zaXRpb24gPSBmaW5kQWJzb2x1dGVQb3NpdGlvbih0aGlzLmVsZW1lbnQpO1xuICAgIGNvbnN0IGxlZnQgPSBwb3NpdGlvblswXSArIGV2ZW50LnBpeGVsLnggLSAxNTtcbiAgICBjb25zdCB0b3AgPSBwb3NpdGlvblsxXSArIGV2ZW50LnBpeGVsLnkgLSAxNTtcblxuICAgIGNvbnRleHRNZW51RWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7bGVmdH1weGA7XG4gICAgY29udGV4dE1lbnVFbGVtZW50LnN0eWxlLnRvcCA9IGAke3RvcH1weGA7XG4gIH1cblxuICBidWlsZENvbnRleHRNZW51KGNvbnRyb2wsIGV2ZW50KSB7XG4gICAgaWYgKGNvbnRyb2wgPT09ICdtYXJrZXInKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIGV2ZW50LnBpeGVsID0ge307XG5cbiAgICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgZ29vZ2xlLm1hcHMuT3ZlcmxheVZpZXcoKTtcbiAgICAgIG92ZXJsYXkuc2V0TWFwKHRoaXMubWFwKTtcblxuICAgICAgb3ZlcmxheS5kcmF3ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0aW9uID0gb3ZlcmxheS5nZXRQcm9qZWN0aW9uKCk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gZXZlbnQubWFya2VyLmdldFBvc2l0aW9uKCk7XG5cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIGV2ZW50LnBpeGVsID0gcHJvamVjdGlvbi5mcm9tTGF0TG5nVG9Db250YWluZXJQaXhlbChwb3NpdGlvbik7XG5cbiAgICAgICAgdGhpcy5idWlsZENvbnRleHRNZW51SFRNTChjb250cm9sLCBldmVudCk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJ1aWxkQ29udGV4dE1lbnVIVE1MKGNvbnRyb2wsIGV2ZW50KTtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZXh0TWVudUVsZW1lbnQgPSBnZXRFbGVtZW50QnlJZChHTUFQU19NRU5VX0lEKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29udGV4dE1lbnVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0sIDApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIGNvbnRleHQgbWVudSBmb3IgYSBtYXAgb3IgYSBtYXJrZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBvYmplY3Qgc2hvdWxkIGNvbnRhaW46XG4gICAqICogYGNvbnRyb2xgIChzdHJpbmcpOiBLaW5kIG9mIGNvbnRyb2wgdGhlIGNvbnRleHQgbWVudSB3aWxsIGJlIGF0dGFjaGVkLiBDYW4gYmUgXCJtYXBcIiBvciBcIm1hcmtlclwiLlxuICAgKiAqIGBvcHRpb25zYCAoYXJyYXkpOiBBIGNvbGxlY3Rpb24gb2YgY29udGV4dCBtZW51IGl0ZW1zOlxuICAgKiAgICogYHRpdGxlYCAoc3RyaW5nKTogSXRlbSdzIHRpdGxlIHNob3duIGluIHRoZSBjb250ZXh0IG1lbnUuXG4gICAqICAgKiBgbmFtZWAgKHN0cmluZyk6IEl0ZW0ncyBpZGVudGlmaWVyLlxuICAgKiAgICogYGFjdGlvbmAgKGZ1bmN0aW9uKTogRnVuY3Rpb24gdHJpZ2dlcmVkIGFmdGVyIHNlbGVjdGluZyB0aGUgY29udGV4dCBtZW51IGl0ZW0uXG4gICAqL1xuICBzZXRDb250ZXh0TWVudShvcHRpb25zKSB7XG4gICAgR01hcHMuY29udGV4dE1lbnVzW3RoaXMuaWRdW29wdGlvbnMuY29udHJvbF0gPSB7fTtcblxuICAgIE9iamVjdC5rZXlzKG9wdGlvbnMub3B0aW9ucykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBvcHRpb25zLm9wdGlvbnNba2V5XTtcblxuICAgICAgR01hcHMuY29udGV4dE1lbnVzW3RoaXMuaWRdW29wdGlvbnMuY29udHJvbF1bb3B0aW9uLm5hbWVdID0ge1xuICAgICAgICB0aXRsZTogb3B0aW9uLnRpdGxlLFxuICAgICAgICBhY3Rpb246IG9wdGlvbi5hY3Rpb24sXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgbGV0IGNvbnRleHRNZW51RWxlbWVudCA9IGdldEVsZW1lbnRCeUlkKEdNQVBTX01FTlVfSUQpO1xuXG4gICAgaWYgKCFjb250ZXh0TWVudUVsZW1lbnQpIHtcbiAgICAgIGNvbnRleHRNZW51RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICAgIGNvbnRleHRNZW51RWxlbWVudC5pZCA9IEdNQVBTX01FTlVfSUQ7XG4gICAgICBjb250ZXh0TWVudUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGNvbnRleHRNZW51RWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICBjb250ZXh0TWVudUVsZW1lbnQuc3R5bGUubWluV2lkdGggPSAnMTAwcHgnO1xuICAgICAgY29udGV4dE1lbnVFbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSAnd2hpdGUnO1xuICAgICAgY29udGV4dE1lbnVFbGVtZW50LnN0eWxlLmxpc3RTdHlsZSA9ICdub25lJztcbiAgICAgIGNvbnRleHRNZW51RWxlbWVudC5zdHlsZS5wYWRkaW5nID0gJzhweCc7XG4gICAgICBjb250ZXh0TWVudUVsZW1lbnQuc3R5bGUuYm94U2hhZG93ID0gJzJweCAycHggNnB4ICNjY2MnO1xuXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRleHRNZW51RWxlbWVudCk7XG4gICAgfVxuXG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIoY29udGV4dE1lbnVFbGVtZW50LCAnbW91c2VvdXQnLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmICghZXZlbnQucmVsYXRlZFRhcmdldCB8fCAhZXZlbnQudGFyZ2V0LmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQpKSB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjb250ZXh0TWVudUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSwgNTAwKTtcbiAgICAgIH1cbiAgICB9LCBmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogSGlkZSB0aGUgY3VycmVudCBjb250ZXh0IG1lbnVcbiAgICovXG4gIGhpZGVDb250ZXh0TWVudSgpIHtcbiAgICBjb25zdCBjb250ZXh0TWVudUVsZW1lbnQgPSBnZXRFbGVtZW50QnlJZChHTUFQU19NRU5VX0lEKTtcblxuICAgIGlmIChjb250ZXh0TWVudUVsZW1lbnQpIHtcbiAgICAgIGNvbnRleHRNZW51RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIGEgYHJlc2l6ZWAgZXZlbnQsIHVzZWZ1bCBpZiB5b3UgbmVlZCB0byByZXBhaW50IHRoZSBjdXJyZW50IG1hcCAoZm9yIGNoYW5nZXMgaW4gdGhlIHZpZXdwb3J0IG9yIGRpc3BsYXkgLyBoaWRlIGFjdGlvbnMpLlxuICAgKi9cbiAgcmVmcmVzaCgpIHtcbiAgICBnb29nbGUubWFwcy5ldmVudC50cmlnZ2VyKHRoaXMubWFwLCAncmVzaXplJyk7XG4gIH1cblxuICAvKipcbiAgICogQWRqdXN0IHRoZSBtYXAgem9vbSB0byBpbmNsdWRlIGFsbCB0aGUgY29vcmRpbmF0ZXMgaW4gdGhlIGBsYXRMbmdzYCBhcnJheS5cbiAgICpcbiAgICogQHBhcmFtIHthcnJheX0gbGF0TG5ncyAtIENvbGxlY3Rpb24gb2YgYGdvb2dsZS5tYXBzLkxhdExuZ2Agb2JqZWN0cy5cbiAgICovXG4gIGZpdExhdExuZ0JvdW5kcyhsYXRMbmdzKSB7XG4gICAgY29uc3QgYm91bmRzID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcygpO1xuXG4gICAgbGF0TG5ncy5mb3JFYWNoKGxhdExuZyA9PiBib3VuZHMuZXh0ZW5kKGxhdExuZykpO1xuXG4gICAgdGhpcy5tYXAuZml0Qm91bmRzKGJvdW5kcyk7XG4gIH1cblxuICAvKipcbiAgICogQWRqdXN0IHRoZSBtYXAgem9vbSB0byBpbmNsdWRlIGFsbCB0aGUgbWFya2VycyBhZGRlZCBpbiB0aGUgbWFwLlxuICAgKi9cbiAgZml0Wm9vbSgpIHtcbiAgICBjb25zdCBsYXRMbmdzID0gdGhpcy5tYXJrZXJzXG4gICAgICAuZmlsdGVyKG1hcmtlciA9PiBtYXJrZXIudmlzaWJsZSlcbiAgICAgIC5tYXAobWFya2VyID0+IG1hcmtlci5nZXRQb3NpdGlvbigpKTtcblxuICAgIHRoaXMuZml0TGF0TG5nQm91bmRzKGxhdExuZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIENlbnRlciB0aGUgbWFwIHVzaW5nIHRoZSBgbGF0YCBhbmQgYGxuZ2AgY29vcmRpbmF0ZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsYXQgLSBMYXRpdHVkZSBvZiB0aGUgY29vcmRpbmF0ZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGxuZyAtIExvbmdpdHVkZSBvZiB0aGUgY29vcmRpbmF0ZS5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gW2NhbGxiYWNrXSAtIENhbGxiYWNrIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBhZnRlciB0aGUgbWFwIGlzIGNlbnRlcmVkLlxuICAgKi9cbiAgc2V0Q2VudGVyKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBsYXRMbmcgPSBsYXRMbmdGcm9tQXJndW1lbnRzKGFyZ3MpO1xuICAgIGNvbnN0IGNhbGxiYWNrID0gYXJncy5wb3AoKTtcblxuICAgIHRoaXMubWFwLnBhblRvKGxhdExuZyk7XG5cbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWxsYmFjay5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIEhUTUwgZWxlbWVudCBjb250YWluZXIgb2YgdGhlIG1hcC5cbiAgICpcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fSB0aGUgZWxlbWVudCBjb250YWluZXIuXG4gICAqL1xuICBnZXRFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogSW5jcmVhc2UgdGhlIG1hcCdzIHpvb20uXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbbWFnbml0dWRlXSAtIFRoZSBudW1iZXIgb2YgdGltZXMgdGhlIG1hcCB3aWxsIGJlIHpvb21lZCBpbi5cbiAgICovXG4gIHpvb21JbihtYWduaXR1ZGUgPSAxKSB7XG4gICAgdGhpcy56b29tID0gdGhpcy5tYXAuZ2V0Wm9vbSgpICsgbWFnbml0dWRlO1xuICAgIHRoaXMubWFwLnNldFpvb20odGhpcy56b29tKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWNyZWFzZSB0aGUgbWFwJ3Mgem9vbS5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IFttYWduaXR1ZGVdIC0gVGhlIG51bWJlciBvZiB0aW1lcyB0aGUgbWFwIHdpbGwgYmUgem9vbWVkIG91dC5cbiAgICovXG4gIHpvb21PdXQobWFnbml0dWRlID0gMSkge1xuICAgIHRoaXMuem9vbSA9IHRoaXMubWFwLmdldFpvb20oKSAtIG1hZ25pdHVkZTtcbiAgICB0aGlzLm1hcC5zZXRab29tKHRoaXMuem9vbSk7XG4gIH1cbn1cblxuR01hcHMuY29udGV4dE1lbnVzID0ge307XG5cbmNvbnN0IGdvb2dsZU1hcHNNYXBNZXRob2RzID0gT2JqZWN0LmtleXMoZ29vZ2xlLm1hcHMuTWFwLnByb3RvdHlwZSlcbiAgLmZpbHRlcihrZXkgPT4gKHR5cGVvZiBnb29nbGUubWFwcy5NYXAucHJvdG90eXBlW2tleV0gPT09ICdmdW5jdGlvbicgJiYgIUdNYXBzLnByb3RvdHlwZVtrZXldKSk7XG5cbmdvb2dsZU1hcHNNYXBNZXRob2RzLmZvckVhY2goKG1ldGhvZE5hbWUpID0+IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgR01hcHMucHJvdG90eXBlW21ldGhvZE5hbWVdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gdGhpcy5tYXBbbWV0aG9kTmFtZV0uYXBwbHkodGhpcy5tYXAsIGFyZ3MpO1xuICB9O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXBzO1xuIiwiaW1wb3J0IEdNYXBzIGZyb20gJy4vY29yZSc7XG5cbi8qKlxuICogRXh0ZW5kcyBHTWFwcyB0byBiaW5kIGFuZCB0cmlnZ2VyIGV2ZW50cy5cbiAqIEBtb2R1bGUgRXZlbnRzXG4gKi9cblxuLyoqXG4gKiBDb2xsZWN0aW9uIG9mIGN1c3RvbSBldmVudHMgdGhhdCBjYW4gYmUgcmVnaXN0ZXJlZCBhbmQgZmlyZWQuXG4gKlxuICogQHR5cGUge2FycmF5fVxuICovXG5HTWFwcy5jdXN0b21FdmVudHMgPSBbJ21hcmtlcl9hZGRlZCcsICdtYXJrZXJfcmVtb3ZlZCcsICdwb2x5bGluZV9hZGRlZCcsICdwb2x5bGluZV9yZW1vdmVkJywgJ3BvbHlnb25fYWRkZWQnLCAncG9seWdvbl9yZW1vdmVkJywgJ2xheWVyX2FkZGVkJywgJ2xheWVyX3JlbW92ZWQnLCAnb3ZlcmxheV9tYXBfdHlwZV9hZGRlZCcsICdvdmVybGF5X21hcF90eXBlX3JlbW92ZWQnLCAnb3ZlcmxheV9hZGRlZCcsICdvdmVybGF5X3JlbW92ZWQnLCAnZ2VvbG9jYXRlZCcsICdnZW9sb2NhdGlvbl9mYWlsZWQnXTtcblxuLyoqXG4gKiBBZGQgYW4gZXZlbnQgKG5hdGl2ZSBvciBjdXN0b20pIHRvIGFuIG9iamVjdC5cbiAqIEBmdW5jdGlvbiBvblxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnQuIEl0IGNhbiBiZSBhbnkgb2YgdGhlIG5hdGl2ZSBldmVudHMgZnJvbSBHb29nbGUgTWFwcywgb3IgdGhlIG9uZXMgZGVzY3JpYmVkIGluIGBHTWFwcy5jdXN0b21FdmVudHNgLlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldCAtIFRoZSB0YXJnZXQgb2YgdGhlIGV2ZW50LiBJdCBjYW4gYmUgYSBuYXRpdmUgb2JqZWN0IGZyb20gR29vZ2xlIE1hcHMsIChzdWNoIGFzIGEgZ29vZ2xlLm1hcHMuTWFwLCBnb29nbGUubWFwcy5NYXJrZXIsIGV0Yy4pLCBvciBhIEdNYXBzIGluc3RhbmNlLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlciAtIFRoZSBoYW5kbGVyIChvZnRlbiBjYWxsZWQgbGlzdGVuZXIpIG9mIHRoZSBldmVudC4gSXMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgZXZlcnkgdGltZSB0aGUgZXZlbnQgaXMgZmlyZWQuXG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xuR01hcHMub24gPSAoZXZlbnROYW1lLCBvYmplY3QsIGhhbmRsZXIpID0+IHtcbiAgbGV0IHRhcmdldCA9IG9iamVjdDtcblxuICBpZiAoR01hcHMuY3VzdG9tRXZlbnRzLmluZGV4T2YoZXZlbnROYW1lKSA9PT0gLTEpIHtcbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgR01hcHMpIHtcbiAgICAgIHRhcmdldCA9IHRhcmdldC5tYXA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKHRhcmdldCwgZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgfVxuXG4gIGNvbnN0IHJlZ2lzdGVyZWRFdmVudCA9IHtcbiAgICBoYW5kbGVyLFxuICAgIGV2ZW50TmFtZSxcbiAgfTtcblxuICB0YXJnZXQucmVnaXN0ZXJlZEV2ZW50c1tldmVudE5hbWVdID0gdGFyZ2V0LnJlZ2lzdGVyZWRFdmVudHNbZXZlbnROYW1lXSB8fCBbXTtcbiAgdGFyZ2V0LnJlZ2lzdGVyZWRFdmVudHNbZXZlbnROYW1lXS5wdXNoKHJlZ2lzdGVyZWRFdmVudCk7XG5cbiAgcmV0dXJuIHJlZ2lzdGVyZWRFdmVudDtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGV2ZW50IChuYXRpdmUgb3IgY3VzdG9tKSB0byBhbiBvYmplY3QuXG4gKiBAZnVuY3Rpb24gb2ZmXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudC4gSXQgY2FuIGJlIGFueSBvZiB0aGUgbmF0aXZlIGV2ZW50cyBmcm9tIEdvb2dsZSBNYXBzLCBvciB0aGUgb25lcyBkZXNjcmliZWQgaW4gYEdNYXBzLmN1c3RvbUV2ZW50c2AuXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0IC0gVGhlIHRhcmdldCBvZiB0aGUgZXZlbnQuIEl0IGNhbiBiZSBhIG5hdGl2ZSBvYmplY3QgZnJvbSBHb29nbGUgTWFwcywgKHN1Y2ggYXMgYSBnb29nbGUubWFwcy5NYXAsIGdvb2dsZS5tYXBzLk1hcmtlciwgZXRjLiksIG9yIGEgR01hcHMgaW5zdGFuY2UuXG4gKi9cbkdNYXBzLm9mZiA9IChldmVudE5hbWUsIG9iamVjdCkgPT4ge1xuICBsZXQgdGFyZ2V0ID0gb2JqZWN0O1xuXG4gIGlmIChHTWFwcy5jdXN0b21FdmVudHMuaW5kZXhPZihldmVudE5hbWUpID09PSAtMSkge1xuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBHTWFwcykge1xuICAgICAgdGFyZ2V0ID0gdGFyZ2V0Lm1hcDtcbiAgICB9XG5cbiAgICBnb29nbGUubWFwcy5ldmVudC5jbGVhckxpc3RlbmVycyh0YXJnZXQsIGV2ZW50TmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0LnJlZ2lzdGVyZWRFdmVudHNbZXZlbnROYW1lXSA9IFtdO1xuICB9XG59O1xuXG4vKipcbiAqIEFkZCBhIG5hdGl2ZSBldmVudCB0aGF0IHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoZSB0YXJnZXQgYWZ0ZXIgaXQgaGFzIGJlZW4gZXhlY3V0ZWQgb25jZS5cbiAqIEBmdW5jdGlvbiBvbmNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudC4gSXQgaGFzIHRvIGJlIGFueSBvZiB0aGUgbmF0aXZlIGV2ZW50cyBmcm9tIEdvb2dsZSBNYXBzLlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldCAtIFRoZSB0YXJnZXQgb2YgdGhlIGV2ZW50LiBJdCBoYXMgdG8gYmUgYSBuYXRpdmUgb2JqZWN0IGZyb20gR29vZ2xlIE1hcHMsIHN1Y2ggYXMgYSBnb29nbGUubWFwcy5NYXAsIGdvb2dsZS5tYXBzLk1hcmtlciwgZXRjLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlciAtIFRoZSBoYW5kbGVyIChvZnRlbiBjYWxsZWQgbGlzdGVuZXIpIG9mIHRoZSBldmVudC4gSXMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiB0aGUgZXZlbnQgaXMgZmlyZWQgdGhlIGZpcnN0IHRpbWUuXG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xuR01hcHMub25jZSA9IChldmVudE5hbWUsIG9iamVjdCwgaGFuZGxlcikgPT4ge1xuICBsZXQgdGFyZ2V0ID0gb2JqZWN0O1xuXG4gIGlmIChHTWFwcy5jdXN0b21FdmVudHMuaW5kZXhPZihldmVudE5hbWUpID09PSAtMSkge1xuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBHTWFwcykge1xuICAgICAgdGFyZ2V0ID0gdGFyZ2V0Lm1hcDtcbiAgICB9XG5cbiAgICByZXR1cm4gZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXJPbmNlKHRhcmdldCwgZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG4vKipcbiAqIFRyaWdnZXIgYW4gZXZlbnQgKG5hdGl2ZSBvciBjdXN0b20pIGFuZCBleGVjdXRlIGFsbCB0aGUgaGFuZGxlcnMgcmVnaXN0ZXJlZCBwcmV2aW91c2x5LlxuICogQGZ1bmN0aW9uIGZpcmVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50LiBJdCBjYW4gYmUgYW55IG9mIHRoZSBuYXRpdmUgZXZlbnRzIGZyb20gR29vZ2xlIE1hcHMsIG9yIHRoZSBvbmVzIGRlc2NyaWJlZCBpbiBgR01hcHMuY3VzdG9tRXZlbnRzYC5cbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXQgLSBUaGUgdGFyZ2V0IG9mIHRoZSBldmVudC4gSXQgY2FuIGJlIGEgbmF0aXZlIG9iamVjdCBmcm9tIEdvb2dsZSBNYXBzLCAoc3VjaCBhcyBhIGdvb2dsZS5tYXBzLk1hcCwgZ29vZ2xlLm1hcHMuTWFya2VyLCBldGMuKSwgb3IgYSBHTWFwcyBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IC0gVGhlIGNvbnRleHQgZm9yIHRoZSBldmVudCBoYW5kbGVyIChyZXByZXNlbnRlZCBieSBgdGhpc2Aga2V5d29yZCBpbnNpZGUgdGhlIGhhbmRsZXIpLlxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbkdNYXBzLmZpcmUgPSAoZXZlbnROYW1lLCBvYmplY3QsIGNvbnRleHQpID0+IHtcbiAgaWYgKEdNYXBzLmN1c3RvbUV2ZW50cy5pbmRleE9mKGV2ZW50TmFtZSkgPT09IC0xKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgY29uc3QgZXZlbnRBcmd1bWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoYXJndW1lbnRzKS5zbGljZSgyKTtcbiAgICBnb29nbGUubWFwcy5ldmVudC50cmlnZ2VyKG9iamVjdCwgZXZlbnROYW1lLCBldmVudEFyZ3VtZW50cyk7XG4gIH0gZWxzZSBpZiAoZXZlbnROYW1lIGluIGNvbnRleHQucmVnaXN0ZXJlZEV2ZW50cykge1xuICAgIGNvbnRleHQucmVnaXN0ZXJlZEV2ZW50c1tldmVudE5hbWVdLmZvckVhY2gocmVnaXN0ZXJlZEV2ZW50ID0+XG4gICAgICByZWdpc3RlcmVkRXZlbnQuaGFuZGxlci5jYWxsKGNvbnRleHQsIG9iamVjdClcbiAgICApO1xuICB9XG59O1xuXG5HTWFwcy5wcm90b3R5cGUub24gPSBmdW5jdGlvbiBvbihldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgcmV0dXJuIEdNYXBzLm9uKGV2ZW50TmFtZSwgdGhpcywgaGFuZGxlcik7XG59O1xuXG5HTWFwcy5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24gb2ZmKGV2ZW50TmFtZSkge1xuICBHTWFwcy5vZmYoZXZlbnROYW1lLCB0aGlzKTtcbn07XG5cbkdNYXBzLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZShldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgcmV0dXJuIEdNYXBzLm9uY2UoZXZlbnROYW1lLCB0aGlzLCBoYW5kbGVyKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXBzO1xuIiwiaW1wb3J0IEdNYXBzLCB7IGxhdExuZ0Zyb21Bcmd1bWVudHMgfSBmcm9tICcuL2NvcmUnO1xuaW1wb3J0ICcuL3BvbHlmaWxscyc7XG5cbi8qKlxuICogRXh0ZW5kcyBHTWFwcyB0byB1c2UgZ2VvZmVuY2VzLlxuICogQG1vZHVsZSBHZW9mZW5jZXNcbiAqL1xuXG4vKipcbiAqIENoZWNrIGlmIGEgY29vcmRpbmF0ZSBpcyBpbnNpZGUgb3Igbm90IGEgZ2VvZmVuY2UuXG4gKiBAZnVuY3Rpb24gY2hlY2tHZW9mZW5jZVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBsYXRMbmcgLSBBIExhdExuZ0xpdGVyYWwgb2JqZWN0IChhIHBsYWluIG9iamVjdCB3aXRoIGBsYXRgIGFuZCBgbG5nYCBwcm9wZXJ0aWVzKS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBmZW5jZSAtIEEgZmVuY2Ugb2JqZWN0LCB3aGljaCBjYW4gYmUgYW4gaW5zdGFuY2Ugb2YgYGdvb2dsZS5tYXBzLlBvbHlnb25gLCBgZ29vZ2xlLm1hcHMuQ2lyY2xlYCwgYGdvb2dsZS5tYXBzLlJlY3RhbmdsZWAgb3IgYGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kc2AuXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IElzIGB0cnVlYCBpZiB0aGUgY29vcmRpbmF0ZSBpcyBpbnNpZGUgdGhlIGZlbmNlLCBhbmQgYGZhbHNlYCBpZiBpcyBub3QuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5jaGVja0dlb2ZlbmNlID0gZnVuY3Rpb24gY2hlY2tHZW9mZW5jZSguLi5hcmdzKSB7XG4gIGNvbnN0IGxhZ0xuZyA9IGxhdExuZ0Zyb21Bcmd1bWVudHMoYXJncyk7XG4gIGNvbnN0IGZlbmNlID0gYXJncy5wb3AoKTtcblxuICByZXR1cm4gZmVuY2UuY29udGFpbnNMYXRMbmcobGFnTG5nKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBtYXJrZXIncyBwb3NpdGlvbiBpcyBpbnNpZGUgb3Igbm90IGFueSBvZiBpdHMgZ2VvZmVuY2VzLiBJdCB3aWxsIHRyaWdnZXIgdGhlIGBvdXRzaWRlQ2FsbGJhY2tgIGZ1bmN0aW9uIGZvciBldmVyeSBmZW5jZSB0aGF0IGNvbnRhaW5zIHRoZSBtYXJrZXIncyBwb3NpdGlvbi5cbiAqIEBmdW5jdGlvbiBjaGVja01hcmtlckdlb2ZlbmNlXG4gKlxuICogQHBhcmFtIHtnb29nbGUubWFwcy5NYXJrZXJ9IG1hcmtlciAtIEEgbWFya2VyIGFkZGVkIHdpdGggYEdNYXBzI2FkZE1hcmtlcmAuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvdXRzaWRlQ2FsbGJhY2sgLSBBIGZ1bmN0aW9uIHRoYXQgd2lsbCByZWNlaXZlIHR3byBhcmd1bWVudHM6IHRoZSBgbWFya2VyYCBhbmQgdGhlIGN1cnJlbnQgZmVuY2UuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5jaGVja01hcmtlckdlb2ZlbmNlID0gZnVuY3Rpb24gY2hlY2tNYXJrZXJHZW9mZW5jZShtYXJrZXIsIG91dHNpZGVDYWxsYmFjaykge1xuICBpZiAobWFya2VyLmZlbmNlcykge1xuICAgIG1hcmtlci5mZW5jZXMuZm9yRWFjaCgoZmVuY2UpID0+IHtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gbWFya2VyLmdldFBvc2l0aW9uKCk7XG5cbiAgICAgIGlmICghdGhpcy5jaGVja0dlb2ZlbmNlKHBvc2l0aW9uLCBmZW5jZSkpIHtcbiAgICAgICAgb3V0c2lkZUNhbGxiYWNrKG1hcmtlciwgZmVuY2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHTWFwcztcbiIsImltcG9ydCBHTWFwcywgeyBzZXR1cEV2ZW50cywgYXJyYXlUb0xhdExuZywgZmxhdHRlbkFycmF5IH0gZnJvbSAnLi9jb3JlJztcbmltcG9ydCAnZXZlbnRzJztcblxuLyoqXG4gKiBFeHRlbmRzIEdNYXBzIHRvIHVzZSBwb2x5bGluZXMgYW5kIHBvbHlnb25zLlxuICogQG1vZHVsZSBHZW9tZXRyeVxuICovXG5cbmNvbnN0IEVWRU5UUyA9IFsnY2xpY2snLCAnZGJsY2xpY2snLCAnbW91c2Vkb3duJywgJ21vdXNlbW92ZScsICdtb3VzZW91dCcsICdtb3VzZW92ZXInLCAnbW91c2V1cCcsICdyaWdodGNsaWNrJ107XG5cbi8qKlxuICogRHJhdyBhIHBvbHlsaW5lIGluIHRoZSBNYXAgYW5kIGFkZCBpdCB0byB0aGUgcG9seWxpbmVzIGNvbGxlY3Rpb24uIFRoaXMgbWV0aG9kIGFsc28gZmlyZXMgYSBgcG9seWxpbmVfYWRkZWRgIGV2ZW50LlxuICogQGZ1bmN0aW9uIGRyYXdQb2x5bGluZVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBvYmplY3Qgc2hvdWxkIGNvbnRhaW46XG4gKiBAcGFyYW0ge2FycmF5fSBvcHRpb25zLnBhdGggLSBDb2xsZWN0aW9uIG9mIGNvb3JkaW5hdGVzICh3aGljaCBjYW4gYmUgZWl0aGVyIGFuIGFycmF5IFtsYXQsIGxuZ10gb3IgYSBnb29nbGUubWFwcy5MYXRMbmcgb2JqZWN0KS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnN0cm9rZUNvbG9yIC0gQ29sb3Igb2YgdGhlIHBvbHlsaW5lLiBDYW4gYmUgaGV4YWRlY2ltYWwgb3IgQ1NTIG5hbWUuXG4gKiBAcGFyYW0ge2Zsb2F0fSBvcHRpb25zLnN0cm9rZU9wYWNpdHkgLSBPcGFjaXR5IG9mIHRoZSBwb2x5bGluZSBmcm9tIDAuMCB0byAxLjAuXG4gKiBAcGFyYW0ge2ludGVnZXJ9IG9wdGlvbnMuc3Ryb2tlV2VpZ2h0IC0gUG9seWxpbmUgd2lkdGggaW4gcGl4ZWxzLlxuICpcbiAqIGBvcHRpb25zYCBhbHNvIGFjY2VwdHMgYW55IG9wdGlvbiBkZWZpbmVkIGluIHRoZSBbb2ZmaWNpYWwgZG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI1BvbHlsaW5lT3B0aW9ucykgYW5kIGFueSBldmVudCBkZWZpbmVkIGluIHRoZSBbXCJFdmVudHNcIiBzZWN0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjUG9seWxpbmUpLlxuICpcbiAqIEByZXR1cm5zIHtnb29nbGUubWFwcy5Qb2x5bGluZX1cbiAqL1xuR01hcHMucHJvdG90eXBlLmRyYXdQb2x5bGluZSA9IGZ1bmN0aW9uIGRyYXdQb2x5bGluZShiYXNlT3B0aW9ucykge1xuICBjb25zdCB7IGljb25zLCBzdHJva2VDb2xvciwgc3Ryb2tlT3BhY2l0eSwgc3Ryb2tlV2VpZ2h0LCBnZW9kZXNpYywgY2xpY2thYmxlID0gdHJ1ZSwgZWRpdGFibGUgPSBmYWxzZSwgdmlzaWJsZSA9IHRydWUsIHpJbmRleCwgLi4ub3B0aW9ucyB9ID0gYmFzZU9wdGlvbnM7XG4gIGxldCBwYXRoID0gW107XG5cbiAgaWYgKG9wdGlvbnMucGF0aC5sZW5ndGgpIHtcbiAgICBpZiAob3B0aW9ucy5wYXRoWzBdWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHBhdGggPSBbLi4ub3B0aW9ucy5wYXRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGF0aCA9IG9wdGlvbnMucGF0aC5tYXAobGF0TG5nID0+XG4gICAgICAgIG5ldyBnb29nbGUubWFwcy5MYXRMbmcobGF0TG5nWzBdLCBsYXRMbmdbMV0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHBvbHlsaW5lT3B0aW9ucyA9IHtcbiAgICAuLi5vcHRpb25zLFxuICAgIG1hcDogdGhpcy5tYXAsXG4gICAgcGF0aCxcbiAgICBzdHJva2VDb2xvcixcbiAgICBzdHJva2VPcGFjaXR5LFxuICAgIHN0cm9rZVdlaWdodCxcbiAgICBnZW9kZXNpYyxcbiAgICB2aXNpYmxlLFxuICAgIGNsaWNrYWJsZSxcbiAgICBlZGl0YWJsZSxcbiAgICBpY29ucyxcbiAgICB6SW5kZXgsXG4gIH07XG5cbiAgY29uc3QgcG9seWxpbmUgPSBuZXcgZ29vZ2xlLm1hcHMuUG9seWxpbmUocG9seWxpbmVPcHRpb25zKTtcblxuICBzZXR1cEV2ZW50cyh7IGV2ZW50czogRVZFTlRTLCBvYmplY3Q6IHBvbHlsaW5lLCBpbnN0YW5jZTogdGhpcywgaGFuZGxlcnM6IG9wdGlvbnMsIH0pO1xuXG4gIHRoaXMucG9seWxpbmVzLnB1c2gocG9seWxpbmUpO1xuXG4gIEdNYXBzLmZpcmUoJ3BvbHlsaW5lX2FkZGVkJywgcG9seWxpbmUsIHRoaXMpO1xuXG4gIHJldHVybiBwb2x5bGluZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGEgcG9seWxpbmUgZnJvbSB0aGUgbWFwIGFuZCBmcm9tIHRoZSBwb2x5bGluZXMgY29sbGVjdGlvbi4gVGhpcyBtZXRob2QgYWxzbyBmaXJlcyBhIGBwb2x5bGluZV9yZW1vdmVkYCBldmVudC5cbiAqIEBmdW5jdGlvbiByZW1vdmVQb2x5bGluZVxuICpcbiAqIEBwYXJhbSB7Z29vZ2xlLm1hcHMuUG9seWxpbmV9IHBvbHlsaW5lIC0gVGhlIHBvbHlsaW5lIHRvIGJlIHJlbW92ZWQuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5yZW1vdmVQb2x5bGluZSA9IGZ1bmN0aW9uIHJlbW92ZVBvbHlsaW5lKHBvbHlsaW5lKSB7XG4gIGNvbnN0IHBvbHlsaW5lSW5kZXggPSB0aGlzLnBvbHlsaW5lcy5pbmRleE9mKHBvbHlsaW5lKTtcblxuICBpZiAocG9seWxpbmVJbmRleCA+PSAwKSB7XG4gICAgcG9seWxpbmUuc2V0TWFwKG51bGwpO1xuICAgIHRoaXMucG9seWxpbmVzLnNwbGljZShwb2x5bGluZUluZGV4LCAxKTtcblxuICAgIEdNYXBzLmZpcmUoJ3BvbHlsaW5lX3JlbW92ZWQnLCBwb2x5bGluZSwgdGhpcyk7XG4gIH1cbn07XG5cbi8qKlxuICogUmVtb3ZlIGFsbCB0aGUgcG9seWxpbmVzIGZyb20gdGhlIG1hcCBhbmQgY2xlYXIgdGhlIHBvbHlsaW5lcyBjb2xsZWN0aW9uLiBUaGlzIG1ldGhvZCBkb2VzIG5vdCBmaXJlIGEgYHBvbHlsaW5lX3JlbW92ZWRgIGV2ZW50LlxuICogQGZ1bmN0aW9uIHJlbW92ZVBvbHlsaW5lc1xuICovXG5HTWFwcy5wcm90b3R5cGUucmVtb3ZlUG9seWxpbmVzID0gZnVuY3Rpb24gcmVtb3ZlUG9seWxpbmVzKCkge1xuICB0aGlzLnBvbHlsaW5lcy5mb3JFYWNoKHBvbHlsaW5lID0+IHBvbHlsaW5lLnNldE1hcChudWxsKSk7XG5cbiAgdGhpcy5wb2x5bGluZXMgPSBbXTtcbn07XG5cbi8qKlxuICogRHJhdyBhIGNpcmNsZSBpbiB0aGUgTWFwIGFuZCBpdCB0byB0aGUgcG9seWdvbnMgY29sbGVjdGlvbi5cbiAqIEBmdW5jdGlvbiBkcmF3Q2lyY2xlXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgYG9wdGlvbnNgIG9iamVjdCBzaG91bGQgY29udGFpbjpcbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLmxhdGl0dWRlIC0gTGF0aXR1ZGUgb2YgdGhlIGNlbnRlci4gSWYgYGxhdGl0dWRlYCBhbmQgYGxvbmdpdHVkZWAgYXJlIHNldCwgYGNlbnRlcmBpcyBpZ25vcmVkLlxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMubG9uZ2l0dWRlIC0gTG9uZ2l0dWRlIG9mIHRoZSBjZW50ZXIuIElmIGBsYXRpdHVkZWAgYW5kIGBsb25naXR1ZGVgIGFyZSBzZXQsIGBjZW50ZXJgaXMgaWdub3JlZC5cbiAqIEBwYXJhbSB7Z29vZ2xlLm1hcHMuTGF0TG5nfSBvcHRpb25zLmNlbnRlciAtIEEgYGdvb2dsZS5tYXBzLkxhdExuZ2AgY29vcmRpbmF0ZSBpbmRpY2F0ZSB0aGUgY2VudGVyLiBJZiBzZXQsIGBsYXRpdHVkZWAgYW5kIGBsb25naXR1ZGVgIGFyZSBpZ25vcmVkLlxuICpcbiAqIGBvcHRpb25zYCBhbHNvIGFjY2VwdHMgYW55IG9wdGlvbiBkZWZpbmVkIGluIHRoZSBbb2ZmaWNpYWwgZG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI0NpcmNsZU9wdGlvbnMpIGFuZCBhbnkgZXZlbnQgZGVmaW5lZCBpbiB0aGUgW1wiRXZlbnRzXCIgc2VjdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI0NpcmNsZSkuXG4gKlxuICogQHJldHVybnMge2dvb2dsZS5tYXBzLkNpcmNsZX1cbiAqL1xuR01hcHMucHJvdG90eXBlLmRyYXdDaXJjbGUgPSBmdW5jdGlvbiBkcmF3Q2lyY2xlKGJhc2VPcHRpb25zKSB7XG4gIGNvbnN0IHsgbGF0LCBsYXRpdHVkZSA9IGxhdCwgbG5nLCBsb25naXR1ZGUgPSBsbmcsIC4uLm9wdGlvbnMgfSA9IGJhc2VPcHRpb25zO1xuICBjb25zdCB7IGNlbnRlciA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobGF0aXR1ZGUsIGxvbmdpdHVkZSksIH0gPSBvcHRpb25zO1xuICBjb25zdCBwb2x5Z29uT3B0aW9ucyA9IHtcbiAgICAuLi5vcHRpb25zLFxuICAgIG1hcDogdGhpcy5tYXAsXG4gICAgY2VudGVyLFxuICB9O1xuXG4gIGNvbnN0IHBvbHlnb24gPSBuZXcgZ29vZ2xlLm1hcHMuQ2lyY2xlKHBvbHlnb25PcHRpb25zKTtcblxuICBzZXR1cEV2ZW50cyh7IGV2ZW50czogRVZFTlRTLCBvYmplY3Q6IHBvbHlnb24sIGluc3RhbmNlOiB0aGlzLCBoYW5kbGVyczogb3B0aW9ucywgfSk7XG5cbiAgdGhpcy5wb2x5Z29ucy5wdXNoKHBvbHlnb24pO1xuXG4gIHJldHVybiBwb2x5Z29uO1xufTtcblxuLyoqXG4gKiBEcmF3IGEgcmVjdGFuZ2xlIGluIHRoZSBNYXAgYW5kIGl0IHRvIHRoZSBwb2x5Z29ucyBjb2xsZWN0aW9uLlxuICogQGZ1bmN0aW9uIGRyYXdSZWN0YW5nbGVcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRoZSBgb3B0aW9uc2Agb2JqZWN0IHNob3VsZCBjb250YWluOlxuICogQHBhcmFtIHthcnJheX0gb3B0aW9ucy5ib3VuZHMgLSBCaS1kaW1lbnNpb25hbCBhcnJheSBvZiBsYXRpdHVkZXMgYW5kIGxvbmdpdHVkZXMuXG4gKlxuICogYG9wdGlvbnNgIGFsc28gYWNjZXB0cyBhbnkgb3B0aW9uIGRlZmluZWQgaW4gdGhlIFtvZmZpY2lhbCBkb2N1bWVudGF0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjUmVjdGFuZ2xlT3B0aW9ucykgYW5kIGFueSBldmVudCBkZWZpbmVkIGluIHRoZSBbXCJFdmVudHNcIiBzZWN0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjUmVjdGFuZ2xlKS5cbiAqXG4gKiBAcmV0dXJucyB7Z29vZ2xlLm1hcHMuUmVjdGFuZ2xlfVxuICovXG5HTWFwcy5wcm90b3R5cGUuZHJhd1JlY3RhbmdsZSA9IGZ1bmN0aW9uIGRyYXdSZWN0YW5nbGUoYmFzZU9wdGlvbnMpIHtcbiAgY29uc3QgeyBib3VuZHMsIC4uLm9wdGlvbnMgfSA9IGJhc2VPcHRpb25zO1xuXG4gIGNvbnN0IGxhdExuZ0JvdW5kcyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMoXG4gICAgbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhib3VuZHNbMF1bMF0sIGJvdW5kc1swXVsxXSksXG4gICAgbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhib3VuZHNbMV1bMF0sIGJvdW5kc1sxXVsxXSlcbiAgKTtcblxuICBjb25zdCBwb2x5Z29uT3B0aW9ucyA9IHtcbiAgICAuLi5vcHRpb25zLFxuICAgIGJvdW5kczogbGF0TG5nQm91bmRzLFxuICAgIG1hcDogdGhpcy5tYXAsXG4gIH07XG5cbiAgY29uc3QgcG9seWdvbiA9IG5ldyBnb29nbGUubWFwcy5SZWN0YW5nbGUocG9seWdvbk9wdGlvbnMpO1xuXG4gIHNldHVwRXZlbnRzKHsgZXZlbnRzOiBFVkVOVFMsIG9iamVjdDogcG9seWdvbiwgaW5zdGFuY2U6IHRoaXMsIGhhbmRsZXJzOiBvcHRpb25zLCB9KTtcblxuICB0aGlzLnBvbHlnb25zLnB1c2gocG9seWdvbik7XG5cbiAgcmV0dXJuIHBvbHlnb247XG59O1xuXG4vKipcbiAqIERyYXcgYSBwb2x5Z29uIGluIHRoZSBNYXAgYW5kIGl0IHRvIHRoZSBwb2x5Z29ucyBjb2xsZWN0aW9uLlxuICogQGZ1bmN0aW9uIGRyYXdQb2x5Z29uXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgYG9wdGlvbnNgIG9iamVjdCBzaG91bGQgY29udGFpbjpcbiAqIEBwYXJhbSB7YXJyYXl9IG9wdGlvbnMucGF0aHMgLSBCaS1kaW1lbnNpb25hbCBhcnJheSBvZiBsYXRpdHVkZXMgYW5kIGxvbmdpdHVkZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMudXNlR2VvSlNPTiAtIElmIHNldCwgYWxsb3dzIGBwYXRoc2AgdG8gdXNlIEdlb0pTT04gZm9ybWF0LlxuICpcbiAqIGBvcHRpb25zYCBhbHNvIGFjY2VwdHMgYW55IG9wdGlvbiBkZWZpbmVkIGluIHRoZSBbb2ZmaWNpYWwgZG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI1BvbHlnb25PcHRpb25zKSBhbmQgYW55IGV2ZW50IGRlZmluZWQgaW4gdGhlIFtcIkV2ZW50c1wiIHNlY3Rpb25dKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNQb2x5Z29uKS5cbiAqXG4gKiBAcmV0dXJucyB7Z29vZ2xlLm1hcHMuUG9seWdvbn1cbiAqL1xuR01hcHMucHJvdG90eXBlLmRyYXdQb2x5Z29uID0gZnVuY3Rpb24gZHJhd1BvbHlnb24oYmFzZU9wdGlvbnMpIHtcbiAgY29uc3QgeyB1c2VHZW9KU09OID0gZmFsc2UsIC4uLm9wdGlvbnMgfSA9IGJhc2VPcHRpb25zO1xuXG4gIGNvbnN0IGJhc2VQYXRocyA9IHVzZUdlb0pTT04gPyBvcHRpb25zLnBhdGhzIDogW29wdGlvbnMucGF0aHMuc2xpY2UoMCldO1xuICBsZXQgcGF0aHMgPSBbXTtcblxuICBpZiAoYmFzZVBhdGhzLmxlbmd0aCkge1xuICAgIGlmIChiYXNlUGF0aHNbMF0ubGVuZ3RoKSB7XG4gICAgICBwYXRocyA9IGZsYXR0ZW5BcnJheShcbiAgICAgICAgYmFzZVBhdGhzLm1hcChwYXRoID0+XG4gICAgICAgICAgYXJyYXlUb0xhdExuZyhwYXRoLCB1c2VHZW9KU09OKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHBvbHlnb25PcHRpb25zID0ge1xuICAgIC4uLm9wdGlvbnMsXG4gICAgbWFwOiB0aGlzLm1hcCxcbiAgICBwYXRocyxcbiAgfTtcblxuICBjb25zdCBwb2x5Z29uID0gbmV3IGdvb2dsZS5tYXBzLlBvbHlnb24ocG9seWdvbk9wdGlvbnMpO1xuXG4gIHNldHVwRXZlbnRzKHsgZXZlbnRzOiBFVkVOVFMsIG9iamVjdDogcG9seWdvbiwgaW5zdGFuY2U6IHRoaXMsIGhhbmRsZXJzOiBvcHRpb25zLCB9KTtcblxuICB0aGlzLnBvbHlnb25zLnB1c2gocG9seWdvbik7XG5cbiAgR01hcHMuZmlyZSgncG9seWdvbl9hZGRlZCcsIHBvbHlnb24sIHRoaXMpO1xuXG4gIHJldHVybiBwb2x5Z29uO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYSBwb2x5Z29uIGZyb20gdGhlIG1hcCBhbmQgZnJvbSB0aGUgcG9seWdvbnMgY29sbGVjdGlvbi4gVGhpcyBtZXRob2QgYWxzbyBmaXJlcyBhIGBwb2x5Z29uX3JlbW92ZWRgIGV2ZW50LlxuICogQGZ1bmN0aW9uIHJlbW92ZVBvbHlnb25cbiAqXG4gKiBAcGFyYW0ge2dvb2dsZS5tYXBzLlBvbHlnb259IHBvbHlnb24gLSBUaGUgcG9seWdvbiB0byBiZSByZW1vdmVkLlxuICovXG5HTWFwcy5wcm90b3R5cGUucmVtb3ZlUG9seWdvbiA9IGZ1bmN0aW9uIHJlbW92ZVBvbHlnb24ocG9seWdvbikge1xuICBjb25zdCBwb2x5Z29uSW5kZXggPSB0aGlzLnBvbHlnb25zLmluZGV4T2YocG9seWdvbik7XG5cbiAgaWYgKHBvbHlnb25JbmRleCA+PSAwKSB7XG4gICAgcG9seWdvbi5zZXRNYXAobnVsbCk7XG4gICAgdGhpcy5wb2x5Z29ucy5zcGxpY2UocG9seWdvbkluZGV4LCAxKTtcblxuICAgIEdNYXBzLmZpcmUoJ3BvbHlnb25fcmVtb3ZlZCcsIHBvbHlnb24sIHRoaXMpO1xuICB9XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbGwgdGhlIHBvbHlnb25zIGZyb20gdGhlIG1hcCBhbmQgY2xlYXIgdGhlIHBvbHlnb25zIGNvbGxlY3Rpb24uIFRoaXMgbWV0aG9kIGRvZXMgbm90IGZpcmUgYSBgcG9seWdvbl9yZW1vdmVkYCBldmVudC5cbiAqIEBmdW5jdGlvbiByZW1vdmVQb2x5Z29uc1xuICovXG5HTWFwcy5wcm90b3R5cGUucmVtb3ZlUG9seWdvbnMgPSBmdW5jdGlvbiByZW1vdmVQb2x5Z29ucygpIHtcbiAgdGhpcy5wb2x5Z29ucy5mb3JFYWNoKHBvbHlnb24gPT4gcG9seWdvbi5zZXRNYXAobnVsbCkpO1xuXG4gIHRoaXMucG9seWdvbnMgPSBbXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXBzO1xuIiwiaW1wb3J0IEdNYXBzIGZyb20gJy4vY29yZSc7XG5pbXBvcnQgJy4vZXZlbnRzJztcbmltcG9ydCAnLi9jb250cm9scyc7XG5pbXBvcnQgJy4vZ2VvZmVuY2VzJztcbmltcG9ydCAnLi9tYXJrZXJzJztcbmltcG9ydCAnLi9vdmVybGF5cyc7XG5pbXBvcnQgJy4vZ2VvbWV0cnknO1xuaW1wb3J0ICcuL2xheWVycyc7XG5pbXBvcnQgJy4vcm91dGVzJztcbmltcG9ydCAnLi9zdGF0aWMnO1xuaW1wb3J0ICcuL21hcF90eXBlcyc7XG5pbXBvcnQgJy4vc3R5bGVzJztcbmltcG9ydCAnLi9zdHJlZXR2aWV3JztcbmltcG9ydCAnLi9wb2x5ZmlsbHMnO1xuaW1wb3J0ICcuL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgR01hcHM7XG4iLCJpbXBvcnQgR01hcHMsIHsgc2V0dXBFdmVudExpc3RlbmVyIH0gZnJvbSAnLi9jb3JlJztcbmltcG9ydCAnLi9ldmVudHMnO1xuXG4vKipcbiAqIEV4dGVuZHMgR01hcHMgdG8gdXNlIHBvbHlsaW5lcyBhbmQgcG9seWdvbnMuXG4gKiBAbW9kdWxlIExheWVyc1xuICovXG5cbkdNYXBzLnByb3RvdHlwZS5nZXRGcm9tRnVzaW9uVGFibGVzID0gZnVuY3Rpb24gZ2V0RnJvbUZ1c2lvblRhYmxlcyhiYXNlT3B0aW9ucykge1xuICBjb25zdCB7IGV2ZW50cyA9IHt9LCAuLi5vcHRpb25zIH0gPSBiYXNlT3B0aW9ucztcblxuICBjb25zdCBsYXllciA9IG5ldyBnb29nbGUubWFwcy5GdXNpb25UYWJsZXNMYXllcihvcHRpb25zKTtcblxuICBPYmplY3Qua2V5cyhldmVudHMpLmZvckVhY2goZXZlbnROYW1lID0+XG4gICAgc2V0dXBFdmVudExpc3RlbmVyKHtcbiAgICAgIG9iamVjdDogbGF5ZXIsXG4gICAgICBldmVudE5hbWUsXG4gICAgICBpbnN0YW5jZTogdGhpcyxcbiAgICAgIGhhbmRsZXI6IGV2ZW50c1tldmVudE5hbWVdLFxuICAgIH0pXG4gICk7XG5cbiAgdGhpcy5sYXllcnMucHVzaChsYXllcik7XG5cbiAgcmV0dXJuIGxheWVyO1xufTtcblxuLyoqXG4gKiBEcmF3IGEgRnVzaW9uVGFibGVzIGxheWVyIGluIHRoZSBNYXAuXG4gKiBAZnVuY3Rpb24gbG9hZEZyb21GdXNpb25UYWJsZXNcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRoZSBgb3B0aW9uc2AgYWNjZXB0cyBhbnkgb3B0aW9uIGRlZmluZWQgaW4gdGhlIFtvZmZpY2lhbCBkb2N1bWVudGF0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjRnVzaW9uVGFibGVzTGF5ZXJPcHRpb25zKS5cbiAqXG4gKiBgb3B0aW9uc2AgYWxzbyBhY2NlcHRzIGFuIGBldmVudHNgIG9iamVjdCwgd2hpY2ggYWNjZXB0cyBvbmx5IGBjbGlja2AuXG4gKlxuICogQHJldHVybnMge2dvb2dsZS5tYXBzLkZ1c2lvblRhYmxlc0xheWVyfVxuICovXG5HTWFwcy5wcm90b3R5cGUubG9hZEZyb21GdXNpb25UYWJsZXMgPSBmdW5jdGlvbiBsb2FkRnJvbUZ1c2lvblRhYmxlcyhvcHRpb25zKSB7XG4gIGNvbnN0IGxheWVyID0gdGhpcy5nZXRGcm9tRnVzaW9uVGFibGVzKG9wdGlvbnMpO1xuICBsYXllci5zZXRNYXAodGhpcy5tYXApO1xuXG4gIHJldHVybiBsYXllcjtcbn07XG5cbkdNYXBzLnByb3RvdHlwZS5nZXRGcm9tS01MID0gZnVuY3Rpb24gZ2V0RnJvbUtNTChiYXNlT3B0aW9ucykge1xuICBjb25zdCB7IHVybCwgZXZlbnRzLCAuLi5vcHRpb25zIH0gPSBiYXNlT3B0aW9ucztcblxuICBjb25zdCBsYXllciA9IG5ldyBnb29nbGUubWFwcy5LbWxMYXllcih1cmwsIG9wdGlvbnMpO1xuXG4gIE9iamVjdC5rZXlzKGV2ZW50cykuZm9yRWFjaChldmVudE5hbWUgPT5cbiAgICBzZXR1cEV2ZW50TGlzdGVuZXIoe1xuICAgICAgb2JqZWN0OiBsYXllcixcbiAgICAgIGV2ZW50TmFtZSxcbiAgICAgIGluc3RhbmNlOiB0aGlzLFxuICAgICAgaGFuZGxlcjogZXZlbnRzW2V2ZW50TmFtZV0sXG4gICAgfSlcbiAgKTtcblxuICB0aGlzLmxheWVycy5wdXNoKGxheWVyKTtcblxuICByZXR1cm4gbGF5ZXI7XG59O1xuXG4vKipcbiAqIERyYXcgYSBLTUwgbGF5ZXIgaW4gdGhlIE1hcC5cbiAqIEBmdW5jdGlvbiBsb2FkRnJvbUtNTFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBhY2NlcHRzIGFueSBvcHRpb24gZGVmaW5lZCBpbiB0aGUgW29mZmljaWFsIGRvY3VtZW50YXRpb25dKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNLbWxMYXllck9wdGlvbnMpLlxuICpcbiAqIGBvcHRpb25zYCBhbHNvIGFjY2VwdHMgYW4gYGV2ZW50c2Agb2JqZWN0LCB3aGljaCBhY2NlcHRzIGFsbCBldmVudHMgZGVmaW5lZCBpbiB0aGUgW1wiRXZlbnRzXCIgc2VjdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI0ttbExheWVyKS5cbiAqXG4gKiBAcmV0dXJucyB7Z29vZ2xlLm1hcHMuS21sTGF5ZXJ9XG4gKi9cbkdNYXBzLnByb3RvdHlwZS5sb2FkRnJvbUtNTCA9IGZ1bmN0aW9uIGxvYWRGcm9tS01MKG9wdGlvbnMpIHtcbiAgY29uc3QgbGF5ZXIgPSB0aGlzLmdldEZyb21LTUwob3B0aW9ucyk7XG4gIGxheWVyLnNldE1hcCh0aGlzLm1hcCk7XG5cbiAgcmV0dXJuIGxheWVyO1xufTtcblxuLyoqXG4gKiBEcmF3IGEgbGF5ZXIgaW4gdGhlIE1hcC4gVGhpcyBtZXRob2QgYWxzbyBmaXJlcyBhIGBsYXllcl9hZGRlZGAgZXZlbnQuXG4gKiBAZnVuY3Rpb24gYWRkTGF5ZXJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbGF5ZXJOYW1lIC0gVGhlIG5hbWUgb2YgYSBHb29nbGUgTWFwcyBsYXllciwgd2hpY2ggY2FuIGJlOiBgdHJhZmZpY2AsIGB0cmFuc2l0YCBvciBgYmljeWNsaW5nYC5cbiAqXG4gKiBAcmV0dXJucyB7Z29vZ2xlLm1hcHMuVHJhZmZpY0xheWVyfGdvb2dsZS5tYXBzLlRyYW5zaXRMYXllcnxnb29nbGUubWFwcy5CaWN5Y2xpbmdMYXllcn1cbiAqL1xuR01hcHMucHJvdG90eXBlLmFkZExheWVyID0gZnVuY3Rpb24gYWRkTGF5ZXIobGF5ZXJOYW1lLCBiYXNlT3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHsgZmlsdGVyLCBjbGljaywgc2VhcmNoLCBuZWFyYnlTZWFyY2gsIHJhZGFyU2VhcmNoLCB0ZXh0U2VhcmNoLCAuLi5vcHRpb25zIH0gPSBiYXNlT3B0aW9ucztcbiAgY29uc3QgeyBib3VuZHMsIGtleXdvcmQsIGxvY2F0aW9uLCBuYW1lLCByYWRpdXMsIHJhbmtCeSwgdHlwZXMsIHF1ZXJ5LCB9ID0gb3B0aW9ucztcbiAgbGV0IGxheWVyO1xuXG4gIHN3aXRjaCAobGF5ZXJOYW1lKSB7XG4gICAgY2FzZSAndHJhZmZpYyc6XG4gICAgICBsYXllciA9IG5ldyBnb29nbGUubWFwcy5UcmFmZmljTGF5ZXIoKTtcbiAgICAgIHRoaXMuc2luZ2xlTGF5ZXJzLnRyYWZmaWMgPSBsYXllcjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3RyYW5zaXQnOlxuICAgICAgbGF5ZXIgPSBuZXcgZ29vZ2xlLm1hcHMuVHJhbnNpdExheWVyKCk7XG4gICAgICB0aGlzLnNpbmdsZUxheWVycy50cmFuc2l0ID0gbGF5ZXI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdiaWN5Y2xpbmcnOlxuICAgICAgbGF5ZXIgPSBuZXcgZ29vZ2xlLm1hcHMuQmljeWNsaW5nTGF5ZXIoKTtcbiAgICAgIHRoaXMuc2luZ2xlTGF5ZXJzLmJpY3ljbGluZyA9IGxheWVyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncGxhY2VzJzpcbiAgICAgIGxheWVyID0gbmV3IGdvb2dsZS5tYXBzLnBsYWNlcy5QbGFjZXNTZXJ2aWNlKHRoaXMubWFwKTtcbiAgICAgIHRoaXMuc2luZ2xlTGF5ZXJzLnBsYWNlcyA9IGxheWVyO1xuXG4gICAgICBpZiAoc2VhcmNoIHx8IG5lYXJieVNlYXJjaCB8fCByYWRhclNlYXJjaCkge1xuICAgICAgICBjb25zdCBwbGFjZVNlYXJjaFJlcXVlc3QgPSB7XG4gICAgICAgICAgYm91bmRzLFxuICAgICAgICAgIGtleXdvcmQsXG4gICAgICAgICAgbG9jYXRpb24sXG4gICAgICAgICAgbmFtZSxcbiAgICAgICAgICByYWRpdXMsXG4gICAgICAgICAgcmFua0J5LFxuICAgICAgICAgIHR5cGVzLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChyYWRhclNlYXJjaCkge1xuICAgICAgICAgIGxheWVyLnJhZGFyU2VhcmNoKHBsYWNlU2VhcmNoUmVxdWVzdCwgcmFkYXJTZWFyY2gpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlYXJjaCkge1xuICAgICAgICAgIGxheWVyLnNlYXJjaChwbGFjZVNlYXJjaFJlcXVlc3QsIHNlYXJjaCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmVhcmJ5U2VhcmNoKSB7XG4gICAgICAgICAgbGF5ZXIubmVhcmJ5U2VhcmNoKHBsYWNlU2VhcmNoUmVxdWVzdCwgbmVhcmJ5U2VhcmNoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGV4dFNlYXJjaCkge1xuICAgICAgICBjb25zdCB0ZXh0U2VhcmNoUmVxdWVzdCA9IHtcbiAgICAgICAgICBib3VuZHMsXG4gICAgICAgICAgbG9jYXRpb24sXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgcmFkaXVzLFxuICAgICAgICB9O1xuXG4gICAgICAgIGxheWVyLnRleHRTZWFyY2godGV4dFNlYXJjaFJlcXVlc3QsIHRleHRTZWFyY2gpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgaWYgKGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBsYXllci5zZXRPcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBsYXllci5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbGF5ZXIuc2V0TWFwID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBsYXllci5zZXRNYXAodGhpcy5tYXApO1xuICAgIH1cblxuICAgIEdNYXBzLmZpcmUoJ2xheWVyX2FkZGVkJywgbGF5ZXIsIHRoaXMpO1xuXG4gICAgcmV0dXJuIGxheWVyO1xuICB9XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhIGxheWVyIGZyb20gdGhlIG1hcC4gSWYgdGhlIGxheWVyIGlzIGEgRnVzaW9uVGFibGVzIGxheWVyIG9yIGEgS01MIGxheWVyLCBgcmVtb3ZlTGF5ZXJgIGFsc28gcmVtb3ZlcyB0aGUgbGF5ZXIgZnJvbSB0aGUgbGF5ZXJzIGNvbGxlY3Rpb24gYW5kIGZpcmVzIGEgYGxheWVyX3JlbW92ZWRgIGV2ZW50LlxuICogQGZ1bmN0aW9uIHJlbW92ZUxheWVyXG4gKlxuICogQHBhcmFtIHtnb29nbGUubWFwcy5Qb2x5Z29ufSBwb2x5Z29uIC0gVGhlIHBvbHlnb24gdG8gYmUgcmVtb3ZlZC5cbiAqL1xuR01hcHMucHJvdG90eXBlLnJlbW92ZUxheWVyID0gZnVuY3Rpb24gcmVtb3ZlTGF5ZXIobGF5ZXIpIHtcbiAgaWYgKHR5cGVvZiBsYXllciA9PT0gJ3N0cmluZycgJiYgdGhpcy5zaW5nbGVMYXllcnNbbGF5ZXJdICE9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLnNpbmdsZUxheWVyc1tsYXllcl0uc2V0TWFwKG51bGwpO1xuXG4gICAgZGVsZXRlIHRoaXMuc2luZ2xlTGF5ZXJzW2xheWVyXTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBsYXllckluZGV4ID0gdGhpcy5sYXllcnMuaW5kZXhPZihsYXllcik7XG5cbiAgICBpZiAobGF5ZXJJbmRleCA+PSAwKSB7XG4gICAgICBsYXllci5zZXRNYXAobnVsbCk7XG4gICAgICB0aGlzLmxheWVycy5zcGxpY2UobGF5ZXJJbmRleCwgMSk7XG5cbiAgICAgIEdNYXBzLmZpcmUoJ2xheWVyX3JlbW92ZWQnLCBsYXllciwgdGhpcyk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHTWFwcztcbiIsImltcG9ydCBHTWFwcyBmcm9tICcuL2NvcmUnO1xuaW1wb3J0ICcuL2V2ZW50cyc7XG5cbi8qKlxuICogRXh0ZW5kcyBHTWFwcyB0byB1c2UgY3VzdG9tIE1hcCBUeXBlcy5cbiAqIEBtb2R1bGUgTWFwVHlwZXNcbiAqL1xuXG4vKipcbiAqIERyYXcgYSBjdXN0b20gW3RpbGUtYmFzZWQgbWFwIHR5cGVdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L21hcHR5cGVzI0ltYWdlTWFwVHlwZXMpIGluIHRoZSBNYXAsIHdoaWNoIGNhbiBiZSB1c2VkIHdpdGggdGhlIGJhc2UgbWFwIHR5cGVzIChgaHlicmlkYCwgYHJvYWRtYXBgLCBgc2F0ZWxsaXRlYCBhbmQgYHRlcnJhaW5gKS5cbiAqIEBmdW5jdGlvbiBhZGRNYXBUeXBlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1hcFR5cGVJZCAtIEEgc2ltcGxlIGlkZW50aWZpZXIgZm9yIHRoZSBjdXN0b20gbWFwIHR5cGUuXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRoZSBgb3B0aW9uc2Agb2JqZWN0IHNob3VsZCBjb250YWluOlxuICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5nZXRUaWxlVXJsIC0gQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gVVJMIGZvciB0aWxlLWJhc2VkIGVuZHBvaW50cy4gSXQgcmVjZWl2ZXMgdHdvIGFyZ3VtZW50czpcbiAqICAgKiBgcG9pbnRzYCAoZ29vZ2xlLm1hcHMuUG9pbnQpOiBhIHBvaW50IHdpdGggYHhgIGFuZCBgeWAgKGlzIG5vdCBhIGNvb3JkaW5hdGUpLlxuICogICAqIGB6b29tYCAobnVtYmVyKTogYSB6b29tIGxldmVsLlxuICogQHBhcmFtIHtnb29nbGUubWFwcy5TaXplfSBvcHRpb25zLnRpbGVTaXplIC0gVGhlIHNpemUgb2YgdGhlIHRpbGUuXG4gKlxuICogQHJldHVybnMge2dvb2dsZS5tYXBzLkltYWdlTWFwVHlwZX1cbiAqL1xuR01hcHMucHJvdG90eXBlLmFkZE1hcFR5cGUgPSBmdW5jdGlvbiBhZGRNYXBUeXBlKG1hcFR5cGVJZCwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHsgZ2V0VGlsZVVybCwgdGlsZVNpemUgPSBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSgyNTYsIDI1NiksIH0gPSBvcHRpb25zO1xuXG4gIGlmICh0eXBlb2YgZ2V0VGlsZVVybCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIidnZXRUaWxlVXJsJyBmdW5jdGlvbiByZXF1aXJlZC5cIik7XG4gIH1cblxuICBjb25zdCBtYXBUeXBlID0gbmV3IGdvb2dsZS5tYXBzLkltYWdlTWFwVHlwZSh7IGdldFRpbGVVcmwsIHRpbGVTaXplLCB9KTtcblxuICB0aGlzLm1hcC5tYXBUeXBlcy5zZXQobWFwVHlwZUlkLCBtYXBUeXBlKTtcblxuICByZXR1cm4gbWFwVHlwZTtcbn07XG5cbi8qKlxuICogRHJhdyBhIGN1c3RvbSBbb3ZlcmxheSBtYXAgdHlwZV0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvbWFwdHlwZXMjT3ZlcmxheU1hcFR5cGVzKSBpbiB0aGUgTWFwLiBUaGlzIG1ldGhvZCBhbHNvIGZpcmVzIGFuIGBvdmVybGF5X21hcF90eXBlX2FkZGVkYCBldmVudC5cbiAqIEBmdW5jdGlvbiBhZGRPdmVybGF5TWFwVHlwZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtYXBUeXBlSWQgLSBBIHNpbXBsZSBpZGVudGlmaWVyIGZvciB0aGUgY3VzdG9tIG1hcCB0eXBlLlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgYG9wdGlvbnNgIG9iamVjdCBzaG91bGQgY29udGFpbjpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMuZ2V0VGlsZSAtIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgRE9NIE5vZGUuIEl0IHJlY2VpdmVzIHRocmVlIGFyZ3VtZW50czpcbiAqICAgKiBgcG9pbnRzYCAoZ29vZ2xlLm1hcHMuUG9pbnQpOiBhIHBvaW50IHdpdGggYHhgIGFuZCBgeWAgKGlzIG5vdCBhIGNvb3JkaW5hdGUpLlxuICogICAqIGB6b29tYCAobnVtYmVyKTogYSB6b29tIGxldmVsLlxuICogICAqIGBvd25lckRvY3VtZW50YCAoRG9jdW1lbnQpOiBUaGUgRE9NIGRvY3VtZW50IHRoYXQgd2lsbCBjcmVhdGUgdGhlIG5vZGUuXG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5pbmRleCAtIFRoZSBpbmRleCBmb3IgdGhlIG92ZXJsYXkgbWFwIHR5cGUuIFVzZWQgdG8gc2V0IGRpZmZlcmVudGUgeiBsZXZlbHMgb24gc3RhY2tlZCBvdmVybGF5IG1hcHMuXG4gKiBAcGFyYW0ge2dvb2dsZS5tYXBzLlNpemV9IG9wdGlvbnMudGlsZVNpemUgLSBUaGUgc2l6ZSBvZiB0aGUgdGlsZS5cbiAqXG4gKiBgb3B0aW9uc2AgYWxzbyBhY2NlcHRzIGFueSBvcHRpb24gZGVmaW5lZCBpbiB0aGUgW29mZmljaWFsIGRvY3VtZW50YXRpb25dKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNNYXBUeXBlKS5cbiAqL1xuR01hcHMucHJvdG90eXBlLmFkZE92ZXJsYXlNYXBUeXBlID0gZnVuY3Rpb24gYWRkT3ZlcmxheU1hcFR5cGUob3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHsgZ2V0VGlsZSwgaW5kZXggPSB0aGlzLm1hcC5vdmVybGF5TWFwVHlwZXMubGVuZ3RoLCAuLi5vdmVybGF5TWFwVHlwZU9wdGlvbnMgfSA9IG9wdGlvbnM7XG5cbiAgaWYgKHR5cGVvZiBnZXRUaWxlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiJ2dldFRpbGUnIGZ1bmN0aW9uIHJlcXVpcmVkLlwiKTtcbiAgfVxuXG4gIHRoaXMubWFwLm92ZXJsYXlNYXBUeXBlcy5pbnNlcnRBdChpbmRleCwgeyAuLi5vdmVybGF5TWFwVHlwZU9wdGlvbnMsIGdldFRpbGUsIH0pO1xuICBHTWFwcy5maXJlKCdvdmVybGF5X21hcF90eXBlX2FkZGVkJywgdGhpcy5tYXAub3ZlcmxheU1hcFR5cGVzW2luZGV4XSwgdGhpcyk7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhIG92ZXJsYXkgbWFwIHR5cGUgZnJvbSB0aGUgbWFwLiBUaGlzIG1ldGhvZCBhbHNvIGZpcmVzIGFuIGBvdmVybGF5X21hcF90eXBlX3JlbW92ZWRgIGV2ZW50LlxuICogQGZ1bmN0aW9uIHJlbW92ZU92ZXJsYXlNYXBUeXBlXG4gKlxuICogQHBhcmFtIHtnb29nbGUubWFwcy5Qb2x5bGluZX0gcG9seWxpbmUgLSBUaGUgcG9seWxpbmUgdG8gYmUgcmVtb3ZlZC5cbiAqL1xuR01hcHMucHJvdG90eXBlLnJlbW92ZU92ZXJsYXlNYXBUeXBlID0gZnVuY3Rpb24gcmVtb3ZlT3ZlcmxheU1hcFR5cGUoaW5kZXgpIHtcbiAgY29uc3Qgb3ZlcmxheU1hcFR5cGUgPSB0aGlzLm1hcC5vdmVybGF5TWFwVHlwZXNbaW5kZXhdO1xuXG4gIHRoaXMubWFwLm92ZXJsYXlNYXBUeXBlcy5yZW1vdmVBdChpbmRleCk7XG4gIEdNYXBzLmZpcmUoJ292ZXJsYXlfbWFwX3R5cGVfcmVtb3ZlZCcsIG92ZXJsYXlNYXBUeXBlLCB0aGlzKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXBzO1xuIiwiaW1wb3J0IEdNYXBzLCB7IHNldHVwRXZlbnRzIH0gZnJvbSAnLi9jb3JlJztcbmltcG9ydCAnLi9ldmVudHMnO1xuaW1wb3J0ICcuL2dlb2ZlbmNlcyc7XG5cbi8qKlxuICogRXh0ZW5kcyBHTWFwcyB0byB1c2UgbWFya2Vycy5cbiAqIEBtb2R1bGUgTWFya2Vyc1xuICovXG5cbmNvbnN0IElORk9fV0lORE9XX0VWRU5UUyA9IFsnY2xvc2VjbGljaycsICdjb250ZW50X2NoYW5nZWQnLCAnZG9tcmVhZHknLCAncG9zaXRpb25fY2hhbmdlZCcsICd6aW5kZXhfY2hhbmdlZCddO1xuY29uc3QgTUFSS0VSX0VWRU5UUyA9IFsnYW5pbWF0aW9uX2NoYW5nZWQnLCAnY2xpY2thYmxlX2NoYW5nZWQnLCAnY3Vyc29yX2NoYW5nZWQnLCAnZHJhZ2dhYmxlX2NoYW5nZWQnLCAnZmxhdF9jaGFuZ2VkJywgJ2ljb25fY2hhbmdlZCcsICdwb3NpdGlvbl9jaGFuZ2VkJywgJ3NoYWRvd19jaGFuZ2VkJywgJ3NoYXBlX2NoYW5nZWQnLCAndGl0bGVfY2hhbmdlZCcsICd2aXNpYmxlX2NoYW5nZWQnLCAnemluZGV4X2NoYW5nZWQnXTtcbmNvbnN0IE1BUktFUl9NT1VTRV9FVkVOVFMgPSBbJ2RibGNsaWNrJywgJ2RyYWcnLCAnZHJhZ2VuZCcsICdkcmFnc3RhcnQnLCAnbW91c2Vkb3duJywgJ21vdXNlb3V0JywgJ21vdXNlb3ZlcicsICdtb3VzZXVwJ107XG5cbkdNYXBzLnByb3RvdHlwZS5jcmVhdGVNYXJrZXIgPSBmdW5jdGlvbiBjcmVhdGVNYXJrZXIoYmFzZU9wdGlvbnMpIHtcbiAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gIGNvbnN0IHsgbGF0LCBsYXRpdHVkZSA9IGxhdCwgbG5nLCBsb25naXR1ZGUgPSBsbmcsIHBvc2l0aW9uLCBkZXRhaWxzLCBmZW5jZXMsIG91dHNpZGUsIGluZm9XaW5kb3csIC4uLm9wdGlvbnMgfSA9IGJhc2VPcHRpb25zO1xuXG4gIGlmIChsYXRpdHVkZSA9PT0gdW5kZWZpbmVkICYmIGxvbmdpdHVkZSA9PT0gdW5kZWZpbmVkICYmIHBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGxhdGl0dWRlIG9yIGxvbmdpdHVkZSBkZWZpbmVkLicpO1xuICB9XG5cbiAgY29uc3QgbWFya2VyT3B0aW9ucyA9IHtcbiAgICAuLi5vcHRpb25zLFxuICAgIHBvc2l0aW9uOiBwb3NpdGlvbiB8fCBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGxhdGl0dWRlLCBsb25naXR1ZGUpLFxuICAgIG1hcDogbnVsbCxcbiAgfTtcblxuICBjb25zdCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKG1hcmtlck9wdGlvbnMpO1xuXG4gIG1hcmtlci5mZW5jZXMgPSBmZW5jZXM7XG5cbiAgaWYgKGluZm9XaW5kb3cpIHtcbiAgICBtYXJrZXIuaW5mb1dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KGluZm9XaW5kb3cpO1xuXG4gICAgc2V0dXBFdmVudHMoeyBldmVudHM6IElORk9fV0lORE9XX0VWRU5UUywgb2JqZWN0OiBtYXJrZXIuaW5mb1dpbmRvdywgaW5zdGFuY2U6IHRoaXMsIGhhbmRsZXJzOiBpbmZvV2luZG93LCB9KTtcbiAgfVxuXG4gIHNldHVwRXZlbnRzKHsgZXZlbnRzOiBNQVJLRVJfRVZFTlRTLCBvYmplY3Q6IG1hcmtlciwgaW5zdGFuY2U6IHRoaXMsIGhhbmRsZXJzOiBvcHRpb25zLCB9KTtcblxuICBNQVJLRVJfTU9VU0VfRVZFTlRTLmZvckVhY2goKGV2ZW50TmFtZSkgPT4ge1xuICAgIGlmIChvcHRpb25zW2V2ZW50TmFtZV0pIHtcbiAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlciwgZXZlbnROYW1lLCAoZXZlbnQgPSB0aGlzKSA9PiB7XG4gICAgICAgIGlmICghZXZlbnQucGl4ZWwpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICBldmVudC5waXhlbCA9IHRoaXMubWFwLmdldFByb2plY3Rpb24oKS5mcm9tTGF0TG5nVG9Qb2ludChldmVudC5sYXRMbmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgb3B0aW9uc1tldmVudE5hbWVdLmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXJrZXIsICdjbGljaycsIGZ1bmN0aW9uIG9uTWFya2VyQ2xpY2soZXZlbnQpIHtcbiAgICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzO1xuXG4gICAgaWYgKG9wdGlvbnMuY2xpY2spIHtcbiAgICAgIG9wdGlvbnMuY2xpY2suY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfVxuXG4gICAgaWYgKG1hcmtlci5pbmZvV2luZG93KSB7XG4gICAgICBzZWxmLmhpZGVJbmZvV2luZG93cygpO1xuICAgICAgbWFya2VyLmluZm9XaW5kb3cub3BlbihzZWxmLm1hcCwgbWFya2VyKTtcbiAgICB9XG4gIH0pO1xuXG4gIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlciwgJ3JpZ2h0Y2xpY2snLCBmdW5jdGlvbiBvbk1hcmtlclJpZ2h0Q2xpY2soZXZlbnQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBldmVudC5tYXJrZXIgPSB0aGlzO1xuXG4gICAgaWYgKG9wdGlvbnMucmlnaHRjbGljaykge1xuICAgICAgb3B0aW9ucy5yaWdodGNsaWNrLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIH1cblxuICAgIGlmIChHTWFwcy5jb250ZXh0TWVudXNbc2VsZi5pZF0ubWFya2VyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNlbGYuYnVpbGRDb250ZXh0TWVudSgnbWFya2VyJywgZXZlbnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKG1hcmtlci5mZW5jZXMpIHtcbiAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXJrZXIsICdkcmFnZW5kJywgZnVuY3Rpb24gb25NYXJrZXJEcmFnRW5kKCkge1xuICAgICAgc2VsZi5jaGVja01hcmtlckdlb2ZlbmNlKHRoaXMsIG91dHNpZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG1hcmtlcjtcbn07XG5cbi8qKlxuICogRHJhdyBhIG1hcmtlciBpbiB0aGUgTWFwIGFuZCBhZGQgaXQgdG8gdGhlIG1hcmtlcnMgY29sbGVjdGlvbi4gVGhpcyBtZXRob2QgYWxzbyBmaXJlcyBhIGBtYXJrZXJfYWRkZWRgIGV2ZW50LlxuICogQGZ1bmN0aW9uIGFkZE1hcmtlclxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBvYmplY3Qgc2hvdWxkIGNvbnRhaW46XG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5sYXRpdHVkZSAtIExhdGl0dWRlIG9mIHRoZSBjZW50ZXIuIElmIGBsYXRpdHVkZWAgYW5kIGBsb25naXR1ZGVgIGFyZSBzZXQsIGBjZW50ZXJgIGlzIGlnbm9yZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5sb25naXR1ZGUgLSBMb25naXR1ZGUgb2YgdGhlIGNlbnRlci4gSWYgYGxhdGl0dWRlYCBhbmQgYGxvbmdpdHVkZWAgYXJlIHNldCwgYGNlbnRlcmAgaXMgaWdub3JlZC5cbiAqIEBwYXJhbSB7Z29vZ2xlLm1hcHMuTGF0TG5nfSBvcHRpb25zLmNlbnRlciAtIEEgYGdvb2dsZS5tYXBzLkxhdExuZ2AgY29vcmRpbmF0ZSBpbmRpY2F0ZSB0aGUgY2VudGVyLiBJZiBzZXQsIGBsYXRpdHVkZWAgYW5kIGBsb25naXR1ZGVgIGFyZSBpZ25vcmVkLlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMuZGV0YWlscyAtIEN1c3RvbSBvYmplY3Qgd2l0aCBleHRyYSBkYXRhLlxuICogQHBhcmFtIHthcnJheX0gb3B0aW9ucy5mZW5jZXMgLSBDb2xsZWN0aW9uIG9mIGBnb29nbGUubWFwcy5Qb2x5Z29uYCBvYmplY3RzIHRoYXQgZGVmaW5lcyBhIG1hcmtlcidzIGJvdW5kYXJpZXMgb3IgZ2VvZmVuY2VzLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5vdXRzaWRlIC0gQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgbWFya2VyIGlzIG91c3RpZGUgYW55IG9mIGl0cyBmZW5jZXMuXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucy5pbmZvV2luZG93IC0gT2JqZWN0IHdpdGggYWxsIG9wdGlvbnMgZGVmaW5lZCBpbiBbZ29vZ2xlLm1hcHMuSW5mb1dpbmRvd09wdGlvbnNdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNJbmZvV2luZG93T3B0aW9ucykuXG4gKlxuICogYG9wdGlvbnNgIGFsc28gYWNjZXB0cyBhbnkgb3B0aW9uIGRlZmluZWQgaW4gdGhlIFtvZmZpY2lhbCBkb2N1bWVudGF0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjTWFya2VyT3B0aW9ucykgYW5kIGFueSBldmVudCBkZWZpbmVkIGluIHRoZSBbXCJFdmVudHNcIiBzZWN0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjTWFya2VyKS5cbiAqXG4gKiBAcmV0dXJucyB7Z29vZ2xlLm1hcHMuTWFya2VyfVxuICovXG5HTWFwcy5wcm90b3R5cGUuYWRkTWFya2VyID0gZnVuY3Rpb24gYWRkTWFya2VyKG9wdGlvbnMpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuICBjb25zdCB7IGdtX2FjY2Vzc29yc18sIGxhdCwgbGF0aXR1ZGUgPSBsYXQsIGxuZywgbG9uZ2l0dWRlID0gbG5nLCBwb3NpdGlvbiwgfSA9IG9wdGlvbnM7XG5cbiAgbGV0IG1hcmtlcjtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG4gIGlmIChnbV9hY2Nlc3NvcnNfKSB7XG4gICAgLy8gTmF0aXZlIGdvb2dsZS5tYXBzLk1hcmtlciBvYmplY3RcbiAgICBtYXJrZXIgPSBvcHRpb25zO1xuICB9IGVsc2UgaWYgKChsYXRpdHVkZSAmJiBsb25naXR1ZGUpIHx8IHBvc2l0aW9uKSB7XG4gICAgbWFya2VyID0gdGhpcy5jcmVhdGVNYXJrZXIob3B0aW9ucyk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBsYXRpdHVkZSBvciBsb25naXR1ZGUgZGVmaW5lZC4nKTtcbiAgfVxuXG4gIG1hcmtlci5zZXRNYXAodGhpcy5tYXApO1xuXG4gIGlmICh0aGlzLm1hcmtlckNsdXN0ZXJlcikge1xuICAgIHRoaXMubWFya2VyQ2x1c3RlcmVyLmFkZE1hcmtlcihtYXJrZXIpO1xuICB9XG5cbiAgdGhpcy5tYXJrZXJzLnB1c2gobWFya2VyKTtcblxuICBHTWFwcy5maXJlKCdtYXJrZXJfYWRkZWQnLCBtYXJrZXIsIHRoaXMpO1xuXG4gIHJldHVybiBtYXJrZXI7XG59O1xuXG4vKipcbiAqIERyYXcgYSBjb2xsZWN0aW9uIG9mIG1hcmtlcnMgaW50byB0aGUgTWFwLiBUaGlzIG1ldGhvZCBmaXJlcyBhIGBtYXJrZXJfYWRkZWRgIGV2ZW50IGZvciBlYWNoIG1hcmtlciBhZGRlZC5cbiAqIEBmdW5jdGlvbiBhZGRNYXJrZXJzXG4gKlxuICogQHBhcmFtIHthcnJheX0gbWFya2VycyAtIEFuIGFycmF5IG9mIGBvcHRpb25zYCBvYmplY3RzLCB3aGljaCBhY2NlcHRzIHRoZSBzYW1lIG9wdGlvbnMgYXMgaW4ge0BsaW5rIEdNYXBzI2FkZE1hcmtlcn0uXG4gKlxuICogQHJldHVybnMge2FycmF5fVxuICovXG5HTWFwcy5wcm90b3R5cGUuYWRkTWFya2VycyA9IGZ1bmN0aW9uIGFkZE1hcmtlcnMobWFya2Vycykge1xuICBtYXJrZXJzLmZvckVhY2gobWFya2VyID0+IHRoaXMuYWRkTWFya2VyKG1hcmtlcikpO1xuXG4gIHJldHVybiB0aGlzLm1hcmtlcnM7XG59O1xuXG4vKipcbiAqIEhpZGUgYWxsIG1hcmtlcnMnIEluZm9XaW5kb3dzLlxuICogQGZ1bmN0aW9uIGhpZGVJbmZvV2luZG93c1xuICovXG5HTWFwcy5wcm90b3R5cGUuaGlkZUluZm9XaW5kb3dzID0gZnVuY3Rpb24gaGlkZUluZm9XaW5kb3dzKCkge1xuICB0aGlzLm1hcmtlcnMuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgaWYgKG1hcmtlci5pbmZvV2luZG93KSB7XG4gICAgICBtYXJrZXIuaW5mb1dpbmRvdy5jbG9zZSgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhIG1hcmtlciBmcm9tIHRoZSBtYXAgYW5kIGZyb20gdGhlIG1hcmtlcnMgY29sbGVjdGlvbi4gVGhpcyBtZXRob2QgYWxzbyBmaXJlcyBhIGBtYXJrZXJfcmVtb3ZlZGAgZXZlbnQuXG4gKiBAZnVuY3Rpb24gcmVtb3ZlTWFya2VyXG4gKlxuICogQHBhcmFtIHtnb29nbGUubWFwcy5Qb2x5Z29ufSBwb2x5Z29uIC0gVGhlIHBvbHlnb24gdG8gYmUgcmVtb3ZlZC5cbiAqL1xuR01hcHMucHJvdG90eXBlLnJlbW92ZU1hcmtlciA9IGZ1bmN0aW9uIHJlbW92ZU1hcmtlcihtYXJrZXIsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7IGZpcmVFdmVudCA9IHRydWUsIH0gPSBvcHRpb25zO1xuICBjb25zdCBtYXJrZXJJbmRleCA9IHRoaXMubWFya2Vycy5pbmRleE9mKG1hcmtlcik7XG5cbiAgaWYgKG1hcmtlckluZGV4ID49IDApIHtcbiAgICBtYXJrZXIuc2V0TWFwKG51bGwpO1xuICAgIHRoaXMubWFya2Vycy5zcGxpY2UobWFya2VySW5kZXgsIDEpO1xuXG4gICAgaWYgKHRoaXMubWFya2VyQ2x1c3RlcmVyKSB7XG4gICAgICB0aGlzLm1hcmtlckNsdXN0ZXJlci5yZW1vdmVNYXJrZXIobWFya2VyKTtcbiAgICB9XG5cbiAgICBpZiAoZmlyZUV2ZW50KSB7XG4gICAgICBHTWFwcy5maXJlKCdtYXJrZXJfcmVtb3ZlZCcsIG1hcmtlciwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1hcmtlcjtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGEgZ3JvdXAgb2YgbWFya2VycyAob3IgYWxsIG9mIHRoZW0pIGZyb20gdGhlIE1hcCBhbmQgZnJvbSB0aGUgbWFya2VycyBjb2xsZWN0aW9uLiBUaGlzIG1ldGhvZCBkb2VzIG5vdCBmaXJlIGEgYG1hcmtlcl9yZW1vdmVkYCBldmVudC5cbiAqIEBmdW5jdGlvbiByZW1vdmVNYXJrZXJzXG4gKlxuICogQHBhcmFtIHthcnJheX0gbWFya2VycyAtIFRoZSBtYXJrZXJzIHRvIGJlIHJlbW92ZWQuIElmIG5vdCBzZXQsIGl0IHJlbW92ZXMgYWxsIG1hcmtlcnMgaW4gdGhlIE1hcC5cbiAqL1xuR01hcHMucHJvdG90eXBlLnJlbW92ZU1hcmtlcnMgPSBmdW5jdGlvbiByZW1vdmVNYXJrZXJzKG1hcmtlcnMgPSB0aGlzLm1hcmtlcnMpIHtcbiAgbWFya2Vycy5mb3JFYWNoKG1hcmtlciA9PiB0aGlzLnJlbW92ZU1hcmtlcihtYXJrZXIsIHsgZmlyZUV2ZW50OiBmYWxzZSwgfSkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR01hcHM7XG4iLCJpbXBvcnQgR01hcHMgZnJvbSAnLi9jb3JlJztcbmltcG9ydCAnLi9ldmVudHMnO1xuXG4vKipcbiAqIEV4dGVuZHMgR01hcHMgdG8gdXNlIGN1c3RvbSBvdmVybGF5cy5cbiAqIEBtb2R1bGUgT3ZlcmxheXNcbiAqL1xuXG5jb25zdCBTVE9QX1BST1BBR0FUSU9OX0VWRU5UUyA9IFsnY29udGV4dG1lbnUnLCAnRE9NTW91c2VTY3JvbGwnLCAnZGJsY2xpY2snLCAnbW91c2Vkb3duJ107XG5cbi8qKlxuICogRHJhdyBhbiBvdmVybGF5IGluIHRoZSBNYXAgYW5kIGFkZCBpdCB0byB0aGUgb3ZlcmxheXMgY29sbGVjdGlvbi4gVGhpcyBtZXRob2QgYWxzbyBmaXJlcyBhIGBvdmVybGF5X2FkZGVkYCBldmVudC5cbiAqIEBmdW5jdGlvbiBkcmF3T3ZlcmxheVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBvYmplY3Qgc2hvdWxkIGNvbnRhaW46XG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuYXV0b1Nob3cgLSBTaG93IHRoZSBvdmVybGF5IGlubWVkaWF0bHkgYWZ0ZXIgYmVpbmcgY3JlYXRlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLmxhdGl0dWRlIC0gTGF0aXR1ZGUgb2YgdGhlIGNvb3JkaW5hdGUgd2hlcmUgdGhlIG92ZXJsYXkgaXMgcGxhY2VkLiBJZiBgbGF0aXR1ZGVgIGFuZCBgbG9uZ2l0dWRlYCBhcmUgc2V0LCBgcG9zaXRpb25gaXMgaWdub3JlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLmxvbmdpdHVkZSAtIExvbmdpdHVkZSBvZiB0aGUgY29vcmRpbmF0ZSB3aGVyZSB0aGUgb3ZlcmxheSBpcyBwbGFjZWQuIElmIGBsYXRpdHVkZWAgYW5kIGBsb25naXR1ZGVgIGFyZSBzZXQsIGBwb3NpdGlvbmBpcyBpZ25vcmVkLlxuICogQHBhcmFtIHtnb29nbGUubWFwcy5MYXRMbmd9IG9wdGlvbnMucG9zaXRpb24gLSBBIGBnb29nbGUubWFwcy5MYXRMbmdgIGNvb3JkaW5hdGUgd2hlcmUgdGhlIG92ZXJsYXkgaXMgcGxhY2VkLiBJZiBzZXQsIGBsYXRpdHVkZWAgYW5kIGBsb25naXR1ZGVgIGFyZSBpZ25vcmVkLlxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuY29udGVudCAtIEhUTUwgdGhhdCB3aWxsIGJlIGRyYXduIGluIHRoZSBvdmVybGF5LlxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubGF5ZXIgLSBJZCBvZiBhbnkgb2YgdGhlIGxheWVycyBkZWZpbmVkIGluIFtnb29nbGUubWFwcy5NYXBQYW5lc10oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI01hcFBhbmVzKTpcbiAqICAgKiBmbG9hdFBhbmVcbiAqICAgKiBmbG9hdFNoYWRvd1xuICogICAqIG1hcFBhbmVcbiAqICAgKiBvdmVybGF5SW1hZ2VcbiAqICAgKiBvdmVybGF5TGF5ZXJcbiAqICAgKiBvdmVybGF5TW91c2VUYXJnZXRcbiAqICAgKiBvdmVybGF5U2hhZG93XG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy52ZXJ0aWNhbEFsaWduIC0gVmVydGljYWwgYWxpZ24gb2YgdGhlIG92ZXJsYXkgKHdoZXJlIHRoZSBjZW50ZXIgaXMgdGhlIGNvb3JkaW5hdGUgYGxhdGl0dWRlYCwgYGxvbmdpdHVkZWApOlxuICogICAqIHRvcFxuICogICAqIG1pZGRsZVxuICogICAqIGJvdHRvbVxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuaG9yaXpvbnRhbEFsaWduIC0gSG9yaXpvbnRhbCBhbGlnbiBvZiB0aGUgb3ZlcmxheSAod2hlcmUgdGhlIGNlbnRlciBpcyB0aGUgY29vcmRpbmF0ZSBgbGF0aXR1ZGVgLCBgbG9uZ2l0dWRlYCk6XG4gKiAgICogbGVmdFxuICogICAqIGNlbnRlclxuICogICAqIHJpZ2h0XG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5ob3Jpem9udGFsT2Zmc2V0IC0gSG9yaXpvbnRhbCBvZmZzZXQgaW4gcGl4ZWxzIG9mIHRoZSBvdmVybGF5LlxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMudmVydGljYWxPZmZzZXQgLSBWZXJ0aWNhbCBvZmZzZXQgaW4gcGl4ZWxzIG9mIHRoZSBvdmVybGF5LlxuICpcbiAqIEByZXR1cm5zIHtnb29nbGUubWFwcy5PdmVybGF5Vmlld31cbiAqL1xuR01hcHMucHJvdG90eXBlLmRyYXdPdmVybGF5ID0gZnVuY3Rpb24gZHJhd092ZXJsYXkoYmFzZU9wdGlvbnMpIHtcbiAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gIGNvbnN0IG92ZXJsYXkgPSBuZXcgZ29vZ2xlLm1hcHMuT3ZlcmxheVZpZXcoKTtcbiAgY29uc3Qge1xuICAgIGF1dG9TaG93ID0gdHJ1ZSxcbiAgICBsYXQsXG4gICAgbGF0aXR1ZGUgPSBsYXQsXG4gICAgbG5nLFxuICAgIGxvbmdpdHVkZSA9IGxuZyxcbiAgICBwb3NpdGlvbiA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobGF0aXR1ZGUsIGxvbmdpdHVkZSksXG4gICAgbGF5ZXIgPSAnb3ZlcmxheUxheWVyJyxcbiAgICBob3Jpem9udGFsT2Zmc2V0ID0gMCxcbiAgICB2ZXJ0aWNhbE9mZnNldCA9IDAsXG4gICAgdmVydGljYWxBbGlnbixcbiAgICBob3Jpem9udGFsQWxpZ24sXG4gICAgLi4ub3B0aW9uc1xuICB9ID0gYmFzZU9wdGlvbnM7XG5cbiAgb3ZlcmxheS5zZXRNYXAodGhpcy5tYXApO1xuXG4gIG92ZXJsYXkub25BZGQgPSBmdW5jdGlvbiBvbkFkZCgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBlbGVtZW50LnN0eWxlLmJvcmRlclN0eWxlID0gJ25vbmUnO1xuICAgIGVsZW1lbnQuc3R5bGUuYm9yZGVyV2lkdGggPSAnMHB4JztcbiAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBlbGVtZW50LnN0eWxlLnpJbmRleCA9IDEwMDtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IG9wdGlvbnMuY29udGVudDtcblxuICAgIG92ZXJsYXkuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICBjb25zdCBwYW5lcyA9IHRoaXMuZ2V0UGFuZXMoKTtcbiAgICBjb25zdCBvdmVybGF5TGF5ZXIgPSBwYW5lc1tsYXllcl07XG5cbiAgICBvdmVybGF5TGF5ZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbiAgICBTVE9QX1BST1BBR0FUSU9OX0VWRU5UUy5mb3JFYWNoKGV2ZW50TmFtZSA9PlxuICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIoZWxlbWVudCwgZXZlbnROYW1lLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGdsb2JhbC5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignbXNpZScpICE9PSAtMSAmJiBkb2N1bWVudC5hbGwpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICBldmVudC5jYW5jZWxCdWJibGUgPSB0cnVlO1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIGlmIChvcHRpb25zLmNsaWNrKSB7XG4gICAgICBwYW5lcy5vdmVybGF5TW91c2VUYXJnZXQuYXBwZW5kQ2hpbGQob3ZlcmxheS5lbGVtZW50KTtcbiAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyKG92ZXJsYXkuZWxlbWVudCwgJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBvcHRpb25zLmNsaWNrLmNhbGwoc2VsZiwgb3ZlcmxheSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBnb29nbGUubWFwcy5ldmVudC50cmlnZ2VyKHRoaXMsICdyZWFkeScpO1xuICB9O1xuXG4gIG92ZXJsYXkuZHJhdyA9IGZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgY29uc3QgcHJvamVjdGlvbiA9IHRoaXMuZ2V0UHJvamVjdGlvbigpO1xuICAgIGNvbnN0IHBpeGVsID0gcHJvamVjdGlvbi5mcm9tTGF0TG5nVG9EaXZQaXhlbChwb3NpdGlvbik7XG5cbiAgICBjb25zdCB7IGVsZW1lbnQsIH0gPSBvdmVybGF5O1xuICAgIGNvbnN0IGNvbnRlbnQgPSBlbGVtZW50LmNoaWxkcmVuWzBdO1xuICAgIGNvbnN0IGNvbnRlbnRIZWlnaHQgPSBjb250ZW50LmNsaWVudEhlaWdodDtcbiAgICBjb25zdCBjb250ZW50V2lkdGggPSBjb250ZW50LmNsaWVudFdpZHRoO1xuXG4gICAgc3dpdGNoICh2ZXJ0aWNhbEFsaWduKSB7XG4gICAgICBjYXNlICd0b3AnOlxuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IGAke3BpeGVsLnkgLSBjb250ZW50SGVpZ2h0ICsgdmVydGljYWxPZmZzZXR9cHhgO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICBjYXNlICdtaWRkbGUnOlxuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IGAke3BpeGVsLnkgLSAoY29udGVudEhlaWdodCAvIDIpICsgdmVydGljYWxPZmZzZXR9cHhgO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gYCR7cGl4ZWwueSArIHZlcnRpY2FsT2Zmc2V0fXB4YDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgc3dpdGNoIChob3Jpem9udGFsQWxpZ24pIHtcbiAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSBgJHtwaXhlbC54IC0gY29udGVudFdpZHRoICsgaG9yaXpvbnRhbE9mZnNldH1weGA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IGAke3BpeGVsLnggLSAoY29udGVudFdpZHRoIC8gMikgKyBob3Jpem9udGFsT2Zmc2V0fXB4YDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IGAke3BpeGVsLnggKyBob3Jpem9udGFsT2Zmc2V0fXB4YDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gYXV0b1Nob3cgPyAnYmxvY2snIDogJ25vbmUnO1xuXG4gICAgaWYgKCFhdXRvU2hvdykge1xuICAgICAgb3B0aW9ucy5zaG93LmNhbGwodGhpcywgZWxlbWVudCk7XG4gICAgfVxuICB9O1xuXG4gIG92ZXJsYXkub25SZW1vdmUgPSBmdW5jdGlvbiBvblJlbW92ZSgpIHtcbiAgICBjb25zdCB7IGVsZW1lbnQsIH0gPSBvdmVybGF5O1xuXG4gICAgaWYgKG9wdGlvbnMucmVtb3ZlKSB7XG4gICAgICBvcHRpb25zLnJlbW92ZS5jYWxsKHRoaXMsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICBvdmVybGF5LmVsZW1lbnQgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLm92ZXJsYXlzLnB1c2gob3ZlcmxheSk7XG5cbiAgR01hcHMuZmlyZSgnb3ZlcmxheV9hZGRlZCcsIG92ZXJsYXksIHRoaXMpO1xuXG4gIHJldHVybiBvdmVybGF5O1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gb3ZlcmxheSBmcm9tIHRoZSBtYXAgYW5kIGZyb20gdGhlIG92ZXJsYXlzIGNvbGxlY3Rpb24uIFRoaXMgbWV0aG9kIGFsc28gZmlyZXMgYSBgb3ZlcmxheV9yZW1vdmVkYCBldmVudC5cbiAqIEBmdW5jdGlvbiByZW1vdmVPdmVybGF5XG4gKlxuICogQHBhcmFtIHtnb29nbGUubWFwcy5PdmVybGF5Vmlld30gb3ZlcmxheSAtIFRoZSBvdmVybGF5IHRvIGJlIHJlbW92ZWQuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5yZW1vdmVPdmVybGF5ID0gZnVuY3Rpb24gcmVtb3ZlT3ZlcmxheShvdmVybGF5KSB7XG4gIGNvbnN0IG92ZXJsYXlJbmRleCA9IHRoaXMub3ZlcmxheXMuaW5kZXhPZihvdmVybGF5KTtcblxuICBpZiAob3ZlcmxheUluZGV4ID49IDApIHtcbiAgICBvdmVybGF5LnNldE1hcChudWxsKTtcbiAgICB0aGlzLm92ZXJsYXlzLnNwbGljZShvdmVybGF5SW5kZXgsIDEpO1xuXG4gICAgR01hcHMuZmlyZSgnb3ZlcmxheV9yZW1vdmVkJywgb3ZlcmxheSwgdGhpcyk7XG4gIH1cbn07XG5cbi8qKlxuICogUmVtb3ZlIGFsbCB0aGUgb3ZlcmxheXMgZnJvbSB0aGUgbWFwIGFuZCBjbGVhciB0aGUgb3ZlcmxheXMgY29sbGVjdGlvbi4gVGhpcyBtZXRob2QgZG9lcyBub3QgZmlyZSBhIGBvdmVybGF5X3JlbW92ZWRgIGV2ZW50LlxuICogQGZ1bmN0aW9uIHJlbW92ZU92ZXJsYXlzXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5yZW1vdmVPdmVybGF5cyA9IGZ1bmN0aW9uIHJlbW92ZU92ZXJsYXlzKCkge1xuICB0aGlzLm92ZXJsYXlzLmZvckVhY2gob3ZlcmxheSA9PiBvdmVybGF5LnNldE1hcChudWxsKSk7XG5cbiAgdGhpcy5vdmVybGF5cyA9IFtdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR01hcHM7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaWYgKHR5cGVvZiB3aW5kb3cuZ29vZ2xlID09PSAnb2JqZWN0JyAmJiB3aW5kb3cuZ29vZ2xlLm1hcHMpIHtcbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBQb2x5Z29uIGNvbnRhaW5zTGF0TG5nXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90cGFya2luL0dvb2dsZS1NYXBzLVBvaW50LWluLVBvbHlnb25cbiAgLy8gUG95Z29uIGdldEJvdW5kcyBleHRlbnNpb24gLSBnb29nbGUtbWFwcy1leHRlbnNpb25zXG4gIC8vIGh0dHA6Ly9jb2RlLmdvb2dsZS5jb20vcC9nb29nbGUtbWFwcy1leHRlbnNpb25zL3NvdXJjZS9icm93c2UvZ29vZ2xlLm1hcHMuUG9seWdvbi5nZXRCb3VuZHMuanNcbiAgaWYgKCFnb29nbGUubWFwcy5Qb2x5Z29uLnByb3RvdHlwZS5nZXRCb3VuZHMpIHtcbiAgICBnb29nbGUubWFwcy5Qb2x5Z29uLnByb3RvdHlwZS5nZXRCb3VuZHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBib3VuZHMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCk7XG4gICAgICB2YXIgcGF0aHMgPSB0aGlzLmdldFBhdGhzKCk7XG4gICAgICB2YXIgcGF0aDtcblxuICAgICAgZm9yICh2YXIgcCA9IDA7IHAgPCBwYXRocy5nZXRMZW5ndGgoKTsgcCsrKSB7XG4gICAgICAgIHBhdGggPSBwYXRocy5nZXRBdChwKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgICBib3VuZHMuZXh0ZW5kKHBhdGguZ2V0QXQoaSkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBib3VuZHM7XG4gICAgfTtcbiAgfVxuXG4gIGlmICghZ29vZ2xlLm1hcHMuUG9seWdvbi5wcm90b3R5cGUuY29udGFpbnNMYXRMbmcpIHtcbiAgICAvLyBQb2x5Z29uIGNvbnRhaW5zTGF0TG5nIC0gbWV0aG9kIHRvIGRldGVybWluZSBpZiBhIGxhdExuZyBpcyB3aXRoaW4gYSBwb2x5Z29uXG4gICAgZ29vZ2xlLm1hcHMuUG9seWdvbi5wcm90b3R5cGUuY29udGFpbnNMYXRMbmcgPSBmdW5jdGlvbihsYXRMbmcpIHtcbiAgICAgIC8vIEV4Y2x1ZGUgcG9pbnRzIG91dHNpZGUgb2YgYm91bmRzIGFzIHRoZXJlIGlzIG5vIHdheSB0aGV5IGFyZSBpbiB0aGUgcG9seVxuICAgICAgdmFyIGJvdW5kcyA9IHRoaXMuZ2V0Qm91bmRzKCk7XG5cbiAgICAgIGlmIChib3VuZHMgIT09IG51bGwgJiYgIWJvdW5kcy5jb250YWlucyhsYXRMbmcpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gUmF5Y2FzdCBwb2ludCBpbiBwb2x5Z29uIG1ldGhvZFxuICAgICAgdmFyIGluUG9seSA9IGZhbHNlO1xuXG4gICAgICB2YXIgbnVtUGF0aHMgPSB0aGlzLmdldFBhdGhzKCkuZ2V0TGVuZ3RoKCk7XG4gICAgICBmb3IgKHZhciBwID0gMDsgcCA8IG51bVBhdGhzOyBwKyspIHtcbiAgICAgICAgdmFyIHBhdGggPSB0aGlzLmdldFBhdGhzKCkuZ2V0QXQocCk7XG4gICAgICAgIHZhciBudW1Qb2ludHMgPSBwYXRoLmdldExlbmd0aCgpO1xuICAgICAgICB2YXIgaiA9IG51bVBvaW50cyAtIDE7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1Qb2ludHM7IGkrKykge1xuICAgICAgICAgIHZhciB2ZXJ0ZXgxID0gcGF0aC5nZXRBdChpKTtcbiAgICAgICAgICB2YXIgdmVydGV4MiA9IHBhdGguZ2V0QXQoaik7XG5cbiAgICAgICAgICBpZiAodmVydGV4MS5sbmcoKSA8IGxhdExuZy5sbmcoKSAmJiB2ZXJ0ZXgyLmxuZygpID49IGxhdExuZy5sbmcoKSB8fCB2ZXJ0ZXgyLmxuZygpIDwgbGF0TG5nLmxuZygpICYmIHZlcnRleDEubG5nKCkgPj0gbGF0TG5nLmxuZygpKSB7XG4gICAgICAgICAgICBpZiAodmVydGV4MS5sYXQoKSArIChsYXRMbmcubG5nKCkgLSB2ZXJ0ZXgxLmxuZygpKSAvICh2ZXJ0ZXgyLmxuZygpIC0gdmVydGV4MS5sbmcoKSkgKiAodmVydGV4Mi5sYXQoKSAtIHZlcnRleDEubGF0KCkpIDwgbGF0TG5nLmxhdCgpKSB7XG4gICAgICAgICAgICAgIGluUG9seSA9ICFpblBvbHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaiA9IGk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluUG9seTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKCFnb29nbGUubWFwcy5DaXJjbGUucHJvdG90eXBlLmNvbnRhaW5zTGF0TG5nKSB7XG4gICAgZ29vZ2xlLm1hcHMuQ2lyY2xlLnByb3RvdHlwZS5jb250YWluc0xhdExuZyA9IGZ1bmN0aW9uKGxhdExuZykge1xuICAgICAgaWYgKGdvb2dsZS5tYXBzLmdlb21ldHJ5KSB7XG4gICAgICAgIHJldHVybiBnb29nbGUubWFwcy5nZW9tZXRyeS5zcGhlcmljYWwuY29tcHV0ZURpc3RhbmNlQmV0d2Vlbih0aGlzLmdldENlbnRlcigpLCBsYXRMbmcpIDw9IHRoaXMuZ2V0UmFkaXVzKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGdvb2dsZS5tYXBzLlJlY3RhbmdsZS5wcm90b3R5cGUuY29udGFpbnNMYXRMbmcgPSBmdW5jdGlvbihsYXRMbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb3VuZHMoKS5jb250YWlucyhsYXRMbmcpO1xuICB9O1xuXG4gIGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcy5wcm90b3R5cGUuY29udGFpbnNMYXRMbmcgPSBmdW5jdGlvbihsYXRMbmcpIHtcbiAgICByZXR1cm4gdGhpcy5jb250YWlucyhsYXRMbmcpO1xuICB9O1xuXG4gIGdvb2dsZS5tYXBzLk1hcmtlci5wcm90b3R5cGUuc2V0RmVuY2VzID0gZnVuY3Rpb24oZmVuY2VzKSB7XG4gICAgdGhpcy5mZW5jZXMgPSBmZW5jZXM7XG4gIH07XG5cbiAgZ29vZ2xlLm1hcHMuTWFya2VyLnByb3RvdHlwZS5hZGRGZW5jZSA9IGZ1bmN0aW9uKGZlbmNlKSB7XG4gICAgdGhpcy5mZW5jZXMucHVzaChmZW5jZSk7XG4gIH07XG5cbiAgZ29vZ2xlLm1hcHMuTWFya2VyLnByb3RvdHlwZS5nZXRJZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzWydfX2dtX2lkJ107XG4gIH07XG59XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEFycmF5IGluZGV4T2Zcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvaW5kZXhPZlxuaWYgKCFBcnJheS5wcm90b3R5cGUuaW5kZXhPZikge1xuICBBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIChzZWFyY2hFbGVtZW50IC8qLCBmcm9tSW5kZXggKi8gKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgIGlmICh0aGlzID09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICB9XG4gICAgICB2YXIgdCA9IE9iamVjdCh0aGlzKTtcbiAgICAgIHZhciBsZW4gPSB0Lmxlbmd0aCA+Pj4gMDtcbiAgICAgIGlmIChsZW4gPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICB2YXIgbiA9IDA7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBuID0gTnVtYmVyKGFyZ3VtZW50c1sxXSk7XG4gICAgICAgICAgaWYgKG4gIT0gbikgeyAvLyBzaG9ydGN1dCBmb3IgdmVyaWZ5aW5nIGlmIGl0J3MgTmFOXG4gICAgICAgICAgICAgIG4gPSAwO1xuICAgICAgICAgIH0gZWxzZSBpZiAobiAhPSAwICYmIG4gIT0gSW5maW5pdHkgJiYgbiAhPSAtSW5maW5pdHkpIHtcbiAgICAgICAgICAgICAgbiA9IChuID4gMCB8fCAtMSkgKiBNYXRoLmZsb29yKE1hdGguYWJzKG4pKTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobiA+PSBsZW4pIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICB2YXIgayA9IG4gPj0gMCA/IG4gOiBNYXRoLm1heChsZW4gLSBNYXRoLmFicyhuKSwgMCk7XG4gICAgICBmb3IgKDsgayA8IGxlbjsgaysrKSB7XG4gICAgICAgICAgaWYgKGsgaW4gdCAmJiB0W2tdID09PSBzZWFyY2hFbGVtZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBrO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAtMTtcbiAgfVxufSIsImltcG9ydCBHTWFwcywgeyBsYXRMbmdGcm9tQXJndW1lbnRzLCBmbGF0dGVuQXJyYXksIGFycmF5VG9MYXRMbmcgfSBmcm9tICcuL2NvcmUnO1xuXG4vKipcbiAqIEV4dGVuZHMgR01hcHMgdG8gdXNlIHJvdXRlcy5cbiAqIEBtb2R1bGUgUm91dGVzXG4gKi9cblxuLyoqXG4gKiBHZXQgcm91dGVzIGJldHdlZW4gdHdvIGNvb3JkaW5hdGVzLlxuICogQGZ1bmN0aW9uIGdldFJvdXRlc1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBvYmplY3Qgc2hvdWxkIGNvbnRhaW46XG4gKiBAcGFyYW0ge3N0cmluZ3xnb29nbGUubWFwcy5MYXRMbmd8Z29vZ2xlLm1hcHMuUGxhY2V8Z29vZ2xlLm1hcHMuTGF0TG5nTGl0ZXJhbH0gb3B0aW9ucy5vcmlnaW4gLSBMb2NhdGlvbiBvZiBvcmlnaW4uXG4gKiBAcGFyYW0ge3N0cmluZ3xnb29nbGUubWFwcy5MYXRMbmd8Z29vZ2xlLm1hcHMuUGxhY2V8Z29vZ2xlLm1hcHMuTGF0TG5nTGl0ZXJhbH0gb3B0aW9ucy5kZXN0aW5hdGlvbiAtIExvY2F0aW9uIG9mIGRlc3RpbmF0aW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudHJhdmVsTW9kZSAtIENhbiBiZSBgYmljeWNsaW5nYCwgYGRyaXZpbmdgLCBgdHJhbnNpdGAgb3IgYHdhbGtpbmdgLlxuICogQHBhcmFtIHthcnJheX0gb3B0aW9ucy53YXlwb2ludHMgLSBBcnJheSBvZiBbZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1dheXBvaW50XShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjRGlyZWN0aW9uc1dheXBvaW50KSBvYmplY3RzLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5jYWxsYmFjayAtIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBhZnRlciB0aGUgcmVzdWx0cyBhcmUgcmV0dXJuZWQuXG4gKlxuICogYG9wdGlvbnNgIGFsc28gYWNjZXB0cyBhbnkgb3B0aW9uIGRlZmluZWQgaW4gdGhlIFtvZmZpY2lhbCBkb2N1bWVudGF0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjRGlyZWN0aW9uc1JlcXVlc3QpLlxuICovXG5HTWFwcy5wcm90b3R5cGUuZ2V0Um91dGVzID0gZnVuY3Rpb24gZ2V0Um91dGVzKGJhc2VPcHRpb25zKSB7XG4gIGNvbnN0IHsgb3JpZ2luLCBkZXN0aW5hdGlvbiwgdHJhdmVsTW9kZSA9ICd3YWxraW5nJywgdW5pdFN5c3RlbSA9ICdtZXRyaWMnLCBhdm9pZEhpZ2h3YXlzID0gZmFsc2UsIGF2b2lkVG9sbHMgPSBmYWxzZSwgb3B0aW1pemVXYXlwb2ludHMgPSBmYWxzZSwgd2F5cG9pbnRzID0gW10sIGNhbGxiYWNrLCBlcnJvciwgLi4ub3B0aW9ucyB9ID0gYmFzZU9wdGlvbnM7XG5cbiAgY29uc3QgdHJhdmVsTW9kZUlkID0gZ29vZ2xlLm1hcHMuVHJhdmVsTW9kZVt0cmF2ZWxNb2RlLnRvVXBwZXJDYXNlKCldO1xuICBjb25zdCB1bml0U3lzdGVtSWQgPSBnb29nbGUubWFwcy5UcmF2ZWxNb2RlW3VuaXRTeXN0ZW0udG9VcHBlckNhc2UoKV07XG5cbiAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgLi4ub3B0aW9ucyxcbiAgICB0cmF2ZWxNb2RlOiB0cmF2ZWxNb2RlSWQsXG4gICAgdW5pdFN5c3RlbTogdW5pdFN5c3RlbUlkLFxuICAgIGF2b2lkSGlnaHdheXMsXG4gICAgYXZvaWRUb2xscyxcbiAgICBvcHRpbWl6ZVdheXBvaW50cyxcbiAgICB3YXlwb2ludHMsXG4gICAgb3JpZ2luOiBsYXRMbmdGcm9tQXJndW1lbnRzKG9yaWdpbiksXG4gICAgZGVzdGluYXRpb246IGxhdExuZ0Zyb21Bcmd1bWVudHMoZGVzdGluYXRpb24pLFxuICB9O1xuXG4gIGNvbnN0IHNlcnZpY2UgPSBuZXcgZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1NlcnZpY2UoKTtcblxuICBzZXJ2aWNlLnJvdXRlKHJlcXVlc3RPcHRpb25zLCAocmVzdWx0LCBzdGF0dXMpID0+IHtcbiAgICBpZiAoc3RhdHVzID09PSBnb29nbGUubWFwcy5EaXJlY3Rpb25zU3RhdHVzLk9LKSB7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soWy4uLnJlc3VsdC5yb3V0ZXNdLCByZXN1bHQsIHN0YXR1cyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlcnJvcikge1xuICAgICAgZXJyb3IocmVzdWx0LCBzdGF0dXMpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbGwgcm91dGVzIHN0b3JlZCBpbiByb3V0ZXMgY29sbGVjdGlvbi5cbiAqIEBmdW5jdGlvbiByZW1vdmVSb3V0ZXNcbiAqL1xuR01hcHMucHJvdG90eXBlLnJlbW92ZVJvdXRlcyA9IGZ1bmN0aW9uIHJlbW92ZVJvdXRlcygpIHtcbiAgdGhpcy5yb3V0ZXMgPSBbXTtcbn07XG5cbi8qKlxuICogR2V0IGVsZXZhdGlvbiBpbmZvcm1hdGlvbiBmb3IgbG9jYXRpb25zIG9yIHJvdXRlcy5cbiAqIEBmdW5jdGlvbiBnZXRFbGV2YXRpb25zXG4gKlxuICogQHBhcmFtIHthcnJheX0gbG9jYXRpb25zIC0gQmktZGltZW5zaW9uYWwgYXJyYXkgb2YgbGF0aXR1ZGVzIGFuZCBsb25naXR1ZGVzLlxuICogQHBhcmFtIHtib29sZWFufSBwYXRoIC0gSWYgaXMgdHJ1ZSwgbWFrZXMgYSByZXF1ZXN0IGFsb25nIGEgcGF0aC4gSWYgaXMgZmFsc2UsIG9ubHkgZ2V0IGVsZXZhdGlvbiBpbmZvcm1hdGlvbiBvbiBkaXNjcmV0ZSBsb2NhdGlvbnMuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIE5hdGl2ZSBjYWxsYmFjayBmdW5jdGlvbiBkZWZpbmVkIGluIFtnb29nbGUubWFwcy5FbGV2YXRpb25TZXJ2aWNlICgnTWV0aG9kcycgc2VjdGlvbildKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNFbGV2YXRpb25TZXJ2aWNlKSAoYGdldEVsZXZhdGlvbkFsb25nUGF0aGAgaWYgYHBhdGhgIGlzIHRydWUsIGBnZXRFbGV2YXRpb25Gb3JMb2NhdGlvbnNgIGlmIGBwYXRoYCBpcyBmYWxzZSkuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5nZXRFbGV2YXRpb25zID0gZnVuY3Rpb24gZ2V0RWxldmF0aW9ucyhiYXNlT3B0aW9ucykge1xuICBjb25zdCB7IHBhdGggPSBmYWxzZSwgc2FtcGxlcyA9IDI1NiwgY2FsbGJhY2ssIC4uLm9wdGlvbnMgfSA9IGJhc2VPcHRpb25zO1xuXG4gIGxldCBsb2NhdGlvbnMgPSBvcHRpb25zLmxvY2F0aW9ucyB8fCBbXTtcblxuICBpZiAobG9jYXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICBpZiAobG9jYXRpb25zWzBdLmxlbmd0aCA+IDApIHtcbiAgICAgIGxvY2F0aW9ucyA9IGZsYXR0ZW5BcnJheShbbG9jYXRpb25zXS5tYXAobG9jYXRpb24gPT4gYXJyYXlUb0xhdExuZyhsb2NhdGlvbiwgZmFsc2UpKSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5FbGV2YXRpb25TZXJ2aWNlKCk7XG5cbiAgaWYgKCFwYXRoKSB7XG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgbG9jYXRpb25zLFxuICAgICAgcGF0aCxcbiAgICAgIHNhbXBsZXMsXG4gICAgfTtcblxuICAgIHNlcnZpY2UuZ2V0RWxldmF0aW9uRm9yTG9jYXRpb25zKHJlcXVlc3RPcHRpb25zLCAocmVzdWx0LCBzdGF0dXMpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2FsbGJhY2socmVzdWx0LCBzdGF0dXMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgcGF0aDogbG9jYXRpb25zLFxuICAgICAgc2FtcGxlcyxcbiAgICB9O1xuXG4gICAgc2VydmljZS5nZXRFbGV2YXRpb25BbG9uZ1BhdGgocmVxdWVzdE9wdGlvbnMsIChyZXN1bHQsIHN0YXR1cykgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYWxsYmFjayhyZXN1bHQsIHN0YXR1cyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayBHTWFwcyNyZW1vdmVQb2x5bGluZXN9LlxuICogQGZ1bmN0aW9uIGNsZWFuUm91dGVcbiAqL1xuR01hcHMucHJvdG90eXBlLmNsZWFuUm91dGUgPSBHTWFwcy5wcm90b3R5cGUucmVtb3ZlUG9seWxpbmVzO1xuXG5HTWFwcy5wcm90b3R5cGUucmVuZGVyUm91dGUgPSBmdW5jdGlvbiByZW5kZXJSb3V0ZShvcHRpb25zLCBiYXNlUmVuZGVyT3B0aW9ucykge1xuICBjb25zdCBwYW5lbCA9ICgodHlwZW9mIGJhc2VSZW5kZXJPcHRpb25zLnBhbmVsID09PSAnc3RyaW5nJykgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChiYXNlUmVuZGVyT3B0aW9ucy5wYW5lbC5yZXBsYWNlKCcjJywgJycpKSA6IGJhc2VSZW5kZXJPcHRpb25zLnBhbmVsKTtcblxuICBjb25zdCByZW5kZXJPcHRpb25zID0ge1xuICAgIC4uLmJhc2VSZW5kZXJPcHRpb25zLFxuICAgIHBhbmVsLFxuICAgIG1hcDogdGhpcy5tYXAsXG4gIH07XG5cbiAgY29uc3QgZGlzcGxheSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zUmVuZGVyZXIocmVuZGVyT3B0aW9ucyk7XG5cbiAgdGhpcy5nZXRSb3V0ZXMoe1xuICAgIG9yaWdpbjogb3B0aW9ucy5vcmlnaW4sXG4gICAgZGVzdGluYXRpb246IG9wdGlvbnMuZGVzdGluYXRpb24sXG4gICAgdHJhdmVsTW9kZTogb3B0aW9ucy50cmF2ZWxNb2RlLFxuICAgIHdheXBvaW50czogb3B0aW9ucy53YXlwb2ludHMsXG4gICAgdW5pdFN5c3RlbTogb3B0aW9ucy51bml0U3lzdGVtLFxuICAgIGVycm9yOiBvcHRpb25zLmVycm9yLFxuICAgIGF2b2lkSGlnaHdheXM6IG9wdGlvbnMuYXZvaWRIaWdod2F5cyxcbiAgICBhdm9pZFRvbGxzOiBvcHRpb25zLmF2b2lkVG9sbHMsXG4gICAgb3B0aW1pemVXYXlwb2ludHM6IG9wdGlvbnMub3B0aW1pemVXYXlwb2ludHMsXG4gICAgY2FsbGJhY2soXywgcmVzcG9uc2UsIHN0YXR1cykge1xuICAgICAgaWYgKHN0YXR1cyA9PT0gZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1N0YXR1cy5PSykge1xuICAgICAgICBkaXNwbGF5LnNldERpcmVjdGlvbnMocmVzcG9uc2UpO1xuICAgICAgfVxuICAgIH0sXG4gIH0pO1xufTtcblxuLyoqXG4gKiBEcmF3IGEgcm91dGUgdXNpbmcgcG9seWxpbmVzLiBJdCB1c2VzIHRoZSBsYXN0IHJvdXRlIGZvdW5kIGJ5IHtAbGluayBHTWFwcyNnZXRSb3V0ZXN9LlxuICogQGZ1bmN0aW9uIGRyYXdSb3V0ZVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gQWNjZXB0cyB0aGUgc2FtZSBvcHRpb25zIGFzIHtAbGluayBHTWFwcyNnZXRSb3V0ZXN9LlxuICogQHBhcmFtIHtzdHJpbmd8Z29vZ2xlLm1hcHMuTGF0TG5nfGdvb2dsZS5tYXBzLlBsYWNlfGdvb2dsZS5tYXBzLkxhdExuZ0xpdGVyYWx9IG9wdGlvbnMub3JpZ2luIC0gTG9jYXRpb24gb2Ygb3JpZ2luLlxuICogQHBhcmFtIHtzdHJpbmd8Z29vZ2xlLm1hcHMuTGF0TG5nfGdvb2dsZS5tYXBzLlBsYWNlfGdvb2dsZS5tYXBzLkxhdExuZ0xpdGVyYWx9IG9wdGlvbnMuZGVzdGluYXRpb24gLSBMb2NhdGlvbiBvZiBkZXN0aW5hdGlvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnN0cm9rZUNvbG9yIC0gQ29sb3Igb2YgdGhlIHBvbHlsaW5lLiBDYW4gYmUgaGV4YWRlY2ltYWwgb3IgQ1NTIG5hbWUuXG4gKiBAcGFyYW0ge2Zsb2F0fSBvcHRpb25zLnN0cm9rZU9wYWNpdHkgLSBPcGFjaXR5IG9mIHRoZSBwb2x5bGluZSBmcm9tIDAuMCB0byAxLjBcbiAqIEBwYXJhbSB7aW50ZWdlcn0gb3B0aW9ucy5zdHJva2VXZWlnaHQgLSBQb2x5bGluZSB3aWR0aCBpbiBwaXhlbHMuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5kcmF3Um91dGUgPSBmdW5jdGlvbiBkcmF3Um91dGUob3B0aW9ucykge1xuICBjb25zdCBzZWxmID0gdGhpcztcblxuICB0aGlzLmdldFJvdXRlcyh7XG4gICAgb3JpZ2luOiBvcHRpb25zLm9yaWdpbixcbiAgICBkZXN0aW5hdGlvbjogb3B0aW9ucy5kZXN0aW5hdGlvbixcbiAgICB0cmF2ZWxNb2RlOiBvcHRpb25zLnRyYXZlbE1vZGUsXG4gICAgd2F5cG9pbnRzOiBvcHRpb25zLndheXBvaW50cyxcbiAgICB1bml0U3lzdGVtOiBvcHRpb25zLnVuaXRTeXN0ZW0sXG4gICAgZXJyb3I6IG9wdGlvbnMuZXJyb3IsXG4gICAgYXZvaWRIaWdod2F5czogb3B0aW9ucy5hdm9pZEhpZ2h3YXlzLFxuICAgIGF2b2lkVG9sbHM6IG9wdGlvbnMuYXZvaWRUb2xscyxcbiAgICBvcHRpbWl6ZVdheXBvaW50czogb3B0aW9ucy5vcHRpbWl6ZVdheXBvaW50cyxcbiAgICBjYWxsYmFjayhyb3V0ZXMpIHtcbiAgICAgIGlmIChyb3V0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBsYXN0Um91dGUgPSByb3V0ZXNbcm91dGVzLmxlbmd0aCAtIDFdO1xuICAgICAgICBjb25zdCBwb2x5bGluZU9wdGlvbnMgPSB7XG4gICAgICAgICAgcGF0aDogbGFzdFJvdXRlLm92ZXJ2aWV3X3BhdGgsXG4gICAgICAgICAgc3Ryb2tlQ29sb3I6IG9wdGlvbnMuc3Ryb2tlQ29sb3IsXG4gICAgICAgICAgc3Ryb2tlT3BhY2l0eTogb3B0aW9ucy5zdHJva2VPcGFjaXR5LFxuICAgICAgICAgIHN0cm9rZVdlaWdodDogb3B0aW9ucy5zdHJva2VXZWlnaHQsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuaWNvbnMpIHtcbiAgICAgICAgICBwb2x5bGluZU9wdGlvbnMuaWNvbnMgPSBvcHRpb25zLmljb25zO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5kcmF3UG9seWxpbmUocG9seWxpbmVPcHRpb25zKTtcblxuICAgICAgICBpZiAob3B0aW9ucy5jYWxsYmFjaykge1xuICAgICAgICAgIG9wdGlvbnMuY2FsbGJhY2sobGFzdFJvdXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gIH0pO1xufTtcblxuLyoqXG4gKiBUcmF2ZWwgYSByb3V0ZSBhdXRvbWF0aWNhbGx5LiBJdCB1c2VzIHRoZSBsYXN0IHJvdXRlIGZvdW5kIGJ5IHtAbGluayBHTWFwcyNnZXRSb3V0ZXN9LlxuICogQGZ1bmN0aW9uIHRyYXZlbFJvdXRlXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBBY2NlcHRzIHRoZSBzYW1lIG9wdGlvbnMgYXMge0BsaW5rIEdNYXBzI2dldFJvdXRlc30uXG4gKiBAcGFyYW0ge3N0cmluZ3xnb29nbGUubWFwcy5MYXRMbmd8Z29vZ2xlLm1hcHMuUGxhY2V8Z29vZ2xlLm1hcHMuTGF0TG5nTGl0ZXJhbH0gb3B0aW9ucy5vcmlnaW4gLSBMb2NhdGlvbiBvZiBvcmlnaW4uXG4gKiBAcGFyYW0ge3N0cmluZ3xnb29nbGUubWFwcy5MYXRMbmd8Z29vZ2xlLm1hcHMuUGxhY2V8Z29vZ2xlLm1hcHMuTGF0TG5nTGl0ZXJhbH0gb3B0aW9ucy5kZXN0aW5hdGlvbiAtIExvY2F0aW9uIG9mIGRlc3RpbmF0aW9uLlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMucm91dGUgLSBBIFtnb29nbGUubWFwcy5EaXJlY3Rpb25zUm91dGVdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNEaXJlY3Rpb25zUm91dGUpIG9iamVjdC4gSWYgc2V0LCBgb3JpZ2luYCBhbmQgYGRlc3RpbmF0aW9uYCBhcmUgaWdub3JlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMuc3RhcnQgLSBGaXJlZCBiZWZvcmUgdGhlIGZpcnN0IHN0ZXAuIEl0IHJlY2VpdmVzIGEgc2luZ2xlIGFyZ3VtZW50LCB3aGljaCBpcyBhIFtEaXJlY3Rpb25zUm91dGVdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNEaXJlY3Rpb25zUm91dGUpIG9iamVjdC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMuc3RlcCAtIEZpcmVkIGVhY2ggc3RlcCBpbiB0aGUgcm91dGUuIEl0IHJlY2VpdmVzIDIgYXJndW1lbnRzLCB3aGljaCBpcyBhIFtEaXJlY3Rpb25zU3RlcF0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI0RpcmVjdGlvbnNTdGVwKSBvYmplY3QgYW5kIHRoZSB0b3RhbCBsZW5ndGggb2YgdGhlIHN0ZXBzLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5lbmQgLSBGaXJlZCBhZnRlciB0aGUgbGFzdCBzdGVwLiBJdCByZWNlaXZlcyBhIHNpbmdsZSBhcmd1bWVudCwgd2hpY2ggaXMgYSBbRGlyZWN0aW9uc1JvdXRlXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjRGlyZWN0aW9uc1JvdXRlKSBvYmplY3QuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS50cmF2ZWxSb3V0ZSA9IGZ1bmN0aW9uIHRyYXZlbFJvdXRlKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMub3JpZ2luICYmIG9wdGlvbnMuZGVzdGluYXRpb24pIHtcbiAgICB0aGlzLmdldFJvdXRlcyh7XG4gICAgICBvcmlnaW46IG9wdGlvbnMub3JpZ2luLFxuICAgICAgZGVzdGluYXRpb246IG9wdGlvbnMuZGVzdGluYXRpb24sXG4gICAgICB0cmF2ZWxNb2RlOiBvcHRpb25zLnRyYXZlbE1vZGUsXG4gICAgICB3YXlwb2ludHM6IG9wdGlvbnMud2F5cG9pbnRzLFxuICAgICAgdW5pdFN5c3RlbTogb3B0aW9ucy51bml0U3lzdGVtLFxuICAgICAgZXJyb3I6IG9wdGlvbnMuZXJyb3IsXG4gICAgICBjYWxsYmFjayhyb3V0ZXMpIHtcbiAgICAgICAgaWYgKHJvdXRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsYXN0Um91dGUgPSByb3V0ZXNbcm91dGVzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgIC8vIHN0YXJ0IGNhbGxiYWNrXG4gICAgICAgIGlmIChvcHRpb25zLnN0YXJ0KSB7XG4gICAgICAgICAgb3B0aW9ucy5zdGFydChsYXN0Um91dGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3RlcCBjYWxsYmFja1xuICAgICAgICBpZiAob3B0aW9ucy5zdGVwKSB7XG4gICAgICAgICAgaWYgKGxhc3RSb3V0ZS5sZWdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHsgc3RlcHMsIH0gPSBsYXN0Um91dGUubGVnc1swXTtcblxuICAgICAgICAgICAgc3RlcHMuZm9yRWFjaCgoc3RlcCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgICAgIHN0ZXAuc3RlcF9udW1iZXIgPSBpbmRleDtcbiAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgICAgIHN0ZXAuc3RlcE51bWJlciA9IGluZGV4O1xuXG4gICAgICAgICAgICAgIG9wdGlvbnMuc3RlcChzdGVwLCBzdGVwcy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVuZCBjYWxsYmFja1xuICAgICAgICBpZiAob3B0aW9ucy5lbmQpIHtcbiAgICAgICAgICBvcHRpb25zLmVuZChsYXN0Um91dGUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pO1xuICB9IGVsc2UgaWYgKG9wdGlvbnMucm91dGUpIHtcbiAgICBpZiAob3B0aW9ucy5yb3V0ZS5sZWdzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHsgc3RlcHMsIH0gPSBvcHRpb25zLnJvdXRlLmxlZ3NbMF07XG5cbiAgICAgIHN0ZXBzLmZvckVhY2goKHN0ZXAsIGluZGV4KSA9PiB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICBzdGVwLnN0ZXBfbnVtYmVyID0gaW5kZXg7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICBzdGVwLnN0ZXBOdW1iZXIgPSBpbmRleDtcblxuICAgICAgICBvcHRpb25zLnN0ZXAoc3RlcCwgc3RlcHMubGVuZ3RoIC0gMSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogRHJhdyBhbmQgdHJhdmVsIGEgcm91dGUgYXV0b21hdGljYWxseSBzdGVwIGJ5IHN0ZXAuIEl0IHVzZXMgdGhlIGxhc3Qgcm91dGUgZm91bmQgYnkge0BsaW5rIEdNYXBzI2dldFJvdXRlc30uXG4gKiBAZnVuY3Rpb24gZHJhd1N0ZXBwZWRSb3V0ZVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gQWNjZXB0cyB0aGUgc2FtZSBvcHRpb25zIGFzIHtAbGluayBHTWFwcyN0cmF2ZWxSb3V0ZX0uXG4gKiBAcGFyYW0ge3N0cmluZ3xnb29nbGUubWFwcy5MYXRMbmd8Z29vZ2xlLm1hcHMuUGxhY2V8Z29vZ2xlLm1hcHMuTGF0TG5nTGl0ZXJhbH0gb3B0aW9ucy5vcmlnaW4gLSBMb2NhdGlvbiBvZiBvcmlnaW4uXG4gKiBAcGFyYW0ge3N0cmluZ3xnb29nbGUubWFwcy5MYXRMbmd8Z29vZ2xlLm1hcHMuUGxhY2V8Z29vZ2xlLm1hcHMuTGF0TG5nTGl0ZXJhbH0gb3B0aW9ucy5kZXN0aW5hdGlvbiAtIExvY2F0aW9uIG9mIGRlc3RpbmF0aW9uLlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMucm91dGUgLSBBIFtnb29nbGUubWFwcy5EaXJlY3Rpb25zUm91dGVdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNEaXJlY3Rpb25zUm91dGUpIG9iamVjdC4gSWYgc2V0LCBgb3JpZ2luYCBhbmQgYGRlc3RpbmF0aW9uYCBhcmUgaWdub3JlZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnN0cm9rZUNvbG9yIC0gQ29sb3Igb2YgdGhlIHBvbHlsaW5lLiBDYW4gYmUgaGV4YWRlY2ltYWwgb3IgQ1NTIG5hbWUuXG4gKiBAcGFyYW0ge2Zsb2F0fSBvcHRpb25zLnN0cm9rZU9wYWNpdHkgLSBPcGFjaXR5IG9mIHRoZSBwb2x5bGluZSBmcm9tIDAuMCB0byAxLjBcbiAqIEBwYXJhbSB7aW50ZWdlcn0gb3B0aW9ucy5zdHJva2VXZWlnaHQgLSBQb2x5bGluZSB3aWR0aCBpbiBwaXhlbHMuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLnN0YXJ0IC0gRmlyZWQgYmVmb3JlIHRoZSBmaXJzdCBzdGVwLiBJdCByZWNlaXZlcyBhIHNpbmdsZSBhcmd1bWVudCwgd2hpY2ggaXMgYSBbRGlyZWN0aW9uc1JvdXRlXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjRGlyZWN0aW9uc1JvdXRlKSBvYmplY3QuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLnN0ZXAgLSBGaXJlZCBlYWNoIHN0ZXAgaW4gdGhlIHJvdXRlLiBJdCByZWNlaXZlcyAyIGFyZ3VtZW50cywgd2hpY2ggaXMgYSBbRGlyZWN0aW9uc1N0ZXBdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNEaXJlY3Rpb25zU3RlcCkgb2JqZWN0IGFuZCB0aGUgdG90YWwgbGVuZ3RoIG9mIHRoZSBzdGVwcy5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMuZW5kIC0gRmlyZWQgYWZ0ZXIgdGhlIGxhc3Qgc3RlcC4gSXQgcmVjZWl2ZXMgYSBzaW5nbGUgYXJndW1lbnQsIHdoaWNoIGlzIGEgW0RpcmVjdGlvbnNSb3V0ZV0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI0RpcmVjdGlvbnNSb3V0ZSkgb2JqZWN0LlxuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5kcmF3U3RlcHBlZFJvdXRlID0gZnVuY3Rpb24gZHJhd1N0ZXBwZWRSb3V0ZShvcHRpb25zKSB7XG4gIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gIHRoaXMudHJhdmVsUm91dGUoe1xuICAgIC4uLm9wdGlvbnMsXG4gICAgc3RlcDogZnVuY3Rpb24gc3RlcChyb3V0ZVN0ZXAsIHN0ZXBzQ291bnQpIHtcbiAgICAgIGNvbnN0IHBvbHlsaW5lT3B0aW9ucyA9IHtcbiAgICAgICAgcGF0aDogcm91dGVTdGVwLnBhdGgsXG4gICAgICAgIHN0cm9rZUNvbG9yOiBvcHRpb25zLnN0cm9rZUNvbG9yLFxuICAgICAgICBzdHJva2VPcGFjaXR5OiBvcHRpb25zLnN0cm9rZU9wYWNpdHksXG4gICAgICAgIHN0cm9rZVdlaWdodDogb3B0aW9ucy5zdHJva2VXZWlnaHQsXG4gICAgICB9O1xuXG4gICAgICBpZiAob3B0aW9ucy5pY29ucykge1xuICAgICAgICBwb2x5bGluZU9wdGlvbnMuaWNvbnMgPSBvcHRpb25zLmljb25zO1xuICAgICAgfVxuXG4gICAgICBzZWxmLmRyYXdQb2x5bGluZShwb2x5bGluZU9wdGlvbnMpO1xuXG4gICAgICBvcHRpb25zLnN0ZXAocm91dGVTdGVwLCBzdGVwc0NvdW50KTtcbiAgICB9LFxuICB9KTtcblxuICAvLyBpZiAob3B0aW9ucy5vcmlnaW4gJiYgb3B0aW9ucy5kZXN0aW5hdGlvbikge1xuICAvLyAgIHRoaXMuZ2V0Um91dGVzKHtcbiAgLy8gICAgIG9yaWdpbjogb3B0aW9ucy5vcmlnaW4sXG4gIC8vICAgICBkZXN0aW5hdGlvbjogb3B0aW9ucy5kZXN0aW5hdGlvbixcbiAgLy8gICAgIHRyYXZlbE1vZGU6IG9wdGlvbnMudHJhdmVsTW9kZSxcbiAgLy8gICAgIHdheXBvaW50czogb3B0aW9ucy53YXlwb2ludHMsXG4gIC8vICAgICBlcnJvcjogb3B0aW9ucy5lcnJvcixcbiAgLy8gICAgIGNhbGxiYWNrKHJvdXRlcykge1xuICAvLyAgICAgICBpZiAocm91dGVzLmxlbmd0aCA9PT0gMCkge1xuICAvLyAgICAgICAgIHJldHVybjtcbiAgLy8gICAgICAgfVxuXG4gIC8vICAgICAgIGNvbnN0IHJvdXRlID0gcm91dGVzW3JvdXRlcy5sZW5ndGggLSAxXTtcblxuICAvLyAgICAgICAvLyBzdGFydCBjYWxsYmFja1xuICAvLyAgICAgICBpZiAob3B0aW9ucy5zdGFydCkge1xuICAvLyAgICAgICAgIG9wdGlvbnMuc3RhcnQocm91dGUpO1xuICAvLyAgICAgICB9XG5cbiAgLy8gICAgICAgLy8gc3RlcCBjYWxsYmFja1xuICAvLyAgICAgICBpZiAob3B0aW9ucy5zdGVwKSB7XG4gIC8vICAgICAgICAgaWYgKHJvdXRlLmxlZ3MubGVuZ3RoID4gMCkge1xuICAvLyAgICAgICAgICAgY29uc3QgeyBzdGVwcywgfSA9IHJvdXRlLmxlZ3NbMF07XG5cbiAgLy8gICAgICAgICAgIHN0ZXBzLmZvckVhY2goKHN0ZXAsIGluZGV4KSA9PiB7XG4gIC8vICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAvLyAgICAgICAgICAgICBzdGVwLnN0ZXBfbnVtYmVyID0gaW5kZXg7XG4gIC8vICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAvLyAgICAgICAgICAgICBzdGVwLnN0ZXBOdW1iZXIgPSBpbmRleDtcblxuICAvLyAgICAgICAgICAgICBjb25zdCBwb2x5bGluZU9wdGlvbnMgPSB7XG4gIC8vICAgICAgICAgICAgICAgcGF0aDogc3RlcC5wYXRoLFxuICAvLyAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiBvcHRpb25zLnN0cm9rZUNvbG9yLFxuICAvLyAgICAgICAgICAgICAgIHN0cm9rZU9wYWNpdHk6IG9wdGlvbnMuc3Ryb2tlT3BhY2l0eSxcbiAgLy8gICAgICAgICAgICAgICBzdHJva2VXZWlnaHQ6IG9wdGlvbnMuc3Ryb2tlV2VpZ2h0LFxuICAvLyAgICAgICAgICAgICB9O1xuXG4gIC8vICAgICAgICAgICAgIGlmIChvcHRpb25zLmljb25zKSB7XG4gIC8vICAgICAgICAgICAgICAgcG9seWxpbmVPcHRpb25zLmljb25zID0gb3B0aW9ucy5pY29ucztcbiAgLy8gICAgICAgICAgICAgfVxuXG4gIC8vICAgICAgICAgICAgIHNlbGYuZHJhd1BvbHlsaW5lKHBvbHlsaW5lT3B0aW9ucyk7XG4gIC8vICAgICAgICAgICAgIG9wdGlvbnMuc3RlcChzdGVwLCAocm91dGUubGVnc1swXS5zdGVwcy5sZW5ndGggLSAxKSk7XG4gIC8vICAgICAgICAgICB9KTtcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgIH1cblxuICAvLyAgICAgICAvLyBlbmQgY2FsbGJhY2tcbiAgLy8gICAgICAgaWYgKG9wdGlvbnMuZW5kKSB7XG4gIC8vICAgICAgICAgb3B0aW9ucy5lbmQocm91dGUpO1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9LFxuICAvLyAgIH0pO1xuICAvLyB9IGVsc2UgaWYgKG9wdGlvbnMucm91dGUpIHtcbiAgLy8gICBpZiAob3B0aW9ucy5yb3V0ZS5sZWdzLmxlbmd0aCA+IDApIHtcbiAgLy8gICAgIGNvbnN0IHsgc3RlcHMsIH0gPSBvcHRpb25zLnJvdXRlLmxlZ3NbMF07XG5cbiAgLy8gICAgIHN0ZXBzLmZvckVhY2goKHN0ZXAsIGluZGV4KSA9PiB7XG4gIC8vICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAvLyAgICAgICBzdGVwLnN0ZXBfbnVtYmVyID0gaW5kZXg7XG4gIC8vICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAvLyAgICAgICBzdGVwLnN0ZXBOdW1iZXIgPSBpbmRleDtcblxuICAvLyAgICAgICBjb25zdCBwb2x5bGluZU9wdGlvbnMgPSB7XG4gIC8vICAgICAgICAgcGF0aDogc3RlcC5wYXRoLFxuICAvLyAgICAgICAgIHN0cm9rZUNvbG9yOiBvcHRpb25zLnN0cm9rZUNvbG9yLFxuICAvLyAgICAgICAgIHN0cm9rZU9wYWNpdHk6IG9wdGlvbnMuc3Ryb2tlT3BhY2l0eSxcbiAgLy8gICAgICAgICBzdHJva2VXZWlnaHQ6IG9wdGlvbnMuc3Ryb2tlV2VpZ2h0LFxuICAvLyAgICAgICB9O1xuXG4gIC8vICAgICAgIGlmIChvcHRpb25zLmljb25zKSB7XG4gIC8vICAgICAgICAgcG9seWxpbmVPcHRpb25zLmljb25zID0gb3B0aW9ucy5pY29ucztcbiAgLy8gICAgICAgfVxuXG4gIC8vICAgICAgIHNlbGYuZHJhd1BvbHlsaW5lKHBvbHlsaW5lT3B0aW9ucyk7XG5cbiAgLy8gICAgICAgb3B0aW9ucy5zdGVwKHN0ZXApO1xuICAvLyAgICAgfSk7XG4gIC8vICAgfVxuICAvLyB9XG59O1xuXG5jbGFzcyBSb3V0ZSB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLm9yaWdpbiA9IG9wdGlvbnMub3JpZ2luO1xuICAgIHRoaXMuZGVzdGluYXRpb24gPSBvcHRpb25zLmRlc3RpbmF0aW9uO1xuICAgIHRoaXMud2F5cG9pbnRzID0gb3B0aW9ucy53YXlwb2ludHM7XG5cbiAgICB0aGlzLm1hcCA9IG9wdGlvbnMubWFwO1xuICAgIHRoaXMucm91dGUgPSBvcHRpb25zLnJvdXRlO1xuICAgIHRoaXMuc3RlcF9jb3VudCA9IDA7XG4gICAgdGhpcy5zdGVwcyA9IHRoaXMucm91dGUubGVnc1swXS5zdGVwcztcbiAgICB0aGlzLnN0ZXBzX2xlbmd0aCA9IHRoaXMuc3RlcHMubGVuZ3RoO1xuXG4gICAgY29uc3QgcG9seWxpbmVPcHRpb25zID0ge1xuICAgICAgcGF0aDogbmV3IGdvb2dsZS5tYXBzLk1WQ0FycmF5KCksXG4gICAgICBzdHJva2VDb2xvcjogb3B0aW9ucy5zdHJva2VDb2xvcixcbiAgICAgIHN0cm9rZU9wYWNpdHk6IG9wdGlvbnMuc3Ryb2tlT3BhY2l0eSxcbiAgICAgIHN0cm9rZVdlaWdodDogb3B0aW9ucy5zdHJva2VXZWlnaHQsXG4gICAgfTtcblxuICAgIGlmIChvcHRpb25zLmljb25zKSB7XG4gICAgICBwb2x5bGluZU9wdGlvbnMuaWNvbnMgPSBvcHRpb25zLmljb25zO1xuICAgIH1cblxuICAgIHRoaXMucG9seWxpbmUgPSB0aGlzLm1hcC5kcmF3UG9seWxpbmUocG9seWxpbmVPcHRpb25zKS5nZXRQYXRoKCk7XG4gIH1cblxuICBnZXRSb3V0ZShvcHRpb25zKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLm1hcC5nZXRSb3V0ZXMoe1xuICAgICAgb3JpZ2luOiB0aGlzLm9yaWdpbixcbiAgICAgIGRlc3RpbmF0aW9uOiB0aGlzLmRlc3RpbmF0aW9uLFxuICAgICAgdHJhdmVsTW9kZTogb3B0aW9ucy50cmF2ZWxNb2RlLFxuICAgICAgd2F5cG9pbnRzOiB0aGlzLndheXBvaW50cyB8fCBbXSxcbiAgICAgIGVycm9yOiBvcHRpb25zLmVycm9yLFxuICAgICAgY2FsbGJhY2socm91dGVzKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICBzZWxmLnJvdXRlID0gcm91dGVzWzBdO1xuXG4gICAgICAgIGlmIChvcHRpb25zLmNhbGxiYWNrKSB7XG4gICAgICAgICAgb3B0aW9ucy5jYWxsYmFjay5jYWxsKHNlbGYpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgYmFjaygpIHtcbiAgICBpZiAodGhpcy5zdGVwX2NvdW50ID4gMCkge1xuICAgICAgdGhpcy5zdGVwX2NvdW50IC09IDE7XG4gICAgICBjb25zdCB7IHBhdGgsIH0gPSB0aGlzLnJvdXRlLmxlZ3NbMF0uc3RlcHNbdGhpcy5zdGVwX2NvdW50XTtcblxuICAgICAgcGF0aC5mb3JFYWNoKCgpID0+IHRoaXMucG9seWxpbmUucG9wKCkpO1xuICAgIH1cbiAgfVxuXG4gIGZvcndhcmQoKSB7XG4gICAgaWYgKHRoaXMuc3RlcF9jb3VudCA8IHRoaXMuc3RlcHNfbGVuZ3RoKSB7XG4gICAgICBjb25zdCB7IHBhdGgsIH0gPSB0aGlzLnJvdXRlLmxlZ3NbMF0uc3RlcHNbdGhpcy5zdGVwX2NvdW50XTtcblxuICAgICAgcGF0aC5mb3JFYWNoKGNvb3JkaW5hdGUgPT4gdGhpcy5wb2x5bGluZS5wdXNoKGNvb3JkaW5hdGUpKTtcblxuICAgICAgdGhpcy5zdGVwX2NvdW50ICs9IDE7XG4gICAgfVxuICB9XG59XG5cbkdNYXBzLlJvdXRlID0gUm91dGU7XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXBzO1xuIiwiaW1wb3J0IEdNYXBzIGZyb20gJy4vY29yZSc7XG5cbmNvbnN0IHBhcnNlQ29sb3IgPSAoY29sb3IsIG9wYWNpdHkpID0+IHtcbiAgbGV0IHBhcnNlZENvbG9yO1xuXG4gIGlmIChjb2xvclswXSA9PT0gJyMnKSB7XG4gICAgcGFyc2VkQ29sb3IgPSBjb2xvci5yZXBsYWNlKCcjJywgJzB4Jyk7XG5cbiAgICBpZiAob3BhY2l0eSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBvcGFjaXR5ID0gTWF0aC5taW4oMSwgTWF0aC5tYXgocGFyc2VGbG9hdChvcGFjaXR5KSwgMCkpO1xuXG4gICAgICBpZiAob3BhY2l0eSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJzB4MDAwMDAwMDAnO1xuICAgICAgfVxuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG9wYWNpdHkgPSAob3BhY2l0eSAqIDI1NSkudG9TdHJpbmcoMTYpO1xuXG4gICAgICBpZiAob3BhY2l0eS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIG9wYWNpdHkgKz0gb3BhY2l0eTtcbiAgICAgIH1cblxuICAgICAgcGFyc2VkQ29sb3IgPSBwYXJzZWRDb2xvci5zbGljZSgwLCA4KSArIG9wYWNpdHk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnNlZENvbG9yO1xufTtcblxuLyoqXG4gKiBFeHRlbmRzIEdNYXBzIHRvIGdlbmVyYXRlIHN0YXRpYyBtYXBzLlxuICogQG1vZHVsZSBTdGF0aWNcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gVVJMIGZvciBhIHN0YXRpYyBtYXAgZnJvbSBjdXJyZW50IEdNYXBzIG1hcC5cbiAqIEBmdW5jdGlvbiB0b0ltYWdlXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgYG9wdGlvbnNgIG9iamVjdCBzaG91bGQgY29udGFpbjpcbiAqIEBwYXJhbSB7YXJyYXl9IG9wdGlvbnMuc2l6ZSAtIFdpZHRoIGFuZCBoZWlnaHQgb2YgdGhlIGltYWdlLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbiBHTWFwcy5wcm90b3R5cGUudG9JbWFnZSA9IGZ1bmN0aW9uIHRvSW1hZ2Uob3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHsgc2l6ZSA9IFt0aGlzLmVsZW1lbnQuY2xpZW50V2lkdGgsIHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHRdLCB6b29tID0gdGhpcy5nZXRab29tKCksIH0gPSBvcHRpb25zO1xuXG4gIGNvbnN0IHN0YXRpY01hcE9wdGlvbnMgPSB7XG4gICAgc2l6ZSxcbiAgICB6b29tLFxuICAgIGxhdGl0dWRlOiB0aGlzLmdldENlbnRlcigpLmxhdCgpLFxuICAgIGxvbmdpdHVkZTogdGhpcy5nZXRDZW50ZXIoKS5sbmcoKSxcbiAgICBtYXJrZXJzOiB0aGlzLm1hcmtlcnMubWFwKG1hcmtlciA9PiAoe1xuICAgICAgbGF0aXR1ZGU6IG1hcmtlci5nZXRQb3NpdGlvbigpLmxhdCgpLFxuICAgICAgbG9uZ2l0dWRlOiBtYXJrZXIuZ2V0UG9zaXRpb24oKS5sbmcoKSxcbiAgICB9KSksXG4gIH07XG5cbiAgaWYgKHRoaXMucG9seWxpbmVzLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBwb2x5bGluZSA9IHRoaXMucG9seWxpbmVzWzBdO1xuXG4gICAgc3RhdGljTWFwT3B0aW9ucy5wb2x5bGluZSA9IHtcbiAgICAgIHBhdGg6IGdvb2dsZS5tYXBzLmdlb21ldHJ5LmVuY29kaW5nLmVuY29kZVBhdGgocG9seWxpbmUuZ2V0UGF0aCgpKSxcbiAgICAgIHN0cm9rZUNvbG9yOiBwb2x5bGluZS5zdHJva2VDb2xvcixcbiAgICAgIHN0cm9rZU9wYWNpdHk6IHBvbHlsaW5lLnN0cm9rZU9wYWNpdHksXG4gICAgICBzdHJva2VXZWlnaHQ6IHBvbHlsaW5lLnN0cm9rZVdlaWdodCxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIEdNYXBzLnN0YXRpY01hcFVSTChzdGF0aWNNYXBPcHRpb25zKTtcbn07XG5cbmNvbnN0IGJ1aWxkTWFya2VyUGFyYW1ldGVycyA9IChtYXJrZXIpID0+IHtcbiAgY29uc3QgbWFya2VyUGFyYW1ldGVycyA9IFtdO1xuXG4gIGNvbnN0IHsgYWRkcmVzcywgbGF0LCBsYXRpdHVkZSA9IGxhdCwgbG5nLCBsb25naXR1ZGUgPSBsbmcsIHNpemUsIGljb24sIGNvbG9yLCBsYWJlbCwgLi4ubWFya2VyT3B0aW9ucyB9ID0gbWFya2VyO1xuXG4gIGNvbnN0IGxvY2F0aW9uID0gYWRkcmVzcyB8fCBgJHtsYXRpdHVkZX0sJHtsb25naXR1ZGV9YDtcblxuICBpZiAoc2l6ZSkge1xuICAgIG1hcmtlclBhcmFtZXRlcnMucHVzaChgc2l6ZToke3NpemV9YCk7XG4gIH1cblxuICBpZiAoaWNvbikge1xuICAgIG1hcmtlclBhcmFtZXRlcnMucHVzaChgaWNvbjoke2VuY29kZVVSSShpY29uKX1gKTtcbiAgfVxuXG4gIGlmIChjb2xvcikge1xuICAgIG1hcmtlclBhcmFtZXRlcnMucHVzaChgY29sb3I6JHtjb2xvci5yZXBsYWNlKCcjJywgJzB4Jyl9YCk7XG4gIH1cblxuICBpZiAobGFiZWwpIHtcbiAgICBtYXJrZXJQYXJhbWV0ZXJzLnB1c2goYGxhYmVsOiR7bGFiZWxbMF0udG9VcHBlckNhc2UoKX1gKTtcbiAgfVxuXG4gIE9iamVjdC5rZXlzKG1hcmtlck9wdGlvbnMpLmZvckVhY2goa2V5ID0+IG1hcmtlclBhcmFtZXRlcnMucHVzaChgJHtrZXl9OiR7bWFya2VyUGFyYW1ldGVyc1trZXldfWApKTtcblxuICBtYXJrZXJQYXJhbWV0ZXJzLnB1c2gobG9jYXRpb24pO1xuXG4gIHJldHVybiBtYXJrZXJQYXJhbWV0ZXJzO1xufTtcblxuY29uc3QgYnVpbGRQYXRoUGFyYW1ldGVycyA9IChwb2x5bGluZSkgPT4ge1xuICBjb25zdCB7IHBhdGgsIH0gPSBwb2x5bGluZTtcbiAgY29uc3QgcG9seWxpbmVQYXJhbWV0ZXJzID0gW107XG5cbiAgaWYgKHBvbHlsaW5lLnN0cm9rZVdlaWdodCkge1xuICAgIHBvbHlsaW5lUGFyYW1ldGVycy5wdXNoKGB3ZWlnaHQ6JHtwYXJzZUludChwb2x5bGluZS5zdHJva2VXZWlnaHQsIDEwKX1gKTtcbiAgfVxuXG4gIGlmIChwb2x5bGluZS5zdHJva2VDb2xvcikge1xuICAgIHBvbHlsaW5lUGFyYW1ldGVycy5wdXNoKGBjb2xvcjoke3BhcnNlQ29sb3IocG9seWxpbmUuc3Ryb2tlQ29sb3IsIHBvbHlsaW5lLnN0cm9rZU9wYWNpdHkpfWApO1xuICB9XG5cbiAgaWYgKHBvbHlsaW5lLmZpbGxDb2xvcikge1xuICAgIHBvbHlsaW5lUGFyYW1ldGVycy5wdXNoKGBmaWxsY29sb3I6JHtwYXJzZUNvbG9yKHBvbHlsaW5lLmZpbGxDb2xvciwgcG9seWxpbmUuZmlsbE9wYWNpdHkpfWApO1xuICB9XG5cbiAgaWYgKHBhdGguam9pbikge1xuICAgIHBhdGguZm9yRWFjaChjb29yZGluYXRlcyA9PiBwb2x5bGluZVBhcmFtZXRlcnMucHVzaChjb29yZGluYXRlcy5qb2luKCcsJykpKTtcbiAgfSBlbHNlIHtcbiAgICBwb2x5bGluZVBhcmFtZXRlcnMucHVzaChgZW5jOiR7cGF0aH1gKTtcbiAgfVxuXG4gIHJldHVybiBwb2x5bGluZVBhcmFtZXRlcnM7XG59O1xuXG5jb25zdCBidWlsZFN0eWxlUGFyYW1ldGVycyA9IChzdHlsZSkgPT4ge1xuICBjb25zdCBzdHlsZVBhcmFtZXRlcnMgPSBbXTtcblxuICBpZiAoc3R5bGUuZmVhdHVyZVR5cGUpIHtcbiAgICBzdHlsZVBhcmFtZXRlcnMucHVzaChgZmVhdHVyZToke3N0eWxlLmZlYXR1cmVUeXBlLnRvTG93ZXJDYXNlKCl9YCk7XG4gIH1cblxuICBpZiAoc3R5bGUuZWxlbWVudFR5cGUpIHtcbiAgICBzdHlsZVBhcmFtZXRlcnMucHVzaChgZWxlbWVudDoke3N0eWxlLmVsZW1lbnRUeXBlLnRvTG93ZXJDYXNlKCl9YCk7XG4gIH1cblxuICBpZiAoc3R5bGUuc3R5bGVycy5sZW5ndGgpIHtcbiAgICBzdHlsZS5zdHlsZXJzLmZvckVhY2goKHN0eWxlcikgPT4ge1xuICAgICAgT2JqZWN0LmtleXMoc3R5bGVyKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSAoa2V5ID09PSAnaHVlJyB8fCBrZXkgPT09ICdjb2xvcicpID8gc3R5bGVyW2tleV0ucmVwbGFjZSgnIycsICcweCcpIDogc3R5bGVyW2tleV07XG5cbiAgICAgICAgc3R5bGVQYXJhbWV0ZXJzLnB1c2goYCR7a2V5fToke3ZhbHVlfWApO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGVQYXJhbWV0ZXJzO1xufTtcblxuR01hcHMuc3RhdGljTWFwVVJMID0gZnVuY3Rpb24gc3RhdGljTWFwVVJMKGJhc2VPcHRpb25zKSB7XG4gIGNvbnN0IHsgdXJsLCBsYXQsIGxhdGl0dWRlID0gbGF0LCBsbmcsIGxvbmdpdHVkZSA9IGxuZywgY2VudGVyLCBhZGRyZXNzLCB6b29tID0gMTUsIG1hcmtlcnMgPSBbXSwgc3R5bGVzLCBwb2x5bGluZSwgdmlzaWJsZSwgc2l6ZSA9IFs2MzAsIDMwMF0sIC4uLm9wdGlvbnMgfSA9IGJhc2VPcHRpb25zO1xuICBjb25zdCBkZWZhdWx0Um9vdCA9IGAke2dsb2JhbC5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2ZpbGU6JyA/ICdodHRwOicgOiBnbG9iYWwubG9jYXRpb24ucHJvdG9jb2x9Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL3N0YXRpY21hcGA7XG5cbiAgbGV0IHJvb3QgPSB1cmwgfHwgZGVmYXVsdFJvb3Q7XG4gIGNvbnN0IHBhcmFtZXRlcnMgPSBbXTtcblxuICByb290ICs9ICc/JztcblxuICAvLyBNYXAgb3B0aW9uc1xuICBpZiAoY2VudGVyKSB7XG4gICAgcGFyYW1ldGVycy5wdXNoKGBjZW50ZXI9JHtjZW50ZXJ9YCk7XG4gIH0gZWxzZSBpZiAoYWRkcmVzcykge1xuICAgIHBhcmFtZXRlcnMucHVzaChgY2VudGVyPSR7YWRkcmVzc31gKTtcbiAgfSBlbHNlIGlmIChsYXRpdHVkZSAmJiBsb25naXR1ZGUpIHtcbiAgICBwYXJhbWV0ZXJzLnB1c2goYGNlbnRlcj0ke2xhdGl0dWRlfSwke2xvbmdpdHVkZX1gKTtcbiAgfSBlbHNlIGlmICh2aXNpYmxlKSB7XG4gICAgcGFyYW1ldGVycy5wdXNoKGB2aXNpYmxlPSR7ZW5jb2RlVVJJKHZpc2libGUuam9pbignfCcpKX1gKTtcbiAgfVxuXG4gIHBhcmFtZXRlcnMucHVzaChgc2l6ZT0ke3NpemUuam9pbigneCcpfWApO1xuICBwYXJhbWV0ZXJzLnB1c2goYHpvb209JHt6b29tfWApO1xuXG4gIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goa2V5ID0+IHBhcmFtZXRlcnMucHVzaChgJHtrZXl9PSR7b3B0aW9uc1trZXldfWApKTtcblxuICAvLyBNYXAgc3R5bGVcbiAgaWYgKHN0eWxlcykge1xuICAgIHN0eWxlcy5mb3JFYWNoKChzdHlsZSkgPT4ge1xuICAgICAgY29uc3Qgc3R5bGVQYXJhbWV0ZXJzID0gYnVpbGRTdHlsZVBhcmFtZXRlcnMoc3R5bGUpO1xuXG4gICAgICBwYXJhbWV0ZXJzLnB1c2goYHN0eWxlPSR7ZW5jb2RlVVJJKHN0eWxlUGFyYW1ldGVycy5qb2luKCd8JykpfWApO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gTWFya2Vyc1xuICBpZiAobWFya2Vycy5sZW5ndGgpIHtcbiAgICBtYXJrZXJzLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgY29uc3QgbWFya2VyUGFyYW1ldGVycyA9IGJ1aWxkTWFya2VyUGFyYW1ldGVycyhtYXJrZXIpO1xuICAgICAgcGFyYW1ldGVycy5wdXNoKGBtYXJrZXJzPSR7ZW5jb2RlVVJJKG1hcmtlclBhcmFtZXRlcnMuam9pbignfCcpKX1gKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFBvbHlsaW5lc1xuICBpZiAocG9seWxpbmUpIHtcbiAgICBjb25zdCBwb2x5bGluZVBhcmFtZXRlcnMgPSBidWlsZFBhdGhQYXJhbWV0ZXJzKHBvbHlsaW5lKTtcblxuICAgIHBhcmFtZXRlcnMucHVzaChgcGF0aD0ke2VuY29kZVVSSShwb2x5bGluZVBhcmFtZXRlcnMuam9pbignfCcpKX1gKTtcbiAgfVxuXG4gIC8vIFJldGluYSBzdXBwb3J0XG4gIGNvbnN0IGRwaSA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG4gIHBhcmFtZXRlcnMucHVzaChgc2NhbGU9JHtkcGl9YCk7XG5cbiAgcmV0dXJuIHJvb3QgKyBwYXJhbWV0ZXJzLmpvaW4oJyYnKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXBzO1xuIiwiaW1wb3J0IEdNYXBzLCB7IGdldEVsZW1lbnRCeUlkLCBzZXR1cEV2ZW50cyB9IGZyb20gJy4vY29yZSc7XG5cbi8qKlxuICogRXh0ZW5kcyBHTWFwcyB0byB1c2UgU3RyZWV0VmlldyBwYW5vcmFtYXNcbiAqIEBtb2R1bGUgU3RyZWV0Vmlld1xuICovXG5cbmNvbnN0IFNUUkVFVFZJRVdfRVZFTlRTID0gWydjbG9zZWNsaWNrJywgJ2xpbmtzX2NoYW5nZWQnLCAncGFub19jaGFuZ2VkJywgJ3Bvc2l0aW9uX2NoYW5nZWQnLCAncG92X2NoYW5nZWQnLCAncmVzaXplJywgJ3Zpc2libGVfY2hhbmdlZCddO1xuXG4vKipcbiAqIERpc3BsYXkgYSBTdHJlZXQgVmlldyBQYW5vcmFtYSBmb3IgYSBwb3NpdGlvbi5cbiAqIEBmdW5jdGlvbiBjcmVhdGVQYW5vcmFtYVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBvYmplY3Qgc2hvdWxkIGNvbnRhaW46XG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5sYXRpdHVkZSAtIExhdGl0dWRlIG9mIHRoZSBjb29yZGluYXRlIHdoZXJlIHRoZSBwYW5vcmFtYSBpcyBwbGFjZWQuIElmIG5vdCBzZXQsIGl0IHRha2VzIHRoZSBNYXAncyBjZW50ZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5sb25naXR1ZGUgLSBMb25naXR1ZGUgb2YgdGhlIGNvb3JkaW5hdGUgd2hlcmUgdGhlIHBhbm9yYW1hIGlzIHBsYWNlZC4gSWYgbm90IHNldCwgaXQgdGFrZXMgdGhlIE1hcCdzIGNlbnRlci5cbiAqIEBwYXJhbSB7Z29vZ2xlLm1hcHMuTGF0TG5nfSBvcHRpb25zLnBvc2l0aW9uIC0gQSBgZ29vZ2xlLm1hcHMuTGF0TG5nYCBjb29yZGluYXRlIHdoZXJlIHRoZSBwYW5vcmFtYSBpcyBwbGFjZWQuIElmIHNldCwgYGxhdGl0dWRlYCBhbmQgYGxvbmdpdHVkZWAgYXJlIGlnbm9yZWQuXG4gKlxuICogYG9wdGlvbnNgIGFsc28gYWNjZXB0cyBhbnkgb3B0aW9uIGRlZmluZWQgaW4gdGhlIFtvZmZpY2lhbCBkb2N1bWVudGF0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjU3RyZWV0Vmlld1Bhbm9yYW1hT3B0aW9ucykgYW5kIGFueSBldmVudCBkZWZpbmVkIGluIHRoZSBbXCJFdmVudHNcIiBzZWN0aW9uXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjU3RyZWV0Vmlld1Bhbm9yYW1hKS5cbiAqXG4gKiBAcmV0dXJucyB7Z29vZ2xlLm1hcHMuU3RyZWV0Vmlld1Bhbm9yYW1hfVxuICovXG5HTWFwcy5wcm90b3R5cGUuY3JlYXRlUGFub3JhbWEgPSBmdW5jdGlvbiBjcmVhdGVQYW5vcmFtYShiYXNlT3B0aW9ucykge1xuICBjb25zdCB7IGxhdCA9IHRoaXMuZ2V0Q2VudGVyKCkubGF0KCksIGxhdGl0dWRlID0gbGF0LCBsbmcgPSB0aGlzLmdldENlbnRlcigpLmxuZygpLCBsb25naXR1ZGUgPSBsbmcsIC4uLm9wdGlvbnMgfSA9IGJhc2VPcHRpb25zO1xuXG4gIGNvbnN0IHN0cmVldFZpZXdPcHRpb25zID0ge1xuICAgIGxhdGl0dWRlLFxuICAgIGxvbmdpdHVkZSxcbiAgICBpbnN0YW5jZTogdGhpcyxcbiAgICAuLi5vcHRpb25zLFxuICB9O1xuXG4gIHRoaXMucGFub3JhbWEgPSBHTWFwcy5jcmVhdGVQYW5vcmFtYShzdHJlZXRWaWV3T3B0aW9ucyk7XG5cbiAgdGhpcy5tYXAuc2V0U3RyZWV0Vmlldyh0aGlzLnBhbm9yYW1hKTtcblxuICByZXR1cm4gdGhpcy5wYW5vcmFtYTtcbn07XG5cbkdNYXBzLmNyZWF0ZVBhbm9yYW1hID0gZnVuY3Rpb24gY3JlYXRlUGFub3JhbWEoYmFzZU9wdGlvbnMpIHtcbiAgY29uc3Qge1xuICAgIGVsLFxuICAgIGVsZW1lbnQgPSBlbCxcbiAgICBjb250ZXh0LFxuICAgIGxhdCxcbiAgICBsYXRpdHVkZSA9IGxhdCxcbiAgICBsbmcsXG4gICAgbG9uZ2l0dWRlID0gbG5nLFxuICAgIHBvc2l0aW9uID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsYXRpdHVkZSwgbG9uZ2l0dWRlKSxcbiAgICBpbnN0YW5jZSA9IGdsb2JhbCxcbiAgICAuLi5vcHRpb25zXG4gIH0gPSBiYXNlT3B0aW9ucztcblxuICBjb25zdCBjb250YWluZXJFbGVtZW50ID0gZ2V0RWxlbWVudEJ5SWQoZWxlbWVudCwgY29udGV4dCk7XG5cbiAgY29uc3QgZmlsdGVyZWRPcHRpb25zID0gT2JqZWN0LmtleXMob3B0aW9ucykucmVkdWNlKChoYXNoLCBrZXkpID0+IHtcbiAgICBpZiAoU1RSRUVUVklFV19FVkVOVFMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgcmV0dXJuIGhhc2g7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgLi4uaGFzaCwgW2tleV06IG9wdGlvbnNba2V5XSwgfTtcbiAgfSwge30pO1xuXG4gIGNvbnN0IHN0cmVldFZpZXdPcHRpb25zID0ge1xuICAgIC4uLmZpbHRlcmVkT3B0aW9ucyxcbiAgICBwb3NpdGlvbixcbiAgICB2aXNpYmxlOiB0cnVlLFxuICB9O1xuXG4gIGNvbnN0IHBhbm9yYW1hID0gbmV3IGdvb2dsZS5tYXBzLlN0cmVldFZpZXdQYW5vcmFtYShjb250YWluZXJFbGVtZW50LCBzdHJlZXRWaWV3T3B0aW9ucyk7XG5cbiAgc2V0dXBFdmVudHMoeyBldmVudHM6IFNUUkVFVFZJRVdfRVZFTlRTLCBvYmplY3Q6IHBhbm9yYW1hLCBpbnN0YW5jZSwgaGFuZGxlcnM6IG9wdGlvbnMsIH0pO1xuXG4gIHJldHVybiBwYW5vcmFtYTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXBzO1xuIiwiaW1wb3J0IEdNYXBzIGZyb20gJy4vY29yZSc7XG5cbi8qKlxuICogRXh0ZW5kcyBHTWFwcyB0byBhZGQgc3R5bGVkIG1hcCB0eXBlcy5cbiAqIEBtb2R1bGUgU3R5bGVzXG4gKi9cblxuLyoqXG4gKiBBZGQgYSBbc3R5bGVkIG1hcCB0eXBlXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9tYXB0eXBlcyNTdHlsZWRNYXBzKSBpbiB0aGUgTWFwLCB3aGljaCBjYW4gYmUgdXNlZCB3aXRoIHRoZSBiYXNlIG1hcCB0eXBlcyAoYGh5YnJpZGAsIGByb2FkbWFwYCwgYHNhdGVsbGl0ZWAgYW5kIGB0ZXJyYWluYCkuXG4gKiBAZnVuY3Rpb24gYWRkU3R5bGVcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRoZSBgb3B0aW9uc2Agb2JqZWN0IHNob3VsZCBjb250YWluOlxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubWFwVHlwZUlkIC0gQSBzaW1wbGUgaWRlbnRpZmllciBmb3IgdGhlIHN0eWxlZCBtYXAgdHlwZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnN0eWxlZE1hcE5hbWUgLSBBIG5hbWUgZm9yIHRoZSBzdHlsZWQgbWFwIHR5cGUuIEl0IHdpbGwgYmUgZGlzcGxheWVkIGluIHRoZSBtYXAgdHlwZSBjb250cm9sLlxuICogQHBhcmFtIHthcnJheX0gb3B0aW9ucy5zdHlsZXMgLSBBbiBhcnJheSBvZiAoYE1hcFR5cGVTdHlsZWApW2h0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNNYXBUeXBlU3R5bGVdIG9iamVjdHMuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5hZGRTdHlsZSA9IGZ1bmN0aW9uIGFkZFN0eWxlKG9wdGlvbnMpIHtcbiAgY29uc3Qgc3R5bGVkTWFwVHlwZSA9IG5ldyBnb29nbGUubWFwcy5TdHlsZWRNYXBUeXBlKG9wdGlvbnMuc3R5bGVzLCB7IG5hbWU6IG9wdGlvbnMuc3R5bGVkTWFwTmFtZSwgfSk7XG5cbiAgdGhpcy5tYXAubWFwVHlwZXMuc2V0KG9wdGlvbnMubWFwVHlwZUlkLCBzdHlsZWRNYXBUeXBlKTtcbn07XG5cbi8qKlxuICogU2V0IGEgW3N0eWxlZCBtYXAgdHlwZV0oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvbWFwdHlwZXMjU3R5bGVkTWFwcykgdG8gdGhlIE1hcC4gVGhlIG1hcCB0eXBlIHNob3VsZCBiZSBkZWZpbmVkIGJlZm9yZSB3aXRoIHtAbGluayBHTWFwcyNhZGRTdHlsZX0uXG4gKiBAZnVuY3Rpb24gc2V0U3R5bGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWFwVHlwZUlkIC0gVGhlIHN0eWxlZCBtYXAgdHlwZSdzIGlkZW50aWZpZXIuXG4gKi9cbkdNYXBzLnByb3RvdHlwZS5zZXRTdHlsZSA9IGZ1bmN0aW9uIHNldFN0eWxlKG1hcFR5cGVJZCkge1xuICB0aGlzLm1hcC5zZXRNYXBUeXBlSWQobWFwVHlwZUlkKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXBzO1xuIiwiaW1wb3J0IEdNYXBzIGZyb20gJy4vY29yZSc7XG5cbi8qKlxuICogRXh0ZW5kcyBHTWFwcyB0byBhZGQgdXRpbHMgZnVuY3Rpb25zLlxuICogQG1vZHVsZSBVdGlsc1xuICovXG5cbi8qKlxuICogR2VvbG9jYXRlIHVzaW5nIGJyb3dzZXIncyBXZWIgQVBJLlxuICogQGZ1bmN0aW9uIGdlb2xvY2F0ZVxuICogQHN0YXRpY1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBvYmplY3Qgc2hvdWxkIGNvbnRhaW46XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLmFsd2F5cyAtIEEgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIGFmdGVyIHRoZSBgc3VjY2Vzc2AsIGBlcnJvcmAgYW5kIGBub3Rfc3VwcG9ydGVkYCBjYWxsYmFja3MuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLnN1Y2Nlc3MgLSBBIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBhZnRlciB0aGUgYnJvd3NlciBmaW5kIGl0cyBnZW9sb2NhdGlvbi5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMuZXJyb3IgLSBBIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBhZnRlciB0aGUgYnJvd3NlciBmYWlscyBhdCBmaW5kaW5nIGl0cyBnZW9sb2NhdGlvbi5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMubm90X3N1cHBvcnRlZCAtIEEgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIGlmIHRoZSBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBnZW9sb2NhdGlvbi5cbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zLm9wdGlvbnMgLSBPYmplY3Qgd2l0aCBhbGwgb3B0aW9ucyBkZWZpbmVkIGluIFtQb3NpdGlvbk9wdGlvbnNdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Qb3NpdGlvbk9wdGlvbnMpLlxuICovXG5HTWFwcy5nZW9sb2NhdGUgPSBmdW5jdGlvbiBnZW9sb2NhdGUob3B0aW9ucykge1xuICBjb25zdCBjb21wbGV0ZUNhbGxiYWNrID0gb3B0aW9ucy5hbHdheXMgfHwgb3B0aW9ucy5jb21wbGV0ZTtcblxuICBpZiAoZ2xvYmFsLm5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgIGdsb2JhbC5uYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKChwb3NpdGlvbikgPT4ge1xuICAgICAgaWYgKG9wdGlvbnMuc3VjY2Vzcykge1xuICAgICAgICBvcHRpb25zLnN1Y2Nlc3MocG9zaXRpb24pO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29tcGxldGVDYWxsYmFjaykge1xuICAgICAgICBjb21wbGV0ZUNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICBpZiAob3B0aW9ucy5lcnJvcikge1xuICAgICAgICBvcHRpb25zLmVycm9yKGVycm9yKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbXBsZXRlQ2FsbGJhY2spIHtcbiAgICAgICAgY29tcGxldGVDYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH0sIG9wdGlvbnMub3B0aW9ucyk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKG9wdGlvbnMubm90X3N1cHBvcnRlZCkge1xuICAgICAgb3B0aW9ucy5ub3Rfc3VwcG9ydGVkKCk7XG4gICAgfVxuXG4gICAgaWYgKGNvbXBsZXRlQ2FsbGJhY2spIHtcbiAgICAgIGNvbXBsZXRlQ2FsbGJhY2soKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogR2VvY29kZSB1c2luZyBHb29nbGUgTWFwcyBHZW9jb2Rpbmcgc2VydmljZS5cbiAqIEBmdW5jdGlvbiBnZW9sb2NhdGVcbiAqIEBzdGF0aWNcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRoZSBgb3B0aW9uc2Agb2JqZWN0IHNob3VsZCBjb250YWluOlxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMubGF0aXR1ZGUgLSBMYXRpdHVkZSBvZiB0aGUgY29vcmRpbmF0ZSB0byBnZW9jb2RlLiBJZiBgbGF0aXR1ZGVgIGFuZCBgbG9uZ2l0dWRlYCBhcmUgc2V0LCBgbG9jYXRpb25gIGlzIGlnbm9yZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5sb25naXR1ZGUgLSBMb25naXR1ZGUgb2YgdGhlIGNvb3JkaW5hdGUgdG8gZ2VvY29kZS4gSWYgYGxhdGl0dWRlYCBhbmQgYGxvbmdpdHVkZWAgYXJlIHNldCwgYGxvY2F0aW9uYCBpcyBpZ25vcmVkLlxuICogQHBhcmFtIHtnb29nbGUubWFwcy5MYXRMbmd9IG9wdGlvbnMubG9jYXRpb24gLSBBIGBnb29nbGUubWFwcy5MYXRMbmdgIGNvb3JkaW5hdGUgdG8gZ2VvY29kZS4gSWYgc2V0LCBgbGF0aXR1ZGVgIGFuZCBgbG9uZ2l0dWRlYCBhcmUgaWdub3JlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMuY2FsbGJhY2sgLSBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgYWZ0ZXIgdGhlIHJlc3VsdHMgYXJlIHJldHVybmVkLiBJdCByZWNlaXZlcyAyIGFyZ3VtZW50cywgd2hpY2ggaXMgYW4gYXJyYXkgb2YgW0dlb2NvZGVyUmVzdWx0XShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjR2VvY29kZXJSZXN1bHQpIG9iamVjdHMgYW5kIHRoZSBbcmVxdWVzdCdzIHN0YXR1c10oaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvcmVmZXJlbmNlI0dlb2NvZGVyU3RhdHVzKS5cbiAqXG4gKiBgb3B0aW9uc2AgYWxzbyBhY2NlcHRzIGFueSBvcHRpb24gZGVmaW5lZCBpbiB0aGUgW29mZmljaWFsIGRvY3VtZW50YXRpb25dKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNHZW9jb2RlclJlcXVlc3QpLlxuICpcbiAqL1xuR01hcHMuZ2VvY29kZSA9IGZ1bmN0aW9uIGdlb2NvZGUoYmFzZU9wdGlvbnMpIHtcbiAgY29uc3Qge1xuICAgIGNhbGxiYWNrLFxuICAgIGxhdCxcbiAgICBsYXRpdHVkZSA9IGxhdCxcbiAgICBsbmcsXG4gICAgbG9uZ2l0dWRlID0gbG5nLFxuICAgIGxvY2F0aW9uID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsYXRpdHVkZSwgbG9uZ2l0dWRlKSxcbiAgICAuLi5vcHRpb25zXG4gIH0gPSBiYXNlT3B0aW9ucztcblxuICB0aGlzLmdlb2NvZGVyID0gbmV3IGdvb2dsZS5tYXBzLkdlb2NvZGVyKCk7XG5cbiAgY29uc3QgZ2VvY29kZU9wdGlvbnMgPSB7XG4gICAgLi4ub3B0aW9ucyxcbiAgICBsb2NhdGlvbixcbiAgfTtcblxuICB0aGlzLmdlb2NvZGVyLmdlb2NvZGUoZ2VvY29kZU9wdGlvbnMsIGNhbGxiYWNrKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdNYXBzO1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFIgPSB0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgPyBSZWZsZWN0IDogbnVsbFxudmFyIFJlZmxlY3RBcHBseSA9IFIgJiYgdHlwZW9mIFIuYXBwbHkgPT09ICdmdW5jdGlvbidcbiAgPyBSLmFwcGx5XG4gIDogZnVuY3Rpb24gUmVmbGVjdEFwcGx5KHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwodGFyZ2V0LCByZWNlaXZlciwgYXJncyk7XG4gIH1cblxudmFyIFJlZmxlY3RPd25LZXlzXG5pZiAoUiAmJiB0eXBlb2YgUi5vd25LZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gUi5vd25LZXlzXG59IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KVxuICAgICAgLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpO1xuICB9O1xufSBlbHNlIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gUHJvY2Vzc0VtaXRXYXJuaW5nKHdhcm5pbmcpIHtcbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS53YXJuKSBjb25zb2xlLndhcm4od2FybmluZyk7XG59XG5cbnZhciBOdW1iZXJJc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBOdW1iZXJJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIEV2ZW50RW1pdHRlci5pbml0LmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHNDb3VudCA9IDA7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbnZhciBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudEVtaXR0ZXIsICdkZWZhdWx0TWF4TGlzdGVuZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkZWZhdWx0TWF4TGlzdGVuZXJzO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnbnVtYmVyJyB8fCBhcmcgPCAwIHx8IE51bWJlcklzTmFOKGFyZykpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJkZWZhdWx0TWF4TGlzdGVuZXJzXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIGFyZyArICcuJyk7XG4gICAgfVxuICAgIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSBhcmc7XG4gIH1cbn0pO1xuXG5FdmVudEVtaXR0ZXIuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gIGlmICh0aGlzLl9ldmVudHMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5fZXZlbnRzID09PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuX2V2ZW50cykge1xuICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn07XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIHNldE1heExpc3RlbmVycyhuKSB7XG4gIGlmICh0eXBlb2YgbiAhPT0gJ251bWJlcicgfHwgbiA8IDAgfHwgTnVtYmVySXNOYU4obikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiblwiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBuICsgJy4nKTtcbiAgfVxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uICRnZXRNYXhMaXN0ZW5lcnModGhhdCkge1xuICBpZiAodGhhdC5fbWF4TGlzdGVuZXJzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICByZXR1cm4gdGhhdC5fbWF4TGlzdGVuZXJzO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmdldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIGdldE1heExpc3RlbmVycygpIHtcbiAgcmV0dXJuICRnZXRNYXhMaXN0ZW5lcnModGhpcyk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KHR5cGUpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICB2YXIgZG9FcnJvciA9ICh0eXBlID09PSAnZXJyb3InKTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpXG4gICAgZG9FcnJvciA9IChkb0Vycm9yICYmIGV2ZW50cy5lcnJvciA9PT0gdW5kZWZpbmVkKTtcbiAgZWxzZSBpZiAoIWRvRXJyb3IpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKGRvRXJyb3IpIHtcbiAgICB2YXIgZXI7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMClcbiAgICAgIGVyID0gYXJnc1swXTtcbiAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgLy8gTm90ZTogVGhlIGNvbW1lbnRzIG9uIHRoZSBgdGhyb3dgIGxpbmVzIGFyZSBpbnRlbnRpb25hbCwgdGhleSBzaG93XG4gICAgICAvLyB1cCBpbiBOb2RlJ3Mgb3V0cHV0IGlmIHRoaXMgcmVzdWx0cyBpbiBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgfVxuICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmhhbmRsZWQgZXJyb3IuJyArIChlciA/ICcgKCcgKyBlci5tZXNzYWdlICsgJyknIDogJycpKTtcbiAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgIHRocm93IGVycjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgfVxuXG4gIHZhciBoYW5kbGVyID0gZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFJlZmxlY3RBcHBseShoYW5kbGVyLCB0aGlzLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgdmFyIGxpc3RlbmVycyA9IGFycmF5Q2xvbmUoaGFuZGxlciwgbGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKVxuICAgICAgUmVmbGVjdEFwcGx5KGxpc3RlbmVyc1tpXSwgdGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmZ1bmN0aW9uIF9hZGRMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwcmVwZW5kKSB7XG4gIHZhciBtO1xuICB2YXIgZXZlbnRzO1xuICB2YXIgZXhpc3Rpbmc7XG5cbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICB9XG5cbiAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0YXJnZXQuX2V2ZW50c0NvdW50ID0gMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAgIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgICBpZiAoZXZlbnRzLm5ld0xpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldC5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA/IGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gICAgICAvLyBSZS1hc3NpZ24gYGV2ZW50c2AgYmVjYXVzZSBhIG5ld0xpc3RlbmVyIGhhbmRsZXIgY291bGQgaGF2ZSBjYXVzZWQgdGhlXG4gICAgICAvLyB0aGlzLl9ldmVudHMgdG8gYmUgYXNzaWduZWQgdG8gYSBuZXcgb2JqZWN0XG4gICAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgICB9XG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV07XG4gIH1cblxuICBpZiAoZXhpc3RpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gICAgKyt0YXJnZXQuX2V2ZW50c0NvdW50O1xuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgZXhpc3RpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPVxuICAgICAgICBwcmVwZW5kID8gW2xpc3RlbmVyLCBleGlzdGluZ10gOiBbZXhpc3RpbmcsIGxpc3RlbmVyXTtcbiAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB9IGVsc2UgaWYgKHByZXBlbmQpIHtcbiAgICAgIGV4aXN0aW5nLnVuc2hpZnQobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleGlzdGluZy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICAgIG0gPSAkZ2V0TWF4TGlzdGVuZXJzKHRhcmdldCk7XG4gICAgaWYgKG0gPiAwICYmIGV4aXN0aW5nLmxlbmd0aCA+IG0gJiYgIWV4aXN0aW5nLndhcm5lZCkge1xuICAgICAgZXhpc3Rpbmcud2FybmVkID0gdHJ1ZTtcbiAgICAgIC8vIE5vIGVycm9yIGNvZGUgZm9yIHRoaXMgc2luY2UgaXQgaXMgYSBXYXJuaW5nXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIHZhciB3ID0gbmV3IEVycm9yKCdQb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5IGxlYWsgZGV0ZWN0ZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5sZW5ndGggKyAnICcgKyBTdHJpbmcodHlwZSkgKyAnIGxpc3RlbmVycyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FkZGVkLiBVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2luY3JlYXNlIGxpbWl0Jyk7XG4gICAgICB3Lm5hbWUgPSAnTWF4TGlzdGVuZXJzRXhjZWVkZWRXYXJuaW5nJztcbiAgICAgIHcuZW1pdHRlciA9IHRhcmdldDtcbiAgICAgIHcudHlwZSA9IHR5cGU7XG4gICAgICB3LmNvdW50ID0gZXhpc3RpbmcubGVuZ3RoO1xuICAgICAgUHJvY2Vzc0VtaXRXYXJuaW5nKHcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfTtcblxuZnVuY3Rpb24gb25jZVdyYXBwZXIoKSB7XG4gIHZhciBhcmdzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgaWYgKCF0aGlzLmZpcmVkKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlTGlzdGVuZXIodGhpcy50eXBlLCB0aGlzLndyYXBGbik7XG4gICAgdGhpcy5maXJlZCA9IHRydWU7XG4gICAgUmVmbGVjdEFwcGx5KHRoaXMubGlzdGVuZXIsIHRoaXMudGFyZ2V0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb25jZVdyYXAodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgc3RhdGUgPSB7IGZpcmVkOiBmYWxzZSwgd3JhcEZuOiB1bmRlZmluZWQsIHRhcmdldDogdGFyZ2V0LCB0eXBlOiB0eXBlLCBsaXN0ZW5lcjogbGlzdGVuZXIgfTtcbiAgdmFyIHdyYXBwZWQgPSBvbmNlV3JhcHBlci5iaW5kKHN0YXRlKTtcbiAgd3JhcHBlZC5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICBzdGF0ZS53cmFwRm4gPSB3cmFwcGVkO1xuICByZXR1cm4gd3JhcHBlZDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSh0eXBlLCBsaXN0ZW5lcikge1xuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cbiAgdGhpcy5vbih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRPbmNlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRPbmNlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICB0aGlzLnByZXBlbmRMaXN0ZW5lcih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbi8vIEVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZiBhbmQgb25seSBpZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgdmFyIGxpc3QsIGV2ZW50cywgcG9zaXRpb24sIGksIG9yaWdpbmFsTGlzdGVuZXI7XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGxpc3QgPSBldmVudHNbdHlwZV07XG4gICAgICBpZiAobGlzdCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8IGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0Lmxpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwb3NpdGlvbiA9IC0xO1xuXG4gICAgICAgIGZvciAoaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHwgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsTGlzdGVuZXIgPSBsaXN0W2ldLmxpc3RlbmVyO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICBpZiAocG9zaXRpb24gPT09IDApXG4gICAgICAgICAgbGlzdC5zaGlmdCgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzcGxpY2VPbmUobGlzdCwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKVxuICAgICAgICAgIGV2ZW50c1t0eXBlXSA9IGxpc3RbMF07XG5cbiAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBvcmlnaW5hbExpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKHR5cGUpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMsIGV2ZW50cywgaTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRzW3R5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV2ZW50cyk7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBsaXN0ZW5lcnMgPSBldmVudHNbdHlwZV07XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gTElGTyBvcmRlclxuICAgICAgICBmb3IgKGkgPSBsaXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuZnVuY3Rpb24gX2xpc3RlbmVycyh0YXJnZXQsIHR5cGUsIHVud3JhcCkge1xuICB2YXIgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcbiAgaWYgKGV2bGlzdGVuZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKVxuICAgIHJldHVybiB1bndyYXAgPyBbZXZsaXN0ZW5lci5saXN0ZW5lciB8fCBldmxpc3RlbmVyXSA6IFtldmxpc3RlbmVyXTtcblxuICByZXR1cm4gdW53cmFwID9cbiAgICB1bndyYXBMaXN0ZW5lcnMoZXZsaXN0ZW5lcikgOiBhcnJheUNsb25lKGV2bGlzdGVuZXIsIGV2bGlzdGVuZXIubGVuZ3RoKTtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCB0cnVlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmF3TGlzdGVuZXJzID0gZnVuY3Rpb24gcmF3TGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5saXN0ZW5lckNvdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGlzdGVuZXJDb3VudC5jYWxsKGVtaXR0ZXIsIHR5cGUpO1xuICB9XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBsaXN0ZW5lckNvdW50O1xuZnVuY3Rpb24gbGlzdGVuZXJDb3VudCh0eXBlKSB7XG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG5cbiAgICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoZXZsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDA7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHJldHVybiB0aGlzLl9ldmVudHNDb3VudCA+IDAgPyBSZWZsZWN0T3duS2V5cyh0aGlzLl9ldmVudHMpIDogW107XG59O1xuXG5mdW5jdGlvbiBhcnJheUNsb25lKGFyciwgbikge1xuICB2YXIgY29weSA9IG5ldyBBcnJheShuKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpXG4gICAgY29weVtpXSA9IGFycltpXTtcbiAgcmV0dXJuIGNvcHk7XG59XG5cbmZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKDsgaW5kZXggKyAxIDwgbGlzdC5sZW5ndGg7IGluZGV4KyspXG4gICAgbGlzdFtpbmRleF0gPSBsaXN0W2luZGV4ICsgMV07XG4gIGxpc3QucG9wKCk7XG59XG5cbmZ1bmN0aW9uIHVud3JhcExpc3RlbmVycyhhcnIpIHtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyArK2kpIHtcbiAgICByZXRbaV0gPSBhcnJbaV0ubGlzdGVuZXIgfHwgYXJyW2ldO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iXSwic291cmNlUm9vdCI6IiJ9