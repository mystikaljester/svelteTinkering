<script>
  import Card from "./Card.svelte";

  let deck;
  let cards = [];
  let deckPromise = getDeck();
  let cardsPromise = getCards();

  async function getDeck() {
    const res = await fetch(
      `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
    );

    const text = await res.text();
    deck = JSON.parse(text).deck_id;

    if (res.ok) {
      return deck;
    } else {
      throw new Error(text);
    }
  }

  async function getCards() {
    if (deck) {
      const res = await fetch(
        `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=3`
      );

      const text = await res.text();
      cards = JSON.parse(text).cards;

      if (res.ok) {
        return cards;
      } else {
        return new Error(text);
      }
    }
  }

  function handleLoad() {
    deckPromise = getDeck();
  }

  function handleClick() {
    cardsPromise = getCards();
  }

  function logDeck() {
    console.log(deck);
  }
</script>

<style type="text/scss">
  ul {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-evenly;
    list-style-type: none;
  }
</style>

<div class="cards" on:load={handleLoad}>
  {#await deckPromise}
    <p>Getting a deck...</p>
  {:then deck}
    <p>Deck Id is {deck}</p>
  {:catch error}
    <p>API is borken...{error.message}</p>
  {/await}
</div>

{#if deck}
  <div>
    <button on:click={handleClick}> Pull 3 cards </button>
    {#await cardsPromise then cards}
      {#if cards}
        <ul>
          {#each cards as card (card.code)}
            <Card {...card} />
          {/each}
        </ul>
      {/if}
    {:catch error}
      <p>API is borken...{error.message}</p>
    {/await}
  </div>
{/if}
