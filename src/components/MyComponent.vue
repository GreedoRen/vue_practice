<template>
  <div class="root">
    <label>
      Введите email

      <input type="email" :value="email" v-on:input="emailInput" />
      {{ email }}
    </label>
    <label>
      Введите password

      <input type="password" :value="password" />
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

  methods: {
    emailInput(e) {
      this.email = e.target.value;
    },
  },
};
</script>