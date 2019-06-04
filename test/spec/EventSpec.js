describe('Creating event listeners', () => {
  let mapWithEvents;
  let marker;
  let line;
  let polygon;
  let callbacksNative;
  let callbacksGMaps;
  let addedMarker;
  let addedLine;
  let addedPolygon;
  let markerAddedEvent;
  let markerRemovedEvent;
  let polylineAddedEvent;
  let polylineRemovedEvent;
  let polygonAddedEvent;
  let polygonRemovedEvent;

  beforeEach(() => {
    mapWithEvents = mapWithEvents || new GMaps({
      el: '#map-with-events',
      lat: -12.0433,
      lng: -77.0283,
      zoom: 12,
    });

    marker = marker || mapWithEvents.addMarker({
      lat: -12.0433,
      lng: -77.0283,
      title: 'New marker',
    });

    line = line || mapWithEvents.drawPolyline({
      path: [[-12.0440, -77.0247], [-12.0544, -77.0302], [-12.0551, -77.0303], [-12.0759, -77.0276], [-12.0763, -77.0279], [-12.0768, -77.0289], [-12.0885, -77.0241], [-12.0908, -77.0227]],
      strokeColor: '#131540',
      strokeOpacity: 0.6,
      strokeWeight: 6,
    });

    polygon = polygon || mapWithEvents.drawPolygon({
      paths: [[-12.0403, -77.0337], [-12.0402, -77.0399], [-12.0500, -77.0244], [-12.0448, -77.0215]],
      strokeColor: '#25D359',
      strokeOpacity: 1,
      strokeWeight: 3,
      fillColor: '#25D359',
      fillOpacity: 0.6,
    });
  });

  describe('for google.maps events', () => {
    beforeEach(() => {
      callbacksNative = callbacksNative || {
        map: {
          onclick() {
            console.log('callbacksNative.map.onclick');
          },
        },
        marker: {
          onclick() {
            console.log('callbacksNative.marker.onclick');
          },
        },
        line: {
          onclick() {
            console.log('callbacksNative.line.onclick');
          },
        },
        polygon: {
          onclick() {
            console.log('callbacksNative.polygon.onclick');
          },
        },
      };

      spyOn(callbacksNative.map, 'onclick').andCallThrough();
      spyOn(callbacksNative.marker, 'onclick').andCallThrough();
      spyOn(callbacksNative.line, 'onclick').andCallThrough();
      spyOn(callbacksNative.polygon, 'onclick').andCallThrough();
    });

    describe('To a map', () => {
      it('should add the listener to the listeners collection', () => {
        const click_event = GMaps.on('click', mapWithEvents.map, callbacksNative.map.onclick);

        expect(mapWithEvents.map.__e3_.click[click_event.id]).toBeDefined();
        expect(mapWithEvents.map.__e3_.click[click_event.id]).toEqual(click_event);
      });
    });

    describe('To a marker', () => {
      it('should add the listener to the listeners collection', () => {
        const click_event = GMaps.on('click', marker, callbacksNative.marker.onclick);

        expect(marker.__e3_.click[click_event.id]).toBeDefined();
        expect(marker.__e3_.click[click_event.id]).toEqual(click_event);
      });
    });

    describe('To a line', () => {
      it('should add the listener to the listeners collection', () => {
        const click_event = GMaps.on('click', line, callbacksNative.line.onclick);

        expect(line.__e3_.click[click_event.id]).toBeDefined();
        expect(line.__e3_.click[click_event.id]).toEqual(click_event);
      });
    });

    describe('To a polygon', () => {
      it('should add the listener to the listeners collection', () => {
        const click_event = GMaps.on('click', polygon, callbacksNative.polygon.onclick);

        expect(polygon.__e3_.click[click_event.id]).toBeDefined();
        expect(polygon.__e3_.click[click_event.id]).toEqual(click_event);
      });
    });

    describe('registering non custom events', () => {
      it('custom registeredEvents should not exist', () => {
        mapWithEvents.on('bounds_changed', () => { });
        expect(mapWithEvents.registeredEvents.bounds_changed).not.toBeDefined();
      });

      it('delegates the handler to google.map', () => {
        let called = false;
        mapWithEvents.on('bounds_changed', () => { called = true; });

        google.maps.event.trigger(mapWithEvents.map, 'bounds_changed');
        expect(called).toBe(true);
      });
    });

    describe('removing non custom events', () => {
      it('removes handler from google.map', () => {
        let neverCalled = true;
        mapWithEvents.on('bounds_changed', () => { neverCalled = false; });
        mapWithEvents.off('bounds_changed');

        google.maps.event.trigger(mapWithEvents.map, 'bounds_changed');
        expect(neverCalled).toBe(true);
      });
    });
  });

  describe('for GMaps events', () => {
    beforeEach(() => {
      callbacksGMaps = {
        marker_added() {
          console.log('callbacksGMaps.marker_added called');
        },
        marker_removed() {
          console.log('callbacksGMaps.marker_removed called');
        },
        polyline_added() {
          console.log('callbacksGMaps.polyline_added called');
        },
        polyline_removed() {
          console.log('callbacksGMaps.polyline_removed called');
        },
        polygon_added() {
          console.log('callbacksGMaps.polygon_added called');
        },
        polygon_removed() {
          console.log('callbacksGMaps.polygon_removed called');
        },
      };

      spyOn(callbacksGMaps, 'marker_added').andCallThrough();
      spyOn(callbacksGMaps, 'marker_removed').andCallThrough();
      spyOn(callbacksGMaps, 'polyline_added').andCallThrough();
      spyOn(callbacksGMaps, 'polyline_removed').andCallThrough();
      spyOn(callbacksGMaps, 'polygon_added').andCallThrough();
      spyOn(callbacksGMaps, 'polygon_removed').andCallThrough();
    });

    describe('#marker_added', () => {
      beforeEach(() => {
        markerAddedEvent = GMaps.on('marker_added', mapWithEvents, callbacksGMaps.marker_added);
      });

      it('should add the listener to the listeners collection', () => {
        expect(mapWithEvents.registeredEvents.marker_added[0]).toEqual(markerAddedEvent);
      });

      it('should trigger the listener created', () => {
        addedMarker = addedMarker || mapWithEvents.addMarker({
          lat: -12.0433,
          lng: -77.0273,
          title: 'New marker',
        });

        expect(callbacksGMaps.marker_added).toHaveBeenCalled();
      });

      afterEach(() => {
        GMaps.off('marker_added', mapWithEvents);
      });
    });

    describe('#marker_removed', () => {
      beforeEach(() => {
        markerRemovedEvent = GMaps.on('marker_removed', mapWithEvents, callbacksGMaps.marker_removed);
      });

      it('should add the listener to the listeners collection', () => {
        expect(mapWithEvents.registeredEvents.marker_removed[0]).toEqual(markerRemovedEvent);
      });

      it('should trigger the listener created', () => {
        mapWithEvents.removeMarker(addedMarker);

        expect(callbacksGMaps.marker_removed).toHaveBeenCalled();
      });

      afterEach(() => {
        GMaps.off('marker_removed', mapWithEvents);
      });
    });

    describe('#polyline_added', () => {
      beforeEach(() => {
        polylineAddedEvent = GMaps.on('polyline_added', mapWithEvents, callbacksGMaps.polyline_added);
      });

      it('should add the listener to the listeners collection', () => {
        expect(mapWithEvents.registeredEvents.polyline_added[0]).toEqual(polylineAddedEvent);
      });

      it('should trigger the listener created', () => {
        addedLine = addedLine || mapWithEvents.drawPolyline({
          path: [[-12.0420, -77.0247], [-12.0544, -77.0102], [-12.0751, -77.0903], [-12.0759, -77.0276], [-12.0763, -77.0279], [-12.0768, -77.0289], [-12.0885, -77.0241], [-12.0908, -77.0227]],
          strokeColor: '#271804',
          strokeOpacity: 0.1,
          strokeWeight: 1,
        });

        expect(callbacksGMaps.polyline_added).toHaveBeenCalled();
      });

      afterEach(() => {
        GMaps.off('polyline_added', mapWithEvents);
      });
    });

    describe('#polyline_removed', () => {
      beforeEach(() => {
        polylineRemovedEvent = GMaps.on('polyline_removed', mapWithEvents, callbacksGMaps.polyline_removed);
      });

      it('should add the listener to the listeners collection', () => {
        expect(mapWithEvents.registeredEvents.polyline_removed[0]).toEqual(polylineRemovedEvent);
      });

      it('should trigger the listener created', () => {
        mapWithEvents.removePolyline(addedLine);

        expect(callbacksGMaps.polyline_removed).toHaveBeenCalled();
      });

      afterEach(() => {
        GMaps.off('polyline_removed', mapWithEvents);
      });
    });

    describe('#polygon_added', () => {
      beforeEach(() => {
        polygonAddedEvent = GMaps.on('polygon_added', mapWithEvents, callbacksGMaps.polygon_added);
      });

      it('should add the listener to the listeners collection', () => {
        expect(mapWithEvents.registeredEvents.polygon_added[0]).toEqual(polygonAddedEvent);
      });

      it('should trigger the listener created', () => {
        addedPolygon = addedPolygon || mapWithEvents.drawPolygon({
          paths: [[-12.0203, -77.0137], [-12.0402, -77.0109], [-12.0500, -77.0144], [-12.0848, -77.0115]],
          strokeColor: '#D32559',
          strokeOpacity: 0.7,
          strokeWeight: 8,
          fillColor: '#D32559',
          fillOpacity: 0.6,
        });

        expect(callbacksGMaps.polygon_added).toHaveBeenCalled();
      });

      afterEach(() => {
        GMaps.off('polygon_added', mapWithEvents);
      });
    });

    describe('#polygon_removed', () => {
      beforeEach(() => {
        polygonRemovedEvent = GMaps.on('polygon_removed', mapWithEvents, callbacksGMaps.polygon_removed);
      });

      it('should add the listener to the listeners collection', () => {
        expect(mapWithEvents.registeredEvents.polygon_removed[0]).toEqual(polygonRemovedEvent);
      });

      it('should trigger the listener created', () => {
        mapWithEvents.removePolygon(addedPolygon);

        expect(callbacksGMaps.polygon_removed).toHaveBeenCalled();
      });

      afterEach(() => {
        GMaps.off('polygon_removed', mapWithEvents);
      });
    });
  });
});
