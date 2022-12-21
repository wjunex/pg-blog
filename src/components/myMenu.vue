<script setup>
import axios from 'axios'
import { ref,onMounted } from 'vue';

let categoryList = ref([])
let categoryLis2 = ref([
  {
    "id": 30,
    "name": "并与通龙中团张"
  },
  {
    "id": 60,
    "name": "主已分革设论到"
  },
  {
    "id": 2,
    "name": "选教温两便整"
  },
  {
    "id": 86,
    "name": "铁制联风办根"
  }
])

function getCategoryList() {
  var config = {
    method: 'get',
    url: 'http://127.0.0.1:4523/m1/2111624-0-default/getCategoryList',
    headers: {
      // 'User-Agent': 'Apifox/1.0.0 (https://www.apifox.cn)'
    }
  };

  axios(config)
    .then(function (response) {
      categoryList.value = response.data.data
      console.log(categoryList.value);
      console.log(categoryLis2.value);
    })
    .catch(function (error) {
      console.log(error);
    });
}

  getCategoryList();


</script>

<template>
  <div class="flex flex-direction align-center user-select">
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