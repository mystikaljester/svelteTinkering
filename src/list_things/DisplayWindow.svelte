<script>
  export let color = "#333";
</script>

<style lang="scss">
  div {
    flex: 1 0 auto;
    background: var(--boxColor);
    min-width: 100px;
    height: 95%;
    font-size: 22px;

    p {
      display: inline;
      max-width: 100%;
    }
  }
</style>

<div style="--boxColor: {color};">
  <p style="color: {color === '#333' ? '#fff' : 'var(--boxColor)'}">
    Maybe click something?
  </p>
</div>
