
type validator = ( val : any ) => boolean;

type param = validator | any;

declare function matchesNoneOf(...vals : param[]): validator;

export default matchesNoneOf;
