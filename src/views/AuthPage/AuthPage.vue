<template>
  <AuthForm />
</template>

<script>
import AuthForm from "@/components/AuthForm";
import { provide } from "@vue/runtime-core";
import { ref } from "vue";
export default {
  components: { AuthForm },

  setup() {
    const titleAndButtonName = ref("Sign In");
    const secondaryButton = ref("Sign Up");
    const path = ref("/reg");

    provide("name", titleAndButtonName);
    provide("secondary", secondaryButton);
    provide("path", path);
  },
};
</script>

<style></style>
