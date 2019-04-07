/* eslint-env mocha */

const Vet = require('./');
const { isOneOf } = Vet;

const TESTS = [
	{ input: true, expected: true },
	{ input: '', expected: true },

	{ input: false, expected: false },
	{ input: (() => {}), expected: false },
	{ input: 'a string', expected: false },
	{ input: {}, expected: false },
	{ input: [], expected: false },
	{ input: /a/, expected: false },
	{ input: undefined, expected: false },
	{ input: null, expected: false },
];


describe('vet/isOneOf', () => {

	const validator = isOneOf(true, '');

	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				validator(test.input) === test.expected ? null : new Error()
			)
		);
	});

	const validator2 = isOneOf((val) => val === true, (val) => val === '');

	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				validator2(test.input) === test.expected ? null : new Error()
			)
		);
	});


});
