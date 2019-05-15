
import isNumber from './numbers/isNumber';
import isString from './strings/isString';

import isOneOf from './isOneOf';

let isNumberOrString = isOneOf(isNumber, isString);

let a = isNumberOrString(2);
