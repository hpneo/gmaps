var map_with_routes, route, routes;

describe("Drawing a route", function() {
  beforeEach(function() {
    map_with_routes = map_with_routes || new GMaps({
      el : '#map-with-routes',
      lat : -12.0433,
      lng : -77.0283,
      zoom : 12
    });
  });

  it("should add a line in the current map", function(done) {
    var route_flag;

    map_with_routes.drawRoute({
      origin: [-12.044012922866312, -77.02470665341184],
      destination: [-12.090814532191756, -77.02271108990476],
      travelMode: 'driving',
      strokeColor: '#131540',
      strokeOpacity: 0.6,
      strokeWeight: 6,
      callback: function() {
        expect(map_with_routes.polylines.length).toEqual(1);
        expect(map_with_routes.polylines[0].get('strokeColor')).toEqual('#131540');
        expect(map_with_routes.polylines[0].get('strokeOpacity')).toEqual(0.6);
        expect(map_with_routes.polylines[0].getMap()).toEqual(map_with_routes.map);
        done()
      }
    });
  });
});

describe("Getting routes", function() {
  beforeEach(function() {
    map_with_routes = map_with_routes || new GMaps({
      el : '#map-with-routes',
      lat : -12.0433,
      lng : -77.0283,
      zoom : 12
    });
  });

  it("should return an array of routes", function(done) {
    map_with_routes.getRoutes({
      origin: "grand central station, new york, ny",
      destination: "350 5th Ave, New York, NY, 10118",
      callback: function(routes) {
        expect(routes).toBeDefined();

        if (routes.length > 0) {
          expect(routes[0].legs[0].distance).toBeDefined();
          expect(routes[0].legs[0].duration).toBeDefined();
        }

        done();
      }
    });
  });
});