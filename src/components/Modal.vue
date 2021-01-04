<template>
  <div class="modal fade show">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            {{ title }}
          </h5>
          <button type="button" class="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body" @scroll="onScroll">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <button type="button" class="btn" @click="closeModal">
              Отмена
            </button>
            <button
              type="button"
              class="btn"
              @click="closeModal"
              :disabled="!isRuleReaded"
            >
              Сохранить
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollHandler from "../mixins/scrollHandler";

export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  mixins: [ScrollHandler],
  data() {
    return {
      isRuleReaded: false,
    };
  },
  beforeCreate() {
    console.log("Before create");
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    onScrollEnd() {
      this.isRuleReaded = true;
    },
  },
};
</script>

<style scoped>
.modal {
  display: block;
}
.modal-body {
  height: 200px;
  overflow-y: scroll;
}
</style>
