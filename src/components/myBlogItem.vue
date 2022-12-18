<template>
  <div class="box">
    <el-image class="image user-select" src="https://w.wallhaven.cc/full/we/wallhaven-weql37.jpg" fit="cover" />
    <div class="flex align-center justify-between padding-tb-xs ">
      <a href="#" class="text-bold user-select" style="color:#000">HTML</a>
      <div class=" user-select">August 06, 2015</div>
    </div>
    <div class=" text-title line-2 margin-tb-xs">Fusce vulputate eleifend sapien purus quam</div>
    <div class="line-4">Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et,
      hendrerit quis,
      nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.</div>
    <div @click="gotodetails" class="more user-select flex align-center justify-center margin-tb-sm">
      <div class="padding-right-xs">More</div>
      <Right style="width: 1em; height: 1em; transform: translateY(2px);" />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

// 查看博客详情
const router = useRouter()
function gotodetails() {
  router.push({
    name: 'details',
  })
}</script>

<style scoped lang="scss">
.box {
  width: 300px;
  min-height: 500px;
  margin-bottom: 20px;

  .image {
    width: 100%;
    height: 250px;
  }

  .more {
    height: 40px;
    width: 120px;
    color: #999;
    border: 1px solid #f0f0f0;
  }

  .more:hover {
    color: #000;
    border: 2px solid #000;
  }
}
</style>