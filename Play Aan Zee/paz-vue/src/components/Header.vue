<template>
  <div class="jumbotron-fluid">
    <div class="row">
      <div class="col-sm-4">
        <img alt="Image1" class="img-fluid" src="src/assets/nemo.png">
      </div>
      <div id="text" class="col-sm-4 text-center">
        <h1 class="display-4">Play at Zee</h1>
        <div class="d-flex flex-column flex-sm-row align-items-center justify-content-center">
          <p class="lead mr-lg-2">Chill out and feel good</p>
          <p id="currentDate">{{ currentDate }}</p>
        </div>
      </div>
      <div class="col-sm-4">
        <img id="right" alt="Image2" class="img-fluid" src="src/assets/shell.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  data() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const today = new Date();
    const dayOfWeek = daysOfWeek[today.getDay()];
    const day = today.getDate();
    const month = months[today.getMonth()];
    const year = today.getFullYear();

    return {
      currentDate: `${dayOfWeek}, ${day} ${month} ${year}`,
    };
  },
};
</script>

<style scoped>
.row {
  background: url("@/assets/sea_background.jpg");
  background-position-y: top;
  background-size: cover;
}

.img-fluid {
  max-width: 100px;
  max-height: 100px;
}

#right {
  float: right;
}

#text {
  color: white;
}

#currentDate {
  color: white;
}
</style>