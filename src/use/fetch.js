import { Notify } from "notiflix";
import axios from "axios";
import { errorMessage } from "@/utils/error";

export async function useFetch(url, payload, commit) {
  try {
    const { data } = await axios.post(url, {
      ...payload,
      returnSecureToken: true,
    });
    commit("setToken", data.idToken);
  } catch (error) {
    Notify.failure(errorMessage(error.response.data.error.message), {
      timeout: 3000,
    });
    throw new Error();
  }
}
