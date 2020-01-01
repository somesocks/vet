"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isNoneOf_1 = __importDefault(require("./isNoneOf"));
var TESTS = [
    { input: false, expected: true },
    { input: (function () { }), expected: true },
    { input: 'a string', expected: true },
    { input: {}, expected: true },
    { input: [], expected: true },
    { input: /a/, expected: true },
    { input: undefined, expected: true },
    { input: null, expected: true },
    { input: true, expected: false },
    { input: '', expected: false },
];
describe('vet/isNoneOf', function () {
    var validator = isNoneOf_1.default(true, '');
    TESTS.forEach(function (test) {
        it("(" + test.input + ")-->(" + test.expected + ")", function (done) { return done(validator(test.input) === test.expected ? null : new Error()); });
    });
    var validator2 = isNoneOf_1.default(function (val) { return val === true; }, function (val) { return val === ''; });
    TESTS.forEach(function (test) {
        it("(" + test.input + ")-->(" + test.expected + ")", function (done) { return done(validator2(test.input) === test.expected ? null : new Error()); });
    });
});
