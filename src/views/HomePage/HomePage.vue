<template>
  <AppLoader v-if="loading" />
  <AppPage v-else title="Operations list">
    <template #header>
      <button
        class="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#homeModal"
      >
        Add
      </button>
    </template>
    <OperationsTable :requests="requests" />
    <teleport to="#modal">
      <AppModal title="Create operation" />
    </teleport>
  </AppPage>
</template>

<script>
import AppPage from "@/components/AppPage";
import OperationsTable from "../../components/OperationsTable";
import AppModal from "@/components/AppModal";
import { computed, onMounted, ref } from "@vue/runtime-core";
import { useStore } from "vuex";
import AppLoader from "../../components/AppLoader";
export default {
  components: { AppPage, OperationsTable, AppModal, AppLoader },

  setup() {
    const store = useStore();
    const requests = computed(() => store.getters["request/requests"]);
    const loading = ref(true);

    onMounted(async () => {
      loading.value = true;
      await store.dispatch("request/load");
      loading.value = false;
    });
    return { requests, loading };
  },
};
</script>

<style scoped>
.btn {
  font-size: 20px;
}
</style>
