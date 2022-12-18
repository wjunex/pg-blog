<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function gotodetails() {
  router.push({
    name: 'details',
  })

}
</script>
<template>
  <div class="about">
  <myHeader title="关于"></myHeader>
    
    <div @click="gotodetails"></div>
  </div>
</template>

<style>

</style>
