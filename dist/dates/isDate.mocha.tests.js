/* eslint-env mocha */

const Vet = require('../');
const { isDate } = Vet.Date;

const TESTS = [
	{ input: new Date(), expected: true },

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


describe('vet/dates/isDate', () => {
	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				isDate(test.input) === test.expected ? null : new Error()
			)
		);
	});
});
