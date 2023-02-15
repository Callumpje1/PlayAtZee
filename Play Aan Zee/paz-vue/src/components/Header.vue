<template>
  <div class="jumbotron-fluid">
    <div class="row">
      <div class="col-sm-4">
        <img src="src/assets/nemo.png" class="img-fluid" alt="Image1">
      </div>
      <div class="col-sm-4 text-center" id="text">
        <h1 class="display-4">Play at Zee</h1>
        <p class="lead">Chill out and feel good</p>
      </div>
      <div class="col-sm-4">
        <img src="src/assets/shell.png" class="img-fluid" alt="Image2" id="right">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "header"
}
</script>

<style scoped>
.row{
  background:url("@/assets/sea_background.jpg");
  background-position-y: top;
  background-size: cover;
}

.img-fluid{
  max-width: 100px;
  max-height: 100px;
}

#right{
  float: right;
}

#text{
  color: white;
}
</style>