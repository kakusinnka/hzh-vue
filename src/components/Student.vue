<template>
    <div class="stu-bg">
        <h1 ref="my-header">{{sname}}</h1>
        <button @click="showName">点我控制台输出标题DOM</button>
    </div>
</template>

<script>
import { mixin } from '../mixin';

export default {
    name: 'Student',
    props: ['name'],
    data() { 
        return {
            sname: this.name
        }
    },
    methods: {
        showName() {
            console.dir(this.$refs["my-header"])
        }
    },
    mixins: [mixin]
}
</script>

<style>
    .stu-bg {
        background-color: rgb(226, 179, 25);
    }
</style>