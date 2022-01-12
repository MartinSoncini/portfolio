import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ligthStyleMode: false,
  },
  mutations: {
    changeStyleMode(state) {
      state.ligthStyleMode = !state.ligthStyleMode;
    },
  },
  actions: {},
  modules: {},
});
