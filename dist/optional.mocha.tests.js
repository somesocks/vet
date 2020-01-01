"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var optional_1 = __importDefault(require("./optional"));
var TESTS = [
    { input: 'a string', expected: true },
    { input: '', expected: true },
    { input: undefined, expected: true },
    { input: null, expected: true },
    { input: true, expected: false },
    { input: false, expected: false },
    { input: (function () { }), expected: false },
    { input: {}, expected: false },
    { input: [], expected: false },
    { input: /a/, expected: false },
];
describe('vet/optional', function () {
    var validator = optional_1.default(function (val) { return typeof val === 'string' || val instanceof String; });
    TESTS.forEach(function (test) {
        it("(" + test.input + ")-->(" + test.expected + ")", function (done) { return done(validator(test.input) === test.expected ? null : new Error()); });
    });
});
