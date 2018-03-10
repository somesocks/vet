const gulp = require('gulp');
const shell = require('gulp-shell');

gulp.task(
	'build',
	'build vet',
	[ 'clean', 'docs' ],
	shell.task('webpack --config ./src/webpack.js')
);
