<template>
  <div>
    <ProjectsCard
      v-for="project in projects"
      :key="project.name"
      v-bind="project"
    ></ProjectsCard>
  </div>
</template>

<script>
import projects from "@/data/projects.json";
import ProjectsCard from "@/components/ProjectsCard.vue";
export default {
  name: "Projects",
  components: {
    ProjectsCard,
  },
  data() {
    return {
      projects,
    };
  },
};
</script>
