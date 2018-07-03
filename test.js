#!/usr/bin/env node
'use strict';
const assert = require('assert');

const babel = require('./babel');
const babelMjsOnly = require('./babel-mjs-only');

const index = require('.');

assert.strictEqual(typeof index, 'object');
assert.strictEqual(typeof babel, 'object');
assert.strictEqual(typeof babelMjsOnly, 'object');
