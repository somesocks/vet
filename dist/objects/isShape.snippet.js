"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isString_1 = __importDefault(require("../strings/isString"));
var isBoolean_1 = __importDefault(require("../booleans/isBoolean"));
var isNumber_1 = __importDefault(require("../numbers/isNumber"));
var isShape_1 = __importDefault(require("./isShape"));
var isPerson = isShape_1.default({
    name: isString_1.default,
    age: isNumber_1.default,
    alive: isBoolean_1.default,
});
var a = isPerson({});
var b = isPerson({ name: 'John Doe', age: 10 });
var c = isPerson({ name: 'John Doe', age: 10, alive: true });
