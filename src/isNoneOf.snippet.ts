
import isInteger from './numbers/isInteger.js';
import isPositive from './numbers/isPositive.js';

import isNoneOf from './isNoneOf.js';

let isNotPositiveInteger = isNoneOf(isPositive, isInteger);

let a = isNotPositiveInteger(2);
