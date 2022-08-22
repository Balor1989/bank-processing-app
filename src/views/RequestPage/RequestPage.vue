<template>
  <AppLoader v-if="loading" />
  <AppPage back v-else-if="request" title="Operation">
    <p><span>Name: </span>{{ request.name }}</p>
    <p><span>Phone: </span>{{ request.phone }}</p>
    <p><span>Amount: </span>{{ amountFormat(request.amount) }}</p>
    <p><span>Status: </span><AppStatus :type="request.status" /></p>
  </AppPage>
  <div v-else class="card center">
    <h3 class="medium">Operation was not found</h3>
  </div>
</template>

<script>
import AppPage from "@/components/AppPage";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
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

    onMounted(async () => {
      loading.value = true;
      request.value = await store.dispatch("request/loadById", route.params.id);

      loading.value = false;
    });

    return { loading, request, amountFormat };
  },
};
</script>

<style></style>
