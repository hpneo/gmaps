describe('Adding layers', () => {
  let mapWithLayers;
  let singleLayer;
  const multipleLayers = [];

  beforeEach(() => {
    mapWithLayers = mapWithLayers || new GMaps({
      el: '#map-with-layers',
      lat: -12.0433,
      lng: -77.0283,
      zoom: 12,
    });
  });

  describe('Single layer', () => {
    beforeEach(() => {
      singleLayer = singleLayer || mapWithLayers.addLayer('traffic');
    });

    it('should be added in the current map', () => {
      expect(singleLayer.getMap()).toEqual(mapWithLayers.map);
    });

    it('should be removed from the current map', () => {
      mapWithLayers.removeLayer('traffic');

      expect(singleLayer.getMap()).toBeNull();
    });
  });

  describe('Multiple layers', () => {
    beforeEach(() => {
      if (multipleLayers.length === 0) {
        multipleLayers.push(mapWithLayers.addLayer('transit'));
        multipleLayers.push(mapWithLayers.addLayer('bicycling'));
      }
    });

    it('should be added in the current map', () => {
      expect(multipleLayers[0].getMap()).toEqual(mapWithLayers.map);
      expect(multipleLayers[1].getMap()).toEqual(mapWithLayers.map);
    });

    it('should be removed from the current map', () => {
      mapWithLayers.removeLayer('transit');
      mapWithLayers.removeLayer('bicycling');

      expect(multipleLayers[0].getMap()).toBeNull();
      expect(multipleLayers[1].getMap()).toBeNull();
    });
  });
});
