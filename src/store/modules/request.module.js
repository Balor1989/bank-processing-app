import { errorMessage } from "@/utils/error";
import { Notify } from "notiflix";
import axios from "../../axios/request";
import store from "../../store";

export default {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  getters: {
    requests(state) {
      return state.requests;
    },
  },
  mutations: {
    setRequests(state, requests) {
      state.requests = requests;
    },
    addRequest(state, request) {
      state.requests.push(request);
    },
  },
  actions: {
    async create({ commit }, payload) {
      try {
        const token = store.getters["auth/token"];
        const { data } = await axios.post(
          `/requests.json?auth=${token}`,
          payload
        );
        commit("addRequest", { ...payload, id: data.name });
        console.log(data);
        Notify.success("Operation successfully processed"),
          {
            timeout: 3000,
          };
      } catch (e) {
        Notify.failure(e.message),
          {
            timeout: 3000,
          };
      }
    },
    async load({ commit }) {
      try {
        const token = store.getters["auth/token"];
        const { data } = await axios.get(`/requests.json?auth=${token}`);
        const requests = Object.keys(data).map((id) => ({ ...data[id], id }));
        commit("setRequests", requests);
      } catch (e) {
        Notify.failure(errorMessage(e.code || e)),
          {
            timeout: 3000,
          };
      }
    },
    async loadById(_, id) {
      try {
        const token = store.getters["auth/token"];
        const { data } = await axios.get(`/requests/${id}.json?auth=${token}`);
        return data;
      } catch (e) {
        Notify.failure(e.message),
          {
            timeout: 3000,
          };
      }
    },
    async remove(_, id) {
      try {
        const token = store.getters["auth/token"];
        await axios.delete(`/requests/${id}.json?auth=${token}`);
        Notify.success("Operation successfully deleted");
      } catch (e) {
        Notify.failure(e.message),
          {
            timeout: 3000,
          };
      }
    },
    async update(_, request) {
      try {
        const token = store.getters["auth/token"];
        await axios.put(`/requests/${request.id}.json?auth=${token}`, request);
        Notify.success("Operation successfully updated");
      } catch (e) {
        Notify.failure(e.message),
          {
            timeout: 3000,
          };
      }
    },
  },
};
