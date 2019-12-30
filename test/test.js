/* eslint no-await-in-loop: 0 */

import test from 'ava';

import NYCConfig from '..';

const {defaultExclude} = NYCConfig;

const snapshotCleanup = settings => ({
	...settings,
	exclude: settings.exclude.filter(e => !defaultExclude.includes(e))
});

async function booleanArgTest(t) {
	const method = t.title;

	t.true(NYCConfig[method]() instanceof NYCConfig);

	t.deepEqual((await NYCConfig[method]()).exclude, defaultExclude);

	t.deepEqual(await NYCConfig[method](), await (new NYCConfig()[method]()));
	t.snapshot(snapshotCleanup(await NYCConfig[method]()), 'no arg');

	t.deepEqual(await NYCConfig[method](true), await (new NYCConfig()[method](true)));
	t.snapshot(snapshotCleanup(await NYCConfig[method](true)), 'true');

	t.deepEqual(await NYCConfig[method](false), await (new NYCConfig()[method](false)));
	t.snapshot(snapshotCleanup(await NYCConfig[method](false)), 'false');
}

async function stringsArgTest(t, snaps) {
	const method = t.title;

	t.true(NYCConfig[method]() instanceof NYCConfig);

	t.deepEqual((await NYCConfig[method]()).exclude, defaultExclude);

	t.deepEqual(await NYCConfig[method](), await new NYCConfig()[method]());
	t.snapshot(snapshotCleanup(await NYCConfig[method]()), 'no arg');

	for (const [snapName, args] of Object.entries(snaps)) {
		const byStatic = await NYCConfig[method](...args);
		t.snapshot(snapshotCleanup(byStatic), snapName);

		const incremental = new NYCConfig();
		args.forEach(arg => {
			t.is(incremental[method](arg), incremental);
		});

		t.deepEqual(byStatic, await incremental);
		t.deepEqual(byStatic, await new NYCConfig()[method](...args));
	}
}

test('basics', async t => {
	t.is(typeof NYCConfig, 'function');

	const obj = new NYCConfig({exclude: []});
	t.is(await obj, obj[Symbol.for('nycrc')]);
	t.deepEqual((await obj).exclude, []);
});

test('all', booleanArgTest);

test('fullCoverage', booleanArgTest);

test('require', stringsArgTest, {
	'esm and babel': ['esm', '@babel/register']
});

test('include', stringsArgTest, {
	'file1.js and file2.js': ['file1.js', 'file2.js']
});

test('exclude', stringsArgTest, {
	'file1.js and file2.js': ['file1.js', 'file2.js']
});

test('reporter', stringsArgTest, {
	text: ['text'],
	'text and html': ['text', 'html']
});

test('excludeNodeModules', booleanArgTest);
