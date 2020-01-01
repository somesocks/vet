"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isAllOf_1 = __importDefault(require("./isAllOf"));
var TESTS = [
    { input: 'a string', expected: true },
    { input: true, expected: false },
    { input: '', expected: false },
    { input: false, expected: false },
    { input: (function () { }), expected: false },
    { input: {}, expected: false },
    { input: [], expected: false },
    { input: /a/, expected: false },
    { input: undefined, expected: false },
    { input: null, expected: false },
];
describe('vet/isAllOf', function () {
    var validator = isAllOf_1.default(function (val) { return typeof val === 'string' || val instanceof String; }, function (val) { return val.length > 0; });
    TESTS.forEach(function (test) {
        it("(" + test.input + ")-->(" + test.expected + ")", function (done) { return done(validator(test.input) === test.expected ? null : new Error()); });
    });
});
