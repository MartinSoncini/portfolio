<template>
  <div class="h-full flex items-center justify-center">
    <div
      class="flex flex-col w-1/2 items-center border-green p-10"
      :class="[lightStyleMode ? 'light-card' : 'dark-card']"
    >
      <img :src="image" alt="profile image" class="rounded-full h-40 w-40" />
      <div class="">
        <p>Hello! I’m <span class="bold-green">Martin</span>.</p>
        <p>
          I'm a front-end developer who is passionate about
          <span class="bold-green">VUE</span>, building great user experiences,
          fighting for simplicity over complexity and constantly learning.
        </p>
        <p>
          When I'm not <span class="font-mono">&lt;coding&gt;</span>, you'll
          find me playing football ⚽ or singing with my guitar 🎸.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Home",
  computed: {
    image() {
      return "https://i.ibb.co/LtbX41c/IMG-4785.png";
    },
    ...mapState(["lightStyleMode"]),
  },
};
</script>
