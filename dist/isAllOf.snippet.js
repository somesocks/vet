import isInteger from './numbers/isInteger.js';
import isPositive from './numbers/isPositive.js';
import isAllOf from './isAllOf.js';
let isPositiveInteger = isAllOf(isPositive, isInteger);
let a = isPositiveInteger(2);
