
import isNumber from './numbers/isNumber';

import optional from './optional';

let isMaybeNumber = optional(isNumber);

let a = isMaybeNumber(2);
