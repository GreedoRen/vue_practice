<template>
  <div class="root">
    <div class="flex">
      <div class="img wrapper">
        <img v-if="isCatVisible" src="../assets/logo.png" alt="logo" />
        <p v-else>Скрыто</p>
      </div>
      <div class="controls">
        <h1>Заголовок</h1>
        <button @click="isCatVisible = !isCatVisible">Показать/скрыть</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "userCard",
  data() {
    return {
      isCatVisible: true,
    };
  },
  computed: {},
  methods: {},
  watch: {},
};
</script>

<style scoped></style>