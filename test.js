#!/usr/bin/env node
'use strict';
const assert = require('assert');

const {name} = require('./package');

const index = require('.');
const babel = require('./babel');
const babelMjsOnly = require('./babel-mjs-only');

assert.strictEqual(typeof index, 'object');
assert.strictEqual(typeof babel, 'object');
assert.strictEqual(babel['extends'], name);
assert.strictEqual(babelMjsOnly['extends'], name + '/babel');
