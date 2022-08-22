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
    <AppFilter v-model="filter" />
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
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import AppLoader from "../../components/AppLoader";
import AppFilter from "@/components/AppFilter";
export default {
  components: { AppPage, OperationsTable, AppModal, AppLoader, AppFilter },

  setup() {
    const store = useStore();
    const requests = computed(() =>
      store.getters["request/requests"]
        .filter((request) => {
          if (filter.value.name) {
            return request.name
              .toLowerCase()
              .includes(filter.value.name.toLowerCase());
          }
          return request;
        })
        .filter((request) => {
          if (filter.value.status) {
            return request.status.includes(filter.value.status);
          }
          return request;
        })
    );
    const loading = ref(true);
    const filter = ref({});

    onMounted(async () => {
      loading.value = true;
      await store.dispatch("request/load");
      loading.value = false;
    });
    return { requests, loading, filter };
  },
};
</script>

<style scoped>
.btn {
  font-size: 20px;
}
</style>
