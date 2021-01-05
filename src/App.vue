<template>
  <div id="app">
    <MainPage />
  </div>
</template>

<script>
import MainPage from "./components/pages/mainPage";

export default {
  name: "App",
  components: { MainPage },
};
</script>

<style>
#app {
  background-color: black;
  color: white;
}
</style>