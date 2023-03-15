<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light nav-fill">
    <div id="navbarSupportedContent" class="navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li :class="{ active: $route.name === 'Home' }" class="nav-item">
          <router-link class="nav-link" to="/home">Home</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"
             href="#"
             id="navbarDropdown"
             role="button"
             data-toggle="dropdown"
             aria-haspopup="true"
             aria-expanded="false">
            Cabins
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link class="dropdown-item" :to="{ name: 'CabinsOverview31' }">
              Cabins Overview 31
            </router-link>
            <router-link class="dropdown-item" :to="{ name: 'CabinsOverview32' }">
              Cabins Overview 32
            </router-link>
            <router-link class="dropdown-item" :to="{ name: 'CabinsOverview33' }">  // Add new route
              Cabins Overview 33
            </router-link>
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