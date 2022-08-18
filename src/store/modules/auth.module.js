import axios from "axios";
import { Notify } from "notiflix";
import { errorMessage } from "@/utils/error";

const TOKEN_KEY = "jwt-token";

export default {
  namespaced: true,
  state() {
    return {
      token: localStorage.getItem(TOKEN_KEY) || null,
    };
  },
  getters: {
    token(state) {
      return state.token;
    },
    isAuth(_, getters) {
      return !!getters.token;
    },
  },
  actions: {
    async login({ commit }, payload) {
      try {
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_KEY}`;
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
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem(TOKEN_KEY, token);
    },
    logout(state) {
      state.token = null;
      localStorage.removeItem(TOKEN_KEY);
    },
  },
};
