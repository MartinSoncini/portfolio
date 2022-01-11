<template>
  <div>
    <div>
      <p>Builded with Vue, Vuex and Vue-router</p>
      <p>Deployed with Netlify</p>
    </div>
    <div>© {{ year }}</div>
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
