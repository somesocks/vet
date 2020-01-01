"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isNot_1 = __importDefault(require("./isNot"));
var isNumber_1 = __importDefault(require("./numbers/isNumber"));
var TESTS = [
    { input: '', expected: true },
    { input: 'a string', expected: true },
    { input: undefined, expected: true },
    { input: null, expected: true },
    { input: false, expected: true },
    { input: true, expected: true },
    { input: {}, expected: true },
    { input: [], expected: true },
    { input: function () { }, expected: true },
    { input: /a/, expected: true },
    { input: 0, expected: false },
    { input: 1, expected: false },
    { input: Number.NaN, expected: false },
    { input: Number.EPSILON, expected: false },
    { input: Number.MAX_SAFE_INTEGER, expected: false },
    { input: Number.MIN_SAFE_INTEGER, expected: false },
    { input: Number.MAX_VALUE, expected: false },
    { input: Number.MIN_VALUE, expected: false },
    { input: Number.NEGATIVE_INFINITY, expected: false },
    { input: Number.POSITIVE_INFINITY, expected: false },
];
describe('vet/isNot', function () {
    TESTS.forEach(function (test) {
        it("(" + test.input + ")-->(" + test.expected + ")", function (done) { return done(isNot_1.default(isNumber_1.default)(test.input) === test.expected ? null : new Error()); });
    });
});
