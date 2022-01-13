<template>
  <div
    class="flex my-5 border-green p-2"
    :class="[lightStyleMode ? 'light-card' : 'dark-card']"
  >
    <img :src="image" :alt="alt" class="h-16 w-h-16 rounded" />
    <div class="flex flex-col ml-2">
      <p>{{ name }}</p>
      <p>{{ description }}</p>
      <a target="_blank" :href="link">{{ link }}</a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Card",
  props: {
    name: {
      type: String,
    },
    image: {
      type: String,
    },
    alt: {
      type: String,
    },
    description: {
      type: String,
    },
    link: {
      type: String,
    },
  },
  computed: {
    ...mapState(["lightStyleMode"]),
  },
};
</script>
