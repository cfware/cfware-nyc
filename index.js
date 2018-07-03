'use strict';

const {defaultExclude} = require('test-exclude');

module.exports = {
	'check-coverage': true,
	'per-file': true,
	lines: 100,
	statements: 100,
	functions: 100,
	branches: 100,
	exclude: defaultExclude.concat(['gulpfile.*', 'build*/**', '**/helpers/**'])
};
