<template>
  <AppPage title="Operations list">
    <template #header>
      <button class="btn btn-success">Add</button>
    </template>
    <OperationsTable :request="[]" />
  </AppPage>
</template>

<script>
import AppPage from "@/components/AppPage";
import OperationsTable from "../../components/OperationsTable";
export default {
  components: { AppPage, OperationsTable },
};
</script>

<style scoped>
.btn {
  font-size: 20px;
}
</style>
