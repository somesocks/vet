"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isString_1 = __importDefault(require("../strings/isString"));
var returns_1 = __importDefault(require("./returns"));
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
describe('vet/utils/returns', function () {
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
            return true;
        }
    }; };
    var PASS = function (a) { return a; };
    var wrapper = returns_1.default(PASS, isString_1.default);
    var validator = threwError(wrapper);
    TESTS.forEach(function (test) {
        it("(" + test.input + ")-->(" + test.expected + ")", function (done) { return done(validator(test.input) === test.expected ? null : new Error()); });
    });
});
