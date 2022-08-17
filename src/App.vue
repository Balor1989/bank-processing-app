<template>
  <div class="container">
    <component :is="`${layout}-layout`" v-if="layout" />
  </div>
</template>

<script>
import { computed } from "vue";
import AuthLayout from "./layout/AuthLayout";
import MainLayout from "./layout/MainLayout";
import { useRoute } from "vue-router";
export default {
  components: { MainLayout, AuthLayout },

  setup() {
    const route = useRoute();
    return {
      layout: computed(() => route.meta.layout),
    };
  },
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";

.bold {
  font-weight: 700;
}

.container {
  padding: 40px 0;
}

.card {
  overflow: hidden;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
  background-color: rgb(231, 222, 222);
}
.center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btn {
  color: rgb(231, 222, 222);
  position: relative;
  place-content: center;
  place-items: center;
  width: fit-content;
  border-radius: 99px;
  letter-spacing: 1px;
  text-decoration: none;
  margin-right: 10px;
  padding: 8px 20px;
  font-weight: 700;
  outline: none;
  transition: all 300ms ease;
}
</style>
