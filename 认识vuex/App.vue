<template>
  <div class="app-bg">
    <div>{{ "count: " + $store.state.count }}</div>
    <div>{{ "放大 10 被的 count: " + $store.getters.bigCount }}</div>
    <button @click="increment">点我利用 vuex 给 count 加 1</button>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    increment() {
      this.$store.dispatch("increment");
    },
  },
  mounted() {
    console.dir(this.$store);
  },
};
</script>

<style>
.app-bg {
  background-color: #42b983;
  color: #fff;
  padding: 10px;
  height: 100vh;
}
</style>