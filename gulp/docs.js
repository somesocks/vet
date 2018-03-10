
const gulp = require('gulp');

const shell = require('gulp-shell');

const CMD = `(export NODE_PATH=./; find ./src -name '*.js' |sort -t'/' -k2.2 -k2.1 | xargs jsdoc2md --template README.hbs --files ) > README.md`;

gulp.task(
	'docs',
	shell.task(CMD)
);
