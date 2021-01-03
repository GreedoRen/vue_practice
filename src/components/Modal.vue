<template>
  <div class="modal fade show">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            {{ title }}
          </h5>
          <button
            type="button"
            class="close"
            aria-label="Close"
            @click="closeModal"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <slot name="default"></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <button type="button" class="btn btn-secondary">Отмена</button>
            <button
              type="button"
              class="btn btn-primary"
              :disabled="!isRulesReaded"
            >
              Принять
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },

  methods: {
    closeModel() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal {
  display: block;
}
body .modal {
  height: 200px;
  overflow-y: scroll;
}
</style>
