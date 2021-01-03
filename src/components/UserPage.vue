<template>
  <div class="user-page">
    <button type="button" class="btn btn-primary" @click="openModal">
      Подробнее
    </button>
    <modal
      v-if="isModalOpen"
      title="Пользовательское соглашение"
      @close="isModalOpen = false"
    >
    </modal>
  </div>
</template>

<script>
import Modal from "./Modal";

export default {
  components: { Modal },
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
  },
};
</script>

<style scoped>
</style>
