import Validator from './Validator.js';
import GenericValidator from './GenericValidator.js';
type ValidatorType<T> = T extends Validator<infer U> ? U : (T extends GenericValidator ? unknown : T);
export default ValidatorType;
