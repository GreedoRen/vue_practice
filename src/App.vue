<template>
  <div id="app">
    <SignUp />
  </div>
</template>

<script>
import SignUp from "./components/SignUp";

export default {
  name: "App",
  components: {
    SignUp,
  },
};
</script>

<style>
#app {
  background-color: black;
  color: white;
}
</style>