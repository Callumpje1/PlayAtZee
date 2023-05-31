<template>
  <div>
    <app-header/>
    <app-nav-bar/>
    <div class="container-fluid mb-2">
      <router-view/>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/Header.vue";
import AppNavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppNavBar
  }
};
</script>

<style scoped>
</style>
