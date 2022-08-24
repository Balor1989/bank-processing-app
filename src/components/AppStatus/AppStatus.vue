<template>
  <span :class="['badge', className]">{{ text }}</span>
</template>

<script>
import { ref, watch } from "vue";
export default {
  props: {
    type: {
      type: String,
      required: true,
      validator(value) {
        return ["active", "cancelled", "done", "pending"].includes(value);
      },
    },
  },
  setup(props) {
    const classMap = {
      active: "primary",
      cancelled: "danger",
      done: "secondary",
      pending: "warning",
    };
    const textMap = {
      active: "Active",
      cancelled: "Cancelled",
      done: "Done",
      pending: "Pending",
    };

    watch(props, (value) => {
      className.value = classMap[value.type];
      text.value = textMap[value.type];
    });

    const className = ref(classMap[props.type]);
    const text = ref(textMap[props.type]);

    return {
      className,
      text,
    };
  },
};
</script>

<style>
.badge {
  font-size: 14px;
  border: 1px solid rgb(150, 148, 148);
  color: rgb(150, 148, 148);
  border-radius: 15px;
  padding: 4px 10px;
}

.badge.primary {
  border-color: #3eaf7c;
  color: #3eaf7c;
}

.badge.danger {
  border-color: #e53935;
  color: #e53935;
}

.badge.warning {
  border-color: #88208b;
  color: #88208b;
}
</style>
