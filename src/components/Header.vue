<template>
  <div class="w-full fixed h-20">
    <div class="flex items-center justify-between h-full container m-auto">
      <p>Martin<span>Soncini</span></p>
      <div>
        <router-link to="/">Home</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
        <button @click="changeStyleMode">{{ styleMode }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Header",
  computed: {
    styleMode() {
      return this.ligthStyleMode ? "Dark" : "Ligth";
    },
    ...mapState(["ligthStyleMode"]),
  },
  methods: {
    ...mapMutations(["changeStyleMode"]),
  },
};
</script>
