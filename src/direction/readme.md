# Direction

Sets the reading direction of the document based on URL Query Parameter or toggle click. Stores the user's preference in local storage.

## Usage

### JavaScript

```javascript
import Direction from '@nycopportunity/pttrn-scripts/src/direction/direction';

new Direction();
```

### Markup

#### Default State

**Trigger**

```html
<button data-js="direction">Theme</button>
```

**Root Element**

```html
<html>
```

#### Toggled State

**Root Element**

```html
<html dir="rtl">
```

### Query Parameter

Setting the URL Query Parameter to either `/?dir=rtl` or `/?dir=ltr` will also toggle the document's direction.
