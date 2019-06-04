describe('Drawing geometry overlays', () => {
  let mapWithPolygons;
  let line;
  let rectangle;
  let circle;
  let polygon;

  beforeEach(() => {
    mapWithPolygons = mapWithPolygons || new GMaps({
      el: '#map-with-polygons',
      lat: -12.0433,
      lng: -77.0283,
      zoom: 12,
    });
  });

  describe('A line', () => {
    beforeEach(() => {
      line = line || mapWithPolygons.drawPolyline({
        path: [[-12.0440, -77.0247], [-12.0544, -77.0302], [-12.0551, -77.0303], [-12.0759, -77.0276], [-12.0763, -77.0279], [-12.0768, -77.0289], [-12.0885, -77.0241], [-12.0908, -77.0227]],
        strokeColor: '#131540',
        strokeOpacity: 0.6,
        strokeWeight: 6,
      });
    });

    it('should add the line to the polylines collection', () => {
      expect(mapWithPolygons.polylines.length).toEqual(1);
      expect(mapWithPolygons.polylines[0]).toEqual(line);
    });

    it('should be added in the current map', () => {
      expect(line.getMap()).toEqual(mapWithPolygons.map);
    });

    it('should return the defined path', () => {
      const firstPoint = line.getPath().getAt(0);

      expect(parseFloat(firstPoint.lat().toFixed(4))).toEqual(-12.0440);
      expect(parseFloat(firstPoint.lng().toFixed(4))).toEqual(-77.0247);
    });
  });

  describe('A rectangle', () => {
    beforeEach(() => {
      rectangle = rectangle || mapWithPolygons.drawRectangle({
        bounds: [[-12.0303, -77.0237], [-12.0348, -77.0115]],
        strokeColor: '#BBD8E9',
        strokeOpacity: 1,
        strokeWeight: 3,
        fillColor: '#BBD8E9',
        fillOpacity: 0.6,
      });
    });

    it('should add the rectangle to the polygons collection', () => {
      expect(mapWithPolygons.polygons.length).toEqual(1);
      expect(mapWithPolygons.polygons[0]).toEqual(rectangle);
    });

    it('should be added in the current map', () => {
      expect(rectangle.getMap()).toEqual(mapWithPolygons.map);
    });

    it('should have the defined bounds', () => {
      // Fix for floating-point bug
      const SWLat = parseFloat(rectangle.getBounds().getSouthWest().lat().toFixed(4));
      const SWLng = parseFloat(rectangle.getBounds().getSouthWest().lng().toFixed(4));

      const NELat = parseFloat(rectangle.getBounds().getNorthEast().lat().toFixed(4));
      const NELng = parseFloat(rectangle.getBounds().getNorthEast().lng().toFixed(4));

      expect(SWLat).toEqual(-12.0303);
      expect(SWLng).toEqual(-77.0237);
      expect(NELat).toEqual(-12.0348);
      expect(NELng).toEqual(-77.0115);
    });
  });

  describe('A polygon', () => {
    beforeEach(() => {
      polygon = polygon || mapWithPolygons.drawPolygon({
        paths: [[-12.0403, -77.0337], [-12.0402, -77.0399], [-12.0500, -77.0244], [-12.0448, -77.0215]],
        strokeColor: '#25D359',
        strokeOpacity: 1,
        strokeWeight: 3,
        fillColor: '#25D359',
        fillOpacity: 0.6,
      });
    });

    it('should add the polygon to the polygons collection', () => {
      expect(mapWithPolygons.polygons.length).toEqual(2);
      expect(mapWithPolygons.polygons[1]).toEqual(polygon);
    });

    it('should be added in the current map', () => {
      expect(polygon.getMap()).toEqual(mapWithPolygons.map);
    });

    it('should return the defined path', () => {
      const firstPoint = polygon.getPath().getAt(0);

      expect(parseFloat(firstPoint.lat().toFixed(4))).toEqual(-12.0403);
      expect(parseFloat(firstPoint.lng().toFixed(4))).toEqual(-77.0337);
    });
  });

  describe('A circle', () => {
    beforeEach(() => {
      circle = circle || mapWithPolygons.drawCircle({
        lat: -12.040504866577001,
        lng: -77.02024422636042,
        radius: 350,
        strokeColor: '#432070',
        strokeOpacity: 1,
        strokeWeight: 3,
        fillColor: '#432070',
        fillOpacity: 0.6,
      });
    });

    it('should add the circle to the polygons collection', () => {
      expect(mapWithPolygons.polygons.length).toEqual(3);
      expect(mapWithPolygons.polygons[2]).toEqual(circle);
    });

    it('should be added in the current map', () => {
      expect(circle.getMap()).toEqual(mapWithPolygons.map);
    });

    it('should have the defined radius', () => {
      expect(circle.getRadius()).toEqual(350);
    });
  });
});

describe('Removing geometry overlays', () => {
  let mapWithPolygons; let line; let rectangle; let circle; let
    polygon;

  beforeEach(() => {
    mapWithPolygons = mapWithPolygons || new GMaps({
      el: '#map-with-polygons',
      lat: -12.0433,
      lng: -77.0283,
      zoom: 12,
    });
  });

  describe('A line', () => {
    beforeEach(() => {
      line = mapWithPolygons.drawPolyline({
        path: [[-12.0440, -77.0247], [-12.0544, -77.0302], [-12.0551, -77.0303], [-12.0759, -77.0276], [-12.0763, -77.0279], [-12.0768, -77.0289], [-12.0885, -77.0241], [-12.0908, -77.0227]],
        strokeColor: '#131540',
        strokeOpacity: 0.6,
        strokeWeight: 6,
      });

      mapWithPolygons.removePolyline(line);
    });

    it('should remove the line from the polylines collection', () => {
      expect(mapWithPolygons.polylines.length).toEqual(0);
      expect(line.getMap()).toBeNull();
    });
  });

  describe('A rectangle', () => {
    beforeEach(() => {
      rectangle = mapWithPolygons.drawRectangle({
        bounds: [[-12.0303, -77.0237], [-12.0348, -77.0115]],
        strokeColor: '#BBD8E9',
        strokeOpacity: 1,
        strokeWeight: 3,
        fillColor: '#BBD8E9',
        fillOpacity: 0.6,
      });

      mapWithPolygons.removePolygon(rectangle);
    });

    it('should remove the rectangle from the polygons collection', () => {
      expect(mapWithPolygons.polygons.length).toEqual(0);
      expect(rectangle.getMap()).toBeNull();
    });
  });

  describe('A polygon', () => {
    beforeEach(() => {
      polygon = mapWithPolygons.drawPolygon({
        paths: [[-12.0403, -77.0337], [-12.0402, -77.0399], [-12.0500, -77.0244], [-12.0448, -77.0215]],
        strokeColor: '#25D359',
        strokeOpacity: 1,
        strokeWeight: 3,
        fillColor: '#25D359',
        fillOpacity: 0.6,
      });

      mapWithPolygons.removePolygon(polygon);
    });

    it('should remove the polygon from the polygons collection', () => {
      expect(mapWithPolygons.polygons.length).toEqual(0);
      expect(polygon.getMap()).toBeNull();
    });
  });

  describe('A circle', () => {
    beforeEach(() => {
      circle = mapWithPolygons.drawCircle({
        lat: -12.040504866577001,
        lng: -77.02024422636042,
        radius: 350,
        strokeColor: '#432070',
        strokeOpacity: 1,
        strokeWeight: 3,
        fillColor: '#432070',
        fillOpacity: 0.6,
      });

      mapWithPolygons.removePolygon(circle);
    });

    it('should remove the circle from the polygons collection', () => {
      expect(mapWithPolygons.polygons.length).toEqual(0);
      expect(circle.getMap()).toBeNull();
    });
  });
});
