<template>
  <div>
    <div v-for="net in socialMedia" :key="net.icon">
      <img src="" alt="" />
      <a target="_blank" :href="net.link">{{ net.description || net.link }}</a>
    </div>
  </div>
</template>

<script>
import socialMedia from "@/data/contact.json";
export default {
  name: "Contact",
  data() {
    return {
      socialMedia,
    };
  },
};
</script>
