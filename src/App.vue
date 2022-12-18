<script setup>
import { RouterView } from 'vue-router';
import myNav from '@/components/myNav.vue'
import myFooter from '@/components/myFooter.vue';
</script>

<template>
  <myNav></myNav>
  <div class="content">
    <RouterView />
  </div>
  <myFooter></myFooter>
</template>

<style scoped>
.content {
  width: 100%;
  min-height: 100vh;
}
</style>