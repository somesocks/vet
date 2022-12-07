"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isString_1 = __importDefault(require("../strings/isString"));
var assert_1 = __importDefault(require("./assert"));
var TESTS = [
    { input: undefined, expected: true },
    { input: null, expected: true },
    { input: 0, expected: true },
    { input: false, expected: true },
    { input: true, expected: true },
    { input: {}, expected: true },
    { input: [], expected: true },
    { input: function () { }, expected: true },
    { input: /a/, expected: true },
    { input: '', expected: false },
    { input: 'a string', expected: false },
];
describe('vet/utils/assert', function () {
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
    var validator = threwError((0, assert_1.default)(isString_1.default));
    TESTS.forEach(function (test) {
        it("(".concat(test.input, ")-->(").concat(test.expected, ")"), function (done) { return done(validator(test.input) === test.expected ? null : new Error()); });
    });
    it('immediate mode test', function () {
        (0, assert_1.default)(2 > 1, 'passed');
    });
    it('immediate mode test 2', function () {
        var err;
        try {
            (0, assert_1.default)(1 > 2, 'one is not greater than 2');
        }
        catch (e) {
            err = e;
        }
        (0, assert_1.default)(err != null);
        (0, assert_1.default)(err instanceof Error);
        (0, assert_1.default)(err.message === 'one is not greater than 2');
    });
});
