import GMaps from './core';
import './events';

/**
 * Extends GMaps to use custom overlays.
 * @module Overlays
 */

const STOP_PROPAGATION_EVENTS = ['contextmenu', 'DOMMouseScroll', 'dblclick', 'mousedown'];

/**
 * Draw an overlay in the Map and add it to the overlays collection. This method also fires a `overlay_added` event.
 * @function drawOverlay
 *
 * @param {object} options - The `options` object should contain:
 * @param {boolean} options.autoShow - Show the overlay inmediatly after being created.
 * @param {number} options.latitude - Latitude of the coordinate where the overlay is placed. If `latitude` and `longitude` are set, `position`is ignored.
 * @param {number} options.longitude - Longitude of the coordinate where the overlay is placed. If `latitude` and `longitude` are set, `position`is ignored.
 * @param {google.maps.LatLng} options.position - A `google.maps.LatLng` coordinate where the overlay is placed. If set, `latitude` and `longitude` are ignored.
 * @param {string} options.content - HTML that will be drawn in the overlay.
 * @param {string} options.layer - Id of any of the layers defined in [google.maps.MapPanes](https://developers.google.com/maps/documentation/javascript/reference#MapPanes):
 *   * floatPane
 *   * floatShadow
 *   * mapPane
 *   * overlayImage
 *   * overlayLayer
 *   * overlayMouseTarget
 *   * overlayShadow
 * @param {string} options.verticalAlign - Vertical align of the overlay (where the center is the coordinate `latitude`, `longitude`):
 *   * top
 *   * middle
 *   * bottom
 * @param {string} options.horizontalAlign - Horizontal align of the overlay (where the center is the coordinate `latitude`, `longitude`):
 *   * left
 *   * center
 *   * right
 * @param {number} options.horizontalOffset - Horizontal offset in pixels of the overlay.
 * @param {number} options.verticalOffset - Vertical offset in pixels of the overlay.
 *
 * @returns {google.maps.OverlayView}
 */
GMaps.prototype.drawOverlay = function drawOverlay(baseOptions) {
  const self = this;
  const overlay = new google.maps.OverlayView();
  const {
    autoShow = true,
    lat,
    latitude = lat,
    lng,
    longitude = lng,
    position = new google.maps.LatLng(latitude, longitude),
    layer = 'overlayLayer',
    horizontalOffset = 0,
    verticalOffset = 0,
    verticalAlign,
    horizontalAlign,
    ...options
  } = baseOptions;

  overlay.setMap(this.map);

  overlay.onAdd = function onAdd() {
    const element = document.createElement('div');

    element.style.borderStyle = 'none';
    element.style.borderWidth = '0px';
    element.style.position = 'absolute';
    element.style.zIndex = 100;
    element.innerHTML = options.content;

    overlay.element = element;

    const panes = this.getPanes();
    const overlayLayer = panes[layer];

    overlayLayer.appendChild(element);

    STOP_PROPAGATION_EVENTS.forEach(eventName =>
      google.maps.event.addDomListener(element, eventName, (event) => {
        if (global.navigator.userAgent.toLowerCase().indexOf('msie') !== -1 && document.all) {
          // eslint-disable-next-line no-param-reassign
          event.cancelBubble = true;
          // eslint-disable-next-line no-param-reassign
          event.returnValue = false;
        } else {
          event.stopPropagation();
        }
      })
    );

    if (options.click) {
      panes.overlayMouseTarget.appendChild(overlay.element);
      google.maps.event.addDomListener(overlay.element, 'click', () => {
        options.click.call(self, overlay);
      });
    }

    google.maps.event.trigger(this, 'ready');
  };

  overlay.draw = function draw() {
    const projection = this.getProjection();
    const pixel = projection.fromLatLngToDivPixel(position);

    const { element, } = overlay;
    const content = element.children[0];
    const contentHeight = content.clientHeight;
    const contentWidth = content.clientWidth;

    switch (verticalAlign) {
      case 'top':
        element.style.top = `${pixel.y - contentHeight + verticalOffset}px`;
        break;
      default:
      case 'middle':
        element.style.top = `${pixel.y - (contentHeight / 2) + verticalOffset}px`;
        break;
      case 'bottom':
        element.style.top = `${pixel.y + verticalOffset}px`;
        break;
    }

    switch (horizontalAlign) {
      case 'left':
        element.style.left = `${pixel.x - contentWidth + horizontalOffset}px`;
        break;
      default:
      case 'center':
        element.style.left = `${pixel.x - (contentWidth / 2) + horizontalOffset}px`;
        break;
      case 'right':
        element.style.left = `${pixel.x + horizontalOffset}px`;
        break;
    }

    element.style.display = autoShow ? 'block' : 'none';

    if (!autoShow) {
      options.show.call(this, element);
    }
  };

  overlay.onRemove = function onRemove() {
    const { element, } = overlay;

    if (options.remove) {
      options.remove.call(this, element);
    } else {
      element.parentNode.removeChild(element);
      overlay.element = null;
    }
  };

  this.overlays.push(overlay);

  GMaps.fire('overlay_added', overlay, this);

  return overlay;
};

/**
 * Remove an overlay from the map and from the overlays collection. This method also fires a `overlay_removed` event.
 * @function removeOverlay
 *
 * @param {google.maps.OverlayView} overlay - The overlay to be removed.
 */
GMaps.prototype.removeOverlay = function removeOverlay(overlay) {
  const overlayIndex = this.overlays.indexOf(overlay);

  if (overlayIndex >= 0) {
    overlay.setMap(null);
    this.overlays.splice(overlayIndex, 1);

    GMaps.fire('overlay_removed', overlay, this);
  }
};

/**
 * Remove all the overlays from the map and clear the overlays collection. This method does not fire a `overlay_removed` event.
 * @function removeOverlays
 */
GMaps.prototype.removeOverlays = function removeOverlays() {
  this.overlays.forEach(overlay => overlay.setMap(null));

  this.overlays = [];
};

export default GMaps;
