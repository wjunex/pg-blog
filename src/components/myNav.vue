<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>

  <div class="nav user-select">
    <div>

    </div>
    <div>
      <RouterLink to="/">首页</RouterLink>
      <RouterLink to="/about">关于</RouterLink>
    </div>

  </div>
</template>

<style scoped lang="scss">
.nav {
  position: sticky;
  top: 0;
  background-color: var(--theme-bgc);
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  z-index: 999;
  font-size: 16px;
}

a {
  text-decoration: none;
  transition: 0.4s;
  margin-left: 10px;
  color: var(--text-gray);
}

a:hover {
  color: var(--theme-color);

}

a.router-link-active {
  color: var(--theme-color);
}
</style>