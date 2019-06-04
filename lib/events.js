import GMaps from './core';

/**
 * Extends GMaps to bind and trigger events.
 * @module Events
 */

/**
 * Collection of custom events that can be registered and fired.
 *
 * @type {array}
 */
GMaps.customEvents = ['marker_added', 'marker_removed', 'polyline_added', 'polyline_removed', 'polygon_added', 'polygon_removed', 'layer_added', 'layer_removed', 'overlay_map_type_added', 'overlay_map_type_removed', 'overlay_added', 'overlay_removed', 'geolocated', 'geolocation_failed'];

/**
 * Add an event (native or custom) to an object.
 * @function on
 *
 * @param {string} eventName - The name of the event. It can be any of the native events from Google Maps, or the ones described in `GMaps.customEvents`.
 * @param {object} target - The target of the event. It can be a native object from Google Maps, (such as a google.maps.Map, google.maps.Marker, etc.), or a GMaps instance.
 * @param {function} handler - The handler (often called listener) of the event. Is a function that will be executed every time the event is fired.
 *
 * @returns {object}
 */
GMaps.on = (eventName, object, handler) => {
  let target = object;

  if (GMaps.customEvents.indexOf(eventName) === -1) {
    if (target instanceof GMaps) {
      target = target.map;
    }

    return google.maps.event.addListener(target, eventName, handler);
  }

  const registeredEvent = {
    handler,
    eventName,
  };

  target.registeredEvents[eventName] = target.registeredEvents[eventName] || [];
  target.registeredEvents[eventName].push(registeredEvent);

  return registeredEvent;
};

/**
 * Remove an event (native or custom) to an object.
 * @function off
 *
 * @param {string} eventName - The name of the event. It can be any of the native events from Google Maps, or the ones described in `GMaps.customEvents`.
 * @param {object} target - The target of the event. It can be a native object from Google Maps, (such as a google.maps.Map, google.maps.Marker, etc.), or a GMaps instance.
 */
GMaps.off = (eventName, object) => {
  let target = object;

  if (GMaps.customEvents.indexOf(eventName) === -1) {
    if (target instanceof GMaps) {
      target = target.map;
    }

    google.maps.event.clearListeners(target, eventName);
  } else {
    target.registeredEvents[eventName] = [];
  }
};

/**
 * Add a native event that will be removed from the target after it has been executed once.
 * @function once
 *
 * @param {string} eventName - The name of the event. It has to be any of the native events from Google Maps.
 * @param {object} target - The target of the event. It has to be a native object from Google Maps, such as a google.maps.Map, google.maps.Marker, etc.
 * @param {function} handler - The handler (often called listener) of the event. Is a function that will be executed when the event is fired the first time.
 *
 * @returns {object}
 */
GMaps.once = (eventName, object, handler) => {
  let target = object;

  if (GMaps.customEvents.indexOf(eventName) === -1) {
    if (target instanceof GMaps) {
      target = target.map;
    }

    return google.maps.event.addListenerOnce(target, eventName, handler);
  }

  return undefined;
};

/**
 * Trigger an event (native or custom) and execute all the handlers registered previously.
 * @function fire
 *
 * @param {string} eventName - The name of the event. It can be any of the native events from Google Maps, or the ones described in `GMaps.customEvents`.
 * @param {object} target - The target of the event. It can be a native object from Google Maps, (such as a google.maps.Map, google.maps.Marker, etc.), or a GMaps instance.
 * @param {object} context - The context for the event handler (represented by `this` keyword inside the handler).
 *
 * @returns {object}
 */
GMaps.fire = (eventName, object, context) => {
  if (GMaps.customEvents.indexOf(eventName) === -1) {
    // eslint-disable-next-line no-undef
    const eventArguments = Array.prototype.slice.apply(arguments).slice(2);
    google.maps.event.trigger(object, eventName, eventArguments);
  } else if (eventName in context.registeredEvents) {
    context.registeredEvents[eventName].forEach(registeredEvent =>
      registeredEvent.handler.call(context, object)
    );
  }
};

GMaps.prototype.on = function on(eventName, handler) {
  return GMaps.on(eventName, this, handler);
};

GMaps.prototype.off = function off(eventName) {
  GMaps.off(eventName, this);
};

GMaps.prototype.once = function once(eventName, handler) {
  return GMaps.once(eventName, this, handler);
};

export default GMaps;
