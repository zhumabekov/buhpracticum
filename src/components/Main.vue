<template>
  <main>
    <bread-crumbs></bread-crumbs>
    <router-view></router-view>
  </main>
</template>
<script>
import BreadCrumbs from "./BreadCrumbs.vue"
export default {
  components: {
    BreadCrumbs
  }
}
</script>
<style>
  main{
    width: 100%;
    overflow: auto;
  }
</style>