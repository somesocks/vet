import isNumber from './numbers/isNumber.js';
import optional from './optional.js';
let isMaybeNumber = optional(isNumber);
let a = isMaybeNumber(2);
