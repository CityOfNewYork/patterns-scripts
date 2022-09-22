# Copy

Copy value of an input to the clipboard. It will focus on the input an toggle the aria pressed attribute of the toggling button to indicate a successful copy.

## Usage

### JavaScript

```javascript
import Copy from '@nycopportunity/pttrn-scripts/src/copy/copy';

new Copy();
```

### Markup

```html
<input data-copy-target="copy-url" type="text" value="https://myurl" />

<button aria-pressed="false" data-copy="copy-url" data-js="copy">
  Copy to Clipboard
</button>
```

### Configuration

The Copy() Utility instance accepts a settings object `{}` with the following properties:

Option          | Type       | Importance | Description
----------------|------------|------------|-
`selector`      | *string*   | required   | The main element selector.
`selectors`     | *object*   | required   | The selectors for various elements queried by the utility. Refer to the source for defaults..
`aria`          | *string*   | required   | Button aria role to toggle.
`notifyTimeout` | *number*   | required   | Timeout for the "Copied!" notification
`before`        | *function* | optional   | Before hook. Triggers before the click event.
`copied`        | *function* | optional   | Copied hook. Triggers after a successful the copy event.
`after`         | *function* | optional   | After hook. Triggers after the click event.
