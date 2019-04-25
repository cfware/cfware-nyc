import test from 'ava';
import {defaultExclude} from 'test-exclude';

import index from '..';

test('export', t => {
	t.is(typeof index, 'object');
	t.snapshot(Object.keys(index).sort(), 'keys');
});

test('esm', t => {
	t.snapshot(index.esm);
});

test('fullCoverage', t => {
	t.snapshot(index.fullCoverage(), 'no arg');
	t.snapshot(index.fullCoverage(true), 'true arg');
	t.snapshot(index.fullCoverage(false), 'false arg');
});

test('exclude', t => {
	const file12 = ['file1.js', 'file2.js'];
	t.deepEqual(index.exclude(), {
		exclude: defaultExclude
	});

	t.deepEqual(index.exclude([]), {
		exclude: defaultExclude
	});

	t.deepEqual(index.exclude(...file12), {
		exclude: [
			...defaultExclude,
			...file12
		]
	});

	t.deepEqual(index.exclude(file12), {
		exclude: [
			...defaultExclude,
			...file12
		]
	});

	t.deepEqual(index.exclude('file0.js', file12), {
		exclude: [
			...defaultExclude,
			'file0.js',
			...file12
		]
	});
});
