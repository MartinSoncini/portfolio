<template>
  <div>
    <div>
      <Card v-for="net in socialMedia" :key="net.name" v-bind="net" />
    </div>
    <div></div>
  </div>
</template>

<script>
import socialMedia from "@/data/contact.json";
import Card from "@/components/Card.vue";
export default {
  name: "Contact",
  components: {
    Card,
  },
  data() {
    return {
      socialMedia,
    };
  },
};
</script>
