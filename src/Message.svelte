<script>
export let result;
export let name;
</script>

{#if result}
    {#each result as item}
        {#if item.field == name}
            {#if item.message === ''}
                <small class="valid"></small>
            {:else}
                <small class="invalid">{item.message}</small>
            {/if}
        {/if}
    {/each}
{/if} 

<style>
small.valid {
    display: none;
}
small.invalid {
    color: red;
}
</style>