# Themes

Cycles through a predefined object of theme classnames and toggles them on the document element based on a click event. Uses local storage to save and refer to a user's preference based on the last theme selected.

## Usage

### JavaScript

```javascript
import Themes from '@nycopportunity/pttrn-scripts/src/themes/themes';

new Themes();
```

### Markup

#### Default State

**Trigger**

```html
<button data-js="themes">
  <span data-js-themes="label">Theme</span>
</button>
```

**Root Element**

```html
<html>
```

#### Selected Theme State

**Trigger**

```html
<button data-js="themes" class="dark:active">
  <span data-js-themes="label">Dark</span>
</button>
```

**Root Element**

```html
<html class="dark">
```

### Configuration

The Theme() Utility instance accepts a settings object `{}` with the following properties:

Option      | Type     | Importance | Description
------------|----------|------------|-
`storage`   | *object* | optional   | The storage keys used by the script for local storage. The default is `--nyco-theme` for the theme preference.
`selectors` | *object* | optional   | The selectors for various elements queried by the utility. Refer to the source for defaults.
`themes`    | *object* | optional   | The predefined theme Objects to cycle through, each with a corresponding human-readable text label and classname. The default includes two themes; `default` labelled "Light" theme and `dark` labelled "Dark".
