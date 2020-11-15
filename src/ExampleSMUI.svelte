<script>
import Textfield from '@smui/textfield';
import Button from '@smui/button';
import {validoz, isValid, Message, isValidByName} from 'svelte-validoz';
let fields = [
    {
        name: "Full name",
        type: "fullname",
        value: ''
    },
    {
        name: "Email address",
        type: "email",
        value: ''
    }
]
let result;
let submited = false;
$: if(submited){
    result = validoz(fields);
}
let formSubmit = () =>{
    submited = true;
    result = validoz(fields);
    if(isValid(result)){
        alert('Everything is validated!');
    }
}
</script>

<form on:submit|preventDefault="{formSubmit}">
    <Textfield invalid={isValidByName(result, "Full name") ? false : true} label="Fullname" type="text" bind:value="{fields[0].value}"/>
    <Message result={result} name="Full name"/>
    <Textfield invalid={isValidByName(result, "Email address") ? false : true} label="Email address" type="text" bind:value="{fields[1].value}"/>
    <Message result={result} name="Email address"/>
    <Button letiant="raised" class="button">Sign in</Button>
</form>