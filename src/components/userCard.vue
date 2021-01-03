<template>
  <div class="root">
    <img :src="imgUrl" alt="logo" width="360px" />
    <div class="product__card--info">
      <h2>{{ title }}</h2>
      <div class="price">{{ price }}</div>
      <div class="count">Доступно для доставки: {{ count }}</div>
      <button type="button">Добавить в корзину</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "userCard",
  props: ["title", "price", "imgUrl", "count"],
  computed: {},
  methods: {},
  watch: {},
};
</script>

<style scoped>
</style>