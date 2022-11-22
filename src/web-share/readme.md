# Web Share

The Web Share Utility invokes the [`navigator.share()`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share) API when the toggling element is clicked using data set to the `data-web-share` attribute. The following options are available for configuration; a callback can be set for when a successful share is made, a fallback function can be set for when the browser does not support `navigator.share()`, and a condition for when to trigger fallback versus using the Navigator Share API.

## Usage

### JavaScript

```javascript
import WebShare from '@nycopportunity/pttrn-scripts/src/web-share/web-share';

new WebShare({
  callback: () => {
    // Designate a callback function for a successful share here
  },
  fallback: () => {
    // Designate a fallback method for browsers that do not support the Web Share API here
  }
});
```

### Markup

```html
<button data-js="web-share" data-web-share='{"title": "Page Title", "text":"Description to of the shared content.", "url":"https://url/to/share"}'>
  Share
</button>
```
