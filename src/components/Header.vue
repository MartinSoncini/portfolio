<template>
  <div
    class="w-full fixed h-20"
    :class="[lightStyleMode ? 'light-card' : 'dark-card']"
  >
    <div class="flex items-center justify-between h-full container m-auto">
      <p class="text-2xl font-bold">
        Martin<span class="bold-green">Soncini</span>
      </p>
      <div class="w-1/2 flex justify-between">
        <router-link
          :class="setCurrentPage(route.name)"
          v-for="route in routerPages"
          :key="route.name"
          :to="route.path"
          >{{ route.name }}</router-link
        >
        <button
          class="rounded-full border border-green-600 h-7 w-7"
          @click="changeStyleMode"
        >
          <img
            v-if="lightStyleMode"
            src="@/assets/moon.svg"
            alt="enable dark mode"
          />
          <img v-else src="@/assets/sun.svg" alt="enable light mode" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      currentPage: "Home",
      routerPages: [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
      ],
    };
  },
  computed: {
    styleMode() {
      return this.lightStyleMode ? "Dark" : "light";
    },
    ...mapState(["lightStyleMode"]),
  },
  watch: {
    $route({ name }) {
      this.currentPage = name;
    },
  },
  methods: {
    setCurrentPage(name) {
      return this.currentPage === name ? "bold-green " : "";
    },
    ...mapMutations(["changeStyleMode"]),
  },
};
</script>
