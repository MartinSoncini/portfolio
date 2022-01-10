<template>
  <div>
    <div>{{ year }}</div>
    <div>Builded with Vue, Vuex and Vue-router</div>
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
