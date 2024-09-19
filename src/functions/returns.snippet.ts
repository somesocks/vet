
import isString from '../strings/isString.js';
import returns from './returns.js';

let toUpper = (val : string) => val.toUpperCase();

let toUpper2 = returns(toUpper, isString);

let a = toUpper2('abc');
