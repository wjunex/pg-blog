<script setup>
import { ref } from 'vue';
import {getCategoryList} from '@/api/blog'

let categoryList = ref([])
getCategoryList().then(res => categoryList.value = res.data)

</script>

<template>
  <div class="flex flex-direction align-center user-select" style="position: sticky;">
    <div class="text-title">menu</div>
    <div class="flex align-center justify-between padding-lr" style="width: 100%; height: 50px;" v-for="item in categoryList"
      :key="item.id">
      <div>{{ item.name }}</div>
      <Right style="width: 1em; height: 1em;"/>
    </div>
  </div>
</template>

<style scoped>

</style>