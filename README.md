# svelte-validoz

svelte-validoz is [Validoz](https://www.npmjs.com/package/validoz) for Svelte for `form validation`.

### Installation

```sh
$ npm install svelte-validoz
```

![GIF demo](https://raw.githubusercontent.com/KamyarLajani/svelte-validoz/main/demo1.gif)


### Sample code

```html
<script>
import {validoz, isValid, Message} from 'svelte-validoz';
import {fields} from './form.js';
let result;
let submited = false;
$: if(submited){
    result = validoz(fields);
}
let formSubmit = () =>{
    submited = true;
    result = validoz(fields);
    // if everything validated
    if(isValid(result)){
        alert('Everything is validated!');
    }
}
</script>

<form on:submit|preventDefault="{formSubmit}">
    <h4>Form</h4>
    <input type="text" placeholder="Enter email" bind:value="{fields[0].value}"><br>
    <Message result={result} name="Email address"/>
    <input type="number" placeholder="Age" bind:value="{fields[1].value}"><br>
    <Message result={result} name="Age"/>
    <button type="submit">Submit</button>
</form>

```
```js
// form.js file
export let fields = [
    {
        name: "Email address",
        type: "email",
        value: ''
    },
    {
        name: "Age",
        type: "number",
        value: 12,
        min: 18
    },
];
```
Remove those lines if you only want to validate after submits.

```js
let submited = false;
$: if(submited){
    result = validoz(fields);
}
```
#### All messages in one place
Example below to put all messages in one place by `AllMessages` component
```html
<script>
import {validoz, isValid, AllMessages} from 'svelte-validoz';
import {fields} from './form.js';
let result;
let submited = false;
$: if(submited){
    result = validoz(fields);
}
let formSubmit = () =>{
    submited = true;
    result = validoz(fields);
    // if everything validated
    if(isValid(result)){
        alert('Everything is validated!');
    }
}
</script>

<form on:submit|preventDefault="{formSubmit}">
    <h4>Form</h4>
    <input type="text" placeholder="Enter email" bind:value="{fields[0].value}"><br>
    <input type="number" placeholder="Age" bind:value="{fields[1].value}"><br>
    <AllMessages result={result}/> // add it once
    <button type="submit">Submit</button>
</form>

```
### Examples
 - [Example1](https://github.com/KamyarLajani/svelte-validoz/blob/main/src/Example1.svelte)
 - [Example2](https://github.com/KamyarLajani/svelte-validoz/blob/main/src/Example2.svelte)

#### See [validoz](https://www.npmjs.com/package/validoz) for more information about types and field properties


### Author
Kamyar Lajani

License
----

MIT

