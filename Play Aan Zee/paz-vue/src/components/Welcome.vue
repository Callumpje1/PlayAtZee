<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2">
        <h5>Pick a Date:</h5> <!-- Title for the datepicker -->
        <Datepicker id="picker" v-model="date"></Datepicker>
        <h5>Pick a Location:</h5> <!-- Title for the location list -->
        <ul>
          <li><a href="#">Katwijk aan zee</a></li>
          <li><a href="#">Rennesse</a></li>
          <li><a href="#">Ijmuiden</a></li>
          <li><a href="#">Ijmuiden</a></li>
        </ul>
      </div>
      <div class="col-8">
        <div class="row">
          <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img
                alt="Boat on Calm Water"
                class="w-100 shadow-1-strong rounded mb-4"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
            />
            <img
                alt="Wintry Mountain Landscape"
                class="w-100 shadow-1-strong rounded mb-4"
                src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
            />
          </div>
          <div class="col-lg-4 mb-4 mb-lg-0">
            <img
                alt="Mountains in the Clouds"
                class="w-100 shadow-1-strong rounded mb-4"
                src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
            />
            <img
                alt="Boat on Calm Water"
                class="w-100 shadow-1-strong rounded mb-4"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
            />
          </div>
          <div class="col-lg-4 mb-4 mb-lg-0">
            <img
                alt="Waves at Sea"
                class="w-100 shadow-1-strong rounded mb-4"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
            />
            <img
                alt="Yosemite National Park"
                class="w-100 shadow-1-strong rounded mb-4"
                src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
            />
          </div>
        </div>
      </div>
      <div class="col-2">
        This is left content
      </div>
    </div>
  </div>

</template>

<script>
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
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