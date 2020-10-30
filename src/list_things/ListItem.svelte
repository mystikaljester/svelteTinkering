<script>
  export let name;
  export let color;
  export let id;
  export let selected = false;
</script>

{#if selected}
  <li id={id} style="--color: {color}" class="selected" on:click>
    {name}: {color}
  </li>
{:else}
  <li id={id} style="--color: {color}" on:click >
    {name}: {color}
  </li>
{/if}



<style lang="scss">
  li {
    border: 1px solid var(--color);
    padding: 10px 0;
    font-size: 20px;
    margin-bottom: 5px;

    &.selected {
      color: #3a3a3a;
      background: var(--color);
    }
  }
</style>