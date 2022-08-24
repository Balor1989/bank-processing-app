import { createStore, createLogger } from "vuex";
import auth from "./modules/auth.module";
import request from "./modules/request.module";

const plugins = [];
if (process.env.NODE_ENV === "development") {
  plugins.push(createLogger());
}

export default createStore({
  state: {
    sidebar: false,
  },
  getters: {},
  mutations: {
    openSidebar(state) {
      state.sidebar = true;
    },
    closeSidebar(state) {
      state.sidebar = false;
    },
  },
  actions: {},
  modules: { auth, request },
  plugins,
});
