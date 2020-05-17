'use strict';

const {testExclude} = require('@istanbuljs/schema').defaults;

const settings = Symbol.for('nycrc');

/* This class exists for members which do not get static copies */
class NYCConfigBase {
	constructor(customSettings = {}) {
		this[settings] = {
			tempDir: 'coverage/.nyc_output',
			require: [],
			include: [],
			exclude: [...NYCConfigBase.defaultExclude],
			lines: 100,
			statements: 100,
			functions: 100,
			branches: 100,
			...customSettings
		};
	}

	static get defaultExclude() {
		return [
			...testExclude.exclude,
			'fixtures/**',
			'helpers/**',
			'fastify-test-helper.config.js'
		];
	}

	async then(fn) {
		return fn(await this[settings]);
	}
}

class NYCConfig extends NYCConfigBase {
	all(enable = true) {
		this[settings].all = enable;

		return this;
	}

	checkCoverage(enable = true) {
		this[settings].checkCoverage = enable;

		return this;
	}

	perFile(enable = true) {
		this[settings].perFile = enable;

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

	excludeNodeModules(exclude = true) {
		this[settings].excludeNodeModules = exclude;

		return this;
	}

	reporter(...reporters) {
		if (this[settings].reporter) {
			this[settings].reporter.push(...reporters);
		} else {
			this[settings].reporter = reporters;
		}

		return this;
	}
}

/* Generate static factory methods */
for (const method of Object.getOwnPropertyNames(NYCConfig.prototype)) {
	if (method !== 'constructor') {
		NYCConfig[method] = (...args) => new NYCConfig()[method](...args);
	}
}

module.exports = NYCConfig;
