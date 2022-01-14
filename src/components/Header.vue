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
          <fa-icon v-if="lightStyleMode" :icon="['fas', 'moon']" />
          <fa-icon v-else :icon="['fas', 'sun']" />
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
      routerPages: [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
      ],
    };
  },
  computed: {
    ...mapState(["lightStyleMode"]),
  },
  methods: {
    setCurrentPage(name) {
      return this.$route.name === name ? "bold-green " : "";
    },
    ...mapMutations(["changeStyleMode"]),
  },
};
</script>
