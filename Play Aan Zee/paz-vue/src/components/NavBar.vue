<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light nav-fill">
    <div id="navbarSupportedContent" class="navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item px-2">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item px-2 dropdown">
          <a id="navbarDropdown" aria-expanded="false" aria-haspopup="true" class="nav-link dropdown-toggle"
             data-toggle="dropdown"
             href="#" role="button">
            Cabins
          </a>
          <div aria-labelledby="navbarDropdown" class="dropdown-menu">
            <a class="dropdown-item" href="#">All cabins overview</a>
            <a class="dropdown-item" href="#">Cabins</a>
            <a class="dropdown-item" href="#">Cabins</a>
            <a class="dropdown-item" href="#">Cabins</a>
          </div>
        </li>
        <li class="nav-item px-2">
          <a class="nav-link" href="#">Rentals</a>
        </li>
        <li class="nav-item px-2">
          <a class="nav-link" href="#">My Account</a>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item px-2">
          <a class="nav-link" href="#">Sign up</a>
        </li>
        <li class="nav-item px-2">
          <a class="nav-link" href="#">Log in</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
</style>