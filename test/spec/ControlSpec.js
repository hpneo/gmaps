describe('Creating custom map controls', function () {
  var map;

  beforeEach(function() {
    map = map || new GMaps({
      el : '#basic-map',
      lat: -12.0433,
      lng: -77.0283,
      zoom: 12
    });
  });

  it('should add default styles for the control', function () {
    map.addControl({
      position: 'top_right',
      content: 'Geolocate'
    });

    expect(map.controls[0].position).toEqual(google.maps.ControlPosition.TOP_RIGHT);
    expect(map.controls[0].style.fontFamily).not.toEqual('');
  });

  it('should leave off default styles if requested', function () {
    map.addControl({
      position: 'top_right',
      disableDefaultStyles: true,
      content: '<i class="icon"></i>'
    });

    expect(map.controls[1].position).toEqual(google.maps.ControlPosition.TOP_RIGHT);
    expect(map.map.controls[google.maps.ControlPosition.TOP_RIGHT].length).toEqual(2);
    expect(map.controls[1].style.fontFamily).toEqual('');
  });

  it('should remove control', function () {
    var control = map.controls[0];
    map.removeControl(control);

    expect(map.controls.length).toEqual(1);
    expect(map.map.controls[google.maps.ControlPosition.TOP_RIGHT].length).toEqual(1);
    expect(map.controls[0]).not.toEqual(control);
  });
});