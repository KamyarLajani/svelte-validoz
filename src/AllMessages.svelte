<script>
export let result;
</script>
    
{#if result}
    {#each result as item}
        <p class="invalid">{item.message}</p>
    {/each}
{/if}

<style>

p.invalid {
    margin: 3px 0px;
    font-size: 14px;
    color: red;
}
</style>