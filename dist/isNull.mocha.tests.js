"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isNull_1 = __importDefault(require("./isNull"));
var TESTS = [
    { input: null, expected: true },
    { input: false, expected: false },
    { input: (function () { }), expected: false },
    { input: 'a string', expected: false },
    { input: {}, expected: false },
    { input: [], expected: false },
    { input: /a/, expected: false },
    { input: true, expected: false },
    { input: '', expected: false },
    { input: undefined, expected: false },
];
describe('vet/isNull', function () {
    TESTS.forEach(function (test) {
        it("(" + test.input + ")-->(" + test.expected + ")", function (done) { return done(isNull_1.default(test.input) === test.expected ? null : new Error()); });
    });
});
