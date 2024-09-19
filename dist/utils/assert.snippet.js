import isString from '../strings/isString.js';
import assert from './assert.js';
let assertIsString = assert(isString);
assertIsString('abc');
assert('abc' === ('a' + 'bc'));
// this line should raise an error on compile, since 'abc' is not a boolean
// assert('abc');
