# html-dev-label
[![npm](https://img.shields.io/npm/v/@codebundlesbyvik/html-dev-label)](https://www.npmjs.com/package/@codebundlesbyvik/html-dev-label)
[![npm - downloads per week](https://img.shields.io/npm/dw/@codebundlesbyvik/html-dev-label)](https://www.npmjs.com/package/@codebundlesbyvik/html-dev-label)

An on-page HTML label present when your project is compiled with `process.env.NODE_ENV` set to `development`.

<br>

![html-dev-label](https://user-images.githubusercontent.com/16013785/158440211-e81c3767-9166-46de-9cb7-679f4fb96622.png)

<br>

## Why?

It's easy to confuse the development environment of a website with the live version when you have many tabs & windows open. Well, not any more.

<br>

## Installation

```
// Install package from npm
npm install @codebundlesbyvik/html-dev-label
```

<br>

## Usage

``` javascript
import HtmlDevLabel from "@codebundlesbyvik/html-dev-label";

const devLabel = new HtmlDevLabel();

devLabel.init();
```

When present, the label is shown in the bottom right corner of the page. Positioning options may be added in a future release.

<br>

## License

MIT © [Viktor Chin-Kon-Sung](https://github.com/vikputthiscodeongit)
