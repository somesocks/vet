"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isLessThan_1 = __importDefault(require("./isLessThan"));
var TESTS = [
    { input: Number.MIN_SAFE_INTEGER, expected: true },
    { input: Number.NEGATIVE_INFINITY, expected: true },
    { input: 1, expected: false },
    { input: Number.EPSILON, expected: false },
    { input: Number.MAX_SAFE_INTEGER, expected: false },
    { input: Number.MAX_VALUE, expected: false },
    { input: Number.MIN_VALUE, expected: false },
    { input: Number.POSITIVE_INFINITY, expected: false },
    { input: 0, expected: false },
    { input: Number.NaN, expected: false },
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
describe('vet/numbers/isLessThan', function () {
    TESTS.forEach(function (test) {
        it("(".concat(test.input, ")-->(").concat(test.expected, ")"), function (done) { return done((0, isLessThan_1.default)(0)(test.input) === test.expected ? null : new Error()); });
    });
});
