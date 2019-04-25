'use strict';

const {defaultExclude} = require('test-exclude');

module.exports = {
	fullCoverage: (perFile = true) => ({
		checkCoverage: true,
		perFile,
		lines: 100,
		statements: 100,
		functions: 100,
		branches: 100
	}),
	esm: {
		require: ['esm']
	},
	exclude: (...args) => ({
		exclude: defaultExclude.concat(...args)
	})
};
