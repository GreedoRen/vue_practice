<template>
  <div class="main-page">
    <h1>Онлайн кинотеатр</h1>
    <button
      type="button"
      class="btn btn-outline-light"
      @click="$router.push('/films')"
    >
      Перейти к фильмам
    </button>
  </div>
</template>

<style scoped>
.main-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

h1.main-page {
  color: #ffffff;
  font-size: 70px;
  margin-bottom: 20px;
}
</style>
