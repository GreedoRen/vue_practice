<template>
  <div id="app">
    <TextEditor />
  </div>
</template>

<script>
import TextEditor from "./components/TextEditor";

export default {
  name: "App",
  components: {
    TextEditor,
  },
};
</script>

<style>
#app {
  background-color: black;
  color: white;
}
</style>