const gulp = require('gulp');
const shell = require('gulp-shell');

gulp.task(
	'clean',
	'clean vet',
	shell.task('rm -rf ./dist')
);
