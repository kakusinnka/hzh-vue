<template>
  <div class="app-bg">
    <Child01>
      <p>这是父组件向子组件的<strong>默认插槽</strong>传递的内容</p>
    </Child01>
    <Child02>
      <template v-slot:myslot02>
        <p>这是父组件向子组件的<strong>具名插槽</strong>传递的内容</p>
      </template>
    </Child02>
    <Child03>
      <template v-slot:myslot03="slotProps">
        <p>
          这是父组件向子组件的<strong>作用域插槽</strong>传递的内容:{{
            slotProps.message
          }}
        </p>
      </template>
    </Child03>
  </div>
</template>

<script>
import Child01 from "./components/Child01";
import Child02 from "./components/Child02";
import Child03 from "./components/Child03";

export default {
  name: "App",
  components: { Child01, Child02, Child03 },
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