module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: require.resolve('./tsconfig.json'),
	},
	plugins: [
		'@typescript-eslint/eslint-plugin',
	],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	rules: {
		// 'eqeqeq': ["error", "smart"],
		// 'import/no-commonjs': [ 'off' ],
		// 'no-console': [ 'warn' ],
		// 'no-else-return': [ 'off' ],
		// 'no-empty-function': [ 'warn' ],
		// 'no-invalid-this': [ 'warn' ],
		// 'no-unused-vars': [ 'warn' ],
		// 'no-redeclare': [ 'warn' ],
		// 'no-var': [ 'off' ],
		// 'object-shorthand': [ 'warn' ],
		// 'prefer-arrow-callback': [ 'off' ],
		'prefer-const': [ 'warn' ],
		'prefer-rest-params': [ 'off' ],
		// 'prefer-spread': [ 'off' ],
		// 'require-jsdoc': [ 'off' ],
		'@typescript-eslint/member-delimiter-style' : [
			'error',
			{
			    "multiline": {
			        "delimiter": "comma",
			        "requireLast": true
			    },
			    "singleline": {
			        "delimiter": "comma",
			        "requireLast": false
			    }
			}
		],
		'@typescript-eslint/type-annotation-spacing' : [ 'error', { before: true, after: true } ],
		'@typescript-eslint/no-empty-function' : [ 'warn' ],
	}
};
