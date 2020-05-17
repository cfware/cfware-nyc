# @cfware/nyc [![NPM Version][npm-image]][npm-url]

NYC configurations used by my projects.

## Usage

Create `nyc.config.cjs` in your project:
```js
'use strict';

module.exports = require('@cfware/nyc')
  .all()
  .checkCoverage()
  .exclude('build/**');
```

All instance methods are also exposed static methods which construct a new object and
run the method.  For example:

```js
const assert = require('assert');
const NYCConfig = require('@cfware/nyc');
const config1 = NYCConfig.all();
const config2 = new NYCConfig().all();

(async () {
  // This will pass
  assert.deepStrictEqual(await config1, await config2);
})();
```

All methods return `this` to allow chaining.

### new NYCConfig(customSettings = {})

Construct a new instance overwriting some nyc configuration options.  No validation is
performed.  It is not needed to explicitly call the constructor unless:
* You need to eliminate some default `exclude` globs.
* You need to provide options not directly supported by this module.

### NYCConfig.defaultExclude

This property is static only, returns a copy of the default `exclude` list.

This is the [nyc default excludes] with some additional paths:

* `fixtures/**`
* `helpers/**`
* `tap-snapshots/**`

### NYCConfig#all(enable = true)

Enable or disable `all`.  Enabling can cause difficulties in current versions of node.js
when the repository contains ES modules which are not ignored.

### NYCConfig#checkCoverage(enable = true)

Enable or disable `checkCoverage`.

### NYCConfig#perFile(enable = true)

Enable or disable `perFile` (only effective if `checkCoverage` is enabled)

### NYCConfig#require(...modules)

Append the `require` configuration array.

### NYCConfig#include(...globs)

Append the `include` configuration array.

### NYCConfig#exclude(...globs)

Append the `exclude` configuration array.

### NYCConfig#excludeNodeModules(enable = true)

Enable or disable `excludeNodeModules`.

### NYCConfig#reporter(...reporters)

Add one or more coverage reporters to run.  Note the first call to this function will replace
the nyc default.

## Defaults

The defaults provided by this module are:
```js
{
  tempDir: 'coverage/.nyc_output',
  require: [],
  include: [],
  exclude: NYCConfig.defaultExclude,
  lines: 100,
  statements: 100,
  functions: 100,
  branches: 100
}
```

nyc will apply additional defaults for keys not listed here.

[npm-image]: https://img.shields.io/npm/v/@cfware/nyc.svg
[npm-url]: https://npmjs.org/package/@cfware/nyc
[nyc default excludes]: https://github.com/istanbuljs/schema/blob/master/default-exclude.js
