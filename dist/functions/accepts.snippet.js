import isString from '../strings/isString.js';
import accepts from './accepts.js';
let toUpper = (val) => val.toUpperCase();
let toUpper2 = accepts(toUpper, isString);
let a = toUpper2('abc');
