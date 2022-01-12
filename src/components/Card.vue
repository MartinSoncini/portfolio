<template>
  <div>
    <p>{{ name }}</p>
    <img :src="image" :alt="alt" />
    <p>{{ description }}</p>
    <a target="_blank" :href="link">{{ link }}</a>
  </div>
</template>

<script>
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
};
</script>
