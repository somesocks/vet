/* eslint-env mocha */

const Vet = require('../');
const { isValidDate } = Vet.Date;

const TESTS = [
	{ input: new Date(), expected: true },

	{ input: new Date(NaN), expected: false },
	{ input: false, expected: false },
	{ input: true, expected: false },
	{ input: (() => {}), expected: false },
	{ input: '', expected: false },
	{ input: 'a string', expected: false },
	{ input: undefined, expected: false },
	{ input: null, expected: false },
	{ input: {}, expected: false },
	{ input: [], expected: false },
	{ input: /a/, expected: false },
];


describe('vet/dates/isValidDate', () => {
	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				isValidDate(test.input) === test.expected ? null : new Error()
			)
		);
	});
});
