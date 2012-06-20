/*!
 * GMaps.js
 * http://hpneo.github.com/gmaps/
 *
 * Copyright 2012, Gustavo Leon
 * Released under the MIT License.
 */

var GMaps = (function($) {
  "use strict";

  var GMaps = function(options) {
    var self = this;
    var context_menu_style = 'position:absolute;display:none;min-width:100px;' +
      'background:white;list-style:none;padding:8px;box-shadow:2px 2px 6px #ccc';
    window.context_menu = {};

    this.div = $(options.div)[0];
    this.div.style.width = this.div.clientWidth || options.width;
    this.div.style.height = this.div.clientHeight || options.height;

    this.controls = [];
    this.overlays = [];
    this.layers = [];
    this.markers = [];
    this.polylines = [];
    this.routes = [];
    this.polygons = [];
    this.infoWindow = null;
    this.overlay_div = null;
    this.zoom = options.zoom || 15;

    //'Hybrid', 'Roadmap', 'Satellite' or 'Terrain'
    var mapType;

    if (options.mapType) {
      mapType = google.maps.MapTypeId[options.mapType.toUpperCase()];
    }
    else {
      mapType = google.maps.MapTypeId.ROADMAP;
    }

    var map_center = new google.maps.LatLng(options.lat, options.lng);

    delete options.lat;
    delete options.lng;
    delete options.mapType;
    delete options.width;
    delete options.height;

    var map_base_options = {
      zoom: this.zoom,
      center: map_center,
      mapTypeId: mapType
    };

    var map_options = $.extend(map_base_options, options);

    this.map = new google.maps.Map(this.div, map_options);

    // Context menus
    var buildContextMenuHTML = function(control, e) {
        var html = '';
        var options = window.context_menu[control];
        for (var i in options){
          if (options.hasOwnProperty(i)){
            var option = options[i];
            html += '<li><a id="' + control + '_' + i + '" href="#">' + 
              option.title + '</a></li>';
          }
        }
        var $context_menu = $('#gmaps_context_menu');
        $context_menu.html(html);
        $context_menu.undelegate();
        $context_menu.delegate('li a', 'click', function(ev) {
          ev.preventDefault();
          options[$(this).attr('id').replace(control + '_', '')].action.call(self, e);
          self.hideContextMenu();
        });

        var left = $(self.div).offset().left + e.pixel.x - 15;
        var top = $(self.div).offset().top + e.pixel.y - 15;
        $context_menu.css({
          left: left,
          top: top
        }).fadeIn(200);
      };

    var buildContextMenu = function(control, e) {
        if (control === 'marker') {
          e.pixel = {};
          var overlay = new google.maps.OverlayView();
          overlay.setMap(self.map);
          overlay.draw = function() {
            var projection = overlay.getProjection();
            var position = e.marker.getPosition();
            e.pixel = projection.fromLatLngToContainerPixel(position);

            buildContextMenuHTML(control, e);
          };
        }
        else {
          buildContextMenuHTML(control, e);
        }
      };

    this.setContextMenu = function(options) {
      window.context_menu[options.control] = {};
      var html = '<ul id="gmaps_context_menu" style="' + context_menu_style + '"></ul>';
      for (var i in options.options){
        if (options.options.hasOwnProperty(i)){
          var option = options.options[i];
          window.context_menu[options.control][option.name] = {
            title: option.title,
            action: option.action
          };
        }
      }
      $('body').append(html);
      $('#gmaps_context_menu').mouseleave(function() {
        $(this).delay(100).fadeOut(200);
      });
    };

    this.hideContextMenu = function() {
      $('#gmaps_context_menu').fadeOut(200);
    };

    //Events

    var events_that_hide_context_menu = ['bounds_changed', 'center_changed', 'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'idle', 'maptypeid_changed', 'projection_changed', 'resize', 'tilesloaded', 'zoom_changed'];
    var events_that_doesnt_hide_context_menu = ['mousemove', 'mouseout', 'mouseover'];

    for (var ev = 0; ev < events_that_hide_context_menu.length; ev++) {
      (function(object, name) {
        google.maps.event.addListener(object, name, function(e){
          if (options[name])
            options[name].apply(this, [e]);

          self.hideContextMenu();
        });
      })(this.map, events_that_hide_context_menu[ev]);
    }

    for (var ev = 0; ev < events_that_doesnt_hide_context_menu.length; ev++) {
      (function(object, name) {
        google.maps.event.addListener(object, name, function(e){
          if (options[name])
            options[name].apply(this, [e]);
        });
      })(this.map, events_that_doesnt_hide_context_menu[ev]);
    }

    google.maps.event.addListener(this.map, 'rightclick', function(e) {
      if (options.rightclick) {
        options.rightclick.apply(this, [e]);
      }

      buildContextMenu('map', e);
    });

    this.refresh = function() {
      google.maps.event.trigger(this.map, 'resize');
    };

    this.fitZoom = function() {
      var latLngs = [];
      var markers_length = this.markers.length;

      for(var i=0; i < markers_length; i++) {
        latLngs.push(this.markers[i].getPosition());
      }

      this.fitBounds(latLngs);
    };

    this.fitBounds = function(latLngs) {
      var total = latLngs.length;
      var bounds = new google.maps.LatLngBounds();

      for(var i=0; i < total; i++) {
        bounds.extend(latLngs[i]);
      }

      this.map.fitBounds(bounds);
    };

    // Map methods
    this.setCenter = function(lat, lng, callback) {
      this.map.panTo(new google.maps.LatLng(lat, lng));
      if (callback) {
        callback();
      }
    };

    this.getCenter = function() {
      return this.map.getCenter();
    };

    this.getDiv = function() {
      return this.div;
    };

    this.setZoom = function(value) {
      this.map.setZoom(value);
    };

    this.zoomIn = function(value) {
      this.map.setZoom(this.map.getZoom() + value);
    };

    this.zoomOut = function(value) {
      this.map.setZoom(this.map.getZoom() - value);
    };

    this.createControl = function(options) {
      options.style.cursor = 'pointer';
      options.style.fontFamily = 'Arial, sans-serif';
      options.style.fontSize = '13px';
      options.style.boxShadow = 'rgba(0, 0, 0, 0.398438) 0px 2px 4px';

      var controlDiv = $('<div></div>');
      controlDiv.css(options.style);
      controlDiv.text(options.text);

      var control = controlDiv[0];

      for (var ev in options.events) {
        (function(object, name) {
          google.maps.event.addDomListener(object, name, function(){
            options.events[name].apply(this, [this]);
          });
        })(control, ev);
      }
      
      control.index = 1;

      return control;
    };

    this.addControl = function(options) {
      var position = google.maps.ControlPosition[options.position.toUpperCase()];

      delete options.position;

      var control = this.createControl(options);
      this.controls.push(control);
      this.map.controls[position].push(control);

      return control;
    };

    // Markers
    this.createMarker = function(options) {
      if (options.lat && options.lng) {
        var self = this;
        var details = options.details;
        var fences = options.fences;
        var outside = options.outside;
        var base_options = {
          position: new google.maps.LatLng(options.lat, options.lng),
          map: null
        };
        delete options.lat;
        delete options.lng;
        delete options.fences;
        delete options.outside;

        var marker_options = $.extend(base_options, options);

        var marker = new google.maps.Marker(marker_options);

        marker.fences = fences;

        if (options.infoWindow) {
          marker.infoWindow = new google.maps.InfoWindow(options.infoWindow);

          var info_window_events = ['closeclick', 'content_changed', 'domready', 'position_changed', 'zindex_changed'];

          for (var ev = 0; ev < info_window_events.length; ev++) {
            (function(object, name) {
              google.maps.event.addListener(object, name, function(e){
                if (options.infoWindow[name])
                  options.infoWindow[name].apply(this, [e]);
              });
            })(marker.infoWindow, info_window_events[ev]);
          }
        }

        var marker_events = ['drag', 'dragstart', 'mouseout', 'mouseover', 'mouseup', 'position_changed'];

        for (var ev = 0; ev < marker_events.length; ev++) {
          (function(object, name) {
            google.maps.event.addListener(object, name, function(){
              if (options[name])
                options[name].apply(this, [this]);
            });
          })(marker, marker_events[ev]);
        }

        google.maps.event.addListener(marker, 'click', function() {
          this.details = details;

          if (options.click) {
            options.click.apply(this, [this]);
          }

          if (marker.infoWindow) {
            self.hideInfoWindows();
            marker.infoWindow.open(self.map, marker);
          }
        });

        if (options.dragend || marker.fences) {
          google.maps.event.addListener(marker, 'dragend', function() {
            if (options.dragend) {
              options.dragend.apply(this, [this]);
            }
            if (marker.fences) {
              self.checkMarkerGeofence(marker, function(m, f) {
                outside(m, f);
              });
            }
          });
        }

        return marker;
      }
      else {
        throw 'No latitude or longitude defined';
      }
    };

    this.addMarker = function(options) {
      if (options.lat && options.lng) {
        var marker = this.createMarker(options);
        marker.setMap(this.map);
        this.markers.push(marker);

        return marker;
      }
      else {
        throw 'No latitude or longitude defined';
      }
    };

    this.addMarkers = function(array) {
      for (var i=0, marker; marker=array[i]; i++) {
        this.addMarker(marker);
      }
      return this.markers;
    };
    
    this.hideInfoWindows = function() {
      for (var i=0, marker; marker=this.markers[i]; i++){
        if (marker.infoWindow){
          marker.infoWindow.close();
        }
      }
    };
    
    this.removeMarkers = function() {
      for (var i=0, marker; marker=this.markers[i]; i++){
        marker.setMap(null);
      }
      this.markers = [];
    };

    // Overlays
    this.drawOverlay = function(options) {
      var overlay = new google.maps.OverlayView();
      overlay.setMap(self.map);

      overlay.onAdd = function() {
        var div = document.createElement('div');
        div.style.borderStyle = "none";
        div.style.borderWidth = "0px";
        div.style.position = "absolute";
        div.innerHTML = options.content;

        self.overlay_div = div;

        var panes = this.getPanes();
        if (!options.layer) {
          options.layer = 'overlayLayer';
        }
        var overlayLayer = panes[options.layer];
        overlayLayer.appendChild(div);
      };

      overlay.draw = function() {
        var projection = this.getProjection();
        var pixel = projection.fromLatLngToDivPixel(new google.maps.LatLng(options.lat, options.lng));

        options.horizontalOffset = options.horizontalOffset || 0;
        options.verticalOffset = options.verticalOffset || 0;

        var div = self.overlay_div;
        var content = div.children;

        switch (options.verticalAlign) {
        case 'top':
          div.style.top = (pixel.y - $(content).height() + options.verticalOffset) + 'px';
          break;
        default:
        case 'middle':
          div.style.top = (pixel.y - ($(content).height() / 2) + options.verticalOffset) + 'px';
          break;
        case 'bottom':
          div.style.top = (pixel.y + options.verticalOffset) + 'px';
          break;
        }

        switch (options.horizontalAlign) {
        case 'left':
          div.style.left = (pixel.x - $(content).width() + options.horizontalOffset) + 'px';
          break;
        default:
        case 'center':
          div.style.left = (pixel.x - ($(content).width() / 2) + options.horizontalOffset) + 'px';
          break;
        case 'right':
          div.style.left = (pixel.x + options.horizontalOffset) + 'px';
          break;
        }
      };

      overlay.onRemove = function() {
        self.overlay_div.parentNode.removeChild(self.overlay_div);
        self.overlay_div = null;
      };
      self.overlays.push(overlay);
      return overlay;
    };

    this.removeOverlay = function(overlay) {
      overlay.setMap(null);
    };

    this.removeOverlays = function() {
      for (var i=0, item; item=self.overlays[i]; i++){
        item.setMap(null);
      }
      self.overlays = [];
    };

    this.drawPolyline = function(options) {
      var path = [];
      var points = options.path;

      if (points.length){
        if (points[0][0] === undefined){
          path = points;
        }
        else {
          for (var i=0, latlng; latlng=points[i]; i++){
            path.push(new google.maps.LatLng(latlng[0], latlng[1]));
          }
        }
      }

      var polyline = new google.maps.Polyline({
        map: this.map,
        path: path,
        strokeColor: options.strokeColor,
        strokeOpacity: options.strokeOpacity,
        strokeWeight: options.strokeWeight
      });

      var polyline_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

      for (var ev = 0; ev < polyline_events.length; ev++) {
        (function(object, name) {
          google.maps.event.addListener(object, name, function(e){
            if (options[name])
              options[name].apply(this, [e]);
          });
        })(polyline, polyline_events[ev]);
      }

      this.polylines.push(polyline);

      return polyline;
    };

    this.drawCircle = function(options) {
      options = $.extend({
        map: this.map,
        center: new google.maps.LatLng(options.lat, options.lng)
      }, options);

      delete options.lat;
      delete options.lng;
      var polygon = new google.maps.Circle(options);

      var polygon_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

      for (var ev = 0; ev < polygon_events.length; ev++) {
        (function(object, name) {
          google.maps.event.addListener(object, name, function(e){
            if (options[name])
              options[name].apply(this, [e]);
          });
        })(polygon, polygon_events[ev]);
      }

      return polygon;
    };

    this.drawPolygon = function(options) {
      options = $.extend({
        map: this.map
      }, options);
      
      if($.isArray(options.paths)) {
          if($.isArray(options.paths[0])) {
             options.paths = $.map(options.paths, arrayToLatLng); 
          }
      }
      
      var polygon = new google.maps.Polygon(options);

      var polygon_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

      for (var ev = 0; ev < polygon_events.length; ev++) {
        (function(object, name) {
          google.maps.event.addListener(object, name, function(e){
            if (options[name])
              options[name].apply(this, [e]);
          });
        })(polygon, polygon_events[ev]);
      }

      this.polygons.push(polygon);

      return polygon;
      
      function arrayToLatLng(coords) {
          return new google.maps.LatLng(coords[0], coords[1]);
      }
    };

    this.getFromFusionTables = function(options) {
      var events = options.events;

      delete options.events;

      var fusion_tables_options = options;

      var layer = new google.maps.FusionTablesLayer(fusion_tables_options);

      for (var ev in events) {
        (function(object, name) {
          google.maps.event.addListener(object, name, function(e){
            events[name].apply(this, [e]);
          });
        })(layer, ev);
      }

      this.layers.push(layer);

      return layer;
    };

    this.loadFromFusionTables = function(options) {
      var layer = this.getFromFusionTables(options);
      layer.setMap(this.map);

      return layer;
    };

    this.getFromKML = function(options) {
      var url = options.url;
      var events = options.events;

      delete options.url;
      delete options.events;
      
      var kml_options = options;

      var layer = new google.maps.KmlLayer(url, kml_options);

      for (var ev in events) {
        (function(object, name) {
          google.maps.event.addListener(object, name, function(e){
            events[name].apply(this, [e]);
          });
        })(layer, ev);
      }

      this.layers.push(layer);

      return layer;
    };

    this.loadFromKML = function(options) {
      var layer = this.getFromKML(options);
      layer.setMap(this.map);

      return layer;
    };

    // Services
    var travelMode, unitSystem;
    this.getRoutes = function(options) {
      switch (options.travelMode) {
      case 'bicycling':
        travelMode = google.maps.TravelMode.BICYCLING;
        break;
      case 'driving':
        travelMode = google.maps.TravelMode.DRIVING;
        break;
      // case 'walking':
      default:
        travelMode = google.maps.TravelMode.WALKING;
        break;
      }

      if (options.unitSystem === 'imperial') {
        unitSystem = google.maps.UnitSystem.IMPERIAL;
      }
      else {
        unitSystem = google.maps.UnitSystem.METRIC;
      }

      var base_options = {
        avoidHighways: false,
        avoidTolls: false,
        optimizeWaypoints: false,
        waypoints: []
      };
      var request_options = $.extend(base_options, options);
      request_options.origin = new google.maps.LatLng(options.origin[0], options.origin[1]);
      request_options.destination = new google.maps.LatLng(options.destination[0], options.destination[1]);
      request_options.travelMode = travelMode;
      request_options.unitSystem = unitSystem;

      delete request_options.callback;

      var self = this;
      var service = new google.maps.DirectionsService();

      service.route(request_options, function(result, status) {
        if (status === google.maps.DirectionsStatus.OK) {
          for (var r in result.routes) {
            if (result.routes.hasOwnProperty(r)) {
              self.routes.push(result.routes[r]);
            }
          }
        }
        if (options.callback) {
          options.callback(self.routes);
        }
      });
    };

    this.removePolylines = function(){
      var index;
      for(index in this.polylines){
        this.polylines[index].setMap(null);
      }
      this.polylines = [];
    }

    // Alias for the method "drawRoute"
    this.cleanRoute = this.removePolylines;

    this.drawRoute = function(options) {
      var self = this;
      this.getRoutes({
        origin: options.origin,
        destination: options.destination,
        travelMode: options.travelMode,
        callback: function(e) {
          if (e.length > 0) {
            self.drawPolyline({
              path: e[e.length - 1].overview_path,
              strokeColor: options.strokeColor,
              strokeOpacity: options.strokeOpacity,
              strokeWeight: options.strokeWeight
            });
            if (options.callback) {
              options.callback(e[e.length - 1]);
            }
          }
        }
      });
    };

    this.travelRoute = function(options) {
      if (options.origin && options.destination) {
        this.getRoutes({
          origin: options.origin,
          destination: options.destination,
          travelMode: options.travelMode,
          callback: function(e) {
            if (e.length > 0 && options.step) {
              var route = e[e.length - 1];
              if (route.legs.length > 0) {
                var steps = route.legs[0].steps;
                for (var i=0, step; step=steps[i]; i++) {
                  step.step_number = i;
                  options.step(step);
                }
              }
            }
          }
        });
      }
      else if (options.route) {
        if (options.route.legs.length > 0) {
          var steps = options.route.legs[0].steps;
          for (var i=0, step; step=steps[i]; i++) {
            step.step_number = i;
            options.step(step);
          }
        }
      }
    };

    this.drawSteppedRoute = function(options) {
      if (options.origin && options.destination) {
        this.getRoutes({
          origin: options.origin,
          destination: options.destination,
          travelMode: options.travelMode,
          callback: function(e) {
            if (e.length > 0 && options.step) {
              var route = e[e.length - 1];
              if (route.legs.length > 0) {
                var steps = route.legs[0].steps;
                for (var i=0, step; step=steps[i]; i++) {
                  step.step_number = i;
                  self.drawPolyline({
                    path: step.path,
                    strokeColor: options.strokeColor,
                    strokeOpacity: options.strokeOpacity,
                    strokeWeight: options.strokeWeight
                  });
                  options.step(step);
                }
              }
            }
          }
        });
      }
      else if (options.route) {
        if (options.route.legs.length > 0) {
          var steps = options.route.legs[0].steps;
          for (var i=0, step; step=steps[i]; i++) {
            step.step_number = i;
            self.drawPolyline({
              path: step.path,
              strokeColor: options.strokeColor,
              strokeOpacity: options.strokeOpacity,
              strokeWeight: options.strokeWeight
            });
            options.step(step);
          }
        }
      }
    };

    // Geofence
    this.checkGeofence = function(lat, lng, fence) {
      return fence.containsLatLng(new google.maps.LatLng(lat, lng));
    };

    this.checkMarkerGeofence = function(marker, outside_callback) {
      if (marker.fences) {
        for (var i=0, fence; fence=marker.fences[i]; i++) { 
          var pos = marker.getPosition();
          if (!self.checkGeofence(pos.lat(), pos.lng(), fence)) {
            outside_callback(marker, fence);
          }
        }
      }
    };
  };

  GMaps.Route = function(options) {
    this.map = options.map;
    this.route = options.route;
    this.step_count = 0;
    this.steps = this.route.legs[0].steps;
    this.steps_length = this.steps.length;

    this.polyline = this.map.drawPolyline({
      path: new google.maps.MVCArray(),
      strokeColor: options.strokeColor,
      strokeOpacity: options.strokeOpacity,
      strokeWeight: options.strokeWeight
    }).getPath();

    this.back = function() {
      if (this.step_count > 0) {
        this.step_count--;
        var path = this.route.legs[0].steps[this.step_count].path;
        for (var p in path){
          if (path.hasOwnProperty(p)){
            this.polyline.pop();
          }
        }
      }
    };

    this.forward = function() {
      if (this.step_count < this.steps_length) {
        var path = this.route.legs[0].steps[this.step_count].path;
        for (var p in path){
          if (path.hasOwnProperty(p)){
            this.polyline.push(path[p]);
          }
        }
        this.step_count++;
      }
    };
  };

  // Geolocation (Modern browsers only)
  GMaps.geolocate = function(options) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        options.success(position);
        if (options.always) {
          options.always();
        }
      }, function(error) {
        options.error(error);
        if (options.always) {
          options.always();
        }
      }, options.options);
    }
    else {
      options.not_supported();
      if (options.always) {
        options.always();
      }
    }
  };

  // Geocoding
  GMaps.geocode = function(options) {
    this.geocoder = new google.maps.Geocoder();
    var callback = options.callback;
    if (options.lat && options.lng) {
      options.latLng = new google.maps.LatLng(options.lat, options.lng);
    }

    delete options.lat;
    delete options.lng;
    delete options.callback;
    this.geocoder.geocode(options, function(results, status) {
      callback(results, status);
    });
  };

  // Static maps
  GMaps.staticMapURL = function(options){
    var parameters = [];
    var data;

    var static_root = 'http://maps.googleapis.com/maps/api/staticmap';
    if (options.url){
      static_root = options.url;
      delete options.url;
    }
    static_root += '?';

    var markers = options.markers;
    delete options.markers;
    if (!markers && options.marker){
      markers = [options.marker];
      delete options.marker;
    }

    var polyline = options.polyline;
    delete options.polyline;

    /** Map options **/
    if (options.center){
      parameters.push('center=' + options.center);
      delete options.center;
    }
    else if (options.address){
      parameters.push('center=' + options.address);
      delete options.address;
    } 
    else if (options.lat){
      parameters.push(['center=', options.lat, ',', options.lng].join(''));
      delete options.lat;
      delete options.lng;
    }
    else if (options.visible){
      var visible = encodeURI(options.visible.join('|'));
      parameters.push('visible=' + visible);
    }

    var size = options.size;
    if (size){
      if (size.join){
        size = size.join('x');
      }
      delete options.size;
    }
    else {
      size = '630x300';
    }
    parameters.push('size=' + size);

    if (!options.zoom){
      options.zoom = 15;
    }

    var sensor = options.hasOwnProperty('sensor') ? !!options.sensor : true;
    delete options.sensor;
    parameters.push('sensor=' + sensor);

    for (var param in options){
      if (options.hasOwnProperty(param)){
        parameters.push(param + '=' + options[param]);
      }
    }

    /** Markers **/
    if (markers){
      var marker, loc;

      for (var i=0; data=markers[i]; i++){
        marker = [];

        if (data.size && data.size !== 'normal'){
          marker.push('size:' + data.size);
        }
        else if (data.icon){
          marker.push('icon:' + encodeURI(data.icon));
        }

        if (data.color){
          marker.push('color:' + data.color.replace('#', '0x'));
        }

        if (data.label){
          marker.push('label:' + data.label[0].toUpperCase());
        }

        loc = (data.address ? data.address : data.lat + ',' + data.lng);

        if (marker.length || i === 0){
          marker.push(loc);
          marker = marker.join('|');
          parameters.push('markers=' + encodeURI(marker));
        }
        // New marker without styles
        else {
          marker = parameters.pop() + encodeURI('|' + loc);
          parameters.push(marker);
        }
      }
    }

    /** Polylines **/
    function parseColor(color, opacity){
      if (color[0] === '#'){
        color = color.replace('#', '0x');

        if (opacity){
          opacity = parseFloat(opacity);
          opacity = Math.min(1, Math.max(opacity, 0));
          if (opacity === 0){
            return '0x00000000';
          }
          opacity = (opacity * 255).toString(16);
          if (opacity.length === 1){
            opacity += opacity;
          }

          color = color.slice(0,8) + opacity;
        }  
      }
      return color;
    }

    if (polyline){
      data = polyline;
      polyline = [];
      
      if (data.strokeWeight){
        polyline.push('weight:' + parseInt(data.strokeWeight, 10));
      }

      if (data.strokeColor){
        var color = parseColor(data.strokeColor, data.strokeOpacity);
        polyline.push('color:' + color);
      }

      if (data.fillColor){
        var fillcolor = parseColor(data.fillColor, data.fillOpacity);
        polyline.push('fillcolor:' + fillcolor);
      }
      
      var path = data.path;
      if (path.join){
        for (var j=0, pos; pos=path[j]; j++){
          polyline.push(pos.join(','));
        }
      }
      else {
        polyline.push('enc:' + path); 
      }

      polyline = polyline.join('|');
      parameters.push('path=' + encodeURI(polyline));
    }

    parameters = parameters.join('&');
    return static_root + parameters;
  };

  //==========================
  // Polygon containsLatLng
  // https://github.com/tparkin/Google-Maps-Point-in-Polygon
  // Poygon getBounds extension - google-maps-extensions
  // http://code.google.com/p/google-maps-extensions/source/browse/google.maps.Polygon.getBounds.js
  if (!google.maps.Polygon.prototype.getBounds) {
    google.maps.Polygon.prototype.getBounds = function(latLng) {
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

  // Polygon containsLatLng - method to determine if a latLng is within a polygon
  google.maps.Polygon.prototype.containsLatLng = function(latLng) {
    // Exclude points outside of bounds as there is no way they are in the poly
    var bounds = this.getBounds();

    if (bounds !== null && !bounds.contains(latLng)) {
      return false;
    }

    // Raycast point in polygon method
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

  google.maps.LatLngBounds.prototype.containsLatLng = function(latLng) {
    return this.contains(latLng);
  };

  google.maps.Marker.prototype.setFences = function(fences) {
    this.fences = fences;
  };

  google.maps.Marker.prototype.addFence = function(fence) {
    this.fences.push(fence);
  };

  return GMaps;
}(jQuery || $));
