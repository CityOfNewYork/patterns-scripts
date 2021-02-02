# Patterns Scripts

A set of common utility ES modules to help keep scripting DRY and support accessibility. Used along with [`@nycopportunity/pttrn-cli`](https://github.com/cityofnewyork/patterns-cli) projects.

## Installation

```shell
$ npm install @nycopportunity/pttrn-scripts
```

Import ES modules from the source.

```javascript
import '@nycopportunity/pttrn-scripts/src/{{ module }}/{{ module }}'

new {{ Module }}();
```

In most cases implementation is done by adding a `data-js` attribute to the appropriate element. Configuration is often handled through other `data` and `aria` attributes but advanced customization can also be achieved by setting module properties pre or post instantiation. Where utilities are listening to click events the listeners are added to the body and trigger the script when the click target selector matches the utility settings.

```html
<{{ element }} data-js="{{ script }}"> My script enhanced element </{{ element }}>
```

Some utilities support scripting only and do not have HTML counterparts. See documentation for more details.

### Docs

* [Copy](src/copy) - Click copy to clipboard utility
* [Dialog](src/dialog) - Dialog utility
* [Forms](src/forms) - Form validation and other form utilities
* [Icons](src/icons) - Fetches an svg sprite and adds it to the DOM
* [Localize](src/localize) - Retrieve localized strings from a global constant
* [LZW](src/lzw) - Compression algorithm for encoding strings of data
* [Newsletter](src/newsletter) - Enhances an embedded Mailchimp form with validation
* [Spinner](src/spinner) - Generic process or loading spinner animation
* [Toggle](src/toggle) - Multi-purpose element visibility toggle
* [Tooltips](src/tooltips) - Accessible tooltip toggle and positioning
* [Track](src/track) - Auto click tracking for Google Analytics and Webtrends
* [Web Share](src/web-share) - Web Share API button
* [Window Vh](src/window-vh) - CSS variable setting for 100vh for iOS
