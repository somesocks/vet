"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var assert_1 = __importDefault(require("./assert"));
module.exports = function assertReact(validator, msg) {
    validator = assert_1.default(validator, msg);
    return function (props, propName, componentName) {
        validator(props[propName]);
    };
};
