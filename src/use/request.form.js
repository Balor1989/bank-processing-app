import { useField, useForm } from "vee-validate";
import * as yup from "yup";

export function useRequestForm() {
  const { handleSubmit } = useForm();

  const { value: name, errorMessage: nameError } = useField(
    "name",
    yup.string().trim().required()
  );
  const { value: phone, errorMessage: phoneError } = useField(
    "name",
    yup.string().trim().required()
  );
  const { value: amount, errorMessage: amountError } = useField(
    "name",
    yup.string().trim().required()
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
  };
}
