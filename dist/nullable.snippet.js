import isNumber from './numbers/isNumber.js';
import nullable from './nullable.js';
let isMaybeNumber = nullable(isNumber);
let a = isMaybeNumber(2);
