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
    <span>Кол-во: {{ users.length }}</span>
    <ul>
      <li v-for="(value, key, index) in users[0]" :key="index">
        {{ value }}
      </li>
    </ul>
    <button type="button" @click="currentPage--">-</button>
    <button
      v-for="page in pages"
      :key="page"
      @click="currentPage = page"
      type="button"
    >
      {{ page }}
    </button>
    <button type="button" @click="currentPage++">+</button>

    <p>Страница {{ currentPage }} из {{ pages }}</p>
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

      users: [
        { id: "1", name: "Jhon" },
        { id: "2", name: "Marie" },
        { id: "3", name: "Roger" },
      ],
      pages: 3,
      currentPage: 1,
    };
  },
  computed: {
    getAuthorsFullName() {
      return `${this.firstName} ${this.secondName} ${this.lastName}`.toUpperCase();
    },
  },
  methods: {
    getIdAndName(user) {
      return `ID: ${user.id};
            Name: ${user.name};`;
    },
    loadUser(page) {
      console.log(page);
    },
  },
  watch: {
      currentPage(newValue, oldValue)
  }
};
</script>

<style scoped></style>