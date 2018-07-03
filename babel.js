'use strict';

const base = require('.');

module.exports = Object.assign({}, base, {
	instrument: false,
	sourceMap: false,
	exclude: base.exclude.concat([
		'html/test/**',
		'wwwroot/**'
	])
});
