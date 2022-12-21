<template>
  <div class="flex ">
    <div class="box" v-show="n > 1"  @click="back">
    <Back  style="width: 1em; height: 1em;"/>
    </div>
    <div class="box" v-for="item in pageArr" @click="changeAdd(item)" :key="item">{{ item }}</div>
    <div class="box" @click="next" v-show=" n <= total - 4">
      <Right style="width: 1em; height: 1em; "  />

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
let n = ref(1)
let pageArr = computed(() => {
  let arr = [n.value, n.value + 1 > total.value ? 0 : n.value + 1, n.value + 2 > total.value ? 0 : n.value + 2, n.value + 3 > total.value ? 0 : n.value + 3];
  return arr.filter(item => item > 0)
})

let currentPage = ref(1)
let total = ref(16)


function changeAdd(val) {
  if (currentPage.value === val) return;
  currentPage.value = val
  console.log(currentPage.value);

}
function next() {
  if (n.value + 4 > total.value) return
  n.value = n.value + 4
}
function back() {
  n.value = n.value - 4
}


</script>

<style scoped lang="scss">
.box {
  width: 40px;
  height: 40px;
  border: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  color: #999;
  transition: 0.4s;
  user-select: none;
}

.box:hover {
  border: 2px solid #000;
  color: #000;
}
</style>