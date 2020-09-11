"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isOneOf_1 = __importDefault(require("./isOneOf"));
var isAllOf_1 = __importDefault(require("./isAllOf"));
var isString_1 = __importDefault(require("./strings/isString"));
var isNumber_1 = __importDefault(require("./numbers/isNumber"));
var isShape_1 = __importDefault(require("./objects/isShape"));
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
var _validator = isOneOf_1.default(true, '');
var validator = _validator;
describe('vet/isOneOf', function () {
    TESTS.forEach(function (test) {
        it("(" + test.input + ")-->(" + test.expected + ")", function (done) { return done(validator(test.input) === test.expected ? null : new Error()); });
    });
    var validator2 = isOneOf_1.default(function (val) { return val === true; }, function (val) { return val === ''; });
    TESTS.forEach(function (test) {
        it("(" + test.input + ")-->(" + test.expected + ")", function (done) { return done(validator2(test.input) === test.expected ? null : new Error()); });
    });
});
// typescript check
var a = '';
validator.assert(a);
var b = a;
b = '';
b = true;
var isPersonReference = isOneOf_1.default(isString_1.default, isShape_1.default({ name: isString_1.default }));
var isPerson = isAllOf_1.default(isPersonReference, isShape_1.default({ age: isNumber_1.default }));
var c = {};
if (isPersonReference(c)) {
    var d = c;
}
if (isPerson(c)) {
    var d = c;
}
