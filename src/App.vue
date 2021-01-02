<template>
  <div id="app">
    <MyComponent />
  </div>
</template>

<script>
import MyComponent from "./components/MyComponent";

export default {
  name: "App",
  components: {
    MyComponent,
  },
};
</script>

<style>
#app {
  background-color: black;
  color: white;
}
</style>