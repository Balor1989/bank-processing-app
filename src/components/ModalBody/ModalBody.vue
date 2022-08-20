<template>
  <form class="card" @submit.prevent="onSubmit">
    <div class="mb-3">
      <label for="name" class="form-label">Name:</label>
      <input type="text" class="form-control" id="name" />
    </div>
    <div class="mb-3">
      <label for="phone" class="form-label">Phone:</label>
      <input type="phone" class="form-control" id="phone" />
    </div>
    <div class="mb-3">
      <label for="amount" class="form-label">Amount</label>
      <input type="number" class="form-control" id="amount" />
    </div>
    <div class="mb-3">
      <label for="status" class="form-label">Status</label>
      <select class="form-select" id="status">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <button type="submit" class="btn btn-success">Submit</button>
  </form>
</template>

<script>
import { useRequestForm } from "@/use/request.form";
export default {
  setup() {
    return {
      ...useRequestForm,
    };
  },
};
</script>

<style></style>
