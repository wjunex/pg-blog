<template>

  <div class="header" :style="`background-image: url('${bgc}');`">
    <div class="content" :style="`color: ${bgc ? ' #fff' : 'var(--theme-color)'};`">
      <div class="title">{{ props.title }}</div>
      <!-- <el-breadcrumb separator="/">
          <el-breadcrumb-item v-for="item in 4" :key="item">
            <div class="breadcrumb-item">首页{{ item }}</div>
          </el-breadcrumb-item>
        </el-breadcrumb> -->
      <div class="Subheading">
        {{ props.subheading }}
      </div>

    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
let props = defineProps({
  title: String,
  subheading: String
})

let bgc = ref('')

const setbgc = async function () {
  let m = await import('@/assets/image/banner/bg.png');
  bgc.value = m.default
}
setbgc()


onMounted(() => {
})




</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 300px;
  background-attachment: fixed;
  background-position: bottom;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  width: 80%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // color: var(--text-color-white);
  user-select: none;

  .title {
    font-size: 30px;
    font-weight: 600;
  }

  .Subheading {
    margin-top: 10px;
  }
}
</style>