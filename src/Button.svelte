<!-- UNUSED COMPONENT.  JUST HERE FOR TINKERINGS -->
<script>
  let user = {
    loggedIn: false,
  };

  function toggle() {
    user.loggedIn = !user.loggedIn;
  }
</script>

<style type="text/scss">
  button {
    background: var(--btnBg);
    color: var(--btnColor);
  }
</style>

{#if !user.loggedIn}
  <button on:click={toggle} style="--btnBg: #333; --btnColor: #eee;">
    Log in
  </button>
{:else}
  <button on:click={toggle} style="--btnBg: #eee; --btnColor: #333;">
    Log out
  </button>
{/if}
