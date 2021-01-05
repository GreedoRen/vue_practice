//logo
//search -> redicrect (search-mixin)

<template>
  <div class="header__body">
    <h1 class="header__body--title">Weather</h1>
    <input v-model="searchText" @input="search" type="text" />
  </div>
</template>

<script>
import SearchMixin from "./mixins/search";

export default {
  name: "Header",
  mixins: [SearchMixin],
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    search() {
      this.fetchWeaher(this.searchText);
    },
  },
  computed: {},
};
</script>

<style scoped>
</style>
