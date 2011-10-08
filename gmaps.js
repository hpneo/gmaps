GMaps = function(options){
  this.div = $(options.div)[0];
  this.markers = [];
  this.polylines = [];
  this.routes = [];
  this.polygon = null;
  this.infoWindow = null;
  this.zoom = options.zoom || 15;
  this.map = new google.maps.Map(this.div, {
    zoom: this.zoom,
    center: new google.maps.LatLng(options.lat, options.lng),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  //Events
  google.maps.event.addListener(this.map, 'bounds_changed', function(e){
    if(options.bounds_changed)
      options.bounds_changed(e);
  });
  google.maps.event.addListener(this.map, 'center_changed', function(e){
    if(options.center_changed)
      options.center_changed(e);
  });
  google.maps.event.addListener(this.map, 'click', function(e){
    if(options.click)
      options.click(e);
  });
  google.maps.event.addListener(this.map, 'dblclick', function(e){
    if(options.dblclick)
      options.dblclick(e);
  });
  google.maps.event.addListener(this.map, 'drag', function(e){
    if(options.drag)
      options.drag(e);
  });
  google.maps.event.addListener(this.map, 'dragend', function(e){
    if(options.dragend)
      options.dragend(e);
  });
  google.maps.event.addListener(this.map, 'dragstart', function(e){
    if(options.dragstart)
      options.dragstart(e);
  });
  google.maps.event.addListener(this.map, 'idle', function(e){
    if(options.idle)
      options.idle(e);
  });
  google.maps.event.addListener(this.map, 'maptypeid_changed', function(e){
    if(options.maptypeid_changed)
      options.maptypeid_changed(e);
  });
  google.maps.event.addListener(this.map, 'mousemove', function(e){
    if(options.mousemove)
      options.mousemove(e);
  });
  google.maps.event.addListener(this.map, 'mouseout', function(e){
    if(options.mouseout)
      options.mouseout(e);
  });
  google.maps.event.addListener(this.map, 'mouseover', function(e){
    if(options.mouseover)
      options.mouseover(e);
  });
  google.maps.event.addListener(this.map, 'projection_changed', function(e){
    if(options.projection_changed)
      options.projection_changed(e);
  });
  google.maps.event.addListener(this.map, 'resize', function(e){
    if(options.resize)
      options.resize(e);
  });
  google.maps.event.addListener(this.map, 'rightclick', function(e){
    if(options.rightclick)
      options.rightclick(e);
  });
  google.maps.event.addListener(this.map, 'tilesloaded', function(e){
    if(options.tilesloaded)
      options.tilesloaded(e);
  });
  google.maps.event.addListener(this.map, 'zoom_changed', function(e){
    if(options.zoom_changed)
      options.zoom_changed(e);
  });
  
  // Geolocation (Modern browsers only)

  this.geolocate = function(options){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position){
        options.success(position);
        if(options.always)
          options.always();
      }, function(error){
        options.error(error);
        if(options.always)
          options.always();
      }, options.options);
    }
    else{
      options.not_supported();
      if(options.always)
        options.always();
    }
  };

  // Map methods

  this.setCenter = function(lat, lng, callback){
    this.map.setCenter(new google.maps.LatLng(lat, lng));
    if(callback)
      callback();
  };
  this.getCenter = function(){
    return this.map.getCenter();
  };
  this.getDiv = function(){
    return this.div;
  };
  this.zoomIn = function(value){
    this.map.setZoom(this.map.getZoom()+1);
  };
  this.zoomOut = function(value){
    this.map.setZoom(this.map.getZoom()-1);
  };

  // Markers

  this.addMarker = function(options){
    if(options.lat && options.lng){
      var self = this;
      var details = options.details;
      var base_options = {
        position: new google.maps.LatLng(options.lat, options.lng),
        map: this.map
      };
      delete options.details;
      delete options.lat;
      delete options.lng;
      var marker_options = $.extend(base_options, options);
      
      var marker = new google.maps.Marker(marker_options);
      if(options.infoWindow)
        marker.infoWindow = new google.maps.InfoWindow(options.infoWindow);

      google.maps.event.addListener(marker, 'click', function(e){
        e['details'] = details;
        e['marker'] = marker;
        if(options.click)
          options.click(e);
        if(marker.infoWindow){
          self.hideInfoWindows();
          marker.infoWindow.open(self.map, marker);
        }
      });
      google.maps.event.addListener(marker, 'dragend', function(e){
        if(options.dragend)
          options.dragend(e);
      });

      this.markers.push(marker);
    }
    else{
      throw 'No latitude or longitude defined';
    }
  };
  this.addMarkers = function(array){
    for(marker in array)
      this.addMarker(marker);
  };
  this.hideInfoWindows = function(){
    for(index in this.markers){
      marker = this.markers[index];
      if(marker.infoWindow)
        marker.infoWindow.close();
    }
  };
  this.removeMarkers = function(){
    for(index in this.markers){
      marker = this.markers[index];
      marker.setMap(null);
    }
    this.markers = [];
  };

  // Overlays

  this.drawPolyline = function(options){
    var path = [];
    if(options.path[0][0]==undefined){
      path = options.path;
    }
    else{
      points = options.path;
      for(i in points){
        latlng = points[i];
        path.push(new google.maps.LatLng(latlng[0], latlng[1]));
      }
    }

    var polyline = new google.maps.Polyline({
      map: this.map,
      path: path,
      strokeColor: options.strokeColor,
      strokeOpacity: options.strokeOpacity,
      strokeWeight: options.strokeWeight
    });

    this.polylines.push(polyline);
  };

  this.drawCircle = function(){
    if(this.polygon)
      this.polygon.setMap(null);
    this.polygon = new google.maps.Circle({
      map: this.map,
      center: this.get_center(),
      radius: 1500,
      strokeColor: '#7ba5e4',
      fillColor: '#d8e5f7',
      strokeWeight: 2
    });
  };

  // Services

  this.getRoutes = function(options){
    switch(options.travelMode){
      case 'bicycling':
        travelMode = google.maps.TravelMode.BICYCLING;
      break;
      case 'driving':
        travelMode = google.maps.TravelMode.DRIVING;
      break;
      case 'walking':
      default:
        travelMode = google.maps.TravelMode.WALKING;
      break;
    }
    var self = this;
    var service = new google.maps.DirectionsService();
    service.route({
      origin: new google.maps.LatLng(options.origin[0], options.origin[1]),
      destination: new google.maps.LatLng(options.destination[0], options.destination[1]),
      travelMode: travelMode
    }, function(result, status){
      if(status == google.maps.DirectionsStatus.OK){
        for(i in result.routes){
          route = result.routes[i];
          self.routes.push(route.overview_path);
        }
      }
      if(options.callback)
        options.callback(self.routes);
    });
  };

  this.drawRoute = function(options){
    var self = this;
    this.getRoutes({
      origin: options.origin,
      destination: options.destination,
      travelMode: options.travelMode,
      callback: function(e){
        if(e.length>0){
          route = e[e.length-1];
          self.drawPolyline({
            path: route,
            strokeColor: options.strokeColor,
            strokeOpacity: options.strokeOpacity,
            strokeWeight: options.strokeWeight
          });
        }
      }
    });
  };
}