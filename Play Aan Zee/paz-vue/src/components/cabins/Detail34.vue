<template>
  <div v-if="cabin">
    <table class="table table-striped mt-lg-1">
      <h4>Cabin ID: {{ cabin.id }}</h4>
      <tbody>
      <tr>
        <th>Type</th>
        <td>
          <select v-model="tempCabin.type">
            <option v-for="type in availableTypes">{{ type }}</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>Location</th>
        <td>
          <select v-model="tempCabin.location">
            <option v-for="location in availableLocations">{{ location }}</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>Description</th>
        <td>
          <input v-model="tempCabin.description" type="text"/>
        </td>
      </tr>
      <tr>
        <th>Price Per Week</th>
        <td>
          <input v-model="tempCabin.pricePerWeek" type="number"/>
        </td>
      </tr>
      <tr>
        <th>Image</th>
        <td>
          <select v-model="tempCabin.image">
            <option v-for="image in availableImages">{{ image }}</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>Available</th>
        <td>
          <input v-model="tempCabin.numAvailable" type="number"/>
        </td>
      </tr>
      </tbody>
    </table>
    <div class="btn-toolbar" role="group">
      <button class="btn btn-outline-danger mr-2" type="button" @click="saveCabin()">Save</button>
      <button class="btn btn-outline-danger mr-2" type="button" @click="cancelChanges()">Cancel</button>
      <button class="btn btn-outline-danger mr-2" type="button" @click="resetChanges()">Reset</button>
      <button class="btn btn-outline-danger mr-2" type="button" @click="clearChanges()">Clear</button>
      <button class="btn btn-outline-danger mr-2" type="button" @click="removeCabin()">Delete</button>
    </div>
  </div>
  <div v-else>
    <h4 class="mt-lg-2">Please select a cabin from the list</h4>
  </div>
</template>

<script>
import Cabin from "@/models/Cabins";
import Locations from "@/models/Locations";

export default {
  name: "CabinsDetail34",
  props: ['cabin'],
  emits: ['update-cabin'],
  data() {
    return {
      tempCabin: this.cabin,
      availableTypes: Cabin.availableTypes(),
      availableImages: Cabin.availableImages(),
      availableLocations: Locations.availableLocations()
    };
  },
  watch: {
    cabin() {
      this.tempCabin = Cabin.copyConstructor(this.cabin)
    }
  },
  methods: {
    saveCabin() {
      const confirmed = confirm("Would you like to save the changes?");
      try {
        if (confirmed) {
          this.$emit("update-cabin", this.tempCabin);
          console.log(this.tempCabin)
          console.log(this.cabin)
        }
      } catch (error) {
        console.log(error);
      }
    },
    cancelChanges() {

    },
    resetChanges() {

    },
    clearChanges() {

    },
    removeCabin() {
      const confirmed = confirm("Are you sure you want to delete this cabin?")
      try {
        if (confirmed) {
          this.$emit("remove-cabin", this.cabin);
          this.cabin = null;
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
};
</script>

<style scoped>
input,
textarea {
  width: 80%;
}
</style>