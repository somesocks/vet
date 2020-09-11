"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isEmpty_1 = __importDefault(require("./isEmpty"));
var TESTS = [
    { input: '', expected: true },
    { input: 'a string', expected: false },
    { input: undefined, expected: false },
    { input: null, expected: false },
    { input: 0, expected: false },
    { input: false, expected: false },
    { input: true, expected: false },
    { input: {}, expected: false },
    { input: [], expected: false },
    { input: function () { }, expected: false },
    { input: /a/, expected: false },
];
describe('vet/strings/isEmpty', function () {
    TESTS.forEach(function (test) {
        it("(" + test.input + ")-->(" + test.expected + ")", function (done) { return done(isEmpty_1.default(test.input) === test.expected ? null : new Error()); });
    });
});
// typescript compile-time check
var a = "";
isEmpty_1.default.assert(a);
a = '';
a = 'foo';
