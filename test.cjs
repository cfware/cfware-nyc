/* eslint no-await-in-loop: 0 */
'use strict';
const t = require('libtap');

const NYCConfig = require('.');

const {defaultExclude} = NYCConfig;

const snapshotCleanup = settings => ({
	...settings,
	exclude: settings.exclude.filter(pattern => !defaultExclude.includes(pattern))
});

async function booleanValueTest(t) {
	const method = t.name;

	t.type(NYCConfig[method](), NYCConfig);

	t.same((await NYCConfig[method]()).exclude, defaultExclude);

	t.same(await NYCConfig[method](), await (new NYCConfig()[method]()));
	t.matchSnapshot(snapshotCleanup(await NYCConfig[method]()), 'no arg');

	t.same(await NYCConfig[method](true), await (new NYCConfig()[method](true)));
	t.matchSnapshot(snapshotCleanup(await NYCConfig[method](true)), 'true');

	t.same(await NYCConfig[method](false), await (new NYCConfig()[method](false)));
	t.matchSnapshot(snapshotCleanup(await NYCConfig[method](false)), 'false');
}

async function stringValuesTest(t, snaps) {
	const method = t.name;

	t.type(NYCConfig[method](), NYCConfig);

	t.same((await NYCConfig[method]()).exclude, defaultExclude);

	t.same(await NYCConfig[method](), await new NYCConfig()[method]());
	t.matchSnapshot(snapshotCleanup(await NYCConfig[method]()), 'no arg');

	for (const [snapName, values] of Object.entries(snaps)) {
		const byStatic = await NYCConfig[method](...values);
		t.matchSnapshot(snapshotCleanup(byStatic), snapName);

		const incremental = new NYCConfig();
		for (const value of values) {
			t.equal(incremental[method](value), incremental);
		}

		t.same(byStatic, await incremental);
		t.same(byStatic, await new NYCConfig()[method](...values));
	}
}

const test = (name, helper, ...args) => t.test(name, t => helper(t, ...args));

t.test('basics', async t => {
	t.type(NYCConfig, 'function');

	const object = new NYCConfig({exclude: []});
	t.equal(await object, object[Symbol.for('nycrc')]);
	t.same((await object).exclude, []);
});

test('all', booleanValueTest);

test('fullCoverage', booleanValueTest);

test('require', stringValuesTest, {
	'esm and babel': ['esm', '@babel/register']
});

test('include', stringValuesTest, {
	'file1.js and file2.js': ['file1.js', 'file2.js']
});

test('exclude', stringValuesTest, {
	'file1.js and file2.js': ['file1.js', 'file2.js']
});

test('reporter', stringValuesTest, {
	text: ['text'],
	'text and html': ['text', 'html']
});

test('excludeNodeModules', booleanValueTest);
