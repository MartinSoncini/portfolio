<template>
  <div :class="[ligthStyleMode ? 'ligth' : 'dark']" class="flex">
    <Header />
    <div class="container m-auto">
      <router-view class="py-20" />
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
    ...mapState(["ligthStyleMode"]),
  },
};
</script>
<style lang="postcss" scoped>
.dark {
  @apply bg-gray-900 text-gray-100;
}
.ligth {
  @apply bg-gray-100 text-gray-900;
}
</style>
