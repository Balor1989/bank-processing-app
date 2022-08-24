<template>
  <div @click="isActive = !isActive" class="question">
    <p class="question-title bold">{{ question.title }}</p>
    <p v-if="isActive">{{ question.text }}</p>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["question"],
  setup() {
    const isActive = ref(false);
    return { isActive };
  },
};
</script>

<style>
.question {
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  transition: background-color 300ms ease;
}

.question:hover {
  cursor: pointer;
  background-color: #eee;
}
.question-title {
  margin-bottom: 5px;
}
</style>
