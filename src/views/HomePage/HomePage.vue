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
    <OperationsTable :request="[]" />
    <teleport to="#modal">
      <AppModal title="Create operation" />
    </teleport>
  </AppPage>
</template>

<script>
import AppPage from "@/components/AppPage";
import OperationsTable from "../../components/OperationsTable";
import AppModal from "@/components/AppModal";
export default {
  components: { AppPage, OperationsTable, AppModal },

  setup() {
    return {};
  },
};
</script>

<style scoped>
.btn {
  font-size: 20px;
}
</style>
