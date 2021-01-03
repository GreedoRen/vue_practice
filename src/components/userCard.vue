<template>
  <div class="root">
    <img :src="imgUrl" alt="logo" width="360px" />
    <div class="product__card--info">
      <h2>{{ title }}</h2>
      <div class="price">{{ price }}</div>
      <div class="count">Доступно для доставки: {{ count }}</div>
      <button type="button" @click="addToBusket">Добавить в корзину</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "userCard",
  props: {
    title: {
      type: String,
      validator(value) {
        return value.length < 20;
      },
    },
    price: {
      type: Number,
      required: true,
    },
    imgUrl: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1499933374294-4584851497cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
    },
    count: Number,
  },
  computed: {},
  methods: {
    addToBusket() {
      this.$emit("addToBusket", this.price);
    },
  },
  watch: {},
};
</script>

<style scoped>
</style>