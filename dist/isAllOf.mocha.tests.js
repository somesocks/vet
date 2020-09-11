"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
var SHOULD_FAIL = [
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
var _isPerson = isAllOf_1.default(isShape_1.default({
    name: isString_1.default,
}), isShape_1.default({
    email: isString_1.default,
}));
var isPerson = _isPerson;
var _validator = isAllOf_1.default(isString_1.default, isNotEmpty_1.default);
var validator = _validator;
var SHOULD_PASS_2 = [
    { input: { name: 'foo', email: 'foo' }, expected: false },
];
var SHOULD_FAIL_2 = [
    { input: { name: 'foo' }, expected: false },
    { input: { email: 'bar' }, expected: false },
];
describe('vet/isAllOf', function () {
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
    var threwNoError = function (validator) { return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        try {
            validator.apply(void 0, args);
            return true;
        }
        catch (e) {
            console.log('assert error', e);
            return false;
        }
    }; };
    var validator2 = threwError(validator.assert);
    SHOULD_FAIL.forEach(function (test) {
        it("assert (" + test.input + ") should fail", function (done) { return done(validator2(test.input) ? null : new Error()); });
    });
    SHOULD_PASS_2.forEach(function (test) {
        it("assert (" + test.input + ") should pass", function (done) { return done(threwNoError(isPerson.assert)(test.input) ? null : new Error()); });
    });
    SHOULD_FAIL_2.forEach(function (test) {
        it("assert (" + test.input + ") should fail", function (done) { return done(threwError(isPerson.assert)(test.input) ? null : new Error()); });
    });
});
// typescript check
var a = {
    name: 'bob',
    email: 'bob@',
};
isPerson.assert(a);
var b = a;
b.name;
b.email;
