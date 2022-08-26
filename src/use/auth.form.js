import { computed, inject, ref, watch } from "vue";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export function useAuthForm() {
  const store = useStore();
  const router = useRouter();
  const isLoading = ref(false);

  const name = inject("name");

  const { handleSubmit, submitCount } = useForm();

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

  const onSubmitSignIn = handleSubmit(async (values) => {
    try {
      isLoading.value = true;
      await store.dispatch("auth/login", values);
      router.push("/");
      isLoading.value = false;
    } catch (e) {
      isLoading.value = false;
      e;
    }
  });
  const onSubmitSignUp = handleSubmit(async (values) => {
    try {
      isLoading.value = true;
      await store.dispatch("auth/register", values);
      router.push("/");
      isLoading.value = false;
    } catch (e) {
      isLoading.value = false;
      e;
    }
  });
  const onSubmit = handleSubmit(() => {
    name.value === "Sign In" ? onSubmitSignIn() : onSubmitSignUp();
  });
  return {
    email,
    emailError,
    password,
    passwordError,
    onSubmitSignIn,
    isToManyAttempts,
    onSubmitSignUp,
    onSubmit,
    isLoading,
  };
}
