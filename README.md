# Validoz

Validoz is both Client side and Server side form field validator.

### Installation

```sh
$ npm install validoz
```
##### Or [Download](https://docs.google.com/uc?export=download&id=1TYyxy6bbwldhbzPJUUDmzvCJb2wIkaIx)

### Sample code

```sh
let {validoz, isValid} = require('validoz');
let fields = [
    {
        name: "Full name",
        type: "fullname",
        value: 'John doe'
    },
    {
        name: "Email address",
        type: "email",
        value: 'example@gmail.com'
    },
    {
        name: "Age",
        type: "number",
        value: 12,
        min: 18,
    }
]
let result = validoz(fields);
console.log(result); 
/* 
result: 
[
    { field: 'Full name', message: '' },
    { field: 'Email address', message: '' },
    { field: 'Age', message: 'Age must be at least 18' }
] */
console.log(isValid(result)); // false
```
Whenever a field message value be empty string ('') means no validation error.
In the example above we put fields in array and all the fields message shoul be be emptry string '' to isValid() function returns true otherwise it returns false.
### Single field example
Here is an example of single object field instead of array of objects.
```sh
let {validoz, isValid, isValidByName} = require('validoz');

let field = {
    name: "Full name",
    type: "fullname",
    value: 'John doe'
};

let result = validoz(field);
console.log(result); // { field: 'Full name', message: '' }
isValid(result); // true
isValidByName(result, 'Full name'); // true
```
### Types
Here is the types of field.

| name | Description |
| ------ | ------ |
| `text` | Any characters |
| `password` | String must contain at least one numberic, one upper case, one lower case characters and the length at least 6 characters |
| `fullname` | String should contain at least 2 words with 3 characters for each of the words and separated by space. It can contain more than one word.|
| `username` | Like Instagram username. |
| `word` | Alphabet characters. |
| `number` | An integer number |
| `date` | Example `21/03/2020` string. |
| `time` | Example `05:12` string. |

### Options

| name | Description |
| ------------- | ------ |
| `name` | Field name |
| `value` | Field value |
| `type` | Field type |
| `required` | `Boolean`. default: `true` |
| `min` and `max` | Minumum and Maximum of type number. Each of them can be passed alone. |
| `minDigits` and `maxDigits` | Minumum and Maximum digits of type number. Each of them can be passed alone. |
| `minLength` and `maxLength` | Minimum and Maximum length of the string types. |
| `dateFormat` | String values of `mm/dd/yyyy`, `mm-dd-yyyy`, `dd/mm/yyyy`, `dd-mm-yyyy`, `yyyy/mm/dd` and `yyyy-mm-dd` |
| `equal` | A field value and equal value to be equal. |
| `notEqual` | A field value and equal value not to be equal. |



### Date example
```sh
let {validoz, isValid, isValidByName} = require('validoz');

let field = {
    name: "Date",
    type: "date",
    value: '24/05/2020',
    dateFormat: 'dd/mm/yyyy',
    startDate: '08/02/2020',
    endDate: '24/05/2020',
};

let result = validoz(field);
console.log(result); // { field: 'Date', message: '' }
isValid(result); // true
isValidByName(result, 'Date'); // true
```

### Other example

```sh
let {validoz, isValid, isValidByName} = require('validoz');

let field = [
    {
        name: "Full name",
        type: "text",
        value: 'Hello world',
        minLength: 6
    },
    {
        name: "Email address",
        type: "email",
        value: 'example@.com'
    },
    {
        name: "Age",
        type: "number",
        value: 12,
        min: 18,
        max: 60,
    },
    {
        name: "Best friend",
        type: "text",
        value: 'Doe',
        equal: 'John' // value must be John
    },
    {
        name: "Password",
        type: "password", // you can also pass text if you don't want regex pattern to be conditioned
        value: '123456',
        minLength: 6,
        maxLength: 30,
    }
]
let result = validoz(field);
console.log(result); 

isValid(result); // false
/*
Returns: 
[
  { field: 'Full name', message: '' },
  { field: 'Email address', message: 'Email address is invalid' },
  { field: 'Age', message: 'Age must be between 18 and 60' },
  { field: 'Best friend', message: 'Best friend value is wrong' },
  {
    field: 'Password',
    message: 'Password must contain at least one numberic, one upper case and one lower case characters and the length at least 6 characters'
  }
]
*/
isValid(result); // false
isValid(result[0]); // "Full name", true
isValidByName(result, 'Full name'); // true
isValidByName(result, 'Email address'); // false
isValidByName(result, 'Password'); // false


```
### Author
Kamyar Lajani

License
----

MIT

