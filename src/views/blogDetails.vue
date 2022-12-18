<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

function goback() {
  router.go(-1)
}


</script>

<template>
  <myHeader title="博客标题" :subheading="subheading"></myHeader>

  <div @click="goback"></div>
</template>