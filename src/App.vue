<template>
  <div :class="[lightStyleMode ? 'light' : 'dark']" class="bg-pattern text-lg">
    <Header />
    <div class="container m-auto">
      <router-view class="py-24 min-h-screen" />
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  computed: {
    ...mapState(["lightStyleMode"]),
  },
};
</script>

<style lang="postcss" scoped>
.bg-pattern {
  background-image: url("./assets/bg.svg");
}
</style>
