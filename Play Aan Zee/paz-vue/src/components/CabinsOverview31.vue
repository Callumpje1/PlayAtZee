<template>
  <h2>Cabins Overview</h2>
  <table class="table">
    <thead>
    <tr>
      <th>Type</th>
      <th>Location</th>
      <th style="width: 60%">Description</th>
      <th>Price per week</th>
      <th>Number available</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="cabin in cabins" :key="cabin.id">
      <td>{{ cabin.type }}</td>
      <td>{{ cabin.location }}</td>
      <td>{{ cabin.description }}</td>
      <td>{{ cabin.pricePerWeek }}</td>
      <td>{{ cabin.numAvailable }}</td>
    </tr>
    </tbody>
  </table>
  <button class="btn btn-primary mt-3" @click="addCabin">Add Cabin</button>
</template>


<script>
import Cabin from "@/models/cabins.js";

export default {
  name: "CabinsOverview",

  data() {
    return {
      cabins: []
    };
  },
  created() {
    for (let i = 0; i < 8; i++) {
      this.cabins.push(Cabin.createSampleCabin(this.cabins.length - 1 + 3))
    }
  },
  methods: {
    addCabin() {
      const newCabin = Cabin.createSampleCabin(this.cabins.length - 1 + 3);
      this.cabins.push(newCabin);
    }
  }
};
</script>

<style scoped>

</style>