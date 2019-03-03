module.exports = {
	parser: 'babel-eslint',
	extends: [
		'esnext'
	],
	rules: {
		'eqeqeq': ["error", "smart"],
		'import/no-commonjs': [ 'off' ],
		'no-console': [ 'warn' ],
		'no-else-return': [ 'off' ],
		'no-empty-function': [ 'warn' ],
		'no-unused-vars': [ 'warn' ],
		'no-var': [ 'off' ],
		'prefer-const': [ 'warn' ],
		'prefer-rest-params': [ 'off' ],
		'prefer-spread': [ 'off' ],
		'require-jsdoc': [ 'warn' ],
	}
};
