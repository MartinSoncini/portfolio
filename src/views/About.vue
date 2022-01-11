<template>
  <div>
    <div>
      <p>Skills</p>
      <Card v-for="skill in skills" :key="skill.name" v-bind="skill" />
    </div>
    <div>
      <p>Tools</p>
      <Card v-for="tool in tools" :key="tool.name" v-bind="tool" />
    </div>
  </div>
</template>

<script>
import skills from "@/data/skills.json";
import tools from "@/data/tools.json";
import Card from "@/components/Card.vue";
export default {
  name: "About",
  components: {
    Card,
  },
  data() {
    return {
      skills,
      tools,
    };
  },
};
</script>
