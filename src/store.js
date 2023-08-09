import { createStore } from "vuex";

export default createStore({
  state: {
    page: "project",
  },
  mutations: {
    setPage(state, value) {
      state.page = value;
    },
  },
  actions: {},
  getters: {},
});
