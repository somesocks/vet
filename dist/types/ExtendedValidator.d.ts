import Assertion from './Assertion.js';
import Validator from './Validator.js';
type ExtendedValidator<T = any> = Validator<T> & {
    assert: Assertion<T>;
    schema?: string;
};
export default ExtendedValidator;
