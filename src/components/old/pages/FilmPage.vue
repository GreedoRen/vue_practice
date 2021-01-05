<template>
  <div class="film-page">
    <div class="container" v-if="film">
      <h1>{{ film.title }}</h1>
      <img :src="film.img" :alt="film.title" />
      <div class="section">
        <p class="section__title">Немного о сюжете:</p>
        <p class="section__description">{{ film.description }}</p>
      </div>
      <div class="section">
        <p class="section__title">Рейтинг:</p>
        <p class="section__description">{{ film.rating }}</p>
      </div>
      <div class="section">
        <p class="section__title">Актерский состав:</p>
        <p class="section__description">{{ film.actors.join(", ") }}</p>
      </div>
      <div class="section">
        <p class="section__title">Режисеры:</p>
        <p class="section__description">{{ film.directors.join(", ") }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import films from "../mocks/films";

export default {
  data() {
    return {
      film: null,
    };
  },
  created() {
    const film = films.find((film) => film.id == this.$route.params.id);
    if (film) {
      this.film = film;
    }
  },
};
</script>

<style scoped>
</style>
