"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var optional_1 = __importDefault(require("./optional"));
var isString_1 = __importDefault(require("./strings/isString"));
var TESTS = [
    { input: 'a string', expected: true },
    { input: '', expected: true },
    { input: undefined, expected: true },
    { input: null, expected: true },
    { input: true, expected: false },
    { input: false, expected: false },
    { input: (function () { }), expected: false },
    { input: {}, expected: false },
    { input: [], expected: false },
    { input: /a/, expected: false },
];
var SHOULD_PASS = [
    { input: 'a string', expected: true },
    { input: '', expected: true },
    { input: undefined, expected: true },
    { input: null, expected: true },
];
var SHOULD_FAIL = [
    { input: true, expected: false },
    { input: false, expected: false },
    { input: (function () { }), expected: false },
    { input: {}, expected: false },
    { input: [], expected: false },
    { input: /a/, expected: false },
];
var _validator = optional_1.default(function isString(val) { return typeof val === 'string' || val instanceof String; });
var validator = _validator;
describe('vet/optional', function () {
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
    SHOULD_PASS.forEach(function (test) {
        it("assert (" + test.input + ") should pass", function (done) { return done(threwNoError(validator.assert)(test.input) ? null : new Error()); });
    });
    SHOULD_FAIL.forEach(function (test) {
        it("assert (" + test.input + ") should fail", function (done) { return done(threwError(validator.assert)(test.input) ? null : new Error()); });
    });
});
// typescript check
var a = optional_1.default(isString_1.default);
var b = optional_1.default(function (val) { return val > 0; });
a('foo');
b('foo');
