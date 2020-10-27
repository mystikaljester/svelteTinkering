<script>
  export let code;
  export let suit;
  export let value;
  export let image;
</script>

<style type="text/scss">
  li {
    background: var(--bgColor);
    color: var(--textColor);
    display: flex;
    flex-flow: column nowrap;
    flex: 1 1 auto;
    margin: 1%;
    padding: 20px;

    img {
      width: 100%;
    }
  }
</style>

<li id="card_{code}">
  <div>{value} of {suit}</div>
  <img src={image} alt="{value} of {suit}" />
</li>
