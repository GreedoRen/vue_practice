<template>
  <div id="app">
    <product-list />
  </div>
</template>

<script>
import ProductList from "./components/productList";

export default {
  name: "App",
  components: {
    ProductList,
  },
};
</script>

<style>
#app {
  background-color: black;
  color: white;
}
</style>