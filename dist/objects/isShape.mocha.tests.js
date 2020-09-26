"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isString_1 = __importDefault(require("../strings/isString"));
var isNumber_1 = __importDefault(require("../numbers/isNumber"));
var isBoolean_1 = __importDefault(require("../booleans/isBoolean"));
var optional_1 = __importDefault(require("../optional"));
var isAllOf_1 = __importDefault(require("../isAllOf"));
var isOneOf_1 = __importDefault(require("../isOneOf"));
var isShape_1 = __importDefault(require("./isShape"));
var isArrayOf_1 = __importDefault(require("../arrays/isArrayOf"));
var TESTS = [
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
        expected: false,
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
    { input: {}, expected: false },
    { input: [], expected: false },
    { input: function () { }, expected: false },
    { input: /a/, expected: false },
    { input: undefined, expected: false },
    { input: null, expected: false },
    { input: 0, expected: false },
    { input: false, expected: false },
    { input: true, expected: false },
];
var FAIL = [
    {
        input: {
            name: 'Test User',
            age: 10,
        },
        expected: false,
    },
    {
        input: {
            name: 1,
            age: 10,
            verified: true,
        },
        expected: false,
    },
    {
        input: {
            name: 'Test User',
            age: 9,
            verified: true,
            extras: {},
        },
        expected: false,
    },
    { input: '', expected: false },
    { input: 'a string', expected: false },
    { input: {}, expected: false },
    { input: [], expected: false },
    { input: function () { }, expected: false },
    { input: /a/, expected: false },
    { input: undefined, expected: false },
    { input: null, expected: false },
    { input: 0, expected: false },
    { input: false, expected: false },
    { input: true, expected: false },
];
var _validator = isShape_1.default({
    name: isString_1.default,
    age: isAllOf_1.default(isNumber_1.default, function isOverNine(val) { return val > 9; }),
    verified: isBoolean_1.default,
    optional: optional_1.default(isBoolean_1.default),
    optional2: optional_1.default(isOneOf_1.default(isString_1.default, isNumber_1.default)),
});
var validator = _validator;
describe('vet/objects/isShape', function () {
    // console.log('validator schema', validator.schema);
    TESTS.forEach(function (test) {
        it("(" + test.input + ")-->(" + test.expected + ")", function (done) { return done(validator(test.input) === test.expected ? null : new Error()); });
    });
    var threwError = function (validator) { return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        try {
            validator.apply(void 0, args);
            return false;
        }
        catch (e) {
            console.log('assert error', e);
            return true;
        }
    }; };
    var validator2 = threwError(validator.assert);
    FAIL.forEach(function (test) {
        it("assert (" + test.input + ") should fail", function (done) { return done(validator2(test.input) ? null : new Error()); });
    });
});
// compile time check for isShape
var _isPerson = isShape_1.default({
    name: isString_1.default,
    age: isNumber_1.default,
    contact: {
        email: isString_1.default,
        phone: isString_1.default,
    },
});
var isPerson = _isPerson;
var a = {
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
var exactType = (function () { });
var _isA = isShape_1.default({
    name: isString_1.default,
    contact: {
        email: optional_1.default(isString_1.default),
        phoneNumber: optional_1.default(isString_1.default),
    },
});
exactType({}, {});
var _isB = isShape_1.default({
    name: isString_1.default,
    contact: isShape_1.default({
        email: optional_1.default(isString_1.default),
        phoneNumber: optional_1.default(isString_1.default),
    }),
});
exactType({}, {});
var _isC = isShape_1.default({
    name: isString_1.default,
    contact: isArrayOf_1.default(isShape_1.default({
        email: optional_1.default(isString_1.default),
        phoneNumber: optional_1.default(isString_1.default),
    })),
});
exactType({}, {});
