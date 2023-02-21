<script setup>
import NavBar from "@/components/NavBar.vue";
import Header from "@/components/Header.vue";
import Welcome from "@/components/Welcome.vue";
</script>

<template>
  <Header/>

  <NavBar/>

  <main>
    <Welcome/>
  </main>
</template>

<style scoped>
main{
  margin-top: 1.1rem;
}
</style>
