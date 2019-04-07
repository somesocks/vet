/* eslint-env mocha */

const Vet = require('./');
const { isNoneOf } = Vet;

const TESTS = [
	{ input: false, expected: true },
	{ input: (() => {}), expected: true },
	{ input: 'a string', expected: true },
	{ input: {}, expected: true },
	{ input: [], expected: true },
	{ input: /a/, expected: true },
	{ input: undefined, expected: true },
	{ input: null, expected: true },

	{ input: true, expected: false },
	{ input: '', expected: false },
];


describe('vet/isNoneOf', () => {

	const validator = isNoneOf(true, '');

	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				validator(test.input) === test.expected ? null : new Error()
			)
		);
	});

	const validator2 = isNoneOf((val) => val === true, (val) => val === '');

	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				validator2(test.input) === test.expected ? null : new Error()
			)
		);
	});

});
