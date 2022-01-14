<template>
  <div
    class="flex my-5 border-green p-5"
    :class="[lightStyleMode ? 'light-card' : 'dark-card']"
  >
    <img :src="image" :alt="alt" class="w-1/2" />
    <div class="flex flex-col mx-10 justify-between">
      <div>
        <p class="text-xl font-bold">{{ name }}</p>
        <p>{{ description }}</p>
      </div>
      <a target="_blank" :href="link" class="bold-green">Link</a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ProjectCard",
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
