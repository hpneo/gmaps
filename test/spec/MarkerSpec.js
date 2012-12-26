describe("Creating a marker", function() {
  var map, marker;

  describe("With basic options", function() {
    beforeEach(function() {
      map = new GMaps({
        el : '#map-test',
        lat: -12.0433,
        lng: -77.0283,
        zoom: 14
      });

      marker = map.addMarker({
        lat : -12.0533,
        lng: -77.0293,
        title : 'New marker'
      });
    });

    it("should add the marker to the markers collection", function() {
      expect(map.markers.length).toEqual(1);
      expect(map.markers[0]).toEqual(marker);
    });

    it("should create a marker with defined position", function() {
      // Fix for floating-point bug
      expect(parseFloat(marker.getPosition().lat().toFixed(4))).toEqual(-12.0533);
      expect(parseFloat(marker.getPosition().lng().toFixed(4))).toEqual(-77.0293);
    });
  });

  describe("With events", function() {
    var callbacks;

    beforeEach(function() {
      callbacks = {
        onclick : function() {
          console.log(this.title);
        }
      };

      spyOn(callbacks, 'onclick').andCallThrough();

      map = new GMaps({
        el : '#map-test',
        lat: -12.0433,
        lng: -77.0283,
        zoom: 14
      });

      marker = map.addMarker({
        lat : -12.0533,
        lng: -77.0293,
        title : 'New marker',
        click : callbacks.onclick
      });
    });

    it("should respond to click event", function() {
      google.maps.event.trigger(marker, 'click');

      expect(callbacks.onclick).toHaveBeenCalled();
    });
  });
});