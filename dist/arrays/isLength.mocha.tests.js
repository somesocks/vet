"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isLength_1 = __importDefault(require("./isLength"));
var TESTS = [
    { input: [1, 'a string'], expected: true },
    { input: [1, null], expected: true },
    { input: [1, undefined], expected: true },
    { input: [1, 2, null], expected: false },
    { input: [undefined], expected: false },
    { input: [null], expected: false },
    { input: 'a string', expected: false },
    { input: '', expected: false },
    { input: undefined, expected: false },
    { input: null, expected: false },
    { input: true, expected: false },
    { input: false, expected: false },
    { input: (function () { }), expected: false },
    { input: {}, expected: false },
    { input: /a/, expected: false },
];
describe('vet/arrays/isLength', function () {
    var validator = isLength_1.default(2);
    TESTS.forEach(function (test) {
        it("(" + test.input + ")-->(" + test.expected + ")", function (done) { return done(validator(test.input) === test.expected ? null : new Error()); });
    });
});
