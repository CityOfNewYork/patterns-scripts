# Dialog

The Dialog Utility provides functionality to dismissible [dialogs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role). Common examples include full screen dropdown menus and modal windows. This utility uses the [Toggle Utility](../toggle) as a base and adds the following features:

* Focus will shift from the "open" toggle element to a designated "close" toggle element within the target dialog. These elements are given the data attributes `data-dialog="open"` or `data-dialog="close"` respectively.

* An element alternative to the `data-dialog="open"` can be given focus shift when the dialog closes using the `[data-dialog-focus-on-close="{{ ID }}"]`.

* The utility can trap the focus of the page and prevent scrolling on the body element if they occupy the full view of the page. This prevents shifting focusing on elements outside of the dialog. The data attribute `data-dialog-lock="true"` on the opening toggling element designates this behavior. This requires the presence of the `data-dialog="close"` element.

## Usage

### JavaScript

```javascript
import Dialog from '@nycopportunity/pttrn-scripts/src/dialog/dialog';

new Dialog();
```

### Markup

It is important to use the appropriate aria attributes according to the specification for different dialog types ("modal" or "non-modal"). Refer to the [MDN Dialog documentation](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role) for more details.

#### Default State

```html
<button aria-controls="aria-c-dialog" aria-expanded="false" class="btn" data-js="dialog" data-modal="open" data-dialog-lock="true">Show Dialog</button>

<div aria-hidden="true" class="hidden" id="aria-c-dialog" aria-labelledby="aria-lb-dialog-header" aria-describedby="aria-db-dialog-body" aria-modal="true" role="dialog">
  <button aria-controls="aria-c-dialog" data-js="dialog" data-modal="close" tabindex="-1">
    Dismiss
  </button>

  <p id="aria-db-dialog-body">Dialog content. <button aria-controls="aria-c-dialog" aria-expanded="false" data-js="dialog" tabindex="-1">Close</button> or <a href="#" tabindex="-1">Continue</a>.</p>
</div>
```

#### Active State

```html
<button aria-controls="aria-c-dialog" aria-expanded="true" class="btn active" data-js="dialog" data-modal="open" data-dialog-lock="true">Show Dialog</button>

<div aria-hidden="true" class="active" id="aria-c-dialog" aria-labelledby="aria-lb-dialog-header" aria-describedby="aria-db-dialog-body" aria-modal="true" role="dialog">
  <button aria-controls="aria-c-dialog" aria-expanded="true" data-js="dialog" data-modal="close">
    Dismiss
  </button>

  <p id="aria-db-dialog-body">Dialog content. <button aria-controls="aria-c-dialog" aria-expanded="true" data-js="dialog">Close</button> or <a href="#">Continue</a>.</p>
</div>
```

### Attribute Configuration

The markup will use the same attributes as the [Toggle Utility](../toggle) but the namespace `toggle` is replaced with `dialog`. For example; `data-js="toggle"` becomes `data-js="dialog"`. There are some additional attributes for the open and close elements.

#### Element Attributes

The toggling element that opens the dialog. Either `<a>` or `<button>`.

Attributes                     | Description
-------------------------------|-
`data-js="dialog"`             | Instantiates the toggling method
`aria-controls=""`             | Targets the id of the dialog
`aria-expanded="false"`        | Declares target closed/open when toggled
`data-dialog="open"`           | Designates the primary opening element of the dialog
`data-dialog="close"`          | Designates the primary closing element of the dialog
`data-dialog-focus-on-close=""`| Designates an alternate element to focus on when the dialog closes. Value of the attribute is the id of the dialog.
`data-dialog-lock="true"`      | Wether to lock screen scrolling when dialog is open. This will only add the class `overflow-hidden` to the body. The class will need to be present in the stylesheet to take effect.

#### Target Attributes

The target element that should have the `role="dialog"` attribute.

Attributes           | Description
---------------------|-
`id=""`              | Matches aria-controls attr of Element
`class="hidden"`     | Hidden class
`aria-hidden="true"` | Declares target open/closed when toggled
