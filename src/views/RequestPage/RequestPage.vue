<template>
  <AppLoader v-if="loading" />
  <AppPage v-else-if="request" title="Operation" />
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
export default {
  components: { AppPage, AppLoader },

  setup() {
    const loading = ref(false);
    const route = useRoute();
    const store = useStore();
    const request = ref({});

    onMounted(async () => {
      loading.value = true;
      request.value = await store.dispatch("request/loadById", route.params.id);

      loading.value = false;
    });

    return { loading, request };
  },
};
</script>

<style></style>
