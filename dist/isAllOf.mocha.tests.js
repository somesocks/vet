"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var object_inspect_1 = __importDefault(require("object-inspect"));
var isAllOf_1 = __importDefault(require("./isAllOf"));
var isShape_1 = __importDefault(require("./objects/isShape"));
var isString_1 = __importDefault(require("./strings/isString"));
var isNotEmpty_1 = __importDefault(require("./strings/isNotEmpty"));
var TESTS = [
    { input: 'a string', expected: true },
    { input: true, expected: false },
    { input: '', expected: false },
    { input: false, expected: false },
    { input: (function () { }), expected: false },
    { input: {}, expected: false },
    { input: [], expected: false },
    { input: /a/, expected: false },
    { input: undefined, expected: false },
    { input: null, expected: false },
];
describe('vet/isAllOf 1', function () {
    var _validator = (0, isAllOf_1.default)(isString_1.default, isNotEmpty_1.default);
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
var TESTS_2 = [
    { input: { name: 'foo', email: 'foo' }, expected: true },
    { input: { name: 'foo' }, expected: false },
    { input: { email: 'bar' }, expected: false },
];
describe('vet/isAllOf 2', function () {
    var _validator = (0, isAllOf_1.default)((0, isShape_1.default)({
        name: isString_1.default,
    }), (0, isShape_1.default)({
        email: isString_1.default,
    }));
    var validator = _validator;
    TESTS_2.forEach(function (test) {
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
