<template>
  <div class="root">
    <input type="text" @input="text = $event.target.value" />
    <ul>
      <li v-for="(name, index) in searchNames" :key="index">
        {{ name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "userCard",
  data() {
    return {
      text: "",
      users: ["Jack", "Jhon", "Mike"],
    };
  },
  computed: {
    searchNames() {
      return this.users.filter((name) =>
        name.toLowerCase().includes(this.text.toLowerCase())
      );
    },
  },
  methods: {},
  watch: {},
};
</script>

<style scoped>
</style>