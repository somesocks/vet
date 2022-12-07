"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isString_1 = __importDefault(require("../strings/isString"));
var isNumber_1 = __importDefault(require("../numbers/isNumber"));
var isShape_1 = __importDefault(require("../objects/isShape"));
var returns_1 = __importDefault(require("./returns"));
var TESTS = [
    { input: undefined, expected: true },
    { input: null, expected: true },
    { input: 0, expected: true },
    { input: false, expected: true },
    { input: true, expected: true },
    { input: {}, expected: true },
    { input: [], expected: true },
    { input: function () { }, expected: true },
    { input: /a/, expected: true },
    { input: '', expected: false },
    { input: 'a string', expected: false },
];
describe('vet/functions/returns', function () {
    var threwError = function (validator) { return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        try {
            validator.apply(void 0, args);
            return false;
        }
        catch (e) {
            return true;
        }
    }; };
    var PASS = function (a) { return a; };
    var wrapper = (0, returns_1.default)(PASS, isString_1.default);
    var validator = threwError(wrapper);
    TESTS.forEach(function (test) {
        it("(".concat(test.input, ")-->(").concat(test.expected, ")"), function (done) { return done(validator(test.input) === test.expected ? null : new Error()); });
    });
});
// typescript check
var add = function (a, b) { return ({ sum: a + b }); };
var add2 = (0, returns_1.default)(add, (0, isShape_1.default)({ diff: isNumber_1.default }));
var add3 = (0, returns_1.default)(add, function (val) { return val > 0; });
// let c = add2(1, 2);
