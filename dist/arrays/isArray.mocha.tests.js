"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isArray_1 = __importDefault(require("./isArray"));
var TESTS = [
    { input: [], expected: true },
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
describe('vet/arrays/isArray', function () {
    TESTS.forEach(function (test) {
        it("(" + test.input + ")-->(" + test.expected + ")", function (done) { return done(isArray_1.default(test.input) === test.expected ? null : new Error()); });
    });
});
