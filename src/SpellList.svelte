<script>
  import App from "./App.svelte";

  export let spellListUri = `http://localhost:5000/api/spells/all`;
  let spellList;
  let spellListPromise = getSpells();

  async function getSpells() {
    debugger;
    const res = await fetch(spellListUri);

    const text = await res.text();
    spellList = JSON.parse(text);

    if (res.ok) {
      return spellList;
    } else {
      throw new Error(text);
    }
  }

  function handleLoad() {
    spellListPromise = getSpellList();
  }
</script>

<ul class="spellList" on:load={handleLoad}>
  {#await spellListPromise}
    <li>Getting spell list...</li>
  {:then spellList}
    <li>{spellList}</li>
  {:catch error}
    <li class="error">{error.message}</li>
  {/await}
</ul>
