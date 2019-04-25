import test from 'ava';
import {defaultExclude} from 'test-exclude';

import NYCConfig from '..';

test('export', t => {
	t.is(typeof NYCConfig, 'function');
});

test('fullCoverage', t => {
	t.is(typeof NYCConfig.fullCoverage, 'function');
	t.true(NYCConfig.fullCoverage() instanceof NYCConfig);

	t.deepEqual(NYCConfig.fullCoverage().settings.exclude, defaultExclude);

	t.snapshot({
		...NYCConfig.fullCoverage().settings,
		exclude: []
	}, 'no arg');

	t.snapshot({
		...NYCConfig.fullCoverage(true).settings,
		exclude: []
	}, 'true');

	t.snapshot({
		...NYCConfig.fullCoverage(false).settings,
		exclude: []
	}, 'false');

	t.deepEqual(NYCConfig.fullCoverage(), new NYCConfig().fullCoverage());
	t.deepEqual(NYCConfig.fullCoverage(true), new NYCConfig().fullCoverage(true));
	t.deepEqual(NYCConfig.fullCoverage(false), new NYCConfig().fullCoverage(false));
});

test('require', t => {
	t.is(typeof NYCConfig.require, 'function');
	t.true(NYCConfig.require() instanceof NYCConfig);

	t.deepEqual(NYCConfig.require().settings.exclude, defaultExclude);

	t.snapshot({
		...NYCConfig.require().settings,
		exclude: []
	}, 'no arg');

	t.snapshot({
		...NYCConfig.require('esm', '@babel/register').settings,
		exclude: []
	}, 'esm and babel');

	t.deepEqual(NYCConfig.require(), new NYCConfig().require());
	t.deepEqual(NYCConfig.require('esm', '@babel/register'), new NYCConfig().require('esm', '@babel/register'));
});

test('include', t => {
	t.is(typeof NYCConfig.include, 'function');
	t.true(NYCConfig.include() instanceof NYCConfig);

	t.deepEqual(NYCConfig.include().settings.exclude, defaultExclude);

	t.snapshot({
		...NYCConfig.include().settings,
		exclude: []
	}, 'no arg');

	t.snapshot({
		...NYCConfig.include('file1.js', 'file2.js').settings,
		exclude: []
	}, 'esm and babel');

	t.deepEqual(NYCConfig.include(), new NYCConfig().include());
	t.deepEqual(NYCConfig.include('file1.js', 'file2.js'), new NYCConfig().include('file1.js', 'file2.js'));
});

test('exclude', t => {
	t.is(typeof NYCConfig.exclude, 'function');
	t.true(NYCConfig.exclude() instanceof NYCConfig);

	t.deepEqual(NYCConfig.exclude().settings.exclude, defaultExclude);

	t.snapshot({
		...NYCConfig.exclude().settings,
		exclude: []
	}, 'no arg');

	const {settings} = NYCConfig.exclude('file1.js', 'file2.js');
	settings.exclude = settings.exclude.filter(e => !defaultExclude.includes(e));
	t.snapshot(settings, 'file1.js and file2.js');

	t.deepEqual(NYCConfig.exclude(), new NYCConfig().exclude());
	t.deepEqual(NYCConfig.exclude('file1.js', 'file2.js'), new NYCConfig().exclude('file1.js', 'file2.js'));
});

test('all', t => {
	const obj = new NYCConfig();

	t.deepEqual(obj.settings.exclude, defaultExclude);

	t.true(obj.settings.all);

	obj.all();
	t.false(obj.settings.all);

	obj.all(true);
	t.true(obj.settings.all);

	obj.all(false);
	t.false(obj.settings.all);

	obj.all(true);
	t.deepEqual(obj, new NYCConfig());
});

test('excludeNodeModules', t => {
	const obj = new NYCConfig();

	t.true(obj.settings.excludeNodeModules);

	obj.excludeNodeModules();
	t.false(obj.settings.excludeNodeModules);

	obj.excludeNodeModules(true);
	t.true(obj.settings.excludeNodeModules);

	obj.excludeNodeModules(false);
	t.false(obj.settings.excludeNodeModules);

	obj.excludeNodeModules(true);
	t.deepEqual(obj, new NYCConfig());
});
