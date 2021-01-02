<template>
  <div class="root">
    <button @click="onDecrement">-</button>
    <label for="number">
      <input type="number" name="number" id="number" :value="counter" />
    </label>
    <button @click="onIncrement">+</button>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    onDecrement() {
      this.counter--;
    },
    onIncrement() {
      this.counter++;
    },
  },
};
</script>