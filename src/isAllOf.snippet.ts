
import isInteger from './numbers/isInteger';
import isPositive from './numbers/isPositive';

import isAllOf from './isAllOf';

let isPositiveInteger = isAllOf(isPositive, isInteger);

let a = isPositiveInteger(2);
