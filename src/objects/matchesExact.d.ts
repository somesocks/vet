
type validator = ( val : any ) => boolean;

declare function matchesExact(val : object): validator;

export default matchesExact;
