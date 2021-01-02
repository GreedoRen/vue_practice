<template>
  <div class="root">
    <label>
      Введите email

      <input type="email" v-bind:value="email" />
    </label>
    <label>
      Введите password

      <input type="password" v-bind:value="password" />
    </label>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  data() {
    return {
      email: "test@email.com",
      password: "testPassword",
    };
  },
};
</script>