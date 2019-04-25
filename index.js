'use strict';

const {defaultExclude} = require('test-exclude');

const settings = Symbol.for('nycrc');

/* This class exists for members which do not get static copies */
class NYCConfigBase {
	constructor(customSettings = {}) {
		this[settings] = {
			all: true,
			require: [],
			include: [],
			exclude: [...defaultExclude],
			excludeNodeModules: true,
			...customSettings
		};
	}

	get settings() {
		return this[settings];
	}
}

class NYCConfig extends NYCConfigBase {
	all(enable = false) {
		this[settings].all = enable;

		return this;
	}

	fullCoverage(perFile = true) {
		Object.assign(this[settings], {
			checkCoverage: true,
			perFile,
			lines: 100,
			statements: 100,
			functions: 100,
			branches: 100
		});

		return this;
	}

	require(...modules) {
		this[settings].require.push(...modules);

		return this;
	}

	include(...globs) {
		this[settings].include.push(...globs);

		return this;
	}

	exclude(...globs) {
		this[settings].exclude.push(...globs);

		return this;
	}

	excludeNodeModules(exclude = false) {
		this[settings].excludeNodeModules = exclude;

		return this;
	}
}

/* Generate static factory methods */
Object.getOwnPropertyNames(NYCConfig.prototype)
	.filter(n => n !== 'constructor')
	.forEach(method => {
		NYCConfig[method] = (...args) => new NYCConfig()[method](...args);
	});

module.exports = NYCConfig;
