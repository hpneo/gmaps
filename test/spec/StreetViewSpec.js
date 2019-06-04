describe('Create a Street View Panorama', () => {
  let mapWithStreetView;
  let attachedPanorama;
  let standalonePanorama;
  let panoramaWithEvents;

  beforeEach(() => {
    mapWithStreetView = mapWithStreetView || new GMaps({
      el: '#map-with-streetview',
      lat: 42.3455,
      lng: -71.0983,
      zoom: 12,
    });
  });

  describe('Standalone', () => {
    beforeEach(() => {
      standalonePanorama = standalonePanorama || GMaps.createPanorama({
        el: '#streetview-standalone-panorama',
        lat: 42.3455,
        lng: -71.0983,
        pov: {
          heading: 60,
          pitch: -10,
          zoom: 1,
        },
      });
    });

    it('should create a Street View panorama', () => {
      expect(standalonePanorama).toBeDefined();
    });
  });

  describe('Attached to the current map', () => {
    beforeEach(() => {
      attachedPanorama = attachedPanorama || mapWithStreetView.createPanorama({
        el: '#streetview-panorama',
        pov: {
          heading: 60,
          pitch: -10,
          zoom: 1,
        },
      });
    });

    it('should be equal to the current map Street View panorama', () => {
      expect(mapWithStreetView.getStreetView()).toEqual(attachedPanorama);
    });
  });

  describe('With events', () => {
    let callbacks;

    beforeEach(() => {
      callbacks = {
        onpovchanged() {
          console.log('Point of view changed');
        },
      };

      spyOn(callbacks, 'onpovchanged').andCallThrough();

      panoramaWithEvents = panoramaWithEvents || GMaps.createPanorama({
        el: '#streetview-with-events',
        lat: 42.3455,
        lng: -71.0983,
        pov: {
          heading: 60,
          pitch: -10,
          zoom: 1,
        },
        pov_changed: callbacks.onpovchanged,
      });
    });

    it('should respond to pov_changed event', () => {
      panoramaWithEvents.setPov({
        heading: 80,
        pitch: -10,
        zoom: 1,
      });

      expect(callbacks.onpovchanged).toHaveBeenCalled();
    });
  });
});
