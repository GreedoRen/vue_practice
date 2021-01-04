<template>
  <div class="text-editor">
    <textarea v-model="text"></textarea>
    <div class="output-text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
};
</script>

<style lang="scss" scoped>
textarea {
  width: 500px;
  height: 200px;
}
</style>
