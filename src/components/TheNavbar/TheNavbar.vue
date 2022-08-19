<template>
  <header class="card">
    <nav class="navbar">
      <div>
        <a class="navbar-brand d-flex align-items-center" href="#">
          <img src="@/assets/logo.png" alt="" width="28" height="28" />
          <h3 class="bold">ueBank</h3>
        </a>
      </div>

      <ul class="nav nav-pills">
        <li class="nav-item bold">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item bold">
          <router-link to="/operations" class="nav-link"
            >Operations</router-link
          >
        </li>
        <li class="nav-item bold"><a href="#" class="nav-link">Messages</a></li>
        <li class="nav-item bold">
          <a href="#" @click.prevent="onLogout" class="nav-link">Sign out</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const onLogout = () => {
      store.commit("auth/logout");
      router.push("/auth");
    };
    return {
      onLogout,
    };
  },
};
</script>

<style scoped>
li:not(:last-child) {
  margin-right: 10px;
}

.card {
  margin-bottom: 25px;
}

.nav-pills .nav-item .nav-link {
  color: rgb(8, 8, 8);
}
.nav-pills .nav-item .nav-link.active {
  background-color: rgb(6, 136, 6);
  color: rgb(231, 222, 222);
  transition: color 300ms, background-color 300ms;
}

.nav-pills .nav-item .nav-link:hover,
.nav-pills .nav-item .nav-link:focus {
  background-color: rgb(6, 136, 6);
  color: rgb(231, 222, 222);
}
</style>
