<template>
  <div v-if="cabin">
    <table class="table table-striped mt-lg-1">
      <h4>Cabin ID: {{ cabin.id }}</h4>
      <tbody>
      <tr>
        <th>Type</th>
        <td>
          <select v-model="this.cabinCopy.type">
            <option v-for="type in availableTypes">{{ type }}</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>Location</th>
        <td>
          <select v-model="this.cabinCopy.location">
            <option v-for="location in availableLocations">{{ location }}</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>Description</th>
        <td>
          <input v-model="this.cabinCopy.description" type="text"/>
        </td>
      </tr>
      <tr>
        <th>Price Per Week</th>
        <td>
          <input v-model="this.cabinCopy.pricePerWeek" type="number"/>
        </td>
      </tr>
      <tr>
        <th>Image</th>
        <td>
          <select v-model="this.cabinCopy.image">
            <option v-for="image in availableImages">{{ image }}</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>Available</th>
        <td>
          <input v-model="this.cabinCopy.numAvailable" type="number"/>
        </td>
      </tr>
      </tbody>
    </table>
    <div class="btn-toolbar" role="group">
      <button class="btn btn-outline-danger mr-2" type="button" @click="saveChanges()">Save</button>
      <button class="btn btn-outline-danger mr-2" type="button" @click="cancelChanges()">Cancel</button>
      <button class="btn btn-outline-danger mr-2" type="button" @click="resetChanges()">Reset</button>
      <button class="btn btn-outline-danger mr-2" type="button" @click="clearEdit()">Clear</button>
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
  emits: ['save-changes', 'remove-cabin'],
  data() {
    return {
      availableTypes: Cabin.availableTypes(),
      availableImages: Cabin.availableImages(),
      availableLocations: Locations.availableLocations(),
      cabinCopy: null
    };
  },
  created() {
    this.cabinCopy = Cabin.copyConstructor(this.cabin)
  },
  watch: {
    cabin(newValue) {
      this.cabinCopy = Cabin.copyConstructor(newValue);
    },
  },
  methods: {
    saveChanges() {
      const confirmed = confirm("Do you want to save your changes?");
      if (confirmed) {
        this.$emit("save-changes", this.cabinCopy);
      }
    },
    resetChanges() {
      this.cabinCopy = this.cabin
    },
    clearEdit() {
      const {id, ...rest} = this.cabinCopy;
      Object.keys(rest).forEach((key) => {
        this.cabinCopy[key] = null;
      });
    },
    //TODO
    cancelChanges() {

    },
    removeCabin() {
      const confirmed = confirm("Are you sure you want to delete this cabin?")
      try {
        if (confirmed) {
          this.$emit("remove-cabin", this.cabin);
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
};
</script>

<style scoped>

</style>