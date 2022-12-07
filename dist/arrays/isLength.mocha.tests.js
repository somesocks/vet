"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var object_inspect_1 = __importDefault(require("object-inspect"));
var isLength_1 = __importDefault(require("./isLength"));
var TESTS = [
    { input: [1, 'a string'], expected: true },
    { input: [1, null], expected: true },
    { input: [1, undefined], expected: true },
    { input: [1, 2, null], expected: false },
    { input: [undefined], expected: false },
    { input: [null], expected: false },
    { input: 'a string', expected: false },
    { input: '', expected: false },
    { input: undefined, expected: false },
    { input: null, expected: false },
    { input: true, expected: false },
    { input: false, expected: false },
    { input: (function () { }), expected: false },
    { input: {}, expected: false },
    { input: /a/, expected: false },
];
describe('vet/arrays/isLength', function () {
    var _validator = (0, isLength_1.default)(2);
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
