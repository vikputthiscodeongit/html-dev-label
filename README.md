# html-dev-label
[![npm](https://img.shields.io/npm/v/@codebundlesbyvik/html-dev-label)](https://www.npmjs.com/package/@codebundlesbyvik/html-dev-label)
[![npm - downloads per week](https://img.shields.io/npm/dw/@codebundlesbyvik/html-dev-label)](https://www.npmjs.com/package/@codebundlesbyvik/html-dev-label)

An HTML element rendered on page which indicates your project is compiled with `process.env.NODE_ENV` set to `development`.

![html-dev-label](https://github.com/vikputthiscodeongit/html-dev-label/assets/16013785/b57218f9-7154-448a-91f2-7bb97e375972)

<br>

## Installation and usage
Compatible with Node.js projects that support ECMAScript 2018 (ES9) or greater.

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
`htmlDevLabel` accepts a single, optional parameter which is either:
* An `Object` containing one or more of the option entries listed in the table below, or
* __Deprecated__: An `Array` with 2 `position` values

| Key               | Type                                         | Default               | Description                                                                                                                 |
| :---------------- | :------------------------------------------- | :-------------------- | :-------------------------------------------------------------------------------------------------------------------------- |
| `parentEl`        | `HTMLElement`                                | `document.body`       | Element of which the label will become the first child.                                                                     |
| `position`        | `["top" \| "bottom", "left" \| "right"]`     | `["bottom", "right"]` | Position of the label.                                                                                                      |
| `size`            | `"sm" \| "md" \| "lg"`                       | `"md"`                | Size of the label.                                                                                                          |
| `text`            | `String`                                     | `"DEV BUILD"`         | Text shown inside the label.                                                                                                |
| `fontFamily`      | `"monospace" \| "sans-serif" \| "inherit"`   | `"monospace"`         | Style of font family used for the label text. Will use the computed value of the parent element when set to `"inherit"`.    |
| `backgroundColor` | `String`                                     | `"#FFF"` (white)      | Background color of the label.                                                                                              |
| `borderColor`     | `String`                                     | `"#F00"` (red)        | Border color of the label.                                                                                                  |

<br>

## Migrating from version 3
* Support for `position` as `String` has been fully removed.

## Migrating from version 2
* __Breaking change__: `position` as `String` is deprecated. Convert the value to an `Array`.
* __Breaking change__: The default `font-family` used for the label text has changed.
  * If you prefer the old look, use value `"sans-serif"` for the `fontFamily` option.

<br>

## License
MIT © 2024 [Viktor Chin-Kon-Sung](https://github.com/vikputthiscodeongit)
