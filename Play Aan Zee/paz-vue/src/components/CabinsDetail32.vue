<template>
  <div v-if="cabin">
    <div class="card-detail">
      <div class="card-body">{{ cabin.type }}</div>
      <div class="card-body">{{ cabin.location }}</div>
      <div class="card-body">{{ cabin.description }}</div>
      <div class="card-body">€ {{ cabin.pricePerWeek }}</div>
      <div class="card-footer">Available: {{ cabin.numAvailable }}</div>
    </div>
  </div>
  <div v-else>
    <h4>Please select a cabin from the list</h4>
  </div>
</template>

<script>
import Cabin from "@/models/cabins";

export default {
  name: "CabinsDetail32",
  props: {
    cabin: {
      type: Cabin,
      required: true,
    },
  },
};
</script>

<style scoped>


</style>

