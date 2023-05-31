<template>
  <nav class="navbar-expand navbar-light bg-light">
    <div id="navbarSupportedContent" class="navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/home">Home</router-link>
        </li>
        <li class="nav-item dropdown">
          <a id="navbarDropdown"
             aria-expanded="false"
             aria-haspopup="true"
             class="nav-link dropdown-toggle"
             data-toggle="dropdown"
             href="#"
             role="button">
            Cabins
          </a>
          <div aria-labelledby="navbarDropdown" class="dropdown-menu">
            <router-link :to="{ name: 'Overview31' }" class="dropdown-item">
              Cabins Overview 31
            </router-link>
            <router-link :to="{ name: 'Overview32' }" class="dropdown-item">
              Cabins Overview 32
            </router-link>
            <router-link :to="{ name: 'Overview33' }" class="dropdown-item">
              Cabins Overview 33
            </router-link>
            <router-link :to="{ name: 'Overview34' }" class="dropdown-item">
              Cabins Overview 34 (Guarded)
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
        <li class="nav-item">
          <router-link class="nav-link" to="/sign-up">Sign-up</router-link>
        </li>
        <li class="nav-item">
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

.navbar-nav{
  padding-left:30px;
  padding-right:30px;
}

</style>