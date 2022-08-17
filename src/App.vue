<template>
  <div class="container">
    <header class="card">
      <TheNavbar />
    </header>
    <div class="card center">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
      <router-view />
    </div>
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar";
export default {
  components: { TheNavbar },
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";

.container {
  padding: 40px 0;
}

.card {
  overflow: hidden;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
  background-color: rgb(231, 222, 222);
}
.center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
