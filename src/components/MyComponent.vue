<template>
  <div class="root">
    <label>
      Введите email

      <input
        type="email"
        :value="email"
        @input="emailInput($event.target.value)"
      />
      {{ email }}
    </label>
    <label>
      Введите password

      <input
        type="password"
        :value="password"
        @input="passwordInput($event.target.value)"
      />
    </label>

    {{ email }}
    {{ password }}
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
    emailInput(value) {
      this.email = value;
    },
    passwordInput(value) {
      this.password = value;
    },
  },
};
</script>