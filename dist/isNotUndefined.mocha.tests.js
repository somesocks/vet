"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isNotUndefined_1 = __importDefault(require("./isNotUndefined"));
var TESTS = [
    { input: false, expected: true },
    { input: (function () { }), expected: true },
    { input: 'a string', expected: true },
    { input: {}, expected: true },
    { input: [], expected: true },
    { input: /a/, expected: true },
    { input: true, expected: true },
    { input: '', expected: true },
    { input: null, expected: true },
    { input: undefined, expected: false },
];
describe('vet/isNotUndefined', function () {
    TESTS.forEach(function (test) {
        it("(" + test.input + ")-->(" + test.expected + ")", function (done) { return done(isNotUndefined_1.default(test.input) === test.expected ? null : new Error()); });
    });
});
