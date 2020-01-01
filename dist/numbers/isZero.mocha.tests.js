"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isZero_1 = __importDefault(require("./isZero"));
var TESTS = [
    { input: 0, expected: true },
    { input: 1, expected: false },
    { input: Number.EPSILON, expected: false },
    { input: Number.MAX_SAFE_INTEGER, expected: false },
    { input: Number.MAX_VALUE, expected: false },
    { input: Number.MIN_VALUE, expected: false },
    { input: Number.POSITIVE_INFINITY, expected: false },
    { input: Number.NaN, expected: false },
    { input: Number.MIN_SAFE_INTEGER, expected: false },
    { input: Number.NEGATIVE_INFINITY, expected: false },
    { input: '', expected: false },
    { input: 'a string', expected: false },
    { input: undefined, expected: false },
    { input: null, expected: false },
    { input: false, expected: false },
    { input: true, expected: false },
    { input: {}, expected: false },
    { input: [], expected: false },
    { input: function () { }, expected: false },
    { input: /a/, expected: false },
];
describe('vet/numbers/isZero', function () {
    TESTS.forEach(function (test) {
        it("(" + test.input + ")-->(" + test.expected + ")", function (done) { return done(isZero_1.default(test.input) === test.expected ? null : new Error()); });
    });
});
