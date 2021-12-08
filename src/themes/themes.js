'use strict';

/**
 * Cycles through a predefined object of theme classnames and toggles them on
 * the document element based on a click event. Uses local storage to save and
 * refer to a user's preference based on the last theme selected.
 */
class Themes {
  /**
   * @constructor
   *
   * @param   {Object}  s  The settings object, may include 'storage', 'selectors',
   *                       or 'theme' attributes
   *
   * @return  {Class}      The constructed instance of Themes.
   */
  constructor(s = {}) {
    /**
     * Settings
     */

    this.storage = (s.hasOwnProperty('storage')) ?
      Object.assign(Themes.storage, s.storage) : Themes.storage;

    this.selectors = (s.hasOwnProperty('selectors')) ?
      Object.assign(Themes.selectors, s.selectors) : Themes.selectors;

    this.themes = (s.hasOwnProperty('themes')) ? s.themes : Themes.themes;

    /**
     * Get initial user preference
     */

    this.preference = localStorage.getItem(this.storage.THEME);

    if (this.preference)
      this.set(JSON.parse(this.preference));

    /**
     * Add event listeners
     */

    document.querySelector('body').addEventListener('click', event => {
      if (!event.target.matches(this.selectors.TOGGLE))
        return;

      this.click(event);
    });

    return this;
  }

  /**
   * The click handler for theme cycling.
   *
   * @param   {Object}  event  The original click event that invoked the method
   *
   * @return  {Class}          The Themes instance
   */
  click(event) {
    // Get available theme classnames
    let cycle = this.themes.map(t => t.classname);

    // Check to see if the document has any of the theme class settings already
    let intersection = cycle.filter(item => {
      return [...document.documentElement.classList].includes(item)
    });

    let start = (intersection.length === 0) ? 0 : cycle.indexOf(intersection[0]);
    let theme = (typeof cycle[start + 1] === 'undefined') ? cycle[0] : cycle[start + 1];

    // Toggle elements
    document.documentElement.classList.remove(cycle[start]);
    event.target.classList.remove(`${cycle[start]}${this.selectors.active}`);

    this.set(this.themes.find(t => t.classname === theme ));

    return this;
  }

  /**
   * The setter method for theme. Adds element classes and sets local storage.
   *
   * @param   {Object}  theme  The theme object including classname and label
   *
   * @return  {Class}          The Themes instance
   */
  set(theme) {
    document.documentElement.classList.add(theme.classname);

    document.querySelectorAll(this.selectors.TOGGLE)
      .forEach(element => {
        element.classList.add(`${theme.classname}${this.selectors.active}`);
      });

    document.querySelectorAll(this.selectors.LABEL)
      .forEach(element => {
        element.textContent = theme.label;
      });

    localStorage.setItem(this.storage.THEME, JSON.stringify(theme));

    return this;
  }
};

/**
 * The storage keys used by the script for local storage. The default is
 * `--nyco-theme` for the theme preference.
 *
 * @var {Object}
 */
Themes.storage = {
  THEME: '--nyco-theme'
};

/**
 * The selectors for various elements queried by the utility. Refer to the
 * source for defaults.
 *
 * @var {Object}
 */
Themes.selectors = {
  TOGGLE: '[data-js="themes"]',
  LABEL: '[data-js-themes="label"]',
  ACTIVE: ':active'
};

/**
 * The predefined theme Objects to cycle through, each with a corresponding
 * human-readable text label and classname. The default includes two themes;
 * `default` labelled "Light" theme and `dark` labelled "Dark".
 *
 * @var {Array}
 */
Themes.themes = [
  {
    label: 'Light',
    classname: 'default'
  },
  {
    label: 'Dark',
    classname: 'dark'
  }
];

export default Themes;
