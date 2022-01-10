import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    styleMode: "light",
  },
  mutations: {
    changeStyleMode(state, { mode }) {
      state.styleMode = mode;
    },
  },
  actions: {},
  modules: {},
});
