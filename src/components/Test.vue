<template>
  <div>
    <h1 v-show="showFlg" class="showInfo">{{ message }}</h1>
    <button @click="showChange">切换显示与隐藏</button>
    <button @click="getSomeData">axios 获取数据 控制台确认</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Test",
  data() {
    return {
      message: "Hello, World!",
      showFlg: true,
    };
  },
  methods: {
    showChange() {
      this.showFlg = !this.showFlg;
    },
    getSomeData() {
      try {
        axios.get("http://localhost:8080/todos/2").then(
          (response) => {
            console.log("请求成功了！！！", response.data);
          },
          (error) => {
            console.log("请求失败了！！！", error.message);
          }
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>

<style scoped>
.showInfo {
  background-color: #2237af;
}
</style>