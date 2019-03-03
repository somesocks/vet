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
    * [.functions](#vet.functions) : <code>object</code>
        * [.isFunction(val)](#vet.functions.isFunction) ⇒
    * [.numbers](#vet.numbers) : <code>object</code>
        * [.isFinite(val)](#vet.numbers.isFinite) ⇒
        * [.isInteger(val)](#vet.numbers.isInteger) ⇒
        * [.isNegative(val)](#vet.numbers.isNegative) ⇒
        * [.isNonZero(val)](#vet.numbers.isNonZero) ⇒
        * [.isNumber(val)](#vet.numbers.isNumber) ⇒
        * [.isPositive(val)](#vet.numbers.isPositive) ⇒
        * [.isZero(val)](#vet.numbers.isZero) ⇒
    * [.objects](#vet.objects) : <code>object</code>
        * [.isObject(val)](#vet.objects.isObject) ⇒
        * [.isObjectOf(validator)](#vet.objects.isObjectOf) ⇒
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
        * [.accepts(func, validator, message)](#vet.utils.accepts) ⇒
        * [.assert(validator, message)](#vet.utils.assert) ⇒
        * [.module.exports(validator, message)](#vet.utils.module.exports) ⇒
        * [.returns(func, validator, message)](#vet.utils.returns) ⇒
    * [.equals(eq)](#vet.equals) ⇒
    * [.exists(val)](#vet.exists) ⇒
    * [.isOneOf(...eq)](#vet.isOneOf) ⇒
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

<a name="vet.arrays"></a>

### vet.arrays : <code>object</code>
**Kind**: static namespace of [<code>vet</code>](#vet)  

* [.arrays](#vet.arrays) : <code>object</code>
    * [.isArray](#vet.arrays.isArray) ⇒
    * [.isArrayOf(val)](#vet.arrays.isArrayOf) ⇒
    * [.isLength(len)](#vet.arrays.isLength) ⇒

<a name="vet.arrays.isArray"></a>

#### arrays.isArray ⇒
```javascript

let isArray = require('vet/arrays/isArray');

isArray(null); // returns false
isArray({}); // returns false

isArray([]); // returns true

```
Checks to see if a value is an array

**Kind**: static property of [<code>arrays</code>](#vet.arrays)  
**Returns**: true if the value is an array  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="vet.arrays.isArrayOf"></a>

#### arrays.isArrayOf(val) ⇒
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
Builds an array validator that checks the children of the array

**Kind**: static method of [<code>arrays</code>](#vet.arrays)  
**Returns**: a function that returns true if the value is an array, and all of the children pass the validator  

| Param | Description |
| --- | --- |
| val | the validator function run against the array children |

<a name="vet.arrays.isLength"></a>

#### arrays.isLength(len) ⇒
```javascript

let isLength = require('vet/arrays/isLength');

let isLength3 = isLength(3);

isLength3(null); // returns false
isLength3({}); // returns false
isLength3([ 1, 2 ]); // returns false

isLength3([ '1', '2', '3' ]); // returns true

```
Builds an array length checker

**Kind**: static method of [<code>arrays</code>](#vet.arrays)  
**Returns**: a function that returns true if the value is an array of length len  

| Param | Description |
| --- | --- |
| len | the length the array shouldbe |

<a name="vet.booleans"></a>

### vet.booleans : <code>object</code>
**Kind**: static namespace of [<code>vet</code>](#vet)  

* [.booleans](#vet.booleans) : <code>object</code>
    * [.isBoolean(val)](#vet.booleans.isBoolean) ⇒
    * [.isFalse(val)](#vet.booleans.isFalse) ⇒
    * [.isFalsy(val)](#vet.booleans.isFalsy) ⇒
    * [.isTrue(val)](#vet.booleans.isTrue) ⇒
    * [.isTruthy(val)](#vet.booleans.isTruthy) ⇒

<a name="vet.booleans.isBoolean"></a>

#### booleans.isBoolean(val) ⇒
Checks to see if a value is a boolean

**Kind**: static method of [<code>booleans</code>](#vet.booleans)  
**Returns**: true if the value is a boolean  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="vet.booleans.isFalse"></a>

#### booleans.isFalse(val) ⇒
Checks to see if a value is strictly false

**Kind**: static method of [<code>booleans</code>](#vet.booleans)  
**Returns**: true if the value is strictly false  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="vet.booleans.isFalsy"></a>

#### booleans.isFalsy(val) ⇒
Checks to see if a value is loosely false (falsy)

**Kind**: static method of [<code>booleans</code>](#vet.booleans)  
**Returns**: true if the value is loosely false  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="vet.booleans.isTrue"></a>

#### booleans.isTrue(val) ⇒
Checks to see if a value is strictly true

**Kind**: static method of [<code>booleans</code>](#vet.booleans)  
**Returns**: true if the value is strictly true  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="vet.booleans.isTruthy"></a>

#### booleans.isTruthy(val) ⇒
Checks to see if a value is loosely true (truthy)

**Kind**: static method of [<code>booleans</code>](#vet.booleans)  
**Returns**: true if the value loosely true  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="vet.dates"></a>

### vet.dates : <code>object</code>
**Kind**: static namespace of [<code>vet</code>](#vet)  
<a name="vet.dates.isDate"></a>

#### dates.isDate(val) ⇒
Checks to see if a value is a Date

**Kind**: static method of [<code>dates</code>](#vet.dates)  
**Returns**: true if the value is a Date  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="vet.functions"></a>

### vet.functions : <code>object</code>
**Kind**: static namespace of [<code>vet</code>](#vet)  
<a name="vet.functions.isFunction"></a>

#### functions.isFunction(val) ⇒
Checks to see if a value is a function

**Kind**: static method of [<code>functions</code>](#vet.functions)  
**Returns**: true if the value is a function  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="vet.numbers"></a>

### vet.numbers : <code>object</code>
**Kind**: static namespace of [<code>vet</code>](#vet)  

* [.numbers](#vet.numbers) : <code>object</code>
    * [.isFinite(val)](#vet.numbers.isFinite) ⇒
    * [.isInteger(val)](#vet.numbers.isInteger) ⇒
    * [.isNegative(val)](#vet.numbers.isNegative) ⇒
    * [.isNonZero(val)](#vet.numbers.isNonZero) ⇒
    * [.isNumber(val)](#vet.numbers.isNumber) ⇒
    * [.isPositive(val)](#vet.numbers.isPositive) ⇒
    * [.isZero(val)](#vet.numbers.isZero) ⇒

<a name="vet.numbers.isFinite"></a>

#### numbers.isFinite(val) ⇒
Checks to see if a value is a finite number

**Kind**: static method of [<code>numbers</code>](#vet.numbers)  
**Returns**: true if the value is a finite number  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="vet.numbers.isInteger"></a>

#### numbers.isInteger(val) ⇒
Checks to see if a value is an integer

**Kind**: static method of [<code>numbers</code>](#vet.numbers)  
**Returns**: true if the value is an integer  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="vet.numbers.isNegative"></a>

#### numbers.isNegative(val) ⇒
Checks to see if a value is a negative number

**Kind**: static method of [<code>numbers</code>](#vet.numbers)  
**Returns**: true if the value is a negative number  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="vet.numbers.isNonZero"></a>

#### numbers.isNonZero(val) ⇒
Checks to see if a value is a nonzero number

**Kind**: static method of [<code>numbers</code>](#vet.numbers)  
**Returns**: true if the value is a nonzero number  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="vet.numbers.isNumber"></a>

#### numbers.isNumber(val) ⇒
Checks to see if a value is a number

**Kind**: static method of [<code>numbers</code>](#vet.numbers)  
**Returns**: true if the value is a number  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="vet.numbers.isPositive"></a>

#### numbers.isPositive(val) ⇒
Checks to see if a value is a positive number

**Kind**: static method of [<code>numbers</code>](#vet.numbers)  
**Returns**: true if the value is a positive number  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="vet.numbers.isZero"></a>

#### numbers.isZero(val) ⇒
Checks to see if a value is zero

**Kind**: static method of [<code>numbers</code>](#vet.numbers)  
**Returns**: true if the value is zero  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="vet.objects"></a>

### vet.objects : <code>object</code>
**Kind**: static namespace of [<code>vet</code>](#vet)  

* [.objects](#vet.objects) : <code>object</code>
    * [.isObject(val)](#vet.objects.isObject) ⇒
    * [.isObjectOf(validator)](#vet.objects.isObjectOf) ⇒
    * [.matchesExact(schema)](#vet.objects.matchesExact) ⇒
    * [.matches(schema)](#vet.objects.matches) ⇒

<a name="vet.objects.isObject"></a>

#### objects.isObject(val) ⇒
Checks to see if a value is an object

**Kind**: static method of [<code>objects</code>](#vet.objects)  
**Returns**: true if the value is an object  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="vet.objects.isObjectOf"></a>

#### objects.isObjectOf(validator) ⇒
Builds an object validator that checks the properties of the object
NOTE: This only checks enumerable properties

**Kind**: static method of [<code>objects</code>](#vet.objects)  
**Returns**: a function that returns true if the value is an object, and all of the object properties pass the validator  

| Param | Description |
| --- | --- |
| validator | the validator function run against the array children |

<a name="vet.objects.matchesExact"></a>

#### objects.matchesExact(schema) ⇒
Builds a function to check an object against a schema object

This function works similarly to Vet.Object.matches,
but it also checks to make sure every value in the object to check
has a corresponding validator in the schema

**Kind**: static method of [<code>objects</code>](#vet.objects)  
**Returns**: a validator function that takes in a value val, and returns true if val matches the object schema exactly  

| Param | Description |
| --- | --- |
| schema | the object schema to check |

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

| Param | Description |
| --- | --- |
| schema | the object schema to check |

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

<a name="vet.strings.isEmpty"></a>

#### strings.isEmpty(val) ⇒
Checks to see if a value is an empty string

**Kind**: static method of [<code>strings</code>](#vet.strings)  
**Returns**: true if val is an empty string  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="vet.strings.isLength"></a>

#### strings.isLength(len) ⇒
Builds a function to check if a value is a string of length len

**Kind**: static method of [<code>strings</code>](#vet.strings)  
**Returns**: a function that takes in a value val, and returns true if val is a string of length len  

| Param | Description |
| --- | --- |
| len | the desired length of string |

<a name="vet.strings.isNotEmpty"></a>

#### strings.isNotEmpty(val) ⇒
Checks to see if a value is a non-empty string

**Kind**: static method of [<code>strings</code>](#vet.strings)  
**Returns**: true if val is a non-empty string  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="vet.strings.isProbablyBase64"></a>

#### strings.isProbablyBase64(val) ⇒
Checks to see if a value is probably a valid base64 string

**Kind**: static method of [<code>strings</code>](#vet.strings)  
**Returns**: true if val is probably a valid base64 string  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="vet.strings.isProbablyDataURL"></a>

#### strings.isProbablyDataURL(val) ⇒
Checks to see if a value is probably a valid data URL

**Kind**: static method of [<code>strings</code>](#vet.strings)  
**Returns**: true if val is probably a valid data URL  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="vet.strings.isProbablyEmail"></a>

#### strings.isProbablyEmail(val) ⇒
Checks to see if a value is probably a valid email

**Kind**: static method of [<code>strings</code>](#vet.strings)  
**Returns**: true if val is probably a valid email  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="vet.strings.isProbablyURL"></a>

#### strings.isProbablyURL(val) ⇒
Checks to see if a value is probably a valid URL

**Kind**: static method of [<code>strings</code>](#vet.strings)  
**Returns**: true if val is probably a valid URL  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="vet.strings.isString"></a>

#### strings.isString(val) ⇒
Checks to see if a value is a string

**Kind**: static method of [<code>strings</code>](#vet.strings)  
**Returns**: true if val is a string  

| Param | Description |
| --- | --- |
| val | the value to check |

<a name="vet.strings.matches"></a>

#### strings.matches(regex) ⇒
Builds a function that checks to see if a value matches a regular expression

**Kind**: static method of [<code>strings</code>](#vet.strings)  
**Returns**: a function that takes in a value val, and returns true if it is a string that matches regex  

| Param | Description |
| --- | --- |
| regex | the regular expression to check against |

<a name="vet.utils"></a>

### vet.utils : <code>object</code>
**Kind**: static namespace of [<code>vet</code>](#vet)  

* [.utils](#vet.utils) : <code>object</code>
    * [.accepts(func, validator, message)](#vet.utils.accepts) ⇒
    * [.assert(validator, message)](#vet.utils.assert) ⇒
    * [.module.exports(validator, message)](#vet.utils.module.exports) ⇒
    * [.returns(func, validator, message)](#vet.utils.returns) ⇒

<a name="vet.utils.accepts"></a>

#### utils.accepts(func, validator, message) ⇒
Wraps a function in a validator which checks its arguments, and throws an error if the arguments are bad.

**Kind**: static method of [<code>utils</code>](#vet.utils)  
**Returns**: a wrapped function that throws an error if the arguments do not pass validation  

| Param | Description |
| --- | --- |
| func | the function to wrap |
| validator | the validator function.  This gets passed the arguments as an array |
| message | an optional message string to pass into the error thrown |

<a name="vet.utils.assert"></a>

#### utils.assert(validator, message) ⇒
Wraps a validator, and throws an error if it returns false.

This is useful for some code that expects assertion-style validation.

**Kind**: static method of [<code>utils</code>](#vet.utils)  
**Returns**: a function that returns null if the arguments pass validation, or throws an error if they do not  

| Param | Description |
| --- | --- |
| validator | the validator to wrap |
| message | an optional message string to pass into the error |

<a name="vet.utils.module.exports"></a>

#### utils.module.exports(validator, message) ⇒
A utility function for building a react-compatible assertion from a Vet validator

This is useful for some libraries (like React) that expect
assertion-style validation.

**Kind**: static method of [<code>utils</code>](#vet.utils)  
**Returns**: a function that returns null if the arguments pass validation, or throws an error if they do not  

| Param | Description |
| --- | --- |
| validator | the validator to wrap |
| message | an optional message string to pass into the error |

<a name="vet.utils.returns"></a>

#### utils.returns(func, validator, message) ⇒
Wraps a function in a validator which checks its return value, and throws an error if the return value is bad.

**Kind**: static method of [<code>utils</code>](#vet.utils)  
**Returns**: a wrapped function that throws an error if the return value doed not pass validation  

| Param | Description |
| --- | --- |
| func | the function to wrap |
| validator | the validator function.  This gets passed the return value |
| message | an optional message string to pass into the error thrown |

<a name="vet.equals"></a>

### vet.equals(eq) ⇒
```javascript

let equals = require('vet/equals');

let is3 = equals(3);

is3(null); // returns false
is3({}); // returns false

is3(3); // returns true

```
Builds an curried equal function

**Kind**: static method of [<code>vet</code>](#vet)  
**Returns**: a function that takes in one parameter val, and returns true if val === eq  

| Param | Description |
| --- | --- |
| eq | value to check equality against |

<a name="vet.exists"></a>

### vet.exists(val) ⇒
```javascript

let exists = require('vet/exists');

exists(null); // returns false
exists(undefined); // returns false

exists({}); // returns true

```
Alias for isNotNullOrUndefined

**Kind**: static method of [<code>vet</code>](#vet)  
**Returns**: true if val is not null or undefined  

| Param | Description |
| --- | --- |
| val | value to check |

<a name="vet.isOneOf"></a>

### vet.isOneOf(...eq) ⇒
```javascript

let isNoneOf = require('vet/isNoneOf');

let check = isNoneOf(1, 2, 3);
check(1); // returns false

check(4); // returns true

```
Constructs a function that checks equality against any number of arguments

**Kind**: static method of [<code>vet</code>](#vet)  
**Returns**: a function that takes in a parameter val, and returns true if val is NOT equal to any of the options in ...eq  

| Param | Type | Description |
| --- | --- | --- |
| ...eq | <code>\*</code> | values to check equality against |

<a name="vet.isNotNull"></a>

### vet.isNotNull(val) ⇒
A function to check for nulls

**Kind**: static method of [<code>vet</code>](#vet)  
**Returns**: true if val is strictly not equal to null  

| Param | Description |
| --- | --- |
| val | a value to check against null |

<a name="vet.isNotNullOrUndefined"></a>

### vet.isNotNullOrUndefined(val) ⇒
A function to check for null or undefined

**Kind**: static method of [<code>vet</code>](#vet)  
**Returns**: true if val is loosely not null (strictly not null or undefined)  

| Param | Description |
| --- | --- |
| val | a value to check against null and undefined |

<a name="vet.isNotUndefined"></a>

### vet.isNotUndefined(val) ⇒
A function to check for undefined

**Kind**: static method of [<code>vet</code>](#vet)  
**Returns**: true if val is strictly not undefined  

| Param | Description |
| --- | --- |
| val | a value to check |

<a name="vet.isNull"></a>

### vet.isNull(val) ⇒
A function to check for null

**Kind**: static method of [<code>vet</code>](#vet)  
**Returns**: true if val is strictly null  

| Param | Description |
| --- | --- |
| val | a value to check |

<a name="vet.isNullOrUndefined"></a>

### vet.isNullOrUndefined(val) ⇒
A function to check for null or undefined

**Kind**: static method of [<code>vet</code>](#vet)  
**Returns**: true if val is loosely null (strictly null or undefined)  

| Param | Description |
| --- | --- |
| val | a value to check |

<a name="vet.isOneOf"></a>

### vet.isOneOf(...eq) ⇒
Constructs a function that checks equality against any number of arguments

**Kind**: static method of [<code>vet</code>](#vet)  
**Returns**: a function that takes in a parameter val, and returns true if val is equal to any of the options in ...eq  

| Param | Type | Description |
| --- | --- | --- |
| ...eq | <code>\*</code> | values to check equality against |

<a name="vet.isUndefined"></a>

### vet.isUndefined(val) ⇒
A function to check for undefined

**Kind**: static method of [<code>vet</code>](#vet)  
**Returns**: true if val is strictly undefined  

| Param | Description |
| --- | --- |
| val | a value to check |

<a name="vet.matchesAllOf"></a>

### vet.matchesAllOf(...validators) ⇒
A function builder to check a value against multiple validator functions

**Kind**: static method of [<code>vet</code>](#vet)  
**Returns**: a function that takes in a value, and returns true if ALL of the validator functions return true  

| Param | Type | Description |
| --- | --- | --- |
| ...validators | <code>function</code> | any number of validator functions |

<a name="vet.matchesNoneOf"></a>

### vet.matchesNoneOf(...validators) ⇒
A function builder to check a value against multiple validator functions

**Kind**: static method of [<code>vet</code>](#vet)  
**Returns**: a function that takes in a value, and returns true if NONE of the validator functions return true  

| Param | Type | Description |
| --- | --- | --- |
| ...validators | <code>function</code> | any number of validator functions |

<a name="vet.matchesOneOf"></a>

### vet.matchesOneOf(...validators) ⇒
A function builder to check a value against multiple validator functions

**Kind**: static method of [<code>vet</code>](#vet)  
**Returns**: a function that takes in a value, and returns true if ANY of the validator functions return true  

| Param | Type | Description |
| --- | --- | --- |
| ...validators | <code>function</code> | any number of validator functions |

<a name="vet.optional"></a>

### vet.optional(validator) ⇒
A function builder to optionally check a value

**Kind**: static method of [<code>vet</code>](#vet)  
**Returns**: a function that takes in a value, and returns true if the value does not exist, or the validator returns true  

| Param | Description |
| --- | --- |
| validator | a validator function |

