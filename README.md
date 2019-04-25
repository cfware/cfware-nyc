# @cfware/nyc

[![Travis CI][travis-image]][travis-url]
[![NPM Version][npm-image]][npm-url]
[![MIT][license-image]](LICENSE)

NYC configurations used by my projects.

### Install @cfware/nyc

```sh
npm i --save-dev @cfware/nyc
```

## Usage

Create `nyc.config.js` in your project:
```js
'use strict';

const {esm, excludes, fullCoverage} = require('@cfware/nyc');


module.exports = {
  // Use the `esm` module for ESM to CJS translation (you must install esm)
  ...esm,
  // Default exclude plus 'build/**'
  ...exclude('build/**')
  // Enable full coverage without per-file errors
  ...fullCoverage(false)
}
```

### esm

This is an object:
```js
{
  require: ['esm']
}
```

### fullCoverage(perFile = true)

This function returns an object which enables check-coverage and requires full
coverage in all ways.

### exclude(...concatArgs)

This function returns an object with an `exclude` key containing an array.  Default
NYC excludes are automatically in the array, plus any arguments.  Each argument can
be a string or an array of strings.  So `exclude('dir1/**', 'dir2/**')` and
`exclude(['dir1/**', 'dir2/**'])` produce the same result.

## Running tests

```sh
npm test
```

[npm-image]: https://img.shields.io/npm/v/@cfware/nyc.svg
[npm-url]: https://npmjs.org/package/@cfware/nyc
[travis-image]: https://travis-ci.org/cfware/cfware-nyc.svg?branch=master
[travis-url]: https://travis-ci.org/cfware/cfware-nyc
[license-image]: https://img.shields.io/github/license/cfware/cfware-nyc.svg
