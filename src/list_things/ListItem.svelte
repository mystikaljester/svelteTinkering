<script>
  export let name;
  export let color;
  export let id;
  export let selected = false;

  function handleClick() {
    selected = !selected;
  }
</script>

<style lang="scss">
  label {
    display: block;
    border: 1px solid var(--color);
    padding: 10px 0;
    font-size: 20px;
    margin: 0px 0px 5px 0px;
  }

  input {
    position: absolute;
    left: 0;
    &:checked ~ label {
      color: #3a3a3a;
      background: var(--color);
    }
  }
</style>

<input type="radio" {id} name="color" value="id" />
<label for={id} style="--color: {color}"> {name}: {color} </label>
