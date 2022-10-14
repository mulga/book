<template>
  <header-app></header-app>
  <div class="flex flex-row">
    <side-bar></side-bar>
  </div>
</template>

<script>
import SideBar from "@/components/home/SideBar.vue";

export default {
  name: "HomePage",
  components: { SideBar },
};
</script>

<style scoped></style>
