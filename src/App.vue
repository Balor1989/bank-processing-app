<template>
  <div class="container">
    <div class="card">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
      <router-view />
    </div>
  </div>
</template>

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
</style>
