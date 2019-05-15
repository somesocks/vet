
import isString from '../strings/isString';
import isBoolean from '../booleans/isBoolean';
import isNumber from '../numbers/isNumber';
import isShape from './isShape';

let isPerson = isShape({
	name: isString,
	age: isNumber,
	alive: isBoolean,
});

let a = isPerson({ });
let b = isPerson({ name: 'John Doe', age: 10 });

let c = isPerson({ name: 'John Doe', age: 10, alive: true });
