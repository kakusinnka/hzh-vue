<template>
  <div class="bg-child">
    {{ message }}
    <slot>我是默认插槽</slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello, 我是默认插槽!",
    };
  },
};
</script>

<style>
.bg-child {
  background-color: #e774aa; /* Light gray background */
}
</style>