<template>
  <AppLoader v-if="loading" />
  <AppPage back v-else-if="request" title="Operation">
    <div>
      <p class="info"><span>Name: </span>{{ request.name }}</p>
      <p class="info"><span>Phone: </span>{{ request.phone }}</p>
      <p class="info">
        <span>Amount: </span>{{ amountFormat(request.amount) }}
      </p>
      <p class="info">
        <span>Status: </span><AppStatus :type="request.status" />
      </p>
    </div>

    <div class="mb-3">
      <select v-model="status" class="form-select">
        <option value="done">Done</option>
        <option value="cancelled">Cancelled</option>
        <option value="active">Active</option>
        <option value="pending">Pending</option>
      </select>
    </div>
    <div class="d-flex">
      <button class="btn btn-danger" @click="remove">Delete</button>
      <button v-if="isChanged" class="btn btn-primary" @click="update">
        Update
      </button>
    </div>
  </AppPage>
  <div v-else class="card center">
    <h3 class="medium">Operation was not found</h3>
  </div>
</template>

<script>
import AppPage from "@/components/AppPage";
import { useRoute, useRouter } from "vue-router";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import AppLoader from "@/components/AppLoader";
import AppStatus from "@/components/AppStatus/AppStatus.vue";
import { amountFormat } from "@/utils/amountFormat";
export default {
  components: { AppPage, AppLoader, AppStatus },

  setup() {
    const loading = ref(true);
    const route = useRoute();
    const store = useStore();
    const request = ref({});
    const status = ref();
    const router = useRouter();

    onMounted(async () => {
      loading.value = true;
      request.value = await store.dispatch("request/loadById", route.params.id);
      status.value = request.value?.status;
      loading.value = false;
    });

    const isChanged = computed(() => request.value.status !== status.value);

    const remove = async () => {
      await store.dispatch("request/remove", route.params.id);
      router.push("/");
    };

    const update = async () => {
      const data = {
        ...request.value,
        status: status.value,
        id: route.params.id,
      };
      await store.dispatch("request/update", data);
      request.value.status = status.value;
    };

    return {
      loading,
      request,
      amountFormat,
      remove,
      update,
      status,
      isChanged,
    };
  },
};
</script>

<style scoped>
.form-select {
  max-width: 50%;
  margin-top: 10px;
}
.info {
  margin-bottom: 10px;
}
.btn-danger {
  margin-right: 20px;
}
</style>
