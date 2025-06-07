<template>
  <div class="sch-bg">
    <h1>学校姓名：{{ sname }}</h1>
    <h1>学校年龄：{{ sage }}</h1>
    <button @click="sendMyName">把我的学校名给父组件</button>
  </div>
</template>

<script>
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
  },
};
</script>

<style>
.sch-bg {
  background-color: rgb(226, 179, 25);
}
</style>