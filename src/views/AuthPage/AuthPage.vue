<template>
  <form class="card" @submit.prevent>
    <h1 class="title bold">Sign In</h1>
    <div class="mb-3">
      <label for="email">Email:</label>
      <input
        type="text"
        id="email"
        :class="['form-control', { 'is-invalid': emailError }]"
        v-model="email"
      />
      <span v-if="emailError" class="error-message">{{ emailError }}</span>
    </div>

    <div class="mb-3">
      <label for="password">Password:</label>
      <input
        type="text"
        id="password"
        :class="['form-control', { 'is-invalid': passwordError }]"
        v-model="password"
      />
      <span v-if="passwordError" class="error-message">{{
        passwordError
      }}</span>
    </div>

    <button class="btn btn-success" type="submit">Sign In</button>
  </form>
</template>

<script>
import { useField } from "vee-validate";
import * as yup from "yup";
export default {
  setup() {
    const {
      value: email,
      errorMessage: emailError,
      handleBlur: emailBlur,
    } = useField("email", yup.string().trim().required().email());
    const {
      value: password,
      errorMessage: passwordError,
      handleBlur: passwordBlur,
    } = useField("password", yup.string().trim().required().min(6));

    return {
      email,
      emailError,
      emailBlur,
      password,
      passwordError,
      passwordBlur,
    };
  },
};
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
.error-message {
  display: block;
  margin-top: 5px;
  color: var(--bs-danger);
}
</style>
