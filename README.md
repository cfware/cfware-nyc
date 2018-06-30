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

Point to a configuration using the `extends` option of nyc.
* `@cfware/nyc` forces 100% coverage.
* `@cfware/nyc/babel` adds options to inform nyc that instrumentation was
  done externally.
* `@cfware/nyc/babel-mjs-only` adds options to restrict nyc to mjs only.

## Running tests

```sh
npm test
```

[npm-image]: https://img.shields.io/npm/v/@cfware/nyc.svg
[npm-url]: https://npmjs.org/package/@cfware/nyc
[travis-image]: https://travis-ci.org/cfware/cfware-nyc.svg?branch=master
[travis-url]: https://travis-ci.org/cfware/cfware-nyc
[license-image]: https://img.shields.io/github/license/cfware/cfware-nyc.svg
