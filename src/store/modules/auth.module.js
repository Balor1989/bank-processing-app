export default {
  namespaced: true,
  state() {
    return {
      token: null,
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
      commit("setToken", "Test", payload);
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem("token", token);
    },
    logout(state) {
      state.token = null;
      localStorage.removeItem("token");
    },
  },
};
