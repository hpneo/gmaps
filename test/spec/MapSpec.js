describe("Map", function() {
  var map;

  describe("With basic options", function() {
    beforeEach(function() {
      map = new GMaps({
        el : '#map-test',
        lat: -12.0433,
        lng: -77.0283,
        zoom: 12
      });
    });

    it("should create a GMaps object", function() {
      expect(map).toBeDefined();
    });

    it("should have centered the map at the initial coordinates", function() {
      var lat = map.getCenter().lat();
      var lng = map.getCenter().lng();

      expect(lat).toEqual(-12.0433);
      expect(lng).toEqual(-77.0283);
    });

    it("should have the correct zoom", function() {
      expect(map.getZoom()).toEqual(12);
    });
  });

  describe("With advanced controls", function() {
    beforeEach(function() {
      map = new GMaps({
        el : '#map-test',
        lat: -12.0433,
        lng: -77.0283,
        zoomControl : true,
        panControl : false,
        streetViewControl : false,
        mapTypeControl: false,
        overviewMapControl: false
      });
    });

    it("should show the defined controls", function() {
      expect(map.map.zoomControl).toBeTruthy();
      expect(map.map.panControl).toBeFalsy();
      expect(map.map.streetViewControl).toBeFalsy();
      expect(map.map.mapTypeControl).toBeFalsy();
      expect(map.map.overviewMapControl).toBeFalsy();
    });
  });

  describe("With events", function() {
    var callbacks, current_zoom = 0, current_center = null;

    beforeEach(function() {
      callbacks = {
        onclick : function(e) {
          var lat = e.latLng.lat();
          var lng = e.latLng.lng();

          map.addMarker({
            lat : lat,
            lng : lng,
            title : 'New Marker'
          });
        },
        onzoomchanged : function() {
          current_zoom = this.getZoom();
        },
        oncenterchanged : function() {
          current_center = this.getCenter();
        }
      };

      spyOn(callbacks, 'onclick').andCallThrough();
      spyOn(callbacks, 'onzoomchanged').andCallThrough();
      spyOn(callbacks, 'oncenterchanged').andCallThrough();

      map = new GMaps({
        el : '#map-test',
        lat : -12.0433,
        lng : -77.0283,
        click : callbacks.onclick,
        zoom_changed : callbacks.onzoomchanged,
        center_changed : callbacks.oncenterchanged
      });
    });

    it("should respond to click event", function() {
      google.maps.event.trigger(map.map, 'click', {
        latLng : new google.maps.LatLng(-12.0433, -77.0283)
      });

      expect(callbacks.onclick).toHaveBeenCalled();
      expect(map.markers.length).toEqual(1);
    });

    it("should respond to zoom_changed event", function() {
      map.setZoom(16);
      
      expect(callbacks.onzoomchanged).toHaveBeenCalled();
      expect(current_zoom).toEqual(16);
    });

    it("should respond to center_changed event", function() {
      map.map.setCenter(new google.maps.LatLng(-12.0907, -77.0227));

      // Fix for floating-point bug
      var lat = parseFloat(current_center.lat().toFixed(4));
      var lng = parseFloat(current_center.lng().toFixed(4));

      expect(callbacks.oncenterchanged).toHaveBeenCalled();
      expect(lat).toEqual(-12.0907);
      expect(lng).toEqual(-77.0227);
    });
  });
});