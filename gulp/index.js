
require('gulp-help')(
	require('gulp'),
	{ hideEmpty: true, hideDepsMessage: true }
);

require('./build');
require('./clean');
require('./docs');
require('./test');
