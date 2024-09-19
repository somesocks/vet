import isAny from './isAny.js';
let a = isAny(2);
let b = a;
isAny.assert(b);
let c = b;
