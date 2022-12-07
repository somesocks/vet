"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var object_inspect_1 = __importDefault(require("object-inspect"));
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
describe('vet/isOneOf 1', function () {
    var _validator = (0, isOneOf_1.default)(true, '');
    var validator = _validator;
    TESTS.forEach(function (test) {
        it("validator(".concat((0, object_inspect_1.default)(test.input), ") returns ").concat(test.expected), function (done) { return done(validator(test.input) === test.expected ? null : new Error()); });
        it("validator.assert(".concat((0, object_inspect_1.default)(test.input), ") should ").concat(test.expected ? 'pass' : 'fail'), function (done) {
            var error = false;
            try {
                validator.assert(test.input);
            }
            catch (e) {
                error = true;
            }
            //no error should be thrown if a expected is expected
            done(!error == test.expected ? null : new Error());
        });
    });
    var _validator2 = (0, isOneOf_1.default)(function (val) { return val === true; }, function (val) { return val === ''; });
    var validator2 = _validator2;
});
describe('vet/isOneOf 2', function () {
    var _validator = (0, isOneOf_1.default)(function (val) { return val === true; }, function (val) { return val === ''; });
    var validator = _validator;
    TESTS.forEach(function (test) {
        it("validator(".concat((0, object_inspect_1.default)(test.input), ") returns ").concat(test.expected), function (done) { return done(validator(test.input) === test.expected ? null : new Error()); });
        it("validator.assert(".concat((0, object_inspect_1.default)(test.input), ") should ").concat(test.expected ? 'pass' : 'fail'), function (done) {
            var error = false;
            try {
                validator.assert(test.input);
            }
            catch (e) {
                error = true;
            }
            //no error should be thrown if a expected is expected
            done(!error == test.expected ? null : new Error());
        });
    });
});
{
    var _validator = (0, isOneOf_1.default)(true, '');
    var validator = _validator;
    // typescript check
    var a = '';
    validator.assert(a);
    var b = a;
    b = '';
    b = true;
    var isPersonReference = (0, isOneOf_1.default)(isString_1.default, (0, isShape_1.default)({ name: isString_1.default }));
    var isPerson = (0, isAllOf_1.default)(isPersonReference, (0, isShape_1.default)({ age: isNumber_1.default }));
    var c = {};
    if (isPersonReference(c)) {
        var d = c;
    }
    if (isPerson(c)) {
        var d = c;
    }
}
