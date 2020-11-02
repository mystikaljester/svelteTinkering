<script>
  import DisplayWindow from "./DisplayWindow.svelte";

  let previousSelection = {
    color: "#333",
  };

  let colors = [
    {
      id: 1,
      name: "Red",
      color: "#b44",
      selected: false,
    },
    {
      id: 2,
      name: "Pink",
      color: "#b5b",
      selected: false,
    },
    {
      id: 3,
      name: "Green",
      color: "#495",
      selected: false,
    },
    {
      id: 4,
      name: "Blue",
      color: "#59f",
      selected: false,
    },
    {
      id: 5,
      name: "Yellow",
      color: "#bb0",
      selected: false,
    },
    {
      id: 6,
      name: "Purple",
      color: "#54a",
      selected: false,
    },
  ];

  function handleSelect(thisColor) {
    console.log();
    if (previousSelection) {
      previousSelection.selected = false;
    }
    previousSelection = thisColor;
    thisColor.selected = true;
    //maybe replace this with an on:blur event on the object?
  }
</script>

<style lang="scss">
  ul {
    display: flex;
    flex-flow: column nowrap;
    flex: 0 0 50%;
    list-style-type: none;
    margin: 0 20px;
    padding: 0;
    height: 100%;
  }

  li {
    display: flex;
    flex: 1 0 auto;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    display: flex;
    border: 1px solid var(--color);
    flex: 1 0 100%;
    padding: 10px 0;
    font-size: 20px;
    margin: 0px 0px 5px 0px;
    height: 100%;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  input {
    position: absolute;
    left: 0;
    opacity: 0;
  }

  .inverted {
    color: #3a3a3a;
    background: var(--color);
  }
</style>

<ul>
  {#each colors as color}
    <li>
      <label
        style="--color: {color.color};"
        class={color.selected ? 'inverted' : ''}>
        <input
          type="radio"
          bind:group={colors.selected}
          value={color.name}
          on:click={handleSelect(color)} />
        {color.name}:
        {color.color}
      </label>
    </li>
  {/each}
</ul>

<DisplayWindow color={previousSelection.color} />
