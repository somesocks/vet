
import isString from '../strings/isString';
import returns from './returns';

let toUpper = (val : string) => val.toUpperCase();

let toUpper2 = returns(toUpper, isString);

let a = toUpper2('abc');
