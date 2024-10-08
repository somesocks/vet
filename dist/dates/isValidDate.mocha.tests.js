import inspect from 'object-inspect';
import isValidDate from './isValidDate.js';
const TESTS = [
    { input: new Date(), expected: true },
    { input: new Date(NaN), expected: false },
    { input: false, expected: false },
    { input: true, expected: false },
    { input: (() => { }), expected: false },
    { input: '', expected: false },
    { input: 'a string', expected: false },
    { input: undefined, expected: false },
    { input: null, expected: false },
    { input: {}, expected: false },
    { input: [], expected: false },
    { input: /a/, expected: false },
];
describe('vet/dates/isValidDate', () => {
    const _validator = isValidDate;
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
