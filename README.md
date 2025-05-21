# html-dev-label
[![npm](https://img.shields.io/npm/v/@codebundlesbyvik/html-dev-label)](https://www.npmjs.com/package/@codebundlesbyvik/html-dev-label)
[![npm - downloads per week](https://img.shields.io/npm/dw/@codebundlesbyvik/html-dev-label)](https://www.npmjs.com/package/@codebundlesbyvik/html-dev-label)

An HTML element rendered on page which indicates your project is compiled with `process.env.NODE_ENV` set to `development`.

![html-dev-label](https://github.com/user-attachments/assets/f7125598-e11b-4c1d-b7af-644bf04caaa9)

<br>

## Installation and usage
Compatible with Node.js projects that support ECMAScript 2018 (ES9) or later.

To use, install the package with npm...

``` shell
npm install @codebundlesbyvik/html-dev-label
```

...and import and initialize `htmlDevLabel`.

``` javascript
import htmlDevLabel from "@codebundlesbyvik/html-dev-label";

htmlDevLabel(["top", "left"]);
```

<br>

## Options
`htmlDevLabel` accepts a single, optional parameter which is either a `position` array or an `object` with options.

| Property          | Type                                             | Default               | Description                                                                                                              |
| :---------------- | :----------------------------------------------- | :-------------------- | :------------------------------------------------------------------------------------------------------------------------|
| `parentEl`        | `HTMLElement`                                    | `document.body`       | Element of which the label will become the first child.                                                                  |
| `position`        | `["top" \| "bottom", "left" \| "right"]`         | `["bottom", "right"]` | Position of the label.                                                                                                   |
| `size`            | `"sm"` \| `"md"` \| `"lg"`                       | `"md"`                | Size of the label.                                                                                                       |
| `text`            | `string`                                         | `"DEV BUILD"`         | Text shown inside the label.                                                                                             |
| `fontFamily`      | `"monospace"` \| `"sans-serif"` \| `"inherit"`   | `"monospace"`         | Style of font family used for the label text. Will use the computed value of the parent element when set to `"inherit"`. |
| `backgroundColor` | `string`                                         | `"#FFF"` (white)      | Background color of the label.                                                                                           |
| `borderColor`     | `string`                                         | `"#F00"` (red)        | Border color of the label.                                                                                               |
| `hideOnHover`     | `boolean`                                        | `false`               | Make the label transparent when hovering over it with a pointing device.                                                 |

<br>

## Migrating
### From version 2
* __Breaking change__: Support for `position` as `string` has been removed. Convert the value to an array.
* The default `font-family` used for the label text has changed.
  * If you prefer the old look, use value `"sans-serif"` for the `fontFamily` option.

<br>

## License
MIT © 2025 [Viktor Chin-Kon-Sung](https://github.com/vikputthiscodeongit)
