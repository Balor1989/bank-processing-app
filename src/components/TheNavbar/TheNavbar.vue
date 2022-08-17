<template>
  <header class="card">
    <nav class="navbar">
      <div class="d-flex align-items-center">
        <a class="navbar-brand" href="#">
          <img src="@/assets/logo.png" alt="" width="28" height="28" />
        </a>
        <h3 class="title">VueBank</h3>
      </div>

      <ul class="d-flex">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/operations">Operations</router-link></li>
        <li><a href="#">Messages</a></li>
        <li><a href="#">Sign out</a></li>
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

.title,
li {
  font-weight: 700;
}
.card {
  margin-bottom: 25px;
}
</style>
