describe('Drawing HTML overlays', () => {
  let mapWithOverlays;
  let overlay;

  beforeEach(() => {
    mapWithOverlays = mapWithOverlays || new GMaps({
      el: '#map-with-overlays',
      lat: -12.0433,
      lng: -77.0283,
      zoom: 12,
    });

    overlay = overlay || mapWithOverlays.drawOverlay({
      lat: mapWithOverlays.getCenter().lat(),
      lng: mapWithOverlays.getCenter().lng(),
      layer: 'overlayLayer',
      content: '<div class="overlay">Lima</div>',
      verticalAlign: 'top',
      horizontalAlign: 'center',
    });
  });

  it('should add the overlay to the overlays collection', () => {
    expect(mapWithOverlays.overlays.length).toEqual(1);
    expect(mapWithOverlays.overlays[0]).toEqual(overlay);
  });

  it('should add the overlay in the current map', () => {
    expect(overlay.getMap()).toEqual(mapWithOverlays.map);
  });

  describe('With events', () => {
    let callbacks;
    let overlayWithClick;

    beforeEach(() => {
      callbacks = {
        onclick() {
          console.log('Clicked the overlay');
        },
      };

      spyOn(callbacks, 'onclick').andCallThrough();

      overlayWithClick = mapWithOverlays.drawOverlay({
        lat: mapWithOverlays.getCenter().lat(),
        lng: mapWithOverlays.getCenter().lng(),
        content: '<p>Clickable overlay</p>',
        click: callbacks.onclick,
      });
    });

    it('should respond to click event', (done) => {
      google.maps.event.addListenerOnce(overlayWithClick, 'ready', () => {
        google.maps.event.trigger(overlayWithClick.element, 'click');
        expect(callbacks.onclick).toHaveBeenCalled();
        done();
      });
    });
  });
});
