<template>
  <div>
    <h2>Cabins Overview</h2>
    <table class="table">
      <thead>
      <tr>
        <th>Type</th>
        <th>Location</th>
        <th>Description</th>
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
  </div>
  <button class="btn btn-primary mt-3" @click="addCabin">Add Cabin</button>
</template>


<script>
import Cabin from "@/models/cabins.js";

export default {
  name: "CabinsOverview",

  data() {
    return {
      cabins: [],
      nextId: 10000,
      cabinsAdded:false
    };
  },
  created(){
    if (this.cabinsAdded === false){
      for (let i = 0; i < 8; i++) {
        const cabin = Cabin.createSampleCabin(this.nextCabinId);
        this.cabins.push(cabin);
        this.nextCabinId += 3;
      }
      this.cabinsAdded = true
    }
  },
  methods: {
    addCabin() {
      const newCabin = Cabin.createSampleCabin(this.cabins[this.cabins.length - 1].id + 3);
      this.cabins.push(newCabin);
    }
  }
};
</script>

<style scoped>

</style>