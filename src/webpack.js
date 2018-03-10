const path = require('path');
const glob = require('glob');

const BASE_DIR = path.resolve(__dirname, '..');
const SRC_DIR = path.resolve(BASE_DIR, 'src');
const DIST_DIR = path.resolve(BASE_DIR, 'dist');

const EXPORTS = [
	...require('./arrays/webpack.js'),
	...require('./base/webpack.js'),
	...require('./booleans/webpack.js'),
	...require('./dates/webpack.js'),
	...require('./functions/webpack.js'),
	...require('./numbers/webpack.js'),
	...require('./objects/webpack.js'),
	...require('./strings/webpack.js'),
	...require('./utils/webpack.js'),
];

const BUNDLE = {};

BUNDLE.mode = 'production';

BUNDLE.entry = {
	'vet': path.resolve(SRC_DIR, 'index.js'),
};

BUNDLE.output = {
	path: DIST_DIR,
	filename: '[name].js',
	libraryTarget: 'umd',
	globalObject: 'this',
};

BUNDLE.module = {
	rules: [
		{
			test: /.\.js$/,
			loader: 'babel-loader',
			include: BASE_DIR,
			exclude: /(node_modules|bower_components|prebuilt)/,
			query: {
				presets: [
					[ 'es2015', { 'modules': 'commonjs' } ],
				],
				plugins: [ 'transform-runtime' ],
				cacheDirectory: true,
			},
		},
	],
};

BUNDLE.resolve = {
	modules: [ SRC_DIR, BASE_DIR, 'node_modules' ],
	extensions: [ '.*', '.js' ],
};

BUNDLE.plugins = [];

module.exports = [ ...EXPORTS, BUNDLE ];
