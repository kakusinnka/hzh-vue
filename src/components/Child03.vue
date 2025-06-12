<template>
  <div class="bg-child">
    {{ message }}
    <slot name="myslot03" :message="message">我是作用域插槽</slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello, 我是作用域插槽!",
    };
  },
};
</script>

<style>
.bg-child {
  background-color: #e774aa; /* Light gray background */
}
</style>