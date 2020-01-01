"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isObjectOf_1 = __importDefault(require("./isObjectOf"));
var TESTS = [
    { input: { a: 'a string' }, expected: true },
    { input: { a: '' }, expected: true },
    { input: { a: true }, expected: true },
    { input: { a: false }, expected: true },
    { input: { a: (function () { }) }, expected: true },
    { input: { a: {} }, expected: true },
    { input: { a: /a/ }, expected: true },
    { input: { a: 1, b: 2, c: 3 }, expected: true },
    { input: {}, expected: true },
    { input: [], expected: true },
    { input: [1, 2, 3], expected: true },
    { input: (function () { }), expected: true },
    { input: /a/, expected: true },
    { input: { a: 1, b: 2, c: null }, expected: false },
    { input: { a: undefined }, expected: false },
    { input: { a: null }, expected: false },
    { input: 'a string', expected: false },
    { input: '', expected: false },
    { input: undefined, expected: false },
    { input: null, expected: false },
    { input: true, expected: false },
    { input: false, expected: false },
];
describe('vet/objects/isObjectOf', function () {
    var validator = isObjectOf_1.default(function (val) { return val != null; });
    TESTS.forEach(function (test) {
        it("(" + test.input + ")-->(" + test.expected + ")", function (done) { return done(validator(test.input) === test.expected ? null : new Error()); });
    });
});
