
const gulp = require('gulp');

const shell = require('gulp-shell');

const ARGS = process.argv
	.slice(3)
	.join(' ');

const CMD = [
	`export NODE_PATH=./;`,
	`find ./src -name '*.tests.js'`,
	`| xargs mocha --timeout 120000 ${ARGS};`,
].join(' ');

gulp.task(
	'test',
	'run the test cases',
	shell.task(CMD)
);
