'use strict';

const {defaultExclude} = require('test-exclude');

class NYCConfig {
	constructor(settings = {}) {
		this.settings = {
			all: true,
			require: [],
			include: [],
			exclude: [...defaultExclude],
			excludeNodeModules: true,
			...settings
		};
	}

	static fullCoverage(perFile) {
		return new NYCConfig().fullCoverage(perFile);
	}

	static require(...modules) {
		return new NYCConfig().require(...modules);
	}

	static include(...globs) {
		return new NYCConfig().include(...globs);
	}

	static exclude(...globs) {
		return new NYCConfig().exclude(...globs);
	}

	all(enable = false) {
		this.settings.all = enable;

		return this;
	}

	fullCoverage(perFile = true) {
		Object.assign(this.settings, {
			checkCoverage: true,
			perFile,
			lines: 100,
			statements: 100,
			functions: 100,
			branches: 100
		});

		return this;
	}

	excludeNodeModules(exclude = false) {
		this.settings.excludeNodeModules = exclude;

		return this;
	}

	require(...modules) {
		this.settings.require.push(...modules);

		return this;
	}

	include(...globs) {
		this.settings.include.push(...globs);

		return this;
	}

	exclude(...globs) {
		this.settings.exclude.push(...globs);

		return this;
	}
}

module.exports = NYCConfig;
