<template>
  <AppPage title="Operations list">
    <template #header>
      <button
        class="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#homeModal"
      >
        Add
      </button>
    </template>
    <OperationsTable :request="requests" />
    <teleport to="#modal">
      <AppModal title="Create operation" />
    </teleport>
  </AppPage>
</template>

<script>
import AppPage from "@/components/AppPage";
import OperationsTable from "../../components/OperationsTable";
import AppModal from "@/components/AppModal";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  components: { AppPage, OperationsTable, AppModal },

  setup() {
    const store = useStore();
    const requests = computed(() => store.getters["request/requests"]);
    return { requests };
  },
};
</script>

<style scoped>
.btn {
  font-size: 20px;
}
</style>
