<template>
  <div>
    <h1>Home Page</h1>
    <p>Welcome to the Home Page!</p>

    <!-- 跳转到 About 页面并传递 query 参数 -->
    <router-link
      :to="{ path: '/about', query: { message: 'Hello from Home!' } }"
    >
      Go to About with Query
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
