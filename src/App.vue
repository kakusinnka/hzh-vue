<template>
  <div class="app-bg">
    <h1>{{ msg }}</h1>
    <button @click="showStudent">点我控制台输出组件实例</button>
    <Student ref="student" name="张三"/>
  </div>
</template>

<script>
import Student from './components/Student.vue'
import { mixin } from './mixin'

export default {
    name: 'App',
    data() {
        return {
            msg: 'Hello Vue!'
        }
    },
    components: {
        Student
    },
    methods: {
        showStudent() {
            console.dir(this.$refs.student)
            this.hello();
        }
    },
    mixins: [mixin]
}
</script>

<style>
    .app-bg {
        background-color: #42b983;
        color: #fff;
    }
</style>