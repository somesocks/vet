# vet

A collection of data validation tools.

# API

<a name="vet"></a>

## vet : <code>object</code>
**Kind**: global namespace  

* [vet](#vet) : <code>object</code>
    * [.arrays](#vet.arrays) : <code>object</code>
        * [.isArray](#vet.arrays.isArray) ⇒
        * [.isArrayOf(val)](#vet.arrays.isArrayOf) ⇒
        * [.isLength(len)](#vet.arrays.isLength) ⇒
    * [.booleans](#vet.booleans) : <code>object</code>
        * [.isBoolean(val)](#vet.booleans.isBoolean) ⇒
        * [.isFalse(val)](#vet.booleans.isFalse) ⇒
        * [.isFalsy(val)](#vet.booleans.isFalsy) ⇒
        * [.isTrue(val)](#vet.booleans.isTrue) ⇒
        * [.isTruthy(val)](#vet.booleans.isTruthy) ⇒
    * [.dates](#vet.dates) : <code>object</code>
        * [.isDate(val)](#vet.dates.isDate) ⇒
        * [.isValidDate(val)](#vet.dates.isValidDate) ⇒
    * [.functions](#vet.functions) : <code>object</code>
        * [.isFunction(val)](#vet.functions.isFunction) ⇒
    * [.numbers](#vet.numbers) : <code>object</code>
        * [.isBetween(lower, upper)](#vet.numbers.isBetween) ⇒ <code>function</code>
            * [.exclusive](#vet.numbers.isBetween.exclusive) ⇒ <code>function</code>
            * [.inclusive](#vet.numbers.isBetween.inclusive) ⇒ <code>function</code>
        * [.isFinite(val)](#vet.numbers.isFinite) ⇒
        * [.isGreaterThan(bound)](#vet.numbers.isGreaterThan) ⇒ <code>function</code>
            * [.exclusive](#vet.numbers.isGreaterThan.exclusive) ⇒ <code>function</code>
            * [.inclusive](#vet.numbers.isGreaterThan.inclusive) ⇒ <code>function</code>
        * [.isInteger(val)](#vet.numbers.isInteger) ⇒
        * [.isLessThan(bound)](#vet.numbers.isLessThan) ⇒ <code>function</code>
            * [.exclusive](#vet.numbers.isLessThan.exclusive) ⇒ <code>function</code>
            * [.inclusive](#vet.numbers.isLessThan.inclusive) ⇒ <code>function</code>
        * [.isNegative(val)](#vet.numbers.isNegative) ⇒
        * [.isNonZero(val)](#vet.numbers.isNonZero) ⇒
        * [.isNumber(val)](#vet.numbers.isNumber) ⇒
        * [.isPositive(val)](#vet.numbers.isPositive) ⇒
        * [.isZero(val)](#vet.numbers.isZero) ⇒
    * [.objects](#vet.objects) : <code>object</code>
        * [.isObject(val)](#vet.objects.isObject) ⇒
        * [.isObjectOf(validator)](#vet.objects.isObjectOf) ⇒
        * [.isShape(schema)](#vet.objects.isShape) ⇒
            * [.isShape.exact(schema)](#vet.objects.isShape.isShape.exact) ⇒
        * [.matchesExact(schema)](#vet.objects.matchesExact) ⇒
        * [.matches(schema)](#vet.objects.matches) ⇒
    * [.strings](#vet.strings) : <code>object</code>
        * [.isEmpty(val)](#vet.strings.isEmpty) ⇒
        * [.isLength(len)](#vet.strings.isLength) ⇒
        * [.isNotEmpty(val)](#vet.strings.isNotEmpty) ⇒
        * [.isProbablyBase64(val)](#vet.strings.isProbablyBase64) ⇒
        * [.isProbablyDataURL(val)](#vet.strings.isProbablyDataURL) ⇒
        * [.isProbablyEmail(val)](#vet.strings.isProbablyEmail) ⇒
        * [.isProbablyURL(val)](#vet.strings.isProbablyURL) ⇒
        * [.isString(val)](#vet.strings.isString) ⇒
        * [.matches(regex)](#vet.strings.matches) ⇒
    * [.utils](#vet.utils) : <code>object</code>
        * [.assertReact](#vet.utils.assertReact) ⇒
        * [.accepts(func, validator, message)](#vet.utils.accepts) ⇒
        * [.assert(validator, message)](#vet.utils.assert) ⇒
        * [.returns(func, validator, message)](#vet.utils.returns) ⇒
    * [.equals(eq)](#vet.equals) ⇒
    * [.exists(val)](#vet.exists) ⇒
    * [.isAllOf(...eq)](#vet.isAllOf) ⇒
    * [.isNoneOf(...eq)](#vet.isNoneOf) ⇒
    * [.isNot(validator)](#vet.isNot) ⇒
    * [.isNotNull(val)](#vet.isNotNull) ⇒
    * [.isNotNullOrUndefined(val)](#vet.isNotNullOrUndefined) ⇒
    * [.isNotUndefined(val)](#vet.isNotUndefined) ⇒
    * [.isNull(val)](#vet.isNull) ⇒
    * [.isNullOrUndefined(val)](#vet.isNullOrUndefined) ⇒
    * [.isOneOf(...eq)](#vet.isOneOf) ⇒
    * [.isUndefined(val)](#vet.isUndefined) ⇒
    * [.matchesAllOf(...validators)](#vet.matchesAllOf) ⇒
    * [.matchesNoneOf(...validators)](#vet.matchesNoneOf) ⇒
    * [.matchesOneOf(...validators)](#vet.matchesOneOf) ⇒
    * [.optional(validator)](#vet.optional) ⇒


* * *

<a name="vet.arrays"></a>

### vet.arrays : <code>object</code>
**Kind**: static namespace of [<code>vet</code>](#vet)  

* [.arrays](#vet.arrays) : <code>object</code>
    * [.isArray](#vet.arrays.isArray) ⇒
    * [.isArrayOf(val)](#vet.arrays.isArrayOf) ⇒
    * [.isLength(len)](#vet.arrays.isLength) ⇒


* * *

<a name="vet.arrays.isArray"></a>

#### arrays.isArray ⇒
Checks to see if a value is an array

**Kind**: static property of [<code>arrays</code>](#vet.arrays)  
**Returns**: true if the value is an array  
**Params**

- val - the value to check

**Example**  
```javascript
let isArray = require('vet/arrays/isArray');

isArray(null); // returns false
isArray({}); // returns false

isArray([]); // returns true
```

* * *

<a name="vet.arrays.isArrayOf"></a>

#### arrays.isArrayOf(val) ⇒
Builds an array validator that checks the children of the array

**Kind**: static method of [<code>arrays</code>](#vet.arrays)  
**Returns**: a function that returns true if the value is an array, and all of the children pass the validator  
**Params**

- val - the validator function run against the array children

**Example**  
```javascript
let isString = require('vet/strings/isString');
let isArrayOf = require('vet/arrays/isArrayOf');

let isStringArray = isArrayOf(isString);

isStringArray(null); // returns false
isStringArray({}); // returns false
isStringArray([ 1, 2, 3 ]); // returns false

isStringArray([]); // returns true
isStringArray([ '1', '2', '3' ]); // returns true
```

* * *

<a name="vet.arrays.isLength"></a>

#### arrays.isLength(len) ⇒
Constructor to build an array length validator

**Kind**: static method of [<code>arrays</code>](#vet.arrays)  
**Returns**: a function that returns true if the value is an array of length len  
**Params**

- len - the length the array shouldbe

**Example**  
```javascript
let isLength = require('vet/arrays/isLength');

let isLength3 = isLength(3);

isLength3(null); // returns false
isLength3({}); // returns false
isLength3([ 1, 2 ]); // returns false

isLength3([ '1', '2', '3' ]); // returns true
```

* * *

<a name="vet.booleans"></a>

### vet.booleans : <code>object</code>
**Kind**: static namespace of [<code>vet</code>](#vet)  

* [.booleans](#vet.booleans) : <code>object</code>
    * [.isBoolean(val)](#vet.booleans.isBoolean) ⇒
    * [.isFalse(val)](#vet.booleans.isFalse) ⇒
    * [.isFalsy(val)](#vet.booleans.isFalsy) ⇒
    * [.isTrue(val)](#vet.booleans.isTrue) ⇒
    * [.isTruthy(val)](#vet.booleans.isTruthy) ⇒


* * *

<a name="vet.booleans.isBoolean"></a>

#### booleans.isBoolean(val) ⇒
Checks to see if a value is a boolean

**Kind**: static method of [<code>booleans</code>](#vet.booleans)  
**Returns**: true if the value is a boolean  
**Params**

- val - the value to check


* * *

<a name="vet.booleans.isFalse"></a>

#### booleans.isFalse(val) ⇒
Checks to see if a value is strictly false

**Kind**: static method of [<code>booleans</code>](#vet.booleans)  
**Returns**: true if the value is strictly false  
**Params**

- val - the value to check

**Example**  
```javascript
let isFalse = require('vet/booleans/isFalse');

isFalse(null); // returns false
isFalse(true); // returns false

isFalse(false); // returns true
```

* * *

<a name="vet.booleans.isFalsy"></a>

#### booleans.isFalsy(val) ⇒
Checks to see if a value is loosely false (falsy)

**Kind**: static method of [<code>booleans</code>](#vet.booleans)  
**Returns**: true if the value is loosely false  
**Params**

- val - the value to check

**Example**  
```javascript
let isFalsy = require('vet/booleans/isFalsy');

isFalse(true); // returns false

isFalsy(null); // returns true
isFalsy(false); // returns true
```

* * *

<a name="vet.booleans.isTrue"></a>

#### booleans.isTrue(val) ⇒
Checks to see if a value is strictly true

**Kind**: static method of [<code>booleans</code>](#vet.booleans)  
**Returns**: true if the value is strictly true  
**Params**

- val - the value to check

**Example**  
```javascript
let isTrue = require('vet/booleans/isTrue');

isTrue(null); // returns false
isTrue(false); // returns false

isTrue(true); // returns true
```

* * *

<a name="vet.booleans.isTruthy"></a>

#### booleans.isTruthy(val) ⇒
Checks to see if a value is loosely true (truthy)

**Kind**: static method of [<code>booleans</code>](#vet.booleans)  
**Returns**: true if the value loosely true  
**Params**

- val - the value to check

**Example**  
```javascript
let isTruthy = require('vet/booleans/isTruthy');

isTruthy(null); // returns false
isTruthy(false); // returns false

isTruthy({}); // returns true
isTruthy(true); // returns true
```

* * *

<a name="vet.dates"></a>

### vet.dates : <code>object</code>
**Kind**: static namespace of [<code>vet</code>](#vet)  

* [.dates](#vet.dates) : <code>object</code>
    * [.isDate(val)](#vet.dates.isDate) ⇒
    * [.isValidDate(val)](#vet.dates.isValidDate) ⇒


* * *

<a name="vet.dates.isDate"></a>

#### dates.isDate(val) ⇒
Checks to see if a value is a Date

**Kind**: static method of [<code>dates</code>](#vet.dates)  
**Returns**: true if the value is a Date  
**Params**

- val - the value to check

**Example**  
```javascript
let isDate = require('vet/dates/isDate');

isDate(null); // returns false
isDate({}); // returns false

isDate(new Date()); // returns true
```

* * *

<a name="vet.dates.isValidDate"></a>

#### dates.isValidDate(val) ⇒
Checks to see if a value is a valid Date object

**Kind**: static method of [<code>dates</code>](#vet.dates)  
**Returns**: true if the value is a valid Date object  
**Params**

- val - the value to check

**Example**  
```javascript
let isValidDate = require('vet/dates/isValidDate');

isValidDate(null); // returns false
isValidDate({}); // returns false
isValidDate(new Date(NaN)); // returns false

isValidDate(new Date()); // returns true
```

* * *

<a name="vet.functions"></a>

### vet.functions : <code>object</code>
**Kind**: static namespace of [<code>vet</code>](#vet)  

* * *

<a name="vet.functions.isFunction"></a>

#### functions.isFunction(val) ⇒
Checks to see if a value is a function

**Kind**: static method of [<code>functions</code>](#vet.functions)  
**Returns**: true if the value is a function  
**Params**

- val - the value to check

**Example**  
```javascript
let isFunction = require('vet/functions/isFunction');

isFunction(null); // returns false
isFunction({}); // returns false

isFunction(function (){}); // returns true
```

* * *

<a name="vet.numbers"></a>

### vet.numbers : <code>object</code>
**Kind**: static namespace of [<code>vet</code>](#vet)  

* [.numbers](#vet.numbers) : <code>object</code>
    * [.isBetween(lower, upper)](#vet.numbers.isBetween) ⇒ <code>function</code>
        * [.exclusive](#vet.numbers.isBetween.exclusive) ⇒ <code>function</code>
        * [.inclusive](#vet.numbers.isBetween.inclusive) ⇒ <code>function</code>
    * [.isFinite(val)](#vet.numbers.isFinite) ⇒
    * [.isGreaterThan(bound)](#vet.numbers.isGreaterThan) ⇒ <code>function</code>
        * [.exclusive](#vet.numbers.isGreaterThan.exclusive) ⇒ <code>function</code>
        * [.inclusive](#vet.numbers.isGreaterThan.inclusive) ⇒ <code>function</code>
    * [.isInteger(val)](#vet.numbers.isInteger) ⇒
    * [.isLessThan(bound)](#vet.numbers.isLessThan) ⇒ <code>function</code>
        * [.exclusive](#vet.numbers.isLessThan.exclusive) ⇒ <code>function</code>
        * [.inclusive](#vet.numbers.isLessThan.inclusive) ⇒ <code>function</code>
    * [.isNegative(val)](#vet.numbers.isNegative) ⇒
    * [.isNonZero(val)](#vet.numbers.isNonZero) ⇒
    * [.isNumber(val)](#vet.numbers.isNumber) ⇒
    * [.isPositive(val)](#vet.numbers.isPositive) ⇒
    * [.isZero(val)](#vet.numbers.isZero) ⇒


* * *

<a name="vet.numbers.isBetween"></a>

#### numbers.isBetween(lower, upper) ⇒ <code>function</code>
construct a validator to check if a value is between two numbers

**Kind**: static method of [<code>numbers</code>](#vet.numbers)  
**Returns**: <code>function</code> - - a validator function  
**Params**

- lower <code>number</code> - the lower boundary value to check against
- upper <code>number</code> - the upper boundary value to check against


* [.isBetween(lower, upper)](#vet.numbers.isBetween) ⇒ <code>function</code>
    * [.exclusive](#vet.numbers.isBetween.exclusive) ⇒ <code>function</code>
    * [.inclusive](#vet.numbers.isBetween.inclusive) ⇒ <code>function</code>


* * *

<a name="vet.numbers.isBetween.exclusive"></a>

##### isBetween.exclusive ⇒ <code>function</code>
**Kind**: static property of [<code>isBetween</code>](#vet.numbers.isBetween)  
**Returns**: <code>function</code> - - a validator function  
**Params**

- lower <code>number</code> - the lower boundary value to check against
- upper <code>number</code> - the upper boundary value to check against


* * *

<a name="vet.numbers.isBetween.inclusive"></a>

##### isBetween.inclusive ⇒ <code>function</code>
**Kind**: static property of [<code>isBetween</code>](#vet.numbers.isBetween)  
**Returns**: <code>function</code> - - a validator function  
**Params**

- lower <code>number</code> - the lower boundary value to check against
- upper <code>number</code> - the upper boundary value to check against


* * *

<a name="vet.numbers.isFinite"></a>

#### numbers.isFinite(val) ⇒
Checks to see if a value is a finite number

**Kind**: static method of [<code>numbers</code>](#vet.numbers)  
**Returns**: true if the value is a finite number  
**Params**

- val - the value to check


* * *

<a name="vet.numbers.isGreaterThan"></a>

#### numbers.isGreaterThan(bound) ⇒ <code>function</code>
construct a validator to check if a value is greater than a number

**Kind**: static method of [<code>numbers</code>](#vet.numbers)  
**Returns**: <code>function</code> - - a validator function  
**Params**

- bound <code>number</code> - the boundary value to check agains


* [.isGreaterThan(bound)](#vet.numbers.isGreaterThan) ⇒ <code>function</code>
    * [.exclusive](#vet.numbers.isGreaterThan.exclusive) ⇒ <code>function</code>
    * [.inclusive](#vet.numbers.isGreaterThan.inclusive) ⇒ <code>function</code>


* * *

<a name="vet.numbers.isGreaterThan.exclusive"></a>

##### isGreaterThan.exclusive ⇒ <code>function</code>
**Kind**: static property of [<code>isGreaterThan</code>](#vet.numbers.isGreaterThan)  
**Returns**: <code>function</code> - - a validator function  
**Params**

- bound <code>number</code> - the boundary value to check against


* * *

<a name="vet.numbers.isGreaterThan.inclusive"></a>

##### isGreaterThan.inclusive ⇒ <code>function</code>
**Kind**: static property of [<code>isGreaterThan</code>](#vet.numbers.isGreaterThan)  
**Returns**: <code>function</code> - - a validator function  
**Params**

- bound <code>number</code> - the boundary value to check against


* * *

<a name="vet.numbers.isInteger"></a>

#### numbers.isInteger(val) ⇒
Checks to see if a value is an integer

**Kind**: static method of [<code>numbers</code>](#vet.numbers)  
**Returns**: true if the value is an integer  
**Params**

- val - the value to check


* * *

<a name="vet.numbers.isLessThan"></a>

#### numbers.isLessThan(bound) ⇒ <code>function</code>
construct a validator to check if a value is less than a number

**Kind**: static method of [<code>numbers</code>](#vet.numbers)  
**Returns**: <code>function</code> - - a validator function  
**Params**

- bound <code>number</code> - the boundary value to check agains


* [.isLessThan(bound)](#vet.numbers.isLessThan) ⇒ <code>function</code>
    * [.exclusive](#vet.numbers.isLessThan.exclusive) ⇒ <code>function</code>
    * [.inclusive](#vet.numbers.isLessThan.inclusive) ⇒ <code>function</code>


* * *

<a name="vet.numbers.isLessThan.exclusive"></a>

##### isLessThan.exclusive ⇒ <code>function</code>
**Kind**: static property of [<code>isLessThan</code>](#vet.numbers.isLessThan)  
**Returns**: <code>function</code> - - a validator function  
**Params**

- bound <code>number</code> - the boundary value to check against


* * *

<a name="vet.numbers.isLessThan.inclusive"></a>

##### isLessThan.inclusive ⇒ <code>function</code>
**Kind**: static property of [<code>isLessThan</code>](#vet.numbers.isLessThan)  
**Returns**: <code>function</code> - - a validator function  
**Params**

- bound <code>number</code> - the boundary value to check against


* * *

<a name="vet.numbers.isNegative"></a>

#### numbers.isNegative(val) ⇒
Checks to see if a value is a negative number

**Kind**: static method of [<code>numbers</code>](#vet.numbers)  
**Returns**: true if the value is a negative number  
**Params**

- val - the value to check


* * *

<a name="vet.numbers.isNonZero"></a>

#### numbers.isNonZero(val) ⇒
Checks to see if a value is a nonzero number

**Kind**: static method of [<code>numbers</code>](#vet.numbers)  
**Returns**: true if the value is a nonzero number  
**Params**

- val - the value to check


* * *

<a name="vet.numbers.isNumber"></a>

#### numbers.isNumber(val) ⇒
Checks to see if a value is a number

**Kind**: static method of [<code>numbers</code>](#vet.numbers)  
**Returns**: true if the value is a number  
**Params**

- val - the value to check


* * *

<a name="vet.numbers.isPositive"></a>

#### numbers.isPositive(val) ⇒
Checks to see if a value is a positive number

**Kind**: static method of [<code>numbers</code>](#vet.numbers)  
**Returns**: true if the value is a positive number  
**Params**

- val - the value to check


* * *

<a name="vet.numbers.isZero"></a>

#### numbers.isZero(val) ⇒
Checks to see if a value is zero

**Kind**: static method of [<code>numbers</code>](#vet.numbers)  
**Returns**: true if the value is zero  
**Params**

- val - the value to check


* * *

<a name="vet.objects"></a>

### vet.objects : <code>object</code>
**Kind**: static namespace of [<code>vet</code>](#vet)  

* [.objects](#vet.objects) : <code>object</code>
    * [.isObject(val)](#vet.objects.isObject) ⇒
    * [.isObjectOf(validator)](#vet.objects.isObjectOf) ⇒
    * [.isShape(schema)](#vet.objects.isShape) ⇒
        * [.isShape.exact(schema)](#vet.objects.isShape.isShape.exact) ⇒
    * [.matchesExact(schema)](#vet.objects.matchesExact) ⇒
    * [.matches(schema)](#vet.objects.matches) ⇒


* * *

<a name="vet.objects.isObject"></a>

#### objects.isObject(val) ⇒
Checks to see if a value is an object

**Kind**: static method of [<code>objects</code>](#vet.objects)  
**Returns**: true if the value is an object  
**Params**

- val - the value to check


* * *

<a name="vet.objects.isObjectOf"></a>

#### objects.isObjectOf(validator) ⇒
Builds an object validator that checks the properties of the object
NOTE: This only checks enumerable properties

**Kind**: static method of [<code>objects</code>](#vet.objects)  
**Returns**: a function that returns true if the value is an object, and all of the object properties pass the validator  
**Params**

- validator - the validator function run against the array children


* * *

<a name="vet.objects.isShape"></a>

#### objects.isShape(schema) ⇒
Builds a function to check an object against a schema object

A schema object consists of an object with child object, functions, and values

The schema matching process is as follows:

1) For each child in the schema object, match it against the corresponding child in the value to be checked

2) If the schema child is a function, treat it as a validator function

3) If the schema child is an object, recursively call the schema matching

4) If the schema child is anything else, check for strict equality

**Kind**: static method of [<code>objects</code>](#vet.objects)  
**Returns**: a validator function that takes in a value val, and returns true if val matches the object schema  
**Params**

- schema - the object schema to check

**Example**  
```javascript
let isString = require('vet/strings/isString');
let isNumber = require('vet/numbers/isNumber');
let isBoolean = require('vet/booleans/isBoolean');
let isShape = require('vet/objects/isShape');

let isPerson = isShape({
  name: isString,
  age: isNumber,
  alive: isBoolean,
});

// returns false
isPerson({});

// returns false, no 'alive' flag
isPerson({ name: 'John Doe', age: 12 });

// returns true
isPerson({ name: 'John Doe', age: 12, alive: true });
```

* * *

<a name="vet.objects.isShape.isShape.exact"></a>

##### isShape.isShape.exact(schema) ⇒
Builds a function to check an object against a schema object

This function works similarly to `vet/objects/isShape`,
but it also checks to make sure every value in the object to check
has a corresponding validator in the schema

**Kind**: static method of [<code>isShape</code>](#vet.objects.isShape)  
**Returns**: a validator function that takes in a value val, and returns true if val matches the object schema exactly  
**Params**

- schema - the object schema to check

**Example**  
```javascript
let isString = require('vet/strings/isString');
let isNumber = require('vet/numbers/isNumber');
let isBoolean = require('vet/booleans/isBoolean');
let isShape = require('vet/objects/isShape');

let isPerson = isShape.exact({
  name: isString,
  age: isNumber,
  alive: isBoolean,
});

// returns false
isPerson({});

// returns false, no 'alive' flag
isPerson({ name: 'John Doe', age: 12 });

// returns false, extra property 'gender'
isPerson({ name: 'John Doe', age: 12, alive: true, gender: 'm' });

// returns true
isPerson({ name: 'John Doe', age: 12, alive: true });
```

* * *

<a name="vet.objects.matchesExact"></a>

#### objects.matchesExact(schema) ⇒
Builds a function to check an object against a schema object

This function works similarly to Vet.Object.matches,
but it also checks to make sure every value in the object to check
has a corresponding validator in the schema

**Kind**: static method of [<code>objects</code>](#vet.objects)  
**Returns**: a validator function that takes in a value val, and returns true if val matches the object schema exactly  
**Params**

- schema - the object schema to check


* * *

<a name="vet.objects.matches"></a>

#### objects.matches(schema) ⇒
Builds a function to check an object against a schema object

A schema object consists of an object with child object, functions, and values

The schema matching process is this:
1) For each child in the schema object, match it against the corresponding child in the value to be checked
2) If the schema child is a function, treat it as a validator function
3) If the schema child is an object, recursively call the schema matching
4) If the schema child is anything else, check for strict equality

**Kind**: static method of [<code>objects</code>](#vet.objects)  
**Returns**: a validator function that takes in a value val, and returns true if val matches the object schema  
**Params**

- schema - the object schema to check


* * *

<a name="vet.strings"></a>

### vet.strings : <code>object</code>
**Kind**: static namespace of [<code>vet</code>](#vet)  

* [.strings](#vet.strings) : <code>object</code>
    * [.isEmpty(val)](#vet.strings.isEmpty) ⇒
    * [.isLength(len)](#vet.strings.isLength) ⇒
    * [.isNotEmpty(val)](#vet.strings.isNotEmpty) ⇒
    * [.isProbablyBase64(val)](#vet.strings.isProbablyBase64) ⇒
    * [.isProbablyDataURL(val)](#vet.strings.isProbablyDataURL) ⇒
    * [.isProbablyEmail(val)](#vet.strings.isProbablyEmail) ⇒
    * [.isProbablyURL(val)](#vet.strings.isProbablyURL) ⇒
    * [.isString(val)](#vet.strings.isString) ⇒
    * [.matches(regex)](#vet.strings.matches) ⇒


* * *

<a name="vet.strings.isEmpty"></a>

#### strings.isEmpty(val) ⇒
Checks to see if a value is an empty string

**Kind**: static method of [<code>strings</code>](#vet.strings)  
**Returns**: true if val is an empty string  
**Params**

- val - the value to check


* * *

<a name="vet.strings.isLength"></a>

#### strings.isLength(len) ⇒
Builds a function to check if a value is a string of length len

**Kind**: static method of [<code>strings</code>](#vet.strings)  
**Returns**: a function that takes in a value val, and returns true if val is a string of length len  
**Params**

- len - the desired length of string


* * *

<a name="vet.strings.isNotEmpty"></a>

#### strings.isNotEmpty(val) ⇒
Checks to see if a value is a non-empty string

**Kind**: static method of [<code>strings</code>](#vet.strings)  
**Returns**: true if val is a non-empty string  
**Params**

- val - the value to check


* * *

<a name="vet.strings.isProbablyBase64"></a>

#### strings.isProbablyBase64(val) ⇒
Checks to see if a value is probably a valid base64 string

**Kind**: static method of [<code>strings</code>](#vet.strings)  
**Returns**: true if val is probably a valid base64 string  
**Params**

- val - the value to check


* * *

<a name="vet.strings.isProbablyDataURL"></a>

#### strings.isProbablyDataURL(val) ⇒
Checks to see if a value is probably a valid data URL

**Kind**: static method of [<code>strings</code>](#vet.strings)  
**Returns**: true if val is probably a valid data URL  
**Params**

- val - the value to check


* * *

<a name="vet.strings.isProbablyEmail"></a>

#### strings.isProbablyEmail(val) ⇒
Checks to see if a value is probably a valid email

**Kind**: static method of [<code>strings</code>](#vet.strings)  
**Returns**: true if val is probably a valid email  
**Params**

- val - the value to check


* * *

<a name="vet.strings.isProbablyURL"></a>

#### strings.isProbablyURL(val) ⇒
Checks to see if a value is probably a valid URL

**Kind**: static method of [<code>strings</code>](#vet.strings)  
**Returns**: true if val is probably a valid URL  
**Params**

- val - the value to check


* * *

<a name="vet.strings.isString"></a>

#### strings.isString(val) ⇒
Checks to see if a value is a string

**Kind**: static method of [<code>strings</code>](#vet.strings)  
**Returns**: true if val is a string  
**Params**

- val - the value to check


* * *

<a name="vet.strings.matches"></a>

#### strings.matches(regex) ⇒
Builds a function that checks to see if a value matches a regular expression

**Kind**: static method of [<code>strings</code>](#vet.strings)  
**Returns**: a function that takes in a value val, and returns true if it is a string that matches regex  
**Params**

- regex - the regular expression to check against


* * *

<a name="vet.utils"></a>

### vet.utils : <code>object</code>
**Kind**: static namespace of [<code>vet</code>](#vet)  

* [.utils](#vet.utils) : <code>object</code>
    * [.assertReact](#vet.utils.assertReact) ⇒
    * [.accepts(func, validator, message)](#vet.utils.accepts) ⇒
    * [.assert(validator, message)](#vet.utils.assert) ⇒
    * [.returns(func, validator, message)](#vet.utils.returns) ⇒


* * *

<a name="vet.utils.assertReact"></a>

#### utils.assertReact ⇒
A utility function for building a react-compatible assertion from a Vet validator

This is useful for some libraries (like React) that expect
assertion-style validation.

**Kind**: static property of [<code>utils</code>](#vet.utils)  
**Returns**: a function that returns null if the arguments pass validation, or throws an error if they do not  
**Params**

- validator - the validator to wrap
- message - an optional message string to pass into the error


* * *

<a name="vet.utils.accepts"></a>

#### utils.accepts(func, validator, message) ⇒
Wraps a function in a validator which checks its arguments, and throws an error if the arguments are bad.

**Kind**: static method of [<code>utils</code>](#vet.utils)  
**Returns**: a wrapped function that throws an error if the arguments do not pass validation  
**Params**

- func - the function to wrap
- validator - the validator function.  This gets passed the arguments as an array
- message - an optional message string to pass into the error thrown


* * *

<a name="vet.utils.assert"></a>

#### utils.assert(validator, message) ⇒
Wraps a validator, and throws an error if it returns false.

This is useful for some code that expects assertion-style validation.

**Kind**: static method of [<code>utils</code>](#vet.utils)  
**Returns**: a function that returns null if the arguments pass validation, or throws an error if they do not  
**Params**

- validator - the validator to wrap
- message - an optional message string to pass into the error


* * *

<a name="vet.utils.returns"></a>

#### utils.returns(func, validator, message) ⇒
Wraps a function in a validator which checks its return value, and throws an error if the return value is bad.

**Kind**: static method of [<code>utils</code>](#vet.utils)  
**Returns**: a wrapped function that throws an error if the return value doed not pass validation  
**Params**

- func - the function to wrap
- validator - the validator function.  This gets passed the return value
- message - an optional message string to pass into the error thrown


* * *

<a name="vet.equals"></a>

### vet.equals(eq) ⇒
Builds an curried equal function

**Kind**: static method of [<code>vet</code>](#vet)  
**Returns**: a function that takes in one parameter val, and returns true if val === eq  
**Params**

- eq - value to check equality against

**Example**  
```javascript
let equals = require('vet/equals');

let is3 = equals(3);

is3(null); // returns false
is3({}); // returns false

is3(3); // returns true
```

* * *

<a name="vet.exists"></a>

### vet.exists(val) ⇒
Alias for `vet/isNotNullOrUndefined`

**Kind**: static method of [<code>vet</code>](#vet)  
**Returns**: true if val is not null or undefined  
**Params**

- val - value to check

**Example**  
```javascript

let exists = require('vet/exists');

exists(null); // returns false
exists(undefined); // returns false
exists({}); // returns true

```

* * *

<a name="vet.isAllOf"></a>

### vet.isAllOf(...eq) ⇒
Constructs a function that checks equality against any number of arguments

**Kind**: static method of [<code>vet</code>](#vet)  
**Returns**: a function that takes in a parameter val, and returns true if val is equal to any of the options in ...eq  
**Params**

- ...eq <code>\*</code> - values to check equality against

**Example**  
```javascript
let isAllOf = require('vet/isAllOf');
let isNumber = require('vet/numbers/isNumber');
let isPositive = require('vet/numbers/isPositive');

let check = isAllOf(isNumber, isPositive);

check(-1); // returns false

check(1); // returns true
```

* * *

<a name="vet.isNoneOf"></a>

### vet.isNoneOf(...eq) ⇒
Constructs a function that checks equality against any number of arguments

**Kind**: static method of [<code>vet</code>](#vet)  
**Returns**: a function that takes in a parameter val, and returns true if val is NOT equal to any of the options in ...eq  
**Params**

- ...eq <code>\*</code> - values to check equality against

**Example**  
```javascript
let isNoneOf = require('vet/isNoneOf');

let check = isNoneOf(1, 2, 3);

check(1); // returns false

check(4); // returns true
```

* * *

<a name="vet.isNot"></a>

### vet.isNot(validator) ⇒
a function that inverts the result of a validator

**Kind**: static method of [<code>vet</code>](#vet)  
**Returns**: a wrapper function that inverts the result of a validator  
**Params**

- validator <code>function</code> - validator to invert

**Example**  
```javascript
let isNot = require('vet/isNot');
let isNumber = require('vet/numbers/isNumber');

let check = isNot(isNumber);

check(1); // returns false

check(null); // returns true
```

* * *

<a name="vet.isNotNull"></a>

### vet.isNotNull(val) ⇒
A function to check for nulls

**Kind**: static method of [<code>vet</code>](#vet)  
**Returns**: true if val is strictly not equal to null  
**Params**

- val - a value to check against null

**Example**  
```javascript

let isNotNull = require('vet/isNotNull');

isNotNull(null); // returns false

isNotNull(undefined); // returns true
isNotNull({}); // returns true

```

* * *

<a name="vet.isNotNullOrUndefined"></a>

### vet.isNotNullOrUndefined(val) ⇒
A function to check for null or undefined

**Kind**: static method of [<code>vet</code>](#vet)  
**Returns**: true if val is loosely not null (strictly not null or undefined)  
**Params**

- val - a value to check against null and undefined

**Example**  
```javascript
let isNotNullOrUndefined = require('vet/isNotNullOrUndefined');

isNotNullOrUndefined(null); // returns false
isNotNullOrUndefined(undefined); // returns false

isNotNullOrUndefined({}); // returns true
```

* * *

<a name="vet.isNotUndefined"></a>

### vet.isNotUndefined(val) ⇒
A function to check for undefined

**Kind**: static method of [<code>vet</code>](#vet)  
**Returns**: true if val is strictly not undefined  
**Params**

- val - a value to check

**Example**  
```javascript
let isNotUndefined = require('vet/isNotUndefined');

isNotUndefined(undefined); // returns false

isNotUndefined(null); // returns true
isNotUndefined({}); // returns true
```

* * *

<a name="vet.isNull"></a>

### vet.isNull(val) ⇒
A function to check for null

**Kind**: static method of [<code>vet</code>](#vet)  
**Returns**: true if val is strictly null  
**Params**

- val - a value to check

**Example**  
```javascript
let isNull = require('vet/isNull');

isNull(undefined); // returns false
isNull({}); // returns false

isNull(null); // returns true
```

* * *

<a name="vet.isNullOrUndefined"></a>

### vet.isNullOrUndefined(val) ⇒
A function to check for null or undefined

**Kind**: static method of [<code>vet</code>](#vet)  
**Returns**: true if val is loosely null (strictly null or undefined)  
**Params**

- val - a value to check

**Example**  
```javascript
let isNullOrUndefined = require('vet/isNullOrUndefined');

isNullOrUndefined({}); // returns false

isNullOrUndefined(undefined); // returns true
isNullOrUndefined(null); // returns true
```

* * *

<a name="vet.isOneOf"></a>

### vet.isOneOf(...eq) ⇒
Constructs a function that checks equality against any number of arguments

**Kind**: static method of [<code>vet</code>](#vet)  
**Returns**: a function that takes in a parameter val, and returns true if val is equal to any of the options in ...eq  
**Params**

- ...eq <code>\*</code> - values to check equality against

**Example**  
```javascript
let isOneOf = require('vet/isOneOf');

let check = isOneOf(1, 2, 3);

check(4); // returns false

check(1); // returns true
```

* * *

<a name="vet.isUndefined"></a>

### vet.isUndefined(val) ⇒
A function to check for undefined

**Kind**: static method of [<code>vet</code>](#vet)  
**Returns**: true if val is strictly undefined  
**Params**

- val - a value to check

**Example**  
```javascript
let isUndefined = require('vet/isUndefined');

isUndefined({}); // returns false
isUndefined(null); // returns false

isUndefined(undefined); // returns true
```

* * *

<a name="vet.matchesAllOf"></a>

### vet.matchesAllOf(...validators) ⇒
```javascript

let matchesAllOf = require('vet/matchesAllOf');
let isNumber = require('vet/numbers/isNumber');

let isPositive = matchesAllOf(
  isNumber,
  (val) => val > 0
);

isPositive(null); // returns false
isPositive(-1); // returns false

isPositive(1); // returns true

```
A function builder to check a value against multiple validator functions

**Kind**: static method of [<code>vet</code>](#vet)  
**Returns**: a function that takes in a value, and returns true if ALL of the validator functions return true  
**Params**

- ...validators <code>function</code> - any number of validator functions


* * *

<a name="vet.matchesNoneOf"></a>

### vet.matchesNoneOf(...validators) ⇒
```javascript

let matchesNoneOf = require('vet/matchesNoneOf');
let isNumber = require('vet/numbers/isNumber');
let isString = require('vet/strings/isString');

let isNotNumberOrString = matchesNoneOf(
  isNumber,
  isString,
);

isNotNumberOrString(1); // returns false
isNotNumberOrString('1'); // returns false

isNotNumberOrString(null); // returns true

```
A function builder to check a value against multiple validator functions

**Kind**: static method of [<code>vet</code>](#vet)  
**Returns**: a function that takes in a value, and returns true if NONE of the validator functions return true  
**Params**

- ...validators <code>function</code> - any number of validator functions


* * *

<a name="vet.matchesOneOf"></a>

### vet.matchesOneOf(...validators) ⇒
```javascript

let matchesOneOf = require('vet/matchesOneOf');
let isNumber = require('vet/numbers/isNumber');
let isString = require('vet/strings/isString');

let isNumberOrString = matchesNoneOf(
  isNumber,
  isString,
);

isNumberOrString(null); // returns false

isNumberOrString(1); // returns true
isNumberOrString('1'); // returns true

```
A function builder to check a value against multiple validator functions

**Kind**: static method of [<code>vet</code>](#vet)  
**Returns**: a function that takes in a value, and returns true if ANY of the validator functions return true  
**Params**

- ...validators <code>function</code> - any number of validator functions


* * *

<a name="vet.optional"></a>

### vet.optional(validator) ⇒
A function builder to optionally check a value

**Kind**: static method of [<code>vet</code>](#vet)  
**Returns**: a function that takes in a value, and returns true if the value does not exist, or the validator returns true  
**Params**

- validator - a validator function

**Example**  
```javascript
let optional = require('vet/optional');
let isNumber = require('vet/numbers/isNumber');

let isMaybeNumber = optional(isNumber);

isMaybeNumber(null); // returns false
isMaybeNumber("1"); // returns false

isMaybeNumber(1); // returns true
isMaybeNumber(undefined); // returns true
```

* * *

