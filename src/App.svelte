<script>
  import Button from "./Button.svelte";
  import ThreeCards from "./ThreeCards.svelte";
</script>

<style type="text/scss">
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 2em;
    font-weight: 400;
    font-family: "Fredoka One", sans-serif;
  }

  a {
    display: inline;
    color: #b0b;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  * {
    display: block;
  }
</style>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&family=Fredoka+One&display=swap|"
    rel="stylesheet" />
</svelte:head>

<main>
  <h1>
    Playing around with
    <a href="https://svelte.dev/">Svelte</a>
    and the
    <a href="https://deckofcardsapi.com">DeckOfCardsAPI</a>.
  </h1>
  <ThreeCards />
</main>
