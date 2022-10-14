<template>
  <app-header></app-header>
  <div class="flex flex-row">
    <side-bar></side-bar>
    <app-bookmark-list></app-bookmark-list>
  </div>
</template>

<script>
import SideBar from "@/components/home/SideBar.vue";
// import AppBookmarkList from "@/components/common/AppBookmarkList.vue";

export default {
  name: "HomePage",
  components: { SideBar },
};
</script>

<style scoped></style>
