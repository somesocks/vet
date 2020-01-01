"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isFalsy_1 = __importDefault(require("./isFalsy"));
var TESTS = [
    { input: false, expected: true },
    { input: '', expected: true },
    { input: undefined, expected: true },
    { input: null, expected: true },
    { input: true, expected: false },
    { input: {}, expected: false },
    { input: [], expected: false },
    { input: (function () { }), expected: false },
    { input: 'a string', expected: false },
    { input: /a/, expected: false },
];
describe('vet/booleans/isFalsy', function () {
    TESTS.forEach(function (test) {
        it("(" + test.input + ")-->(" + test.expected + ")", function (done) { return done(isFalsy_1.default(test.input) === test.expected ? null : new Error()); });
    });
});
