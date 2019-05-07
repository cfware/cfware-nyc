# @cfware/nyc

[![Travis CI][travis-image]][travis-url]
[![Greenkeeper badge][gk-image]](https://greenkeeper.io/)
[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
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

module.exports = require('@cfware/nyc')
  .fullCoverage()
  .exclude('build/**')
  .settings;
```

## Running tests

```sh
npm test
```

[npm-image]: https://img.shields.io/npm/v/@cfware/nyc.svg
[npm-url]: https://npmjs.org/package/@cfware/nyc
[travis-image]: https://travis-ci.org/cfware/cfware-nyc.svg?branch=master
[travis-url]: https://travis-ci.org/cfware/cfware-nyc
[gk-image]: https://badges.greenkeeper.io/cfware/cfware-nyc.svg
[downloads-image]: https://img.shields.io/npm/dm/@cfware/nyc.svg
[downloads-url]: https://npmjs.org/package/@cfware/nyc
[license-image]: https://img.shields.io/github/license/cfware/cfware-nyc.svg
