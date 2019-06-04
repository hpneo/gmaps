describe('Creating a map', () => {
  let basicMap;
  let advancedMap;
  let mapWithEvents;
  let mapWithCustomControls;
  let mapAsImage;
  let mapWithZoom;

  it('should throw an error if element is not defined', () => {
    expect(() => { new GMaps({}); }).toThrow('No element defined. Pass an `element` option in GMaps.');
  });

  describe('With basic options', () => {
    beforeEach(() => {
      basicMap = basicMap || new GMaps({
        el: '#basic-map',
        lat: -12.0433,
        lng: -77.0283,
        zoom: 12,
      });
    });

    it('should create a GMaps object', () => {
      expect(basicMap).toBeDefined();
    });

    it('should have centered the map at the initial coordinates', () => {
      const lat = basicMap.getCenter().lat();
      const lng = basicMap.getCenter().lng();

      expect(lat).toEqual(-12.0433);
      expect(lng).toEqual(-77.0283);
    });

    it('should have the correct zoom', () => {
      expect(basicMap.getZoom()).toEqual(12);
    });
  });

  describe('With advanced controls', () => {
    beforeEach(() => {
      advancedMap = advancedMap || new GMaps({
        el: '#advanced-map',
        lat: -12.0433,
        lng: -77.0283,
        zoomControl: true,
        panControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        overviewMapControl: false,
      });
    });

    it('should show the defined controls', () => {
      expect(advancedMap.map.zoomControl).toBeTruthy();
      expect(advancedMap.map.panControl).toBeFalsy();
      expect(advancedMap.map.streetViewControl).toBeFalsy();
      expect(advancedMap.map.mapTypeControl).toBeFalsy();
      expect(advancedMap.map.overviewMapControl).toBeFalsy();
    });
  });

  describe('With events', () => {
    let callbacks;
    let currentZoom = 0;
    let currentCenter = null;

    beforeEach(() => {
      callbacks = {
        onclick(e) {
          const lat = e.latLng.lat();
          const lng = e.latLng.lng();

          mapWithEvents.addMarker({
            lat,
            lng,
            title: 'New Marker',
          });
        },
        onzoomchanged() {
          console.log('onzoomchanged');
          currentZoom = this.getZoom();
        },
        oncenterchanged() {
          console.log('oncenterchanged');
          currentCenter = this.getCenter();
        },
      };

      spyOn(callbacks, 'onclick').andCallThrough();
      spyOn(callbacks, 'onzoomchanged').andCallThrough();
      spyOn(callbacks, 'oncenterchanged').andCallThrough();

      mapWithEvents = mapWithEvents || new GMaps({
        el: '#map-with-events',
        lat: -12.0433,
        lng: -77.0283,
        click: callbacks.onclick,
        zoom_changed: callbacks.onzoomchanged,
        center_changed: callbacks.oncenterchanged,
      });
    });

    it('should respond to zoom_changed event', () => {
      mapWithEvents.map.setZoom(16);

      expect(callbacks.onzoomchanged).toHaveBeenCalled();
      expect(currentZoom).toEqual(16);
    });

    it('should respond to center_changed event', () => {
      mapWithEvents.map.setCenter(new google.maps.LatLng(-12.0907, -77.0227));

      // Fix for floating-point bug
      const lat = parseFloat(currentCenter.lat().toFixed(4));
      const lng = parseFloat(currentCenter.lng().toFixed(4));

      expect(callbacks.oncenterchanged).toHaveBeenCalled();
      expect(lat).toEqual(-12.0907);
      expect(lng).toEqual(-77.0227);
    });

    it('should respond to click event', () => {
      google.maps.event.trigger(mapWithEvents.map, 'click', { latLng: new google.maps.LatLng(-12.0433, -77.0283), });

      expect(callbacks.onclick).toHaveBeenCalled();
      expect(mapWithEvents.markers.length).toEqual(1);
    });

    afterEach(() => {
      document.getElementById('map-with-events').innerHTML = '';
      mapWithEvents = null;
    });
  });

  describe('With custom controls', () => {
    let callbacks;

    beforeEach(() => {
      callbacks = {
        onclick() {
          mapWithCustomControls.addMarker({
            lat: mapWithCustomControls.getCenter().lat(),
            lng: mapWithCustomControls.getCenter().lng(),
          });
        },
      };

      spyOn(callbacks, 'onclick').andCallThrough();

      mapWithCustomControls = new GMaps({
        el: '#map-with-custom-controls',
        lat: -12.0433,
        lng: -77.0283,
      });

      mapWithCustomControls.addControl({
        position: 'top_right',
        content: 'Add marker at the center',
        style: {
          margin: '5px',
          padding: '1px 6px',
          border: 'solid 1px #717B87',
          background: '#fff',
        },
        events: { click: callbacks.onclick, },
      });
    });

    it('should add the control to the controls collection', () => {
      expect(mapWithCustomControls.controls.length).toEqual(1);
    });

    it('should respond to click event attached to the custom control', () => {
      google.maps.event.trigger(mapWithCustomControls.controls[0], 'click');

      expect(callbacks.onclick).toHaveBeenCalled();
      expect(mapWithCustomControls.markers.length).toEqual(1);
    });
  });

  describe('With basic options and an image created from this', () => {
    const defaultZoomLevel = 15;

    beforeEach(() => {
      mapAsImage = mapAsImage || new GMaps({
        el: '#basic-map',
        lat: -12.0433,
        lng: -77.0283,
        zoomControl: true,
      });
    });

    it('should create a StaticMapsAPI URL', () => {
      expect(mapAsImage.toImage()).toBeDefined();
    });

    it('should use default zoom', () => {
      expect(mapAsImage.toImage()).toMatch(`zoom=${defaultZoomLevel}`);
    });

    describe('with the zoom set', () => {
      beforeEach(() => {
        mapWithZoom = mapWithZoom || new GMaps({
          el: '#basic-map',
          lat: -12.0433,
          lng: -77.0283,
          zoomControl: true,
        });
      });

      it('should use correct zoom level if it is set via setZoom()', () => {
        const zoomLevel = 4;
        mapWithZoom.map.setZoom(zoomLevel);
        expect(mapWithZoom.toImage()).toMatch(`zoom=${zoomLevel}`);
      });

      it('should use correct zoom level if it is set via toImage(options)', () => {
        const zoomLevel = 5;
        const options = {};
        options.zoom = zoomLevel;
        expect(mapWithZoom.toImage(options)).toMatch(`zoom=${zoomLevel}`);
      });
    });
  });
});
