# Observe

The Observe Utility is a wrapper around the [`IntersectionObserver()` API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API). It uses HTML attributes to instantiate observation on any desired root element's items and triggers a callback where your functionality can be take place.

## Usage

### JavaScript

```javascript
import Observe from '@nycopportunity/pttrn-scripts/src/observe/observe';

new Observe({
  element: document.querySelectorAll(Observe.selector),
  options: {
    rootMargin: '0px',
    threshold: [0.15] // 15% Visibility threshold
  },
  trigger: (entry, prevEntry, observer) => {
    // If we are anchor jumping and the entry isn't intersecting
    if (!entry.isIntersecting) return;

    // Add your desired functionality here
  }
});
```

#### Settings

Attribute |          | Description
----------|----------|-
`element` | Required | The intersection observer's root element.
`options` | Optional | The default value of the threshold setting.
`trigger` | Required | The callback triggered by an observation.

Read more about the [`IntersectionObserver()` API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to understand how the settings influence it's functionality.

### Markup

```html
<!-- @data-js                The instantiating selector (the default value is set to Observe.selector) -->
<!-- @data-js-observe-root   The root element. It may either be "document" or an element selector -->
<!-- @data-js-observe-items  The item or items to Observe in the root element -->
<main data-js="observe" data-js-observe-root="document" data-js-observe-items="heading">
  <!-- @data-js-observe-item  The value of @data-js-observe-items and @data-js-observe-item should match -->
  <section data-js-observe-item="heading">
    <!-- Your html markup here -->
  </section>
</main>
```
