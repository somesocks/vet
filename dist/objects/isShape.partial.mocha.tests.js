import inspect from 'object-inspect';
import isString from '../strings/isString.js';
import isNumber from '../numbers/isNumber.js';
import isBoolean from '../booleans/isBoolean.js';
import optional from '../optional.js';
import isAllOf from '../isAllOf.js';
import isOneOf from '../isOneOf.js';
import isShape from './isShape.js';
import isArrayOf from '../arrays/isArrayOf.js';
import isDate from '../dates/isDate.js';
const TESTS = [
    {
        input: {
            name: 'Test User',
            age: 10,
            verified: true,
        },
        expected: true,
    },
    {
        input: {
            name: 'Test User',
            age: 10,
            verified: true,
            optional: true,
        },
        expected: true,
    },
    {
        input: {
            name: 'Test User',
            age: 10,
            verified: true,
            optional: false,
        },
        expected: true,
    },
    {
        input: {
            name: 'Test User',
            age: 10,
            verified: true,
            optional: null,
        },
        expected: true,
    },
    {
        input: {
            name: 'Test User',
            age: 10,
            verified: true,
            optional: undefined,
        },
        expected: true,
    },
    {
        input: {
            name: 'Test User',
            age: 10,
            verified: true,
            extras: {},
        },
        expected: true,
    },
    {
        input: {
            name: 'Test User',
            age: 10,
        },
        expected: true,
    },
    {
        input: {
            name: 1,
            age: 10,
            verified: true,
        },
        expected: false,
    },
    { input: '', expected: false },
    { input: 'a string', expected: false },
    { input: {}, expected: true },
    { input: [], expected: true },
    { input: () => { }, expected: true },
    { input: /a/, expected: true },
    { input: undefined, expected: false },
    { input: null, expected: false },
    { input: 0, expected: false },
    { input: false, expected: false },
    { input: true, expected: false },
];
describe('vet/objects/isShape.partial', () => {
    const _validator = isShape.partial({
        name: isString,
        age: isAllOf(isNumber, function isOverNine(val) { return val > 9; }),
        verified: isBoolean,
        optional: optional(isBoolean),
        optional2: optional(isOneOf(isString, isNumber)),
    });
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
// compile time check for isShape
const _isPerson = isShape({
    name: isString,
    age: isNumber,
    contact: {
        email: isString,
        phone: isString,
    },
});
const isPerson = _isPerson;
let a = {
    name: 'bob',
    age: 20,
    contact: {
        email: '',
        phone: '',
    },
};
isPerson.assert(a);
a.age = 2;
/** Trigger a compiler error when a value is _not_ an exact type. */
const exactType = (() => { });
const _isA = isShape.partial({
    name: isString,
    contact: {
        email: optional(isString),
        phoneNumber: optional(isString),
    },
});
exactType({}, {});
const _isB = isShape.partial({
    name: isString,
    contact: isShape({
        email: optional(isString),
        phoneNumber: optional(isString),
    }),
});
exactType({}, {});
const _isC = isShape.partial({
    name: isString,
    contact: isArrayOf(isShape({
        email: optional(isString),
        phoneNumber: optional(isString),
    })),
});
exactType({}, {});
const _isD = isShape.partial({
    name: isString,
    DOB: isDate,
});
exactType({}, {});
