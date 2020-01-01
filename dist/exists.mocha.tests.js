"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var exists_1 = __importDefault(require("./exists"));
var TESTS = [
    { input: true, expected: true },
    { input: false, expected: true },
    { input: (function () { }), expected: true },
    { input: '', expected: true },
    { input: 'a string', expected: true },
    { input: {}, expected: true },
    { input: [], expected: true },
    { input: /a/, expected: true },
    { input: undefined, expected: false },
    { input: null, expected: false },
];
describe('vet/equals', function () {
    TESTS.forEach(function (test) {
        it("(" + test.input + ")-->(" + test.expected + ")", function (done) { return done(exists_1.default(test.input) === test.expected ? null : new Error()); });
    });
});
