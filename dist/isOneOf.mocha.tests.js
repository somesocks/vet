"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isOneOf_1 = __importDefault(require("./isOneOf"));
var TESTS = [
    { input: true, expected: true },
    { input: '', expected: true },
    { input: false, expected: false },
    { input: (function () { }), expected: false },
    { input: 'a string', expected: false },
    { input: {}, expected: false },
    { input: [], expected: false },
    { input: /a/, expected: false },
    { input: undefined, expected: false },
    { input: null, expected: false },
];
describe('vet/isOneOf', function () {
    var validator = isOneOf_1.default(true, '');
    TESTS.forEach(function (test) {
        it("(" + test.input + ")-->(" + test.expected + ")", function (done) { return done(validator(test.input) === test.expected ? null : new Error()); });
    });
    var validator2 = isOneOf_1.default(function (val) { return val === true; }, function (val) { return val === ''; });
    TESTS.forEach(function (test) {
        it("(" + test.input + ")-->(" + test.expected + ")", function (done) { return done(validator2(test.input) === test.expected ? null : new Error()); });
    });
});
