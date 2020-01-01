
import isString from '../strings/isString';
import accepts from './accepts';

let toUpper = (val : string) => val.toUpperCase();

let toUpper2 = accepts(toUpper, isString);

let a = toUpper2('abc');
