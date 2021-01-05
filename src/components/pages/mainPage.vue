// header
// search-list
// weather
// news -> redirect


<template>
  <div class="main__container">
    <Header />

    <div class="main__container--body">
      <div class="body__search">Search block <NewsPage /></div>
      <div class="body__news">News block <SearchedPage /></div>
    </div>
  </div>
</template>

<script>
import Header from "../header";
import NewsPage from "./newsPage";
import SearchedPage from "./searchedPage";

export default {
  components: { Header, NewsPage, SearchedPage },
  data() {
    return {
      API_KEY: "5476758be27e93d367c94a3a966b9d5f",
      city: "",
      units: "metric", // button,
      lang: "ru", //button
    };
  },
};
</script>

<style scoped>
</style>
