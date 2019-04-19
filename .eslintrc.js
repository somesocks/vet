module.exports = {
	parser: 'babel-eslint',
	plugins: [
		'eslint-plugin-babel',
		'eslint-plugin-node',
		'eslint-plugin-es5',
	],
	extends: [
		'eslint-config-esnext',
		'plugin:es5/no-es2015',
		'plugin:es5/no-es2016'
	],
	rules: {
		'eqeqeq': ["error", "smart"],
		'import/no-commonjs': [ 'off' ],
		'no-console': [ 'warn' ],
		'no-else-return': [ 'off' ],
		'no-empty-function': [ 'warn' ],
		'no-invalid-this': [ 'warn' ],
		'no-unused-vars': [ 'warn' ],
		'no-redeclare': [ 'warn' ],
		'no-var': [ 'off' ],
		'object-shorthand': [ 'warn' ],
		'prefer-arrow-callback': [ 'off' ],
		'prefer-const': [ 'warn' ],
		'prefer-rest-params': [ 'off' ],
		'prefer-spread': [ 'off' ],
		'require-jsdoc': [ 'off' ],
	}
};
