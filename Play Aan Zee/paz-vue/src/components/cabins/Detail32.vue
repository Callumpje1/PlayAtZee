<template>
  <div v-if="this.$route.params.cabin">
    <table class="table table-striped mt-lg-1">
      <h4>Cabin ID: {{ this.$route.params.id}}</h4>
      <tbody>
      <tr>
        <th>Type</th>
        <td>
          <select v-model="this.$route.params.type" v-on:input="updateCabin">
            <option v-for="type in availableTypes" v-bind:value="type">{{ type }}</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>Location</th>
        <td>
          <select v-model="this.$route.params.location" v-on:input="updateCabin">
            <option v-for="location in availableLocations" v-bind:value="location">{{ location }}</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>Description</th>
        <td>
          <input v-model="this.$route.params.description" type="text" v-on:input="updateCabin"/>
        </td>
      </tr>
      <tr>
        <th>Price Per Week</th>
        <td>
          <input v-model="this.$route.params.pricePerWeek" type="number" v-on:input="updateCabin"/>
        </td>
      </tr>
      <tr>
        <th>Image</th>
        <td>
          <select v-model="this.$route.params.image" v-on:input="updateCabin">
            <option v-for="image in availableImages" v-bind:value="image">{{ image }}</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>Available</th>
        <td>
          <input v-model="this.$route.params.numAvailable" type="number" v-on:input="updateCabin"/>
        </td>
      </tr>
      </tbody>
    </table>
    <button class="btn btn-danger mb-lg-2" @click="removeCabin()">Delete Cabin</button>
  </div>
  <div v-else>
    <h4 class="mt-lg-2">Please select a cabin from the list</h4>
  </div>
</template>

<script>
import Cabin from "@/models/cabins";
import Locations from "@/models/Locations";

export default {
  name: "CabinsDetail32",
  props: {
    cabin: {
      type: Cabin
    },
  },
  created() {
    console.log(this.$route.params)
  },
  data() {
    return {
      availableTypes: Cabin.availableTypes(),
      availableImages: Cabin.availableImages(),
      availableLocations: Locations.availableLocations()
    };
  },
  methods: {
    updateCabin() {
      this.$emit("update-cabin", this.cabin);
    },
    removeCabin() {
      const confirmed = confirm("Are you sure you want to delete this cabin?");
      if (confirmed) {
        this.$emit("remove-cabin", this.cabin);
        this.cabin = null;
      }
    },

  },
};
</script>

<style scoped>
input,
textarea {
  width: 80%;
}
</style>


