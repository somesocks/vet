import isObjectOf from './isObjectOf.js';
import isNumber from '../numbers/isNumber.js';
let a = isObjectOf(isNumber);
let b = { a: 1, b: 2, c: 3 };
let c = a(b);
