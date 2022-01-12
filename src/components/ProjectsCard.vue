<template>
  <div class="flex my-5 border-green p-5">
    <img :src="image" :alt="alt" class="w-1/2" />
    <div class="flex flex-col mx-10 justify-between">
      <div>
        <p>{{ name }}</p>
        <p>{{ description }}</p>
      </div>
      <a target="_blank" :href="link">Link</a>
    </div>
  </div>
</template>

<script>
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
};
</script>
