const path = require('path');
const glob = require('glob');

const BASE_DIR = path.resolve(__dirname, '../..');
const SRC_DIR = path.resolve(BASE_DIR, 'src');
const DIST_DIR = path.resolve(BASE_DIR, 'dist/utils');

const EXPORTS = {};

EXPORTS.entry = glob
	.sync(`${__dirname}/**/*.export.js`)
	.reduce(
		(obj, filePath) => {
			obj = obj || {};
			const target = path.basename(filePath, '.export.js');
			obj[target] = filePath;
			return obj;
		},
		{}
	);

EXPORTS.output = {
	path: DIST_DIR,
	filename: '[name].js',
	libraryTarget: 'umd',
	globalObject: 'this',
};

EXPORTS.module = {
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

EXPORTS.resolve = {
	modules: [ SRC_DIR, BASE_DIR, 'node_modules' ],
	extensions: [ '.*', '.js' ],
};

EXPORTS.plugins = [];

module.exports = [ EXPORTS ];
