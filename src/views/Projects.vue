<template>
  <div>
    <Card
      v-for="project in projects"
      :key="project.name"
      v-bind="project"
    ></Card>
  </div>
</template>

<script>
import projects from "@/data/projects.json";
import Card from "@/components/Card.vue";
export default {
  name: "Projects",
  components: {
    Card,
  },
  data() {
    return {
      projects,
    };
  },
};
</script>
