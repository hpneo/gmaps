describe('Adding Map Styles', () => {
  let mapWithStyles;

  beforeEach(() => {
    mapWithStyles = mapWithStyles || new GMaps({
      el: '#map-with-styles',
      lat: -12.0433,
      lng: -77.0283,
      zoom: 12,
    });

    mapWithStyles.addStyle({
      styledMapName:'Lighter',
      mapTypeId: 'lighter',
      styles: [
        { visibility: 'off', },
        {
          elementType: 'geometry',
          stylers: [
            { lightness: 50, }
          ],
        },
        {
          elementType: 'labels',
          stylers: [
            { visibility: 'off', }
          ],
        }
      ],
    });
  });

  it('should add a MapType to the current map', () => {
    expect(mapWithStyles.map.mapTypes.get('lighter')).toBeDefined();
  });

  it('should update the styles in the current map', () => {
    mapWithStyles.setStyle('lighter');

    expect(mapWithStyles.getMapTypeId()).toEqual('lighter');
  });
});
