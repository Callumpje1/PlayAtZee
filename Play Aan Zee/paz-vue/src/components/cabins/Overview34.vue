<template>
  <div class="container-fluid mt-lg-1">
    <div class="row flex-row flex-nowrap overflow-auto">
      <div v-for="cabin in cabins" :key="cabin.id"
           :class="{active: cabin.isActive}" class="cabin"
           @click="onSelect(cabin)">
        <div class="card shadow-sm">
          <img :src="cabin.image" alt="cabin image" class="card-img-top"/>
          <div class="card-body">
            <b class="card-title mb-lg-1">{{ cabin.type }}</b>
            <p class="card-text mb-1">{{ cabin.location }}</p>
          </div>
        </div>
      </div>
    </div>
    <button class="btn btn-outline-success mt-lg-2" @click="addCabin">Add Cabin</button>
    <router-view :cabin="this.selectedCabin"
                 @save-changes="onSaveChanges"
                 @remove-cabin="removeCabin"/>
  </div>
</template>

<script>
import Cabin from "@/models/Cabins";
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
    onSelect(tempCabin) {
      this.cabins.forEach((c) => {
        if (c.id === tempCabin.id) {
          c.isActive = !c.isActive;
        } else {
          c.isActive = false;
        }
      })

      if (tempCabin.isActive) {
        this.selectedCabin = tempCabin;
        router.push({name: "Detail34", params: {id: tempCabin.id}});
        this.$emit("selectedCabin", tempCabin);
      } else {
        this.selectedCabin = null
        router.push({name: "Overview34"})
        this.$emit("selectedCabin", null)
      }
    },
    onSaveChanges(tempCabin) {
      const index = this.cabins.indexOf(this.selectedCabin);
      if (index > -1) {
        this.cabins[index] = Object.assign({}, tempCabin);
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