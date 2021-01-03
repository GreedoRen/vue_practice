<template>
  <div id="app">
    <UserForm />
  </div>
</template>

<script>
import UserForm from "./components/userForm";

export default {
  name: "App",
  components: {
    UserForm,
  },
};
</script>

<style>
#app {
  background-color: black;
  color: white;
}
</style>