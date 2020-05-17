# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.7.0](https://github.com/cfware/cfware-nyc/compare/v0.6.0...v0.7.0) (2020-05-17)


### ⚠ BREAKING CHANGES

* Remove fastify-test-helper.config.js from default exclude
* The `fullCoverage` method is removed
* The default for `all` is now false
* The default argument to `all` and `excludeNodeModules`
methods are now `true`
* Move temp-dir to coverage/.nyc_output (#14)

### Features

* Add `tap-snapshots/**` to default exclude ([bf6fa8c](https://github.com/cfware/cfware-nyc/commit/bf6fa8cbad009516c37b4b42c52b4b9ae705c617))
* Add static `then` method ([a8ee4ed](https://github.com/cfware/cfware-nyc/commit/a8ee4edb6e7b135ecee54d699c3fa307371f25ed))
* Create `checkCoverage` and `perFile` methods ([#16](https://github.com/cfware/cfware-nyc/issues/16)) ([1377a22](https://github.com/cfware/cfware-nyc/commit/1377a2242645014a927224822a3b2bfd58955859))
* Move temp-dir to coverage/.nyc_output ([#14](https://github.com/cfware/cfware-nyc/issues/14)) ([cb856e7](https://github.com/cfware/cfware-nyc/commit/cb856e7f64f4439c4af1a6cb65ff5b6d098e6953))

## [0.6.0](https://github.com/cfware/cfware-nyc/compare/v0.5.0...v0.6.0) (2019-12-30)


### ⚠ BREAKING CHANGES

* The `settings` property has been removed
* Update for nyc 15 (#8)

### Features

* Support `await instance` to get settings ([#9](https://github.com/cfware/cfware-nyc/issues/9)) ([14417c1](https://github.com/cfware/cfware-nyc/commit/14417c1ec3670743f429add1461425aa6042fa0e))
* Update for nyc 15 ([#8](https://github.com/cfware/cfware-nyc/issues/8)) ([dce35ea](https://github.com/cfware/cfware-nyc/commit/dce35ea806f46f45893cc7a95d510d689f70f95c))

## [0.5.0](https://github.com/cfware/cfware-nyc/compare/v0.4.4...v0.5.0) (2019-06-04)


### Features

* Add fastify-test-helper.config.js to default exclude ([2b1efa7](https://github.com/cfware/cfware-nyc/commit/2b1efa7))



### [0.4.4](https://github.com/cfware/cfware-nyc/compare/v0.4.3...v0.4.4) (2019-06-03)



### [0.4.3](https://github.com/cfware/cfware-nyc/compare/v0.4.2...v0.4.3) (2019-06-01)


### Features

* Add fixtures and helpers to default exclude ([1d4ba55](https://github.com/cfware/cfware-nyc/commit/1d4ba55))



## [0.4.2](https://github.com/cfware/cfware-nyc/compare/v0.4.1...v0.4.2) (2019-04-25)


### Features

* Add reporter method ([37a1ad3](https://github.com/cfware/cfware-nyc/commit/37a1ad3))



## [0.4.1](https://github.com/cfware/cfware-nyc/compare/v0.4.0...v0.4.1) (2019-04-25)


### Features

* Add `Symbol.for('nycrc')` ([fb11baf](https://github.com/cfware/cfware-nyc/commit/fb11baf))



# [0.4.0](https://github.com/cfware/cfware-nyc/compare/v0.3.0...v0.4.0) (2019-04-25)


### Features

* Switch to class based API. ([84627d6](https://github.com/cfware/cfware-nyc/commit/84627d6))


### BREAKING CHANGES

* The API has been rewritten again.



# [0.3.0](https://github.com/cfware/cfware-nyc/compare/v0.2.0...v0.3.0) (2019-04-25)


### Features

* Restructure to work with nyc.config.js ([66786ef](https://github.com/cfware/cfware-nyc/commit/66786ef))


### BREAKING CHANGES

* Requires node.js 8
* No longer designed for use with extends option.
