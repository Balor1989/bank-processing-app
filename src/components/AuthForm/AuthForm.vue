<template>
  <form class="card" @submit.prevent="onSubmit">
    <h1 class="title bold">{{ name }}</h1>
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
    <div>
      <button
        class="btn btn-success"
        type="submit"
        :disabled="isSubmitting || isToManyAttempts"
      >
        {{ name }}
      </button>
      <router-link :to="path"
        ><a href="#" class="btn btn-secondary">{{ secondaryButton }}</a>
      </router-link>
    </div>

    <span v-if="isToManyAttempts" class="error-message"
      >To many attempts, please wait</span
    >
  </form>
</template>

<script>
import { useAuthForm } from "@/use/auth.form";
import { inject } from "@vue/runtime-core";
export default {
  setup() {
    return {
      name: inject("name"),
      secondaryButton: inject("secondary"),
      path: inject("path"),
      ...useAuthForm(),
    };
  },
};
</script>

<style scoped>
.btn:first-child {
  margin-right: 10px;
}
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
