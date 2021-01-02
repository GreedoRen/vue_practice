<template>
  <div class="root">
    <h1 class="h1">Заголовок</h1>
    <div class="info">
      <h2 class="h2">{{ getAuthorsFullName }}</h2>

      <ul>
        <li>#1</li>
        <li>#2</li>
        <li>#3</li>
      </ul>
    </div>
    <span>Кол-во: 0</span>
    <ul></ul>
  </div>
</template>

<script>
export default {
  name: "userCard",
  data() {
    return {
      firstName: "Ivan",
      secondName: "Ivanovich",
      lastName: "NotIvanov",
    };
  },
  computed: {
    getAuthorsFullName() {
      return `${this.firstName} ${this.secondName} ${this.lastName}`;
    },
  },
  methods: {},
};
</script>

<style scoped></style>