"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var object_inspect_1 = __importDefault(require("object-inspect"));
var isFalsy_1 = __importDefault(require("./isFalsy"));
var TESTS = [
    { input: false, expected: true },
    { input: '', expected: true },
    { input: undefined, expected: true },
    { input: null, expected: true },
    { input: true, expected: false },
    { input: {}, expected: false },
    { input: [], expected: false },
    { input: (function () { }), expected: false },
    { input: 'a string', expected: false },
    { input: /a/, expected: false },
];
describe('vet/booleans/isFalsy', function () {
    var _validator = isFalsy_1.default;
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
