<template>
  <form class="card" @submit.prevent="onSubmit" id="modalForm">
    <div class="mb-3">
      <label for="name" class="form-label">Name:</label>
      <input
        type="text"
        :class="['form-control', { 'is-invalid': nameError }]"
        id="name"
        v-model="name"
      />
      <span v-if="nameError" class="error-message">{{ nameError }}</span>
    </div>

    <div class="mb-3">
      <label for="phone" class="form-label">Phone:</label>
      <input
        type="phone"
        :class="['form-control', { 'is-invalid': phoneError }]"
        id="phone"
        v-model="phone"
      />
      <span v-if="phoneError" class="error-message">{{ phoneError }}</span>
    </div>

    <div class="mb-3">
      <label for="amount" class="form-label">Amount</label>
      <input
        type="number"
        :class="['form-control', { 'is-invalid': amountError }]"
        id="amount"
        v-model.number="amount"
      />
      <span v-if="amountError" class="error-message">{{ amountError }}</span>
    </div>

    <div class="mb-3">
      <label for="status" class="form-label">Status</label>
      <select
        :class="['form-select', { 'is-invalid': statusError }]"
        id="status"
        v-model="status"
      >
        <option value="done">Done</option>
        <option value="cancelled">Cancelled</option>
        <option value="active">Active</option>
        <option value="pending">Pending</option>
      </select>
      <span v-if="statusError" class="error-message">{{ statusError }}</span>
    </div>
  </form>
</template>

<script>
import { useRequestForm } from "@/use/request.form";

export default {
  setup() {
    return {
      ...useRequestForm(),
    };
  },
};
</script>

<style></style>
