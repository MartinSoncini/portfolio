import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lightStyleMode: false,
  },
  mutations: {
    changeStyleMode(state) {
      state.lightStyleMode = !state.lightStyleMode;
    },
  },
  actions: {},
  modules: {},
});
