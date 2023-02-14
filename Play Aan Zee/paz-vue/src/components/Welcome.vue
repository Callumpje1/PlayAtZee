<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2">
        <Datepicker v-model="date"></Datepicker>
      </div>
      <div class="col-8">
        <p>This is some text in the middle part of the page.</p>
      </div>
      <div class="col-2">
        <p>This is some text in the right part of the page.</p>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  components: { Datepicker },
  data() {
    return {
      date: null,
    };
  }
}
</script>

<style scoped>
</style>