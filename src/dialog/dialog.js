'use strict';

import Toggle from '@nycopportunity/pttrn-scripts/src/toggle/toggle';

/**
 * @class  Dialogue
 *
 * Usage
 *
 * Element Attributes. Either <a> or <button>
 *
 * @attr  data-js="dialogue"         Instantiates the toggling method
 * @attr  aria-controls=""           Targets the id of the dialogue
 * @attr  aria-expanded="false"      Declares target closed/open when toggled
 * @attr  data-dialogue="open"       Designates the primary opening element of the dialogue
 * @attr  data-dialogue="close"      Designates the primary closing element of the dialogue
 * @attr  data-dialogue-lock="true"  Wether to lock screen scrolling when drodown is open
 *
 * Target Attributes. Any <element>
 *
 * @attr  id=""               Matches aria-controls attr of Element
 * @attr  class="hidden"      Hidden class
 * @attr  aria-hidden="true"  Declares target open/closed when toggled
 */
class Dialogue {
  /**
   * @constructor  Instantiates dialogue and toggle method
   *
   * @return  {Object}  The instantiated dialogue with properties
   */
  constructor() {
    this.selector = Dialogue.selector;

    this.selectors = Dialogue.selectors;

    this.classes = Dialogue.classes;

    this.dataAttrs = Dialogue.dataAttrs;

    this.toggle = new Toggle({
      selector: this.selector,
      after: (toggle) => {
        let active = toggle.target.classList.contains(Toggle.activeClass);
        console.dir(toggle.element.dataset[this.dataAttrs.LOCK]);
        // Lock the body from scrolling if lock attribute is present
        if (active && toggle.element.dataset[this.dataAttrs.LOCK] === 'true') {
          // Scroll to the top of the page
          window.scroll(0, 0);

          // Prevent scrolling on the body
          document.querySelector('body').classList.add(this.classes.OVERFLOW);
          console.dir(toggle.focusable);
          // When the last focusable item in the list looses focus loop to the first
          toggle.focusable.item(toggle.focusable.length - 1)
            .addEventListener('blur', () => {
              toggle.focusable.item(0).focus();
            });
        } else {
          // Remove if all other dialogue body locks are inactive
          let locks = document.querySelectorAll([
              this.selector,
              this.selectors.locks,
              `.${Toggle.activeClass}`
            ].join(''));

          if (locks.length === 0) {
            document.querySelector('body').classList.remove(this.classes.OVERFLOW);
          }
        }

        // Focus on the close or open button if present
        let id = `[aria-controls="${toggle.target.getAttribute('id')}"]`;
        let close = document.querySelector(this.selectors.CLOSE + id);
        let open = document.querySelector(this.selectors.OPEN + id);

        if (active && close) {
          close.focus();
        } else if (open) {
          open.focus();
        }
      }
    });

    return this;
  }
}

/** @type  {String}  Main DOM selector */
Dialogue.selector = '[data-js*=\"dialogue\"]';

/** @type  {Object}  Additional selectors used by the script */
Dialogue.selectors = {
  CLOSE: '[data-dialogue*="close"]',
  OPEN: '[data-dialogue*="open"]',
  LOCKS: '[data-dialogue-lock="true"]'
};

/** @type  {Object}  Data attribute namespaces */
Dialogue.dataAttrs = {
  LOCK: 'dialogueLock'
};

/** @type  {Object}  Various classes used by the script */
Dialogue.classes = {
  OVERFLOW: 'overflow-hidden'
};

export default Dialogue;