
import isNumber from './numbers/isNumber.js';
import isString from './strings/isString.js';

import isOneOf from './isOneOf.js';

let isNumberOrString = isOneOf(isNumber, isString);

let a = isNumberOrString(2);
