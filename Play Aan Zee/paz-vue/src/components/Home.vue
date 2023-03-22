<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2">
        <h5>Pick a Date:</h5>
        <Datepicker id="picker" v-model="date"></Datepicker>
        <h5>Pick a Location:</h5>
        <div v-for="location in Locations.availableLocations()">
          <li><a href="#">{{ location }}</a></li>
        </div>
      </div>
      <div class="col-8">
        <div class="row">
          <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img
                alt="Boat on Calm Water"
                class="w-100 shadow-1-strong rounded mb-4"
                src="src/assets/cabins/cabin-1.jpg"
            />
            <img
                alt="Wintry Mountain Landscape"
                class="w-100 shadow-1-strong rounded mb-4"
                src="src/assets/cabins/cabin-2.jpg"
            />
          </div>
          <div class="col-lg-4 mb-4 mb-lg-0">
            <img
                alt="Mountains in the Clouds"
                class="w-100 shadow-1-strong rounded mb-4"
                src="src/assets/cabins/cabin-3.jpg"
            />
            <img
                alt="Boat on Calm Water"
                class="w-100 shadow-1-strong rounded mb-4"
                src="src/assets/cabins/cabin-4.jpg"
            />
          </div>
          <div class="col-lg-4 mb-4 mb-lg-0">
            <img
                alt="Waves at Sea"
                class="w-100 shadow-1-strong rounded mb-4"
                src="src/assets/cabins/cabin-2.jpg"
            />
            <img
                alt="Yosemite National Park"
                class="w-100 shadow-1-strong rounded mb-4"
                src="src/assets/cabins/cabin-3.jpg"
            />
          </div>
        </div>
      </div>
      <div class="col-2">
        This is right content
      </div>
    </div>
  </div>

</template>

<script>
import Locations from "@/models/Locations";
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  computed: {
    Locations() {
      return Locations
    }
  },
  components: {Datepicker},
  data() {
    return {
      date: null,
    };
  }
}
</script>

<style scoped>
h5, #picker, ul {
  padding-bottom: 0.4rem;
}
</style>