"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var object_inspect_1 = __importDefault(require("object-inspect"));
var isString_1 = __importDefault(require("../strings/isString"));
var isNumber_1 = __importDefault(require("../numbers/isNumber"));
var isBoolean_1 = __importDefault(require("../booleans/isBoolean"));
var isShape_1 = __importDefault(require("./isShape"));
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
            extras: {},
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
describe('vet/objects/isShape.exact', function () {
    var _validator = isShape_1.default.exact({
        name: isString_1.default,
        age: isNumber_1.default,
        verified: isBoolean_1.default,
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
