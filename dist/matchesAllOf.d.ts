
type validator = ( val : any ) => boolean;

type param = validator | any;

declare function matchesAllOf(...vals : param[]): validator;

export default matchesAllOf;
