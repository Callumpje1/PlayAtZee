<script setup>
import NavBar from "@/components/NavBar.vue";
import Header from "@/components/Header.vue";
import CabinsOverview from "@/components/CabinsOverview32.vue";
</script>

<template>
  <Header/>

  <NavBar/>

  <main>
    <CabinsOverview/>
  </main>
</template>

<style scoped>
main {
  margin-top: 1.1rem;
}
</style>
