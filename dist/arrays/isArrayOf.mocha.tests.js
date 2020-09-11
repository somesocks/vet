"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isString_1 = __importDefault(require("../strings/isString"));
var isArrayOf_1 = __importDefault(require("./isArrayOf"));
var TESTS = [
    { input: ['a string'], expected: true },
    { input: [''], expected: true },
    { input: [true], expected: true },
    { input: [false], expected: true },
    { input: [(function () { })], expected: true },
    { input: [{}], expected: true },
    { input: [/a/], expected: true },
    { input: [1, 2, 3], expected: true },
    { input: [], expected: true },
    { input: [1, 2, null], expected: false },
    { input: [undefined], expected: false },
    { input: [null], expected: false },
    { input: 'a string', expected: false },
    { input: '', expected: false },
    { input: undefined, expected: false },
    { input: null, expected: false },
    { input: true, expected: false },
    { input: false, expected: false },
    { input: (function () { }), expected: false },
    { input: {}, expected: false },
    { input: /a/, expected: false },
];
describe('vet/arrays/isArrayOf', function () {
    var validator = isArrayOf_1.default((function (val) { return val != null; }));
    TESTS.forEach(function (test) {
        it("(" + test.input + ")-->(" + test.expected + ")", function (done) { return done(validator(test.input) === test.expected ? null : new Error()); });
    });
});
//typescript checks
var _isStringArray = isArrayOf_1.default(isString_1.default);
var isStringArray = _isStringArray;
var a = ['foo'];
isStringArray.assert(a);
a[0] = 'bar';
