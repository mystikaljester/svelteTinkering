import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "This is it",
  },
});

export default app;
