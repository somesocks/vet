"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isProbablyDataURL_1 = __importDefault(require("./isProbablyDataURL"));
var TESTS = [
    { input: "data:text/plain;charset=utf-8;base64,MTIz", expected: true },
    { input: 'http://www.test.com', expected: false },
    { input: 'https://www.test.com', expected: false },
    { input: 'http://test.com', expected: false },
    { input: 'https://test.com', expected: false },
    { input: '', expected: false },
    { input: 'a string', expected: false },
    { input: undefined, expected: false },
    { input: null, expected: false },
    { input: 0, expected: false },
    { input: false, expected: false },
    { input: true, expected: false },
    { input: {}, expected: false },
    { input: [], expected: false },
    { input: function () { }, expected: false },
    { input: /a/, expected: false },
];
describe('vet/strings/isProbablyDataURL', function () {
    TESTS.forEach(function (test) {
        it("(" + test.input + ")-->(" + test.expected + ")", function (done) { return done(isProbablyDataURL_1.default(test.input) === test.expected ? null : new Error()); });
    });
});
