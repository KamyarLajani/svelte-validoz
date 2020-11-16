<script>
export let result;
export let name;
</script>

{#if result}
    {#each result as item}
        {#if item.field == name}
            {#if item.message === ''}
                <p class="valid"></p>
            {:else}
                <p class="invalid">{item.message}</p>
            {/if}
        {/if}
    {/each}
{/if} 

<style>
p.valid {
    display: none;
}
p.invalid {
    color: red;
}
</style>