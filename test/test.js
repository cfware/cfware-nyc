import test from 'ava';
import {defaultExclude} from 'test-exclude';

import NYCConfig from '..';

const snapshotCleanup = ({settings}) => ({
	...settings,
	exclude: settings.exclude.filter(e => !defaultExclude.includes(e))
});

function booleanArgTest(t) {
	const method = t.title;

	t.true(NYCConfig[method]() instanceof NYCConfig);

	t.deepEqual(NYCConfig[method]().settings.exclude, defaultExclude);

	t.deepEqual(NYCConfig[method](), new NYCConfig()[method]());
	t.snapshot(snapshotCleanup(NYCConfig[method]()), 'no arg');

	t.deepEqual(NYCConfig[method](true), new NYCConfig()[method](true));
	t.snapshot(snapshotCleanup(NYCConfig[method](true)), 'true');

	t.deepEqual(NYCConfig[method](false), new NYCConfig()[method](false));
	t.snapshot(snapshotCleanup(NYCConfig[method](false)), 'false');
}

function stringsArgTest(t, snaps) {
	const method = t.title;

	t.true(NYCConfig[method]() instanceof NYCConfig);

	t.deepEqual(NYCConfig[method]().settings.exclude, defaultExclude);

	t.deepEqual(NYCConfig[method](), new NYCConfig().exclude());
	t.snapshot(snapshotCleanup(NYCConfig[method]()), 'no arg');

	Object.entries(snaps).forEach(([snapName, args]) => {
		t.snapshot(snapshotCleanup(NYCConfig[method](...args)), snapName);

		t.deepEqual(NYCConfig[method](...args), new NYCConfig()[method](...args));
	});
}

test('basics', t => {
	t.is(typeof NYCConfig, 'function');

	const obj = new NYCConfig();
	t.is(obj.settings, obj[Symbol.for('nycrc')]);
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

test('excludeNodeModules', booleanArgTest);
