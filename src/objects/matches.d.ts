
type validator = ( val : any ) => boolean;

declare function matches(val : object): validator;

export default matches;
