"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isObject_1 = __importDefault(require("./isObject"));
var TESTS = [
    { input: {}, expected: true },
    { input: [], expected: true },
    { input: function () { }, expected: true },
    { input: /a/, expected: true },
    { input: '', expected: false },
    { input: 'a string', expected: false },
    { input: undefined, expected: false },
    { input: null, expected: false },
    { input: 0, expected: false },
    { input: false, expected: false },
    { input: true, expected: false },
];
describe('vet/objects/isObject', function () {
    TESTS.forEach(function (test) {
        it("(" + test.input + ")-->(" + test.expected + ")", function (done) { return done(isObject_1.default(test.input) === test.expected ? null : new Error()); });
    });
});
