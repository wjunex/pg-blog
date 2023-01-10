<script setup>
import {computed, ref} from 'vue';
import myBlogItem from '../components/myBlogItem.vue';
import myPagination from '@/components/myPagination.vue'
import {getBlogList} from  '@/api/blog'

let subheading = ref(`This is Photoshop's version of Lorem Ipsum.Proin gravida nibh vel velit auctor aliquet.Aenean sollicitudin,
  lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem`)

/*获取博客列表*/
let blogList = ref([])
let total = ref(0)
function getList(page) {
  getBlogList({
    page:page,
  }).then(res => {
    blogList.value = res.data
    total.value = res.total
  })
}
getList(1)

/*利用补齐元素的方式，让最后一行的元素左对齐*/
let gapCount = computed(() => {
  return  blogList.value.length % 3 === 0 ? 0 : 3 -(blogList.value.length % 3)
})

</script>

<template>
  <myHeader title="首页" :subheading="subheading"></myHeader>
  <myLayout>
    <div class="list">
      <myBlogItem :details="item" v-for="item in blogList" :key="item.id"></myBlogItem>
      <div style=" width: 300px" v-for="(item,index) in gapCount" :key="index"></div>
    </div>
    <myPagination :total="total" @change="(e) => getList(e)"></myPagination>

  </myLayout>

</template>

<style scoped lang="scss">
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
