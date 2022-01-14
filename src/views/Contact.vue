<template>
  <div class="h-full flex items-center justify-center">
    <div
      class="flex flex-col border-green p-10"
      :class="[lightStyleMode ? 'light-card' : 'dark-card']"
    >
      <div
        v-for="net in socialMedia"
        :key="net.icon"
        class="flex items-center my-2"
      >
        <fa-icon :icon="[net.type, net.icon]" class="mr-5 text-green-500" />
        <a v-if="net.link" target="_blank" :href="net.link">{{
          net.description || net.link
        }}</a>
        <p v-else>{{ net.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import socialMedia from "@/data/contact.json";
export default {
  name: "Contact",
  data() {
    return {
      socialMedia,
    };
  },
  computed: {
    ...mapState(["lightStyleMode"]),
  },
};
</script>
