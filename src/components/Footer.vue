<template>
  <div
    class="w-full h-10 fixed bottom-0"
    :class="[lightStyleMode ? 'light-card' : 'dark-card']"
  >
    <div class="container m-auto flex items-center h-full justify-between">
      <div class="flex">
        <p class="mr-5">Builded with <span class="bold-green">Vue</span></p>
        <p>
          Deployed with <span class="text-blue-500 font-bold">Netlify</span>
        </p>
      </div>
      <div>© {{ year }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Footer",
  computed: {
    year() {
      return new Date().getFullYear();
    },
    ...mapState(["lightStyleMode"]),
  },
};
</script>
