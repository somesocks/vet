
type validator = ( val : any ) => boolean;

type param = validator | any;

declare function matchesOneOf(...vals : param[]): validator;

export default matchesOneOf;
