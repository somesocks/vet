import inspect from 'object-inspect';
import isNullOrUndefined from './isNullOrUndefined.js';
const TESTS = [
    { input: null, expected: true },
    { input: undefined, expected: true },
    { input: false, expected: false },
    { input: (() => { }), expected: false },
    { input: 'a string', expected: false },
    { input: {}, expected: false },
    { input: [], expected: false },
    { input: /a/, expected: false },
    { input: true, expected: false },
    { input: '', expected: false },
];
describe('vet/isNullOrUndefined', () => {
    const _validator = isNullOrUndefined;
    const validator = _validator;
    TESTS.forEach((test) => {
        it(`validator(${inspect(test.input)}) returns ${test.expected}`, (done) => done(validator(test.input) === test.expected ? null : new Error()));
        it(`validator.assert(${inspect(test.input)}) should ${test.expected ? 'pass' : 'fail'}`, (done) => {
            let error = false;
            try {
                validator.assert(test.input);
            }
            catch (e) {
                error = true;
            }
            //no error should be thrown if a expected is expected
            done(!error == test.expected ? null : new Error());
        });
    });
});
