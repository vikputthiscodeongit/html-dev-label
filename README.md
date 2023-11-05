# html-dev-label
[![npm](https://img.shields.io/npm/v/@codebundlesbyvik/html-dev-label)](https://www.npmjs.com/package/@codebundlesbyvik/html-dev-label)
[![npm - downloads per week](https://img.shields.io/npm/dw/@codebundlesbyvik/html-dev-label)](https://www.npmjs.com/package/@codebundlesbyvik/html-dev-label)

An HTML element rendered on page indicating that your project is compiled with `process.env.NODE_ENV` set to `development`.

![html-dev-label](https://github.com/vikputthiscodeongit/html-dev-label/assets/16013785/b57218f9-7154-448a-91f2-7bb97e375972)

<br>

## Why?
It's easy to confuse the development environment of a website with the live version when you have many tabs & windows open. Well, not any more.

<br>

## Installation and usage
Install the package with npm.

``` shell
npm install @codebundlesbyvik/html-dev-label
```

Import and initialize `htmlDevLabel`. I recommend you do this in your main JavaScript file.

``` javascript
import htmlDevLabel from "@codebundlesbyvik/html-dev-label";

htmlDevLabel(["top", "left"]);
```

<br>

## Options
`htmlDevLabel` accepts a single, optional parameter which is either:
* An `Array` with 2 `position` values, or
* An `Object` containing one or more of the option entries listed in the table below.

| Key               | Type                                         | Default               | Description                                                                                                                 |
| :---------------- | :------------------------------------------- | :-------------------- | :-------------------------------------------------------------------------------------------------------------------------- |
| `parentEl`        | `HTMLElement`                                | `document.body`       | Element of which the label will become the first child.                                                                     |
| `position`        | `["top" \| "bottom", "left" \| "right"]`     | `["bottom", "right"]` | Position of the label.                                                                                                      |
| `size`            | `"sm" \| "md" \| "lg"`                       | `"md"`                | Size of the label.                                                                                                          |
| `text`            | `String`                                     | `"Build: dev"`        | Text shown inside the label.                                                                                                |
| `fontFamily`      | `["monospace" \| "sans-serif" \| "inherit"]` | `"monospace"`         | Style of font family used for the label text. Will use the computed value of the parent element when set to `"inherit"`.    |
| `backgroundColor` | `String`                                     | `"#FFFFFF"` (white)   | Background color of the label.                                                                                              |
| `borderColor`     | `String`                                     | `"#FF0000"` (red)     | Border color of the label.                                                                                                  |

<br>

## Migrating from version 2
* **If you manually set `position` then you must convert its value to an `Array`.**
* **The default `font-family` used for the label text has changed.**
  * If you prefer the old look, use value `"sans-serif"` for the `fontFamily` option.

<br>

## License
MIT © 2023 [Viktor Chin-Kon-Sung](https://github.com/vikputthiscodeongit)
