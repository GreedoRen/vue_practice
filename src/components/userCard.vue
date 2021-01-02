<template>
  <div class="root">
    <div class="flex">
      <div class="img wrapper">
        <img
          v-show="isCatVisible"
          class="logo"
          :class="imgFilters"
          src="../assets/logo.png"
          :style="imgStyles"
          alt="logo"
        />
        <!-- <p v-else>Скрыто</p> -->
      </div>
      <div class="controls">
        <h1>Заголовок</h1>
        <div class="buttons">
          <button
            @click="isCatVisible = !isCatVisible"
            :class="isCatVisible ? '' : 'active'"
            type="button"
          >
            Показать/скрыть
          </button>
          <button
            type="button"
            :class="imgFilters.minimize ? 'active' : ''"
            @click="imgFilters.minimize = !imgFilters.minimize"
          >
            Уменьшить
          </button>
          <button
            type="button"
            :class="imgFilters.sepia ? 'active' : ''"
            @click="imgFilters.sepia = !imgFilters.sepia"
          >
            Фильтр
          </button>
          <button
            type="button"
            :class="imgFilters.border ? 'active' : ''"
            @click="imgFilters.border = !imgFilters.border"
          >
            Рамка
          </button>
        </div>
        <div class="sizes">
          {{ imgSizes.currentWidth }}
          <label for="width"
            ><input
              type="range"
              name="width"
              id="width"
              :value="imgSizes.currentWidth"
              @input="imgSizes.currentWidth = $event.target.value"
              :min="imgSizes.minWidth"
              :max="imgSizes.maxWidth"
          /></label>

          {{ imgSizes.currentHeight }}
          <label for="height"
            ><input
              type="range"
              name="height"
              id="height"
              :value="imgSizes.currentHeight"
              @input="imgSizes.currentHeight = $event.target.value"
              :min="imgSizes.minHeight"
              :max="imgSizes.maxHeight"
          /></label>
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
      imgSizes: {
        maxWidth: "500",
        maxHeight: "500",
        minWidth: "100",
        minHeight: "100",
        currentWidth: "500",
        currentHeight: "500",
      },
    };
  },
  computed: {
    imgStyles() {
      return {
        width: `${this.imgSizes.currentWidth}px`,
        height: `${this.imgSizes.currentHeight}px`,
      };
    },
  },
  methods: {},
  watch: {},
};
</script>

<style scoped>
.logo {
  width: 300px;
  height: 300px;
}

.logo.sepia {
  filter: sepia(100%);
}

.logo.border {
  border: 2px solid red;
}

.logo.minimize {
  transform: scale(0.5);
}

button.active {
  background-color: #c2c2c2;
}
</style>