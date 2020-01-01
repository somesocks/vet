
import isString from '../strings/isString';
import assertReact from './assertReact';

let assertIsString = assertReact(isString);

assertIsString({}, 'abc', '');
