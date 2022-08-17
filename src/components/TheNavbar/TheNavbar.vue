<template>
  <header class="card">
    <nav class="navbar">
      <div class="d-flex align-items-center">
        <a class="navbar-brand" href="#">
          <img src="@/assets/logo.png" alt="" width="28" height="28" />
        </a>
        <h3 class="bold">VueBank</h3>
      </div>

      <ul class="d-flex">
        <li class="bold"><router-link to="/">Home</router-link></li>
        <li class="bold">
          <router-link to="/operations">Operations</router-link>
        </li>
        <li class="bold"><a href="#">Messages</a></li>
        <li class="bold"><a href="#">Sign out</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
li:not(:last-child) {
  margin-right: 10px;
}

.card {
  margin-bottom: 25px;
}
</style>
