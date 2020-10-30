<script>
import ListItem from "./ListItem.svelte";

  let selectedItem;

  let listItems = [
  { 
    id: 1,
    name: 'Red',
    color: '#b00'
  },
  { 
    id: 2,
    name: 'Pink',
    color: '#b0b'
  },
  { 
    id: 3,
    name: 'Green',
    color: '#0b0',
  },
  { 
    id: 4,
    name: 'Blue',
    color: '#00b'
  },
  { 
    id: 5,
    name: 'Yellow',
    color: '#bb0'
  },
  { 
    id: 6,
    name: 'Aqua',
    color: '#0bb'
  },
];

function handleSelect(e) {
  this;
}
</script>

<ul>
  {#each listItems as item (item.id)}
    <ListItem {...item} on:click={handleSelect} />
  {/each}
</ul>

<style lang="scss">
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
</style>