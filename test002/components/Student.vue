<template>
  <div class="stu-bg">
    <h1>学生姓名：{{ sname }}</h1>
    <h1>学生年龄：{{ sage }}</h1>
    <button @click="sendMyName">把我的姓名给父组件</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      sname: "张三",
      sage: 18,
    };
  },
  props: ["sentStudenName"],
  methods: {
    sendMyName() {
      this.sentStudenName(this.sname);
    },
  },
};
</script>

<style>
.stu-bg {
  background-color: rgb(188, 76, 216);
}
</style>