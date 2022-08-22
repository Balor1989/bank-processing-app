<template>
  <div class="mb-3 d-flex">
    <input
      type="text"
      class="form-control"
      placeholder="Enter the name..."
      v-model="name"
    />
    <select class="form-select" v-model="status">
      <option value="done">Done</option>
      <option value="cancelled">Cancelled</option>
      <option value="active">Active</option>
      <option value="pending">Pending</option>
    </select>
    <button v-if="isActive" class="btn btn-danger" @click="cleanParams">
      Clean
    </button>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
export default {
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      name: {
        type: String,
      },
      status: { type: String },
    },
  },
  setup(_, context) {
    const name = ref();
    const status = ref();

    watch([name, status], (values) => {
      context.emit("update:modelValue", {
        name: values[0],
        status: values[1],
      });
    });

    const isActive = computed(() => name.value || status.value);

    const cleanParams = () => {
      name.value = "";
      status.value = "";
    };

    return {
      name,
      status,
      isActive,
      cleanParams,
    };
  },
};
</script>

<style scoped>
input,
select {
  margin-right: 30px;
  width: 40%;
}
.btn {
  padding: 5px 10px;
}
</style>
