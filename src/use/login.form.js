import { computed, watch } from "vue";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { Notify } from "notiflix";

export function useLoginForm() {
  const store = useStore();
  const router = useRouter();
  const route = useRoute();

  if (route.query.message) {
    Notify.warning("Please sign in", { timeout: 3000 });
  }

  const { handleSubmit, isSubmitting, submitCount } = useForm();

  const { value: email, errorMessage: emailError } = useField(
    "email",
    yup.string().trim().required().email()
  );

  const { value: password, errorMessage: passwordError } = useField(
    "password",
    yup.string().trim().required().min(6)
  );

  const isToManyAttempts = computed(() => submitCount.value >= 5);

  watch(isToManyAttempts, (values) => {
    if (values) {
      setTimeout(() => (submitCount.value = 0), 3000);
    }
  });

  const onSubmit = handleSubmit(async (values) => {
    try {
      await store.dispatch("auth/login", values);
      router.push("/");
    } catch (e) {
      e;
    }
  });

  return {
    email,
    emailError,
    password,
    passwordError,
    onSubmit,
    isSubmitting,
    isToManyAttempts,
  };
}
