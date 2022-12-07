




import inspect from 'object-inspect';

import isInstanceOf from './isInstanceOf';

const TESTS = [

	{ input: Promise.resolve(1), expected: true },
	{ input: Promise.reject(1), expected: true },
	{ input: new Promise(() => null), expected: true },

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


describe('vet/objects/isInstanceOf', () => {

	const _validator = isInstanceOf(Promise);
	const validator : typeof _validator = _validator;

	TESTS.forEach((test) => {
		it(
			`validator(${inspect(test.input)}) returns ${test.expected}`,
			(done) => done(
				validator(test.input) === test.expected ? null : new Error()
			)
		);

		it(
			`validator.assert(${inspect(test.input)}) should ${test.expected ? 'pass' : 'fail'}`,
			(done) => {
				let error = false;
				try {
					validator.assert(test.input);
				} catch (e) {
					error = true;
				}

				//no error should be thrown if a expected is expected
				done(!error == test.expected ? null : new Error());	
			}
		);
	});

});


// typescript check
{
	const _isPromise = isInstanceOf(Promise);
	const isPromise : typeof _isPromise = _isPromise;
	let a : any = Promise.resolve(1);
	isPromise.assert(a);
	let b : Promise<any> = a;	 
}