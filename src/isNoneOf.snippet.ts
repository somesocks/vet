
import isInteger from './numbers/isInteger';
import isPositive from './numbers/isPositive';

import isNoneOf from './isNoneOf';

let isNotPositiveInteger = isNoneOf(isPositive, isInteger);

let a = isNotPositiveInteger(2);
