
import isString from '../strings/isString.js';
import isBoolean from '../booleans/isBoolean.js';
import isNumber from '../numbers/isNumber.js';
import isShape from './isShape.js';

let isPerson = isShape({
	name: isString,
	age: isNumber,
	alive: isBoolean,
});

let a = isPerson({ });
let b = isPerson({ name: 'John Doe', age: 10 });

let c = isPerson({ name: 'John Doe', age: 10, alive: true });
