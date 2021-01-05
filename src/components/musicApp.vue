<template>
  <div class="container">
    <header>
      <h1>Music</h1>
    </header>
    <main>
      <section class="player">
        <h2 class="song-title">{{ current.title }}</h2>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "music-app",
  data() {
    return {
      current: {
        title: "",
      },
    };
  },
  methods: {},
};
</script>

<style scoped>
</style>