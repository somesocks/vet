"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = assertReact;
var assert_1 = __importDefault(require("./assert"));
/**
* A utility function for building a react-compatible assertion from a Vet validator
*
* This is useful for some libraries (like React) that expect
* assertion-style validation.
* @name assertReact
* @param validator - the validator to wrap
* @param message - an optional message string to pass into the error
* @returns a function that returns null if the arguments pass validation, or throws an error if they do not
* @memberof vet.utils
*/
function assertReact(validator, msg) {
    validator = (0, assert_1.default)(validator, msg);
    return function (props, propName, componentName) {
        validator(props[propName]);
    };
}
