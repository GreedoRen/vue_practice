<template>
  <div id="app">
    <UserCard />
  </div>
</template>

<script>
import UserCard from "./components/userCard";

export default {
  name: "App",
  components: {
    UserCard,
  },
};
</script>

<style>
#app {
  background-color: black;
  color: white;
}
</style>