import isBlob from './isBlob';

const TESTS = [
	{ input: new Blob(), expected: true },

	{ input: {}, expected: false },
	{ input: [], expected: false },
	{ input: () => {}, expected: false },
	{ input: /a/, expected: false },
	{ input: '', expected: false },
	{ input: 'a string', expected: false },
	{ input: undefined, expected: false },
	{ input: null, expected: false },
	{ input: 0, expected: false },
	{ input: false, expected: false },
	{ input: true, expected: false },
];

describe('vet/objects/isBlob', () => {
	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				isBlob(test.input) === test.expected ? null : new Error()
			)
		);
	});
});
