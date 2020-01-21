"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isAny_1 = __importDefault(require("./isAny"));
var TESTS = [
    { input: false, expected: true },
    { input: (function () { }), expected: true },
    { input: 'a string', expected: true },
    { input: {}, expected: true },
    { input: [], expected: true },
    { input: /a/, expected: true },
    { input: undefined, expected: true },
    { input: true, expected: true },
    { input: '', expected: true },
    { input: null, expected: true },
];
describe('vet/isAny', function () {
    TESTS.forEach(function (test) {
        it("(" + test.input + ")-->(" + test.expected + ")", function (done) { return done(isAny_1.default(test.input) === test.expected ? null : new Error()); });
    });
});
