<script setup>
import NavBar from "@/components/NavBar.vue";
import Header from "@/components/Header.vue";
import Welcome from "@/components/Welcome.vue";
import CabinsOverview from "@/components/CabinsOverview.vue";
</script>

<template>
  <Header/>

  <NavBar/>

  <main>
    <Welcome/>
    <CabinsOverview/>
  </main>
</template>

<style scoped>
main {
  margin-top: 1.1rem;
}
</style>
