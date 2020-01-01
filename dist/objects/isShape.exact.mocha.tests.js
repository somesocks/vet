"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isString_1 = __importDefault(require("../strings/isString"));
var isNumber_1 = __importDefault(require("../numbers/isNumber"));
var isBoolean_1 = __importDefault(require("../booleans/isBoolean"));
var isShape_1 = __importDefault(require("./isShape"));
var TESTS = [
    {
        input: {
            name: 'Test User',
            age: 10,
            verified: true,
        },
        expected: true,
    },
    {
        input: {
            name: 'Test User',
            age: 10,
            verified: true,
            extras: {},
        },
        expected: false,
    },
    {
        input: {
            name: 'Test User',
            age: 10,
        },
        expected: false,
    },
    {
        input: {
            name: 1,
            age: 10,
            verified: true,
        },
        expected: false,
    },
    { input: '', expected: false },
    { input: 'a string', expected: false },
    { input: {}, expected: false },
    { input: [], expected: false },
    { input: function () { }, expected: false },
    { input: /a/, expected: false },
    { input: undefined, expected: false },
    { input: null, expected: false },
    { input: 0, expected: false },
    { input: false, expected: false },
    { input: true, expected: false },
];
describe('vet/objects/isShape.exact', function () {
    var validator = isShape_1.default.exact({
        name: isString_1.default,
        age: isNumber_1.default,
        verified: isBoolean_1.default,
    });
    TESTS.forEach(function (test) {
        it("(" + test.input + ")-->(" + test.expected + ")", function (done) { return done(validator(test.input) === test.expected ? null : new Error()); });
    });
});
