<template>
  <div class="flex my-5 border-green p-2">
    <img :src="image" :alt="alt" class="h-10 w-10" />
    <div class="flex flex-col ml-2">
      <p>{{ name }}</p>
      <p>{{ description }}</p>
      <a target="_blank" :href="link">{{ link }}</a>
    </div>
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
