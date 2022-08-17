<template>
  <form class="card" @submit.prevent="onSubmit">
    <h1 class="title bold">Sign In</h1>
    <div class="mb-3">
      <label for="email">Email:</label>
      <input
        type="email"
        id="email"
        :class="['form-control', { 'is-invalid': emailError }]"
        v-model="email"
      />
      <span v-if="emailError" class="error-message">{{ emailError }}</span>
    </div>

    <div class="mb-3">
      <label for="password">Password:</label>
      <input
        type="password"
        id="password"
        :class="['form-control', { 'is-invalid': passwordError }]"
        v-model="password"
      />
      <span v-if="passwordError" class="error-message">{{
        passwordError
      }}</span>
    </div>

    <button
      class="btn btn-success"
      type="submit"
      :disabled="isSubmitting || isToManyAttempts"
    >
      Sign In
    </button>
    <span v-if="isToManyAttempts" class="error-message"
      >To many attempts, please wait</span
    >
  </form>
</template>

<script>
import { computed, watch } from "vue";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
export default {
  setup() {
    const { handleSubmit, isSubmitting, submitCount } = useForm();

    const { value: email, errorMessage: emailError } = useField(
      "email",
      yup.string().trim().required().email()
    );
    const { value: password, errorMessage: passwordError } = useField(
      "password",
      yup.string().trim().required().min(6)
    );

    const isToManyAttempts = computed(() => submitCount.value >= 5);
    watch(isToManyAttempts, (values) => {
      if (values) {
        setTimeout(() => (submitCount.value = 0), 3000);
      }
    });

    const onSubmit = handleSubmit(() => {});

    return {
      email,
      emailError,
      password,
      passwordError,
      onSubmit,
      isSubmitting,
      isToManyAttempts,
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
