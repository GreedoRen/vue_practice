<template>
  <div class="root">
    <div class="flex">
      <div class="img wrapper">
        <img
          v-show="isCatVisible"
          class="logo"
          :class="imgFilters"
          src="../assets/logo.png"
          alt="logo"
        />
        <!-- <p v-else>Скрыто</p> -->
      </div>
      <div class="controls">
        <h1>Заголовок</h1>
        <div class="buttons">
          <button @click="isCatVisible = !isCatVisible" type="button">
            Показать/скрыть
          </button>
          <button type="button">Уменьшить</button>
          <button type="button">Фильтр</button>
          <button type="button">Рамка</button>
        </div>
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
      imgFilters: {
        sepia: false,
        border: false,
        minimize: false,
      },
    };
  },
  computed: {},
  methods: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.logo {
  width: 300px;
  height: 300px;

  &.sepia {
    filter: sepia(100%);
  }

  &.border {
    border: 2 px solid red;
  }

  &.minimize {
    transform: scale(0.5);
  }
}
</style>