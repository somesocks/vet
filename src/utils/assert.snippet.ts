
import isString from '../strings/isString';
import assert from './assert';

let assertIsString = assert(isString);

assertIsString('abc');

assert('abc' === ('a' + 'bc'));

// this line should raise an error on compile, since 'abc' is not a boolean
// assert('abc');
