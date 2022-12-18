<script setup>
import myMenu from '@/components/myMenu.vue'

const props = defineProps({
  isMenu: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div class="content">
    <div class="main">
      <slot></slot>
    </div>
    <div class="menu" v-if="props.isMenu">
      <myMenu></myMenu>
    </div>
  </div>

</template>

<style scoped lang="scss">
.content {
  width: 100%;
  display: flex;
  padding: 20px 0;

  .main {
    flex: 1;
    color: var(--text-color);
  }

  .menu {
    min-height: 100vh;
    width: 300px;
  }
}
</style>
