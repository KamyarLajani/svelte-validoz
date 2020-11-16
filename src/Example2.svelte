<script>
import {validoz, isValid, AllMessages} from 'svelte-validoz';
let submited = false;
import {fields} from './form.js';
let result;
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

<main>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <form on:submit|preventDefault="{formSubmit}">
                <h4>Form</h4>
                <div class="form-group">
                    <label for="exampleInputEmail1">Full name</label>
                    <input type="text" class="form-control" placeholder="Enter email" bind:value="{fields[0].value}">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="text" class="form-control" placeholder="Enter email" bind:value="{fields[1].value}">
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" id="exampleRadios" value="male" bind:group={fields[2].value}>
                    <label class="form-check-label" for="exampleRadios">Male</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio"  id="exampleRadios" value="female" bind:group={fields[2].value}>
                    <label class="form-check-label" for="exampleRadios">Female</label>
                </div>
                <div class="form-group">
                    <label for="age">Age</label>
                    <input type="number" class="form-control" placeholder="Age" bind:value="{fields[3].value}">
                </div>
                <div class="form-group">
                    <label for="number">3 + 3 = </label>
                    <input type="number" class="form-control" placeholder="Answer" bind:value="{fields[4].value}">
                </div>
                <AllMessages result={result}/>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</main>

<style>

</style>