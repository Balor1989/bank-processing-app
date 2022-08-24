<template>
  <TheNavbar />
  <AppSidebar />
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
import AppSidebar from "@/components/AppSidebar";
export default { components: { TheNavbar, AppSidebar } };
</script>

<style></style>
