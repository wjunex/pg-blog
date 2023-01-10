<script setup>
import {computed, ref} from "vue";
import myText from "@/views/myText.vue";


const dataList = ref([])

let params = [
  {number:6,price:1},
  {number:5,price:10},
  {number:8,price:5},
]

dataList.value = params

function getTotalPrice () {
  let total = 0;
  params.forEach((item) => {
    total = total + item.number * item.price
  })
  return total
}

const totalPrice = ref(0)





</script>
<template>
  <div class="about">
  <myHeader title="关于"></myHeader>
    <myText @changeNumber="(e) => item.number = e" :details="item" v-for="item in dataList" :key="item.price"></myText>
    总计：{{getTotalPrice()}}
  </div>
</template>

<style>

</style>
