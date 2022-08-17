<template>
  <form class="card" @submit.prevent>
    <h1 class="title bold">Sign In</h1>
    <div class="mb-3">
      <label for="email">Email:</label>
      <input type="text" id="email" class="form-control" />
    </div>

    <div class="mb-3">
      <label for="password">Password:</label>
      <input type="text" id="password" class="form-control" />
    </div>

    <button class="btn btn-success" type="submit">Sign In</button>
  </form>
</template>

<script>
export default {};
</script>

<style scoped>
label {
  font-size: 18px;
}
.card {
  padding: 20px 40px;
}
.title {
  font-size: 35px;
  margin-bottom: 15px;
}
</style>
