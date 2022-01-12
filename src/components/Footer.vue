<template>
  <div class="w-full h-10 fixed bottom-0">
    <div class="container m-auto flex items-center h-full justify-between">
      <p>Builded with Vue, Vuex and Vue-router</p>
      <p>Deployed with Netlify</p>
      <div>© {{ year }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>
