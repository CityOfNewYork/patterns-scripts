'use strict';

/**
 * A wrapper around Intersection Observer class
 */
class Observe {
  constructor(s = {}) {
    if (!s.element) return;

    this.options = (s.options) ? Object.assign(Observe.options, s.options) : Observe.options;

    this.trigger = (s.trigger) ? s.trigger : Observe.trigger;

    this.selectors = (s.selectors) ? s.selectors : Observe.selectors;

    // Instantiate the Intersection Observer
    this.observer = new IntersectionObserver((entries, observer) => {
      this.callback(entries, observer);
    }, this.options);

    // Select all of the items to observe
    let selectorItem = this.selectors.ITEM.replace('{{ item }}',
        s.element.dataset[this.selectors.ITEMS_ATTR]);

    this.items = s.element.querySelectorAll(selectorItem);

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

/** Options for the Intersection Observer API */
Observe.options = {
  root: null,
  rootMargin: '0px',
  threshold: [0.15]
};

/** Placeholder entry function for what happens with items are observed */
Observe.trigger = entry => {
  console.dir(entry);
  console.dir('Observed! Create a entry trigger function and pass it to the instantiated Observe settings object.');
};

/** Main selector for the utility */
Observe.selector = '[data-js*="observe"]';

/** Misc. selectors for the observer utility */
Observe.selectors = {
  ITEM: '[data-js-observe-item="{{ item }}"]',
  ITEMS_ATTR: 'jsObserveItems'
};

export default Observe;
