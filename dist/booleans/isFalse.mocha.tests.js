"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isFalse_1 = __importDefault(require("./isFalse"));
var TESTS = [
    { input: false, expected: true },
    { input: true, expected: false },
    { input: (function () { }), expected: false },
    { input: '', expected: false },
    { input: 'a string', expected: false },
    { input: undefined, expected: false },
    { input: null, expected: false },
    { input: {}, expected: false },
    { input: [], expected: false },
    { input: /a/, expected: false },
];
describe('vet/booleans/isFalse', function () {
    TESTS.forEach(function (test) {
        it("(" + test.input + ")-->(" + test.expected + ")", function (done) { return done(isFalse_1.default(test.input) === test.expected ? null : new Error()); });
    });
});
