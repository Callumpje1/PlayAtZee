<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light nav-fill">
    <div id="navbarSupportedContent" class="navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li :class="{ active: $route.name === 'Home' }" class="nav-item">
          <router-link class="nav-link" to="/home">Home</router-link>
        </li>
        <li :class="{ active: $route.name === 'CabinsOverview31' }" class="nav-item">
          <router-link class="nav-link" to="/cabins/Overview31">Cabins 31</router-link>
        </li>
        <li :class="{ active: $route.name === 'CabinsOverview32' }" class="nav-item">
          <router-link class="nav-link" to="/cabins/Overview32">Cabins 32</router-link>
        </li>
        <li class="nav-item px-2 dropdown">
          <a id="navbarDropdown" aria-expanded="false" aria-haspopup="true" class="nav-link dropdown-toggle"
             data-toggle="dropdown"
             href="#" role="button">
            Cabins
          </a>
          <div aria-labelledby="navbarDropdown" class="dropdown-menu">
            <a class="dropdown-item" href="#">CabinsOv</a>
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
        <li :class="{ active: $route.name === 'Sign-up' }" class="nav-item">
          <router-link class="nav-link" to="/sign-up">Sign-up</router-link>
        </li>
        <li :class="{ active: $route.name === 'Login' }" class="nav-item">
          <router-link class="nav-link" to="/login">Login</router-link>
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