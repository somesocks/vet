"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isUndefined_1 = __importDefault(require("./isUndefined"));
var TESTS = [
    { input: undefined, expected: true },
    { input: false, expected: false },
    { input: (function () { }), expected: false },
    { input: 'a string', expected: false },
    { input: {}, expected: false },
    { input: [], expected: false },
    { input: /a/, expected: false },
    { input: true, expected: false },
    { input: '', expected: false },
    { input: null, expected: false },
];
describe('vet/isUndefined', function () {
    TESTS.forEach(function (test) {
        it("(" + test.input + ")-->(" + test.expected + ")", function (done) { return done(isUndefined_1.default(test.input) === test.expected ? null : new Error()); });
    });
});
