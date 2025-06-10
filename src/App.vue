<template>
  <div class="app-bg">
    <Test></Test>
    <h1>{{ msg }}</h1>
    <h1>子组件给我的学生姓名：{{ stuname }}</h1>
    <h1>子组件给我的学校姓名：{{ schname }}</h1>
    <Student :sentStudenName="getStudenName"></Student>
    <Schoole @sentSchoolName="getSchoolName"></Schoole>
  </div>
</template>

<script>
import Test from "./components/Test.vue";
import Student from "./components/Student.vue";
import Schoole from "./components/Schoole.vue";
import PubSub from "pubsub-js";

export default {
  name: "App",
  data() {
    return {
      msg: "Hello Vue!",
      stuname: "",
      schname: "",
    };
  },
  components: { Test, Student, Schoole },
  methods: {
    getStudenName(sname) {
      console.log("@@@我拿到了子组件给我的学生姓名：", sname);
      this.stuname = sname;
    },
    getSchoolName(sname) {
      console.log("@@@我拿到了子组件给我的学校名字：", sname);
      this.schname = sname;
    },
  },
  mounted() {
    // 订阅消息
    PubSub.subscribe("subSchoolName", (msg, sname) => {
      console.log("@@@我订阅的消息名字：", msg);
      console.log("@@@我订阅到了子组件给我的学校名字：", sname);
      this.schname = sname;
    });
  },
};
</script>

<style>
.app-bg {
  background-color: #42b983;
  color: #fff;
  padding: 10px;
}
</style>