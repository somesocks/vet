"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isNullOrUndefined_1 = __importDefault(require("./isNullOrUndefined"));
var TESTS = [
    { input: null, expected: true },
    { input: undefined, expected: true },
    { input: false, expected: false },
    { input: (function () { }), expected: false },
    { input: 'a string', expected: false },
    { input: {}, expected: false },
    { input: [], expected: false },
    { input: /a/, expected: false },
    { input: true, expected: false },
    { input: '', expected: false },
];
describe('vet/isNullOrUndefined', function () {
    TESTS.forEach(function (test) {
        it("(" + test.input + ")-->(" + test.expected + ")", function (done) { return done(isNullOrUndefined_1.default(test.input) === test.expected ? null : new Error()); });
    });
});
