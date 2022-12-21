<script setup>
import { ref } from 'vue';
import myBlogItem from '../components/myBlogItem.vue';
import myPagination from '@/components/myPagination.vue'

let subheading = ref(`This is Photoshop's version of Lorem Ipsum.Proin gravida nibh vel velit auctor aliquet.Aenean sollicitudin,
  lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem`)
</script>

<template>
  <myHeader title="首页" :subheading="subheading"></myHeader>
  <myLayout>
    <div class="list">
      <myBlogItem v-for="item in 6" :key="item"></myBlogItem>
      
    </div>
    <myPagination></myPagination>

  </myLayout>

</template>

<style scoped lang="scss">
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
