"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var object_inspect_1 = __importDefault(require("object-inspect"));
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
            verified: true,
            optional: null,
        },
        expected: false,
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
describe('vet/objects/isShape', function () {
    var _validator = (0, isShape_1.default)({
        name: isString_1.default,
        age: (0, isAllOf_1.default)(isNumber_1.default, function isOverNine(val) { return val > 9; }),
        verified: isBoolean_1.default,
        optional: (0, optional_1.default)(isBoolean_1.default),
        optional2: (0, optional_1.default)((0, isOneOf_1.default)(isString_1.default, isNumber_1.default)),
    });
    var validator = _validator;
    TESTS.forEach(function (test) {
        it("validator(".concat((0, object_inspect_1.default)(test.input), ") returns ").concat(test.expected), function (done) { return done(validator(test.input) === test.expected ? null : new Error()); });
        it("validator.assert(".concat((0, object_inspect_1.default)(test.input), ") should ").concat(test.expected ? 'pass' : 'fail'), function (done) {
            var error = false;
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
{
    // compile time checks for isShape
    var _isPerson = (0, isShape_1.default)({
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
    var _isA = (0, isShape_1.default)({
        name: isString_1.default,
        contact: {
            email: (0, optional_1.default)(isString_1.default),
            phoneNumber: (0, optional_1.default)(isString_1.default),
        },
    });
    exactType({}, {});
    var _isB = (0, isShape_1.default)({
        name: isString_1.default,
        contact: (0, isShape_1.default)({
            email: (0, optional_1.default)(isString_1.default),
            phoneNumber: (0, optional_1.default)(isString_1.default),
        }),
    });
    exactType({}, {});
    var _isC = (0, isShape_1.default)({
        name: isString_1.default,
        contact: (0, isArrayOf_1.default)((0, isShape_1.default)({
            email: (0, optional_1.default)(isString_1.default),
            phoneNumber: (0, optional_1.default)(isString_1.default),
        })),
    });
    exactType({}, {});
}
