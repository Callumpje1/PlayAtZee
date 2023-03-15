<template>
  <div>
    <app-header />
    <app-nav-bar />
    <router-view />

  </div>
</template>

<script>
import AppHeader from "@/components/Header.vue";
import AppNavBar from "@/components/NavBar.vue";

export default {
  name: "App33",
  components: {
    AppHeader,
    AppNavBar
  }
};
</script>

<style scoped>

</style>
