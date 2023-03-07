<template>
  <div class="container-fluid mt-lg-1 ml-lg-2">
    <div class="row flex-row flex-nowrap overflow-auto">
      <div v-for="cabin in cabins" :key="cabin.id"
           :class="{active: cabin.isActive}" class="cabin"
           @click="activateCard(cabin)">
        <div class="card">
          <img :src="cabin.image" alt="cabin image" class="card-img-top"/>
          <div class="card-body">
            <b class="card-title mb-lg-1">{{ cabin.type }}</b>
            <p class="card-text mb-1">{{ cabin.location }}</p>
          </div>
        </div>
      </div>
    </div>
    <app-cabins-detail :cabin="selectedCabin"></app-cabins-detail>
  </div>
</template>

<script>
import Cabin from "@/models/cabins";
import CabinsDetail32 from "@/components/CabinsDetail32.vue";

export default {
  data() {
    return {
      cabins: [],
      selectedCabin: new Cabin,
    };
  },
  components: {
    'app-cabins-detail': CabinsDetail32
  },
  created() {
    for (let i = 0; i < 8; i++) {
      this.cabins.push(Cabin.createSampleCabin(this.cabins.length - 1 + 3))
    }
  },
  methods: {
    activateCard(cabin) {
      this.cabins.forEach((c) => {
        c.isActive = c.id === cabin.id;
      })
      this.selectedCabin = cabin;
      this.$emit('selectedCabin', cabin);

    },
    addCabin() {
      const newCabin = Cabin.createSampleCabin(this.cabins.length - 1 + 3);
      this.cabins.push(newCabin);
    }
  },
}

</script>

<style>
.card {
  border: none;
  display: inline-block;
  margin-right: 20px;
  height: 240px;
  width: 200px;
}

.cabin.active .card {
  background-color: aliceblue;
}

.overflow-auto {
  overflow-x: auto;
  white-space: nowrap;
}
</style>
