<template>
  <AppLoader v-if="loading" />
  <AppPage back v-else-if="request" title="Operation">
    <p><span>Name: </span>{{ request.name }}</p>
    <p><span>Phone: </span>{{ request.phone }}</p>
    <p><span>Amount: </span>{{ amountFormat(request.amount) }}</p>
    <p><span>Status: </span><AppStatus :type="request.status" /></p>

    <div class="mb-3">
      <select v-model="status">
        <option value="done">Done</option>
        <option value="cancelled">Cancelled</option>
        <option value="active">Active</option>
        <option value="pending">Pending</option>
      </select>
    </div>

    <button class="btn btn-danger" @click="remove">Delete</button>
    <button v-if="isChanged" class="btn btn-primary" @click="update">
      Update
    </button>
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

<style></style>
