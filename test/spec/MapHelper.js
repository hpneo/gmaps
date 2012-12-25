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
    var callbacks;

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
        }
      };

      spyOn(callbacks, 'onclick').andCallThrough();

      map = new GMaps({
        el : '#map-test',
        lat: -12.0433,
        lng: -77.0283,
        click: callbacks.onclick
      });
    });

    it("should respond to click event", function() {
      google.maps.event.trigger(map.map, 'click', {
        latLng : new google.maps.LatLng(-12.0433, -77.0283)
      });

      expect(map.markers.length).toEqual(1);
      expect(callbacks.onclick.calls.length).toEqual(1);
      expect(callbacks.onclick).toHaveBeenCalled();
    });
  });
});