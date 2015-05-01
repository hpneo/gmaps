GMaps.prototype.createPanorama = function(streetview_options) {
  if (!streetview_options.hasOwnProperty('lat') || !streetview_options.hasOwnProperty('lng')) {
    streetview_options.lat = this.getCenter().lat();
    streetview_options.lng = this.getCenter().lng();
  }

  this.panorama = GMaps.createPanorama(streetview_options);

  this.map.setStreetView(this.panorama);

  return this.panorama;
};

GMaps.createPanorama = function(options) {
  var el = getElementById(options.el, options.context);

  var panoramaService = new google.maps.StreetViewService();
  var checkaround = options.checkaround || 50;
  var panorama = null;

  options.position = new google.maps.LatLng(options.lat, options.lng);

  delete options.el;
  delete options.context;
  delete options.lat;
  delete options.lng;
  delete options.checkaround;

  var streetview_events = ['closeclick', 'links_changed', 'pano_changed', 'position_changed', 'pov_changed', 'resize', 'visible_changed'],
      streetview_options = extend_object({visible : true}, options);

  for (var i = 0; i < streetview_events.length; i++) {
    delete streetview_options[streetview_events[i]];
  }

  //get only a streetview if this one is available
  panoramaService.getPanoramaByLocation(options.position, checkaround ,function(data, status){
    if (status == google.maps.StreetViewStatus.OK) {

      streetview_options.position = data.location.latLng;

      panorama = new google.maps.StreetViewPanorama(el, streetview_options);

      for (var i = 0; i < streetview_events.length; i++) {
        (function(object, name) {
          if (options[name]) {
            google.maps.event.addListener(object, name, function(){
              options[name].apply(this);
            });
          }
        })(panorama, streetview_events[i]);
      }
      panorama.setVisible(true);
      return panorama;
    // no result
    } else {
      return false;
    }
  });
};