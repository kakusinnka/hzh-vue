<template>
  <div class="sch-bg">
    <h1>学校姓名：{{ sname }}</h1>
    <h1>学校年龄：{{ sage }}</h1>
    <button @click="sendMyName">把我的学校名给父组件</button>
    <button @click="unbindMyName">解绑自定义事件</button>
    <button @click="pubMyName">把我的学校名发布给父组件</button>
  </div>
</template>

<script>
import PubSub from "pubsub-js";

export default {
  name: "Schoole",
  data() {
    return {
      sname: "清华大学",
      sage: 100,
    };
  },
  methods: {
    sendMyName() {
      this.$emit("sentSchoolName", this.sname);
    },

    unbindMyName() {
      // 解绑自定义事件
      this.$off("sentSchoolName");
    },
    pubMyName() {
      // 发布消息
      PubSub.publish("subSchoolName", this.sname);
    },
  },
};
</script>

<style>
.sch-bg {
  background-color: rgb(226, 179, 25);
}
</style>