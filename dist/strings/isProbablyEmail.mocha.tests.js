"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var object_inspect_1 = __importDefault(require("object-inspect"));
var isProbablyEmail_1 = __importDefault(require("./isProbablyEmail"));
var TESTS = [
    { input: 'tester@gmail.com', expected: true },
    { input: 'email@domain.com', expected: true },
    { input: 'firstname.lastname@domain.com', expected: true },
    { input: 'email@subdomain.domain.com', expected: true },
    { input: 'firstname+lastname@domain.com', expected: true },
    { input: 'email@[123.123.123.123]', expected: true },
    { input: '“email”@domain.com', expected: true },
    { input: '1234567890@domain.com', expected: true },
    { input: 'email@domain-one.com', expected: true },
    { input: '_______@domain.com', expected: true },
    { input: 'email@domain.name', expected: true },
    { input: 'email@domain.co.jp', expected: true },
    { input: 'firstname-lastname@domain.com', expected: true },
    { input: 'prettyandsimple@example.com', expected: true },
    { input: 'very.common@example.com', expected: true },
    { input: 'disposable.style.email.with+symbol@example.com', expected: true },
    { input: 'other.email-with-dash@example.com', expected: true },
    { input: 'x@example.com', expected: true },
    { input: '"much.more unusual"@example.com', expected: true },
    { input: '"very.unusual.@.unusual.com"@example.com', expected: true },
    // eslint-disable-next-line no-useless-escape
    { input: '"very.(),:;<>[]\".VERY.\"very@\\ \"very\".unusual"@strange.example.com', expected: true },
    { input: 'example-indeed@strange-example.com', expected: true },
    { input: '#!$%&\'*+-/=?^_`{}|~@example.org', expected: true },
    // eslint-disable-next-line no-useless-escape
    { input: '"()<>[]:,;@\\\"!#$%&\'-/=?^_`{}| ~.a"@example.org', expected: true },
    { input: '" "@example.org', expected: true },
    { input: 'example@s.solutions', expected: true },
    { input: 'plainaddress', expected: false },
    { input: '#@%^%#$@#$@#.com', expected: false },
    { input: '@domain.com', expected: false },
    { input: 'Joe Smith <email@domain.com>', expected: false },
    { input: 'email.domain.com', expected: false },
    { input: 'email@domain@domain.com', expected: false },
    { input: '.email@domain.com', expected: false },
    { input: 'email.@domain.com', expected: false },
    { input: 'email..email@domain.com', expected: false },
    { input: 'email@domain.com (Joe Smith)', expected: false },
    { input: 'email@domain', expected: false },
    { input: 'email@111.222.333.44444', expected: false },
    { input: 'email@domain..com', expected: false },
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
describe('vat/strings/isProbablyEmail', function () {
    var _validator = isProbablyEmail_1.default;
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
