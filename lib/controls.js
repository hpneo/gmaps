import GMaps from './core';

/**
 * Extends GMaps to use UI controls.
 * @module Controls
 */

const createControl = ({ style = {}, id, title, classes, content, position, events = {}, disableDefaultStyles, }) => {
  const control = document.createElement('div');

  control.style.cursor = 'pointer';

  if (disableDefaultStyles !== true) {
    control.style.fontFamily = 'Roboto, Arial, sans-serif';
    control.style.fontSize = '11px';
    control.style.boxShadow = 'rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px';
  }

  Object.keys(style).forEach((property) => {
    control.style = style[property];
  });

  if (id) {
    control.id = id;
  }

  if (title) {
    control.title = title;
  }

  if (classes) {
    control.className = classes;
  }

  if (content) {
    if (typeof content === 'string') {
      control.innerHTML = content;
    } else if (content instanceof window.HTMLElement) {
      control.appendChild(content);
    }
  }

  if (position) {
    control.position = google.maps.ControlPosition[position.toUpperCase()];
  }

  Object.keys(events).forEach(eventName =>
    google.maps.event.addDomListener(control, eventName, event =>
      events[eventName].call(this, event)
    )
  );

  control.index = 1;

  return control;
};

/**
 * Add a custom control to the map UI.
 * @function addControl
 *
 * @param {object} options - The `options` object should contain:
 * * `style` (object): The keys and values of this object should be valid CSS properties and values.
 * * `id` (string): The HTML id for the custom control.
 * * `classes` (string): A string containing all the HTML classes for the custom control.
 * * `content` (string or HTML element): The content of the custom control.
 * * `position` (string): Any valid [`google.maps.ControlPosition`](https://developers.google.com/maps/documentation/javascript/controls#ControlPositioning) value, in lower or upper case.
 * * `events` (object): The keys of this object should be valid DOM events. The values should be functions.
 * * `disableDefaultStyles` (boolean): If false, removes the default styles for the controls like font (family and size), and box shadow.
 *
 * @returns {HTMLElement}
 */
GMaps.prototype.addControl = function addControl(options) {
  const control = createControl(options);

  this.controls.push(control);
  this.map.controls[control.position].push(control);

  return control;
};

/**
 * Remove a control from the map. `control` should be a control returned by `addControl()`.
 * @function removeControl
 *
 * @param {HTMLElement} control - One of the controls returned by `addControl()`.
 * @returns {HTMLElement} the removed control.
 */
GMaps.prototype.removeControl = function removeControl(control) {
  const controlIndex = this.controls.indexOf(control);

  this.controls.splice(controlIndex, 1);

  if (control.position >= 0 && controlIndex >= 0) {
    const controlsForPosition = this.map.controls[control.position];
    const controlIndexInCollection = controlsForPosition.indexOf(control);

    controlsForPosition.removeAt(controlIndexInCollection);
  }

  return control;
};

export default GMaps;
