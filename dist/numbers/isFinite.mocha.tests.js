"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isFinite_1 = __importDefault(require("./isFinite"));
var TESTS = [
    { input: 1, expected: true },
    { input: Number.EPSILON, expected: true },
    { input: Number.MAX_SAFE_INTEGER, expected: true },
    { input: Number.MAX_VALUE, expected: true },
    { input: Number.MIN_VALUE, expected: true },
    { input: 0, expected: true },
    { input: Number.MIN_SAFE_INTEGER, expected: true },
    { input: Number.NaN, expected: false },
    { input: Number.POSITIVE_INFINITY, expected: false },
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
describe('vet/numbers/isFinite', function () {
    TESTS.forEach(function (test) {
        it("(" + test.input + ")-->(" + test.expected + ")", function (done) { return done(isFinite_1.default(test.input) === test.expected ? null : new Error()); });
    });
});
