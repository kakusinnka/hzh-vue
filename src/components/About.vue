<template>
  <div>
    <h1>About Page</h1>
    <p>This is the main About page.</p>

    <!-- 显示 query 参数 -->
    <div v-if="queryMessage">
      <h3>Query Parameter:</h3>
      <p>{{ queryMessage }}</p>
    </div>

    <!-- 子路由导航菜单 -->
    <nav>
      <ul>
        <li><router-link to="/about/overview">Overview</router-link></li>
        <li><router-link to="/about/team">Team</router-link></li>
        <li><router-link to="/about/history">History</router-link></li>
      </ul>
    </nav>

    <!-- 子路由显示区域 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "About",
  computed: {
    // 获取 query 参数
    queryMessage() {
      return this.$route.query.message || null;
    },
  },
  watch: {
    // 监听路由变化，实时更新 query 参数
    "$route.query": {
      handler(newQuery) {
        console.log("Query changed:", newQuery);
      },
      immediate: true,
    },
  },
  created() {
    console.log("About component created with query:", this.$route.query);
  },
};
</script>

<style>
nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 10px;
}

nav ul li {
  display: inline;
}

nav ul li a {
  text-decoration: none;
  color: blue;
}

nav ul li a.router-link-active {
  font-weight: bold;
  color: red;
}
</style>
