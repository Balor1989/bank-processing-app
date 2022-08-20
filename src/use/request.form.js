import { useField, useForm } from "vee-validate";
import * as yup from "yup";

export function useRequestForm() {
  const { isSubmitting, handleSubmit } = useForm();

  const { value: name, errorMessage: nameError } = useField(
    "name",
    yup.string().trim().required()
  );
  const { value: phone, errorMessage: phoneError } = useField(
    "phone",
    yup.string().trim().required()
  );
  const { value: amount, errorMessage: amountError } = useField(
    "amount",
    yup.number().required().min(0, "The amount can't be less than zero")
  );
  const { value: status, errorMessage: statusError } = useField("status");

  const onSubmit = handleSubmit(async () => {
    console.log("submit");
  });

  return {
    name,
    nameError,
    phone,
    phoneError,
    amount,
    amountError,
    status,
    statusError,
    onSubmit,
    isSubmitting,
  };
}
