<template>
  <div class="container-fluid mt-lg-1 ml-lg-2">
    <div class="row flex-row flex-nowrap overflow-auto">
      <div v-for="cabin in cabins" :key="cabin.id"
           :class="{active: cabin.isActive}" class="cabin"
           @click="onSelect(cabin)">
        <div class="card">
          <img :src="cabin.image" alt="cabin image" class="card-img-top"/>
          <div class="card-body">
            <b class="card-title mb-lg-1">{{ cabin.type }}</b>
            <p class="card-text mb-1">{{ cabin.location }}</p>
          </div>
        </div>
      </div>
    </div>
    <button class="btn btn-primary mt-lg-2" @click="addCabin">Add Cabin</button>
    <router-view :cabin="selectedCabin" @update-cabin="selectedCabin = $event" @remove-cabin="removeCabin($event)"/>
  </div>
</template>

<script>
import Cabin from "@/models/cabins";
import {router} from "@/router";

export default {
  data() {
    return {
      cabins: [],
      selectedCabin: null,
    };
  },
  created() {
    for (let i = 0; i < 8; i++) {
      this.cabins.push(Cabin.createSampleCabin(this.cabins.length + 100000 * 3))
    }
  },
  methods: {
    onSelect(cabin) {
      this.cabins.forEach((c) => {
        if (c.id === cabin.id) {
          c.isActive = !c.isActive;
        } else {
          c.isActive = false;
        }
      });
      if (cabin.isActive) {
        this.selectedCabin = cabin;
        router.push({name: "Detail34", params: {id: cabin.id}});
        this.$emit("selectedCabin", cabin);
      } else {
        this.selectedCabin = null
        router.push({name: "Overview34"})
        this.$emit("selectedCabin", null)
      }
    },
    addCabin() {
      const newCabin = Cabin.createSampleCabin(this.cabins.length + 100000 * 3);
      this.cabins.push(newCabin);
      this.onSelect(newCabin);
    },
    removeCabin(cabin) {
      const index = this.cabins.indexOf(cabin);
      if (index > -1) {
        this.cabins.splice(index, 1);
        this.selectedCabin = null;
      }
    },
  },
}


</script>

<style>

.row {
  padding: 5px;
}

.card {
  border: none;
  display: inline-block;
  margin-right: 20px;
  height: 240px;
  width: 200px;
}

.cabin.active .card {
  background-color: darkolivegreen;
  color: whitesmoke;
}

.card:hover {
  transform: scale(1.02);
}

.overflow-auto {
  overflow-x: auto;
  white-space: nowrap;
}
</style>