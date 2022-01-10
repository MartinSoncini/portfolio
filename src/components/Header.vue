<template>
  <div>
    <p>Martin<span>Soncini</span></p>
    <router-link to="/">Home</router-link>
    <router-link to="/projects">Projects</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
    <button @click="changeStyle">{{ styleMode }}</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapState({
      styleMode: (state) => state.styleMode,
    }),
  },
  methods: {
    changeStyle() {
      this.styleMode === "dark"
        ? this.changeStyleMode({ mode: "light" })
        : this.changeStyleMode({ mode: "dark" });
    },
    ...mapMutations(["changeStyleMode"]),
  },
};
</script>
