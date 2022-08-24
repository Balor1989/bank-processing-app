<template>
  <div :class="['sidebar', { isOpen: sidebar }]">
    <span class="sidebar-close" @click="close">&times;</span>
    <div class="sidebar-content">
      <p>There are no new messages yet</p>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const sidebar = computed(() => store.state.sidebar);
    const close = () => {
      store.commit("closeSidebar");
    };
    return { sidebar, close };
  },
};
</script>

<style>
.sidebar {
  position: fixed;
  width: 300px;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgb(209, 206, 206);
  z-index: 100;
  padding: 10px 10px 10px 30px;
  transform: translateX(100%);
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.isOpen {
  transform: translateX(0);
}

.sidebar-close {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 30px;
  cursor: pointer;
}

.sidebar-content {
  margin-top: 50px;
}
</style>
