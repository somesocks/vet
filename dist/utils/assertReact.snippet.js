import isString from '../strings/isString.js';
import assertReact from './assertReact.js';
let assertIsString = assertReact(isString);
assertIsString({}, 'abc', '');
