<template>
  <AppPage back title="FAQ">
    <QuestionItem
      v-for="question in questions"
      :key="question.id"
      :question="question"
    />
  </AppPage>
</template>

<script>
import AppPage from "@/components/AppPage";
import QuestionItem from "@/components/QuestionItem";
export default {
  components: { AppPage, QuestionItem },
  setup() {
    const questions = [
      {
        id: 1,
        title: "What is in this system?",
        text: "There is a viewing and processing of user operations",
      },
      {
        id: 2,
        title: "How does authorization work here?",
        text: "Authorization is implemented via Firebase",
      },
      {
        id: 3,
        title:
          "What framework was used when creating the client part of the application?",
        text: "The Vue.js framework was used",
      },
    ];
    return { questions };
  },
};
</script>

<style></style>
