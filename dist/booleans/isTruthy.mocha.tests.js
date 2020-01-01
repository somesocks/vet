"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isTruthy_1 = __importDefault(require("./isTruthy"));
var TESTS = [
    { input: true, expected: true },
    { input: (function () { }), expected: true },
    { input: 'a string', expected: true },
    { input: /a/, expected: true },
    { input: {}, expected: true },
    { input: [], expected: true },
    { input: false, expected: false },
    { input: '', expected: false },
    { input: undefined, expected: false },
    { input: null, expected: false },
];
describe('vet/booleans/isTruthy', function () {
    TESTS.forEach(function (test) {
        it("(" + test.input + ")-->(" + test.expected + ")", function (done) { return done(isTruthy_1.default(test.input) === test.expected ? null : new Error()); });
    });
});
