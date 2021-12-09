'use strict';

/**
 * Sets the reading direction of the document based on URL Query Parameter
 * or toggle click. Stores the user's preference in local storage.
 */
class Direction {
  /**
   * @constructor
   *
   * @return  {Class}  Instance of Direction
   */
  constructor() {
    /**
     * Settings
     */

    this.storage = Direction.storage;

    this.selectors = Direction.selectors;

    /**
     * Set the initial desired direction
     */

    let params = new URLSearchParams(window.location.search);

    let dir = (params.get('dir')) ?
      params.get('dir') : localStorage.getItem(this.storage.DIR);

    if (dir) this.set(dir);

    /**
     * Add event listeners for toggling
     */

    document.querySelector('body').addEventListener('click', event => {
      if (!event.target.matches(this.selectors.TOGGLE))
        return;

      this.click();
    });

    return this;
  }

  /**
   * The click event handler for the toggle
   *
   * @return  {Class}  Instance of Direction
   */
  click() {
    let current = document.documentElement.getAttribute('dir');

    let direction = (current === 'rtl') ? 'ltr' : 'rtl';

    this.set(direction);

    return this;
  }

  /**
   * Sets the attribute on the root element and in local storage.
   *
   * @param   {String}  direction  The desired direction; 'ltr' or 'rtl'
   *
   * @return  {Class}              Instance of Direction
   */
  set(direction) {
    document.documentElement.setAttribute('dir', direction);

    localStorage.setItem(this.storage.DIR, direction);

    return this;
  }
}

/**
 * Local storage keys
 *
 * @var {Object}
 */
Direction.storage = {
  DIR: '--nyco-direction'
};

/**
 * Selector strings for the class
 *
 * @var {Object}
 */
Direction.selectors = {
  TOGGLE: '[data-js="direction"]'
};

export default Direction;
