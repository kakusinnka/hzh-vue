<template>
  <div class="app-bg">
    <h1>{{ msg }}</h1>
    <h1>子组件给我的学生姓名：{{ stuname }}</h1>
    <h1>子组件给我的学校姓名：{{ schname }}</h1>
    <Student :sentStudenName="getStudenName"></Student>
    <Schoole @sentSchoolName="getSchoolName"></Schoole>
  </div>
</template>

<script>
import Student from "./components/Student.vue";
import Schoole from "./components/Schoole.vue";

export default {
  name: "App",
  data() {
    return {
      msg: "Hello Vue!",
      stuname: "",
      schname: "",
    };
  },
  components: {
    Student,
    Schoole,
  },
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
};
</script>

<style>
.app-bg {
  background-color: #42b983;
  color: #fff;
  padding: 10px;
}
</style>