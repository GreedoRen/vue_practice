<template>
  <div id="app">
    <UserPage />
  </div>
</template>

<script>
import UserPage from "./components/UserPage";

export default {
  name: "App",
  components: {
    UserPage,
  },
};
</script>

<style>
#app {
  background-color: black;
  color: white;
}
</style>