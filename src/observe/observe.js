'use strict';

/**
 * A wrapper around Intersection Observer class
 */
class Observe {
  constructor(s) {
    this.options = (s.options) ? s.options : Observe.options;

    this.trigger = (s.trigger) ? s.trigger : Observe.trigger;

    // Set the root scrolling element for the Intersection Observer
    if (s.element.dataset.jsObserveRoot === 'document') {
      this.options.root = document;
    } else {
      this.options.root = document.querySelector(s.element.dataset.jsObserveRoot);
    }

    // Instantiate the Intersection Observer
    this.observer = new IntersectionObserver((entries, observer) => {
      this.callback(entries, observer);
    }, this.options);

    // Select all of the items to observe
    this.items = this.options.root.querySelectorAll(`[data-js-observe-item="${s.element.dataset.jsObserveItems}"]`);

    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];

      this.observer.observe(item);
    }
  }

  callback(entries, observer) {
    let prevEntry = entries[0];

    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];

      this.trigger(entry, prevEntry, observer);

      prevEntry = entry;
    }
  }
}

Observe.options = {
  rootMargin: '0px',
  threshold: [0.15]
};

Observe.trigger = entry => {
  console.dir(entry);
  console.dir('Observed! Create a entry trigger function and pass it to the instantiated Observe settings object.');
};

Observe.selector = '[data-js*="observe"]';

export default Observe;
