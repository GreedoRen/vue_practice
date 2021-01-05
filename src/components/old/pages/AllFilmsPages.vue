<template>
  <div class="films-page container">
    <h2>Выбери фильм на свой вкус</h2>
    <films-list :films="films" />
  </div>
</template>

<script>
import FilmsList from "../components/FilmsList";

export default {
  components: { FilmsList },
  data() {
    return {
      films,
    };
  },
};
</script>

<style scoped>
h2 {
  font-size: 40px;
  color: #ffffff;
  margin-bottom: 30px;
}
</style>
