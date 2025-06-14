<template>
  <div class="bg-child">
    {{ message }}
    <slot name="myslot02">我是具名插槽</slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello, 我是具名插槽!",
    };
  },
};
</script>

<style>
.bg-child {
  background-color: #e774aa; /* Light gray background */
}
</style>