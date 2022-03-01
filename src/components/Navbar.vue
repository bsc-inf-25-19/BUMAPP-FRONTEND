<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo01"
      aria-controls="navbarTogglerDemo01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <router-link :to="{ name: 'Home' }">
        <a class="navbar-brand" href="#" style="color:azure">Bumapp</a>
      </router-link>
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <router-link :to="{ name: 'Admin' }">
            <a class="nav-link" href="#" style="color:azure">Admin panel</a>
          </router-link>
        </li>
        <li class="nav-item active">
          <router-link :to="{ name: 'SignUp' }">
            <a class="nav-link" href="#" style="color:azure">
              Sign up
              <span class="sr-only">(current)</span>
            </a>
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" style="color:azure">Sign in</a>
        </li>
      </ul>
      <form class="form-inline my-5 my-lg-0">
        <input
          class="form-control mr-sm-3"
          type="search"
          placeholder="Support coming soon"
          aria-label="Search"
          style="color:azure"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>