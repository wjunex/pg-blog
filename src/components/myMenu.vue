<template>
  <div class="flex flex-direction align-center">
    <div class="text-title">menu</div>

    <div class="flex align-center justify-between padding-lr" style="width: 100%; height: 50px;" v-for="item in 5"
      :key="item">
      <div>HTML</div>
      <Right style="width: 1em; height: 1em;"/>
    </div>

  </div>
</template>

<style scoped>

</style>