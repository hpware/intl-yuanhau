<script setup lang="ts">
import { ref } from "vue";
useSeoMeta({
  title: "Projects | yuanhau Intl.",
});
const projects = [1];
</script>
<template>
  <div class="main" id="main">
    <h1 class="title">My projects</h1>
    <div class="content">
      <!--<div v-for="item in projects" :key="{{item.id}}"></div>-->
    </div>
  </div>
</template>
<style scoped>
h1.title {
  margin-bottom: 0;
  font-size: 2.5em;
}
h6.dec {
  margin-top: 0;
}
h1 {
  margin-bottom: 0;
}
</style>
