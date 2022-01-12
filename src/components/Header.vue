<template>
  <div
    class="w-full fixed h-20"
    :class="[ligthStyleMode ? 'ligth-header-footer' : 'dark-header-footer']"
  >
    <div class="flex items-center justify-between h-full container m-auto">
      <p class="text-2xl font-bold">
        Martin<span class="bold-green">Soncini</span>
      </p>
      <div class="w-1/2 flex justify-between">
        <router-link to="/">Home</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
        <button
          class="rounded-full border border-green-600 h-7 w-14"
          @click="changeStyleMode"
        >
          {{ styleMode }}
        </button>
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
